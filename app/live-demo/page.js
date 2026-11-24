import { page } from '../../lib/seo';
const DEMO = 'https://reviewkit-data.gutensuite.net/live-demo/';
export const metadata = { title: 'Live demo', ...page('/live-demo', 'Try the Reviewkit widgets live: real Trustpilot reviews rendered as grid, list and carousel widgets right in your browser, no install needed.') };
export default function Demo() {
  return (
    <>
      <section className="wrap head">
        <h1>Live demo</h1>
        <p className="lead">Play with the actual Reviewkit widgets below, real Trustpilot data, no install needed.</p>
      </section>
      <section className="wrap demowrap">
        <div className="demo">
          <iframe src={DEMO} title="Reviewkit live demo: Trustpilot review widgets" loading="lazy" />
        </div>
        <p className="mut sm demo-open">The demo runs on its own site for a clean test environment. <a href={DEMO} target="_blank" rel="noopener noreferrer">Open it in a new tab</a> if you prefer.</p>
      </section>
    </>
  );
}
