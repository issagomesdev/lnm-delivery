'use client';

import { forwardRef, useState } from 'react';
import styles from './FloatingMenu.module.css';
import { Icon } from '@iconify/react';
import { Loading } from '@/components/Loading';
import { usePathname, useRouter } from 'next/navigation';

type FloatingMenuProps = {
  onClose: () => void;
};

const FloatingMenu = forwardRef<HTMLDivElement, FloatingMenuProps>(({ onClose }, ref) => {
  const links = [
    { href: '/minha-conta', icon: 'Icon Minha conta.png', label: 'Minha conta' },
    { href: '/meus-pedidos', icon: 'Icon Meus pedidos.png', label: 'Meus pedidos' },
    { href: '/meus-enderecos', icon: 'Icon Meus endereços.png', label: 'Meus endereços' },
    { href: '/logout', icon: 'Icon Deslogar.png', label: 'Deslogar' },
  ];

  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.menuContainer} ref={ref}>
      {loading && <Loading />}

      <button
        type="button"
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Fechar menu"
      >
        <Icon icon="ic:round-close" width="15" color="#fff" />
      </button>

      <div className={styles.userContent}>
        <img src="/images/account-icon.png" alt="Avatar" />
        Eduardo Santos
      </div>

      <nav className={styles.nav} aria-label="Menu do usuário">
        {links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.navItem}
            onClick={(e) => {
              // navega só se for rota diferente; mantém href para acessibilidade/SEO
              if (pathname !== item.href) {
                e.preventDefault();
                setLoading(true);
                router.push(item.href);
              }
            }}
          >
            <img
              src={`/images/home-menu/${item.icon}`}
              alt=""
              aria-hidden="true"
              style={{ marginRight: '0.5rem' }}
            />
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
});

FloatingMenu.displayName = 'FloatingMenu';

export default FloatingMenu;
