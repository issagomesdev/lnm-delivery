'use client';

import Header from "@/components/Into/Shops/Profile/Header";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { Icon } from "@iconify/react";
import { Actions, CategoryName, SubTotal, Delete, DetailsLink, ItemCard, ItemName, LeftButton, Price, QtyBtn, QuantityControls, RightButton, TotalFooter, Wrapper, ItemsCard } from "./styles";
import { useRouter } from "next/navigation";
import { ItemDetails } from "@/components/Into/Shops/ShoppingCart/ItemDetails";
import { useEffect, useState } from "react";
import { DeliveryMethods } from "@/components/Into/Shops/ShoppingCart/DeliveryMethods";
import { PaymentMethods } from "@/components/Into/Shops/ShoppingCart/PaymentMethods";
import { useCustomBackAction } from '@/hooks/useCustomBackAction';

const Carrinho = () => {
    const { cart, removeItem, updateItemQuantity, clearCart } = useShoppingCart();
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [steps, setSteps] = useState<1 | 2 | null>(null);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
    const [deliveryData, setDeliveryData] = useState<any>({});
    const [paymentData, setPaymentData] = useState<any>({});
    const router = useRouter();
    console.log(cart)
    const handleIncrease = (id: number) => {
        updateItemQuantity(id, 1);
    };

    const handleDecrease = (id: number) => {
        updateItemQuantity(id, -1);
    };

    const total = cart.reduce((acc, item) => {
        const extras = Object.values(item.options || {}).flatMap((group: any) =>
            Object.values(group).map((opt: any) => opt.value * opt.quantity)
        );
        const extrasTotal = extras.reduce((a, b) => a + b, 0);
        return acc + item.price * item.quantity + extrasTotal;
    }, 0);

    useEffect(() => {
        if (cart.length < 1 && steps === null) {
            router.back();
        }
    }, [cart]);

    useCustomBackAction(() => {
        if (steps === 1) {
            setSteps(null)
            return true;
        } else if (steps === 2) {
            setSteps(1)
        }

        return false;
    });

    return (
        <>
            <Header>
                <h2 className="category">MEU PEDIDO</h2>
            </Header>

            <Wrapper>
                <ItemsCard>
                {cart.map((item) => (
                    <ItemCard key={item.id}>
                        <CategoryName>{item.category}</CategoryName>
                        <ItemName>{item.name}</ItemName>
                        <DetailsLink onClick={() => {
                            setDetailsIsOpen(true);
                            setSelectedItemId(item.id);
                        }}>Detalhes deste item</DetailsLink>
                        <Price><strong>Valor:</strong> R$ {item.price.toFixed(2)}</Price>

                        <Actions>
                            <Delete onClick={() => removeItem(item.id)}>
                                <Icon icon="material-symbols:close" width={20} />
                            </Delete>

                            <QuantityControls>
                                <QtyBtn onClick={() => handleDecrease(item.id)}>-</QtyBtn>
                                <span>{item.quantity}</span>
                                <QtyBtn onClick={() => handleIncrease(item.id)}>+</QtyBtn>
                            </QuantityControls>
                        </Actions>
                    </ItemCard>
                ))}
                </ItemsCard>

                <TotalFooter>
                    <LeftButton onClick={() => router.back()}>CONTINUAR COMPRANDO</LeftButton>
                    <SubTotal>
                        <strong>Subtotal:</strong>
                        <strong>R$ {total.toFixed(2)}</strong>
                    </SubTotal>
                    <RightButton onClick={() => setSteps(1)}>
                        FINALIZAR
                    </RightButton>
                </TotalFooter>
            </Wrapper>

            <ItemDetails isOpen={detailsIsOpen} onClose={() => {
                setDetailsIsOpen(false);
                setSelectedItemId(null);
            }} id={selectedItemId} />

            <DeliveryMethods
                isOpen={steps === 1}
                onClose={(step: 2 | null) => setSteps(step)}
                productsTotal={total}
                handleData={(data: any) => setDeliveryData(data)} />

            <PaymentMethods
                isOpen={steps === 2}
                onClose={(step: 1 | null) => setSteps(step)}
                productsTotal={total}
                handleData={(data: any) => {
                    setPaymentData(data);
                    clearCart();
                    setTimeout(() => {
                        router.push(`/meus-pedidos/rastreio/21777179?step=pendent&date=26/05/2025%2016:10`);
                    }, 100);
                }} />
        </>
    );
};

export default Carrinho;
