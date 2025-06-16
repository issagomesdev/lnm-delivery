'use client'

import { Container, MaskedImage } from './styles'
import LocationSelector from '../Home/LocationSelector'

export default function App() {
  return (
    <Container>
      <MaskedImage>
        <img src="/images/home.jpg" alt="" width="100%" />
      </MaskedImage>
      <h1 style={{ position: 'absolute', width: '100%', textAlign: 'center', marginTop: '6rem' }}>Descubra os melhores deliveries do litoral</h1>
      <LocationSelector/>
    </Container>
  )
}
