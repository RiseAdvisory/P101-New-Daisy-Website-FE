// =============================================================================
// WS1: Competitive Research — Exports & Helpers
// =============================================================================

export {
  daisyData,
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

export { aiTools } from './aiTools';

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

/** Get a single competitor by slug */
export function getCompetitor(slug: string): CompetitorData | undefined {
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

/** Feature rating label */
export function featureRatingLabel(rating: FeatureRating): string {
  const labels: Record<FeatureRating, string> = {
    0: 'Not Available',
    1: 'Basic',
    2: 'Good',
    3: 'Best-in-Class',
  };
  return labels[rating];
}

/** Compare a competitor's features against Daisy */
export function compareFeatures(slug: string): {
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
    { key: 'marketingAndCrm', label: 'Marketing & CRM' },
    { key: 'inventoryManagement', label: 'Inventory Management' },
    { key: 'reportingAndAnalytics', label: 'Reporting & Analytics' },
    { key: 'marketplaceAndDiscovery', label: 'Marketplace & Discovery' },
    { key: 'aiCapabilities', label: 'AI Capabilities' },
  ];

  return categories.map(({ key, label }) => ({
    category: label,
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
