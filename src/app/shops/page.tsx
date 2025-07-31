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
import { useBackLayers } from "@/hooks/useBackLayers";
import { useRouter } from 'next/navigation';

const ShopsPage = () => {

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filterIsActive, setFilterIsActive] = useState<boolean>(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const bannerRef = useRef<HTMLDivElement>(null);
  const triggered = useScrollTrigger(bannerRef);

  // useBackLayers([
  //   {
  //     isOpen: filterIsOpen,
  //     onClose: () => setFilterIsOpen(false),
  //   },
  //   {
  //     isOpen: (selectedCategory.length > 0),
  //     onClose: () => setSelectedCategory(''),
  //   }
  // ], {
  //   fallbackRoute: '/',
  // });

  useCustomBackAction(
    useCallback(() => {
      if (filterIsOpen) {
        setFilterIsOpen(false);
        return true;
      } else if (selectedCategory) {
        setSelectedCategory('')
        return true;
      }

      return false;
    }, [filterIsOpen, selectedCategory])
  );

  return (
    <>
      <Header full={true} fixed={true} />
      <Wrapper fixed={true}>

        <Categories
          filterIsActive={filterIsActive}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div ref={bannerRef}>
          <Banners filterIsActive={filterIsActive} />
        </div>

        <ShopsList
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedCategory={selectedCategory}
          filterIsActive={filterIsActive}
          setFilterIsActive={setFilterIsActive}
          filterIsOpen={filterIsOpen}
          setFilterIsOpen={setFilterIsOpen}
          triggered={triggered}
        />
        <BottomNav />
      </Wrapper>
    </>
  );
};

export default ShopsPage;
