'use client';

import React from 'react';
import { BottomNavWrapper, NavItem } from './styles';
import { Icon } from '@iconify/react';

const BottomNav = () => {
  return (
    <BottomNavWrapper>
      <NavItem active={true}>
        <Icon icon="ic:round-home" width="30"/>
        Lojas
      </NavItem>
      <NavItem>
        <Icon icon="fluent-emoji-high-contrast:label" width="30"/>
        Cupons
      </NavItem>
      <NavItem>
        <Icon icon="ic:round-favorite" width="30"/>
        Favoritos
      </NavItem>
    </BottomNavWrapper>
  );
};

export default BottomNav;