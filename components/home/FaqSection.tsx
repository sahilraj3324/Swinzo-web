import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import FaqAccordion from '@/components/ui/FaqAccordion';

export default function FaqSection() { return <section className="section faq-section"><SectionTitle eyebrow="Need to know" align="center">Frequently asked <span className="accent">questions.</span></SectionTitle><FaqAccordion limit={5} /><div className="faq-help"><div><strong>Still have questions?</strong><p>We are here to help you find the right next step.</p></div><Link href="/faqs">Visit help center</Link></div></section>; }
