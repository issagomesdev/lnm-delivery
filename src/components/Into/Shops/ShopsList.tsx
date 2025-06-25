'use client';

import React, { useEffect, useState } from 'react';
import { shops } from './data';
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
  ShopRating,
  ShopOffer,
  Tag,
  ShopItems,
  ShopsEmpty,
  ShopsEmptyIcon,
  FilterIsActiveCard
} from './styles';
import { useIsMobile } from '@/hooks/useIsMobile';
import AdvancedFilter from './AdvancedFilter';
import { CloseXButton } from '@/components/shared/Modal/styles';

type ShopsListProps = {
  selectedCategories: number[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<number[]>>;
};

const ShopsList = ({ selectedCategories, setSelectedCategories }: ShopsListProps) => {
  const [search, setSearch] = useState('');
  const isMobile = useIsMobile();
  const now = new Date();
  const [filteredShops, setFilteredShops] = useState<any[]>([]);
  const [openShops, setOpenShops] = useState<any[]>([]);
  const [closeShops, setCloseShops] = useState<any[]>([]);
  const [FilterIsOpen, setFilterIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [selectedPayments, setSelectedPayments] = useState<string[]>([]);
  const [filterIsActive, setFilterIsActive] = useState<boolean>(false);

  useEffect(() => {
    const filtered = shops
      .filter((shop) =>
        shop.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategories.length === 0 || selectedCategories.includes(shop.category.id))
      )
      .sort((a, b) => {
        const aIsOpen =
          now >= new Date(a.openingTime) && now <= new Date(a.closingTime);
        const bIsOpen =
          now >= new Date(b.openingTime) && now <= new Date(b.closingTime);

        if (aIsOpen === bIsOpen) return 0;
        return aIsOpen ? -1 : 1;
      });

    const opened = filtered.filter(
      (shop) => now >= new Date(shop.openingTime) && now <= new Date(shop.closingTime)
    );

    const closed = filtered.filter(
      (shop) => now < new Date(shop.openingTime) || now > new Date(shop.closingTime)
    );

    setFilteredShops(filtered);
    setOpenShops(opened);
    setCloseShops(closed);

    console.log(now, filtered, openShops, closeShops, selectedCategories)
  }, [shops, search, selectedCategories]);

  return (
    <ShopsWrapper>
      <FiltersWrapper>
        <FilterInput>
          <Icon icon={'lets-icons:search-alt'} color={'gray'} width="20" />
          <input placeholder="Buscar por loja ou categoria"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </FilterInput>
        {!isMobile && <FilterButton onClick={() => setFilterIsOpen(true)}>
          <Icon icon={'mage:filter'} width="15" />
          Filtro avançado
        </FilterButton>}
      </FiltersWrapper>

      <FiltersWrapper>
        {filteredShops.length > 0 && <ShopCount>Lojas abertas ({openShops.length})</ShopCount>}
        {isMobile && <FilterButton onClick={() => setFilterIsOpen(true)}>
          <Icon icon={'mage:filter'} width="12" />
          Filtro avançado
        </FilterButton>}
      </FiltersWrapper>

      <ShopItems>
        {openShops.map((shop, i) => {
          const closingHour = new Date(shop.closingTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          return (
            <ShopItem key={i}>
              <ShopImage src={'/images/default-store.png'} alt={shop.name} />
              <ShopInfo>
                <ShopName>{shop.name}</ShopName>
                <ShopMeta> {shop.category.name} </ShopMeta>
                <ShopMeta>
                  <span> <Icon icon={'formkit:time'} width="15" /> {shop.deliveryTime} min </span>
                  <span> <Icon icon={'mdi:delivery-dining'} width="15" />  R${shop.deliveryFee.toFixed(2)} </span>
                </ShopMeta>
                <ShopFooter>
                  <ShopMeta className={'time'}>Fecha às {closingHour}</ShopMeta>
                  <ShopRating>
                    <Icon icon={'material-symbols:star-rounded'} width="20" color={'#f5a623'} />
                    {shop.rating.toFixed(1)}
                  </ShopRating>
                </ShopFooter>
                {shop.offer &&
                  <ShopOffer>
                    <Tag>
                      <Icon icon={'streamline-plump:announcement-megaphone'} width="20" />
                      <p> {shop.offer} </p>
                    </Tag>
                  </ShopOffer>}
              </ShopInfo>
            </ShopItem>
          );
        })}
      </ShopItems>


      {search.trim().length > 0 && filteredShops.length > 0 && closeShops.length > 0 && <ShopCount close={true}>Fechadas agora ({closeShops.length})</ShopCount>}

      {<ShopItems>
        {closeShops.map((shop, i) => {
          return (
            <ShopItem key={i} style={{ opacity: 0.5 }}>
              <ShopImage style={{ filter: 'grayscale(85%)' }} src={'/images/default-store.png'} alt={shop.name} />
              <ShopInfo>
                <ShopName>{shop.name}</ShopName>
                <ShopMeta> {shop.category.name} </ShopMeta>
                <ShopMeta>
                  <span> <Icon icon={'formkit:time'} width="15" /> {shop.deliveryTime} min </span>
                  <span> <Icon icon={'mdi:delivery-dining'} width="15" />  R${shop.deliveryFee.toFixed(2)} </span>
                </ShopMeta>
                <ShopFooter>
                  <ShopMeta className={'close'}>Fechado</ShopMeta>
                  <ShopRating>
                    <Icon icon={'material-symbols:star-rounded'} width="20" color={'#f5a623'} />
                    {shop.rating.toFixed(1)}
                  </ShopRating>
                </ShopFooter>
                {shop.offer &&
                  <Tag>
                    <Icon icon={'streamline-plump:announcement-megaphone'} width="20" />
                    <p> {shop.offer} </p>
                  </Tag>}
              </ShopInfo>

            </ShopItem>
          );
        })}
      </ShopItems>
      }

      {filteredShops.length === 0 && <ShopsEmpty>
        <ShopsEmptyIcon>
          <img src="/images/Icon Opsss.png" />
        </ShopsEmptyIcon>
        <h2>Opsss!</h2>
        <p>Nenhum resultado encontrado!</p>
      </ShopsEmpty>}

      {filterIsActive &&
        <FilterIsActiveCard>
          <h4>Filtro avançado ativo</h4>
          <CloseXButton>
            <Icon icon="material-symbols:close" color="#fff" width="24" onClick={() => setFilterIsActive(false)} />
          </CloseXButton>
        </FilterIsActiveCard>
      }

      <AdvancedFilter
        isOpen={FilterIsOpen}
        onClose={() => setFilterIsOpen(false)}
        onApply={(order, categories, payments) => {
          setSelectedOrder(order)
          setSelectedCategories(categories);
          setSelectedPayments(payments);
          setFilterIsOpen(false);
          setFilterIsActive(true)
        }}
        values={[selectedOrder, selectedCategories, selectedPayments]}
      />

    </ShopsWrapper>
  );
};

export default ShopsList;