import Link from 'next/link';
import { Camera, Link2, Play } from 'lucide-react';

const columns = [
  { title: 'Company', links: [['Why Swinzo', '/#why-us'], ['How it works', '/how-it-works'], ['Blog', '/blog'], ['Contact us', '/faqs']] },
  { title: 'Services', links: [['Home cleaning', '/services'], ['Kitchen services', '/services'], ['Laundry & ironing', '/services'], ['Home maintenance', '/services']] },
  { title: 'Support', links: [['Help center', '/faqs'], ['FAQs', '/faqs'], ['Terms of service', '/faqs'], ['Privacy policy', '/faqs']] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-brand">Swinzo</Link>
          <p className="footer-tagline">Everyday home care,<br />made effortlessly simple.</p>
          <div className="social-row"><a href="#" aria-label="Social gallery"><Camera /></a><a href="#" aria-label="Professional network"><Link2 /></a><a href="#" aria-label="Video channel"><Play /></a></div>
          <div className="newsletter"><strong>Get product updates</strong><p>Useful service news, no inbox clutter.</p><form><input type="email" aria-label="Email address" placeholder="Enter your email" /><button type="submit">Join</button></form></div>
        </div>
        {columns.map((column) => <div key={column.title} className="footer-column"><h3>{column.title}</h3>{column.links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div>)}
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Swinzo. All rights reserved.</span><span>Made thoughtfully in India</span></div>
    </footer>
  );
}
