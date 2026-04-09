import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { BusinessClient } from './business/BusinessClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import { LandingHero } from '@/components/shared/LandingHero';
import { t } from '@/lib/constants/i18n';
import { businessPageData } from '@/lib/constants/pages/businessPage';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return {
    title: 'AI Salon & Spa Management Platform | The Daisy',
    description:
      'Grow your salon or spa with The Daisy. AI receptionist, smart booking, customer acquisition, payments, and marketing, all in one platform. Start your 14-day free trial.',
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
      title: 'AI Salon & Spa Management Platform | The Daisy',
      description:
        'Grow your salon or spa with The Daisy. AI receptionist, smart booking, customer acquisition, payments, and marketing, all in one platform. Start your 14-day free trial.',
      url: 'https://www.jointhedaisy.com',
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'The Daisy - AI Salon & Spa Management Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Salon & Spa Management Platform | The Daisy',
      description:
        'Grow your salon or spa with The Daisy. AI receptionist, smart booking, customer acquisition, payments, and marketing, all in one platform.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: {
      canonical: 'https://www.jointhedaisy.com',
      ...localeAlternates('/', locale),
    },
  };
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const pageData = t(businessPageData, locale);

  return (
    <>
      <WebPageSchema
        title="AI Salon & Spa Management Platform | The Daisy"
        description="AI-powered beauty business platform. Manage bookings, customer acquisition, staff scheduling, payments, and marketing, all in one."
        url="https://www.jointhedaisy.com"
        dateModified="2026-03-17T00:00:00.000Z"
      />
      <PageBreadcrumbSchema
        locale={locale}
        items={[{ name: 'Home', url: 'https://www.jointhedaisy.com' }]}
      />
      {pageData.hero && (
        <LandingHero
          categoryLabel={pageData.hero.categoryLabel}
          headline={pageData.hero.headline}
          subHeadline={pageData.hero.subHeadline}
          ctaText={pageData.hero.ctaText}
          ctaLink={pageData.hero.ctaLink}
          trustLine={pageData.hero.trustLine}
          showMetaBadge
          locale={locale}
        />
      )}
      <BusinessClient lang={locale} />
    </>
  );
}
