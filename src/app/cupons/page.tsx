'use client';

import Header from "@/components/Into/Header";
import ShopsList from '@/components/Into/Shops/ShopsList';
import BottomNav from '@/components/Into/Shops/BottomNav';
import { Wrapper } from '@/components/Into/Shops/styles';
import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { useShopPage } from "@/contexts/ShopPageContext";
import ShopPage from "@/components/Into/Shops/Profile/ShopPage";
import { useSearchParams } from "next/navigation";

const Coupon = () => {
  const [loading, setLoading] = useState(false);
  const { shopId, updateShopId } = useShopPage();
  const searchParams = useSearchParams();
  const getShopId = searchParams.get('shopId');

  useEffect(() => {
    setLoading(true);
    if (getShopId && shopId !== getShopId) {
      updateShopId(getShopId);
    }
    setLoading(false);
  }, [getShopId]);

  return (
    <>
      {loading && <Loading />}
      <Header full={true} />
      <Wrapper>
        <ShopsList setLoading={(value) => setLoading(value)} mode="coupon" />

        {shopId && (
          <ShopPage
            setLoading={(value: boolean) => setLoading(value)} />
        )}

        <BottomNav setLoading={(value) => setLoading(value)} />
      </Wrapper>
    </>
  );
};

export default Coupon;