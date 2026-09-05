// =============================================================================
// WS1: Tier 1 Competitors. Deep Research (Full 10-Dimension Analysis)
// Last updated: March 2026
// =============================================================================

import type { CompetitorData } from './competitorData';
import type { I18nContent } from '../i18n';

export const tier1Competitors: Record<string, CompetitorData> = {
  // ---------------------------------------------------------------------------
  // 1. Fresha
  // ---------------------------------------------------------------------------
  fresha: {
    slug: 'fresha',
    name: 'Fresha',
    website: 'https://www.fresha.com',
    tier: 1,
    description:
      'Global beauty and wellness marketplace and business management platform, with 100K+ partner venues and 450M+ appointments booked. It launched as Shedul in 2015 and took the Fresha name in 2020.',
    founded: '2015',
    headquarters: 'London, UK',
    employeeCount: '500-1,000',
    funding: '$219M+',

    features: {
      onlineBooking: 3,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 2,
      marketingAndCrm: 1,
      inventoryManagement: 1,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 3,
      aiCapabilities: 1,
      brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      freeTrialDays: 14,
      startingPrice: 'From $9.95/mo + fees',
      startingPriceNumeric: 9.95,
      tiers: [
        {
          name: 'Starter',
          price: '$9.95/mo',
          priceNumeric: 9.95,
          features: [
            'Appointment scheduling',
            'Calendar management',
            'Client database',
            'Basic reporting',
          ],
        },
        {
          name: 'Standard',
          price: '$25/mo',
          priceNumeric: 25,
          features: [
            'All Starter features',
            'Online payments',
            'Email marketing',
            'Google integration',
          ],
        },
        {
          name: 'Premium',
          price: 'Custom pricing',
          features: [
            'All Standard features',
            'Marketplace listing',
            'Advanced marketing',
            'Priority support',
          ],
        },
      ],
      transactionFees: '2.19% + $0.20 per transaction',
      commissionOnMarketplace: '20% on new clients from marketplace',
      hiddenCosts: [
        'Transaction fees on all card payments on top of subscription',
        'Marketplace commission on new clients',
        'SMS/email campaign costs per message',
        'No-show protection fees',
        'Previously free features now require paid plans',
      ],
      pricingModel: 'hybrid',
      pricingPageUrl: 'https://www.fresha.com/for-business/pricing',
      lastVerified: '2026-03-14',
    },

    reviews: [
      { platform: 'Capterra', rating: 4.8, reviewCount: 1441 },
      { platform: 'G2', rating: 4.5, reviewCount: 800 },
      { platform: 'App Store', rating: 4.9, reviewCount: 350000 },
      { platform: 'Google Play', rating: 4.8, reviewCount: 125000 },
    ],

    gccPresence: {
      hasArabicUI: false,
      arabicQuality: 'none',
      gccCountries: ['UAE'],
      localCompliance: false,
      localPaymentMethods: false,
      localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false,
      hasAiChatbot: false,
      hasSmartScheduling: false,
      hasAiMarketing: false,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription:
        'No AI today. An AI receptionist was announced for 2026 and has not launched. What exists is automated confirmations and reminders.',
    },

    targetMarket:
      'Solo practitioners and small to medium beauty and wellness businesses worldwide, drawn in by the low starting price and the marketplace exposure.',

    contentAndSeo: {
      estimatedMonthlyTraffic: '5M+',
      domainAuthority: 72,
      blogFrequency: '2-3 posts/week',
      topRankingKeywords: [
        'free salon software',
        'beauty booking system',
        'salon appointment app',
        'hair salon software free',
      ],
      contentTypes: ['blog', 'guides', 'partner stories', 'marketplace SEO pages'],
      seoStrengths: [
        'Massive marketplace pages for local SEO',
        'High domain authority',
        'Consumer app drives organic installs',
      ],
      seoWeaknesses: [
        'Limited thought leadership content',
        'Thin blog posts',
        'No video content strategy',
      ],
    },

    messaging: {
      tagline: 'The super app for beauty and wellness',
      primaryValueProp:
        'Business management software with the world\'s largest beauty marketplace built in',
      targetAudience:
        'Independent beauty professionals and small salon owners after affordable software that also gets them found',
      toneAndVoice: 'Simple and direct, leaning on ease of use and the size of the marketplace',
      keyMessages: [
        'Affordable plans starting at $9.95/mo',
        '450M+ appointments booked',
        '100K+ partner venues',
        'All-in-one platform',
        'Get discovered by millions of clients',
      ],
    },

    conversionStrategy: {
      primaryCta: 'Start free trial',
      freeTrialOffered: true,
      demoOffered: false,
      socialProof: [
        '100,000+ partner venues',
        '450M+ appointments booked',
        'Trustpilot rating',
        'Featured in Forbes, TechCrunch',
      ],
      conversionTactics: [
        'Low starting price positioning',
        'Marketplace discovery as lead magnet',
        'Self-serve signup',
        'Mobile-first onboarding',
        'Free trial to reduce friction',
      ],
    },

    switchingAnalysis: {
      dataExport: true,
      contractLockIn: false,
      migrationSupport: false,
      switchingDifficulty: 'easy',
      lockInTactics: [
        'Client history in platform',
        'Marketplace listing SEO value',
        'Integrated payment terminal leases',
      ],
      switchingIncentives: ['Free migration tools', 'No contracts ever'],
    },

    growthVsOperations: {
      growthScore: 5,
      growthFeatures: [
        'Marketplace discovery',
        'Social media booking links',
        'Blast marketing campaigns',
      ],
      operationsFeatures: [
        'Calendar management',
        'POS & payments',
        'Staff scheduling',
        'Client records',
        'Basic reporting',
      ],
      assessment:
        'An operations platform whose growth story is the marketplace. Marketing is a basic pay-per-use add-on, and there is no acquisition strategy beyond being listed.',
    },

    daisyAdvantages: [
      '24/7 AI receptionist vs no AI. Daisy handles calls, bookings, and payments automatically',
      'Official Meta Tech Provider with native WhatsApp Business API and Instagram integration vs no messaging automation',
      '360° customer acquisition (marketplace + cashback + AI marketing) vs marketplace-only discovery',
      'Native Arabic UI with equal Arabic/English priority vs English-only platform',
      'Full brand control and white-labeling vs Fresha-branded experience',
      'Predictable flat pricing vs subscription fees plus transaction fees and commissions',
      'AI-powered analytics and recommendations vs basic static reports',
      'Complete GCC compliance (VAT, local payment methods) vs limited UAE presence',
    ],

    daisySwitchingReasons: [
      'Tired of paying 20% commission on marketplace bookings',
      'Need Arabic language support for GCC clients',
      'Want AI to handle after-hours calls and bookings',
      'Need more than basic marketing, want proactive customer acquisition',
      'Want full brand control instead of Fresha-branded booking pages',
      'Need local payment methods and VAT compliance for GCC',
      'Frustrated by Fresha removing free features and adding fees',
    ],

    competitorStrengths: [
      'Largest beauty marketplace (25M+ consumers)',
      'Low starting price ($9.95/mo) for basic features',
      'Very high app store ratings and consumer adoption',
      'Global presence with strong brand recognition',
      'Simple, intuitive user interface',
    ],

    competitorWeaknesses: [
      'No AI capabilities (receptionist, chatbot, or smart scheduling)',
      'No Arabic UI. English only',
      'Subscription fees plus transaction fees and marketplace commissions add up quickly',
      'Basic marketing tools (no AI, no CRM automation)',
      'No white-labeling, all customer-facing pages are Fresha-branded',
      'Limited GCC presence, no local compliance, payment methods, or support',
      'Recent pricing changes causing partner dissatisfaction',
    ],

    faq: [
      {
        question: 'How much does Fresha cost?',
        answer:
          'Fresha is no longer free. Plans open at $9.95/month for the basics, with higher tiers above that. On top of the subscription come transaction fees of 2.19% + $0.20 on every card payment, 20% commission on new marketplace clients, and a per-message charge for marketing campaigns. A salon running $10,000/month through cards pays $239 in transaction fees alone, before the subscription and the marketplace commission.',
      },
      {
        question: 'How does Daisy compare to Fresha for salon management?',
        answer:
          'Fresha covers basic operations and attaches a marketplace. Daisy is a growth platform: an AI receptionist taking bookings 24/7, customer acquisition through cashback and AI-powered marketing, white-labeling so the brand stays yours, and native Arabic and English. None of that exists in Fresha.',
      },
      {
        question: 'Can I switch from Fresha to Daisy?',
        answer:
          'Yes. Fresha has no contracts and no lock-in period. Daisy will help move your client database, service menu and booking history across. Most businesses are switched inside a week without going offline.',
      },
      {
        question: 'Does Fresha work in the Middle East?',
        answer:
          'Fresha has some UAE presence, but no Arabic, no local payment methods and nothing for GCC compliance. Daisy was built for the GCC, with a native Arabic interface and local payment integration, and is live in Kuwait today.',
      },
      {
        question: 'Is Fresha really free to use?',
        answer:
          'No. The free plan is gone. Fresha now charges a monthly subscription from $9.95/mo, plus 2.19% + $0.20 per card transaction, 20% commission on new marketplace clients, and a fee per marketing message. The "free" branding is out of date. Daisy charges one transparent all-inclusive price, with no hidden commission and no per-message charge.',
      },
      {
        question: 'What are the hidden costs of using Fresha?',
        answer:
          'Past the subscription, Fresha takes 2.19% + $0.20 on every card payment, 20% commission on new clients who come through the marketplace, a fee for SMS and email campaigns, and a charge for no-show protection. Stacked together these can run past the subscription itself. Daisy folds marketing, AI and payment processing into plain plans with nothing added later.',
      },
      {
        question: 'How hard is it to migrate my data from Fresha?',
        answer:
          'Fresha lets you export client data and appointment history, though the process can be awkward. With Daisy the migration is handled for you: our team moves the client database, service menu, staff schedules and booking history. Most businesses are switched inside a week without going offline.',
      },
      {
        question: 'Does Fresha have AI features like Daisy?',
        answer:
          'Fresha announced an AI receptionist for 2026 and it has not shipped. As things stand there is no AI in Fresha for marketing, scheduling or customer engagement. Daisy\'s AI receptionist is live today, taking bookings, payments and customer service 24/7 in Arabic and English.',
      },
      {
        question: 'How good is the Fresha mobile app?',
        answer:
          'The consumer app is well designed for finding and booking. The business app reviews less consistently: owners report unreliable notifications, little offline capability, and an interface that has grown cluttered as features piled on. Daisy\'s business app was built for salon operations, with a clear interface and push notifications that arrive.',
      },
      {
        question: 'Can I reach Fresha customer support quickly?',
        answer:
          'Support runs through email and in-app chat, and plenty of users report slow replies, particularly since moving off the free model pushed their support volume up. There is no phone line. Daisy gives every plan a dedicated account manager, live chat and phone support with priority response.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'No longer free. Monthly subscriptions now sit on top of transaction fees, which has drawn partner backlash. The AI receptionist announced for 2026 has not arrived. Main vulnerability: no Arabic support, and costs that compound across subscription, transaction fees and commissions.',
  },

  // ---------------------------------------------------------------------------
  // 2. Booksy
  // ---------------------------------------------------------------------------
  booksy: {
    slug: 'booksy',
    name: 'Booksy',
    website: 'https://www.booksy.com',
    tier: 1,
    description:
      'Mobile-first beauty booking platform carrying 380K+ service providers across 50+ countries. It bought Versum in 2020 for the salon management side. The consumer app is where its attention goes.',
    founded: '2016',
    headquarters: 'Warsaw, Poland (US HQ: Chicago)',
    employeeCount: '500-800',
    funding: '$130M+',

    features: {
      onlineBooking: 3,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 2,
      marketingAndCrm: 2,
      inventoryManagement: 1,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 2,
      aiCapabilities: 2,
      brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      freeTrialDays: 14,
      startingPrice: '$29.99/mo',
      startingPriceNumeric: 29.99,
      tiers: [
        {
          name: 'Booksy Biz',
          price: '$29.99/mo',
          priceNumeric: 29.99,
          billingCycle: 'monthly',
          perStaff: true,
          perStaffCost: '$29.99/provider',
          features: [
            'Online booking',
            'Calendar management',
            'Client management',
            'Marketplace listing',
            'Digital Doorman AI',
            'Basic reporting',
          ],
        },
        {
          name: 'Booksy Biz+',
          price: '$49.99/mo',
          priceNumeric: 49.99,
          billingCycle: 'monthly',
          perStaff: true,
          perStaffCost: '$49.99/provider',
          features: [
            'Everything in Biz',
            'Advanced reporting',
            'Inventory management',
            'Marketing tools',
            'Multiple locations',
          ],
        },
      ],
      transactionFees: '2.49% + $0.15 per transaction',
      hiddenCosts: [
        'Per-provider pricing scales with team size',
        'Payment processing fees',
        'Premium marketplace placement costs',
      ],
      pricingModel: 'per-staff',
      pricingPageUrl: 'https://www.booksy.com/biz/pricing',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'Capterra', rating: 4.4, reviewCount: 479 },
      { platform: 'G2', rating: 4.2, reviewCount: 350 },
      { platform: 'App Store', rating: 4.9, reviewCount: 200000 },
      { platform: 'Google Play', rating: 4.6, reviewCount: 100000 },
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
      hasAiReceptionist: true,
      hasAiChatbot: false,
      hasSmartScheduling: false,
      hasAiMarketing: false,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription:
        'The "Digital Doorman" AI voice receptionist answers the phone and passes callers to booking. A Google AI Mode integration has been announced. There is no AI chatbot, no scheduling optimization and no marketing automation.',
    },

    targetMarket:
      'Independent barbers and beauty professionals, mostly in the US and Europe, with particular strength among barbershops and a user base that lives on mobile.',

    contentAndSeo: {
      estimatedMonthlyTraffic: '2.5M+',
      domainAuthority: 65,
      blogFrequency: '1-2 posts/week',
      topRankingKeywords: [
        'barber booking app',
        'beauty booking app',
        'salon scheduling software',
        'booksy app',
      ],
      contentTypes: ['blog', 'provider stories', 'marketplace pages', 'help center'],
      seoStrengths: [
        'Strong consumer marketplace SEO',
        'Good app store optimization',
        'Provider profile pages',
      ],
      seoWeaknesses: [
        'Limited B2B content',
        'Weak comparison page strategy',
        'No advanced content marketing',
      ],
    },

    messaging: {
      tagline: 'The booking app for beauty and wellness',
      primaryValueProp:
        'Mobile-first booking platform that connects beauty professionals with clients through an intuitive app',
      targetAudience:
        'Independent beauty professionals and barbers who want mobile booking and to be discovered',
      toneAndVoice: 'Energetic and modern, built around the phone',
      keyMessages: [
        '380K+ service providers',
        'Mobile-first booking experience',
        'Marketplace discovery',
        'Digital Doorman AI receptionist',
        'Manage your business from your phone',
      ],
    },

    conversionStrategy: {
      primaryCta: 'Start free trial',
      freeTrialOffered: true,
      demoOffered: false,
      socialProof: [
        '380K+ service providers',
        'Millions of bookings monthly',
        'App Store featured',
        'Industry awards',
      ],
      conversionTactics: [
        '14-day free trial',
        'Mobile app onboarding',
        'Marketplace as acquisition channel',
        'Referral bonuses',
      ],
    },

    switchingAnalysis: {
      dataExport: true,
      contractLockIn: false,
      migrationSupport: false,
      switchingDifficulty: 'easy',
      lockInTactics: [
        'Client relationships in app',
        'Marketplace profile and reviews',
        'Per-provider pricing makes it feel affordable',
      ],
    },

    growthVsOperations: {
      growthScore: 4,
      growthFeatures: [
        'Consumer marketplace',
        'Social media booking',
        'Digital Doorman AI for calls',
      ],
      operationsFeatures: [
        'Mobile calendar',
        'Client database',
        'POS & payments',
        'Staff management',
        'Inventory tracking',
      ],
      assessment:
        'Operations-focused, with the marketplace as its main growth channel. Digital Doorman is promising but handles calls and nothing else. No marketing or acquisition tools that work on their own.',
    },

    daisyAdvantages: [
      'Full AI ecosystem (receptionist + chatbot + smart scheduling + marketing) vs single "Digital Doorman" feature',
      'Official Meta Tech Provider with native WhatsApp and Instagram messaging vs no messaging platform integration',
      'Native multilingual support (Arabic/English and more) vs English-only platform',
      'Customer acquisition engine with cashback rewards vs basic marketplace listing',
      'Full brand control with white-labeling vs Booksy-branded experience',
      'Complete GCC market support vs zero GCC presence',
      'All-in-one flat pricing vs per-provider pricing that scales with team',
      'AI-powered marketing automation vs no marketing AI',
    ],

    daisySwitchingReasons: [
      'Need Arabic support for GCC market clients',
      'Want comprehensive AI beyond just call handling',
      'Per-provider pricing getting expensive as team grows',
      'Need customer acquisition tools beyond marketplace',
      'Want white-labeled booking experience for brand building',
      'Need GCC compliance and local payment methods',
    ],

    competitorStrengths: [
      'Excellent mobile app experience',
      'Strong in barbershop vertical',
      'Digital Doorman AI voice receptionist',
      'Large consumer marketplace',
      'Google AI Mode integration announced',
      'Affordable per-provider pricing for solopreneurs',
    ],

    competitorWeaknesses: [
      'No Arabic support or GCC presence',
      'AI limited to call handling only',
      'Per-provider pricing expensive for larger teams',
      'No white-labeling or brand control',
      'Limited marketing and CRM tools',
      'Weak inventory management',
      'No cashback or loyalty program built in',
    ],

    faq: [
      {
        question: 'How does Daisy compare to Booksy?',
        answer:
          'Booksy is a mobile-first booking app with a consumer marketplace. Daisy is a growth platform, with a full AI ecosystem covering receptionist, chatbot, smart scheduling and marketing, native Arabic and English, acquisition through cashback rewards, and complete control of your brand. Booksy has none of those.',
      },
      {
        question: 'Is Booksy good for salons in the Middle East?',
        answer:
          'Booksy has no GCC presence at all: no Arabic interface, no local payment methods, nothing for regional compliance. Daisy was built for the Middle East, with a native Arabic interface, local payment integration and full GCC compliance across UAE, KSA, Kuwait, Bahrain, Oman and Qatar.',
      },
      {
        question: 'What is Booksy\'s Digital Doorman?',
        answer:
          'Digital Doorman is Booksy\'s AI voice receptionist. It answers the phone and points callers at online booking. Routing is where it stops: it cannot take a payment, answer a detailed question or cover customer service 24/7. Daisy\'s AI receptionist handles calls, bookings, payments and customer service in Arabic and English.',
      },
      {
        question: 'Can I switch from Booksy to Daisy?',
        answer:
          'Yes. Booksy has no long-term contract. Daisy will move your client data, service menu and booking history across, and the switch usually takes less than a week.',
      },
      {
        question: 'How much does Booksy cost per month?',
        answer:
          'Booksy Biz starts at $29.99/month per service provider, which mounts up quickly across a team. A 5-person salon is at roughly $150/month before any add-ons. Booksy Biz+, with advanced marketing, reporting and multi-location support, costs more again. Daisy does not multiply the price by headcount, so the bill stays predictable as you grow.',
      },
      {
        question: 'Does Booksy support Arabic or work well in the Gulf region?',
        answer:
          'Booksy has no GCC presence, no Arabic, no local payment integration and no regional compliance. Daisy was built for the Gulf, with a native Arabic interface and local payment methods, and is live in Kuwait today.',
      },
      {
        question: 'How does Booksy\'s AI compare to Daisy\'s AI receptionist?',
        answer:
          'Digital Doorman answers the phone and redirects callers to online booking, which makes it a call router. It cannot take payments, answer detailed service questions or work through a complicated booking. Daisy\'s AI receptionist carries the whole journey: answering questions, booking, taking payment and following up, 24/7 in Arabic and English.',
      },
      {
        question: 'Is the Booksy app good for salon owners?',
        answer:
          'The consumer app is polished and reviews well for finding and booking services. The business app works, though owners mention navigation taking some learning, limited customization, and occasional sync problems between the consumer and business sides. In Daisy the business and customer sides are one system.',
      },
      {
        question: 'Can Booksy handle multiple salon locations?',
        answer:
          'Multi-location management sits in the higher Booksy Biz+ tier, but the product grew up around single-provider businesses, barbers especially. Cross-branch reporting and centralized staff management are less developed than on platforms built for it. Daisy handles multi-branch natively, with centralized analytics, staff scheduling across locations and one set of client records.',
      },
      {
        question: 'Does Booksy integrate with other business tools I use?',
        answer:
          'Integrations are limited: Google Calendar sync, basic social media booking links and Booksy\'s own payment processing. There is no open API to build against. Daisy covers Google Calendar sync, social media and payment gateways, and gives you API access to connect whatever else you run.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'Strong on mobile and strong with barbershops. Digital Doorman is a real competitive move, though narrow next to a full AI platform, and the Google AI Mode integration could firm up its position. No GCC presence at all is the key weakness.',
  },

  // ---------------------------------------------------------------------------
  // 3. Vagaro
  // ---------------------------------------------------------------------------
  vagaro: {
    slug: 'vagaro',
    name: 'Vagaro',
    website: 'https://www.vagaro.com',
    tier: 1,
    description:
      'All-in-one management platform for salons, spas and fitness businesses, with 220K+ of them on board. It acquired Schedulicity in January 2025. The marketplace and the breadth of features are its strengths.',
    founded: '2010',
    headquarters: 'Pleasanton, CA, USA',
    employeeCount: '500-700',
    funding: 'Bootstrapped / private',

    features: {
      onlineBooking: 3,
      posAndPayments: 3,
      clientManagement: 2,
      staffManagement: 2,
      marketingAndCrm: 2,
      inventoryManagement: 2,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 2,
      aiCapabilities: 1,
      brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      freeTrialDays: 30,
      startingPrice: '$30/mo',
      startingPriceNumeric: 30,
      tiers: [
        {
          name: 'Single',
          price: '$30/mo',
          priceNumeric: 30,
          billingCycle: 'monthly',
          features: [
            'Online booking',
            'Calendar management',
            'POS & payments',
            'Client management',
            'Marketing tools',
            'Reporting',
          ],
        },
        {
          name: '+1 Staff',
          price: '$40/mo',
          priceNumeric: 40,
          billingCycle: 'monthly',
          perStaff: true,
          perStaffCost: '+$10/additional calendar',
          features: ['Everything in Single', 'Additional staff calendar ($10 each)'],
        },
      ],
      transactionFees: '2.75% per transaction (Vagaro Pay)',
      hiddenCosts: [
        '$10/month per additional staff calendar',
        'Payment processing fees',
        'Text marketing add-on costs',
        'Website builder add-on',
        'Forms add-on',
      ],
      pricingModel: 'hybrid',
      pricingPageUrl: 'https://www.vagaro.com/pro/pricing',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'Capterra', rating: 4.7, reviewCount: 3463 },
      { platform: 'G2', rating: 4.3, reviewCount: 500 },
      { platform: 'App Store', rating: 4.7, reviewCount: 95000 },
      { platform: 'Google Play', rating: 4.3, reviewCount: 28000 },
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
      hasAiReceptionist: false,
      hasAiChatbot: true,
      hasSmartScheduling: false,
      hasAiMarketing: false,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription:
        'A basic AI chatbot that answers questions without booking an appointment or taking a payment. No AI receptionist, no smart scheduling, no marketing AI. Schedulicity was acquired in Jan 2025 to widen the marketplace.',
    },

    targetMarket:
      'Small and medium salons, spas and fitness businesses in North America. The breadth suits multi-service operators, and the price makes it easy to say yes to.',

    contentAndSeo: {
      estimatedMonthlyTraffic: '3M+',
      domainAuthority: 68,
      blogFrequency: '1-2 posts/week',
      topRankingKeywords: [
        'salon software',
        'spa booking software',
        'vagaro',
        'salon scheduling app',
        'beauty business software',
      ],
      contentTypes: ['blog', 'guides', 'marketplace pages', 'feature comparisons'],
      seoStrengths: [
        'Strong domain authority',
        'Comprehensive marketplace SEO pages',
        'Good keyword coverage for salon software terms',
      ],
      seoWeaknesses: [
        'Content quality is inconsistent',
        'Limited comparison content',
        'No podcast or video strategy',
      ],
    },

    messaging: {
      tagline: 'The all-in-one salon, spa & fitness software',
      primaryValueProp:
        'Affordable all-in-one business management with marketplace at $30/month starting price',
      targetAudience:
        'Cost-conscious salon and spa owners who want everything without paying enterprise rates',
      toneAndVoice: 'Practical and feature-led, always circling back to value',
      keyMessages: [
        'All-in-one at $30/month',
        '220K+ businesses trust Vagaro',
        '30-day free trial',
        'No contracts, cancel anytime',
        'Marketplace exposure included',
      ],
    },

    conversionStrategy: {
      primaryCta: 'Try it free for 30 days',
      freeTrialOffered: true,
      demoOffered: true,
      socialProof: [
        '220,000+ businesses',
        '3,400+ Capterra reviews',
        'Highest-rated salon software',
        'Featured in Business Insider',
      ],
      conversionTactics: [
        'Generous 30-day free trial',
        'Low starting price ($30/mo)',
        'Demo available for larger businesses',
        'Feature comparison pages vs competitors',
      ],
    },

    switchingAnalysis: {
      dataExport: true,
      contractLockIn: false,
      migrationSupport: true,
      switchingDifficulty: 'easy',
      lockInTactics: [
        'Client history and notes',
        'Marketplace presence and reviews',
        'Low price makes it hard to justify switching',
        'Add-on ecosystem creates investment',
      ],
      switchingIncentives: ['Free data migration assistance', 'No cancellation fees'],
    },

    growthVsOperations: {
      growthScore: 4,
      growthFeatures: [
        'Consumer marketplace',
        'Email/text marketing',
        'Social media booking links',
        'Gift certificates',
      ],
      operationsFeatures: [
        'POS & payments',
        'Calendar management',
        'Inventory tracking',
        'Payroll & reporting',
        'Staff management',
        'Forms & intake',
      ],
      assessment:
        'A feature-rich operations platform whose growth comes through the marketplace. Marketing exists but amounts to email and text blasts. Nothing AI-driven for acquisition or the customer lifecycle.',
    },

    daisyAdvantages: [
      '24/7 AI receptionist that books appointments and processes payments vs basic chatbot that can\'t book',
      'Official Meta Tech Provider with native WhatsApp and Instagram APIs vs basic SMS notifications',
      'AI-powered customer acquisition engine vs passive marketplace listing',
      'Native Arabic/English support vs English-only',
      'Full white-label brand control vs Vagaro-branded experience',
      'Cashback reward system for customer retention vs no loyalty program',
      'Smart AI scheduling optimization vs manual calendar management',
      'GCC market compliance and local payments vs no international support',
    ],

    daisySwitchingReasons: [
      'Chatbot can\'t actually book appointments, need real AI that converts',
      'Per-calendar add-on pricing adds up with growing team',
      'No Arabic support for Middle East expansion',
      'Want AI-driven marketing, not just email/text blasts',
      'Need white-labeling for brand consistency',
      'Want cashback rewards to drive customer loyalty',
      'Marketplace alone isn\'t enough for customer acquisition',
    ],

    competitorStrengths: [
      'Most affordable starting price ($30/mo) among full-featured platforms',
      'Highest volume of reviews (3,400+ on Capterra)',
      'Comprehensive feature set covering salon, spa, and fitness',
      'Generous 30-day free trial',
      'Strong POS and payment processing',
      'Acquired Schedulicity for expanded marketplace reach',
    ],

    competitorWeaknesses: [
      'AI chatbot cannot book appointments or process payments',
      'No Arabic support or GCC presence',
      'Add-on pricing creates unpredictable costs',
      'No white-labeling option',
      'Marketing tools are basic (no AI, no CRM automation)',
      'No cashback or loyalty system',
      'Interface can feel dated compared to newer platforms',
    ],

    faq: [
      {
        question: 'How does Vagaro pricing work?',
        answer:
          'Vagaro starts at $30/month for one user. Every additional staff calendar adds $10/month, and payment processing takes 2.75% per transaction. Text marketing, the website builder and forms are all extra. A 5-person salon lands around $70/month before transaction fees and add-ons.',
      },
      {
        question: 'How does Daisy compare to Vagaro?',
        answer:
          'Vagaro gives you comprehensive operations at a low price. What it does not give you is growth: a 24/7 AI receptionist, cashback-driven acquisition, white-label branding, native Arabic. Vagaro\'s chatbot answers questions. Daisy\'s AI books the appointment and takes the payment.',
      },
      {
        question: 'Can Vagaro\'s AI chatbot book appointments?',
        answer:
          'No. It answers basic questions about your business and stops there, with no booking and no payments. Daisy\'s AI receptionist runs the full booking flow, payment included, 24/7 in Arabic and English.',
      },
      {
        question: 'Can I switch from Vagaro to Daisy?',
        answer:
          'Yes. Vagaro has no contracts and lets you export your data. Daisy will move the client data, appointment history and service menus across, and most businesses are done inside a week.',
      },
      {
        question: 'What are the hidden fees with Vagaro?',
        answer:
          'The $30/month base price reads well, then the extras arrive. Each additional staff calendar is $10/month, payment processing takes 2.75% per transaction, text marketing charges per message, the website builder is an add-on, custom forms are paid, and branded app listings carry their own fee. A 5-person salon using marketing can pass $100+/month before transaction fees. Daisy includes AI marketing and team features in the base plan.',
      },
      {
        question: 'Does Vagaro work for salons in Dubai or Saudi Arabia?',
        answer:
          'Vagaro is built around the US, with no Arabic, no GCC payment methods and nothing for regional compliance. Daisy was built for the GCC, with a native Arabic and English interface and local payment integration, live in Kuwait today.',
      },
      {
        question: 'Does Vagaro have real AI features?',
        answer:
          'There is a basic AI chatbot that answers questions about your business. It cannot book, cannot take payment and cannot work through a complicated request on its own. No AI marketing, no scheduling optimization, no predictive analytics. Daisy\'s AI receptionist runs the full booking flow including payment, alongside AI marketing campaigns and smart scheduling, all in the base plan.',
      },
      {
        question: 'How good is the Vagaro mobile app for business owners?',
        answer:
          'The business app covers scheduling and client management, though users describe an interface crowded with too many features, and push notification reliability comes up often. The consumer marketplace app is a separate download. Daisy\'s business app is purpose-built, notifications arrive, and the customer side is part of the same experience.',
      },
      {
        question: 'Can Vagaro scale for multiple salon locations?',
        answer:
          'Multi-location is supported, but reporting across branches is basic and centralized inventory tracking has to be set up by hand. Integration gaps remain from the Schedulicity acquisition. Daisy gives multi-location businesses centralized analytics, staff scheduling across branches, one set of client records and inventory managed across every site.',
      },
      {
        question: 'How is Vagaro\'s customer support?',
        answer:
          'Phone, email and live chat, during US business hours, Mon-Fri. Users rate it responsive, while noting that complicated problems take several rounds to settle. There is no 24/7 cover. Daisy provides dedicated account management, live chat and priority support on every plan, across GCC and global business hours.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'The best value of the Tier 1 competitors at $30/mo. The Schedulicity acquisition in Jan 2025 widened the marketplace. The AI chatbot cannot book. Main vulnerability: no real AI and no internationalization.',
  },

  // ---------------------------------------------------------------------------
  // 4. Mindbody
  // ---------------------------------------------------------------------------
  mindbody: {
    slug: 'mindbody',
    name: 'Mindbody',
    website: 'https://www.mindbodyonline.com',
    tier: 1,
    description:
      'The veteran of wellness software, established in 2001, with the largest consumer marketplace in the category. Vista Equity Partners has owned it since a $1.9B acquisition in 2019. It serves fitness, wellness and beauty businesses worldwide.',
    founded: '2001',
    headquarters: 'San Luis Obispo, CA, USA',
    employeeCount: '2,000+',
    funding: 'PE-backed (Vista Equity, $1.9B acquisition)',

    features: {
      onlineBooking: 3,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 3,
      marketingAndCrm: 2,
      inventoryManagement: 2,
      reportingAndAnalytics: 3,
      marketplaceAndDiscovery: 3,
      aiCapabilities: 1,
      brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '$139/mo',
      startingPriceNumeric: 139,
      tiers: [
        {
          name: 'Starter',
          price: '$139/mo',
          priceNumeric: 139,
          billingCycle: 'monthly',
          features: [
            'Schedule & booking',
            'Client management',
            'Basic reporting',
            'Mobile app',
            'Marketplace listing',
          ],
        },
        {
          name: 'Accelerate',
          price: '$279/mo',
          priceNumeric: 279,
          billingCycle: 'monthly',
          features: [
            'Everything in Starter',
            'Advanced marketing',
            'Automations',
            'AI front desk (add-on)',
            'Reviews management',
          ],
        },
        {
          name: 'Ultimate',
          price: '$499/mo',
          priceNumeric: 499,
          billingCycle: 'monthly',
          features: [
            'Everything in Accelerate',
            'Advanced reporting & dashboards',
            'Dedicated account manager',
            'Priority support',
          ],
        },
        {
          name: 'Ultimate Plus',
          price: '$699/mo',
          priceNumeric: 699,
          billingCycle: 'monthly',
          features: [
            'Everything in Ultimate',
            'Multiple locations',
            'Custom integrations',
            'Enterprise features',
          ],
        },
      ],
      hiddenCosts: [
        'Messenger[ai] AI front desk is separate add-on (~$199/mo)',
        'Payment processing fees not included',
        'Premium marketplace placement costs extra',
        'Contract lock-in with early termination fees',
        'Setup and onboarding fees for higher tiers',
      ],
      pricingModel: 'flat',
      pricingPageUrl: 'https://www.mindbodyonline.com/pricing',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'Capterra', rating: 4.0, reviewCount: 2961 },
      { platform: 'G2', rating: 3.6, reviewCount: 750 },
      { platform: 'App Store', rating: 4.8, reviewCount: 400000 },
      { platform: 'Google Play', rating: 4.2, reviewCount: 85000 },
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
      hasAiReceptionist: false,
      hasAiChatbot: false,
      hasSmartScheduling: false,
      hasAiMarketing: false,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription:
        'No AI of its own. The AI front desk, Messenger[ai], is a third-party add-on costing about ~$199/mo on top. Higher tiers include basic automated marketing. No smart scheduling and no AI analytics.',
    },

    targetMarket:
      'Medium and large fitness studios, wellness centers and beauty businesses in North America. The centre of gravity is fitness, meaning yoga, pilates and gyms, rather than beauty. Enterprise-minded, with multi-location support.',

    contentAndSeo: {
      estimatedMonthlyTraffic: '8M+',
      domainAuthority: 78,
      blogFrequency: '3-4 posts/week',
      topRankingKeywords: [
        'fitness class booking',
        'yoga studio software',
        'gym management software',
        'wellness business platform',
        'mindbody app',
      ],
      contentTypes: ['blog', 'research reports', 'webinars', 'case studies', 'industry trends'],
      seoStrengths: [
        'Highest domain authority in category',
        'Extensive content library',
        'Strong marketplace SEO',
        'Industry research reports',
      ],
      seoWeaknesses: [
        'Content skews fitness over beauty',
        'Legacy URL structures',
        'Slow site performance',
      ],
    },

    messaging: {
      tagline: 'The wellness technology platform',
      primaryValueProp:
        'The industry\'s largest consumer marketplace combined with comprehensive business management for wellness businesses',
      targetAudience:
        'Established fitness studios, wellness centers and beauty businesses that want marketplace exposure and enterprise-grade tools',
      toneAndVoice: 'Professional and enterprise-facing, positioned as the industry leader',
      keyMessages: [
        'World\'s largest wellness marketplace',
        '3M+ active consumers',
        'Trusted by industry leaders',
        'Comprehensive business management',
        '20+ years of industry experience',
      ],
    },

    conversionStrategy: {
      primaryCta: 'Get a demo',
      leadMagnets: ['Industry trend reports', 'ROI calculator', 'Webinars'],
      freeTrialOffered: false,
      demoOffered: true,
      socialProof: [
        '3M+ active consumers',
        '20+ years in industry',
        'Industry research reports',
        'Enterprise client logos',
      ],
      conversionTactics: [
        'Demo-first sales process',
        'Industry reports as lead magnets',
        'Marketplace visibility as selling point',
        'Enterprise sales team',
      ],
    },

    switchingAnalysis: {
      dataExport: true,
      contractLockIn: true,
      migrationSupport: true,
      switchingDifficulty: 'hard',
      lockInTactics: [
        'Annual contracts with early termination fees',
        'Deep data integration makes switching complex',
        'Marketplace listing and consumer relationships',
        'Enterprise integrations and API dependencies',
        'Staff training investment',
      ],
      switchingIncentives: [
        'Dedicated migration team for enterprise',
        'Data export tools available',
      ],
    },

    growthVsOperations: {
      growthScore: 5,
      growthFeatures: [
        'Largest consumer marketplace (3M+)',
        'Marketing automation (higher tiers)',
        'Review management',
        'Social media integration',
      ],
      operationsFeatures: [
        'Schedule & booking',
        'POS & payments',
        'Staff management',
        'Inventory',
        'Advanced reporting',
        'Multi-location management',
      ],
      assessment:
        'Operations and growth are both covered, but the growth features sit behind expensive tiers. The marketplace is the strongest asset. Marketing automation requires the Accelerate tier at $279+/mo, and the AI is entirely add-on.',
    },

    daisyAdvantages: [
      '24/7 AI receptionist included vs Messenger[ai] as $199/mo add-on',
      'Predictable pricing from Day 1 vs $139-699/mo tier complexity',
      'Native Arabic/English support vs English-only',
      'No contracts or lock-in vs annual contracts with termination fees',
      'Built for beauty/wellness vs fitness-first platform',
      'Full white-label brand control vs Mindbody-branded marketplace',
      'Customer acquisition engine vs marketplace-dependent growth',
      'GCC compliance and local payments vs no international support',
    ],

    daisySwitchingReasons: [
      'Monthly costs escalating ($139-699 + add-ons) with limited ROI',
      'Locked into annual contract and want flexibility',
      'Need Arabic support for GCC market',
      'AI front desk add-on is expensive and separate from platform',
      'Platform feels fitness-focused, not beauty-optimized',
      'Want brand control instead of Mindbody-branded experience',
      'Need GCC compliance and local payment methods',
      'Frustrated with declining Capterra/G2 ratings and support quality',
    ],

    competitorStrengths: [
      'Largest consumer marketplace in wellness (3M+ active users)',
      'Most comprehensive enterprise feature set',
      'Highest domain authority and content library',
      'Strong brand recognition (20+ years)',
      'Advanced reporting and analytics',
      'Multi-location management',
    ],

    competitorWeaknesses: [
      'Most expensive option ($139-699/mo + add-ons)',
      'No native AI. Messenger[ai] is expensive add-on',
      'Annual contracts with termination fees',
      'Declining review ratings (4.0 Capterra, 3.6 G2)',
      'No Arabic or GCC support',
      'Fitness-focused, beauty is secondary',
      'Complex pricing makes true cost hard to predict',
      'Slow to innovate under PE ownership',
    ],

    faq: [
      {
        question: 'How much does Mindbody actually cost?',
        answer:
          'Plans run from $139/mo for Starter to $699/mo for Ultimate Plus, and the real number is higher. The AI front desk, Messenger[ai], adds about ~$199/mo, payment processing adds per-transaction fees, and the annual contract keeps you there. A mid-size salon on Accelerate with AI can reach $478+/mo before transaction fees.',
      },
      {
        question: 'How does Daisy compare to Mindbody?',
        answer:
          'Mindbody has the largest marketplace, charges premium prices, and sells AI as an expensive add-on. Daisy puts the AI receptionist, marketing and analytics in the base platform, with no contract. For a beauty business it also brings Arabic support, white-labeling and cashback rewards, none of which Mindbody offers.',
      },
      {
        question: 'Is Mindbody good for beauty salons?',
        answer:
          'Mindbody was built for fitness, meaning yoga, pilates and gyms, then extended into beauty. It works for a salon, though much of what a salon needs sits in the higher tiers. A beauty-focused platform like Daisy is shaped around salons and spas from the start, with an AI receptionist, cashback rewards and white-label booking pages.',
      },
      {
        question: 'Can I cancel my Mindbody contract?',
        answer:
          'Mindbody generally requires an annual contract with an early termination fee, so check what your agreement says. When you are ready to move, Daisy has no contracts and will handle the data transfer.',
      },
      {
        question: 'Why is Mindbody so expensive compared to other salon software?',
        answer:
          'The pricing follows the enterprise-first model it has run under Vista Equity Partners ownership. Plans go from $139/mo to $699/mo, and the extras stack: the Messenger[ai] front desk adds about ~$199/mo, payment processing adds per-transaction fees, and the annual contract holds you in place. A mid-size salon on Accelerate with AI can reach $478+/mo. Daisy includes the AI in the base plan for a fraction of that.',
      },
      {
        question: 'Does Mindbody support Arabic or work well in the Gulf?',
        answer:
          'The platform is built around English and localizes little. There is no Arabic interface, no GCC payment methods and no regional VAT compliance. For a salon or spa in the Gulf, Daisy offers native Arabic and English, local payment integration and support built for the region, live in Kuwait today.',
      },
      {
        question: 'Does Mindbody have real AI or is it just marketing?',
        answer:
          'The AI arrived through the Messenger[ai] acquisition, which answers calls and does basic booking. It is a paid add-on at about ~$199/mo and sits loosely on top of the platform rather than inside it. The core product has no AI marketing, no scheduling optimization and no predictive analytics. Daisy includes the receptionist, marketing and smart scheduling in the base plan.',
      },
      {
        question: 'How hard is it to move my data out of Mindbody?',
        answer:
          'Migrating off Mindbody takes work. Exports are allowed but the process is cumbersome, and users report incomplete results, particularly for historical reporting and client communication records. The annual contract also constrains when you can move. Daisy provides dedicated enterprise migration support with a parallel run period, so nothing is lost on the way across.',
      },
      {
        question: 'Is the Mindbody app reliable for salon management?',
        answer:
          'The consumer app for finding and booking is well known and has millions of downloads. The business app has been sliding in the reviews, with owners citing a dated interface, slow performance and features that feel aimed at fitness studios rather than beauty businesses. Daisy\'s app was built for beauty and wellness, and it is quick.',
      },
      {
        question: 'Can Mindbody handle multi-location salon chains?',
        answer:
          'Yes, and it is one of Mindbody\'s real strengths at the higher tiers. It costs, though: $419-$699/mo per location, and some chains still consolidate cross-location reporting by hand. Daisy runs multi-branch operations with centralized dashboards, one set of client records and cross-location analytics, at a price more businesses can reach.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'The largest and longest-established player, and showing signs of stagnation under private equity ownership. Review scores are falling, pricing is high and there is no native AI. A fitness-first posture leaves beauty underserved. Main vulnerability: cost and contracts.',
  },

  // ---------------------------------------------------------------------------
  // 5. Zenoti
  // ---------------------------------------------------------------------------
  zenoti: {
    slug: 'zenoti',
    name: 'Zenoti',
    website: 'https://www.zenoti.com',
    tier: 1,
    description:
      'Enterprise-grade, AI-first management platform for salons, spas and med spas. Its 6 AI agents make it the most comprehensive AI suite in the industry. A Dubai office gives it real GCC presence.',
    founded: '2010',
    headquarters: 'Bellevue, WA, USA',
    employeeCount: '1,500+',
    funding: '$282M+',

    features: {
      onlineBooking: 3,
      posAndPayments: 3,
      clientManagement: 3,
      staffManagement: 3,
      marketingAndCrm: 3,
      inventoryManagement: 3,
      reportingAndAnalytics: 3,
      marketplaceAndDiscovery: 1,
      aiCapabilities: 3,
      brandingAndWhiteLabel: 1,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: 'Custom (~$225+/mo per location)',
      startingPriceNumeric: 225,
      tiers: [
        {
          name: 'Essential',
          price: 'Custom',
          features: [
            'Core booking & scheduling',
            'POS & payments',
            'Client management',
            'Basic reporting',
            'Mobile app',
          ],
        },
        {
          name: 'Grow',
          price: 'Custom',
          features: [
            'Everything in Essential',
            'Marketing automation',
            'Advanced analytics',
            'AI scheduling',
            'Multi-location dashboard',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          features: [
            'Everything in Grow',
            'Full AI suite (6 agents)',
            'Custom integrations',
            'Dedicated success manager',
            'API access',
          ],
        },
      ],
      hiddenCosts: [
        'Custom pricing requires sales call, no transparency',
        'Implementation and onboarding fees',
        'Per-location pricing for multi-site businesses',
        'Advanced AI features may be in higher tiers',
      ],
      pricingModel: 'per-location',
      pricingPageUrl: 'https://www.zenoti.com/pricing',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'Capterra', rating: 4.4, reviewCount: 1239 },
      { platform: 'G2', rating: 4.3, reviewCount: 600 },
    ],

    gccPresence: {
      hasArabicUI: false,
      arabicQuality: 'none',
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
      hasAiPricing: true,
      aiDescription:
        'The most comprehensive AI suite available: 6 AI agents covering the phone receptionist, marketing campaigns, review management, scheduling optimization, analytics and staff recommendations. AI comes first here, and the investment continues.',
    },

    targetMarket:
      'Mid-size to large multi-location salons, spas, med spas and fitness franchises. Enterprise-focused, aimed at businesses with 30+ employees, and growing in the GCC out of the Dubai office.',

    contentAndSeo: {
      estimatedMonthlyTraffic: '1.5M+',
      domainAuthority: 62,
      blogFrequency: '2-3 posts/week',
      topRankingKeywords: [
        'salon management software enterprise',
        'med spa software',
        'spa management platform',
        'zenoti',
        'AI salon software',
      ],
      contentTypes: ['blog', 'whitepapers', 'webinars', 'case studies', 'ROI calculators'],
      seoStrengths: [
        'Strong enterprise keyword coverage',
        'AI-focused content differentiation',
        'Case studies with ROI data',
      ],
      seoWeaknesses: [
        'Lower domain authority than Fresha/Mindbody',
        'Limited SMB-focused content',
        'Gated content reduces SEO value',
      ],
    },

    messaging: {
      tagline: 'AI-first salon, spa & med spa software',
      primaryValueProp:
        'Enterprise-grade platform with the industry\'s most advanced AI suite, designed for multi-location beauty and wellness businesses',
      targetAudience:
        'Multi-location salon, spa and med spa owners who want enterprise features and AI automation',
      toneAndVoice: 'Enterprise and technology-forward, always arguing from ROI',
      keyMessages: [
        'AI-first platform with 6 AI agents',
        'Built for multi-location businesses',
        'Enterprise-grade reliability',
        '$282M+ funded by top VCs',
        'Trusted by leading salon and spa brands',
      ],
    },

    conversionStrategy: {
      primaryCta: 'Request a demo',
      leadMagnets: ['ROI calculator', 'Industry whitepapers', 'Webinars', 'Case studies'],
      freeTrialOffered: false,
      demoOffered: true,
      socialProof: [
        '$282M+ in funding',
        'Enterprise client logos',
        'Industry awards',
        'AI leadership positioning',
      ],
      conversionTactics: [
        'Enterprise sales process with demos',
        'ROI-focused messaging',
        'AI differentiation',
        'Case studies with measurable results',
      ],
    },

    switchingAnalysis: {
      dataExport: true,
      contractLockIn: true,
      migrationSupport: true,
      switchingDifficulty: 'hard',
      lockInTactics: [
        'Annual/multi-year enterprise contracts',
        'Deep system integrations',
        'Staff training and workflow dependencies',
        'Custom configuration investment',
        'Data migration complexity',
      ],
      switchingIncentives: ['Dedicated migration team', 'Parallel run period offered'],
    },

    growthVsOperations: {
      growthScore: 7,
      growthFeatures: [
        'AI marketing campaigns',
        'AI review management',
        'Smart scheduling optimization',
        'Client retention automation',
        'AI analytics and insights',
      ],
      operationsFeatures: [
        'POS & payments',
        'Inventory management',
        'Staff management',
        'Multi-location dashboard',
        'Advanced reporting',
        'Compliance tools',
      ],
      assessment:
        'The most growth-oriented competitor of the set, and the most AI-first. A solid operations foundation with 6 AI agents working on top of it. Most of those AI features sit in the higher enterprise tiers. On AI, this is Daisy\'s most direct competitor.',
    },

    daisyAdvantages: [
      'Transparent, predictable pricing vs opaque enterprise quotes',
      'Native Arabic UI vs English-only platform (despite GCC offices)',
      'No contracts or lock-in vs annual enterprise agreements',
      'SMB-friendly from Day 1 vs enterprise-only focus',
      'Cashback and marketplace consumer acquisition vs no marketplace',
      'Full white-label brand control vs Zenoti-branded experience',
      'Faster onboarding (days, not weeks) vs complex enterprise implementation',
    ],

    daisySwitchingReasons: [
      'Enterprise pricing too expensive for small-medium businesses',
      'Need Arabic UI. Zenoti has GCC offices but English-only platform',
      'Locked into annual contract and want flexibility',
      'Don\'t need enterprise complexity, want simpler, faster setup',
      'Want consumer-facing marketplace and cashback for acquisition',
      'Need transparent pricing without sales calls',
    ],

    competitorStrengths: [
      'Most comprehensive AI suite in the industry (6 agents)',
      'Enterprise-grade features and reliability',
      'Physical GCC presence with Dubai office',
      'Strong multi-location management',
      'Robust inventory and reporting systems',
      'Heavy VC backing ($282M+) ensures continued development',
    ],

    competitorWeaknesses: [
      'No Arabic UI despite GCC presence. English only',
      'Enterprise pricing excludes SMBs',
      'Opaque pricing requires sales calls',
      'Annual contracts with lock-in',
      'Complex implementation (weeks, not days)',
      'No consumer marketplace or cashback program',
      'AI features gated behind higher tiers',
      'Overkill for single-location businesses',
    ],

    faq: [
      {
        question: 'How does Zenoti\'s AI compare to Daisy\'s?',
        answer:
          'Zenoti has the most comprehensive AI suite of any traditional platform, running 6 AI agents. Those features generally sit in enterprise tiers behind opaque pricing. Daisy puts the AI receptionist, smart scheduling and AI marketing in the base platform at a published price, and adds the native Arabic support Zenoti does not have.',
      },
      {
        question: 'Is Zenoti suitable for small salons?',
        answer:
          'Zenoti is designed for mid-size and large multi-location businesses, priced accordingly at typically $225+/month per location, on a contract. A small salon is better served by something like Daisy, which offers the AI features at a price a smaller business can carry, without a contract.',
      },
      {
        question: 'Does Zenoti support Arabic?',
        answer:
          'It has a Dubai office and serves all 6 GCC countries, and the platform is still English-only with no Arabic interface. Daisy treats Arabic and English as equal priorities, designed for the GCC from the start.',
      },
      {
        question: 'Can I switch from Zenoti to Daisy?',
        answer:
          'Zenoti generally runs annual contracts, so check what yours says. Once it allows, Daisy provides enterprise migration support covering the data transfer, a parallel run period and staff training. The move usually takes less time than the original Zenoti implementation did.',
      },
      {
        question: 'How much does Zenoti really cost?',
        answer:
          'Pricing is custom and opaque, starting around $225+/month per location and climbing with add-ons such as the advanced AI agents, marketing automation and enterprise features. Annual contracts are standard and implementation fees can be substantial. Daisy publishes its pricing, includes the AI in the base plan and asks for no contract.',
      },
      {
        question: 'Is Zenoti too complex for small or mid-size salons?',
        answer:
          'Zenoti is built for enterprise and multi-location businesses and carries the complexity that implies. Smaller and mid-size salons tend to find the implementation long, running weeks to months, the learning curve steep and the feature set more than they need. Daisy aims at the same capability without the enterprise weight, and works from a single-location salon up to a growing chain.',
      },
      {
        question: 'Why doesn\'t Zenoti have Arabic support despite having a Dubai office?',
        answer:
          'It has an office in Dubai and clients across all six GCC countries, and the platform remains English-only with no Arabic user interface. Arabic-speaking staff and customers work in English or not at all. Daisy treats Arabic and English as equal priorities, built for GCC businesses and the people they serve.',
      },
      {
        question: 'How good is Zenoti\'s customer support?',
        answer:
          'Support is tiered. Basic is included, while priority and dedicated support need a higher plan. Users on standard plans report slow responses and tickets that take days to close, which is hard going on a platform this complex when something breaks. Daisy provides responsive support on every plan, with dedicated account management.',
      },
      {
        question: 'Does Zenoti have a consumer marketplace for customer acquisition?',
        answer:
          'No. Zenoti is a B2B management platform with no consumer marketplace and no discovery features, so the traffic is yours to find. Daisy puts a consumer marketplace together with cashback rewards and AI-powered marketing to bring new customers in, a 360-degree acquisition engine Zenoti does not offer.',
      },
      {
        question: 'How does Zenoti\'s mobile app compare to Daisy\'s?',
        answer:
          'There are staff and customer apps, both solid for enterprise operations. They also mirror the desktop platform\'s enterprise orientation, and users find them heavy going for everyday salon tasks. Daisy\'s mobile app is built for speed and simplicity, with AI handling the routine work in the background.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'The most direct competitor on AI. Where Daisy separates: Arabic support, which Zenoti lacks despite its GCC offices, along with transparent pricing, no contracts, reach down into smaller businesses, and a consumer marketplace with cashback for acquisition.',
  },
};

// ---------------------------------------------------------------------------
// I18n-wrapped export — lazily resolved to avoid circular import
// ---------------------------------------------------------------------------

export function getTier1CompetitorsI18n(): I18nContent<Record<string, CompetitorData>> {
  const { tier1CompetitorsAr } = require('./tier1Data.ar') as { tier1CompetitorsAr: Record<string, CompetitorData> };
  return { en: tier1Competitors, ar: tier1CompetitorsAr };
}
