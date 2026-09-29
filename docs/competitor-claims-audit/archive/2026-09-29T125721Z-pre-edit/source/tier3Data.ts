// =============================================================================
// WS1: Tier 3 Competitors. Light Research
// Last updated: March 2026
// =============================================================================

import type { CompetitorData } from './competitorData';
import type { I18nContent } from '../i18n';

export const tier3Competitors: Record<string, CompetitorData> = {
  // ---------------------------------------------------------------------------
  // 13. Square Appointments
  // ---------------------------------------------------------------------------
  'square-appointments': {
    slug: 'square-appointments',
    name: 'Square Appointments',
    website: 'https://squareup.com/appointments',
    tier: 3,
    description:
      'A payment-first booking tool from Square, part of Block, Inc., built on top of the Square POS ecosystem. Individuals can use it free.',
    founded: '2009',
    headquarters: 'San Francisco, CA, USA',

    features: {
      onlineBooking: 2,
      posAndPayments: 3,
      clientManagement: 1,
      staffManagement: 1,
      marketingAndCrm: 1,
      inventoryManagement: 2,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 1,
      aiCapabilities: 0,
      brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: true,
      startingPrice: 'Free (paid from $29/mo)',
      startingPriceNumeric: 0,
      tiers: [
        { name: 'Free', price: 'Free', priceNumeric: 0, features: ['Individual booking', 'Square POS', 'Basic calendar'] },
        { name: 'Plus', price: '$29/mo', priceNumeric: 29, billingCycle: 'monthly', features: ['Multiple staff', 'No-show protection', 'Google calendar sync'] },
        { name: 'Premium', price: '$69/mo', priceNumeric: 69, billingCycle: 'monthly', features: ['Advanced features', 'Multiple locations', 'Resource management'] },
      ],
      transactionFees: '2.6% + $0.10 per transaction',
      hiddenCosts: ['Transaction fees on all Square payments', 'Hardware costs for POS', 'Limited beauty-specific features'],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'Capterra', rating: 4.4, reviewCount: 200 },
      { platform: 'G2', rating: 4.3, reviewCount: 150 },
    ],

    gccPresence: {
      hasArabicUI: false,
      arabicQuality: 'none',
      gccCountries: [],
      localCompliance: false,
      localPaymentMethods: false,
      localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI. Standard automated reminders and nothing more.',
    },

    daisyAdvantages: [
      'Purpose-built for beauty/wellness vs generic scheduling tool',
      '24/7 AI receptionist vs no AI',
      'Consumer marketplace with cashback vs no marketplace',
      'Native Arabic/English vs English-only',
      'Complete beauty business management vs payment-first add-on',
      'GCC compliance and local payments',
    ],
    daisySwitchingReasons: [
      'Need beauty-specific features beyond basic scheduling',
      'Want AI receptionist for after-hours bookings',
      'Need Arabic support and GCC compliance',
      'Want customer acquisition tools (marketplace, cashback)',
    ],
    competitorStrengths: [
      'Free plan available', 'Best-in-class POS and payments', 'Square ecosystem integration',
      'Trusted brand name', 'Easy setup',
    ],
    competitorWeaknesses: [
      'Generic scheduling, not beauty-specific', 'No AI', 'No Arabic/GCC',
      'Limited salon management features', 'No marketplace',
    ],

    faq: [
      { question: 'How does Square Appointments compare to Daisy?', answer: 'Square Appointments is a general-purpose scheduling add-on to Square\'s POS. Daisy is built for beauty and wellness, with an AI receptionist, a marketplace, cashback and Arabic support. Square is excellent at payments and has nothing for beauty-specific management, AI or customer acquisition.' },
      { question: 'Is Square Appointments free?', answer: 'It is free for an individual user. Once you add staff, paid plans start at $29/mo, and every Square payment carries 2.6% + $0.10 on top.' },
      { question: 'What are the hidden costs of using Square Appointments for a salon?', answer: 'Past the subscription, Square takes 2.6% + $0.10 on every transaction through its POS. In-person payments usually mean buying Square hardware too. And because there is no client history, no formula tracking and no proper service menu, most salons end up paying for third-party tools to fill the gaps.' },
      { question: 'Can I migrate my client data from Square Appointments to Daisy?', answer: 'Yes. Daisy walks you through the migration, moving client records, appointment history and contact details across from Square Appointments, so no client relationship gets lost on the way.' },
      { question: 'Does Square Appointments work in Arabic or support GCC countries?', answer: 'No. There is no Arabic interface and no presence in the GCC, and local payment methods such as mada, Apple Pay in MENA and Knet are unsupported. Daisy runs natively in Arabic and English with full GCC compliance across all six countries.' },
      { question: 'Does Square Appointments have AI features like an AI receptionist?', answer: 'No. There is no AI receptionist, no smart scheduling and no AI marketing. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments while the salon is shut.' },
      { question: 'Is Square Appointments good enough for a multi-location beauty business?', answer: 'Multiple locations are supported on the Premium plan at $69/mo, but it is still a general scheduling tool with no service menus, no formula tracking and no stylist portfolios. Daisy was built for multi-location beauty businesses, with centralized management, AI and a customer marketplace.' },
      { question: 'How does Square Appointments mobile app compare to Daisy?', answer: 'Square\'s app is about payments and basic scheduling. Daisy\'s covers the whole salon: the AI receptionist, live analytics, client messaging and marketplace visibility, designed for a beauty professional working between appointments.' },
      { question: 'What kind of customer support does Square Appointments offer?', answer: 'Square supports you by email, phone and community forum, with nobody who specifically knows the beauty industry. Daisy\'s onboarding and support come from people who understand how a salon or spa runs, with local GCC support in Arabic and English.' },
      { question: 'Can Square Appointments help me get new clients like Daisy can?', answer: 'No. Square Appointments runs your operations and does nothing to find you customers. Daisy puts a consumer marketplace, cashback rewards and AI-powered marketing together to bring new clients in.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 14. Mangomint
  // ---------------------------------------------------------------------------
  mangomint: {
    slug: 'mangomint',
    name: 'Mangomint',
    website: 'https://www.mangomint.com',
    tier: 3,
    description:
      'Premium, modern salon and spa software, known for a clean interface and strong automation, and rated 4.9/5 on Capterra. It aims at established salons and spas.',
    founded: '2017',
    headquarters: 'Austin, TX, USA',

    features: {
      onlineBooking: 3,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 3,
      marketingAndCrm: 1,
      inventoryManagement: 1,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 0,
      aiCapabilities: 1,
      brandingAndWhiteLabel: 1,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '$165/mo',
      startingPriceNumeric: 165,
      tiers: [
        { name: 'Essentials', price: '$165/mo', priceNumeric: 165, billingCycle: 'monthly', features: ['Booking', 'Calendar', 'POS', 'Client management'] },
        { name: 'Standard', price: '$245/mo', priceNumeric: 245, billingCycle: 'monthly', features: ['Everything in Essentials', 'Marketing', 'Advanced reporting', 'Automations'] },
        { name: 'Unlimited', price: '$375/mo', priceNumeric: 375, billingCycle: 'monthly', features: ['Everything in Standard', 'Unlimited staff', 'API access', 'Priority support'] },
      ],
      hiddenCosts: ['Premium pricing', 'Payment processing fees', 'Limited marketing tools'],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'Capterra', rating: 4.9, reviewCount: 170 },
      { platform: 'G2', rating: 4.7, reviewCount: 100 },
    ],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'Smart workflow automations, but no real AI: no receptionist, no chatbot, no AI marketing.',
    },

    daisyAdvantages: [
      'AI receptionist and chatbot vs no AI', 'Consumer marketplace vs no marketplace',
      'More affordable pricing vs $165-375/mo', 'Arabic/English support vs US-only',
      'Customer acquisition engine vs operations-only', 'GCC compliance',
    ],
    daisySwitchingReasons: [
      'Premium pricing without AI features', 'Need Arabic/GCC support',
      'Want marketplace for customer discovery', 'Need AI receptionist',
    ],
    competitorStrengths: [
      'Highest Capterra rating (4.9/5)', 'Beautiful, clean design', 'Strong automations',
      'Excellent staff management', 'Modern tech stack',
    ],
    competitorWeaknesses: [
      'Premium pricing ($165-375/mo)', 'US-only', 'No AI', 'No marketplace',
      'No Arabic/GCC', 'Small review base', 'No customer acquisition tools',
    ],

    faq: [
      { question: 'How does Mangomint compare to Daisy?', answer: 'Mangomint is premium US salon software at $165-375/mo, beautifully designed and strong on automation. Daisy adds an AI receptionist, a marketplace, cashback and Arabic support, and costs less. Mangomint is built to run a salon, Daisy to grow one.' },
      { question: 'Why is Mangomint so expensive compared to other salon software?', answer: 'Mangomint sells itself as a premium product, with a clean interface and strong automations, from $165/mo up to $375/mo. The design earns the price; the missing AI, absent customer marketplace and lack of any Arabic or GCC support do not. Daisy offers more, including the AI receptionist and acquisition tools, for less.' },
      { question: 'Can I switch from Mangomint to Daisy without losing my data?', answer: 'Yes. Daisy moves your client records, appointment history, staff schedules and service menus across from Mangomint, and handles the transition so the business never goes offline.' },
      { question: 'Does Mangomint support Arabic or work in the Middle East?', answer: 'No. Mangomint serves the US only, in English. There is no Arabic, no GCC compliance and no local payment integration. Daisy runs natively in Arabic and English with support built for the Gulf, live in Kuwait today.' },
      { question: 'Does Mangomint have an AI receptionist or AI features?', answer: 'No. The workflow automations are smart, but none of it is AI: no receptionist, no chatbot, no AI marketing. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments on its own.' },
      { question: 'Is Mangomint worth $375 a month for my salon?', answer: 'The Unlimited plan at $375/mo buys excellent operations tools and nothing that acquires customers, no AI and no marketplace visibility. For a salon trying to grow rather than simply run, Daisy\'s AI platform with its marketplace and cashback usually returns more, for less.' },
      { question: 'How does Mangomint\'s mobile app compare to Daisy?', answer: 'Mangomint\'s app is well designed and built around scheduling and operations. Daisy\'s adds the AI receptionist, marketplace visibility, live acquisition analytics and Arabic and English throughout, which takes it past operations into growth.' },
      { question: 'What integrations does Mangomint offer compared to Daisy?', answer: 'It connects to payment processors and a handful of third-party tools, with API access reserved for the Unlimited plan at $375/mo. Daisy has payments, marketing, CRM and acquisition built into one platform, along with GCC payment methods such as mada and Knet.' },
      { question: 'Does Mangomint help me get new customers or just manage existing ones?', answer: 'Mangomint looks after the clients you already have. There is no marketplace, nothing for discovery and no cashback. Daisy includes a consumer marketplace, a cashback program and AI-powered marketing to bring new customers in.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 15. Phorest
  // ---------------------------------------------------------------------------
  phorest: {
    slug: 'phorest',
    name: 'Phorest',
    website: 'https://www.phorest.com',
    tier: 3,
    description:
      'Salon software built around loyalty and retention, strong across the UK and Ireland, with thorough marketing and CRM features.',
    founded: '2003',
    headquarters: 'Dublin, Ireland',

    features: {
      onlineBooking: 2, posAndPayments: 2, clientManagement: 3, staffManagement: 2,
      marketingAndCrm: 3, inventoryManagement: 1, reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 1, aiCapabilities: 1, brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '~$99/mo',
      startingPriceNumeric: 99,
      tiers: [
        { name: 'Starter', price: '~$99/mo', priceNumeric: 99, features: ['Booking', 'CRM', 'Basic marketing', 'POS'] },
        { name: 'Grow', price: 'Custom', features: ['Advanced marketing', 'Loyalty program', 'Advanced reporting', 'Multi-location'] },
      ],
      hiddenCosts: ['Opaque higher-tier pricing', 'SMS costs', 'Payment processing'],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [{ platform: 'Capterra', rating: 4.8, reviewCount: 400 }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: true, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'AI stretches to suggesting marketing campaigns. No receptionist, no chatbot, no smart scheduling.',
    },

    daisyAdvantages: [
      'Full AI ecosystem vs basic marketing AI only', 'Arabic/English vs English-only',
      'Consumer marketplace vs no marketplace', 'GCC presence vs UK/Ireland-only',
      'Cashback rewards vs traditional loyalty points',
    ],
    daisySwitchingReasons: ['Need Arabic/GCC support', 'Want AI receptionist', 'Want marketplace for customer discovery'],
    competitorStrengths: ['Excellent CRM and loyalty tools', 'Strong UK/Ireland market position', 'Good marketing automation', 'Established brand (2003)'],
    competitorWeaknesses: ['UK/Ireland-focused', 'No Arabic/GCC', 'Limited AI', 'No marketplace', 'Opaque pricing'],

    faq: [
      { question: 'How does Phorest compare to Daisy?', answer: 'Across the UK and Ireland, Phorest is very good at CRM and loyalty. Daisy adds an AI receptionist, a marketplace, cashback and Arabic and GCC support, none of which Phorest has. Phorest keeps the clients you have; Daisy also finds you new ones.' },
      { question: 'Is Phorest pricing transparent or are there hidden fees?', answer: 'The starter plan sits around $99/mo, and everything above it needs a custom quote you cannot look up. SMS charges and payment processing fees come on top. Daisy charges a flat published rate, with nothing per message and nothing hidden.' },
      { question: 'Can I move my client database from Phorest to Daisy?', answer: 'Yes. Daisy migrates Phorest users itself, bringing across client records, loyalty points history, appointment data and marketing preferences, with the onboarding team handling the transition.' },
      { question: 'Does Phorest work in Arabic or support salons in the GCC?', answer: 'No. Phorest serves the UK and Ireland in English only, with no Arabic, no GCC compliance and no local Middle Eastern payment methods. Daisy runs natively in Arabic and English with full GCC compliance across all six countries.' },
      { question: 'Does Phorest have AI features like Daisy?', answer: 'The AI suggests marketing campaigns and stops there. No receptionist, no chatbot, no smart scheduling. Daisy runs a complete AI ecosystem, including a 24/7 receptionist that handles bookings and customer questions by itself.' },
      { question: 'How does Phorest\'s loyalty program compare to Daisy\'s cashback?', answer: 'Phorest runs a traditional points system, which works on the clients you already have. Daisy\'s cashback rewards hold those clients and pull new ones in through the consumer marketplace, so retention and acquisition run on the same mechanism.' },
      { question: 'Is Phorest good for salons outside the UK and Ireland?', answer: 'Phorest has reached a little past the UK and Ireland, though its expertise and its support still sit there. There is no Middle East presence, no Arabic and nothing built for the GCC. Daisy works across markets and is strongest in the Gulf.' },
      { question: 'How does Phorest\'s mobile app compare to Daisy?', answer: 'Phorest\'s app centres on CRM and marketing management. Daisy\'s adds the AI receptionist, marketplace visibility, cashback tracking and full Arabic and English support for owners and their clients alike.' },
      { question: 'What customer support does Phorest offer compared to Daisy?', answer: 'Higher tiers come with a dedicated account manager, and support runs on UK and Ireland business hours. Daisy provides beauty industry support from local GCC teams, with Arabic-speaking representatives and onboarding built for the Middle East.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 16. Timely
  // ---------------------------------------------------------------------------
  timely: {
    slug: 'timely',
    name: 'Timely',
    website: 'https://www.gettimely.com',
    tier: 3,
    description: 'New Zealand salon software priced per member of staff, strong across New Zealand, Australia and the UK, with a clean modern interface.',
    founded: '2012',
    headquarters: 'Auckland, New Zealand',

    features: {
      onlineBooking: 2, posAndPayments: 2, clientManagement: 2, staffManagement: 2,
      marketingAndCrm: 2, inventoryManagement: 1, reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 0, aiCapabilities: 0, brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '$30/mo',
      startingPriceNumeric: 30,
      tiers: [
        { name: 'Build', price: '$30/mo', priceNumeric: 30, perStaff: true, perStaffCost: '+$9/staff', features: ['Booking', 'Calendar', 'Client management'] },
        { name: 'Elevate', price: '$45/mo', priceNumeric: 45, perStaff: true, perStaffCost: '+$12/staff', features: ['Everything in Build', 'Marketing', 'Reporting'] },
        { name: 'Innovate', price: '$50/mo', priceNumeric: 50, perStaff: true, perStaffCost: '+$15/staff', features: ['Everything in Elevate', 'Advanced features', 'API access'] },
      ],
      hiddenCosts: ['Per-staff costs scale quickly', 'Payment processing', 'SMS costs'],
      pricingModel: 'per-staff',
      lastVerified: '2026-03-13',
    },

    reviews: [{ platform: 'Capterra', rating: 4.7, reviewCount: 700 }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI capabilities.',
    },

    daisyAdvantages: ['AI receptionist vs no AI', 'Flat pricing vs per-staff scaling', 'Arabic/GCC vs NZ/AU only', 'Marketplace + cashback vs no acquisition tools'],
    daisySwitchingReasons: ['Per-staff pricing getting expensive', 'Need Arabic/GCC support', 'Want AI features', 'Need marketplace'],
    competitorStrengths: ['Clean modern interface', 'Good reviews (4.7)', 'Strong in NZ/AU/UK', 'Affordable for solos'],
    competitorWeaknesses: ['No AI', 'No marketplace', 'Per-staff pricing scales badly', 'NZ/AU/UK only', 'No Arabic/GCC'],

    faq: [
      { question: 'How does Timely compare to Daisy?', answer: 'Timely is a clean, modern platform, popular across New Zealand, Australia and the UK, and priced per member of staff. Daisy adds AI, a marketplace, cashback, flat pricing and Arabic and GCC support, none of which Timely has.' },
      { question: 'How expensive does Timely get as I add more staff?', answer: 'Per-staff pricing climbs quickly. The Innovate plan is $50/mo as a base plus $15 for each member of staff, so a salon with 10 stylists pays $200/mo. Daisy charges flat, so hiring costs you nothing extra.' },
      { question: 'Are there hidden fees with Timely beyond the subscription?', answer: 'Yes. On top of the per-staff subscription, SMS reminders and payment processing are billed separately, which mounts up in a busy salon. Daisy includes notifications and payment processing in its flat price.' },
      { question: 'Can I transfer my data from Timely to Daisy?', answer: 'Yes. Daisy migrates Timely users itself, moving client records, appointment history, staff schedules and service configurations, with the onboarding team handling the whole process.' },
      { question: 'Does Timely support Arabic or work in the Middle East?', answer: 'No. Timely serves New Zealand, Australia and the UK. There is no Arabic interface, no GCC compliance and no local payment methods for the Middle East. Daisy runs natively in Arabic and English with support built for the Gulf, live in Kuwait today.' },
      { question: 'Does Timely have any AI features?', answer: 'No. There is no AI receptionist, no chatbot, no smart scheduling and no AI marketing. Daisy\'s AI receptionist works 24/7, taking bookings, answering client questions and processing payments on its own.' },
      { question: 'How does Timely\'s mobile app compare to Daisy?', answer: 'Timely\'s app is well designed for scheduling and staff management. Daisy\'s adds the AI receptionist, marketplace visibility, cashback management, live business analytics and full Arabic and English support.' },
      { question: 'Can Timely help me attract new clients to my salon?', answer: 'No. Timely runs your operations. There is no marketplace, no cashback and nothing that helps a new client find you. Daisy includes a consumer marketplace, a cashback program and AI-powered marketing to bring customers in.' },
      { question: 'What kind of customer support does Timely provide?', answer: 'Support runs through email and an online help centre, with no phone line and no dedicated account manager. Daisy provides multi-channel support, dedicated onboarding, Arabic-speaking staff and local GCC teams.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 17. Meevo
  // ---------------------------------------------------------------------------
  meevo: {
    slug: 'meevo',
    name: 'Meevo',
    website: 'https://www.meevo.com',
    tier: 3,
    description: 'A long-established US salon and spa management platform with a no-contracts policy and a thorough feature set aimed at mid-market salons.',
    founded: '2006',
    headquarters: 'New Jersey, USA',

    features: {
      onlineBooking: 2, posAndPayments: 2, clientManagement: 2, staffManagement: 2,
      marketingAndCrm: 2, inventoryManagement: 2, reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 1, aiCapabilities: 0, brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '~$139/mo',
      startingPriceNumeric: 139,
      tiers: [
        { name: 'Standard', price: '~$139/mo', priceNumeric: 139, features: ['Full booking', 'POS', 'Client CRM', 'Staff management', 'Inventory', 'Reporting'] },
      ],
      hiddenCosts: ['Hardware costs', 'Add-on feature costs'],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [{ platform: 'Capterra', rating: 4.2, reviewCount: 250 }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI. Traditional salon software.',
    },

    daisyAdvantages: ['AI-powered platform vs traditional software', 'Arabic/GCC vs US-only', 'Marketplace + cashback', 'Modern tech stack'],
    daisySwitchingReasons: ['Want AI capabilities', 'Need Arabic/GCC support', 'Want customer acquisition tools', 'Want modern platform'],
    competitorStrengths: ['No contracts', 'Comprehensive feature set', 'Established brand', 'Good inventory management'],
    competitorWeaknesses: ['No AI', 'US-only', 'Dated interface', 'No marketplace', 'No Arabic/GCC'],

    faq: [
      { question: 'How does Meevo compare to Daisy?', answer: 'Meevo is an established US salon platform with solid features and no AI, no marketplace and no international support. Daisy brings an AI receptionist, a marketplace, cashback and Arabic and GCC compliance, on a modern platform.' },
      { question: 'What are the hidden costs with Meevo beyond the $139 monthly subscription?', answer: 'Hardware costs extra, meaning POS terminals and card readers, as do the add-on features left out of the base plan. Setup fees and training can apply on top. Daisy publishes its pricing, needs no hardware and includes the features.' },
      { question: 'Can I move my salon data from Meevo to Daisy?', answer: 'Yes. Daisy moves client profiles, appointment history, product inventory, staff records and financial data across from Meevo, with the onboarding team handling the transition.' },
      { question: 'Does Meevo support Arabic or have any presence in the Middle East?', answer: 'No. Meevo serves the US only, with no Arabic interface, no GCC compliance and no Middle Eastern payment methods. Daisy runs natively in Arabic and English with support built for the Gulf, live in Kuwait today.' },
      { question: 'Does Meevo have AI features like an AI receptionist?', answer: 'No. Meevo is traditional salon software: no AI receptionist, no chatbot, no smart scheduling. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments long after you have gone home.' },
      { question: 'Is Meevo\'s interface modern or does it feel outdated?', answer: 'Meevo dates from 2006, and although it has been updated since, users regularly describe the interface as dated next to newer platforms. Daisy is built on a modern stack, with an interface made for how beauty professionals work now.' },
      { question: 'How does Meevo\'s mobile app compare to Daisy?', answer: 'Meevo has a companion app for basic management tasks. Daisy\'s covers the whole salon: the AI receptionist, marketplace visibility, live analytics and Arabic and English throughout, built for an owner who is rarely at a desk.' },
      { question: 'Does Meevo have a marketplace to help me find new clients?', answer: 'There is a thin listing directory, but nothing that works as a consumer marketplace. Daisy includes a full one, with cashback rewards, discovery features and AI-powered marketing to bring new clients to the salon.' },
      { question: 'What customer support does Meevo provide?', answer: 'Meevo offers US-based phone and email support in business hours. Daisy provides multi-channel support from people who know the beauty industry, with Arabic-speaking representatives and dedicated GCC teams for Middle East businesses.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 18. Treatwell
  // ---------------------------------------------------------------------------
  treatwell: {
    slug: 'treatwell',
    name: 'Treatwell',
    website: 'https://www.treatwell.com',
    tier: 3,
    description: 'Europe\'s largest beauty marketplace, running across 13 countries and taking up to 35% commission on bookings.',
    founded: '2008',
    headquarters: 'Amsterdam, Netherlands',

    features: {
      onlineBooking: 2, posAndPayments: 1, clientManagement: 1, staffManagement: 1,
      marketingAndCrm: 1, inventoryManagement: 0, reportingAndAnalytics: 1,
      marketplaceAndDiscovery: 3, aiCapabilities: 0, brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: 'Commission-based (up to 35%)',
      tiers: [
        { name: 'Marketplace', price: 'Commission-based', features: ['Marketplace listing', 'Basic booking', 'Consumer discovery'] },
        { name: 'Treatwell Connect', price: 'Subscription + reduced commission', features: ['Salon management', 'Reduced commission', 'Client management'] },
      ],
      commissionOnMarketplace: 'Up to 35% per booking',
      hiddenCosts: ['Very high commission rates', 'Limited business management in basic tier'],
      pricingModel: 'usage-based',
      lastVerified: '2026-03-13',
    },

    reviews: [{ platform: 'Capterra', rating: 3.8, reviewCount: 100 }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI capabilities.',
    },

    daisyAdvantages: ['Complete platform vs marketplace-only', 'No 35% commissions', 'AI receptionist', 'Arabic/GCC', 'Full business management', 'Flat pricing'],
    daisySwitchingReasons: ['35% commission is unsustainable', 'Need full business management', 'Want AI', 'Need Arabic/GCC support'],
    competitorStrengths: ['Largest European beauty marketplace', '13 countries coverage', 'Consumer brand recognition'],
    competitorWeaknesses: ['Up to 35% commission', 'Very basic management tools', 'No AI', 'Low Capterra rating (3.8)', 'No GCC/Arabic', 'Marketplace dependency'],

    faq: [
      { question: 'How does Treatwell compare to Daisy?', answer: 'Treatwell is a European marketplace that takes up to 35% commission per booking and offers little in the way of management tools. Daisy is a complete platform with flat pricing, an AI receptionist and full business management, and takes no commission on customer bookings.' },
      { question: 'How much does Treatwell actually cost salons with their commission model?', answer: 'Commission on marketplace bookings runs up to 35%. A salon putting $10,000/mo through Treatwell hands over as much as $3,500. Daisy charges a flat subscription and takes no commission, so the revenue stays with you.' },
      { question: 'Can I switch from Treatwell to Daisy and keep my clients?', answer: 'Yes. Daisy moves your client data across and helps you build direct relationships from there. On Treatwell the marketplace holds the customer relationship. On Daisy the client data is yours, and so is the line to them.' },
      { question: 'Does Treatwell work in Arabic or support salons in the Gulf?', answer: 'No. Treatwell runs in 13 European countries and nowhere else, with no Arabic interface, no GCC presence and no Middle Eastern payment methods. Daisy runs natively in Arabic and English with support built for the Gulf, live in Kuwait today.' },
      { question: 'Does Treatwell have AI features?', answer: 'No. There is no AI receptionist, no chatbot and no smart scheduling. Treatwell is a marketplace listing with basic booking attached. Daisy offers a 24/7 AI receptionist, AI-powered marketing and smart scheduling.' },
      { question: 'Why does Treatwell have a lower rating on Capterra than other salon software?', answer: 'Treatwell sits at 3.8/5 on Capterra, below most competitors. The recurring complaints are the commission rates, the thin business management tools, and how little control salons have over pricing and their own client relationships. Daisy hands that control back, on flat pricing.' },
      { question: 'Does Treatwell offer real salon management tools or just a marketplace listing?', answer: 'Treatwell Connect does basic salon management, though most salons treat Treatwell as a marketplace listing and nothing else. For real management, they buy separate software anyway. Daisy covers booking, POS, CRM, marketing, AI and the marketplace in one place.' },
      { question: 'How does Treatwell\'s app compare to Daisy for salon owners?', answer: 'The salon-facing app exists mainly to manage marketplace bookings. Daisy\'s covers the salon itself: the AI receptionist, direct client communication, analytics and Arabic and English throughout.' },
      { question: 'Is Treatwell sustainable for my salon long-term with 35% commission?', answer: 'Plenty of salons find the commission model stops working as they grow, since success itself raises the bill. On a flat subscription your costs hold still while the revenue climbs, and nothing comes out of the margin.' },
      { question: 'What support does Treatwell offer compared to Daisy?', answer: 'Partner salons get basic email support on European business hours. Daisy provides dedicated onboarding, multi-channel support, Arabic-speaking representatives and local GCC teams who know the beauty industry well.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 19. Acuity Scheduling
  // ---------------------------------------------------------------------------
  'acuity-scheduling': {
    slug: 'acuity-scheduling',
    name: 'Acuity Scheduling',
    website: 'https://acuityscheduling.com',
    tier: 3,
    description: 'A general-purpose scheduling tool owned by Squarespace. Nothing about it is specific to beauty, though some independent professionals use it anyway.',
    founded: '2006',
    headquarters: 'New York, USA (Squarespace)',

    features: {
      onlineBooking: 3, posAndPayments: 1, clientManagement: 1, staffManagement: 1,
      marketingAndCrm: 1, inventoryManagement: 0, reportingAndAnalytics: 1,
      marketplaceAndDiscovery: 0, aiCapabilities: 0, brandingAndWhiteLabel: 1,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '$16/mo',
      startingPriceNumeric: 16,
      tiers: [
        { name: 'Emerging', price: '$16/mo', priceNumeric: 16, features: ['1 calendar', 'Online booking', 'Payment collection'] },
        { name: 'Growing', price: '$27/mo', priceNumeric: 27, features: ['6 calendars', 'SMS reminders', 'Packages'] },
        { name: 'Powerhouse', price: '$49/mo', priceNumeric: 49, features: ['36 calendars', 'Custom API', 'Multiple locations'] },
      ],
      hiddenCosts: ['Very basic, beauty businesses need additional tools', 'Payment processing fees'],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [{ platform: 'Capterra', rating: 4.8, reviewCount: 5600 }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI. A generic scheduling tool.',
    },

    daisyAdvantages: ['Purpose-built for beauty vs generic scheduling', 'AI receptionist', 'Full business suite (POS, CRM, marketing)', 'Marketplace + cashback', 'Arabic/GCC'],
    daisySwitchingReasons: ['Need beauty-specific features', 'Want AI', 'Need POS/payments integration', 'Want marketplace and customer acquisition'],
    competitorStrengths: ['Very affordable ($16/mo)', 'Excellent booking experience', 'Highest review count (5,600)', 'Squarespace integration'],
    competitorWeaknesses: ['Not beauty-specific', 'No POS/inventory/CRM', 'No AI', 'No marketplace', 'No Arabic/GCC'],

    faq: [
      { question: 'How does Acuity compare to Daisy for salons?', answer: 'Acuity is a general scheduling tool at $16-49/mo. It handles basic booking well and has no POS, no inventory, no client management, no AI and no marketplace. Daisy was built for beauty businesses, with the management and growth tools to match.' },
      { question: 'Is Acuity Scheduling really just a calendar or does it have salon features?', answer: 'At bottom Acuity is a calendar, not salon software. There is no POS, no inventory management, no formula tracking, no service menus and no staff commissions. Most salons on Acuity end up buying several other tools to fill the gaps. Daisy holds all of it in one platform.' },
      { question: 'What hidden costs should I expect with Acuity Scheduling?', answer: 'The subscription itself is cheap at $16-49/mo. A beauty business then adds separate tools for POS, CRM, marketing and inventory, each with its own bill, and payment processing fees on top. Daisy puts all of it in one platform.' },
      { question: 'Can I migrate my booking data from Acuity to Daisy?', answer: 'Yes. Daisy moves client records, appointment history and booking preferences across from Acuity, with the onboarding team handling the transition.' },
      { question: 'Does Acuity Scheduling support Arabic or work in the Gulf region?', answer: 'No. Acuity is a US product, owned by Squarespace, with no Arabic interface, no GCC compliance and no Middle Eastern payment methods. Daisy runs natively in Arabic and English with support built for the Gulf, live in Kuwait today.' },
      { question: 'Does Acuity have any AI features for my salon?', answer: 'No. There is no AI receptionist, no chatbot, no smart scheduling and no AI marketing. It is a straightforward scheduling tool. Daisy\'s 24/7 AI receptionist takes bookings, answers client questions and processes payments by itself.' },
      { question: 'Why do so many people use Acuity if it\'s not built for salons?', answer: 'Acuity holds a 4.8 rating across 5,600+ reviews because it is an excellent general scheduling tool: simple, reliable and cheap. Beauty businesses tend to outgrow it once they need POS, client management, staff scheduling and marketing. That trajectory is what Daisy was built for.' },
      { question: 'How does Acuity\'s Squarespace integration compare to what Daisy offers?', answer: 'The Squarespace integration embeds booking in your website, and that is all it does. Daisy brings marketplace visibility, an AI receptionist, POS, CRM and marketing, which is a good deal more than a booking widget.' },
      { question: 'Can Acuity help me attract new clients or just manage bookings?', answer: 'Acuity manages bookings and does nothing to find you customers: no marketplace, no cashback, nowhere to be discovered. Daisy includes a consumer marketplace, cashback rewards and AI-powered marketing to bring new clients in.' },
      { question: 'What support does Acuity offer for beauty business owners?', answer: 'Support is general email and a knowledge base, with no beauty-specific guidance and no account manager. Daisy provides onboarding built for beauty businesses, Arabic-speaking support staff and local GCC teams who understand how a salon runs.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 20. SimplyBook.me
  // ---------------------------------------------------------------------------
  'simplybook-me': {
    slug: 'simplybook-me',
    name: 'SimplyBook.me',
    website: 'https://simplybook.me',
    tier: 3,
    description: 'A generic booking platform built from 70+ add-on modules. Highly customizable, and it expects you to do the configuring. Nothing specific to beauty.',
    founded: '2013',
    headquarters: 'Limassol, Cyprus',

    features: {
      onlineBooking: 2, posAndPayments: 1, clientManagement: 1, staffManagement: 1,
      marketingAndCrm: 1, inventoryManagement: 0, reportingAndAnalytics: 1,
      marketplaceAndDiscovery: 1, aiCapabilities: 0, brandingAndWhiteLabel: 1,
    },

    pricing: {
      hasFreePlan: true,
      startingPrice: 'Free (paid from $8.25/mo)',
      startingPriceNumeric: 0,
      tiers: [
        { name: 'Free', price: 'Free', priceNumeric: 0, features: ['50 bookings/mo', 'Basic calendar', '1 provider'] },
        { name: 'Basic', price: '$8.25/mo', priceNumeric: 8.25, features: ['100 bookings/mo', '3 custom features', 'Email reminders'] },
        { name: 'Standard', price: '$24.90/mo', priceNumeric: 24.9, features: ['500 bookings/mo', '8 custom features', 'POS'] },
        { name: 'Premium', price: '$59.90/mo', priceNumeric: 59.9, features: ['Unlimited bookings', 'Unlimited features', 'Priority support'] },
      ],
      hiddenCosts: ['Features are add-on modules, costs accumulate', 'SMS costs extra'],
      pricingModel: 'usage-based',
      lastVerified: '2026-03-13',
    },

    reviews: [{ platform: 'Capterra', rating: 4.6, reviewCount: 1200 }],

    gccPresence: {
      hasArabicUI: true, arabicQuality: 'translated', gccCountries: ['UAE'],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI. Features arrive through a modular add-on system.',
    },

    daisyAdvantages: ['Beauty-specific vs generic booking', 'AI receptionist', 'Integrated platform vs modular add-ons', 'Native Arabic vs translated', 'Marketplace + cashback', 'GCC compliance'],
    daisySwitchingReasons: ['Need beauty-specific platform', 'Want AI features', 'Tired of managing add-on modules', 'Need native Arabic, not translated'],
    competitorStrengths: ['Very affordable', 'Highly customizable (70+ modules)', 'Free plan', 'Some Arabic support'],
    competitorWeaknesses: ['Not beauty-specific', 'Add-on complexity', 'No AI', 'Translated (not native) Arabic', 'No marketplace'],

    faq: [
      { question: 'How does SimplyBook.me compare to Daisy?', answer: 'SimplyBook.me is a generic booking tool assembled from modular add-ons. Daisy was built for beauty, with AI, a marketplace, cashback and native Arabic. SimplyBook\'s Arabic is translated; Daisy treats Arabic as an equal priority.' },
      { question: 'How much does SimplyBook.me actually cost with all the add-on modules?', answer: 'It starts free, or at $8.25/mo, and a beauty business then needs several add-on modules for POS, CRM and marketing, each adding to the bill. SMS reminders are charged on top. The total often passes what Daisy costs all-inclusive, with the AI and marketplace included.' },
      { question: 'Is SimplyBook.me\'s Arabic support good enough for GCC businesses?', answer: 'The Arabic is translated, and it reads that way, with awkward phrasing and little cultural feel. GCC compliance is minimal and there are no local payment methods. Daisy treats Arabic as equal to English, supports right-to-left properly, and meets GCC requirements across all six countries.' },
      { question: 'Can I migrate my data from SimplyBook.me to Daisy?', answer: 'Yes. Daisy moves client records, booking history and service configurations across, and handles the shift from a modular add-on system to an integrated platform.' },
      { question: 'Does SimplyBook.me have AI features?', answer: 'No. There is no AI receptionist, no chatbot, no smart scheduling and no AI marketing. Features arrive by picking modules yourself. Daisy\'s AI receptionist handles bookings, customer questions and payments 24/7.' },
      { question: 'Is managing 70+ add-on modules in SimplyBook.me complicated?', answer: 'Many users say so. Choosing among 70+ modules, configuring each one and keeping them compatible takes real time. On Daisy the beauty-specific features are already integrated and work together from the start.' },
      { question: 'Does SimplyBook.me have a marketplace to help me get new clients?', answer: 'There is a basic business directory, which is not the same thing as a consumer marketplace. Daisy includes a full one, with cashback rewards and discovery features that bring new customers to you.' },
      { question: 'How does SimplyBook.me\'s mobile app compare to Daisy?', answer: 'SimplyBook.me\'s app handles basic booking management. Daisy\'s covers the whole salon, with the AI receptionist, marketplace visibility, live analytics and native Arabic and English, built for beauty professionals.' },
      { question: 'What customer support does SimplyBook.me offer?', answer: 'Support comes by email and chat, backed by a knowledge base, in English with limited coverage in other languages. Daisy provides beauty industry support, Arabic-speaking representatives and local GCC teams.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 21. Setmore
  // ---------------------------------------------------------------------------
  setmore: {
    slug: 'setmore',
    name: 'Setmore',
    website: 'https://www.setmore.com',
    tier: 3,
    description: 'A free general-purpose scheduling tool with basic features and wide appeal. Nothing in it is specific to beauty.',
    founded: '2011',
    headquarters: 'Portland, OR, USA',

    features: {
      onlineBooking: 2, posAndPayments: 1, clientManagement: 1, staffManagement: 1,
      marketingAndCrm: 0, inventoryManagement: 0, reportingAndAnalytics: 1,
      marketplaceAndDiscovery: 0, aiCapabilities: 0, brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: true,
      startingPrice: 'Free (paid from $5/mo)',
      startingPriceNumeric: 0,
      tiers: [
        { name: 'Free', price: 'Free', priceNumeric: 0, features: ['Up to 4 staff', 'Online booking', 'Email reminders'] },
        { name: 'Pro', price: '$5/mo', priceNumeric: 5, perStaff: true, perStaffCost: '$5/user/mo', features: ['SMS reminders', 'Recurring appointments', 'Custom booking page'] },
        { name: 'Team', price: '$12/mo', priceNumeric: 12, perStaff: true, perStaffCost: '$12/user/mo', features: ['Everything in Pro', 'Payment processing', 'Advanced features'] },
      ],
      hiddenCosts: ['Per-user pricing scales', 'Very basic features'],
      pricingModel: 'per-staff',
      lastVerified: '2026-03-13',
    },

    reviews: [{ platform: 'Capterra', rating: 4.7, reviewCount: 900 }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI capabilities.',
    },

    daisyAdvantages: ['Complete beauty platform vs basic scheduling', 'AI receptionist', 'POS, CRM, marketing included', 'Arabic/GCC', 'Marketplace + cashback'],
    daisySwitchingReasons: ['Outgrowing basic scheduling', 'Need beauty-specific features', 'Want AI', 'Need Arabic/GCC'],
    competitorStrengths: ['Free plan with 4 staff', 'Simple and easy', 'Good reviews'],
    competitorWeaknesses: ['Very basic', 'Not beauty-specific', 'No AI', 'No POS/CRM', 'No Arabic/GCC', 'No marketplace'],

    faq: [
      { question: 'How does Setmore compare to Daisy?', answer: 'Setmore is a free basic scheduling tool. Daisy is a complete AI-powered platform for a beauty business. Setmore is fine to start on, and anyone who needs POS, CRM, AI, a marketplace or Arabic will outgrow it.' },
      { question: 'Is Setmore really free and what are the catch costs?', answer: 'The free plan covers up to 4 staff on basic scheduling, and paid plans run $5-12 per user per month, which mounts up across a bigger team. The real cost is what is absent: no POS, no CRM, no marketing, no AI, no marketplace. Most growing salons end up buying several paid tools to sit alongside it.' },
      { question: 'Can I migrate my client data from Setmore to Daisy?', answer: 'Yes. Daisy moves client contact details, appointment history and service preferences across from Setmore, with the onboarding team making sure nothing goes missing.' },
      { question: 'Does Setmore support Arabic or work in the Middle East?', answer: 'No. There is no Arabic interface, no GCC compliance and no Middle Eastern payment methods. It is a US generic scheduling tool. Daisy runs natively in Arabic and English with support built for the Gulf, live in Kuwait today.' },
      { question: 'Does Setmore have any AI features?', answer: 'No. There is no AI receptionist, no chatbot, no smart scheduling and no AI marketing. Daisy\'s 24/7 AI receptionist takes bookings, answers client questions and processes payments on its own.' },
      { question: 'When should I upgrade from Setmore to a platform like Daisy?', answer: 'When you start needing POS, client history, formula tracking, staff commissions or marketing tools, because Setmore has none of them. The same goes for wanting AI to pick up after-hours bookings or a marketplace to bring new clients in.' },
      { question: 'How does Setmore\'s mobile app compare to Daisy?', answer: 'Setmore\'s app views and manages appointments. Daisy\'s covers the whole salon: the AI receptionist, marketplace visibility, cashback tracking, live analytics and Arabic and English throughout.' },
      { question: 'Can Setmore help me grow my client base?', answer: 'No. Setmore schedules appointments. There is no marketplace, no cashback and no marketing automation. Daisy includes a consumer marketplace, a cashback program and AI-powered marketing to bring new customers in.' },
      { question: 'What customer support does Setmore provide compared to Daisy?', answer: 'Support is email and a help centre, with no phone line on free plans and nobody who knows the beauty industry. Daisy provides beauty industry support, Arabic-speaking representatives, dedicated onboarding and local GCC teams.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 22. BookB
  // ---------------------------------------------------------------------------
  bookb: {
    slug: 'bookb',
    name: 'BookB',
    website: 'https://www.bookb.app',
    tier: 3,
    description: 'A Dubai-only beauty booking app built around UAE compliance, with a small local marketplace for Dubai salons.',
    founded: '2020',
    headquarters: 'Dubai, UAE',

    features: {
      onlineBooking: 1, posAndPayments: 1, clientManagement: 1, staffManagement: 0,
      marketingAndCrm: 0, inventoryManagement: 0, reportingAndAnalytics: 0,
      marketplaceAndDiscovery: 1, aiCapabilities: 0, brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: 'Custom',
      tiers: [
        { name: 'Custom', price: 'Contact for pricing', features: ['Booking', 'Marketplace listing', 'Basic client management'] },
      ],
      hiddenCosts: ['Opaque pricing', 'Limited features'],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [],

    gccPresence: {
      hasArabicUI: true, arabicQuality: 'native', gccCountries: ['UAE'],
      localCompliance: true, localPaymentMethods: true, localSupport: true,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI capabilities.',
    },

    daisyAdvantages: ['Complete platform vs basic booking app', 'AI receptionist', 'All 6 GCC countries vs Dubai-only', 'Full business management suite', 'Cashback rewards', 'Marketing automation'],
    daisySwitchingReasons: ['Need full business management', 'Want AI', 'Expanding beyond Dubai', 'Need marketing tools'],
    competitorStrengths: ['Dubai local focus', 'UAE compliance', 'Arabic support', 'Local payments'],
    competitorWeaknesses: ['Very basic features', 'Dubai-only', 'No AI', 'No reviews', 'Tiny marketplace', 'No staff/inventory/reporting'],

    faq: [
      { question: 'How does BookB compare to Daisy?', answer: 'BookB is a basic booking app for Dubai. Daisy is a full platform with AI, complete business management, cashback and coverage across all 6 GCC countries.' },
      { question: 'What does BookB cost and is the pricing transparent?', answer: 'You have to contact BookB for pricing, because no plans are listed publicly, which makes comparing value difficult. Daisy publishes its pricing, includes the features and adds nothing later.' },
      { question: 'Can I switch from BookB to Daisy without losing my data?', answer: 'Yes. Daisy moves client records and booking history across. BookB holds relatively few data fields, so the migration is usually straightforward, and what you land in is a far more capable client management system.' },
      { question: 'Does BookB work outside of Dubai?', answer: 'No. BookB serves the Dubai market and nowhere else, so expanding into other emirates or GCC countries means changing platform. Daisy was built for the GCC, with a native Arabic and English interface and local payment methods, live in Kuwait today and expanding across the Gulf.' },
      { question: 'Does BookB have AI features like Daisy?', answer: 'No. There is no AI receptionist, no chatbot and no smart scheduling. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments by itself, in Arabic and English.' },
      { question: 'How does BookB\'s marketplace compare to Daisy\'s?', answer: 'BookB\'s marketplace is small and stops at Dubai. Daisy\'s runs across every GCC country, with cashback rewards, customer discovery and AI-powered recommendations behind it.' },
      { question: 'Does BookB offer staff management and business analytics?', answer: 'No. BookB books appointments. There is no staff management, no reporting, no analytics, no marketing and no inventory. Daisy covers staff scheduling, commissions, detailed analytics, marketing automation and inventory tracking.' },
      { question: 'How does BookB\'s mobile app compare to Daisy?', answer: 'BookB\'s app handles basic booking for the Dubai market. Daisy\'s covers the whole salon, with the AI receptionist, marketplace visibility across every GCC country, live analytics and full Arabic and English support.' },
      { question: 'What support does BookB offer compared to Daisy?', answer: 'BookB is a small startup with limited support resources, all pointed at Dubai. Daisy supports customers across every GCC country, with dedicated onboarding, Arabic-speaking representatives and a team that has seen beauty businesses operate at scale.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 23. Belliata
  // ---------------------------------------------------------------------------
  belliata: {
    slug: 'belliata',
    name: 'Belliata',
    website: 'https://www.belliata.com',
    tier: 3,
    description: 'A beauty consumer marketplace with some SaaS features attached, available in the UAE and a handful of international markets.',
    founded: '2017',
    headquarters: 'Dubai, UAE',

    features: {
      onlineBooking: 2, posAndPayments: 1, clientManagement: 1, staffManagement: 1,
      marketingAndCrm: 1, inventoryManagement: 0, reportingAndAnalytics: 1,
      marketplaceAndDiscovery: 2, aiCapabilities: 0, brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: true,
      startingPrice: 'Free (paid from ~$20/mo)',
      startingPriceNumeric: 0,
      tiers: [
        { name: 'Free', price: 'Free', priceNumeric: 0, features: ['Basic booking', 'Marketplace listing'] },
        { name: 'Pro', price: '~$20/mo', priceNumeric: 20, features: ['Full booking', 'Client management', 'Staff scheduling', 'Reporting'] },
      ],
      hiddenCosts: ['Marketplace commission on bookings'],
      pricingModel: 'hybrid',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'App Store', rating: 4.5, reviewCount: 2000 },
    ],

    gccPresence: {
      hasArabicUI: true, arabicQuality: 'translated', gccCountries: ['UAE'],
      localCompliance: true, localPaymentMethods: true, localSupport: true,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI capabilities.',
    },

    daisyAdvantages: ['AI receptionist', 'Complete platform vs basic marketplace', 'All 6 GCC countries vs UAE-only', 'Native Arabic vs translated', 'Full business management', 'Cashback rewards'],
    daisySwitchingReasons: ['Need full business management beyond marketplace', 'Want AI', 'Expanding beyond UAE', 'Need native Arabic'],
    competitorStrengths: ['UAE marketplace presence', 'Free tier', 'Arabic support (translated)', 'Local payments'],
    competitorWeaknesses: ['Basic features', 'Translated not native Arabic', 'UAE-only', 'No AI', 'Marketplace commission', 'Limited management tools'],

    faq: [
      { question: 'How does Belliata compare to Daisy?', answer: 'Belliata is a UAE marketplace with basic management features bolted on. Daisy brings an AI receptionist, complete business management, native Arabic, cashback rewards and coverage across all 6 GCC countries.' },
      { question: 'Does Belliata charge commission on bookings like other marketplaces?', answer: 'Yes. Belliata runs a marketplace model and takes commission on bookings made through it. There is a free tier, but marketplace bookings still carry fees. Daisy charges a flat subscription and no commission, so the booking revenue stays with you.' },
      { question: 'Can I migrate my client data from Belliata to Daisy?', answer: 'Yes. Daisy moves client records, booking history and service preferences across, with the onboarding team handling the transition.' },
      { question: 'Is Belliata\'s Arabic support good enough for my salon?', answer: 'Belliata\'s Arabic is translated, and it reads that way, unnatural in places and awkwardly phrased in others. Daisy treats Arabic as equal to English, written and reviewed by Arabic speakers on the team, with right-to-left layout done properly and language that fits the region.' },
      { question: 'Does Belliata have AI features?', answer: 'No. There is no AI receptionist, no chatbot and no smart scheduling. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments on its own, in Arabic and English.' },
      { question: 'Does Belliata work outside the UAE?', answer: 'Belliata concentrates on the UAE, with some presence elsewhere. Daisy was built for the GCC, with a native Arabic and English interface and local payment methods, live in Kuwait today and expanding across the Gulf.' },
      { question: 'How does Belliata\'s marketplace compare to Daisy\'s?', answer: 'Belliata\'s marketplace covers the UAE with basic salon listings. Daisy\'s runs across every GCC country and adds cashback rewards, AI-powered recommendations, customer reviews and discovery features that push clients towards your salon.' },
      { question: 'Does Belliata offer full salon management or just booking?', answer: 'The management side is thin: basic client management and staff scheduling on the Pro plan, with no advanced reporting, no marketing automation and no inventory tracking. Daisy covers salon management properly, with AI, advanced analytics, marketing tools and the rest of the operation.' },
      { question: 'How does Belliata\'s app compare to Daisy for salon owners?', answer: 'Belliata\'s app, rated 4.5 on the App Store, is built around marketplace bookings. Daisy\'s covers the whole salon: the AI receptionist, marketplace visibility across the GCC, cashback tracking, live analytics and native Arabic and English.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 24. Sparkalz
  // ---------------------------------------------------------------------------
  sparkalz: {
    slug: 'sparkalz',
    name: 'Sparkalz',
    website: 'https://www.sparkalz.com',
    tier: 3,
    description: 'A Dubai salon POS and management system, offering basic booking and point-of-sale to local salons.',
    founded: '2019',
    headquarters: 'Dubai, UAE',

    features: {
      onlineBooking: 1, posAndPayments: 2, clientManagement: 1, staffManagement: 1,
      marketingAndCrm: 0, inventoryManagement: 1, reportingAndAnalytics: 1,
      marketplaceAndDiscovery: 0, aiCapabilities: 0, brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: 'Custom',
      tiers: [
        { name: 'Custom', price: 'Contact for pricing', features: ['POS', 'Basic booking', 'Inventory', 'Client management'] },
      ],
      hiddenCosts: ['Hardware costs', 'Opaque pricing'],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [],

    gccPresence: {
      hasArabicUI: true, arabicQuality: 'native', gccCountries: ['UAE'],
      localCompliance: true, localPaymentMethods: true, localSupport: true,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI capabilities.',
    },

    daisyAdvantages: ['AI receptionist', 'Complete platform', 'All 6 GCC countries', 'Marketplace + cashback', 'Marketing automation', 'Advanced reporting'],
    daisySwitchingReasons: ['Need more than POS', 'Want AI', 'Expanding beyond Dubai', 'Need marketplace and marketing'],
    competitorStrengths: ['Dubai local expertise', 'Good POS', 'Arabic support', 'UAE compliance'],
    competitorWeaknesses: ['Very limited features', 'Dubai-only', 'No AI', 'No marketplace', 'No marketing', 'No reviews', 'Opaque pricing'],

    faq: [
      { question: 'How does Sparkalz compare to Daisy?', answer: 'Sparkalz is a Dubai salon POS system with a basic feature set. Daisy is a complete AI-powered platform with a marketplace, cashback, marketing and coverage across the GCC.' },
      { question: 'What does Sparkalz cost and why isn\'t pricing listed publicly?', answer: 'Pricing comes only by contacting them, and POS terminals may add hardware costs on top. With nothing published, comparison is difficult. Daisy publishes its pricing, needs no hardware and includes the features.' },
      { question: 'Can I move my salon data from Sparkalz to Daisy?', answer: 'Yes. Daisy moves client records, transaction history and inventory data across, and the onboarding team handles the step up from a POS-centred setup to a full platform.' },
      { question: 'Does Sparkalz work outside of Dubai?', answer: 'No. Sparkalz serves Dubai and nowhere else, so a salon expanding into other emirates or GCC countries needs something different. Daisy was built for the GCC, with a native Arabic and English interface and local payment methods, live in Kuwait today and expanding across the Gulf.' },
      { question: 'Does Sparkalz have AI features?', answer: 'No. There is no AI receptionist, no chatbot and no smart scheduling. Daisy\'s 24/7 AI receptionist takes bookings, answers queries and processes payments by itself, in Arabic and English.' },
      { question: 'Is Sparkalz more than just a POS system for salons?', answer: 'Sparkalz is point-of-sale and basic booking. There are no marketing tools, no advanced reporting, no customer marketplace and no staff management. Daisy covers POS, booking, CRM, marketing, AI, analytics and customer acquisition.' },
      { question: 'How does Sparkalz\'s mobile app compare to Daisy?', answer: 'On mobile, Sparkalz handles POS transactions and basic booking. Daisy\'s app covers the whole salon, with the AI receptionist, marketplace visibility across the GCC, live analytics, marketing tools and native Arabic and English.' },
      { question: 'Can Sparkalz help me get new customers?', answer: 'No. Sparkalz is a POS tool built for operations, with no marketplace, no cashback and no marketing automation. Daisy includes a consumer marketplace, cashback rewards and AI-powered marketing to bring new clients to the salon.' },
      { question: 'What customer support does Sparkalz offer?', answer: 'Sparkalz is a small Dubai company with limited support resources. Daisy supports customers across every GCC country, with dedicated onboarding, Arabic-speaking representatives and a team that knows the beauty industry well.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 25. SQUIRE
  // ---------------------------------------------------------------------------
  squire: {
    slug: 'squire',
    name: 'SQUIRE',
    website: 'https://www.getsquire.com',
    tier: 3,
    description: 'A management platform built for barbershops, with POS and a marketplace, and aimed at that vertical alone.',
    founded: '2015',
    headquarters: 'New York, NY, USA',
    funding: '$165M+',

    features: {
      onlineBooking: 2, posAndPayments: 2, clientManagement: 2, staffManagement: 2,
      marketingAndCrm: 1, inventoryManagement: 0, reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 2, aiCapabilities: 0, brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '$30/mo',
      startingPriceNumeric: 30,
      tiers: [
        { name: 'Standard', price: '$30/mo', priceNumeric: 30, perStaff: true, perStaffCost: '+$15-25/barber', features: ['Booking', 'POS', 'Client management', 'Marketplace'] },
      ],
      transactionFees: '2.6% + $0.10 per transaction',
      hiddenCosts: ['Per-barber pricing', 'Payment processing fees'],
      pricingModel: 'per-staff',
      lastVerified: '2026-03-13',
    },

    reviews: [{ platform: 'Capterra', rating: 4.3, reviewCount: 100 }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI capabilities.',
    },

    daisyAdvantages: ['Broader beauty/wellness coverage vs barbershop-only', 'AI receptionist', 'Arabic/GCC support', 'Cashback rewards', 'Flat pricing vs per-barber'],
    daisySwitchingReasons: ['Expanding beyond barbershop services', 'Want AI', 'Need Arabic/GCC', 'Per-barber pricing expensive'],
    competitorStrengths: ['Deep barbershop expertise', 'Good marketplace', 'Well-funded ($165M)', 'Strong in US barbershop market'],
    competitorWeaknesses: ['Barbershop-only', 'No AI', 'US-only', 'No Arabic/GCC', 'Per-barber pricing'],

    faq: [
      { question: 'How does SQUIRE compare to Daisy?', answer: 'SQUIRE is built for US barbershops specifically. Daisy serves the wider beauty and wellness industry, with AI, a marketplace, cashback and Arabic and GCC support that SQUIRE does not have.' },
      { question: 'How much does SQUIRE actually cost with per-barber pricing?', answer: 'SQUIRE charges a $30/mo base plus $15-25 for each barber, so a shop with 8 barbers lands at $150-230/mo, before 2.6% + $0.10 on every transaction. Daisy charges flat, with nothing per member of staff, so hiring does not raise the bill.' },
      { question: 'Can I switch from SQUIRE to Daisy and keep my client data?', answer: 'Yes. Daisy moves client profiles, appointment history and booking preferences across from SQUIRE, with the onboarding team handling it so no client relationship is lost.' },
      { question: 'Does SQUIRE work for salons and spas, not just barbershops?', answer: 'No. SQUIRE was built for barbershops alone and lacks what salons, spas and wellness businesses need: advanced service menus, treatment tracking and beauty-specific workflows. Daisy covers the whole spectrum, from salons and spas to barbershops and clinics.' },
      { question: 'Does SQUIRE support Arabic or work in the GCC?', answer: 'No. SQUIRE is a US platform, with no Arabic interface, no GCC compliance and no Middle Eastern payment methods. Daisy runs natively in Arabic and English with support built for the Gulf, live in Kuwait today.' },
      { question: 'Does SQUIRE have AI features like Daisy?', answer: 'No. There is no AI receptionist, no chatbot and no smart scheduling. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments in Arabic and English.' },
      { question: 'How does SQUIRE\'s marketplace compare to Daisy\'s?', answer: 'SQUIRE\'s marketplace covers barbershops in the US and nothing else. Daisy\'s spans the whole beauty and wellness industry across every GCC country, with cashback rewards and AI-powered recommendations behind the discovery.' },
      { question: 'Is SQUIRE good for a barbershop that also offers other services?', answer: 'SQUIRE is tuned for traditional barbershop services. Add salon services, facials or spa treatments and that narrow focus starts to get in the way. Daisy handles every beauty and wellness service type in one platform.' },
      { question: 'How does SQUIRE\'s mobile app compare to Daisy?', answer: 'SQUIRE\'s app is well designed for running a barbershop. Daisy\'s reaches across the wider beauty business, with the AI receptionist, marketplace visibility throughout the GCC, cashback tracking and Arabic and English support.' },
      { question: 'What customer support does SQUIRE offer compared to Daisy?', answer: 'SQUIRE supports US barbershop operations. Daisy provides multi-channel support with expertise across every beauty vertical, Arabic-speaking representatives and dedicated GCC teams.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 26. Salonist
  // ---------------------------------------------------------------------------
  salonist: {
    slug: 'salonist',
    name: 'Salonist',
    website: 'https://www.salonist.io',
    tier: 3,
    description: 'Budget salon management out of India, offering basic features cheaply, with some GCC and international presence.',
    founded: '2017',
    headquarters: 'New Delhi, India',

    features: {
      onlineBooking: 2, posAndPayments: 1, clientManagement: 1, staffManagement: 1,
      marketingAndCrm: 1, inventoryManagement: 1, reportingAndAnalytics: 1,
      marketplaceAndDiscovery: 0, aiCapabilities: 0, brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '~$25/mo',
      startingPriceNumeric: 25,
      tiers: [
        { name: 'Basic', price: '~$25/mo', priceNumeric: 25, features: ['Booking', 'Client management', 'Staff scheduling', 'Basic reporting', 'Inventory'] },
      ],
      hiddenCosts: ['Limited advanced features', 'Basic support'],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [{ platform: 'Capterra', rating: 4.3, reviewCount: 100 }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: ['UAE'],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI capabilities.',
    },

    daisyAdvantages: ['AI-powered platform', 'Native Arabic', 'Marketplace + cashback', 'Full GCC compliance', 'Advanced features across all categories'],
    daisySwitchingReasons: ['Need AI capabilities', 'Need Arabic support', 'Want marketplace for customer acquisition', 'Need deeper features'],
    competitorStrengths: ['Very affordable ($25/mo)', 'Basic features covered', 'Some GCC presence'],
    competitorWeaknesses: ['Basic features only', 'No AI', 'No Arabic', 'No marketplace', 'Limited GCC support', 'Small company'],

    faq: [
      { question: 'How does Salonist compare to Daisy?', answer: 'Salonist is a budget tool at $25/mo with basic features. Daisy adds an AI receptionist, a marketplace, cashback, native Arabic and management deep enough to grow a business on.' },
      { question: 'Is Salonist really as affordable as it looks at $25 a month?', answer: 'The $25/mo price is genuinely low, and what it buys is basic. No advanced analytics, no AI, no marketplace and thin marketing. Most businesses end up buying other tools, which is where the saving goes. Daisy holds all of it in one platform.' },
      { question: 'Can I migrate my data from Salonist to Daisy?', answer: 'Yes. Daisy moves client records, appointment history and inventory data across, with the onboarding team making sure nothing is lost.' },
      { question: 'Does Salonist support Arabic for my salon?', answer: 'No. Salonist has some GCC presence in the UAE and still no Arabic interface. Daisy treats Arabic as equal to English, supports right-to-left layout properly, and reads as though it was written for the region.' },
      { question: 'Does Salonist have any AI features?', answer: 'No. There is no AI receptionist, no chatbot, no smart scheduling and no AI marketing. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments in Arabic and English.' },
      { question: 'Is Salonist reliable enough for a growing beauty business?', answer: 'Salonist is a smaller Indian company with few reviews to judge it by. A growing business tends to run past both the feature set and the support. Daisy is built to scale, with AI, a marketplace and management tools that keep up.' },
      { question: 'Does Salonist have a marketplace or customer acquisition tools?', answer: 'No. There is no marketplace, no cashback and nowhere for a client to discover you. It runs your operations, nothing more. Daisy pairs the operations with acquisition, through the marketplace, cashback rewards and AI-powered marketing.' },
      { question: 'How does Salonist\'s mobile app compare to Daisy?', answer: 'Salonist\'s app handles appointments and client management. Daisy\'s covers the whole salon, with the AI receptionist, marketplace visibility, cashback tracking, live analytics and native Arabic and English.' },
      { question: 'What customer support does Salonist offer?', answer: 'Support is basic email, mostly on Indian business hours, with no beauty industry expertise and nothing local to the GCC. Daisy provides multi-channel support with Arabic-speaking representatives, dedicated onboarding and local GCC teams.' },
    ],

    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 27. Pabau
  // ---------------------------------------------------------------------------
  pabau: {
    slug: 'pabau',
    name: 'Pabau',
    website: 'https://www.pabau.com',
    tier: 3,
    description: 'UK practice management built for med spas and clinical work, strong on client records and forms, with AI features for clinical workflows starting to appear.',
    founded: '2012',
    headquarters: 'London, UK',

    features: {
      onlineBooking: 2, posAndPayments: 2, clientManagement: 3, staffManagement: 2,
      marketingAndCrm: 2, inventoryManagement: 1, reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 0, aiCapabilities: 1, brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '~$49/mo per user',
      startingPriceNumeric: 49,
      tiers: [
        { name: 'Standard', price: '~$49/mo', priceNumeric: 49, perStaff: true, perStaffCost: '$49/user/mo', features: ['Booking', 'Client records', 'Forms & consents', 'POS', 'Marketing', 'Reporting'] },
      ],
      hiddenCosts: ['Per-user pricing scales with team', 'Payment processing fees'],
      pricingModel: 'per-staff',
      lastVerified: '2026-03-13',
    },

    reviews: [{ platform: 'Capterra', rating: 4.6, reviewCount: 500 }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'Basic automation across clinical workflows. No real AI receptionist, chatbot or smart scheduling.',
    },

    daisyAdvantages: ['Full AI ecosystem vs basic automation', 'Arabic/GCC support', 'Marketplace + cashback', 'Flat pricing vs per-user', 'Broader beauty/wellness vs clinical-only'],
    daisySwitchingReasons: ['Per-user pricing expensive for teams', 'Need Arabic/GCC', 'Want AI receptionist', 'Want marketplace'],
    competitorStrengths: ['Excellent clinical records and forms', 'Strong consent management', 'Good CRM', 'Established in UK med spa market'],
    competitorWeaknesses: ['UK-focused', 'Per-user pricing', 'No AI', 'No marketplace', 'No Arabic/GCC', 'Clinical-focused not beauty-broad'],

    faq: [
      { question: 'How does Pabau compare to Daisy?', answer: 'In the UK market, Pabau is very good at clinical and med spa records and consent forms. Daisy brings an AI receptionist, a marketplace, cashback, Arabic support and GCC compliance, across the wider beauty and wellness industry.' },
      { question: 'How expensive does Pabau get with per-user pricing?', answer: 'Pabau charges roughly $49/mo per user, so a med spa with 10 practitioners pays around $490/mo, before payment processing fees. Daisy charges flat regardless of team size, which keeps the bill predictable as you grow.' },
      { question: 'Can I migrate my clinic data from Pabau to Daisy?', answer: 'Yes. Daisy moves client records, treatment history, consent forms and appointment data across from Pabau, with the onboarding team handling it for clinical and beauty businesses alike.' },
      { question: 'Does Pabau support Arabic or work in the Middle East?', answer: 'No. Pabau serves the UK, with no Arabic interface, no GCC compliance and no Middle Eastern payment methods. Daisy runs natively in Arabic and English with support built for the Gulf, live in Kuwait today, including local clinical and beauty regulations.' },
      { question: 'Does Pabau have AI features like an AI receptionist?', answer: 'Pabau automates clinical workflows, and none of it is really AI: no receptionist, no chatbot, no smart scheduling. Daisy\'s 24/7 AI receptionist takes bookings, answers patient and client questions, and processes payments on its own.' },
      { question: 'Is Pabau only for med spas or can salons use it too?', answer: 'Pabau was designed for clinical and med spa environments, and consent forms, treatment records and clinical workflows are where it is strongest. A regular salon or spa will find it clinical in tone and short on beauty-specific features. Daisy covers the full spectrum, salons through spas to clinics.' },
      { question: 'Does Pabau have a marketplace to help attract new clients?', answer: 'No. There is no consumer marketplace, nothing for discovery and no cashback. Daisy includes a consumer marketplace, cashback rewards and AI-powered marketing to bring new patients and clients in.' },
      { question: 'How does Pabau\'s mobile app compare to Daisy?', answer: 'Pabau\'s app centres on clinical records and consent forms. Daisy\'s covers the whole business, with the AI receptionist, marketplace visibility, cashback tracking, live analytics and Arabic and English throughout.' },
      { question: 'What customer support does Pabau offer compared to Daisy?', answer: 'Pabau supports you from the UK, on UK business hours, from people who understand clinical workflows. Daisy provides multi-channel support covering both beauty and clinical work, with Arabic-speaking representatives and dedicated GCC teams.' },
    ],

    lastResearched: '2026-03-13',
  },
};

// ---------------------------------------------------------------------------
// I18n-wrapped export — lazily resolved to avoid circular import
// ---------------------------------------------------------------------------

export function getTier3CompetitorsI18n(): I18nContent<Record<string, CompetitorData>> {
  const { tier3CompetitorsAr } = require('./tier3Data.ar') as { tier3CompetitorsAr: Record<string, CompetitorData> };
  return { en: tier3Competitors, ar: tier3CompetitorsAr };
}
