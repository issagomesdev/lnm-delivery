'use client';

import Header from "@/components/Into/Header";
import React, { useState } from 'react';
import Categories from '@/components/Into/Shops/Categories';
import Banners from '@/components/Into/Shops/Banners';
import ShopsList from '@/components/Into/Shops/ShopsList';
import BottomNav from '@/components/Into/Shops/BottomNav';
import { Wrapper } from '@/components/Into/Shops/styles';

const ShopsPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  return (
    <>
      <Header />
      <Wrapper>
        <Categories 
         selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}/>
        <Banners />
        <ShopsList
         selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}/>
        <BottomNav />
      </Wrapper>
    </>
  );
};

export default ShopsPage;