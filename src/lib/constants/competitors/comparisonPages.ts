// =============================================================================
// WS2: Comparison Page Data. Powers all conversion pages
// =============================================================================

import type { CompetitorData } from './competitorData';
import { competitors, daisyData } from './competitorData';
import { t, type I18nContent } from '../i18n';

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export interface DaisyVsPageData {
  slug: string; // e.g. "daisy-vs-fresha"
  competitorSlug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  tldr: string;
  verdict: string;
  featureCommentary: Record<string, string>; // per-category prose
  whoShouldChooseDaisy: string[];
  whoShouldChooseCompetitor: string[];
}

export interface AlternativePageData {
  slug: string; // e.g. "fresha"
  competitorSlug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  painPoints: string[];
  switchingReasons: string[];
  topAlternatives: string[]; // ordered competitor slugs, Daisy implied first
}

export interface BestAlternativesPageData {
  slug: string; // e.g. "best-fresha-alternatives"
  competitorSlug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  alternatives: string[]; // competitor slugs (unordered — no ranking)
  bestFor: Record<string, string>; // competitorSlug → short "Best for X" label
  daisyEdge: string; // what Daisy uniquely offers beyond these alternatives
}

export interface CompetitorVsPageData {
  slugA: string;
  slugB: string;
  combinedSlug: string; // e.g. "fresha-vs-booksy"
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  verdict: string;
  whoShouldChooseA: string[];
  whoShouldChooseB: string[];
  daisyPitch: string; // why Daisy beats both
}

// Union type for compare route slug resolution
export type ComparePageData = DaisyVsPageData | CompetitorVsPageData;

// -----------------------------------------------------------------------------
// Daisy vs [Competitor] Pages
// -----------------------------------------------------------------------------

export const daisyVsPages: DaisyVsPageData[] = [
  // P1: Tier 1 competitors
  {
    slug: 'daisy-vs-fresha',
    competitorSlug: 'fresha',
    metaTitle: 'Daisy vs Fresha: Complete Comparison (2026)',
    metaDescription:
      'Compare Daisy and Fresha side-by-side. See how AI-powered growth tools, Arabic support, and transparent pricing stack up against Fresha\'s marketplace model.',
    keywords: [
      'daisy vs fresha',
      'fresha alternative',
      'fresha comparison',
      'salon software comparison',
      'beauty booking platform comparison',
    ],
    heroTitle: 'Daisy vs Fresha',
    heroSubtitle:
      'How does an AI-powered growth platform stack up against the world\'s largest beauty marketplace?',
    tldr: 'Fresha is a marketplace charging subscription fees plus published transaction and marketplace charges that stack. Daisy is a complete growth platform with an AI receptionist, cashback rewards and Arabic support. Pick Fresha for marketplace exposure, Daisy to actively grow the business.',
    verdict:
      'Fresha brings marketplace reach, but it now charges monthly subscriptions on top of transaction fees and a one-time 50% commission on new marketplace clients in the UAE. Its AI Concierge answers calls and messages. Daisy\'s AI receptionist works on WhatsApp, Instagram and your booking site, in Arabic and English, and Daisy charges no marketplace commission.',
    featureCommentary: {
      onlineBooking:
        'Both do online booking well. Fresha\'s strength is the size of its consumer marketplace, with 25M+ users. Daisy answers that with AI booking that carries the whole flow, payments and customer service included, 24/7 and without anyone stepping in.',
      posAndPayments:
        'In the UAE, Fresha publishes online payments at 4.90% + AED 0.75 per transaction and a one-time 50% commission on new marketplace clients, minimum AED 20. Those are published rather than hidden, but across a year they add up. Daisy charges a flat rate with nothing added per transaction and no marketplace commission.',
      clientManagement:
        'Fresha gives you client profiles and history. Daisy layers AI on top, predicting no-shows, flagging VIP clients and suggesting personalized offers from booking patterns.',
      staffManagement:
        'Both handle scheduling and staff calendars, and both now use AI for it. In May 2026 Fresha announced AI-powered intelligent scheduling. Its Dynamic Reassignment feature moves flexible appointments between suitable team members in real time. Daisy\'s AI scheduling arranges slots around revenue, so it fills gaps and prevents double-bookings.',
      marketingAndCrm:
        'Fresha charges per marketing message beyond the first 50 emails each month. Daisy runs AI-powered marketing automation, targeted campaigns, cashback incentives and personalized engagement that keeps going without you.',
      inventoryManagement:
        'Both offer basic inventory tracking. Call it a tie, since neither platform specializes in deep inventory management.',
      reportingAndAnalytics:
        'Fresha has a deep reporting suite, around 60 reports plus live dashboards. Daisy uses AI to recommend actions rather than only draw dashboards, spotting trends, suggesting pricing changes and forecasting demand.',
      marketplaceAndDiscovery:
        'Fresha\'s biggest strength is the 25M+ consumers browsing its marketplace. Daisy comes at it differently, with 360° customer acquisition where marketplace, cashback rewards and AI marketing work together to bring customers in and keep them.',
      aiCapabilities:
        'Both ship AI, on different channels. Fresha\'s AI Concierge answers calls and messages and books appointments; as of October 2026, Fresha\'s published pages do not list WhatsApp or Instagram as Concierge channels. Daisy\'s AI receptionist works on WhatsApp, Instagram and your booking site, takes payments and handles customer service, in Arabic and English, 24/7. It does not answer phone calls today.',
    },
    whoShouldChooseDaisy: [
      'You want an AI receptionist covering bookings and customer service 24/7',
      'You want Arabic and English as equals, with cashback rewards your Arabic-speaking clients can spend',
      'You want pricing you can predict, with nothing added per transaction',
      'You want a booking page carrying your logo, name and colours',
      'You want acquisition that works for you, not just a marketplace listing',
      'You want a GCC-built platform with cashback acquisition and local payment integration',
    ],
    whoShouldChooseCompetitor: [
      'You want the lowest published entry plan and the marketplace reach',
      'Marketplace discovery is where most of your new clients come from',
      'You work alone and process few transactions',
      'Marketplace reach matters more to you than breadth of AI channels',
    ],
  },
  {
    slug: 'daisy-vs-booksy',
    competitorSlug: 'booksy',
    metaTitle: 'Daisy vs Booksy: Full Feature Comparison (2026)',
    metaDescription:
      'Daisy vs Booksy, compare AI features, pricing, Arabic support, and customer acquisition tools. Find the best booking platform for your beauty business.',
    keywords: [
      'daisy vs booksy',
      'booksy alternative',
      'booksy comparison',
      'beauty booking app comparison',
      'salon app comparison',
    ],
    heroTitle: 'Daisy vs Booksy',
    heroSubtitle:
      'A mobile-first booking app against a full AI-powered growth platform, which one actually grows your business?',
    // Booksy facts re-verified 2026-10-09 on biz.booksy.com (pricing, features,
    // AI Receptionist) and help.booksy.com.
    tldr: 'Booksy is a solid mobile-first booking app. Its subscription includes marketing tools, loyalty cards and inventory, and its AI Receptionist (beta) answers phone calls and books appointments in English and Spanish. Daisy runs its AI receptionist on WhatsApp, Instagram and the booking site in Arabic and English, adds cashback-driven customer acquisition, and has flat pricing that doesn\'t rise with every provider you add.',
    verdict:
      'Booksy suits independent barbers and beauty pros who want simple mobile booking with marketplace exposure. For a growing team, each additional member adds $20 a month, Booksy lists no GCC market, and its AI Receptionist works on phone calls in English and Spanish. For businesses in Arabic-speaking markets that want AI on WhatsApp and Instagram, Daisy is the better fit.',
    featureCommentary: {
      onlineBooking:
        'Both offer strong online booking with consumer-facing marketplaces. Booksy has the edge on mobile app design, having been built mobile-first. Daisy matches the booking functionality and adds AI-powered self-service across the full customer journey.',
      posAndPayments:
        'In the US, Booksy charges 2.49% + $0.10 per transaction on its card reader, 2.49% + $0.20 with Tap to Pay and 2.69% + $0.30 for mobile and keyed-in payments. The subscription is $29.99 a month plus $20 for each additional team member, so a five-person team pays $109.99 a month before tax and processing. Daisy charges flat whatever the team size.',
      clientManagement:
        'Both platforms handle client profiles and history, and Booksy adds client notes, tags and custom forms. Daisy adds AI client intelligence that spots churn risks by itself and recommends how to hold on to those clients.',
      staffManagement:
        'Scheduling is comparable, and Booksy includes shifts, commissions and five permission levels. Each new team member adds $20 a month to a Booksy bill. Daisy includes unlimited staff at flat pricing.',
      marketingAndCrm:
        'Booksy includes message blasts, automated campaigns, promotions, loyalty cards and 2,000 marketing texts a month in every subscription. Daisy provides AI-powered marketing automation with cashback rewards, a proven engine for acquiring and keeping customers.',
      inventoryManagement:
        'Booksy includes inventory tracking in every subscription: stock levels, product usage and location. Daisy offers comparable tracking. Neither is an inventory management specialist.',
      reportingAndAnalytics:
        'Booksy publishes 16 revenue and cash-flow reports plus staff performance reports. Daisy adds AI insights that recommend what to do rather than only showing you the data.',
      marketplaceAndDiscovery:
        'Booksy has a strong consumer marketplace, especially popular with barbershops, and its optional Boost charges a one-time 30% of a new client\'s first visit, capped at $100. Daisy runs marketplace, cashback rewards and AI marketing together.',
      aiCapabilities:
        'Booksy\'s AI Receptionist (beta) answers inbound phone calls and books the appointment, in English or Spanish. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site in Arabic and English, alongside smart scheduling, marketing automation and analytics. It does not answer phone calls today.',
    },
    whoShouldChooseDaisy: [
      'You want an AI receptionist on WhatsApp and Instagram, in Arabic and English',
      'You need Arabic',
      'Your team is growing and per-provider pricing is starting to hurt',
      'You want cashback rewards driving customer loyalty',
      'You operate in the GCC',
      'You want white-labeling so the brand stays yours',
    ],
    whoShouldChooseCompetitor: [
      'You are a solo barber or independent beauty professional',
      'A mobile-first experience matters to you above everything else',
      'You want an AI receptionist that answers phone calls in English or Spanish',
      'You work in a market Booksy serves, such as the US, the UK or Europe',
      'You value the barbershop community Booksy has built',
    ],
  },
  {
    slug: 'daisy-vs-vagaro',
    competitorSlug: 'vagaro',
    metaTitle: 'Daisy vs Vagaro: Which Salon Software Is Better?',
    metaDescription:
      'Compare Daisy and Vagaro for salon management: AI features, pricing, Arabic support and customer acquisition tools, side by side.',
    keywords: [
      'daisy vs vagaro',
      'vagaro alternative',
      'vagaro comparison',
      'salon management software comparison',
      'vagaro review',
    ],
    heroTitle: 'Daisy vs Vagaro',
    heroSubtitle:
      'A feature-rich operations platform against an AI-powered growth engine, which suits your salon better?',
    // Vagaro facts re-verified 2026-10-09 in Vagaro's help centre (pricing,
    // processing rates, Vera Receptionist, Fill My Books, free trial).
    tldr: 'Vagaro is a comprehensive platform sold in the US, Canada, the UK and Australia. It is strong on features, affordable to start, and sells an AI receptionist, Vera, for chat and SMS. Daisy adds an AI receptionist on WhatsApp and Instagram, cashback-driven acquisition and Arabic support, and it is built for the GCC.',
    verdict:
      'Vagaro is a solid all-rounder for salons in the US, Canada, the UK and Australia that want broad features at a good price, and its Vera tools bring AI to chat, marketing and reports. For a business in the GCC that wants Arabic, an AI receptionist on WhatsApp and Instagram, and cashback acquisition, Daisy is the better fit.',
    featureCommentary: {
      onlineBooking:
        'Vagaro offers strong booking backed by its consumer marketplace, and says more than 100,000 businesses rely on it. Daisy matches the booking quality and adds AI-powered self-service that can run the entire booking flow, upsells and payments included, without anyone stepping in.',
      posAndPayments:
        'Vagaro has a strong POS with its own hardware. In the US, small merchants pay 2.6% + $0.10 per in-person transaction and 3.5% + $0.19 keyed in, plus monthly network fees, and each additional calendar is $10 a month up to seven paid licences. Daisy drops the per-staff surcharge with flat pricing and offers comparable payment processing.',
      clientManagement:
        'Vagaro provides solid client profiles and a points-based loyalty program. Daisy builds on that with AI that predicts behavior and sends personalized outreach automatically.',
      staffManagement:
        'Both handle staff scheduling well. Vagaro charges $10 a month per additional calendar for up to seven paid licences, after which new employees are added at no charge. Daisy includes every member of staff in its flat pricing.',
      marketingAndCrm:
        'Vagaro includes 1,000 marketing emails a month, sells text marketing from $20 a month, and its AI assistant Vera can write campaign copy. Daisy treats AI-powered marketing automation with cashback rewards as a core feature rather than an extra.',
      inventoryManagement:
        'Vagaro has good inventory tracking and product management, while Daisy offers basic inventory. For inventory-heavy businesses, Vagaro has the slight edge.',
      reportingAndAnalytics:
        'Both offer solid reporting, and both use AI on it. Vagaro lets you ask Vera questions about your reports. Daisy\'s AI recommends specific actions from your data.',
      marketplaceAndDiscovery:
        'Vagaro has a consumer marketplace with free listings in the US, and its Vera Fill My Books feature promotes your openings there for a 20% fee on a new customer\'s first booking. Daisy combines marketplace, cashback and AI marketing into one acquisition strategy.',
      aiCapabilities:
        'Vagaro sells Vera Receptionist, an AI chatbot that answers messages from your Vagaro listing page and, with a Text Marketing plan, SMS. In chat it can book, reschedule and cancel appointments; over SMS it sends a booking link. It costs $10 a month in the US. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site in Arabic and English and takes payments. As of October 2026, Vagaro\'s published pages do not list phone calls for Vera, and Daisy does not answer phone calls today.',
    },
    whoShouldChooseDaisy: [
      'You want an AI receptionist on WhatsApp and Instagram, in Arabic and English',
      'Your GCC clients need Arabic support',
      'You want cashback-driven acquisition alongside the marketplace',
      'You want flat pricing with no per-staff add-ons',
      'You want cashback rewards driving loyalty and repeat bookings',
      'You operate in the GCC',
    ],
    whoShouldChooseCompetitor: [
      'You need a top-tier POS with physical hardware integration',
      'You want a 30-day free trial before committing',
      'You are in the US, Canada, the UK or Australia and want a proven, feature-rich platform',
      'Deep inventory management is critical for you',
    ],
  },
  {
    slug: 'daisy-vs-glossgenius',
    competitorSlug: 'glossgenius',
    metaTitle: 'Daisy vs GlossGenius: AI & Growth Comparison',
    metaDescription:
      'Compare Daisy and GlossGenius for beauty professionals. See how AI features, team management, and customer acquisition tools compare across both platforms.',
    keywords: [
      'daisy vs glossgenius',
      'glossgenius alternative',
      'glossgenius comparison',
      'beauty professional software',
      'salon booking comparison',
    ],
    heroTitle: 'Daisy vs GlossGenius',
    heroSubtitle:
      'A beautifully designed solopreneur tool against a complete AI-powered growth platform, which matches your ambitions?',
    tldr: 'GlossGenius is beautiful, simple and cheap at $24/mo, which suits solo US beauty professionals well. Daisy is built for businesses that intend to scale, with an AI receptionist, team management, a marketplace with cashback and Arabic support. GlossGenius helps you look great, Daisy helps you grow.',
    verdict:
      'For solo professionals in the US, GlossGenius wins on design and simplicity. Its Reception AI covers calls and texts rather than WhatsApp or Instagram, team features are locked behind Platinum, and there is no Arabic or GCC support. If you have growth ambitions, a team, or clients outside those markets, Daisy is the clear choice.',
    featureCommentary: {
      onlineBooking:
        'Both offer strong booking experiences. GlossGenius is known for beautiful booking pages, and the design genuinely sets it apart. Daisy matches the functionality and adds AI that can carry the whole booking conversation.',
      posAndPayments:
        'GlossGenius charges 2.6% per transaction on every plan. Daisy charges flat, with transparent payment processing. At high volume, those GlossGenius transaction fees mount up.',
      clientManagement:
        'GlossGenius offers clean client profiles. Daisy adds AI that helps you read your clients and hold on to them before they drift.',
      staffManagement:
        'A major gap. GlossGenius only supports team management in Platinum at $148/mo, because it is designed for solopreneurs. Daisy puts full staff management in the base platform: scheduling, permissions and performance tracking.',
      marketingAndCrm:
        'GlossGenius puts basic marketing in Standard and the advanced version in Gold. Daisy provides AI-powered marketing automation with cashback rewards that work at acquiring and keeping customers.',
      inventoryManagement:
        'GlossGenius has basic product management and Daisy offers much the same. Neither specializes in deep inventory.',
      reportingAndAnalytics:
        'GlossGenius keeps its AI Growth Analyst in the Platinum tier at $148/mo. Daisy includes AI-powered analytics in the base platform, so smart insights need no premium tier.',
      marketplaceAndDiscovery:
        'GlossGenius has no consumer marketplace. What it gives you is a passive booking page. Daisy actively acquires customers through the marketplace, cashback rewards and AI-powered marketing.',
      aiCapabilities:
        'GlossGenius ships Reception, an AI front desk answering calls and texts 24/7 and booking onto the calendar, free on GlossGenius until 30 November 2026, plus a Growth Analyst in Platinum. The difference is channel coverage: Daisy includes the whole AI ecosystem in the base platform: receptionist, chatbot, scheduling, marketing and analytics.',
    },
    whoShouldChooseDaisy: [
      'You have a team, or expect to, and want staff management included',
      'You want an AI receptionist, not only AI analytics',
      'You need Arabic, or you operate in the GCC',
      'You want a marketplace and cashback bringing customers in',
      'You would rather not pay $148/mo for basic AI features',
      'You are focused on growing a business, not just running a solo practice',
    ],
    whoShouldChooseCompetitor: [
      'You are a solo beauty professional in the US',
      'Design and aesthetics come first for you',
      'You want the simplest tool available, at $24/mo',
      'You need neither team management nor an AI receptionist',
    ],
  },
  // P2: Tier 1 remaining
  {
    slug: 'daisy-vs-mindbody',
    competitorSlug: 'mindbody',
    metaTitle: 'Daisy vs Mindbody: AI, Pricing and Arabic Compared',
    metaDescription:
      'Compare Daisy and Mindbody for salon and spa management: where the AI receptionist works, published pricing, marketplace fees and Arabic support.',
    keywords: ['daisy vs mindbody', 'mindbody alternative', 'mindbody comparison', 'spa software comparison'],
    heroTitle: 'Daisy vs Mindbody',
    heroSubtitle: 'Daisy, built for GCC beauty businesses, against one of the longest-running names in wellness software.',
    // Mindbody homepage, pricing page and US pricing blog, read 2026-10-09.
    tldr: 'Mindbody is an established platform for fitness, wellness and beauty: it says over 600 million classes and appointments were booked through it last year. In the US it starts at $79/mo per location, Accelerate and Ultimate are quoted on request, and the Mindbody app takes 20% of a new client\'s first purchase, capped at $30. Daisy offers an AI receptionist on WhatsApp, Instagram and the booking site, Arabic and English as equals, and cashback-driven growth.',
    verdict: 'Mindbody suits fitness studios and wellness brands that want its marketplace and multi-location tools. For a beauty business in the GCC that wants an AI receptionist on WhatsApp and Instagram, Arabic and English as equals, and pricing it can predict, Daisy is the better choice.',
    featureCommentary: {
      onlineBooking: 'Both offer online booking. Mindbody adds its consumer app, where 3M+ active users search and book. Daisy adds AI self-service that carries the full booking conversation on WhatsApp and Instagram.',
      posAndPayments: 'Both have a POS and integrated payments. Mindbody Payments charges a processing rate plus $0.10 to $0.30 per transaction in North America and Asia, and the Mindbody app takes 20% of a new client\'s first purchase, capped at $30.',
      clientManagement: 'Both keep detailed client profiles. Mindbody\'s AI Insights flags clients at risk and big spenders. Daisy pairs client profiles with engagement that starts on its own.',
      staffManagement: 'Both handle staff scheduling. Mindbody includes unlimited users per location on every plan and has tools for large multi-location teams.',
      marketingAndCrm: 'Mindbody\'s automated email and text campaigns come with the Ultimate plan; lower plans get reminders and confirmations. Daisy treats AI automation with cashback rewards as a core feature.',
      inventoryManagement: 'Inventory tracking is comparable on both platforms.',
      reportingAndAnalytics: 'Both have AI-assisted reporting: Mindbody\'s AI Insights is on every plan, and Daisy adds AI recommendations.',
      marketplaceAndDiscovery: 'The Mindbody app, with 3M+ active users, is Mindbody\'s strongest asset. Daisy answers with 360° acquisition, combining marketplace, cashback and AI marketing.',
      aiCapabilities: 'Mindbody\'s AI Concierge answers questions and books, reschedules and cancels by SMS and web chat, 24/7, on the Ultimate plan or as an Accelerate add-on. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site, in Arabic and English, alongside smart scheduling and marketing automation.',
    },
    whoShouldChooseDaisy: [
      'You want an AI receptionist on WhatsApp and Instagram, in Arabic and English',
      'You need Arabic for the GCC market',
      'You want transparent pricing with no marketplace commissions',
      'You want customer acquisition driven by cashback',
      'You run a salon or spa rather than a class-based studio',
    ],
    whoShouldChooseCompetitor: [
      'You run a large fitness or wellness studio with 10+ staff',
      'You need the reach of Mindbody\'s consumer marketplace',
      'You need enterprise-grade multi-location management',
      'You are already deep inside Mindbody\'s ecosystem',
    ],
  },
  {
    slug: 'daisy-vs-toast',
    competitorSlug: 'toast',
    metaTitle: 'Daisy vs Toast: Beauty Platform vs Restaurant POS',
    metaDescription:
      'Compare Daisy (beauty-specific) and Toast (restaurant POS adapting to services). Purpose-built beauty AI versus repurposed restaurant technology.',
    keywords: ['daisy vs toast', 'toast beauty alternative', 'toast salon software', 'beauty pos comparison'],
    heroTitle: 'Daisy vs Toast',
    heroSubtitle: 'Purpose-built beauty AI platform versus restaurant POS technology adapting to services.',
    tldr: 'Toast is a restaurant technology company moving into services on the back of its POS infrastructure. Daisy is purpose-built for beauty and wellness, with AI, a marketplace and Arabic support. Toast has great POS hardware, Daisy has intelligence built for this industry.',
    verdict: 'Toast is strongest on POS hardware and payment infrastructure. It remains a restaurant company adapting to beauty, though, with no AI receptionist, no beauty-specific workflows, no marketplace and no GCC support. For a growth platform built for beauty, choose Daisy.',
    featureCommentary: {
      onlineBooking: 'Daisy offers beauty booking built for the job, with AI. Toast has basic scheduling adapted from its restaurant model.',
      posAndPayments: 'Toast\'s POS hardware is excellent, among the best the restaurant industry has produced. Daisy offers strong digital payments, but Toast wins on physical POS.',
      clientManagement: 'Daisy provides beauty-specific client profiles with AI insights. Toast offers basic customer management and little more.',
      staffManagement: 'Both handle scheduling. Daisy adds beauty-specific features such as service assignment and skill-based routing.',
      marketingAndCrm: 'Daisy provides AI-powered marketing with cashback. Toast carries over basic email marketing from its restaurant stack.',
      inventoryManagement: 'Toast has strong inventory, inherited from restaurant operations. Daisy covers what a beauty business needs to track.',
      reportingAndAnalytics: 'Both offer reporting. Daisy adds AI insights and recommendations shaped around beauty.',
      marketplaceAndDiscovery: 'Daisy has a consumer beauty marketplace. Toast has none.',
      aiCapabilities: 'Daisy provides the full set: AI receptionist, chatbot, smart scheduling and marketing. Toast has basic automation only.',
    },
    whoShouldChooseDaisy: [
      'You run a beauty or wellness business rather than a restaurant',
      'You want an AI receptionist and chatbot',
      'You need a consumer beauty marketplace',
      'You want Arabic support and GCC compliance',
      'You want workflows built for beauty rather than adapted to it',
    ],
    whoShouldChooseCompetitor: [
      'You need restaurant-grade POS hardware',
      'You run a hybrid restaurant and beauty concept',
      'You are already in the Toast ecosystem',
      'Physical POS terminals matter to you above everything else',
    ],
  },
  // P3: Tier 2 competitors
  {
    slug: 'daisy-vs-boulevard',
    competitorSlug: 'boulevard',
    metaTitle: 'Daisy vs Boulevard: Premium Salon Software Compared',
    metaDescription:
      'Compare Daisy and Boulevard for premium salon management. AI features, pricing ($158-410/mo vs flat), Arabic support, and customer acquisition.',
    keywords: ['daisy vs boulevard', 'boulevard alternative', 'boulevard comparison', 'premium salon software'],
    heroTitle: 'Daisy vs Boulevard',
    heroSubtitle: 'Two premium platforms, but only one includes AI receptionist and customer acquisition at base pricing.',
    tldr: 'Boulevard is beautifully designed and has Precision Scheduling AI, but it runs $158-410/mo with the AI locked behind $295+. Daisy includes the full AI ecosystem at base pricing, along with Arabic support and a marketplace.',
    verdict: 'Boulevard is excellent for premium US salons that put design first and can afford $295+/mo for the AI features. Daisy offers more AI for less, and adds the GCC support Boulevard does not have.',
    featureCommentary: {
      onlineBooking: 'Both offer excellent booking, and Boulevard\'s Precision Scheduling AI, which arranges slot allocation, is genuinely innovative.',
      posAndPayments: 'Boulevard has a strong POS from $158+/mo. Daisy offers a comparable one at flat pricing, with nothing withheld by tier.',
      clientManagement: 'Both are good at client management, and Boulevard\'s client experience features suit luxury salons particularly well.',
      staffManagement: 'Both handle staff well, and Boulevard adds franchise management in its Prestige tier.',
      marketingAndCrm: 'Boulevard keeps marketing in Premier at $295/mo. Daisy includes AI marketing and cashback at base pricing.',
      inventoryManagement: 'Inventory tracking is good on both.',
      reportingAndAnalytics: 'Both provide strong reporting, with Boulevard\'s Duo AI assistant adding insights in the Premier tier.',
      marketplaceAndDiscovery: 'Boulevard has no consumer marketplace. Daisy acquires through marketplace and cashback together.',
      aiCapabilities: 'Boulevard puts Precision Scheduling and the Duo assistant in Premier at $295/mo. Daisy includes receptionist, chatbot, scheduling and marketing at base pricing.',
    },
    whoShouldChooseDaisy: [
      'You want an AI receptionist and chatbot at base pricing',
      'You need Arabic support for GCC markets',
      'You want a consumer marketplace bringing customers in',
      'You would rather pay flat than climb $158-410/mo tiers',
      'You want cashback rewards holding on to customers',
    ],
    whoShouldChooseCompetitor: [
      'You run a premium US luxury salon or spa',
      'You need franchise management features',
      'Design aesthetics are your absolute first priority',
      'You can budget $295+/mo for the AI features',
    ],
  },
  {
    // Facts re-verified 2026-10-09 against business.glamera.com (pricing, home,
    // about) and Wamda (27 Jan 2026, Bookr MoU). See tier2Data.ts.
    slug: 'daisy-vs-glamera',
    competitorSlug: 'glamera',
    metaTitle: 'Daisy vs Glamera: GCC Beauty Platforms Compared',
    metaDescription:
      'Compare Daisy and Glamera for Arabic-speaking beauty businesses: AI, pricing in SAR and USD, POS, branding and GCC coverage, side by side.',
    keywords: ['daisy vs glamera', 'glamera alternative', 'arabic salon software', 'gcc beauty platform'],
    heroTitle: 'Daisy vs Glamera',
    heroSubtitle: 'Two salon platforms built for Arabic-speaking markets, compared on AI, pricing, branding and rewards.',
    tldr: 'Glamera is a Riyadh-based salon platform with POS in every plan, inventory from its Basic plan and published prices from SAR 125 a month. Daisy adds a 24/7 AI receptionist on WhatsApp, Instagram and the booking site, plus cashback rewards, and is live in all six GCC countries. Both offer Arabic and English.',
    verdict: 'Glamera suits a business that wants Saudi-built operations software with ZATCA e-invoicing and SAR pricing, and does not need an AI receptionist yet. If you want AI answering clients on WhatsApp and Instagram around the clock, or cashback to bring them back, Daisy is the better fit.',
    featureCommentary: {
      onlineBooking: 'Glamera takes online bookings through its Glamera Pro website builder and a self-service kiosk. Daisy adds AI booking on WhatsApp and Instagram alongside the booking site.',
      posAndPayments: 'Both include POS. Glamera puts a POS screen and invoicing in every plan, with ZATCA e-invoicing and payment integrations including mada, Apple Pay, Tabby and Tamara. Daisy provides full point-of-sale and payment processing.',
      clientManagement: 'Both keep client records and history. Daisy adds AI-driven client intelligence.',
      staffManagement: 'Glamera includes staff management from its Basic plan, and its staff app costs SAR 10 per employee a month. Daisy includes full staff management, with AI arranging it.',
      marketingAndCrm: 'Glamera lists marketing tools, SMS and WhatsApp integration, and loyalty programs. Daisy provides AI-powered marketing with cashback rewards.',
      inventoryManagement: 'Glamera includes inventory management from its Basic plan at SAR 225 a month. Daisy covers the basics.',
      reportingAndAnalytics: 'Glamera has essential reports on Foundation, advanced reports on Basic and professional reports on Advanced, plus BI dashboards. Daisy adds AI insights you can act on.',
      marketplaceAndDiscovery: 'Glamera\'s current pages centre on business tools and your own booking website rather than a consumer marketplace. Daisy runs marketplace, cashback and AI marketing across 6 GCC countries.',
      aiCapabilities: 'Glamera\'s published pages do not list AI features as of October 2026; in January 2026 it said it plans to roll out AI for the sector. Daisy provides a full AI ecosystem: receptionist, chatbot, scheduling, marketing and analytics.',
    },
    whoShouldChooseDaisy: [
      'You want an AI receptionist covering WhatsApp and Instagram 24/7',
      'You want cashback rewards bringing clients back',
      'You want AI help with marketing and reporting',
      'You want your own brand on the booking page and client messages',
    ],
    whoShouldChooseCompetitor: [
      'You run a Saudi business and want ZATCA e-invoicing built in',
      'You want published SAR pricing with POS in every plan',
      'You need an integrated accounting system, which comes with Glamera\'s Advanced plan',
      'You want a self-service check-in kiosk',
    ],
  },
  {
    // Facts re-verified 2026-10-09 against dingg.app country sites and AI page.
    slug: 'daisy-vs-dingg',
    competitorSlug: 'dingg',
    metaTitle: 'Daisy vs DINGG: AI Salon Platforms Compared',
    metaDescription:
      'Compare Daisy and DINGG for AI salon software in the GCC: AI channels, Arabic, pricing, loyalty and country coverage.',
    keywords: ['daisy vs dingg', 'dingg alternative', 'ai salon software', 'gcc salon management'],
    heroTitle: 'Daisy vs DINGG',
    heroSubtitle: 'Both publish AI that books appointments on WhatsApp. They differ on channels, language, pricing and GCC coverage.',
    tldr: 'DINGG is an India-based salon platform whose AI assistant answers clients and takes bookings on WhatsApp. It runs country sites for five GCC states and gives prices on request. Daisy\'s AI receptionist also covers Instagram, in Arabic and English, and Daisy adds cashback rewards, a consumer marketplace and published prices. Daisy is live in all six GCC countries.',
    verdict: 'DINGG is a credible AI competitor with a broad feature set and local billing in five GCC states. Daisy is the better fit if you need Bahrain, an Arabic interface, an AI receptionist on Instagram, cashback rewards, or prices you can see before a demo.',
    featureCommentary: {
      onlineBooking: 'Both offer 24/7 online booking. DINGG books through your website and its WhatsApp AI assistant; Daisy\'s AI books on WhatsApp, Instagram and the booking site.',
      posAndPayments: 'Both offer POS. DINGG bills in local currency with VAT-compliant invoices in its five GCC markets. Daisy carries payment options across all six GCC countries.',
      clientManagement: 'Both handle client profiles. DINGG adds AI client summaries for upselling, and Daisy adds AI for retention and personalization.',
      staffManagement: 'Both handle scheduling, commissions and team management.',
      marketingAndCrm: 'DINGG lists email, SMS and WhatsApp campaigns, segmentation and AI-driven WhatsApp marketing. Daisy includes AI marketing with cashback rewards.',
      inventoryManagement: 'DINGG lists stock alerts, supplier ordering and stock across sites. Daisy covers the basics.',
      reportingAndAnalytics: 'DINGG lists AI insights and predictive analytics. Daisy adds AI recommendations and forecasting.',
      marketplaceAndDiscovery: 'DINGG does not list a consumer marketplace. Daisy acquires customers through marketplace and cashback together.',
      aiCapabilities: 'Both publish AI that takes bookings. DINGG\'s assistant works on WhatsApp, SMS and your website, alongside AI scheduling, segmentation and analytics. Daisy\'s AI receptionist covers WhatsApp, Instagram and the booking site, takes payment inside the booking flow, and runs in Arabic and English.',
    },
    whoShouldChooseDaisy: [
      'You operate in Bahrain, or across all six GCC countries',
      'You want an AI receptionist that also answers on Instagram',
      'You want cashback rewards keeping clients around',
      'You want white-label control of the brand',
      'You want an Arabic interface for your staff',
    ],
    whoShouldChooseCompetitor: [
      'You operate in India or the US as well as the GCC',
      'You want AI scheduling and predictive analytics in one suite',
      'You run a franchise and want pricing and offers set by location',
    ],
  },
  {
    // Facts re-verified 2026-10-09 against repeatmd.com (home, pricing,
    // how-it-works, about) and its V3 and Beauty Bank posts.
    slug: 'daisy-vs-repeatmd',
    competitorSlug: 'repeatmd',
    metaTitle: 'Daisy vs RepeatMD: Salon Platform vs Patient Rewards App',
    metaDescription:
      'Compare Daisy and RepeatMD: an all-in-one beauty platform with an AI receptionist, against a branded patient rewards and ecommerce app for US aesthetic practices.',
    keywords: ['daisy vs repeatmd', 'repeatmd alternative', 'med spa software', 'beauty cashback platform'],
    heroTitle: 'Daisy vs RepeatMD',
    heroSubtitle: 'An all-in-one platform with cashback built in, against a branded rewards and ecommerce app that runs beside your practice software.',
    tldr: 'RepeatMD gives US and Canadian aesthetic practices a branded app for rewards, memberships, ecommerce and AI treatment advisors. It runs alongside the practice\'s existing EMR or practice management system, and prices on request. Daisy puts an AI receptionist, booking, POS, marketing and cashback in one platform, in Arabic and English.',
    verdict: 'RepeatMD suits a US med spa that already has practice software and wants a branded app to sell memberships and treatments. For a salon, spa or clinic that wants booking, POS and growth tools in one place, or that operates in the GCC, Daisy is the better fit.',
    featureCommentary: {
      onlineBooking: 'RepeatMD works alongside your EMR or practice management system, and its AI advisors can book appointments from the patient app. Daisy provides full AI-powered booking.',
      posAndPayments: 'RepeatMD handles in-app purchases of treatments, memberships and products, with Affirm financing. Daisy offers a complete POS and payment processing.',
      clientManagement: 'RepeatMD has good client profiles built around retention. Daisy matches them and adds AI.',
      staffManagement: 'RepeatMD does not list staff scheduling tools. Daisy provides complete staff management.',
      marketingAndCrm: 'This is where RepeatMD is strongest, with mobile rewards, memberships, Beauty Bank pre-saved balances, text marketing and its Adonis and Aria AI advisors. Daisy offers AI marketing with cashback, and the rest of the platform besides.',
      inventoryManagement: 'RepeatMD does not list inventory management; its SkinDrop store sells products without the practice holding stock. Daisy covers the basics.',
      reportingAndAnalytics: 'RepeatMD has sales and membership dashboards. Daisy looks at the wider business too.',
      marketplaceAndDiscovery: 'RepeatMD focuses on keeping a practice\'s own patients coming back through its branded app. Daisy adds marketplace discovery and cashback.',
      aiCapabilities: 'Both publish AI that books. RepeatMD\'s Adonis and Aria work inside the patient app and also recommend and sell treatments. Daisy\'s AI receptionist answers on WhatsApp, Instagram and the booking site, in Arabic and English, and covers the full customer journey.',
    },
    whoShouldChooseDaisy: [
      'You want booking, POS and operations in the same platform as your loyalty program',
      'You want published prices',
      'You want an AI receptionist on WhatsApp and Instagram',
      'You run a salon, spa or barbershop rather than a medical practice',
      'You need Arabic support and GCC compliance',
    ],
    whoShouldChooseCompetitor: [
      'You run a med spa or aesthetic practice in the US or Canada',
      'Your EMR or practice management system is already in place and you want a branded app on top',
      'You want AI advisors that sell treatments and memberships inside your own app',
    ],
  },
  {
    // Facts re-verified 2026-10-09 against info.planity.com, Planity's
    // 20 Feb 2024 press release and Maddyness (8 Jul 2026).
    slug: 'daisy-vs-planity',
    competitorSlug: 'planity',
    metaTitle: 'Daisy vs Planity: GCC Growth Platform vs French Marketplace',
    metaDescription:
      'Compare Daisy and Planity: an AI-powered growth platform for the GCC, in Arabic and English, against France\'s leading commission-free beauty booking marketplace.',
    keywords: ['daisy vs planity', 'planity alternative', 'beauty marketplace comparison'],
    heroTitle: 'Daisy vs Planity',
    heroSubtitle: 'An AI-powered platform built for the GCC against France\'s commission-free beauty marketplace. Different markets, different approaches.',
    tldr: 'Planity leads beauty booking in France, with 60,000 businesses in France, Belgium and Germany, no commission on bookings and more than 10 million bookings a month (February 2024). Daisy is built for the GCC, with a native Arabic and English interface and local payment methods, and is live in all six GCC countries.',
    verdict: 'In France, Belgium and Germany, Planity is the established choice. In the GCC, Daisy fits better, with Arabic, local payments, an AI receptionist on WhatsApp and Instagram, and cashback rewards.',
    featureCommentary: {
      onlineBooking: 'Planity is excellent at booking in its markets, with more than 10 million bookings a month in February 2024. Daisy provides AI-powered booking for the GCC.',
      posAndPayments: 'Planity has an NF525-certified till, its own card terminal and Tap to Pay. Daisy offers full GCC-compliant payments.',
      clientManagement: 'Both handle client profiles, and Daisy adds AI on top.',
      staffManagement: 'Both handle scheduling, and Planity adds working-time tracking.',
      marketingAndCrm: 'Planity offers a custom loyalty program, SMS campaigns at €0.07 excl. VAT per message and a custom website. Daisy provides AI-powered marketing with cashback.',
      inventoryManagement: 'Both track product stock, and Planity sets low-stock alerts.',
      reportingAndAnalytics: 'Both offer reporting. Daisy adds AI insights.',
      marketplaceAndDiscovery: 'Planity runs France\'s leading beauty booking marketplace, with 15 million users. Daisy runs one for the GCC, with cashback attached.',
      aiCapabilities: 'Planity launched an AI phone assistant in July 2026 that answers calls and books appointments. Daisy\'s AI receptionist covers WhatsApp, Instagram and the booking site in Arabic and English, alongside AI marketing and insights.',
    },
    whoShouldChooseDaisy: [
      'You operate in the GCC',
      'You want an AI receptionist on WhatsApp and Instagram',
      'You need Arabic support',
      'You want cashback rewards for customer retention',
      'You need GCC compliance and local payment methods',
    ],
    whoShouldChooseCompetitor: [
      'You operate in France, Belgium or Germany',
      'You want the reach of France\'s leading beauty marketplace',
      'You want commission-free bookings and an AI assistant that answers the phone',
    ],
  },
  // P4: Tier 3 competitors
  {
    slug: 'daisy-vs-mangomint',
    competitorSlug: 'mangomint',
    metaTitle: 'Daisy vs Mangomint: AI Growth vs Clean Operations',
    metaDescription: 'Compare Daisy and Mangomint. AI-powered growth platform versus premium operations-focused salon software ($120 per location plus $10 per user).',
    keywords: ['daisy vs mangomint', 'mangomint alternative', 'premium salon software'],
    heroTitle: 'Daisy vs Mangomint',
    heroSubtitle: 'Mangomint runs clean operations. Daisy adds AI and a cashback marketplace to grow the business.',
    tldr: 'Mangomint has a clean design and a Capterra rating of 5.0, and charges $120 per location plus $10 per user each month. It serves the US and Canada, and its published pages list no consumer marketplace or AI features. Daisy adds an AI receptionist, a marketplace with cashback and Arabic support at a more accessible price.',
    verdict: 'For a salon or spa in the US or Canada that wants clean operations above all, Mangomint is a strong choice. For a business that wants AI and growth tools as well as operations, Daisy is the better fit.',
    featureCommentary: {
      onlineBooking: 'Both offer excellent booking, and Mangomint earns its praise for clean, intuitive design.',
      posAndPayments: 'Both handle POS and payments, and Mangomint\'s hardware integration is tidy.',
      clientManagement: 'Both handle client profiles well, with Daisy adding AI insights.',
      staffManagement: 'Staff management is a Mangomint strength, with permissions, commissions and a payroll add-on.',
      marketingAndCrm: 'Mangomint offers campaigns, automated flows and offers through its marketing add-on, from $30 a month. Daisy includes AI-powered marketing with cashback.',
      inventoryManagement: 'Both cover the inventory basics.',
      reportingAndAnalytics: 'Both offer solid reporting, with Daisy adding AI recommendations.',
      marketplaceAndDiscovery: 'Mangomint\'s published pages list no consumer marketplace. Daisy provides one, with cashback alongside.',
      aiCapabilities: 'Mangomint publishes workflow automation but lists no AI features as of October 2026. Daisy has an AI receptionist on WhatsApp, Instagram and the booking site.',
    },
    whoShouldChooseDaisy: ['You want an AI receptionist', 'You need Arabic and GCC support', 'You want a marketplace and cashback that bring in new customers', 'You want a more accessible price'],
    whoShouldChooseCompetitor: ['You run a salon or spa in the US or Canada and want clean, automated operations', 'Clean design matters most', 'You do not need a marketplace or an AI receptionist'],
  },
  {
    slug: 'daisy-vs-square-appointments',
    competitorSlug: 'square-appointments',
    metaTitle: 'Daisy vs Square Appointments: Salon Software Compared (2026)',
    metaDescription: 'Compare Daisy, built for beauty and wellness, with Square Appointments, Square\'s booking software for many kinds of appointment business. AI, marketplace, pricing and Arabic support.',
    keywords: ['daisy vs square appointments', 'square appointments alternative', 'beauty scheduling software'],
    heroTitle: 'Daisy vs Square Appointments',
    heroSubtitle: 'Beauty software with an AI receptionist, against the booking side of Square\'s point-of-sale system.',
    tldr: 'Square Appointments is Square\'s booking software, with a free plan, paid plans from $49 a month per location and Square Go, a free marketplace app. Daisy is built for beauty, with an AI receptionist on WhatsApp, Instagram and the booking site, cashback and Arabic support.',
    verdict: 'Square Appointments suits a business that wants to start on a free plan inside Square\'s payments system. Daisy suits a beauty business that wants an AI receptionist that takes bookings, cashback rewards and an Arabic interface, none of which Square lists as of October 2026.',
    featureCommentary: {
      onlineBooking: 'Square offers a free booking site, booking from Instagram and Facebook, and Square Go. Daisy adds an AI receptionist that books clients on WhatsApp, Instagram and the booking site.',
      posAndPayments: 'Square\'s POS is among the best anywhere, which its payments heritage explains. Daisy matches it on what a beauty business needs.',
      clientManagement: 'Square creates customer profiles automatically and stores preferences, documents and images. Daisy offers client profiles built for beauty, with AI attached.',
      staffManagement: 'Square includes unlimited staff calendars on every plan, with multi-staff booking on Square Plus and Premium. Daisy includes full staff management shaped around beauty.',
      marketingAndCrm: 'Square offers email and text marketing and a points-based loyalty program. Daisy includes AI campaigns with cashback.',
      inventoryManagement: 'Square has decent product management, inherited from its retail side.',
      reportingAndAnalytics: 'Square offers standard reports, and Square AI (beta) answers questions about your data. Daisy adds AI insights aimed at beauty.',
      marketplaceAndDiscovery: 'Square Go is Square\'s free marketplace app for appointment businesses. Daisy\'s marketplace adds cashback for clients.',
      aiCapabilities: 'Square AI (beta) is on every Square plan, and Square Assistant answers client texts to confirm, reschedule or cancel. Daisy\'s AI receptionist takes new bookings on WhatsApp, Instagram and the booking site, in Arabic and English.',
    },
    whoShouldChooseDaisy: ['You want features built for beauty', 'You need an AI receptionist', 'You want a marketplace with cashback rewards for clients', 'You need Arabic/GCC support'],
    whoShouldChooseCompetitor: ['You need free scheduling to begin with', 'You are already in the Square POS ecosystem', 'You need retail-grade POS hardware'],
  },
  {
    slug: 'daisy-vs-phorest',
    competitorSlug: 'phorest',
    metaTitle: 'Daisy vs Phorest: Salon Software Compared (2026)',
    metaDescription: 'Compare Daisy and Phorest for salon management. An AI-powered growth platform against Phorest\'s loyalty-focused salon software.',
    keywords: ['daisy vs phorest', 'phorest alternative', 'salon crm comparison'],
    heroTitle: 'Daisy vs Phorest',
    heroSubtitle: 'Modern AI-powered growth against an established loyalty-focused CRM. Which approach wins?',
    tldr: 'Phorest has strong client management and loyalty tools, has been around since 2003, and sells Front Desk AI for SMS and WhatsApp. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site in Arabic and English, and Daisy adds a consumer marketplace with cashback.',
    verdict: 'Phorest is very good at holding on to clients, and its AI now answers SMS and WhatsApp. Daisy covers acquisition as well as retention, with a cashback marketplace and an Arabic interface, which suits a business trying to grow rather than only keep what it has.',
    featureCommentary: {
      onlineBooking: 'Both offer solid online booking, and both use AI to answer booking requests: Phorest on SMS and WhatsApp, Daisy on WhatsApp, Instagram and the booking site.',
      posAndPayments: 'POS and payments are handled well on both.',
      clientManagement: 'CRM is where Phorest is strongest, and it is what they built the product around. Daisy matches it and adds AI.',
      staffManagement: 'Both handle staff scheduling.',
      marketingAndCrm: 'Phorest is strong on loyalty and marketing automation. Daisy adds AI campaigns with cashback.',
      inventoryManagement: 'Both cover the inventory basics.',
      reportingAndAnalytics: 'Reporting is solid on both.',
      marketplaceAndDiscovery: 'Phorest offers Reserve with Google and an Ads Manager for Facebook and Instagram, and lists no consumer marketplace. Daisy provides a marketplace with cashback attached.',
      aiCapabilities: 'Phorest sells Front Desk AI for SMS and WhatsApp, Cheat Sheet AI for client summaries and AI ad audiences. Daisy\'s AI receptionist adds Instagram and the booking site, in Arabic and English.',
    },
    whoShouldChooseDaisy: ['You want an AI receptionist on Instagram as well as WhatsApp, in Arabic and English', 'You need Arabic and GCC support', 'You want a marketplace bringing clients in', 'You want cashback rewards'],
    whoShouldChooseCompetitor: ['You run a salon in one of Phorest\'s markets and want deep CRM and loyalty', 'A branded booking app for your clients matters to you'],
  },
  {
    slug: 'daisy-vs-acuity-scheduling',
    competitorSlug: 'acuity-scheduling',
    metaTitle: 'Daisy vs Acuity Scheduling: Beauty AI vs Generic Booking',
    // Acuity facts: acuityscheduling.com/pricing, /features, /features/point-of-sale, read 2026-10-09.
    metaDescription: 'Compare Daisy (beauty AI platform) and Acuity Scheduling (general scheduling) on AI, payments, marketplace and Arabic support.',
    keywords: ['daisy vs acuity scheduling', 'acuity alternative for salons', 'salon scheduling comparison'],
    heroTitle: 'Daisy vs Acuity Scheduling',
    heroSubtitle: 'A general scheduling tool from $16/mo billed annually, against a growth platform built for beauty businesses.',
    tldr: 'Acuity is strong general scheduling software, from $16/mo billed annually, with payments, client profiles and an AI Booking Assistant on its Premium plan. Daisy is built for beauty, with an AI receptionist on WhatsApp, Instagram and the booking site, a consumer marketplace with cashback, and Arabic and English as equals.',
    verdict: 'For appointment scheduling across many kinds of business, Acuity is a strong choice. For a beauty business that wants an AI receptionist on WhatsApp and Instagram, a marketplace with cashback, and Arabic, Daisy is built for the job.',
    featureCommentary: {
      onlineBooking: 'Scheduling is Acuity\'s core, and it does it very well. Daisy matches that and connects booking to its AI receptionist.',
      posAndPayments: 'Acuity takes deposits online and in-person payments by card reader or Tap to Pay, through Stripe, Square or PayPal. Daisy has a POS built into the same platform.',
      clientManagement: 'Acuity keeps client profiles with notes, history and intake forms. Daisy provides a CRM built for beauty, with AI.',
      staffManagement: 'Acuity gives each staff member a calendar, with permissions and separate time zones. Daisy covers staff scheduling too.',
      marketingAndCrm: 'Acuity offers coupons, gift certificates, packages and email marketing integrations. Daisy includes AI campaigns with cashback.',
      inventoryManagement: 'Inventory tracking isn\'t listed on Acuity\'s published pages as of October 2026. Daisy covers what a beauty business stocks.',
      reportingAndAnalytics: 'Acuity reports on appointments, no-shows and performance. Daisy provides AI-powered analytics.',
      marketplaceAndDiscovery: 'A consumer marketplace isn\'t listed on Acuity\'s published pages as of October 2026. Daisy provides one, with cashback alongside.',
      aiCapabilities: 'Acuity\'s Premium plan includes an AI Booking Assistant chat bot for clients. Daisy\'s AI receptionist works on WhatsApp, Instagram and the booking site, in Arabic and English.',
    },
    whoShouldChooseDaisy: ['You run a beauty business and want software built for it', 'You want an AI receptionist on WhatsApp and Instagram', 'You want a marketplace and cashback bringing clients in', 'You need Arabic and GCC support'],
    whoShouldChooseCompetitor: ['You need scheduling for a business outside beauty, or across several kinds of service', 'You want a plan from $16/mo billed annually', 'Your website runs on Squarespace'],
  },
];

// -----------------------------------------------------------------------------
// Alternative Pages: "[Competitor] Alternative"
// -----------------------------------------------------------------------------

export const alternativePages: AlternativePageData[] = [
  // P2: Tier 1
  {
    slug: 'fresha',
    competitorSlug: 'fresha',
    metaTitle: 'Best Fresha Alternative for Salons (2026)',
    metaDescription: 'Looking for a Fresha alternative? Daisy offers AI receptionist, transparent pricing, Arabic support, and cashback, without per-transaction charges or marketplace commission.',
    keywords: ['fresha alternative', 'fresha replacement', 'better than fresha', 'salon software like fresha'],
    heroTitle: 'Looking for a Fresha Alternative?',
    heroSubtitle: 'Subscription fees, then transaction fees, then marketplace commissions. The costs keep stacking.',
    painPoints: [
      'Online payments charged at 4.90% + AED 0.75, eating into every transaction',
      'A one-time marketplace commission on each new client it introduces: 50% with an AED 20 minimum in the UAE, 20% in its USD markets',
      'Marketing is charged per message once the first 50 emails each month are used',
      'The AI Concierge is a paid add-on at $99.95 per location per month, and its published pages do not list WhatsApp or Instagram as supported channels',
      'Marketplace bookings carry Fresha branding; a fully branded site is a paid Smart Website add-on',
      'A published monthly subscription that sits on top of transaction fees and marketplace commission',
    ],
    switchingReasons: [
      'An AI receptionist covering bookings, payments and customer service 24/7',
      'Flat pricing with nothing added per transaction and no marketplace commission',
      'Arabic and English as equals, with cashback rewards built for GCC clients',
      'Cashback rewards that build loyalty and bring people back',
      'A booking page carrying your logo, name and colours, with no platform branding',
      'A straightforward migration, with help moving your data',
    ],
    topAlternatives: ['booksy', 'vagaro', 'glossgenius', 'square-appointments'],
  },
  {
    slug: 'booksy',
    competitorSlug: 'booksy',
    metaTitle: 'Best Booksy Alternative for Beauty Pros (2026)',
    metaDescription: 'Outgrowing Booksy? Daisy offers full AI ecosystem, flat pricing (no per-provider fees), Arabic support, and cashback-powered customer acquisition.',
    keywords: ['booksy alternative', 'booksy replacement', 'better than booksy', 'booking app like booksy'],
    heroTitle: 'Looking for a Booksy Alternative?',
    heroSubtitle: 'A strong mobile app, but each extra team member adds $20 a month and the AI Receptionist works on phone calls.',
    // Booksy facts re-verified 2026-10-09 on biz.booksy.com and help.booksy.com.
    painPoints: [
      'Each additional team member adds $20 a month to the $29.99 base, so a five-person team pays $109.99 a month before tax',
      'The AI Receptionist (beta) answers phone calls in English and Spanish; Booksy\'s published pages do not list WhatsApp or Instagram as channels',
      'No Arabic in the business app, and no GCC country on Booksy\'s published list',
      'Loyalty runs on digital stamp cards, and cashback rewards are not listed on Booksy\'s published pages',
      'Booking sites are hosted on the Booksy domain, with a widget for your own website',
      'Optional Boost charges a one-time 30% of a new client\'s first visit, up to $100',
    ],
    switchingReasons: [
      'Flat pricing whatever the team size, so growing costs you nothing extra',
      'The full AI ecosystem: receptionist, chatbot, smart scheduling and marketing',
      'Native Arabic and English, which opens the GCC',
      'Cashback rewards that keep customers returning without prompting',
      'A branded booking page, so it is your brand and your experience throughout',
      'No contracts, and help with the migration',
    ],
    topAlternatives: ['fresha', 'vagaro', 'glossgenius', 'boulevard'],
  },
  {
    slug: 'vagaro',
    competitorSlug: 'vagaro',
    metaTitle: 'Best Vagaro Alternative for Growing Salons (2026)',
    metaDescription: 'Looking beyond Vagaro? Daisy adds an AI receptionist on WhatsApp and Instagram, Arabic support and cashback acquisition tools.',
    keywords: ['vagaro alternative', 'vagaro replacement', 'better than vagaro', 'salon software like vagaro'],
    heroTitle: 'Looking for a Vagaro Alternative?',
    heroSubtitle: 'Vagaro is strong on operations. Daisy adds Arabic, AI on WhatsApp and Instagram, and cashback.',
    // Vagaro facts re-verified 2026-10-09 in Vagaro's help centre.
    painPoints: [
      '$10 a month for each additional calendar, up to seven paid licences',
      'Vera Receptionist is a $10/month add-on that needs a Text Marketing plan, and over SMS it sends a booking link rather than booking',
      'No Arabic interface; Vagaro lists the US, Canada, the UK and Australia as its markets',
      'Fill My Books marketplace promotion charges 20% on a new customer\'s first booking',
      'Text marketing is a paid plan, from $20 a month for 1,000 credits',
      'Loyalty is points-based, and cashback rewards are not listed on Vagaro\'s published pages',
    ],
    switchingReasons: [
      'An AI receptionist on WhatsApp, Instagram and your booking site, covering bookings and payments 24/7',
      'Flat pricing covering every member of staff, with no per-calendar surcharge',
      'Cashback rewards that turn a first visit into a regular one',
      'AI-powered marketing that keeps running without you',
      'Arabic and English support, which opens the GCC',
      'A 30-day overlap period, so you switch without losing a single booking',
    ],
    topAlternatives: ['fresha', 'booksy', 'mindbody', 'boulevard'],
  },
  {
    slug: 'glossgenius',
    competitorSlug: 'glossgenius',
    metaTitle: 'Best GlossGenius Alternative for Growing Teams (2026)',
    metaDescription: 'Outgrowing GlossGenius? Daisy offers team management, AI receptionist, and marketplace, without paying $148/mo for basic AI.',
    keywords: ['glossgenius alternative', 'glossgenius replacement', 'better than glossgenius'],
    heroTitle: 'Looking for a GlossGenius Alternative?',
    heroSubtitle: 'Beautiful design, and a real pleasure for solo pros. Then you decide to grow.',
    painPoints: [
      'Team management locked inside the $148/mo Platinum tier',
      'AI that stops at Growth Analyst analytics, with no receptionist or chatbot',
      'No consumer marketplace, so nobody discovers you through it',
      'US-only, with no Arabic and no international support',
      '2.6% taken in transaction fees on every payment',
      'Designed around solopreneurs rather than businesses that are growing',
    ],
    switchingReasons: [
      'Team management from day one, so hiring does not mean upgrading',
      'The full AI ecosystem: receptionist, chatbot, scheduling and marketing',
      'A consumer marketplace with cashback, bringing customers in',
      'Arabic and English support, which opens the GCC',
      'AI at base pricing, with no $148/mo premium to reach it',
      'Built to carry you from working alone to running a team',
    ],
    topAlternatives: ['fresha', 'booksy', 'boulevard', 'vagaro'],
  },
  // P3: Tier 2
  {
    slug: 'mindbody',
    competitorSlug: 'mindbody',
    metaTitle: 'Best Mindbody Alternative for Salons (2026)',
    metaDescription: 'Looking for a Mindbody alternative? Daisy offers an AI receptionist on WhatsApp and Instagram, published pricing and Arabic support for GCC salons and spas.',
    keywords: ['mindbody alternative', 'mindbody replacement', 'better than mindbody'],
    heroTitle: 'Looking for a Mindbody Alternative?',
    heroSubtitle: 'One of the biggest names in wellness software, compared with Daisy on price, AI, marketplace fees and Arabic support.',
    // Mindbody pricing page, US pricing blog and App Store listing, read 2026-10-09.
    painPoints: [
      'Only the $79/mo US entry price is published; Accelerate and Ultimate are quoted, and the Mindbody app takes 20% of a new client\'s first purchase (capped at $30)',
      'AI Concierge, which works by SMS and web chat, comes with Ultimate or as an add-on on Accelerate',
      'Arabic isn\'t among the Mindbody Business app\'s listed languages',
      'Contract terms depend on the plan and billing terms, and cancelling may need advance notice',
      'Many features are built for class-based fitness studios',
    ],
    switchingReasons: [
      'An AI-powered platform built for salons and spas',
      'An AI receptionist on WhatsApp, Instagram and the booking site, 24/7',
      'Transparent pricing with no marketplace commissions',
      'Arabic and English support for GCC markets',
      'Built for beauty and wellness rather than adapted to them',
      'Cashback rewards in place of a commission-taking marketplace',
    ],
    topAlternatives: ['fresha', 'vagaro', 'boulevard', 'booksy'],
  },
  {
    slug: 'boulevard',
    competitorSlug: 'boulevard',
    metaTitle: 'Best Boulevard Alternative for Salons (2026)',
    metaDescription: 'Looking beyond Boulevard? Get AI receptionist, marketplace, and Arabic support at more accessible pricing.',
    keywords: ['boulevard alternative', 'boulevard replacement', 'salon software like boulevard'],
    heroTitle: 'Looking for a Boulevard Alternative?',
    heroSubtitle: 'Premium design and smart scheduling, but $158-410/mo with no marketplace is hard to justify.',
    painPoints: [
      'Premium pricing that starts at $158/mo and reaches $295+/mo before the AI appears',
      'No consumer marketplace bringing customers in',
      'US-only, with no Arabic and no GCC support',
      'AI locked inside the Premier tier at $295/mo',
      'No cashback or loyalty rewards built in',
    ],
    switchingReasons: [
      'An AI receptionist included at base pricing',
      'A consumer marketplace with cashback, doing the acquiring',
      'Arabic/English support for GCC expansion',
      'A more accessible price, with the full AI included',
      'White-label control of your brand',
    ],
    topAlternatives: ['mangomint', 'vagaro', 'glossgenius', 'booksy'],
  },
  // P4: Tier 3
  {
    slug: 'mangomint',
    competitorSlug: 'mangomint',
    metaTitle: 'Best Mangomint Alternative: AI + Growth (2026)',
    metaDescription: 'Want more than clean operations? Daisy adds an AI receptionist, a marketplace, cashback and Arabic support to salon management.',
    keywords: ['mangomint alternative', 'mangomint replacement'],
    heroTitle: 'Looking for a Mangomint Alternative?',
    heroSubtitle: 'Clean operations software, priced per location and per user, with no marketplace or AI features listed.',
    painPoints: [
      'Cost climbs with every location and user, at $120 per location plus $10 per user',
      'No consumer marketplace listed on Mangomint\'s published pages',
      'Serves the US and Canada, with no Arabic interface or GCC presence listed',
      'Marketing messages need the marketing add-on, from $30 a month',
    ],
    switchingReasons: [
      'An AI receptionist and chatbot included',
      'A consumer marketplace with cashback',
      'Arabic and English support',
      'Growth tools sitting alongside clean operations',
    ],
    topAlternatives: ['boulevard', 'vagaro', 'glossgenius'],
  },
  {
    slug: 'square-appointments',
    competitorSlug: 'square-appointments',
    metaTitle: 'Best Square Appointments Alternative for Salons (2026)',
    metaDescription: 'Outgrowing Square Appointments? Daisy offers beauty-specific AI, marketplace, and Arabic support.',
    keywords: ['square appointments alternative', 'square appointments replacement'],
    heroTitle: 'Looking for a Square Appointments Alternative?',
    heroSubtitle: 'A strong payments system, but a beauty business may want software built only for beauty.',
    painPoints: [
      'Sold to many kinds of appointment business, not built only for beauty',
      'No AI receptionist for new bookings listed by Square (October 2026)',
      'No cashback rewards: Square Loyalty uses points',
      'No Arabic interface and no GCC country on Square\'s region list',
    ],
    switchingReasons: [
      'Built for beauty and wellness from the start',
      'An AI receptionist covering bookings and customer service',
      'A consumer marketplace, with cashback attached',
      'Arabic and English support for GCC markets',
    ],
    topAlternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius'],
  },
  {
    slug: 'phorest',
    competitorSlug: 'phorest',
    metaTitle: 'Best Phorest Alternative: AI-Powered Growth (2026)',
    metaDescription: 'Moving beyond Phorest? Daisy adds an AI receptionist on Instagram as well as WhatsApp, a cashback marketplace and Arabic support.',
    keywords: ['phorest alternative', 'phorest replacement'],
    heroTitle: 'Looking for a Phorest Alternative?',
    heroSubtitle: 'Strong CRM and loyalty, with Front Desk AI on SMS and WhatsApp. Daisy adds Instagram, Arabic and a cashback marketplace.',
    painPoints: [
      'No Arabic interface listed, and the UAE is the only GCC country with a Phorest site',
      'Front Desk AI is an add-on and lists SMS and WhatsApp, not Instagram',
      'No consumer marketplace listed on Phorest\'s published pages',
      'Prices are quoted on request',
    ],
    switchingReasons: [
      'The full AI ecosystem behind your salon management',
      'A consumer marketplace, with cashback attached',
      'Arabic and English support for the GCC',
      'AI-powered marketing with cashback',
    ],
    topAlternatives: ['fresha', 'vagaro', 'booksy'],
  },
  {
    slug: 'acuity-scheduling',
    competitorSlug: 'acuity-scheduling',
    metaTitle: 'Best Acuity Scheduling Alternative for Salons (2026)',
    metaDescription: 'Looking past Acuity? Daisy is built for beauty businesses, with an AI receptionist on WhatsApp and Instagram, a marketplace with cashback, and Arabic support.',
    keywords: ['acuity scheduling alternative', 'acuity alternative for beauty'],
    heroTitle: 'Looking for an Acuity Scheduling Alternative?',
    heroSubtitle: 'Great at appointments. A beauty business may also want a marketplace, cashback and Arabic.',
    painPoints: [
      'General scheduling software rather than a platform built for beauty',
      'The AI Booking Assistant is only on the Premium plan ($49/mo billed annually)',
      'No inventory tracking or consumer marketplace listed on its published pages as of October 2026',
      'No Arabic interface or GCC pricing published',
    ],
    switchingReasons: [
      'A beauty platform with booking, POS, CRM and AI in one place',
      'An AI receptionist on WhatsApp, Instagram and the booking site',
      'A consumer marketplace with cashback rewards',
      'Arabic and English support for GCC markets',
    ],
    topAlternatives: ['vagaro', 'fresha', 'glossgenius'],
  },
  {
    slug: 'timely',
    competitorSlug: 'timely',
    metaTitle: 'Best Timely Alternative: Flat Pricing and an AI Receptionist (2026)',
    metaDescription: 'Tired of per-staff pricing? Daisy offers flat pricing, AI receptionist, and Arabic support.',
    keywords: ['timely alternative', 'timely replacement', 'timely salon software alternative'],
    heroTitle: 'Looking for a Timely Alternative?',
    heroSubtitle: 'A clean interface, but per-staff pricing and no AI receptionist hold a growing team back.',
    painPoints: [
      'Priced per staff member up to seven staff ($24 to $36 for each extra staff member in the US)',
      'Its AI feature, Textie Bestie, writes SMS; no AI receptionist is listed',
      'No Arabic interface or GCC presence listed, and no SMS in the UAE, Saudi Arabia or Qatar',
      'No consumer marketplace listed on Timely\'s published pages',
    ],
    switchingReasons: [
      'Flat pricing whatever the team size',
      'The full AI ecosystem included',
      'Arabic and English for GCC markets',
      'A consumer marketplace with cashback',
    ],
    topAlternatives: ['vagaro', 'fresha', 'booksy'],
  },
  {
    slug: 'zenoti',
    competitorSlug: 'zenoti',
    metaTitle: 'Best Zenoti Alternative for Salons & Spas (2026)',
    metaDescription: 'Looking for a Zenoti alternative? Daisy offers an AI receptionist on WhatsApp and Instagram, a consumer marketplace with cashback, native Arabic and published pricing.',
    keywords: ['zenoti alternative', 'zenoti replacement', 'zenoti alternative for salons'],
    heroTitle: 'Looking for a Zenoti Alternative?',
    heroSubtitle: 'A broad AI suite, sold by quote, with an interface in English and French but not Arabic.',
    // zenoti.com/pricing-zenoti and help.zenoti.com (interface languages), read 2026-10-09.
    painPoints: [
      'Pricing by quote only, with voice and messaging usage billed on top',
      'AI agents need the AI Plus package',
      'A Dubai office, but the interface languages listed are English, French and French-Canada, not Arabic',
      'A consumer marketplace or cashback program isn\'t listed on Zenoti\'s published pages',
    ],
    switchingReasons: [
      'An AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English',
      'Flat, transparent pricing, with no custom quote to chase',
      'A consumer marketplace with cashback, bringing customers in',
      'A native Arabic and English interface, built for the GCC from day one',
      'A quick setup with migration support',
      'White-label control of your brand included',
    ],
    topAlternatives: ['fresha', 'boulevard', 'mindbody', 'vagaro'],
  },
  {
    slug: 'setmore',
    competitorSlug: 'setmore',
    metaTitle: 'Best Setmore Alternative for Beauty Businesses (2026)',
    // Setmore facts: setmore.com/pricing and /features/live-receptionist, read 2026-10-09.
    metaDescription: 'Outgrowing free scheduling? Daisy is built for beauty businesses, with an AI receptionist on WhatsApp and Instagram, a marketplace with cashback, and Arabic support.',
    keywords: ['setmore alternative', 'setmore replacement', 'setmore alternative for salons'],
    heroTitle: 'Looking for a Setmore Alternative?',
    heroSubtitle: 'Setmore\'s free plan covers a lot. A growing beauty business may also want an AI receptionist, a marketplace and Arabic.',
    painPoints: [
      'General scheduling software rather than a platform built for beauty',
      'No AI receptionist or chatbot listed on Setmore\'s published pages as of October 2026; its call answering service uses human receptionists, in the US only',
      'No inventory tracking or consumer marketplace listed on its published pages',
      'No Arabic interface or GCC pricing published',
      'Pro is priced per user: $12/user/mo, or $5/user/mo billed annually',
    ],
    switchingReasons: [
      'An AI receptionist covering bookings, payments and customer service 24/7',
      'A complete beauty platform with booking, POS, CRM and AI in one place',
      'A consumer marketplace with cashback, sending new clients your way',
      'Arabic and English support built for GCC markets',
      'Flat pricing that does not punish you for hiring',
      'White-label control, so the salon identity stays yours',
    ],
    topAlternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius'],
  },
  {
    slug: 'simplybook-me',
    competitorSlug: 'simplybook-me',
    metaTitle: 'Best SimplyBook.me Alternative for Salons (2026)',
    // SimplyBook.me facts: simplybook.me/en/pricing and /en/ai-voice-booking, read 2026-10-09.
    metaDescription: 'Comparing SimplyBook.me alternatives? Daisy is built for beauty businesses, with an AI receptionist, a marketplace with cashback, and Arabic, all included.',
    keywords: ['simplybook alternative', 'simplybook.me alternative', 'simplybook replacement'],
    heroTitle: 'Looking for a SimplyBook.me Alternative?',
    heroSubtitle: 'SimplyBook.me offers 70+ custom features, and your plan sets how many premium ones you can switch on.',
    painPoints: [
      'Booking software for many industries rather than a platform built for beauty',
      'Premium custom features are capped by plan: 1 on Free, 3 on Basic, 8 on Standard',
      'AI Voice Booking runs on prepaid credits ($8 per 100)',
      'Arabic isn\'t among the interface languages SimplyBook.me lists as of October 2026',
      'Loyalty runs on points rather than cashback',
      'SMS and WhatsApp messages are bought as credits ($8 per 100)',
    ],
    switchingReasons: [
      'An AI receptionist included, with no add-on fee',
      'Built for beauty and wellness businesses specifically',
      'A consumer marketplace with cashback that brings clients to you',
      'An Arabic and English interface with right-to-left layout built in',
      'POS, CRM, AI and marketing all included, with no modules to buy',
      'White-label control, so the brand looks like yours',
    ],
    topAlternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius'],
  },
];

// -----------------------------------------------------------------------------
// Best [X] Alternatives Pages
// -----------------------------------------------------------------------------

export const bestAlternativesPages: BestAlternativesPageData[] = [
  // P2: Tier 1
  {
    slug: 'best-fresha-alternatives',
    competitorSlug: 'fresha',
    metaTitle: '7 Best Fresha Alternatives for Salons (2026)',
    metaDescription: 'Looking for Fresha alternatives? Compare the top salon platforms on AI channel coverage, all-in pricing and cashback-driven acquisition.',
    keywords: ['best fresha alternatives', 'fresha alternatives', 'fresha competitors', 'salon software like fresha'],
    heroTitle: 'Fresha Alternatives Compared (2026)',
    heroSubtitle: 'Fresha\'s subscription plus its per-transaction and marketplace charges add up. Here are the best alternatives for a growing beauty business.',
    intro: 'Fresha runs the world\'s largest beauty marketplace. It also stacks monthly subscriptions on top of transaction fees and takes a one-time marketplace commission on new clients, 50% in the UAE, with returning clients free. The alternatives below are compared on features, pricing, AI and international support.',
    alternatives: ['booksy', 'vagaro', 'glossgenius', 'boulevard', 'mangomint', 'square-appointments'],
    bestFor: {
      'booksy': 'Best for mobile-first solopreneurs',
      'vagaro': 'Best for US salons wanting comprehensive features at a low price',
      'glossgenius': 'Best for independent stylists wanting beautiful, simple software',
      'boulevard': 'Best for premium salons with high-touch client experiences',
      'mangomint': 'Best for operations-focused salons wanting clean UX',
      'square-appointments': 'Best for businesses already using Square for payments',
    },
    daisyEdge: 'Several of these alternatives now sell AI receptionists, Booksy among them; none pairs that with a cashback-powered acquisition marketplace or Arabic and English as equals. Daisy combines all three with white-label branding and flat pricing, which makes it a growth tool rather than an operations one.',
  },
  {
    slug: 'best-booksy-alternatives',
    competitorSlug: 'booksy',
    metaTitle: '7 Best Booksy Alternatives for Beauty Pros (2026)',
    metaDescription: 'Top Booksy alternatives compared on AI, pricing for growing teams and Arabic support for your beauty business.',
    keywords: ['best booksy alternatives', 'booksy alternatives', 'booksy competitors'],
    heroTitle: '7 Best Booksy Alternatives in 2026',
    heroSubtitle: 'Paying $20 a month for every extra team member, or want AI beyond the phone? Here are other options for a growing team.',
    intro: 'Booksy is a popular mobile-first booking app. For a growing team, each additional member adds $20 a month to the $29.99 base. Its AI Receptionist is in beta and answers phone calls, and its published pages do not list WhatsApp or Instagram. Booksy also lists no GCC market. The alternatives below suit different kinds of business.',
    alternatives: ['fresha', 'vagaro', 'glossgenius', 'boulevard', 'mangomint', 'square-appointments'],
    bestFor: {
      'fresha': 'Best for marketplace-driven client discovery',
      'vagaro': 'Best for feature-rich salon management on a budget',
      'glossgenius': 'Best for solo beauty pros wanting simplicity',
      'boulevard': 'Best for upscale salons and med spas',
      'mangomint': 'Best for salons prioritizing clean operations',
      'square-appointments': 'Best for businesses needing strong POS integration',
    },
    daisyEdge: 'These alternatives all handle operations well, and several now sell AI receptionists: Fresha\'s AI Concierge answers calls and messages, and Vagaro\'s Vera answers chat and SMS. Daisy pairs its AI receptionist with cashback rewards that bring clients back, and treats Arabic and English as equals.',
  },
  {
    slug: 'best-vagaro-alternatives',
    competitorSlug: 'vagaro',
    metaTitle: '7 Best Vagaro Alternatives for Salons (2026)',
    metaDescription: 'Top Vagaro alternatives compared on AI, pricing models and Arabic support for modern salons.',
    keywords: ['best vagaro alternatives', 'vagaro alternatives', 'vagaro competitors'],
    heroTitle: '7 Best Vagaro Alternatives in 2026',
    heroSubtitle: 'Vagaro is strong on operations. These alternatives differ on AI channels, pricing and markets.',
    intro: 'Vagaro is an all-in-one platform sold in the US, Canada, the UK and Australia. In the US it starts at $23.99 a month for one calendar on a limited-time offer ($30 regular), plus $10 for each additional calendar up to seven, and its Vera Receptionist answers chat and SMS as a $10 a month add-on. Which of the alternatives below fits depends on what you are optimising for.',
    alternatives: ['fresha', 'booksy', 'glossgenius', 'boulevard', 'mindbody', 'mangomint'],
    bestFor: {
      'fresha': 'Best for salons wanting the widest marketplace exposure',
      'booksy': 'Best for mobile-first independent professionals',
      'glossgenius': 'Best for solo stylists who value design and simplicity',
      'boulevard': 'Best for premium multi-service salons',
      'mindbody': 'Best for fitness and wellness businesses',
      'mangomint': 'Best for operationally complex salons',
    },
    daisyEdge: 'Vagaro alternatives manage your business. Fresha brings a marketplace listing and charges per marketing message beyond a free allowance, and Booksy includes 2,000 marketing texts a month. Daisy adds an AI receptionist on WhatsApp, Instagram and your booking site, plus a cashback marketplace, which turns salon software into a growth engine.',
  },
  {
    slug: 'best-glossgenius-alternatives',
    competitorSlug: 'glossgenius',
    metaTitle: '7 Best GlossGenius Alternatives for Growing Teams',
    metaDescription: 'Outgrowing GlossGenius? Compare platforms with team management, AI, and marketplace features included.',
    keywords: ['best glossgenius alternatives', 'glossgenius alternatives', 'glossgenius competitors'],
    heroTitle: '7 Best GlossGenius Alternatives in 2026',
    heroSubtitle: 'Beautiful for solos, but team management at $148/mo and no marketplace put a ceiling on growth.',
    intro: 'GlossGenius is loved for its design and simplicity. Team features sit in Platinum at $148/mo, the AI stops at analytics, and there is no marketplace. Here are the strongest options for a growing team.',
    alternatives: ['fresha', 'booksy', 'vagaro', 'boulevard', 'mangomint', 'square-appointments'],
    bestFor: {
      'fresha': 'Best for marketplace-led client acquisition',
      'booksy': 'Best for affordable mobile booking',
      'vagaro': 'Best for maximum features per dollar',
      'boulevard': 'Best for premium salon brands',
      'mangomint': 'Best for team-heavy salons wanting clean automation',
      'square-appointments': 'Best for payment-first businesses',
    },
    daisyEdge: 'These alternatives close the team management gap. Fresha\'s AI Concierge answers calls and messages, and several of the others sell AI receptionists too, but none of them pairs that with cashback rewards that bring clients back. Daisy does, at flat pricing and with no per-staff fee.',
  },
  // P3
  {
    slug: 'best-mindbody-alternatives',
    competitorSlug: 'mindbody',
    metaTitle: '7 Best Mindbody Alternatives for Salons and Spas',
    metaDescription: 'Top Mindbody alternatives compared on AI features, published pricing, marketplace fees and Arabic support.',
    keywords: ['best mindbody alternatives', 'mindbody alternatives', 'mindbody competitors'],
    heroTitle: '7 Best Mindbody Alternatives in 2026',
    heroSubtitle: 'Comparing options for your salon or spa? These platforms differ on price, AI and how they bring you clients.',
    intro: 'Mindbody has been a leading name in wellness software for over 20 years. In the US it starts at $79/mo per location, with higher plans quoted on request, and the Mindbody app takes 20% of a new client\'s first purchase, capped at $30. If you want a different mix of price, AI and regional support, these are the alternatives most often compared.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'boulevard', 'glossgenius', 'mangomint'],
    bestFor: {
      'fresha': 'Best for marketplace-led discovery at a low published entry price',
      'vagaro': 'Best for an all-in-one feature set with a published entry price',
      'booksy': 'Best for mobile-first barbers and beauty pros',
      'boulevard': 'Best for premium client experiences',
      'glossgenius': 'Best for independent professionals wanting modern UX',
      'mangomint': 'Best for clean salon and spa operations',
    },
    daisyEdge: 'These alternatives differ from Mindbody on price, interface or marketplace. Daisy puts an AI receptionist on WhatsApp and Instagram, Arabic and English as equals, and cashback-driven acquisition in one platform.',
  },
  {
    slug: 'best-boulevard-alternatives',
    competitorSlug: 'boulevard',
    metaTitle: '5 Best Boulevard Alternatives: More AI, Better Value',
    metaDescription: 'Looking beyond Boulevard? Find platforms with AI, marketplace, and Arabic support at better pricing.',
    keywords: ['best boulevard alternatives', 'boulevard alternatives'],
    heroTitle: '5 Best Boulevard Alternatives in 2026',
    heroSubtitle: 'Premium design at $158+/mo, with the AI behind a $295 gate. These alternatives include more for less.',
    intro: 'Boulevard is beautifully designed. Premium pricing and AI sitting behind the Premier tier are what send businesses looking for better value. Here are the strongest alternatives.',
    alternatives: ['vagaro', 'mangomint', 'glossgenius', 'booksy'],
    bestFor: {
      'vagaro': 'Best for comprehensive features at a lower price point',
      'mangomint': 'Best for matching Boulevard\'s clean design aesthetic',
      'glossgenius': 'Best for solo professionals wanting premium simplicity',
      'booksy': 'Best for mobile-first beauty professionals',
    },
    daisyEdge: 'These alternatives all offer premium salon management. None includes a 24/7 AI receptionist, a cashback rewards marketplace or native Arabic support. Daisy matches the quality and includes the growth tools at every tier.',
  },
  // P4
  {
    slug: 'best-mangomint-alternatives',
    competitorSlug: 'mangomint',
    metaTitle: '5 Best Mangomint Alternatives with AI (2026)',
    metaDescription: 'Want AI features with Mangomint-quality operations? These alternatives add growth tools to clean salon management.',
    keywords: ['best mangomint alternatives', 'mangomint alternatives'],
    heroTitle: '5 Best Mangomint Alternatives in 2026',
    heroSubtitle: 'Clean operations at $120 per location plus $10 per user, with no AI features or consumer marketplace listed.',
    intro: 'Mangomint has a Capterra rating of 5.0 from 345 reviews (September 2026) and a clean, automated product. Pricing per location and per user, no consumer marketplace and no AI features on its published pages leave room for alternatives that help a business grow.',
    alternatives: ['boulevard', 'vagaro', 'glossgenius', 'booksy'],
    bestFor: {
      'boulevard': 'Best for premium salons wanting enterprise polish',
      'vagaro': 'Best for all-round value with comprehensive features',
      'glossgenius': 'Best for design-conscious solo professionals',
      'booksy': 'Best for affordable mobile-first booking',
    },
    daisyEdge: 'These alternatives handle operations well, and several sell AI receptionists or run marketplaces. Daisy puts an AI receptionist on WhatsApp, Instagram and the booking site, cashback rewards and an Arabic interface on top of salon management.',
  },
  {
    slug: 'best-square-appointments-alternatives',
    competitorSlug: 'square-appointments',
    metaTitle: '7 Best Square Appointments Alternatives for Salons',
    metaDescription: 'Need tools built for beauty? These platforms add beauty-specific features, AI and marketplaces to salon management.',
    keywords: ['best square appointments alternatives', 'square appointments alternatives'],
    heroTitle: '7 Best Square Appointments Alternatives in 2026',
    heroSubtitle: 'Square is great at payments, and these alternatives are built for beauty.',
    intro: 'Square Appointments pairs a free plan with one of the best-known payment systems and is sold to many kinds of appointment business. The alternatives below are built for beauty and add industry-specific features, AI and marketplaces.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius', 'boulevard', 'mangomint'],
    bestFor: {
      'fresha': 'Best for marketplace-powered booking reach',
      'vagaro': 'Best for the most complete feature set',
      'booksy': 'Best for beauty professionals wanting industry-specific tools',
      'glossgenius': 'Best for independent stylists who want beauty-focused design',
      'boulevard': 'Best for premium salon experiences',
      'mangomint': 'Best for operations-focused salon management',
    },
    daisyEdge: 'The alternatives here are built around salons and spas. Fresha\'s AI Concierge answers calls and messages, and several of the others sell AI receptionists too. Daisy pairs an AI receptionist on WhatsApp, Instagram and the booking site with a cashback marketplace that brings new clients in, in Arabic and English.',
  },
  // P5
  {
    slug: 'best-zenoti-alternatives',
    competitorSlug: 'zenoti',
    metaTitle: '7 Best Zenoti Alternatives for Salons & Spas (2026)',
    metaDescription: 'Looking for Zenoti alternatives? Compare 7 platforms on AI, published pricing, setup and Arabic support for multi-location businesses.',
    keywords: ['best zenoti alternatives', 'zenoti alternatives', 'zenoti competitors', 'salon software like zenoti'],
    heroTitle: '7 Best Zenoti Alternatives in 2026',
    heroSubtitle: 'Zenoti prices by quote and puts its AI agents in the AI Plus package. These alternatives take different approaches to AI and pricing.',
    intro: 'Zenoti markets an AI Workforce of agents for calls, marketing, leads, scheduling and retention, and it has an office in Dubai. Its pricing is by quote, the AI agents need the AI Plus package, and its interface languages are English, French and French-Canada. The alternatives below are compared on AI, pricing and how quickly you can deploy them.',
    alternatives: ['boulevard', 'mangomint', 'mindbody', 'fresha', 'vagaro', 'phorest'],
    bestFor: {
      'boulevard': 'Best for premium multi-location salons',
      'mangomint': 'Best for clean operations without enterprise complexity',
      'mindbody': 'Best for fitness and wellness crossover businesses',
      'fresha': 'Best for cost-conscious salons wanting marketplace exposure',
      'vagaro': 'Best for comprehensive features at mid-market pricing',
      'phorest': 'Best for UK/Ireland salons with strong CRM needs',
    },
    daisyEdge: 'Daisy pairs an AI receptionist on WhatsApp, Instagram and the booking site with cashback-driven acquisition and Arabic and English as equals, at a published price.',
  },
  {
    slug: 'best-acuity-alternatives',
    competitorSlug: 'acuity-scheduling',
    metaTitle: '7 Best Acuity Scheduling Alternatives for Salons (2026)',
    // Acuity rating: Capterra, Wayback snapshot 2026-09-21 (4.8, 5,766 reviews).
    metaDescription: 'Want software built for beauty rather than general scheduling? Compare these Acuity alternatives on AI, marketplace and pricing.',
    keywords: ['best acuity scheduling alternatives', 'acuity scheduling alternatives', 'acuity alternatives', 'scheduling software like acuity'],
    heroTitle: '7 Best Acuity Scheduling Alternatives in 2026',
    heroSubtitle: 'Acuity is strong general scheduling software. Here is how the alternatives compare for a beauty business.',
    intro: 'Acuity Scheduling by Squarespace is rated 4.8/5 from more than 5,700 reviews on Capterra. It is general scheduling software with payments, client profiles and, on its Premium plan, an AI Booking Assistant. It wasn\'t built for beauty specifically, and inventory tracking, a consumer marketplace and an Arabic interface aren\'t listed on its published pages as of October 2026. Here are the alternatives worth comparing.',
    alternatives: ['fresha', 'booksy', 'vagaro', 'glossgenius', 'setmore', 'simplybook-me'],
    bestFor: {
      'fresha': 'Best for marketplace-led discovery at a low published entry price',
      'booksy': 'Best for mobile-first beauty professionals',
      'vagaro': 'Best for full-featured salon management',
      'glossgenius': 'Best for independent stylists wanting beautiful software',
      'setmore': 'Best for budget-friendly basic scheduling',
      'simplybook-me': 'Best for businesses wanting modular customisation',
    },
    daisyEdge: 'Several of these alternatives are built for beauty businesses, and some list inventory tracking or a client marketplace, which Acuity\'s published pages don\'t. Of these, Fresha\'s AI Concierge answers calls and messages, and several others sell AI receptionists too. None adds a cashback marketplace that brings new clients in. Daisy is the complete upgrade path.',
  },
  {
    slug: 'best-phorest-alternatives',
    competitorSlug: 'phorest',
    metaTitle: '5 Best Phorest Alternatives for Growing Salons (2026)',
    metaDescription: 'Like Phorest\'s CRM but want a marketplace, cashback or Arabic support? These alternatives offer different growth tools for beauty businesses.',
    keywords: ['best phorest alternatives', 'phorest alternatives', 'phorest competitors', 'salon software like phorest'],
    heroTitle: '5 Best Phorest Alternatives in 2026',
    heroSubtitle: 'Strong CRM and loyalty, Front Desk AI on SMS and WhatsApp, and prices quoted on request.',
    intro: 'Phorest has a loyal following, with offices in seven countries and a Capterra rating of 4.8 from 431 reviews (September 2026). It sells Front Desk AI for SMS and WhatsApp, but its published pages list no consumer marketplace and no Arabic interface. Here are the top alternatives.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'boulevard'],
    bestFor: {
      'fresha': 'Best for global marketplace reach',
      'vagaro': 'Best for comprehensive features at competitive pricing',
      'booksy': 'Best for mobile-first professionals',
      'boulevard': 'Best for premium salon brands',
    },
    daisyEdge: 'These alternatives bring marketplaces, AI receptionists or premium design. Daisy combines client management with cashback loyalty and an AI receptionist on WhatsApp, Instagram and the booking site, in Arabic and English.',
  },
  {
    slug: 'best-timely-alternatives',
    competitorSlug: 'timely',
    metaTitle: '5 Best Timely Alternatives for Growing Salons (2026)',
    metaDescription: 'Timely charges per staff member. Compare alternatives on pricing, AI receptionists and marketplaces for a growing beauty team.',
    keywords: ['best timely alternatives', 'timely alternatives', 'timely competitors', 'salon software like timely'],
    heroTitle: '5 Best Timely Alternatives in 2026',
    heroSubtitle: 'A clean interface, with Build at $26 a month plus $24 to $36 for each extra staff member in the US, and no AI receptionist, marketplace or Arabic support listed.',
    intro: 'Timely has a clean interface and a Capterra rating of 4.7 from 711 reviews (September 2026). In the US it charges per staff member, from $24 to $36 for each extra staff member up to seven, and its AI feature is Textie Bestie, an SMS writing tool. Here are alternatives for a growing beauty business.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius'],
    bestFor: {
      'fresha': 'Best for marketplace-driven booking reach',
      'vagaro': 'Best for growing teams wanting a broad feature set',
      'booksy': 'Best for affordable mobile booking',
      'glossgenius': 'Best for design-focused solo professionals',
    },
    daisyEdge: 'These alternatives handle booking for growing teams. Fresha\'s AI Concierge answers calls and messages, and the others here sell AI receptionists too. Daisy adds cashback acquisition, charges a flat, transparent rate and builds the growth tools into every plan.',
  },
  {
    slug: 'best-setmore-alternatives',
    competitorSlug: 'setmore',
    metaTitle: '7 Best Setmore Alternatives for Beauty Businesses (2026)',
    // Setmore facts: setmore.com/pricing, read 2026-10-09.
    metaDescription: 'Outgrowing Setmore? Compare these alternatives for a beauty business on AI, marketplace, pricing and Arabic support.',
    keywords: ['best setmore alternatives', 'setmore alternatives', 'setmore competitors', 'scheduling software like setmore'],
    heroTitle: '7 Best Setmore Alternatives in 2026',
    heroSubtitle: 'Setmore\'s free plan covers booking, payments and client profiles. Here is what else a growing beauty business can choose from.',
    intro: 'Setmore\'s free plan covers up to 4 users, with online booking, in-person payments and Tap to Pay, customer profiles and 24/7 human support. Pro costs $12 per user per month, or $5 billed annually. It is general scheduling software rather than software built for beauty, and an AI receptionist, a consumer marketplace and an Arabic interface aren\'t listed on its published pages as of October 2026. Here are the alternatives to compare.',
    alternatives: ['fresha', 'booksy', 'vagaro', 'glossgenius', 'acuity-scheduling', 'simplybook-me'],
    bestFor: {
      'fresha': 'Best for marketplace-led discovery at a low published entry price',
      'booksy': 'Best for affordable beauty-specific step up',
      'vagaro': 'Best for the most features per dollar',
      'glossgenius': 'Best for solo stylists wanting premium simplicity',
      'acuity-scheduling': 'Best for advanced scheduling customisation',
      'simplybook-me': 'Best for businesses wanting modular add-on flexibility',
    },
    daisyEdge: 'Several of these alternatives are built for beauty businesses. Daisy pairs an AI receptionist on WhatsApp, Instagram and its booking site, in Arabic and English, with cashback rewards that bring clients back. It is where a beauty business can go once it has outgrown free tools.',
  },
  {
    slug: 'best-simplybookme-alternatives',
    competitorSlug: 'simplybook-me',
    metaTitle: '7 Best SimplyBook.me Alternatives for Salons (2026)',
    // SimplyBook.me facts: simplybook.me/en/pricing (US prices from the Wayback
    // snapshot of 2026-09-26), /en/ai-scheduling-assistant, /en/ai-voice-booking.
    metaDescription: 'Compare SimplyBook.me alternatives for a beauty business on AI, marketplace and pricing.',
    keywords: ['best simplybookme alternatives', 'simplybook.me alternatives', 'simplybook alternatives', 'booking software like simplybookme'],
    heroTitle: '7 Best SimplyBook.me Alternatives in 2026',
    heroSubtitle: 'SimplyBook.me lets you switch on 70+ custom features, with premium ones capped by plan. Here are the alternatives to compare.',
    intro: 'SimplyBook.me is booking software for many industries, built on 70+ custom features you switch on as needed. Plans run from free to $59.9/mo ($49.9/mo billed annually) for Premium, with Enterprise priced on request. It includes Sales (POS) from the Basic plan, the Ask Simply AI assistant, and AI Voice Booking on prepaid credits. If you would rather not assemble features yourself, here are the alternatives to compare.',
    alternatives: ['fresha', 'booksy', 'vagaro', 'glossgenius', 'acuity-scheduling', 'setmore'],
    bestFor: {
      'fresha': 'Best for marketplace-led discovery at a low published entry price',
      'booksy': 'Best for mobile-first beauty professionals',
      'vagaro': 'Best for comprehensive features without add-on complexity',
      'glossgenius': 'Best for clean design and simplicity',
      'acuity-scheduling': 'Best for advanced scheduling customisation',
      'setmore': 'Best for free basic scheduling',
    },
    daisyEdge: 'These alternatives package their features differently from SimplyBook.me\'s custom-feature model. Fresha\'s AI Concierge answers calls and messages, and several of the others sell AI receptionists too. None pairs that with a cashback marketplace that acquires clients. Daisy replaces the complexity with one platform that also grows the business.',
  },
];

// -----------------------------------------------------------------------------
// Competitor vs Competitor Pages
// -----------------------------------------------------------------------------

export const competitorVsPages: CompetitorVsPageData[] = [
  // P2
  {
    slugA: 'fresha',
    slugB: 'booksy',
    combinedSlug: 'fresha-vs-booksy',
    metaTitle: 'Fresha vs Booksy: Which Is Better for Salons? (2026)',
    metaDescription: 'Compare Fresha and Booksy side-by-side. Pricing, features, AI capabilities, and marketplace, plus a better alternative for GCC businesses.',
    keywords: ['fresha vs booksy', 'fresha or booksy', 'booksy vs fresha comparison'],
    heroTitle: 'Fresha vs Booksy',
    heroSubtitle: 'Two popular booking platforms, but which one is right for your beauty business?',
    verdict: 'Fresha wins on marketplace scale and lower starting price. Booksy wins on mobile experience. Both sell AI that answers calls: Fresha\'s AI Concierge also answers messages, and Booksy\'s AI Receptionist is in beta. Fresha has an Arabic UI; Booksy does not. As of October 2026, neither lists WhatsApp or Instagram as an AI channel, and neither offers cashback-driven customer acquisition.',
    whoShouldChooseA: [
      'You want an affordable starting point with marketplace exposure',
      'Marketplace discovery is your primary acquisition channel',
      'You prefer web-based management over mobile',
    ],
    whoShouldChooseB: [
      'You prefer a mobile-first experience',
      'You want an AI receptionist that books from phone calls',
      'You\'re an independent barber or beauty pro',
    ],
    daisyPitch: 'Both Fresha and Booksy are operations tools with marketplace bolt-ons. Daisy is a growth platform: AI on WhatsApp, Instagram and your booking site, Arabic and English as equals, cashback rewards, and fully branded booking pages.',
  },
  {
    slugA: 'fresha',
    slugB: 'vagaro',
    combinedSlug: 'fresha-vs-vagaro',
    metaTitle: 'Fresha vs Vagaro: Marketplace vs Feature-Rich (2026)',
    metaDescription: 'Compare Fresha (published per market, from AED 149.95/mo in the UAE) and Vagaro (feature-rich, from $23.99/mo in the US on a limited-time offer). Pricing, features, and which is better for your salon.',
    keywords: ['fresha vs vagaro', 'fresha or vagaro', 'vagaro vs fresha'],
    heroTitle: 'Fresha vs Vagaro',
    heroSubtitle: 'Low starting price with stacking fees versus a feature-rich platform from $23.99/mo, which model works better?',
    verdict: 'Fresha starts cheaper but subscription fees plus transaction fees plus commissions add up. Vagaro offers more features from $23.99/mo for one calendar on its current US offer ($30 regular), plus $10 per extra calendar. Fresha\'s AI Concierge answers calls and messages, and Fresha ships an Arabic UI. Vagaro sells Vera, an AI receptionist for chat and text, and we could not find an Arabic UI for it. Neither offers cashback rewards.',
    whoShouldChooseA: [
      'You\'re a solo practitioner with low transaction volume',
      'You want marketplace exposure from day one',
      'Upfront cost matters more than long-term value',
    ],
    whoShouldChooseB: [
      'You want comprehensive features at a predictable price',
      'You have multiple staff and need per-calendar management',
      'POS quality and hardware integration matter',
    ],
    daisyPitch: 'Fresha and Vagaro focus on operations. Daisy adds cashback acquisition, proactive growth tools, and an AI receptionist that works on WhatsApp, Instagram and your booking site in Arabic and English.',
  },
  {
    slugA: 'booksy',
    slugB: 'vagaro',
    combinedSlug: 'booksy-vs-vagaro',
    metaTitle: 'Booksy vs Vagaro: Mobile App vs All-in-One (2026)',
    metaDescription: 'Compare Booksy (mobile-first) and Vagaro (feature-rich): per-user vs per-calendar pricing, AI features and marketplace differences.',
    keywords: ['booksy vs vagaro', 'booksy or vagaro', 'vagaro vs booksy'],
    heroTitle: 'Booksy vs Vagaro',
    heroSubtitle: 'Mobile-first booking app versus comprehensive all-in-one salon platform.',
    verdict: 'Booksy excels on mobile UX, and its AI Receptionist (beta) books from phone calls. Vagaro offers more features and a stronger POS, and its Vera Receptionist answers chat and SMS. Neither lists an Arabic interface or cashback rewards on its published pages as of October 2026.',
    whoShouldChooseA: [
      'Mobile-first experience is your top priority',
      'You\'re a solo barber or beauty pro',
      'You want an AI receptionist that answers phone calls in English or Spanish',
    ],
    whoShouldChooseB: [
      'You want the most comprehensive feature set',
      'POS and hardware integration matter',
      'You need strong inventory and reporting',
      'You want an AI receptionist for chat and SMS',
    ],
    daisyPitch: 'Both are solid operations platforms. Daisy adds an AI receptionist on WhatsApp, Instagram and your booking site, Arabic and English as equals, and cashback-driven customer acquisition.',
  },
  {
    slugA: 'vagaro',
    slugB: 'mindbody',
    combinedSlug: 'vagaro-vs-mindbody',
    metaTitle: 'Vagaro vs Mindbody: Features and Pricing (2026)',
    metaDescription: 'Compare Vagaro and Mindbody (from $79/mo per location in the US): features, pricing, AI, and a GCC-ready alternative.',
    keywords: ['vagaro vs mindbody', 'vagaro or mindbody', 'mindbody vs vagaro'],
    heroTitle: 'Vagaro vs Mindbody',
    heroSubtitle: 'Two all-in-one platforms, each with its own consumer marketplace, compared on features and price.',
    verdict: 'Vagaro and Mindbody cover similar ground: booking, payments, marketing and a consumer marketplace. Mindbody brings a larger marketplace, with 3M+ active app users, and enterprise tools, and its AI Concierge books by SMS and web chat on the Ultimate plan.',
    whoShouldChooseA: [
      'You want comprehensive features at an affordable price',
      'You\'re a small-to-medium salon or spa',
      'You value a 30-day free trial',
    ],
    whoShouldChooseB: [
      'You want a listing on the Mindbody app, with 3M+ active users',
      'Enterprise-level multi-location management is required',
      'You\'re deeply invested in the Mindbody ecosystem',
    ],
    daisyPitch: 'Daisy adds what a GCC beauty business needs: an AI receptionist on WhatsApp, Instagram and the booking site, Arabic and English as equals, and cashback-driven customer acquisition.',
  },
  // P3
  {
    slugA: 'glossgenius',
    slugB: 'boulevard',
    combinedSlug: 'glossgenius-vs-boulevard',
    metaTitle: 'GlossGenius vs Boulevard: Budget vs Premium (2026)',
    metaDescription: 'Compare GlossGenius ($24/mo) and Boulevard ($158/mo) for beauty businesses. Features, AI, design, and which is right for you.',
    keywords: ['glossgenius vs boulevard', 'glossgenius or boulevard'],
    heroTitle: 'GlossGenius vs Boulevard',
    heroSubtitle: 'Beautiful design at $24/mo versus premium enterprise at $158/mo, different markets, different strengths.',
    verdict: 'GlossGenius wins on simplicity and affordability for solos. Boulevard wins on enterprise features and AI scheduling. Neither has Arabic support or cashback.',
    whoShouldChooseA: ['You\'re a solo beauty professional', 'Budget is under $50/mo', 'Simplicity over features'],
    whoShouldChooseB: ['You run a premium multi-location salon', 'AI scheduling optimization matters', 'Enterprise features are needed'],
    daisyPitch: 'Both target different segments of the US market. Daisy serves all business sizes with full AI, Arabic support, marketplace, and cashback, capabilities neither offers.',
  },
  {
    slugA: 'fresha',
    slugB: 'glossgenius',
    combinedSlug: 'fresha-vs-glossgenius',
    metaTitle: 'Fresha vs GlossGenius: Marketplace vs Design (2026)',
    metaDescription: 'Compare Fresha (published per market, from AED 149.95/mo in the UAE) and GlossGenius ($24/mo beauty-focused). Features, pricing, and which suits your salon better.',
    keywords: ['fresha vs glossgenius', 'fresha or glossgenius'],
    heroTitle: 'Fresha vs GlossGenius',
    heroSubtitle: 'Marketplace with stacking fees versus beautiful design at $24/mo, which trade-off works for you?',
    verdict: 'Fresha wins on marketplace scale. GlossGenius wins on design and simplicity. Both sell AI receptionists: Fresha\'s AI Concierge answers calls and messages, and GlossGenius Reception answers calls and texts. Fresha has an Arabic UI. As of October 2026, neither lists WhatsApp or Instagram as an AI channel, and neither offers cashback.',
    whoShouldChooseA: ['You want marketplace exposure with low starting cost', 'Client discovery through marketplace matters most', 'You\'re comfortable with transaction fees on top of subscription'],
    whoShouldChooseB: ['Design and aesthetics matter most', 'You want affordable paid software ($24/mo)', 'You\'re a solo US beauty professional'],
    daisyPitch: 'Fresha gives marketplace, GlossGenius gives design. Daisy gives both, plus AI across every channel, Arabic and English as equals, cashback, and growth tools.',
  },
  {
    slugA: 'booksy',
    slugB: 'glossgenius',
    combinedSlug: 'booksy-vs-glossgenius',
    metaTitle: 'Booksy vs GlossGenius: App vs Simplicity (2026)',
    metaDescription: 'Compare Booksy (mobile-first marketplace) and GlossGenius (simple beauty tool). Features, pricing, and AI capabilities compared.',
    keywords: ['booksy vs glossgenius', 'booksy or glossgenius'],
    heroTitle: 'Booksy vs GlossGenius',
    heroSubtitle: 'Mobile-first marketplace versus beautifully simple salon tool, two approaches for beauty professionals.',
    verdict: 'Booksy wins on mobile app and marketplace. GlossGenius wins on design and affordability. Booksy\'s AI Receptionist books from calls; GlossGenius Reception covers calls and texts.',
    whoShouldChooseA: ['Mobile experience is priority', 'You want marketplace exposure', 'Basic AI call handling appeals to you'],
    whoShouldChooseB: ['Beautiful booking pages matter most', 'You want the simplest tool at $24/mo', 'You\'re a US-based solo professional'],
    daisyPitch: 'Both serve solo US professionals well. Daisy serves growing businesses with full AI, Arabic support, team management, marketplace, and cashback.',
  },
  {
    slugA: 'mindbody',
    slugB: 'boulevard',
    combinedSlug: 'mindbody-vs-boulevard',
    metaTitle: 'Mindbody vs Boulevard: Features, AI and Pricing (2026)',
    // Boulevard pricing (joinblvd.com/pricing, read 2026-10-09): Essentials "$143/mo for 1 location".
    metaDescription: 'Compare Mindbody (from $79/mo per location in the US) and Boulevard (from $143/mo for one location): features, AI, pricing, and which platform to choose.',
    keywords: ['mindbody vs boulevard', 'mindbody or boulevard'],
    heroTitle: 'Mindbody vs Boulevard',
    heroSubtitle: 'A long-established wellness platform and a premium salon and spa platform, compared.',
    verdict: 'Mindbody has the Mindbody app marketplace and enterprise depth, and its AI Concierge books by SMS and web chat. Boulevard has Precision Scheduling and Beau, an AI receptionist that answers calls.',
    whoShouldChooseA: ['You want the Mindbody app marketplace (3M+ active users)', 'Enterprise multi-location is essential', 'You\'re an established fitness/wellness brand'],
    whoShouldChooseB: ['Modern design and UX matter', 'Precision Scheduling and an AI receptionist for calls appeal to you', 'You\'re a premium salon/spa brand'],
    daisyPitch: 'Daisy is built for GCC beauty businesses: an AI receptionist on WhatsApp, Instagram and the booking site, Arabic and English as equals, and cashback-driven acquisition.',
  },
  // P4
  {
    slugA: 'vagaro',
    slugB: 'glossgenius',
    combinedSlug: 'vagaro-vs-glossgenius',
    metaTitle: 'Vagaro vs GlossGenius: Features vs Simplicity (2026)',
    metaDescription: 'Compare Vagaro (feature-rich) and GlossGenius (beautifully simple). Find the right salon software for your business size.',
    keywords: ['vagaro vs glossgenius', 'vagaro or glossgenius'],
    heroTitle: 'Vagaro vs GlossGenius',
    heroSubtitle: 'Comprehensive features versus beautiful simplicity, the right choice depends on your business stage.',
    verdict: 'Vagaro offers more features at $30/mo. GlossGenius is simpler and more beautiful at $24/mo. Neither has full AI or Arabic support.',
    whoShouldChooseA: ['You need comprehensive features', 'Team management is important', 'POS quality matters'],
    whoShouldChooseB: ['Simplicity and design matter most', 'You\'re a solo professional', 'Budget is a priority'],
    daisyPitch: 'Vagaro manages operations; GlossGenius looks great. Daisy does both and adds AI, Arabic, marketplace, and cashback.',
  },
  {
    slugA: 'fresha',
    slugB: 'mindbody',
    combinedSlug: 'fresha-vs-mindbody',
    metaTitle: 'Fresha vs Mindbody: Budget vs Enterprise (2026)',
    metaDescription: 'Compare Fresha (published per market, from AED 149.95/mo in the UAE) and Mindbody (from $79/mo per location in the US). Two ends of salon software, plus a modern alternative.',
    keywords: ['fresha vs mindbody', 'fresha or mindbody'],
    heroTitle: 'Fresha vs Mindbody',
    heroSubtitle: 'The budget marketplace versus the long-established wellness platform, two ends of beauty business software.',
    verdict: 'Fresha is better for cost-conscious small businesses with its lower starting price. Mindbody is better for large enterprise operations. Both sell AI front-desk tools: Fresha\'s AI Concierge answers calls and messages, and Mindbody\'s own AI Concierge, on its Ultimate plan, follows up missed calls by text and web chat. Fresha has an Arabic UI; as of October 2026 we could not find one for Mindbody. Neither offers cashback.',
    whoShouldChooseA: ['Cost is the top priority', 'You want marketplace exposure at a lower price point', 'You\'re a small salon'],
    whoShouldChooseB: ['Enterprise features are required', 'Large fitness marketplace matters', 'Multi-location management needed'],
    daisyPitch: 'Between published-but-stacking fees and quote-based higher tiers, Daisy offers the modern middle: one all-inclusive price with nothing added per transaction, AI across every channel, Arabic and English as equals, and cashback.',
  },
  {
    slugA: 'booksy',
    slugB: 'boulevard',
    combinedSlug: 'booksy-vs-boulevard',
    metaTitle: 'Booksy vs Boulevard: Affordable vs Premium (2026)',
    metaDescription: 'Compare Booksy (mobile-first, $29.99/mo) and Boulevard (premium, $158/mo). Features, AI, and which matches your salon.',
    keywords: ['booksy vs boulevard', 'booksy or boulevard'],
    heroTitle: 'Booksy vs Boulevard',
    heroSubtitle: 'Mobile-first affordability versus premium design and AI scheduling, which tier fits your business?',
    verdict: 'Booksy is better for budget-conscious mobile professionals. Boulevard is better for premium established salons. Both lack Arabic and cashback.',
    whoShouldChooseA: ['You\'re budget-conscious', 'Mobile-first matters most', 'You\'re an independent professional'],
    whoShouldChooseB: ['Premium brand experience is priority', 'AI scheduling optimization appeals', 'You run a multi-location salon'],
    daisyPitch: 'From budget mobile to premium desktop, Daisy offers full AI, Arabic, marketplace, and cashback at any business size.',
  },
  {
    slugA: 'vagaro',
    slugB: 'boulevard',
    combinedSlug: 'vagaro-vs-boulevard',
    metaTitle: 'Vagaro vs Boulevard: Value vs Premium (2026)',
    metaDescription: 'Compare Vagaro ($30/mo value) and Boulevard ($158/mo premium). Features, AI, POS, and which salon software delivers better ROI.',
    keywords: ['vagaro vs boulevard', 'vagaro or boulevard'],
    heroTitle: 'Vagaro vs Boulevard',
    heroSubtitle: 'Feature-rich value at $30/mo versus premium design at $158/mo, the ROI question.',
    verdict: 'Vagaro offers excellent value with broad features. Boulevard offers premium experience with AI scheduling. Neither has Arabic, cashback, or full AI ecosystem.',
    whoShouldChooseA: ['Value for money is priority', 'You want broad feature coverage', 'Budget-friendly for growing teams'],
    whoShouldChooseB: ['Premium experience is priority', 'AI scheduling matters', 'You target luxury clientele'],
    daisyPitch: 'Vagaro gives features, Boulevard gives premium. Daisy gives AI + growth + Arabic support at fair pricing.',
  },
  // P5
  {
    slugA: 'fresha',
    slugB: 'square-appointments',
    combinedSlug: 'fresha-vs-square-appointments',
    metaTitle: 'Fresha vs Square Appointments: Marketplace vs POS (2026)',
    metaDescription: 'Compare Fresha (beauty marketplace) and Square Appointments (payment-first scheduling). Pricing, features, and which fits your salon better.',
    keywords: ['fresha vs square appointments', 'fresha or square appointments', 'square appointments vs fresha'],
    heroTitle: 'Fresha vs Square Appointments',
    heroSubtitle: 'Beauty marketplace with commission fees versus free payment-first scheduling, different models for different priorities.',
    verdict: 'Fresha wins on beauty-specific features and marketplace exposure with 25M+ users. Square Appointments wins on POS quality and its free plan, and Square Go gives it a free marketplace app. Fresha\'s AI Concierge answers calls and messages, and Fresha ships an Arabic UI. Square AI (beta) is on every Square plan, and Square Assistant replies to client texts. As of October 2026, neither platform lists WhatsApp or Instagram as an AI channel, and neither offers cashback rewards.',
    whoShouldChooseA: [
      'You want marketplace exposure to 25M+ beauty customers',
      'Beauty-specific features (service menus, commissions) matter',
      'You\'re comfortable with marketplace commission fees',
    ],
    whoShouldChooseB: [
      'Payment processing and POS quality are top priority',
      'You want a free starting tier with no subscription',
      'You already use the Square ecosystem',
    ],
    daisyPitch: 'Fresha offers marketplace reach; Square offers POS strength. Daisy combines both approaches with an AI receptionist on WhatsApp, Instagram and your booking site, Arabic and English as equals, cashback-driven customer acquisition, and branded booking pages.',
  },
  {
    slugA: 'booksy',
    slugB: 'mindbody',
    combinedSlug: 'booksy-vs-mindbody',
    metaTitle: 'Booksy vs Mindbody: Mobile vs Enterprise (2026)',
    // Booksy pricing (biz.booksy.com/en-us/pricing, read 2026-10-09): "$29.99 per month,
    // plus $20 per month for each additional team member".
    metaDescription: 'Compare Booksy (mobile-first, from $29.99/mo) and Mindbody (from $79/mo per location in the US). Features, pricing, AI, and which platform suits your business.',
    keywords: ['booksy vs mindbody', 'booksy or mindbody', 'mindbody vs booksy comparison'],
    heroTitle: 'Booksy vs Mindbody',
    heroSubtitle: 'Mobile-first booking versus an established wellness platform, two very different tiers of beauty business software.',
    verdict: 'Booksy wins on mobile experience and affordability, and its AI Receptionist books from calls. Mindbody wins on enterprise scale and its marketplace, and its AI Concierge books by SMS and web chat. Neither lists Arabic as an app language as of October 2026.',
    whoShouldChooseA: [
      'You\'re an independent professional who values mobile-first',
      'Budget matters: Booksy is $29.99/mo plus $20 per extra team member, Mindbody from $79/mo per location with unlimited users',
      'An AI receptionist that books from phone calls appeals to you',
    ],
    whoShouldChooseB: [
      'You run a multi-location fitness or wellness brand',
      'Enterprise reporting and integrations are essential',
      'The Mindbody app marketplace matters for discovery',
    ],
    daisyPitch: 'Booksy and Mindbody sit at different price points. Daisy bridges the gap with full AI ecosystem, Arabic support, cashback acquisition, and modern UX at accessible pricing.',
  },
  {
    slugA: 'booksy',
    slugB: 'square-appointments',
    combinedSlug: 'booksy-vs-square-appointments',
    metaTitle: 'Booksy vs Square Appointments: Beauty App vs POS (2026)',
    metaDescription: 'Compare Booksy (mobile-first beauty platform) and Square Appointments (payment-first scheduling). Features, pricing, and the best fit for your salon.',
    keywords: ['booksy vs square appointments', 'booksy or square appointments', 'square appointments vs booksy'],
    heroTitle: 'Booksy vs Square Appointments',
    heroSubtitle: 'Beauty-focused mobile app versus payment-first general scheduler, specialization versus ecosystem.',
    // Square: squareup.com/us/en/appointments/pricing, read 2026-10-09 (Square
    // AI, beta, on all three plans). App Store languages: CA, EN, FR, JA, ES.
    verdict: 'Booksy wins on beauty-specific features, mobile app, and marketplace. Square wins on POS, its free plan, and the payment ecosystem. Booksy\'s AI Receptionist (beta) answers phone calls, and Square AI (beta) gives business recommendations on every Square Appointments plan. Neither lists an Arabic interface as of October 2026.',
    whoShouldChooseA: [
      'You\'re a beauty professional who wants a specialized platform',
      'Mobile-first experience and marketplace matter',
      'An AI receptionist handling phone bookings is appealing',
    ],
    whoShouldChooseB: [
      'Payment processing is your primary need',
      'You want to start free and scale up',
      'You already rely on the Square ecosystem',
    ],
    daisyPitch: 'Booksy specializes in beauty; Square specializes in payments. Daisy combines beauty-specific tools with an AI receptionist on WhatsApp and Instagram, Arabic support and cashback rewards.',
  },
  {
    slugA: 'vagaro',
    slugB: 'square-appointments',
    combinedSlug: 'vagaro-vs-square-appointments',
    metaTitle: 'Vagaro vs Square Appointments: Features vs POS (2026)',
    metaDescription: 'Compare Vagaro (feature-rich salon software) and Square Appointments (payment-first scheduling). Pricing, features, and which delivers more value.',
    keywords: ['vagaro vs square appointments', 'vagaro or square appointments', 'square appointments vs vagaro'],
    heroTitle: 'Vagaro vs Square Appointments',
    heroSubtitle: 'Comprehensive beauty features from $23.99/mo versus free payment-first scheduling, depth versus simplicity.',
    verdict: 'Vagaro wins on feature depth, beauty-specific tools, and POS quality. Square wins on its free plan and payment ecosystem integration. Vagaro\'s Vera Receptionist answers chat and SMS, and Square AI (beta) gives business recommendations on every plan. Neither lists an Arabic interface as of October 2026.',
    whoShouldChooseA: [
      'You need comprehensive salon management features',
      'Team management and scheduling depth matter',
      'Beauty-specific POS and tools are essential',
    ],
    whoShouldChooseB: [
      'You want to start free with no monthly fees',
      'Square payment ecosystem is already in use',
      'Basic scheduling is all you need',
    ],
    daisyPitch: 'Vagaro manages operations well; Square handles payments well. Daisy is a growth platform that does both, with an AI receptionist on WhatsApp and Instagram, Arabic support, cashback-driven acquisition and a branded booking page in every plan.',
  },
  {
    slugA: 'glossgenius',
    slugB: 'square-appointments',
    combinedSlug: 'glossgenius-vs-square-appointments',
    metaTitle: 'GlossGenius vs Square Appointments: Design vs POS (2026)',
    metaDescription: 'Compare GlossGenius (beautifully designed salon tool) and Square Appointments (payment-first scheduling). Features, pricing, and which suits your salon.',
    keywords: ['glossgenius vs square appointments', 'glossgenius or square appointments', 'square appointments vs glossgenius'],
    heroTitle: 'GlossGenius vs Square Appointments',
    heroSubtitle: 'Beauty-focused design from $24/mo billed annually ($28 monthly) against Square\'s free plan and payments ecosystem.',
    verdict: 'GlossGenius wins on design, beauty-specific branding and client experience. Square wins on its free plan, POS ecosystem and payment processing. GlossGenius sells Reception, which answers calls and texts, as a $50/month add-on, and its Growth Analyst AI is on every plan (a limited trial on Standard). Square AI (beta) is on every Square plan. Neither lists Arabic support or cashback rewards.',
    whoShouldChooseA: [
      'Brand aesthetics and beautiful booking pages matter most',
      'You\'re a solo beauty professional who values design',
      'AI tools, from Growth Analyst to the Reception add-on, matter to you',
    ],
    whoShouldChooseB: [
      'Free scheduling with no monthly commitment is preferred',
      'You need strong POS and payment infrastructure',
      'You want to stay within the Square ecosystem',
    ],
    daisyPitch: 'GlossGenius offers beauty and design; Square offers payments and ecosystem. Daisy delivers both plus full AI receptionist, Arabic support, cashback rewards, and growth tools, without forcing a trade-off.',
  },
  {
    slugA: 'mindbody',
    slugB: 'zenoti',
    combinedSlug: 'mindbody-vs-zenoti',
    metaTitle: 'Mindbody vs Zenoti: Marketplace vs AI Workforce (2026)',
    metaDescription: 'Compare Mindbody (from $79/mo per location in the US) and Zenoti (pricing on request): features, AI, and which platform fits your business.',
    keywords: ['mindbody vs zenoti', 'mindbody or zenoti', 'zenoti vs mindbody comparison'],
    heroTitle: 'Mindbody vs Zenoti',
    heroSubtitle: 'A wellness platform built around its consumer marketplace versus an AI-first platform for salons, spas and medspas.',
    verdict: 'Mindbody wins on marketplace scale and brand recognition in fitness. Zenoti wins on the breadth of its AI, with an AI Workforce of agents in its AI Plus package, while Mindbody\'s AI Concierge covers SMS and web chat. Zenoti has an office in Dubai, and Mindbody Payments is available in the UAE. Neither lists Arabic as an interface language as of October 2026.',
    whoShouldChooseA: [
      'You want the Mindbody app marketplace (3M+ active users)',
      'Brand recognition and industry trust matter most',
      'You\'re a large fitness or yoga studio chain',
    ],
    whoShouldChooseB: [
      'AI agents for calls, marketing, leads and scheduling appeal to you',
      'You run a medspa or spa and want forms and charting built in',
      'You\'re an enterprise salon or spa chain',
    ],
    daisyPitch: 'Daisy delivers AI capabilities rivaling Zenoti with marketplace reach rivaling Mindbody, plus Arabic support, cashback acquisition, and accessible pricing for all business sizes.',
  },
  {
    slugA: 'zenoti',
    slugB: 'boulevard',
    combinedSlug: 'zenoti-vs-boulevard',
    metaTitle: 'Zenoti vs Boulevard: AI Enterprise vs Premium Design (2026)',
    metaDescription: 'Compare Zenoti (AI-first, pricing on request) and Boulevard (from $143/mo for one location): AI capabilities, features, and which premium platform to choose.',
    keywords: ['zenoti vs boulevard', 'zenoti or boulevard', 'boulevard vs zenoti comparison'],
    heroTitle: 'Zenoti vs Boulevard',
    heroSubtitle: 'An AI-first platform with a workforce of AI agents versus a premium salon platform with Precision Scheduling.',
    // Zenoti pricing and About pages, help.zenoti.com, and joinblvd.com/pricing, read 2026-10-09.
    verdict: 'Zenoti wins on AI breadth, with AI agents in its AI Plus package, and on global reach: 30,000+ businesses in 50+ countries, by its own count. Boulevard publishes its pricing, from $143/mo for one location, and offers Beau, an AI receptionist for calls. Zenoti\'s interface languages are English, French and French-Canada; we found no Arabic option as of October 2026.',
    whoShouldChooseA: [
      'You want AI agents across calls, marketing, leads and scheduling',
      'Global enterprise scale with multi-location management is key',
      'You run a multi-location chain and are comfortable with quote-based pricing',
    ],
    whoShouldChooseB: [
      'Premium design and client experience are top priorities',
      'Precision Scheduling and an AI receptionist for calls cover your needs',
      'You\'re a premium salon or spa brand',
    ],
    daisyPitch: 'Zenoti leads on AI breadth; Boulevard publishes its pricing. Daisy combines strong AI with beautiful UX, Arabic and English as equals, and cashback-driven customer acquisition, for businesses of all sizes.',
  },
  {
    slugA: 'acuity-scheduling',
    slugB: 'setmore',
    combinedSlug: 'acuity-vs-setmore',
    metaTitle: 'Acuity Scheduling vs Setmore: General Schedulers Compared (2026)',
    // acuityscheduling.com/pricing and setmore.com/pricing, read 2026-10-09.
    metaDescription: 'Compare Acuity Scheduling (by Squarespace, from $16/mo billed annually) and Setmore (free plan for up to 4 users): two general scheduling tools, and what a beauty business may need on top.',
    keywords: ['acuity vs setmore', 'acuity scheduling vs setmore', 'setmore vs acuity comparison'],
    heroTitle: 'Acuity Scheduling vs Setmore',
    heroSubtitle: 'Two general-purpose scheduling tools, but are they enough for beauty and wellness businesses?',
    verdict: 'Acuity is rated 4.8/5 on Capterra, and its Premium plan adds custom CSS and an AI Booking Assistant. Setmore has a free plan for up to 4 users that includes payments, Tap to Pay and customer profiles, and Pro from $5 per user per month billed annually. Both are general scheduling tools rather than beauty-specific software, and neither publishes an Arabic interface.',
    whoShouldChooseA: [
      'You need deep scheduling customization and integrations',
      'Your website runs on Squarespace',
      'You want an AI Booking Assistant for clients (Premium plan)',
    ],
    whoShouldChooseB: [
      'You want a free plan for a team of up to 4',
      'You want 24/7 human support by chat, email and phone, free plan included',
      'You\'re a small business just getting started',
    ],
    daisyPitch: 'Both are general schedulers, and neither lists a consumer marketplace or an Arabic interface. Daisy is built for beauty businesses, with an AI receptionist on WhatsApp, Instagram and the booking site, Arabic support, cashback rewards and growth tools.',
  },
];

// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------

export function getDaisyVsPage(slug: string): DaisyVsPageData | undefined {
  return getDaisyVsPageI18n(slug, 'en');
}

export function getAlternativePage(slug: string): AlternativePageData | undefined {
  return getAlternativePageI18n(slug, 'en');
}

export function getBestAlternativesPage(slug: string): BestAlternativesPageData | undefined {
  return getBestAlternativesPageI18n(slug, 'en');
}

export function getCompetitorVsPage(slug: string): CompetitorVsPageData | undefined {
  return getCompetitorVsPageI18n(slug, 'en');
}

/** Get all slugs for the /compare/[slug] route */
export function getAllCompareSlugs(): string[] {
  const daisyVsSlugs = daisyVsPages.map((p) => p.slug);
  const vsSlugs = competitorVsPages.map((p) => p.combinedSlug);
  return [...daisyVsSlugs, ...vsSlugs];
}

/** Get all slugs for the /alternative/[slug] route */
export function getAllAlternativeSlugs(): string[] {
  const altSlugs = alternativePages.map((p) => p.slug);
  const bestAltSlugs = bestAlternativesPages.map((p) => p.slug);
  return [...altSlugs, ...bestAltSlugs];
}

/** Resolve a compare page slug to its data (either DaisyVs or CompetitorVs) */
export function getComparePageData(
  slug: string,
  locale: string = 'en',
):
  | { type: 'daisy-vs'; data: DaisyVsPageData }
  | { type: 'competitor-vs'; data: CompetitorVsPageData }
  | undefined {
  const daisyVs = getDaisyVsPageI18n(slug, locale);
  if (daisyVs) return { type: 'daisy-vs', data: daisyVs };
  const competitorVs = getCompetitorVsPageI18n(slug, locale);
  if (competitorVs) return { type: 'competitor-vs', data: competitorVs };
  return undefined;
}

/** Resolve an alternative page slug to its data (either Alternative or BestAlternatives) */
export function getAlternativePageData(
  slug: string,
  locale: string = 'en',
):
  | { type: 'alternative'; data: AlternativePageData }
  | { type: 'best-alternatives'; data: BestAlternativesPageData }
  | undefined {
  const alt = getAlternativePageI18n(slug, locale);
  if (alt) return { type: 'alternative', data: alt };
  const bestAlt = getBestAlternativesPageI18n(slug, locale);
  if (bestAlt) return { type: 'best-alternatives', data: bestAlt };
  return undefined;
}

/** Get related comparison pages for internal linking */
export function getRelatedComparePages(
  currentSlug: string,
  limit: number = 4,
  locale?: string,
): { title: string; url: string; description: string }[] {
  const related: { title: string; url: string; description: string }[] = [];

  const effectiveLocale = locale ?? 'en';
  const bundle = t(getComparisonPagesI18n(), effectiveLocale);
  const prefix = locale ? `/${locale}` : '';

  for (const page of bundle.daisyVsPages) {
    if (page.slug === currentSlug || related.length >= limit) continue;
    const competitor = competitors[page.competitorSlug];
    if (competitor) {
      related.push({
        title:
          effectiveLocale === 'ar'
            ? `ديزي مقابل ${competitor.name}`
            : `Daisy vs ${competitor.name}`,
        url: `${prefix}/compare/${page.slug}`,
        description: page.metaDescription.slice(0, 120) + '...',
      });
    }
  }
  return related;
}

/** Get related alternative pages for internal linking */
export function getRelatedAlternativePages(
  currentSlug: string,
  limit: number = 4,
  locale?: string,
): { title: string; url: string; description: string }[] {
  const related: { title: string; url: string; description: string }[] = [];

  const effectiveLocale = locale ?? 'en';
  const bundle = t(getComparisonPagesI18n(), effectiveLocale);
  const prefix = locale ? `/${locale}` : '';

  for (const page of bundle.alternativePages) {
    if (page.slug === currentSlug || related.length >= limit) continue;
    const competitor = competitors[page.competitorSlug];
    if (competitor) {
      related.push({
        title:
          effectiveLocale === 'ar'
            ? `بديل ${competitor.name}`
            : `${competitor.name} Alternative`,
        url: `${prefix}/alternative/${page.slug}`,
        description: page.metaDescription.slice(0, 120) + '...',
      });
    }
  }
  return related;
}

// ---------------------------------------------------------------------------
// I18n-wrapped exports — lazily resolved to avoid circular import
// ---------------------------------------------------------------------------

interface ComparisonPagesBundle {
  daisyVsPages: DaisyVsPageData[];
  alternativePages: AlternativePageData[];
  bestAlternativesPages: BestAlternativesPageData[];
  competitorVsPages: CompetitorVsPageData[];
}

function getDaisyVsPageI18n(slug: string, locale: string): DaisyVsPageData | undefined {
  const bundle = t(getComparisonPagesI18n(), locale);
  const hit = bundle.daisyVsPages.find((p) => p.slug === slug);
  if (!hit && locale === 'ar') return daisyVsPages.find((p) => p.slug === slug);
  return hit;
}

function getAlternativePageI18n(slug: string, locale: string): AlternativePageData | undefined {
  const bundle = t(getComparisonPagesI18n(), locale);
  const hit = bundle.alternativePages.find((p) => p.slug === slug);
  if (!hit && locale === 'ar') return alternativePages.find((p) => p.slug === slug);
  return hit;
}

function getBestAlternativesPageI18n(slug: string, locale: string): BestAlternativesPageData | undefined {
  const bundle = t(getComparisonPagesI18n(), locale);
  const hit = bundle.bestAlternativesPages.find((p) => p.slug === slug);
  if (!hit && locale === 'ar') return bestAlternativesPages.find((p) => p.slug === slug);
  return hit;
}

function getCompetitorVsPageI18n(slug: string, locale: string): CompetitorVsPageData | undefined {
  const bundle = t(getComparisonPagesI18n(), locale);
  const hit = bundle.competitorVsPages.find((p) => p.combinedSlug === slug);
  if (!hit && locale === 'ar') return competitorVsPages.find((p) => p.combinedSlug === slug);
  return hit;
}

export function getComparisonPagesI18n(): I18nContent<ComparisonPagesBundle> {
  const ar = require('./comparisonPages.ar') as ComparisonPagesBundle;
  return {
    en: { daisyVsPages, alternativePages, bestAlternativesPages, competitorVsPages },
    ar,
  };
}
