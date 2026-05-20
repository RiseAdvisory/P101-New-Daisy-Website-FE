/**
 * Shared content for the redesigned pricing page (/pricing-v2).
 * English-only for now — Arabic localization will follow once the structure
 * is approved. The Notion spec (Doc #84) is the source of truth.
 */

export type Persona = 'business' | 'professional';

export interface FeatureCategoryRow {
  name: string;
  note?: string;
  // For each tier index (0, 1, 2): undefined = not included, true = included,
  // string = included with detail (e.g. "3 posts" or "Unlimited")
  values: (boolean | string | undefined)[];
}

export interface FeatureCategory {
  title: string;
  rows: FeatureCategoryRow[];
}

export interface AddOnRow {
  name: string;
  price: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// ----- AI Credits callout -----

export const AI_CREDITS_CALLOUT = {
  eyebrow: 'AI built in',
  headline: 'Every plan starts with 1,000 free AI credits',
  body: 'About 50 AI Receptionist conversations to test how the AI handles your real customers — on WhatsApp, Instagram, or your booking site. Worth ~$100. Credit card required, but you won\'t be charged until you buy more credits.',
  badges: [
    'Never expires',
    'No subscription tier required',
    'Cancel any time before adding credits',
  ],
};

// ----- Marketplace commission callout -----

export const COMMISSION_CALLOUT = {
  eyebrow: 'Daisy commission promise',
  headline: '0% on your existing clients. Always.',
  body: 'Customers booking through your branded site, your social links, or anyone you already had as a client — zero platform fee, forever. We only earn commission on net-new customers The Daisy marketplace brings you. No exceptions.',
  fineprint: 'Marketplace visibility eligibility is subject to a service-quality review.',
};

// ----- FAQ -----

export const PRICING_FAQ: FAQItem[] = [
  {
    question: 'What are AI Credits and how do they work?',
    answer:
      'AI Credits power the AI Receptionist and AI automation features (WhatsApp replies, booking confirmations, follow-ups, etc.). Every plan gets 1,000 free credits on signup — enough for about 50 AI Receptionist conversations. After that you buy credit packs; larger packs come with a bonus credit %. Credits never expire.',
  },
  {
    question: 'How much commission does Daisy charge on bookings?',
    answer:
      'Zero commission on customers you already had or who book directly via your branded site / social links. Commission only applies to net-new customers we bring you through the Daisy marketplace, and the rate is set during onboarding based on your category and country.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. Monthly plans cancel at the end of the current billing month with no refund of the in-progress month. Annual plans cancel immediately for the next renewal, but the annual fee paid in advance is non-refundable for unused months.',
  },
  {
    question: 'What about payment processing fees?',
    answer:
      'Payment processing fees depend on your country and provider. Daisy passes these through at the provider\'s cost with no Daisy markup. Specific rates are confirmed during onboarding once your country and payment provider are set.',
  },
  {
    question: 'Why is the multi-country limit so restrictive?',
    answer:
      'Each additional country requires a region-specific payment-provider setup plus ongoing compliance and tax handling on our side. The $50/country add-on covers that work — new countries are configured manually by our team, not self-serve.',
  },
  {
    question: 'What\'s the difference between Business and Professional plans?',
    answer:
      'Business plans are for salons, spas, and clinics with a team — multiple staff calendars, multiple workspaces, team-aware booking. Professional plans are for solo providers — one calendar, one workspace, marketplace-discoverable. Same underlying engine, different fit.',
  },
];

// ----- Add-ons (shared between personas) -----

export const ADD_ONS: AddOnRow[] = [
  {
    name: 'AI Credit Pack (top-up)',
    price: 'Pay-as-you-go with volume bonus — larger packs earn more bonus credits',
  },
  {
    name: 'Featured Promotion to Targeted Customers',
    price: 'Pay per campaign, priced at setup',
  },
  {
    name: 'Assisted Onboarding & Services Menu Setup',
    price: '$100 one-time (included on top tier)',
  },
  {
    name: 'Extra User / Calendar',
    price: '$10 per additional calendar / month',
  },
  {
    name: 'Extra Workspace / Location',
    price: '$25 per additional workspace / month',
  },
  {
    name: 'Multi-Country Setup',
    price: '$50 per additional country / month (configured by our team)',
  },
];
