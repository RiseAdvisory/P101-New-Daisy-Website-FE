// =============================================================================
// WS1: Competitive Research Data
// Last updated: March 2026
// =============================================================================

// -----------------------------------------------------------------------------
// Types & Interfaces
// -----------------------------------------------------------------------------

/** Feature category ratings: 0 = absent, 1 = basic, 2 = good, 3 = best-in-class */
export type FeatureRating = 0 | 1 | 2 | 3;

/** The 9 feature categories Daisy competes on */
export interface FeatureMatrix {
  onlineBooking: FeatureRating;
  posAndPayments: FeatureRating;
  clientManagement: FeatureRating;
  staffManagement: FeatureRating;
  marketingAndCrm: FeatureRating;
  inventoryManagement: FeatureRating;
  reportingAndAnalytics: FeatureRating;
  marketplaceAndDiscovery: FeatureRating;
  aiCapabilities: FeatureRating;
  brandingAndWhiteLabel: FeatureRating;
}

export interface PricingTier {
  name: string;
  price: string; // e.g. "$25/mo", "Free", "Custom"
  priceNumeric?: number; // monthly USD for comparison
  billingCycle?: 'monthly' | 'annual' | 'custom';
  perStaff?: boolean; // per-staff pricing model
  perStaffCost?: string;
  features: string[]; // key features in this tier
}

export interface PricingData {
  hasFreePlan: boolean;
  freeTrialDays?: number;
  startingPrice: string;
  startingPriceNumeric?: number;
  tiers: PricingTier[];
  transactionFees?: string; // e.g. "2.19% + $0.19"
  commissionOnMarketplace?: string; // e.g. "20% on new clients"
  hiddenCosts: string[];
  pricingModel: 'flat' | 'per-staff' | 'per-location' | 'usage-based' | 'hybrid';
  pricingPageUrl?: string;
  lastVerified: string; // ISO date string
}

export interface ReviewData {
  platform: string;
  rating: number; // e.g. 4.5
  reviewCount: number;
  url?: string;
}

export interface GccPresence {
  hasArabicUI: boolean;
  arabicQuality: 'native' | 'translated' | 'none';
  gccCountries: string[]; // e.g. ['UAE', 'KSA', 'Kuwait', 'Bahrain']
  localCompliance: boolean;
  localPaymentMethods: boolean;
  localSupport: boolean;
}

export interface AiCapabilities {
  hasAiReceptionist: boolean;
  hasAiChatbot: boolean;
  hasSmartScheduling: boolean;
  hasAiMarketing: boolean;
  hasAiAnalytics: boolean;
  hasAiPricing: boolean;
  aiDescription?: string; // brief summary of AI features
}

export interface ContentAndSeo {
  estimatedMonthlyTraffic?: string;
  domainAuthority?: number;
  blogFrequency?: string; // e.g. "2-3 posts/week"
  topRankingKeywords?: string[];
  contentTypes?: string[]; // e.g. ["blog", "guides", "webinars", "podcast"]
  seoStrengths?: string[];
  seoWeaknesses?: string[];
}

export interface MessagingAndPositioning {
  tagline: string;
  primaryValueProp: string;
  targetAudience: string;
  toneAndVoice: string;
  keyMessages: string[];
}

export interface ConversionStrategy {
  primaryCta: string;
  leadMagnets?: string[];
  freeTrialOffered: boolean;
  demoOffered: boolean;
  socialProof: string[];
  conversionTactics: string[];
}

export interface SwitchingAnalysis {
  dataExport: boolean;
  contractLockIn: boolean;
  migrationSupport: boolean;
  switchingDifficulty: 'easy' | 'moderate' | 'hard';
  lockInTactics: string[];
  switchingIncentives?: string[]; // what they offer to retain / attract switchers
}

export interface GrowthVsOperations {
  /** 0 = pure operations, 10 = pure growth */
  growthScore: number;
  growthFeatures: string[];
  operationsFeatures: string[];
  assessment: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export type CompetitorTier = 1 | 2 | 3;

export interface CompetitorData {
  // Identity
  slug: string;
  name: string;
  website: string;
  logo?: string;
  tier: CompetitorTier;
  description: string;
  founded?: string;
  headquarters?: string;
  employeeCount?: string;
  funding?: string;

  // Research dimensions
  features: FeatureMatrix;
  pricing: PricingData;
  reviews: ReviewData[];
  gccPresence: GccPresence;
  aiCapabilities: AiCapabilities;

  // Tier 1 & 2 only (optional for Tier 3)
  targetMarket?: string;
  contentAndSeo?: ContentAndSeo;
  messaging?: MessagingAndPositioning;
  conversionStrategy?: ConversionStrategy;
  switchingAnalysis?: SwitchingAnalysis;
  growthVsOperations?: GrowthVsOperations;

  // Daisy comparison content (for WS2 pages)
  daisyAdvantages: string[];
  daisySwitchingReasons: string[];
  competitorStrengths: string[];
  competitorWeaknesses: string[];

  // FAQ content (for WS2 pages)
  faq: FaqEntry[];

  // Meta
  lastResearched: string; // ISO date string
  notes?: string;
}

// AI-only tool comparison (Tier 4)
export interface AiToolData {
  slug: string;
  name: string;
  website: string;
  description: string;
  aiCapabilities: {
    voiceReceptionist: boolean;
    chatBooking: boolean;
    multiLanguage: boolean;
    languageCount?: number;
    smartScheduling: boolean;
    autonomousBooking: boolean;
    integrationRequired: boolean;
    integratesWith?: string[];
  };
  pricing: {
    hasFreePlan: boolean;
    startingPrice?: string;
    pricingModel?: string;
  };
  limitations: string[];
  daisyAdvantages: string[];
  lastResearched: string;
}

// -----------------------------------------------------------------------------
// Daisy's Own Data (for comparison)
// -----------------------------------------------------------------------------

export const daisyData: {
  features: FeatureMatrix;
  pricing: PricingData;
  gccPresence: GccPresence;
  aiCapabilities: AiCapabilities;
  keyDifferentiators: string[];
} = {
  features: {
    onlineBooking: 3,
    posAndPayments: 3,
    clientManagement: 3,
    staffManagement: 1,
    marketingAndCrm: 3,
    inventoryManagement: 2,
    reportingAndAnalytics: 3,
    marketplaceAndDiscovery: 0,
    aiCapabilities: 2,
    brandingAndWhiteLabel: 3,
  },
  pricing: {
    hasFreePlan: false,
    freeTrialDays: 14,
    startingPrice: 'From $50/mo',
    startingPriceNumeric: 50,
    tiers: [
      {
        name: 'Basic',
        price: '$50/mo',
        priceNumeric: 50,
        billingCycle: 'monthly',
        features: [
          '5 users / calendar',
          '1 workspace/location',
          'Unlimited bookings',
          'Sales management (POS)',
          'Client management',
          'Mobile & desktop app',
        ],
      },
      {
        name: 'Growth',
        price: '$150/mo',
        priceNumeric: 150,
        billingCycle: 'monthly',
        features: [
          '10 users / calendar',
          '2 workspaces/locations',
          'Online payments',
          'Automated reminders',
          'Marketplace visibility',
          'Priority support',
        ],
      },
      {
        name: 'Business',
        price: '$250/mo',
        priceNumeric: 250,
        billingCycle: 'monthly',
        features: [
          '15 users / calendar',
          '4 workspaces/locations',
          'Advanced analytics',
          'Free data migration',
          'Assisted onboarding',
          'All features included',
        ],
      },
    ],
    hiddenCosts: [],
    pricingModel: 'flat',
    lastVerified: '2026-03-14',
  },
  gccPresence: {
    hasArabicUI: true,
    arabicQuality: 'native',
    gccCountries: ['UAE', 'KSA', 'Kuwait', 'Bahrain', 'Oman', 'Qatar'],
    localCompliance: true,
    localPaymentMethods: true,
    localSupport: true,
  },
  aiCapabilities: {
    hasAiReceptionist: true,
    hasAiChatbot: true,
    hasSmartScheduling: true,
    hasAiMarketing: true,
    hasAiAnalytics: true,
    hasAiPricing: false,
    aiDescription:
      '24/7 AI receptionist handling bookings, payments, and customer service in Arabic and English. AI-powered marketing recommendations and analytics.',
  },
  keyDifferentiators: [
    'AI receptionist (24/7 customer service, appointments, payments)',
    'Customer acquisition engine (marketplace + cashback + marketing)',
    'Full brand control (white-label everything)',
    'Network effects (AI improves with more data)',
    'All-in-one (8 categories replacing 5+ tools)',
    'Bilingual Arabic/English (equal priority, GCC + global)',
  ],
};

// -----------------------------------------------------------------------------
// Competitor Data (merged from tier files)
// -----------------------------------------------------------------------------

import { tier1Competitors } from './tier1Data';
import { tier2Competitors } from './tier2Data';
import { tier3Competitors } from './tier3Data';

export const competitors: Record<string, CompetitorData> = {
  ...tier1Competitors,
  ...tier2Competitors,
  ...tier3Competitors,
};
