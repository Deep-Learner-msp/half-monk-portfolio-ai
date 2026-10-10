import { awardsShort, career, EMAIL, LINKEDIN } from '@/content/profile';
import { EditorialLayout } from '@/site/EditorialLayout';
import { usePageMeta } from '@/site/meta';

export default function About() {
  usePageMeta({
    title: 'About · MSP Raja',
    description: 'MSP Raja is an AI architect in the Office of the CEO at FourKites, building dependable agents and the evaluation harnesses that check them.',
    path: '/about',
  });

  return (
    <EditorialLayout>
      <main className="ed-wrap">
        <header className="e-page-head" style={{ paddingBottom: 32 }}>
          <h1 className="e-h1">About</h1>
        </header>
        <div className="e-about-prose">
          <p>
            I am an AI architect in the Office of the CEO at FourKites. I report to the CEO and lead a small pod that builds
            internal AI ventures, from first prototype to daily use.
          </p>
          <p>
            Most of my work is about making agents dependable: how they plan, how they use tools, and how we know they did the
            job. I spend as much time on evaluation harnesses as on the agents themselves.
          </p>
          <p style={{ margin: 0 }}>
            Before this I built AI systems for entertainment, computer vision, speech, cybersecurity, finance and healthcare. I
            publish when the work holds up, and I review for UAI.
          </p>
        </div>

        <section className="e-sec" style={{ marginTop: 64 }}>
          <h2 className="e-label">Career</h2>
          <ol className="e-sec-body">
            {career.map(c => (
              <li key={c.org}>
                <span className="e-sec-y">{c.yShort}</span>
                <span className="e-sec-org">{c.org}</span>
                <span className="e-sec-line">{c.aboutLine}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="e-sec">
          <h2 className="e-label">Awards</h2>
          <ul className="e-sec-body">
            {awardsShort.map((a, i) => (
              <li key={i}>
                <span className="e-sec-y">{a.y}</span>
                <span style={{ flex: '1 1 300px', minWidth: 0, fontSize: 16, lineHeight: 1.5 }}>{a.t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="e-sec">
          <h2 className="e-label">Contact</h2>
          <div className="e-sec-body" style={{ paddingTop: 18 }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.4, margin: 0 }}>Best reached by email. I reply in writing.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 28px', marginTop: 14, fontFamily: 'var(--mono)', fontSize: 14 }}>
              <a href={'mailto:' + EMAIL}>{EMAIL}</a>
              <a href={LINKEDIN} target="_blank" rel="noopener">
                linkedin.com/in/mspraja
              </a>
            </div>
          </div>
        </section>
      </main>
    </EditorialLayout>
  );
}
