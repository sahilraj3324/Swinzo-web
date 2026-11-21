import { Check, Clock3, MapPin, MessageCircle, Phone, Star } from 'lucide-react';

export default function PhoneMockup({ screen }: { screen: 'confirmed' | 'assigned' | 'tracking' }) {
  return <div className="phone"><div className="phone-notch" /><div className="phone-screen">
    {screen === 'confirmed' && <><p className="phone-title">Booking confirmed</p><span className="success-icon"><Check /></span><div className="phone-card"><small>Booking ID</small><strong>SWZ123456</strong></div><div className="phone-card"><small>Payment summary</small><strong>Paid securely</strong></div><div className="phone-status"><Check /> Request received</div></>}
    {screen === 'assigned' && <><p className="phone-title">Professional assigned</p><div className="avatar">AK</div><strong className="pro-name">Aarav Kumar</strong><span className="rating"><Star /> 4.8 · 5 yrs exp.</span><div className="phone-actions"><button><Phone /> Call</button><button><MessageCircle /> Chat</button></div><div className="phone-card"><small>Estimated arrival</small><strong>15 minutes</strong><Clock3 /></div><div className="phone-status"><Clock3 /> On the way</div></>}
    {screen === 'tracking' && <><p className="phone-title">Service in progress</p><div className="map-ui"><span className="route-dot one" /><span className="route-line" /><span className="route-dot two" /><MapPin /></div><div className="phone-card"><small>Live status</small><strong>Service in progress</strong></div><div className="phone-status"><MapPin /> Live updates</div></>}
  </div></div>;
}
