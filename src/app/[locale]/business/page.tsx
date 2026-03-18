import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { BusinessClient } from './BusinessClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { LandingHero } from '@/components/shared/LandingHero';
import { t } from '@/lib/constants/i18n';
import { businessPageData } from '@/lib/constants/pages/businessPage';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'AI-Powered Salon & Spa Management Platform | The Daisy',
  description:
    'Grow your salon or spa with The Daisy. AI receptionist, smart booking, customer acquisition, payments, and marketing — all in one platform. Start your 14-day free trial.',
  keywords: [
    'salon management software',
    'spa booking system',
    'beauty business platform',
    'salon marketing tools',
    'wellness business growth',
    'staff scheduling software',
    'salon promotions',
    'beauty marketplace',
    'salon payment processing',
    'client management system',
  ],
  openGraph: {
    title: 'AI-Powered Salon & Spa Management Platform | The Daisy',
    description:
      'Grow your salon or spa with The Daisy. AI receptionist, smart booking, customer acquisition, payments, and marketing — all in one platform. Start your 14-day free trial.',
    url: `https://www.jointhedaisy.com/${locale}/business`,
    type: 'website',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'The Daisy - Salon & Spa Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Salon & Spa Management Platform | The Daisy',
    description:
      'Grow your salon or spa with The Daisy. AI receptionist, smart booking, customer acquisition, payments, and marketing — all in one platform. Start your 14-day free trial.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/business', locale),
  };
}

export default function BusinessPage({ params }: { params: { locale: string } }) {
  const pageData = t(businessPageData, params.locale);

  return (
    <>
      <WebPageSchema
        title="Salon & Spa Business Solutions | The Daisy"
        description="Grow your salon or spa business with The Daisy. Manage bookings, staff scheduling, promotions, and payments."
        url="https://www.jointhedaisy.com/business"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'For Business', url: 'https://www.jointhedaisy.com/business' }]}
      />
      {pageData.hero && (
        <LandingHero
          categoryLabel={pageData.hero.categoryLabel}
          headline={pageData.hero.headline}
          subHeadline={pageData.hero.subHeadline}
          ctaText={pageData.hero.ctaText}
          ctaLink={pageData.hero.ctaLink}
          answerBlock={pageData.hero.answerBlock}
        />
      )}
      <BusinessClient lang={params.locale} />
    </>
  );
}
