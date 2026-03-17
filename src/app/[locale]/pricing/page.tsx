import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { PricingClient } from './PricingClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Pricing Plans for Salons & Spas | The Daisy',
  description:
    'Flexible pricing plans for salons, spas, and beauty professionals. Choose monthly or annual billing with commission-based pricing tailored to your business size.',
  keywords: [
    'salon software pricing',
    'spa booking system cost',
    'beauty business subscription',
    'salon management pricing',
    'beauty marketplace fees',
    'commission pricing',
    'salon app pricing',
    'wellness business plans',
  ],
  openGraph: {
    title: 'Pricing Plans for Salons & Spas | The Daisy',
    description:
      'Flexible pricing plans for salons, spas, and beauty professionals. Monthly or annual billing available.',
    url: `https://www.jointhedaisy.com/${locale}/pricing`,
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Pricing Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans for Salons & Spas | The Daisy',
    description:
      'Flexible pricing plans for salons, spas, and beauty professionals.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
    alternates: localeAlternates('/pricing', locale),
  };
}

export default function PricingPage() {
  return (
    <>
      <WebPageSchema
        title="Pricing Plans for Salons & Spas | The Daisy"
        description="Flexible pricing plans for salons, spas, and beauty professionals. Choose monthly or annual billing."
        url="https://www.jointhedaisy.com/pricing"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'Pricing', url: 'https://www.jointhedaisy.com/pricing' }]}
      />
      <PricingClient />
    </>
  );
}
