'use client';

import Header from "@/components/Into/Header";
import ShopsList from '@/components/Into/Shops/ShopsList';
import BottomNav from '@/components/Into/Shops/BottomNav';
import { Wrapper } from '@/components/Into/Shops/styles';
import { useState } from "react";

const Favorites = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header full={true}/>
      <Wrapper>
        <ShopsList setLoading={(value) => setLoading(value)} mode="fav"/>
        <BottomNav setLoading={(value) => setLoading(value)}/>
      </Wrapper>
    </>
  );
};

export default Favorites;