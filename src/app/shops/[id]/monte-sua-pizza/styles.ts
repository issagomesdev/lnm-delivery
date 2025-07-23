'use client';

import styled from 'styled-components';


interface Props {
  selected?: boolean;
}


export const PizzaBackground = styled.div`
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 20rem;
    z-index: -1;

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
    align-items: center;
    margin-top: 2rem;
    
    @media (max-width: 980px){
        margin-top: 5rem;
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
`;

export const FlavorsFigure = styled.div`
    width: 30rem;
    position: relative;

    img {
        width: 100%;
    }

    @media (max-width: 600px){
       width: 15rem; 
    }

    @media (min-width: 600px) and (max-width: 1300px) {
       width: 25rem; 
    }
`;

export const FlavorsOptions = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
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

  @media (max-width: 600px){
    width: 4rem;
    padding: 6px;
    
    h4 {
     font-size: 10px;
    }
     
    span {
     font-size: 7px;
    }
   }

   @media (min-width: 600px) and (max-width: 1300px) {
     width: 7rem;

     h4 {
      font-size: 14px;
     }
     
     span {
      font-size: 9px;
     }
    }
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
    position: absolute;
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
`;