import d from '../../data.json';
import { Btn } from '../../components/ui';
export const metadata={title:'Pricing | Reviewkit'};
export default function P(){return(<><section className="wrap head"><h1>Simple pricing. Start free.</h1><p className="lead">Upgrade when you want the Widgets Builder and full design control.</p></section>
<section className="wrap plans">{d.plans.map(p=><div key={p.name} className={`card plan${p.featured?' hl':''}`}>{p.featured&&<span className="pill">Most popular</span>}<h3>{p.name}</h3><div className="price">{p.price}<small> {p.period}</small></div><p className="mut">{p.sites}</p><ul>{p.features.map(x=><li key={x}>{x}</li>)}</ul><Btn href={p.href} ghost={!p.featured}>{p.cta}</Btn></div>)}</section>
<section className="wrap faq"><h2>Questions</h2>{d.faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</section></>)}
