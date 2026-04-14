import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { LegalClient } from './LegalClient';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
    title: isAr
      ? 'الموارد القانونية | منصة ديزي للتجميل'
      : 'Legal Resources | The Daisy Beauty Platform',
    description: isAr
      ? 'الموارد القانونية والسياسات لمنصة ديزي لحجز التجميل.'
      : 'Access legal resources, documentation, and downloads related to The Daisy beauty booking platform services and policies.',
    keywords: [
      'legal resources',
      'beauty platform documentation',
      'salon app legal',
      'vendor agreements',
      'The Daisy legal',
      'platform policies',
      'service agreements',
    ],
    openGraph: {
      title: isAr
        ? 'الموارد القانونية | منصة ديزي للتجميل'
        : 'Legal Resources | The Daisy Beauty Platform',
      description: isAr
        ? 'الموارد القانونية والسياسات لمنصة ديزي لحجز التجميل.'
        : 'Access legal resources and documentation from The Daisy beauty platform.',
      url: `https://www.jointhedaisy.com/${locale}/resources/legal`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'The Daisy Legal Resources',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr
        ? 'الموارد القانونية | منصة ديزي للتجميل'
        : 'Legal Resources | The Daisy Beauty Platform',
      description: isAr
        ? 'الموارد القانونية والسياسات لمنصة ديزي لحجز التجميل.'
        : 'Access legal resources and documentation from The Daisy.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates('/resources/legal', locale),
  };
}

export default function LegalPage() {
  return <LegalClient />;
}
