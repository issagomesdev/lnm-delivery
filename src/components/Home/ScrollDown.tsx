import { ScrollDownContainer } from './styles'
import { Icon } from '@iconify/react'
import { theme } from '@/styles/theme'

export default function ScrollDown({ isVisible = true }: { isVisible?: boolean }) {

  const scrollToFeatures = () => {
    const el = document.getElementById('historia')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ScrollDownContainer style={{ opacity: isVisible ? 1 : 0 }} onClick={scrollToFeatures}>
      <Icon icon="tabler:arrow-down" color={theme.colors.background} width={'2rem'} />
    </ScrollDownContainer>
  )
}
