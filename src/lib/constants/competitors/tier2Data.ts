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
      'No white-labeling or brand control',
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
          'Glamera is marketplace-first, so your business appears under the Glamera brand. There is no white-labeling and no custom branding. Daisy gives you full white-label control, so your brand carries across booking pages, apps and every message to a customer.',
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
      gccCountries: ['UAE'],
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
      'Full white-label brand control vs standard branding',
      'More comprehensive feature depth across all categories',
      'Stronger GCC compliance and local payment integrations',
      'AI that handles payments and full booking flow vs routing-focused AI',
      'Customer acquisition engine vs operations-focused platform',
    ],

    daisySwitchingReasons: [
      'Need broader GCC coverage beyond just UAE',
      'Want consumer-facing marketplace and cashback for acquisition',
      'Need white-labeling for brand consistency',
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
      'No white-labeling option',
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
          'The Arabic interface is genuinely native and the GCC presence is being built, but it currently runs in the UAE only. Daisy offers native Arabic with local payment methods, built for the Gulf and live in Kuwait today.',
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
      'The closest Tier 2 competitor on AI. Arabic support and AI at an affordable price is a compelling combination. The weaknesses are an early-stage GCC expansion covering the UAE only, no marketplace, and limited funding. Worth watching as it grows in the region.',
  },

  // ---------------------------------------------------------------------------
  // 8. GlossGenius
  // ---------------------------------------------------------------------------
  glossgenius: {
    slug: 'glossgenius',
    name: 'GlossGenius',
    website: 'https://www.glossgenius.com',
    tier: 2,
    description:
      'Booking and business management built for beauty, aimed at independent professionals, and known for how good it looks and how easily it works. It has raised $116M and its AI features are growing.',
    founded: '2016',
    headquarters: 'New York, NY, USA',
    employeeCount: '200-300',
    funding: '$116M+',

    features: {
      onlineBooking: 3,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 1,
      marketingAndCrm: 2,
      inventoryManagement: 1,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 1,
      aiCapabilities: 1,
      brandingAndWhiteLabel: 1,
    },

    pricing: {
      hasFreePlan: false,
      freeTrialDays: 14,
      startingPrice: '$24/mo',
      startingPriceNumeric: 24,
      tiers: [
        {
          name: 'Standard',
          price: '$24/mo',
          priceNumeric: 24,
          billingCycle: 'monthly',
          features: [
            'Online booking',
            'Calendar management',
            'Payment processing',
            'Client management',
            'Basic marketing',
          ],
        },
        {
          name: 'Gold',
          price: '$48/mo',
          priceNumeric: 48,
          billingCycle: 'monthly',
          features: [
            'Everything in Standard',
            'Website builder',
            'Advanced marketing',
            'Custom booking page',
            'Priority support',
          ],
        },
        {
          name: 'Platinum',
          price: '$148/mo',
          priceNumeric: 148,
          billingCycle: 'monthly',
          features: [
            'Everything in Gold',
            'AI Growth Analyst',
            'Team management',
            'Advanced reporting',
            'White-label booking page',
          ],
        },
      ],
      transactionFees: '2.6% per transaction',
      hiddenCosts: [
        'Payment processing fees on all transactions',
        'AI features only in Platinum tier ($148/mo)',
        'Team features only in highest tier',
      ],
      pricingModel: 'flat',
      pricingPageUrl: 'https://www.glossgenius.com/pricing',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'Capterra', rating: 4.6, reviewCount: 300 },
      { platform: 'G2', rating: 4.5, reviewCount: 200 },
      { platform: 'App Store', rating: 4.9, reviewCount: 45000 },
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
      hasAiAnalytics: true,
      hasAiPricing: false,
      aiDescription:
        'The AI Growth Analyst offers business insights and growth recommendations, and only appears in the Platinum tier at $148/mo. No AI receptionist, no chatbot, no smart scheduling.',
    },

    targetMarket:
      'Independent beauty professionals and small salons in the US, particularly solopreneurs who care how their tools look and want them simple.',

    messaging: {
      tagline: 'The business platform for beauty professionals',
      primaryValueProp:
        'Beautiful, easy-to-use booking platform designed specifically for beauty professionals with AI growth insights',
      targetAudience:
        'Independent beauty professionals who want simple, good-looking tools to run their business',
      toneAndVoice: 'Elegant and design-led, speaking entirely to beauty',
      keyMessages: [
        'Built for beauty professionals',
        'Beautiful booking pages',
        'AI Growth Analyst',
        'Easy to use from Day 1',
        'White-label in Platinum',
      ],
    },

    daisyAdvantages: [
      '24/7 AI receptionist vs AI analytics only (and only in $148/mo tier)',
      'Full AI ecosystem (receptionist + chatbot + scheduling + marketing) vs single AI feature',
      'Native Arabic/English vs English-only, US-only',
      'Consumer marketplace with cashback vs no marketplace',
      'Complete business suite (POS, inventory, staff) vs limited features',
      'GCC compliance and local payments vs no international support',
      'Customer acquisition engine vs passive booking page',
    ],

    daisySwitchingReasons: [
      'Need real AI capabilities beyond growth analytics',
      'Want AI receptionist to handle calls and bookings',
      'Expanding to GCC/Middle East market, need Arabic support',
      'Need consumer marketplace for customer discovery',
      'Want cashback rewards to drive customer retention',
      'Team management features locked behind expensive tier',
    ],

    competitorStrengths: [
      'Beautiful, design-forward platform',
      'Very easy to use, excellent UX',
      'Affordable starting price ($24/mo)',
      'Well-funded ($116M) with rapid development',
      'High app store ratings (4.9)',
      'White-label booking page in Platinum tier',
    ],

    competitorWeaknesses: [
      'US-only, no international or GCC support',
      'No Arabic or multi-language support',
      'AI limited to analytics in highest tier only',
      'No consumer marketplace',
      'Weak team/staff management (Platinum only)',
      'No AI receptionist or chatbot',
      'No cashback or loyalty programs',
      'Solopreneur focus, limited for growing teams',
    ],

    faq: [
      {
        question: 'How does GlossGenius compare to Daisy?',
        answer:
          'For a US-based solopreneur, GlossGenius is hard to beat on design and simplicity. It has no AI receptionist, no marketplace, no Arabic, and no team management below the $148/mo tier. Daisy is a complete growth platform with AI, a marketplace, cashback and GCC compliance, at any size.',
      },
      {
        question: 'Does GlossGenius have AI features?',
        answer:
          'There is an AI Growth Analyst in the Platinum tier at $148/mo, which produces business insights. There is no AI receptionist, no chatbot and no smart scheduling. Daisy includes all of that in the base platform.',
      },
      {
        question: 'What are the real costs of using GlossGenius once you add everything up?',
        answer:
          'It starts at $24/mo and takes 2.6% on every transaction. Team management and AI both require Platinum at $148/mo. A salon running $10,000/mo through the system pays $260 in transaction fees alone. Daisy publishes its pricing, includes the AI in the core platform, and does not take a cut of each sale.',
      },
      {
        question: 'Can I switch from GlossGenius to Daisy and keep my client data?',
        answer:
          'Yes. Daisy\'s onboarding team exports your client profiles, appointment history and payment records from GlossGenius and brings them across. The point of the process is that no client relationship or booking history is lost on the way.',
      },
      {
        question: 'Does GlossGenius support Arabic or work in the Middle East?',
        answer:
          'No. GlossGenius is entirely US-focused and English-only. There is no Arabic interface, no GCC compliance and no local payment methods for the Middle East. Daisy was built with native Arabic and English from the start, across all 6 GCC countries.',
      },
      {
        question: 'How good is GlossGenius\'s mobile app for running a salon?',
        answer:
          'The mobile app is excellent, rated 4.9 on the App Store across 45,000+ reviews, and its strength is how well it looks and works for an independent professional. It runs shallow once a team grows, and AI and staff management sit behind expensive upgrades. Daisy matches the app quality with far more built into it.',
      },
      {
        question: 'Can GlossGenius handle a salon with multiple locations?',
        answer:
          'GlossGenius was designed for solopreneurs. Multi-location and team features only appear in Platinum at $148/mo, and even there they are limited next to platforms built for it. Daisy scales from a single-chair stylist to a multi-branch chain, managed centrally.',
      },
      {
        question: 'What kind of customer support does GlossGenius offer?',
        answer:
          'Priority support comes with Gold at $48/mo and Platinum at $148/mo. Standard users get basic support. All of it is in English. Daisy offers multi-channel support in Arabic and English, with dedicated onboarding on every plan.',
      },
      {
        question: 'Does GlossGenius integrate with other tools I already use?',
        answer:
          'Integrations are limited, centred on payment processing and GlossGenius\'s own ecosystem, with little third-party support for marketing, accounting or inventory. Daisy reaches wider, covering local GCC payment gateways, Google Calendar, marketing tools and a built-in consumer marketplace.',
      },
      {
        question: 'Is GlossGenius good for salons that want to attract new customers?',
        answer:
          'You get a basic marketplace listing and genuinely beautiful booking pages, and nothing that actively goes out and finds customers. No cashback, no loyalty program, no AI marketing. Daisy includes a consumer marketplace with cashback, AI-driven campaigns and an acquisition engine built to bring new clients through the door.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'The design and the funding behind it make this a growing threat in the US. The US-only focus and the thin AI, analytics alone and only in the top tier, leave Daisy clearly differentiated, particularly across the GCC.',
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
    slug: 'boulevard',
    name: 'Boulevard',
    website: 'https://www.joinblvd.com',
    tier: 2,
    description:
      'Premium, design-forward salon and spa management platform with AI scheduling and dual AI assistant (Duo). Heavily funded ($188M) with focus on premium/luxury market segment.',
    founded: '2016',
    headquarters: 'Los Angeles, CA, USA',
    employeeCount: '200-400',
    funding: '$188M',

    features: {
      onlineBooking: 3,
      posAndPayments: 3,
      clientManagement: 3,
      staffManagement: 3,
      marketingAndCrm: 2,
      inventoryManagement: 2,
      reportingAndAnalytics: 3,
      marketplaceAndDiscovery: 1,
      aiCapabilities: 2,
      brandingAndWhiteLabel: 1,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: '$158/mo',
      startingPriceNumeric: 158,
      tiers: [
        {
          name: 'Essentials',
          price: '$158/mo',
          priceNumeric: 158,
          billingCycle: 'monthly',
          features: [
            'Online booking',
            'Calendar management',
            'POS & payments',
            'Client profiles',
            'Basic reporting',
          ],
        },
        {
          name: 'Premier',
          price: '$295/mo',
          priceNumeric: 295,
          billingCycle: 'monthly',
          features: [
            'Everything in Essentials',
            'Precision Scheduling AI',
            'Duo AI assistant',
            'Advanced reporting',
            'Marketing tools',
            'Multi-location',
          ],
        },
        {
          name: 'Prestige',
          price: '$410/mo',
          priceNumeric: 410,
          billingCycle: 'monthly',
          features: [
            'Everything in Premier',
            'Franchise management',
            'Custom integrations',
            'Dedicated success manager',
            'API access',
          ],
        },
      ],
      transactionFees: '2.6% + $0.10 per transaction',
      hiddenCosts: [
        'AI features only in Premier+ tiers ($295+/mo)',
        'Payment processing fees',
        'Premium pricing for premium market',
      ],
      pricingModel: 'flat',
      pricingPageUrl: 'https://www.joinblvd.com/pricing',
      lastVerified: '2026-03-13',
    },

    reviews: [
      { platform: 'Capterra', rating: 4.6, reviewCount: 350 },
      { platform: 'G2', rating: 4.5, reviewCount: 250 },
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
      hasSmartScheduling: true,
      hasAiMarketing: false,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription:
        'Precision Scheduling AI optimizes appointment slot allocation. Duo is an AI assistant for business insights and task automation. Available in Premier tier ($295/mo) and above only.',
    },

    targetMarket:
      'Premium, design-conscious salons and spas in the US market. Multi-location businesses and luxury brands. Not targeting budget-conscious or international markets.',

    messaging: {
      tagline: 'Client experience management for salons and spas',
      primaryValueProp:
        'Premium, beautifully designed platform with AI scheduling for luxury salons and spas',
      targetAudience:
        'Premium salon and spa owners who value design and are willing to pay for quality',
      toneAndVoice: 'Premium, sophisticated, design-forward',
      keyMessages: [
        'Precision Scheduling AI',
        'Built for premium brands',
        'Beautiful client experience',
        '$188M funded',
        'Duo AI assistant',
      ],
    },

    daisyAdvantages: [
      '24/7 AI receptionist (voice + chat) vs chat-only Duo assistant',
      'Consumer marketplace with cashback vs no marketplace',
      'Native Arabic/English support vs English/US-only',
      'More accessible pricing vs $158-410/mo',
      'GCC compliance and local payments vs no international support',
      'Customer acquisition engine vs operations-only platform',
      'AI included in base platform vs locked behind $295/mo tier',
    ],

    daisySwitchingReasons: [
      'Premium pricing ($158-410/mo) without AI included in base tier',
      'Need Arabic support for GCC expansion',
      'Want consumer marketplace for customer discovery',
      'Need voice AI receptionist, not just chat assistant',
      'Want GCC compliance and local payment methods',
      'Need customer acquisition tools beyond beautiful booking pages',
    ],

    competitorStrengths: [
      'Excellent design and user experience',
      'Precision Scheduling AI is genuinely innovative',
      'Strong franchise management features',
      'Well-funded ($188M) with rapid development',
      'Good reviews and growing market share',
      'Comprehensive POS and client management',
    ],

    competitorWeaknesses: [
      'Premium pricing limits market ($158-410/mo)',
      'US-only, no international or GCC support',
      'No Arabic or multi-language support',
      'AI features locked behind $295/mo tier',
      'No consumer marketplace or cashback',
      'No voice AI receptionist',
      'Premium positioning may not fit all markets',
    ],

    faq: [
      {
        question: 'How does Boulevard compare to Daisy?',
        answer:
          'Boulevard is a premium US-focused platform ($158-410/mo) with AI scheduling and beautiful design. Daisy offers a complete growth platform with AI receptionist, marketplace, cashback, and Arabic support at more accessible pricing. Boulevard\'s AI features require the $295/mo Premier tier, while Daisy includes AI in its base platform.',
      },
      {
        question: 'Is Boulevard available in the Middle East?',
        answer:
          'No. Boulevard is US-only with no Arabic support, GCC compliance, or local payment methods. For Middle East beauty businesses, Daisy provides native Arabic UI, local payment integration, and support built for the Gulf, live in Kuwait today.',
      },
      {
        question: 'What does Boulevard actually cost when you include transaction fees?',
        answer:
          'Boulevard charges $158-410/mo in subscription fees plus 2.6% + $0.10 per transaction on every payment. A salon processing $20,000/mo in payments would pay an additional $520+ in processing fees alone. AI features require the $295/mo Premier tier. Daisy provides more accessible pricing with AI included in the core platform and without per-transaction fees eroding your margins.',
      },
      {
        question: 'How difficult is it to switch from Boulevard to Daisy?',
        answer:
          'Boulevard has a comprehensive data structure, so migration requires transferring client profiles, appointment history, staff records, POS data, and product inventory. Daisy\'s onboarding team provides dedicated migration support to ensure all your data transfers accurately and your team gets up to speed quickly without disrupting daily operations.',
      },
      {
        question: 'How does Boulevard\'s Precision Scheduling AI compare to Daisy\'s AI?',
        answer:
          'Boulevard\'s Precision Scheduling AI optimizes appointment slot allocation, and its Duo assistant provides business insights, both only available at $295/mo. Daisy\'s AI goes further with a 24/7 voice and chat receptionist that handles bookings and payments autonomously, plus AI-powered marketing and analytics, all included in the core platform.',
      },
      {
        question: 'Does Boulevard support Arabic-speaking staff and clients?',
        answer:
          'No. Boulevard is English-only with no Arabic interface, no RTL layout support, and no Middle Eastern localization. Daisy offers fully native Arabic and English support with multilingual staff interfaces, client communications, and booking pages, purpose-built for the GCC market.',
      },
      {
        question: 'How good is Boulevard\'s mobile app for daily salon management?',
        answer:
          'Boulevard has solid reviews (4.6 on Capterra, 4.5 on G2) and a well-designed mobile experience consistent with its premium brand. The app handles bookings, client check-in, and POS well. However, its premium pricing puts it out of reach for many businesses. Daisy offers comparable mobile quality with broader features including AI and marketplace at more accessible pricing.',
      },
      {
        question: 'Can Boulevard support franchise or multi-location salon businesses?',
        answer:
          'Yes. Boulevard offers franchise management in its Prestige tier ($410/mo) with custom integrations, API access, and a dedicated success manager. However, the high price point makes it expensive for growing chains. Daisy provides multi-branch management, centralized reporting, and cross-location tools at more accessible pricing tiers.',
      },
      {
        question: 'What customer support does Boulevard provide?',
        answer:
          'Boulevard provides support based on your tier level, with dedicated success managers only available in the Prestige plan ($410/mo). All support is in English only. Daisy offers multi-channel support in both Arabic and English, with onboarding assistance included regardless of plan, ensuring businesses in the GCC receive the same quality of support.',
      },
      {
        question: 'Does Boulevard help attract new customers or just manage existing ones?',
        answer:
          'Boulevard focuses on operations and client experience management, it does not have a consumer marketplace, cashback program, or active customer acquisition tools. Daisy combines full operations management with a consumer marketplace, cashback rewards, and AI-driven marketing to both manage existing clients and actively bring new ones through your door.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'Premium positioning and strong design make this a notable competitor in the US luxury segment. Precision Scheduling AI is innovative. Key gap: US-only, no marketplace, high pricing. Not a direct GCC threat.',
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
      'France\'s #1 beauty booking platform with 10M+ monthly bookings. Commission-free SaaS model differentiates from marketplace competitors. Expanding in Europe with $50M+ Series C funding.',
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
      aiDescription: 'No AI capabilities. Basic automated booking confirmations and reminders.',
    },

    targetMarket:
      'French beauty salons and hairdressers. Expanding to other European markets. Commission-free model appeals to businesses frustrated by marketplace fees.',

    messaging: {
      tagline: 'La plateforme de réservation beauté #1 en France',
      primaryValueProp:
        'France\'s largest beauty marketplace with zero commission. SaaS-only pricing',
      targetAudience:
        'French hairdressers and beauty professionals who want marketplace exposure without commission fees',
      toneAndVoice: 'Local, professional, anti-commission messaging',
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
      'No white-labeling',
      'Limited marketing tools',
    ],

    faq: [
      {
        question: 'How does Planity compare to Daisy?',
        answer:
          'Planity dominates France with 10M+ monthly bookings and commission-free pricing, but is limited to European markets with no AI capabilities. Daisy provides a complete AI-powered growth platform with Arabic/English support, cashback rewards, and GCC compliance, designed for a global audience.',
      },
      {
        question: 'Does Planity charge commission on bookings like other marketplaces?',
        answer:
          'No. Planity\'s key differentiator is its commission-free SaaS model at approximately 59 euros per month. You pay a flat subscription fee with no per-booking commissions. Daisy also avoids per-booking commissions and includes AI, cashback, and full business management features that Planity lacks, offering more value for the subscription cost.',
      },
      {
        question: 'Does Planity work outside of France or support Arabic?',
        answer:
          'Planity is expanding within Europe but remains France-focused with no Arabic support, no GCC compliance, and no Middle Eastern payment methods. Daisy is built for global markets with native Arabic and English support, coverage across all 6 GCC countries, and local payment integrations.',
      },
      {
        question: 'Does Planity have any AI features?',
        answer:
          'No. Planity has zero AI capabilities, only basic automated booking confirmations and reminders. There is no AI receptionist, chatbot, smart scheduling, or AI-powered marketing. Daisy provides a comprehensive AI ecosystem that handles calls, bookings, payments, marketing, and analytics autonomously.',
      },
      {
        question: 'How difficult is it to migrate from Planity to Daisy?',
        answer:
          'Migrating from Planity is straightforward since its feature set focuses on booking and basic client management. Daisy\'s onboarding team assists with transferring client databases, appointment history, and business profiles. The transition is especially relevant for businesses expanding from European to Middle Eastern markets.',
      },
      {
        question: 'How good is Planity\'s mobile app compared to Daisy?',
        answer:
          'Planity has excellent app ratings (4.8 on App Store with 180,000+ reviews) driven by its massive French consumer base. However, the business management side is basic. Daisy\'s app provides both a consumer-facing marketplace and a comprehensive business management suite with AI, POS, inventory, and marketing tools.',
      },
      {
        question: 'Can Planity support a multi-location beauty business?',
        answer:
          'Planity offers multi-location listing capabilities on its marketplace, but its business management tools are basic compared to dedicated enterprise solutions. Daisy provides centralized multi-branch dashboards, cross-location staff scheduling, unified inventory, and consolidated reporting designed for growing salon chains.',
      },
      {
        question: 'What customer support does Planity offer and is it available in English?',
        answer:
          'Planity\'s support is primarily in French, reflecting its market focus. English support is limited, and Arabic support is nonexistent. Daisy provides fully multilingual Arabic and English customer support with dedicated onboarding assistance, making it the clear choice for businesses in the GCC or those operating in multilingual environments.',
      },
      {
        question: 'Does Planity integrate with other business tools and payment systems?',
        answer:
          'Planity integrates with European payment systems and basic salon management tools, but its ecosystem is designed for the French market. It does not support GCC payment gateways like mada, Benefit, or KNET. Daisy integrates with local GCC payment methods, Google Calendar, marketing tools, and provides a built-in marketplace, offering a much broader integration ecosystem for international businesses.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'France market leader with impressive scale (10M+ bookings/mo). Commission-free model is compelling. But zero AI, zero Arabic, zero GCC presence makes this a non-threat in Daisy\'s primary market. Interesting model to watch for marketplace strategy insights.',
  },
};

// ---------------------------------------------------------------------------
// I18n-wrapped export — lazily resolved to avoid circular import
// ---------------------------------------------------------------------------

export function getTier2CompetitorsI18n(): I18nContent<Record<string, CompetitorData>> {
  const { tier2CompetitorsAr } = require('./tier2Data.ar') as { tier2CompetitorsAr: Record<string, CompetitorData> };
  return { en: tier2Competitors, ar: tier2CompetitorsAr };
}
