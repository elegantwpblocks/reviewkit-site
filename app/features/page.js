import d from '../../data.json';
import { Shot, Btn, Pro } from '../../components/ui';
import { page } from '../../lib/seo';
export const metadata={title:'Features',...page('/features','Grid, list and carousel Trustpilot widgets, a no-code Widgets Builder, star filters and seven free trust badges — every Reviewkit feature.')};
export default function F(){return(<><section className="wrap head"><h1>Everything you need to show reviews well</h1><p className="lead">Free covers the basics. Pro adds the tools to make reviews match your brand.</p></section>
{d.features.map((f,i)=><section key={f.t} className={`wrap split${i%2?' rev':''}`}><div><h2>{f.t} <Pro/></h2><p>{f.d}</p></div><Shot src={f.img} alt={f.t}/></section>)}
<section className="band"><div className="wrap split"><div><h2>Always up to date</h2><p>Reviews refresh automatically every day. Need a new review right now? Press Sync Reviews.</p></div><Shot src="settings.png" alt="Settings screen with Sync Reviews button"/></div></section>
<section className="wrap split"><div><h2>Your reviews, in one place</h2><p>See your business profile, rating and every synced review right inside WordPress, and filter by star rating.</p></div><Shot src="dashboard.png" alt="Reviewkit dashboard"/></section>
<section className="wrap cta"><h2>Ready to take control?</h2><Btn href="/pricing">See pricing</Btn></section></>)}
