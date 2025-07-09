import { useEffect, useState } from 'react';

export function useScrollTrigger(ref?: React.RefObject<HTMLElement | null>) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        setTriggered(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return triggered;
}
