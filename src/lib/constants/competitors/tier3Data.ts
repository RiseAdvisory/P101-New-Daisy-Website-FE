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
      'Payment-first booking solution from Square (Block, Inc.). Leverages Square\'s POS ecosystem. Free plan available for individuals.',
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
      aiDescription: 'No AI capabilities. Standard automated reminders only.',
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
      { question: 'How does Square Appointments compare to Daisy?', answer: 'Square Appointments is a general-purpose scheduling add-on to Square\'s POS, while Daisy is purpose-built for beauty/wellness with AI receptionist, marketplace, cashback, and Arabic support. Square excels at payments but lacks beauty-specific management, AI, and customer acquisition tools.' },
      { question: 'Is Square Appointments free?', answer: 'Square Appointments is free for individual users, but paid plans start at $29/mo for multiple staff. You\'ll also pay 2.6% + $0.10 per transaction on all Square payments.' },
      { question: 'What are the hidden costs of using Square Appointments for a salon?', answer: 'Beyond the subscription fee, Square charges 2.6% + $0.10 on every transaction processed through their POS. You may also need to purchase Square hardware for in-person payments, and since Square lacks beauty-specific features like client history, formulas, or service menus, many salons end up paying for additional third-party tools.' },
      { question: 'Can I migrate my client data from Square Appointments to Daisy?', answer: 'Yes. Daisy provides guided data migration support to help you transfer client records, appointment history, and contact information from Square Appointments. Our onboarding team ensures a smooth transition so you don\'t lose any client relationships.' },
      { question: 'Does Square Appointments work in Arabic or support GCC countries?', answer: 'No. Square Appointments does not offer an Arabic interface and has no presence in GCC countries. It doesn\'t support local payment methods like mada, Apple Pay (MENA), or Knet. Daisy provides native Arabic/English with full GCC compliance across all six countries.' },
      { question: 'Does Square Appointments have AI features like an AI receptionist?', answer: 'No. Square Appointments has no AI capabilities, no AI receptionist, no smart scheduling, and no AI-powered marketing. Daisy\'s 24/7 AI receptionist handles bookings, answers customer questions, and processes payments even when your salon is closed.' },
      { question: 'Is Square Appointments good enough for a multi-location beauty business?', answer: 'Square Appointments supports multiple locations on the Premium plan ($69/mo), but it remains a general scheduling tool without beauty-specific features like service menus, formula tracking, or stylist portfolios. Daisy is built specifically for multi-location beauty businesses with centralized management, AI, and a customer marketplace.' },
      { question: 'How does Square Appointments mobile app compare to Daisy?', answer: 'Square\'s mobile app is focused on payments and basic scheduling. Daisy\'s mobile app offers full salon management, AI receptionist access, real-time analytics, client communication, and marketplace visibility, all designed specifically for beauty professionals on the go.' },
      { question: 'What kind of customer support does Square Appointments offer?', answer: 'Square provides general support via email, phone, and community forums, but there is no dedicated beauty industry support team. Daisy offers specialized onboarding and support from a team that understands salon and spa operations, plus local GCC support in Arabic and English.' },
      { question: 'Can Square Appointments help me get new clients like Daisy can?', answer: 'No. Square Appointments is purely an operations tool, it doesn\'t include any customer acquisition features. Daisy combines a consumer marketplace, cashback rewards, and AI-powered marketing to actively drive new clients to your business.' },
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
      'Premium, modern salon and spa software known for clean design and automation. Highly rated on Capterra (4.9/5). Focuses on established salons and spas.',
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
      aiDescription: 'Smart automations for workflows but no true AI features (no receptionist, chatbot, or AI marketing).',
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
      { question: 'How does Mangomint compare to Daisy?', answer: 'Mangomint is a premium ($165-375/mo) US-focused salon software with beautiful design and strong automations. Daisy offers AI receptionist, marketplace, cashback, and Arabic support at more accessible pricing. Mangomint excels at operations; Daisy excels at growth.' },
      { question: 'Why is Mangomint so expensive compared to other salon software?', answer: 'Mangomint positions itself as a premium product with a clean interface and strong automations, starting at $165/mo and going up to $375/mo. While the design is excellent, it lacks AI features, a customer marketplace, and any Arabic or GCC support. Daisy offers more advanced capabilities including AI receptionist and customer acquisition tools at more accessible pricing.' },
      { question: 'Can I switch from Mangomint to Daisy without losing my data?', answer: 'Yes. Daisy offers full data migration support to transfer your client records, appointment history, staff schedules, and service menus from Mangomint. Our team handles the transition so your business experiences zero downtime.' },
      { question: 'Does Mangomint support Arabic or work in the Middle East?', answer: 'No. Mangomint is exclusively focused on the US market with an English-only interface. It has no Arabic support, no GCC compliance, and no local payment method integration. Daisy provides native Arabic and English with full compliance across all six GCC countries.' },
      { question: 'Does Mangomint have an AI receptionist or AI features?', answer: 'No. Mangomint offers smart workflow automations but no true AI capabilities, no AI receptionist, no AI chatbot, no AI-powered marketing. Daisy\'s 24/7 AI receptionist can handle bookings, answer questions, and process payments automatically.' },
      { question: 'Is Mangomint worth $375 a month for my salon?', answer: 'Mangomint\'s Unlimited plan at $375/mo provides excellent operations tools, but it doesn\'t include customer acquisition features, AI, or marketplace visibility. For salons looking to grow (not just operate), Daisy\'s AI-powered platform with marketplace and cashback often delivers better ROI at a more accessible price point.' },
      { question: 'How does Mangomint\'s mobile app compare to Daisy?', answer: 'Mangomint has a well-designed mobile app focused on scheduling and operations. Daisy\'s mobile app adds AI receptionist access, marketplace visibility, real-time customer acquisition analytics, and multilingual Arabic/English support, going beyond operations to drive business growth.' },
      { question: 'What integrations does Mangomint offer compared to Daisy?', answer: 'Mangomint integrates with payment processors and some third-party tools, with API access on the Unlimited plan ($375/mo). Daisy provides built-in integrations for payments, marketing, CRM, and customer acquisition in a single platform, plus GCC-specific payment methods like mada and Knet.' },
      { question: 'Does Mangomint help me get new customers or just manage existing ones?', answer: 'Mangomint is focused on managing existing clients and operations. It has no marketplace, no customer discovery features, and no cashback rewards. Daisy includes a consumer marketplace, cashback program, and AI-powered marketing to actively drive new customers to your business.' },
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
      'Loyalty and retention-focused salon software. Strong in UK/Ireland market. Comprehensive marketing and CRM features.',
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
      aiDescription: 'Basic AI-assisted marketing campaign suggestions. No receptionist, chatbot, or smart scheduling.',
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
      { question: 'How does Phorest compare to Daisy?', answer: 'Phorest excels at CRM and loyalty in the UK/Ireland market. Daisy offers AI receptionist, marketplace, cashback, and Arabic/GCC support that Phorest lacks. Phorest is retention-focused; Daisy covers both acquisition and retention.' },
      { question: 'Is Phorest pricing transparent or are there hidden fees?', answer: 'Phorest\'s starter plan is around $99/mo, but higher tiers require custom quotes with opaque pricing. Additional costs include SMS charges and payment processing fees. Daisy offers transparent flat pricing with no per-message or hidden fees.' },
      { question: 'Can I move my client database from Phorest to Daisy?', answer: 'Yes. Daisy provides dedicated data migration support for Phorest users, transferring client records, loyalty points history, appointment data, and marketing preferences. Our onboarding team ensures a seamless transition.' },
      { question: 'Does Phorest work in Arabic or support salons in the GCC?', answer: 'No. Phorest is focused on the UK and Ireland market with an English-only interface. It has no Arabic support, no GCC compliance, and no local Middle Eastern payment methods. Daisy provides native Arabic/English with full GCC compliance across all six countries.' },
      { question: 'Does Phorest have AI features like Daisy?', answer: 'Phorest has basic AI-assisted marketing campaign suggestions, but no AI receptionist, no AI chatbot, and no smart scheduling. Daisy offers a complete AI ecosystem including a 24/7 AI receptionist that handles bookings and customer inquiries automatically.' },
      { question: 'How does Phorest\'s loyalty program compare to Daisy\'s cashback?', answer: 'Phorest uses a traditional loyalty points system that only retains existing clients. Daisy\'s cashback rewards program both retains existing clients and attracts new ones through the consumer marketplace, combining retention and acquisition in one system.' },
      { question: 'Is Phorest good for salons outside the UK and Ireland?', answer: 'Phorest has expanded somewhat beyond UK/Ireland, but its core expertise and support remain focused there. It has no presence in the Middle East, no Arabic support, and no GCC-specific features. Daisy is built for global reach with particular strength in GCC markets.' },
      { question: 'How does Phorest\'s mobile app compare to Daisy?', answer: 'Phorest offers a mobile app focused on CRM and marketing management. Daisy\'s mobile app goes further with AI receptionist access, marketplace visibility, cashback tracking, and full multilingual Arabic/English support for both salon owners and their clients.' },
      { question: 'What customer support does Phorest offer compared to Daisy?', answer: 'Phorest provides dedicated account managers for higher-tier plans with UK/Ireland business hours support. Daisy offers specialized beauty industry support with local GCC support teams, Arabic-speaking representatives, and onboarding assistance tailored to the Middle East market.' },
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
    description: 'Per-staff pricing model salon software from New Zealand. Strong in NZ/Australia/UK markets. Clean, modern interface.',
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
      { question: 'How does Timely compare to Daisy?', answer: 'Timely is a clean, modern platform popular in NZ/Australia/UK with per-staff pricing. Daisy offers AI, marketplace, cashback, flat pricing, and Arabic/GCC support that Timely lacks.' },
      { question: 'How expensive does Timely get as I add more staff?', answer: 'Timely uses per-staff pricing that escalates quickly. On the Innovate plan, you pay $50/mo base plus $15 per staff member. A salon with 10 stylists would pay $200/mo. Daisy offers flat pricing that doesn\'t penalize you for growing your team.' },
      { question: 'Are there hidden fees with Timely beyond the subscription?', answer: 'Yes. Beyond the per-staff subscription, Timely charges separately for SMS reminders and payment processing. These costs add up, especially for busy salons. Daisy includes notifications and integrated payment processing in its flat pricing.' },
      { question: 'Can I transfer my data from Timely to Daisy?', answer: 'Yes. Daisy provides full data migration support for Timely users, including client records, appointment history, staff schedules, and service configurations. Our onboarding team handles the entire process to ensure a smooth switch.' },
      { question: 'Does Timely support Arabic or work in the Middle East?', answer: 'No. Timely is focused on New Zealand, Australia, and the UK. It has no Arabic interface, no GCC compliance, and no local payment methods for the Middle East. Daisy provides native Arabic/English support with full compliance across all six GCC countries.' },
      { question: 'Does Timely have any AI features?', answer: 'No. Timely has no AI capabilities, no AI receptionist, no chatbot, no smart scheduling, and no AI-powered marketing. Daisy\'s AI receptionist works 24/7 to handle bookings, answer client questions, and process payments automatically.' },
      { question: 'How does Timely\'s mobile app compare to Daisy?', answer: 'Timely has a well-designed mobile app for scheduling and staff management. Daisy\'s mobile app adds AI receptionist access, marketplace visibility, cashback management, real-time business analytics, and full multilingual Arabic/English support.' },
      { question: 'Can Timely help me attract new clients to my salon?', answer: 'No. Timely is an operations tool with no customer acquisition features, no marketplace, no cashback rewards, and no customer discovery platform. Daisy includes a consumer marketplace, cashback program, and AI-powered marketing to actively bring new customers to your business.' },
      { question: 'What kind of customer support does Timely provide?', answer: 'Timely offers email-based support and an online help center. They don\'t provide phone support or dedicated account managers. Daisy offers multi-channel support including dedicated onboarding, Arabic-speaking support staff, and local GCC support teams.' },
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
    description: 'Established US salon/spa management platform. No contracts policy. Comprehensive feature set for mid-market salons.',
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
      aiDescription: 'No AI capabilities. Traditional salon software.',
    },

    daisyAdvantages: ['AI-powered platform vs traditional software', 'Arabic/GCC vs US-only', 'Marketplace + cashback', 'Modern tech stack'],
    daisySwitchingReasons: ['Want AI capabilities', 'Need Arabic/GCC support', 'Want customer acquisition tools', 'Want modern platform'],
    competitorStrengths: ['No contracts', 'Comprehensive feature set', 'Established brand', 'Good inventory management'],
    competitorWeaknesses: ['No AI', 'US-only', 'Dated interface', 'No marketplace', 'No Arabic/GCC'],

    faq: [
      { question: 'How does Meevo compare to Daisy?', answer: 'Meevo is an established US salon platform with solid features but no AI, marketplace, or international support. Daisy offers AI receptionist, marketplace, cashback, and Arabic/GCC compliance on a modern platform.' },
      { question: 'What are the hidden costs with Meevo beyond the $139 monthly subscription?', answer: 'Meevo charges extra for hardware (POS terminals, card readers) and add-on features that aren\'t included in the base plan. Setup fees and training costs may also apply. Daisy offers transparent pricing with no hardware requirements and all features included.' },
      { question: 'Can I move my salon data from Meevo to Daisy?', answer: 'Yes. Daisy provides comprehensive data migration from Meevo, including client profiles, appointment history, product inventory, staff records, and financial data. Our onboarding team handles the full transition.' },
      { question: 'Does Meevo support Arabic or have any presence in the Middle East?', answer: 'No. Meevo is exclusively a US-focused platform with no Arabic interface, no GCC compliance, and no Middle Eastern payment methods. Daisy provides native Arabic/English support with full compliance across all six GCC countries.' },
      { question: 'Does Meevo have AI features like an AI receptionist?', answer: 'No. Meevo is traditional salon software with no AI capabilities, no AI receptionist, no chatbot, no smart scheduling. Daisy\'s 24/7 AI receptionist handles bookings, answers customer questions, and processes payments even outside business hours.' },
      { question: 'Is Meevo\'s interface modern or does it feel outdated?', answer: 'Meevo was founded in 2006 and while it has been updated over the years, many users note the interface feels dated compared to newer platforms. Daisy is built on a modern tech stack with a clean, intuitive interface designed for today\'s beauty professionals.' },
      { question: 'How does Meevo\'s mobile app compare to Daisy?', answer: 'Meevo offers a mobile companion app for basic management tasks. Daisy\'s mobile app provides full salon management, AI receptionist access, marketplace visibility, real-time analytics, and multilingual Arabic/English support, purpose-built for salon owners on the go.' },
      { question: 'Does Meevo have a marketplace to help me find new clients?', answer: 'Meevo has a minimal listing directory, but no true consumer marketplace. Daisy includes a full consumer marketplace with cashback rewards, discovery features, and AI-powered marketing to actively attract new clients to your salon.' },
      { question: 'What customer support does Meevo provide?', answer: 'Meevo offers US-based phone and email support during business hours. Daisy provides multi-channel support with specialized beauty industry expertise, Arabic-speaking representatives, and dedicated GCC support teams for businesses in the Middle East.' },
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
    description: 'European beauty marketplace with up to 35% commission on bookings. Largest marketplace in Europe (13 countries).',
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
      { question: 'How does Treatwell compare to Daisy?', answer: 'Treatwell is a European marketplace charging up to 35% commission per booking with minimal management tools. Daisy is a complete platform with flat pricing, AI receptionist, and full business management, no commissions on customer bookings.' },
      { question: 'How much does Treatwell actually cost salons with their commission model?', answer: 'Treatwell charges up to 35% commission on marketplace bookings. For a salon generating $10,000/mo through Treatwell, that\'s up to $3,500 in commissions. Daisy charges flat subscription pricing with no commissions on bookings, your revenue stays yours.' },
      { question: 'Can I switch from Treatwell to Daisy and keep my clients?', answer: 'Yes. Daisy helps you migrate client data from Treatwell and build direct relationships with your customers. Unlike Treatwell where the marketplace owns the customer relationship, Daisy ensures you own your client data and can communicate directly with them.' },
      { question: 'Does Treatwell work in Arabic or support salons in the Gulf?', answer: 'No. Treatwell operates in 13 European countries only, with no Arabic interface, no GCC presence, and no Middle Eastern payment methods. Daisy provides native Arabic/English support and full compliance across all six GCC countries.' },
      { question: 'Does Treatwell have AI features?', answer: 'No. Treatwell has no AI capabilities, no AI receptionist, no chatbot, and no smart scheduling. It\'s a marketplace listing service with basic booking. Daisy offers a 24/7 AI receptionist, AI-powered marketing, and smart scheduling to grow your business.' },
      { question: 'Why does Treatwell have a lower rating on Capterra than other salon software?', answer: 'Treatwell has a 3.8/5 rating on Capterra, lower than most competitors. Common complaints include high commission rates, limited business management tools, and lack of control over pricing and client relationships. Daisy gives salons full control with flat pricing and comprehensive tools.' },
      { question: 'Does Treatwell offer real salon management tools or just a marketplace listing?', answer: 'Treatwell Connect offers basic salon management, but most salons use Treatwell purely as a marketplace listing. For real business management, most Treatwell users still need separate software. Daisy provides a complete all-in-one platform, booking, POS, CRM, marketing, AI, and marketplace.' },
      { question: 'How does Treatwell\'s app compare to Daisy for salon owners?', answer: 'Treatwell\'s salon-facing app is primarily for managing marketplace bookings. Daisy\'s app provides full salon management, AI receptionist, direct client communication, analytics, and multilingual Arabic/English support, far beyond marketplace listing management.' },
      { question: 'Is Treatwell sustainable for my salon long-term with 35% commission?', answer: 'Many salons find Treatwell\'s commission model unsustainable as their business grows, paying more in fees as they become more successful. Daisy\'s flat subscription model means your costs stay predictable while your revenue grows, with no commissions eating into your margins.' },
      { question: 'What support does Treatwell offer compared to Daisy?', answer: 'Treatwell provides basic email support for partner salons during European business hours. Daisy offers dedicated onboarding, multi-channel support, Arabic-speaking representatives, and local GCC support teams with deep beauty industry expertise.' },
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
    description: 'General-purpose scheduling tool owned by Squarespace. Not beauty-specific but used by some independent beauty professionals.',
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
      aiDescription: 'No AI capabilities. Generic scheduling tool.',
    },

    daisyAdvantages: ['Purpose-built for beauty vs generic scheduling', 'AI receptionist', 'Full business suite (POS, CRM, marketing)', 'Marketplace + cashback', 'Arabic/GCC'],
    daisySwitchingReasons: ['Need beauty-specific features', 'Want AI', 'Need POS/payments integration', 'Want marketplace and customer acquisition'],
    competitorStrengths: ['Very affordable ($16/mo)', 'Excellent booking experience', 'Highest review count (5,600)', 'Squarespace integration'],
    competitorWeaknesses: ['Not beauty-specific', 'No POS/inventory/CRM', 'No AI', 'No marketplace', 'No Arabic/GCC'],

    faq: [
      { question: 'How does Acuity compare to Daisy for salons?', answer: 'Acuity is a general scheduling tool at $16-49/mo, great for basic booking but lacking salon-specific features like POS, inventory, client management, AI, and marketplace. Daisy is purpose-built for beauty businesses with complete management and growth tools.' },
      { question: 'Is Acuity Scheduling really just a calendar or does it have salon features?', answer: 'Acuity is fundamentally a calendar and scheduling tool, not salon software. It lacks POS, inventory management, formula tracking, service menus, staff commissions, and other beauty-specific features. Most salons using Acuity need to add multiple other tools. Daisy includes everything a beauty business needs in one platform.' },
      { question: 'What hidden costs should I expect with Acuity Scheduling?', answer: 'While Acuity\'s subscription is affordable ($16-49/mo), beauty businesses typically need to add separate tools for POS, CRM, marketing, and inventory, each with its own subscription. Payment processing fees also apply. Daisy bundles all these capabilities into one platform.' },
      { question: 'Can I migrate my booking data from Acuity to Daisy?', answer: 'Yes. Daisy provides full data migration support for Acuity users, transferring client records, appointment history, and booking preferences. Our onboarding team ensures a smooth transition to Daisy\'s comprehensive beauty platform.' },
      { question: 'Does Acuity Scheduling support Arabic or work in the Gulf region?', answer: 'No. Acuity is a US-based product (owned by Squarespace) with no Arabic interface, no GCC compliance, and no Middle Eastern payment methods. Daisy provides native Arabic/English support with full compliance across all six GCC countries.' },
      { question: 'Does Acuity have any AI features for my salon?', answer: 'No. Acuity has no AI capabilities, no AI receptionist, no chatbot, no smart scheduling, and no AI-powered marketing. It\'s a straightforward scheduling tool. Daisy\'s 24/7 AI receptionist handles bookings, answers client questions, and processes payments automatically.' },
      { question: 'Why do so many people use Acuity if it\'s not built for salons?', answer: 'Acuity has a 4.8 rating with 5,600+ reviews because it\'s an excellent general scheduling tool, simple, reliable, and affordable. However, beauty businesses often outgrow it as they need POS, client management, staff scheduling, and marketing. Daisy is built for this exact growth trajectory.' },
      { question: 'How does Acuity\'s Squarespace integration compare to what Daisy offers?', answer: 'Acuity integrates with Squarespace for website embedding, but this only covers booking. Daisy provides a complete ecosystem, marketplace visibility, AI receptionist, POS, CRM, and marketing, that goes far beyond embedding a booking widget on your website.' },
      { question: 'Can Acuity help me attract new clients or just manage bookings?', answer: 'Acuity is purely a booking management tool with no customer acquisition features, no marketplace, no cashback, no discovery platform. Daisy includes a consumer marketplace, cashback rewards, and AI-powered marketing to actively drive new clients to your business.' },
      { question: 'What support does Acuity offer for beauty business owners?', answer: 'Acuity provides general email support and a knowledge base, but no beauty-specific guidance or dedicated account management. Daisy offers specialized onboarding for beauty businesses, Arabic-speaking support staff, and local GCC support teams who understand salon operations.' },
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
    description: 'Generic booking platform with 70+ add-on modules. Customizable but requires configuration. Not beauty-specific.',
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
      aiDescription: 'No AI capabilities. Modular add-on system for features.',
    },

    daisyAdvantages: ['Beauty-specific vs generic booking', 'AI receptionist', 'Integrated platform vs modular add-ons', 'Native Arabic vs translated', 'Marketplace + cashback', 'GCC compliance'],
    daisySwitchingReasons: ['Need beauty-specific platform', 'Want AI features', 'Tired of managing add-on modules', 'Need native Arabic, not translated'],
    competitorStrengths: ['Very affordable', 'Highly customizable (70+ modules)', 'Free plan', 'Some Arabic support'],
    competitorWeaknesses: ['Not beauty-specific', 'Add-on complexity', 'No AI', 'Translated (not native) Arabic', 'No marketplace'],

    faq: [
      { question: 'How does SimplyBook.me compare to Daisy?', answer: 'SimplyBook.me is a generic booking tool with modular add-ons, while Daisy is purpose-built for beauty with AI, marketplace, cashback, and native Arabic. SimplyBook offers translated Arabic; Daisy provides native Arabic with equal priority.' },
      { question: 'How much does SimplyBook.me actually cost with all the add-on modules?', answer: 'SimplyBook.me starts free or at $8.25/mo, but beauty businesses typically need multiple add-on modules (POS, CRM, marketing, etc.) which accumulate costs. SMS reminders are charged separately. The total cost often exceeds what you\'d pay for Daisy\'s all-inclusive platform with AI and marketplace.' },
      { question: 'Is SimplyBook.me\'s Arabic support good enough for GCC businesses?', answer: 'SimplyBook.me offers translated Arabic, which often contains awkward phrasing and lacks cultural nuance. It has minimal GCC compliance and no local payment methods. Daisy provides native Arabic with equal priority to English, full RTL support, and GCC-specific compliance across all six countries.' },
      { question: 'Can I migrate my data from SimplyBook.me to Daisy?', answer: 'Yes. Daisy provides full data migration support for SimplyBook.me users, including client records, booking history, and service configurations. Our team handles the transition from the modular add-on system to Daisy\'s integrated platform.' },
      { question: 'Does SimplyBook.me have AI features?', answer: 'No. SimplyBook.me has no AI capabilities, no AI receptionist, no chatbot, no smart scheduling, and no AI-powered marketing. Features are added through manual module selection. Daisy\'s AI receptionist handles bookings, customer questions, and payments 24/7.' },
      { question: 'Is managing 70+ add-on modules in SimplyBook.me complicated?', answer: 'Yes, many users find SimplyBook.me\'s modular approach overwhelming. Choosing from 70+ modules, configuring each one, and managing compatibility can be time-consuming. Daisy provides an integrated platform where all beauty-specific features work together out of the box.' },
      { question: 'Does SimplyBook.me have a marketplace to help me get new clients?', answer: 'SimplyBook.me has a basic business directory, but it\'s not a consumer-facing marketplace. Daisy includes a full consumer marketplace with cashback rewards and discovery features that actively drive new customers to your business.' },
      { question: 'How does SimplyBook.me\'s mobile app compare to Daisy?', answer: 'SimplyBook.me offers a basic mobile app for booking management. Daisy\'s mobile app provides full salon management, AI receptionist access, marketplace visibility, real-time analytics, and native Arabic/English support, purpose-built for beauty professionals.' },
      { question: 'What customer support does SimplyBook.me offer?', answer: 'SimplyBook.me provides email and chat support with a knowledge base. Support is in English with limited multi-language availability. Daisy offers specialized beauty industry support, Arabic-speaking representatives, and local GCC support teams.' },
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
    description: 'Free general-purpose scheduling tool. Basic features, broad appeal. Not beauty-specific.',
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
      { question: 'How does Setmore compare to Daisy?', answer: 'Setmore is a free basic scheduling tool, while Daisy is a complete AI-powered beauty business platform. Setmore is fine for getting started, but businesses needing POS, CRM, AI, marketplace, and Arabic support will need Daisy.' },
      { question: 'Is Setmore really free and what are the catch costs?', answer: 'Setmore\'s free plan supports up to 4 staff with basic scheduling. Paid plans are $5-12 per user per month, which adds up for larger teams. However, the real cost is what\'s missing, no POS, no CRM, no marketing, no AI, no marketplace. Most growing salons need to add multiple paid tools on top of Setmore.' },
      { question: 'Can I migrate my client data from Setmore to Daisy?', answer: 'Yes. Daisy provides full data migration support from Setmore, including client contact information, appointment history, and service preferences. Our onboarding team handles the transition to ensure nothing is lost.' },
      { question: 'Does Setmore support Arabic or work in the Middle East?', answer: 'No. Setmore has no Arabic interface, no GCC compliance, and no Middle Eastern payment methods. It\'s a US-based generic scheduling tool. Daisy provides native Arabic/English support with full compliance across all six GCC countries.' },
      { question: 'Does Setmore have any AI features?', answer: 'No. Setmore has no AI capabilities whatsoever, no AI receptionist, no chatbot, no smart scheduling, and no AI-powered marketing. Daisy\'s 24/7 AI receptionist handles bookings, answers client questions, and processes payments automatically.' },
      { question: 'When should I upgrade from Setmore to a platform like Daisy?', answer: 'When you need beauty-specific features like POS, client history, formula tracking, staff commissions, or marketing tools. Setmore can\'t provide these. If you want AI to handle after-hours bookings or a marketplace to attract new clients, it\'s time to move to Daisy.' },
      { question: 'How does Setmore\'s mobile app compare to Daisy?', answer: 'Setmore has a basic mobile app for viewing and managing appointments. Daisy\'s mobile app provides full salon management, AI receptionist, marketplace visibility, cashback tracking, real-time analytics, and multilingual Arabic/English support.' },
      { question: 'Can Setmore help me grow my client base?', answer: 'No. Setmore is a scheduling tool with no customer acquisition features, no marketplace, no cashback rewards, no marketing automation. Daisy includes a consumer marketplace, cashback program, and AI-powered marketing to actively drive new customers to your business.' },
      { question: 'What customer support does Setmore provide compared to Daisy?', answer: 'Setmore offers email support and a help center. There\'s no phone support on free plans and no beauty-specific guidance. Daisy provides specialized beauty industry support, Arabic-speaking representatives, dedicated onboarding, and local GCC support teams.' },
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
    description: 'Dubai-specific beauty booking app with UAE compliance focus. Small local marketplace for Dubai salons.',
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
      { question: 'How does BookB compare to Daisy?', answer: 'BookB is a basic Dubai-specific booking app, while Daisy is a comprehensive platform with AI, full business management, cashback, and coverage across all 6 GCC countries.' },
      { question: 'What does BookB cost and is the pricing transparent?', answer: 'BookB requires you to contact them for pricing, there are no publicly listed plans. This lack of transparency makes it hard to compare value. Daisy offers clear, published pricing with all features included and no hidden fees.' },
      { question: 'Can I switch from BookB to Daisy without losing my data?', answer: 'Yes. Daisy provides data migration support for BookB users, transferring client records and booking history. Since BookB has limited data fields, the migration is typically straightforward, and you\'ll gain access to much more comprehensive client management with Daisy.' },
      { question: 'Does BookB work outside of Dubai?', answer: 'No. BookB is focused exclusively on the Dubai market. If you plan to expand to other emirates or GCC countries, you\'ll need a different platform. Daisy supports all six GCC countries with local compliance, payment methods, and Arabic/English support.' },
      { question: 'Does BookB have AI features like Daisy?', answer: 'No. BookB has no AI capabilities, no AI receptionist, no chatbot, and no smart scheduling. Daisy\'s 24/7 AI receptionist handles bookings, answers customer questions, and processes payments automatically in both Arabic and English.' },
      { question: 'How does BookB\'s marketplace compare to Daisy\'s?', answer: 'BookB has a small local marketplace limited to Dubai. Daisy\'s marketplace covers all GCC countries and includes cashback rewards, customer discovery, and AI-powered recommendations to help salons attract and retain more clients.' },
      { question: 'Does BookB offer staff management and business analytics?', answer: 'No. BookB is a basic booking app without staff management, reporting, analytics, marketing, or inventory features. Daisy provides comprehensive business management including staff scheduling, commissions, detailed analytics, marketing automation, and inventory tracking.' },
      { question: 'How does BookB\'s mobile app compare to Daisy?', answer: 'BookB\'s app covers basic booking functionality for the Dubai market. Daisy\'s mobile app provides full salon management, AI receptionist, marketplace visibility across all GCC countries, real-time analytics, and comprehensive Arabic/English support.' },
      { question: 'What support does BookB offer compared to Daisy?', answer: 'BookB is a small startup with limited support resources focused on Dubai. Daisy offers comprehensive support across all GCC countries with dedicated onboarding, Arabic-speaking representatives, and a team that understands beauty business operations at scale.' },
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
    description: 'Beauty consumer marketplace with some SaaS features. Available in UAE and select international markets.',
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
      { question: 'How does Belliata compare to Daisy?', answer: 'Belliata is a UAE marketplace with basic management features. Daisy provides AI receptionist, complete business management, native Arabic, cashback rewards, and coverage across all 6 GCC countries.' },
      { question: 'Does Belliata charge commission on bookings like other marketplaces?', answer: 'Yes. Belliata operates a marketplace model with commission on bookings made through their platform. While they offer a free tier, marketplace bookings come with fees. Daisy charges a flat subscription with no commissions, your booking revenue stays yours.' },
      { question: 'Can I migrate my client data from Belliata to Daisy?', answer: 'Yes. Daisy provides full data migration support for Belliata users, transferring client records, booking history, and service preferences. Our onboarding team ensures a smooth transition to Daisy\'s more comprehensive platform.' },
      { question: 'Is Belliata\'s Arabic support good enough for my salon?', answer: 'Belliata offers translated Arabic, which can feel unnatural and may contain awkward phrasing. Daisy provides native Arabic with equal priority to English, written and reviewed by Arabic-speaking team members, with proper RTL layout and cultural relevance throughout the platform.' },
      { question: 'Does Belliata have AI features?', answer: 'No. Belliata has no AI capabilities, no AI receptionist, no chatbot, no smart scheduling. Daisy\'s 24/7 AI receptionist handles bookings, answers customer questions, and processes payments in both Arabic and English automatically.' },
      { question: 'Does Belliata work outside the UAE?', answer: 'Belliata is primarily focused on the UAE market with some international presence. Daisy supports all six GCC countries (UAE, Saudi Arabia, Kuwait, Bahrain, Oman, Qatar) with local compliance, payment methods, and regulatory adherence for each country.' },
      { question: 'How does Belliata\'s marketplace compare to Daisy\'s?', answer: 'Belliata\'s marketplace is UAE-focused with basic salon listings. Daisy\'s marketplace covers all GCC countries and adds cashback rewards, AI-powered recommendations, customer reviews, and discovery features to actively drive clients to your salon.' },
      { question: 'Does Belliata offer full salon management or just booking?', answer: 'Belliata\'s management features are limited, basic client management and staff scheduling on the Pro plan. It lacks advanced reporting, marketing automation, and inventory tracking. Daisy provides comprehensive salon management with AI, advanced analytics, marketing tools, and full business operations support.' },
      { question: 'How does Belliata\'s app compare to Daisy for salon owners?', answer: 'Belliata\'s app (rated 4.5 on the App Store) focuses on marketplace bookings. Daisy\'s app provides full salon management, AI receptionist access, GCC-wide marketplace visibility, cashback tracking, real-time analytics, and native Arabic/English support.' },
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
    description: 'Dubai-focused salon POS and management system. Basic booking and point-of-sale for local salons.',
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
      { question: 'How does Sparkalz compare to Daisy?', answer: 'Sparkalz is a Dubai-based salon POS system with basic features. Daisy provides a complete AI-powered platform with marketplace, cashback, marketing, and GCC-wide coverage.' },
      { question: 'What does Sparkalz cost and why isn\'t pricing listed publicly?', answer: 'Sparkalz requires you to contact them for pricing and may involve hardware costs for POS terminals. The lack of published pricing makes comparison difficult. Daisy offers clear, transparent pricing with no hardware requirements and all features included.' },
      { question: 'Can I move my salon data from Sparkalz to Daisy?', answer: 'Yes. Daisy provides data migration support for Sparkalz users, transferring client records, transaction history, and inventory data. Our onboarding team ensures a smooth transition from POS-focused to full platform management.' },
      { question: 'Does Sparkalz work outside of Dubai?', answer: 'No. Sparkalz is focused exclusively on the Dubai market. Salons expanding to other emirates or GCC countries will need a different solution. Daisy supports all six GCC countries with local compliance and payment methods for each.' },
      { question: 'Does Sparkalz have AI features?', answer: 'No. Sparkalz has no AI capabilities, no AI receptionist, no chatbot, and no smart scheduling. Daisy\'s 24/7 AI receptionist handles bookings, answers customer queries, and processes payments in Arabic and English automatically.' },
      { question: 'Is Sparkalz more than just a POS system for salons?', answer: 'Sparkalz primarily focuses on point-of-sale and basic booking. It lacks marketing tools, advanced reporting, a customer marketplace, or staff management features. Daisy provides a complete platform covering POS, booking, CRM, marketing, AI, analytics, and customer acquisition.' },
      { question: 'How does Sparkalz\'s mobile app compare to Daisy?', answer: 'Sparkalz\'s mobile capabilities are centered around POS transactions and basic booking. Daisy\'s mobile app provides full salon management, AI receptionist, GCC-wide marketplace visibility, real-time analytics, marketing tools, and native Arabic/English support.' },
      { question: 'Can Sparkalz help me get new customers?', answer: 'No. Sparkalz is an operations-focused POS tool with no customer acquisition features, no marketplace, no cashback, and no marketing automation. Daisy includes a consumer marketplace, cashback rewards, and AI-powered marketing to actively bring new clients to your salon.' },
      { question: 'What customer support does Sparkalz offer?', answer: 'Sparkalz is a small Dubai-based company with limited support resources. Daisy offers comprehensive support across all GCC countries with dedicated onboarding, Arabic-speaking representatives, and a team with deep beauty industry expertise.' },
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
    description: 'Barbershop-specific management platform with POS and marketplace. Focused exclusively on the barbershop vertical.',
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
      { question: 'How does SQUIRE compare to Daisy?', answer: 'SQUIRE is built specifically for barbershops in the US market. Daisy serves the broader beauty and wellness industry with AI, marketplace, cashback, and Arabic/GCC support that SQUIRE doesn\'t offer.' },
      { question: 'How much does SQUIRE actually cost with per-barber pricing?', answer: 'SQUIRE charges $30/mo base plus $15-25 per barber. A barbershop with 8 barbers could pay $150-230/mo, plus 2.6% + $0.10 per transaction. Daisy offers flat pricing with no per-staff charges, so your costs don\'t increase as your team grows.' },
      { question: 'Can I switch from SQUIRE to Daisy and keep my client data?', answer: 'Yes. Daisy provides full data migration support from SQUIRE, transferring client profiles, appointment history, and booking preferences. Our onboarding team handles the transition so you don\'t lose any client relationships.' },
      { question: 'Does SQUIRE work for salons and spas, not just barbershops?', answer: 'No. SQUIRE is built exclusively for barbershops and lacks features needed by salons, spas, and wellness businesses, like advanced service menus, treatment tracking, and beauty-specific workflows. Daisy serves the full beauty and wellness spectrum including salons, spas, barbershops, clinics, and more.' },
      { question: 'Does SQUIRE support Arabic or work in the GCC?', answer: 'No. SQUIRE is a US-focused platform with no Arabic interface, no GCC compliance, and no Middle Eastern payment methods. Daisy provides native Arabic/English support with full compliance across all six GCC countries.' },
      { question: 'Does SQUIRE have AI features like Daisy?', answer: 'No. SQUIRE has no AI capabilities, no AI receptionist, no chatbot, and no smart scheduling. Daisy\'s 24/7 AI receptionist handles bookings, answers customer questions, and processes payments in both Arabic and English.' },
      { question: 'How does SQUIRE\'s marketplace compare to Daisy\'s?', answer: 'SQUIRE has a barbershop-only marketplace focused on the US. Daisy\'s marketplace covers the full beauty and wellness industry across all GCC countries, with cashback rewards and AI-powered recommendations to drive customer discovery.' },
      { question: 'Is SQUIRE good for a barbershop that also offers other services?', answer: 'SQUIRE is optimized for traditional barbershop services. If your business also offers salon services, facials, spa treatments, or other beauty services, SQUIRE\'s narrow focus becomes a limitation. Daisy supports all beauty and wellness service types in one platform.' },
      { question: 'How does SQUIRE\'s mobile app compare to Daisy?', answer: 'SQUIRE\'s mobile app is well-designed for barbershop management. Daisy\'s app provides broader beauty business management, AI receptionist access, GCC-wide marketplace visibility, cashback tracking, and multilingual Arabic/English support.' },
      { question: 'What customer support does SQUIRE offer compared to Daisy?', answer: 'SQUIRE provides US-based support focused on barbershop operations. Daisy offers multi-channel support with beauty industry expertise across all verticals, Arabic-speaking representatives, and dedicated GCC support teams.' },
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
    description: 'Budget-friendly salon management from India. Basic features at low cost. Some GCC/international presence.',
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
      { question: 'How does Salonist compare to Daisy?', answer: 'Salonist is a budget salon tool at $25/mo with basic features. Daisy provides AI receptionist, marketplace, cashback, native Arabic, and comprehensive management, justifying the investment in business growth.' },
      { question: 'Is Salonist really as affordable as it looks at $25 a month?', answer: 'Salonist\'s $25/mo price is genuinely low, but you get basic features only. There are no advanced analytics, no AI, no marketplace, and limited marketing. Many businesses end up needing additional tools, which erodes the cost advantage. Daisy includes everything in one platform.' },
      { question: 'Can I migrate my data from Salonist to Daisy?', answer: 'Yes. Daisy provides data migration support for Salonist users, transferring client records, appointment history, and inventory data. Our onboarding team ensures a smooth transition with no data loss.' },
      { question: 'Does Salonist support Arabic for my salon?', answer: 'No. Despite having some GCC presence (UAE), Salonist does not offer an Arabic interface. Daisy provides native Arabic with equal priority to English, full RTL layout support, and culturally relevant content throughout the platform.' },
      { question: 'Does Salonist have any AI features?', answer: 'No. Salonist has no AI capabilities, no AI receptionist, no chatbot, no smart scheduling, and no AI-powered marketing. Daisy\'s 24/7 AI receptionist handles bookings, answers customer questions, and processes payments in both Arabic and English.' },
      { question: 'Is Salonist reliable enough for a growing beauty business?', answer: 'Salonist is a smaller company from India with a limited review base. As your business grows, you may outgrow its basic feature set and limited support. Daisy is built to scale with your business, offering advanced AI, marketplace, and comprehensive management tools.' },
      { question: 'Does Salonist have a marketplace or customer acquisition tools?', answer: 'No. Salonist has no marketplace, no cashback program, and no customer discovery features. It\'s purely an operations tool. Daisy combines operations with customer acquisition through its marketplace, cashback rewards, and AI-powered marketing.' },
      { question: 'How does Salonist\'s mobile app compare to Daisy?', answer: 'Salonist offers a basic mobile app for appointment and client management. Daisy\'s mobile app provides full salon management, AI receptionist access, marketplace visibility, cashback tracking, real-time analytics, and native Arabic/English support.' },
      { question: 'What customer support does Salonist offer?', answer: 'Salonist provides basic email support, primarily during Indian business hours. There\'s no dedicated beauty industry expertise or local GCC support. Daisy offers multi-channel support with Arabic-speaking representatives, dedicated onboarding, and local GCC support teams.' },
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
    description: 'Med spa and clinical-focused practice management from the UK. Strong client records and forms. Growing AI features for clinical workflows.',
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
      aiDescription: 'Basic automation for clinical workflows. No true AI receptionist, chatbot, or smart scheduling.',
    },

    daisyAdvantages: ['Full AI ecosystem vs basic automation', 'Arabic/GCC support', 'Marketplace + cashback', 'Flat pricing vs per-user', 'Broader beauty/wellness vs clinical-only'],
    daisySwitchingReasons: ['Per-user pricing expensive for teams', 'Need Arabic/GCC', 'Want AI receptionist', 'Want marketplace'],
    competitorStrengths: ['Excellent clinical records and forms', 'Strong consent management', 'Good CRM', 'Established in UK med spa market'],
    competitorWeaknesses: ['UK-focused', 'Per-user pricing', 'No AI', 'No marketplace', 'No Arabic/GCC', 'Clinical-focused not beauty-broad'],

    faq: [
      { question: 'How does Pabau compare to Daisy?', answer: 'Pabau excels at clinical/med spa records and consent forms in the UK market. Daisy offers AI receptionist, marketplace, cashback, Arabic support, and GCC compliance across the broader beauty and wellness industry.' },
      { question: 'How expensive does Pabau get with per-user pricing?', answer: 'Pabau charges approximately $49/mo per user. A med spa with 10 practitioners would pay around $490/mo, plus payment processing fees. Daisy offers flat pricing that doesn\'t scale with your team size, making costs predictable as your business grows.' },
      { question: 'Can I migrate my clinic data from Pabau to Daisy?', answer: 'Yes. Daisy provides comprehensive data migration support from Pabau, including client records, treatment history, consent forms, and appointment data. Our onboarding team ensures a smooth transition for clinical and beauty businesses.' },
      { question: 'Does Pabau support Arabic or work in the Middle East?', answer: 'No. Pabau is UK-focused with no Arabic interface, no GCC compliance, and no Middle Eastern payment methods. Daisy provides native Arabic/English support with full compliance across all six GCC countries, including support for local clinical and beauty regulations.' },
      { question: 'Does Pabau have AI features like an AI receptionist?', answer: 'Pabau has basic workflow automation for clinical tasks but no true AI, no AI receptionist, no chatbot, and no smart scheduling. Daisy\'s 24/7 AI receptionist handles bookings, answers patient and client questions, and processes payments automatically.' },
      { question: 'Is Pabau only for med spas or can salons use it too?', answer: 'Pabau is designed primarily for clinical and med spa environments, its strength is consent forms, treatment records, and clinical workflows. Regular salons and spas may find it overly clinical and missing beauty-specific features. Daisy serves the full spectrum from salons to spas to clinics.' },
      { question: 'Does Pabau have a marketplace to help attract new clients?', answer: 'No. Pabau has no consumer marketplace, no customer discovery features, and no cashback program. Daisy includes a consumer marketplace, cashback rewards, and AI-powered marketing to actively drive new patients and clients to your business.' },
      { question: 'How does Pabau\'s mobile app compare to Daisy?', answer: 'Pabau\'s mobile app is focused on clinical record management and consent forms. Daisy\'s mobile app provides full business management, AI receptionist access, marketplace visibility, cashback tracking, real-time analytics, and multilingual Arabic/English support.' },
      { question: 'What customer support does Pabau offer compared to Daisy?', answer: 'Pabau provides UK-based support with clinical workflow expertise during UK business hours. Daisy offers multi-channel support with both beauty and clinical expertise, Arabic-speaking representatives, and dedicated GCC support teams for Middle Eastern businesses.' },
    ],

    lastResearched: '2026-03-13',
  },
};

// ---------------------------------------------------------------------------
// I18n-wrapped export — lazily resolved to avoid circular import
// ---------------------------------------------------------------------------

export function getTier3CompetitorsI18n(): I18nContent<Record<string, CompetitorData>> {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { tier3CompetitorsAr } = require('./tier3Data.ar') as { tier3CompetitorsAr: Record<string, CompetitorData> };
  return { en: tier3Competitors, ar: tier3CompetitorsAr };
}
