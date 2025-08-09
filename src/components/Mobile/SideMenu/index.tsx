'use client';

import { useState } from 'react';
import styles from './SideMenu.module.css';
import { Icon } from '@iconify/react';
import { useLocation } from '@/contexts/LocationContext';
import ChangeLocation from '../../Into/ChangeLocation';
import { usePathname, useRouter } from 'next/navigation';
import { Loading } from '../../Loading';

export default function SideMenu({ locationSelector = true }: { locationSelector?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCity, selectedNeighborhood } = useLocation();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const links = [
    { href: '/shops', icon: 'Icon inicio.png', label: 'Inicio' },
    { href: '/minha-conta', icon: 'Icon Minha conta.png', label: 'Minha conta' },
    { href: '/meus-pedidos', icon: 'Icon Meus pedidos.png', label: 'Meus pedidos' },
    { href: '/meus-enderecos', icon: 'Icon Meus endereços.png', label: 'Meus endereços' },
    { href: 'https://litoralnamesa.com.br/contato/', icon: 'Icon Fale conosco.png', label: 'Fale conosco', external: true },
    { href: '/termos-de-uso', icon: 'Icon Termos de uso.png', label: 'Termos de uso' },
    { href: 'https://litoralnamesa.com.br/seja-parceiro/', icon: 'Icon Seja parceiro.png', label: 'Seja parceiro', external: true },
    { href: '/logout', icon: 'Icon Deslogar.png', label: 'Deslogar' },
  ];

  return (
    <div className={`${styles.mobileHeader} ${!locationSelector ? styles.hidden : ''}`}>
      {loading && <Loading />}

      {/* Botão abrir */}
      <button
        className={`${styles.menuButton} ${styles.open}`}
        onClick={toggleMenu}
      >
        <Icon icon="material-symbols:menu-rounded" width="24" color="#fff" />
      </button>

      {locationSelector && selectedCity && selectedNeighborhood && <ChangeLocation />}

      {/* Overlay */}
      <div
        className={`${styles.menuOverlay} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      />

      {/* Menu lateral */}
      <div className={`${styles.menuPanel} ${isOpen ? styles.open : ''}`}>
        {/* Botão fechar */}
        <button
          className={`${styles.menuButton} ${styles.close}`}
          onClick={toggleMenu}
        >
          <Icon icon="ic:round-close" width="15" color="#fff" />
        </button>

        <div className={styles.content}>
          <div className={styles.userContent}>
            <img src="/images/account-icon.png" alt="Avatar" />
            Eduardo Santos
          </div>

          <nav className={styles.nav}>
            {links
              .filter((item) => !(item.label === 'Inicio' && pathname === '/'))
              .map((item) => (
                <div
                  key={item.href}
                  className={styles.navItem}
                  onClick={() => {
                    if (pathname !== item.href) {
                      if (!item.external) setLoading(true);
                      router.push(item.href);
                    }
                  }}
                >
                  <img
                    src={`/images/home-menu/${item.icon}`}
                    alt=""
                    style={{ marginRight: '0.5rem' }}
                  />
                  {item.label}
                </div>
              ))}
          </nav>
        </div>
      </div>
    </div>
  );
}