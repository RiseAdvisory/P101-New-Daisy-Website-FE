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
      'Customer acquisition through cashback and AI marketing, plus an optional marketplace in selected countries, vs marketplace-only discovery',
      'Arabic and English as equals across the whole product, with an AI receptionist that works in both',
      'A booking page with your logo, name and colours that your own domain can redirect to',
      'Nothing added per transaction, vs online payments at 4.90% + AED 0.75 per transaction in the UAE',
      'AI that recommends the next action, on top of dashboards and reports',
      'GCC-built, with cashback acquisition and local payment integration in every plan',
    ],

    daisySwitchingReasons: [
      'Want 50 AI receptionist conversations in the plan, rather than an AI add-on priced per location',
      'Want Arabic and English as equals across staff tools, client messages and booking pages, with an AI receptionist that works in both',
      'Want an AI receptionist on WhatsApp and Instagram, in Arabic and English',
      'Want marketing included in the plan price rather than billed per message',
      'Want a booking page carrying your logo, name and colours, with your own domain redirecting to it',
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
          'No. The free plan is gone. Fresha now charges a monthly subscription, AED 149.95 in the UAE for the Independent plan, plus online payments at 4.90% + AED 0.75 per transaction, a one-time 50% commission on new marketplace clients, and per-message charges for marketing beyond the first 50 emails a month. Daisy publishes its plan prices and charges nothing per marketing message. Its marketplace is optional, and commission applies only to new clients it brings you.',
      },
      {
        question: 'What does Fresha cost on top of the subscription?',
        answer:
          'Fresha publishes these charges on its own pricing page, so they are not concealed, but they do stack. In the UAE: online payments at 4.90% + AED 0.75 per transaction, a one-time 50% commission on new marketplace clients with an AED 20 minimum, marketing emails free for the first 50 each month and then AED 0.08 each, texts at AED 0.14, and an Insights add-on at AED 319.95 per bookable team member per month. Added together these can exceed the subscription itself. Daisy\'s plan price covers marketing and payment processing and includes 50 AI receptionist conversations, with paid top-ups after that.',
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
      'Cashback-funded customer acquisition, with an optional marketplace in selected countries',
      'A booking page with your logo, name and colours that your own domain can redirect to',
      'Built for the GCC; Booksy\'s help centre lists no GCC country',
      'Plans that include 5, 10 or 15 team members, then $10 a month per extra calendar; Booksy adds $20 a month per additional team member',
      'AI-powered marketing automation',
    ],

    daisySwitchingReasons: [
      'Need Arabic for clients in the GCC',
      'Want an AI receptionist on WhatsApp and Instagram as well as your booking site',
      'Want a plan that covers a team of 5, 10 or 15, where Booksy adds $20 a month for each extra team member',
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
          'In the US, Booksy costs $29.99 a month plus tax, and $20 a month for each additional team member. Every feature is included in that price, so a five-person salon pays $109.99 a month before tax. Card payments cost 2.49% + $0.10 on the Booksy Card Reader, 2.49% + $0.20 with Tap to Pay and 2.69% + $0.30 for mobile and keyed-in payments. Boost, the optional marketplace promotion, charges a one-time 30% of a new client\'s first visit, capped at $100. Daisy\'s Basic plan includes 5 team members, Growth 10 and Business 15, and each extra calendar is $10 a month.',
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
      'Cashback-funded customer acquisition, with an optional marketplace in selected countries',
      'Arabic and English as equals; Vagaro\'s apps list English only',
      'A branded booking page in every plan; Vagaro sells MySite websites and a branded app as add-ons',
      'Cashback rewards for retention; Vagaro\'s loyalty program is points-based',
      'Smart AI scheduling',
      'Built for the GCC with local payments; Vagaro sells in the US, Canada, the UK and Australia',
    ],

    daisySwitchingReasons: [
      'Want an AI receptionist on WhatsApp and Instagram, in Arabic and English',
      'Want 5, 10 or 15 team members included before any extra-calendar charge',
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
          'Vagaro publishes all of these, so they are not hidden, but they add up. In the US: $10 a month for each additional calendar up to seven, card processing from 2.6% + $0.10 in person with monthly network fees, text marketing from $20 a month for 1,000 credits, Vera Receptionist at $10 a month, Forms at $10, MySite at $20, and a branded app at $100 a month plus a $100 development fee at its current limited-time price. Fill My Books charges 20% on a new customer\'s first booking. Daisy\'s plans include AI marketing and 5, 10 or 15 team members, with extra calendars at $10 a month.',
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
      'Published prices for every plan vs Accelerate and Ultimate quoted on request',
      'Arabic and English interface vs a Business app that lists English, French, German, Italian, Portuguese and Spanish',
      'No contracts or lock-in vs contract terms that depend on the Mindbody plan and billing terms',
      'Built for beauty and wellness vs a platform with many class-based fitness features',
      'Cashback-driven customer acquisition, with an optional marketplace in selected countries',
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
      'Published pricing vs quotes on request',
      'Native Arabic UI vs an interface in English, French and French-Canada',
      'No contracts or lock-in',
      'Cashback and an optional consumer marketplace (selected countries) for acquisition; a consumer marketplace isn\'t listed on Zenoti\'s published pages',
      'AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English, vs an AI Receptionist voice agent for calls',
    ],

    daisySwitchingReasons: [
      'Want a published price instead of a custom quote',
      'Need an Arabic interface; Zenoti lists English, French and French-Canada',
      'Want an AI receptionist in the plan, with 50 conversations included, without a separate AI package',
      'Want cashback for acquisition, with the option of a consumer marketplace',
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
          'Zenoti lists booking through your own webstore, a branded mobile app, SmartBot chat, Reserve with Google, Facebook and Instagram. A consumer marketplace isn\'t listed on its published pages as of October 2026. Daisy pairs cashback rewards and AI-powered marketing with an optional consumer marketplace, available in selected countries, to bring new customers in.',
      },
      {
        question: 'What mobile apps does Zenoti have?',
        answer:
          'Zenoti lists a branded guest app for your clients, the MyZen app for providers and Zenoti Mobile. Daisy\'s mobile app is built for speed and simplicity, with AI handling routine work in the background.',
      },
    ],

    lastResearched: '2026-10-09',
    notes:
      'The most direct competitor on AI. Quote-only pricing; AI agents need AI Plus; interface in English, French and French-Canada (no Arabic found); Dubai office and Saudi e-invoicing support. Fair contrasts for Daisy: Arabic, published pricing, AI on WhatsApp and Instagram, and cashback with an optional marketplace.',
  },
};

// ---------------------------------------------------------------------------
// I18n-wrapped export — lazily resolved to avoid circular import
// ---------------------------------------------------------------------------

export function getTier1CompetitorsI18n(): I18nContent<Record<string, CompetitorData>> {
  const { tier1CompetitorsAr } = require('./tier1Data.ar') as { tier1CompetitorsAr: Record<string, CompetitorData> };
  return { en: tier1Competitors, ar: tier1CompetitorsAr };
}
