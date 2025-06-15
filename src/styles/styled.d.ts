// src/styles/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string,
        menu_description: string,
        separators: string,
        green_highlight: string,
        conceptual_green: string,
        golden_yellow: string,
        blue: string,
        promo_alert_txt: string,
        promo_alert_background: string,
        background: string,
        text: string,
        text_secondary: string,
    }
    fonts: {
      main: string
    }
    borderRadius: string
  }
}
