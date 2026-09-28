import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import { PricingV3Client } from '../PricingV3Client';
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
      : 'Compare The Daisy pricing for salons, spas and clinics. Basic from $1/mo (+$50 past 5 appointments), Growth $150, Business $250. Free 14-day trial.',
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
        : 'Flexible pricing for salons, spas and clinics. Basic from $1/mo (+$50 past 5 appointments), Growth $150, Business $250. 14-day free trial included.',
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
        description="Compare The Daisy pricing for salons, spas and clinics. Basic from $1/mo (+$50 past 5 appointments), Growth $150, Business $250. 14-day free trial."
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
      <PricingV3Client persona="business" locale={params.locale} />
    </>
  );
}
