'use client';

import React from 'react';
import { BottomNavWrapper, NavItem } from './styles';
import { Icon } from '@iconify/react';
import { useRouter, usePathname } from 'next/navigation';


const BottomNav = ({ setLoading }: {setLoading: (value: boolean) => void}) => {
  const router = useRouter();
  const pathname = usePathname();

  const goTo = (url:string) => {
    setLoading?.(true);
    router.push(url)
  }

  return (
    <BottomNavWrapper>
      <NavItem
        active={pathname === '/shops'}
        onClick={() => goTo("/shops")}
      >
        <Icon icon="ic:round-home" width="30" />
        Lojas
      </NavItem>

      <NavItem
        active={pathname === '/cupons'}
        onClick={() => goTo("/cupons")}
      >
        <Icon icon="fluent-emoji-high-contrast:label" width="30" />
        Cupons
      </NavItem>

      <NavItem
        active={pathname === '/favoritos'}
        onClick={() => goTo("/favoritos")}
      >
        <Icon icon="ic:round-favorite" width="30" />
        Favoritos
      </NavItem>
    </BottomNavWrapper>
  );
};

export default BottomNav;