import { Star, Btn } from '../components/ui';
export const metadata = { title: 'Page not found' };
export default function NotFound() {
  return (
    <section className="wrap cta nf">
      <span className="nf-badge"><Star s={20} /> 404</span>
      <h1>Page not found</h1>
      <p className="lead" style={{ margin: '0 auto' }}>The page you&rsquo;re after doesn&rsquo;t exist or moved. Try one of these instead.</p>
      <div className="nf-links">
        <Btn href="/">Back to home</Btn>
        <Btn href="/docs" ghost>Read the docs</Btn>
      </div>
      <p className="mut sm">Looking for the <a href="/live-demo">live demo</a>, <a href="/pricing">pricing</a> or <a href="/blog">blog</a>? Those are all still here.</p>
    </section>
  );
}
