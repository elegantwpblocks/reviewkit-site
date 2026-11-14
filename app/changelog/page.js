import d from '../../data.json';
import { page } from '../../lib/seo';
export const metadata = { title: 'Changelog', ...page('/changelog', 'Every Reviewkit release: new widgets, improvements and fixes for the Trustpilot reviews WordPress plugin.') };
const label = { new: 'New', imp: 'Improved', fix: 'Fixed' };
export default function Changelog() {
  return (
    <>
      <section className="wrap head">
        <h1>Changelog</h1>
        <p className="lead">Every release of Reviewkit, newest first.</p>
      </section>
      <section className="wrap relwrap">
        <div className="changelog">
          {d.changelog.map(r => (
            <article key={r.v} className="card rel">
              <header><span className="pill ver">v{r.v}</span><time className="mut sm">{r.date}</time></header>
              <ul>
                {r.items.map(([t, x], i) => <li key={i}><span className={`tag ${t}`}>{label[t]}</span>{x}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
