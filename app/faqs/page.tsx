import InnerPage from '@/components/layout/InnerPage';
import FaqAccordion from '@/components/ui/FaqAccordion';
import { Mail, MessageCircle } from 'lucide-react';

export default function FaqPage() {
  return <InnerPage eyebrow="Help center" title={<>Answers without the runaround<span>.</span></>} copy="Find quick explanations for booking, payments, scheduling, professionals, and service support."><section className="section faq-page"><FaqAccordion /><div className="contact-options"><article><MessageCircle /><h2>Chat with support</h2><p>Get help with an existing booking or choosing a service.</p><button type="button">Start a conversation</button></article><article><Mail /><h2>Send us a message</h2><p>Share your question and the team will review the details.</p><button type="button">Contact support</button></article></div></section></InnerPage>;
}
