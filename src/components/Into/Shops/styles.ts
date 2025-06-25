import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
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
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 6rem;
  cursor: pointer;
  position: relative;
`;

export const CategoryImage = styled.img`
  width: 60px;
  height: auto;
`;

export const CategoryName = styled.span`
  font-size: 12px;
  margin-top: 4px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 3px 10px;
  text-align: center;
  border-radius: 15px;
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
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
  gap: 16px;
  margin-bottom: 8rem;
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
`;

export const ShopCount = styled.div<{ close?: boolean }>`
  margin: 12px 0 4px;
  font-weight: bold;
  color: ${({close}) => (close ? '#fff': '#24b03c')};
  background-color: ${({close}) => (close ? '#d67085': 'transparent')};
  padding: ${({close}) => (close ? '2rem 1rem': '0 1rem')};
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
  flex-direction: column;
  gap: 5px;
`;

export const ShopName = styled.h4`
  margin: 0;
  font-size: 15px;
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
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text_secondary};
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 2px;

  @media (max-width: 768px) {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

export const Tag = styled.div`
  display: inline-block;
  background-color: #fdf2e4;
  color: #c27b1f;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  margin-top: 6px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  gap: 5px;
  width: 100%;

  p {
     width: 90%;
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

export const NavItem = styled.div <{ active?: boolean }>`
  display: flex;
  gap: 3px;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: ${({active, theme}) => (active ? theme.colors.primary : '#333')};
`;
