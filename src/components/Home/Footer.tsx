'use client'

import styled from 'styled-components'
import { Icon } from '@iconify/react'

const FooterContainer = styled.footer`
  background-color: #0e0e0e;
  padding: 30px;
  font-size: 0.8em;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`

const FooterNav = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      border: 0;
      color: #888;

      &:hover,
      &:active {
        color: #ddd;
      }
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`

const SocialIcons = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;

  li {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    a {
      color: #888;
      font-size: 1.6em;
      transition: color 0.2s;

      &:hover {
        color: currentColor;
      }
    }
  }
`

const Copyright = styled.p`
  color: #888;
  text-align: center;
  width: 100%;
  margin-top: 20px;
`

const DividerLine = styled.div`
  width: 100%;
  height: 5px;
  background: linear-gradient(
    to right,
    #ff5100 0%, #ff5100 33.33%,
    #ed9268 33.33%, #ed9268 66.66%,
    #ff621a 66.66%, #ff621a 100%
  );
`

export default function Footer() {
  return (
    <>
    <DividerLine />
    <FooterContainer>
      <Row>
        <FooterNav>
          <li><a href="#historia">Sobre nós</a></li>
          <li><a href="https://litoralnamesa.com.br/termos-de-uso/">Termos e Condições de Uso</a></li>
          <li><a href="https://litoralnamesa.com.br/politica-de-privacidade/">Política de Privacidade</a></li>
        </FooterNav>

        <SocialIcons>
          <li>
            <a href="https://www.facebook.com/litoralnamesa/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
              <Icon icon="ion:logo-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/litoralnamesa/" target="_blank" rel="noopener noreferrer">
              <Icon icon="ion:logo-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/LitoralnaMesa" target="_blank" rel="noopener noreferrer">
              <Icon icon="ion:logo-youtube" />
            </a>
          </li>
        </SocialIcons>
      </Row>

      <Row>
        <Copyright>
          Litoral Na Mesa &copy; 2025. Todos Os Direitos Reservados. <br />
          CNPJ: 18.882.242/0001-11
        </Copyright>
      </Row>
    </FooterContainer>
    </>
  )
}

