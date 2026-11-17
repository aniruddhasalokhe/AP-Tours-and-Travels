import { useEffect, useRef, useState, type RefObject } from 'react';

export interface UseFadeInOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
}

/**
 * Custom hook that uses IntersectionObserver to detect when a DOM element
 * enters the viewport, adding a CSS class to trigger smooth entrance animations.
 *
 * @param options Configuration for threshold, rootMargin, triggerOnce, and CSS className
 * @returns [ref, isVisible] - ref to attach to the target element and visibility boolean
 */
export function useFadeIn<T extends HTMLElement = HTMLDivElement>(
  options: UseFadeInOptions = {}
): [RefObject<T | null>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -40px 0px',
    triggerOnce = true,
    className = 'is-visible',
  } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Graceful fallback for non-browser or unsupported environments
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      element.classList.add(className);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            element.classList.add(className);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
            element.classList.remove(className);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, className]);

  return [ref, isVisible];
}

export default useFadeIn;
