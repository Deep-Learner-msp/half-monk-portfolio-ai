import { Link } from 'react-router-dom';
import { papers } from '@/content/papers';
import { EditorialLayout } from '@/site/EditorialLayout';
import { usePageMeta } from '@/site/meta';

export default function Papers() {
  usePageMeta({
    title: 'White papers · MSP Raja',
    description: 'Longer write-ups of AI systems MSP Raja has built and measured: agent evaluation, coding harnesses and multi-agent context budgets.',
    path: '/papers',
  });

  return (
    <EditorialLayout>
      <main className="ed-wrap">
        <header className="e-page-head">
          <h1 className="e-h1">White papers</h1>
          <p className="e-lede">Longer write-ups of systems I have built and measured. Each one reads inline.</p>
        </header>
        <div className="e-paper-grid">
          {papers.map(w => (
            <Link key={w.slug} to={'/papers/' + w.slug} className="e-paper-card">
              <span className="top">
                <span>{w.no}</span>
                <span>{w.date}</span>
              </span>
              <span className="t">{w.title}</span>
              <span className="a">{w.abstract}</span>
              <span className="foot">
                <span>{w.topics.join(' · ')}</span>
                <span>{w.pages} pages</span>
              </span>
            </Link>
          ))}
        </div>
      </main>
    </EditorialLayout>
  );
}
