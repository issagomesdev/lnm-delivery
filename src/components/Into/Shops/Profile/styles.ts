import styled from 'styled-components';
import { Icon } from '@iconify/react';

// ShopProfile

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 5rem;

  hr {
   margin-top: 1rem;
   color: ${({ theme }) => theme.colors.separators};
  }
`;

export const Cover = styled.div`
  position: relative;
  height: 300px;
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
    user-select: none;

    img {
      position: relative;
      border: 3px solid white;
      background-color: #fff;
      object-fit: cover;
      border-radius: 6px;
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
    cursor: pointer;
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
  user-select: none;

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
  padding: 16px;
  height: 85%;
  overflow: auto;
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
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: #fff;
  font-size: 0.9rem;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  width: fit-content;
`;

// Reviews

 export const Summary = styled.div`
  text-align: center;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin: 8px 0;
  }

  p, strong {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text_secondary};
    font-weight: 500;
    margin-top: 8px;
  }
`;

 export const Stars = styled.div`
  color: #FFD700;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
`;

 export const RatingsSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 12px;
  background-color: #ebebeb;
  border-radius: 4px;
  row-gap: 15px;
  column-gap: 12px;

 @media (max-width: 450px) {
    justify-content: space-around;
  }
`;

 export const RatingRow = styled.div`
  display: flex;
  flex-direction: column;

  strong, span {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  strong {
    color: ${({ theme }) => theme.colors.text_secondary};
  }

  span {
    font-weight: 500;
  }

 @media (max-width: 400px) {
    strong {
      font-size: 10px;
      white-space: nowrap;
    }
  }
`;

 export const ReviewsContainer = styled.div`
    margin-top: 1rem;
`;

 export const CommentBox = styled.div`
  padding: 10px;
  border-radius: 8px;
  margin-top: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separators};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`;


 export const RatingHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

 export const ReplyContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;

  >span {
    color: gray;
  }
`;

 export const ReplyLab = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ReplyIcon = styled(Icon)`
  font-size: 10px;
  transform: scaleX(-1);
`;

// Categories

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 0 1rem;
`;

export const CategoryItem = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.separators};
  font-size: 15px;
  color: #333;
  cursor: pointer;
  transition: background 0.2s ease;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.separators};
  }

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text_secondary};
  }
`;

