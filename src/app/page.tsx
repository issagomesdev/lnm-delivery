'use client'

import AppWeb from '@/components/Web/App';
import AppMob from '@/components/Mobile/App';
import ScrollDown from '@/components/Home/ScrollDown';
import FeaturesSection from '@/components/Home/Sections/FeaturesSection';
import MealsSection from '@/components/Home/Sections/MealsSection';
import HowItWorksSection from '@/components/Home/Sections/HowItWorksSection';
import CitiesSection from '@/components/Home/Sections/CitiesSection';
import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const [showScroll, setShowScroll] = useState(true)
  const isMobile = useIsMobile();

    useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const featuresTop = featuresRef.current?.offsetTop ?? 0

      if (scrollY > featuresTop - windowHeight) {
        setShowScroll(false)
      } else {
        setShowScroll(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isMobile ? <AppMob /> : <AppWeb />}
      <ScrollDown isVisible={showScroll}/>
      <div ref={featuresRef}>
        <FeaturesSection />
      </div>
      <MealsSection />
      <HowItWorksSection />
      <CitiesSection />
    </>
  )
}