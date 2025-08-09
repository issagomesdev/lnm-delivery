import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';

export function useCustomBackAction(callback: () => string | boolean | void) {
  const router = useRouter();
  const { cart } = useShoppingCart();
  const pathname = usePathname();

  useEffect(() => {
    const isShopDetail = /^\/shops\/[^/]+$/.test(pathname);
    
    if (cart.length > 0 && isShopDetail) {
       window.history.pushState(null, '', '/shops');
       window.history.replaceState(null, '', window.location.pathname + "?CouponAlert=false");
    }

  }, [cart])

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
