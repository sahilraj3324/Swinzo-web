import SectionTitle from '@/components/ui/SectionTitle';
import { processSteps } from '@/data/site';

export default function ProcessSection() {
  return <section className="section process-section"><SectionTitle eyebrow="How it works" align="center" copy="From choosing a service to getting the job done, every step stays clear and easy.">Simple steps, <span className="accent">seamless experience.</span></SectionTitle><div className="process-grid">{processSteps.map((step) => { const Icon = step.icon; return <article key={step.title}><span className="process-icon"><Icon /></span><h3>{step.title}</h3><p>{step.description}</p></article>; })}</div></section>;
}
