'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BannersWrapper, BannerImage } from './styles';
import { banners, banners as base } from '../data';
import { useHorizontalScrollDrag } from '@/hooks/useHorizontalScrollDrag';

const Banners = ({ filterIsActive }: { filterIsActive: boolean }) => {
  const { ref, isDragging, events } = useHorizontalScrollDrag();
  const [bannersEl, setBannersEl] = useState(base);

  const baseLenRef = useRef(base.length);
  const dataRef = useRef(bannersEl);
  const indexRef = useRef(0);

  useEffect(() => { dataRef.current = bannersEl; }, [bannersEl]);

  const scrollToIndex = (idx: number) => {
    const el = ref.current;
    if (!el) return;
    const imgs = el.querySelectorAll('img');
    const target = imgs[idx] as HTMLElement | undefined;
    if (!target) return;
    const left = (target.offsetLeft - el.clientWidth / 2 + target.offsetWidth / 2) - 15;
    el.scrollTo({ left, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tick = () => {
      if (!ref.current || filterIsActive || isDragging) return;

      const len = dataRef.current.length;
      let nextIndex = indexRef.current + 1;

      if (nextIndex >= len) {
        let nextArr = [...dataRef.current, ...base];
        
        // if (nextArr.length % baseLenRef.current === 0) {
        //   nextArr = nextArr.slice(baseLenRef.current);
        //   nextIndex -= baseLenRef.current;
        // }

        setBannersEl(nextArr);
        dataRef.current = nextArr;
        indexRef.current = nextIndex;
        requestAnimationFrame(() => scrollToIndex(indexRef.current));
        return;
      }


      indexRef.current = nextIndex;
      scrollToIndex(indexRef.current);
    };

    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, [ref, filterIsActive, isDragging]);

  return (
    <BannersWrapper
      ref={ref}
      {...events}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {!filterIsActive &&
        bannersEl.map((b, i) => (
          // <div key={`${b.id}-${i}`}>
          //   <h3>{i+1}</h3>
          //   <BannerImage
          //   key={`${b.id}-${i}`}
          //   src={b.path}
          //   alt={b.name}
          //   draggable={false}
          //   onDragStart={(e) => e.preventDefault()}
          // />
          // </div>
          <BannerImage
            key={`${b.id}-${i}`}
            src={b.path}
            alt={b.name}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        ))}
    </BannersWrapper>
  );
};

export default Banners;
