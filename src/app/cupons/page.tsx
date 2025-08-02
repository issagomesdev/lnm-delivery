'use client';

import Header from "@/components/Into/Header";
import ShopsList from '@/components/Into/Shops/ShopsList';
import BottomNav from '@/components/Into/Shops/BottomNav';
import { Wrapper } from '@/components/Into/Shops/styles';
import { useState } from "react";
import { Loading } from "@/components/Loading";

const Coupon = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loading />}
      <Header full={true} />
      <Wrapper>
        <ShopsList setLoading={(value) => setLoading(value)} mode="coupon" />
        <BottomNav setLoading={(value) => setLoading(value)} />
      </Wrapper>
    </>
  );
};

export default Coupon;