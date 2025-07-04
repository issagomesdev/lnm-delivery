'use client';

import { Container, Heart } from './styles';
import { Icon } from '@iconify/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/Into/Shops/Profile/Header';
import ShopProfile from '@/components/Into/Shops/Profile/ShopProfile';
import { shops } from '@/components/Into/Shops/data';
import FavoriteEffect from '@/components/Into/Shops/Profile/FavoriteEffect';

const ShopPage = () => {
    const params = useParams();
    const id = params?.id as string;

    const [isLiked, setIsLiked] = useState(false);
    const [showEffect, setShowEffect] = useState(false);
    const [shop, setShop] = useState<any>();

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
        setShowEffect(true);
    };

    useEffect(() => {
        const item = shops.find(s => s.id.toString() === id)
        if(item) setShop(item)
    }, []);

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
                        width="35"
                        color="#fff"
                        style={{ cursor: 'pointer' }}
                    />
                </Heart>
            </Header>
            
            {shop && <ShopProfile shop={shop}/>}

            <FavoriteEffect visible={showEffect} like={isLiked} />
        </Container>
    );
};

export default ShopPage;
