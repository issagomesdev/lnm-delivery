'use client';

import styled, { css } from 'styled-components';

export const CategorySelector = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  overflow: auto;
  padding: 10px 0;

  &::-webkit-scrollbar {
    height: 6px;
    background-color: #F5F5F5;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  &:not(:hover)::-webkit-scrollbar-thumb, &:not(:hover)::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryButton = styled.button<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : 'transparent'};
  color: ${({ selected, theme }) =>
    selected ? '#fff' : theme.colors.primary};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;

    &::-webkit-scrollbar {
    height: 6px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:not(:hover)::-webkit-scrollbar-thumb, &:not(:hover)::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuItem = styled.div<{ withImage?: boolean }>`
  display: flex;
  flex-direction: ${({ withImage }) => (withImage ? 'row' : 'column')};
  align-items: ${({ withImage }) => (withImage ? 'flex-start' : 'flex-start')};
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.separators};
  padding: 1rem;
  gap: 1rem;
  width: calc(50% - 0.75rem); // 2 itens por linha, considerando o gap

  ${({ withImage }) =>
    withImage &&
    css`
      @media (max-width: 768px) {
        align-items: center;
      }
    `}

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuInfo = styled.div`
  flex: 1;
`;

export const MenuName = styled.h3`
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 4px;
`;

export const MenuDescription = styled.p`
  font-size: 13px;
  color: #777;
  margin: 0 0 8px;
`;

export const MenuPrice = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green_highlight};
  font-size: 14px;
`;

export const MenuImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
`;
