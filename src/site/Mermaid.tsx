import { useEffect, useId, useRef } from 'react';
import type { Theme } from './theme';

const vars = (dark: boolean) => ({
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: '13px',
  background: dark ? '#161826' : '#F6F3EC',
  primaryColor: dark ? '#1E2030' : '#ECE7DC',
  primaryTextColor: dark ? '#E9E9ED' : '#1C1B19',
  primaryBorderColor: dark ? '#595D6C' : '#B9B1A2',
  lineColor: dark ? '#9397AB' : '#6B675F',
  edgeLabelBackground: dark ? '#161826' : '#F6F3EC',
  tertiaryColor: dark ? '#161826' : '#F6F3EC',
  clusterBkg: dark ? '#1C1E2C' : '#EFEAE0',
  clusterBorder: dark ? '#33364A' : '#DAD3C6',
  textColor: dark ? '#E9E9ED' : '#1C1B19',
  darkMode: dark,
});

let seq = 0;

/** Renders a Mermaid diagram in the reading-page palette; re-renders on theme change. */
export function Mermaid({ code, label, theme }: { code: string; label: string; theme: Theme }) {
  const ref = useRef<HTMLDivElement>(null);
  const base = useId().replace(/:/g, '');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { default: mermaid } = await import('mermaid');
      mermaid.initialize({ startOnLoad: false, theme: 'base', securityLevel: 'strict' });
      const init = { theme: 'base', fontFamily: 'IBM Plex Mono, monospace', flowchart: { curve: 'basis', padding: 12 }, themeVariables: vars(theme === 'dark') };
      // Per-node `style` lines carry fixed colours that fight the theme; the palette above replaces them.
      const body = code.trim().split('\n').filter(l => !/^\s*style\s/.test(l)).join('\n');
      const src = `%%{init: ${JSON.stringify(init)}}%%\n${body}`;
      try {
        const { svg } = await mermaid.render(`mmd-${base}-${++seq}`, src);
        if (cancelled || !ref.current) return;
        ref.current.innerHTML = svg;
        const el = ref.current.querySelector('svg');
        if (el) {
          el.style.maxWidth = '100%';
          el.style.height = 'auto';
        }
      } catch (e) {
        console.warn('mermaid render failed', e);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [code, theme, base]);

  return <div ref={ref} role="img" aria-label={label} className="e-diagram" />;
}
