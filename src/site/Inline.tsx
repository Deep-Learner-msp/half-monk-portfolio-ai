import { Fragment, type ReactNode } from 'react';

// Renders the small inline markup subset documented in src/content/types.ts.
const TOKEN = /(\*\*[^*]+\*\*)|(\*[^*\s][^*]*\*)|(`[^`]+`)|(\[[^\]]+\]\([^)\s]+\))|(\[\^\d+\])/g;

export function Inline({ text, onFootnote }: { text: string; onFootnote?: (n: number) => void }) {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    const k = m.index;
    if (m[1]) out.push(<strong key={k}>{tok.slice(2, -2)}</strong>);
    else if (m[2]) out.push(<em key={k}>{tok.slice(1, -1)}</em>);
    else if (m[3]) out.push(<code key={k} className="e-icode">{tok.slice(1, -1)}</code>);
    else if (m[4]) {
      const split = tok.indexOf('](');
      const label = tok.slice(1, split);
      const href = tok.slice(split + 2, -1);
      const external = /^https?:/.test(href);
      out.push(
        <a key={k} href={href} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
          {label}
        </a>,
      );
    } else if (m[5]) {
      const n = Number(tok.slice(2, -1));
      out.push(
        <sup key={k} id={'r' + n} className="e-fnref">
          <a
            href={'#fn' + n}
            aria-label={'Footnote ' + n}
            onClick={e => {
              if (!onFootnote) return;
              e.preventDefault();
              onFootnote(n);
            }}
          >
            {n}
          </a>
        </sup>,
      );
    }
    last = TOKEN.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <Fragment>{out}</Fragment>;
}
