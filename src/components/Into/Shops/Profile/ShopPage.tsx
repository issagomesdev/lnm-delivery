'use client';

import { Heart } from './styles';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import Header from '@/components/Into/Shops/Profile/Header';
import ShopProfile from '@/components/Into/Shops/Profile/ShopProfile';
import { shops } from '@/components/Into/data';
import FavoriteEffect from '@/components/Into/Shops/Profile/FavoriteEffect';
import CartBar from '@/components/Into/Shops/ShoppingCart/CartBar';
import { Overlay, ModalBox } from '@/components/shared/Modal/styles';
import { useShopPage } from '@/contexts/ShopPageContext';

const ShopPage = ({ setLoading }: { setLoading: (value: boolean) => void }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [showEffect, setShowEffect] = useState(false);
    const [shop, setShop] = useState<any>();
    const { shopId } = useShopPage();

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
        setShowEffect(true);
    };

    useEffect(() => {
        const item = shops.find(s => s.id.toString() == shopId)
        if (item) {
            setShop(item)
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (showEffect) {
            const timer = setTimeout(() => setShowEffect(false), 600);
            return () => clearTimeout(timer);
        }
    }, [showEffect]);

    return (
        <Overlay>
            <ModalBox style={{ height: '100%', width: '100%', maxWidth: '100%', borderRadius: 0, overflow: 'scroll', padding: 0 }}>
                <Header setLoading={(value: boolean) => setLoading(value)}>
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

                <CartBar setLoading={(value: boolean) => setLoading(value)} />

                <FavoriteEffect visible={showEffect} like={isLiked} />
            </ModalBox>
        </Overlay>
    );
};

export default ShopPage;
