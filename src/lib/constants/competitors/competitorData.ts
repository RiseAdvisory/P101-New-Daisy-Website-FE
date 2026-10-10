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
  /** Published transaction rate, in the vendor's own currency, e.g. "4.90% + AED 0.75". */
  transactionFees?: string;
  commissionOnMarketplace?: string; // e.g. "One-time 50% on new clients, min AED 20; returning clients free"
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
    // Basic, not 0: the marketplace exists but is opt-in, runs in selected
    // countries only, and lists a business after a service-quality review
    // (pricing page: "Marketplace Eligibility: After review").
    marketplaceAndDiscovery: 1,
    aiCapabilities: 2,
    brandingAndWhiteLabel: 3,
  },
  // Mirrors the /pricing page (src/lib/constants/pricing/v3). Each plan
  // includes a set number of team members (calendars) and workspaces; extra
  // ones are paid add-ons. Basic bills a $1/month base, plus $50 in any month
  // the account passes 5 appointments.
  pricing: {
    hasFreePlan: false,
    freeTrialDays: 14,
    startingPrice: 'From $1/mo',
    startingPriceNumeric: 1,
    tiers: [
      {
        name: 'Basic',
        price: '$1/mo, +$50/mo once you pass 5 appointments in a month',
        priceNumeric: 1,
        billingCycle: 'monthly',
        perStaffCost: '$10/mo per extra calendar',
        features: [
          '5 team members / calendars',
          '1 workspace',
          'Unlimited bookings',
          'Sales management (POS)',
          'Client management',
          'Mobile & desktop app',
          '50 AI receptionist conversations included',
        ],
      },
      {
        name: 'Growth',
        price: '$150/mo',
        priceNumeric: 150,
        billingCycle: 'monthly',
        perStaffCost: '$10/mo per extra calendar',
        features: [
          '10 team members / calendars',
          '2 workspaces',
          'Online payments',
          'Automated reminders',
          'Cashback promotions, after a service-quality review',
          'Priority support',
        ],
      },
      {
        name: 'Business',
        price: '$250/mo',
        priceNumeric: 250,
        billingCycle: 'monthly',
        perStaffCost: '$10/mo per extra calendar',
        features: [
          '15 team members / calendars',
          '4 workspaces',
          'Advanced analytics',
          'Free data migration',
          'Assisted onboarding',
          'Advanced AI receptionist customization',
        ],
      },
    ],
    // Published add-ons from the pricing page, listed so this record never
    // implies the plan price covers any team size or any AI volume.
    hiddenCosts: [
      'Extra team member / calendar: $10 a month each',
      'Extra workspace: $25 a month each',
      'AI receptionist conversations beyond the 50 included: pay-as-you-go top-ups',
      'Marketplace commission on new clients the marketplace brings (the marketplace is optional)',
    ],
    // 'flat' is kept for the PricingComparisonCard label, which now reads
    // "Monthly subscription". The plans are tiered: each includes a set
    // number of team members, and extra calendars cost $10 a month.
    pricingModel: 'flat',
    lastVerified: '2026-10-10',
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
      '24/7 AI receptionist on WhatsApp, Instagram and the booking site, handling bookings, payments and customer service in Arabic and English. It does not answer phone calls yet. Every plan includes 50 AI receptionist conversations, with paid top-ups after that. AI-powered marketing recommendations and analytics.',
  },
  keyDifferentiators: [
    'AI receptionist (24/7 customer service, appointments, payments)',
    'Customer acquisition engine (cashback, marketing and an optional marketplace)',
    'Branded booking page (your logo, name and colours)',
    'Network effects (AI improves with more data)',
    'All-in-one (8 categories replacing 5+ tools)',
    'Multilingual (Arabic/English with equal priority, more languages coming, GCC + global)',
  ],
};

// -----------------------------------------------------------------------------
// Competitor Data (merged from tier files)
// -----------------------------------------------------------------------------

import { tier1Competitors } from './tier1Data';
import { tier2Competitors } from './tier2Data';
import { tier3Competitors } from './tier3Data';
import type { I18nContent } from '../i18n';

export const competitors: Record<string, CompetitorData> = {
  ...tier1Competitors,
  ...tier2Competitors,
  ...tier3Competitors,
};

// ---------------------------------------------------------------------------
// Daisy Data — Arabic translation
// ---------------------------------------------------------------------------

export const daisyDataAr: typeof daisyData = {
  features: daisyData.features,
  pricing: {
    ...daisyData.pricing,
    startingPrice: 'من $1/شهرياً',
    tiers: [
      {
        name: 'أساسي',
        price: '$1/شهرياً، +$50 شهرياً بعد تجاوز 5 مواعيد في الشهر',
        priceNumeric: 1,
        billingCycle: 'monthly',
        perStaffCost: '$10 شهرياً لكل تقويم إضافي',
        features: [
          '5 أعضاء فريق / تقاويم',
          'مساحة عمل واحدة',
          'حجوزات غير محدودة',
          'إدارة المبيعات (نقاط البيع)',
          'إدارة العملاء',
          'تطبيق جوال وسطح مكتب',
          '50 محادثة لموظف الاستقبال الذكي مشمولة',
        ],
      },
      {
        name: 'نمو',
        price: '$150/شهرياً',
        priceNumeric: 150,
        billingCycle: 'monthly',
        perStaffCost: '$10 شهرياً لكل تقويم إضافي',
        features: [
          '10 أعضاء فريق / تقاويم',
          'مساحتا عمل',
          'مدفوعات إلكترونية',
          'تذكيرات تلقائية',
          'عروض الكاشباك بعد مراجعة جودة الخدمة',
          'دعم أولوية',
        ],
      },
      {
        name: 'أعمال',
        price: '$250/شهرياً',
        priceNumeric: 250,
        billingCycle: 'monthly',
        perStaffCost: '$10 شهرياً لكل تقويم إضافي',
        features: [
          '15 عضو فريق / تقاويم',
          '4 مساحات عمل',
          'تحليلات متقدمة',
          'ترحيل بيانات مجاني',
          'تأهيل مُرافق',
          'تخصيص متقدم لموظف الاستقبال الذكي',
        ],
      },
    ],
    hiddenCosts: [
      'عضو فريق / تقويم إضافي: $10 شهرياً لكل واحد',
      'مساحة عمل إضافية: $25 شهرياً لكل واحدة',
      'محادثات موظف الاستقبال الذكي بعد الخمسين المشمولة: رصيد إضافي حسب الاستخدام',
      'عمولة السوق على العملاء الجدد الذين يجلبهم السوق (الانضمام إلى السوق اختياري)',
    ],
    pricingModel: 'flat',
    lastVerified: '2026-10-10',
  },
  gccPresence: daisyData.gccPresence,
  aiCapabilities: {
    ...daisyData.aiCapabilities,
    aiDescription:
      'موظف استقبال ذكي يعمل على مدار الساعة عبر واتساب وإنستغرام وصفحة الحجز، ويتعامل مع الحجوزات والمدفوعات وخدمة العملاء بالعربية والإنجليزية، ولا يرد على المكالمات الهاتفية حالياً. تشمل كل باقة 50 محادثة لموظف الاستقبال الذكي، ثم رصيد إضافي مدفوع. توصيات تسويقية وتحليلات مدعومة بالذكاء الاصطناعي.',
  },
  keyDifferentiators: [
    'موظف استقبال ذكي (خدمة عملاء 24/7، مواعيد، مدفوعات)',
    'محرك استقطاب العملاء (كاشباك + تسويق + سوق اختياري)',
    'صفحة حجز بعلامتك التجارية (شعارك واسمك وألوانك)',
    'تأثيرات الشبكة (الذكاء الاصطناعي يتحسن مع مزيد من البيانات)',
    'الكل في واحد (8 فئات تحل محل 5+ أدوات)',
    'متعدد اللغات (عربي/إنجليزي بأولوية متساوية، لغات إضافية قادمة، الخليج + عالمي)',
  ],
};

export const daisyDataI18n: I18nContent<typeof daisyData> = {
  en: daisyData,
  ar: daisyDataAr,
};
