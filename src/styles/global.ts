import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Regular.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url('/fonts/Montserrat-VariableFont_wght.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.main};
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        min-height: 100vh;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
    }
  }
`
