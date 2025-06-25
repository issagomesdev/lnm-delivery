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
  ShopCount,
  ShopItem,
  ShopImage,
  ShopInfo,
  ShopName,
  ShopMeta,
  ShopFooter,
  Tag,
  ShopItems,
} from './styles';
import { useIsMobile } from '@/hooks/useIsMobile';

const ShopsList = () => {
  const [search, setSearch] = useState('');
  const theme = useTheme();
  const isMobile = useIsMobile();

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

  const openShops = filteredShops.filter((shop) =>
    now >= new Date(shop.openingTime) && now <= new Date(shop.closingTime)
  );

  const closeShops = filteredShops.filter((shop) =>
    now > new Date(shop.openingTime) && now > new Date(shop.closingTime)
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
        {!isMobile && <FilterButton>
          <Icon icon={'mage:filter'} width="15" />
          Filtro avançado
        </FilterButton>}
      </FiltersWrapper>

      <FiltersWrapper>
        <ShopCount>Lojas abertas ({openShops.length})</ShopCount>
        {isMobile && <FilterButton>
          <Icon icon={'mage:filter'} width="15" />
          Filtro avançado
        </FilterButton>}
      </FiltersWrapper>

      <ShopItems>
        {openShops.map((shop, i) => {
          const isOpen = now >= new Date(shop.openingTime) && now <= new Date(shop.closingTime);
          const closingHour = new Date(shop.closingTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          return (
            <ShopItem key={i} style={{ opacity: isOpen ? 1 : 0.5 }}>
              <ShopImage src={'/images/default-store.png'} alt={shop.name} />
              <ShopInfo>
                <ShopName>{shop.name}</ShopName>
                <ShopMeta> {shop.category} </ShopMeta>
                <ShopMeta>
                  <span> <Icon icon={'formkit:time'} width="15" /> {shop.deliveryTime} min </span>
                  <span> <Icon icon={'mdi:delivery-dining'} width="15" />  R${shop.deliveryFee.toFixed(2)} </span>
                </ShopMeta>
                <ShopMeta className={isOpen ? 'time' : 'close'}>{isOpen ? `Fecha às ${closingHour}` : 'Fechado'}</ShopMeta>
                {shop.offer &&
                  <Tag>
                    <Icon icon={'streamline-plump:announcement-megaphone'} width="20" />
                    <p> {shop.offer} </p>
                  </Tag>}
              </ShopInfo>
              <ShopFooter>
                <Icon icon={'material-symbols:star-rounded'} width="20" color={'#f5a623'} />
                {shop.rating.toFixed(1)}
              </ShopFooter>
            </ShopItem>
          );
        })}
      </ShopItems>

      {search.trim().length > 0 && <ShopCount close={true}>Fechadas agora ({closeShops.length})</ShopCount>}

      {<ShopItems>
        {closeShops.map((shop, i) => {
          const isOpen = now >= new Date(shop.openingTime) && now <= new Date(shop.closingTime);
          const closingHour = new Date(shop.closingTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          return (
            <ShopItem key={i} style={{ opacity: isOpen ? 1 : 0.5 }}>
              <ShopImage style={{ filter: !isOpen ? 'grayscale(85%)' : '' }} src={'/images/default-store.png'} alt={shop.name} />
              <ShopInfo>
                <ShopName>{shop.name}</ShopName>
                <ShopMeta> {shop.category} </ShopMeta>
                <ShopMeta>
                  <span> <Icon icon={'formkit:time'} width="15" /> {shop.deliveryTime} min </span>
                  <span> <Icon icon={'mdi:delivery-dining'} width="15" />  R${shop.deliveryFee.toFixed(2)} </span>
                </ShopMeta>
                <ShopMeta className={isOpen ? 'time' : 'close'}>{isOpen ? `Fecha às ${closingHour}` : 'Fechado'}</ShopMeta>
                {shop.offer &&
                  <Tag>
                    <Icon icon={'streamline-plump:announcement-megaphone'} width="20" />
                    <p> {shop.offer} </p>
                  </Tag>}
              </ShopInfo>
              <ShopFooter>
                <Icon icon={'material-symbols:star-rounded'} width="20" color={'#f5a623'} />
                {shop.rating.toFixed(1)}
              </ShopFooter>
            </ShopItem>
          );
        })}
      </ShopItems>
      }

    </ShopsWrapper>
  );
};

export default ShopsList;