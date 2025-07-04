import styled from 'styled-components';
import { Icon } from '@iconify/react';

// ShopProfile

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
  height: 340px;
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
  bottom: 12px;
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
      width: 90px;
      height: auto;
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
    bottom: 4%;
`;

export const InfoRow = styled.div`
  display: flex;
  padding: 0 16px;
  border-radius: 10px;
  margin-top: 8px;
  align-items: flex-end;
  justify-content: space-around;

  @media (max-width: 650px) {
    padding: 0;
    justify-content: space-between
  }
`;

export const QuickInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  gap: 2px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_secondary};
  font-weight: 500;
  cursor: pointer;

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
      font-size: 10px;
    }

    h1 {
      font-size: 18px;
    }
  }
    
`;

export const ItemIcon = styled(Icon)`
  font-size: 30px;

  @media (max-width: 650px) {
    font-size: 25px;
  }
`;

// DeliveryFees

export const Content = styled.div`
  padding: 16px 24px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  outline: none;
`;

export const FeeRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 15px;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 500;

  &:last-child {
    border-bottom: none;
  }
`;

// Informations

 export const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
    
  h3 {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    font-size: 0.95rem;
  }
`;

 export const DeliveryHours = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0;
    width: 80%;
    font-size: 0.95rem;
  }

  h4 {
    color: #96989a;
  }
`;

 export const PaymentsTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

 export const PaymentsType = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  background-color: #f5f5f5;
  padding: 0 4px;
  border-radius: 4px;

  img {
    width: 2rem;
    height: auto;
  }

  span {
    font-size: 10px;
  }
`;

 export const MapButton = styled.button`
  margin-top: 1rem;
  background-color: #f4a261;
  border: none;
  color: #fff;
  font-size: 0.9rem;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  width: fit-content;
`;