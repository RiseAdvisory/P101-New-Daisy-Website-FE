// =============================================================================
// WS1: Tier 2 Competitors. Medium Research
// Last updated: March 2026
// =============================================================================

import type { CompetitorData } from './competitorData';
import type { I18nContent } from '../i18n';

export const tier2Competitors: Record<string, CompetitorData> = {
  // ---------------------------------------------------------------------------
  // 6. Glamera
  // ---------------------------------------------------------------------------
  glamera: {
    slug: 'glamera',
    name: 'Glamera',
    website: 'https://www.glamera.com',
    tier: 2,
    description:
      'Arabic-native beauty marketplace and SaaS platform out of Saudi Arabia, pairing a 100K+ user consumer marketplace with business management tools. Expanding into UAE and Egypt.',
    founded: '2019',
    headquarters: 'Riyadh, Saudi Arabia',
    employeeCount: '50-100',
    funding: '$2.37M',

    features: {
      onlineBooking: 2,
      posAndPayments: 1,
      clientManagement: 1,
      staffManagement: 1,
      marketingAndCrm: 1,
      inventoryManagement: 0,
      reportingAndAnalytics: 1,
      marketplaceAndDiscovery: 2,
      aiCapabilities: 0,
      brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: true,
      startingPrice: 'Free (paid from ~$30/mo)',
      startingPriceNumeric: 0,
      tiers: [
        {
          name: 'Free',
          price: 'Free',
          priceNumeric: 0,
          features: ['Basic booking', 'Marketplace listing', 'Limited features'],
        },
        {
          name: 'Professional',
          price: '~$30/mo',
          priceNumeric: 30,
          billingCycle: 'monthly',
          features: [
            'Full booking management',
            'Client management',
            'Staff scheduling',
            'Basic reporting',
            'Priority marketplace listing',
          ],
        },
      ],
      hiddenCosts: [
        'Marketplace commission on bookings',
        'Limited features in free tier',
        'Premium placement fees',
      ],
      pricingModel: 'hybrid',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'App Store', rating: 4.5, reviewCount: 5000 },
      { platform: 'Google Play', rating: 4.3, reviewCount: 8000 },
    ],

    gccPresence: {
      hasArabicUI: true,
      arabicQuality: 'native',
      gccCountries: ['KSA', 'UAE'],
      localCompliance: true,
      localPaymentMethods: true,
      localSupport: true,
    },

    aiCapabilities: {
      hasAiReceptionist: false,
      hasAiChatbot: false,
      hasSmartScheduling: false,
      hasAiMarketing: false,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription: 'No AI. Automated booking confirmations are the extent of it.',
    },

    targetMarket:
      'Saudi beauty salons and spas, aimed at Arabic-speaking businesses in KSA, with the marketplace pushing into UAE and Egypt.',

    messaging: {
      tagline: 'Your beauty marketplace',
      primaryValueProp:
        'Arabic-native beauty marketplace connecting Saudi consumers with local salons and spas',
      targetAudience: 'Saudi salon owners who want to show up on a local marketplace',
      toneAndVoice: 'Local and Arabic-first, with the marketplace front and centre',
      keyMessages: [
        'Arabic-native platform',
        '100K+ consumers on marketplace',
        'Built for Saudi market',
        'Free to start',
        'Growing to UAE and Egypt',
      ],
    },

    daisyAdvantages: [
      '24/7 AI receptionist vs no AI at all',
      'Complete business management suite vs basic booking/marketplace',
      'POS, inventory, and advanced reporting vs minimal features',
      'AI-powered marketing vs no marketing tools',
      'Global scalability vs KSA-focused only',
      'White-label brand control vs Glamera-branded marketplace',
      'Cashback customer acquisition vs marketplace-only discovery',
      'Full staff management vs basic scheduling',
    ],

    daisySwitchingReasons: [
      'Need more than a marketplace, want complete business management',
      'Want AI receptionist to handle calls and bookings 24/7',
      'Need POS, inventory, and advanced reporting',
      'Want to build own brand instead of relying on Glamera marketplace',
      'Need marketing automation beyond marketplace listing',
      'Want to expand beyond Saudi Arabia with a global platform',
    ],

    competitorStrengths: [
      'Native Arabic UI, built for Saudi market',
      'Growing consumer marketplace (100K+ users)',
      'Free tier available',
      'Local GCC compliance and payment methods',
      'Arabic-speaking customer support',
    ],

    competitorWeaknesses: [
      'Zero AI capabilities',
      'Very basic business management features',
      'No POS or inventory management',
      'Limited to KSA market primarily',
      'Small team and limited funding ($2.37M)',
      'Basic reporting only',
      'No branding control on customer-facing pages',
      'Limited scalability beyond GCC',
    ],

    faq: [
      {
        question: 'How does Daisy compare to Glamera?',
        answer:
          'Glamera is a Saudi-focused marketplace with basic booking attached. Daisy is a growth platform: AI receptionist, full business management, POS, marketing automation and white-labeling. Both are natively Arabic, but Daisy carries considerably more, particularly on AI.',
      },
      {
        question: 'Is Glamera available outside Saudi Arabia?',
        answer:
          'Glamera is moving into UAE and Egypt but remains Saudi-focused. Daisy was built for the GCC, with a native Arabic and English interface and local payment methods, live in Kuwait today and expanding across the Gulf.',
      },
      {
        question: 'What are the hidden costs when using Glamera?',
        answer:
          'Glamera takes a marketplace commission on bookings that come through its consumer platform, and charges premium placement fees for better visibility. The free tier is thin enough to push most businesses onto a paid plan. Daisy publishes its pricing, takes no per-booking commission and includes the core features in every plan.',
      },
      {
        question: 'How hard is it to switch from Glamera to Daisy?',
        answer:
          'A thin feature set means there is less to move, so the switch is straightforward. Daisy handles the onboarding and the data migration, transferring client records, booking history and staff details without interrupting the business.',
      },
      {
        question: 'Does Glamera have AI features like an AI receptionist?',
        answer:
          'No. Glamera has no AI at all, just automated booking confirmations. Daisy runs a full AI ecosystem: a 24/7 receptionist taking calls, bookings and payments, plus AI marketing, smart scheduling and analytics.',
      },
      {
        question: 'How good is Glamera\'s mobile app compared to Daisy?',
        answer:
          'The app rates decently, 4.5 on the App Store and 4.3 on Google Play, and works well as a consumer marketplace for finding salons. The business management side is basic. Daisy\'s app carries a complete management suite with AI, POS, inventory and advanced reporting alongside the marketplace.',
      },
      {
        question: 'Can Glamera support a multi-location salon business?',
        answer:
          'Glamera was designed around individual salon listings on its marketplace, and multi-location management is limited. Daisy was built to scale, with multi-branch management, centralized reporting, staff scheduling across locations and one inventory across all of them.',
      },
      {
        question: 'What kind of customer support does Glamera provide?',
        answer:
          'Support is Arabic-speaking and oriented to the Saudi market. With a team of 50-100 employees and $2.37M in funding, capacity is necessarily limited. Daisy provides dedicated onboarding and multi-channel support in Arabic and English, on a larger support infrastructure.',
      },
      {
        question: 'Can I keep my own brand identity on Glamera or is everything Glamera-branded?',
        answer:
          'Glamera is marketplace-first, so your business appears under the Glamera brand. There is no white-labeling and no custom branding. Daisy gives you a branded booking page, so your brand carries across booking pages, apps and every message to a customer.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'A direct GCC competitor working from a thin feature set. Its strength is the Arabic-native marketplace in KSA. It is exposed on AI, on depth and on scale, and the small funding round caps how fast that changes.',
  },

  // ---------------------------------------------------------------------------
  // 7. DINGG
  // ---------------------------------------------------------------------------
  dingg: {
    slug: 'dingg',
    name: 'DINGG',
    website: 'https://www.dingg.app',
    tier: 2,
    description:
      'India-based salon management platform with genuinely strong AI in its AI Genius suite. It is expanding into the UAE and the wider GCC with a native Arabic interface, positioned as the tech-forward option for beauty businesses.',
    founded: '2018',
    headquarters: 'Mumbai, India',
    employeeCount: '50-100',
    funding: '~$3M',

    features: {
      onlineBooking: 2,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 2,
      marketingAndCrm: 2,
      inventoryManagement: 1,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 1,
      aiCapabilities: 2,
      brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      freeTrialDays: 14,
      startingPrice: '$49/mo',
      startingPriceNumeric: 49,
      tiers: [
        {
          name: 'Starter',
          price: '$49/mo',
          priceNumeric: 49,
          billingCycle: 'monthly',
          features: [
            'Online booking',
            'Client management',
            'Basic reporting',
            'Staff scheduling',
          ],
        },
        {
          name: 'Professional',
          price: '$79/mo',
          priceNumeric: 79,
          billingCycle: 'monthly',
          features: [
            'Everything in Starter',
            'AI Genius suite',
            'Marketing automation',
            'Advanced analytics',
            'Inventory management',
          ],
        },
      ],
      hiddenCosts: [
        'AI features only in higher tier',
        'Payment processing fees',
        'SMS/messaging costs',
      ],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'Google Play', rating: 4.2, reviewCount: 3000 },
      { platform: 'App Store', rating: 4.0, reviewCount: 500 },
    ],

    gccPresence: {
      hasArabicUI: true,
      arabicQuality: 'native',
      // Live country sites verified 2026-09-29: dingg.app/ae, /sa, /qa, /kw, /om
      // all return 200 with country-specific titles. /bh returns 404.
      gccCountries: ['UAE', 'KSA', 'Qatar', 'Kuwait', 'Oman'],
      localCompliance: true,
      localPaymentMethods: true,
      localSupport: true,
    },

    aiCapabilities: {
      hasAiReceptionist: true,
      hasAiChatbot: true,
      hasSmartScheduling: true,
      hasAiMarketing: true,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription:
        'The AI Genius suite covers an AI receptionist for calls, a chatbot for messaging, smart scheduling and AI-suggested marketing campaigns. For the price, that is a competitive offering.',
    },

    targetMarket:
      'Beauty salons and spas across India, now reaching into the UAE and GCC. Mid-range pricing aimed at growing businesses that want AI without enterprise bills.',

    messaging: {
      tagline: 'Smart salon management powered by AI',
      primaryValueProp:
        'AI-powered salon management with native Arabic support at an affordable price point',
      targetAudience:
        'Growing salons in India and the GCC that want AI without paying enterprise rates',
      toneAndVoice: 'Tech-forward and approachable, with AI as the headline',
      keyMessages: [
        'AI Genius suite for smart management',
        'Arabic-native for GCC market',
        'Affordable AI-powered features',
        'Complete salon management',
        'Growing in UAE/GCC',
      ],
    },

    daisyAdvantages: [
      'Established GCC presence across all 6 countries vs UAE-only expansion',
      'Consumer marketplace with cashback vs no marketplace',
      'Branded booking page with no Daisy branding vs standard branding',
      'More comprehensive feature depth across all categories',
      'Stronger GCC compliance and local payment integrations',
      'AI that handles payments and full booking flow vs routing-focused AI',
      'Customer acquisition engine vs operations-focused platform',
    ],

    daisySwitchingReasons: [
      'Need broader GCC coverage beyond just UAE',
      'Want consumer-facing marketplace and cashback for acquisition',
      'Need a branded booking page for brand consistency',
      'Want deeper feature set (POS, inventory, advanced reporting)',
      'Need AI that handles full booking and payment flow',
    ],

    competitorStrengths: [
      'Strong AI suite at affordable price ($49-79/mo)',
      'Native Arabic UI for GCC market',
      'Good AI receptionist and chatbot capabilities',
      'Growing GCC presence with local support',
      'Competitive pricing for AI features',
    ],

    competitorWeaknesses: [
      'Small company with limited funding ($3M)',
      'India-centric. GCC expansion still early',
      'No consumer marketplace or cashback program',
      'Limited to UAE in GCC, not yet in KSA, Kuwait, etc.',
      'Basic inventory management',
      'No branding control option',
      'Lower review count and brand awareness',
      'AI features locked behind higher tier',
    ],

    faq: [
      {
        question: 'How does DINGG compare to Daisy?',
        answer:
          'DINGG has a competitive AI suite at $49-79/mo with Arabic support. Daisy carries more around it: marketplace-driven acquisition, cashback rewards, white-labeling, and presence across all 6 GCC countries against DINGG\'s UAE-only footprint.',
      },
      {
        question: 'Does DINGG work in the GCC?',
        answer:
          'DINGG is moving into the UAE with a native Arabic interface and local payment support, and has not yet reached KSA, Kuwait, Bahrain, Oman or Qatar. Daisy was built for the GCC, with a native Arabic and English interface and local payment methods, live in Kuwait today and expanding across the Gulf.',
      },
      {
        question: 'How much does DINGG really cost with all the add-ons?',
        answer:
          'DINGG opens at $49/mo for the basics, and the AI Genius suite only appears at $79/mo. Payment processing and SMS costs sit on top of the subscription. Daisy puts the AI in the core platform rather than behind a higher tier.',
      },
      {
        question: 'Can I migrate my salon data from DINGG to Daisy?',
        answer:
          'Yes. Daisy moves your client database, appointment history and staff records across. The two platforms structure booking and client data similarly, so the transition is manageable, and the onboarding team walks you through each step.',
      },
      {
        question: 'How does DINGG\'s AI receptionist compare to Daisy\'s?',
        answer:
          'AI Genius gives you a receptionist and chatbot for calls and messages, plus smart scheduling. Daisy\'s receptionist goes further, running the full booking flow and taking payment on its own, and it sits behind a consumer marketplace and cashback system DINGG has nothing equivalent to.',
      },
      {
        question: 'Is DINGG\'s Arabic support as good as Daisy\'s for GCC businesses?',
        answer:
          'The Arabic interface is genuinely native and DINGG runs country sites for the UAE, Saudi Arabia, Qatar, Kuwait and Oman, though not Bahrain. Daisy offers native Arabic with local payment methods, built for the Gulf and live in Kuwait today.',
      },
      {
        question: 'How good is DINGG\'s mobile app for day-to-day salon management?',
        answer:
          'The app rates 4.2 on Google Play and 4.0 on the App Store, and handles booking and client management reasonably. Reviews suggest it is still maturing. Daisy\'s app is more finished, with POS, inventory, AI and marketplace access in one place.',
      },
      {
        question: 'Does DINGG support multi-branch salon businesses?',
        answer:
          'Multi-location support exists at a basic level. With a small team and $3M in funding, enterprise-grade multi-branch management is not where DINGG is strongest. Daisy was built to scale, with centralized multi-branch dashboards, cross-location reporting, staff allocation and inventory management.',
      },
      {
        question: 'What integrations does DINGG support compared to Daisy?',
        answer:
          'DINGG connects to the common payment gateways and basic tools, and the wider integration ecosystem is still growing at its size. Daisy reaches further, covering local GCC payment methods, marketing tools, Google Calendar sync and a consumer marketplace.',
      },
      {
        question: 'Is DINGG a reliable long-term choice for my beauty business?',
        answer:
          'DINGG is promising and the AI is strong. On $3M in funding with a team of 50-100, there is real risk around how far it can grow and how much support it can carry. Daisy is more established, present in more markets, deeper on features, and built to support businesses as they scale.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'The closest Tier 2 competitor on AI. Arabic support and AI at an affordable price is a compelling combination. The weaknesses are no marketplace and limited funding; its GCC coverage now spans five countries, short of the full six. Worth watching as it grows in the region.',
  },

  // ---------------------------------------------------------------------------
  // 8. GlossGenius
  // ---------------------------------------------------------------------------
  glossgenius: {
    // Sources read 2026-10-09: glossgenius.com/pricing, genius.ai/reception,
    // glossgenius.com/ai-business-tools, glossgenius.com/for-multi-location-appointment-businesses,
    // glossgenius.com/legal/privacy, glossgenius.com/legal/terms, the US App Store listing,
    // and Fortune (21 Jul 2026) for funding and headcount.
    slug: 'glossgenius',
    name: 'GlossGenius',
    website: 'https://www.glossgenius.com',
    tier: 2,
    description:
      'US booking, payments and business software for beauty, wellness and medspa businesses. Since July 2026 it is a product of Genius AI, the new name of the company behind it. Its AI agents answer calls and texts, analyse sales and write marketing campaigns.',
    founded: '2016',
    headquarters: 'New York, NY, USA',
    // Fortune, 21 Jul 2026: "Genius AI itself is a sizable company, with 400 employees."
    employeeCount: '400',
    // Fortune, 21 Jul 2026: "The company has now raised more than $120 million"
    funding: 'More than $120M (Fortune, July 2026)',

    features: {
      onlineBooking: 3,
      posAndPayments: 2,
      clientManagement: 2,
      // Gold and Platinum publish roles, permissions, time tracking and (Platinum) custom commissions.
      staffManagement: 2,
      marketingAndCrm: 2,
      // Every plan publishes inventory and retail management, barcode scanning and low-stock alerts.
      inventoryManagement: 2,
      reportingAndAnalytics: 2,
      // No consumer marketplace of its own; Reserve with Google on Gold and Platinum.
      marketplaceAndDiscovery: 1,
      // Reception, Growth Analyst and AI Marketing Assistant are all published.
      aiCapabilities: 2,
      // Custom booking website builder on every plan.
      brandingAndWhiteLabel: 2,
    },

    pricing: {
      hasFreePlan: false,
      freeTrialDays: 14,
      // glossgenius.com/pricing, read 2026-10-09: monthly billing $28 / $56 / $168,
      // billed annually $24 / $48 / $148 (US, per business).
      startingPrice: '$28/mo ($24/mo billed annually)',
      startingPriceNumeric: 28,
      tiers: [
        {
          name: 'Standard',
          price: '$28/mo ($24/mo billed annually)',
          priceNumeric: 28,
          billingCycle: 'monthly',
          features: [
            'Custom booking website',
            'Email and text marketing',
            'Inventory and retail management',
            'Packages and memberships',
            'Growth Analyst and AI Marketing Assistant as a limited trial',
          ],
        },
        {
          name: 'Gold',
          price: '$56/mo ($48/mo billed annually)',
          priceNumeric: 56,
          billingCycle: 'monthly',
          features: [
            'Everything in Standard',
            'Staff management for teams of up to 9',
            'Google booking and reviews',
            'Forms, waitlist and time tracking',
            'Growth Analyst (20 queries a month) and AI Marketing Assistant',
          ],
        },
        {
          name: 'Platinum',
          price: '$168/mo ($148/mo billed annually)',
          priceNumeric: 168,
          billingCycle: 'monthly',
          features: [
            'Everything in Gold',
            'Built for teams of 10 or more, with unlimited team members',
            'Custom commissions and team goal setting',
            'Google Marketing Analytics',
            'Growth Analyst with unlimited queries',
          ],
        },
      ],
      // "Flat 2.6% rate ... no Tap to Pay, card-on-file, or manual entry fees."
      transactionFees: '2.6% per transaction',
      hiddenCosts: [
        // genius.ai/reception: free through 30 Nov 2026, then $50/month incl. 100 minutes
        // and 200 texts; overages $0.50 per minute and $0.05 per message.
        'Reception (AI receptionist): $50/mo from 1 December 2026, with 100 minutes and 200 texts; $0.50 per extra minute and $0.05 per extra text',
        'Payroll add-on: $40/mo plus $6 per seat',
        'Instant payouts: 1.8% fee',
        'Each additional location: the plan price less 15%',
      ],
      pricingModel: 'flat',
      pricingPageUrl: 'https://www.glossgenius.com/pricing',
      lastVerified: '2026-10-09',
    },

    // Third-party review sites (Capterra, G2) could not be read on 2026-10-09; only the
    // official App Store listing is kept. US App Store, read 2026-10-09: 4.5 from 4,434 ratings.
    reviews: [
      {
        platform: 'App Store',
        rating: 4.5,
        reviewCount: 4434,
        url: 'https://apps.apple.com/us/app/glossgenius-booking-payments/id1081286979',
      },
    ],

    // glossgenius.com/legal/privacy: "GlossGenius is currently only available for use
    // within the United States." The iOS app lists English only.
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
      hasAiChatbot: true,
      hasSmartScheduling: false,
      hasAiMarketing: true,
      hasAiAnalytics: true,
      hasAiPricing: false,
      aiDescription:
        'GlossGenius sells three AI agents. Reception answers calls and replies to texts 24/7 and books straight into the GlossGenius calendar. It is free until 30 November 2026 and then a $50/mo add-on. Growth Analyst answers questions about the business: a limited trial on Standard, 20 queries a month on Gold and unlimited on Platinum. The AI Marketing Assistant writes and sends email and text campaigns on Gold and Platinum, with a limited trial on Standard. GlossGenius\'s published pages do not list WhatsApp or Instagram as Reception channels as of October 2026.',
    },

    targetMarket:
      'Beauty, wellness, medspa, health and fitness businesses in the United States, from solo professionals and booth renters to multi-location teams. GlossGenius says its service is available only in the US.',

    messaging: {
      tagline: 'Scheduling, payments, and admin. Handled.',
      primaryValueProp:
        'One system for appointment businesses that books clients, takes payments and runs AI agents for reception, growth analysis and marketing',
      targetAudience:
        'US appointment businesses of every size in beauty, wellness, medspa, health and fitness',
      toneAndVoice: 'Elegant and design-led',
      keyMessages: [
        'Scheduling, payments and admin handled',
        'Reception answers calls and texts 24/7',
        'Growth Analyst and Marketing Assistant',
        'Flat 2.6% processing rate',
        'Free data transfer',
      ],
    },

    daisyAdvantages: [
      'AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English, where Reception works on calls and texts',
      'AI receptionist included in the plan, where Reception becomes a $50/mo add-on after 30 November 2026',
      'Native Arabic and English, where GlossGenius has an English-only app and is available only in the US',
      'Consumer marketplace with cashback, where GlossGenius offers a booking website and Reserve with Google',
      'Live in all six GCC countries, with GCC compliance and local payments',
    ],

    daisySwitchingReasons: [
      'Want an AI receptionist that works on WhatsApp and Instagram, beyond calls and texts',
      'Expanding to the GCC or Middle East and need Arabic support',
      'Need a consumer marketplace for customer discovery',
      'Want cashback rewards to drive customer retention',
      'Want the AI receptionist included in the plan rather than sold as an add-on',
    ],

    competitorStrengths: [
      'Design-led booking website and client experience',
      'Quick to set up, with a free data transfer service',
      'Flat 2.6% card rate, with no extra fee for Tap to Pay, card-on-file or manual entry',
      'Reception answers calls and texts 24/7 and books into the calendar',
      'Multi-location support on every plan',
      'Rated 4.5 on the US App Store from about 4,400 ratings (October 2026)',
    ],

    competitorWeaknesses: [
      'Available only in the United States, according to its privacy policy',
      'No Arabic interface; its iOS app lists English only',
      'No consumer marketplace of its own',
      'Staff management starts on Gold; the Standard plan has none',
      'Reception covers calls and texts; WhatsApp and Instagram are not listed as channels (October 2026)',
      'Reception becomes a $50/mo add-on after 30 November 2026',
      'No cashback rewards listed on its published pages',
    ],

    faq: [
      {
        question: 'How does GlossGenius compare to Daisy?',
        answer:
          'GlossGenius suits US beauty and wellness businesses that want a design-led booking site, quick setup and a flat 2.6% card rate, and its Reception agent answers calls and texts. It is available only in the US, has no Arabic interface and has no consumer marketplace of its own. Daisy runs its AI receptionist on WhatsApp, Instagram and the booking site in Arabic and English, adds a marketplace with cashback, and is live in all six GCC countries.',
      },
      {
        question: 'Does GlossGenius have AI features?',
        answer:
          'Yes, three of them. Reception answers calls and texts 24/7 and books onto the GlossGenius calendar. It is free until 30 November 2026 and then costs $50/mo for 100 minutes and 200 texts. Growth Analyst answers questions about your sales and clients (a limited trial on Standard, 20 queries a month on Gold, unlimited on Platinum), and the AI Marketing Assistant writes email and text campaigns on Gold and Platinum. The difference with Daisy is channels and language. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site, in Arabic and English, and is in the base platform. It does not answer phone calls.',
      },
      {
        question: 'What are the real costs of using GlossGenius once you add everything up?',
        answer:
          'Standard is $28/mo, Gold $56/mo and Platinum $168/mo, or $24, $48 and $148 a month billed annually. Card payments carry a flat 2.6% on every plan, so a salon taking $10,000 a month by card pays $260 in processing. Instant payouts cost 1.8%, Payroll is $40/mo plus $6 per seat, each extra location is billed at the plan price less 15%, and Reception costs $50/mo from 1 December 2026. Daisy publishes its pricing, includes the AI in the core platform, and does not take a cut of each sale.',
      },
      {
        question: 'Can I switch from GlossGenius to Daisy and keep my client data?',
        answer:
          'Yes. Daisy\'s onboarding team exports your client profiles, appointment history and payment records from GlossGenius and brings them across. The point of the process is that no client relationship or booking history is lost on the way.',
      },
      {
        question: 'Does GlossGenius support Arabic or work in the Middle East?',
        answer:
          'No. GlossGenius\'s privacy policy says the service is available only in the United States, and its iOS app lists English as its only language. Daisy was built with native Arabic and English from the start, across all 6 GCC countries.',
      },
      {
        question: 'How good is GlossGenius\'s mobile app for running a salon?',
        answer:
          'The GlossGenius app is rated 4.5 on the US App Store from about 4,400 ratings (October 2026). It covers booking, payments and client records, and you switch Reception on from inside the app. Daisy offers mobile and desktop apps in Arabic and English, with its AI receptionist on WhatsApp, Instagram and the booking site.',
      },
      {
        question: 'Can GlossGenius handle a salon with multiple locations?',
        answer:
          'Yes. GlossGenius includes multi-location on every plan, with one login, a shared client list, menus per location, staff scheduling across locations and per-location reports. Each additional location is billed at the plan price less 15%. Daisy also scales from a single-chair stylist to a multi-branch chain, managed centrally.',
      },
      {
        question: 'What kind of customer support does GlossGenius offer?',
        answer:
          'GlossGenius lists a learning centre, Gloss University training and a free data transfer service on every plan. Its published pricing for beauty and wellness plans does not set out support tiers; the medspa Practice Advanced plan adds premium customer support. Daisy offers multi-channel support in Arabic and English, with dedicated onboarding on every plan.',
      },
      {
        question: 'Does GlossGenius integrate with other tools I already use?',
        answer:
          'GlossGenius builds most tools into its own platform: payments, card readers, a website builder, marketing, inventory and an optional Payroll add-on. Its pricing page lists Reserve with Google, Google reviews and two-way calendar sync, plus Google Marketing Analytics and website pixel tracking on Platinum. Daisy\'s integrations cover local GCC payment gateways, Google Calendar, marketing tools and a built-in consumer marketplace.',
      },
      {
        question: 'Is GlossGenius good for salons that want to attract new customers?',
        answer:
          'GlossGenius does not list a consumer marketplace of its own. It gives you a booking website, automated review prompts, email and text marketing, and on Gold and Platinum, Reserve with Google, Google review integration and the AI Marketing Assistant. Cashback rewards are not listed on its published pages. Daisy includes a consumer marketplace with cashback, AI-driven campaigns and an acquisition engine built to bring new clients through the door.',
      },
    ],

    lastResearched: '2026-10-09',
    notes:
      'GlossGenius has been a Genius AI product since July 2026 and, by its own privacy policy, is available only in the US. It sells AI agents for calls and texts, analytics and marketing. Daisy differs on channels (WhatsApp, Instagram, booking site), Arabic, GCC presence and the cashback marketplace. Re-check Reception pricing after 30 November 2026.',
  },

  // ---------------------------------------------------------------------------
  // 9. Zylu
  // ---------------------------------------------------------------------------
  zylu: {
    slug: 'zylu',
    name: 'Zylu',
    website: 'https://www.zylu.com',
    tier: 2,
    description:
      'A Saudi and UAE beauty platform positioning itself as the growth-minded alternative to traditional salon software. Bootstrapped, and says its focus is the GCC.',
    founded: '2021',
    headquarters: 'Dubai, UAE',
    employeeCount: '10-30',
    funding: 'Bootstrapped',

    features: {
      onlineBooking: 1,
      posAndPayments: 1,
      clientManagement: 1,
      staffManagement: 1,
      marketingAndCrm: 1,
      inventoryManagement: 0,
      reportingAndAnalytics: 1,
      marketplaceAndDiscovery: 0,
      aiCapabilities: 0,
      brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: 'Quote-based',
      tiers: [
        {
          name: 'Custom',
          price: 'Contact for pricing',
          features: [
            'Online booking',
            'Client management',
            'Basic reporting',
            'Staff scheduling',
          ],
        },
      ],
      hiddenCosts: ['Opaque pricing, requires sales contact'],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [],

    gccPresence: {
      hasArabicUI: false,
      arabicQuality: 'none',
      gccCountries: ['UAE', 'KSA'],
      localCompliance: true,
      localPaymentMethods: false,
      localSupport: true,
    },

    aiCapabilities: {
      hasAiReceptionist: false,
      hasAiChatbot: false,
      hasSmartScheduling: false,
      hasAiMarketing: false,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription: 'No AI capabilities of any kind.',
    },

    targetMarket: 'Beauty businesses across the UAE and Saudi Arabia looking for a local platform built around growth.',

    daisyAdvantages: [
      'Proven AI capabilities vs no AI',
      'Complete platform with POS, inventory, marketplace vs basic features',
      'Native Arabic UI vs unconfirmed Arabic support',
      'Transparent pricing vs opaque quote-based model',
      'Consumer marketplace with cashback vs no marketplace',
      'All 6 GCC countries vs UAE/KSA only',
      'Established team and product vs early-stage startup',
    ],

    daisySwitchingReasons: [
      'Need AI receptionist for after-hours bookings',
      'Need complete business management (POS, inventory, reporting)',
      'Want consumer marketplace for customer acquisition',
      'Need transparent pricing without sales calls',
      'Want proven platform with Arabic UI, not an early-stage product',
    ],

    competitorStrengths: [
      'GCC market focus (UAE, KSA)',
      'Local compliance and support',
      'Growth-oriented positioning',
    ],

    competitorWeaknesses: [
      'Very early-stage with minimal features',
      'No AI capabilities',
      'No Arabic UI confirmed',
      'No consumer marketplace',
      'Opaque pricing',
      'Bootstrapped with limited resources',
      'No reviews or social proof',
      'No POS, inventory, or advanced features',
    ],

    faq: [
      {
        question: 'How does Zylu compare to Daisy?',
        answer:
          'Zylu is an early-stage GCC platform offering basic booking. Daisy is a full AI-powered platform with complete business management, a marketplace, cashback and native Arabic support across all 6 GCC countries.',
      },
      {
        question: 'How much does Zylu cost and is the pricing transparent?',
        answer:
          'Zylu prices by quote, which means talking to their sales team, and publishes no pricing page. Comparing costs before you commit is therefore difficult. Daisy publishes its tiers, so you know what you are paying before you sign anything.',
      },
      {
        question: 'Does Zylu have AI-powered features for salon management?',
        answer:
          'No. There is no AI receptionist, no chatbot, no smart scheduling and no AI marketing. Daisy runs a full AI ecosystem: a 24/7 receptionist, intelligent scheduling, automated marketing and AI-driven analytics.',
      },
      {
        question: 'Can I switch from Zylu to Daisy easily?',
        answer:
          'Yes. A basic feature set means less data to untangle, so the migration is relatively simple. Daisy\'s onboarding team moves your client records, booking data and staff information across.',
      },
      {
        question: 'Does Zylu support Arabic for beauty businesses in the Gulf?',
        answer:
          'For all its GCC positioning, Zylu has no confirmed Arabic interface. Daisy is natively Arabic, with right-to-left layout, Arabic content and Arabic and English working side by side, designed for Gulf businesses.',
      },
      {
        question: 'Is Zylu reliable enough for a growing salon business?',
        answer:
          'Zylu is bootstrapped, with 10-30 employees and no external funding, which raises fair questions about how long it can sustain itself and how quickly features will arrive. Daisy is more established, with a larger team, a proven product and the resources to support a business scaling across locations.',
      },
      {
        question: 'Does Zylu have a mobile app and how good is it?',
        answer:
          'There are few public reviews and almost no app store presence, so the mobile app is hard to judge. Daisy\'s app is fully featured and well rated, carrying business management, AI tools, POS and marketplace access wherever you are.',
      },
      {
        question: 'Can Zylu support a salon chain with multiple branches?',
        answer:
          'A basic feature set and a small team point to limited multi-location capability. Daisy was built to scale, with multi-branch dashboards, centralized reporting, staff management across locations and one inventory for a chain of any size.',
      },
      {
        question: 'What integrations does Zylu offer?',
        answer:
          'The integration ecosystem looks limited, which its stage and team size would predict, and there are no local GCC payment method integrations despite the regional targeting. Daisy connects to local payment gateways, Google Calendar and marketing platforms, and includes a consumer marketplace.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'A very early-stage competitor. The GCC focus is the right instinct, the product behind it is minimal. Worth monitoring, not currently a serious threat.',
  },

  // ---------------------------------------------------------------------------
  // 10. RepeatMD
  // ---------------------------------------------------------------------------
  repeatmd: {
    slug: 'repeatmd',
    name: 'RepeatMD',
    website: 'https://www.repeatmd.com',
    tier: 2,
    description:
      'An AI-powered growth platform for med spas and aesthetic practices, built around the "Beauty Bank" cashback concept and the Adonis and Aria AI agents. Patient retention and revenue growth are the whole focus.',
    founded: '2020',
    headquarters: 'Miami, FL, USA',
    employeeCount: '50-100',
    funding: '$16M+',

    features: {
      onlineBooking: 1,
      posAndPayments: 1,
      clientManagement: 2,
      staffManagement: 1,
      marketingAndCrm: 3,
      inventoryManagement: 0,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 1,
      aiCapabilities: 2,
      brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '~$700/mo',
      startingPriceNumeric: 700,
      tiers: [
        {
          name: 'Standard',
          price: '~$700/mo',
          priceNumeric: 700,
          billingCycle: 'monthly',
          features: [
            'Beauty Bank cashback',
            'AI agents (Adonis/Aria)',
            'Marketing automation',
            'Patient retention tools',
            'Loyalty program',
            'Analytics dashboard',
          ],
        },
      ],
      hiddenCosts: [
        'Very high monthly cost for the feature set',
        'Implementation fees',
        'Limited operations features, may need separate software',
      ],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'G2', rating: 4.7, reviewCount: 80 },
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
      hasAiMarketing: true,
      hasAiAnalytics: true,
      hasAiPricing: false,
      aiDescription:
        'Two AI agents: Adonis for marketing and lead generation, Aria for patient communication. The "Beauty Bank" cashback concept handles retention, and campaigns are AI-optimized. No voice receptionist and no smart scheduling.',
    },

    targetMarket:
      'Med spas, aesthetic clinics and premium beauty practices across the US and Canada. High-revenue businesses that can justify $700/mo for growth tools.',

    messaging: {
      tagline: 'The growth platform for med spas',
      primaryValueProp:
        'AI-powered patient retention and revenue growth through cashback rewards and intelligent marketing',
      targetAudience:
        'Med spa owners chasing patient retention and revenue growth, with $700/mo to put behind it',
      toneAndVoice: 'Premium and results-driven, speaking the med spa industry\'s own language',
      keyMessages: [
        'Beauty Bank cashback drives repeat visits',
        'AI agents automate patient engagement',
        'Revenue growth platform, not operations software',
        'Built for med spas and aesthetics',
        'Measurable ROI on patient retention',
      ],
    },

    daisyAdvantages: [
      'Complete platform (booking + POS + CRM + marketing) vs marketing-only tool at $700/mo',
      '24/7 AI receptionist (voice + chat) vs chat-only AI agents',
      'All-in-one pricing vs $700/mo for growth features alone (still need separate operations software)',
      'Native Arabic/English vs US/Canada only',
      'GCC compliance and local payments vs no international support',
      'Full operations suite included vs requiring separate booking/POS software',
      'Broader market (beauty + wellness) vs med spa only',
    ],

    daisySwitchingReasons: [
      '$700/mo for marketing only, still need separate booking and POS software',
      'Want complete platform instead of paying for multiple tools',
      'Need voice AI receptionist, not just chat agents',
      'Expanding to GCC/Middle East, need Arabic support',
      'Want marketplace for customer discovery, not just retention',
      'Need booking, POS, and operations in same platform',
    ],

    competitorStrengths: [
      'Innovative cashback concept (Beauty Bank)',
      'Strong AI marketing agents (Adonis/Aria)',
      'Focused on measurable revenue growth',
      'High G2 ratings (4.7) from niche audience',
      'Deep med spa industry expertise',
    ],

    competitorWeaknesses: [
      'Very expensive ($700/mo) for marketing-only tool',
      'No booking, POS, or operations features, needs separate software',
      'US/Canada only, no international support',
      'No Arabic or GCC presence',
      'Med spa niche, limited beauty/wellness applicability',
      'No consumer marketplace for acquisition',
      'No voice AI receptionist',
      'Small review base (80 G2 reviews)',
    ],

    faq: [
      {
        question: 'How does RepeatMD compare to Daisy?',
        answer:
          'RepeatMD is a $700/mo marketing tool for med spas that still needs separate booking and POS software behind it. Daisy is one platform covering AI receptionist, booking, POS, marketing and marketplace, with Arabic support and GCC compliance, for less money.',
      },
      {
        question: 'What is RepeatMD\'s Beauty Bank?',
        answer:
          'Beauty Bank is RepeatMD\'s cashback loyalty scheme, rewarding patients for coming back. Daisy has a comparable cashback system inside the wider platform, plus a consumer marketplace for acquisition that RepeatMD does not offer.',
      },
      {
        question: 'Why does RepeatMD cost $700 a month and are there hidden fees on top?',
        answer:
          'RepeatMD charges roughly $700/mo for marketing and retention, with implementation fees on top. It includes no booking, no POS and no operations, so separate software is a requirement rather than an option. Daisy covers marketing, AI, booking, POS and operations in one platform for a fraction of the combined cost.',
      },
      {
        question: 'Can I move my patient data from RepeatMD to Daisy?',
        answer:
          'Yes. Daisy\'s onboarding team moves client profiles, loyalty balances and engagement history across. Because RepeatMD holds marketing and retention data rather than full operations, what actually migrates is customer records and campaign data, which keeps it manageable.',
      },
      {
        question: 'Does RepeatMD work for beauty businesses in the Middle East?',
        answer:
          'No. RepeatMD serves the US and Canadian med spa market only, in English. There is no Arabic interface, no GCC compliance and no local payment methods. Daisy was built for the GCC, with a native Arabic and English interface and local payment methods, live in Kuwait today and expanding across the Gulf.',
      },
      {
        question: 'How do RepeatMD\'s AI agents compare to Daisy\'s AI receptionist?',
        answer:
          'Adonis handles marketing and lead generation, Aria handles patient communication, and both work over chat. Neither takes a voice call, and neither books or takes payment on its own. Daisy\'s AI receptionist covers voice, chat, the full booking flow and payment, 24/7.',
      },
      {
        question: 'Does RepeatMD have a mobile app for managing my business?',
        answer:
          'Mobile presence is thin, with 80 G2 reviews and no meaningful app store ratings. As a marketing tool rather than a management platform, the mobile experience is about watching campaigns rather than running a day. Daisy\'s mobile app covers the whole business: bookings, POS, staff and the AI features.',
      },
      {
        question: 'Can RepeatMD handle multiple clinic locations?',
        answer:
          'It can run marketing and retention campaigns across multi-location med spas. Without booking, POS or operations, each location still needs separate software to get through the day. Daisy manages multi-branch centrally, with booking, staff scheduling, reporting and marketing across every location in one platform.',
      },
      {
        question: 'What integrations does RepeatMD offer and do I need other software too?',
        answer:
          'It connects to some EMR and EHR systems and to marketing tools, and you will still need separate booking software, a POS and operations tools beside it. That means several vendors, several logins and data sitting in separate places. Daisy removes the fragmentation by holding booking, POS, marketing, AI and operations together.',
      },
      {
        question: 'Is RepeatMD suitable for regular beauty salons or just med spas?',
        answer:
          'RepeatMD is built for med spas and aesthetic practices, and the pricing, features and AI agents all reflect that niche. A regular salon, a barbershop or a wellness business would find it expensive and badly fitted. Daisy serves every beauty and wellness vertical the same, from hair salons to med spas to nail studios.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'The cashback concept is interesting and validates Daisy\'s approach. At $700/mo for marketing alone, with no operations, the value proposition looks weak beside an all-in-one platform, and the med spa niche limits how far it reaches.',
  },

  // ---------------------------------------------------------------------------
  // 11. Boulevard
  // ---------------------------------------------------------------------------
  boulevard: {
    // Sources read 2026-10-09: joinblvd.com/pricing (Spa, Hair Salon, Nail Salon, Barber and
    // Massage show the same prices), joinblvd.com/features/ai-receptionist,
    // joinblvd.com/features/boulevard-ai, joinblvd.com/features/self-booking,
    // joinblvd.com/features/loyalty-and-offers, the Series D press release (17 Jul 2025),
    // Crunchbase News (17 Jul 2025) and the US App Store listing for Boulevard Professional.
    slug: 'boulevard',
    name: 'Boulevard',
    website: 'https://www.joinblvd.com',
    tier: 2,
    description:
      'A premium client experience platform for salons, spas, medspas and barbershops in the US, built around Precision Scheduling. It sells Beau, a voice AI receptionist, as an add-on, and had raised about $188M by July 2025.',
    // Press release, 17 Jul 2025: "Founded in 2016" (dateline LOS ANGELES).
    founded: '2016',
    headquarters: 'Los Angeles, CA, USA',
    // Crunchbase News, 17 Jul 2025: "In total, Boulevard has raised about $188 million".
    funding: 'About $188M (Crunchbase News, July 2025)',

    features: {
      onlineBooking: 3,
      posAndPayments: 3,
      clientManagement: 3,
      staffManagement: 3,
      marketingAndCrm: 2,
      inventoryManagement: 2,
      reportingAndAnalytics: 3,
      // No consumer marketplace of its own; self-booking syncs with Google, Instagram, Facebook.
      marketplaceAndDiscovery: 1,
      // Precision Scheduling, Beau (add-on), AI email writing and the Billie assistant.
      aiCapabilities: 2,
      // Self-booking overlay on the business's own site and branded emails.
      brandingAndWhiteLabel: 2,
    },

    pricing: {
      hasFreePlan: false,
      // US list prices, read 2026-10-09. Billed monthly: $159 / $325 / $455; billed annually
      // (save 10%): $143 / $293 / $410. Premier and Prestige are per location. A fall offer
      // for new customers ("New customers only. Terms apply.") shows Premier at $260
      // ($234 annual) and Prestige at $364 ($328 annual).
      startingPrice: '$159/mo ($143/mo billed annually)',
      startingPriceNumeric: 159,
      tiers: [
        {
          name: 'Essentials',
          price: '$159/mo ($143/mo billed annually)',
          priceNumeric: 159,
          billingCycle: 'monthly',
          features: [
            'One location, up to 5 providers',
            'Precision Scheduling',
            'Online booking, POS and payments',
            '250 free texts and 1,000 free email blasts a month',
            'Email and live chat support',
          ],
        },
        {
          name: 'Premier',
          price: '$325/mo per location ($293/mo billed annually)',
          priceNumeric: 325,
          billingCycle: 'monthly',
          features: [
            'Everything in Essentials',
            'Unlimited professionals',
            'Multi-location support and reporting',
            'Shared memberships',
            'Google Analytics and Meta Pixel',
          ],
        },
        {
          name: 'Prestige',
          price: '$455/mo per location ($410/mo billed annually)',
          priceNumeric: 455,
          billingCycle: 'monthly',
          features: [
            'Everything in Premier',
            'Forms add-on included',
            '2,500 free texts and 10,000 free email blasts a month',
            '100 GB storage',
          ],
        },
        {
          name: 'Enterprise',
          price: 'Pricing on request',
          billingCycle: 'custom',
          features: [
            'Bespoke plan for large operations',
            'APIs and enterprise-grade integrations',
          ],
        },
      ],
      // Pricing comparison table: "Starting at 2.65% or as low as 1% with Boulevard Offset."
      transactionFees: 'From 2.65% per card transaction (as low as 1% with Boulevard Offset)',
      hiddenCosts: [
        // joinblvd.com/features/ai-receptionist: "$125/mo per location for 200 minutes,
        // and just $0.60 per minute over that."
        'Beau AI receptionist: $125/mo per location for 200 minutes, then $0.60 per minute',
        'Automated campaigns: $2 per completed appointment',
        'Forms add-on: from $65/mo per location (included in Prestige)',
        'Email blasts beyond the plan allowance: $0.01 per email',
      ],
      pricingModel: 'per-location',
      pricingPageUrl: 'https://www.joinblvd.com/pricing',
      lastVerified: '2026-10-09',
    },

    // Third-party review sites (Capterra, G2) could not be read on 2026-10-09; only the
    // official App Store listing is kept. Boulevard Professional, US App Store: 4.6 from 600.
    reviews: [
      {
        platform: 'App Store',
        rating: 4.6,
        reviewCount: 600,
        url: 'https://apps.apple.com/us/app/boulevard-professional/id1171157037',
      },
    ],

    // Boulevard describes its customers as businesses "across the U.S."; no GCC country,
    // Arabic interface or GCC payment method is listed. The iOS app lists English only.
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
      // Billie, an in-platform chat assistant for the business's own staff.
      hasAiChatbot: true,
      hasSmartScheduling: true,
      hasAiMarketing: true,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription:
        'Precision Scheduling is included on every plan and steers bookings to the times that suit the business. Beau is a voice AI receptionist sold as an add-on at $125/mo per location for 200 minutes. It answers calls 24/7, answers questions, sends booking links and takes messages. Boulevard Marketing uses AI to suggest email subject lines, copy and images, and Billie is a chat assistant inside the platform for staff. Duo is Boulevard\'s card reader and point of sale, not an AI product.',
    },

    targetMarket:
      'Appointment-based self-care businesses in the US, including salons, spas, medspas, barbershops and nail salons, from single locations to multi-location brands and enterprises.',

    messaging: {
      tagline: 'The tech behind your touch',
      primaryValueProp:
        'Client experience platform for appointment-based self-care businesses, with Precision Scheduling, payments, marketing and an AI receptionist',
      targetAudience:
        'Salons, spas, medspas and barbershops in the US, from single locations to enterprises',
      toneAndVoice: 'Premium and design-led',
      keyMessages: [
        'Precision Scheduling',
        'Beau, the AI receptionist',
        'Client experience platform',
        'Boulevard Duo payments',
        'Boulevard AI',
      ],
    },

    daisyAdvantages: [
      'AI receptionist on WhatsApp, Instagram and the booking site, included in the plan, where Beau answers phone calls as a $125/mo per-location add-on',
      'Consumer marketplace with cashback, where Boulevard has no consumer marketplace of its own',
      'Native Arabic and English, where the Boulevard Professional app lists English only',
      'A lower entry price than Boulevard\'s $159/mo ($143/mo billed annually)',
      'Live in all six GCC countries, with GCC compliance and local payments',
    ],

    daisySwitchingReasons: [
      'Want an AI receptionist on WhatsApp and Instagram, included in the plan',
      'Need Arabic support for GCC expansion',
      'Want a consumer marketplace for customer discovery',
      'Want a lower entry price than $159/mo',
      'Want GCC compliance and local payment methods',
      'Want cashback rewards for clients',
    ],

    competitorStrengths: [
      'Design-led client experience, with self-booking that syncs with Google, Instagram and Facebook',
      'Precision Scheduling on every plan',
      'Multi-location tools on Premier and Prestige',
      'Beau, a voice AI receptionist that answers calls 24/7 (paid add-on)',
      'Email and text marketing, referral and loyalty programs on every plan',
      'Raised about $188M, according to Crunchbase News (July 2025)',
    ],

    competitorWeaknesses: [
      'Entry price of $159/mo ($143/mo billed annually) for one location and up to 5 providers',
      'Multi-location support starts on Premier, at $325/mo per location ($293/mo billed annually)',
      'Beau is a paid add-on at $125/mo per location for 200 minutes, and sends booking links rather than booking itself',
      'No consumer marketplace of its own',
      'No Arabic interface; the Boulevard Professional iOS app lists English only',
      'No GCC country or GCC payment method listed on its published pages (October 2026)',
    ],

    faq: [
      {
        question: 'How does Boulevard compare to Daisy?',
        answer:
          'Boulevard is a premium US platform with Precision Scheduling on every plan, from $159/mo ($143/mo billed annually), and it sells Beau, a voice AI receptionist, as an add-on. Daisy is a complete growth platform, adding an AI receptionist on WhatsApp, Instagram and the booking site, a marketplace, cashback and Arabic support at a lower price. Daisy includes its AI receptionist in the base platform.',
      },
      {
        question: 'Is Boulevard available in the Middle East?',
        answer:
          'Boulevard describes its customers as self-care businesses across the US, and its published pages list no GCC country, Arabic interface or GCC payment method (October 2026). For a Middle East beauty business, Daisy offers a native Arabic interface, local payment integration and support built for the Gulf, live in Kuwait today.',
      },
      {
        question: 'What does Boulevard actually cost when you include transaction fees?',
        answer:
          'Essentials is $159/mo for one location and up to 5 providers. Premier is $325/mo and Prestige $455/mo per location, and a fall offer for new customers brings them to $260 and $364. Billed annually, the same plans are $143, $293 and $410 ($234 and $328 on the offer). Boulevard lists card processing from 2.65%, or as low as 1% with Boulevard Offset, where clients pay a 3% fee. Beau costs $125/mo per location for 200 minutes. Daisy costs less, includes the AI in the core platform, and does not take a slice of each transaction.',
      },
      {
        question: 'How difficult is it to switch from Boulevard to Daisy?',
        answer:
          'Boulevard holds a lot of structured data, so the migration covers client profiles, appointment history, staff records, POS data and product inventory. Daisy\'s onboarding team handles it, checks the data landed correctly and gets your staff comfortable without stopping the business.',
      },
      {
        question: 'How does Boulevard\'s Precision Scheduling AI compare to Daisy\'s AI?',
        answer:
          'Precision Scheduling is on every Boulevard plan and steers bookings to the times that suit the business. Beau answers phone calls 24/7 as a paid add-on, and Boulevard also uses AI to draft marketing emails. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site, and books and takes payment on its own in Arabic and English, with AI marketing and analytics in the core platform. It does not answer phone calls.',
      },
      {
        question: 'Does Boulevard support Arabic-speaking staff and clients?',
        answer:
          'Boulevard\'s published pages list no Arabic interface, and its Boulevard Professional iOS app lists English as its only language (October 2026). Daisy is natively Arabic and English throughout, across staff interfaces, client messages and booking pages, built for the GCC.',
      },
      {
        question: 'How good is Boulevard\'s mobile app for daily salon management?',
        answer:
          'The Boulevard Professional app is rated 4.6 on the US App Store from about 600 ratings (October 2026), and payments run through the Boulevard Duo app and card reader on iPad. Bookings, client check-in and POS are all covered. Daisy matches the mobile quality, adds an AI receptionist on WhatsApp and Instagram and a marketplace, and costs less.',
      },
      {
        question: 'Can Boulevard support franchise or multi-location salon businesses?',
        answer:
          'Yes. Premier and Prestige include multi-location support and reporting, location-level billing and inter-location reporting, priced per location. Boulevard also has an Enterprise plan for large operations, with APIs and enterprise-grade integrations. Daisy offers multi-branch management, centralized reporting and cross-location tools at prices lower down the range.',
      },
      {
        question: 'What customer support does Boulevard provide?',
        answer:
          'Every Boulevard plan includes email and live chat support, and an onboarding specialist helps new customers set up. Its pages are in English. Daisy provides multi-channel support in Arabic and English, with onboarding included on every plan, so a GCC business gets the same service as anyone else.',
      },
      {
        question: 'Does Boulevard help attract new customers or just manage existing ones?',
        answer:
          'Boulevard includes email and text marketing, offer codes, referral and loyalty programs on every plan, sells automated campaigns at $2 per completed appointment, and its self-booking syncs with Google, Instagram and Facebook. It does not list a consumer marketplace of its own or cashback rewards. Daisy runs the operations and adds a consumer marketplace, cashback rewards and AI-driven marketing, so it keeps the clients you have and brings new ones in.',
      },
    ],

    lastResearched: '2026-10-09',
    notes:
      'Premium US platform. Prices read on 9 October 2026 include a fall offer for new customers on Premier and Prestige, so re-check them. Beau, the voice AI receptionist, is a paid add-on and sends booking links. Daisy differs on WhatsApp and Instagram AI, Arabic, GCC presence and the cashback marketplace.',
  },

  // ---------------------------------------------------------------------------
  // 12. Planity
  // ---------------------------------------------------------------------------
  planity: {
    slug: 'planity',
    name: 'Planity',
    website: 'https://www.planity.com',
    tier: 2,
    description:
      'France\'s #1 beauty booking platform, handling 10M+ monthly bookings. The commission-free SaaS model is what sets it apart from marketplace rivals, and a $50M+ Series C is funding expansion across Europe.',
    founded: '2017',
    headquarters: 'Paris, France',
    employeeCount: '200-300',
    funding: '$50M+ (Series C)',

    features: {
      onlineBooking: 3,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 2,
      marketingAndCrm: 1,
      inventoryManagement: 1,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 3,
      aiCapabilities: 0,
      brandingAndWhiteLabel: 0,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '~€59/mo',
      startingPriceNumeric: 64,
      tiers: [
        {
          name: 'Standard',
          price: '~€59/mo',
          priceNumeric: 64,
          billingCycle: 'monthly',
          features: [
            'Online booking',
            'Calendar management',
            'Marketplace listing (no commission)',
            'Client management',
            'Basic reporting',
          ],
        },
      ],
      hiddenCosts: [
        'Limited transparency on full pricing',
        'Advanced features may require higher plans',
      ],
      pricingModel: 'flat',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'App Store', rating: 4.8, reviewCount: 180000 },
      { platform: 'Google Play', rating: 4.5, reviewCount: 50000 },
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
      aiDescription: 'No AI. Automated booking confirmations and reminders are the extent of it.',
    },

    targetMarket:
      'French beauty salons and hairdressers, now moving into other European markets. The commission-free model lands well with businesses tired of marketplace fees.',

    messaging: {
      tagline: 'La plateforme de réservation beauté #1 en France',
      primaryValueProp:
        'France\'s largest beauty marketplace with zero commission. SaaS-only pricing',
      targetAudience:
        'French hairdressers and beauty professionals who want the marketplace exposure without paying commission for it',
      toneAndVoice: 'Local and professional, built on an anti-commission message',
      keyMessages: [
        '10M+ monthly bookings',
        'Zero commission, flat monthly fee',
        '#1 in France',
        'Largest French beauty marketplace',
        '€50M+ funded for growth',
      ],
    },

    daisyAdvantages: [
      '24/7 AI receptionist vs no AI capabilities',
      'Native Arabic/English for GCC vs French-focused',
      'AI-powered marketing and analytics vs basic tools',
      'Cashback customer rewards vs no loyalty program',
      'White-label brand control vs Planity-branded marketplace',
      'Full operations suite (POS, inventory, staffing) vs basic management',
      'GCC compliance and local payments vs European-only',
    ],

    daisySwitchingReasons: [
      'Expanding beyond France/Europe to GCC market',
      'Need AI capabilities (receptionist, chatbot, marketing)',
      'Want full operations suite beyond basic booking',
      'Need Arabic language support',
      'Want cashback rewards for customer retention',
      'Need deeper POS and inventory management',
    ],

    competitorStrengths: [
      'Largest beauty marketplace in France (10M+ monthly bookings)',
      'Commission-free model, flat SaaS pricing',
      'Very high consumer adoption and app ratings',
      'Strong brand in French market',
      'Well-funded ($50M+ Series C) for European expansion',
    ],

    competitorWeaknesses: [
      'No AI capabilities at all',
      'France-focused, limited international presence',
      'No Arabic or multi-language GCC support',
      'Basic business management features',
      'No cashback or loyalty programs',
      'No branding control',
      'Limited marketing tools',
    ],

    faq: [
      {
        question: 'How does Planity compare to Daisy?',
        answer:
          'Planity dominates France on 10M+ monthly bookings and commission-free pricing, and it stops at Europe, with no AI. Daisy is a complete AI-powered growth platform with Arabic and English support, cashback rewards and GCC compliance, built for a wider audience.',
      },
      {
        question: 'Does Planity charge commission on bookings like other marketplaces?',
        answer:
          'No, and that is the whole pitch. The commission-free SaaS model runs at roughly 59 euros per month, a flat subscription with nothing taken per booking. Daisy also takes no per-booking commission, and adds AI, cashback and full business management on top.',
      },
      {
        question: 'Does Planity work outside of France or support Arabic?',
        answer:
          'Planity is expanding across Europe and remains France-centred, with no Arabic, no GCC compliance and no Middle Eastern payment methods. Daisy works across markets, with native Arabic and English, coverage of all 6 GCC countries and local payment integrations.',
      },
      {
        question: 'Does Planity have any AI features?',
        answer:
          'No. There is no AI at all, only automated booking confirmations and reminders. No receptionist, no chatbot, no smart scheduling, no AI marketing. Daisy runs a full AI ecosystem covering calls, bookings, payments, marketing and analytics on its own.',
      },
      {
        question: 'How difficult is it to migrate from Planity to Daisy?',
        answer:
          'Planity concentrates on booking and basic client management, so there is less to move and the migration is straightforward. Daisy\'s onboarding team transfers client databases, appointment history and business profiles. It matters most for a business moving from European into Middle Eastern markets.',
      },
      {
        question: 'How good is Planity\'s mobile app compared to Daisy?',
        answer:
          'The app rates 4.8 on the App Store across 180,000+ reviews, which its enormous French consumer base explains. The business management side is basic. Daisy\'s app carries both the consumer marketplace and a full business management suite, with AI, POS, inventory and marketing.',
      },
      {
        question: 'Can Planity support a multi-location beauty business?',
        answer:
          'You can list multiple locations on the marketplace, though the management tools behind that are basic next to platforms built for it. Daisy provides centralized multi-branch dashboards, staff scheduling across locations, one inventory and consolidated reporting, aimed at a growing chain.',
      },
      {
        question: 'What customer support does Planity offer and is it available in English?',
        answer:
          'Support is mostly in French, which follows from where Planity sells. English is limited and Arabic does not exist. Daisy supports customers in Arabic and English with dedicated onboarding, which matters in the GCC and anywhere else running in more than one language.',
      },
      {
        question: 'Does Planity integrate with other business tools and payment systems?',
        answer:
          'It connects to European payment systems and basic salon management tools, all built around the French market. GCC payment gateways such as mada, Benefit and KNET are not supported. Daisy connects to local GCC payment methods, Google Calendar and marketing tools, and includes a marketplace, which gives an international business considerably more to work with.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'The market leader in France, at genuine scale with 10M+ bookings/mo, and the commission-free model is compelling. With no AI, no Arabic and no GCC presence, it is not a threat in Daisy\'s primary market. Still worth watching for what it says about marketplace strategy.',
  },
};

// ---------------------------------------------------------------------------
// I18n-wrapped export — lazily resolved to avoid circular import
// ---------------------------------------------------------------------------

export function getTier2CompetitorsI18n(): I18nContent<Record<string, CompetitorData>> {
  const { tier2CompetitorsAr } = require('./tier2Data.ar') as { tier2CompetitorsAr: Record<string, CompetitorData> };
  return { en: tier2Competitors, ar: tier2CompetitorsAr };
}
