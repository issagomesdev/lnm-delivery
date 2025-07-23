
"use client";

import { categories, groupOptions } from "@/components/Into/data";
import Header from "@/components/Into/Shops/Profile/Header";
import ModalComponent from "@/components/shared/Modal/ModalComponent";
import { Label } from "@/components/shared/Modal/styles";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Content, ItemImage, Section, ItemInfo, Description, Price, OptionsLabel, OptionHeader, OptionQuantity, OptionGroup, OptionItem, ItemName, QuantityControls, QuantityButton, TextArea, Footer, AddButton, TotalPrice, AddItem } from "./styles";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";

const Checkout = () => {
    const [item, setItem] = useState<any>();
    const [category, setCategory] = useState<any>();
    const [groupOption, setGroupOption] = useState<any>();
    const [selectedOptions, setSelectedOptions] = useState<any>({});
    const [quantity, setQuantity] = useState(1);
    const [observations, setObservations] = useState<string>('');
    const [requiredAlert, setRequiredAlert] = useState(false);
    const [addItemAnimation, setAddItemAnimation] = useState(false);
    const searchParams = useSearchParams();
    const categoryID = searchParams?.get("categoryID");
    const id = searchParams?.get("id");
    const params = useParams();
    const shopId = params.id || '';
    const { addItem, cart } = useShoppingCart();
    const router = useRouter();

    useEffect(() => {
        const findCategory = categories.find((cat: any) => cat.id == categoryID);
        if (findCategory && findCategory.name === "Pizza") {
            const items = id?.split(",").map(Number) || [];
            const findItems = items.flatMap((id: number) =>
                findCategory?.menu.filter((item: any) => item.id === id)
            ) || [];

            if (findItems) {
                const calculatePrice: number = 2;
                const prices = findItems.map((item: any) => item.price);

                const newItem = {
                    name: findItems.map((item) => item.name).join(" / "),
                    photo: findItems[0].photo,
                    description: `Você está pedindo uma combinação de pizza de ${items.length} ${items.length > 1 ? 'sabores' : 'sabor'}.`,
                    price: calculatePrice === 0 ? Math.max(...prices) : calculatePrice === 1 ? Math.max(...prices) : prices.reduce((acc, val) => acc + val, 0) / prices.length
                }
                setItem(newItem)
            }
        } else {
            const findItem = findCategory?.menu.find((i: any) => i.id == id);
            setItem(findItem)
        }
        const findGroupOption = groupOptions.find((g: any) => g.id == findCategory?.IDGroup);
        setCategory(findCategory);
        setGroupOption(findGroupOption || []);
    }, [])


    const handleSelect = (group: any, option: any) => {

        setSelectedOptions((prev: any) => {
            const updated = { ...prev };

            if (!updated[group.id]) {
                updated[group.id] = {};
            } else {
                updated[group.id] = { ...updated[group.id] };
            }
            const maxValue = groupOption.groups.find((g: any) => g.id === group.id)?.max;

            if (updated[group.id][option.id]) {
                delete updated[group.id][option.id];
            } else {
                if (countTotalSelectedItems(group.id) >= maxValue) {
                    return updated;
                }

                updated[group.id][option.id] = { value: option.value, quantity: 1, name: option.name, groupName: group.name };
            }

            return updated;
        });

    };

    const handleAdjustQuantity = (group: any, option: any, value: number) => {
        setSelectedOptions((prev: any) => {
            const updated = { ...prev };

            if (!updated[group.id]) {
                updated[group.id] = {};
            } else {
                updated[group.id] = { ...updated[group.id] };
            }

            const current = updated[group.id][option.id];
            const maxValue = groupOption.groups.find((g: any) => g.id === group.id)?.max;

            if (value === -1 && !current || value === 1 && countTotalSelectedItems(group.id) >= maxValue) {
                return updated;
            } else if (current) {

                const newQty = current.quantity + value;

                if (newQty < 1) {
                    delete updated[group.id][option.id];
                } else {
                    updated[group.id][option.id] = {
                        ...current,
                        quantity: newQty,
                        name: option.name,
                        groupName: group.name
                    };
                }
            } else {
                updated[group.id][option.id] = {
                    value: option.value,
                    quantity: 1,
                    name: option.name,
                    groupName: group.name
                };
            }

            return updated;
        });
    };

    const countTotalSelectedItems = (id: number): number => {
        const groupOptions = selectedOptions[id.toString()];
        if (!groupOptions) return 0;

        return Object.values(groupOptions).reduce((sum: number, option: any) => {
            return sum + (option.quantity || 0);
        }, 0);
    };

    const calculateSelectedOptionsTotal = () => {
        let total = 0;

        Object.values(selectedOptions).forEach((group: any) => {
            Object.values(group).forEach((option: any) => {
                total += option.value * option.quantity;
            });
        });

        return total;
    };

    const hasUnfulfilledRequiredGroups = (): boolean => {
        const requiredGroups = groupOption.groups.filter((group: any) => group.required || group.min > 0);

        console.log(requiredGroups, groupOption)
        if (requiredGroups.length === 0) return false;

        return requiredGroups.some((group: any) => {
            const selectedCount = countTotalSelectedItems(group.id);

            return selectedCount < group.min;
        });
    };

    const totalPrice = (item?.price || 0) * quantity + calculateSelectedOptionsTotal();

    const addProductToCart = () => {
        if (hasUnfulfilledRequiredGroups()) {
            setRequiredAlert(true);
            return;
        }

        setAddItemAnimation(true)

        addItem({
            ...item,
            id: cart.length + 1,
            itemId: item.id,
            category: category.name,
            quantity: quantity,
            options: selectedOptions,
            observations: observations,
        });


        setTimeout(() => {
            if (category.name === "Pizza") {
                router.push(`/shops/${shopId}`);
            } else {
                router.push(`/shops/${shopId}/cardapio?category=${encodeURIComponent(category.name)}`);
            }
        }, 1000)
    }

    if (!item) return <h1>carregando...</h1>

    return (
        <>
            <Header>
                <h2 className="category">ADICIONANDO PRODUTO</h2>
            </Header>

            {addItemAnimation && <AddItem>
                <img src={`/images/addItem.gif`} alt={'addItemInCart'} />
            </AddItem>}

            <Container>

                {item && item.photo && <ItemImage>
                    <img src={item.photo} alt={item.name} />
                </ItemImage>}

                <Content>
                    <Section>
                        <ItemInfo>
                            <h3>{item?.name}</h3>
                            <Description>{item.description}</Description>
                        </ItemInfo>
                        <Price>R$ {item.price?.toFixed(2)}</Price>
                    </Section>

                    <OptionsLabel>Opcionais</OptionsLabel>

                    {groupOption.groups.map((group: any) => {
                        const isQuantity = group.min >= 2;
                        return (
                            <Section key={group.id}>
                                <OptionHeader>
                                    <h4>{group.name}</h4>
                                    <OptionQuantity>
                                        {group.min > 0 && <span>Mínimo: {group.min}</span>}
                                        <span>Máximo: {countTotalSelectedItems(group.id)}/{group.max}</span>
                                    </OptionQuantity>
                                    {group.required && <span className='required'>Obrigatório</span>}
                                </OptionHeader>

                                <OptionGroup>
                                    {group.options.map((opt: any) => (
                                        <OptionItem key={opt.id}>
                                            <ItemName>
                                                {opt.name}
                                                {opt.value > 0 && <span> + R$ ${opt.value.toFixed(2)}</span>}
                                            </ItemName>

                                            {isQuantity ? (
                                                <QuantityControls>
                                                    <QuantityButton onClick={() => handleAdjustQuantity(group, opt, -1)}>-</QuantityButton>
                                                    <span>{selectedOptions[group.id]?.[opt.id]?.quantity || 0}</span>
                                                    <QuantityButton onClick={() => handleAdjustQuantity(group, opt, 1)}>+</QuantityButton>
                                                </QuantityControls>
                                            ) : (
                                                <input
                                                    type="checkbox"
                                                    checked={selectedOptions[group.id]?.[opt.id] !== undefined}
                                                    onChange={() => handleSelect(group, opt)}
                                                />
                                            )}
                                        </OptionItem>
                                    ))}
                                </OptionGroup>
                            </Section>
                        );
                    })}

                    <Section>
                        <TextArea>
                            <strong>Adicionar observação?</strong>
                            <textarea
                                placeholder="Clique aqui"
                                value={observations}
                                onChange={(e) => setObservations(e.target.value)} />
                        </TextArea>
                    </Section>
                </Content>
            </Container>
            <Footer>
                <QuantityControls>
                    <QuantityButton onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</QuantityButton>
                    <span>{quantity}</span>
                    <QuantityButton onClick={() => setQuantity(quantity + 1)}>+</QuantityButton>
                </QuantityControls>

                <AddButton onClick={addProductToCart} active={!hasUnfulfilledRequiredGroups()}>
                    Adicionar <TotalPrice>R$ {totalPrice.toFixed(2)}</TotalPrice>
                </AddButton>
            </Footer>

            <ModalComponent
                isOpen={requiredAlert}
                onConfirm={() => setRequiredAlert(false)}
                onConfirmText={"Ok, entendi"}
                title={'Opsss!'}
            >
                <Label>Antes de adicionar o produto ao carrinho, você deve selecionar as opções obrigatórias.</Label>
            </ModalComponent>

        </>
    );
};

export default Checkout;
