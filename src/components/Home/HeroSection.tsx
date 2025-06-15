'use client'
import { Container, MaskedImage } from './styles'
import LocationSelector from './LocationSelector'

export default function HeroSection() {
  return (
    <Container>
      <MaskedImage>
        <img src="/images/home.jpg" alt="" width="100%" />
      </MaskedImage>
      <LocationSelector/>
    </Container>
  )
}
