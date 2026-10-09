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
      reportingAndAnalytics: 3, // 60 reports + live dashboards, evidenced in Fresha's own Schedule 4
      marketplaceAndDiscovery: 3,
      aiCapabilities: 2, // AI Concierge answers calls and messages; Daisy covers WhatsApp, Instagram and the booking site, not calls
      brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      // 7 days, per Schedule 2 of the cease and desist. We previously asserted
      // 14, which was unsourced and wrong.
      freeTrialDays: 7,
      // Fresha publishes local-currency pricing per market. These are its published
      // UAE figures (fresha.com/pricing, UAE), the market these pages address.
      // Source: Fresha's own schedules, 2026-09-29.
      startingPrice: 'From AED 149.95/mo (UAE Independent plan)',
      // Sorting only, never displayed: approximate USD equivalent of AED 149.95
      // so the price sort stays meaningful across a USD-denominated list.
      startingPriceNumeric: 40.83,
      tiers: [
        {
          name: 'Independent',
          price: 'AED 149.95/mo',
          priceNumeric: 149.95,
          features: [
            'One team member',
            'Multiple locations',
            'Appointment scheduling',
            'Client database',
          ],
        },
        {
          name: 'Team',
          price: 'Custom rates',
          features: [
            'Unlimited team members',
            'Phone support',
            'Team management',
          ],
        },
      ],
      transactionFees: 'Online payments 4.90% + AED 0.75 per transaction (UAE published)',
      commissionOnMarketplace: 'One-time 50% commission on new marketplace clients (minimum AED 20); returning clients free',
      // Fresha publishes all of these on its own pricing page. Figures below are
      // its published UAE rates, so the point is that they stack, not that they
      // are concealed.
      hiddenCosts: [
        'Online payments charged at 4.90% + AED 0.75 per transaction, on top of the subscription',
        'One-time 50% commission on new marketplace clients, minimum AED 20',
        'Marketing emails free for the first 50 each month, then AED 0.08 each; texts AED 0.14',
        'Insights add-on at AED 319.95 per bookable team member per month',
        ],
      pricingModel: 'hybrid',
      pricingPageUrl: 'https://www.fresha.com/pricing',
      lastVerified: '2026-09-29',
    },

    reviews: [
      { platform: 'Capterra', rating: 4.8, reviewCount: 1441 },
      { platform: 'G2', rating: 4.5, reviewCount: 800 },
      { platform: 'App Store', rating: 4.9, reviewCount: 350000 },
      { platform: 'Google Play', rating: 4.8, reviewCount: 125000 },
    ],

    gccPresence: {
      hasArabicUI: true,
      // Fresha announced "Fresha is live in Arabic" (fresha.com/blog/expanding-in-the-GCC,
      // 2025-07). Verified 2026-09-29: fresha.com/ar/pricing serves <html lang="ar" dir="rtl">.
      // 'translated' not 'native': an Arabic UI demonstrably exists, but we have not
      // established localisation depth or local payment rails. Not 'none'.
      arabicQuality: 'translated',
      // All six GCC states. Fresha publishes local-currency pricing in each:
      // AED 149.95 (UAE), SAR 149.95 (KSA), QAR 149.95 (Qatar), OMR 11.95 (Oman),
      // BHD 14.95 (Bahrain), and operates in Kuwait. An earlier correction here
      // listed five and omitted Bahrain; Fresha's own published Bahrain pricing
      // shows that was wrong.
      gccCountries: ['UAE', 'KSA', 'Qatar', 'Oman', 'Bahrain', 'Kuwait'],
      // Not independently verified either way. We assert no local-compliance
      // or local-rails equivalence, but we no longer claim their absence.
      // Fresha states it provides UAE-compliant VAT/TRN invoicing.
      localCompliance: true,
      localPaymentMethods: false,
      // Fresha publishes teams in Dubai and Saudi Arabia.
      localSupport: true,
    },

    aiCapabilities: {
      // Fresha's AI Concierge answers calls and messages and books
      // appointments (its own page, re-verified 2026-10-02). These booleans
      // render directly as table cells, so a false here publishes a bare
      // "Not Available" - the exact claim in allegation 2(b).
      hasAiReceptionist: true,
      hasAiChatbot: true,
      // Fresha announced AI-powered intelligent scheduling, including Dynamic
      // Reassignment, on 8 May 2026 (fresha.com/blog/fresha-ai-powered-
      // intelligent-scheduling-beauty-wellness). Found by the competitor watch
      // on 2026-10-06.
      hasSmartScheduling: true,
      hasAiMarketing: false,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription:
        'Fresha publishes an AI Concierge that answers calls and messages and books appointments, sold as a paid add-on at $99.95 per location per month, including 200 minutes and 500 messages. Its published pages do not list WhatsApp or Instagram as Concierge channels, so confirm channel coverage with Fresha directly. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site in Arabic and English; it does not answer phone calls today.',
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
        'Competitively priced plans, published per market',
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
      // switchingIncentives in this same object lists 'Free migration tools'.
      migrationSupport: true,
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
        'Reporting suite (~60 reports and live dashboards)',
      ],
      assessment:
        'An operations platform whose growth story is the marketplace. Marketing is a pay-per-use add-on, and acquisition runs through marketplace placement, with marketing billed per message on top.',
    },

    daisyAdvantages: [
      'AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English, taking bookings and payments',
      'Official Meta Tech Provider with native WhatsApp Business API and Instagram integration, vs email and SMS campaigns with no two-way WhatsApp or Instagram automation',
      '360° customer acquisition (marketplace + cashback + AI marketing) vs marketplace-only discovery',
      'Arabic and English as equals across the whole product, with an AI receptionist that works in both',
      'A booking page that carries your logo, name and colours, with no platform branding',
      'Predictable flat pricing vs subscription fees plus transaction fees and commissions',
      'AI that recommends the next action, on top of dashboards and reports',
      'GCC-built, with cashback acquisition and local payment integration in every plan',
    ],

    daisySwitchingReasons: [
      'Would rather not pay a marketplace commission on each new client it introduces - a one-time 50% in the UAE, 20% in Fresha\'s USD markets',
      'Want Arabic and English as equals across staff tools, client messages and booking pages, with an AI receptionist that works in both',
      'Want an AI receptionist on WhatsApp and Instagram, in Arabic and English',
      'Want marketing included in the plan price rather than billed per message',
      'Want a booking page carrying your logo, name and colours and no platform branding',
      // Was 'Need local payment methods and VAT compliance for GCC'. Framed as
      // a reason to leave Fresha, it implied a compliance gap on their side -
      // the precise claim BSA's letter raises at 3.1, and the one thing it
      // complains of that is NOT enumerated in 2(a) to 2(d). Fresha states it
      // provides UAE-compliant VAT/TRN invoicing; we have no evidence otherwise.
      'Want cashback-funded customer acquisition and local payment rails in one plan',
      'Pricing moved from free to paid subscriptions, which changed your numbers',
    ],

    competitorStrengths: [
      'Largest beauty marketplace (25M+ consumers)',
      'Competitive entry price, published in local currency per market',
      'Very high app store ratings and consumer adoption',
      'Global presence with strong brand recognition',
      'Simple, intuitive user interface',
    ],

    competitorWeaknesses: [
      'AI Concierge is a paid add-on at $99.95 per location per month, and its published pages do not list WhatsApp or Instagram as supported channels',
      'Marketing is billed per message once the first 50 emails each month are used',
      'Subscription fees plus transaction fees and marketplace commissions add up quickly',
      'Marketing is email and SMS with no AI campaign automation',
      'Marketplace bookings carry Fresha branding, though direct booking links, Facebook and Instagram booking and a paid Smart Website add-on are also offered; Daisy includes a fully branded booking page in every plan',
      'Marketplace commission is charged on every new client it introduces, on top of the subscription',
      'Subscription, transaction fee and marketplace commission are billed separately, so the monthly total depends on your volume',
    ],

    faq: [
      {
        question: 'How much does Fresha cost?',
        answer:
          'Fresha is no longer free, and it prices per market. In the UAE its published rate is AED 149.95 per month for the Independent plan, with Team plans at custom rates. On top of the subscription sit online payments at 4.90% + AED 0.75 per transaction, a one-time 50% commission on new marketplace clients with a minimum of AED 20, and per-message charges for marketing once the first 50 emails each month are used. Those charges stack, so the monthly total is worth working out for your own volume rather than reading off the headline plan price.',
      },
      {
        question: 'How does Daisy compare to Fresha for salon management?',
        answer:
          'Fresha covers operations and attaches a marketplace, and it ships an AI Concierge that answers calls and messages, plus an Arabic interface. Daisy runs its AI receptionist on WhatsApp, Instagram and the booking site, treats Arabic and English as equals, and adds cashback acquisition and a fully branded booking page.',
      },
      {
        question: 'Can I switch from Fresha to Daisy?',
        answer:
          'Yes. Fresha has no contracts and no lock-in period. Daisy will help move your client database, service menu and booking history across. Most businesses are switched inside a week without going offline.',
      },
      {
        question: 'Does Fresha work in the Middle East?',
        answer:
          'Yes. Fresha operates across all six GCC states and publishes local-currency pricing in each, with an Arabic interface and teams in Dubai and Saudi Arabia. Daisy was built for the GCC from the start, with Arabic and English as equals and local payment integration, and it is live in all six GCC countries.',
      },
      {
        question: 'Is Fresha really free to use?',
        answer:
          'No. The free plan is gone. Fresha now charges a monthly subscription, AED 149.95 in the UAE for the Independent plan, plus online payments at 4.90% + AED 0.75 per transaction, a one-time 50% commission on new marketplace clients, and per-message charges for marketing beyond the first 50 emails a month. Daisy charges one all-inclusive price, with no marketplace commission and no per-message charge.',
      },
      {
        question: 'What does Fresha cost on top of the subscription?',
        answer:
          'Fresha publishes these charges on its own pricing page, so they are not concealed, but they do stack. In the UAE: online payments at 4.90% + AED 0.75 per transaction, a one-time 50% commission on new marketplace clients with an AED 20 minimum, marketing emails free for the first 50 each month and then AED 0.08 each, texts at AED 0.14, and an Insights add-on at AED 319.95 per bookable team member per month. Added together these can exceed the subscription itself. Daisy folds marketing, AI and payment processing into one plan price.',
      },
      {
        question: 'How hard is it to migrate my data from Fresha?',
        answer:
          'Fresha lets you export client data and appointment history. With Daisy the migration is handled for you: our team moves the client database, service menu, staff schedules and booking history. Most businesses are switched inside a week without going offline.',
      },
      {
        question: 'Does Fresha have AI features like Daisy?',
        answer:
          'Fresha publishes an AI Concierge that answers calls and messages and books appointments, sold as a paid add-on at $99.95 per location per month. Its published pages do not list WhatsApp or Instagram as Concierge channels. Daisy\'s AI receptionist handles WhatsApp and Instagram chat and the booking site, takes payments, and works in Arabic and English. It does not answer phone calls today.',
      },
      {
        question: 'How good is the Fresha mobile app?',
        answer:
          'Fresha\'s consumer app rates highly for finding and booking. Daisy\'s business app is built around salon operations, with the AI receptionist, cashback and payments in one place.',
      },
      {
        question: 'Can I reach Fresha customer support quickly?',
        answer:
          'Fresha publishes email support with a typical two-day response, chat with a typical two-minute response on all plans, and phone support on the Team plan. Daisy includes customer support on every plan, with priority support on the higher tiers.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'No longer free. Monthly subscriptions now sit on top of transaction fees, on top of published transaction fees and marketplace commission. Fresha ships an AI Concierge that answers calls and messages, and is live in Arabic with GCC teams, so the old absence claims no longer hold. Main vulnerability: costs that compound across subscription, transaction fees and commissions.',
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
            'AI Receptionist (beta)',
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
        'Booksy\'s AI Receptionist (beta) answers calls day or night and books the appointment onto the Booksy calendar. It is English and Spanish, and access is request-based while in beta. There is no AI chatbot for WhatsApp or Instagram, no scheduling optimization and no marketing automation.',
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
        'AI Receptionist (beta)',
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
        'AI Receptionist for calls (beta)',
      ],
      operationsFeatures: [
        'Mobile calendar',
        'Client database',
        'POS & payments',
        'Staff management',
        'Inventory tracking',
      ],
      assessment:
        'Operations-focused, with the marketplace as its main growth channel. Its AI Receptionist books from phone calls, but stops at the phone: no WhatsApp or Instagram, and no marketing or acquisition tools that work on their own.',
    },

    daisyAdvantages: [
      'Full AI ecosystem (receptionist + chatbot + smart scheduling + marketing) vs a phone-only AI receptionist',
      'Official Meta Tech Provider with native WhatsApp and Instagram messaging vs no messaging platform integration',
      'Native multilingual support (Arabic/English and more) vs English-only platform',
      'Customer acquisition engine with cashback rewards vs basic marketplace listing',
      'Branded booking page with no Daisy branding vs Booksy-branded experience',
      'Complete GCC market support vs zero GCC presence',
      'All-in-one flat pricing vs per-provider pricing that scales with team',
      'AI-powered marketing automation vs no marketing AI',
    ],

    daisySwitchingReasons: [
      'Need Arabic support for GCC market clients',
      'Want comprehensive AI beyond just call handling',
      'Per-provider pricing getting expensive as team grows',
      'Need customer acquisition tools beyond marketplace',
      'Want a branded booking experience for brand building',
      'Need GCC compliance and local payment methods',
    ],

    competitorStrengths: [
      'Excellent mobile app experience',
      'Strong in barbershop vertical',
      'AI Receptionist that books from calls (beta)',
      'Large consumer marketplace',
      'Google AI Mode integration announced',
      'Affordable per-provider pricing for solopreneurs',
    ],

    competitorWeaknesses: [
      'No Arabic support or GCC presence',
      'AI limited to call handling only',
      'Per-provider pricing expensive for larger teams',
      'No branding control on customer-facing pages',
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
        question: 'What is Booksy\'s AI Receptionist?',
        answer:
          'Booksy\'s AI Receptionist answers calls day or night and books the appointment for the caller. It is in beta, request-based, and covers English and Spanish on the phone channel. Daisy\'s AI receptionist handles calls, bookings, payments and customer service in Arabic and English.',
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
          'Booksy\'s AI Receptionist books from phone calls, in beta, in English and Spanish. The difference is channel and scope rather than presence: Daisy\'s AI receptionist carries the whole journey across phone, WhatsApp and Instagram in Arabic and English: answering questions, booking, taking payment and following up, 24/7 in Arabic and English.',
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
      'Strong on mobile and strong with barbershops. Its AI Receptionist books from phone calls, which is a real competitive move, though narrower than AI across every channel, and the Google AI Mode integration could firm up its position. No GCC presence at all is the key weakness.',
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
      'Branded booking page with no Daisy branding vs Vagaro-branded experience',
      'Cashback reward system for customer retention vs no loyalty program',
      'Smart AI scheduling optimization vs manual calendar management',
      'GCC market compliance and local payments vs no international support',
    ],

    daisySwitchingReasons: [
      'Chatbot can\'t actually book appointments, need real AI that converts',
      'Per-calendar add-on pricing adds up with growing team',
      'No Arabic support for Middle East expansion',
      'Want AI-driven marketing, not just email/text blasts',
      'Need a branded booking page for brand consistency',
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
      'No branding control option',
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
    // Sources, read 2026-10-09: mindbodyonline.com/company ("founded in San Luis
    // Obispo"), mindbodyonline.com/business/ai-concierge ("Playlist, Mindbody's
    // parent company"), playlist.com (brands: Mindbody, Booker, ClassPass, EGYM),
    // Playlist/EGYM merger close announced 31 Mar 2026 (insider.fitt.co press release).
    description:
      'Wellness business software founded in 2001 in San Luis Obispo, California, with the Mindbody consumer app as its marketplace. It is part of Playlist, which also owns ClassPass and Booker and merged with EGYM in March 2026. Mindbody serves fitness, wellness and beauty businesses.',
    founded: '2001',
    headquarters: 'San Luis Obispo, CA, USA',
    funding: 'Private; part of Playlist, whose EGYM merger (closed 31 Mar 2026) came with $785M in new equity',

    features: {
      onlineBooking: 3,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 3,
      marketingAndCrm: 2,
      inventoryManagement: 2,
      reportingAndAnalytics: 3,
      marketplaceAndDiscovery: 3,
      // AI Concierge (books by SMS and web chat), AI Insights on every plan,
      // AI content tools in marketing: mindbodyonline.com, read 2026-10-09.
      aiCapabilities: 2,
      // Branded booking widgets and a customized website on every plan, and a
      // branded app add-on on Accelerate and Ultimate (Mindbody pricing page).
      brandingAndWhiteLabel: 2,
    },

    // Mindbody pricing page (mindbodyonline.com/business/pricing), read
    // 2026-10-09: every plan shows "Let's talk"; FAQ: "Starting at $79
    // USD/month (North America and Asia)". Mindbody blog "New Mindbody Pricing
    // in the US" (last updated 2 Oct 2026): "In the U.S., Mindbody plans begin
    // at $79 USD per month, per location" and "Accelerate and Ultimate are
    // quote-based".
    pricing: {
      hasFreePlan: false,
      startingPrice: 'From $79/mo per location (US)',
      startingPriceNumeric: 79,
      tiers: [
        {
          name: 'Starter',
          price: '$79/mo per location',
          priceNumeric: 79,
          features: [
            'Business management tools',
            'Integrated payments',
            'Branded website booking widgets',
            'A website for your business',
            'Listing on the Mindbody app',
            'Basic reporting',
          ],
        },
        {
          name: 'Accelerate',
          price: 'Pricing on request',
          billingCycle: 'custom',
          features: [
            'Everything in Starter',
            'Analytics and reporting',
            'Room and resource management',
            'Client Pick-a-Spot',
            'Promo codes',
            'AI Concierge as an add-on',
          ],
        },
        {
          name: 'Ultimate',
          price: 'Pricing on request',
          billingCycle: 'custom',
          features: [
            'Everything in Accelerate',
            'Automated email and text campaigns',
            'AI Concierge (24/7 AI front desk)',
            'Built-in sales pipeline',
            'Next-level analytics',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Pricing on request',
          billingCycle: 'custom',
          features: ['Customized plan for multi-location and franchise businesses'],
        },
      ],
      // Pricing page FAQ: "a payment processing rate plus a fixed fee of $0.10
      // to $0.30 (in North America and Asia) will apply per transaction".
      transactionFees:
        'Processing rate plus a fixed $0.10 to $0.30 per transaction with Mindbody Payments (North America and Asia)',
      // Pricing page FAQ: "The fee is 20%, capped at $30 USD ... and only on
      // the first purchase for someone new to your business."
      commissionOnMarketplace:
        '20% of a new client\'s first purchase through the Mindbody app, capped at $30',
      // Pricing page FAQ and US pricing blog, read 2026-10-09. Mindbody also
      // says: "There's no onboarding fee on any Mindbody plan."
      hiddenCosts: [
        'Premium add-ons, such as the branded app, AI Concierge and email and text marketing, when your plan doesn\'t include them',
        'Data transfer service when you switch to Mindbody (fees may apply)',
        'Premium implementation, custom data conversion and Technical Account Management, priced separately',
      ],
      pricingModel: 'per-location',
      pricingPageUrl: 'https://www.mindbodyonline.com/business/pricing',
      lastVerified: '2026-10-09',
    },

    // Capterra: Wayback snapshot of capterra.com/p/40229/MINDBODY/, 21 Sep 2026.
    // App Store: US listings via the iTunes lookup API, 2026-10-09.
    reviews: [
      { platform: 'Capterra', rating: 4.0, reviewCount: 2995 },
      { platform: 'App Store (Mindbody Business)', rating: 4.6, reviewCount: 23535 },
      { platform: 'App Store (Mindbody consumer app)', rating: 4.9, reviewCount: 272398 },
    ],

    // Mindbody infographic "Fully Integrated Payments - Better Client
    // Experience in the UAE" (en-gb, updated 7 Oct 2025): "Mindbody Payments is
    // here in the UAE!" Mindbody Business on the App Store lists EN, FR, DE,
    // IT, PT, ES (read 2026-10-09); no Arabic found.
    gccPresence: {
      hasArabicUI: false,
      arabicQuality: 'none',
      gccCountries: ['UAE'],
      localCompliance: false,
      localPaymentMethods: true,
      localSupport: false,
    },

    // mindbodyonline.com/business/ai-concierge, /business/reporting,
    // /business/marketing and /business/pricing, read 2026-10-09.
    aiCapabilities: {
      hasAiReceptionist: true,
      hasAiChatbot: true,
      hasSmartScheduling: false,
      hasAiMarketing: true,
      hasAiAnalytics: true,
      hasAiPricing: false,
      aiDescription:
        'AI Concierge answers client questions and books, reschedules and cancels appointments by SMS and web chat, 24/7, and follows up missed calls by text. It comes with the Ultimate plan and is an add-on on Accelerate. Mindbody also markets Messenger[ai] as an AI front desk. AI Insights (weekly summaries, Clients at Risk, Big Spenders) is on every plan, and the marketing tools include AI content creation.',
    },

    targetMarket:
      'Fitness, wellness and beauty businesses, from small studios to multi-location and franchise brands. Many features are built around class-based fitness, such as class schedules, memberships and Pick-a-Spot, and Mindbody also sells to salons and spas.',

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
        'Extensive content library',
        'Strong marketplace SEO',
        'Industry research reports',
      ],
      seoWeaknesses: ['Content mostly covers fitness rather than beauty'],
    },

    messaging: {
      tagline: 'The wellness technology platform',
      primaryValueProp:
        'A large consumer marketplace combined with business management for fitness, wellness and beauty businesses',
      targetAudience:
        'Fitness studios, wellness centers and beauty businesses that want marketplace exposure and multi-location tools',
      toneAndVoice: 'Professional, positioned as the industry leader',
      keyMessages: [
        'The industry\'s largest fitness and wellness marketplace (Mindbody\'s claim)',
        '3M+ active users on the Mindbody app',
        '600M+ classes and appointments booked last year',
        'Starting at $79 USD/month in North America and Asia',
        '20+ years in wellness software',
      ],
    },

    conversionStrategy: {
      primaryCta: 'Get a demo',
      leadMagnets: ['Industry trend reports', 'Webinars'],
      freeTrialOffered: false,
      demoOffered: true,
      socialProof: [
        '3M+ active app users',
        '40k+ businesses',
        '20+ years in industry',
        'Customer stories',
      ],
      conversionTactics: [
        'Demo-first sales process',
        'Industry reports as lead magnets',
        'Marketplace visibility as selling point',
        'Enterprise sales team',
      ],
    },

    // Pricing page FAQ, read 2026-10-09: "Your Mindbody contract depends on the
    // specific plan and billing terms you signed up for, including any
    // promotions applied" and cancellation "may require advance notice".
    switchingAnalysis: {
      dataExport: true,
      contractLockIn: true,
      migrationSupport: true,
      switchingDifficulty: 'moderate',
      lockInTactics: [
        'Contract terms depend on the plan, billing terms and any promotion applied',
        'Cancellation may require advance notice under the agreement',
        'Marketplace listing and consumer relationships',
      ],
      switchingIncentives: [
        'Data transfer service for new customers (fees may apply)',
        'Free one-on-one onboarding',
      ],
    },

    growthVsOperations: {
      growthScore: 5,
      growthFeatures: [
        'Mindbody app marketplace (3M+ active users)',
        'Email and text campaigns (Ultimate)',
        'AI Concierge (Ultimate; add-on on Accelerate)',
        'ClassPass and Reserve with Google integrations',
        'Intro offers and dynamic pricing',
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
        'Mindbody covers operations and growth. The Mindbody app marketplace is its main acquisition channel. Email and text campaigns and AI Concierge come with Ultimate, and AI Concierge is an add-on on Accelerate.',
    },

    daisyAdvantages: [
      'AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English, vs AI Concierge on SMS and web chat',
      'Predictable pricing from Day 1 vs Accelerate and Ultimate quoted on request',
      'Arabic and English interface vs a Business app that lists English, French, German, Italian, Portuguese and Spanish',
      'No contracts or lock-in vs contract terms that depend on the Mindbody plan and billing terms',
      'Built for beauty and wellness vs a platform with many class-based fitness features',
      'Cashback-driven customer acquisition vs the Mindbody app marketplace, which charges on a new client\'s first purchase',
      'Live in all six GCC countries vs Mindbody Payments in the UAE',
    ],

    daisySwitchingReasons: [
      'Campaigns and AI Concierge need Ultimate, which is quoted on request, and you want one published price',
      'Want a plan with no contract',
      'Need Arabic support for the GCC market',
      'Want an AI receptionist on WhatsApp and Instagram, in Arabic and English',
      'Want software built around salons and spas rather than class-based fitness',
    ],

    // Mindbody homepage ("over 3 million active users"; "over 600 million
    // classes & appointments were booked with Mindbody" last year), pricing
    // page and /business/reporting, read 2026-10-09.
    competitorStrengths: [
      'Large consumer marketplace: 3M+ active users on the Mindbody app',
      'Over 600 million classes and appointments booked through Mindbody last year, by Mindbody\'s count',
      'AI Concierge books, reschedules and cancels by SMS and web chat, 24/7 (Ultimate)',
      'Unlimited users per location on every plan',
      'AI Insights on every plan, with Comparative Analytics on Accelerate and Ultimate',
      'Multi-location and enterprise management',
      '24/7 support by phone, chat and email, with free one-on-one onboarding',
    ],

    competitorWeaknesses: [
      'Only the US entry price ($79/mo per location) is published; Accelerate, Ultimate and Enterprise are quoted on request',
      'Email and text campaigns need Ultimate; AI Concierge needs Ultimate or an Accelerate add-on',
      'Arabic isn\'t among the Mindbody Business app\'s listed languages (App Store, October 2026)',
      'The Mindbody app takes 20% of a new client\'s first purchase, capped at $30',
      'Contract terms depend on the plan and billing terms, and cancelling may need advance notice',
      'Many features are built for class-based fitness studios',
    ],

    faq: [
      {
        question: 'How much does Mindbody cost?',
        answer:
          'In the US, Mindbody starts at $79 a month per location on Starter, according to Mindbody\'s blog (updated October 2026). Accelerate, Ultimate and Enterprise are priced on request. On top of the subscription, Mindbody Payments charges a processing rate plus $0.10 to $0.30 per transaction in North America and Asia, the Mindbody app takes 20% of a new client\'s first purchase (capped at $30), and premium add-ons cost extra when your plan doesn\'t include them. Mindbody says there is no onboarding fee on any plan.',
      },
      {
        question: 'How does Daisy compare to Mindbody?',
        answer:
          'Mindbody has a large consumer marketplace, with 3M+ active app users, and puts AI Concierge and email and text campaigns in its Ultimate plan. Daisy puts the AI receptionist, marketing and analytics in the base platform, with no contract. Its AI receptionist works on WhatsApp, Instagram and the booking site, in Arabic and English, and Daisy adds cashback rewards and white-label booking pages. Mindbody\'s Business app doesn\'t list Arabic among its languages.',
      },
      {
        question: 'Is Mindbody good for beauty salons?',
        answer:
          'Mindbody serves fitness, wellness and beauty businesses, and it pitches AI Concierge to hair salons, nail salons and day spas. Many of its features are built for class-based studios, such as class schedules and Pick-a-Spot. A beauty-focused platform like Daisy is shaped around salons and spas from the start, with an AI receptionist, cashback rewards and white-label booking pages.',
      },
      {
        question: 'Can I cancel my Mindbody contract?',
        answer:
          'Mindbody says your contract depends on the plan and billing terms you signed up for, including any promotion, and that cancelling may need advance notice under your agreement. Check what yours says. When you are ready to move, Daisy has no contracts and will handle the data transfer.',
      },
      {
        question: 'What does Mindbody charge on top of the subscription?',
        answer:
          'Mindbody lists three things. If you use Mindbody Payments, there is a processing rate plus a fixed $0.10 to $0.30 per transaction (North America and Asia). When the Mindbody app brings you a new client, Mindbody takes 20% of that client\'s first purchase, capped at $30, once. And premium add-ons, such as the branded app, AI front desk support and email and text marketing, cost extra when your plan doesn\'t include them. Its data transfer service for new customers may also carry a fee.',
      },
      {
        question: 'Does Mindbody support Arabic or work in the Gulf?',
        answer:
          'Mindbody Payments is available in the UAE. The Mindbody Business app on the App Store lists English, French, German, Italian, Portuguese and Spanish, and we could not find an Arabic interface as of October 2026. Daisy offers Arabic and English as equals, with local payment integration and support built for the region, and is live in all six GCC countries.',
      },
      {
        question: 'What AI does Mindbody offer?',
        answer:
          'AI Concierge answers client questions and books, reschedules and cancels appointments by SMS and web chat, 24/7, and it follows up missed calls by text. It comes with the Ultimate plan and is an add-on on Accelerate. AI Insights, which flags clients at risk and big spenders, is on every plan, and the marketing tools include AI content creation. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site, in Arabic and English.',
      },
      {
        question: 'How do I move my data out of Mindbody?',
        answer:
          'Check your agreement for any notice period, then plan the export with Mindbody support. Mindbody also offers APIs for exporting data. Daisy provides dedicated migration support with a parallel run period, so nothing is lost on the way across.',
      },
      {
        question: 'How is the Mindbody app rated?',
        answer:
          'On the US App Store in October 2026, the Mindbody Business app was rated 4.6 from about 23,500 ratings, and the consumer app 4.9 from about 272,000. Daisy\'s app was built for beauty and wellness, and it is quick.',
      },
      {
        question: 'Can Mindbody handle multi-location salon chains?',
        answer:
          'Yes. Multi-location management is one of Mindbody\'s strengths, and it offers a custom Enterprise plan for multi-location and franchise businesses. Subscription prices rise with each location, not with staff. Daisy runs multi-branch operations with centralized dashboards, one set of client records and cross-location analytics.',
      },
    ],

    lastResearched: '2026-10-09',
    notes:
      'Founded 2001, now part of Playlist. Starts at $79/mo per location in the US; Accelerate and Ultimate are quoted. Ultimate includes AI Concierge (SMS and web chat) and email and text campaigns. Mindbody Payments is available in the UAE. Arabic is not in the Business app language list. Main contrast for Daisy: AI channels (WhatsApp, Instagram), Arabic, GCC coverage and cashback.',
  },

  // ---------------------------------------------------------------------------
  // 5. Zenoti
  // ---------------------------------------------------------------------------
  zenoti: {
    slug: 'zenoti',
    name: 'Zenoti',
    website: 'https://www.zenoti.com',
    tier: 1,
    // zenoti.com/company/about-us, read 2026-10-09: began as ManageMySpa in
    // Hyderabad in 2010; offices in Bellevue, Brisbane, Dubai, Hyderabad,
    // Jakarta, Kuala Lumpur, Manchester and Manila; "1200+ global employees as
    // of 2024"; "$1.5B valuation as of 2021". zenoti.com/ai-workforce and
    // zenoti.com/pricing-zenoti ("You must be on our AI Plus package to leverage
    // our AI Agents"), read 2026-10-09.
    description:
      'Software for salons, spas, medspas and fitness businesses that began as ManageMySpa in Hyderabad in 2010. Zenoti markets an AI Workforce of AI agents, which need its AI Plus package, and lists an office in Dubai among its eight offices.',
    founded: '2010',
    headquarters: 'Bellevue, WA, USA',
    employeeCount: '1,200+ (2024)',
    // Zenoti press release, 15 Dec 2020: $160M Series D led by Advent
    // International, about $250M raised in total.
    funding: 'About $250M raised by its $160M Series D (Dec 2020); valued at $1.5B as of 2021',

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
      // Branded guest app and branded webstore: zenoti.com/platform/online-booking
      // ("Zenoti Webstore and Mobile App reflect your brand's design"), 2026-10-09.
      brandingAndWhiteLabel: 2,
    },

    // zenoti.com/pricing-zenoti, read 2026-10-09: no prices; "Get a Quote" on
    // Zenoti OS and the AI Workforce; "Your Zenoti subscription includes access
    // to our voice, SMS, and messaging tools. Usage is billed based on
    // consumption with optional base packs."
    pricing: {
      hasFreePlan: false,
      startingPrice: 'Pricing on request',
      tiers: [
        {
          name: 'Zenoti OS',
          price: 'Pricing on request',
          billingCycle: 'custom',
          features: [
            'Appointment book and online booking',
            'POS and payment processing',
            'Payroll and commissions',
            'Inventory management',
            'Marketing automation',
          ],
        },
        {
          name: 'AI Plus',
          price: 'Pricing on request',
          billingCycle: 'custom',
          features: [
            'AI agents (AI Workforce)',
            'Dedicated Customer Success Manager',
            'Priority support backed by SLAs',
          ],
        },
      ],
      hiddenCosts: [
        'Voice, SMS and messaging usage, billed by consumption with optional base packs',
        'AI agents need the AI Plus package',
      ],
      pricingModel: 'hybrid',
      pricingPageUrl: 'https://www.zenoti.com/pricing-zenoti',
      lastVerified: '2026-10-09',
    },

    // Capterra: Wayback snapshot of capterra.com/p/131057/ZENOTI/, 21 Sep 2026.
    reviews: [
      { platform: 'Capterra', rating: 4.4, reviewCount: 1290 },
    ],

    // help.zenoti.com "Access Zenoti in your preferred language", read
    // 2026-10-09: "Zenoti currently supports French and French-Canada."
    // Dubai office (About page); help.zenoti.com "E-Invoicing in Saudi Arabia"
    // (ZATCA QR codes, "VAT receipt - GCC"). Other GCC countries not found.
    gccPresence: {
      hasArabicUI: false,
      arabicQuality: 'none',
      gccCountries: ['UAE', 'KSA'],
      localCompliance: true,
      localPaymentMethods: false,
      localSupport: true,
    },

    // zenoti.com/ai-workforce and /platform/dynamic-pricing, read 2026-10-09.
    // Dynamic pricing adjusts prices on demand triggers; Zenoti doesn't label
    // it AI, so hasAiPricing stays false.
    aiCapabilities: {
      hasAiReceptionist: true,
      hasAiChatbot: true,
      hasSmartScheduling: true,
      hasAiMarketing: true,
      hasAiAnalytics: true,
      hasAiPricing: false,
      aiDescription:
        'Zenoti markets an AI Workforce of agents, including an AI Receptionist voice agent that answers calls and books, an AI Digital Marketer, AI Lead Manager, AI Employee Scheduler, AI Retention Manager and AI Business Advisor, plus SmartBot for booking by chat. Zenoti says the AI agents need its AI Plus package. It also offers demand-based dynamic pricing.',
    },

    targetMarket:
      'Salons, spas, medspas, fitness centres and barbershops, from single locations to enterprise franchises, by Zenoti\'s description. Its eight offices include Dubai.',

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
        'Limited SMB-focused content',
        'Gated content reduces SEO value',
      ],
    },

    messaging: {
      tagline: 'AI-native platform built for beauty and wellness',
      primaryValueProp:
        'One platform with built-in AI agents for salons, spas, medspas, fitness centres and barbershops',
      targetAudience:
        'Salon, spa, medspa and fitness owners, from single locations to enterprise franchises',
      toneAndVoice: 'Technology-forward, always arguing from ROI',
      keyMessages: [
        'An AI Workforce of agents',
        'Replaces 8 to 12 separate tools',
        'Trusted by 30,000+ businesses across 50+ countries',
        'Built for multi-location businesses',
      ],
    },

    conversionStrategy: {
      primaryCta: 'Book a demo',
      leadMagnets: ['ROI calculator', 'Industry whitepapers', 'Webinars', 'Case studies'],
      freeTrialOffered: false,
      demoOffered: true,
      socialProof: [
        '30,000+ businesses across 50+ countries',
        'Customer success stories',
        'G2 badges',
        'AI leadership positioning',
      ],
      conversionTactics: [
        'Demo and quote-led sales process',
        'ROI-focused messaging',
        'AI differentiation',
        'Case studies with measurable results',
      ],
    },

    // Contract terms are not published on zenoti.com (pricing page read
    // 2026-10-09), so no contract claim is made.
    switchingAnalysis: {
      dataExport: true,
      contractLockIn: false,
      migrationSupport: true,
      switchingDifficulty: 'moderate',
      lockInTactics: [
        'Staff training and workflow dependencies',
        'Custom configuration investment',
        'Data migration',
      ],
      switchingIncentives: ['White-glove migration support', 'Structured onboarding and staff training'],
    },

    growthVsOperations: {
      growthScore: 7,
      growthFeatures: [
        'AI Digital Marketer',
        'AI Lead Manager',
        'AI Receptionist for calls',
        'AI Retention Manager',
        'Automated reputation management',
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
        'Zenoti covers operations and adds an AI Workforce for marketing, leads, calls, scheduling and retention. Zenoti says the AI agents need its AI Plus package. On AI, this is Daisy\'s most direct competitor.',
    },

    daisyAdvantages: [
      'Transparent, predictable pricing vs quotes on request',
      'Native Arabic UI vs an interface in English, French and French-Canada',
      'No contracts or lock-in',
      'Cashback and a consumer marketplace for acquisition; a consumer marketplace isn\'t listed on Zenoti\'s published pages',
      'AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English, vs an AI Receptionist voice agent for calls',
    ],

    daisySwitchingReasons: [
      'Want a published price instead of a custom quote',
      'Need an Arabic interface; Zenoti lists English, French and French-Canada',
      'Want the AI receptionist without adding a separate AI package',
      'Want a consumer-facing marketplace and cashback for acquisition',
    ],

    competitorStrengths: [
      'A broad AI Workforce: AI Receptionist (voice), AI Digital Marketer, AI Lead Manager, AI Employee Scheduler, AI Retention Manager and more',
      'Serves salons, spas, medspas, fitness and barbershops, from single sites to enterprise franchises',
      'An office in Dubai, and Saudi (ZATCA) e-invoicing support',
      'Strong multi-location management',
      '24/7 global support for every customer',
      'Inventory, payroll and reporting in one system',
    ],

    competitorWeaknesses: [
      'No Arabic interface listed: Zenoti\'s help centre lists French and French-Canada besides English (October 2026)',
      'Pricing by quote only',
      'AI agents need the AI Plus package',
      'Voice, SMS and messaging usage is billed on top, by consumption',
      'A consumer marketplace isn\'t listed on Zenoti\'s published pages (October 2026)',
    ],

    faq: [
      {
        question: 'How does Zenoti\'s AI compare to Daisy\'s?',
        answer:
          'Zenoti markets an AI Workforce of agents, among them an AI Receptionist voice agent that answers calls and books, plus agents for marketing, leads, scheduling and retention. Zenoti says the agents need its AI Plus package, and its pricing is by quote. Daisy puts the AI receptionist, smart scheduling and AI marketing in the base platform at a published price. Its receptionist works on WhatsApp, Instagram and the booking site, in Arabic and English.',
      },
      {
        question: 'Is Zenoti suitable for small salons?',
        answer:
          'Zenoti says it serves businesses of all sizes, from single locations to enterprise franchises. Its pricing is by quote, and the AI agents need the AI Plus package. A small salon that wants published pricing with the AI included can compare that with Daisy, which has no contract.',
      },
      {
        question: 'Does Zenoti support Arabic?',
        answer:
          'Zenoti\'s help centre says it currently supports French and French-Canada besides English, and we found no Arabic option as of October 2026. Zenoti has an office in Dubai and publishes guidance for Saudi e-invoicing. Daisy treats Arabic and English as equal priorities, designed for the GCC from the start.',
      },
      {
        question: 'Can I switch from Zenoti to Daisy?',
        answer:
          'Yes. Check your Zenoti agreement for its term and notice period first. Daisy provides migration support covering the data transfer, a parallel run period and staff training.',
      },
      {
        question: 'How much does Zenoti cost?',
        answer:
          'Zenoti doesn\'t publish prices. Plans are quoted on request, and multi-location pricing depends on your footprint. Voice, SMS and messaging usage is billed by consumption on top, and the AI agents need the AI Plus package. Daisy publishes its pricing, includes the AI in the base plan and asks for no contract.',
      },
      {
        question: 'How long does Zenoti take to set up?',
        answer:
          'Zenoti says most customers are up and running in days to weeks, with phased rollouts for larger deployments, and that every subscription includes onboarding support and training. Daisy is built to work from a single-location salon up to a growing chain.',
      },
      {
        question: 'Does Zenoti\'s Dubai office mean it supports Arabic?',
        answer:
          'Not according to Zenoti\'s own pages. Its About page lists the Dubai office, but its help centre lists only French and French-Canada as interface languages besides English (October 2026). Daisy treats Arabic and English as equal priorities, built for GCC businesses and the people they serve.',
      },
      {
        question: 'What support does Zenoti offer?',
        answer:
          'Zenoti says every customer gets 24/7 global support and access to Zenoti University. Its published response targets are under 30 minutes for critical issues, under 2 hours for urgent ones and the same day for general questions. AI Plus customers also get a dedicated Customer Success Manager and priority support backed by SLAs. Daisy provides responsive support on every plan, with dedicated account management.',
      },
      {
        question: 'Does Zenoti have a consumer marketplace for customer acquisition?',
        answer:
          'Zenoti lists booking through your own webstore, a branded mobile app, SmartBot chat, Reserve with Google, Facebook and Instagram. A consumer marketplace isn\'t listed on its published pages as of October 2026. Daisy pairs a consumer marketplace with cashback rewards and AI-powered marketing to bring new customers in.',
      },
      {
        question: 'What mobile apps does Zenoti have?',
        answer:
          'Zenoti lists a branded guest app for your clients, the MyZen app for providers and Zenoti Mobile. Daisy\'s mobile app is built for speed and simplicity, with AI handling routine work in the background.',
      },
    ],

    lastResearched: '2026-10-09',
    notes:
      'The most direct competitor on AI. Quote-only pricing; AI agents need AI Plus; interface in English, French and French-Canada (no Arabic found); Dubai office and Saudi e-invoicing support. Fair contrasts for Daisy: Arabic, published pricing, AI on WhatsApp and Instagram, and a consumer marketplace with cashback.',
  },
};

// ---------------------------------------------------------------------------
// I18n-wrapped export — lazily resolved to avoid circular import
// ---------------------------------------------------------------------------

export function getTier1CompetitorsI18n(): I18nContent<Record<string, CompetitorData>> {
  const { tier1CompetitorsAr } = require('./tier1Data.ar') as { tier1CompetitorsAr: Record<string, CompetitorData> };
  return { en: tier1Competitors, ar: tier1CompetitorsAr };
}
