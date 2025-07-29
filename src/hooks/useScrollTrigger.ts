import { useEffect, useState } from 'react';
import { useIsMobile } from './useIsMobile';

export function useScrollTrigger(ref?: React.RefObject<HTMLElement | null>) {
  const [triggered, setTriggered] = useState(false);
  const mobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        setTriggered(rect.top <= (mobile? 300 : 0));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return triggered;
}
