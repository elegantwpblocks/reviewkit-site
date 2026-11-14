import ContactForm from '../../components/contact-form';
import { page } from '../../lib/seo';
export const metadata = { title: 'Contact', ...page('/contact', 'Questions about Reviewkit Pro, licences or setup? Send a message or use the WordPress.org support forum.') };
export default function C() { return (<section className="wrap head narrow"><h1>Talk to us</h1><p className="lead">Questions about Pro, licences or setup? Send a message and we will reply by email.</p>
<ContactForm />
<p className="mut">Free plugin users can also use the <a href="https://wordpress.org/support/plugin/gutensuite-reviewkit/">support forum</a>.</p></section>) }