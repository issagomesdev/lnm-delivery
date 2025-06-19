'use client'

import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
`

export const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 200px;
  }
`

export const MenuButton = styled.button<{ $open: boolean }>`
  position: absolute;
  top: 1.5rem;
  ${({ $open }) => ($open ? 'left: 1.5rem' : 'right: 1.5rem')};
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: ${({ $open }) => ($open ? '50px' : '25px')};
  height: ${({ $open }) => ($open ? '50px' : '25px')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
`

export const MenuPanel = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background-color: #fff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1050;
`

export const MenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  z-index: 1000;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 1rem;
`
export const UserContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 500;

  img {
    width: 5rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  text-decoration: none;
  margin-top: 1rem;
  
`

export const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  gap: .3rem;
  font-size: 1rem;
  img {
      width: 2.5rem;
    }

`