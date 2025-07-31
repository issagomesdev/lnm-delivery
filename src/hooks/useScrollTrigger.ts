import { useEffect, useRef, useState } from 'react';

export function useScrollTrigger(ref?: React.RefObject<HTMLElement | null>) {
  const [triggered, setTriggered] = useState(false);
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref?.current) return;

      const rect = ref.current.getBoundingClientRect();
      const threshold = window.innerWidth > 980 ? -150 : 50;
      const currentScrollY = window.scrollY;

      const isScrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      
      setTriggered(rect.top <= threshold);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref]);

  return triggered;
}
