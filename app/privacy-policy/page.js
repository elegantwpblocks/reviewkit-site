import d from '../../data.json';
import { page } from '../../lib/seo';
export const metadata = { title: 'Privacy policy', ...page('/privacy-policy', 'How Reviewkit collects, uses and protects your data: analytics, the contact form, and payments handled by Freemius as Merchant of Record.') };
export default function Privacy() {
  return (
    <>
      <section className="wrap head">
        <h1>Privacy policy</h1>
        <p className="lead">How Reviewkit handles your data, last updated {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.</p>
      </section>
      <section className="wrap posttop">
        <div className="prose">
          <p>Reviewkit is a WordPress plugin by Gutensuite. This policy explains what personal data we collect on this website, why we collect it, and who receives it. It covers <strong>{d.site.url}</strong> only. For questions, email <a href={`mailto:${d.site.email}`}>{d.site.email}</a>.</p>

          <h2>What we collect</h2>
          <p>We keep things minimal. On this website we collect:</p>
          <ul>
            <li><strong>Contact form submissions.</strong> If you write to us through the contact form, we receive your name, email address and message so we can reply.</li>
            <li><strong>Usage analytics.</strong> We measure aggregate page views and traffic sources to understand which pages are useful.</li>
            <li><strong>Purchase data, handled by Freemius.</strong> If you buy Reviewkit Pro, your payment details are collected by Freemius, not by us. See the payments section below.</li>
          </ul>
          <p>The plugin itself stores review data on <em>your own</em> WordPress site and only talks to the public Trustpilot API. We never receive your site&rsquo;s data.</p>

          <h2>Analytics: Google Tag Manager</h2>
          <p>This site uses Google Tag Manager (GTM) to load analytics tags. Tags may set cookies and collect information such as pages visited, approximate location derived from IP address, device and browser type, and referring URL. We use this data to measure site performance and improve content, not to advertise or build profiles. You can block analytics cookies with your browser settings or any cookie blocker; the site works without them.</p>

          <h2>Contact form: Web3Forms</h2>
          <p>The contact form is processed by <a href="https://web3forms.com" rel="noopener noreferrer">Web3Forms</a>, which forwards your message to our inbox. Your name, email address and message are transmitted through their service solely to deliver your enquiry to us. We use it only to respond to support and sales questions, and we keep the correspondence for as long as needed to resolve your request.</p>

          <h2>Payments and personal data</h2>
          <p>We use <a href="https://freemius.com/" rel="noopener noreferrer">Freemius, Inc.</a> as our <a href="https://freemius.com/merchant-of-record/" rel="noopener noreferrer">Merchant of Record</a>. When you make a purchase, personal data such as your name, email address, billing details, and transaction information is collected by or shared with Freemius and stored to process payments, manage licenses, and provide billing support. For more information about Freemius&rsquo;s data practices and your privacy rights, see the <a href="https://freemius.com/privacy/" rel="noopener noreferrer">Freemius Privacy Policy</a>.</p>
          <p>Purchases are also subject to the Freemius terms presented at checkout. We remain responsible for providing the product and product support.</p>

          <h2>Legal basis</h2>
          <p>Where the GDPR applies, we process form submissions and purchase-related communication on the basis of performing a contract or taking steps prior to it, and analytics on the basis of our legitimate interest in understanding how the site is used. You may object to the analytics processing at any time by blocking the tags.</p>

          <h2>Your rights</h2>
          <p>You can ask us for a copy of the personal data we hold about you, ask us to correct or delete it, or object to its processing. Email <a href={`mailto:${d.site.email}`}>{d.site.email}</a> and we will respond within 30 days. Note that data held by Freemius (payments) or Web3Forms (form delivery) is governed by their own policies; we will help you route requests to the right party.</p>

          <h2>Data retention</h2>
          <p>We keep contact form correspondence until your question is resolved and for a reasonable period after, in case you come back to it. Analytics data is retained according to the default retention settings of the connected Google services. We do not sell personal data to anyone.</p>

          <h2>Changes to this policy</h2>
          <p>If we change how we handle personal data, we will update this page and change the &ldquo;last updated&rdquo; date above. Material changes that affect existing customers will be announced by email.</p>

          <h2>Contact</h2>
          <p>Questions about this policy: <a href={`mailto:${d.site.email}`}>{d.site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
