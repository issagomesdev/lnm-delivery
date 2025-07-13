
import { Title, Overlay, ModalBox, Content, CloseXButton } from '@/components/shared/Modal/styles';
import { Icon } from '@iconify/react';
import { categories } from "@/components/Into/Shops/data";
import { useEffect, useState } from 'react';
import { ItemImage, Description, Price, Section, OptionGroup, OptionItem, QuantityControls, TextArea, Footer, AddButton, QuantityButton, TotalPrice, ItemInfo, OptionsLabel, OptionHeader, OptionQuantity, ItemName } from './styles';
import { Label } from '@/components/shared/Modal/styles';
import { groupOptions } from '@/components/Into/Shops/data';
import ModalComponent from '@/components/shared/Modal/ModalComponent';

export const Checkout = ({ isOpen, onClose, selected }: { isOpen: boolean; onClose: (product?: any) => void; selected: any }) => {

    const [item, setItem] = useState<any>();
    const [category, setCategory] = useState<any>();
    const [groupOption, setGroupOption] = useState<any>();
    const [selectedOptions, setSelectedOptions] = useState<any>({});
    const [quantity, setQuantity] = useState(1);
    const [observations, setObservations] = useState('');
    const [requiredAlert, setRequiredAlert] = useState(false);

    useEffect(() => {
        const findCategory = categories.find((cat: any) => cat.id == selected.categoryID);
        const findItem = findCategory?.menu.find((i: any) => i.id == selected.id);
        const findGroupOption = groupOptions.find((g: any) => g.id == findCategory?.IDGroup);
        setCategory(findCategory);
        setItem(findItem)
        setGroupOption(findGroupOption || []);
    }, [selected])

    if (!isOpen || !item) return null;

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

        const product = {
            ...item,
            itemId: item.id,
            category: category.name,
            quantity: quantity,
            options: selectedOptions,
            observations: observations,
        };

        setSelectedOptions({});
        setQuantity(1);
        setObservations('');
        onClose(product);
    }

    return (
        <Overlay>
            <ModalBox style={{ height: '95%', overflow: 'auto hidden', padding: 0 }}>
                <CloseXButton>
                    <Icon icon="material-symbols:close" color="#fff" width="24" onClick={() => { setSelectedOptions({}); onClose() }} />
                </CloseXButton>

                <Title style={{ margin: 0 }}>ADICIONANDO PRODUTO</Title>

                <Content style={{ height: '83%', margin: 0 }}>

                    {item && item.photo && <ItemImage>
                        <img src={item.photo} alt={item.name} />
                    </ItemImage>}

                    <Section>
                        <ItemInfo>
                            <h3>{item.name}</h3>
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
                        <TextArea
                            placeholder="Adicionar observações..."
                            value={observations}
                            onChange={(e) => setObservations(e.target.value)}
                        />
                    </Section>
                </Content>
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
            </ModalBox>

            <ModalComponent
                isOpen={requiredAlert}
                onConfirm={() => setRequiredAlert(false)}
                onConfirmText={"Ok, entendi"}
                title={'Opsss!'}
                width={360}
            >
                <Label>Antes de adicionar o produto ao carrinho, você deve selecionar as opções obrigatórias.</Label>
            </ModalComponent>

        </Overlay>
    )
}