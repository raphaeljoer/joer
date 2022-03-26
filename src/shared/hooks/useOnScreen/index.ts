import { MutableRefObject, useEffect, useState } from 'react';

export function useOnScreen<T extends Element>(
  ref?: MutableRefObject<T>,
  rootMargin = '0px'
): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (!ref) return;
    const r = ref.current;
    if (ref.current) {
      observer.observe(r);
    }
    return () => {
      observer.unobserve(r);
    };
  }, [ref, rootMargin]);
  return isIntersecting;
}
