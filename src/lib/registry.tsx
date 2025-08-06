'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';
import { LocationProvider } from '@/contexts/LocationContext';
import { ShoppingCartProvider } from '@/contexts/ShoppingCartContext';

export default function StyledComponentsRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LocationProvider>
        <ShoppingCartProvider>
          {children}
        </ShoppingCartProvider>
      </LocationProvider>
    </ThemeProvider>
  );
}