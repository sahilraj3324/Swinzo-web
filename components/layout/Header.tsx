'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Why us', '/#why-us'],
  ['Services', '/services'],
  ['How it works', '/how-it-works'],
  ['FAQs', '/faqs'],
  ['Blog', '/blog'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link href="/" className="brand" onClick={() => setOpen(false)}><span>S</span>winzo</Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link href="/#download" className="dark-button header-cta">Download app</Link>
      <button className="menu-button" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/#download" className="dark-button" onClick={() => setOpen(false)}>Download app</Link></nav>}
    </header>
  );
}
