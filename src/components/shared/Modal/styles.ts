'use client'

import styled from 'styled-components'
interface Props {
  width?: number;
  $mobileFull?: boolean;
  $return?: boolean
}

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 1em;
  border-radius: 3px 3px 0 0;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

export const ModalBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'width',
})<Props>`
  background: #fff;
  border-radius: 4px;
  width: 90%;
  max-width: ${({ width }) => width ? `${width}px` : '400px'};
  padding: 2rem;
  text-align: center;
  position: relative;

  >h2 {
    color: #000;
    user-select: none;
  }
`

export const Label = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 1rem;
`

export const Content = styled.div`
  padding: 1rem;
  margin: 0;
  color: #333;
  overflow: hidden scroll;
  width: 100%;
  
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    margin: 19px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    border: 2px solid #F5F5F5;
  }
`

export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 1.5rem;
`

export const CancelButton = styled.button`
  background: #f44236;
  border: none;
  color: #fff;
  padding: .7rem;
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  user-select: none;
`

export const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.colors.conceptual_green};
  border: none;
  color: white;
  padding: .7rem;
  min-width: 160px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
`

export const CloseXButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'return',
})<Props>`
  position: absolute;
  top: 10px;
  ${({ $return }) => $return ? 'left: 10px;' : 'right: 10px;'}
  cursor: pointer;
  background: transparent;
  border: 0;
`;
