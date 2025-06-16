'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
`

export const MaskedImage = styled.div`
  position: relative;
  display: inline-block;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.6); 
    pointer-events: none;
  }
`