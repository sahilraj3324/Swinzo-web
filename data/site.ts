import { Bath, Boxes, CalendarCheck, ChefHat, Home, PackageCheck, Shirt, Sparkles, Wrench } from 'lucide-react';

export const services = [
  { title: 'Home Cleaning', description: 'Fresh, comfortable rooms without the weekend work.', icon: Home, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=85' },
  { title: 'Deep Cleaning', description: 'Detailed care for kitchens, corners, fixtures, and floors.', icon: Sparkles, image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=85' },
  { title: 'Kitchen Services', description: 'Cooking-area cleaning, degreasing, and appliance care.', icon: ChefHat, image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=85' },
  { title: 'Laundry & Ironing', description: 'Wash, dry, fold, and press—handled with care.', icon: Shirt, image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=700&q=85' },
  { title: 'Bathroom Cleaning', description: 'Deep care for a hygienic, polished space.', icon: Bath, image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=85' },
  { title: 'Home Maintenance', description: 'Repairs, installations, and routine upkeep.', icon: Wrench, image: 'https://images.unsplash.com/photo-1581578017426-41f9c34e8928?auto=format&fit=crop&w=700&q=85' },
  { title: 'Packing & Moving', description: 'Careful packing and reliable moving assistance.', icon: PackageCheck, image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=700&q=85' },
  { title: 'More Services', description: 'Discover beauty, wellness, appliance, and lifestyle care.', icon: Boxes, image: '' },
];

export const processSteps = [
  { title: 'Choose a service', description: 'Browse categories and select exactly what your home needs.', icon: Boxes },
  { title: 'Customize & confirm', description: 'Add details, choose a convenient slot, and confirm.', icon: CalendarCheck },
  { title: 'Book securely', description: 'Review your request and complete your booking safely.', icon: PackageCheck },
  { title: 'Relax, we handle it', description: 'Follow progress while your professional gets it done.', icon: Home },
];

export const faqs = [
  { question: 'How does Swinzo work?', answer: 'Choose a service, share a few details, select a convenient time, and confirm your request. Swinzo keeps the booking organized in one place.' },
  { question: 'How do I book a service?', answer: 'Browse the services page, select what you need, and choose a suitable appointment slot. The confirmation screen summarizes your request.' },
  { question: 'What payment methods are supported?', answer: 'Available payment methods are shown during checkout so you can choose the option that works best for you.' },
  { question: 'Can I reschedule or cancel?', answer: 'Bookings can be managed from your account. Applicable rescheduling or cancellation terms are shown before confirmation.' },
  { question: 'How are professionals selected?', answer: 'Swinzo is designed around identity checks, service readiness, and clear quality standards for participating professionals.' },
  { question: 'What if I need help after a service?', answer: 'Use the support option attached to your booking so the team can review the service details and help quickly.' },
];
