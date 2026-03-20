// ---------------------------------------------------------------------------
// Pillar Pages. Data Layer
// 11 SEO authority pages (4,000-5,000 words each) targeting high-volume
// industry keywords. Each page anchors a topic cluster.
// ---------------------------------------------------------------------------

export interface PillarPageSection {
  id: string;
  title: string;
  content: string; // HTML string, sanitized at render time
  callout?: {
    type: 'tip' | 'warning' | 'info';
    text: string;
  };
  relatedLinks?: {
    title: string;
    url: string;
  }[];
}

export interface PillarPageData {
  // Identity
  slug: string;
  title: string;
  excerpt: string; // ≤120 chars, for RelatedPillars cards

  // SEO
  metaTitle: string; // Under 60 chars, includes "| Daisy"
  metaDescription: string; // 150-160 chars
  keywords: string[];
  heroImage?: string; // OG image (falls back to default)

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  readingTime: string; // e.g. '18 min read'
  lastUpdated: string; // ISO date: YYYY-MM-DDTHH:mm:ss.sssZ

  // GEO, answer block for AI citation
  keyTakeaways: string[];

  // Content
  introduction: string; // HTML string
  sections: PillarPageSection[];

  // FAQ (separate for FAQPage schema)
  faqs: { question: string; answer: string }[];

  // Internal linking
  clusterArticles: { slug: string; userType: 'business' | 'professional' }[];
  relatedPillarSlugs: string[];
  relatedFeaturePages: string[];
  relatedComparePages: string[];
}

// ---------------------------------------------------------------------------
// Registry, import each pillar data file
// ---------------------------------------------------------------------------
import { salonManagementSoftware } from './salon-management-software';
import { freelanceBeautyProfessionalGuide } from './freelance-beauty-professional-guide';
import { beautyIndustryTrends } from './beauty-industry-trends';
import { salonAnalyticsReporting } from './salon-analytics-reporting';
import { beautyBookingSystem } from './beauty-booking-system';
import { salonMarketingStrategies } from './salon-marketing-strategies';
import { aiSalonSoftware } from './ai-salon-software';
import { beautyBusinessGrowthGuide } from './beauty-business-growth-guide';
import { salonPaymentSolutions } from './salon-payment-solutions';
import { salonStaffManagement } from './salon-staff-management';
import { salonClientRetention } from './salon-client-retention';

const allPillarPages: PillarPageData[] = [
  salonManagementSoftware,
  freelanceBeautyProfessionalGuide,
  beautyIndustryTrends,
  salonAnalyticsReporting,
  beautyBookingSystem,
  salonMarketingStrategies,
  aiSalonSoftware,
  beautyBusinessGrowthGuide,
  salonPaymentSolutions,
  salonStaffManagement,
  salonClientRetention,
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getPillarPage(slug: string): PillarPageData | undefined {
  return allPillarPages.find((p) => p.slug === slug);
}

export function getAllPillarSlugs(): string[] {
  return allPillarPages.map((p) => p.slug);
}

export function getAllPillarPages(): PillarPageData[] {
  return allPillarPages;
}
