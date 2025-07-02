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
  ItemIcon,
} from './styles';

export type Category = {
  id: number;
  name: string;
};

export type Coupon = {
  name: string;
  description: string;
  rule: string;
  minimum_value: number;
};

export type Shop = {
  id: number;
  name: string;
  image: string;
  cover?: string;
  category: Category;
  deliveryTime: number;
  deliveryFee: number;
  openingTime: string;
  closingTime: string;
  fav: boolean;
  rating: number;
  offer?: string;
  coupon?: Coupon;
};


interface ShopProfileProps {
  shop: Shop;
}

const ShopProfile = ({ shop }: ShopProfileProps) => {
  return (
    <Wrapper>
      <Cover>
        <CoverImage src={shop.cover} alt={`Capa da loja ${shop.name}`} />
        <RatingBadge>
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
          <QuickInfoItem>
            <ItemIcon icon="mdi:delivery-dining"/>
            <span>txs entrega</span>
          </QuickInfoItem>
          <QuickInfoItem>
            <ItemIcon icon="material-symbols:timer-outline"/>
            <span>{shop.deliveryTime} min.</span>
          </QuickInfoItem>
          <QuickInfoItem>
            <h1>R$30</h1>
            <span>ped. minímo</span>
          </QuickInfoItem>
          <QuickInfoItem>
            <ItemIcon icon="material-symbols:info-outline"/>
            <span>informações</span>
          </QuickInfoItem>
        </InfoRow>

      <hr />
      </ProfileSection>
    </Wrapper>
  );
};

export default ShopProfile;
