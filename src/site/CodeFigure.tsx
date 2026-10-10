import { useCopy } from './useCopy';

interface Tok {
  t: string;
  k?: 'str' | 'com' | 'kw' | 'num';
}

const KEYWORDS = new Set(
  ('class def if elif else not return and or None True False for in while import from as with try except finally raise ' +
    'lambda yield async await pass break continue is self const let var function new this typescript export default ' +
    'interface type extends implements public private null undefined true false of').split(' '),
);

const RE = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(#.*$|\/\/.*$)|(@[\w.]+)|\b([A-Za-z_]\w*)\b|\b(\d+(?:\.\d+)?)\b/g;

function tokenize(line: string): Tok[] {
  const out: Tok[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  RE.lastIndex = 0;
  while ((m = RE.exec(line))) {
    if (m.index > last) out.push({ t: line.slice(last, m.index) });
    if (m[1] || m[5]) out.push({ t: m[0], k: m[1] ? 'str' : 'num' });
    else if (m[2]) out.push({ t: m[0], k: 'com' });
    else if (m[3]) out.push({ t: m[0], k: 'kw' });
    else if (m[4]) out.push(KEYWORDS.has(m[4]) ? { t: m[0], k: 'kw' } : { t: m[0] });
    last = RE.lastIndex;
  }
  if (last < line.length) out.push({ t: line.slice(last) });
  if (!out.length) out.push({ t: ' ' });
  return out;
}

/** Code listing with line numbers, light syntax colouring and a copy button. */
export function CodeFigure({ code, file, lang }: { code: string; file?: string; lang?: string }) {
  const { copied, copy } = useCopy();
  const lines = code.replace(/\n+$/, '').split('\n');
  return (
    <figure className="e-code">
      <div className="e-code-bar">
        <span className="e-code-file">{file || lang || 'code'}</span>
        <button type="button" onClick={() => copy('code', code)}>
          {copied === 'code' ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="e-code-body">
        {lines.map((l, i) => (
          <div className="e-code-line" key={i}>
            <span aria-hidden="true" className="e-code-n">
              {i + 1}
            </span>
            <span className="e-code-src">
              {tokenize(l).map((tk, j) => (
                <span key={j} className={tk.k ? 'tk-' + tk.k : undefined}>
                  {tk.t}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </figure>
  );
}
