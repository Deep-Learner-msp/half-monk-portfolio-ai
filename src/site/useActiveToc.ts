import { useEffect, useState } from 'react';

/**
 * Tracks which heading in `ids` the reader has scrolled past most recently.
 * With `allowNone`, returns '' until the first id reaches the line (e.g. while the hero is in view).
 */
export function useActiveToc(ids: string[], { line = 160, allowNone = false } = {}) {
  const [active, setActive] = useState(allowNone ? '' : ids[0] ?? '');
  const key = ids.join('|');
  useEffect(() => {
    if (!ids.length) return;
    const onScroll = () => {
      let act = allowNone ? '' : ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < line) act = id;
      }
      setActive(act);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, line, allowNone]);
  return active;
}
