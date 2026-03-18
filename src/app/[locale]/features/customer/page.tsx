import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { FeaturesCustomerClient } from './FeaturesCustomerClient';
import { FeaturesBreadcrumbSchema } from '@/components/seo/FeaturesBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Customer Features - Salon Booking & Cashback | The Daisy',
  description:
    'Explore The Daisy customer features: find salons near you, book beauty services, earn cashback rewards, manage appointments, rate & earn points, and enjoy home beauty services.',
  keywords: [
    'salon discovery',
    'beauty cashback',
    'appointment management',
    'salon near me feature',
    'beauty rewards program',
    'rate and review salons',
    'home beauty booking',
    'favorite salons',
    'beauty service search',
    'salon promotions',
  ],
  openGraph: {
    title: 'Customer Features - Salon Booking & Cashback | The Daisy',
    description:
      'Find salons near you, earn cashback rewards, and manage beauty appointments with The Daisy.',
    url: `https://www.jointhedaisy.com/${locale}/features/customer`,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'The Daisy Customer Features',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Features - Salon Booking & Cashback | The Daisy',
    description:
      'Find salons near you, earn cashback rewards, and manage beauty appointments.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/features/customer', locale),
  };
}

export default function FeaturesCustomerPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <FeaturesBreadcrumbSchema pageName="Customer" pageSlug="customer" />
      <WebPageSchema
        title="Customer Features - Salon Booking & Cashback | The Daisy"
        description="Explore The Daisy customer features: find salons near you, book beauty services, earn cashback rewards, manage appointments."
        url="https://www.jointhedaisy.com/features/customer"
      />
      <FeaturesCustomerClient lang={params.locale} />
    </>
  );
}
