/**
 * Business tier data for /pricing-v3.
 * Display names are renamed for buyer clarity per the v3 spec:
 * Basic → Starter Business, Growth → Growing Team, Business → Multi-Location.
 * Each tier carries a "best for" tagline, a "choose this if" decision aid,
 * and bullets are reordered with the most valuable buyer-facing benefits
 * first.
 */

import { FeatureCategory } from './pricingV3Types';

export interface PricingTierV3 {
  id: 'basic' | 'growth' | 'business';
  // Display name shown on the card (NOT the backend plan name).
  displayName: string;
  // Short tagline rendered under the tier name as a "best for" badge.
  bestFor: string;
  // Single-sentence decision aid: "Choose this if ..."
  chooseThisIf: string;
  monthlyPrice: number;
  annualTotal: number;
  annualPerMonth: number;
  annualSavingsLine: string;
  // Reordered: most valuable buyer-facing benefits first.
  // Marketplace-related items go in `conditionalHighlights` so they can be
  // visually separated as "available after quality review".
  cardHighlights: string[];
  conditionalHighlights: string[];
  isMostPopular?: boolean;
}

export const BUSINESS_TIERS_V3: PricingTierV3[] = [
  {
    id: 'basic',
    displayName: 'Starter Business',
    bestFor: 'Best for small teams',
    chooseThisIf:
      'Choose this if you have one location and need a professional booking system for a small team.',
    monthlyPrice: 50,
    annualTotal: 500,
    annualPerMonth: 42,
    annualSavingsLine: 'Save $100 (2 Months Free)',
    cardHighlights: [
      '5 team members, 1 location',
      'Branded booking site',
      'WhatsApp + Instagram booking',
      'Staff calendars & scheduling',
      'POS, payments, client records',
      'AI receptionist trial conversations',
    ],
    conditionalHighlights: ['Marketplace visibility *'],
  },
  {
    id: 'growth',
    displayName: 'Growing Team',
    bestFor: 'Best for active salons and spas',
    chooseThisIf:
      'Choose this if your business needs stronger booking, payment, reminder, and customer follow-up tools.',
    monthlyPrice: 150,
    annualTotal: 1500,
    annualPerMonth: 125,
    annualSavingsLine: 'Save $300 (2 Months Free)',
    isMostPopular: true,
    cardHighlights: [
      '10 team members, 2 locations',
      'Everything in Starter Business',
      'Online payments + cancellation policy',
      'Automated reminders & subscription packages',
      'Detailed reviews & feedback',
      'AI receptionist trial conversations',
      'Priority customer support',
    ],
    conditionalHighlights: [
      'Marketplace visibility *',
      'Cashback promotions *',
    ],
  },
  {
    id: 'business',
    displayName: 'Multi-Location',
    bestFor: 'Best for growing businesses',
    chooseThisIf:
      'Choose this if you manage several branches, a larger team, or more advanced operations.',
    monthlyPrice: 250,
    annualTotal: 2500,
    annualPerMonth: 208,
    annualSavingsLine: 'Save $500 (2 Months Free)',
    cardHighlights: [
      '15 team members, 4 locations',
      'Everything in Growing Team',
      'Advanced AI Customization (tone, training, A/B)',
      'Email + WhatsApp template customization',
      'Advanced analytics & trends',
      'Free data migration + assisted onboarding',
    ],
    conditionalHighlights: [
      'Marketplace visibility *',
      'Cashback promotions *',
      'Featured placement *',
    ],
  },
];

/**
 * Default comparison table shows only the headline rows. The full matrix
 * is mounted behind a "View All Features" toggle.
 */
export const BUSINESS_COMPARISON_DEFAULT_V3: FeatureCategory[] = [
  {
    title: 'Headline Comparison',
    rows: [
      { name: 'Team Members / Calendars', values: ['5', '10', '15'] },
      { name: 'Locations', values: ['1', '2', '4'] },
      { name: 'Branded Booking Site', values: [true, true, true] },
      { name: 'WhatsApp + Instagram Booking', values: [true, true, true] },
      { name: 'Payments / POS', values: [true, true, true] },
      {
        name: 'AI Receptionist Trial Conversations',
        values: [true, true, true],
      },
      { name: 'Reviews', values: [true, true, true] },
      {
        name: 'Marketplace Eligibility',
        note: 'Subject to service-quality review',
        values: ['After review', 'After review', 'After review'],
      },
      {
        name: 'Support Level',
        values: ['Basic', 'Priority', 'Priority / Assisted'],
      },
    ],
  },
];

export const BUSINESS_COMPARISON_FULL_V3: FeatureCategory[] = [
  {
    title: 'Scale & Seats',
    rows: [
      { name: 'Team Members / Calendars', values: ['5', '10', '15'] },
      { name: 'Workspaces / Locations', values: ['1', '2', '4'] },
      { name: 'Countries', values: ['1', '1', '1'] },
      { name: 'Bookings per Month', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
    ],
  },
  {
    title: 'Bookings & Schedule',
    rows: [
      { name: 'Schedule Management', values: [true, true, true] },
      { name: 'Sales Management (POS)', values: [true, true, true] },
      { name: 'Client Management', values: [true, true, true] },
      { name: 'Mobile & Desktop App', values: [true, true, true] },
      { name: 'Phone Contacts Syncing', values: [true, true, true] },
      { name: 'Google Calendar Syncing', values: [true, true, true] },
      { name: 'Automated Reminders', values: [undefined, true, true] },
      { name: 'Subscription Packages', values: [undefined, true, true] },
      { name: 'Online Payment Processing', values: [undefined, true, true] },
      { name: 'Cancellation Policy Enforcement', values: [undefined, true, true] },
    ],
  },
  {
    title: 'AI Receptionist & Communication',
    rows: [
      {
        name: 'AI Receptionist Trial Conversations',
        note: 'About 50 included, then pay-as-you-go',
        values: [true, true, true],
      },
      { name: 'WhatsApp Business Chat Integration', values: [true, true, true] },
      { name: 'Instagram Direct Message Integration', values: [true, true, true] },
      { name: 'In-App & Email Notifications', values: [true, true, true] },
      { name: 'WhatsApp Notifications', values: [true, true, true] },
      { name: 'Email Template Customization', values: [undefined, undefined, true] },
      { name: 'WhatsApp Template Customization', values: [undefined, undefined, true] },
      {
        name: 'Advanced AI Customization',
        note: 'Tone & voice training, fine-tuning, multi-language, A/B testing',
        values: [undefined, undefined, true],
      },
    ],
  },
  {
    title: 'Marketing & Marketplace',
    rows: [
      {
        name: 'Marketplace App Visibility',
        note: 'Subject to service-quality review',
        values: ['After review', 'After review', 'After review'],
      },
      { name: 'App Search Visibility (Elastic)', values: [undefined, true, true] },
      {
        name: 'Cashback Promotions',
        note: 'Subject to service-quality review',
        values: [undefined, 'After review', 'After review'],
      },
      { name: 'Customer Reviews Management & Reply', values: [true, true, true] },
      { name: 'Detailed Customer Feedback', values: [undefined, true, true] },
    ],
  },
  {
    title: 'Branding & Content',
    rows: [
      {
        name: 'Branded Booking Site',
        values: ['Default Template', 'Default + Premium', 'Default + Premium'],
      },
      {
        name: 'Media Portfolio of Services',
        values: ['3 Posts', '50 Posts', 'Unlimited'],
      },
      { name: 'Social Media Daisy Link', values: [true, true, true] },
    ],
  },
  {
    title: 'Support & Onboarding',
    rows: [
      { name: 'General Reports', values: [true, true, true] },
      { name: 'Advanced Analytics & Trends', values: [undefined, undefined, true] },
      { name: 'Customer Support', values: ['Basic', 'Priority', 'Priority / Assisted'] },
      { name: 'Free Data Migration', values: [undefined, undefined, true] },
      { name: 'Free Assisted Onboarding', values: [undefined, undefined, true] },
    ],
  },
];
