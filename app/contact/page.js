import d from '../../data.json';
export const metadata={title:'Contact | Reviewkit'};
export default function C(){return(<section className="wrap head narrow"><h1>Talk to us</h1><p className="lead">Questions about Pro, licences or setup? Send a message and we will reply by email.</p>
<form className="card form" action={`mailto:${d.site.email}`} method="post" encType="text/plain"><label>Your email<input type="email" name="email" required/></label><label>How can we help?<textarea name="message" rows="5" required/></label><button className="btn">Send message</button></form>
<p className="mut">Free plugin users can also use the <a href="https://wordpress.org/support/plugin/gutensuite-reviewkit/">support forum</a>.</p></section>)}
