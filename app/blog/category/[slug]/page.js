import { notFound } from 'next/navigation';
import { posts, categories } from '../../../../lib/blog';
import { PostCard } from '../../../../components/blog';
import { page } from '../../../../lib/seo';
import Link from 'next/link';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.categorySlug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.categorySlug === slug);
  if (!cat) return {};
  return {
    title: `${cat.category} articles`,
    ...page(`/blog/category/${cat.categorySlug}`, `${cat.category} articles from the Reviewkit blog on showing Trustpilot reviews on WordPress.`),
  };
}

export default async function Category({ params }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.categorySlug === slug);
  if (!cat) notFound();
  const sorted = posts.filter((p) => p.categorySlug === cat.categorySlug).sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <section className="wrap head">
        <p className="crumb mut sm"><Link href="/blog">Blog</Link></p>
        <h1>{cat.category}</h1>
        <p className="lead">{cat.count} {cat.count === 1 ? 'article' : 'articles'} on {cat.category.toLowerCase()}.</p>
      </section>
      <section className="wrap posttop">
        <div className="postgrid">
          {sorted.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </>
  );
}
