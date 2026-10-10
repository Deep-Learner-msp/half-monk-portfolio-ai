import { Link, Navigate, useParams } from 'react-router-dom';
import { getPost, postMeta, posts } from '@/content/posts';
import { SITE_URL } from '@/content/profile';
import type { Post } from '@/content/types';
import { EditorialLayout } from '@/site/EditorialLayout';
import { Inline } from '@/site/Inline';
import { usePageMeta } from '@/site/meta';
import { PostBody } from '@/site/PostBody';
import { scrollToId } from '@/site/RouteFx';
import { Toc } from '@/site/Toc';
import { useCopy } from '@/site/useCopy';

const relatedTo = (post: Post) => {
  const others = posts.filter(p => p.slug !== post.slug);
  const same = others.filter(p => p.tag === post.tag);
  return [...same, ...others.filter(p => p.tag !== post.tag)].slice(0, 3);
};

export default function PostPage() {
  const { slug = '' } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/writing" replace />;
  return <PostView key={post.slug} post={post} />;
}

function PostView({ post }: { post: Post }) {
  const { copied, copy } = useCopy();
  const url = `${SITE_URL}/writing/${post.slug}`;
  const idx = posts.indexOf(post);
  const newer = idx > 0 ? posts[idx - 1] : undefined;
  const older = idx < posts.length - 1 ? posts[idx + 1] : undefined;
  const toc = (post.body ?? []).flatMap(b => (b.t === 'h2' ? [[b.id, b.text] as [string, string]] : []));

  usePageMeta({
    title: `${post.title} · MSP Raja`,
    description: post.summary ?? `${post.title}. ${post.kind} by MSP Raja on ${post.tag}.`,
    path: `/writing/${post.slug}`,
    type: 'article',
    publishedTime: post.date,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      description: post.summary,
      url,
      author: { '@type': 'Person', name: 'MSP Raja', url: SITE_URL + '/' },
      keywords: [post.tag, ...(post.topics ?? [])].join(', '),
    },
  });

  return (
    <EditorialLayout>
      <div className="e-article-wrap">
        <Toc title="On this page" items={toc} />
        <article className="e-article">
          <header className="e-article-head">
            <p className="e-crumb">
              <Link to="/writing">Writing</Link> / <Link to={'/writing?tag=' + encodeURIComponent(post.tag)}>{post.tag}</Link>
            </p>
            <h1 className="e-title">{post.title}</h1>
            {post.summary && <p className="e-dek">{post.summary}</p>}
            <div className="e-metabar">
              <div className="e-metabar-items">
                <time dateTime={post.date}>{post.date}</time>
                <span>{post.mins} min read</span>
                {post.series && <span className="hi">365 Days</span>}
                <span className="hi">{post.tag}</span>
                {post.topics?.map(t => (
                  <span key={t} className="hi">
                    {t}
                  </span>
                ))}
              </div>
              <button type="button" className="e-linkbtn" onClick={() => copy('link', url)}>
                {copied === 'link' ? 'Link copied' : 'Copy link'}
              </button>
            </div>
          </header>

          {post.body ? (
            <PostBody blocks={post.body} />
          ) : (
            <p className="e-pending">The full text of this {post.kind.toLowerCase()} is not on the site yet.</p>
          )}

          {post.footnotes && (
            <section aria-label="Footnotes" className="e-footnotes">
              <ol>
                {post.footnotes.map((fn, i) => (
                  <li key={i} id={'fn' + (i + 1)}>
                    <span>{i + 1}</span>
                    <span>
                      <Inline text={fn} />{' '}
                      <a
                        href={'#r' + (i + 1)}
                        aria-label={'Back to reference ' + (i + 1)}
                        onClick={e => {
                          e.preventDefault();
                          scrollToId('r' + (i + 1), 120);
                        }}
                      >
                        ↩
                      </a>
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <nav aria-label="Previous and next" className="e-prevnext">
            {older ? (
              <Link to={'/writing/' + older.slug}>
                <small>← Previous</small>
                <b>{older.title}</b>
              </Link>
            ) : (
              <div className="none">
                <small>Previous</small>
                <b>This is the first post</b>
              </div>
            )}
            {newer ? (
              <Link to={'/writing/' + newer.slug} className="next">
                <small>Next →</small>
                <b>{newer.title}</b>
              </Link>
            ) : (
              <div className="next none">
                <small>Next</small>
                <b>This is the newest post</b>
              </div>
            )}
          </nav>

          <section className="e-related">
            <h2 className="e-label">Related</h2>
            {relatedTo(post).map(p => (
              <Link key={p.slug} to={'/writing/' + p.slug} className="e-row">
                <span className="e-row-title">{p.title}</span>
                <span className="e-row-meta">{postMeta(p)}</span>
              </Link>
            ))}
          </section>
        </article>
      </div>
    </EditorialLayout>
  );
}
