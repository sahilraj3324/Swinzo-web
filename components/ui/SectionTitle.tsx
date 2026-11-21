import type { ReactNode } from 'react';

export default function SectionTitle({ eyebrow, children, copy, align = 'left' }: { eyebrow: string; children: ReactNode; copy?: string; align?: 'left' | 'center' }) {
  return <div className={`section-heading ${align === 'center' ? 'center' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{children}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}
