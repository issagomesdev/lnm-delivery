'use client'

import { Container, Logo } from './styles'
import LocationSelector from '../Home/LocationSelector'
import FloatingMenu from '@/components/Mobile/FloatingMenu';

export default function App() {
  return (
    <Container>
      <FloatingMenu />
      <img src="/images/home_mob.png" alt="Home Background" width="100%" />
      <Logo>
        <img src="/images/logo_without_text.png" alt="Logo"/>
      </Logo>
      <LocationSelector />
    </Container>
  );
}