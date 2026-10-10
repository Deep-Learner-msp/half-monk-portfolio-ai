import { useMemo, useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { awards, career, EMAIL, focus, GITHUB, LINKEDIN, stats } from '@/content/profile';
import { publications, SERVICE } from '@/content/publications';
import { FEATURED_SLUG, getPost, postMeta, posts, SERIES_NAME } from '@/content/posts';
import { papers } from '@/content/papers';
import type { PubStatus } from '@/content/types';
import { usePageMeta } from '@/site/meta';
import { Ring } from '@/site/Ring';
import { scrollToId } from '@/site/RouteFx';
import '@/styles/cine.css';

const NAV: [string, string][] = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Research', 'research'],
  ['Writing', 'writing'],
  ['Awards', 'awards'],
  ['Contact', 'contact'],
];

const FILTERS: [PubStatus | 'All', string][] = [
  ['All', 'All'],
  ['Published', 'Published'],
  ['Under review', 'Under review'],
  ['Patent pending', 'Patent'],
];

const MARQUEE = ['EMNLP', 'IEEE BigData', 'ICASSP', 'LREC', 'UAI 2026', 'Agentic AI', 'Evaluation', 'Supply chain AI'];

const DESCRIPTION =
  'MSP Raja is Principal AI R&D Architect in the Office of the CEO at FourKites. He turns hard enterprise problems into AI systems that hold up in production: agentic workflows, evaluation, document intelligence and decision tools. Papers at EMNLP, IEEE BigData and ICASSP.';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pubFilter, setPubFilter] = useState<PubStatus | 'All'>('All');

  usePageMeta({
    title: 'MSP Raja · Principal AI R&D Architect · Enterprise AI systems',
    description: DESCRIPTION,
    path: '/',
    type: 'profile',
    themeColor: '#10121C',
  });

  // In-page jumps: smooth scroll, keep the hash in the address bar, close the mobile menu.
  const jump = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    // Measure after the mobile menu has collapsed, or the target is off by the menu's height.
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(id, 0)));
    window.history.replaceState(null, '', id === 'top' ? '/' : '#' + id);
  };

  const featured = getPost(FEATURED_SLUG)!;
  const latest = useMemo(() => posts.filter(p => p.slug !== FEATURED_SLUG).slice(0, 6), []);
  const pubs = publications.filter(p => pubFilter === 'All' || p.status === pubFilter);
  const year = new Date().getFullYear();

  return (
    <div className="cine">
      <div className="cine-inner">
        <header id="top" className="c-hero">
          <div aria-hidden="true" className="c-hero-bg" />
          <div aria-hidden="true" className="c-hero-lines" />
          <div aria-hidden="true" className="c-hero-img">
            <img src="/images/site/hero-dog.webp" alt="" fetchPriority="high" />
            <div className="tint" />
            <div className="vignette" />
          </div>

          <div className="c-wrap c-topbar">
            <a href="/" onClick={jump('top')} aria-label="MSP Raja, home" className="c-brand">
              MSP RAJA
            </a>
            <nav aria-label="Primary" className="c-nav">
              {NAV.map(([label, id]) => (
                <a key={id} href={'#' + id} onClick={jump(id)}>
                  {label}
                </a>
              ))}
            </nav>
            <div className="c-top-actions">
              <a href={'mailto:' + EMAIL} className="c-pill c-mail">
                Email me <span aria-hidden="true">↗</span>
              </a>
              <button
                type="button"
                className="c-menu-btn"
                onClick={() => setMenuOpen(o => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? 'CLOSE' : 'MENU'}
              </button>
            </div>
          </div>
          {menuOpen && (
            <nav id="mobile-menu" aria-label="Primary" className="c-mobile-nav">
              {NAV.map(([label, id]) => (
                <a key={id} href={'#' + id} onClick={jump(id)}>
                  {label}
                </a>
              ))}
              <Link to="/writing">All writing</Link>
            </nav>
          )}

          <div className="c-wrap c-hero-body">
            <p className="c-kicker c-in" style={{ animationDelay: '.1s' }}>
              <i />
              Principal AI R&amp;D Architect · FourKites
            </p>
            <h1 className="c-h1">
              <span className="c-in" style={{ animationDelay: '.18s' }}>
                Hard <span className="dim">problems.</span>
              </span>
              <span className="c-in" style={{ animationDelay: '.3s' }}>
                Working <span className="dim">AI.</span>
              </span>
              <span className="c-sr">MSP Raja, Principal AI R&amp;D Architect</span>
            </h1>
            <p className="c-lead c-in" style={{ animationDelay: '.44s' }}>
              I turn <span className="b">hard enterprise problems</span> into AI systems that{' '}
              <span className="r">hold up in production.</span>
            </p>
            <p className="c-hero-p c-in" style={{ animationDelay: '.54s' }}>
              Agentic systems, evaluation harnesses, document intelligence and decision tools. Nine years across supply chain,
              finance, cybersecurity, healthcare, speech and vision.
            </p>
            <div className="c-hero-ctas c-in" style={{ animationDelay: '.66s' }}>
              <a href="#writing" onClick={jump('writing')} className="c-pill c-cta">
                Read the writing <span aria-hidden="true" className="arrow">→</span>
              </a>
              <a href="#research" onClick={jump('research')} className="c-scroll">
                <span className="c-ring-box">
                  <Ring text="SCROLL · RESEARCH · WRITING · AWARDS · " />
                  <span aria-hidden="true">↓</span>
                </span>
                <span className="c-scroll-text">
                  Published at EMNLP and IEEE.
                  <br />
                  UAI 2026 reviewer.
                </span>
              </a>
            </div>
          </div>
        </header>

        <main>
          <div aria-hidden="true" className="c-marquee">
            <div className="c-marquee-track">
              {[0, 1].flatMap(r =>
                MARQUEE.flatMap((w, i) => [
                  <span key={`${r}-${i}`}>{w}</span>,
                  <span key={`${r}-${i}s`} className={i % 2 ? 'b' : 'r'}>
                    ✦
                  </span>,
                ]),
              )}
            </div>
          </div>

          <section id="about" aria-labelledby="about-h" className="c-wrap c-about">
            <div className="c-stats">
              {stats.map(s => (
                <div
                  key={s.n}
                  className={'c-stat c-rise c-rise-30' + (s.grad ? ' g' + s.grad : '')}
                  style={{ gridColumn: s.col, gridRow: s.row }}
                >
                  <b>{s.n}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="c-about-text c-rise c-rise-30">
              <p className="c-eyebrow red">About</p>
              <h2 id="about-h" className="c-h2">
                From research <em>to production</em>
              </h2>
              <p className="body">
                I report to the CEO of FourKites. I build lean pods that make the company AI-native: a few engineers, one hard
                problem, shipped to production in weeks.
              </p>
              <p className="body">
                We go after core supply chain problems: late loads, missing documents, exceptions that cost real money. The goal
                is not a demo. It is a system the business runs on.
              </p>
              <p className="body">
                Most of the work is about making agents dependable: how they plan, how they use tools, and how we know they did
                the job. I publish when the work holds up, and I review for UAI.
              </p>
              <p className="body strong">I spend as much time on the evaluation harness as on the agent.</p>
            </div>
          </section>

          <section id="focus" aria-labelledby="focus-h" className="c-wrap c-focus">
            <div className="c-focus-grid">
              <div className="c-orb">
                <div aria-hidden="true" className="c-orb-glow">
                  <div className="c-orb-ring" />
                </div>
                <div className="c-orb-text">
                  <p className="c-eyebrow blue" style={{ marginBottom: 12 }}>
                    Now
                  </p>
                  <h2 id="focus-h">
                    Areas of <em className="c-em">focus</em>
                  </h2>
                  <p className="d">What I am building now, described by capability.</p>
                </div>
              </div>
              {focus.map(f => (
                <article key={f.n} className="c-card-f c-rise c-rise-30">
                  <p className={'n acc-' + f.accent}>{f.n}</p>
                  <h3>{f.t}</h3>
                  <p className="d">{f.d}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" aria-labelledby="exp-h" className="c-exp">
            <div className="c-wrap c-exp-in">
              <div className="c-headrow c-rise">
                <div>
                  <p className="c-eyebrow red">Experience</p>
                  <h2 id="exp-h" className="c-h2">
                    Nine years, <em>seven domains</em>
                  </h2>
                  <p className="c-sub">Five companies, from speech and vision research to agent architecture in the Office of the CEO.</p>
                </div>
                <span aria-hidden="true" className="c-outline-num">
                  9+
                </span>
              </div>
              <div className="c-exp-body">
                <ol className="c-timeline">
                  <span aria-hidden="true" className="c-timeline-line" />
                  {career.map(c => (
                    <li key={c.org} className={'c-tl-item c-rise' + (c.current ? ' now' : '')}>
                      <span aria-hidden="true" className="c-tl-dot" />
                      <article>
                        <div className="c-tl-head">
                          <h3>{c.role}</h3>
                          <span className="c-tl-org">{c.org}</span>
                        </div>
                        <p className="c-tl-when">
                          <time dateTime={c.start}>{c.y}</time> · {c.loc}
                        </p>
                        <p className="c-tl-line">{c.line}</p>
                        <ul className="c-tl-points">
                          {c.points.map(pt => (
                            <li key={pt}>{pt}</li>
                          ))}
                        </ul>
                      </article>
                    </li>
                  ))}
                </ol>
                <div aria-hidden="true" className="c-portrait c-wide-only">
                  <div className="c-portrait-in">
                    <img src="/images/site/portrait.webp" alt="" loading="lazy" />
                    <div className="tint" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="research" aria-labelledby="res-h" className="c-wrap c-research">
            <div className="c-headrow c-rise">
              <div>
                <p className="c-eyebrow blue">Research</p>
                <h2 id="res-h" className="c-h2">
                  Papers <em className="acc-blue">and patents</em>
                </h2>
                <p className="c-sub">Seven peer-reviewed papers and one patent application across NLP, speech and agent planning.</p>
              </div>
              <div role="group" aria-label="Filter by status" className="c-filters">
                {FILTERS.map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    className="c-filter"
                    aria-pressed={pubFilter === key}
                    onClick={() => setPubFilter(key)}
                  >
                    {label}{' '}
                    <span>{key === 'All' ? publications.length : publications.filter(p => p.status === key).length}</span>
                  </button>
                ))}
              </div>
            </div>
            <ol className="c-pubs">
              {pubs.map(p => (
                <li key={p.title} className="c-rise c-rise-20">
                  <article className="c-pub">
                    <div className="c-pub-venue">
                      <b>{p.venueShort}</b>
                      <time dateTime={String(p.year)}>{p.year}</time>
                    </div>
                    <div className="c-pub-main">
                      <h3>{p.short && p.venueShort === 'Patent' ? p.short : p.title}</h3>
                      <p>{p.desc}</p>
                      <p className="where">{p.venue}</p>
                    </div>
                    <div className="c-pub-side">
                      <span className="c-status" data-s={p.status}>
                        {p.status}
                      </span>
                      {p.links[0] && (
                        <a href={p.links[0].href} target="_blank" rel="noopener" className="c-pub-link">
                          {p.links[0].label} ↗
                        </a>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
            <p className="c-service">
              <span>Service</span>
              {SERVICE}
              <Link to="/research">All research →</Link>
            </p>
          </section>

          <section id="writing" aria-labelledby="wr-h" className="c-wrap c-writing">
            <div className="c-headrow c-rise">
              <div>
                <p className="c-eyebrow red">Writing</p>
                <h2 id="wr-h" className="c-h2">
                  Essays, papers <em className="acc-red">and lessons</em>
                </h2>
                <p className="c-sub">Long-form writing on agents, evaluation and AI in supply chains.</p>
              </div>
              <Link to="/writing" className="c-pill c-chip">
                All writing →
              </Link>
            </div>

            <article className="c-feature c-rise c-rise-30">
              <Link to={'/writing/' + featured.slug} aria-hidden="true" tabIndex={-1} className="c-feature-art">
                <span className="lines" />
                <span className="tag">FEATURED ESSAY</span>
                <span className="big">58%</span>
              </Link>
              <div className="c-feature-body">
                <p className="meta">
                  <time dateTime={featured.date}>{featured.date}</time> · {featured.tag} · {featured.mins} min
                </p>
                <h3>
                  <Link to={'/writing/' + featured.slug}>{featured.title}</Link>
                </h3>
                <p className="s">{featured.summary}</p>
                <ul>
                  <li>Reported pass rate fell from 71% to 58%</li>
                  <li>Grader disagreement fell from 14% to 3%</li>
                  <li>92% of runs now replay deterministically</li>
                </ul>
              </div>
            </article>

            <div className="c-writing-cols">
              <div>
                <h3 className="c-colhead">Latest posts</h3>
                <ol className="c-posts">
                  {latest.map(w => (
                    <li key={w.slug} className="c-rise c-rise-20">
                      <Link to={'/writing/' + w.slug} className="c-post">
                        <time dateTime={w.date}>{w.date}</time>
                        <span className="t">{w.title}</span>
                        <span className="m">{postMeta(w)}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="c-colhead" style={{ margin: 0 }}>
                  White papers
                </h3>
                {papers.slice(0, 2).map(wp => (
                  <Link key={wp.slug} to={'/papers/' + wp.slug} className="c-wp c-rise">
                    <span className="top">
                      <span>
                        {wp.no} · {wp.pages} pp
                      </span>
                      <time dateTime={wp.date}>{wp.date}</time>
                    </span>
                    <span className="t">{wp.title}</span>
                    <span className="a">{wp.subtitle}</span>
                  </Link>
                ))}
                <Link to="/writing?series=365" className="c-pill c-series c-rise">
                  <span aria-hidden="true" className="ghost">
                    365
                  </span>
                  <span className="k">Series</span>
                  <span className="t">{SERIES_NAME}</span>
                  <span className="a">One short lesson a day through 2026, from production work.</span>
                </Link>
              </div>
            </div>
          </section>

          <section id="awards" aria-labelledby="aw-h" className="c-awards">
            <div className="c-wrap c-awards-in">
              <div className="c-rise" style={{ maxWidth: 600 }}>
                <p className="c-eyebrow red">Awards</p>
                <h2 id="aw-h" className="c-h2">
                  Recognition <em>along the way</em>
                </h2>
              </div>
              <ul className="c-award-grid">
                {awards.map((a, i) => (
                  <li key={i} className={'c-award c-rise ' + a.accent}>
                    <span aria-hidden="true" className="big">
                      {a.big}
                    </span>
                    <time dateTime={a.y}>{a.y}</time>
                    <h3>{a.t}</h3>
                    <p>{a.e}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="contact" aria-labelledby="ct-h" className="c-contact">
            <p aria-hidden="true" className="c-contact-ghost">
              I reply
              <br />
              in writing
            </p>
            <div className="c-wrap c-contact-in">
              <div className="c-contact-text c-rise c-rise-30">
                <p className="c-eyebrow blue">Contact</p>
                <h2 id="ct-h" className="c-h2">
                  Best reached <em>by email.</em>
                </h2>
                <p className="c-sub">I reply in writing. For research collaboration, reviewing or speaking, write with the specifics.</p>
                <div className="c-contact-btns">
                  <a href={'mailto:' + EMAIL} className="c-pill c-mailbig">
                    {EMAIL} <span aria-hidden="true">→</span>
                  </a>
                  <a href={LINKEDIN} target="_blank" rel="noopener" className="c-ghost-btn">
                    LinkedIn ↗
                  </a>
                </div>
              </div>
              <figure className="c-contact-fig c-rise c-rise-30">
                <div className="img">
                  <img src="/images/site/office-dog.webp" alt="MSP Raja at his desk with his dog" loading="lazy" />
                  <div aria-hidden="true" className="tint" />
                </div>
                <span aria-hidden="true" className="c-contact-ring">
                  <Ring text="WRITE TO ME · I REPLY IN WRITING · " />
                  <span>↗</span>
                </span>
              </figure>
            </div>
          </section>
        </main>

        <footer className="c-wrap c-footer">
          <p className="c-footer-name">MSP RAJA</p>
          <p className="c-footer-sub">Principal AI R&amp;D Architect, Office of the CEO at FourKites.</p>
          <nav aria-label="Footer">
            {NAV.map(([label, id]) => (
              <a key={id} href={'#' + id} onClick={jump(id)}>
                {label}
              </a>
            ))}
            <Link to="/writing">Writing archive</Link>
            <Link to="/papers">Papers</Link>
            <a href={GITHUB} target="_blank" rel="noopener me">
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener me">
              LinkedIn
            </a>
            <a href="/rss.xml">RSS</a>
          </nav>
          <p className="c-footer-copy">© {year} MSP Raja</p>
        </footer>
      </div>
    </div>
  );
}

