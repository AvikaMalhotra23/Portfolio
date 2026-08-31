import { useEffect, useRef } from 'react';

/**
 * Lightweight scroll-reveal hook.
 * Adds `is-visible` class to elements with `.reveal` once they enter the viewport.
 * Also drives `.heading-underline` animations.
 */
export function useScrollReveal(deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current || document;

    const targets = root.querySelectorAll
      ? root.querySelectorAll('.reveal, .heading-underline')
      : document.querySelectorAll('.reveal, .heading-underline');

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
