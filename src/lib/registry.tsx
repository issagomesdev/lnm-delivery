'use client';

import { ReactNode } from 'react';
import { LocationProvider } from '@/contexts/LocationContext';
import { ShoppingCartProvider } from '@/contexts/ShoppingCartContext';
import { ShopPageProvider } from '@/contexts/ShopPageContext';

export default function StyledComponentsRegistry({ children }: { children: ReactNode }) {
  return (
    <LocationProvider>
      <ShopPageProvider>
        <ShoppingCartProvider>
          {children}
        </ShoppingCartProvider>
      </ShopPageProvider>
    </LocationProvider>
  );
}
