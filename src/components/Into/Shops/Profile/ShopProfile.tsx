'use client';

import { Icon } from '@iconify/react';
import {
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
import DeliveryFees from './DeliveryFees';
import ModalComponent from '@/components/shared/Modal/ModalComponent';
import Informations from './Informations';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ConfirmButton, Label } from '@/components/shared/Modal/styles';
import { useTheme } from 'styled-components';
import Reviews from './Reviews';
import { shopCategories } from '../../data';
import { isBefore, isAfter } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import { ImageWithLoader } from '@/components/ImageWithLoader';
import { useCustomBackAction } from '@/hooks/useCustomBackAction';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';

const ShopProfile = ({ shop, setLoading }: { shop: any, setLoading: (value: boolean) => void }) => {

  const [reviewsIsOpen, setReviewsIsOpen] = useState(false);
  const [feesIsOpen, setFeesIsOpen] = useState(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const [timeInfoIsOpen, setTimeInfoIsOpen] = useState(false);
  const [couponAlertIsOpen, setCouponAlertIsOpen] = useState(false);
  const [shopIsClosed, setShopIsClosed] = useState(false);
  const [categories, setCategories] = useState<any>([]);
  const theme = useTheme();
  const { cart, clearCart } = useShoppingCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const CouponAlert = searchParams?.get("CouponAlert");
  const [storeExitAlert, setStoreExitAlert] = useState(false);

  useEffect(() => {
    const now = new Date();
    const isClosed = isBefore(now, new Date(shop.openingTime)) || isAfter(now, new Date(shop.closingTime));
    setShopIsClosed(isClosed);

    if (!isClosed && shop.coupon && !CouponAlert) setCouponAlertIsOpen(true);
    setCategories(shopCategories(shop.id));
  }, []);

  useEffect(() => {
    if (infoIsOpen || reviewsIsOpen || feesIsOpen || timeInfoIsOpen || couponAlertIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [infoIsOpen, reviewsIsOpen, feesIsOpen, timeInfoIsOpen, couponAlertIsOpen]);

  useCustomBackAction(
    useCallback(() => {
      if (timeInfoIsOpen) {
        setTimeInfoIsOpen(false)
        return true;
      } else if (feesIsOpen) {
        setFeesIsOpen(false)
        return true;
      } else if (reviewsIsOpen) {
        setReviewsIsOpen(false)
        return true;
      } else if (infoIsOpen) {
        setInfoIsOpen(false)
        return true;
      } else if (cart.length > 0) {
        setStoreExitAlert(true);
        return true;
      }
      return "/shops";
    }, [cart.length, infoIsOpen, timeInfoIsOpen, feesIsOpen, reviewsIsOpen])
  );


  return (
    <Wrapper>
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
          window.history.pushState(null, '', window.location.pathname);
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
            window.history.pushState(null, '', window.location.pathname);
          }}>
            <ItemIcon icon="mdi:delivery-dining" />
            <span>txs entrega</span>
          </QuickInfoItem>
          <QuickInfoItem onClick={() => {
            setTimeInfoIsOpen(true);
            window.history.pushState(null, '', window.location.pathname);
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
            window.history.pushState(null, '', window.location.pathname);
          }}>
            <ItemIcon icon="material-symbols:info-outline" />
            <span>informações</span>
          </QuickInfoItem>
        </InfoRow>

        <hr />
      </ProfileSection>

      {!shopIsClosed && categories.length > 0 && (

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
      )}

      {/* Restaurante fechado tratativa */}
      {
        shopIsClosed && (
          <div style={{ textAlign: 'center', margin: '2rem', minHeight: '10vw', userSelect: 'none' }}>
            <p style={{ marginBottom: '1rem', fontWeight: 500 }}>
              Desculpe-nos, infelizmente o restaurante encontra-se fechado no momento, devido ao horário ou falta de conexão com a internet.
            </p>
            <ConfirmButton onClick={() => {
              setInfoIsOpen(true)
              window.history.pushState(null, '', window.location.pathname);
            }}> Ver horários de atendimento </ConfirmButton>
          </div>
        )
      }

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
          window.history.replaceState(null, '', window.location.pathname + '?CouponAlert=false');
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

      {/*  */}



      <ModalComponent
        isOpen={storeExitAlert}
        title={"Atenção"}
        onConfirm={() => {
          setLoading(true)
          clearCart();
          router.push(`/shops`);
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
  );
};

export default ShopProfile;