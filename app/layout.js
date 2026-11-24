import './globals.css';
import Script from 'next/script';
import Link from 'next/link';
import { Manrope } from 'next/font/google';
import { Star, Btn } from '../components/ui';
import { CouponBar } from '../components/coupon';
import d from '../data.json';
import { GoogleTagManager } from '@next/third-parties/google';
const f = Manrope({ subsets: ['latin'], display: 'swap' });
const BASE = d.site.url;
const jsonld = {
    '@context': 'https://schema.org', '@graph': [
        { '@type': 'Organization', '@id': `${BASE}/#org`, name: 'Reviewkit', url: BASE, email: d.site.email, logo: `${BASE}/icon.svg` },
        { '@type': 'WebSite', '@id': `${BASE}/#website`, url: BASE, name: 'Reviewkit', publisher: { '@id': `${BASE}/#org` } },
        { '@type': 'SoftwareApplication', '@id': `${BASE}/#app`, name: 'Reviewkit', applicationCategory: 'BusinessApplication', operatingSystem: 'WordPress', url: BASE, description: d.site.tagline, publisher: { '@id': `${BASE}/#org` }, offers: d.plans.map(p => ({ '@type': 'Offer', name: p.name, price: p.price.replace('$', ''), priceCurrency: 'USD', url: p.href, availability: 'https://schema.org/InStock' })) }]
};
export const metadata = { metadataBase: new URL(BASE), robots: 'index, follow', title: { default: 'Reviewkit: Trustpilot reviews for WordPress', template: '%s | Reviewkit' }, description: d.site.tagline, openGraph: { type: 'website', siteName: 'Reviewkit', images: ['/img/hero.webp'] }, twitter: { card: 'summary_large_image', images: ['/img/hero.webp'] } };
export default function Layout({ children }) {
    return (<html lang="en"><body className={f.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }} />
        <GoogleTagManager gtmId="GTM-5LKZPHWJ" />
        <CouponBar />
        <a href="#main" className="skip">Skip to content</a>
        <header className="nav"><div className="wrap row"><Link href="/" className="logo"><Star />Reviewkit</Link><nav aria-label="Primary">{d.nav.map(n => <Link key={n.href} href={n.href}>{n.label}</Link>)}</nav><div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><a href="https://customers.freemius.com/store/8739" target="_blank" rel="nofollow noreferrer">Account</a><Btn href="/pricing">Get Pro</Btn></div><details className="mobilemenu"><summary aria-label="Open menu"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></summary><div className="mobilepanel">{d.nav.map(n => <Link key={n.href} href={n.href}>{n.label}</Link>)}<Link href="/docs">Docs</Link></div></details></div></header>
        <main id="main">{children}</main>
        <footer><div className="wrap row"><div><Link href="/" className="logo"><Star />Reviewkit</Link><p className="mut">Independent plugin. Not affiliated with or endorsed by Trustpilot.</p></div><nav aria-label="Footer"><a href={d.site.wporg}>Free plugin</a><Link href="/docs">Docs</Link><Link href="/changelog">Changelog</Link><Link href="/blog">Blog</Link><Link href="/live-demo">Live demo</Link><Link href="/contact">Support</Link><Link href="/privacy-policy">Privacy policy</Link></nav></div></footer>
    </body></html>)
}