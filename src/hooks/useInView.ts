import { useEffect, useRef, useState } from 'react';

export function useInView(offset = 0.5) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= offset) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: offset }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [offset]);

  return { ref, isVisible };
}