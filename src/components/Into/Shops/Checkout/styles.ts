import styled, { css, keyframes } from "styled-components";

interface Props {
  active?: boolean;
  requerid?: boolean;
}

export const ItemImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: auto;
        padding: .5em;
    }
    
    @media (max-width: 600px){
      margin: 0;
      width: 100%;

      img {
       padding: 0
      }
    }
`;

export const ItemInfo = styled.div`
   
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalBox = styled.div`
  background: #fff;
  border-radius: 4px;
  width: 90%;
  height: 95%;
  max-width: 65%;
  max-height: 600px;
  padding: 0;
  text-align: center;
  position: relative;
  overflow: auto hidden;

  >h2 {
    color: #000
  }

  @media (max-width: 980px){
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
`

export const Container = styled.div`
  height: 77%;
  display: flex;

 @media (max-width: 600px){
  overflow-y: auto;
  flex-direction: column;
 }
`;

export const AddItem = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 999;
    animation: ${slideDown} 0.6s ease-out forwards;
    
   img {
    width: 20rem;
   }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;

  @media (min-width:600px) {
   overflow: hidden auto;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:not(:hover)::-webkit-scrollbar-thumb, &:not(:hover)::-webkit-scrollbar {
    display: none;
  }
`;

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const Section = styled.div`
  padding: 10px 15px;
  text-align: left;
  
  h3, h4 {
    margin: 0 0 6px 0;
  }
`;

export const OptionsLabel = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  text-align: left;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separators};
  margin: 0 15px;
  padding: 10px 0;
`;

export const OptionHeader = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'requerid',
}) <Props>`
  background-color: #ebebeb;
  padding: 10px;
  border-radius: 6px;
  position: relative;

  >span.required {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 8px;
    padding: 2px 5px;
    border-radius: 3px;
    position: absolute;
    right: 10px;
    bottom: 5px;
  }

  ${({ requerid }) =>
    requerid &&
    css`
      animation: ${scale} .8s ease-in-out infinite;

      >h4 {
        color: ${({theme}) => theme.colors.primary}
      }
    `}

    
`;

export const OptionQuantity = styled.div`
    display: flex;
    align-items: center;
    font-size: 10px;
    font-weight: 500;
    color: #777;
    
    span {
        margin-right: 10px;
    }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 4px;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.green_highlight};
  font-weight: bold;
  margin: 10px 0 0 0;
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 10px;
`;

export const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2.5rem;
  align-items: center;

  input[type='checkbox'] {
    accent-color: ${({ theme }) => theme.colors.primary};
    width: 18px;
    height: 18px;
    cursor: pointer;
    border-radius: 4px;
  }

  input[type="checkbox"]:not(:checked) {
    appearance: none;
    -webkit-appearance: none;
    border: 2px solid rgb(0 0 0 / 30%);
  }
`;

export const ItemName = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;

    >span {
      font-size: 12px;
      margin-top: 5px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.green_highlight};
    }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  span {
    min-width: 20px;
    text-align: center;
    font-weight: 500;
  }
`;

export const QuantityButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: #fff;
  border-radius: 4px;
  width: 28px;
  height: 28px;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
`;

export const TextArea = styled.div`
  
  width: 100%;
  border: 1px solid rgb(0 0 0 / 30%);
  border-radius: 6px;
  padding: 10px;

  textarea {
   width: 100%;
   resize: none;
   border: none;
   outline: none;
   min-height: 80px;
   margin-top: 5px;
  }

  strong {
    font-size: 15px;
  }
`;

export const Footer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: flex-end;
  border-top: 1px solid #eee;
  position: absolute;
  width: 100%;
  bottom: 0;
  background: #fff;
`;

export const FooterContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  gap: 2.5rem;

  @media (max-width: 600px){
    justify-content: space-between;
    width: 100%;
  }
`;

export const AddButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
}) <Props>`
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : '#D2D2D2'};
  color: white;
  border: none;
  padding: 16px 10px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: ${({ active }) => (active ? 'pointer' : 'not-allowed')};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  transition: 0.3s ease all;
`;

export const TotalPrice = styled.span`
  font-weight: bold;
`;


// 