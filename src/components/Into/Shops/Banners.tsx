'use client';

import React, { useEffect } from 'react';
import { BannersWrapper, BannerImage } from './styles';
import { banners } from '../data';
import { useHorizontalScrollDrag } from '@/hooks/useHorizontalScrollDrag';

const Banners = ({ filterIsActive }: { filterIsActive: boolean }) => {
  const { ref, isDragging, events } = useHorizontalScrollDrag();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let currentIndex = 0;           
    let direction: 1 | -1 = 1;   

    const interval = setInterval(() => {
      if (!el) return;

      const banners = el.querySelectorAll('img');
      const len = banners.length;
      if (!len) return;

      if (currentIndex === len - 1) {
        direction = -1; 
      } else if (currentIndex === 0) {
        direction = 1; 
      }

      currentIndex = currentIndex + direction;

      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > len - 1) currentIndex = len - 1;

      const banner = banners[currentIndex] as HTMLElement;
      const bannerLeft = banner.offsetLeft;
      const bannerWidth = banner.offsetWidth;
      const scrollCenter = bannerLeft - (el.clientWidth / 2) + (bannerWidth / 2);

      el.scrollTo({
        left: scrollCenter - 15,
        behavior: 'smooth'
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [ref]);


  return (
    <BannersWrapper
      ref={ref}
      {...events}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {!filterIsActive && banners.map((banner, i) => (
        <BannerImage
          key={i}
          src={banner.path}
          alt={banner.name}
          onDragStart={(e) => e.preventDefault()}
        />
      ))}
    </BannersWrapper>
  );
};

export default Banners;