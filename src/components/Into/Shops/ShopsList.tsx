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
  FilterIsActiveCard,
  CuponsLabel,
  CouponsEmpty,
  CouponsEmptyIcon
} from './styles';
import { useIsMobile } from '@/hooks/useIsMobile';
import AdvancedFilter from './AdvancedFilter';
import { CloseXButton } from '@/components/shared/Modal/styles';
import { useLocation } from '@/contexts/LocationContext';
import { useRouter } from 'next/navigation'


type ShopsListProps = {
  selectedCategories?: number[];
  setSelectedCategories?: React.Dispatch<React.SetStateAction<number[]>>;
  selectedCategory?: string;
  filterIsActive?: boolean;
  setFilterIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  mode?: 'coupon' | 'fav';
};

const ShopsList = ({ selectedCategories, setSelectedCategories, selectedCategory, filterIsActive, setFilterIsActive, mode }: ShopsListProps) => {
  const [search, setSearch] = useState('');
  const isMobile = useIsMobile();
  const now = new Date();
  const [filteredShops, setFilteredShops] = useState<any[]>([]);
  const [openShops, setOpenShops] = useState<any[]>([]);
  const [closeShops, setCloseShops] = useState<any[]>([]);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [selectedPayments, setSelectedPayments] = useState<string[]>([]);
  const { selectedCity, selectedNeighborhood } = useLocation();
  const router = useRouter()

  useEffect(() => {
    let filtered;

    if (mode === 'coupon') {
      filtered = shops.filter((shop) => shop.coupon);
    } else if (mode === 'fav') {
      filtered = shops.filter((shop) => shop.fav);
    } else {
      filtered = shops
        .filter((shop) =>
          shop.name.toLowerCase().includes(search.toLowerCase()) &&
          (
            !selectedCategory && selectedCategories?.length === 0 ||
            (selectedCategory && shop.category.name === selectedCategory) ||
            (selectedCategories && selectedCategories.length > 0 && selectedCategories.includes(shop.category.id))
          )
        )
        .sort((a, b) => {
          const aIsOpen =
            now >= new Date(a.openingTime) && now <= new Date(a.closingTime);
          const bIsOpen =
            now >= new Date(b.openingTime) && now <= new Date(b.closingTime);

          if (aIsOpen === bIsOpen) return 0;
          return aIsOpen ? -1 : 1;
        });
    }

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
  }, [shops, search, selectedCategories, selectedCategory]);

  return (
    <ShopsWrapper>
      {!mode && <FiltersWrapper>
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
      </FiltersWrapper>}

      {mode && mode === 'coupon' && filteredShops.length > 0 &&
        <CuponsLabel>
          <h3>Lojas com cupons disponíveis em</h3>
          <p>{selectedNeighborhood} - {selectedCity}</p>
        </CuponsLabel>
      }

      {mode && mode === 'coupon' && filteredShops.length === 0 &&
        <CouponsEmpty>
          <CouponsEmptyIcon>
            <img src="/images/Icon sem cupons.png" alt="Icon sem cupons" />
            <h2>Até o momento não há lojas com cupons disponíveis para sua localização.</h2>
          </CouponsEmptyIcon>
          <p>Nota: Alguns cupons possuem disponibilidade limitada e por esse motivo podem se esgotar bem na hora da validação no checkout. O aplicativo leva alguns instantes para atualizar essa listagem em sua sessão.</p>
        </CouponsEmpty>
      }

      {/* lojas abertas */}

      <FiltersWrapper>
        {openShops.length > 0 ? <ShopCount>Lojas abertas ({openShops.length})</ShopCount> : <ShopCount close={true}>Fechadas agora ({closeShops.length})</ShopCount>}
        {!mode && isMobile && <FilterButton onClick={() => setFilterIsOpen(true)}>
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
            <ShopItem key={i} onClick={() => { router.push(`/shops/${shop.id}`) }}>
              <ShopImage src={'/images/default-store.png'} alt={shop.name} />
              <ShopInfo>
                <ShopName>{shop.name}</ShopName>
                <ShopMeta> {shop.category.name} </ShopMeta>
                {mode && mode === 'coupon' &&
                  <>
                    <ShopMeta className={'coupon'}> Cupom: <span>{shop.coupon.name}</span> </ShopMeta>
                    <ShopMeta className={'coupon'}> {shop.coupon.description} </ShopMeta>
                    {shop.coupon.minimum_value > 0 && <ShopMeta className={'coupon'}> Pedido mínimo para uso: R$ {shop.coupon.minimum_value.toFixed(2)} </ShopMeta>}
                    {shop.coupon.rule && <ShopMeta className={'coupon rule'}> {shop.coupon.rule} </ShopMeta>}
                  </>
                }
                {(!mode || mode === 'fav') &&
                  <>
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
                  </>
                }
              </ShopInfo>
            </ShopItem>
          );
        })}
      </ShopItems>

      {/* lojas fechadas */}

      {openShops.length > 0 && closeShops.length > 0 && <ShopCount close={true}>Fechadas agora ({closeShops.length})</ShopCount>}

      {<ShopItems>
        {closeShops.map((shop, i) => {
          return (
            <ShopItem key={i} style={{ opacity: 0.5 }} onClick={() => { router.push(`/shops/${shop.id}`) }}>
              <ShopImage style={{ filter: 'grayscale(85%)' }} src={'/images/default-store.png'} alt={shop.name} />
              <ShopInfo>
                <ShopName>{shop.name}</ShopName>
                <ShopMeta> {shop.category.name} </ShopMeta>
                {mode && mode === 'coupon' &&
                  <>
                    <ShopMeta className={'coupon'}> Cupom: <span>{shop.coupon.name}</span> </ShopMeta>
                    <ShopMeta className={'coupon'}> {shop.coupon.description} </ShopMeta>
                    {shop.coupon.minimum_value > 0 && <ShopMeta className={'coupon'}> Pedido mínimo para uso: R$ {shop.coupon.minimum_value.toFixed(2)} </ShopMeta>}
                    {shop.coupon.rule && <ShopMeta className={'coupon rule'}> {shop.coupon.rule} </ShopMeta>}
                  </>
                }
                {(!mode || mode === 'fav') &&
                  <>
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
                  </>
                }
              </ShopInfo>

            </ShopItem>
          );
        })}
      </ShopItems>
      }

      {!mode && filteredShops.length === 0 && <ShopsEmpty>
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
            <Icon icon="material-symbols:close" color="#fff" width="24" onClick={() => { setFilterIsActive && setFilterIsActive(false); setSelectedPayments([]); setSelectedOrder(null); setSelectedCategories && setSelectedCategories([]) }} />
          </CloseXButton>
        </FilterIsActiveCard>
      }

      <AdvancedFilter
        isOpen={filterIsOpen}
        onClose={() => setFilterIsOpen(false)}
        onApply={(order, categories, payments) => {
          setSelectedOrder(order)
          setSelectedCategories && setSelectedCategories(categories);
          setSelectedPayments(payments);
          setFilterIsOpen(false);
          setFilterIsActive && setFilterIsActive(true)
        }}
        values={[selectedOrder, selectedCategories ?? [], selectedPayments]}
      />

    </ShopsWrapper>
  );
};

export default ShopsList;