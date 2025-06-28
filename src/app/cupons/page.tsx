'use client';

import Header from "@/components/Into/Header";
import ShopsList from '@/components/Into/Shops/ShopsList';
import BottomNav from '@/components/Into/Shops/BottomNav';
import { Wrapper } from '@/components/Into/Shops/styles';

const Coupon = () => {

  return (
    <>
      <Header full={true}/>
      <Wrapper>
        <ShopsList mode="coupon"/>
        <BottomNav />
      </Wrapper>
    </>
  );
};

export default Coupon;