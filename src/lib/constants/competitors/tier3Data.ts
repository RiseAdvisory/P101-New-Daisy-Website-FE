// =============================================================================
// WS1: Tier 3 Competitors — Light Research
// Last updated: March 2026
// =============================================================================

import type { CompetitorData } from './competitorData';

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
      'Generic scheduling — not beauty-specific', 'No AI', 'No Arabic/GCC',
      'Limited salon management features', 'No marketplace',
    ],

    faq: [
      { question: 'How does Square Appointments compare to Daisy?', answer: 'Square Appointments is a general-purpose scheduling add-on to Square\'s POS, while Daisy is purpose-built for beauty/wellness with AI receptionist, marketplace, cashback, and Arabic support. Square excels at payments but lacks beauty-specific management, AI, and customer acquisition tools.' },
      { question: 'Is Square Appointments free?', answer: 'Square Appointments is free for individual users, but paid plans start at $29/mo for multiple staff. You\'ll also pay 2.6% + $0.10 per transaction on all Square payments.' },
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
      marketplaceAndDiscovery: 1, aiCapabilities: 1,
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
      marketplaceAndDiscovery: 0, aiCapabilities: 0,
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
      marketplaceAndDiscovery: 1, aiCapabilities: 0,
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
      marketplaceAndDiscovery: 3, aiCapabilities: 0,
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
      { question: 'How does Treatwell compare to Daisy?', answer: 'Treatwell is a European marketplace charging up to 35% commission per booking with minimal management tools. Daisy is a complete platform with flat pricing, AI receptionist, and full business management — no commissions on customer bookings.' },
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
      marketplaceAndDiscovery: 0, aiCapabilities: 0,
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
      hiddenCosts: ['Very basic — beauty businesses need additional tools', 'Payment processing fees'],
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
      marketplaceAndDiscovery: 1, aiCapabilities: 0,
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
      hiddenCosts: ['Features are add-on modules — costs accumulate', 'SMS costs extra'],
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
      marketplaceAndDiscovery: 0, aiCapabilities: 0,
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
      marketplaceAndDiscovery: 1, aiCapabilities: 0,
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
      marketplaceAndDiscovery: 2, aiCapabilities: 0,
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
      marketplaceAndDiscovery: 0, aiCapabilities: 0,
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
      marketplaceAndDiscovery: 2, aiCapabilities: 0,
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
      marketplaceAndDiscovery: 0, aiCapabilities: 0,
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
      { question: 'How does Salonist compare to Daisy?', answer: 'Salonist is a budget salon tool at $25/mo with basic features. Daisy provides AI receptionist, marketplace, cashback, native Arabic, and comprehensive management — justifying the investment in business growth.' },
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
      marketplaceAndDiscovery: 0, aiCapabilities: 1,
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
    ],

    lastResearched: '2026-03-13',
  },
};
