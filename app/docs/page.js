import docs from '../../content/docs/docs.json';
import { DocsBrowser } from '../../components/docs';
import { page } from '../../lib/seo';
export const metadata = { title: 'Docs', ...page('/docs', 'Reviewkit documentation: install the plugin, connect Trustpilot and show reviews on your WordPress site.') };
export default function Docs() {
  const items = docs.flatMap(c => c.articles.map(a => ({ ...a, category: c.category })));
  return (
    <>
      <section className="wrap head">
        <h1>Docs</h1>
        <p className="lead">Everything you need to connect Trustpilot and show reviews on your WordPress site.</p>
      </section>
      <section className="wrap doctop"><DocsBrowser items={items} /></section>
    </>
  );
}
