import { useEffect, useRef, useState } from 'react';

export function useScrollTrigger(ref?: React.RefObject<HTMLElement | null>) {
  const [triggered, setTriggered] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref?.current) return;

      const rect = ref.current.getBoundingClientRect();
      
      setTriggered(rect.top <= 0);
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
