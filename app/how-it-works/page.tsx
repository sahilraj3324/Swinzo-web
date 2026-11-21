import InnerPage from '@/components/layout/InnerPage';
import PhoneMockup from '@/components/ui/PhoneMockup';
import { processSteps } from '@/data/site';

export default function HowItWorksPage() {
  return <InnerPage eyebrow="How Swinzo works" title={<>Four clear steps. Zero guesswork<span>.</span></>} copy="The experience is designed to make choosing, confirming, and following a home service feel effortless."><section className="section detailed-process">{processSteps.map((step) => { const Icon = step.icon; return <article key={step.title}><span><Icon /></span><div><p className="eyebrow">Simple step</p><h2>{step.title}</h2><p>{step.description}</p></div></article>; })}</section><section className="tracking-section inner-tracking"><div className="tracking-inner"><div className="phones"><PhoneMockup screen="confirmed" /><PhoneMockup screen="assigned" /><PhoneMockup screen="tracking" /></div><div className="tracking-copy"><p className="eyebrow">Always informed</p><h2>Follow the service from confirmation to completion<span className="accent">.</span></h2><p>All the important information stays in one familiar place, so you always know what comes next.</p></div></div></section></InnerPage>;
}
