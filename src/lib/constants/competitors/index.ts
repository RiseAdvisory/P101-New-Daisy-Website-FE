// =============================================================================
// WS1: Competitive Research. Exports & Helpers
// =============================================================================

export {
  daisyData,
  daisyDataAr,
  daisyDataI18n,
  competitors,
  type CompetitorData,
  type CompetitorTier,
  type FeatureMatrix,
  type FeatureRating,
  type PricingData,
  type PricingTier,
  type ReviewData,
  type GccPresence,
  type AiCapabilities,
  type AiToolData,
  type ContentAndSeo,
  type MessagingAndPositioning,
  type ConversionStrategy,
  type SwitchingAnalysis,
  type GrowthVsOperations,
  type FaqEntry,
} from './competitorData';

export { aiTools, aiToolsI18n } from './aiTools';

// Tier data I18n helpers
export { getTier1CompetitorsI18n } from './tier1Data';
import { getTier1CompetitorsI18n } from './tier1Data';
import { getTier2CompetitorsI18n } from './tier2Data';
import { getTier3CompetitorsI18n } from './tier3Data';
export { getTier2CompetitorsI18n } from './tier2Data';
export { getTier3CompetitorsI18n } from './tier3Data';

// WS2: Comparison page data & helpers
export {
  type DaisyVsPageData,
  type AlternativePageData,
  type BestAlternativesPageData,
  type CompetitorVsPageData,
  daisyVsPages,
  alternativePages,
  bestAlternativesPages,
  competitorVsPages,
  getDaisyVsPage,
  getAlternativePage,
  getBestAlternativesPage,
  getCompetitorVsPage,
  getAllCompareSlugs,
  getAllAlternativeSlugs,
  getComparePageData,
  getAlternativePageData,
  getRelatedComparePages,
  getRelatedAlternativePages,
  getComparisonPagesI18n,
} from './comparisonPages';

import { competitors, daisyData, type CompetitorData, type CompetitorTier, type FeatureRating } from './competitorData';
import { aiTools } from './aiTools';

// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------

/** Get all competitors as an array sorted by tier then name */
export function getAllCompetitors(): CompetitorData[] {
  return Object.values(competitors).sort(
    (a, b) => a.tier - b.tier || a.name.localeCompare(b.name)
  );
}

/** Get competitors by tier */
export function getCompetitorsByTier(tier: CompetitorTier): CompetitorData[] {
  return Object.values(competitors)
    .filter((c) => c.tier === tier)
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Get a single competitor by slug.
 *
 * `locale` matters: the Arabic records in tier1Data.ar.ts were unreachable,
 * because every caller used the English-only `competitors` map. That meant
 * /ar/compare/daisy-vs-fresha published the English pros, cons, FAQ and FAQ
 * JSON-LD about a named competitor, and any correction made to the Arabic
 * record never reached a reader or a crawler. Falls back to English when a
 * slug has no translated record.
 */
export function getCompetitor(
  slug: string,
  locale: string = 'en',
): CompetitorData | undefined {
  if (locale === 'ar') {
    // All three tiers. The first fix here read tier 1 only, so Glamera, DINGG,
    // Mangomint and every other tier-2/3 rival still rendered their English
    // record on Arabic pages.
    const ar =
      getTier1CompetitorsI18n().ar?.[slug] ??
      getTier2CompetitorsI18n().ar?.[slug] ??
      getTier3CompetitorsI18n().ar?.[slug];
    if (ar) return ar;
  }
  return competitors[slug];
}

/** Get competitor slugs (for static paths) */
export function getCompetitorSlugs(): string[] {
  return Object.keys(competitors);
}

/** Get competitors with GCC presence */
export function getGccCompetitors(): CompetitorData[] {
  return Object.values(competitors).filter(
    (c) => c.gccPresence.gccCountries.length > 0
  );
}

/** Get competitors with AI capabilities */
export function getAiCompetitors(): CompetitorData[] {
  return Object.values(competitors).filter(
    (c) =>
      c.aiCapabilities.hasAiReceptionist ||
      c.aiCapabilities.hasAiChatbot ||
      c.aiCapabilities.hasSmartScheduling
  );
}

// Was 'Not Available' for 0. These are Daisy's own 0-3 editorial ratings, so a
// 0 is the absence of a documented capability, not proof the competitor lacks
// it. Publishing it as "Not Available" asserted more than we know.
const RATING_LABELS: Record<'en' | 'ar', Record<FeatureRating, string>> = {
  en: { 0: 'Not published', 1: 'Basic', 2: 'Good', 3: 'Best-in-Class' },
  ar: { 0: 'غير منشور', 1: 'أساسي', 2: 'جيد', 3: 'الأفضل في فئته' },
};

/** Feature rating label */
export function featureRatingLabel(rating: FeatureRating, locale: string = 'en'): string {
  return (RATING_LABELS[locale as 'en' | 'ar'] ?? RATING_LABELS.en)[rating];
}

const FEATURE_CATEGORY_LABELS: Record<
  keyof typeof daisyData.features,
  { en: string; ar: string }
> = {
  onlineBooking: { en: 'Online Booking', ar: 'الحجز أونلاين' },
  posAndPayments: { en: 'POS & Payments', ar: 'نقاط البيع والمدفوعات' },
  clientManagement: { en: 'Client Management', ar: 'إدارة العملاء' },
  staffManagement: { en: 'Staff Management', ar: 'إدارة الفريق' },
  marketingAndCrm: { en: 'Marketing & Promotion', ar: 'التسويق والترويج' },
  inventoryManagement: { en: 'Inventory Management', ar: 'إدارة المخزون' },
  reportingAndAnalytics: { en: 'Reporting & Analytics', ar: 'التقارير والتحليلات' },
  aiCapabilities: { en: 'AI Capabilities', ar: 'قدرات الذكاء الاصطناعي' },
  brandingAndWhiteLabel: { en: 'Branding & White-Label', ar: 'العلامة التجارية والوايت ليبل' },
  marketplaceAndDiscovery: { en: 'Marketplace & Discovery', ar: 'السوق والاكتشاف' },
};

/**
 * Display label for a feature category key. Replaces the camelCase-splitting
 * that rendered "pos And Payments" - in English - as a heading on Arabic pages.
 */
export function featureCategoryLabel(key: string, locale: string = 'en'): string {
  const entry = FEATURE_CATEGORY_LABELS[key as keyof typeof FEATURE_CATEGORY_LABELS];
  if (!entry) return key.replace(/([A-Z])/g, ' $1').trim();
  return locale === 'ar' ? entry.ar : entry.en;
}

/** Compare a competitor's features against Daisy */
export function compareFeatures(slug: string, locale: string = 'en'): {
  category: string;
  daisy: FeatureRating;
  competitor: FeatureRating;
  daisyWins: boolean;
}[] {
  const competitor = competitors[slug];
  if (!competitor) return [];

  const categories: { key: keyof typeof daisyData.features; label: string }[] = [
    { key: 'onlineBooking', label: 'Online Booking' },
    { key: 'posAndPayments', label: 'POS & Payments' },
    { key: 'clientManagement', label: 'Client Management' },
    { key: 'staffManagement', label: 'Staff Management' },
    { key: 'marketingAndCrm', label: 'Marketing & Promotion' },
    { key: 'inventoryManagement', label: 'Inventory Management' },
    { key: 'reportingAndAnalytics', label: 'Reporting & Analytics' },
    { key: 'aiCapabilities', label: 'AI Capabilities' },
    { key: 'brandingAndWhiteLabel', label: 'Branding & White-Label' },
    // Was omitted, which dropped the single category where competitors most
    // often beat Daisy (Daisy 0, Fresha 3). A comparison that hides the
    // competitor's strongest category is indefensible.
    { key: 'marketplaceAndDiscovery', label: 'Marketplace & Discovery' },
  ];

  return categories.map(({ key, label }) => ({
    category: locale === 'en' ? label : featureCategoryLabel(key, locale),
    daisy: daisyData.features[key],
    competitor: competitor.features[key],
    daisyWins: daisyData.features[key] > competitor.features[key],
  }));
}

/** Get average review rating for a competitor */
export function getAverageRating(slug: string): number | null {
  const competitor = competitors[slug];
  if (!competitor || competitor.reviews.length === 0) return null;

  const total = competitor.reviews.reduce((sum, r) => sum + r.rating, 0);
  return Math.round((total / competitor.reviews.length) * 10) / 10;
}

/** Get all competitors sorted by starting price (ascending) */
export function getByPriceAscending(): CompetitorData[] {
  return Object.values(competitors).sort((a, b) => {
    const priceA = a.pricing.startingPriceNumeric ?? Infinity;
    const priceB = b.pricing.startingPriceNumeric ?? Infinity;
    return priceA - priceB;
  });
}

/** Get competitors that have a free plan */
export function getFreeCompetitors(): CompetitorData[] {
  return Object.values(competitors).filter((c) => c.pricing.hasFreePlan);
}

/** Get all AI tools */
export function getAllAiTools() {
  return aiTools;
}
