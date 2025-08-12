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

const ShopsPage = () => {

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filterIsActive, setFilterIsActive] = useState<boolean>(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const itemRef = useRef<HTMLDivElement>(null);
  const triggered = useScrollTrigger(itemRef);

  // useEffect(() => {
  //   window.history.pushState(null, '', window.location.pathname);
  //   window.history.replaceState(null, '', '/');
  // }, [])

  useCustomBackAction(
    useCallback(() => {
      setLoading(true);
      if (filterIsOpen) {
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
    }, [filterIsOpen, selectedCategory])
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
        <BottomNav
          setLoading={(value) => setLoading(value)} />
      </Wrapper>
    </>
  );
};

export default ShopsPage;
