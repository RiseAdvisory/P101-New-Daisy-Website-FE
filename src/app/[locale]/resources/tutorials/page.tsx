import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { TutorialsClient } from './TutorialsClient';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Beauty Industry Tutorials & Guides | The Daisy',
  description:
    'Step-by-step guides for salon owners and beauty professionals. Learn booking management, marketing strategies, staff scheduling, payments, and more.',
  keywords: [
    'beauty industry guides',
    'salon management tutorials',
    'salon marketing guide',
    'beauty business how-to',
    'salon staff management',
    'booking management guide',
    'beauty professional guides',
    'salon owner resources',
    'The Daisy tutorials',
  ],
  openGraph: {
    title: 'Beauty Industry Tutorials & Guides | The Daisy',
    description:
      'Step-by-step guides for salon owners and beauty professionals. Learn booking management, marketing strategies, staff scheduling, payments, and more.',
    url: `https://www.jointhedaisy.com/${locale}/resources/tutorials`,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Tutorials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Industry Tutorials & Guides | The Daisy',
    description:
      'Step-by-step guides for salon owners and beauty professionals. Learn booking management, marketing strategies, staff scheduling, payments, and more.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/resources/tutorials', locale),
  };
}

export default function TutorialsPage() {
  return <TutorialsClient />;
}
