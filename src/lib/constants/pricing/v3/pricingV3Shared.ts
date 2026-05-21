/**
 * Shared content for the /pricing-v3 preview.
 *
 * v3 is a major positioning rewrite over v2: most copy is now toggle-aware
 * (Business vs Solo Professional reads as two genuinely different products
 * even though they share an engine), AI is described as "conversations"
 * rather than "credits" in the customer-facing copy, "0% commission" moves
 * above the cards, and several new explanatory sections are added.
 *
 * English-only in this initial pass. The AR slices alias the EN content
 * so the I18nContent type is satisfied and Arabic visitors still see
 * sensible (English) copy until translations are written. Same approach
 * v2 used before its AR pass shipped.
 */

import { I18nContent } from '../../i18n';

export type Persona = 'business' | 'professional';

// ----- UI strings — per-persona variants where the copy differs -----

export interface PersonaCopy {
  heroHeadline: string;
  heroSubheadline: string;
  howItWorksTitle: string;
  howItWorksCard1: { title: string; body: string };
  howItWorksCard2: { title: string; body: string };
  howItWorksCard3: { title: string; body: string };
  commissionTitle: string;
  commissionBody1: string;
  commissionBody2: string;
  aiConversationsTitle: string;
  aiConversationsBody: string;
  aiCreditsFineprint: string;
  aiUsageSectionTitle: string;
  aiUsageBody: string;
  whyDaisyTitle: string;
  whyDaisyBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  reassuranceTitle: string;
  reassuranceBody: string;
}

export interface SharedCopy {
  personaToggleBusiness: string;
  personaToggleProfessional: string;
  billingMonthly: string;
  billingAnnual: string;
  twoMonthsFreeBadge: string;
  mostPopularBadge: string;
  trialBadge: string;
  cardPerMonth: string;
  cardBilledMonthlyLine1: string;
  cardBilledMonthlyLine2: string;
  cardBilledAnnuallyLine1: (annualTotal: number) => string;
  cardChooseThisIfLabel: string;
  cardBestForLabel: string;
  cardIncludedHeader: string;
  cardConditionalHeader: string;
  cardConditionalNote: string;
  compareHeading: string;
  compareSubheading: string;
  compareFeatureHeader: string;
  compareViewAllLabel: string;
  compareViewLessLabel: string;
  compareSwipeHint: string;
  addOnsHeading: string;
  addOnsSubheading: string;
  addOnsCategoryCapacity: string;
  addOnsCategoryAI: string;
  addOnsCategoryGrowth: string;
  addOnsCategorySetup: string;
  aiExampleTrial: string;
  aiExampleAfter: string;
  aiExampleBestFor: string;
  aiExampleTrialValue: string;
  aiExampleAfterValue: string;
  aiExampleBestForValue: string;
  whyDaisyComparisonGeneric: string;
  whyDaisyComparisonDaisy: string;
  whyDaisyRow1Generic: string;
  whyDaisyRow1Daisy: string;
  whyDaisyRow2Generic: string;
  whyDaisyRow2Daisy: string;
  whyDaisyRow3Generic: string;
  whyDaisyRow3Daisy: string;
  whyDaisyRow4Generic: string;
  whyDaisyRow4Daisy: string;
  businessSalesCtaTitle: string;
  businessSalesCtaBody: string;
  businessSalesCtaButton: string;
  faqHeading: string;
  crossLinkToProfessional: string;
  crossLinkToBusiness: string;
  finalCtaHeadline: string;
  finalCtaBody: string;
  marketplaceFootnote: string;
}

const SHARED_COPY_EN: SharedCopy = {
  personaToggleBusiness: 'For Business',
  personaToggleProfessional: 'For Solo Professional',
  billingMonthly: 'Monthly',
  billingAnnual: 'Annual',
  twoMonthsFreeBadge: '2 Months Free',
  mostPopularBadge: 'Most Popular',
  trialBadge: '14-day free trial · No credit card required',
  cardPerMonth: '/ month',
  cardBilledMonthlyLine1: 'Billed monthly.',
  cardBilledMonthlyLine2: 'Cancel anytime.',
  cardBilledAnnuallyLine1: (annualTotal) =>
    `Billed annually at $${annualTotal}.`,
  cardChooseThisIfLabel: 'Choose this if',
  cardBestForLabel: 'Best for',
  cardIncludedHeader: 'Included with your plan',
  cardConditionalHeader: 'Available after quality review',
  cardConditionalNote:
    'Marketplace visibility, featured placement, and cashback promotions become available after a service-quality review.',
  compareHeading: 'Compare Every Feature',
  compareSubheading: 'The full feature matrix, organized by category.',
  compareFeatureHeader: 'Feature',
  compareViewAllLabel: 'View All Features',
  compareViewLessLabel: 'Show Less',
  compareSwipeHint: 'Swipe to compare tiers →',
  addOnsHeading: 'Add-Ons',
  addOnsSubheading:
    'Extra capacity and services, billed alongside your subscription.',
  addOnsCategoryCapacity: 'Capacity',
  addOnsCategoryAI: 'AI Receptionist',
  addOnsCategoryGrowth: 'Growth',
  addOnsCategorySetup: 'Setup',
  aiExampleTrial: 'Included Trial',
  aiExampleAfter: 'After Trial',
  aiExampleBestFor: 'Best Used For',
  aiExampleTrialValue: 'Around 50 conversations included',
  aiExampleAfterValue: 'Pay as you go',
  aiExampleBestForValue:
    'Booking questions, service inquiries, availability checks, follow-ups',
  whyDaisyComparisonGeneric: 'Generic booking tools',
  whyDaisyComparisonDaisy: 'Daisy',
  whyDaisyRow1Generic: 'Booking page only',
  whyDaisyRow1Daisy:
    'Booking, payments, messaging, reviews, and AI receptionist',
  whyDaisyRow2Generic: 'Manual replies',
  whyDaisyRow2Daisy:
    'WhatsApp, Instagram, and AI-assisted customer communication',
  whyDaisyRow3Generic: 'No growth channel',
  whyDaisyRow3Daisy: 'Marketplace visibility after quality review',
  whyDaisyRow4Generic: 'Flat software tool',
  whyDaisyRow4Daisy: 'Operating system for service businesses',
  businessSalesCtaTitle: 'Need More Locations, Staff, or Custom AI Workflows?',
  businessSalesCtaBody:
    'If your business has more than 4 locations, more than 15 team members, or needs custom AI receptionist workflows, our team can help you set up a custom plan.',
  businessSalesCtaButton: 'Talk to Sales',
  faqHeading: 'Frequently Asked Questions',
  crossLinkToProfessional: 'Solo professional? See Professional pricing →',
  crossLinkToBusiness: 'Have a team? See Business pricing →',
  finalCtaHeadline: 'Ready To Grow With The Daisy?',
  finalCtaBody:
    'Start your 14-day trial without a credit card. Add a card only when you want to activate AI receptionist credits, process payments, or continue after your trial.',
  marketplaceFootnote:
    '* Marketplace visibility, cashback promotions, and featured placement require a service-quality review.',
};

export const SHARED_COPY: I18nContent<SharedCopy> = {
  en: SHARED_COPY_EN,
  ar: SHARED_COPY_EN,
};

// ----- Persona-aware copy bundles -----

const PERSONA_COPY_BUSINESS_EN: PersonaCopy = {
  heroHeadline:
    'Run Your Salon, Spa, or Clinic With Booking, Payments, and AI Front Desk Support',
  heroSubheadline:
    'Manage your team, bookings, payments, reviews, and customer messages in one platform, with an AI receptionist for WhatsApp, Instagram, and your booking site.',
  howItWorksTitle: 'How Daisy Pricing Works',
  howItWorksCard1: {
    title: 'Subscription = Business Tools',
    body: 'Your subscription gives you the tools to run your business: booking, team calendars, payments, reviews, client records, and customer communication.',
  },
  howItWorksCard2: {
    title: 'AI Receptionist = Trial + Pay-As-You-Go',
    body: 'AI receptionist usage starts with included trial conversations, then continues with pay-as-you-go usage when you want more.',
  },
  howItWorksCard3: {
    title: 'Marketplace = Commission Only on New Customers',
    body: 'Marketplace commission only applies when Daisy brings you a new customer. You pay 0% commission on your existing clients.',
  },
  commissionTitle: '0% Commission on Your Existing Clients. Always.',
  commissionBody1:
    'Your clients stay yours. If a client books through your branded Daisy site, Instagram, WhatsApp, direct booking link, or QR code, Daisy charges 0% commission.',
  commissionBody2:
    'Commission only applies when Daisy brings you a new customer through the marketplace.',
  aiConversationsTitle:
    'Every Plan Includes Around 50 AI Receptionist Conversations',
  aiConversationsBody:
    'Test the AI receptionist with around 50 customer conversations included. Use it to handle common booking questions, availability requests, service inquiries, and follow-ups.',
  aiCreditsFineprint:
    'Powered by 1,000 included AI credits. After that, continue with pay-as-you-go top-ups.',
  aiUsageSectionTitle: 'What Happens After the Included AI Conversations?',
  aiUsageBody:
    'After your included AI receptionist conversations are used, you can continue with pay-as-you-go AI usage. This helps your front desk, reception team, or managers respond faster to customer inquiries without committing to a large fixed AI package.',
  whyDaisyTitle: 'More Than Booking Software',
  whyDaisyBody:
    'Daisy combines booking, team scheduling, payments, customer communication, reviews, AI receptionist support, and marketplace growth tools in one platform built for beauty, wellness, and service businesses.',
  ctaPrimary: 'Start Business Trial',
  ctaSecondary: 'Book a Demo',
  reassuranceTitle: 'Built for Owners, Managers, and Reception Teams',
  reassuranceBody:
    'Daisy helps your team manage calendars, bookings, payments, customer inquiries, reviews, and follow-ups from one place, while AI receptionist support helps reduce missed messages and slow replies.',
};

const PERSONA_COPY_PROFESSIONAL_EN: PersonaCopy = {
  heroHeadline:
    'Get Booked, Look Professional, and Let AI Help With Customer Messages',
  heroSubheadline:
    'Create your branded booking site, manage appointments, accept payments, and respond faster to customers through WhatsApp, Instagram, and AI receptionist support.',
  howItWorksTitle: 'How Daisy Pricing Works',
  howItWorksCard1: {
    title: 'Subscription = Your Tools',
    body: 'Your subscription gives you the tools to manage your bookings, payments, clients, reviews, and customer messages.',
  },
  howItWorksCard2: {
    title: 'AI Receptionist = Trial + Pay-As-You-Go',
    body: 'AI receptionist usage starts with included trial conversations, then continues with pay-as-you-go usage when you want more.',
  },
  howItWorksCard3: {
    title: 'Marketplace = Commission Only on New Customers',
    body: 'Marketplace commission only applies when Daisy brings you a new customer. You pay 0% commission on your own existing clients.',
  },
  commissionTitle: '0% Commission on Your Own Clients. Always.',
  commissionBody1:
    'Your client relationships stay yours. If a client books through your branded Daisy site, Instagram, WhatsApp, direct booking link, or QR code, Daisy charges 0% commission.',
  commissionBody2:
    'Commission only applies when Daisy brings you a new customer through the marketplace.',
  aiConversationsTitle:
    'Every Plan Includes Around 50 AI Receptionist Conversations',
  aiConversationsBody:
    'Test the AI receptionist with around 50 customer conversations included. Use it to help answer booking questions, service inquiries, availability requests, and follow-ups while you are busy serving clients.',
  aiCreditsFineprint:
    'Powered by 1,000 included AI credits. After that, continue with pay-as-you-go top-ups.',
  aiUsageSectionTitle: 'What Happens After the Included AI Conversations?',
  aiUsageBody:
    'After your included AI receptionist conversations are used, you can continue with pay-as-you-go AI usage. This helps you respond to customers while you are working, unavailable, or outside business hours.',
  whyDaisyTitle: 'More Than a Booking Link',
  whyDaisyBody:
    'Daisy gives you a branded booking site, appointment management, payments, reviews, customer messaging, AI receptionist support, and marketplace growth tools designed for independent beauty and wellness professionals.',
  ctaPrimary: 'Start Solo Trial',
  ctaSecondary: 'Create Your Booking Site',
  reassuranceTitle: 'Look Professional Even If You Work Independently',
  reassuranceBody:
    'Daisy helps you present your services through a branded booking site, accept bookings online, collect payments, manage reviews, and give customers a smoother experience before they ever visit you.',
};

export const PERSONA_COPY: Record<Persona, I18nContent<PersonaCopy>> = {
  business: { en: PERSONA_COPY_BUSINESS_EN, ar: PERSONA_COPY_BUSINESS_EN },
  professional: {
    en: PERSONA_COPY_PROFESSIONAL_EN,
    ar: PERSONA_COPY_PROFESSIONAL_EN,
  },
};

// ----- Add-ons (categorized) -----

export interface AddOnRow {
  name: string;
  price: string;
}

export interface AddOnCategory {
  title: string;
  rows: AddOnRow[];
}

const ADD_ONS_BUSINESS_EN: AddOnCategory[] = [
  {
    title: 'Capacity',
    rows: [
      { name: 'Extra User / Calendar', price: '$10 / additional calendar / month' },
      { name: 'Extra Workspace / Location', price: '$25 / additional workspace / month' },
      { name: 'Multi-Country Setup', price: '$50 / additional country / month (manual setup)' },
    ],
  },
  {
    title: 'AI Receptionist',
    rows: [
      { name: 'AI Conversation Top-Up', price: 'Pay-as-you-go with volume bonus on larger packs' },
      { name: 'Higher-Volume AI Usage', price: 'Custom pricing for high-throughput operations' },
    ],
  },
  {
    title: 'Growth',
    rows: [
      { name: 'Featured Promotion', price: 'Pay per campaign, priced at setup' },
      { name: 'Cashback Campaign', price: 'Pay per campaign — boost repeat visits' },
      { name: 'Marketplace Campaign', price: 'Pay per campaign — discover-mode placement' },
    ],
  },
  {
    title: 'Setup',
    rows: [
      { name: 'Assisted Onboarding', price: '$100 one-time (included on top tier)' },
      { name: 'Data Migration', price: 'Free on Multi-Location, available on lower tiers' },
      { name: 'Multi-Location Setup', price: 'White-glove configuration for 3+ locations' },
    ],
  },
];

const ADD_ONS_PROFESSIONAL_EN: AddOnCategory[] = [
  {
    title: 'Capacity',
    rows: [
      { name: 'Extra Calendar', price: '$10 / additional calendar / month' },
      { name: 'Extra Workspace', price: '$25 / additional workspace / month' },
    ],
  },
  {
    title: 'AI Receptionist',
    rows: [
      { name: 'AI Conversation Top-Up', price: 'Pay-as-you-go with volume bonus on larger packs' },
      { name: 'Higher-Volume AI Usage', price: 'Custom pricing if you handle very high message volume' },
    ],
  },
  {
    title: 'Growth',
    rows: [
      { name: 'Featured Promotion', price: 'Pay per campaign, priced at setup' },
      { name: 'Cashback Campaign', price: 'Pay per campaign — boost repeat visits' },
      { name: 'Marketplace Campaign', price: 'Pay per campaign — discover-mode placement' },
    ],
  },
  {
    title: 'Setup',
    rows: [
      { name: 'Assisted Onboarding', price: '$100 one-time (included on top tier)' },
      { name: 'Profile & Service Menu Setup', price: 'White-glove setup of your branded site' },
    ],
  },
];

export const ADD_ONS: Record<Persona, I18nContent<AddOnCategory[]>> = {
  business: { en: ADD_ONS_BUSINESS_EN, ar: ADD_ONS_BUSINESS_EN },
  professional: { en: ADD_ONS_PROFESSIONAL_EN, ar: ADD_ONS_PROFESSIONAL_EN },
};

// ----- FAQ — first 5 shared, last two are persona-specific -----

export interface FAQItem {
  question: string;
  answer: string;
}

const SHARED_FAQ_EN: FAQItem[] = [
  {
    question: 'Do I Pay Commission on My Existing Clients?',
    answer:
      'No. Daisy charges 0% commission on your existing clients. If customers book through your branded booking site, direct link, QR code, WhatsApp, Instagram, or your own marketing channels, there is no Daisy commission. Commission only applies when Daisy brings you a new customer through the marketplace.',
  },
  {
    question: 'What Are AI Receptionist Conversations?',
    answer:
      'AI receptionist conversations are customer conversations handled with AI support, such as service questions, booking inquiries, availability requests, follow-ups, and common customer questions.',
  },
  {
    question: 'What Happens After My Included AI Conversations Are Used?',
    answer:
      'You can continue using the AI receptionist through pay-as-you-go top-ups. Daisy will show the cost before you buy additional usage.',
  },
  {
    question: 'Is Marketplace Visibility Guaranteed?',
    answer:
      'Marketplace visibility is available after a quality review. This helps Daisy maintain a trusted marketplace for customers looking for reliable beauty, wellness, and service providers.',
  },
  {
    question: 'Do I Need a Credit Card to Start?',
    answer:
      'You can start the 14-day trial without a credit card. A card is only required to activate AI receptionist credits, process payments, or continue after the trial.',
  },
];

export const SHARED_FAQ: I18nContent<FAQItem[]> = {
  en: SHARED_FAQ_EN,
  ar: SHARED_FAQ_EN,
};

const BUSINESS_ONLY_FAQ_EN: FAQItem = {
  question: 'Can I Add More Team Members or Locations?',
  answer:
    'Yes. You can add extra users, calendars, workspaces, or locations depending on your plan. Larger businesses can contact Daisy for a custom setup.',
};

const PROFESSIONAL_ONLY_FAQ_EN: FAQItem = {
  question: 'Is Daisy Suitable If I Work Alone?',
  answer:
    'Yes. Daisy is designed for solo professionals who want a professional booking site, easier appointment management, customer messaging, payments, reviews, and growth tools.',
};

export const BUSINESS_ONLY_FAQ: I18nContent<FAQItem> = {
  en: BUSINESS_ONLY_FAQ_EN,
  ar: BUSINESS_ONLY_FAQ_EN,
};

export const PROFESSIONAL_ONLY_FAQ: I18nContent<FAQItem> = {
  en: PROFESSIONAL_ONLY_FAQ_EN,
  ar: PROFESSIONAL_ONLY_FAQ_EN,
};
