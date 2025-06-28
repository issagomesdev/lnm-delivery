'use client';

import React from 'react';
import { BottomNavWrapper, NavItem } from './styles';
import { Icon } from '@iconify/react';
import { useRouter, usePathname } from 'next/navigation';

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <BottomNavWrapper>
      <NavItem
        active={pathname === '/shops'}
        onClick={() => router.push("/shops")}
      >
        <Icon icon="ic:round-home" width="30" />
        Lojas
      </NavItem>

      <NavItem
        active={pathname === '/cupons'}
        onClick={() => router.push("/cupons")}
      >
        <Icon icon="fluent-emoji-high-contrast:label" width="30" />
        Cupons
      </NavItem>

      <NavItem
        active={pathname === '/favoritos'}
        onClick={() => router.push("/favoritos")}
      >
        <Icon icon="ic:round-favorite" width="30" />
        Favoritos
      </NavItem>
    </BottomNavWrapper>
  );
};

export default BottomNav;