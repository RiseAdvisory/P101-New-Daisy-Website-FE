import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import {
  industryStats,
  insightsMetaTitle,
  insightsMetaDescription,
} from '@/lib/constants/insights/insightData';
import { InsightsPageClient } from './InsightsPageClient';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: insightsMetaTitle,
  description: insightsMetaDescription,
  keywords: [
    'salon industry statistics 2026',
    'beauty industry market size',
    'salon booking trends',
    'beauty business data',
    'GCC beauty market statistics',
  ],
  openGraph: {
    title: insightsMetaTitle,
    description: insightsMetaDescription,
    url: 'https://www.jointhedaisy.com/insights',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: insightsMetaTitle,
    description: insightsMetaDescription,
  },
    alternates: localeAlternates('/insights', locale),
  };
}

export default function InsightsPage() {
  return (
    <>
      <WebPageSchema
        title={insightsMetaTitle}
        description={insightsMetaDescription}
        url="https://www.jointhedaisy.com/insights"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'Insights', url: 'https://www.jointhedaisy.com/insights' }]}
      />
      <InsightsPageClient />
    </>
  );
}
