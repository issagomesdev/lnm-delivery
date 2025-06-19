'use client'

import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 6rem;
    padding: .6rem 2rem;
    color: #fff;
    font-weight: 300;

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
    }

    @media (max-width: 600px) {
        >h2 {
            font-size: 15px;
        }
    }
`

export const LogoWrapper = styled.div` 
    width: 15rem;
    position: relative;

    >img {
        width: 100%;
    }

    &::after {
        content: '';
        display: block;
        width: 1px;
        height: 100%;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.background};
        top: 0;
        right: -30px;
    }

    @media (max-width: 980px) {
        display: none;
    }
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

    img {
        width: 3rem;
    }

    @media (max-width: 980px) {
        display: none;
    }
`