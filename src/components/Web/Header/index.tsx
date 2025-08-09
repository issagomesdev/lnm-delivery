'use client';

import styles from './Header.module.css';
import { useEffect, useRef, useState } from 'react';
import FloatingMenu from '../FloatingMenu';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [currentHash, setCurrentHash] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const links = [
    { id: 1, section: '#historia', label: 'Fazendo História' },
    { id: 2, href: 'https://litoralnamesa.com.br/contato/', label: 'Fale Conosco' },
    { id: 3, href: 'https://litoralnamesa.com.br/seja-parceiro/', label: 'Seja Parceiro' },
    { id: 4, icon: 'account-icon.png', label: 'Entrar', callback: () => setIsOpen(true) },
  ];

  return (
    <header className={styles.container}>
      <img
        src="/images/logo.png"
        alt="Logo"
        style={{ height: '40px', cursor: 'pointer' }}
        onClick={() => router.push('/')}
      />
      <nav className={styles.nav}>
        {links.map((item) => {
          const hash = item.section?.replace('#', '');
          const isActive = hash === currentHash;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
              onClick={(e) => {
                if (item.callback) {
                  item.callback();
                } else if (item.section && hash) {
                  e.preventDefault();
                  const el = document.getElementById(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  setCurrentHash(hash);
                }
              }}
            >
              {item.icon && (
                <img
                  src={`/images/${item.icon}`}
                  alt="Icon"
                  width="30"
                  style={{ marginRight: '0.5rem' }}
                />
              )}
              {item.label}
            </a>
          );
        })}
      </nav>
      {isOpen && <FloatingMenu ref={menuRef} onClose={() => setIsOpen(false)} />}
    </header>
  );
}
