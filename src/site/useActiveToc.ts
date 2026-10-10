import { useEffect, useState } from 'react';

/** Tracks which heading in `ids` the reader has scrolled past most recently. */
export function useActiveToc(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');
  const key = ids.join('|');
  useEffect(() => {
    if (!ids.length) return;
    const onScroll = () => {
      let act = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 160) act = id;
      }
      setActive(act);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return active;
}
