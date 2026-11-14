import Link from 'next/link';
import { marked } from 'marked';
import { readDoc } from '../../../lib/docs';
import docs from '../../../content/docs/docs.json';
import { DocsNav } from '../../../components/docs';
import { page } from '../../../lib/seo';
export const metadata = { title: 'Installation', ...page('/docs/installation', 'Two ways to install Reviewkit from the WordPress plugin directory and connect your Trustpilot business profile.') };
marked.use({ renderer: { image({ href, title, text }) {
  return `<img src="${href}" alt="${text ?? ''}" loading="lazy" decoding="async"${title ? ` title="${title}"` : ''}/>`;
} } });
export default function Article() {
  const doc = readDoc('installation');
  const items = docs.flatMap(c => c.articles.map(a => ({ ...a, category: c.category })));
  return (
    <>
      <section className="wrap head">
        <p className="crumb mut sm"><Link href="/docs">Docs</Link> / {doc.category}</p>
        <h1>{doc.meta.title}</h1>
        <p className="lead">{doc.meta.desc}</p>
      </section>
      <section className="wrap doctop">
        <div className="docs">
          <DocsNav items={items} />
          <article className="prose" dangerouslySetInnerHTML={{ __html: marked.parse(doc.md) }} />
        </div>
      </section>
    </>
  );
}
