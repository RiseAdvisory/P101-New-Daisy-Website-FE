/**
 * Business-tier pricing data for /pricing-v2.
 * Source of truth: Notion spec Doc #84 — Subscription Plans (Businesses table).
 */

import { FeatureCategory } from './pricingV2Shared';

export interface PricingTierV2 {
  id: 'basic' | 'growth' | 'business';
  title: string;
  // One-line persona — answers "is this me?" in 10 seconds.
  oneLiner: string;
  monthlyPrice: number;
  // Annual = 10 × monthly (pay 10 months, get 2 free).
  annualTotal: number;
  // Convenience: per-month equivalent when billed annually, rounded.
  annualPerMonth: number;
  // Hard-coded savings line shown on the card.
  annualSavingsLine: string;
  // 4-6 differentiating bullets shown directly on the card.
  cardHighlights: string[];
  // Whether to flag this card as the recommended/most-popular choice.
  isMostPopular?: boolean;
  ctaLabel: string;
}

export const BUSINESS_TIERS: PricingTierV2[] = [
  {
    id: 'basic',
    title: 'Basic',
    oneLiner:
      'Just opened or running solo with a couple of assistants. 1–5 chairs.',
    monthlyPrice: 50,
    annualTotal: 500,
    annualPerMonth: 42,
    annualSavingsLine: 'Save $100 — 2 months free',
    cardHighlights: [
      '5 team members, 1 location',
      'AI Receptionist + 1,000 free credits',
      'WhatsApp + Instagram booking',
      'Marketplace visibility *',
      'Branded booking site, POS, reviews',
    ],
    ctaLabel: 'Start free trial',
  },
  {
    id: 'growth',
    title: 'Growth',
    oneLiner:
      '6–10 chairs across 1–2 branches, ready to grow bookings online and accept payments.',
    monthlyPrice: 150,
    annualTotal: 1500,
    annualPerMonth: 125,
    annualSavingsLine: 'Save $300 — 2 months free',
    isMostPopular: true,
    cardHighlights: [
      '10 team members, 2 locations',
      'Everything in Basic',
      'Online payments + cancellation policy',
      'Automated reminders & subscription packages',
      'Cashback promotions * + detailed reviews',
      'Priority customer support',
    ],
    ctaLabel: 'Start free trial',
  },
  {
    id: 'business',
    title: 'Business',
    oneLiner:
      '11+ chairs or 3+ branches that want AI to run the front desk and refine the brand voice.',
    monthlyPrice: 250,
    annualTotal: 2500,
    annualPerMonth: 208,
    annualSavingsLine: 'Save $500 — 2 months free',
    cardHighlights: [
      '15 team members, 4 locations',
      'Everything in Growth',
      'Advanced AI Customization (tone, training, A/B)',
      'Email + WhatsApp template customization',
      'Advanced analytics & trends',
      'Free data migration + assisted onboarding',
    ],
    ctaLabel: 'Start free trial',
  },
];

/**
 * Full feature comparison, grouped into scannable categories.
 * Each row's `values` array maps 1:1 to BUSINESS_TIERS by index.
 */
export const BUSINESS_FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    title: 'Scale & seats',
    rows: [
      { name: 'Team members / calendars', values: ['5', '10', '15'] },
      { name: 'Workspaces / locations', values: ['1', '2', '4'] },
      { name: 'Countries', values: ['1', '1', '1'] },
      { name: 'Bookings per month', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
    ],
  },
  {
    title: 'Bookings & schedule',
    rows: [
      { name: 'Schedule management', values: [true, true, true] },
      { name: 'Sales management (POS)', values: [true, true, true] },
      { name: 'Client management', values: [true, true, true] },
      { name: 'Mobile & desktop app', values: [true, true, true] },
      { name: 'Phone contacts syncing', values: [true, true, true] },
      { name: 'Google Calendar syncing', values: [true, true, true] },
      { name: 'Automated reminders (no-shows, rebooking)', values: [undefined, true, true] },
      { name: 'Subscription packages', values: [undefined, true, true] },
      { name: 'Online payment processing', values: [undefined, true, true] },
      { name: 'Cancellation policy enforcement & fees', values: [undefined, true, true] },
    ],
  },
  {
    title: 'AI & communication',
    rows: [
      {
        name: 'AI Receptionist on conversations',
        note: '1,000 free credits at signup, pay-as-you-go after',
        values: [true, true, true],
      },
      { name: 'WhatsApp Business Chat integration', values: [true, true, true] },
      { name: 'Instagram Direct Message integration', values: [true, true, true] },
      { name: 'In-app & email notifications', values: [true, true, true] },
      { name: 'WhatsApp notifications', values: [true, true, true] },
      { name: 'Email template customization', values: [undefined, undefined, true] },
      { name: 'WhatsApp message template customization', values: [undefined, undefined, true] },
      {
        name: 'Advanced AI Customization',
        note: 'Tone & voice training, conversation fine-tuning, multi-language, A/B testing',
        values: [undefined, undefined, true],
      },
    ],
  },
  {
    title: 'Customer acquisition',
    rows: [
      {
        name: 'Marketplace app visibility',
        note: 'Subject to service-quality review',
        values: [true, true, true],
      },
      { name: 'App search visibility (Elastic)', values: [undefined, true, true] },
      {
        name: 'Cashback promotions',
        note: 'Subject to service-quality review',
        values: [undefined, true, true],
      },
      { name: 'Customer reviews management & reply', values: [true, true, true] },
      { name: 'Detailed customer feedback insights', values: [undefined, true, true] },
    ],
  },
  {
    title: 'Branding & content',
    rows: [
      {
        name: 'Branded booking site',
        values: [
          'Default template',
          'Default + Premium',
          'Default + Premium',
        ],
      },
      {
        name: 'Media portfolio of services',
        values: ['3 posts', '50 posts', 'Unlimited'],
      },
      { name: 'Social Media Daisy Link', values: [true, true, true] },
    ],
  },
  {
    title: 'Analytics, support & onboarding',
    rows: [
      { name: 'General reports', values: [true, true, true] },
      { name: 'Advanced analytics & trends', values: [undefined, undefined, true] },
      {
        name: 'Customer support',
        values: ['Basic', 'Priority', 'Priority'],
      },
      { name: 'Free data migration', values: [undefined, undefined, true] },
      { name: 'Free assisted onboarding & menu setup', values: [undefined, undefined, true] },
    ],
  },
];
