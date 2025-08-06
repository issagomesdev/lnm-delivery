import { Container, Logo } from './styles'
import LocationSelector from '../Home/LocationSelector'
import SideMenu from '@/components/Mobile/SideMenu';

export default function App() {
  return (
    <Container>
      <SideMenu locationSelector={false}/>
      <img src="/images/home_mob.png" alt="Home Background" width="100%" />
      <Logo>
        <img src="/images/logo_without_text.png" alt="Logo"/>
      </Logo>
      <LocationSelector />
    </Container>
  );
}