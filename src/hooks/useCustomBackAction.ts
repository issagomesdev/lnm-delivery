import { useEffect } from 'react';

export function useCustomBackAction(callback: () => boolean | void) {
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const shouldBlock = callback();

      if (shouldBlock === false) {
        return;
      }

      window.history.pushState(null, '', window.location.pathname);
    };

    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [callback]);
}
