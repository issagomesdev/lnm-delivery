import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useCustomBackAction(callback: () => string | boolean | void) {
  const router = useRouter();

  useEffect(() => {
    const handlePopState = () => {
      const result = callback();

      if (typeof result === 'string') {
        router.push(result);
      } else if (result === false) {
        window.history.back();
      } else {
        window.history.pushState(null, '', window.location.pathname + window.location.search);

      }
    };

    window.history.pushState(null, '', window.location.pathname + window.location.search);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [callback, router]);
}
