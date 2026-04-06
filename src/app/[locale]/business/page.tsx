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
      'AI receptionist for salons',
      'WhatsApp salon booking',
      'Instagram booking automation',
      'clinic booking software',
      'beauty salon receptionist software',
    ],
    openGraph: {
      title: 'AI Salon & Spa Management Platform | The Daisy',
      description:
        'Grow your salon or spa with The Daisy. AI receptionist, smart booking, customer acquisition, payments, and marketing, all in one platform. Start your 14-day free trial.',
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
      locale: locale === 'ar' ? 'ar_KW' : 'en_US',
      alternateLocale: locale === 'ar' ? ['en_US'] : ['ar_KW'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Salon & Spa Management Platform | The Daisy',
      description:
        'Grow your salon or spa with The Daisy. AI receptionist, smart booking, customer acquisition, payments, and marketing, all in one platform. Start your 14-day free trial.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: {
      canonical: `https://www.jointhedaisy.com/${locale}/business`,
      ...localeAlternates('/business', locale),
    },
  };
}

export default function BusinessPage({ params }: { params: { locale: string } }) {
  const pageData = t(businessPageData, params.locale);

  return (
    <>
      {/* Preload first scroll section hero image to improve mobile LCP */}
      <link
        rel="preload"
        href="/images/pages/business/scroll/device-mockups.webp"
        as="image"
        type="image/webp"
      />
      <WebPageSchema
        title="Salon & Spa Business Solutions | The Daisy"
        description="AI-powered beauty business platform. Manage bookings, customer acquisition, staff scheduling, payments, and marketing, all in one."
        url={`https://www.jointhedaisy.com/${params.locale}/business`}
        dateModified="2026-03-17T00:00:00.000Z"
        primaryImage="/images/og/og-default.jpg"
      />
      <PageBreadcrumbSchema
        locale={params.locale}
        items={[
          {
            name: params.locale === 'ar' ? 'للأعمال' : 'For Business',
            url: `https://www.jointhedaisy.com/${params.locale}/business`,
          },
        ]}
      />
      {pageData.hero && (
        <LandingHero
          categoryLabel={pageData.hero.categoryLabel}
          headline={pageData.hero.headline}
          subHeadline={pageData.hero.subHeadline}
          ctaText={pageData.hero.ctaText}
          ctaLink={pageData.hero.ctaLink}
          trustLine={pageData.hero.trustLine}
        />
      )}
      <BusinessClient lang={params.locale} />
    </>
  );
}
