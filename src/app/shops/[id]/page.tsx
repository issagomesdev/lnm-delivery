'use client';

import { Container, Heart } from './styles';
import { Icon } from '@iconify/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/Into/Shops/Shop/Header';
import ShopProfile from '@/components/Into/Shops/Shop/ShopProfile';

import FavoriteEffect from '@/components/Into/Shops/Shop/FavoriteEffect';
const ShopPage = () => {
    const params = useParams();
    const id = params?.id as string;

    const [isLiked, setIsLiked] = useState(false);
    const [showEffect, setShowEffect] = useState(false);

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
        setShowEffect(true);
    };

    const shop = {
        id: 1,
        "name": "Loja Exemplo 1",
        "image": "/images/default-store.png",
        "cover": "/images/default-store-banner.jpg",
        "category": {
            "id": 1,
            "name": "Mercado"
        },
        "deliveryTime": 30,
        "deliveryFee": 0,
        "openingTime": "2025-07-02T13:00:00.042Z",
        "closingTime": "2025-07-02T18:00:00.042Z",
        "fav": true,
        "rating": 3.6794230920617856,
        "offer": "frete grátis",
        "coupon": {
            "name": "3% OFF",
            "description": "3% desc. em produto",
            "rule": "VÁLIDO PARA COMBOS HAMBÚRGUER + FRITAS + REFRI LATA",
            "minimum_value": 0
        }
    }

    useEffect(() => {
        if (showEffect) {
            const timer = setTimeout(() => setShowEffect(false), 600);
            return () => clearTimeout(timer);
        }
    }, [showEffect]);

    return (
        <Container>
            <Header>
                <Heart onClick={toggleLike}>
                    <Icon
                        icon={isLiked ? 'iconoir:heart-solid' : 'iconoir:heart'}
                        width="45"
                        color="#fff"
                        style={{ cursor: 'pointer' }}
                    />
                </Heart>
            </Header>
            
            <ShopProfile shop={shop} />

            <FavoriteEffect visible={showEffect} like={isLiked} />
        </Container>
    );
};

export default ShopPage;
