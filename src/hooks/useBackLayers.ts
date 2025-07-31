import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

type Layer = {
  isOpen: boolean;
  onClose: () => void;
  closeDelay?: number; 
};

type UseBackLayersOptions = {
  fallbackRoute: string;
};

export function useBackLayers(layers: Layer[], { fallbackRoute }: UseBackLayersOptions) {
  const router = useRouter();
  const prevStatesRef = useRef<boolean[]>([]);

  useEffect(() => {
    layers.forEach((layer, index) => {
      const wasOpen = prevStatesRef.current[index];
      const isNowOpen = layer.isOpen;

      if (!wasOpen && isNowOpen) {
        window.history.pushState({ isLayer: true }, '', '');
      }

      prevStatesRef.current[index] = isNowOpen;
    });
  }, [layers.map(l => l.isOpen).join('|')]); 

  useEffect(() => {
    const handlePopState = () => {

      const lastOpen = [...layers].reverse().find(l => l.isOpen);

      if (lastOpen) {
        if (lastOpen.closeDelay) {
          setTimeout(() => lastOpen.onClose(), lastOpen.closeDelay);
        } else {
          lastOpen.onClose();
        }

        window.history.pushState({ isLayer: true }, '', '');
        return;
      }

      router.replace(fallbackRoute);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [layers, fallbackRoute, router]);
}
