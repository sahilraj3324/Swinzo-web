import SectionTitle from '@/components/ui/SectionTitle';
import { BadgeCheck, CircleDollarSign, Sparkles, Zap } from 'lucide-react';

const items = [
  { title: 'Thoughtful standards', copy: 'A service experience designed around clear expectations.', icon: BadgeCheck },
  { title: 'Fast discovery', copy: 'Find the right service without endless calls or searching.', icon: Zap },
  { title: 'Clear information', copy: 'Understand what you are choosing before you confirm.', icon: CircleDollarSign },
  { title: 'Everyday ease', copy: 'One place for booking, updates, and service history.', icon: Sparkles },
];

export default function ConfidenceSection() { return <section className="section confidence-section"><SectionTitle eyebrow="Built for busy homes" align="center">Convenience without the confusion<span className="accent">.</span></SectionTitle><div className="confidence-grid">{items.map((item) => { const Icon = item.icon; return <article key={item.title}><span><Icon /></span><h3>{item.title}</h3><p>{item.copy}</p></article>; })}</div></section>; }
