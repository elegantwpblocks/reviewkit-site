import d from '../../data.json';
import { Btn } from '../../components/ui';
import { CouponBanner } from '../../components/coupon';
import { page } from '../../lib/seo';
import { Check, Layers, Blocks, Save, ListOrdered, GalleryHorizontal, Globe, MonitorSmartphone, SlidersHorizontal, Users, Network, LifeBuoy } from 'lucide-react';
const faqld={'@context':'https://schema.org','@type':'FAQPage',mainEntity:d.faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))};
const featIcon = {
  'Everything in Free': Layers,
  'Everything in Pro Starter': Layers,
  'Everything in Pro Growth': Layers,
  'No-code Widgets Builder': Blocks,
  'Saved, reusable widgets': Save,
  'Load more and numbered pages': ListOrdered,
  'Full carousel control': GalleryHorizontal,
  'Use on unlimited websites': Globe,
  'Per-device column control': MonitorSmartphone,
  'Per-widget filters and limits': SlidersHorizontal,
  'Unlimited client websites': Users,
  'Multisite support': Network,
  'Priority support': LifeBuoy
};
export const metadata={title:'Pricing',...page('/pricing','Reviewkit is free forever. Pro plans from $9.99 a year add the Widgets Builder, saved widgets and full carousel control.')};
export default function P(){return(<><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqld)}}/><section className="wrap head"><h1>Simple pricing. Start free.</h1><p className="lead">Upgrade when you want the Widgets Builder and full design control.</p></section>
<CouponBanner/>
<section className="wrap plans">{d.plans.map(p=>{return(<div key={p.name} className={`card plan${p.featured?' hl':''}`}>{p.featured&&<span className="pill hl-pill">Most popular</span>}<h3>{p.name}</h3>
<div className="pricerow"><span className="price">{p.price}<small> {p.period}</small></span><span className="was">{p.was}</span><span className="savepill">Save {p.save}%</span></div>
<p className="mut">{p.sites}</p>
<ul>{p.features.map(x=>{const I=featIcon[x]||Check;return(<li key={x}><span className="planfeat"><I size={14} strokeWidth={2.4}/></span>{x}</li>)})}</ul>
<Btn href={p.href} ghost={!p.featured} inv={p.featured}>{p.cta}</Btn></div>)})}</section>
<section className="wrap faq"><h2>Questions</h2>{d.faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</section></>)}