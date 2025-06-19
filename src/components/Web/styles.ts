'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
`

export const MaskedImage = styled.div`
  position: relative;
  display: inline-block;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.6); 
    pointer-events: none;
  }
`

export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  padding: 1rem;
  right: 30px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 13rem;
  z-index: 999;
  border-radius: 0 0 6px 7px;
`

export const UserContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: 500;
  font-size: .8rem;

  img {
    width: 3.5rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.875rem;
  text-decoration: none;
  margin-top: 1rem;
  
`

export const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  gap: .3rem;
  font-size: .8rem;

  img {
      width: 2rem;
    }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
`