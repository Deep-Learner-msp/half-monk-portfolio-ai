import { Link, Navigate, useParams } from 'react-router-dom';
import { bibtexFor, papers } from '@/content/papers';
import { SITE_URL } from '@/content/profile';
import { EditorialLayout } from '@/site/EditorialLayout';
import { usePageMeta } from '@/site/meta';
import { Toc } from '@/site/Toc';
import { useCopy } from '@/site/useCopy';

export default function PaperPage() {
  const { slug = '' } = useParams();
  const paper = papers.find(p => p.slug === slug);
  const { copied, copy } = useCopy();

  usePageMeta({
    title: `${paper?.title ?? 'White paper'} · MSP Raja`,
    description: paper?.abstract ?? '',
    path: `/papers/${slug}`,
    type: 'article',
    publishedTime: paper?.date,
    jsonLd: paper && {
      '@context': 'https://schema.org',
      '@type': 'Report',
      headline: paper.title,
      datePublished: paper.date,
      abstract: paper.abstract,
      url: `${SITE_URL}/papers/${paper.slug}`,
      author: { '@type': 'Person', name: 'MSP Raja', url: SITE_URL + '/' },
      numberOfPages: paper.pages,
    },
  });

  if (!paper) return <Navigate to="/papers" replace />;

  const bib = paper.bibtex ?? bibtexFor(paper, SITE_URL);
  const toc: [string, string][] = paper.sections
    ? [...paper.sections.map(s => [s.id, `${s.n}. ${s.title}`] as [string, string]), ['p-cite', 'Citation']]
    : [];
  const bibLabel = copied === 'bib' ? 'BibTeX copied' : 'Copy BibTeX';

  return (
    <EditorialLayout>
      <div className="e-article-wrap">
        <Toc title="Contents" items={toc} />
        <article className="e-article">
          <header className="e-article-head">
            <p className="e-crumb">
              <Link to="/papers">Papers</Link> / {paper.no}
            </p>
            <h1 className="e-title">{paper.title}</h1>
            <p className="e-dek">{paper.subtitle}</p>
            <dl className="e-dl">
              <div>
                <dt>Author</dt>
                <dd>MSP Raja</dd>
              </div>
              <div>
                <dt>Published</dt>
                <dd className="mono">{paper.date}</dd>
              </div>
              <div>
                <dt>Length</dt>
                <dd className="mono">{paper.pages} pages</dd>
              </div>
              <div>
                <dt>Topics</dt>
                <dd>{paper.topics.join(', ')}</dd>
              </div>
            </dl>
            <div className="e-actions">
              {paper.pdf && (
                <a href={paper.pdf} className="e-btn" download>
                  Download PDF
                </a>
              )}
              <button type="button" className="e-ghost" onClick={() => copy('bib', bib)}>
                {bibLabel}
              </button>
            </div>
          </header>

          <section className="e-abstract">
            <h2 className="e-label">Abstract</h2>
            <p>{paper.abstract}</p>
          </section>

          {paper.findings && (
            <section className="e-findings">
              <h2 className="e-label">Key findings</h2>
              <ol>
                {paper.findings.map((f, i) => (
                  <li key={i}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {paper.sections ? (
            <div className="e-prose" style={{ paddingTop: 48 }}>
              {paper.sections.map(sec => (
                <section key={sec.id} id={sec.id} className="e-paper-sec">
                  <h2>
                    <span>{sec.n}</span>
                    {sec.title}
                  </h2>
                  {sec.paras.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </section>
              ))}
            </div>
          ) : (
            <p className="e-pending">The full paper is not on the site yet. The abstract above summarises it.</p>
          )}

          <section id="p-cite" className="e-cite">
            <div className="e-cite-head">
              <h2 className="e-label">Cite this paper</h2>
              <button type="button" className="e-linkbtn" onClick={() => copy('bib', bib)}>
                {bibLabel}
              </button>
            </div>
            <pre>{bib}</pre>
          </section>
        </article>
      </div>
    </EditorialLayout>
  );
}
