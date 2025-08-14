import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';

export function useCustomBackAction(callback: () => string | boolean | void) {
  const router = useRouter();
  
  useEffect(() => {
    const handlePopState = () => {
      const result = callback();
      if (typeof result === 'string') {
        router.push(result);
      } else if (result === false) {
        return;
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [callback, router]);

}
