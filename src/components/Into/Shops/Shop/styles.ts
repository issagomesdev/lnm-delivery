import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 16px;

  hr {
   margin-top: 1rem;
   color: ${({ theme }) => theme.colors.separators};
  }
`;


export const Cover = styled.div`
  position: relative;
  height: 240px;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 2px solid #eee;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 2rem;
  bottom: 30px;
  position: relative;

  @media (max-width: 650px) {
    padding: 0 1rem;
  }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    img {
      position: relative;
      width: 120px;
      height: 120px;
      border: 3px solid white;
      background-color: #fff;
      object-fit: cover;
      border-radius: 6px;
      bottom: 20px;
    }
`;

export const ShopName = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  margin-left: 15px;
`;

export const RatingBadge = styled.div`
    background-color: ${({ theme }) => theme.colors.golden_yellow};
    font-size: 12px;
    padding: 4px;
    border-radius: 6px;
    color: #fff;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #fff;
    position: absolute;
    right: 20px;
    bottom: 8%;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 16px;
  padding: 0 16px;
  border-radius: 10px;
  margin-top: 8px;

  @media (max-width: 650px) {
    padding: 0;
  }
`;

export const QuickInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  gap: 2px;
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_secondary};
  font-weight: 500;

  h1 {
    font-size: 24px;
  }

  span {
    font-size: 12px;
  }

  @media (max-width: 650px) {
    span {
      font-size: 12px;
    }

    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 400px) {
    span {
      font-size: 9px;
    }

    h1 {
      font-size: 15px;
    }
  }
    
`;

export const ItemIcon = styled(Icon)`
  font-size: 30px;

  @media (max-width: 650px) {
    font-size: 20px;
  }
`;