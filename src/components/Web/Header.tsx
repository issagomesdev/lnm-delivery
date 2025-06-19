'use client'

import styled from 'styled-components'
import { useState } from 'react'
import FloatingMenu from '@/components/Web/FloatingMenu'

const Container = styled.header`
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem 2rem;
  font-weight: regular;
  display: flex;
  justify-content: flex-start;
`

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  display: flex;
  align-items: center;
  width: 85%;
  gap: 3rem;
  justify-content: flex-end;
`

const NavItem = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== 'active'
}) <{ active?: boolean }>`
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.text_secondary};
  text-decoration: ${({ active }) => active ? 'underline' : 'none'};
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }

  @media (max-width: 1050px) {
    font-size: 12px;
  }
`

export default function Header() {

  const [currentHash, setCurrentHash] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, section: '#historia', label: 'Fazendo História' },
    { id: 2, href: 'https://litoralnamesa.com.br/contato/', label: 'Fale Conosco' },
    { id: 3, href: 'https://litoralnamesa.com.br/seja-parceiro/', label: 'Seja Parceiro' },
    { id: 4, icon: 'account-icon.png', label: 'Entrar', callback: () => setIsOpen(true) },
  ]

  return (
    <Container>
      <img src="/images/logo.png" alt="Logo" style={{ height: '40px' }} />
      <Nav>
        {links.map((item) => {
          const hash = item.section?.replace('#', '')
          const isActive = hash === currentHash
          return (
            <NavItem
              key={item.id}
              href={item.href}
              active={isActive}
              onClick={(e) => {
                if (item.callback) {
                  item.callback()
                } else if (item.section && hash) {
                  e.preventDefault()
                  const el = document.getElementById(hash)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                  setCurrentHash(hash)
                }
              }}
              style={{ display: 'flex', alignItems: 'center', }}
            >
              {item.icon && (
                <img src={`/images/${item.icon}`} alt="Logo" width="30" style={{ marginRight: '0.5rem' }} />
              )}
              {item.label}
            </NavItem>
          )
        })}
      </Nav>
      {isOpen && (
       <FloatingMenu onClose={() => setIsOpen(false)} />
      )}
    </Container>
  )
}
