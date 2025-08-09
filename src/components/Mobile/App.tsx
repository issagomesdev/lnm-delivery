'use client';

import styles from './Mobile.module.css';
import LocationSelector from '../Home/LocationSelector';
import SideMenu from '@/components/Mobile/SideMenu';

export default function App() {
  return (
    <div className={styles.container}>
      <SideMenu locationSelector={false} />
      <img src="/images/home_mob.png" alt="Home Background" width="100%" />
      <div className={styles.logo}>
        <img src="/images/logo_without_text.png" alt="Logo" />
      </div>
      <LocationSelector />
    </div>
  );
}
