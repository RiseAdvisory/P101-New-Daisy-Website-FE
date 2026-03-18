import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { FaqClient } from './FaqClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'FAQ - Beauty Booking Questions | The Daisy',
  description:
    'Find answers to common questions about The Daisy beauty booking platform. Learn about salon bookings, cashback rewards, business features, and getting started.',
  keywords: [
    'beauty booking FAQ',
    'salon app questions',
    'cashback help',
    'how to book salon',
    'beauty app help',
    'vendor FAQ',
    'booking questions',
    'spa booking help',
  ],
  openGraph: {
    title: 'FAQ - Beauty Booking Questions | The Daisy',
    description:
      'Find answers to common questions about The Daisy beauty booking platform.',
    url: `https://www.jointhedaisy.com/${locale}/faq`,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'The Daisy FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Beauty Booking Questions | The Daisy',
    description:
      'Find answers to common questions about The Daisy beauty platform.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/faq', locale),
  };
}

export default function FaqPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <WebPageSchema
        title="FAQ - Beauty Booking Questions | The Daisy"
        description="Find answers to common questions about The Daisy beauty booking platform."
        url="https://www.jointhedaisy.com/faq"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'FAQ', url: 'https://www.jointhedaisy.com/faq' }]}
      />
      <FaqClient />
    </>
  );
}
