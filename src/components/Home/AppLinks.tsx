'use client'
import { LinkAppContainer } from './styles'

export default function AppLinks() {
  return (
    <LinkAppContainer>
      <a href="https://play.google.com/store/apps/details?id=com.litoralnamesa" target="_blank" rel="noopener noreferrer">
        <img src="/images/btn_app_store.png"/>
      </a>
      <a href="https://apps.apple.com/app/litoral-na-mesa/id6446021234" target="_blank" rel="noopener noreferrer">
        <img src="/images/btn_google_play.png"/>
      </a>
    </LinkAppContainer>
  )
}
