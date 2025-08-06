
import { Title, Overlay, CloseXButton } from '@/components/shared/Modal/styles';
import { Icon } from '@iconify/react';
import { categories, groupOptions } from "@/components/Into/data";
import { useEffect, useRef, useState } from 'react';
import { FooterContent, ItemImage } from './styles';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import { useRouter } from 'next/navigation';
import { QuantityControls } from '@/app/meus-pedidos/carrinho/styles';
import { ModalBox, Container, Content, Section, ItemInfo, Description, Price, OptionsLabel, OptionHeader, OptionQuantity, OptionGroup, OptionItem, ItemName, QuantityButton, TextArea, Footer, AddButton, TotalPrice, AddItem } from "@/components/Into/Shops/Checkout/styles";
import { Label } from "@/components/shared/Modal/styles";
import ModalComponent from '@/components/shared/Modal/ModalComponent';
import { Loading } from '@/components/Loading';

export const Checkout = ({ isOpen, onClose, selected, shopId }: { isOpen: boolean; onClose: (product?: any) => void; selected: any, shopId: string }) => {

    const [category, setCategory] = useState<any>();
    const [groupOption, setGroupOption] = useState<any>();
    const [groupRequerid, setGroupRequerid] = useState<number[]>([]);
    const [item, setItem] = useState<any>();
    const [selectedOptions, setSelectedOptions] = useState<any>({});
    const [quantity, setQuantity] = useState(1);
    const [observations, setObservations] = useState<string>('');
    const [requiredAlert, setRequiredAlert] = useState(false);
    const [addItemAnimation, setAddItemAnimation] = useState(false);
    const { addItem, cart } = useShoppingCart();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const findCategory = categories.find((cat: any) => cat.id == selected?.categoryID);

        if (findCategory && findCategory.name.includes("Pizza")) {
            const findItems = selected.flavors.map((s: any) => {

                const itemCategory = categories.find(c => c.id === s.categoryId);
                const item = itemCategory?.menu.find((item: any) => item.idOption === s.idOption)

                return item;

            }) || [];

            if (findItems) {
                const calculatePrice: number = 2;
                const prices = findItems.map((item: any) => item.price);

                const newItem = {
                    name: findItems.map((item: any) => item.name).join(" / "),
                    photo: findItems[0].photo,
                    description: `Você está pedindo uma combinação de pizza de ${selected.flavors.length} ${selected.flavors.length > 1 ? 'sabores' : 'sabor'}.`,
                    price: calculatePrice === 0 ? Math.max(...prices) : calculatePrice === 1 ? Math.max(...prices) : prices.reduce((acc: any, val: any) => acc + val, 0) / prices.length
                }

                setItem(newItem)
            }
        } else {
            const findItem = findCategory?.menu.find((i: any) => i.id == selected?.id);
            setItem(findItem)
        }
        const findGroupOption = groupOptions.find((g: any) => g.id == findCategory?.IDGroup);
        setCategory(findCategory)
        setGroupOption(findGroupOption || []);
    }, [selected])


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

        if (groupRequerid.includes(group.id)) {
            setGroupRequerid(prev => prev.filter(id => id !== group.id));
        }

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

            const total = Object.values(updated[group.id])
                .reduce((acc: number, item: any) => acc + (item?.quantity || 0), 0);

            if (value === 1 && total >= maxValue) return prev;

            if (value === -1 && !current) return prev;

            if (current) {
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

    const hasUnfulfilledRequiredGroups = () => {
        const requiredGroups = groupOption.groups.filter((group: any) => group.required || group.min > 0);
        if (requiredGroups.length === 0) return false;

        return requiredGroups
            .filter((group: any) => {
                const selectedCount = countTotalSelectedItems(group.id);
                return selectedCount < group.min;
            })
            .map((group: any) => group.id);
    };

    const totalPrice = (item?.price || 0) * quantity + calculateSelectedOptionsTotal();

    const addProductToCart = () => {
        const groups = hasUnfulfilledRequiredGroups();
        if (groups.length > 0) {
            setGroupRequerid(groups)
            setRequiredAlert(true);
            return;
        }

        setAddItemAnimation(true)


        addItem({
            ...item,
            id: cart.length + 1,
            itemId: item.id ?? null,
            category: category.name,
            quantity: quantity,
            options: selectedOptions,
            observations: observations,
        });


        setTimeout(() => {
            if (category.name.includes("Pizza")) {
                setLoading(true)
                router.push(`/shops/${shopId}?CouponAlert=false`);
            } else {
                setAddItemAnimation(false);
                setQuantity(1);
                setSelectedOptions({});
                setObservations('');
                setGroupRequerid([]);
                onClose()
            }
        }, 1500)
    }

    const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const startHold = (group: any, option: any, value: number) => {
        stopHold();

        holdTimeoutRef.current = setTimeout(() => {
            holdIntervalRef.current = setInterval(() => {
                handleAdjustQuantity(group, option, value);

                if (groupRequerid.includes(group.id)) {
                    setGroupRequerid(prev => prev.filter(id => id !== group.id));
                }
            }, 120);
        }, 400);
    };


    const stopHold = () => {
        if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
        if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    };

    const handleClick = (group: any, option: any, value: number) => {
        handleAdjustQuantity(group, option, value);

        if (groupRequerid.includes(group.id)) {
            setGroupRequerid(prev => prev.filter(id => id !== group.id));
        }
    };

    if (!isOpen || !item) return null;

    return (
        <Overlay>
            { loading && <Loading/> }
            <ModalBox>
                <CloseXButton>
                    <Icon icon="material-symbols:close" color="#fff" width="24" onClick={() => {
                        setAddItemAnimation(false);
                        setQuantity(1);
                        setSelectedOptions({});
                        setObservations('');
                        setGroupRequerid([]);
                        onClose()
                    }} />
                </CloseXButton>

                <Title style={{ margin: 0 }}>ADICIONANDO PRODUTO</Title>

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
                                    <OptionHeader requerid={groupRequerid.includes(group.id)}>
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
                                                    {opt.value > 0 && <span> + R$ {opt.value.toFixed(2)}</span>}
                                                </ItemName>

                                                {isQuantity ? (
                                                    <QuantityControls>
                                                        <QuantityButton onClick={() => handleClick(group, opt, -1)}
                                                            onMouseDown={() => startHold(group, opt, -1)}
                                                            onTouchStart={() => startHold(group, opt, -1)}
                                                            onMouseUp={stopHold}
                                                            onMouseLeave={stopHold}
                                                            onTouchEnd={stopHold}
                                                        >
                                                            -
                                                        </QuantityButton>

                                                        <span>{selectedOptions[group.id]?.[opt.id]?.quantity || 0}</span>

                                                        <QuantityButton onClick={() => handleClick(group, opt, 1)}
                                                            onMouseDown={() => startHold(group, opt, 1)}
                                                            onTouchStart={() => startHold(group, opt, 1)}
                                                            onMouseUp={stopHold}
                                                            onMouseLeave={stopHold}
                                                            onTouchEnd={stopHold}
                                                        >
                                                            +
                                                        </QuantityButton>

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
                    <FooterContent>
                        <QuantityControls withBorder>

                            <QuantityButton onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</QuantityButton>
                            <span>{quantity}</span>
                            <QuantityButton onClick={() => setQuantity(quantity + 1)}>+</QuantityButton>
                        </QuantityControls>

                        <AddButton onClick={addProductToCart} active={hasUnfulfilledRequiredGroups().length < 1}>
                            Adicionar <TotalPrice>R$ {totalPrice.toFixed(2)}</TotalPrice>
                        </AddButton>
                    </FooterContent>
                </Footer>

                <ModalComponent
                    isOpen={requiredAlert}
                    onConfirm={() => setRequiredAlert(false)}
                    onConfirmText={"Ok, entendi"}
                    title={'Opsss!'}
                >
                    <Label>Antes de adicionar o produto ao carrinho, você deve selecionar as opções obrigatórias.</Label>
                </ModalComponent>
            </ModalBox>
        </Overlay>
    )
}