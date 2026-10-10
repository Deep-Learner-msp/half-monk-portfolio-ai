import { scrollToId } from './RouteFx';
import { useActiveToc } from './useActiveToc';

/** Sticky "On this page" rail for long reads; hidden below 1000px by CSS. */
export function Toc({ title, items }: { title: string; items: [string, string][] }) {
  const active = useActiveToc(items.map(([id]) => id));
  if (items.length < 2) return null;
  return (
    <aside aria-label={title} className="e-toc">
      <p>{title}</p>
      {items.map(([id, label]) => (
        <a
          key={id}
          href={'#' + id}
          className={active === id ? 'is-active' : undefined}
          onClick={e => {
            e.preventDefault();
            scrollToId(id, 32);
          }}
        >
          {label}
        </a>
      ))}
    </aside>
  );
}
