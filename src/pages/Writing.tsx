import { Link, useSearchParams } from 'react-router-dom';
import { postMeta, posts, SERIES_BLURB, SERIES_NAME, TAG_ORDER } from '@/content/posts';
import type { Tag } from '@/content/types';
import { EditorialLayout } from '@/site/EditorialLayout';
import { usePageMeta } from '@/site/meta';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayLabel = (d: string) => {
  const [, m, day] = d.split('-');
  return MONTHS[+m - 1] + ' ' + +day;
};

export default function Writing() {
  const [params, setParams] = useSearchParams();
  const seriesOn = params.get('series') === '365';
  const tag = params.get('tag') as Tag | null;

  usePageMeta({
    title: 'Writing · MSP Raja',
    description: 'Essays, research notes and a daily lessons series by MSP Raja. Mostly about agents, evaluation, and putting AI to work in supply chains.',
    path: '/writing',
  });

  const tags = TAG_ORDER.filter(t => posts.some(p => p.tag === t));
  const filtered = posts.filter(p => (seriesOn ? p.series : tag ? p.tag === tag : true));
  const years = [...new Set(filtered.map(p => p.date.slice(0, 4)))];

  // Filters live in the URL so a filtered view can be linked (e.g. the home page's series card).
  const setFilter = (next: { tag?: Tag; series?: boolean }) => {
    const p = new URLSearchParams();
    if (next.series) p.set('series', '365');
    else if (next.tag) p.set('tag', next.tag);
    setParams(p, { replace: true });
  };
  const allOn = !seriesOn && !tag;

  return (
    <EditorialLayout>
      <main className="ed-wrap">
        <header className="e-page-head">
          <h1 className="e-h1">Writing</h1>
          <p className="e-lede">
            Essays, research notes and a daily lessons series. Mostly about agents, evaluation, and putting AI to work in supply
            chains.
          </p>
        </header>

        <div className="e-filters">
          <div role="group" aria-label="Filter by tag" className="e-filter-row">
            <span className="e-filter-label">Tags</span>
            <button type="button" className="e-filter" aria-pressed={allOn} onClick={() => setFilter({})}>
              All <span>{posts.length}</span>
            </button>
            {tags.map(t => (
              <button
                key={t}
                type="button"
                className="e-filter"
                aria-pressed={tag === t && !seriesOn}
                onClick={() => setFilter(tag === t ? {} : { tag: t })}
              >
                {t} <span>{posts.filter(p => p.tag === t).length}</span>
              </button>
            ))}
          </div>
          <div className="e-filter-row">
            <span className="e-filter-label">Series</span>
            <button
              type="button"
              className="e-filter"
              aria-pressed={seriesOn}
              onClick={() => setFilter(seriesOn ? {} : { series: true })}
            >
              {SERIES_NAME} <span>{posts.filter(p => p.series).length}</span>
            </button>
          </div>
        </div>

        {seriesOn && (
          <div className="e-series">
            <h2>{SERIES_NAME}</h2>
            <p>{SERIES_BLURB}</p>
          </div>
        )}

        {years.length === 0 && <p className="e-empty">Nothing here yet.</p>}
        {years.map(y => (
          <section key={y} className="e-group">
            <h2 className="e-group-year">{y}</h2>
            <div className="e-group-body">
              {filtered
                .filter(p => p.date.startsWith(y))
                .map(p => (
                  <Link key={p.slug} to={'/writing/' + p.slug} className="e-row">
                    <span className="e-row-day">{dayLabel(p.date)}</span>
                    <span className="e-row-title">{p.title}</span>
                    <span className="e-row-meta">{postMeta(p)}</span>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </main>
    </EditorialLayout>
  );
}
