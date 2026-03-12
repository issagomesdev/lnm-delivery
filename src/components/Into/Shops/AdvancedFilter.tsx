'use client';

import React, { useEffect, useState } from 'react';
import { Title, Overlay, ModalBox, CloseXButton } from '@/components/shared/Modal/styles';
import {
    SectionTitle,
    CheckboxWrapper,
    TagList,
    TagItem,
    FooterButton,
    FilterSections,
    Section
} from './styles';
import { Icon } from '@iconify/react';
import { categories, orderOptions, paymentMethods } from '../data';

interface AdvancedFilterProps {
    isOpen: boolean;
    onClose: () => void;
    values: [string | null, number[], string[]];
    onApply: (order: string | null, categories: number[], payments: string[]) => void;
}

export default function AdvancedFilter({
    isOpen,
    onClose,
    values,
    onApply
}: AdvancedFilterProps) {

    const [localOrder, setLocalOrder] = useState<string | null>(null);
    const [localCategories, setLocalCategories] = useState<number[]>([]);
    const [localPayments, setLocalPayments] = useState<string[]>([]);

    useEffect(() => {
        if (isOpen && values) {
            const [order, categories, payments] = values;
            setLocalOrder(order);
            setLocalCategories(categories);
            setLocalPayments(payments);
        }
    }, [isOpen, values]);

    if (!isOpen) return null;

    const closeModal = () => {
        setLocalOrder(null)
        setLocalCategories([])
        setLocalPayments([])
        onClose()
    }

    const togglePayment = (payment: string) => {
        setLocalPayments(prev =>
            prev.includes(payment)
                ? prev.filter(p => p !== payment)
                : [...prev, payment]
        );
    };

    const toggleCategories = (category: number) => {
        setLocalCategories(prev =>
            prev.includes(category)
                ? prev.filter(p => p !== category)
                : [...prev, category]
        );
    };

    return (
        <Overlay>
            <ModalBox width={700} style={{ height: '90%', overflow: 'auto hidden', padding: 0 }}>
                <CloseXButton>
                    <Icon icon="material-symbols:close" color="#fff" width="24" onClick={closeModal} />
                </CloseXButton>

                <Title>Filtros</Title>

                <FilterSections>
                    <Section>
                        <SectionTitle>Ordenar por:</SectionTitle>
                        {orderOptions.map(option => (
                            <CheckboxWrapper key={option.id}>
                                <label>{option.label}</label>
                                <input
                                    type="radio"
                                    name="order"
                                    checked={localOrder === option.label}
                                    onChange={() => setLocalOrder(option.label)}
                                />
                            </CheckboxWrapper>
                        ))}
                    </Section>

                    <Section>
                        <SectionTitle>Categoria</SectionTitle>
                        <TagList>
                            {categories.map(cat => {
                                const selected = localCategories.includes(cat.id);
                                return (
                                    <TagItem
                                        key={cat.id}
                                        active={selected}
                                        onClick={() => toggleCategories(cat.id)}
                                    >
                                        {cat.name}
                                    </TagItem>
                                )
                            })}
                        </TagList>
                    </Section>

                    <Section style={{ marginBottom: '3rem' }}>
                        <SectionTitle>Forma de pagamento</SectionTitle>
                        <TagList>
                            {paymentMethods.map(method => {
                                const selected = localPayments.includes(method);
                                return (
                                    <TagItem
                                        key={method}
                                        active={selected}
                                        onClick={() => togglePayment(method)}
                                    >
                                        {method}
                                    </TagItem>
                                )
                            })}
                        </TagList>
                    </Section>
                </FilterSections>

                <FooterButton onClick={() => onApply(localOrder, localCategories, localPayments)}>
                    <Icon icon="mdi:check-bold" width="18" /> Filtrar resultados
                </FooterButton>
            </ModalBox>
        </Overlay>
    );
}

