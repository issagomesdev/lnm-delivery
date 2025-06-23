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
  padding: 8px 0;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
`;

export const CategoryImage = styled.img`
  width: 48px;
  height: 48px;
`;

export const CategoryName = styled.span`
  font-size: 12px;
  margin-top: 4px;
`;

// banners
export const BannersWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  margin: 16px 0;
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
  margin-bottom: 4rem;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
`;

export const FilterInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

export const FilterButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 14px;
  cursor: pointer;
`;

export const OpenCount = styled.div`
  margin: 12px 0 4px;
  font-weight: bold;
  color: #24b03c;
`;

export const ShopItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
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
`;

export const ShopName = styled.h4`
  margin: 0;
  font-size: 15px;
`;

export const ShopMeta = styled.span`
  font-size: 13px;
  color: #666;
`;

export const ShopFooter = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #f5a623;
  white-space: nowrap;

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
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #333;
`;
