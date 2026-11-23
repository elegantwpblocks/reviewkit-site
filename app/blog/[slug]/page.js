import Link from 'next/link';
import fs from 'fs';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { getPost, relatedPosts, posts, formatDate } from '../../../lib/blog';
import { PostCard } from '../../../components/blog';
import { page } from '../../../lib/seo';

import d from '../../../data.json';

const BASE = d.site.url;

marked.use({ renderer: { image({ href, title, text }) {
  return `<img src="${href}" alt="${text ?? ''}" loading="lazy" decoding="async"${title ? ` title="${title}"` : ''}/>`;
} } });

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const { meta } = post;
  return {
    title: meta.seoTitle || meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: `/blog/${meta.slug}` },
    openGraph: {
      type: 'article',
      title: meta.seoTitle || meta.title,
      description: meta.description,
      publishedTime: meta.date,
      modifiedTime: meta.updated || meta.date,
      authors: [meta.author],
      images: meta.featuredImage ? [meta.featuredImage] : undefined,
    },
    twitter: { card: 'summary_large_image', images: meta.featuredImage ? [meta.featuredImage] : undefined },
  };
}

export default async function Article({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { meta } = post;
  const related = relatedPosts(post);
  const hasImg = meta.featuredImage && fs.existsSync(`${process.cwd()}/public${meta.featuredImage}`);
  const jsonld = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: meta.title, description: meta.description,
    datePublished: meta.date, dateModified: meta.updated || meta.date,
    author: { '@type': 'Organization', name: meta.author },
    publisher: { '@id': `${BASE}/#org` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${meta.slug}` },
    image: meta.featuredImage ? `${BASE}${meta.featuredImage}` : undefined,
    keywords: (meta.keywords || []).join(', '),
    articleSection: meta.category,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }} />
      <section className="wrap head">
        <p className="crumb mut sm"><Link href="/blog">Blog</Link> / <Link href={`/blog/category/${meta.categorySlug}`}>{meta.category}</Link></p>
        <h1 className="posttitle">{meta.title}</h1>
        <p className="lead">{meta.description}</p>
        <p className="postbyline sm mut">
          <span>{meta.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          {meta.updated && meta.updated !== meta.date && <><span aria-hidden="true">·</span><span>Updated {formatDate(meta.updated)}</span></>}
          <span aria-hidden="true">·</span>
          <span>{meta.readingTime}</span>
        </p>
      </section>
      {meta.featuredImage && (
        <section className="wrap posthero">
          {hasImg
            ? <img src={meta.featuredImage} alt={meta.featuredImageAlt || ''} className="postheroimg" fetchPriority="high" />
            : <div className="thumbfb tall" aria-hidden="true"><svg width="56" height="56" viewBox="0 0 24 24"><path fill="#00b67a" d="M12 1.5l3.1 7.2 7.9.7-6 5.2 1.8 7.6L12 18l-6.8 4.2L7 14.6 1 9.4l7.9-.7z"/></svg></div>}
        </section>
      )}
      <section className="wrap posttop">
        <article className="prose" dangerouslySetInnerHTML={{ __html: marked.parse(post.md) }} />
        <footer className="postfoot">
          <p className="tagrow">
            {meta.tags.map((t) => <span key={t} className="tag fix">{t}</span>)}
          </p>
        </footer>
      </section>
      {related.length > 0 && (
        <section className="wrap postrelated">
          <h2>Keep reading</h2>
          <div className="postgrid">
            {related.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}
    </>
  );
}
