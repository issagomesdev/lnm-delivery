'use client';

import React, { useEffect } from 'react';
import { BannersWrapper, BannerImage } from './styles';
import { banners } from './data';
import { useHorizontalScrollDrag } from '@/hooks/useHorizontalScrollDrag';

const Banners = ({filterIsActive}: {filterIsActive: boolean}) => {
  const { ref, isDragging, events } = useHorizontalScrollDrag();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!el) return;

      const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

      if (isAtEnd) {
        el.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        el.scrollBy({ left: 300, behavior: 'smooth' });
      }
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