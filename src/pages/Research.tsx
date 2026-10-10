import { publications, SERVICE } from '@/content/publications';
import { EditorialLayout } from '@/site/EditorialLayout';
import { usePageMeta } from '@/site/meta';

export default function Research() {
  usePageMeta({
    title: 'Research · MSP Raja',
    description: 'Peer-reviewed work by MSP Raja in NLP, speech and agent planning: papers at EMNLP, IEEE BigData, LREC and ICASSP, and one patent application.',
    path: '/research',
  });

  const years = [...new Set(publications.map(p => p.year))];

  return (
    <EditorialLayout>
      <main className="ed-wrap">
        <header className="e-page-head">
          <h1 className="e-h1">Research</h1>
          <p className="e-lede">Peer-reviewed work in NLP, speech and agent planning. Seven papers and one patent application.</p>
        </header>
        {years.map(y => (
          <section key={y} className="e-research-group">
            <h2 className="e-group-year">{y}</h2>
            <div className="e-group-body">
              {publications
                .filter(p => p.year === y)
                .map(r => (
                  <article key={r.title} className="e-pub">
                    <div className="e-pub-main">
                      <h3>{r.title}</h3>
                      <p>{r.venue}</p>
                      {r.note && <p className="note">{r.note}</p>}
                    </div>
                    <div className="e-pub-side">
                      <span className="e-status" data-s={r.status}>
                        {r.status}
                      </span>
                      <div className="e-pub-links">
                        {r.links.map(lk => (
                          <a key={lk.href} href={lk.href} target="_blank" rel="noopener">
                            {lk.label} ↗
                          </a>
                        ))}
                        {!r.links.length && r.noLinks && <span>{r.noLinks}</span>}
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ))}
        <section className="e-group e-service">
          <h2 className="e-label e-group-year" style={{ marginTop: 22 }}>
            Service
          </h2>
          <p>
            <span>2026</span>
            <span>{SERVICE.replace(' (UAI 2026)', ' (UAI)')}</span>
          </p>
        </section>
      </main>
    </EditorialLayout>
  );
}
