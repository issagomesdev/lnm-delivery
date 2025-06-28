'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { theme } from '../styles/theme'
import { LocationProvider } from '@/contexts/LocationContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Litoral na mesa</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <LocationProvider>
            <main>{children}</main>
          </LocationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}