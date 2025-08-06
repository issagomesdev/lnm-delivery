'use client';

import styled, { css } from 'styled-components';

interface Props {
    withImage?: boolean;
    fixed?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  padding: 2rem 1rem 3rem 1rem;
  margin-bottom: 1rem;

  @media (max-width: 980px) {
    padding: 6rem 1rem 0 1rem;
    margin-bottom: 5rem;
  }
`;


export const CategorySelector = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 0px;
    width: 0px;
    background-color: #F5F5F5;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  &:not(:hover)::-webkit-scrollbar-thumb, &:not(:hover)::-webkit-scrollbar {
    display: none;
  }
`;  

export const CategoriesHeader = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'fixed',
}) <Props>`
  position: ${({ fixed }) => fixed? 'fixed' : 'relative'};
  width: 100%;
  ${({ fixed }) => fixed? 'padding: 1rem; left: 0; top: 0;' : ''}
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 980px){
    padding-top: ${({ fixed }) => fixed? '80px' : '0'};
  }
`

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
   user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

export const MenuItems = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'fixed',
}) <Props>`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;
  margin-top: ${({ fixed }) => fixed? '9rem' : '0'};

    &::-webkit-scrollbar {
    height: 0px;
    width: 0px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:not(:hover)::-webkit-scrollbar-thumb, &:not(:hover)::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuItem = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'withImage',
}) <Props>`
  display: flex;
  flex-direction: ${({ withImage }) => (withImage ? 'row' : 'column')};
  align-items: ${({ withImage }) => (withImage ? 'flex-start' : 'flex-start')};
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.separators};
  padding: 1rem;
  gap: 1rem;
  width: calc(50% - 0.75rem);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

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
  width: 100%;
`;

export const MenuName = styled.h3`
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 4px;
  user-select: none;
`;

export const MenuDescription = styled.p`
  font-size: 13px;
  color: #777;
  margin: 0 0 8px;
  user-select: none;
`;

export const MenuPrice = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.green_highlight};
  font-size: 14px;
  user-select: none;
`;

export const MenuImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  user-select: none;
`;
