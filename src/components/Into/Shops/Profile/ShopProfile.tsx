'use client';

import { Icon } from '@iconify/react';
import {
  Wrapper,
  Cover,
  CoverImage,
  ProfileSection,
  Profile,
  InfoRow,
  RatingBadge,
  ShopName,
  QuickInfoItem,
  ItemIcon
} from './styles';
import DeliveryFees from './DeliveryFees';
import ModalComponent from '@/components/shared/Modal/ModalComponent';
import Informations from './Informations';
import { useEffect, useState } from 'react';
import { ConfirmButton, Label } from '@/components/shared/Modal/styles';
import { useTheme } from 'styled-components';
import Reviews from './Reviews';
import { shopCategories } from '../../data';
import { ShopCategoriesList } from './ShopCategoriesList';
import { isBefore, isAfter } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';

const ShopProfile = ({ shop }: { shop: any }) => {

  const [reviewsIsOpen, setReviewsIsOpen] = useState(false);
  const [feesIsOpen, setFeesIsOpen] = useState(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const [timeInfoIsOpen, setTimeInfoIsOpen] = useState(false);
  const [couponAlertIsOpen, setCouponAlertIsOpen] = useState(false);
  const [shopIsClosed, setShopIsClosed] = useState(false);
  const [categories, setCategories] = useState<any>([]);
  const theme = useTheme();
  const router= useRouter();
  const searchParams = useSearchParams();
  const CouponAlert = searchParams?.get("CouponAlert");

  useEffect(() => {
    const now = new Date();
    const isClosed = isBefore(now, new Date(shop.openingTime)) || isAfter(now, new Date(shop.closingTime));
    setShopIsClosed(isClosed);

    if (!isClosed && shop.coupon && !CouponAlert) setCouponAlertIsOpen(true);
    setCategories(shopCategories(shop.id));
  }, []);

  return (
    <Wrapper>
      <Cover>
        <CoverImage src={shop.cover} alt={`Capa da loja ${shop.name}`} />
        <RatingBadge onClick={() => setReviewsIsOpen(true)}>
          <Icon icon={"material-symbols:star-rounded"} width="15" />
          avaliações {shop.rating.toFixed(1)}
          <Icon icon={"ep:arrow-right-bold"} width="9" />
        </RatingBadge>
      </Cover>

      <ProfileSection>
        <Profile>
          <img src={shop.image} alt={`Logo ${shop.name}`} />
          <ShopName>{shop.name}</ShopName>
        </Profile>

        <InfoRow>
          <QuickInfoItem onClick={() => setFeesIsOpen(true)}>
            <ItemIcon icon="mdi:delivery-dining" />
            <span>txs entrega</span>
          </QuickInfoItem>
          <QuickInfoItem onClick={() => setTimeInfoIsOpen(true)}>
            <ItemIcon icon="material-symbols:timer-outline" />
            <span>{shop.deliveryTime} min.</span>
          </QuickInfoItem>
          {shop.minimum_value_order > 0 && <QuickInfoItem>
            <h1>R${shop.minimum_value_order}</h1>
            <span>ped. minímo</span>
          </QuickInfoItem>}
          <QuickInfoItem onClick={() => setInfoIsOpen(true)}>
            <ItemIcon icon="material-symbols:info-outline" />
            <span>informações</span>
          </QuickInfoItem>
        </InfoRow>

        <hr />
      </ProfileSection>

      {!shopIsClosed && categories.length > 0 && (
        <ShopCategoriesList
          categories={categories}
          onSelectCategory={(category) => router.push(category.name.includes("Pizza")? `/shops/${shop.id}/monte-sua-pizza?productId=${encodeURIComponent(category.id)}`: `/shops/${shop.id}/cardapio?category=${encodeURIComponent(category.name)}`)}
        />
      )}

      {/* Restaurante fechado tratativa */}
      {shopIsClosed && (
        <div style={{ textAlign: 'center', margin: '2rem', minHeight: '10vw' }}>
          <p style={{ marginBottom: '1rem', fontWeight: 500 }}>
            Desculpe-nos, infelizmente o restaurante encontra-se fechado no momento, devido ao horário ou falta de conexão com a internet.
          </p>
          <ConfirmButton onClick={() => setInfoIsOpen(true)}> Ver horários de atendimento </ConfirmButton>
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
        onConfirm={() => setCouponAlertIsOpen(false)}
        onConfirmText={"Ok, entendi"}
      >
        {shop.coupon &&
          <>
            <img src="/images/desconto-popup.png" alt="Desconto" style={{ width: '100%', maxWidth: '200px', margin: '0 auto', display: 'block' }} />

            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '16px' }}>
              Estamos com cupom <span style={{ color: theme.colors.primary, fontWeight: 'bold' }}>{shop.coupon.name}. </span>
              <br />
              <span>{shop.coupon.discount === 'Frete grátis' ? shop.coupon.discount : shop.coupon.discount + ' de desconto'}, válido para {shop.coupon?.rule ? <span style={{ color: theme.colors.primary, fontWeight: 'bold' }}>{shop.coupon.rule}</span> : <span> todos os produtos</span>}</span>
              <br />
              {shop.coupon.minimum_value > 0 && <span>O pedido mínimo para efetivação do cupom é de <span style={{ color: theme.colors.primary, fontWeight: 'bold' }}>R$ {shop.coupon.minimum_value}</span> em produto.</span>}
            </p>
          </>
        }
      </ModalComponent>

      {/* modal de informações */}
      <Informations
        isOpen={infoIsOpen}
        onClose={() => setInfoIsOpen(false)}
      />

    </Wrapper>
  );
};

export default ShopProfile;