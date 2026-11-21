import PhoneMockup from '@/components/ui/PhoneMockup';
import { BellRing, CircleCheck, LocateFixed, ShieldCheck } from 'lucide-react';

export default function TrackingSection() {
  return <section className="tracking-section"><div className="tracking-inner"><div className="phones"><PhoneMockup screen="confirmed" /><PhoneMockup screen="assigned" /><PhoneMockup screen="tracking" /></div><div className="tracking-copy"><p className="eyebrow">Track every step</p><h2>Real-time updates,<br />complete <span className="accent">peace of mind.</span></h2><p>Keep booking details and important service updates together, from confirmation to completion.</p><ul>{[[BellRing,'Booking status updates'],[LocateFixed,'Arrival information'],[CircleCheck,'Completion confirmation']].map(([Icon,label]) => { const ItemIcon = Icon as typeof BellRing; return <li key={label as string}><ItemIcon />{label as string}</li>; })}</ul><div className="security-note"><ShieldCheck /><strong>Your booking details stay organized and protected.</strong></div></div></div></section>;
}
