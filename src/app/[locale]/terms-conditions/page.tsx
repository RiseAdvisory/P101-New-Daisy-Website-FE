import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { TermsConditionsClient } from './TermsConditionsClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { getLocale } from '@/lib/locale';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Terms & Conditions | The Daisy - Beauty Booking Platform',
  description:
    'Review The Daisy terms and conditions governing the use of our beauty booking platform, services, and your rights and responsibilities as a customer or vendor.',
  keywords: [
    'terms and conditions',
    'terms of service',
    'user agreement',
    'beauty platform terms',
    'salon booking terms',
    'vendor agreement',
    'The Daisy terms',
  ],
  openGraph: {
    title: 'Terms & Conditions | The Daisy - Beauty Booking Platform',
    description:
      'Review The Daisy terms and conditions governing the use of our beauty booking platform.',
    url: `https://www.jointhedaisy.com/${locale}/terms-conditions`,
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Terms and Conditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | The Daisy - Beauty Booking Platform',
    description:
      'Review The Daisy terms and conditions for using our platform.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
    alternates: localeAlternates('/terms-conditions', locale),
  };
}

export default function TermsConditionsPage() {
  const locale = getLocale();

  return (
    <>
      <WebPageSchema
        title="Terms & Conditions | The Daisy"
        description="Review The Daisy terms and conditions governing the use of our beauty booking platform."
        url="https://www.jointhedaisy.com/terms-conditions"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'Terms & Conditions', url: 'https://www.jointhedaisy.com/terms-conditions' }]}
      />
      <TermsConditionsClient lang={locale} />
    </>
  );
}
