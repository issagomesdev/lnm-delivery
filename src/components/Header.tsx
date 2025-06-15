'use client'

import styled from 'styled-components'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

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
})<{ active?: boolean }>`
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.text_secondary};
  text-decoration: ${({ active }) => active ? 'underline' : 'none'};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`

export default function Header() {

  const [currentHash, setCurrentHash] = useState<string>('')

  const links = [
    { href: '#historia', external: false, label: 'Fazendo História' },
    { href: 'https://litoralnamesa.com.br/contato/', external: true, label: 'Fale Conosco' },
    { href: 'https://litoralnamesa.com.br/seja-parceiro/', external: true, label: 'Seja Parceiro' },
    { href: '', icon: 'mingcute:user-4-fill', label: 'Entrar' },
  ]

  return (
    <Container>
      <img src="/images/logo.png" alt="Logo" style={{ height: '40px' }} />
      <Nav>
        {links.map((item) => {
          const hash = item.href.replace('#', '')
          const isActive = hash === currentHash
          return (
            <NavItem
              key={item.href}
              href={item.href}
              active={isActive}
              onClick={(e) => {
                if(!item.external){
                  e.preventDefault()
                  const el = document.getElementById(hash)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                  setCurrentHash(hash)
                }
              }}
              style={{ display: 'flex', alignItems: 'center', }}
            >
              {item.icon && (
                <Icon icon={item.icon} style={{ fontSize: '1.5rem', marginRight: '.5rem' }} />
              )}
              {item.label}
            </NavItem>
          )
        })}
      </Nav>
    </Container>
  )
}
