'use client';

import React from 'react';
import { BannersWrapper, BannerImage } from './styles';
import { banners } from './data';


const Banners = () => {
  return (
    <BannersWrapper>
      {banners.map((banner, i) => (
        <BannerImage key={i} src={banner.path} alt={banner.name} />
      ))}
    </BannersWrapper>
  );
};

export default Banners;