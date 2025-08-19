'use client';

import Header from "@/components/Into/Header";
import ShopsList from '@/components/Into/Shops/ShopsList';
import BottomNav from '@/components/Into/Shops/BottomNav';
import { Wrapper } from '@/components/Into/Shops/styles';
import { Suspense, useCallback, useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { useShopPage } from "@/contexts/ShopPageContext";
import ShopPage from "@/components/Into/Shops/Profile/ShopPage";
import { useSearchParams } from "next/navigation";
import { useCustomBackAction } from "@/hooks/useCustomBackAction";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";

export default function Favorites() {
  return (
    <Suspense fallback={<Loading />}>
      <FavoritesInner />
    </Suspense>
  );
}

const FavoritesInner = () => {
  const [loading, setLoading] = useState(true);
  const [timeInfoIsOpen, setTimeInfoIsOpen] = useState(false);
  const [reviewsIsOpen, setReviewsIsOpen] = useState(false);
  const [feesIsOpen, setFeesIsOpen] = useState(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const [storeExitAlert, setStoreExitAlert] = useState(false);
  const { shopId, updateShopId } = useShopPage();
  const searchParams = useSearchParams();
  const getShopId = searchParams.get('shopId');
  const { cart } = useShoppingCart();

  useEffect(() => {
    if (getShopId && shopId !== getShopId) {
      updateShopId(getShopId);
      window.history.pushState(null, '', window.location.pathname);
    }
    setLoading(false);
  }, [getShopId]);

  useEffect(() => {
    if (shopId !== null) {
      document.body.style.overflow = 'hidden';
      const prev = document.body.style.overscrollBehaviorY;
      document.body.style.overscrollBehaviorY = 'contain';
      return () => { document.body.style.overscrollBehaviorY = prev; };
    } else {
      document.body.style.overflow = '';
    }
    setLoading(false);

  }, [shopId]);

  useCustomBackAction(
    useCallback(() => {
      setLoading(true);
      if (timeInfoIsOpen) {
        console.log('timeInfoIsOpen', timeInfoIsOpen)
        setTimeInfoIsOpen(false)
        setLoading(false);
        return true;
      } else if (feesIsOpen) {
        setFeesIsOpen(false)
        setLoading(false);
        return true;
      } else if (reviewsIsOpen) {
        setReviewsIsOpen(false)
        setLoading(false);
        return true;
      } else if (infoIsOpen) {
        setInfoIsOpen(false)
        setLoading(false);
        return true;
      } else if (cart.length > 0) {
        setStoreExitAlert(true);
        setLoading(false);
        return true;
      } else if (shopId !== null) {
        updateShopId(null);
        setLoading(false);
        return `/favoritos`;
      }

      setLoading(false);
      return "/";
    }, [timeInfoIsOpen, feesIsOpen, reviewsIsOpen, infoIsOpen, cart.length, shopId])
  );

  return (
    <>
      {loading && <Loading />}
      <Header full={true} />
      <Wrapper>
        <ShopsList setLoading={(value) => setLoading(value)} mode="fav" />

        {shopId && (
          <ShopPage
            setLoading={(value: boolean) => setLoading(value)}
            timeInfoIsOpen={timeInfoIsOpen}
            setTimeInfoIsOpen={(value: boolean) => {
              setTimeInfoIsOpen(value)
              window.history.pushState(null, '', window.location.pathname);
            }}
            reviewsIsOpen={reviewsIsOpen}
            setReviewsIsOpen={(value: boolean) => {
              setReviewsIsOpen(value)
              window.history.pushState(null, '', window.location.pathname);
            }}
            feesIsOpen={feesIsOpen}
            setFeesIsOpen={(value: boolean) => {
              setFeesIsOpen(value)
              window.history.pushState(null, '', window.location.pathname);
            }}
            infoIsOpen={infoIsOpen}
            setInfoIsOpen={(value: boolean) => {
              setInfoIsOpen(value)
              window.history.pushState(null, '', window.location.pathname);
            }}
            storeExitAlert={storeExitAlert}
            setStoreExitAlert={(value: boolean) => {
              setStoreExitAlert(value)
              window.history.pushState(null, '', window.location.pathname);
            }} />
        )}

        <BottomNav setLoading={(value) => setLoading(value)} />
      </Wrapper>
    </>
  );
};
