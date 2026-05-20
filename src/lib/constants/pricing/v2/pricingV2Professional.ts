/**
 * Professional-tier pricing data for /pricing-v2.
 * Source of truth: Notion spec Doc #84 — Subscription Plans (Professionals table).
 */

import { FeatureCategory } from './pricingV2Shared';
import { PricingTierV2 } from './pricingV2Business';

export const PROFESSIONAL_TIERS: PricingTierV2[] = [
  {
    id: 'basic',
    title: 'Starter',
    oneLiner:
      'Just starting out, building your personal brand and client base as a solo provider.',
    monthlyPrice: 25,
    annualTotal: 250,
    annualPerMonth: 21,
    annualSavingsLine: 'Save $50 — 2 months free',
    cardHighlights: [
      'Solo, 1 workspace, 1 country',
      'AI Receptionist + 1,000 free credits',
      'WhatsApp + Instagram booking',
      'Marketplace visibility *',
      'Branded booking site, POS, reviews',
    ],
    ctaLabel: 'Start free trial',
  },
  {
    id: 'growth',
    title: 'Professional',
    oneLiner:
      'Experienced solo professional ready to accept online payments and grow with marketplace visibility.',
    monthlyPrice: 50,
    annualTotal: 500,
    annualPerMonth: 42,
    annualSavingsLine: 'Save $100 — 2 months free',
    isMostPopular: true,
    cardHighlights: [
      'Solo, 1 workspace, 1 country',
      'Everything in Starter',
      'Online payments + cancellation policy',
      'Automated reminders & subscription packages',
      'Cashback promotions * + detailed reviews',
      'Priority customer support',
    ],
    ctaLabel: 'Start free trial',
  },
  {
    id: 'business',
    title: 'Elite',
    oneLiner:
      'Solo professional operating across 2 workspaces or countries, with AI fine-tuned to your voice.',
    monthlyPrice: 100,
    annualTotal: 1000,
    annualPerMonth: 84,
    annualSavingsLine: 'Save $200 — 2 months free',
    cardHighlights: [
      'Solo, 2 workspaces, 2 countries',
      'Everything in Professional',
      'Advanced AI Customization (tone, training, A/B)',
      'Email + WhatsApp template customization',
      'Advanced analytics & trends',
      'Free data migration + assisted onboarding',
    ],
    ctaLabel: 'Start free trial',
  },
];

/**
 * Professional feature comparison.
 * Mirrors the Business categories but with the Professional-tier scaling
 * (1 user across all tiers, only Elite offers a 2nd workspace / country).
 */
export const PROFESSIONAL_FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    title: 'Scale & seats',
    rows: [
      { name: 'Team members / calendars', values: ['1', '1', '1'] },
      { name: 'Workspaces / locations', values: ['1', '1', '2'] },
      { name: 'Countries', values: ['1', '1', '2'] },
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
