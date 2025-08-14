'use client';

import Header from "@/components/Into/Header";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Categories from '@/components/Into/Shops/Categories';
import Banners from '@/components/Into/Shops/Banners';
import ShopsList from '@/components/Into/Shops/ShopsList';
import BottomNav from '@/components/Into/Shops/BottomNav';
import { Wrapper } from '@/components/Into/Shops/styles';
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { useCustomBackAction } from "@/hooks/useCustomBackAction";
import { Loading } from "@/components/Loading";
import ShopPage from "@/components/Into/Shops/Profile/ShopPage";
import { useShopPage } from "@/contexts/ShopPageContext";
import { useSearchParams } from "next/navigation";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";

const ShopsPage = () => {

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filterIsActive, setFilterIsActive] = useState<boolean>(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const [timeInfoIsOpen, setTimeInfoIsOpen] = useState(false);
  const [reviewsIsOpen, setReviewsIsOpen] = useState(false);
  const [feesIsOpen, setFeesIsOpen] = useState(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const [storeExitAlert, setStoreExitAlert] = useState(false);

  const [loading, setLoading] = useState(true);
  const { cart } = useShoppingCart();

  const itemRef = useRef<HTMLDivElement>(null);
  const triggered = useScrollTrigger(itemRef);

  const { shopId, updateShopId } = useShopPage();
  const searchParams = useSearchParams();
  const getShopId = searchParams.get('shopId');

  useEffect(() => {
    setLoading(true);
    if (getShopId && shopId !== getShopId) {
      updateShopId(getShopId);
      window.history.pushState(null, '', window.location.pathname);
    }
    setLoading(false);
  }, [getShopId]);

  useEffect(() => {
    if (shopId !== null) {
      document.body.style.overflow = 'hidden';
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
        return `/shops`
      } else if (filterIsOpen) {
        setFilterIsOpen(false);
        setLoading(false);
        return true;
      } else if (selectedCategory) {
        setSelectedCategory('')
        setLoading(false);
        return true;
      }

      setLoading(false);
      return "/";
    }, [filterIsOpen, selectedCategory, timeInfoIsOpen, feesIsOpen, reviewsIsOpen, infoIsOpen, cart.length, shopId])
  );

  return (
    <>
      {loading && <Loading />}
      <Header full={true} fixed={true} />
      <Wrapper fixed={true}>

        <Categories
          filterIsActive={filterIsActive}
          selectedCategory={selectedCategory}
          setSelectedCategory={(value) => {
            setSelectedCategory(value)
            window.history.pushState(null, '', window.location.pathname);
          }}
        />

        <Banners filterIsActive={filterIsActive} />

        <ShopsList ref={itemRef}
          setLoading={(value) => setLoading(value)}
          selectedCategories={selectedCategories}
          setSelectedCategories={(value) => {
            setSelectedCategories(value)
            window.history.pushState(null, '', window.location.pathname);

          }}
          selectedCategory={selectedCategory}
          filterIsActive={filterIsActive}
          setFilterIsActive={setFilterIsActive}
          filterIsOpen={filterIsOpen}
          setFilterIsOpen={(value) => {
            setFilterIsOpen(value);
            window.history.pushState(null, '', window.location.pathname);

          }}
          triggered={triggered}
        />

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
            }}
          />
        )}

        <BottomNav
          setLoading={(value) => setLoading(value)} />
      </Wrapper>
    </>
  );
};

export default ShopsPage;
