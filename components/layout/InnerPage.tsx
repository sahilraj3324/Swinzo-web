import type { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function InnerPage({ eyebrow, title, copy, children }: { eyebrow: string; title: ReactNode; copy: string; children: ReactNode }) {
  return <><div className="inner-header"><Header /><div className="inner-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div></div><main>{children}</main><Footer /></>;
}
