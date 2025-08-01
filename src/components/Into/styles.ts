'use client'

import styled from 'styled-components'

interface Props {
    full?: boolean;
    fixed?: boolean;
}

export const Container = styled.div.withConfig({
    shouldForwardProp: (prop) => !['full', 'fixed'].includes(prop),
}) <Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 4.5rem;
    padding: 0 2rem;
    color: #fff;
    font-weight: 300;
    position: relative;
    z-index: 999;

    >img {
        width: 15rem;
    }

    >img::after {
        content: '';
    display: block;
    width: 10px;
    height: 100%;
    position: absolute;
        background-color: ${({ theme }) => theme.colors.background};
    }

    @media (max-width: 980px) {
        justify-content: center;
        position: fixed;
        top: 0;
    }

    @media (min-width: 980px) {
        position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
        >h2:not(.category) {
            display: none;
        }
    }

    @media (max-width: 425px) {
        >h2.category {
            font-size: 11px;
        }
    }

    >h2 {
        font-size: 16px;
        user-select: none;
    }

    >span {
        display: flex;
        font-weight: 500;
        font-size: 12px;
        position: absolute;
        left: 15px;
        gap: 2px;
        user-select: none;
        cursor: none;
    }
        
`

export const RightSide = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'full',
}) <Props>` 
    display: flex;
    width: ${({ full }) => (full ? 'fit-content' : '85%')};

    >h2 {
        width: ${({ full }) => (full ? 'fit-content' : '100%')};
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;
    }
    hr {
        border: 1px solid #fff;
        margin: 0 2rem 0 1rem;
    }

    @media (max-width: 980px) {
        display: none;
    }
`

export const LocationContainer = styled.div` 
    display: flex;
    align-items: flex-start;
    gap: 5px;
    cursor: pointer;
    position: relative;
    justify-content: flex-end;
`

export const SelectedLocation = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h4 {
        display: flex;
        gap: 5px;
        font-weight: 500;
        font-size: 15px;
        align-items: center;
        width: 100%;
        justify-content: flex-end;
        user-select: none;
    }
    
    span {
        font-size: 12px;
        user-select: none;
    }

`

export const LogoWrapper = styled.div` 
    height: 40px;
    position: relative;
    cursor: pointer;
    margin-right: 1.5rem;

    >img {
        height: 100%;
    }
`

export const LeftSide = styled.div` 
    display: flex;
    gap: 25px;

    @media (max-width: 980px) {
        display: none;
    }
`

export const NavItem = styled.a`
  color: #fff;
  cursor: pointer;
  font-weight: 500;
`

export const UserContent = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 5px;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    white-space: nowrap;

    img {
        width: 3rem;
    }
`