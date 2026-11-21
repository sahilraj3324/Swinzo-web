import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Swinzo | Your home. Handled. Simply.',
  description: 'Book trusted home services, manage appointments, and follow every update with Swinzo.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
