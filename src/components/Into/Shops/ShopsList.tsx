'use client';

import React, { useEffect, useState } from 'react';
import { shops } from './data';
import { useTheme } from 'styled-components';
import { Icon } from '@iconify/react';
import {
  ShopsWrapper,
  FiltersWrapper,
  FilterInput,
  FilterButton,
  OpenCount,
  ShopItem,
  ShopImage,
  ShopInfo,
  ShopName,
  ShopMeta,
  ShopFooter,
  Tag,
  ShopItems,
} from './styles';

const ShopsList = () => {
  const [search, setSearch] = useState('');
  const theme = useTheme();

  const now = new Date();
  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => {
    const now = new Date();
    const aIsOpen = now >= new Date(a.openingTime) && now <= new Date(a.closingTime);
    const bIsOpen = now >= new Date(b.openingTime) && now <= new Date(b.closingTime);

    if (aIsOpen === bIsOpen) return 0;
    return aIsOpen ? -1 : 1;
  });

  const openShops = shops.filter((shop) =>
    now >= new Date(shop.openingTime) && now <= new Date(shop.closingTime)
  );

  useEffect(() => {
    console.log(filteredShops)
  }, [])

  return (
    <ShopsWrapper>
      <FiltersWrapper>
        <FilterInput>
          <Icon icon={'lets-icons:search-alt'} color={'gray'} width="20" />
          <input placeholder="Buscar por loja ou categoria"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </FilterInput>
        <FilterButton>
          <Icon icon={'mage:filter'} width="15" />
          Filtro avançado
        </FilterButton>
      </FiltersWrapper>

      <OpenCount>Lojas abertas ({openShops.length})</OpenCount>

      <ShopItems>
        {filteredShops.map((shop, i) => {
          const isOpen = now >= new Date(shop.openingTime) && now <= new Date(shop.closingTime);
          const closingHour = new Date(shop.closingTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });
          const openingHour = new Date(shop.openingTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          return (
            <ShopItem key={i} style={{ opacity: isOpen ? 1 : 0.5 }}>
              <ShopImage src={'/images/default-store.png'} alt={shop.name} />
              <ShopInfo>
                <ShopName>{shop.name}</ShopName>
                <ShopMeta>{shop.category} • {shop.deliveryTime} min • R${shop.deliveryFee.toFixed(2)}</ShopMeta>
                <ShopMeta>{isOpen ? `Fecha às ${closingHour}` : `Abre às ${openingHour}`}</ShopMeta>
                {shop.offer && <Tag>{shop.offer}</Tag>}
              </ShopInfo>
              <ShopFooter>{shop.rating.toFixed(1) + '⭐'}  </ShopFooter>
            </ShopItem>
          );
        })}
      </ShopItems>

    </ShopsWrapper>
  );
};

export default ShopsList;