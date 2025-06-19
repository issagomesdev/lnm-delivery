'use client'

import styled from 'styled-components'

export const Datas = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4rem 3rem;
    row-gap: 4rem;

    @media (max-width: 980px) {
        flex-direction: column;
    }
`

export const Data = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
        text-decoration: underline;
        color: blue;
    }

    @media (max-width: 1200px) {

        h4, p, a {
            font-size: 13px;
        }
    
        h3 {
            font-size: 15px;
        }
    }

     @media (max-width: 980px) {
        width: 100%;

        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            position: absolute;
            background-color: #000;
            bottom: -30px;
        }

        &:last-child::after {
            height: 0;
        }
    }
`

export const Label = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 1rem;
`



export const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  resize: none;
`

export const Notice = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin: 1rem 0;
`