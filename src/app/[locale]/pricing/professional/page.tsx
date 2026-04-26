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
      ? 'أسعار محترفي التجميل المستقلين | ديزي'
      : 'Freelance Beauty Professional Pricing | The Daisy',
    description: isAr
      ? 'خطط أسعار مرنة لمحترفي التجميل المستقلين. انضم مجانًا وادفع عمولة فقط على العملاء الجدد القادمين من السوق.'
      : 'Pricing plans for freelance beauty professionals. Starter $25/mo, Professional $50/mo, Elite $100/mo. Start with a free 14-day trial. No hidden fees.',
    keywords: [
      'freelance beauty pricing',
      'professional beauty subscription',
      'independent stylist software cost',
      'beauty professional plans',
      'freelance salon pricing',
      'beauty freelancer tools',
      'solo beauty professional software',
      'beauty career platform pricing',
    ],
    openGraph: {
      title: isAr
        ? 'أسعار محترفي التجميل المستقلين | ديزي'
        : 'Freelance Beauty Professional Pricing | The Daisy',
      description: isAr
        ? 'خطط أسعار مرنة لمحترفي التجميل المستقلين. انضم مجانًا وادفع عمولة فقط على العملاء الجدد القادمين من السوق.'
        : 'Pricing plans for freelance beauty professionals. Starter $25, Professional $50, Elite $100 per month. 14-day free trial included.',
      url: `https://www.jointhedaisy.com/${locale}/pricing/professional`,
      type: 'website',
      images: [
        {
          url: '/images/og/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'The Daisy Professional Pricing Plans',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isAr
        ? 'أسعار محترفي التجميل المستقلين | ديزي'
        : 'Freelance Beauty Professional Pricing | The Daisy',
      description: isAr
        ? 'خطط أسعار مرنة لمحترفي التجميل المستقلين. انضم مجانًا وادفع عمولة فقط على العملاء الجدد القادمين من السوق.'
        : 'Pricing plans for freelance beauty professionals. Start with a 14-day free trial.',
      images: ['/images/og/og-default.jpg'],
    },
    alternates: localeAlternates('/pricing/professional', locale),
  };
}

export default function PricingProfessionalPage({ params }: { params: { locale: string } }) {
  return (
    <>
      <WebPageSchema
        title="Freelance Beauty Professional Pricing | The Daisy"
        description="Pricing plans for freelance beauty professionals. Starter $25/mo, Professional $50/mo, Elite $100/mo. 14-day free trial."
        url="https://www.jointhedaisy.com/pricing/professional"
        dateModified="2026-04-05T00:00:00.000Z"
        primaryImage="/images/og/og-default.jpg"
      />
      <PageBreadcrumbSchema
        locale={params.locale}
        items={[
          { name: 'Pricing', url: '/pricing/business' },
          { name: 'Professional', url: '/pricing/professional' },
        ]}
      />
      <PricingPageClient persona="professional" lang={params.locale} />
    </>
  );
}
