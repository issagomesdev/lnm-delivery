'use client';

import Header from "@/components/Into/Shops/Profile/Header";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { Icon } from "@iconify/react";
import { Actions, CategoryName, SubTotal, Delete, DetailsLink, ItemCard, ItemName, LeftButton, Price, QtyBtn, QuantityControls, RightButton, TotalFooter, Wrapper } from "./styles";
import { useRouter } from "next/navigation";
import { ItemDetails } from "@/components/Into/Shops/ShoppingCart/ItemDetails";
import { useState } from "react";

const Carrinho = () => {
    const { cart, removeItem, updateItemQuantity } = useShoppingCart();
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
    const router = useRouter();

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

    return (
        <>
            <Header>
                <h2 className="category">MEU PEDIDO</h2>
            </Header>

            <Wrapper>
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

                <TotalFooter>
                    <LeftButton onClick={() => router.back()}>CONTINUAR COMPRANDO</LeftButton>
                    <SubTotal>
                        <strong>Subtotal:</strong>
                        <strong>R$ {total.toFixed(2)}</strong>
                    </SubTotal>
                    <RightButton>
                        FINALIZAR
                    </RightButton>
                </TotalFooter>
            </Wrapper>

            <ItemDetails isOpen={detailsIsOpen} onClose={() => {
                setDetailsIsOpen(false);
                setSelectedItemId(null);
            }} id={selectedItemId}/>
        </>
    );
};

export default Carrinho;
