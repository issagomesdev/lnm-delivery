import styled from 'styled-components';
import { styled as styledBase } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  padding: 3rem 1rem;
  margin-bottom: 5rem;
`;

// categories
export const CategoriesWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding: 2px 0;
  position: relative;
  padding-bottom: 5px;

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

interface CategorySelectedProps {
  isSelected?: boolean;
}

export const CategoryItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<CategorySelectedProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 6rem;
  cursor: pointer;
  position: relative;
  user-select: none;
  border-radius: 8px;
  padding: 6px;
  transition: 0.3s;
`;

export const CategoryImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<CategorySelectedProps>`
  width: 80px;
  height: auto;
  border-radius: 8px;
  
  background-color: ${({ isSelected }) =>
    isSelected ? '#E6F4F1' : 'transparent'};
`;

export const CategoryName = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<CategorySelectedProps>`
  font-size: 12px;
  margin-top: 4px;
  background: ;
  padding: 3px 10px;
  text-align: center;
  border-radius: 15px;
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.conceptual_green: theme.colors.primary };
`;

// banners
export const BannersWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  margin: 16px 0;
  padding-bottom: 5px;

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

export const BannerImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
`;

// shops
export const ShopsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FilterInput = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  input {
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
  }
`;

export const FilterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.separators};
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 14px;
  cursor: pointer;
  color: gray;
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 400px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

interface ShopCountProps {
  close?: boolean;
}

export const ShopCount = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'close',
}) <ShopCountProps>`
  font-weight: bold;
  color: ${({ close }) => (close ? '#fff' : '#24b03c')};
  background-color: ${({ close }) => (close ? '#d67085' : 'transparent')};
  padding: ${({ close }) => (close ? '2rem 1rem' : '0 1rem')};

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const ShopItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ShopItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  align-items: center;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ShopImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ShopInfo = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  max-width: 100%;
  flex-direction: column;
  gap: 5px;
`;

export const ShopName = styled.h4`
  margin: 0;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 95%;
`;

export const ShopMeta = styled.p`
  font-size: 10px;
  color: #666;
  display: flex;
  gap: 10px;

  span {
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &.time {
    color: ${({ theme }) => theme.colors.conceptual_green};
    font-weight: 500;
  }

  &.close {
    color: #fff;
    background-color: #f02649;
    font-weight: 500;
    padding: 2px 6px;
    width: fit-content;
    border-radius: 10px;
  }
`;

export const ShopFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShopRating = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_secondary};
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const ShopOffer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Tag = styled.div`
  background-color: #fdf2e4;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  gap: 5px;
  width: fit-content;
  text-align: center;

  p {
     width: 90%;
  }
`;

export const ShopsEmpty = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;

export const ShopsEmptyIcon = styled.div`
  width: 12rem;

  img {
    width: 100%;
  }
`;

export const FilterIsActiveCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green_highlight};
  position: fixed;
  top: 0;
  right: 0;
  padding: .7rem 1rem;
  text-align: center;

  h4 {
    color: #fff;
    font-weight: 500;
  }
`;

// bottom navigation
export const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 12px 0;
  border-top: 1px solid #eee;
`;

interface NavItemProps {
  active?: boolean;
}

export const NavItem = styledBase.a.withConfig({
  shouldForwardProp: (prop) => prop !== 'active', 
}) <NavItemProps>`
  display: flex;
  gap: 3px;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: ${({ active, theme }) => (active ? theme.colors.primary : '#333')};
`;

// Advanced Filter

export const FilterSections = styled.div`
  overflow: hidden scroll;
  height: 85%;
  margin-bottom: 3rem;
`;

export const Section = styled.div`
  padding: 16px;
`;

export const SectionTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: start;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  justify-content: space-between;
  
  input[type='radio'] {
    accent-color: ${({ theme }) => theme.colors.primary};
  }

  label {
    font-size: 14px;
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

interface TagItemProps {
  isActive?: boolean;
}

export const TagItem = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive', 
})<TagItemProps>`
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 12px;
  background: ${({ isActive, theme }) => isActive ? theme.colors.primary : '#eee'};
  color: ${({ isActive }) => isActive ? '#fff' : '#333'};
  cursor: pointer;
  user-select: none;
`;

export const FooterButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: bold;
  padding: 16px;
  font-size: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  position: sticky;
  bottom: 0;
`;
