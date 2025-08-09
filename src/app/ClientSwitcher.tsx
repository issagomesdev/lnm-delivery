'use client';

import dynamic from 'next/dynamic';
import ScrollDown from '@/components/Home/ScrollDown';
import FeaturesSection from '@/components/Home/Sections/FeaturesSection';
import MealsSection from '@/components/Home/Sections/MealsSection';
import HowItWorksSection from '@/components/Home/Sections/HowItWorksSection';
import CitiesSection from '@/components/Home/Sections/CitiesSection';
import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile';
import Footer from '@/components/Home/Footer';

const AppWeb = dynamic(() => import('@/components/Web/App'));
const AppMob = dynamic(() => import('@/components/Mobile/App'));

export default function ClientSwitcher({ initialIsMobile }: { initialIsMobile: boolean }) {
    const isMobile = useIsMobile(980, initialIsMobile);
    const featuresRef = useRef<HTMLDivElement>(null)
    const [showScroll, setShowScroll] = useState(true)

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
            <ScrollDown isVisible={showScroll} />
            <div ref={featuresRef}>
                <FeaturesSection />
            </div>
            <MealsSection />
            <HowItWorksSection />
            <CitiesSection />
            <Footer />
        </>
    );
}
