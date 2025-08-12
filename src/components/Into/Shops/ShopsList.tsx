'use client';

import React, { useEffect, useState } from 'react';
import { shops } from '../data';
import { Icon } from '@iconify/react';
import {
  ShopsWrapper,
  FiltersWrapper,
  FilterInput,
  FilterButton,
  ShopCount,
  ShopsEmpty,
  ShopsEmptyIcon,
  FilterIsActiveCard,
  CuponsLabel,
  CouponsEmpty,
  CouponsEmptyIcon,
  FilterAdvance} from './styles';
import { useIsMobile } from '@/hooks/useIsMobile';
import AdvancedFilter from './AdvancedFilter';
import { CloseXButton } from '@/components/shared/Modal/styles';
import { useLocation } from '@/contexts/LocationContext';
import { useRouter } from 'next/navigation';
import { useTheme } from 'styled-components';
import ShopCard from './ShopCard';

type ShopsListProps = {
  ref?: React.Ref<HTMLDivElement | null>;
  selectedCategories?: number[];
  setSelectedCategories?: React.Dispatch<React.SetStateAction<number[]>>;
  selectedCategory?: string;
  filterIsActive?: boolean;
  setFilterIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
  filterIsOpen?: boolean;
  setFilterIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  mode?: 'coupon' | 'fav';
  triggered?: boolean;
  setLoading: (value: boolean) => void;
};

const ShopsList = ({ ref, selectedCategories, setSelectedCategories, selectedCategory, filterIsActive, setFilterIsActive, mode, triggered, filterIsOpen, setFilterIsOpen, setLoading }: ShopsListProps) => {
  const [search, setSearch] = useState('');
  const isMobile = useIsMobile();
  const now = new Date();
  const [filteredShops, setFilteredShops] = useState<any[]>([]);
  const [openShops, setOpenShops] = useState<any[]>([]);
  const [closeShops, setCloseShops] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [selectedPayments, setSelectedPayments] = useState<string[]>([]);
  const { selectedCity, selectedNeighborhood } = useLocation();
  const [animate, setAnimate] = useState(false);
  const router = useRouter()
  const theme = useTheme();

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

  useEffect(() => {
    if (triggered && filteredShops.length > 0) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [triggered, filteredShops]);

  return (
    <ShopsWrapper style={!triggered || filteredShops.length < 1 ? { gap: '1rem' } : {}}>
      {!mode && <>
        <div ref={ref}>
          <FiltersWrapper>
            <FilterInput>
              <Icon icon={'lets-icons:search-alt'} color={'gray'} width="20" />
              <input placeholder="Buscar por loja ou categoria"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
              {search.length > 0 && <Icon icon={'material-symbols:close-rounded'} color={theme.colors.primary} width="20" onClick={() => setSearch('')} />
              }
            </FilterInput>

            {!isMobile && setFilterIsOpen && <FilterButton onClick={() => setFilterIsOpen(true)}>
              <Icon icon={'mage:filter'} width="15" />
              Filtro avançado
            </FilterButton>}

            {isMobile && <FilterAdvance>
              {openShops.length > 0 && <ShopCount>Lojas abertas ({openShops.length})</ShopCount>}
              {openShops.length < 1 && closeShops.length > 0 && <ShopCount close={true}>Fechadas agora ({closeShops.length})</ShopCount>}
              {!mode && isMobile && setFilterIsOpen && <FilterButton onClick={() => setFilterIsOpen(true)}>
                <Icon icon={'mage:filter'} width="12" />
                Filtro avançado
              </FilterButton>}
            </FilterAdvance>
            }

          </FiltersWrapper>
        </div>

        {triggered && <FiltersWrapper
          fixed={triggered && filteredShops.length > 0}
          animate={animate}>
          <FilterInput>
            <Icon icon={'lets-icons:search-alt'} color={'gray'} width="20" />
            <input placeholder="Buscar por loja ou categoria"
              value={search}
              onChange={(e) => setSearch(e.target.value)} />
            {search.length > 0 && <Icon icon={'material-symbols:close-rounded'} color={theme.colors.primary} width="20" onClick={() => setSearch('')} />
            }
          </FilterInput>

          {!isMobile && setFilterIsOpen && <FilterButton onClick={() => setFilterIsOpen(true)}>
            <Icon icon={'mage:filter'} width="15" />
            Filtro avançado
          </FilterButton>}

          {isMobile && <FilterAdvance>
            {openShops.length > 0 && <ShopCount>Lojas abertas ({openShops.length})</ShopCount>}
            {openShops.length < 1 && closeShops.length > 0 && <ShopCount close={true}>Fechadas agora ({closeShops.length})</ShopCount>}
            {!mode && isMobile && setFilterIsOpen && <FilterButton onClick={() => setFilterIsOpen(true)}>
              <Icon icon={'mage:filter'} width="12" />
              Filtro avançado
            </FilterButton>}
          </FilterAdvance>
          }

        </FiltersWrapper>
        }
      </>
      }

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

      <ShopCard
        open
        shops={openShops}
        isMobile={isMobile}
        mode={mode}
        setLoading={setLoading}
      />

      <ShopCard
        open={false}
        shops={closeShops}
        isMobile={isMobile}
        mode={mode}
        setLoading={setLoading}
      />


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
        isOpen={filterIsOpen ?? false}
        onClose={() => setFilterIsOpen && setFilterIsOpen(false)}
        onApply={(order, categories, payments) => {
          setSelectedOrder(order)
          setSelectedCategories && setSelectedCategories(categories);
          setSelectedPayments(payments);
          setFilterIsOpen && setFilterIsOpen(false);
          setFilterIsActive && setFilterIsActive(true)
        }}
        values={[selectedOrder, selectedCategories ?? [], selectedPayments]}
      />

    </ShopsWrapper>
  );
};

export default ShopsList;