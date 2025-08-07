'use client';

import { Heart } from './styles';
import { Icon } from '@iconify/react';
import { useParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Header from '@/components/Into/Shops/Profile/Header';
import ShopProfile from '@/components/Into/Shops/Profile/ShopProfile';
import { shops } from '@/components/Into/data';
import FavoriteEffect from '@/components/Into/Shops/Profile/FavoriteEffect';
import CartBar from '@/components/Into/Shops/ShoppingCart/CartBar';
import { useCustomBackAction } from '@/hooks/useCustomBackAction';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import ModalComponent from '@/components/shared/Modal/ModalComponent';
import { Label } from "@/components/shared/Modal/styles";
import { Loading } from '@/components/Loading';

const ShopPage = () => {
    const { shopId } = useParams();
    const [isLiked, setIsLiked] = useState(false);
    const [showEffect, setShowEffect] = useState(false);
    const [shop, setShop] = useState<any>();
    const { cart, clearCart } = useShoppingCart();
    const [storeExitAlert, setStoreExitAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

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

    useCustomBackAction(
        useCallback(() => {
            setLoading(true);
            if (cart.length > 0) {
                setStoreExitAlert(true);
                setLoading(false);
                return true;
            }
            setLoading(false);

            return "/shops";
        }, [cart])
    );

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

            <ModalComponent
                isOpen={storeExitAlert}
                title={"Atenção"}
                onConfirm={() => {
                    setLoading(true)
                    clearCart();
                    router.push(`/shops`);
                }}
                onClose={() => {
                    setStoreExitAlert(false)
                    window.history.pushState(null, '', window.location.pathname);
                }}
                onConfirmText={"Sim"}
                onCloseText={"Não"}
            >
                <Label>Ao sair da loja os itens adicionados serão excluídos. Tem certeza que deseja sair?</Label>
            </ModalComponent>

            <FavoriteEffect visible={showEffect} like={isLiked} />
        </>
    );
};

export default ShopPage;
