'use client'

import styled, { keyframes } from 'styled-components'

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

export const LocationContainer = styled.div`
  position: absolute;
  width: 100%;
  gap: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
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
`

export const SearchDeliveryButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  outline: none;
  border: none;
  width: 95%;
  padding: 0.5rem 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
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
  right: 50%;
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
`
