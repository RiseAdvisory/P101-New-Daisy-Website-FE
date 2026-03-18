import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { TutorialsClient } from './TutorialsClient';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Beauty Booking Tutorials | The Daisy Resources',
  description:
    'Learn how to use The Daisy beauty booking platform with step-by-step tutorials. Guides for salon owners, beauty professionals, and customers.',
  keywords: [
    'salon app tutorials',
    'beauty booking guide',
    'how to book salon',
    'vendor onboarding guide',
    'beauty app tutorial',
    'salon management guide',
    'The Daisy tutorials',
    'spa booking help',
  ],
  openGraph: {
    title: 'Beauty Booking Tutorials | The Daisy Resources',
    description:
      'Learn how to use The Daisy beauty booking platform with step-by-step tutorials.',
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
    title: 'Beauty Booking Tutorials | The Daisy Resources',
    description: 'Learn how to use The Daisy with step-by-step tutorials.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/resources/tutorials', locale),
  };
}

export default function TutorialsPage() {
  return <TutorialsClient />;
}
