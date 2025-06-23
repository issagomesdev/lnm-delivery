'use client';

import React from 'react';
import { BottomNavWrapper, NavItem } from './styles';
import { Icon } from '@iconify/react';

const BottomNav = () => {
  return (
    <BottomNavWrapper>
      <NavItem><Icon icon="tabler:home" /> Lojas</NavItem>
      <NavItem><Icon icon="tabler:receipt" /> Cupons</NavItem>
      <NavItem><Icon icon="tabler:heart" /> Favoritos</NavItem>
    </BottomNavWrapper>
  );
};

export default BottomNav;