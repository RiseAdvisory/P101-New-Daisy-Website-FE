import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import {
  insightsData,
  insightsMetaTitleI18n,
  insightsMetaDescriptionI18n,
} from '@/lib/constants/insights/insightData';
import { t } from '@/lib/constants/i18n';
import { InsightsPageClient } from './InsightsPageClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  const metaTitle = t(insightsMetaTitleI18n, locale);
  const metaDescription = t(insightsMetaDescriptionI18n, locale);
  return {
  title: metaTitle,
  description: metaDescription,
  keywords: [
    'salon industry statistics 2026',
    'beauty industry market size',
    'salon booking trends',
    'beauty business data',
    'GCC beauty market statistics',
  ],
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: `https://www.jointhedaisy.com/${locale}/insights`,
    type: 'article',
    images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: 'The Daisy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDescription,
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/insights', locale),
  };
}

export default function InsightsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const metaTitle = t(insightsMetaTitleI18n, locale);
  const metaDescription = t(insightsMetaDescriptionI18n, locale);
  const stats = t(insightsData, locale);

  return (
    <>
      <WebPageSchema
        title={metaTitle}
        description={metaDescription}
        url={`https://www.jointhedaisy.com/${locale}/insights`}
      />
      <PageBreadcrumbSchema
        locale={locale}
        items={[{ name: locale === 'ar' ? 'رؤى وإحصائيات' : 'Insights', url: `https://www.jointhedaisy.com/${locale}/insights` }]}
      />
      <InsightsPageClient stats={stats} locale={locale} />
    </>
  );
}
