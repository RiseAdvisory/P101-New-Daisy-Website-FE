/**
 * Solo Professional tier data for /pricing-v3.
 * Display names: Starter Professional / Growing Professional / Pro Plus.
 */

import { FeatureCategory } from './pricingV3Types';
import { PricingTierV3 } from './pricingV3Business';

export const PROFESSIONAL_TIERS_V3: PricingTierV3[] = [
  {
    id: 'basic',
    displayName: 'Starter Professional',
    bestFor: 'Best for getting started',
    chooseThisIf:
      'Choose this if you want a branded booking site and simple appointment management.',
    monthlyPrice: 25,
    annualTotal: 250,
    annualPerMonth: 21,
    annualSavingsLine: 'Save $50 (2 Months Free)',
    isMostPopular: true,
    cardHighlights: [
      'Branded booking site',
      'Personal service menu',
      'WhatsApp + Instagram booking',
      'Appointment scheduling',
      'Payments',
      'Reviews & client records',
      'AI receptionist trial conversations',
    ],
    conditionalHighlights: ['Marketplace visibility *'],
  },
  {
    id: 'growth',
    displayName: 'Growing Professional',
    bestFor: 'Best for client growth',
    chooseThisIf:
      'Choose this if you want payments, reminders, reviews, and stronger client follow-up.',
    monthlyPrice: 50,
    annualTotal: 500,
    annualPerMonth: 42,
    annualSavingsLine: 'Save $100 (2 Months Free)',
    cardHighlights: [
      'Everything in Starter Professional',
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
    displayName: 'Pro Plus',
    bestFor: 'Best for high-volume professionals',
    chooseThisIf:
      'Choose this if you have high booking volume and want advanced tools, AI support, and growth features.',
    monthlyPrice: 100,
    annualTotal: 1000,
    annualPerMonth: 84,
    annualSavingsLine: 'Save $200 (2 Months Free)',
    cardHighlights: [
      'Everything in Growing Professional',
      '2 workspaces, 2 countries',
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

export const PROFESSIONAL_COMPARISON_DEFAULT_V3: FeatureCategory[] = [
  {
    title: 'Headline Comparison',
    rows: [
      { name: 'Team Members / Calendars', values: ['1', '1', '1'] },
      { name: 'Workspaces / Locations', values: ['1', '1', '2'] },
      { name: 'Branded Booking Site', values: [true, true, true] },
      { name: 'WhatsApp + Instagram Booking', values: [true, true, true] },
      { name: 'Payments', values: [undefined, true, true] },
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

export const PROFESSIONAL_COMPARISON_FULL_V3: FeatureCategory[] = [
  {
    title: 'Scale & Seats',
    rows: [
      { name: 'Team Members / Calendars', values: ['1', '1', '1'] },
      { name: 'Workspaces / Locations', values: ['1', '1', '2'] },
      { name: 'Countries', values: ['1', '1', '2'] },
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
