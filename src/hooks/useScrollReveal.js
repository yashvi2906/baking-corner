import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to a ref'd element.
 * Adds the 'visible' CSS class when it enters the viewport.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="reveal">...</div>
 *
 * Also works with 'reveal-left', 'reveal-right' CSS classes.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      {
        threshold:   options.threshold  ?? 0.12,
        rootMargin:  options.rootMargin ?? '0px 0px -60px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * useScrollRevealGroup
 * Applies staggered reveal to a list of refs.
 */
export function useScrollRevealGroup(count, options = {}) {
  const refs = Array.from({ length: count }, () => useRef(null));

  useEffect(() => {
    refs.forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 100);
            observer.unobserve(el);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
      );

      observer.observe(el);
      return () => observer.disconnect();
    });
  }, []);

  return refs;
}