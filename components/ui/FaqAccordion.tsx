'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { faqs } from '@/data/site';

export default function FaqAccordion({ limit }: { limit?: number }) {
  const [open, setOpen] = useState(0);
  const items = limit ? faqs.slice(0, limit) : faqs;
  return <div className="faq-list">{items.map((item, index) => <article className={`faq-item ${open === index ? 'open' : ''}`} key={item.question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)}><span>{item.question}</span>{open === index ? <Minus /> : <Plus />}</button>{open === index && <p>{item.answer}</p>}</article>)}</div>;
}
