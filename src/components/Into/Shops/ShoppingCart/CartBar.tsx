'use client';

import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import { Bar, Label, Total } from './styles';
import { useState } from 'react';
import { Loading } from '@/components/Loading';


export default function CartBar() {
    const { cart } = useShoppingCart();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const total = cart.reduce((sum, item) => {
        const extras = Object.values(item.options || {}).flatMap((group: any) =>
            Object.values(group).map((opt: any) => opt.value * opt.quantity)
        );
        const extrasTotal = extras.reduce((a, b) => a + b, 0);
        return sum + (item.price * item.quantity) + extrasTotal;
    }, 0);

    if (cart.length === 0) return null;

    return (
        <Bar onClick={() => {
            setLoading(true);
            router.push('/meus-pedidos/carrinho')
        }}>
            {loading && <Loading />}
            <Label>
                <span>{cart.length}</span>
                <img alt='sack-icon' src={'/images/sack-icon.png'} />
                Ver sacola
            </Label>
            <Total>R$ {total.toFixed(2)}</Total>
        </Bar>
    );
}
