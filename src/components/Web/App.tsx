'use client'

import { Container, Banner, MaskedImage } from './styles'
import LocationSelector from '@/components/Home/LocationSelector'
import Header from '@/components/Web/Header'

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Banner>
          <h1>Peça nos melhores deliveries do litoral</h1>
          <LocationSelector />
        </Banner>
        <MaskedImage>
          <img src="/images/home.png" alt="" width="100%" />
        </MaskedImage>
      </Container>
    </>
  )
}
