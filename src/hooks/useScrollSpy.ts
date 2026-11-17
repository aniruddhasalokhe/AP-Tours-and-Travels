import { useEffect, useState } from 'react';

export interface UseScrollSpyOptions {
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * Custom hook that tracks which section is currently active in the viewport.
 * Uses IntersectionObserver for optimal performance and smooth nav link highlighting.
 *
 * @param sectionIds Array of section IDs (with or without leading '#')
 * @param options IntersectionObserver configuration options
 * @returns The currently active section ID (without '#')
 */
export function useScrollSpy(
  sectionIds: string[],
  options: UseScrollSpyOptions = {}
): string {
  const { rootMargin = '-20% 0px -60% 0px', threshold = 0 } = options;

  const initialId = sectionIds[0] ? sectionIds[0].replace(/^#/, '') : '';
  const [activeId, setActiveId] = useState<string>(initialId);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const cleanIds = sectionIds.map((id) => id.replace(/^#/, ''));
    if (cleanIds.length === 0) return;

    // When scrolled to the very top, set the first section as active
    const handleScroll = () => {
      if (window.scrollY < 80 && cleanIds[0]) {
        setActiveId(cleanIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin, threshold }
    );

    const elements = cleanIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds, rootMargin, threshold]);

  return activeId;
}

export default useScrollSpy;

