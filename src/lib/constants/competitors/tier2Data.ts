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
    // www.glamera.com did not resolve on 2026-10-09 (no DNS A record); the
    // business site below is live and is where Glamera publishes its pricing.
    website: 'https://business.glamera.com/en',
    tier: 2,
    // business.glamera.com/en, read 2026-10-09: "Manage bookings, staff,
    // payments, inventory, websites and much more all in one powerful
    // ecosystem." Stats band: "3500+ Businesses", "10+ Countries".
    description:
      'Salon and spa management platform from Saudi Arabia. It covers appointments, POS, inventory, staff, accounting, marketing and multi-branch management, and adds a website builder, a staff app, a self-service kiosk and payments. Glamera says it serves 3,500+ businesses in 10+ countries.',
    // Wamda, 29 Sep 2019 ("Glamera raises $250,000"): founded earlier in 2019.
    founded: '2019',
    // Footer address on business.glamera.com, read 2026-10-09:
    // "Riyadh - El Raeed District ... El Garage Building".
    headquarters: 'Riyadh, Saudi Arabia',
    // Wamda: $250K (Sep 2019), six-figure seed (Aug 2020), $1.3M seed (5 Oct 2022).
    funding: '$1.3M seed (Oct 2022), after smaller rounds in 2019 and 2020',

    // Ratings re-assessed 2026-10-09 against Glamera's own pages: POS is in
    // every plan, inventory from Basic, websites with a custom domain through
    // Glamera Pro, marketing plus SMS and WhatsApp integration, loyalty
    // programs, and multi-branch control from one dashboard.
    features: {
      onlineBooking: 2,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 2,
      marketingAndCrm: 2,
      inventoryManagement: 2,
      reportingAndAnalytics: 2,
      // No consumer marketplace on its current pages; its 2019 consumer iOS app
      // is still listed but was last updated in 2021.
      marketplaceAndDiscovery: 1,
      // No AI listed on its product or pricing pages as of 2026-10-09.
      aiCapabilities: 0,
      brandingAndWhiteLabel: 2,
    },

    // business.glamera.com/en/our-pricing, read 2026-10-09. Prices shown as
    // "SAR 125 /month" etc., with "save up to 20% with annual billing". The
    // page states "No hidden fees". There is no free plan.
    pricing: {
      hasFreePlan: false,
      startingPrice: 'From SAR 125/mo',
      // Sorting only, never displayed: USD equivalent of SAR 125 at the 3.75 peg.
      startingPriceNumeric: 33.33,
      tiers: [
        {
          name: 'Foundation',
          price: 'SAR 125/mo',
          priceNumeric: 33.33,
          billingCycle: 'monthly',
          features: [
            'Up to 3 users',
            'Appointment management',
            'POS screen and invoice issuance',
            'Financial transactions',
            'Essential reports',
          ],
        },
        {
          name: 'Basic',
          price: 'SAR 225/mo',
          priceNumeric: 60,
          billingCycle: 'monthly',
          features: [
            'Up to 10 users',
            'Everything in Foundation',
            'Staff management',
            'Inventory management',
            'Advanced reports',
          ],
        },
        {
          name: 'Advanced',
          price: 'SAR 325/mo',
          priceNumeric: 86.67,
          billingCycle: 'monthly',
          features: [
            'Up to 20 users',
            'Everything in Basic',
            'Integrated accounting system',
            'Professional reports',
            'Dedicated account manager',
          ],
        },
      ],
      // Add-ons as the pricing page lists them: "Staff & Owners App ... SAR 10
      // additional per employee per month"; website creation and the
      // self-service kiosk carry no published price.
      hiddenCosts: [
        'Staff & Owners App: SAR 10 per employee per month',
        'Website and self-service kiosk add-ons, priced on request',
      ],
      pricingModel: 'flat',
      pricingPageUrl: 'https://business.glamera.com/en/our-pricing',
      lastVerified: '2026-10-09',
    },

    // The earlier 4.5 (App Store, 5,000) and 4.3 (Google Play, 8,000) figures
    // had no source. On 2026-10-09 the consumer "Glamera" iOS app showed 2.8
    // from 12 ratings (Saudi store, last updated 2021) and the business apps
    // too few ratings to display, so no rating is published here.
    reviews: [],

    gccPresence: {
      // Bilingual site; App Store lists Arabic and English for its apps.
      hasArabicUI: true,
      arabicQuality: 'native',
      // business.glamera.com/en/about-us, read 2026-10-09: "Serving Clients
      // Across the Arab World" lists Egypt, Saudi Arabia, Qatar, Bahrain, UAE,
      // Kuwait, Lebanon and Oman.
      gccCountries: ['KSA', 'UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman'],
      // "Fully compliant with ZATCA e-invoicing regulations (Phase 1 & 2)".
      localCompliance: true,
      // "Licensed by Saudi Payments"; integrations list Mada, Apple Pay, Tabby, Tamara.
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
      // Wamda, 27 Jan 2026, on the Bookr MoU: the deal will enable "the rollout
      // of advanced AI capabilities tailored to the beauty and wellness sector".
      aiDescription:
        'Glamera\'s product and pricing pages do not list AI features as of October 2026. When it announced its agreement to acquire Bookr in January 2026, Glamera said it plans to roll out AI capabilities built for the beauty and wellness sector.',
    },

    targetMarket:
      'Beauty salons, barbershops, spas, massage centres and gyms, from independent professionals to multi-branch businesses, mainly in Saudi Arabia and the wider Arab world.',

    messaging: {
      tagline: 'The Operating System for Beauty & Wellness Businesses',
      primaryValueProp:
        'Bookings, staff, payments, inventory and websites managed in one connected system',
      targetAudience: 'Beauty and wellness businesses, from independent experts to multi-branch enterprises',
      toneAndVoice: 'Operational and bilingual, in Arabic and English',
      keyMessages: [
        '3,500+ businesses in 10+ countries',
        'ZATCA e-invoicing compliant (Phase 1 and 2)',
        'Licensed by Saudi Payments',
        'No hidden fees',
        'Dedicated account manager and 24/7 support',
      ],
    },

    daisyAdvantages: [
      '24/7 AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English. Glamera\'s published pages list no AI receptionist as of October 2026',
      'Cashback rewards for customers, built into the platform',
      'Branded booking page; Glamera lists its website builder as an add-on',
      'AI help with marketing campaigns and reporting',
    ],

    daisySwitchingReasons: [
      'You want an AI receptionist answering clients on WhatsApp and Instagram around the clock',
      'You want cashback rewards to bring clients back',
      'You want your own brand on the booking page and on client messages',
      'You want AI help with marketing and reporting',
    ],

    competitorStrengths: [
      'Arabic and English interface, built in Saudi Arabia',
      'POS and invoicing in every plan, with ZATCA e-invoicing compliance (Phase 1 and 2)',
      'Published prices in SAR from SAR 125 a month, and "No hidden fees" on its pricing page',
      'Payment integrations include mada, Apple Pay, Tabby and Tamara',
      'Multi-branch management from one dashboard, plus a website builder, staff app and self-service kiosk',
      'Says it serves 3,500+ businesses in 10+ countries',
    ],

    competitorWeaknesses: [
      'No AI receptionist or other AI features on its published pages as of October 2026',
      'Inventory management starts on the Basic plan (SAR 225 a month)',
      'The staff and owners app costs SAR 10 per employee per month on top of the plan',
      'Website and self-service kiosk add-ons have no published price',
      'Plans cap users at 3, 10 or 20',
      'Lists loyalty programs but no cashback rewards',
    ],

    faq: [
      {
        question: 'How does Daisy compare to Glamera?',
        answer:
          'Both are salon platforms built for Arabic-speaking markets, with Arabic and English interfaces. Glamera covers appointments, POS, inventory, staff, accounting, marketing and multi-branch management, with plans from SAR 125 a month. Daisy adds a 24/7 AI receptionist on WhatsApp, Instagram and the booking site, and cashback rewards for customers. Glamera\'s published pages do not list AI features as of October 2026.',
      },
      {
        question: 'Where does Glamera operate?',
        answer:
          'Glamera is based in Riyadh and says it serves 3,500+ businesses in 10+ countries. Its about page lists Saudi Arabia, the UAE, Kuwait, Qatar, Bahrain, Oman, Egypt and Lebanon. In January 2026 it signed a memorandum of understanding to acquire Bookr, a Kuwait-based salon booking platform. Daisy is live in all six GCC countries.',
      },
      {
        question: 'What does Glamera cost?',
        answer:
          'Glamera publishes three plans in Saudi riyals: Foundation at SAR 125 a month for up to 3 users, Basic at SAR 225 for up to 10 users and Advanced at SAR 325 for up to 20 users. Annual billing saves up to 20%. The staff and owners app adds SAR 10 per employee per month, and the website and self-service kiosk add-ons are priced on request. Its pricing page says "No hidden fees". Daisy publishes its plans on its pricing page.',
      },
      {
        question: 'How hard is it to switch from Glamera to Daisy?',
        answer:
          'Daisy handles the onboarding and the data migration, transferring client records, booking history and staff details without interrupting the business.',
      },
      {
        question: 'Does Glamera have AI features like an AI receptionist?',
        answer:
          'Glamera\'s product and pricing pages do not list an AI receptionist or other AI features as of October 2026. When it announced the Bookr agreement in January 2026, Glamera said it plans to roll out AI capabilities for the beauty and wellness sector. Daisy\'s AI receptionist answers clients on WhatsApp, Instagram and the booking site, in Arabic and English, 24/7.',
      },
      {
        question: 'Does Glamera have a mobile app for owners and staff?',
        answer:
          'Yes. Glamera One is its business app for owners, managers and staff, covering appointments, the calendar, staff performance and client communication. Glamera\'s pricing page lists the staff and owners app at SAR 10 per employee per month. Daisy\'s mobile and desktop app is part of its plans.',
      },
      {
        question: 'Can Glamera support a multi-location salon business?',
        answer:
          'Yes. Glamera says it gives you centralized control over all your branches from one dashboard, with unified reporting and access permissions for each branch. Daisy also manages multiple branches from one account, with centralized reporting, staff scheduling across locations and one inventory across all of them.',
      },
      {
        question: 'What kind of customer support does Glamera provide?',
        answer:
          'Glamera says customers get a dedicated account manager and 24/7 support. On its pricing page, the dedicated account manager is listed with the Advanced plan. Daisy provides dedicated onboarding and multi-channel support in Arabic and English.',
      },
      {
        question: 'Can I keep my own brand identity on Glamera?',
        answer:
          'Yes. Glamera Pro is a website builder with online booking, SMS and WhatsApp integration, online payments and a custom domain, and Glamera\'s pricing page lists website creation as an add-on. Daisy gives you a branded booking page, so your brand carries across booking pages, apps and every message to a customer.',
      },
    ],

    lastResearched: '2026-10-09',
    notes:
      'Saudi platform and the closest regional rival in Daisy\'s markets. Publishes SAR pricing with POS in every plan. Signed an MoU to acquire Kuwait\'s Bookr in January 2026; no completion found as of 2026-10-09. Recheck its pages for the AI it announced.',
  },

  // ---------------------------------------------------------------------------
  // 7. DINGG
  // ---------------------------------------------------------------------------
  dingg: {
    slug: 'dingg',
    name: 'DINGG',
    website: 'https://www.dingg.app',
    tier: 2,
    // dingg.app/ae and dingg.app/ae/features/dingg-ai-salon-software, read 2026-10-09.
    description:
      'Salon and spa software from India, run by Vrienden Tech, with country sites for the UAE, Saudi Arabia, Qatar, Kuwait and Oman. Its AI Genius suite includes a WhatsApp AI assistant that answers questions and takes bookings, plus smart scheduling, client segmentation and predictive insights.',
    // Entrepreneur India and TheSaaSNews, Sep 2022: founded 2018.
    founded: '2018',
    // TheSaaSNews (18 Sep 2022) and Outlook Startup describe DINGG as Pune-based.
    // DINGG's own pages publish no address.
    headquarters: 'Pune, India',
    // Entrepreneur India (16 Sep 2022) and TheSaaSNews (18 Sep 2022):
    // "Rs 3.5 crore in pre-Series A", led by Big Sun Ventures.
    funding: 'INR 3.5 crore pre-Series A (Sep 2022)',

    // Re-assessed 2026-10-09 against dingg.app: inventory lists stock alerts,
    // audits, supplier ordering and multi-site stock; booking runs through the
    // business's own website and WhatsApp.
    features: {
      onlineBooking: 2,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 2,
      marketingAndCrm: 2,
      inventoryManagement: 2,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 1,
      aiCapabilities: 2,
      // "Seamless website integration for online booking"; no white-label offer listed.
      brandingAndWhiteLabel: 1,
    },

    // DINGG publishes no prices. dingg.app/ae FAQ, read 2026-10-09: "DINGG
    // offers affordable monthly and annual plans in AED ... Book a free demo
    // for current UAE pricing." /pricing redirects to the demo form. The old
    // $49 and $79 tiers came from a third-party listing, not from DINGG. Its
    // country pages offer a free trial without stating the length.
    pricing: {
      hasFreePlan: false,
      startingPrice: 'Pricing on request',
      tiers: [],
      hiddenCosts: [],
      // Not published by DINGG; this field is not rendered on any page.
      pricingModel: 'flat',
      pricingPageUrl: 'https://www.dingg.app/ae',
      lastVerified: '2026-10-09',
    },

    // Google Play, "DINGG Business" (app.dingg.vendor), read 2026-10-09:
    // 4.5 stars, 83 reviews, 10K+ downloads. The iOS app shows too few ratings
    // in the UAE store to publish.
    reviews: [
      { platform: 'Google Play', rating: 4.5, reviewCount: 83 },
    ],

    gccPresence: {
      // Not verified. DINGG's country pages say WhatsApp reminders and campaigns
      // go out "in both English and Arabic", but no page shows an Arabic
      // interface and its App Store listings give English only (2026-10-09).
      hasArabicUI: false,
      arabicQuality: 'none',
      // Live country sites re-verified 2026-10-09: dingg.app/ae, /sa, /qa, /kw,
      // /om return 200 with country-specific titles. /bh returns 404.
      gccCountries: ['UAE', 'KSA', 'Qatar', 'Kuwait', 'Oman'],
      // VAT-compliant invoices in AED and SAR, "ZATCA-ready reports".
      localCompliance: true,
      // "DINGG supports cards, Apple Pay and popular UAE payment options".
      localPaymentMethods: true,
      localSupport: true,
    },

    // dingg.app/ae/features/dingg-ai-salon-software, read 2026-10-09: "DINGG AI
    // handles WhatsApp conversations automatically, answering questions,
    // sharing prices, and even taking bookings"; FAQ: "It's like having a
    // virtual receptionist 24/7." The page does not mention phone calls.
    aiCapabilities: {
      hasAiReceptionist: true,
      hasAiChatbot: true,
      hasSmartScheduling: true,
      hasAiMarketing: true,
      hasAiAnalytics: true,
      hasAiPricing: false,
      aiDescription:
        'DINGG AI Genius includes a WhatsApp AI assistant that answers questions, shares service menus and prices, and takes and confirms bookings 24/7; DINGG compares it to a virtual receptionist. The suite also lists smart scheduling, client segmentation, WhatsApp marketing, client summaries for upselling, predictive analytics and transaction monitoring. Its pages do not mention phone calls.',
    },

    targetMarket:
      'Salons, spas, barbershops and beauty clinics in India, the US and five GCC countries: the UAE, Saudi Arabia, Qatar, Kuwait and Oman.',

    messaging: {
      tagline: 'Streamline, Automate and Grow with DINGG',
      primaryValueProp:
        'All-in-one salon and spa software with VAT-compliant billing, WhatsApp marketing and online booking',
      targetAudience: 'Salons, spas and clinics of every size in India, the GCC and the US',
      toneAndVoice: 'Practical and growth-minded, with AI and WhatsApp up front',
      keyMessages: [
        'DINGG AI Genius',
        'WhatsApp booking and marketing in English and Arabic',
        'VAT-compliant billing in local currency',
        'Multi-location and franchise management',
        'Loyalty points, memberships and gift cards',
      ],
    },

    daisyAdvantages: [
      'Live in all six GCC countries, Bahrain included; DINGG has country sites for five',
      'AI receptionist that also answers on Instagram; DINGG lists WhatsApp, SMS and your website for its AI assistant',
      'Arabic and English interface; DINGG\'s pages mention Arabic for WhatsApp messages',
      'Cashback rewards for customers; DINGG\'s loyalty runs on points, vouchers and prepaid credits',
      'Published prices; DINGG gives pricing in a demo',
      'Consumer marketplace for customer acquisition',
    ],

    daisySwitchingReasons: [
      'You need coverage in Bahrain as well as the rest of the GCC',
      'You want an AI receptionist that also answers on Instagram',
      'You want cashback rewards to bring clients back',
      'You want to see prices before booking a demo',
      'You want a consumer marketplace bringing new customers in',
    ],

    competitorStrengths: [
      'AI Genius: a WhatsApp AI assistant that takes bookings, plus smart scheduling, segmentation and predictive insights',
      'Country sites for the UAE, Saudi Arabia, Qatar, Kuwait and Oman, with billing in each local currency',
      'VAT-compliant invoicing, with ZATCA-ready reports in Saudi Arabia',
      'WhatsApp reminders and campaigns in English and Arabic',
      'Loyalty points, memberships, packages and gift cards',
      'Multi-location and franchise management',
    ],

    competitorWeaknesses: [
      'Does not publish prices; you get them in a demo',
      'No Bahrain site among its GCC country sites',
      'No Arabic interface shown on its pages or app listings',
      'No consumer marketplace listed',
      'Its AI assistant is listed for WhatsApp, SMS and the business website, not Instagram',
    ],

    faq: [
      {
        question: 'How does DINGG compare to Daisy?',
        answer:
          'Both publish AI that books appointments over WhatsApp. DINGG\'s AI Genius adds smart scheduling, segmentation and predictive insights, and DINGG runs country sites for five GCC states. Daisy\'s AI receptionist also covers Instagram, and Daisy publishes its prices, adds cashback rewards and a consumer marketplace, and is live in all six GCC countries, Bahrain included.',
      },
      {
        question: 'Does DINGG work in the GCC?',
        answer:
          'Yes. DINGG runs country sites for the UAE, Saudi Arabia, Qatar, Kuwait and Oman, with billing in each local currency and VAT-compliant invoicing. We found no Bahrain site as of October 2026. Daisy is live in all six GCC countries.',
      },
      {
        question: 'How much does DINGG cost?',
        answer:
          'DINGG does not publish prices. Its UAE site says it offers monthly and annual plans in AED and asks you to book a free demo for current pricing. Daisy publishes its plans on its pricing page.',
      },
      {
        question: 'Can I migrate my salon data from DINGG to Daisy?',
        answer:
          'Yes. Daisy moves your client database, appointment history and staff records across, and the onboarding team walks you through each step.',
      },
      {
        question: 'How does DINGG\'s AI compare to Daisy\'s?',
        answer:
          'DINGG\'s AI assistant answers questions, shares service menus and prices, and takes bookings on WhatsApp, SMS and your website, 24/7. AI Genius also covers smart scheduling, client segmentation, WhatsApp marketing and predictive analytics. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site in Arabic and English, takes payment inside the booking flow, and sits alongside a consumer marketplace and cashback rewards.',
      },
      {
        question: 'Is DINGG\'s Arabic support as good as Daisy\'s for GCC businesses?',
        answer:
          'DINGG sends WhatsApp reminders and campaigns in English and Arabic, and runs country sites for the UAE, Saudi Arabia, Qatar, Kuwait and Oman. Its pages and app listings do not show an Arabic interface as of October 2026. Daisy\'s staff interface, booking pages and client messages are in Arabic and English.',
      },
      {
        question: 'Does DINGG have a mobile app?',
        answer:
          'Yes. The DINGG Business app is on Google Play, rated 4.5 from 83 reviews in October 2026, and on the App Store. DINGG also lists a kiosk app and a client self-service portal. Daisy\'s app puts POS, inventory, AI and marketplace access in one place.',
      },
      {
        question: 'Does DINGG support multi-branch salon businesses?',
        answer:
          'Yes. DINGG lists multi-location and franchise management, with one dashboard for all outlets, stock tracked across sites, and pricing and offers set by location. Daisy also runs multiple branches centrally, with cross-location reporting, staff allocation and inventory management.',
      },
      {
        question: 'What integrations does DINGG support compared to Daisy?',
        answer:
          'DINGG lists payments by card, Apple Pay and popular UAE payment options, messaging over WhatsApp, SMS and email, and booking on your own website. Daisy connects to local GCC payment methods, marketing tools and Google Calendar, and includes a consumer marketplace.',
      },
    ],

    lastResearched: '2026-10-09',
    notes:
      'The closest Tier 2 rival on AI: its WhatsApp assistant takes bookings. Country sites in five GCC states, without Bahrain. Prices on request. Recheck dingg.app for an Arabic interface and a Bahrain site.',
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
        'GlossGenius ships Reception, an AI front desk that answers calls and texts 24/7 and books onto the calendar; it is free on GlossGenius until 30 November 2026. The AI Growth Analyst, which produces business insights, appears in the Platinum tier. There is no AI across WhatsApp or Instagram, and no smart scheduling.',
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
      'AI receptionist across calls, WhatsApp and Instagram, in Arabic and English, vs a calls-and-texts front desk',
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
      'Reception covers calls and texts; no AI across WhatsApp or Instagram',
      'No cashback or loyalty programs',
      'Solopreneur focus, limited for growing teams',
    ],

    faq: [
      {
        question: 'How does GlossGenius compare to Daisy?',
        answer:
          'For a US-based solopreneur, GlossGenius is hard to beat on design and simplicity. It has no marketplace, no Arabic, and no team management below the Platinum tier, and its Reception AI covers calls and texts rather than WhatsApp or Instagram. Daisy is a complete growth platform with AI across every channel, a marketplace, cashback and GCC compliance, at any size.',
      },
      {
        question: 'Does GlossGenius have AI features?',
        answer:
          'GlossGenius ships Reception, an AI front desk answering calls and texts 24/7 and booking onto the calendar, free on GlossGenius until 30 November 2026, plus an AI Growth Analyst in the Platinum tier for business insights. The comparison is channel coverage rather than presence: Daisy\'s AI receptionist also works across WhatsApp and Instagram, in Arabic and English, and is in the base platform.',
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
    // repeatmd.com and repeatmd.com/how-it-works, read 2026-10-09: "rewards,
    // AI, and 24/7 shopping inside your own branded app".
    description:
      'Patient rewards and ecommerce platform for aesthetic and wellness practices in the US and Canada, delivered as each practice\'s own branded app. It combines mobile rewards, memberships, Beauty Bank pre-saved balances, patient financing and Adonis and Aria, AI treatment advisors that answer questions, sell treatments and book appointments.',
    // repeatmd.com/about, read 2026-10-09: "FEB 2021 RepeatMD created".
    founded: '2021',
    // Footer: "5599 San Felipe, 4th Floor, Houston, TX 77056". The about page
    // says the team is "headquartered in Houston and New York City".
    headquarters: 'Houston, TX, USA',
    // repeatmd.com/about: "May 2023 Grew to over 100 employees!"
    employeeCount: '100+',
    // repeatmd.com/about: "November 2023 Announced $50M Series A led by
    // Centana & Full-In Partners", after a seed round closed in December 2022.
    funding: '$50M Series A (Nov 2023)',

    // Re-assessed 2026-10-09. RepeatMD sells inside a branded patient app and
    // says "All our clients use an existing EMR or PM system", so booking stays
    // basic. Staff scheduling and inventory are not listed on its pages.
    features: {
      onlineBooking: 1,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 0,
      marketingAndCrm: 3,
      inventoryManagement: 0,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 1,
      aiCapabilities: 2,
      // "We'll build your branded app" for each practice.
      brandingAndWhiteLabel: 2,
    },

    // repeatmd.com/pricing FAQ, read 2026-10-09: "Let's craft a proposal just
    // for you. Generally, our platform's monthly cost falls within the
    // hundreds of dollars range. RepeatMD's pricing is tailored based on
    // factors unique to your team". The old ~$700/mo figure and the
    // implementation-fee line had no source and are removed.
    pricing: {
      hasFreePlan: false,
      startingPrice: 'Pricing on request',
      tiers: [],
      hiddenCosts: [],
      // Not published ("tailored based on factors unique to your team"); this
      // field is not rendered on any page.
      pricingModel: 'hybrid',
      pricingPageUrl: 'https://repeatmd.com/pricing',
      lastVerified: '2026-10-09',
    },

    // App Store (US), "MyRepeat: Patient Rewards" by RepeatMD, Inc, read
    // 2026-10-09: 4.9 from 26,581 ratings. The earlier G2 4.7 (80) figure could
    // not be re-checked (G2 blocks automated reads) and is removed.
    reviews: [
      { platform: 'App Store', rating: 4.9, reviewCount: 26581 },
    ],

    gccPresence: {
      // "Trusted by practices in US & Canada"; App Store lists English only.
      hasArabicUI: false,
      arabicQuality: 'none',
      gccCountries: [],
      localCompliance: false,
      localPaymentMethods: false,
      localSupport: false,
    },

    // repeatmd.com/blog/repeatmd-v3-automated-revenue (21 Oct 2025), read
    // 2026-10-09: Adonis and Aria "are your AI treatment advisors, available
    // 24/7 ... They make personalized recommendations, sell treatments, and
    // even book appointments." How-it-works page: they turn "conversations
    // into direct sales or bookings."
    aiCapabilities: {
      hasAiReceptionist: true,
      hasAiChatbot: true,
      hasSmartScheduling: false,
      hasAiMarketing: true,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription:
        'Adonis and Aria are AI treatment advisors inside the practice\'s patient app. RepeatMD says they are available 24/7, answer questions, make personalized recommendations, sell treatments and "even book appointments". Ageless AI, introduced in January 2026, produces before-and-after visualizations to qualify patients. RepeatMD does not list WhatsApp, Instagram or phone as channels for its AI.',
    },

    targetMarket:
      'Medical spas, cosmetic dermatology, plastic surgery, wellness and integrative medicine, cosmetic dentistry and chiropractic practices in the US and Canada.',

    messaging: {
      tagline: 'AI-Powered Rewards & Ecommerce for Aesthetic and Wellness Practices',
      primaryValueProp:
        'Rewards, AI and 24/7 shopping inside the practice\'s own branded app',
      targetAudience:
        'Aesthetic and wellness practices in the US and Canada, most of them single-location',
      toneAndVoice: 'Sales-focused, built around its "Medcommerce" message',
      keyMessages: [
        '4,000+ practices in the US and Canada',
        '2,000,000+ patients',
        'Your own branded app in 30 days or less',
        'AI treatment advisors that sell and book',
        'Memberships, Beauty Bank and Affirm financing',
      ],
    },

    daisyAdvantages: [
      'Booking, POS, staff and operations in one platform; RepeatMD says its clients run an existing EMR or practice management system alongside it',
      'AI receptionist on WhatsApp, Instagram and the booking site; RepeatMD\'s AI advisors work inside its patient app',
      'Arabic and English, live in all six GCC countries; RepeatMD lists practices in the US and Canada',
      'Published prices; RepeatMD prices on request',
      'Serves salons, barbershops and spas as well as clinics',
    ],

    daisySwitchingReasons: [
      'You want booking, POS and operations in the same platform as your rewards',
      'You run a practice in the GCC and need Arabic',
      'You want an AI receptionist on WhatsApp and Instagram',
      'You want to see prices before a sales call',
      'You run a salon or spa rather than a medical practice',
    ],

    competitorStrengths: [
      'Each practice gets its own branded app, built in 30 days or less',
      'Adonis and Aria, AI treatment advisors that answer questions, sell treatments and book appointments 24/7',
      'Mobile rewards, memberships, Beauty Bank pre-saved balances and Affirm patient financing',
      '4,000+ practices and 2,000,000+ patients in the US and Canada',
      'MyRepeat patient app rated 4.9 on the App Store from 26,000+ ratings',
      'SkinDrop sells 3,000+ professional skincare products in the app with no inventory to manage',
    ],

    competitorWeaknesses: [
      'Not a full practice management system: RepeatMD says its clients use an existing EMR or PM system',
      'Prices on request; RepeatMD says the monthly cost is generally "within the hundreds of dollars range"',
      'Lists practices in the US and Canada only, with no Arabic interface published',
      'Built for aesthetic and wellness practices rather than salons and barbershops',
      'AI advisors work inside its own patient app; no WhatsApp or Instagram channel listed',
      'No staff scheduling or inventory management listed',
    ],

    faq: [
      {
        question: 'How does RepeatMD compare to Daisy?',
        answer:
          'RepeatMD gives aesthetic and wellness practices their own branded app with rewards, memberships, ecommerce, patient financing and AI treatment advisors. It works alongside the practice\'s existing EMR or practice management system. Daisy is one platform covering an AI receptionist, booking, POS, marketing and cashback, in Arabic and English, and it is live in all six GCC countries.',
      },
      {
        question: 'What is RepeatMD\'s Beauty Bank?',
        answer:
          'Beauty Bank lets patients pre-save money for future treatments at a practice, like a digital wallet. Practices can encourage deposits with bonuses, priority scheduling or cashback rewards, and patients spend the balance when they book. Daisy has a cashback system inside the wider platform, plus a consumer marketplace for acquisition.',
      },
      {
        question: 'How much does RepeatMD cost?',
        answer:
          'RepeatMD does not publish a price list. Its pricing page says the cost is tailored to each practice and that the monthly cost "generally ... falls within the hundreds of dollars range", with exact figures after a call. Daisy publishes its plans on its pricing page.',
      },
      {
        question: 'Can I move my patient data from RepeatMD to Daisy?',
        answer:
          'Yes. Daisy\'s onboarding team moves client profiles, loyalty balances and engagement history across. RepeatMD runs alongside an EMR or practice management system, so plan to bring records over from that system too.',
      },
      {
        question: 'Does RepeatMD work for beauty businesses in the Middle East?',
        answer:
          'RepeatMD lists practices in the US and Canada, and its patient app is listed in English only. It does not publish an Arabic interface or GCC payment methods. Daisy was built for the GCC, with a native Arabic and English interface and local payment methods, and is live in all six GCC countries.',
      },
      {
        question: 'How do RepeatMD\'s AI agents compare to Daisy\'s AI receptionist?',
        answer:
          'Adonis and Aria are AI treatment advisors in the practice\'s patient app. RepeatMD says they answer questions 24/7, recommend and sell treatments, and book appointments. Daisy\'s AI receptionist answers clients on WhatsApp, Instagram and the booking site, in Arabic and English, and takes payment in the booking flow.',
      },
      {
        question: 'Does RepeatMD have a mobile app?',
        answer:
          'Yes. RepeatMD builds each practice a branded patient app with rewards, AI advisors and 24/7 shopping, and its MyRepeat patient app is rated 4.9 on the App Store from 26,000+ ratings. Its dashboards track sales and memberships. Daisy\'s mobile app covers the whole business: bookings, POS, staff and the AI features.',
      },
      {
        question: 'Can RepeatMD handle multiple clinic locations?',
        answer:
          'Yes. RepeatMD says its pricing suits practices with one location or 100, and it runs alongside each practice\'s existing EMR or practice management system. Daisy manages multiple branches centrally, with booking, staff scheduling, reporting and marketing across every location in one platform.',
      },
      {
        question: 'What integrations does RepeatMD offer and do I need other software too?',
        answer:
          'RepeatMD says all its clients use an existing EMR or practice management system, and it offers options to embed links to EMRs and other tools. Patient financing runs through Affirm. Daisy holds booking, POS, marketing, AI and operations together in one platform.',
      },
      {
        question: 'Is RepeatMD suitable for regular beauty salons or just med spas?',
        answer:
          'RepeatMD is built for medical spas, cosmetic dermatology, plastic surgery, wellness, cosmetic dentistry and chiropractic practices. Daisy serves every beauty and wellness vertical the same, from hair salons to med spas to nail studios.',
      },
    ],

    lastResearched: '2026-10-09',
    notes:
      'Patient rewards and ecommerce app for US and Canadian aesthetic practices that runs beside the practice\'s EMR. Quote-based pricing. Its AI advisors book appointments (V3, October 2025). Its Beauty Bank is a pre-save wallet, not a cashback scheme.',
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
      'A premium, design-led salon and spa management platform with AI scheduling and the Duo AI assistant. It has raised $188M and aims squarely at the luxury end of the market.',
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
        'Precision Scheduling AI arranges appointment slots, and Duo is an AI assistant for business insights and task automation. Both appear only in the Premier tier at $295/mo and above.',
    },

    targetMarket:
      'Premium, design-conscious salons and spas in the US, along with multi-location businesses and luxury brands. Budget-conscious and international markets are not the target.',

    messaging: {
      tagline: 'Client experience management for salons and spas',
      primaryValueProp:
        'Premium, beautifully designed platform with AI scheduling for luxury salons and spas',
      targetAudience:
        'Premium salon and spa owners who care about design and will pay for it',
      toneAndVoice: 'Premium and sophisticated, with design doing most of the talking',
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
          'Boulevard is a premium US platform at $158-410/mo, with AI scheduling and a beautiful interface. Daisy is a complete growth platform, adding an AI receptionist, marketplace, cashback and Arabic support at a lower price. Boulevard\'s AI needs the $295/mo Premier tier; Daisy includes it in the base platform.',
      },
      {
        question: 'Is Boulevard available in the Middle East?',
        answer:
          'No. Boulevard runs in the US only, with no Arabic, no GCC compliance and no local payment methods. For a Middle East beauty business, Daisy offers a native Arabic interface, local payment integration and support built for the Gulf, live in Kuwait today.',
      },
      {
        question: 'What does Boulevard actually cost when you include transaction fees?',
        answer:
          'The subscription runs $158-410/mo, and every payment carries 2.6% + $0.10 on top. A salon processing $20,000/mo pays $520+ in processing fees alone, and the AI still requires the $295/mo Premier tier. Daisy costs less, includes the AI in the core platform, and does not take a slice of each transaction.',
      },
      {
        question: 'How difficult is it to switch from Boulevard to Daisy?',
        answer:
          'Boulevard holds a lot of structured data, so the migration covers client profiles, appointment history, staff records, POS data and product inventory. Daisy\'s onboarding team handles it, checks the data landed correctly and gets your staff comfortable without stopping the business.',
      },
      {
        question: 'How does Boulevard\'s Precision Scheduling AI compare to Daisy\'s AI?',
        answer:
          'Precision Scheduling AI arranges slots and Duo produces business insights, and both need the $295/mo tier. Daisy goes further: a 24/7 voice and chat receptionist that books and takes payment on its own, plus AI marketing and analytics, all in the core platform.',
      },
      {
        question: 'Does Boulevard support Arabic-speaking staff and clients?',
        answer:
          'No. Boulevard is English-only, with no Arabic interface, no right-to-left layout and no Middle Eastern localization. Daisy is natively Arabic and English throughout, across staff interfaces, client messages and booking pages, built for the GCC.',
      },
      {
        question: 'How good is Boulevard\'s mobile app for daily salon management?',
        answer:
          'Reviews are solid at 4.6 on Capterra and 4.5 on G2, and the mobile experience matches the premium brand. Bookings, client check-in and POS all work well. The price puts it beyond a lot of businesses. Daisy matches the mobile quality, adds AI and a marketplace, and costs less.',
      },
      {
        question: 'Can Boulevard support franchise or multi-location salon businesses?',
        answer:
          'Yes. Franchise management sits in the Prestige tier at $410/mo, with custom integrations, API access and a dedicated success manager. For a chain still growing, that is a lot to carry. Daisy offers multi-branch management, centralized reporting and cross-location tools at prices lower down the range.',
      },
      {
        question: 'What customer support does Boulevard provide?',
        answer:
          'Support depends on your tier, and a dedicated success manager only comes with Prestige at $410/mo. All of it is in English. Daisy provides multi-channel support in Arabic and English, with onboarding included on every plan, so a GCC business gets the same service as anyone else.',
      },
      {
        question: 'Does Boulevard help attract new customers or just manage existing ones?',
        answer:
          'Boulevard is about operations and the client experience. There is no consumer marketplace, no cashback and nothing that actively goes looking for customers. Daisy runs the operations and adds a consumer marketplace, cashback rewards and AI-driven marketing, so it keeps the clients you have and brings new ones in.',
      },
    ],

    lastResearched: '2026-03-13',
    notes:
      'The positioning and the design make this a serious competitor in the US luxury segment, and Precision Scheduling AI is genuinely innovative. The gaps are US-only reach, no marketplace and high pricing. Not a direct threat in the GCC.',
  },

  // ---------------------------------------------------------------------------
  // 12. Planity
  // ---------------------------------------------------------------------------
  planity: {
    slug: 'planity',
    name: 'Planity',
    website: 'https://www.planity.com',
    tier: 2,
    // info.planity.com and info.planity.com/tarifs, read 2026-10-09: "60 000
    // établissements", "15M d'utilisateurs", "Sans engagement ni commission".
    // Planity press release, 20 Feb 2024: "plus de 10 millions de rendez-vous
    // qui sont pris chaque mois".
    description:
      'French beauty and wellness booking platform and salon software, used by 60,000 businesses in France, Belgium and Germany. Bookings through planity.com carry no commission; businesses pay a subscription that is priced on request. Planity reported more than 10 million bookings a month in February 2024.',
    // Planity press release, 20 Feb 2024: "Créé en 2017".
    founded: '2017',
    // Legal notice on info.planity.com: 5-7 rue Saint-Fiacre, 75002 Paris.
    headquarters: 'Paris, France',
    // Planity press release, 20 Feb 2024: "lève 45 millions d'euros en série
    // C" and "a levé au total 95 millions d'euros depuis sa création".
    funding: '€95M in total, including a €45M Series C (Feb 2024)',

    // Re-assessed 2026-10-09 against info.planity.com: NF525-certified till,
    // card terminal and Tap to Pay; stock management with low-stock alerts;
    // custom loyalty program and SMS campaigns; custom website with domain name
    // and a booking module for an existing site.
    features: {
      onlineBooking: 3,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 2,
      marketingAndCrm: 2,
      inventoryManagement: 2,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 3,
      // AI phone assistant launched July 2026 (Maddyness); AI-powered blog in
      // the custom website offer.
      aiCapabilities: 1,
      brandingAndWhiteLabel: 2,
    },

    // info.planity.com/tarifs, read 2026-10-09. Three plans, no prices shown.
    // FAQ: "Planity propose des abonnements sans engagement à des tarifs fixes
    // et transparents : sans commission sur vos rendez-vous, ni frais
    // d'installation ou de maintenance. Prenez contact avec l'un de nos
    // conseillers". The old ~€59/mo figure had no source.
    pricing: {
      hasFreePlan: false,
      startingPrice: 'Pricing on request',
      tiers: [
        {
          name: 'Agenda',
          price: 'Pricing on request',
          features: [
            'Personalized page on planity.com',
            'Online agenda',
            '300 reminder SMS per month',
            'Client file management',
            'Deposits and prepayment',
            'Booking button for social networks',
          ],
        },
        {
          name: 'Agenda + Caisse',
          price: 'Pricing on request',
          features: [
            'Everything in Agenda',
            'NF525-certified till software',
            'Product stock management',
            'Online sale of gift cards and services',
            'Accounting data export',
          ],
        },
        {
          name: 'Agenda + Caisse + TPE',
          price: 'Pricing on request',
          features: [
            'Everything in Agenda + Caisse',
            'Card terminal linked to the software',
            'Suggested tips',
            'Daily transfers of takings',
          ],
        },
      ],
      // info.planity.com/solution/marketing-etablissement, read 2026-10-09:
      // "0,07€ HT par SMS".
      hiddenCosts: [
        'SMS marketing campaigns: €0.07 excl. VAT per SMS',
      ],
      pricingModel: 'flat',
      pricingPageUrl: 'https://info.planity.com/tarifs',
      lastVerified: '2026-10-09',
    },

    // Read 2026-10-09. App Store (France), "Planity": 4.9 from 773,063
    // ratings. Google Play, "Planity" (com.planitypublic): 4.8, 403K reviews.
    reviews: [
      { platform: 'App Store', rating: 4.9, reviewCount: 773063 },
      { platform: 'Google Play', rating: 4.8, reviewCount: 403000 },
    ],

    gccPresence: {
      // App Store languages: French and German (consumer app); English, French
      // and German (Planity Pro app).
      hasArabicUI: false,
      arabicQuality: 'none',
      gccCountries: [],
      localCompliance: false,
      localPaymentMethods: false,
      localSupport: false,
    },

    // Maddyness, 8 Jul 2026 (Maxence Fabrion): Planity bets on AI "avec le
    // lancement d'un assistant téléphonique intelligent capable de répondre
    // aux appels entrants, de proposer des créneaux disponibles, de répondre
    // aux demandes courantes et d'intégrer automatiquement les réservations
    // dans l'agenda des professionnels, y compris en dehors des horaires
    // d'ouverture". Advanced analytics are "dans les tuyaux" (in the
    // pipeline), so hasAiAnalytics stays false. Planity's own newsroom
    // (newsroom.planity.com) lists the article as press coverage dated
    // 08/07/2026; the product pages on info.planity.com do not describe the
    // assistant yet (checked 2026-10-09).
    aiCapabilities: {
      hasAiReceptionist: true,
      hasAiChatbot: false,
      hasSmartScheduling: false,
      hasAiMarketing: false,
      hasAiAnalytics: false,
      hasAiPricing: false,
      aiDescription:
        'Planity launched an AI phone assistant that answers incoming calls, offers available slots, handles common requests and adds bookings to the agenda, including outside opening hours (Maddyness, 8 July 2026). Its custom website offer includes an AI-powered blog. Planity said advanced analytics with personalized recommendations were in development.',
    },

    targetMarket:
      'Hair salons, barbershops, beauty institutes, nail bars, spas and wellness practitioners in France, Belgium and Germany.',

    messaging: {
      tagline: 'La plateforme n°1 pour gérer votre salon ou institut',
      primaryValueProp:
        'Commission-free booking platform and salon software on a fixed subscription',
      targetAudience:
        'Beauty and wellness professionals in France, Belgium and Germany who want marketplace exposure without paying commission for it',
      toneAndVoice: 'Local and professional, built on a no-commission message',
      keyMessages: [
        '60,000 businesses and 15 million users',
        'No commission and no commitment',
        'NF525-certified till software',
        '10 million+ bookings a month (February 2024)',
        'France, Belgium and Germany',
      ],
    },

    daisyAdvantages: [
      'AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English; Planity\'s AI assistant answers phone calls',
      'Arabic and English, live in all six GCC countries; Planity operates in France, Belgium and Germany',
      'Cashback rewards for customers; Planity offers loyalty cards and discounts',
      'Published prices; Planity prices on request',
      'GCC compliance and local payment methods',
    ],

    daisySwitchingReasons: [
      'You operate in the GCC',
      'You need an Arabic interface',
      'You want an AI receptionist on WhatsApp and Instagram',
      'You want cashback rewards for customer retention',
      'You want to see prices before talking to sales',
    ],

    competitorStrengths: [
      'Large consumer marketplace: 15 million users and 60,000 businesses',
      'No commission on bookings, no setup or maintenance fees and no commitment',
      'More than 10 million bookings a month (February 2024) and 500 million+ since launch',
      'NF525-certified till, its own card terminal and Tap to Pay',
      'Consumer app rated 4.9 on the App Store and 4.8 on Google Play',
      'AI phone assistant that answers calls and books appointments, launched July 2026',
    ],

    competitorWeaknesses: [
      'Operates in France, Belgium and Germany',
      'No Arabic interface published',
      'Prices on request',
      'SMS marketing campaigns cost €0.07 excl. VAT per SMS',
      'Loyalty program requires the till software',
      'No WhatsApp or Instagram AI listed',
    ],

    faq: [
      {
        question: 'How does Planity compare to Daisy?',
        answer:
          'Planity leads beauty booking in France, with 60,000 businesses in France, Belgium and Germany and no commission on bookings, and it launched an AI phone assistant in July 2026. Daisy is built for the GCC. Its AI receptionist works on WhatsApp, Instagram and the booking site in Arabic and English, it adds cashback rewards, and it is live in all six GCC countries.',
      },
      {
        question: 'Does Planity charge commission on bookings like other marketplaces?',
        answer:
          'No. Planity says its subscriptions carry no commission on bookings and no setup or maintenance fees, with no commitment. It does not publish subscription prices; a Planity adviser recommends a plan. Daisy also takes no per-booking commission, and adds AI, cashback and full business management on top.',
      },
      {
        question: 'Does Planity work outside of France or support Arabic?',
        answer:
          'Planity operates in France, Belgium and Germany, where it counts 10,000 businesses outside France (Maddyness, July 2026). Its apps are listed in French, German and English, and it publishes no Arabic interface. Daisy has native Arabic and English, is live in all six GCC countries and integrates local payment methods.',
      },
      {
        question: 'Does Planity have any AI features?',
        answer:
          'Yes. In July 2026 Planity launched an AI phone assistant that answers incoming calls, offers available slots, handles common requests and adds bookings to the agenda, including outside opening hours, as reported by Maddyness. Its custom website offer includes an AI-powered blog. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site rather than the phone, in Arabic and English, alongside AI marketing and analytics.',
      },
      {
        question: 'How difficult is it to migrate from Planity to Daisy?',
        answer:
          'Daisy\'s onboarding team transfers client databases, appointment history and business profiles. It matters most for a business moving from European into Middle Eastern markets.',
      },
      {
        question: 'How good is Planity\'s mobile app compared to Daisy?',
        answer:
          'Planity\'s consumer app is rated 4.9 on the App Store in France from 773,000+ ratings and 4.8 on Google Play from 403,000+ reviews, and businesses run their salon from the Planity Pro app. Daisy\'s app carries both the consumer marketplace and a full business management suite, with AI, POS, inventory and marketing.',
      },
      {
        question: 'Can Planity support a multi-location beauty business?',
        answer:
          'Planity lists management tools for each establishment: daily revenue, occupancy by day and by team member, monthly statistics and stock control. Daisy provides centralized multi-branch dashboards, staff scheduling across locations, one inventory and consolidated reporting, aimed at a growing chain.',
      },
      {
        question: 'What customer support does Planity offer and is it available in English?',
        answer:
          'Planity says it offers personalized support six days a week, and its business site is in French and German. Daisy supports customers in Arabic and English with dedicated onboarding, which matters in the GCC and anywhere else running in more than one language.',
      },
      {
        question: 'Does Planity integrate with other business tools and payment systems?',
        answer:
          'Planity connects its booking platform to its NF525-certified till, its own card terminal and Tap to Pay, a custom website or a booking module for an existing site, and accounting exports, all built for France, Belgium and Germany. Daisy connects to local GCC payment methods, Google Calendar and marketing tools, and includes a marketplace.',
      },
    ],

    lastResearched: '2026-10-09',
    notes:
      'Market leader in France, also in Belgium and Germany, with a commission-free subscription model. Reported profitability and an AI phone assistant in July 2026 (Maddyness). No Arabic and no GCC presence published.',
  },
};

// ---------------------------------------------------------------------------
// I18n-wrapped export — lazily resolved to avoid circular import
// ---------------------------------------------------------------------------

export function getTier2CompetitorsI18n(): I18nContent<Record<string, CompetitorData>> {
  const { tier2CompetitorsAr } = require('./tier2Data.ar') as { tier2CompetitorsAr: Record<string, CompetitorData> };
  return { en: tier2Competitors, ar: tier2CompetitorsAr };
}
