'use client'

import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalBox = styled.div`
  background: #fff;
  border-radius: 4px;
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  text-align: center;
`

export const Content = styled.div`
  margin: 1rem 0;
  color: #333;
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
`

export const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.colors.conceptual_green};
  border: none;
  color: white;
  padding: .7rem;
  width: 100%;
  cursor: pointer;
`
