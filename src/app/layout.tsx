'use client'

import { ReactNode } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { theme } from '../styles/theme'
import Header from '../components/Header'
import Footer from '../components/Footer'

const DividerLine = styled.div`
  width: 100%;
  height: 5px;
  background: linear-gradient(
    to right,
    #ff5100 0%, #ff5100 33.33%,
    #ed9268 33.33%, #ed9268 66.66%,
    #ff621a 66.66%, #ff621a 100%
  );
`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Litoral na mesa</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <main>{children}</main>
          <DividerLine />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}