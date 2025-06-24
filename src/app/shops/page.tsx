'use client';

import Header from "@/components/Into/Header";
import React from 'react';
import Categories from '@/components/Into/Shops/Categories';
import Banners from '@/components/Into/Shops/Banners';
import ShopsList from '@/components/Into/Shops/ShopsList';
import BottomNav from '@/components/Into/Shops/BottomNav';
import { Wrapper } from '@/components/Into/Shops/styles';

const ShopsPage = () => {
  return (
    <>
      <Header/>
      <Wrapper>
        <Categories />
        <Banners />
        <ShopsList />
        <BottomNav />
      </Wrapper>
    </>
  );
};

export default ShopsPage;