import './globals.css';
import Script from 'next/script';
import Link from 'next/link';
import { Manrope } from 'next/font/google';
import { Star, Btn } from '../components/ui';
import d from '../data.json';
const f=Manrope({subsets:['latin'],display:'swap'});
export const metadata={title:'Reviewkit: Trustpilot reviews for WordPress',description:d.site.tagline};
export default function Layout({children}){return(<html lang="en"><body className={f.className}>
<Script src="https://www.googletagmanager.com/gtm.js?id=GTM-5LKZPHWJ" strategy="afterInteractive"/>
<Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());`}</Script>
<header className="nav"><div className="wrap row"><Link href="/" className="logo"><Star/>Reviewkit</Link><nav>{d.nav.map(n=><Link key={n.href} href={n.href}>{n.label}</Link>)}</nav><Btn href="/pricing">Get Pro</Btn></div></header>
<main>{children}</main>
<footer><div className="wrap row"><div><Link href="/" className="logo"><Star/>Reviewkit</Link><p className="mut">Independent plugin. Not affiliated with or endorsed by Trustpilot.</p></div><nav><a href={d.site.wporg}>Free plugin</a><a href={d.site.docs}>Docs</a><a href={d.site.demo}>Live demo</a><Link href="/contact">Support</Link></nav></div></footer>
</body></html>)}
