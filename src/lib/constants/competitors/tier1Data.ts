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
  // Sources read 2026-10-09: biz.booksy.com/pricing, /features,
  // /features/ai-receptionist-beta, /make-the-switch, /about-us, /contact,
  // biz.booksy.com home page; help.booksy.com "Can I use Booksy outside of my
  // country?"; Booksy blog, 27 Jan 2021 ($70M Series C, Versum merger,
  // founded 2014); US App Store and Google Play listings for Booksy Biz.
  // ---------------------------------------------------------------------------
  booksy: {
    slug: 'booksy',
    name: 'Booksy',
    website: 'https://www.booksy.com',
    tier: 1,
    description:
      'Mobile-first booking and business app for beauty and wellness professionals, with a consumer marketplace. Booksy says more than 330,000 professionals use it, and its help centre lists 16 countries. Founded in Poland in 2014, it merged with Versum in December 2020.',
    // Booksy blog, 27 Jan 2021: "Established in 2014".
    founded: '2014',
    // biz.booksy.com/contact lists offices in Warsaw (ul. Prosta 67) and, for
    // the US, Chicago (515 N State St).
    headquarters: 'Warsaw, Poland (US HQ: Chicago)',
    // biz.booksy.com/about-us: "750+ employees".
    employeeCount: '750+',
    // Booksy blog, 27 Jan 2021: "$70 million in a Series C round led by Cat
    // Rock Capital". Earlier rounds are not listed on Booksy's own pages.
    funding: '$70M Series C (2021)',

    features: {
      onlineBooking: 3,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 2,
      marketingAndCrm: 2,
      // Inventory management (stock level, usage, location) is included in
      // every subscription (biz.booksy.com/features).
      inventoryManagement: 2,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 2,
      aiCapabilities: 2,
      // Booking sites sit on the Booksy domain, with a website widget and
      // Instagram, Facebook and Google booking buttons. Basic, not absent.
      brandingAndWhiteLabel: 1,
    },

    // biz.booksy.com/pricing (US), read 2026-10-09: "$29.99 per month + tax",
    // "Add extra users for $20/month each", "All features included".
    pricing: {
      hasFreePlan: false,
      freeTrialDays: 14,
      startingPrice: '$29.99/mo + $20/mo per extra user (US)',
      startingPriceNumeric: 29.99,
      tiers: [
        {
          name: 'Booksy Biz',
          price: '$29.99/mo',
          priceNumeric: 29.99,
          billingCycle: 'monthly',
          features: [
            'All features included',
            'Online booking and marketplace listing',
            'Marketing tools, message blasts and 2,000 marketing texts a month',
            'Loyalty cards and inventory',
            'AI Receptionist (beta)',
          ],
        },
        {
          name: 'Each additional team member',
          price: '$20/mo',
          priceNumeric: 20,
          billingCycle: 'monthly',
          features: ['Same features as the base subscription'],
        },
      ],
      transactionFees:
        '2.49% + $0.10 card reader, 2.49% + $0.20 Tap to Pay, 2.69% + $0.30 mobile and keyed-in (US)',
      // Pricing page FAQ: no commission unless Boost is on; then "30% of the
      // total cost of their first visit", "up to a maximum of $100".
      commissionOnMarketplace:
        'None unless you turn on Boost: then a one-time 30% of a new client\'s first visit, capped at $100',
      // All published on biz.booksy.com/pricing. They add up; none is hidden.
      hiddenCosts: [
        'Each additional team member adds $20/month',
        'Card payments from 2.49% + $0.10 per transaction on the Booksy Card Reader',
        'Optional Boost: one-time 30% of a new client\'s first visit, up to $100',
        'Fast Payouts in 30 minutes cost 1.5%; next-business-day payouts are free',
        'Card reader hardware: Stripe Reader M2 $53.10 or S710 $299, plus shipping',
      ],
      pricingModel: 'hybrid',
      pricingPageUrl: 'https://biz.booksy.com/pricing',
      lastVerified: '2026-10-09',
    },

    // Official store listings for the Booksy Biz app, read 2026-10-09:
    // US App Store 4.5 (15,020 ratings), Google Play 4.7 (31.6K reviews).
    reviews: [
      { platform: 'App Store', rating: 4.5, reviewCount: 15020 },
      { platform: 'Google Play', rating: 4.7, reviewCount: 31600 },
    ],

    // help.booksy.com lists 16 countries, none in the GCC. The Booksy Biz App
    // Store listing languages are EN, FR, DE, PL, PT, ZH, ES, UK, VI.
    gccPresence: {
      hasArabicUI: false,
      arabicQuality: 'none',
      gccCountries: [],
      localCompliance: false,
      localPaymentMethods: false,
      localSupport: false,
    },

    // biz.booksy.com/features/ai-receptionist-beta: phone booking system,
    // "English or Spanish", "in beta", providers "can request access".
    aiCapabilities: {
      hasAiReceptionist: true,
      hasAiChatbot: false,
      hasSmartScheduling: false,
      hasAiMarketing: false,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription:
        'Booksy\'s AI Receptionist (beta) answers phone calls day or night and books the appointment onto the Booksy calendar, in English or Spanish. Current Booksy providers can request access during the beta, and Booksy says appointments with No-Show Protection are not supported yet. As of October 2026, Booksy\'s published pages do not list WhatsApp or Instagram as AI Receptionist channels.',
    },

    targetMarket:
      'Independent barbers, beauty professionals and multi-staff salons in the 16 countries Booksy lists, including the US, the UK, Poland, Spain and Brazil. It has a strong following among barbershops.',

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
      seoWeaknesses: [],
    },

    messaging: {
      tagline: 'The booking app for beauty and wellness',
      primaryValueProp:
        'Mobile-first booking platform that connects beauty professionals with clients through an intuitive app',
      targetAudience:
        'Independent beauty professionals and barbers who want mobile booking and to be discovered',
      toneAndVoice: 'Energetic and modern, built around the phone',
      keyMessages: [
        '330,000+ beauty and wellness pros',
        'Every feature included in one subscription',
        'Marketplace discovery',
        'AI Receptionist (beta)',
        'Manage your business from your phone',
      ],
    },

    conversionStrategy: {
      primaryCta: 'Start free now',
      freeTrialOffered: true,
      demoOffered: false,
      socialProof: [
        '330,000+ professionals',
        '65 million+ customers',
        '46,500+ app store reviews',
      ],
      conversionTactics: [
        '14-day free trial',
        'Free data transfer and 1:1 onboarding',
        'Marketplace as acquisition channel',
      ],
    },

    // biz.booksy.com/make-the-switch: "Free data transfer" of services,
    // client databases, future appointments, reviews and photos.
    switchingAnalysis: {
      dataExport: true,
      contractLockIn: false,
      migrationSupport: true,
      switchingDifficulty: 'easy',
      lockInTactics: [
        'Client relationships in app',
        'Marketplace profile and reviews',
      ],
      switchingIncentives: ['Free data transfer', '1:1 onboarding support'],
    },

    growthVsOperations: {
      growthScore: 5,
      growthFeatures: [
        'Consumer marketplace and Boost',
        'Message blasts and automated marketing',
        'Loyalty cards',
        'Instagram, Facebook and Reserve with Google booking',
        'AI Receptionist for phone calls (beta)',
      ],
      operationsFeatures: [
        'Mobile calendar',
        'Client database',
        'POS & payments',
        'Staff management',
        'Inventory management',
      ],
      assessment:
        'An operations platform whose growth comes from the marketplace, Boost, built-in marketing tools and loyalty cards. Its AI Receptionist (beta) books from phone calls in English and Spanish.',
    },

    daisyAdvantages: [
      'AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English; Booksy\'s AI Receptionist (beta) answers phone calls in English and Spanish',
      'Official Meta Tech Provider with native WhatsApp and Instagram messaging',
      'Arabic and English as equals; Booksy\'s business app lists nine languages, and Arabic is not one of them',
      'Cashback-funded customer acquisition alongside the marketplace',
      'A booking page that carries your logo, name and colours; Booksy hosts booking sites on its own domain, with a widget for your website',
      'Built for the GCC; Booksy\'s help centre lists no GCC country',
      'Plan pricing with no fee for each extra user; Booksy adds $20 a month per additional team member',
      'AI-powered marketing automation',
    ],

    daisySwitchingReasons: [
      'Need Arabic for clients in the GCC',
      'Want an AI receptionist on WhatsApp and Instagram as well as your booking site',
      'Paying $20 a month for each extra team member as the team grows',
      'Want cashback rewards to bring clients back',
      'Want a booking page carrying your own brand',
      'Need local payment methods in the GCC',
    ],

    competitorStrengths: [
      'Mobile-first app that also runs on tablet and web',
      'Strong following among barbershops',
      'AI Receptionist (beta) that books from phone calls in English and Spanish',
      'Consumer marketplace that Booksy says reaches 65 million customers',
      'Bookable through Google\'s AI Mode in Search, which Booksy announced in 2025',
      'Every feature in one subscription, including marketing tools, loyalty cards and inventory',
    ],

    competitorWeaknesses: [
      'No Arabic interface and no GCC country on its published list, as of October 2026',
      'The AI Receptionist is in beta, and Booksy\'s published pages do not list WhatsApp or Instagram as channels',
      'Each additional team member adds $20 a month',
      'Booking sites are hosted on the Booksy domain',
      'Optional Boost charges a one-time 30% of a new client\'s first visit, up to $100',
      'Loyalty runs on digital stamp cards; cashback rewards are not listed on Booksy\'s published pages',
    ],

    faq: [
      {
        question: 'How does Daisy compare to Booksy?',
        answer:
          'Booksy is a mobile-first booking app with a consumer marketplace, and every Booksy subscription includes marketing tools, loyalty cards and inventory. Its AI Receptionist (beta) answers phone calls in English and Spanish. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site in Arabic and English, and Daisy adds cashback-driven acquisition and a branded booking page.',
      },
      {
        question: 'Is Booksy good for salons in the Middle East?',
        answer:
          'Booksy\'s help centre lists 16 countries, none of them in the GCC, and its business app lists nine languages, not including Arabic, as of October 2026. Daisy was built for the Middle East, with a native Arabic interface, local payment integration and full GCC compliance across UAE, KSA, Kuwait, Bahrain, Oman and Qatar.',
      },
      {
        question: 'What is Booksy\'s AI Receptionist?',
        answer:
          'An automated phone receptionist. It answers calls day or night and books the appointment onto your Booksy calendar, in English or Spanish. It is in beta, current Booksy providers can request access, and Booksy says appointments with No-Show Protection are not supported yet. Daisy\'s AI receptionist handles bookings, payments and customer service on WhatsApp, Instagram and the booking site, in Arabic and English. It does not answer phone calls today.',
      },
      {
        question: 'Can I switch from Booksy to Daisy?',
        answer:
          'Yes. Booksy has no long-term contract. Daisy will move your client data, service menu and booking history across, and the switch usually takes less than a week.',
      },
      {
        question: 'How much does Booksy cost per month?',
        answer:
          'In the US, Booksy costs $29.99 a month plus tax, and $20 a month for each additional team member. Every feature is included in that price, so a five-person salon pays $109.99 a month before tax. Card payments cost 2.49% + $0.10 on the Booksy Card Reader, 2.49% + $0.20 with Tap to Pay and 2.69% + $0.30 for mobile and keyed-in payments. Boost, the optional marketplace promotion, charges a one-time 30% of a new client\'s first visit, capped at $100. Daisy does not multiply the price by headcount, so the bill stays predictable as you grow.',
      },
      {
        question: 'Does Booksy support Arabic or work well in the Gulf region?',
        answer:
          'Not as of October 2026. Booksy\'s business app lists English, French, German, Polish, Portuguese, Spanish, Chinese, Ukrainian and Vietnamese, and its help centre lists no GCC country. Daisy was built for the Gulf, with a native Arabic interface and local payment methods, and is live in all six GCC countries.',
      },
      {
        question: 'How does Booksy\'s AI compare to Daisy\'s AI receptionist?',
        answer:
          'They cover different channels. Booksy\'s AI Receptionist (beta) answers phone calls in English and Spanish and books onto your calendar. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site in Arabic and English: it answers questions, books, takes payment and follows up, 24/7. It does not answer phone calls.',
      },
      {
        question: 'Is the Booksy app good for salon owners?',
        answer:
          'Booksy Biz is rated 4.5 on the US App Store from about 15,000 ratings and 4.7 on Google Play from about 31,600 reviews, as of October 2026, and it runs on phone, tablet and web. In Daisy the business and customer sides are one system.',
      },
      {
        question: 'Can Booksy handle multiple salon locations?',
        answer:
          'Booksy\'s published pages focus on single-location and multi-staff businesses, with staff profiles, shifts, commissions and five permission levels, plus a Shared Location option for booth renters. We could not find multi-location management described on Booksy\'s published pages as of October 2026, so ask Booksy directly if you run several branches. Daisy handles multi-branch natively, with centralized analytics, staff scheduling across locations and one set of client records.',
      },
      {
        question: 'Does Booksy integrate with other business tools I use?',
        answer:
          'Booksy lists booking buttons for Reserve with Google, Instagram and Facebook, a website widget, Google and Apple calendar import, and its own payments. Daisy covers Google Calendar sync, social media and payment gateways, and gives you API access to connect whatever else you run.',
      },
    ],

    lastResearched: '2026-10-09',
    notes:
      'Strong on mobile and with barbershops. All features come in one $29.99 subscription plus $20 per extra user (US). Its AI Receptionist (beta) books from phone calls, and Booksy is bookable through Google AI Mode. Booksy\'s help centre lists 16 countries, none in the GCC.',
  },

  // ---------------------------------------------------------------------------
  // 3. Vagaro
  // vagaro.com returns 403 to automated tools. Sources, read 2026-10-09:
  // Vagaro's help centre through its public Zendesk API
  // (support.vagaro.com/api/v2/help_center/...): "Vagaro Plans, Pricing, and
  // Premium Features" (updated 2026-10-06), "United States - Credit Card
  // Processing Rates and Fees", "Set Up A Chatbot for Your Business with Vera
  // Receptionist", "Grow Your Business with Vera Fill My Books", "What's
  // Included in Your Free Trial", "Give Customers Points for Purchases",
  // "Reports for Multi-Location Businesses", "Export Your Customer List".
  // Wayback captures: vagaro.com/pro (2026-09-27), en-ca/pro/updates
  // (2026-10-06), en-ca/pro/about-us (2026-07-11). US App Store listings.
  // ---------------------------------------------------------------------------
  vagaro: {
    slug: 'vagaro',
    name: 'Vagaro',
    website: 'https://www.vagaro.com',
    tier: 1,
    description:
      'All-in-one software for salons, spas and fitness businesses in the US, Canada, the UK and Australia. Vagaro says more than 100,000 businesses rely on it, and it acquired Schedulicity in January 2025.',
    // vagaro.com/pro (Wayback 2026-09-27): "17 years in business".
    founded: '2009',
    // Business Wire release, 15 Jun 2023, datelined Pleasanton, Calif.
    headquarters: 'Pleasanton, CA, USA',
    // FTV Capital release, 5 Dec 2018: "$63 million growth equity round, its
    // first institutional capital"; FTV, 2 Nov 2021: "$1 Billion Valuation".
    funding: '$63M growth equity led by FTV Capital (2018); further FTV investment at a $1B valuation (2021)',

    features: {
      onlineBooking: 3,
      posAndPayments: 3,
      clientManagement: 2,
      staffManagement: 2,
      marketingAndCrm: 2,
      inventoryManagement: 2,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 2,
      // Vera Receptionist (chat and SMS), Fill My Books, AI copy and reports.
      aiCapabilities: 2,
      // Branded App and MySite websites with your own domain are published.
      brandingAndWhiteLabel: 2,
    },

    // Help centre "Vagaro Plans, Pricing, and Premium Features" (US): "$23.99
    // per month, Only for a limited time"; "Each additional employee calendar
    // is $10 per month for up to seven licenses". vagaro.com/pro shows "$30"
    // struck through beside "$23.99/month".
    pricing: {
      hasFreePlan: false,
      freeTrialDays: 30,
      startingPrice: '$23.99/mo for 1 calendar (US offer; $30/mo regular)',
      startingPriceNumeric: 23.99,
      tiers: [
        {
          name: 'One calendar',
          price: '$23.99/mo',
          priceNumeric: 23.99,
          billingCycle: 'monthly',
          features: [
            'Online booking and calendar',
            'POS and payments',
            'Free Vagaro Marketplace listing',
            '1,000 free marketing emails a month',
            'Loyalty points',
            'Reports',
          ],
        },
        {
          name: 'Each additional calendar',
          price: '$10/mo',
          priceNumeric: 10,
          billingCycle: 'monthly',
          features: ['Up to seven paid licences; further employees added at no charge'],
        },
      ],
      transactionFees: '2.6% + $0.10 in person, 3.5% + $0.19 keyed-in (US small merchants)',
      // Standard Marketplace listing is free in the US; Fill My Books carries
      // a 20% fee on a new customer's first booking (5% on returning
      // customers for last-minute openings).
      commissionOnMarketplace:
        'None on standard Marketplace bookings (US); Vera Fill My Books charges 20% on a new customer\'s first booking',
      // All published in Vagaro's help centre. They add up; none is hidden.
      hiddenCosts: [
        '$10/month per additional calendar, up to seven paid licences',
        'Monthly FANF and Mastercard location fees on card processing',
        'Text marketing from $20/month for 1,000 credits',
        'Vera Receptionist $10/month, which needs a Text Marketing plan',
        'Forms $10/month and MySite website $20/month',
        'Branded app $100/month plus a $100 development fee (limited-time price)',
      ],
      pricingModel: 'hybrid',
      pricingPageUrl: 'https://www.vagaro.com/pro/pricing',
      lastVerified: '2026-10-09',
    },

    // US App Store listing for the Vagaro Pro business app, read 2026-10-09:
    // 4.4 (15,806 ratings).
    reviews: [
      { platform: 'App Store', rating: 4.4, reviewCount: 15806 },
    ],

    // Help centre: software for "businesses in the United States, Canada, the
    // United Kingdom, and Australia". App Store listings: English only.
    gccPresence: {
      hasArabicUI: false,
      arabicQuality: 'none',
      gccCountries: [],
      localCompliance: false,
      localPaymentMethods: false,
      localSupport: false,
    },

    // Help centre, Vera Receptionist (updated 2026-08-28): replies to Vagaro
    // Listing Page messages and, with a Text Marketing plan, SMS; can "Book
    // appointments" and "Reschedule or cancel"; over SMS sends a link instead;
    // "United States - $10 per month". Vagaro updates page: "Ask Vera About
    // Your Reports" (Aug 2026). Fill My Books: "powered by Vera".
    aiCapabilities: {
      hasAiReceptionist: true,
      hasAiChatbot: true,
      hasSmartScheduling: false,
      hasAiMarketing: true,
      hasAiAnalytics: true,
      hasAiPricing: false,
      aiDescription:
        'Vagaro sells Vera Receptionist, an AI chatbot in Connect by Vagaro that answers messages from your Vagaro listing page and, with a Text Marketing plan, SMS. In chat it can book, reschedule and cancel appointments; over SMS it sends a booking link instead. It costs $10 a month in the US and needs a Text Marketing plan. Vera also writes marketing copy, answers questions about your reports and runs Fill My Books promotions on the Vagaro Marketplace. As of October 2026, Vagaro\'s published pages do not list phone calls as a Vera channel.',
    },

    targetMarket:
      'Small and medium salons, spas and fitness businesses in the US, Canada, the UK and Australia. The breadth of features suits businesses that offer several kinds of service.',

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
      seoWeaknesses: [],
    },

    messaging: {
      tagline: 'The all-in-one salon, spa & fitness software',
      primaryValueProp:
        'All-in-one business management with a consumer marketplace, from $23.99 a month in the US on a limited-time offer',
      targetAudience:
        'Salon, spa and fitness business owners who want a broad feature set at a low entry price',
      toneAndVoice: 'Practical and feature-led, always circling back to value',
      keyMessages: [
        '$23.99/month for one calendar (limited-time offer, $30 regular)',
        '300K professionals trusting Vagaro',
        '30-day free trial',
        'Cancel anytime with no cancellation fees',
        'Free Vagaro Marketplace listing',
      ],
    },

    conversionStrategy: {
      primaryCta: 'Start Free Trial',
      freeTrialOffered: true,
      demoOffered: true,
      socialProof: [
        '300K professionals trusting Vagaro',
        '162M+ appointments made in 2026',
        '17 years in business',
      ],
      conversionTactics: [
        '30-day free trial',
        'Limited-time $23.99/month offer',
        'Free card reader with Vagaro Merchant Services',
        'Demo available for larger businesses',
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
        'Branded app and MySite website',
      ],
      switchingIncentives: ['Data import with help from its Onboarding Team', 'No cancellation fees'],
    },

    growthVsOperations: {
      growthScore: 5,
      growthFeatures: [
        'Consumer marketplace',
        'Vera Fill My Books promotions',
        'Email and text marketing',
        'Loyalty points',
        'Gift certificates and Daily Deals',
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
        'An operations platform with a consumer marketplace. For growth it offers email and text campaigns, points-based loyalty and Vera Fill My Books, which promotes openings on the Vagaro Marketplace for a fee on new-customer bookings.',
    },

    daisyAdvantages: [
      'AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English; Vagaro\'s Vera Receptionist answers listing-page chat and SMS as a $10/month add-on',
      'Official Meta Tech Provider with native WhatsApp and Instagram messaging',
      'Cashback-funded customer acquisition alongside the marketplace',
      'Arabic and English as equals; Vagaro\'s apps list English only',
      'A branded booking page in every plan; Vagaro sells MySite websites and a branded app as add-ons',
      'Cashback rewards for retention; Vagaro\'s loyalty program is points-based',
      'Smart AI scheduling',
      'Built for the GCC with local payments; Vagaro sells in the US, Canada, the UK and Australia',
    ],

    daisySwitchingReasons: [
      'Want an AI receptionist on WhatsApp and Instagram, in Arabic and English',
      'Paying $10 a month for each extra calendar as the team grows',
      'Need Arabic for clients in the GCC',
      'Want cashback rewards that bring clients back',
      'Want a branded booking page included in the plan price',
      'Need local payment methods in the GCC',
    ],

    competitorStrengths: [
      'US plan from $23.99 a month for one calendar on a limited-time offer ($30 regular)',
      'Broad feature set covering salon, spa and fitness',
      '30-day free trial',
      'Strong POS with its own card readers and PayPro hardware',
      'Vera AI tools: an AI receptionist for chat and SMS, AI-written marketing copy and Fill My Books promotions',
      'Branded app and MySite websites, with your own domain',
      '24/7 support team, according to its help centre',
      'Acquired Schedulicity in January 2025',
    ],

    competitorWeaknesses: [
      'No Arabic interface and no GCC market on its published pages, as of October 2026',
      'Vera Receptionist is a $10/month add-on that needs a Text Marketing plan, and over SMS it sends a booking link rather than booking',
      'Each additional calendar adds $10 a month, up to seven paid licences',
      'Text marketing, Forms, MySite and the branded app are paid add-ons',
      'Fill My Books charges 20% on a new customer\'s first booking',
      'Loyalty is points-based; cashback rewards are not listed on Vagaro\'s published pages',
    ],

    faq: [
      {
        question: 'How does Vagaro pricing work?',
        answer:
          'In the US, Vagaro\'s base subscription is $23.99 a month for one calendar on a limited-time offer ($30 regular). Each additional employee calendar is $10 a month, up to seven paid licences; after that, new employees are added at no extra charge. Card processing for small merchants is 2.6% + $0.10 in person and 3.5% + $0.19 keyed in, plus monthly FANF and Mastercard location fees. Add-ons include text marketing from $20 a month, Forms at $10, MySite at $20 and Vera Receptionist at $10. A salon with five calendars pays $63.99 a month in subscription on the current offer, or $70 at the regular price, before processing and add-ons.',
      },
      {
        question: 'How does Daisy compare to Vagaro?',
        answer:
          'Both run bookings, payments and client records, and both sell an AI receptionist. Vagaro\'s Vera answers listing-page chat and SMS as a $10 a month add-on, and Vagaro sells in the US, Canada, the UK and Australia. Daisy\'s AI receptionist works on WhatsApp, Instagram and your booking site in Arabic and English, and Daisy adds cashback-driven acquisition and a branded booking page.',
      },
      {
        question: 'Can Vagaro\'s AI chatbot book appointments?',
        answer:
          'Yes, in chat. Vagaro\'s help centre says Vera Receptionist can book, reschedule and cancel appointments and check availability. Over SMS it sends the customer a booking link instead. It costs $10 a month in the US and needs a Text Marketing plan. Daisy\'s AI receptionist books and takes payment on WhatsApp, Instagram and the booking site, 24/7 in Arabic and English.',
      },
      {
        question: 'Can I switch from Vagaro to Daisy?',
        answer:
          'Yes. Vagaro has no contracts, you can cancel at any time, and it lets you export your customer list. Daisy will move the client data, appointment history and service menus across, and most businesses are done inside a week.',
      },
      {
        question: 'What does Vagaro cost on top of the subscription?',
        answer:
          'Vagaro publishes all of these, so they are not hidden, but they add up. In the US: $10 a month for each additional calendar up to seven, card processing from 2.6% + $0.10 in person with monthly network fees, text marketing from $20 a month for 1,000 credits, Vera Receptionist at $10 a month, Forms at $10, MySite at $20, and a branded app at $100 a month plus a $100 development fee at its current limited-time price. Fill My Books charges 20% on a new customer\'s first booking. Daisy includes AI marketing and team features in the base plan.',
      },
      {
        question: 'Does Vagaro work for salons in Dubai or Saudi Arabia?',
        answer:
          'Vagaro sells its software in the US, Canada, the UK and Australia, and its apps list English only. We could not find GCC pricing, payments or an Arabic interface on its published pages as of October 2026. Daisy was built for the GCC, with a native Arabic and English interface and local payment integration, and is live in all six GCC countries.',
      },
      {
        question: 'Does Vagaro have AI features?',
        answer:
          'Yes. Vera, Vagaro\'s built-in AI assistant, runs several features. Vera Receptionist answers chat and SMS for $10 a month in the US. Fill My Books creates deals and promotes your openings on the Vagaro Marketplace for a 20% fee on a new customer\'s first booking. Vera can also write descriptions and marketing copy and answer questions about your reports. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site in Arabic and English, alongside AI marketing and smart scheduling.',
      },
      {
        question: 'How good is the Vagaro mobile app for business owners?',
        answer:
          'The Vagaro Pro business app is rated 4.4 out of 5 from about 15,800 ratings on the US App Store, as of October 2026, and customers book through a separate Vagaro app. Daisy\'s business app is built around salon operations, with the AI receptionist, cashback and payments in one place.',
      },
      {
        question: 'Can Vagaro scale for multiple salon locations?',
        answer:
          'Yes. Vagaro supports multi-location businesses, and its reports can cover up to 25 locations at once. Daisy gives multi-location businesses centralized analytics, staff scheduling across branches, one set of client records and inventory managed across every site.',
      },
      {
        question: 'How is Vagaro\'s customer support?',
        answer:
          'Vagaro\'s help centre says customers get access to its 24/7 support team. Its AI assistant, Vera, answers questions first, with a Chat with Human option to reach an agent, and one-on-one training costs $100 in the US. Daisy includes customer support on every plan, with priority support on the higher tiers.',
      },
    ],

    lastResearched: '2026-10-09',
    notes:
      'US plan from $23.99 a month for one calendar on a limited-time offer ($30 regular), plus $10 per extra calendar up to seven. Vera Receptionist (chat and SMS, $10/month add-on) books in chat. Sold in the US, Canada, the UK and Australia, with no Arabic interface listed. Acquired Schedulicity in January 2025.',
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
        'Mindbody lists an AI Concierge that turns missed calls into bookings, alongside the Messenger[ai] front desk which is a paid add-on. Both sit on the phone and messaging front desk rather than across the platform: no smart scheduling and no AI analytics.',
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
      'Branded booking page with no Daisy branding vs Mindbody-branded marketplace',
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
          'Mindbody lists an AI Concierge for turning missed calls into bookings, and the Messenger[ai] front desk as a paid add-on. Both sit on the front desk rather than across the platform: the core product has no AI marketing, no scheduling optimization and no predictive analytics. Daisy includes the receptionist, marketing and smart scheduling in the base plan.',
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
      'Enterprise-grade, AI-first management platform for salons, spas and med spas. Its AI Workforce, marketed as nine AI agents, is among the most comprehensive AI suites in the industry. A Dubai office gives it real GCC presence.',
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
        'The most comprehensive AI suite available: nine AI agents covering the phone receptionist, marketing campaigns, review management, scheduling optimization, analytics and staff recommendations. AI comes first here, and the investment continues.',
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
        'AI-first platform marketing nine AI agents',
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
        'The most growth-oriented competitor of the set, and the most AI-first. A solid operations foundation with nine AI agents working on top of it. Most of those AI features sit in the higher enterprise tiers. On AI, this is Daisy\'s most direct competitor.',
    },

    daisyAdvantages: [
      'Transparent, predictable pricing vs opaque enterprise quotes',
      'Native Arabic UI vs English-only platform (despite GCC offices)',
      'No contracts or lock-in vs annual enterprise agreements',
      'SMB-friendly from Day 1 vs enterprise-only focus',
      'Cashback and marketplace consumer acquisition vs no marketplace',
      'Branded booking page with no Daisy branding vs Zenoti-branded experience',
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
          'Zenoti has the most comprehensive AI suite of any traditional platform, marketing nine AI agents. Those features generally sit in enterprise tiers behind opaque pricing. Daisy puts the AI receptionist, smart scheduling and AI marketing in the base platform at a published price, and adds the native Arabic support Zenoti does not have.',
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
