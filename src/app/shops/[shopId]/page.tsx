'use client';

import { Heart } from './styles';
import { Icon } from '@iconify/react';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import Header from '@/components/Into/Shops/Profile/Header';
import ShopProfile from '@/components/Into/Shops/Profile/ShopProfile';
import { shops } from '@/components/Into/data';
import FavoriteEffect from '@/components/Into/Shops/Profile/FavoriteEffect';
import CartBar from '@/components/Into/Shops/ShoppingCart/CartBar';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import ModalComponent from '@/components/shared/Modal/ModalComponent';
import { Label } from "@/components/shared/Modal/styles";
import { Loading } from '@/components/Loading';

const ShopPage = () => {
    const { shopId } = useParams();
    const [isLiked, setIsLiked] = useState(false);
    const [showEffect, setShowEffect] = useState(false);
    const [shop, setShop] = useState<any>();
    const [loading, setLoading] = useState(false);

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
        setShowEffect(true);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const item = shops.find(s => s.id.toString() === shopId)
        if (item) setShop(item)
    }, []);

    useEffect(() => {
        if (showEffect) {
            const timer = setTimeout(() => setShowEffect(false), 600);
            return () => clearTimeout(timer);
        }
    }, [showEffect]);

    return (
        <>
            {loading && <Loading />}
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

            {shop && <ShopProfile setLoading={(value) => setLoading(value)} shop={shop} />}

            <CartBar />

            <FavoriteEffect visible={showEffect} like={isLiked} />
        </>
    );
};

export default ShopPage;
