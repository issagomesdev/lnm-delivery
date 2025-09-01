'use client';

import styled, { keyframes } from 'styled-components';


interface Props {
  selected?: boolean;
}

export const PizzaBackground = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 20rem;
    z-index: -1;
    user-select: none;

    @media (max-width: 980px){
        width: 10rem;
    }

    img {
     width: 100%;
    }
`;


export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    padding-top: 2rem;
    height: 100%;
    user-select: none;

    @media (max-width: 980px){
        top: 3rem;
        position: fixed;
        z-index: 999;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 0 1.5rem;

    p {
     text-align: center;
    }
    span {
     font-size: 10px
    }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
`;

export const Option = styled.div`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15rem;
    color: #fff;
    border-radius: 4px;
    animation: ${scale} 2s ease-in-out infinite;
`;

export const FlavorsFigure = styled.div`
    width: 25rem;
    position: relative;

    img {
        width: 100%;
    }

    @media (max-width: 1366px){
       width: 20rem; 
    }

    @media (max-width: 600px){
       width: 15rem; 
    }
`;

export const FlavorsSelecteds = styled.div`
    cursor: pointer;
    background-color: #fff091;
    border-radius: 8px;

    h4 {
     padding: 0.5rem 1.5rem;
    }
`;

export const FlavorsOptions = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`;

const shakeScale = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  15% {
    transform: scale(1.05) rotate(-3deg);
  }
  30% {
    transform: scale(1.1) rotate(3deg);
  }
  45% {
    transform: scale(1.05) rotate(-2deg);
  }
  60% {
    transform: scale(1.08) rotate(2deg);
  }
  75% {
    transform: scale(1.03) rotate(-1deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
`;

export const FlavorsOption = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'selected',
}) <Props>`
 display: ${({selected}) => selected? 'none' : 'flex'};
  background-color: #feea3b;
  padding: 10px;
  width: 8rem;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  text-align: center;
  animation: ${shakeScale} 1s ease-in-out infinite;

  h4 {
    font-size: 16px;
   }
     
   span {
    font-size: 12px;
   }

   @media (max-width: 600px) {
     width: 4.5rem;

     h4 {
      font-size: 14px;
      white-space: nowrap;
     }
     
     span {
      font-size: 9px;
      white-space: nowrap;
     }
    }
`;

export const ChangeCategory = styled.div`
    cursor: pointer;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 4px;
    color: ${({theme}) => theme.colors.primary};
    font-weight: 500;
    font-size: 13px;
`;

export const FlavorSelected = styled.div`
    color: red;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin: 10px 0;
`;

export const ForwardButton = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.conceptual_green};
    position: fixed;
    bottom: 0;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    gap: 5px;
    cursor: pointer;
    animation: ${shakeScale} 1s ease-in-out infinite;
`;