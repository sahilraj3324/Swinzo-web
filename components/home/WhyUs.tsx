import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import { CalendarCheck, CircleDollarSign, ShieldCheck } from 'lucide-react';

export default function WhyUs() {
  return <section className="section why-section" id="why-us"><div className="why-grid"><div><SectionTitle eyebrow="Why Swinzo">A simpler way to<br />get things done<span className="accent">.</span></SectionTitle><p className="body-copy">From finding the right service to booking and managing everything in one place, Swinzo makes everyday tasks feel lighter.</p><div className="mini-benefits">{[[ShieldCheck,'Verified service standards'],[CalendarCheck,'Quick, organized booking'],[CircleDollarSign,'Clear service details']].map(([Icon,label]) => { const ItemIcon = Icon as typeof ShieldCheck; return <div key={label as string}><span><ItemIcon /></span><strong>{label as string}</strong></div>; })}</div><Link href="/how-it-works" className="coral-button">Explore how it works</Link></div><div className="why-art"><div className="soft-circle"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit orbit-three" /><div className="center-mark">S</div></div></div></div></section>;
}
