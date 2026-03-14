import { Metadata } from 'next';
import {
  industryStats,
  insightsMetaTitle,
  insightsMetaDescription,
} from '@/lib/constants/insights/insightData';
import { InsightsPageClient } from './InsightsPageClient';

export const metadata: Metadata = {
  title: insightsMetaTitle,
  description: insightsMetaDescription,
  openGraph: {
    title: insightsMetaTitle,
    description: insightsMetaDescription,
    url: 'https://www.jointhedaisy.com/insights',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.jointhedaisy.com/insights',
  },
};

export default function InsightsPage() {
  return <InsightsPageClient />;
}
