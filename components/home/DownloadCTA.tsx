import Link from 'next/link';
import { Smartphone } from 'lucide-react';

export default function DownloadCTA() { return <section className="download-section" id="download"><div className="download-icon"><Smartphone /></div><p className="eyebrow">Swinzo on mobile</p><h2>Your home, one tap away<span>.</span></h2><p>Keep services, schedules, and important updates together in one simple app.</p><div><Link href="#" className="dark-button">Download on iOS</Link><Link href="#" className="outline-button dark-outline">Get it on Android</Link></div></section>; }
