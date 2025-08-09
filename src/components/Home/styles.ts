'use client'

import styled, { keyframes } from 'styled-components'

export const LocationContainer = styled.div`
  width: 100%;
  gap: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 980px) {
    margin-top: 1rem;
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
    padding: 0.3rem 0.5rem;
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
  width: 99%;
  padding: 1rem 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  cursor: pointer;
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

// Footer

export const FooterContainer = styled.footer`
  background-color: #0e0e0e;
  padding: 30px;
  font-size: 0.8em;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`

export const FooterNav = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      border: 0;
      color: #888;

      &:hover,
      &:active {
        color: #ddd;
      }
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`

export const SocialIcons = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;

  li {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    a {
      color: #888;
      font-size: 1.6em;
      transition: color 0.2s;

      &:hover {
        color: currentColor;
      }
    }
  }
`

export const Copyright = styled.p`
  color: #888;
  text-align: center;
  width: 100%;
  margin-top: 20px;
`

export const DividerLine = styled.div`
  width: 100%;
  height: 5px;
  background: linear-gradient(
    to right,
    #ff5100 0%, #ff5100 33.33%,
    #ed9268 33.33%, #ed9268 66.66%,
    #ff621a 66.66%, #ff621a 100%
  );
`
