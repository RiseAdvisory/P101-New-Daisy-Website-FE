import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { PricingPageClient } from '../PricingPageClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const isAr = locale === 'ar';
  return {
    title: isAr
      ? 'باقات أسعار الصالونات والمنتجعات | ديزي'
      : 'Salon & Spa Pricing Plans | The Daisy',
    description: isAr
      ? 'باقات أسعار شفافة لصالونات ومنتجعات التجميل. ابدأ تجربة مجانية لمدة 14 يوماً. بدون بطاقة ائتمان.'
      : 'Compare The Daisy pricing plans for salons, spas, and clinics. Basic $50/mo, Growth $150/mo, Business $250/mo. Start with a free 14-day trial. No hidden fees.',
    keywords: [
      'salon software pricing',
      'spa booking system cost',
      'beauty business subscription',
      'salon management pricing',
      'beauty marketplace fees',
      'salon app pricing',
      'wellness business plans',
      'salon subscription plans',
    ],
    openGraph: {
      title: isAr
        ? 'باقات أسعار الصالونات والمنتجعات | ديزي'
        : 'Salon & Spa Pricing Plans | The Daisy',
      description: isAr
        ? 'باقات أسعار شفافة لصالونات ومنتجعات التجميل. ابدأ تجربة مجانية لمدة 14 يوماً. بدون بطاقة ائتمان.'
        : 'Flexible pricing plans for salons, spas, and clinics. Basic $50, Growth $150, Business $250 per month. 14-day free trial included.',
      url: `https://www.jointhedaisy.com/${locale}/pricing/business`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'The Daisy Business Pricing Plans',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr
        ? 'باقات أسعار الصالونات والمنتجعات | ديزي'
        : 'Salon & Spa Pricing Plans | The Daisy',
      description: isAr
        ? 'باقات أسعار شفافة لصالونات ومنتجعات التجميل. ابدأ تجربة مجانية لمدة 14 يوماً. بدون بطاقة ائتمان.'
        : 'Flexible pricing plans for salons, spas, and clinics. Start with a 14-day free trial.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates('/pricing/business', locale),
  };
}

export default function PricingBusinessPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <WebPageSchema
        title="Salon & Spa Pricing Plans | The Daisy"
        description="Compare The Daisy pricing plans for salons, spas, and clinics. Basic $50/mo, Growth $150/mo, Business $250/mo. 14-day free trial."
        url="https://www.jointhedaisy.com/pricing/business"
        dateModified="2026-04-05T00:00:00.000Z"
        primaryImage="/images/og/og-default.jpg"
      />
      <PageBreadcrumbSchema
        locale={params.locale}
        items={[
          { name: 'Pricing', url: '/pricing/business' },
          { name: 'Business', url: '/pricing/business' },
        ]}
      />
      <PricingPageClient persona="business" lang={params.locale} />
    </>
  );
}
