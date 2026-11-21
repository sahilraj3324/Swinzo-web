import InnerPage from '@/components/layout/InnerPage';
import { Calendar, Clock3, Sparkles } from 'lucide-react';

const articles = [
  ['A room-by-room guide to easier weekly cleaning', 'Build a realistic routine that keeps daily mess from becoming weekend work.', 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85'],
  ['What to prepare before a deep-cleaning visit', 'A few thoughtful steps can help the service start smoothly and cover more ground.', 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=85'],
  ['Simple ways to keep your kitchen feeling fresh', 'Small maintenance habits for worktops, sinks, storage, and high-touch areas.', 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85'],
  ['Moving day without the last-minute scramble', 'An organized checklist for packing, labeling, and settling into the new space.', 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=900&q=85'],
];

export default function BlogPage() {
  return <InnerPage eyebrow="Swinzo journal" title={<>Useful ideas for easier homes<span>.</span></>} copy="Practical guidance for cleaning, maintenance, moving, and getting more from every service visit."><section className="section blog-grid">{articles.map(([title, copy, image], index) => <article key={title} className={index === 0 ? 'featured-article' : ''}><img src={image} alt="" /><div><span className="article-tag"><Sparkles /> Home guide</span><h2>{title}</h2><p>{copy}</p><div className="article-meta"><span><Calendar /> Swinzo editorial</span><span><Clock3 /> 4 min read</span></div><button type="button">Read guide</button></div></article>)}</section></InnerPage>;
}
