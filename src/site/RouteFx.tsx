import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Room left above a heading on the reading pages: frozen header (72px) plus breathing space. */
export const READ_OFFSET = 96;

/** Scroll to an element id, leaving a little room above it. */
export function scrollToId(id: string, offset = 24) {
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: reducedMotion() ? 'auto' : 'smooth' });
  return true;
}

/**
 * Route transitions: a short fade-up on every path change, scroll reset to the top,
 * or to the #hash target when the link carries one (e.g. /#research from an inner page).
 */
export function RouteFx({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useLayoutEffect(() => {
    const id = hash.slice(1);
    if (id) {
      // Wait a frame so the new page has laid out before measuring.
      requestAnimationFrame(() => {
        if (!scrollToId(id, 0)) window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
    if (first.current) {
      first.current = false;
      return;
    }
    if (!reducedMotion() && ref.current?.animate) {
      ref.current.animate(
        [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }],
        { duration: 220, easing: 'cubic-bezier(.2,.7,.2,1)' },
      );
    }
    // Only path changes animate; hash changes within a page just scroll.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useLayoutEffect(() => {
    const id = hash.slice(1);
    if (id) scrollToId(id, 0);
  }, [hash]);

  return <div ref={ref}>{children}</div>;
}
