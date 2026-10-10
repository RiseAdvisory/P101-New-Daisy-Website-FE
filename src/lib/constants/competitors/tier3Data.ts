// =============================================================================
// WS1: Tier 3 Competitors. Light Research
// Last updated: March 2026
// =============================================================================

import type { CompetitorData } from './competitorData';
import type { I18nContent } from '../i18n';

export const tier3Competitors: Record<string, CompetitorData> = {
  // ---------------------------------------------------------------------------
  // 13. Square Appointments
  // Sources, all read 2026-10-09:
  //   squareup.com/us/en/appointments/pricing (plans, US processing rates,
  //     "There is no employee limit", Square AI "currenty in beta" on all three
  //     plans, multi-location on Plus and Premium, support hours)
  //   squareup.com/us/en/appointments (customer profiles; Square Go is "our
  //     free marketplace app")
  //   squareup.com/us/en/appointments/square-go, squareup.com/us/en/ai,
  //   squareup.com/us/en/appointments/scheduling-features/square-assistant
  //   Block, Inc. FY2025 Form 10-K (sec.gov): "no formal headquarters";
  //     principal executive office in Oakland, CA; Square started February 2009
  // ---------------------------------------------------------------------------
  'square-appointments': {
    slug: 'square-appointments',
    name: 'Square Appointments',
    website: 'https://squareup.com/us/en/appointments',
    tier: 3,
    description:
      'Booking and payments software from Square, part of Block, Inc., built on the Square point-of-sale system and sold to beauty, health, fitness and other appointment businesses. Square Free has no monthly fee.',
    founded: '2009',
    // Block's principal executive office (it reports no formal headquarters).
    headquarters: 'Oakland, CA, USA',

    features: {
      onlineBooking: 2,
      posAndPayments: 3,
      clientManagement: 2, // automatic customer profiles with preferences, documents and images
      staffManagement: 2, // unlimited staff calendars on every plan; shifts and payroll
      marketingAndCrm: 2, // email and text marketing, points-based loyalty
      inventoryManagement: 2,
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 2, // Square Go, a free marketplace app
      aiCapabilities: 2, // Square AI (beta) on every plan; Square Assistant answers client texts
      brandingAndWhiteLabel: 1, // free booking site and Square Online websites
    },

    pricing: {
      hasFreePlan: true,
      startingPrice: 'Free (paid from $49/mo per location)',
      startingPriceNumeric: 0,
      tiers: [
        { name: 'Square Free', price: '$0/mo', priceNumeric: 0, billingCycle: 'monthly', features: ['Unlimited staff calendars', 'Online booking site', 'Appointment reminders'] },
        { name: 'Square Plus', price: '$49/mo per location', priceNumeric: 49, billingCycle: 'monthly', features: ['Multi-location management', 'Waitlist', 'Email and text marketing'] },
        { name: 'Square Premium', price: '$149/mo per location', priceNumeric: 149, billingCycle: 'monthly', features: ['Resource management', 'Lowest processing rates', '24/7 phone support'] },
      ],
      transactionFees: 'Square Free (US): 2.6% + 15¢ in person, 3.3% + 30¢ online',
      hiddenCosts: [
        'Square Plus text marketing: 500 texts a month included, then 3¢ per text (US)',
        'Keyed or card-on-file payments: 3.5% + 15¢ (US)',
        'Cards issued outside the US: an extra 1.5%',
        'Square hardware from $59 (US)',
      ],
      pricingModel: 'per-location',
      pricingPageUrl: 'https://squareup.com/us/en/appointments/pricing',
      lastVerified: '2026-10-09',
    },

    // Capterra, Wayback Machine snapshot of capterra.com/p/170263/Square-Appointments/
    // taken 2026-09-12 (Capterra blocks automated reads): 4.5 from 262 reviews.
    reviews: [
      { platform: 'Capterra', rating: 4.5, reviewCount: 262, url: 'https://www.capterra.com/p/170263/Square-Appointments/' },
    ],

    // Square's region list (read 2026-10-09): Australia, Canada, France, Ireland,
    // Japan, Spain, the UK and the US. No GCC country and no Arabic site.
    gccPresence: {
      hasArabicUI: false,
      arabicQuality: 'none',
      gccCountries: [],
      localCompliance: false,
      localPaymentMethods: false,
      localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: true, hasSmartScheduling: false,
      hasAiMarketing: true, hasAiAnalytics: true, hasAiPricing: false,
      aiDescription: 'Square AI (beta) is included on Square Free, Plus and Premium. Owners can ask it about their business data, and it drafts content such as marketing campaigns. Square Assistant answers client texts 24/7 so clients can confirm, reschedule or cancel. As of October 2026, Square does not list an AI receptionist of its own that takes new bookings.',
    },

    daisyAdvantages: [
      'Built for beauty and wellness only, where Square Appointments is sold to many kinds of appointment business',
      'An AI receptionist that takes new bookings on WhatsApp, Instagram and the booking site, where Square Assistant confirms, reschedules and cancels by text',
      'Cashback rewards for clients, where Square Loyalty uses points',
      'Native Arabic/English, where Square\'s published sites show no Arabic',
      'Complete beauty business management',
      'GCC compliance and local payments',
    ],
    daisySwitchingReasons: [
      'Need beauty-specific features beyond basic scheduling',
      'Want AI receptionist for after-hours bookings',
      'Need Arabic support and GCC compliance',
      'Want cashback rewards that bring clients back',
    ],
    competitorStrengths: [
      'Square Free plan with no monthly fee and unlimited staff calendars',
      'Payments, point-of-sale hardware and booking in one system',
      'Square Go, a free marketplace app where clients can find and book you',
      'Square AI (beta) on every plan',
      '24/7 phone support on Square Premium',
    ],
    competitorWeaknesses: [
      'Sold to many kinds of appointment business, not built only for beauty',
      'No Arabic interface or GCC country on Square\'s published region list (October 2026)',
      'Multi-location management needs Square Plus or Premium, billed per location',
      'No text marketing on Square Free',
      'No AI receptionist for new bookings listed by Square (October 2026)',
    ],

    faq: [
      { question: 'How does Square Appointments compare to Daisy?', answer: 'Square Appointments is the booking side of Square\'s point-of-sale system. It is sold to beauty, health, fitness and other appointment businesses, and comes with a free plan and Square Go, a free marketplace app. Daisy is built for beauty and wellness only. Its AI receptionist books clients on WhatsApp, Instagram and the booking site in Arabic and English, and it adds cashback rewards for clients. Square\'s strength is payments and hardware.' },
      { question: 'Is Square Appointments free?', answer: 'Square Free has no monthly fee and includes unlimited staff calendars; you pay processing fees on each payment, which in the US are 2.6% + 15¢ in person and 3.3% + 30¢ online. Square Plus costs $49 a month per location and Square Premium $149 a month per location, both with lower processing rates (Square\'s US pricing page, October 2026).' },
      { question: 'What does Square Appointments cost beyond the subscription?', answer: 'Square publishes its extra costs. In the US, processing on Square Free is 2.6% + 15¢ in person and 3.3% + 30¢ online, and on Square Plus 2.5% + 15¢ and 2.9% + 30¢. Keyed or card-on-file payments are 3.5% + 15¢, and cards issued outside the US add 1.5%. Square Plus includes 500 marketing texts a month, then 3¢ per text, and Square hardware starts at $59.' },
      { question: 'Can I migrate my client data from Square Appointments to Daisy?', answer: 'Yes. Daisy walks you through the migration, moving client records, appointment history and contact details across from Square Appointments, so no client relationship gets lost on the way.' },
      { question: 'Does Square Appointments work in Arabic or support GCC countries?', answer: 'Square\'s published region list covers Australia, Canada, France, Ireland, Japan, Spain, the UK and the US, and none of those sites is in Arabic (October 2026). Daisy runs natively in Arabic and English with full GCC compliance across all six countries.' },
      { question: 'Does Square Appointments have AI features like an AI receptionist?', answer: 'Yes, though not an AI receptionist. Square AI (beta), on every plan, answers owners\' questions about their business data and drafts content. Square Assistant replies to client texts 24/7 so clients can confirm, reschedule or cancel. As of October 2026, Square does not list an AI receptionist of its own that takes new bookings. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments while the salon is shut.' },
      { question: 'Is Square Appointments good enough for a multi-location beauty business?', answer: 'Square Plus ($49 a month per location) and Square Premium ($149 a month per location) both include multi-location management, and Premium adds resource management for rooms, chairs and stations. Daisy was built for multi-location beauty businesses, with centralized management, AI and an optional customer marketplace.' },
      { question: 'How does Square Appointments mobile app compare to Daisy?', answer: 'Square\'s app covers appointments, payments and client profiles, and works with Square\'s card readers and terminals. Daisy\'s covers the whole salon: the AI receptionist, live analytics, client messaging and optional marketplace listing, designed for a beauty professional working between appointments.' },
      { question: 'What kind of customer support does Square Appointments offer?', answer: 'Every Square plan includes chat and email support. Phone support runs 6am to 6pm PT, Monday to Friday, for the first 90 days on Square Free and ongoing on Square Plus, and 24/7 on Square Premium. Daisy\'s onboarding and support come from people who understand how a salon or spa runs, with local GCC support in Arabic and English.' },
      { question: 'Can Square Appointments help me get new clients like Daisy can?', answer: 'Yes, in part. Square Go is Square\'s free marketplace app, and eligible Square Appointments businesses get a profile on it. Square also offers email and text marketing and a points-based loyalty program. Daisy puts cashback rewards, AI-powered marketing and an optional consumer marketplace together to bring new clients in.' },
    ],

    lastResearched: '2026-10-09',
  },

  // ---------------------------------------------------------------------------
  // 14. Mangomint
  // Sources, all read 2026-10-09:
  //   mangomint.com/pricing ("Monthly price is $120 per location and $10 per
  //     user", add-ons, processing rates, "No contracts")
  //   mangomint.com/llms.txt ("The company was founded in 2017")
  //   store.mangomint.com ("Canada Front Desk Bundle", CAD currency)
  //   mangomint.com/about-us (no headquarters published: "A global team of
  //     100+ people, across 6 countries")
  // ---------------------------------------------------------------------------
  mangomint: {
    slug: 'mangomint',
    name: 'Mangomint',
    website: 'https://www.mangomint.com',
    tier: 3,
    description:
      'Salon and spa software founded in 2017, known for its clean design and automation. It serves businesses in the US and Canada and charges $120 per location plus $10 per user each month.',
    founded: '2017',

    features: {
      onlineBooking: 3,
      posAndPayments: 2,
      clientManagement: 2,
      staffManagement: 3,
      marketingAndCrm: 2, // Campaigns, Automated Flows, Offers (marketing add-on from $30/mo)
      inventoryManagement: 2, // product catalog, stock levels, purchase orders
      reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 0, // no consumer marketplace on its published pages
      aiCapabilities: 0, // no AI features on its published pages as of 2026-10-09
      brandingAndWhiteLabel: 1,
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: 'From $120/mo per location + $10 per user',
      startingPriceNumeric: 120,
      tiers: [
        { name: 'Per location', price: '$120/mo each', priceNumeric: 120, billingCycle: 'monthly', features: ['Booking', 'Calendar', 'POS', 'Client management'] },
        { name: 'Per user', price: '$10/mo each', priceNumeric: 10, billingCycle: 'monthly', features: ['Added for every user on the account'] },
      ],
      transactionFees: '2.45% + 15¢ in person, 2.90% + 30¢ for virtual payments',
      hiddenCosts: [
        'Phone add-on: $70/mo per line',
        'Marketing add-on: from $30/mo for 3,500 credits',
        'Payroll add-on: $50/mo + $8 per worker',
      ],
      pricingModel: 'hybrid',
      pricingPageUrl: 'https://www.mangomint.com/pricing/',
      lastVerified: '2026-10-09',
    },

    // Capterra, Wayback Machine snapshot of capterra.com/p/187593/Mangomint/
    // taken 2026-09-21 (Capterra blocks automated reads): 5.0 from 345 reviews.
    reviews: [
      { platform: 'Capterra', rating: 5.0, reviewCount: 345, url: 'https://www.capterra.com/p/187593/Mangomint/' },
    ],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'Mangomint publishes workflow automation such as Automated Flows, Express Booking and an intelligent waitlist. Its published pages do not list AI features as of October 2026.',
    },

    daisyAdvantages: [
      'An AI receptionist and chatbot, where Mangomint\'s published pages list no AI features',
      'An optional consumer marketplace, where Mangomint lists none',
      'Plans that include 5, 10 or 15 team members, where Mangomint adds $10 per user',
      'Arabic/English support, where Mangomint\'s published pages show no Arabic',
      'Cashback-driven customer acquisition',
      'GCC compliance',
    ],
    daisySwitchingReasons: [
      'Want AI features that Mangomint does not list', 'Need Arabic/GCC support',
      'Want the option of a marketplace for customer discovery', 'Need AI receptionist',
    ],
    competitorStrengths: [
      'Capterra rating of 5.0 from 345 reviews (September 2026)',
      'Clean, modern design',
      'Automated Flows, Express Booking and a virtual waiting room',
      'Staff management with commissions, permissions and a payroll add-on',
      'No contracts, free onboarding and free data transfer',
    ],
    competitorWeaknesses: [
      'Cost rises with each location and user ($120 per location + $10 per user a month)',
      'Serves the US and Canada; no Arabic interface or GCC presence listed (October 2026)',
      'No consumer marketplace listed on Mangomint\'s published pages',
      'No AI features listed on Mangomint\'s published pages (October 2026)',
      'Marketing messages use credits from the marketing add-on, from $30 a month',
    ],

    faq: [
      { question: 'How does Mangomint compare to Daisy?', answer: 'Mangomint is salon and spa software for the US and Canada, priced at $120 per location plus $10 per user each month, with a clean design and strong automation. Daisy adds an AI receptionist, cashback, an optional marketplace and Arabic support, and costs less.' },
      { question: 'How much does Mangomint cost?', answer: 'Mangomint charges $120 per location plus $10 per user each month, with no contracts. Optional add-ons are Phone at $70 a month per line, Marketing from $30 a month and Payroll at $50 a month plus $8 per worker. Card processing is 2.45% + 15¢ in person and 2.90% + 30¢ for virtual payments (Mangomint pricing page, October 2026). Daisy offers more, including the AI receptionist and acquisition tools, for less.' },
      { question: 'Can I switch from Mangomint to Daisy without losing my data?', answer: 'Yes. Daisy moves your client records, appointment history, staff schedules and service menus across from Mangomint, and handles the transition so the business never goes offline.' },
      { question: 'Does Mangomint support Arabic or work in the Middle East?', answer: 'Mangomint\'s published pages show customers in the US and Canada, with Canadian card-reader bundles priced in Canadian dollars, and no Arabic interface or Middle East presence as of October 2026. Daisy runs natively in Arabic and English with support built for the Gulf, and is live in all six GCC countries.' },
      { question: 'Does Mangomint have an AI receptionist or AI features?', answer: 'Mangomint\'s published pages list workflow automation, such as Automated Flows and Express Booking, but no AI receptionist, chatbot or AI marketing as of October 2026. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments on its own.' },
      { question: 'Is Mangomint a good fit for my salon?', answer: 'Mangomint suits salons and spas in the US and Canada that want clean operations, automation and no contracts, at $120 per location plus $10 per user. Its published pages list no consumer marketplace or AI features. If you want an AI receptionist and cashback, Daisy includes them, and its marketplace is an option in selected countries.' },
      { question: 'How does Mangomint\'s mobile app compare to Daisy?', answer: 'Mangomint\'s app is well designed and built around scheduling and operations. Daisy\'s adds the AI receptionist, optional marketplace listing, live acquisition analytics and Arabic and English throughout, which takes it past operations into growth.' },
      { question: 'What integrations does Mangomint offer compared to Daisy?', answer: 'Mangomint lists integrations including Shopify, QuickBooks payroll sync and the telehealth tools Doxy.me and Docovia, and sells Phone, Marketing and Payroll as add-ons. Daisy has payments, marketing, CRM and acquisition built into one platform, along with GCC payment methods such as mada and Knet.' },
      { question: 'Does Mangomint help me get new customers or just manage existing ones?', answer: 'Mangomint offers campaigns, automated flows and offers for the clients you already have, using the marketing add-on from $30 a month. Its published pages list no consumer marketplace or cashback. Daisy includes a cashback program and AI-powered marketing to bring new customers in, plus an optional consumer marketplace in selected countries.' },
    ],

    lastResearched: '2026-10-09',
  },

  // ---------------------------------------------------------------------------
  // 15. Phorest
  // Sources, all read 2026-10-09:
  //   phorest.com/ae ("Premium Salon & Med Spa Software | Phorest UAE",
  //     enquiriesuae@phorest.com, Dubai and Abu Dhabi customers)
  //   phorest.com/ae/features/ai-features ("Front Desk AI handles scheduling
  //     requests and FAQs via SMS & Whatsapp"; Cheat Sheet AI; Optimised
  //     Scheduling; Ads Manager AI; Insights AI "Coming later this year")
  //   phorest.com/gb/pricing, /us/pricing, /ae/pricing (every plan is
  //     "Request a quote"; Front Desk AI under "Add to any plan"; UK SMS rates)
  //   phorest.com/ae/contact (offices: Dublin head office, UK, US, Canada,
  //     Australia, Germany, Finland); phorest.com FAQ ("founded in Ireland in 2003")
  // ---------------------------------------------------------------------------
  phorest: {
    slug: 'phorest',
    name: 'Phorest',
    website: 'https://www.phorest.com',
    tier: 3,
    description:
      'Salon, spa and aesthetic clinic software founded in Dublin in 2003, built around client retention, marketing and loyalty. Phorest says more than 12,000 businesses use it. It has offices in Ireland, the UK, the US, Canada, Australia, Germany and Finland, and a UAE country site.',
    founded: '2003',
    headquarters: 'Dublin, Ireland',

    features: {
      onlineBooking: 2, posAndPayments: 2, clientManagement: 3, staffManagement: 2,
      marketingAndCrm: 3, inventoryManagement: 2, reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 1, // Reserve with Google and Ads Manager; no consumer marketplace listed
      aiCapabilities: 2, // Front Desk AI (SMS and WhatsApp), Cheat Sheet AI, Ads Manager AI
      brandingAndWhiteLabel: 2, // branded booking app for iOS and Android
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: 'Pricing on request',
      tiers: [
        { name: 'Starter', price: 'Pricing on request', billingCycle: 'custom', features: ['Booking', 'Automated SMS and email reminders', 'Point of sale'] },
        { name: 'Grow', price: 'Pricing on request', billingCycle: 'custom', features: ['Reconnect SMS', 'Online Reputation Manager', 'Digital consultation forms'] },
        { name: 'Ultimate', price: 'Pricing on request', billingCycle: 'custom', features: ['Branded booking app', 'Digital loyalty programme', 'Reserve with Google'] },
        { name: 'Elite', price: 'Pricing on request', billingCycle: 'custom', features: ['2-Way SMS', 'Phorest Ads Manager', 'Memberships'] },
      ],
      hiddenCosts: [
        'UK SMS: 9.5p per message on Starter, 8.2p on Grow, 7p on Ultimate; 500 free a month on Elite',
        'Front Desk AI is an add-on, priced on request',
      ],
      pricingModel: 'hybrid',
      pricingPageUrl: 'https://www.phorest.com/gb/pricing/',
      lastVerified: '2026-10-09',
    },

    // Capterra, Wayback Machine snapshot of capterra.com/p/113530/Phorest-Salon-Software/
    // taken 2026-09-16 (Capterra blocks automated reads): 4.8 from 431 reviews.
    reviews: [{ platform: 'Capterra', rating: 4.8, reviewCount: 431, url: 'https://www.capterra.com/p/113530/Phorest-Salon-Software/' }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: ['UAE'],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: true, hasAiChatbot: true, hasSmartScheduling: true,
      hasAiMarketing: true, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'Front Desk AI, an add-on, answers SMS and WhatsApp messages 24/7, handles booking, rescheduling and rebooking requests and common questions, and passes complex conversations to staff. Cheat Sheet AI summarises each client\'s history for the stylist. Phorest Ads Manager uses AI to build Facebook and Instagram audiences and write ad copy, and Optimised Scheduling reduces gaps in the book. Phorest says Insights AI is coming later this year.',
    },

    daisyAdvantages: [
      'AI receptionist on WhatsApp, Instagram and the booking site, where Phorest\'s Front Desk AI covers SMS and WhatsApp', 'Arabic/English, where Phorest\'s published pages show no Arabic',
      'Optional consumer marketplace, where Phorest lists none', 'Live in all six GCC countries, where Phorest has a UAE site',
      'Cashback rewards vs traditional loyalty points',
    ],
    daisySwitchingReasons: ['Need Arabic/GCC support', 'Want an AI receptionist on Instagram as well as WhatsApp', 'Want the option of a marketplace for customer discovery'],
    competitorStrengths: [
      'Client management, marketing and Treatcard loyalty in one system',
      'Front Desk AI on SMS and WhatsApp, plus Cheat Sheet AI',
      'Branded booking app for iOS and Android',
      'Free data migration and free training for life',
      'Established in 2003, with offices in seven countries',
    ],
    competitorWeaknesses: [
      'Prices are quoted on request, so costs cannot be compared up front',
      'No Arabic interface listed on Phorest\'s published pages (October 2026)',
      'Front Desk AI is an add-on and lists SMS and WhatsApp, not Instagram',
      'No consumer marketplace listed on Phorest\'s published pages',
      'SMS is charged per message on the lower UK plans',
    ],

    faq: [
      { question: 'How does Phorest compare to Daisy?', answer: 'Phorest is strong on client management, marketing and Treatcard loyalty, and sells Front Desk AI for SMS and WhatsApp. It has offices in Ireland, the UK, the US, Canada, Australia, Germany and Finland, and a UAE country site. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site in Arabic and English, and Daisy adds cashback and an optional consumer marketplace.' },
      { question: 'What does Phorest cost?', answer: 'Phorest names its plans (Starter, Grow, Ultimate and Elite in the UK) but quotes prices on request. Its UK pricing page lists SMS at 9.5p per message on Starter, 8.2p on Grow and 7p on Ultimate, and 500 free SMS a month on Elite. Daisy publishes its plan prices, and every plan includes WhatsApp and email notifications.' },
      { question: 'Can I move my client database from Phorest to Daisy?', answer: 'Yes. Daisy migrates Phorest users itself, bringing across client records, loyalty points history, appointment data and marketing preferences, with the onboarding team handling the transition.' },
      { question: 'Does Phorest work in Arabic or support salons in the GCC?', answer: 'Phorest runs a UAE country site (phorest.com/ae) and features salons in Dubai and Abu Dhabi. Its published pages do not show an Arabic interface as of October 2026. Daisy runs natively in Arabic and English with full GCC compliance across all six countries.' },
      { question: 'Does Phorest have AI features like Daisy?', answer: 'Yes. Front Desk AI, an add-on, answers SMS and WhatsApp messages 24/7 and handles booking, rescheduling and rebooking requests. Cheat Sheet AI summarises client history before each appointment, and Phorest Ads Manager uses AI for audiences and ad copy. The difference is channels and language: Daisy\'s 24/7 receptionist works on WhatsApp, Instagram and the booking site, in Arabic and English.' },
      { question: 'How does Phorest\'s loyalty program compare to Daisy\'s cashback?', answer: 'Phorest\'s Treatcard is a points programme: clients collect points and spend them on services they would not normally buy. Daisy\'s cashback rewards keep clients coming back. For a business that joins the optional marketplace, they also pull in new ones, so retention and acquisition run on the same mechanism.' },
      { question: 'Is Phorest good for salons outside the UK and Ireland?', answer: 'Phorest has offices in Ireland, the UK, the US, Canada, Australia, Germany and Finland, plus a UAE country site, and says more than 12,000 businesses use it. Its published pages show no Arabic interface. Daisy works across markets and is strongest in the Gulf.' },
      { question: 'How does Phorest\'s mobile app compare to Daisy?', answer: 'PhorestGo lets owners and staff manage bookings, clients, stock and marketing from a phone, and Phorest can build a salon its own branded booking app. Daisy\'s adds the AI receptionist, optional marketplace listing, cashback tracking and full Arabic and English support for owners and their clients alike.' },
      { question: 'What customer support does Phorest offer compared to Daisy?', answer: 'Phorest\'s support team is reachable by phone or chat, and Phorest offers free training for life and a business advisor. Its UAE pricing page lists phone support from 9am to 6pm, Monday to Saturday. Daisy provides beauty industry support from local GCC teams, with Arabic-speaking representatives and onboarding built for the Middle East.' },
    ],

    lastResearched: '2026-10-09',
  },

  // ---------------------------------------------------------------------------
  // 16. Timely
  // Sources, all read 2026-10-09:
  //   gettimely.com/pricing (prices load from /dist/common.bundle.js; US:
  //     Base $9 solo, Build $26 + $24 per extra staff, Elevate $39 + $29,
  //     Innovate $47 + $36, flat $241 / $300 for 8 to 19 staff; region list;
  //     support rows; SMS allowances and rates; "SMS is included in all
  //     countries except for the UAE, Ghana, Saudi Arabia and Qatar")
  //   gettimely.com/features/ai-smart-automations ("Textie Bestie, Timely's AI
  //     SMS generator")
  //   gettimely.com/ai-llm-info-page ("Launch year: 2011", "Headquarters:
  //     Wellington, New Zealand", "Parent group: EverCommerce")
  // ---------------------------------------------------------------------------
  timely: {
    slug: 'timely',
    name: 'Timely',
    website: 'https://www.gettimely.com',
    tier: 3,
    description: 'Booking and payments software for hair and beauty professionals, launched in New Zealand in 2011 and now part of EverCommerce. Timely prices per staff member and publishes prices for the US, Canada, the UK, Ireland, Europe, Australia, New Zealand and the rest of the world.',
    founded: '2011',
    headquarters: 'Wellington, New Zealand',

    features: {
      onlineBooking: 2, posAndPayments: 2, clientManagement: 2, staffManagement: 2,
      marketingAndCrm: 2, inventoryManagement: 2, reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 0, // no consumer marketplace on its published pages
      aiCapabilities: 1, // Textie Bestie, an AI SMS generator
      brandingAndWhiteLabel: 1, // free customisable mini-website, custom confirmation page
    },

    pricing: {
      hasFreePlan: false,
      startingPrice: 'From $9/mo (Base, one staff member)',
      startingPriceNumeric: 9,
      tiers: [
        { name: 'Base', price: '$9/mo, one staff member only', priceNumeric: 9, billingCycle: 'monthly', features: ['Solo professionals', 'New customers, for a limited time'] },
        { name: 'Build', price: '$26/mo, then $24 per extra staff', priceNumeric: 26, billingCycle: 'monthly', features: ['Booking', 'Payments', 'Stock'] },
        { name: 'Elevate', price: '$39/mo, then $29 per extra staff', priceNumeric: 39, billingCycle: 'monthly', features: ['Everything in Build', 'Consultation forms', 'Targeted SMS campaigns'] },
        { name: 'Innovate', price: '$47/mo, then $36 per extra staff', priceNumeric: 47, billingCycle: 'monthly', features: ['Everything in Elevate', 'Automatic consultation forms', 'Dedicated SMS number'] },
      ],
      hiddenCosts: [
        'SMS beyond the monthly allowance: 5¢ each (US)',
        'Targeted SMS campaigns: 5¢ per SMS on Elevate and Innovate (US)',
        'Card processing fees on Timely payments',
      ],
      pricingModel: 'per-staff',
      pricingPageUrl: 'https://www.gettimely.com/pricing/',
      lastVerified: '2026-10-09',
    },

    // Capterra, Wayback Machine snapshot of capterra.com/p/142756/Timely/
    // taken 2026-09-21 (Capterra blocks automated reads): 4.7 from 711 reviews.
    reviews: [{ platform: 'Capterra', rating: 4.7, reviewCount: 711, url: 'https://www.capterra.com/p/142756/Timely/' }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: true, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'Textie Bestie, Timely\'s AI SMS generator, drafts client messages and campaign texts. Timely\'s published pages do not list an AI receptionist or AI chat assistant as of October 2026.',
    },

    daisyAdvantages: ['AI receptionist, where Timely\'s AI drafts SMS messages', 'Plans that include 5, 10 or 15 team members, where Timely prices per staff member', 'Arabic/GCC, where Timely\'s published pages show neither', 'Cashback and an optional marketplace, where Timely lists neither'],
    daisySwitchingReasons: ['Want 5 or more team members covered by one plan price', 'Need Arabic/GCC support', 'Want an AI receptionist that books clients', 'Want the option of a marketplace'],
    competitorStrengths: [
      'Clean, modern interface',
      'Capterra rating of 4.7 from 711 reviews (September 2026)',
      'No contracts: you pay month by month',
      'Booking, payments, consultation forms and stock in one system',
      'Base plan at $9 a month for solo professionals (new customers)',
    ],
    competitorWeaknesses: [
      'Priced per staff member up to seven staff, so the bill rises as the team grows',
      'No AI receptionist listed on Timely\'s published pages (October 2026)',
      'No consumer marketplace listed on Timely\'s published pages',
      'No Arabic interface or GCC presence listed, and Timely\'s SMS is not available in the UAE, Saudi Arabia or Qatar',
      'Phone support is listed only for Australia, New Zealand, the UK and Ireland',
    ],

    faq: [
      { question: 'How does Timely compare to Daisy?', answer: 'Timely is booking and payments software for hair and beauty professionals, launched in New Zealand in 2011 and now part of EverCommerce. It is priced per staff member, and its AI tool, Textie Bestie, drafts SMS messages. Daisy adds an AI receptionist, cashback, an optional marketplace, plans that include 5, 10 or 15 team members, and Arabic and GCC support.' },
      { question: 'How expensive does Timely get as I add more staff?', answer: 'In the US, Build costs $26 a month for one staff member plus $24 for each extra staff member, up to seven. Elevate is $39 plus $29 per extra staff member, and Innovate $47 plus $36. Teams of 8 to 19 pay a flat $241 a month on Elevate or $300 on Innovate. A five-person team on Innovate pays $191 a month. Daisy\'s Basic plan includes 5 team members, and each extra calendar is $10 a month.' },
      { question: 'What does Timely cost beyond the subscription?', answer: 'Timely publishes its extra costs. Each plan includes a monthly SMS allowance per staff member (in the US, 100 on Build, 200 on Elevate and 350 on Innovate), and extra SMS cost 5¢ each in the US. Card processing fees apply to Timely payments and are listed in Timely\'s help centre. Daisy includes notifications and payment processing in its plan price.' },
      { question: 'Can I transfer my data from Timely to Daisy?', answer: 'Yes. Daisy migrates Timely users itself, moving client records, appointment history, staff schedules and service configurations, with the onboarding team handling the whole process.' },
      { question: 'Does Timely support Arabic or work in the Middle East?', answer: 'Timely publishes prices for the US, Canada, the UK, Ireland, Europe, Australia, New Zealand and the rest of the world. Its published pages show no Arabic interface, and its pricing FAQ says SMS is not available in the UAE, Saudi Arabia or Qatar (October 2026). Daisy runs natively in Arabic and English with support built for the Gulf, and is live in all six GCC countries.' },
      { question: 'Does Timely have any AI features?', answer: 'Timely\'s AI feature is Textie Bestie, an AI SMS generator that helps write client messages. Its published pages do not list an AI receptionist, chatbot or AI scheduling as of October 2026. Daisy\'s AI receptionist works 24/7, taking bookings, answering client questions and processing payments on its own.' },
      { question: 'How does Timely\'s mobile app compare to Daisy?', answer: 'Timely\'s app is well designed for scheduling and staff management. Daisy\'s adds the AI receptionist, optional marketplace listing, cashback management, live business analytics and full Arabic and English support.' },
      { question: 'Can Timely help me attract new clients to my salon?', answer: 'Timely offers a free mini-website, booking buttons for Instagram, Facebook and Messenger, Google review requests and targeted SMS campaigns. Its published pages list no consumer marketplace or cashback. Daisy includes a cashback program and AI-powered marketing to bring customers in, plus an optional consumer marketplace in selected countries.' },
      { question: 'What kind of customer support does Timely provide?', answer: 'Every Timely plan includes online support, a help centre, a chatbot and live messaging. Phone support appears on Timely\'s pricing page only for Australia, New Zealand, the UK and Ireland, included on Innovate and a paid add-on on other plans. Daisy provides multi-channel support, dedicated onboarding, Arabic-speaking staff and local GCC teams.' },
    ],

    lastResearched: '2026-10-09',
  },

  // ---------------------------------------------------------------------------
  // 17. Meevo
  // ---------------------------------------------------------------------------
  meevo: {
    slug: 'meevo',
    name: 'Meevo',
    website: 'https://www.meevo.com',
    tier: 3,
    description: 'A long-established US salon and spa management platform with a no-contracts policy and a thorough feature set aimed at mid-market salons.',
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
      aiDescription: 'No AI. Traditional salon software.',
    },

    daisyAdvantages: ['AI-powered platform vs traditional software', 'Arabic/GCC vs US-only', 'Cashback + optional marketplace', 'Modern tech stack'],
    daisySwitchingReasons: ['Want AI capabilities', 'Need Arabic/GCC support', 'Want customer acquisition tools', 'Want modern platform'],
    competitorStrengths: ['No contracts', 'Comprehensive feature set', 'Established brand', 'Good inventory management'],
    competitorWeaknesses: ['No AI', 'US-only', 'Dated interface', 'No marketplace', 'No Arabic/GCC'],

    faq: [
      { question: 'How does Meevo compare to Daisy?', answer: 'Meevo is an established US salon platform with solid features and no AI, no marketplace and no international support. Daisy brings an AI receptionist, cashback, an optional marketplace and Arabic and GCC compliance, on a modern platform.' },
      { question: 'What does Meevo cost beyond the $139 monthly subscription?', answer: 'Hardware costs extra, meaning POS terminals and card readers, as do the add-on features left out of the base plan. Setup fees and training can apply on top. Daisy publishes its pricing, needs no hardware and includes the features.' },
      { question: 'Can I move my salon data from Meevo to Daisy?', answer: 'Yes. Daisy moves client profiles, appointment history, product inventory, staff records and financial data across from Meevo, with the onboarding team handling the transition.' },
      { question: 'Does Meevo support Arabic or have any presence in the Middle East?', answer: 'No. Meevo serves the US only, with no Arabic interface, no GCC compliance and no Middle Eastern payment methods. Daisy runs natively in Arabic and English with support built for the Gulf, live in all six GCC countries.' },
      { question: 'Does Meevo have AI features like an AI receptionist?', answer: 'No. Meevo is traditional salon software: no AI receptionist, no chatbot, no smart scheduling. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments long after you have gone home.' },
      { question: 'Is Meevo\'s interface modern or does it feel outdated?', answer: 'Meevo dates from 2006, and although it has been updated since, users regularly describe the interface as dated next to newer platforms. Daisy is built on a modern stack, with an interface made for how beauty professionals work now.' },
      { question: 'How does Meevo\'s mobile app compare to Daisy?', answer: 'Meevo has a companion app for basic management tasks. Daisy\'s covers the whole salon: the AI receptionist, optional marketplace listing, live analytics and Arabic and English throughout, built for an owner who is rarely at a desk.' },
      { question: 'Does Meevo have a marketplace to help me find new clients?', answer: 'There is a thin listing directory, but nothing that works as a consumer marketplace. Daisy offers one as an option in selected countries, with cashback rewards, discovery features and AI-powered marketing to bring new clients to the salon.' },
      { question: 'What customer support does Meevo provide?', answer: 'Meevo offers US-based phone and email support in business hours. Daisy provides multi-channel support from people who know the beauty industry, with Arabic-speaking representatives and dedicated GCC teams for Middle East businesses.' },
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
    description: 'Europe\'s largest beauty marketplace, running across 13 countries and taking up to 35% commission on bookings.',
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

    daisyAdvantages: ['Complete platform vs marketplace-only', '0% commission on your existing clients', 'AI receptionist', 'Arabic/GCC', 'Full business management', 'Published plan prices'],
    daisySwitchingReasons: ['35% commission is unsustainable', 'Need full business management', 'Want AI', 'Need Arabic/GCC support'],
    competitorStrengths: ['Largest European beauty marketplace', '13 countries coverage', 'Consumer brand recognition'],
    competitorWeaknesses: ['Up to 35% commission', 'Very basic management tools', 'No AI', 'Low Capterra rating (3.8)', 'No GCC/Arabic', 'Marketplace dependency'],

    faq: [
      { question: 'How does Treatwell compare to Daisy?', answer: 'Treatwell is a European marketplace that takes up to 35% commission per booking and offers little in the way of management tools. Daisy is a complete platform with published plan prices, an AI receptionist and full business management. It takes no commission on your existing clients, and its marketplace commission applies only to new clients the marketplace brings.' },
      { question: 'How much does Treatwell actually cost salons with their commission model?', answer: 'Commission on marketplace bookings runs up to 35%. A salon putting $10,000/mo through Treatwell hands over as much as $3,500. Daisy charges a monthly subscription and no commission on bookings from your existing clients. Its marketplace is optional, and commission applies only to new clients it brings you.' },
      { question: 'Can I switch from Treatwell to Daisy and keep my clients?', answer: 'Yes. Daisy moves your client data across and helps you build direct relationships from there. On Treatwell the marketplace holds the customer relationship. On Daisy the client data is yours, and so is the line to them.' },
      { question: 'Does Treatwell work in Arabic or support salons in the Gulf?', answer: 'No. Treatwell runs in 13 European countries and nowhere else, with no Arabic interface, no GCC presence and no Middle Eastern payment methods. Daisy runs natively in Arabic and English with support built for the Gulf, live in all six GCC countries.' },
      { question: 'Does Treatwell have AI features?', answer: 'No. There is no AI receptionist, no chatbot and no smart scheduling. Treatwell is a marketplace listing with basic booking attached. Daisy offers a 24/7 AI receptionist, AI-powered marketing and smart scheduling.' },
      { question: 'Why does Treatwell have a lower rating on Capterra than other salon software?', answer: 'Treatwell sits at 3.8/5 on Capterra, below most competitors. The recurring complaints are the commission rates, the thin business management tools, and how little control salons have over pricing and their own client relationships. Daisy hands that control back, on published plan prices.' },
      { question: 'Does Treatwell offer real salon management tools or just a marketplace listing?', answer: 'Treatwell Connect does basic salon management, though most salons treat Treatwell as a marketplace listing and nothing else. For real management, they buy separate software anyway. Daisy covers booking, POS, CRM, marketing and AI in one place, with an optional marketplace.' },
      { question: 'How does Treatwell\'s app compare to Daisy for salon owners?', answer: 'The salon-facing app exists mainly to manage marketplace bookings. Daisy\'s covers the salon itself: the AI receptionist, direct client communication, analytics and Arabic and English throughout.' },
      { question: 'Is Treatwell sustainable for my salon long-term with 35% commission?', answer: 'Plenty of salons find the commission model stops working as they grow, since success itself raises the bill. On Daisy\'s monthly subscription, bookings from your existing clients carry no commission, and marketplace commission applies only to new clients the optional marketplace brings.' },
      { question: 'What support does Treatwell offer compared to Daisy?', answer: 'Partner salons get basic email support on European business hours. Daisy provides dedicated onboarding, multi-channel support, Arabic-speaking representatives and local GCC teams who know the beauty industry well.' },
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
    // Sources read 2026-10-09: acuityscheduling.com/pricing, /features,
    // /features/point-of-sale, /features/client-management,
    // /features/staff-management, /solutions/beauty, /about.
    description: 'A general-purpose online scheduling tool, owned by Squarespace since 2019 and used across many industries, beauty among them. It covers booking, payments, client profiles and staff calendars.',
    founded: '2006', // acuityscheduling.com/about: "Acuity was founded in 2006"
    headquarters: 'New York, USA (Squarespace)',

    features: {
      onlineBooking: 3, posAndPayments: 2, clientManagement: 2, staffManagement: 2,
      marketingAndCrm: 1, inventoryManagement: 0, reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 0, aiCapabilities: 1, brandingAndWhiteLabel: 2,
    },

    // acuityscheduling.com/pricing, read 2026-10-09. USD, before tax. "Pay
    // annually / Save 20%" vs "Pay monthly": Starter $16 / $20, Standard
    // $27 / $34, Premium $49 / $61 per month. Plans renamed from
    // Emerging / Growing / Powerhouse.
    pricing: {
      hasFreePlan: false,
      freeTrialDays: 7,
      startingPrice: '$16/mo billed annually',
      startingPriceNumeric: 16,
      tiers: [
        { name: 'Starter', price: '$20/mo, or $16/mo billed annually', priceNumeric: 16, features: ['1 calendar', 'Payments via Stripe, Square, PayPal or Venmo', 'Email reminders', 'Custom client forms'] },
        { name: 'Standard', price: '$34/mo, or $27/mo billed annually', priceNumeric: 27, features: ['Up to 6 calendars', 'Text reminders', 'Waitlist', 'Memberships, packages and gift certificates'] },
        { name: 'Premium', price: '$61/mo, or $49/mo billed annually', priceNumeric: 49, features: ['Up to 36 calendars', 'AI Booking Assistant', 'HIPAA BAA', 'Custom API and CSS'] },
      ],
      // /features/point-of-sale: "Acuity itself does not charge additional
      // fees for using payment features, but processing fees will apply based
      // on the payment processor you use (Stripe, Square, or PayPal)."
      hiddenCosts: [
        'Card processing fees from Stripe, Square or PayPal (Acuity adds no payment fee of its own)',
        'Prices exclude applicable taxes',
      ],
      pricingModel: 'flat',
      pricingPageUrl: 'https://acuityscheduling.com/pricing',
      lastVerified: '2026-10-09',
    },

    // Capterra product page, Wayback snapshot 2026-09-21: 4.8, 5,766 reviews.
    reviews: [{ platform: 'Capterra', rating: 4.8, reviewCount: 5766 }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    // /features: "Book smarter with the Booking Assistant, an AI chat bot that
    // get clients booked. (*Available on the Premium plan)". /solutions/beauty:
    // clients "describe it in plain language and walk away with a confirmed
    // appointment ... even after hours."
    aiCapabilities: {
      hasAiReceptionist: true, hasAiChatbot: true, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'AI Booking Assistant on the Premium plan: an AI chat bot that lets clients book in plain language, including after hours.',
    },

    daisyAdvantages: ['Built for beauty businesses rather than general scheduling', 'AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English', 'Inventory, marketing and cashback in the same platform', 'Cashback and an optional consumer marketplace', 'Arabic interface and GCC focus'],
    daisySwitchingReasons: ['Need beauty-specific features', 'Want an AI receptionist on WhatsApp and Instagram', 'Need inventory and marketing in the same system', 'Want customer acquisition, with the option of a marketplace'],
    competitorStrengths: ['Starter plan from $16/mo billed annually', 'Rated 4.8/5 from 5,700+ reviews on Capterra', 'In-person payments with card readers or Tap to Pay', 'Works with Squarespace or any other website'],
    competitorWeaknesses: ['General scheduling tool rather than beauty-specific software', 'AI Booking Assistant only on the Premium plan', 'No inventory tracking or consumer marketplace listed on its published pages as of October 2026', 'No Arabic interface published'],

    faq: [
      { question: 'How does Acuity compare to Daisy for salons?', answer: 'Acuity is general scheduling software, priced from $16/mo billed annually ($20 monthly) up to $49/mo billed annually ($61 monthly). It covers booking, payments, client profiles and staff calendars, and its Premium plan adds an AI Booking Assistant. Daisy is built for beauty businesses, with an AI receptionist on WhatsApp, Instagram and its booking site, cashback, an optional consumer marketplace, and Arabic and English as equals.' },
      { question: 'Does Acuity Scheduling have salon features?', answer: 'Acuity has a beauty and salon solution covering online booking, deposits, in-person payments by card reader or Tap to Pay, client profiles with notes and history, intake forms, packages, gift certificates and staff permissions. Inventory tracking isn\'t listed on Acuity\'s published pages as of October 2026. Daisy is built around how beauty businesses work, with inventory, marketing and cashback in the same platform.' },
      { question: 'What does Acuity cost beyond the subscription?', answer: 'Acuity publishes three plans in USD, before tax: Starter at $20/mo ($16/mo billed annually), Standard at $34/mo ($27/mo billed annually) and Premium at $61/mo ($49/mo billed annually). Acuity says it charges no setup, cancellation or support fees and no fee of its own on payments. Card processing fees come from the processor you connect: Stripe, Square or PayPal.' },
      { question: 'Can I migrate my booking data from Acuity to Daisy?', answer: 'Yes. Daisy moves client records, appointment history and booking preferences across from Acuity, with the onboarding team handling the transition.' },
      { question: 'Does Acuity Scheduling support Arabic or work in the Gulf region?', answer: 'Acuity doesn\'t publish an Arabic interface, GCC pricing or Gulf payment methods as of October 2026. It is owned by Squarespace, a US company. Daisy runs natively in Arabic and English and is live in all six GCC countries.' },
      { question: 'Does Acuity have any AI features for my salon?', answer: 'Yes. Acuity\'s Premium plan ($49/mo billed annually, $61 monthly) includes the AI Booking Assistant, a chat bot that lets clients describe what they want in plain language and book, including after hours. Daisy\'s AI receptionist works 24/7 on WhatsApp, Instagram and the booking site, in Arabic and English, and takes bookings, answers client questions and processes payments.' },
      { question: 'Why do so many businesses use Acuity?', answer: 'Acuity is rated 4.8/5 from more than 5,700 reviews on Capterra, and it serves businesses in many industries, from consultants to salons. Daisy is built for beauty businesses specifically, and adds an AI receptionist on WhatsApp and Instagram, cashback with an optional marketplace, and Arabic.' },
      { question: 'How does Acuity\'s Squarespace integration compare to what Daisy offers?', answer: 'Acuity integrates with Squarespace websites, and you can also embed it on any other site or use it without a website. Daisy adds an AI receptionist on WhatsApp and Instagram, POS, CRM and marketing tools in one platform, with an optional marketplace listing.' },
      { question: 'Can Acuity help me attract new clients or just manage bookings?', answer: 'Acuity offers coupons, gift certificates, packages, a waitlist and a booking page you can share by link or QR code. A consumer marketplace isn\'t listed on Acuity\'s published pages as of October 2026. Daisy includes cashback rewards and AI-powered marketing to bring new clients in, plus an optional consumer marketplace in selected countries.' },
      { question: 'What support does Acuity offer for beauty business owners?', answer: 'Acuity includes customer support on every plan and runs a help center, a user forum and webinars. Its Enterprise offering adds VIP account management. Daisy provides onboarding built for beauty businesses, Arabic-speaking support staff and local GCC teams who understand how a salon runs.' },
    ],

    lastResearched: '2026-10-09',
  },

  // ---------------------------------------------------------------------------
  // 20. SimplyBook.me
  // ---------------------------------------------------------------------------
  'simplybook-me': {
    slug: 'simplybook-me',
    name: 'SimplyBook.me',
    website: 'https://simplybook.me',
    tier: 3,
    // Sources read 2026-10-09: simplybook.me/en/pricing, /en/ai-voice-booking,
    // /en/ai-scheduling-assistant, /en/marketing-tools, /en/about-us,
    // /en/contact-us, help.simplybook.me (custom wording and translations).
    description: 'Booking software for many industries, built on more than 70 custom features that a business switches on as needed. It includes POS, marketing tools and AI booking options.',
    // /en/about-us: "In 2009, in Iceland, we set out to solve a simple but
    // frustrating problem ... In 2011, we rebranded to SimplyBook.me".
    founded: '2009',
    // /en/contact-us: "Nafpliou 28, Medical Court ... 3025, Limassol, Cyprus".
    headquarters: 'Limassol, Cyprus',

    features: {
      onlineBooking: 2, posAndPayments: 2, clientManagement: 2, staffManagement: 2,
      marketingAndCrm: 2, inventoryManagement: 0, reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 1, aiCapabilities: 2, brandingAndWhiteLabel: 2,
    },

    // US pricing from the Wayback snapshot of simplybook.me/en/pricing dated
    // 2026-09-26 (USD). The live page read 2026-10-09 from Kuwait shows the
    // same figures in EUR (Basic EUR 11.9 billed annually / EUR 13.9 monthly).
    // Add-on credits as listed on the live page in USD.
    pricing: {
      hasFreePlan: true,
      freeTrialDays: 14,
      startingPrice: 'Free (paid from $11.9/mo billed annually)',
      startingPriceNumeric: 0,
      tiers: [
        { name: 'Free', price: 'Free', priceNumeric: 0, features: ['50 bookings/mo', '1 provider', '1 premium custom feature'] },
        { name: 'Basic', price: '$13.9/mo, or $11.9/mo billed annually', priceNumeric: 11.9, features: ['100 bookings/mo', '5 providers', 'Sales (POS)'] },
        { name: 'Standard', price: '$29.9/mo, or $24.9/mo billed annually', priceNumeric: 24.9, features: ['500 bookings/mo', '15 providers', 'Branded Client App', 'HIPAA'] },
        { name: 'Premium', price: '$59.9/mo, or $49.9/mo billed annually', priceNumeric: 49.9, features: ['2,000 bookings/mo', '30 providers', 'Payments PRO', 'Unlimited custom features'] },
        { name: 'Enterprise', price: 'Pricing on request', features: ['Multi-location access', 'Account manager', 'Full white label'] },
      ],
      hiddenCosts: [
        'SMS credits: $8 per 100',
        'WhatsApp credits: $8 per 100',
        'AI Voice Booking credits: $8 per 100',
        'Extra bookings: $4 per 100',
      ],
      pricingModel: 'usage-based',
      pricingPageUrl: 'https://simplybook.me/en/pricing',
      lastVerified: '2026-10-09',
    },

    // Capterra product page, Wayback snapshot 2026-09-21: 4.6, 1,289 reviews.
    reviews: [{ platform: 'Capterra', rating: 4.6, reviewCount: 1289 }],

    // Arabic is not in the "Multiple languages" list on /en/pricing (English,
    // Taiwanese, French, Chinese, Spanish, Korean, German, Japanese, Russian,
    // Portuguese, Brazilian Portuguese, Italian, Dutch, Ukrainian, Czech,
    // Norwegian, Swedish, Danish, Greek, Hungarian, Finnish, Polish). Custom
    // wording lets a business translate the booking site itself. No GCC
    // country site, office or local-currency pricing found.
    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    // /en/ai-scheduling-assistant: Ask Simply "is the AI scheduling assistant
    // built directly into your SimplyBook.me admin". /en/ai-voice-booking:
    // "AI Voice Booking to your website and social media (Facebook, Whatsapp,
    // Instagram)"; "Support across 50+ languages, including ... Arabic";
    // credits "€8 for 100 credits".
    aiCapabilities: {
      hasAiReceptionist: true, hasAiChatbot: true, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: true, hasAiPricing: false,
      aiDescription: 'Ask Simply, an AI assistant in the admin that sets up services, schedules and reports by chat; and AI Voice Booking, a paid add-on on prepaid credits that books clients by voice or text on the website, Facebook, Instagram and WhatsApp, in 50+ languages including Arabic.',
    },

    daisyAdvantages: ['Built for beauty businesses rather than general booking', 'AI receptionist included in every plan', 'One integrated platform rather than features switched on one by one', 'Arabic interface with right-to-left layout', 'Cashback, with an optional marketplace', 'Live in all six GCC countries'],
    daisySwitchingReasons: ['Need a beauty-specific platform', 'Want an AI receptionist included in the plan', 'Prefer an integrated platform to switching features on one by one', 'Need an Arabic interface'],
    competitorStrengths: ['Free plan, with paid plans from $11.9/mo billed annually', 'More than 70 custom features to choose from', 'AI Voice Booking on web, Facebook, Instagram and WhatsApp, Arabic included', 'Sales (POS) from the Basic plan', 'Rated 4.6/5 from 1,280+ reviews on Capterra'],
    competitorWeaknesses: ['General booking software rather than beauty-specific', 'Premium custom features capped by plan below Premium', 'AI Voice Booking and SMS run on prepaid credits', 'Arabic isn\'t among its listed interface languages as of October 2026', 'Loyalty runs on points rather than cashback'],

    faq: [
      { question: 'How does SimplyBook.me compare to Daisy?', answer: 'SimplyBook.me is booking software for many industries, built from 70+ custom features you switch on. It includes Sales (POS) from Basic, an AI assistant called Ask Simply, and AI Voice Booking on prepaid credits. Daisy is built for beauty, with an AI receptionist included in every plan, cashback with an optional marketplace, and Arabic and English as equals.' },
      { question: 'How much does SimplyBook.me cost?', answer: 'US pricing: Free is $0 for 50 bookings a month; Basic is $13.9/mo, or $11.9/mo billed annually; Standard is $29.9/mo, or $24.9/mo billed annually; Premium is $59.9/mo, or $49.9/mo billed annually; Enterprise is priced on request. Plans are set by booking volume, number of providers and how many premium custom features you can switch on. SMS, WhatsApp and AI Voice Booking credits cost $8 per 100, and extra bookings $4 per 100.' },
      { question: 'Does SimplyBook.me support Arabic?', answer: 'Arabic isn\'t among the interface languages SimplyBook.me lists as of October 2026, though its custom wording tool lets you translate the booking site yourself and its client app has a right-to-left option. Its AI Voice Booking lists Arabic among 50+ languages. Daisy treats Arabic as equal to English, with right-to-left layout built in, and is live in all six GCC countries.' },
      { question: 'Can I migrate my data from SimplyBook.me to Daisy?', answer: 'Yes. Daisy moves client records, booking history and service configurations across, and the onboarding team handles the switch.' },
      { question: 'Does SimplyBook.me have AI features?', answer: 'Yes. Ask Simply is an AI assistant inside the admin that creates services, sets opening hours, switches on features and answers report questions by chat. AI Voice Booking is a paid add-on that lets clients book by voice or text on your website, Facebook, Instagram and WhatsApp, and can take calls to your WhatsApp Business number; it runs on prepaid credits ($8 per 100). Daisy\'s AI receptionist is included in every plan and works 24/7 on WhatsApp, Instagram and the booking site, in Arabic and English.' },
      { question: 'How do SimplyBook.me\'s custom features work?', answer: 'SimplyBook.me has 70+ custom features, such as POS, intake forms, memberships and gift cards. Free features are unlimited, while premium ones count against your plan: 1 on Free, 3 on Basic, 8 on Standard and unlimited on Premium. Ask Simply can switch features on for you. On Daisy the beauty-specific features come built in and work together from the start.' },
      { question: 'Does SimplyBook.me have a marketplace to help me get new clients?', answer: 'SimplyBook.me lists businesses in its Booking.page directory, which it calls a marketplace, and takes bookings through Google, Facebook and Instagram. Its loyalty system uses points. Daisy pairs cashback rewards with an optional consumer marketplace, available in selected countries, to bring new customers to you.' },
      { question: 'How does SimplyBook.me\'s mobile app compare to Daisy?', answer: 'SimplyBook.me has an Admin App for iOS and Android and a Client App, which can carry your branding from the Standard plan. Daisy\'s app covers the AI receptionist, optional marketplace listing, live analytics, and Arabic and English, built for beauty professionals.' },
      { question: 'What customer support does SimplyBook.me offer?', answer: 'SimplyBook.me offers live chat, email, a help centre and video tutorials, and its Enterprise plan adds an account manager. Daisy provides beauty industry support, Arabic-speaking representatives and local GCC teams.' },
    ],

    lastResearched: '2026-10-09',
  },

  // ---------------------------------------------------------------------------
  // 21. Setmore
  // ---------------------------------------------------------------------------
  setmore: {
    slug: 'setmore',
    name: 'Setmore',
    website: 'https://www.setmore.com',
    tier: 3,
    // Sources read 2026-10-09: setmore.com/pricing, /features,
    // /features/live-receptionist, /integrations/google-ai-studio, /terms.
    description: 'A general-purpose scheduling tool with a free plan for up to 4 users, used across many industries, beauty among them.',
    // No founding year is given on Setmore's own pages or in a dated press
    // source we could find, so none is published here.
    // setmore.com/terms: "The Site is controlled and operated by Setmore in
    // Raleigh, North Carolina, United States of America."
    headquarters: 'Raleigh, NC, USA',

    features: {
      onlineBooking: 2, posAndPayments: 2, clientManagement: 2, staffManagement: 2,
      marketingAndCrm: 1, inventoryManagement: 0, reportingAndAnalytics: 1,
      marketplaceAndDiscovery: 1, aiCapabilities: 1, brandingAndWhiteLabel: 2,
    },

    // setmore.com/pricing, read 2026-10-09. Free: "$0 user / mo", "Up to 4
    // users". Pro: "Unlimited users", "$12 and $5 user / month", "*Annual
    // pricing" for the $5. The Free column lists in-person payments, Tap to
    // Pay, cash register, customer profiles and "24/7 human support: Chat,
    // email, and phone". Live Receptionist: "add for $99 / month",
    // "Service available in the US only."
    pricing: {
      hasFreePlan: true,
      startingPrice: 'Free (paid from $5/mo per user, billed annually)',
      startingPriceNumeric: 0,
      tiers: [
        { name: 'Free', price: 'Free', priceNumeric: 0, features: ['Up to 4 users', 'Online booking', 'In-person payments and Tap to Pay', 'Customer profiles', '24/7 human support'] },
        { name: 'Pro', price: '$12/mo per user, or $5/mo per user billed annually', priceNumeric: 5, features: ['Unlimited users', 'SMS reminders (500 credits per user per month)', 'Recurring appointments', 'Remove Setmore branding'] },
      ],
      hiddenCosts: [
        'Live Receptionist (human call answering, US only): $99/mo add-on',
        'Extra SMS credits beyond the 500 a month per Pro user, bought in-app',
      ],
      pricingModel: 'per-staff',
      pricingPageUrl: 'https://www.setmore.com/pricing',
      lastVerified: '2026-10-09',
    },

    // Capterra product page, Wayback snapshot 2026-08-29: 4.6, 959 reviews.
    reviews: [{ platform: 'Capterra', rating: 4.6, reviewCount: 959 }],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    // No AI receptionist or chatbot on setmore.com/pricing, /features or the
    // site map as of 2026-10-09. /integrations/google-ai-studio: "Let Gemini
    // transform booking data into summaries, follow-ups, and key insights"
    // (set up through Zapier).
    aiCapabilities: {
      hasAiReceptionist: false, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: false, hasAiAnalytics: false, hasAiPricing: false,
      aiDescription: 'No AI receptionist or chatbot is listed on Setmore\'s published pages as of October 2026. Setmore documents a Zapier connection to Google AI Studio (Gemini) for booking summaries and follow-up drafts, and sells a human Live Receptionist service in the US.',
    },

    daisyAdvantages: ['Built for beauty businesses rather than general scheduling', 'AI receptionist on WhatsApp, Instagram and the booking site', 'Inventory, marketing and cashback in one platform', 'Arabic interface and GCC focus', 'Cashback and an optional consumer marketplace'],
    daisySwitchingReasons: ['Outgrowing general scheduling', 'Need beauty-specific features', 'Want an AI receptionist', 'Need Arabic/GCC'],
    competitorStrengths: ['Free plan for up to 4 users', 'In-person payments, Tap to Pay and customer profiles on the free plan', '24/7 human support by chat, email and phone, free plan included', 'Rated 4.6/5 from 950+ reviews on Capterra'],
    competitorWeaknesses: ['General scheduling tool rather than beauty-specific software', 'No AI receptionist or chatbot listed as of October 2026', 'SMS reminders only on the paid Pro plan', 'No Arabic interface or GCC pricing published', 'No consumer marketplace listed'],

    faq: [
      { question: 'How does Setmore compare to Daisy?', answer: 'Setmore is general scheduling software with a free plan for up to 4 users that already covers online booking, in-person payments, customer profiles and 24/7 human support. Daisy is built for beauty businesses, with an AI receptionist on WhatsApp, Instagram and the booking site, cashback, an optional consumer marketplace, and Arabic and English as equals.' },
      { question: 'Is Setmore really free, and what do the paid plans cost?', answer: 'Setmore\'s Free plan costs $0 for up to 4 users. Pro costs $12 per user per month, or $5 per user per month billed annually, and adds unlimited users, SMS reminders with 500 credits per user each month, recurring appointments and the option to remove Setmore branding. Its human Live Receptionist service is a separate $99/mo plan, available in the US only.' },
      { question: 'Can I migrate my client data from Setmore to Daisy?', answer: 'Yes. Daisy moves client contact details, appointment history and service preferences across from Setmore, with the onboarding team making sure nothing goes missing.' },
      { question: 'Does Setmore support Arabic or work in the Middle East?', answer: 'Setmore publishes its site in English, French, German, Spanish, Italian and Portuguese, with no Arabic interface and no GCC pricing as of October 2026. Daisy runs natively in Arabic and English and is live in all six GCC countries.' },
      { question: 'Does Setmore have any AI features?', answer: 'No AI receptionist or chatbot is listed on Setmore\'s published pages as of October 2026. Setmore documents a Zapier connection to Google AI Studio that uses Gemini to draft booking summaries and follow-ups, and it sells a Live Receptionist service staffed by people, in the US only. Daisy\'s AI receptionist works 24/7 on WhatsApp, Instagram and the booking site, taking bookings, answering client questions and processing payments.' },
      { question: 'When should I upgrade from Setmore to a platform like Daisy?', answer: 'When you want software built around a beauty business: inventory, marketing with cashback, an AI receptionist that handles WhatsApp and Instagram after hours, or an optional marketplace that brings new clients in. Setmore already covers booking, payments and customer profiles, so the move is about growth more than day-to-day operations.' },
      { question: 'How does Setmore\'s mobile app compare to Daisy?', answer: 'Setmore has iOS and Android apps for managing appointments, and clients can add your booking page to their home screen like an app. Daisy\'s app covers the AI receptionist, optional marketplace listing, cashback tracking, live analytics, and Arabic and English throughout.' },
      { question: 'Can Setmore help me grow my client base?', answer: 'Setmore lets clients book through Reserve with Google, Facebook and Instagram buttons and your website, and its Pro plan sends Google review requests. A consumer marketplace and cashback aren\'t listed on its published pages as of October 2026. Daisy includes a cashback program and AI-powered marketing to bring new customers in, plus an optional consumer marketplace in selected countries.' },
      { question: 'What customer support does Setmore provide compared to Daisy?', answer: 'Setmore offers 24/7 human support by chat, email and phone on every plan, with priority support and instant video support on Pro. Daisy provides beauty industry support, Arabic-speaking representatives, dedicated onboarding and local GCC teams.' },
    ],

    lastResearched: '2026-10-09',
  },

  // ---------------------------------------------------------------------------
  // 22. BookB
  // ---------------------------------------------------------------------------
  bookb: {
    slug: 'bookb',
    name: 'BookB',
    website: 'https://www.bookb.app',
    tier: 3,
    description: 'A Dubai-only beauty booking app built around UAE compliance, with a small local marketplace for Dubai salons.',
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
      { question: 'How does BookB compare to Daisy?', answer: 'BookB is a basic booking app for Dubai. Daisy is a full platform with AI, complete business management, cashback and coverage across all 6 GCC countries.' },
      { question: 'What does BookB cost and is the pricing transparent?', answer: 'You have to contact BookB for pricing, because no plans are listed publicly, which makes comparing value difficult. Daisy publishes its plan prices and the price of each add-on.' },
      { question: 'Can I switch from BookB to Daisy without losing my data?', answer: 'Yes. Daisy moves client records and booking history across. BookB holds relatively few data fields, so the migration is usually straightforward, and what you land in is a far more capable client management system.' },
      { question: 'Does BookB work outside of Dubai?', answer: 'No. BookB serves the Dubai market and nowhere else, so expanding into other emirates or GCC countries means changing platform. Daisy was built for the GCC, with a native Arabic and English interface and local payment methods, live in all six GCC countries.' },
      { question: 'Does BookB have AI features like Daisy?', answer: 'No. There is no AI receptionist, no chatbot and no smart scheduling. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments by itself, in Arabic and English.' },
      { question: 'How does BookB\'s marketplace compare to Daisy\'s?', answer: 'BookB\'s marketplace is small and stops at Dubai. Daisy\'s is optional, runs in selected countries, and has cashback rewards, customer discovery and AI-powered recommendations behind it.' },
      { question: 'Does BookB offer staff management and business analytics?', answer: 'No. BookB books appointments. There is no staff management, no reporting, no analytics, no marketing and no inventory. Daisy covers staff scheduling, commissions, detailed analytics, marketing automation and inventory tracking.' },
      { question: 'How does BookB\'s mobile app compare to Daisy?', answer: 'BookB\'s app handles basic booking for the Dubai market. Daisy\'s covers the whole salon, with the AI receptionist, optional marketplace listing in selected countries, live analytics and full Arabic and English support.' },
      { question: 'What support does BookB offer compared to Daisy?', answer: 'BookB is a small startup with limited support resources, all pointed at Dubai. Daisy supports customers across every GCC country, with dedicated onboarding, Arabic-speaking representatives and a team that has seen beauty businesses operate at scale.' },
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
    description: 'A beauty consumer marketplace with some SaaS features attached, available in the UAE and a handful of international markets.',
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
      { question: 'How does Belliata compare to Daisy?', answer: 'Belliata is a UAE marketplace with basic management features bolted on. Daisy brings an AI receptionist, complete business management, native Arabic, cashback rewards and coverage across all 6 GCC countries.' },
      { question: 'Does Belliata charge commission on bookings like other marketplaces?', answer: 'Yes. Belliata runs a marketplace model and takes commission on bookings made through it. There is a free tier, but marketplace bookings still carry fees. Daisy charges a monthly subscription and no commission on your existing clients. Its marketplace is optional, and commission applies only to new clients it brings you.' },
      { question: 'Can I migrate my client data from Belliata to Daisy?', answer: 'Yes. Daisy moves client records, booking history and service preferences across, with the onboarding team handling the transition.' },
      { question: 'Is Belliata\'s Arabic support good enough for my salon?', answer: 'Belliata\'s Arabic is translated, and it reads that way, unnatural in places and awkwardly phrased in others. Daisy treats Arabic as equal to English, written and reviewed by Arabic speakers on the team, with right-to-left layout done properly and language that fits the region.' },
      { question: 'Does Belliata have AI features?', answer: 'No. There is no AI receptionist, no chatbot and no smart scheduling. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments on its own, in Arabic and English.' },
      { question: 'Does Belliata work outside the UAE?', answer: 'Belliata concentrates on the UAE, with some presence elsewhere. Daisy was built for the GCC, with a native Arabic and English interface and local payment methods, live in all six GCC countries.' },
      { question: 'How does Belliata\'s marketplace compare to Daisy\'s?', answer: 'Belliata\'s marketplace covers the UAE with basic salon listings. Daisy\'s is optional, available in selected countries, and adds cashback rewards, AI-powered recommendations, customer reviews and discovery features that push clients towards your salon.' },
      { question: 'Does Belliata offer full salon management or just booking?', answer: 'The management side is thin: basic client management and staff scheduling on the Pro plan, with no advanced reporting, no marketing automation and no inventory tracking. Daisy covers salon management properly, with AI, advanced analytics, marketing tools and the rest of the operation.' },
      { question: 'How does Belliata\'s app compare to Daisy for salon owners?', answer: 'Belliata\'s app, rated 4.5 on the App Store, is built around marketplace bookings. Daisy\'s covers the whole salon: the AI receptionist, optional marketplace listing in selected countries, cashback tracking, live analytics and native Arabic and English.' },
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
    description: 'A Dubai salon POS and management system, offering basic booking and point-of-sale to local salons.',
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

    daisyAdvantages: ['AI receptionist', 'Complete platform', 'All 6 GCC countries', 'Cashback + optional marketplace', 'Marketing automation', 'Advanced reporting'],
    daisySwitchingReasons: ['Need more than POS', 'Want AI', 'Expanding beyond Dubai', 'Need marketing, with the option of a marketplace'],
    competitorStrengths: ['Dubai local expertise', 'Good POS', 'Arabic support', 'UAE compliance'],
    competitorWeaknesses: ['Very limited features', 'Dubai-only', 'No AI', 'No marketplace', 'No marketing', 'No reviews', 'Opaque pricing'],

    faq: [
      { question: 'How does Sparkalz compare to Daisy?', answer: 'Sparkalz is a Dubai salon POS system with a basic feature set. Daisy is a complete AI-powered platform with cashback, marketing and an optional marketplace, and it is live in all six GCC countries.' },
      { question: 'What does Sparkalz cost and why isn\'t pricing listed publicly?', answer: 'Pricing comes only by contacting them, and POS terminals may add hardware costs on top. With nothing published, comparison is difficult. Daisy publishes its pricing, needs no hardware and includes the features.' },
      { question: 'Can I move my salon data from Sparkalz to Daisy?', answer: 'Yes. Daisy moves client records, transaction history and inventory data across, and the onboarding team handles the step up from a POS-centred setup to a full platform.' },
      { question: 'Does Sparkalz work outside of Dubai?', answer: 'No. Sparkalz serves Dubai and nowhere else, so a salon expanding into other emirates or GCC countries needs something different. Daisy was built for the GCC, with a native Arabic and English interface and local payment methods, live in all six GCC countries.' },
      { question: 'Does Sparkalz have AI features?', answer: 'No. There is no AI receptionist, no chatbot and no smart scheduling. Daisy\'s 24/7 AI receptionist takes bookings, answers queries and processes payments by itself, in Arabic and English.' },
      { question: 'Is Sparkalz more than just a POS system for salons?', answer: 'Sparkalz is point-of-sale and basic booking. There are no marketing tools, no advanced reporting, no customer marketplace and no staff management. Daisy covers POS, booking, CRM, marketing, AI, analytics and customer acquisition.' },
      { question: 'How does Sparkalz\'s mobile app compare to Daisy?', answer: 'On mobile, Sparkalz handles POS transactions and basic booking. Daisy\'s app covers the whole salon, with the AI receptionist, optional marketplace listing in selected countries, live analytics, marketing tools and native Arabic and English.' },
      { question: 'Can Sparkalz help me get new customers?', answer: 'No. Sparkalz is a POS tool built for operations, with no marketplace, no cashback and no marketing automation. Daisy includes cashback rewards and AI-powered marketing to bring new clients to the salon, plus an optional consumer marketplace in selected countries.' },
      { question: 'What customer support does Sparkalz offer?', answer: 'Sparkalz is a small Dubai company with limited support resources. Daisy supports customers across every GCC country, with dedicated onboarding, Arabic-speaking representatives and a team that knows the beauty industry well.' },
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
    // getsquire.com returns a Cloudflare 403 to our requests (curl and
    // WebFetch, 2026-10-09), so these facts come from the latest Wayback
    // snapshots: /pricing and / on 2026-08-05, /features/pos-payments on
    // 2026-06-13, /company on 2026-06-04.
    description: 'Business management software and POS built for barbershops, with online booking, discovery through Google, Instagram and the SQUIRE app, and an AI phone receptionist sold as an add-on.',
    // /company: "SQUIRE was officially launched in 2015".
    founded: '2015',
    // Fortune, 28 Jul 2021: "The company, which is based out of New York".
    headquarters: 'New York, NY, USA',
    // AfroTech, 28 Jul 2021: the $60M Series D brought "its total raised since
    // launching to roughly $165 million".
    funding: 'About $165M raised through its 2021 Series D',

    features: {
      onlineBooking: 2, posAndPayments: 2, clientManagement: 2, staffManagement: 2,
      marketingAndCrm: 2, inventoryManagement: 2, reportingAndAnalytics: 2,
      marketplaceAndDiscovery: 2, aiCapabilities: 2, brandingAndWhiteLabel: 2,
    },

    // /pricing JSON-LD offers (US): Independent $30, Pro $50, Executive $150,
    // Titan $250 per month; also CAD, GBP and EUR offers for Canada, the UK and
    // the EU. FAQ: "Every plan is flat-rate - one monthly fee per shop, no
    // per-barber charges." Executive lists "Operator AI phone answering
    // (add-on: $99/mo)" and "branded website and landing pages (add-on:
    // $25/mo)". No card processing rate is published in readable text, so
    // none is quoted here.
    pricing: {
      hasFreePlan: false,
      startingPrice: '$30/mo',
      startingPriceNumeric: 30,
      tiers: [
        { name: 'Independent', price: '$30/mo', priceNumeric: 30, features: ['For individual barbers', 'Online booking and no-show protection', 'Engage, powered by SQUIRE AI', 'Reporting with AI-powered insights'] },
        { name: 'Pro', price: '$50/mo', priceNumeric: 50, features: ['Single-location shops', 'Multiple barber accounts', 'Google and Instagram booking'] },
        { name: 'Executive', price: '$150/mo per shop', priceNumeric: 150, features: ['Multi-location support', 'Unlimited email and SMS marketing', 'Commission and rent collection'] },
        { name: 'Titan', price: '$250/mo per shop', priceNumeric: 250, features: ['Branded app', 'Loyalty program and gift cards', 'Inventory tracking and purchase orders'] },
      ],
      hiddenCosts: [
        'Operator AI phone answering: $99/mo add-on (listed on the Executive plan)',
        'Branded website and landing pages: $25/mo add-on (listed on the Executive plan)',
      ],
      pricingModel: 'per-location',
      pricingPageUrl: 'https://www.getsquire.com/pricing',
      lastVerified: '2026-10-09',
    },

    // No current Capterra figure could be read (Capterra blocks automated
    // requests and has no recent snapshot), so no rating is published.
    reviews: [],

    gccPresence: {
      hasArabicUI: false, arabicQuality: 'none', gccCountries: [],
      localCompliance: false, localPaymentMethods: false, localSupport: false,
    },

    // /pricing: "Operator, powered by SQUIRE AI (add-on: $99/mo)", "Engage,
    // powered by SQUIRE AI", "Reporting and AI-powered insights".
    // /features/operator: "SQUIRE Operator answers calls and books clients
    // directly"; "Booking capabilities in English and Spanish".
    aiCapabilities: {
      hasAiReceptionist: true, hasAiChatbot: false, hasSmartScheduling: false,
      hasAiMarketing: true, hasAiAnalytics: true, hasAiPricing: false,
      aiDescription: 'SQUIRE AI powers Engage marketing and AI-powered reporting insights. Operator, a $99/mo add-on, answers calls and books clients in English and Spanish.',
    },

    daisyAdvantages: ['Built for salons, spas and clinics as well as barbershops', 'AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English', 'Arabic interface and GCC focus', 'Cashback rewards'],
    daisySwitchingReasons: ['Expanding beyond barbershop services', 'Want an AI receptionist on WhatsApp and Instagram, in Arabic', 'Operating in the GCC', 'Want cashback rewards for clients'],
    competitorStrengths: ['Built specifically for barbershops', 'POS with Tap to Pay, a card reader or full register hardware', 'Client discovery through Google, Instagram and the SQUIRE app', 'A flat monthly price per shop, with no per-barber charge', 'Operator AI phone receptionist in English and Spanish (add-on)'],
    competitorWeaknesses: ['Focused on barbershops rather than salons, spas or clinics', 'No Arabic interface or GCC pricing published as of October 2026', 'Operator AI receptionist is a $99/mo add-on, listed on the Executive plan'],

    faq: [
      { question: 'How does SQUIRE compare to Daisy?', answer: 'SQUIRE is business management software and POS built for barbershops, with prices published for the US, Canada, the UK and the EU. Daisy serves salons, spas, clinics and barbershops, with an AI receptionist on WhatsApp, Instagram and the booking site, cashback rewards, and Arabic and English for the GCC.' },
      { question: 'How much does SQUIRE cost?', answer: 'SQUIRE\'s published US prices are $30/mo for Independent (solo barbers), $50/mo for Pro (single-location shops), $150/mo per shop for Executive and $250/mo per shop for Titan. SQUIRE says every plan is a flat monthly fee per shop, with no per-barber charge. Operator, its AI phone receptionist, is a $99/mo add-on.' },
      { question: 'Can I switch from SQUIRE to Daisy and keep my client data?', answer: 'Yes. Daisy moves client profiles, appointment history and booking preferences across from SQUIRE, with the onboarding team handling it so no client relationship is lost.' },
      { question: 'Does SQUIRE work for salons and spas, not just barbershops?', answer: 'SQUIRE describes itself as built for barbers and barbershop owners, and its features and plans are set up around barbershops. Daisy covers salons, spas, clinics and barbershops in one platform.' },
      { question: 'Does SQUIRE support Arabic or work in the GCC?', answer: 'SQUIRE publishes prices for the US, Canada, the UK and the EU, with no Arabic interface or GCC pricing as of October 2026. Daisy runs natively in Arabic and English and is live in all six GCC countries.' },
      { question: 'Does SQUIRE have AI features like Daisy?', answer: 'Yes. SQUIRE AI powers its Engage marketing tools and AI-powered reporting insights, and Operator, a $99/mo add-on, answers calls and books clients in English and Spanish. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site rather than the phone, in Arabic and English, and is included in every plan.' },
      { question: 'How does SQUIRE\'s marketplace compare to Daisy\'s?', answer: 'SQUIRE helps shops get found on Google, Instagram and its own app, and says a shop\'s clients are not shown to other businesses. Daisy\'s optional marketplace, available in selected countries, spans the wider beauty and wellness industry, with cashback rewards and AI-powered recommendations behind the discovery.' },
      { question: 'Is SQUIRE good for a barbershop that also offers other services?', answer: 'SQUIRE is built around barbershop services. If you also offer salon services, facials or spa treatments, Daisy handles every beauty and wellness service type in one platform.' },
      { question: 'How does SQUIRE\'s mobile app compare to Daisy?', answer: 'SQUIRE offers an app for barbers and shop owners, plus branded client apps: Flex on every plan, and a custom branded app on Titan. Daisy\'s app adds the AI receptionist, optional marketplace listing in selected countries, cashback tracking, and Arabic and English support.' },
      { question: 'What customer support does SQUIRE offer compared to Daisy?', answer: 'SQUIRE includes a dedicated onboarding specialist from the Pro plan and migrates a switching shop\'s client list and booking history. Daisy provides multi-channel support with expertise across every beauty vertical, Arabic-speaking representatives and dedicated GCC teams.' },
    ],

    lastResearched: '2026-10-09',
  },

  // ---------------------------------------------------------------------------
  // 26. Salonist
  // ---------------------------------------------------------------------------
  salonist: {
    slug: 'salonist',
    name: 'Salonist',
    website: 'https://www.salonist.io',
    tier: 3,
    description: 'Budget salon management out of India, offering basic features cheaply, with some GCC and international presence.',
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

    daisyAdvantages: ['AI-powered platform', 'Native Arabic', 'Cashback + optional marketplace', 'Full GCC compliance', 'Advanced features across all categories'],
    daisySwitchingReasons: ['Need AI capabilities', 'Need Arabic support', 'Want the option of a marketplace for customer acquisition', 'Need deeper features'],
    competitorStrengths: ['Very affordable ($25/mo)', 'Basic features covered', 'Some GCC presence'],
    competitorWeaknesses: ['Basic features only', 'No AI', 'No Arabic', 'No marketplace', 'Limited GCC support', 'Small company'],

    faq: [
      { question: 'How does Salonist compare to Daisy?', answer: 'Salonist is a budget tool at $25/mo with basic features. Daisy adds an AI receptionist, cashback, an optional marketplace, native Arabic and management deep enough to grow a business on.' },
      { question: 'Is Salonist really as affordable as it looks at $25 a month?', answer: 'The $25/mo price is genuinely low, and what it buys is basic. No advanced analytics, no AI, no marketplace and thin marketing. Most businesses end up buying other tools, which is where the saving goes. Daisy holds all of it in one platform.' },
      { question: 'Can I migrate my data from Salonist to Daisy?', answer: 'Yes. Daisy moves client records, appointment history and inventory data across, with the onboarding team making sure nothing is lost.' },
      { question: 'Does Salonist support Arabic for my salon?', answer: 'No. Salonist has some GCC presence in the UAE and still no Arabic interface. Daisy treats Arabic as equal to English, supports right-to-left layout properly, and reads as though it was written for the region.' },
      { question: 'Does Salonist have any AI features?', answer: 'No. There is no AI receptionist, no chatbot, no smart scheduling and no AI marketing. Daisy\'s 24/7 AI receptionist takes bookings, answers questions and processes payments in Arabic and English.' },
      { question: 'Is Salonist reliable enough for a growing beauty business?', answer: 'Salonist is a smaller Indian company with few reviews to judge it by. A growing business tends to run past both the feature set and the support. Daisy is built to scale, with AI, cashback, an optional marketplace and management tools that keep up.' },
      { question: 'Does Salonist have a marketplace or customer acquisition tools?', answer: 'No. There is no marketplace, no cashback and nowhere for a client to discover you. It runs your operations, nothing more. Daisy pairs the operations with acquisition, through cashback rewards, AI-powered marketing and an optional marketplace in selected countries.' },
      { question: 'How does Salonist\'s mobile app compare to Daisy?', answer: 'Salonist\'s app handles appointments and client management. Daisy\'s covers the whole salon, with the AI receptionist, optional marketplace listing, cashback tracking, live analytics and native Arabic and English.' },
      { question: 'What customer support does Salonist offer?', answer: 'Support is basic email, mostly on Indian business hours, with no beauty industry expertise and nothing local to the GCC. Daisy provides multi-channel support with Arabic-speaking representatives, dedicated onboarding and local GCC teams.' },
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
    description: 'UK practice management built for med spas and clinical work, strong on client records and forms, with AI features for clinical workflows starting to appear.',
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
      aiDescription: 'Basic automation across clinical workflows. No real AI receptionist, chatbot or smart scheduling.',
    },

    daisyAdvantages: ['Full AI ecosystem vs basic automation', 'Arabic/GCC support', 'Cashback + optional marketplace', 'Plans that include 5, 10 or 15 team members, where Pabau prices per user', 'Broader beauty/wellness vs clinical-only'],
    daisySwitchingReasons: ['Want a team of 5 or more covered by one plan price', 'Need Arabic/GCC', 'Want AI receptionist', 'Want the option of a marketplace'],
    competitorStrengths: ['Excellent clinical records and forms', 'Strong consent management', 'Good CRM', 'Established in UK med spa market'],
    competitorWeaknesses: ['UK-focused', 'Per-user pricing', 'No AI', 'No marketplace', 'No Arabic/GCC', 'Clinical-focused not beauty-broad'],

    faq: [
      { question: 'How does Pabau compare to Daisy?', answer: 'In the UK market, Pabau is very good at clinical and med spa records and consent forms. Daisy brings an AI receptionist, cashback, an optional marketplace, Arabic support and GCC compliance, across the wider beauty and wellness industry.' },
      { question: 'How expensive does Pabau get with per-user pricing?', answer: 'Pabau charges roughly $49/mo per user, so a med spa with 10 practitioners pays around $490/mo, before payment processing fees. On Daisy, 10 team members fit on the Growth plan at $150 a month, and each extra calendar is $10 a month.' },
      { question: 'Can I migrate my clinic data from Pabau to Daisy?', answer: 'Yes. Daisy moves client records, treatment history, consent forms and appointment data across from Pabau, with the onboarding team handling it for clinical and beauty businesses alike.' },
      { question: 'Does Pabau support Arabic or work in the Middle East?', answer: 'No. Pabau serves the UK, with no Arabic interface, no GCC compliance and no Middle Eastern payment methods. Daisy runs natively in Arabic and English with support built for the Gulf, live in all six GCC countries, including local clinical and beauty regulations.' },
      { question: 'Does Pabau have AI features like an AI receptionist?', answer: 'Pabau automates clinical workflows, and none of it is really AI: no receptionist, no chatbot, no smart scheduling. Daisy\'s 24/7 AI receptionist takes bookings, answers patient and client questions, and processes payments on its own.' },
      { question: 'Is Pabau only for med spas or can salons use it too?', answer: 'Pabau was designed for clinical and med spa environments, and consent forms, treatment records and clinical workflows are where it is strongest. A regular salon or spa will find it clinical in tone and short on beauty-specific features. Daisy covers the full spectrum, salons through spas to clinics.' },
      { question: 'Does Pabau have a marketplace to help attract new clients?', answer: 'No. There is no consumer marketplace, nothing for discovery and no cashback. Daisy includes cashback rewards and AI-powered marketing to bring new patients and clients in, plus an optional consumer marketplace in selected countries.' },
      { question: 'How does Pabau\'s mobile app compare to Daisy?', answer: 'Pabau\'s app centres on clinical records and consent forms. Daisy\'s covers the whole business, with the AI receptionist, optional marketplace listing, cashback tracking, live analytics and Arabic and English throughout.' },
      { question: 'What customer support does Pabau offer compared to Daisy?', answer: 'Pabau supports you from the UK, on UK business hours, from people who understand clinical workflows. Daisy provides multi-channel support covering both beauty and clinical work, with Arabic-speaking representatives and dedicated GCC teams.' },
    ],

    lastResearched: '2026-03-13',
  },
};

// ---------------------------------------------------------------------------
// I18n-wrapped export — lazily resolved to avoid circular import
// ---------------------------------------------------------------------------

export function getTier3CompetitorsI18n(): I18nContent<Record<string, CompetitorData>> {
  const { tier3CompetitorsAr } = require('./tier3Data.ar') as { tier3CompetitorsAr: Record<string, CompetitorData> };
  return { en: tier3Competitors, ar: tier3CompetitorsAr };
}
