import { Icon } from '@iconify/react'
import { Copyright, DividerLine, FooterContainer, FooterNav, Row, SocialIcons } from './styles'

export default function Footer() {
  return (
    <>
    <DividerLine />
    <FooterContainer>
      <Row>
        <FooterNav>
          <li><a href="#historia">Sobre nós</a></li>
          <li><a href="/termos-de-uso">Termos e Condições de Uso</a></li>
          <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
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

