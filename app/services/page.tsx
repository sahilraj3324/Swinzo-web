import InnerPage from '@/components/layout/InnerPage';
import { services } from '@/data/site';
import { BadgeCheck, CalendarCheck, Search, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  return <InnerPage eyebrow="Swinzo services" title={<>Everything your home needs<span>.</span></>} copy="Explore everyday cleaning, maintenance, laundry, moving, and more in one organized catalogue."><section className="section catalogue"><label className="catalogue-search"><Search /><input type="search" placeholder="Search for a service" /></label><div className="catalogue-grid">{services.map((service) => { const Icon = service.icon; return <article key={service.title}>{service.image ? <img src={service.image} alt="" /> : <div className="catalogue-placeholder"><Icon /></div>}<span><Icon /></span><h2>{service.title}</h2><p>{service.description}</p><button type="button">Explore service</button></article>; })}</div></section><section className="page-band"><div><BadgeCheck /><h3>Clear standards</h3><p>Know what to expect before you book.</p></div><div><CalendarCheck /><h3>Flexible scheduling</h3><p>Choose a slot that works for your day.</p></div><div><ShieldCheck /><h3>Support built in</h3><p>Keep service details and help together.</p></div></section></InnerPage>;
}
