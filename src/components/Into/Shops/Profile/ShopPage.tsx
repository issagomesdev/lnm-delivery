'use client';

import {
    Heart,
    Wrapper,
    Cover,
    ProfileSection,
    Profile,
    InfoRow,
    RatingBadge,
    ShopName,
    QuickInfoItem,
    ItemIcon,
    CategoryItem,
    CategoriesContainer
} from './styles';
import { Icon } from '@iconify/react';
import { useCallback, useEffect, useState } from 'react';
import Header from '@/components/Into/Shops/Profile/Header';
import { shops } from '@/components/Into/data';
import FavoriteEffect from '@/components/Into/Shops/Profile/FavoriteEffect';
import CartBar from '@/components/Into/Shops/ShoppingCart/CartBar';
import { Overlay, ModalBox } from '@/components/shared/Modal/styles';
import { useShopPage } from '@/contexts/ShopPageContext';
import { useTheme } from 'styled-components';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { shopCategories } from '../../data';
import { ConfirmButton, Label } from '@/components/shared/Modal/styles';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import Reviews from './Reviews';
import DeliveryFees from './DeliveryFees';
import ModalComponent from '@/components/shared/Modal/ModalComponent';
import Informations from './Informations';

const ShopPage = ({
    setLoading,
    timeInfoIsOpen,
    setTimeInfoIsOpen,
    reviewsIsOpen,
    setReviewsIsOpen,
    feesIsOpen,
    setFeesIsOpen,
    infoIsOpen,
    setInfoIsOpen,
    storeExitAlert,
    setStoreExitAlert
}: {
    setLoading: (value: boolean) => void,
    timeInfoIsOpen: boolean,
    setTimeInfoIsOpen: (value: boolean) => void,
    reviewsIsOpen: boolean,
    setReviewsIsOpen: (value: boolean) => void,
    feesIsOpen: boolean,
    setFeesIsOpen: (value: boolean) => void,
    infoIsOpen: boolean,
    setInfoIsOpen: (value: boolean) => void,
    storeExitAlert: boolean,
    setStoreExitAlert: (value: boolean) => void,
}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [showEffect, setShowEffect] = useState(false);
    const [shop, setShop] = useState<any>();
    const { shopId } = useShopPage();
    const [categories, setCategories] = useState<any>([]);
    const [couponAlertIsOpen, setCouponAlertIsOpen] = useState(false);
    const theme = useTheme();
    const { cart, clearCart } = useShoppingCart();
    const router = useRouter();
    const searchParams = useSearchParams();
    const CouponAlert = searchParams?.get("CouponAlert");
    const [overflow, setOverflow] = useState(true);
    const { updateShopId } = useShopPage();
    const getShopId = searchParams.get('shopId');

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
        setShowEffect(true);
    };

    useEffect(() => {
        const item = shops.find(s => s.id.toString() == shopId)
        if (item) {
            setShop(item)
        }
    }, []);

    useEffect(() => {
        if (shop) {
            if (shop.coupon) {
                if (CouponAlert && CouponAlert === 'false') {
                    window.history.replaceState(null, '', window.location.pathname + window.location.search);
                } else {
                    setCouponAlertIsOpen(true);
                }
            }
            setCategories(shopCategories(shop.id));
        }
    }, [shop]);

    useEffect(() => {
        if (showEffect) {
            const timer = setTimeout(() => setShowEffect(false), 600);
            return () => clearTimeout(timer);
        }
    }, [showEffect]);

    useEffect(() => {
        if (infoIsOpen || reviewsIsOpen || feesIsOpen || timeInfoIsOpen || couponAlertIsOpen) {
            setOverflow(false);
        } else {
            setOverflow(true);
        }

    }, [infoIsOpen, reviewsIsOpen, feesIsOpen, timeInfoIsOpen, couponAlertIsOpen]);

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

                {shop && (
                    <Wrapper overflow={overflow}>
                        <Cover>
                            <ImageWithLoader
                                src={shop.cover}
                                alt={`Banner ${shop.name}`}
                                imgStyle={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderBottom: '2px solid #eee',
                                    userSelect: 'none',
                                }}
                                loaderStyle={{ width: '40px', height: '40px' }}
                            />
                            <RatingBadge onClick={() => {
                                setReviewsIsOpen(true)

                            }}>
                                <Icon icon={"material-symbols:star-rounded"} width="15" />
                                avaliações {shop.rating.toFixed(1)}
                                <Icon icon={"ep:arrow-right-bold"} width="9" />
                            </RatingBadge>
                        </Cover>

                        <ProfileSection>
                            <Profile>
                                <ImageWithLoader
                                    src={shop.image}
                                    alt={`Logo ${shop.name}`}
                                    wrapperStyle={{ width: '90px', height: '90px', bottom: '20px' }}
                                    loaderStyle={{ width: '40px', height: '40px' }}
                                />
                                <ShopName>{shop.name}</ShopName>
                            </Profile>

                            <InfoRow>
                                <QuickInfoItem onClick={() => {
                                    setFeesIsOpen(true)

                                }}>
                                    <ItemIcon icon="mdi:delivery-dining" />
                                    <span>txs entrega</span>
                                </QuickInfoItem>
                                <QuickInfoItem onClick={() => {
                                    setTimeInfoIsOpen(true);

                                }}>
                                    <ItemIcon icon="material-symbols:timer-outline" />
                                    <span>{shop.deliveryTime} min.</span>
                                </QuickInfoItem>
                                {shop.minimum_value_order > 0 && <QuickInfoItem>
                                    <h1>R${shop.minimum_value_order}</h1>
                                    <span>ped. minímo</span>
                                </QuickInfoItem>}
                                <QuickInfoItem onClick={() => {
                                    setInfoIsOpen(true)

                                }}>
                                    <ItemIcon icon="material-symbols:info-outline" />
                                    <span>informações</span>
                                </QuickInfoItem>
                            </InfoRow>

                            <hr />
                        </ProfileSection>

                        {categories.length > 0 ? (

                            <CategoriesContainer>
                                {categories.map((category: any) => (
                                    <CategoryItem
                                        key={category.id}
                                        onClick={() => {
                                            setLoading(true)
                                            router.push(category.name.includes("Pizza") ? `/shops/${shop.id}/monte-sua-pizza?productId=${encodeURIComponent(category.id)}` : `/shops/${shop.id}/cardapio?category=${encodeURIComponent(category.name)}`)
                                        }}
                                    >
                                        <span>{category.name}</span>
                                        <Icon icon="ep:arrow-right-bold" width="16" color={theme.colors.primary} />
                                    </CategoryItem>
                                ))
                                }
                            </CategoriesContainer >
                        ) : (
                            <div style={{ textAlign: 'center', margin: '2rem', minHeight: '10vw', userSelect: 'none' }}>
                                <p style={{ marginBottom: '1rem', fontWeight: 500 }}>
                                    Loja com indisponibilidade de produtos para o horário atual.
                                </p>
                                <ConfirmButton onClick={() => {
                                    setInfoIsOpen(true)

                                }}> Ver horários de atendimento </ConfirmButton>
                            </div>
                        )}

                        {/* Modal de avaliações */}
                        <Reviews
                            isOpen={reviewsIsOpen}
                            onClose={() => setReviewsIsOpen(false)}
                            id={shop.id}>
                        </Reviews>

                        {/* Modal de taxas de entregas */}
                        <DeliveryFees
                            isOpen={feesIsOpen}
                            onClose={() => setFeesIsOpen(false)}
                            fees={shop.fees}
                        />

                        {/* modal de previsão de entrega */}
                        <ModalComponent
                            isOpen={timeInfoIsOpen}
                            onConfirm={() => setTimeInfoIsOpen(false)}
                            onConfirmText={"Fechar"}
                            title={'Entenda o prazo'}
                        >
                            <Label>A previsão de entrega é um prazo determinado por cada estabelecimento. Após o pedido entrar em status "Aceito" isso significa que o setor de atendimento do restaurante recebeu e aprovou o pedido. A partir daí o cumprimento do prazo de entrega é de inteira responsabilidade do estabelecimento. Por se tratar de uma previsão, os prazos podem variar de acordo com a demanda.</Label>
                        </ModalComponent>

                        {/* modal de alerta para cupom */}
                        <ModalComponent
                            isOpen={couponAlertIsOpen}
                            onConfirm={() => {
                                setCouponAlertIsOpen(false);
                                window.history.replaceState(null, '', window.location.pathname + `?${getShopId ? `shopId=${shop.id}&` : ''}CouponAlert=false`);
                            }}
                            onConfirmText={"Ok, entendi"}
                        >
                            {shop.coupon &&
                                <>
                                    <img src="/images/desconto-popup.png" alt="Desconto" style={{ width: '100%', maxWidth: '200px', margin: '0 auto', display: 'block' }} />

                                    <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '16px', userSelect: 'none' }}>
                                        Estamos com cupom <span style={{ color: theme.colors.primary, fontWeight: 'bold', userSelect: 'none' }}>{shop.coupon.name}. </span>
                                        <br />
                                        <span style={{ userSelect: 'none' }}>{shop.coupon.discount === 'Frete grátis' ? shop.coupon.discount : shop.coupon.discount + ' de desconto'}, válido para {shop.coupon?.rule ? <span style={{ color: theme.colors.primary, fontWeight: 'bold', userSelect: 'none' }}>{shop.coupon.rule}</span> : <span style={{ userSelect: 'none' }}> todos os produtos</span>}</span>
                                        <br />
                                        {shop.coupon.minimum_value > 0 && <span style={{ userSelect: 'none' }}>O pedido mínimo para efetivação do cupom é de <span style={{ color: theme.colors.primary, fontWeight: 'bold', userSelect: 'none' }}>R$ {shop.coupon.minimum_value}</span> em produto.</span>}
                                    </p>
                                </>
                            }
                        </ModalComponent>

                        <ModalComponent
                            isOpen={storeExitAlert}
                            title={"Atenção"}
                            onConfirm={() => {
                                setLoading(true)
                                clearCart();
                                setStoreExitAlert(false)
                                updateShopId(null);
                            }}
                            onClose={() => setStoreExitAlert(false)}
                            onConfirmText={"Sim"}
                            onCloseText={"Não"}
                        >
                            <Label>Ao sair da loja os itens adicionados serão excluídos. Tem certeza que deseja sair?</Label>
                        </ModalComponent>

                        {/* modal de informações */}
                        <Informations
                            isOpen={infoIsOpen}
                            onClose={() => setInfoIsOpen(false)}
                        />

                    </Wrapper >
                )}

                <CartBar setLoading={(value: boolean) => setLoading(value)} />

                <FavoriteEffect visible={showEffect} like={isLiked} />
            </ModalBox>
        </Overlay>
    );
};

export default ShopPage;
