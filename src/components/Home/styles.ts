'use client'

import styled, { keyframes } from 'styled-components'

export const LocationContainer = styled.div`
  width: 100%;
  gap: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 11rem;

  @media (max-width: 980px) {
    margin-top: 1rem;
  }

  @media (min-width: 980px) {
   position: absolute;
  }
`

export const LocationSelectorContainer = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Select = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 30rem;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 3px solid ${({ theme }) => theme.colors.separators};

  select {
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const LocationIcon = styled.h3`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  
  img {
    width: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const SearchDeliveryButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  outline: none;
  border: none;
  width: 95%;
  padding: 0.8rem 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  cursor: pointer;
`

export const LinkAppContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  img {
    width: 15rem;
  }

  @media (max-width: 768px) {
    img {
      width: 10rem;
    }
  }
`

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`

export const ScrollDownContainer = styled.span`
  position: fixed;
  bottom: 10px;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  right: 48%;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${bounce} 1.5s infinite;
  Z-index: 1000;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  opacity: 1;
  visibility: visible;

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }

  @media (max-width: 768px) {
    right: 45%;
  }
`
