'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import FloatingMenu from '@/components/Web/FloatingMenu';
import HeaderLayout, { Nav, NavItem } from './HeaderLayout';

export default function HeaderClient() {
  const [currentHash, setCurrentHash] = useState('');
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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const links = [
    { id: 1, section: '#historia', label: 'Fazendo História' },
    { id: 2, href: 'https://litoralnamesa.com.br/contato/', label: 'Fale Conosco' },
    { id: 3, href: 'https://litoralnamesa.com.br/seja-parceiro/', label: 'Seja Parceiro' },
    { id: 4, icon: 'account-icon.png', label: 'Entrar', callback: () => setIsOpen(true) },
  ];

  return (
    <HeaderLayout>
      <img
        src="/images/logo.png"
        alt="Logo"
        style={{ height: '40px', cursor: 'pointer' }}
        onClick={() => router.push('/')}
      />
      <Nav>
        {links.map((item) => {
          const hash = item.section?.replace('#', '');
          const isActive = hash === currentHash;

          return (
            <NavItem
              key={item.id}
              href={item.href}
              active={isActive}
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
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {item.icon && (
                <img
                  src={`/images/${item.icon}`}
                  alt={item.label}
                  width="30"
                  style={{ marginRight: '0.5rem' }}
                />
              )}
              {item.label}
            </NavItem>
          );
        })}
      </Nav>
      {isOpen && <FloatingMenu ref={menuRef} onClose={() => setIsOpen(false)} />}
    </HeaderLayout>
  );
}
