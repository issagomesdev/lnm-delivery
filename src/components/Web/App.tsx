'use client'

import { Container, Banner, MaskedImage } from './styles'
import LocationSelector from '@/components/Home/LocationSelector'
import Header from '@/components/Web/Header'
import styles from './Web.module.css'

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.banner}>
          <h1>Peça nos melhores deliveries do litoral</h1>
          <LocationSelector />
        </div>
        <div className={styles.maskedImage}>
          <img src="/images/home.png" alt="" width="100%" />
        </div>
      </div>
    </>
  )
}
