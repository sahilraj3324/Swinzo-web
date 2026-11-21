import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import { BadgeCheck, CalendarCheck, ShieldCheck, Sparkles } from 'lucide-react';

const trustItems = [
  { title: 'Easy booking', copy: 'In a few taps', icon: CalendarCheck },
  { title: 'Clear progress', copy: 'Updates in one place', icon: Sparkles },
  { title: 'Service standards', copy: 'Carefully designed', icon: BadgeCheck },
  { title: 'Secure experience', copy: 'Built around trust', icon: ShieldCheck },
];

export default function Hero() {
  return <section className="hero"><div className="hero-inner"><Header /><div className="hero-grid"><div className="hero-copy"><span className="hero-kicker">Home services, simplified</span><h1>Your home.<br />Handled.<br />Simply.</h1><p>Book trusted services, manage your schedule, and follow every update without the hassle.</p><div className="hero-actions"><Link href="/#download" className="dark-button">Download on iOS</Link><Link href="/#download" className="outline-button">Get it on Android</Link></div><p className="launch-note">Launching across major Indian cities</p></div><div className="hero-visual"><span className="hero-orb" /><Image src="/images/swinzo-cleaning-team.png" alt="Swinzo home-service professionals" width={1224} height={1288} priority /></div></div></div><div className="trust-strip">{trustItems.map((item) => { const Icon = item.icon; return <div key={item.title}><span><Icon /></span><div><strong>{item.title}</strong><small>{item.copy}</small></div></div>; })}</div></section>;
}
