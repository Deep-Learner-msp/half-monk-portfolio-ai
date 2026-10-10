import type { Block } from '@/content/types';
import { CodeFigure } from './CodeFigure';
import { useReadingTheme } from './EditorialLayout';
import { Inline } from './Inline';
import { Mermaid } from './Mermaid';
import { scrollToId } from './RouteFx';

const jump = (n: number) => scrollToId('fn' + n, 32);

/** Renders a post's block list in the editorial reading style. */
export function PostBody({ blocks }: { blocks: Block[] }) {
  const theme = useReadingTheme();
  return (
    <div className="e-prose">
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'h2':
            return (
              <h2 key={i} id={b.id} className="e-h2">
                {b.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} className="e-h3">
                {b.text}
              </h3>
            );
          case 'p':
            return (
              <p key={i}>
                <Inline text={b.text} onFootnote={jump} />
              </p>
            );
          case 'list': {
            const L = b.ordered ? 'ol' : 'ul';
            return (
              <L key={i} className="e-list">
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} onFootnote={jump} />
                  </li>
                ))}
              </L>
            );
          }
          case 'code':
            return <CodeFigure key={i} code={b.code} file={b.file} lang={b.lang} />;
          case 'mermaid':
            return (
              <figure key={i} className="e-fig e-fig-ruled">
                <Mermaid code={b.code} label={b.label} theme={theme} />
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </figure>
            );
          case 'table':
            return (
              <figure key={i} className="e-fig">
                <div className="e-table-wrap">
                  <table className="e-table">
                    <thead>
                      <tr>
                        {b.head.map((h, j) => (
                          <th key={j} scope="col" className={b.numeric?.[j] ? 'num' : undefined}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r, j) => (
                        <tr key={j}>
                          {r.map((c, k) => (
                            <td key={k} className={b.numeric?.[k] ? 'num' + (k === r.length - 1 ? ' last' : '') : undefined}>
                              <Inline text={c} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </figure>
            );
          case 'quote':
            return (
              <blockquote key={i} className="e-quote">
                <span aria-hidden="true" />
                <p>
                  <Inline text={b.text} />
                </p>
              </blockquote>
            );
          case 'callout':
            return (
              <aside key={i} className="e-callout">
                {b.title && <p className="e-callout-title">{b.title}</p>}
                <p>
                  <Inline text={b.text} />
                </p>
              </aside>
            );
          case 'video':
            return (
              <figure key={i} className="e-fig">
                <video className="e-video" controls preload="metadata" poster={b.poster} aria-label={b.title}>
                  <source src={b.src} type="video/mp4" />
                </video>
                <figcaption>
                  <strong>{b.title}.</strong> {b.caption}
                </figcaption>
              </figure>
            );
          case 'figure':
            return (
              <figure key={i} className="e-fig">
                <img src={b.src} alt={b.alt} loading="lazy" className="e-img" />
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
