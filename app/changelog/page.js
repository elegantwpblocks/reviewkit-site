import d from '../../data.json';
import { Btn } from '../../components/ui';
import { page } from '../../lib/seo';
export const metadata = { title: 'Changelog', ...page('/changelog', 'Every Reviewkit release: new widgets, improvements and fixes for the free plugin and Reviewkit Pro.') };
const label = { new: 'New', imp: 'Improved', fix: 'Fixed' };
const Release = ({ r, free }) => (
  <article className="card rel">
    <header><span className={`pill ver${free ? ' free' : ''}`}>v{r.v}</span><time className="mut sm">{r.date}</time></header>
    <ul>{r.items.map(([t, x], i) => <li key={i}><span className={`tag ${t}`}>{label[t]}</span>{x}</li>)}</ul>
  </article>
);
export default function Changelog() {
  return (
    <>
      <section className="wrap head">
        <h1>Changelog</h1>
        <p className="lead">Every release of Reviewkit, free and Pro, newest first.</p>
      </section>
      <section className="wrap relwrap">
        <div className="relgrid">
          <section className="relcol" aria-labelledby="free-h">
            <header className="relhead"><h2 id="free-h">Free plugin</h2><p className="mut sm">The free plugin on WordPress.org. Everyone gets these updates.</p></header>
            <div className="changelog">{d.changelog.map(r => <Release key={r.v} r={r} free />)}</div>
          </section>
          <section className="relcol pro" aria-labelledby="pro-h">
            <header className="relhead"><h2 id="pro-h">Reviewkit Pro</h2><p className="mut sm">Pro Starter, Growth and Agency. Every Pro release lands here.</p></header>
            <div className="changelog">{d.proChangelog.map(r => <Release key={r.v} r={r} />)}</div>
            <div className="relcta">
              <p className="mut">Pro launched in September 2025 with the Widgets Builder. New features ship to this lane first.</p>
              <Btn href="/pricing">Get Pro at $9.99</Btn>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
