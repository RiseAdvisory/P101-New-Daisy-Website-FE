// =============================================================================
// WS1: Tier 2 Competitors — Medium Research
// Last updated: March 2026
// =============================================================================

import type { CompetitorData } from './competitorData';

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
      'Arabic-native beauty marketplace and SaaS platform based in Saudi Arabia. Combines consumer marketplace (100K+ users) with business management tools. Expanding to UAE and Egypt.',
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
      aiDescription: 'No AI capabilities. Basic automated booking confirmations only.',
    },

    targetMarket:
      'Saudi Arabian beauty salons and spas. Primarily targeting Arabic-speaking businesses in KSA with marketplace expansion to UAE and Egypt.',

    messaging: {
      tagline: 'Your beauty marketplace',
      primaryValueProp:
        'Arabic-native beauty marketplace connecting Saudi consumers with local salons and spas',
      targetAudience: 'Saudi beauty salon owners wanting local marketplace presence',
      toneAndVoice: 'Local, Arabic-first, marketplace-focused',
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
      'Need more than a marketplace — want complete business management',
      'Want AI receptionist to handle calls and bookings 24/7',
      'Need POS, inventory, and advanced reporting',
      'Want to build own brand instead of relying on Glamera marketplace',
      'Need marketing automation beyond marketplace listing',
      'Want to expand beyond Saudi Arabia with a global platform',
    ],

    competitorStrengths: [
      'Native Arabic UI — built for Saudi market',
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
          'Glamera is a Saudi-focused marketplace with basic booking, while Daisy is a comprehensive growth platform with AI receptionist, full business management, POS, marketing automation, and white-labeling. Both support Arabic natively, but Daisy provides significantly more features and AI capabilities.',
      },
      {
        question: 'Is Glamera available outside Saudi Arabia?',
        answer:
          'Glamera is expanding to UAE and Egypt but is primarily Saudi-focused. Daisy serves all 6 GCC countries with equal Arabic/English support, local payment methods, and compliance — plus global scalability.',
      },
      {
        question: 'What are the hidden costs when using Glamera?',
        answer:
          'Glamera charges marketplace commissions on bookings made through its consumer platform, and premium placement fees for better visibility. The free tier is heavily limited, pushing businesses toward paid plans. Daisy offers transparent pricing with no per-booking commissions and includes all core features in its plans.',
      },
      {
        question: 'How hard is it to switch from Glamera to Daisy?',
        answer:
          'Switching from Glamera is straightforward since its feature set is basic — there is less data complexity to migrate. Daisy provides onboarding support and data migration assistance to help you transfer client records, booking history, and staff details without disruption to your operations.',
      },
      {
        question: 'Does Glamera have AI features like an AI receptionist?',
        answer:
          'No. Glamera has zero AI capabilities — only basic automated booking confirmations. Daisy provides a full AI ecosystem including a 24/7 AI receptionist that handles calls, bookings, and payments, plus AI-powered marketing, smart scheduling, and analytics.',
      },
      {
        question: 'How good is Glamera\'s mobile app compared to Daisy?',
        answer:
          'Glamera has decent app ratings (4.5 on App Store, 4.3 on Google Play) and functions well as a consumer marketplace for finding salons. However, its business management features are basic. Daisy\'s app provides a complete business management suite with AI capabilities, POS, inventory, and advanced reporting in addition to marketplace features.',
      },
      {
        question: 'Can Glamera support a multi-location salon business?',
        answer:
          'Glamera was designed primarily for individual salon listings on its marketplace and has limited multi-location management features. Daisy is built to scale with multi-branch management, centralized reporting, staff scheduling across locations, and unified inventory — making it the better choice for growing businesses.',
      },
      {
        question: 'What kind of customer support does Glamera provide?',
        answer:
          'Glamera offers Arabic-speaking customer support focused on the Saudi market. However, as a smaller team (50-100 employees) with limited funding ($2.37M), their support capacity may be constrained. Daisy provides dedicated onboarding, multi-channel support in Arabic and English, and a larger support infrastructure.',
      },
      {
        question: 'Can I keep my own brand identity on Glamera or is everything Glamera-branded?',
        answer:
          'Glamera is marketplace-first, meaning your business appears under the Glamera brand. There is no white-labeling or custom branding option. Daisy offers full white-label brand control, allowing you to maintain your own brand identity across booking pages, apps, and customer communications.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'Direct GCC competitor but with very limited features. Main strength is Arabic-native marketplace in KSA. Vulnerable on AI, features depth, and scalability. Small funding limits growth potential.',
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
      'India-based salon management platform with strong AI capabilities (AI Genius suite). Expanding to UAE/GCC market with native Arabic UI. Positioned as tech-forward alternative for beauty businesses.',
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
        'AI Genius suite includes AI receptionist for calls, chatbot for messaging, smart scheduling optimization, and AI marketing campaign suggestions. Competitive AI offering for the price point.',
    },

    targetMarket:
      'Beauty salons and spas in India and expanding to UAE/GCC. Mid-range pricing targets growing businesses wanting AI capabilities without enterprise costs.',

    messaging: {
      tagline: 'Smart salon management powered by AI',
      primaryValueProp:
        'AI-powered salon management with native Arabic support at an affordable price point',
      targetAudience:
        'Growing salons in India and GCC wanting AI features without enterprise pricing',
      toneAndVoice: 'Tech-forward, accessible, AI-focused',
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
      'India-centric — GCC expansion still early',
      'No consumer marketplace or cashback program',
      'Limited to UAE in GCC — not yet in KSA, Kuwait, etc.',
      'Basic inventory management',
      'No white-labeling option',
      'Lower review count and brand awareness',
      'AI features locked behind higher tier',
    ],

    faq: [
      {
        question: 'How does DINGG compare to Daisy?',
        answer:
          'DINGG offers a competitive AI suite at $49-79/mo with Arabic support, but Daisy provides a more comprehensive platform with marketplace-driven customer acquisition, cashback rewards, white-labeling, and presence across all 6 GCC countries vs DINGG\'s UAE-only expansion.',
      },
      {
        question: 'Does DINGG work in the GCC?',
        answer:
          'DINGG is expanding to UAE with native Arabic UI and local payment support, but hasn\'t yet reached KSA, Kuwait, Bahrain, Oman, or Qatar. Daisy operates across all 6 GCC countries with full local compliance.',
      },
      {
        question: 'How much does DINGG really cost with all the add-ons?',
        answer:
          'DINGG starts at $49/mo for basic features, but the AI Genius suite is only available at $79/mo. You will also pay payment processing fees and SMS/messaging costs on top of the subscription. Daisy includes AI capabilities in its core platform without locking key features behind higher tiers.',
      },
      {
        question: 'Can I migrate my salon data from DINGG to Daisy?',
        answer:
          'Yes. Daisy provides migration support to transfer your client database, appointment history, and staff records from DINGG. Since both platforms share similar data structures for booking and client management, the transition is manageable with Daisy\'s onboarding team guiding you through each step.',
      },
      {
        question: 'How does DINGG\'s AI receptionist compare to Daisy\'s?',
        answer:
          'DINGG\'s AI Genius suite includes an AI receptionist and chatbot that handle calls and messages, plus smart scheduling. However, Daisy\'s AI receptionist goes further by processing full booking flows and payments autonomously, and is backed by a consumer marketplace and cashback system that DINGG lacks entirely.',
      },
      {
        question: 'Is DINGG\'s Arabic support as good as Daisy\'s for GCC businesses?',
        answer:
          'DINGG has native Arabic UI quality and is building GCC presence, but currently only operates in UAE. Daisy provides native Arabic support across all 6 GCC countries with local payment methods, regulatory compliance, and local customer support — a much broader and more established GCC footprint.',
      },
      {
        question: 'How good is DINGG\'s mobile app for day-to-day salon management?',
        answer:
          'DINGG\'s mobile app has a 4.2 rating on Google Play and 4.0 on the App Store, with reasonable functionality for booking and client management. However, user reviews indicate it is still maturing. Daisy\'s app offers a more polished experience with full POS, inventory, AI features, and marketplace access all in one interface.',
      },
      {
        question: 'Does DINGG support multi-branch salon businesses?',
        answer:
          'DINGG offers basic multi-location features, but its relatively small team and limited funding ($3M) mean enterprise-level multi-branch management is not its strength. Daisy is built for scalability with centralized multi-branch dashboards, cross-location reporting, staff allocation, and inventory management.',
      },
      {
        question: 'What integrations does DINGG support compared to Daisy?',
        answer:
          'DINGG integrates with common payment gateways and basic tools, but its integration ecosystem is still growing given its size. Daisy offers broader integrations including local GCC payment methods, marketing tools, Google Calendar sync, and a consumer marketplace — providing a more connected business ecosystem.',
      },
      {
        question: 'Is DINGG a reliable long-term choice for my beauty business?',
        answer:
          'DINGG is a promising platform with strong AI features, but with only $3M in funding and a small team (50-100), its long-term growth and support capacity carry some risk. Daisy offers a more established platform with broader market presence, deeper feature set, and the infrastructure to support businesses as they scale.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'Closest Tier 2 competitor on AI capabilities. Arabic support + AI at affordable price is compelling. Key weaknesses: early GCC expansion (UAE only), no marketplace, limited funding. Watch for growth in GCC market.',
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
      'Beauty-specific booking and business management platform focused on independent professionals. Known for beautiful design and ease of use. $116M funded with growing AI features.',
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
        'AI Growth Analyst provides business insights and growth recommendations (Platinum tier only at $148/mo). No AI receptionist, chatbot, or smart scheduling.',
    },

    targetMarket:
      'Independent beauty professionals and small salons in the US. Design-conscious solopreneurs who value aesthetics and simplicity.',

    messaging: {
      tagline: 'The business platform for beauty professionals',
      primaryValueProp:
        'Beautiful, easy-to-use booking platform designed specifically for beauty professionals with AI growth insights',
      targetAudience:
        'Independent beauty professionals who want simple, gorgeous tools to manage their business',
      toneAndVoice: 'Elegant, design-forward, beauty-focused',
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
      'Expanding to GCC/Middle East market — need Arabic support',
      'Need consumer marketplace for customer discovery',
      'Want cashback rewards to drive customer retention',
      'Team management features locked behind expensive tier',
    ],

    competitorStrengths: [
      'Beautiful, design-forward platform',
      'Very easy to use — excellent UX',
      'Affordable starting price ($24/mo)',
      'Well-funded ($116M) with rapid development',
      'High app store ratings (4.9)',
      'White-label booking page in Platinum tier',
    ],

    competitorWeaknesses: [
      'US-only — no international or GCC support',
      'No Arabic or multi-language support',
      'AI limited to analytics in highest tier only',
      'No consumer marketplace',
      'Weak team/staff management (Platinum only)',
      'No AI receptionist or chatbot',
      'No cashback or loyalty programs',
      'Solopreneur focus — limited for growing teams',
    ],

    faq: [
      {
        question: 'How does GlossGenius compare to Daisy?',
        answer:
          'GlossGenius excels in design and simplicity for US-based solopreneurs, but lacks AI receptionist, marketplace, Arabic support, and team management (outside $148/mo tier). Daisy provides a complete growth platform with AI, marketplace, cashback, and GCC compliance for businesses of all sizes.',
      },
      {
        question: 'Does GlossGenius have AI features?',
        answer:
          'GlossGenius offers an AI Growth Analyst in its Platinum tier ($148/mo) that provides business insights. However, it lacks an AI receptionist, chatbot, or smart scheduling. Daisy includes comprehensive AI capabilities in its base platform.',
      },
      {
        question: 'What are the real costs of using GlossGenius once you add everything up?',
        answer:
          'GlossGenius starts at $24/mo but charges 2.6% per transaction on all payments. Team management and AI features require the Platinum tier at $148/mo. For a salon processing $10,000/mo in payments, transaction fees alone add $260. Daisy offers transparent pricing with AI included in the core platform without per-transaction surcharges eating into your revenue.',
      },
      {
        question: 'Can I switch from GlossGenius to Daisy and keep my client data?',
        answer:
          'Yes. Daisy\'s onboarding team helps you export client profiles, appointment history, and payment records from GlossGenius and import them into Daisy. The process is designed to be seamless so you do not lose any client relationships or booking history during the transition.',
      },
      {
        question: 'Does GlossGenius support Arabic or work in the Middle East?',
        answer:
          'No. GlossGenius is entirely US-focused with English-only support. There is no Arabic UI, no GCC compliance, and no local payment methods for Middle Eastern markets. Daisy is built from the ground up with native Arabic and English support across all 6 GCC countries.',
      },
      {
        question: 'How good is GlossGenius\'s mobile app for running a salon?',
        answer:
          'GlossGenius has an excellent mobile app with a 4.9 rating on the App Store and 45,000+ reviews. Its strength is in beautiful design and ease of use for independent professionals. However, it lacks depth for growing teams, and advanced features like AI and staff management require expensive upgrades. Daisy provides comparable app quality with a much broader feature set built in.',
      },
      {
        question: 'Can GlossGenius handle a salon with multiple locations?',
        answer:
          'GlossGenius was designed for independent professionals and solopreneurs. Multi-location management and team features are only available in the Platinum tier ($148/mo), and even then the capabilities are limited compared to enterprise solutions. Daisy is built to scale from single-chair stylists to multi-branch salon chains with centralized management.',
      },
      {
        question: 'What kind of customer support does GlossGenius offer?',
        answer:
          'GlossGenius provides priority support in its Gold ($48/mo) and Platinum ($148/mo) tiers. Standard tier users receive basic support. All support is in English only. Daisy offers multi-channel support in both Arabic and English with dedicated onboarding assistance regardless of your plan level.',
      },
      {
        question: 'Does GlossGenius integrate with other tools I already use?',
        answer:
          'GlossGenius offers limited integrations, focusing mainly on payment processing and its own ecosystem. It does not have extensive third-party integrations for marketing, accounting, or inventory. Daisy provides a broader integration ecosystem including local GCC payment gateways, Google Calendar, marketing tools, and a built-in consumer marketplace.',
      },
      {
        question: 'Is GlossGenius good for salons that want to attract new customers?',
        answer:
          'GlossGenius provides a basic marketplace listing and beautiful booking pages, but has no active customer acquisition engine. It does not offer cashback rewards, loyalty programs, or AI-powered marketing. Daisy includes a consumer marketplace with cashback, AI-driven marketing campaigns, and a full customer acquisition engine designed to bring new clients to your door.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'Beautiful UX and strong funding make this a growing threat in US market. However, US-only focus and limited AI (analytics only in top tier) create clear differentiation for Daisy, especially in GCC market.',
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
      'Saudi/UAE-focused beauty business platform positioning as a growth-oriented alternative to traditional salon software. Bootstrapped, claims GCC market focus.',
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
      hiddenCosts: ['Opaque pricing — requires sales contact'],
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
      aiDescription: 'No AI capabilities.',
    },

    targetMarket: 'Beauty businesses in UAE and Saudi Arabia seeking a local, growth-oriented platform.',

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
          'Zylu is an early-stage GCC-focused platform with basic booking features, while Daisy is a comprehensive AI-powered platform with full business management, marketplace, cashback, and native Arabic support across all 6 GCC countries.',
      },
      {
        question: 'How much does Zylu cost and is the pricing transparent?',
        answer:
          'Zylu uses quote-based pricing that requires contacting their sales team, with no public pricing page. This makes it difficult to compare costs upfront. Daisy offers transparent pricing tiers published openly, so you know exactly what you are paying for before you commit.',
      },
      {
        question: 'Does Zylu have AI-powered features for salon management?',
        answer:
          'No. Zylu currently has no AI capabilities — no AI receptionist, no chatbot, no smart scheduling, and no AI-powered marketing. Daisy provides a full AI ecosystem including a 24/7 AI receptionist, intelligent scheduling, automated marketing, and AI-driven analytics.',
      },
      {
        question: 'Can I switch from Zylu to Daisy easily?',
        answer:
          'Yes. Since Zylu offers a basic feature set, migrating to Daisy is relatively simple with less data complexity. Daisy\'s onboarding team assists with transferring your client records, booking data, and staff information to ensure a smooth transition.',
      },
      {
        question: 'Does Zylu support Arabic for beauty businesses in the Gulf?',
        answer:
          'Despite positioning itself for the GCC market, Zylu does not have a confirmed Arabic UI. Daisy provides fully native Arabic support with right-to-left layout, Arabic content, and multilingual Arabic/English functionality designed specifically for Gulf businesses.',
      },
      {
        question: 'Is Zylu reliable enough for a growing salon business?',
        answer:
          'Zylu is bootstrapped with a very small team (10-30 employees) and no external funding, which raises questions about long-term sustainability and feature development pace. Daisy is a more established platform with a larger team, proven product, and the resources to support businesses as they scale across multiple locations.',
      },
      {
        question: 'Does Zylu have a mobile app and how good is it?',
        answer:
          'Zylu has minimal public reviews and no significant app store presence, making it hard to evaluate mobile app quality. Daisy offers a fully featured mobile app with high ratings, providing complete business management, AI tools, POS, and marketplace access on the go.',
      },
      {
        question: 'Can Zylu support a salon chain with multiple branches?',
        answer:
          'Zylu\'s basic feature set and small team suggest limited multi-location capabilities. Daisy is purpose-built for scalability with multi-branch dashboards, centralized reporting, cross-location staff management, and unified inventory tracking for salon chains of any size.',
      },
      {
        question: 'What integrations does Zylu offer?',
        answer:
          'Zylu\'s integration ecosystem appears limited given its early stage and small team. It does not offer local GCC payment method integrations despite targeting the region. Daisy integrates with local payment gateways, Google Calendar, marketing platforms, and includes a built-in consumer marketplace — providing a more connected solution.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'Very early-stage competitor. GCC focus is correct but product is minimal. Monitor for development but not a significant competitive threat currently.',
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
      'AI-powered growth platform for med spas and aesthetic practices. Features "Beauty Bank" cashback concept and AI agents (Adonis/Aria). Focused on patient retention and revenue growth.',
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
        'Limited operations features — may need separate software',
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
        'AI agents Adonis (marketing/lead generation) and Aria (patient communication). "Beauty Bank" cashback concept for retention. AI-powered campaign optimization. No voice receptionist or smart scheduling.',
    },

    targetMarket:
      'Med spas, aesthetic clinics, and premium beauty practices in US/Canada. High-revenue businesses that can justify $700/mo for growth tools.',

    messaging: {
      tagline: 'The growth platform for med spas',
      primaryValueProp:
        'AI-powered patient retention and revenue growth through cashback rewards and intelligent marketing',
      targetAudience:
        'Med spa owners focused on patient retention and revenue growth who can invest $700/mo',
      toneAndVoice: 'Premium, results-focused, med spa industry language',
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
      '$700/mo for marketing only — still need separate booking and POS software',
      'Want complete platform instead of paying for multiple tools',
      'Need voice AI receptionist, not just chat agents',
      'Expanding to GCC/Middle East — need Arabic support',
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
      'No booking, POS, or operations features — needs separate software',
      'US/Canada only — no international support',
      'No Arabic or GCC presence',
      'Med spa niche — limited beauty/wellness applicability',
      'No consumer marketplace for acquisition',
      'No voice AI receptionist',
      'Small review base (80 G2 reviews)',
    ],

    faq: [
      {
        question: 'How does RepeatMD compare to Daisy?',
        answer:
          'RepeatMD is a $700/mo marketing-focused tool for med spas that requires separate booking/POS software. Daisy provides a complete platform (AI receptionist + booking + POS + marketing + marketplace) with Arabic support and GCC compliance, making it more cost-effective and comprehensive.',
      },
      {
        question: 'What is RepeatMD\'s Beauty Bank?',
        answer:
          'Beauty Bank is RepeatMD\'s cashback loyalty concept that rewards patients for repeat visits. Daisy includes a similar cashback system as part of its complete platform, along with a consumer marketplace for acquisition — features RepeatMD doesn\'t offer.',
      },
      {
        question: 'Why does RepeatMD cost $700 a month and are there hidden fees on top?',
        answer:
          'RepeatMD charges approximately $700/mo for its marketing and retention tools, plus implementation fees. Crucially, it does not include booking, POS, or operations features — so you need to pay for separate software on top. Daisy includes marketing, AI, booking, POS, and operations in one platform at a fraction of the combined cost.',
      },
      {
        question: 'Can I move my patient data from RepeatMD to Daisy?',
        answer:
          'Yes. Daisy\'s onboarding team helps you migrate client profiles, loyalty balances, and engagement history from RepeatMD. Since RepeatMD focuses on marketing and retention data rather than full operations, the migration primarily involves customer records and campaign data, making the transition manageable.',
      },
      {
        question: 'Does RepeatMD work for beauty businesses in the Middle East?',
        answer:
          'No. RepeatMD is focused exclusively on the US and Canadian med spa market with English-only support. It has no Arabic UI, no GCC compliance, and no local payment methods. Daisy serves the entire GCC region with native Arabic support, local payment integrations, and regional regulatory compliance.',
      },
      {
        question: 'How do RepeatMD\'s AI agents compare to Daisy\'s AI receptionist?',
        answer:
          'RepeatMD offers Adonis (marketing/lead generation) and Aria (patient communication) as chat-based AI agents. However, neither handles voice calls or processes bookings and payments autonomously. Daisy\'s AI receptionist manages voice calls, chat, full booking flows, and payment processing 24/7 — a more complete AI solution.',
      },
      {
        question: 'Does RepeatMD have a mobile app for managing my business?',
        answer:
          'RepeatMD has limited mobile app presence with only 80 G2 reviews and no significant app store ratings. Since it is a marketing tool rather than a full management platform, the mobile experience is focused on campaign monitoring rather than day-to-day operations. Daisy provides a comprehensive mobile app for complete business management including bookings, POS, staff, and AI features.',
      },
      {
        question: 'Can RepeatMD handle multiple clinic locations?',
        answer:
          'RepeatMD can serve multi-location med spas for marketing and retention campaigns, but since it lacks booking, POS, and operations features, you still need separate software for each location\'s daily management. Daisy provides centralized multi-branch management with unified booking, staff scheduling, reporting, and marketing across all locations in a single platform.',
      },
      {
        question: 'What integrations does RepeatMD offer and do I need other software too?',
        answer:
          'RepeatMD integrates with some EMR/EHR systems and marketing tools, but you absolutely need separate booking software, POS, and operations tools alongside it. This means managing multiple vendors, logins, and data silos. Daisy eliminates this fragmentation by providing booking, POS, marketing, AI, and operations in one integrated platform.',
      },
      {
        question: 'Is RepeatMD suitable for regular beauty salons or just med spas?',
        answer:
          'RepeatMD is designed specifically for med spas and aesthetic practices — its pricing, features, and AI agents are tailored to that niche. Regular beauty salons, barbershops, and wellness businesses would find it overpriced and poorly fitted. Daisy serves all beauty and wellness verticals equally, from hair salons to med spas to nail studios.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'Interesting cashback concept validates Daisy\'s approach. But at $700/mo for marketing only (no operations), the value proposition is weak vs an all-in-one platform. Med spa niche limits relevance.',
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
      'US-only — no international or GCC support',
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
          'No — Boulevard is US-only with no Arabic support, GCC compliance, or local payment methods. For Middle East beauty businesses, Daisy provides native Arabic UI, local payment integration, and compliance across all 6 GCC countries.',
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
          'Boulevard\'s Precision Scheduling AI optimizes appointment slot allocation, and its Duo assistant provides business insights — both only available at $295/mo. Daisy\'s AI goes further with a 24/7 voice and chat receptionist that handles bookings and payments autonomously, plus AI-powered marketing and analytics, all included in the core platform.',
      },
      {
        question: 'Does Boulevard support Arabic-speaking staff and clients?',
        answer:
          'No. Boulevard is English-only with no Arabic interface, no RTL layout support, and no Middle Eastern localization. Daisy offers fully native Arabic and English support with multilingual staff interfaces, client communications, and booking pages — purpose-built for the GCC market.',
      },
      {
        question: 'How good is Boulevard\'s mobile app for daily salon management?',
        answer:
          'Boulevard has solid reviews (4.6 on Capterra, 4.5 on G2) and a well-designed mobile experience consistent with its premium brand. The app handles bookings, client check-in, and POS well. However, its premium pricing puts it out of reach for many businesses. Daisy offers comparable mobile quality with broader features including AI and marketplace at more accessible pricing.',
      },
      {
        question: 'Can Boulevard support franchise or multi-location salon businesses?',
        answer:
          'Yes — Boulevard offers franchise management in its Prestige tier ($410/mo) with custom integrations, API access, and a dedicated success manager. However, the high price point makes it expensive for growing chains. Daisy provides multi-branch management, centralized reporting, and cross-location tools at more accessible pricing tiers.',
      },
      {
        question: 'What customer support does Boulevard provide?',
        answer:
          'Boulevard provides support based on your tier level, with dedicated success managers only available in the Prestige plan ($410/mo). All support is in English only. Daisy offers multi-channel support in both Arabic and English, with onboarding assistance included regardless of plan, ensuring businesses in the GCC receive the same quality of support.',
      },
      {
        question: 'Does Boulevard help attract new customers or just manage existing ones?',
        answer:
          'Boulevard focuses on operations and client experience management — it does not have a consumer marketplace, cashback program, or active customer acquisition tools. Daisy combines full operations management with a consumer marketplace, cashback rewards, and AI-driven marketing to both manage existing clients and actively bring new ones through your door.',
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
        'France\'s largest beauty marketplace with zero commission — SaaS-only pricing',
      targetAudience:
        'French hairdressers and beauty professionals who want marketplace exposure without commission fees',
      toneAndVoice: 'Local, professional, anti-commission messaging',
      keyMessages: [
        '10M+ monthly bookings',
        'Zero commission — flat monthly fee',
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
      'Commission-free model — flat SaaS pricing',
      'Very high consumer adoption and app ratings',
      'Strong brand in French market',
      'Well-funded ($50M+ Series C) for European expansion',
    ],

    competitorWeaknesses: [
      'No AI capabilities at all',
      'France-focused — limited international presence',
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
          'Planity dominates France with 10M+ monthly bookings and commission-free pricing, but is limited to European markets with no AI capabilities. Daisy provides a complete AI-powered growth platform with Arabic/English support, cashback rewards, and GCC compliance — designed for a global audience.',
      },
      {
        question: 'Does Planity charge commission on bookings like other marketplaces?',
        answer:
          'No — Planity\'s key differentiator is its commission-free SaaS model at approximately 59 euros per month. You pay a flat subscription fee with no per-booking commissions. Daisy also avoids per-booking commissions and includes AI, cashback, and full business management features that Planity lacks, offering more value for the subscription cost.',
      },
      {
        question: 'Does Planity work outside of France or support Arabic?',
        answer:
          'Planity is expanding within Europe but remains France-focused with no Arabic support, no GCC compliance, and no Middle Eastern payment methods. Daisy is built for global markets with native Arabic and English support, coverage across all 6 GCC countries, and local payment integrations.',
      },
      {
        question: 'Does Planity have any AI features?',
        answer:
          'No. Planity has zero AI capabilities — only basic automated booking confirmations and reminders. There is no AI receptionist, chatbot, smart scheduling, or AI-powered marketing. Daisy provides a comprehensive AI ecosystem that handles calls, bookings, payments, marketing, and analytics autonomously.',
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
          'Planity integrates with European payment systems and basic salon management tools, but its ecosystem is designed for the French market. It does not support GCC payment gateways like mada, Benefit, or KNET. Daisy integrates with local GCC payment methods, Google Calendar, marketing tools, and provides a built-in marketplace — offering a much broader integration ecosystem for international businesses.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'France market leader with impressive scale (10M+ bookings/mo). Commission-free model is compelling. But zero AI, zero Arabic, zero GCC presence makes this a non-threat in Daisy\'s primary market. Interesting model to watch for marketplace strategy insights.',
  },
};
