import { useCallback, useEffect, useRef, useState } from 'react';

/** Copy text to the clipboard and remember which key was copied for 1.6s. */
export function useCopy() {
  const [copied, setCopied] = useState('');
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = useCallback((key: string, text: string) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(key);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(''), 1600);
  }, []);
  return { copied, copy };
}
