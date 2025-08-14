'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';
import { LocationProvider } from '@/contexts/LocationContext';
import { ShoppingCartProvider } from '@/contexts/ShoppingCartContext';
import { ShopPageProvider } from '@/contexts/ShopPageContext';

export default function StyledComponentsRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LocationProvider>
        <ShopPageProvider>
          <ShoppingCartProvider>
            {children}
          </ShoppingCartProvider>
        </ShopPageProvider>
      </LocationProvider>
    </ThemeProvider>
  );
}