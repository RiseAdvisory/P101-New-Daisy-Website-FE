import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { CustomerClient } from './CustomerClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { getLocale } from '@/lib/locale';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Book Beauty & Salon Services | The Daisy',
  description:
    'Book beauty, wellness & salon services with The Daisy. Discover salons near you, earn cashback rewards, manage appointments, and enjoy exclusive promotions on hair, nails & spa services.',
  keywords: [
    'beauty booking app',
    'salon near me',
    'book hair appointment',
    'nail salon booking',
    'spa booking app',
    'wellness services',
    'cashback rewards',
    'beauty promotions',
    'salon discounts',
    'home beauty services',
  ],
  openGraph: {
    title: 'Book Beauty & Salon Services | The Daisy',
    description:
      'Discover salons near you, earn cashback rewards, and book beauty services with exclusive promotions.',
    url: `https://www.jointhedaisy.com/${locale}/customer`,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'The Daisy - Book Beauty & Salon Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Beauty & Salon Services | The Daisy',
    description:
      'Discover salons near you, earn cashback rewards, and book beauty services.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/customer', locale),
  };
}

export default function CustomerPage() {
  const locale = getLocale();

  return (
    <>
      <WebPageSchema
        title="Book Beauty & Salon Services | The Daisy"
        description="Book beauty, wellness & salon services with The Daisy. Discover salons near you, earn cashback rewards, manage appointments, and enjoy exclusive promotions."
        url="https://www.jointhedaisy.com/customer"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'For Customers', url: 'https://www.jointhedaisy.com/customer' }]}
      />
      <CustomerClient lang={locale} />
    </>
  );
}
