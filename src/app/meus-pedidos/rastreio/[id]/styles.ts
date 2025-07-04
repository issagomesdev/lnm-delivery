'use client'

import styled from 'styled-components'

export const Container = styled.div`
  padding: 3rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 980px) {
    padding: 5rem 2rem;
  }
`;

export const StepProgress = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  width: 60%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: grey;
  position: relative;
  width: 100%;

  >span {
    color: #000;
    font-weight: 500;
    font-size: .8rem;
  }

  @media (max-width: 450px) {
    >span { 
    font-size: .6rem;
    }
  }
`;

export const StepCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: '#ccc';

  &.active {
    color: ${({ theme }) => (theme.colors.green_highlight)};
  }

  @media (max-width: 450px) {
    >span { 
    font-size: .8rem;
    }
  }
`;


export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: #ccc;

  &::after, &::before {
    content: '';
    display: block;
    width: 45%;
    right: 0;
    height: 7px;
    position: absolute;
    background-color: #ccc;
    z-index: -1;
  }

  &::before {
    left: 0;
  }

  &.last::after, &.first::before {
    display: none;
  }

  .active &, .active &.next::after, &.previous::before {
    background-color: ${({ theme }) => theme.colors.green_highlight};
  }
`;

export const Label = styled.span`
  margin-top: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const Emoji = styled.img`
  width: 12rem;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  h3 {
    color: ${({ theme }) => (theme.colors.primary)};
    font-size: 1rem
  }

  p {
    font-size: 10px;
  }
`;

export const DeliveryTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  >a {
    text-decoration: underline;
    font-size: .9rem;
  }

  h4 {
    font-size: 13px;
  }
`;

export const OrderButton = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  width: 40%;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ContactChannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CallButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.6rem 0;
  border-radius: 6px;
  font-size: 1rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 70%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
