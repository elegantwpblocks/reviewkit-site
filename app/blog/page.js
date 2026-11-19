import { posts, categories } from '../../lib/blog';
import { PostCard } from '../../components/blog';
import { page } from '../../lib/seo';
import Link from 'next/link';

export const metadata = { title: 'Blog', ...page('/blog', 'Guides, comparisons and research on showing Trustpilot reviews on WordPress, with Reviewkit.') };

export default function Blog() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <section className="wrap head">
        <h1>Blog</h1>
        <p className="lead">Guides, comparisons and research on showing Trustpilot reviews on your WordPress site.</p>
        <nav className="catnav" aria-label="Blog categories">
          {categories.map((c) => <Link key={c.categorySlug} href={`/blog/category/${c.categorySlug}`}>{c.category}</Link>)}
        </nav>
      </section>
      <section className="wrap posttop">
        <div className="postgrid">
          {sorted.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </>
  );
}
