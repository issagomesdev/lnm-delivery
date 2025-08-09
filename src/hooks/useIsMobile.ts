'use client';
import { useEffect, useState } from 'react';

export function useIsMobile(breakpoint = 980, initial = false) {
  const [isMobile, setIsMobile] = useState<boolean>(initial);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    // já mede na montagem para alinhar a qualquer redimensionamento pós-hidratação
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
}
