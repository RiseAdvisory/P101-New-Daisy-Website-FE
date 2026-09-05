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
    tldr: 'Fresha is a marketplace charging subscription fees plus hidden transaction costs. Daisy is a complete growth platform with an AI receptionist, cashback rewards and Arabic support. Pick Fresha for marketplace exposure, Daisy to actively grow the business.',
    verdict:
      'Fresha brings marketplace reach, but it now charges monthly subscriptions on top of transaction fees and commissions, and it has no AI, no Arabic support and no customer acquisition tools. For businesses serious about growth, particularly in the GCC, Daisy is the better choice.',
    featureCommentary: {
      onlineBooking:
        'Both do online booking well. Fresha\'s strength is the size of its consumer marketplace, with 25M+ users. Daisy answers that with AI booking that carries the whole flow, payments and customer service included, 24/7 and without anyone stepping in.',
      posAndPayments:
        'Fresha takes 2.19% + $0.20 on every card transaction and 20% commission on marketplace bookings. Across a year, a busy salon can pay thousands in hidden fees. Daisy charges a transparent flat rate with nothing added per transaction.',
      clientManagement:
        'Fresha gives you basic client profiles and history. Daisy layers AI on top, predicting no-shows, flagging VIP clients and suggesting personalized offers from booking patterns.',
      staffManagement:
        'Both handle scheduling and staff calendars. Daisy\'s AI scheduling arranges appointment slots around revenue, closing gaps and preventing double-bookings on its own.',
      marketingAndCrm:
        'Fresha\'s marketing is pay-per-message blast campaigns. Daisy runs AI-powered marketing automation, targeted campaigns, cashback incentives and personalized engagement that keeps going without you.',
      inventoryManagement:
        'Both offer basic inventory tracking. Call it a tie, since neither platform specializes in deep inventory management.',
      reportingAndAnalytics:
        'Fresha offers standard reports. Daisy uses AI to recommend actions rather than only draw dashboards, spotting trends, suggesting pricing changes and forecasting demand.',
      marketplaceAndDiscovery:
        'Fresha\'s biggest strength is the 25M+ consumers browsing its marketplace. Daisy comes at it differently, with 360° customer acquisition where marketplace, cashback rewards and AI marketing work together to bring customers in and keep them.',
      aiCapabilities:
        'The gap is widest here. Fresha has announced AI features for 2026 but hasn\'t shipped them. Daisy\'s AI receptionist is live today, taking calls, bookings, payments and customer service in Arabic and English 24/7.',
    },
    whoShouldChooseDaisy: [
      'You want an AI receptionist covering bookings and customer service 24/7',
      'Your GCC clients need Arabic',
      'You want pricing you can predict, with no hidden transaction fees',
      'You want to build your brand rather than Fresha\'s',
      'You want acquisition that works for you, not just a marketplace listing',
      'You operate in the GCC and need local compliance and payment methods',
    ],
    whoShouldChooseCompetitor: [
      'You need to start cheaply, at the $9.95/mo base plan',
      'Marketplace discovery is where most of your new clients come from',
      'You work alone and process few transactions',
      'You operate only in English-speaking Western markets',
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
    tldr: 'Booksy is a solid mobile-first booking app with a basic AI voice receptionist called "Digital Doorman". Daisy brings a complete AI ecosystem, Arabic support, cashback-driven customer acquisition and flat pricing that doesn\'t rise with every provider you add.',
    verdict:
      'Booksy suits independent barbers and beauty pros who want simple mobile booking with marketplace exposure. For teams, though, the per-provider pricing gets expensive, there is no GCC presence, and the AI does nothing beyond routing calls. For growing businesses, particularly in Arabic-speaking markets, Daisy wins clearly.',
    featureCommentary: {
      onlineBooking:
        'Both offer strong online booking with consumer-facing marketplaces. Booksy has the edge on mobile app design, having been built mobile-first. Daisy matches the booking functionality and adds AI-powered self-service across the full customer journey.',
      posAndPayments:
        'Booksy charges 2.49% + $0.15 per transaction and prices per provider, at $29.99-$49.99/provider/month. A 5-person team could be paying $150-250/month before a single transaction fee. Daisy charges flat whatever the team size.',
      clientManagement:
        'Both platforms handle client profiles and history. Daisy adds AI client intelligence that spots churn risks by itself and recommends how to hold on to those clients.',
      staffManagement:
        'Scheduling is comparable. With Booksy, every new team member adds to the bill, because pricing is per provider. Daisy includes unlimited staff at flat pricing.',
      marketingAndCrm:
        'Booksy puts basic marketing tools in the Biz+ tier. Daisy provides AI-powered marketing automation with cashback rewards, a proven engine for acquiring and keeping customers.',
      inventoryManagement:
        'Booksy has basic inventory in Biz+ and Daisy offers comparable tracking. Neither is an inventory management specialist.',
      reportingAndAnalytics:
        'Booksy offers standard business reports. Daisy adds AI insights that recommend what to do rather than only showing you the data.',
      marketplaceAndDiscovery:
        'Booksy has a strong consumer marketplace, especially popular with barbershops. Daisy runs marketplace, cashback rewards and AI marketing together, so three acquisition channels rather than one.',
      aiCapabilities:
        'Booksy\'s "Digital Doorman" answers inbound calls and passes them to booking, which makes it a single-purpose AI feature. Daisy\'s AI ecosystem covers the receptionist on voice and chat, smart scheduling, marketing automation and analytics, all working together.',
    },
    whoShouldChooseDaisy: [
      'You want AI across the business, not just call routing',
      'You need Arabic',
      'Your team is growing and per-provider pricing is starting to hurt',
      'You want cashback rewards driving customer loyalty',
      'You operate in the GCC',
      'You want white-labeling so the brand stays yours',
    ],
    whoShouldChooseCompetitor: [
      'You are a solo barber or independent beauty professional',
      'A mobile-first experience matters to you above everything else',
      'You work only in the US or Europe',
      'You value the barbershop community Booksy has built',
    ],
  },
  {
    slug: 'daisy-vs-vagaro',
    competitorSlug: 'vagaro',
    metaTitle: 'Daisy vs Vagaro: Which Salon Software Is Better?',
    metaDescription:
      'Compare Daisy and Vagaro for salon management. AI features, pricing transparency, Arabic support, and customer acquisition tools, see how they stack up.',
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
    tldr: 'Vagaro is a comprehensive US-focused operations platform, strong on features and affordable to start. Daisy adds what Vagaro lacks: an AI receptionist, cashback-driven acquisition, Arabic support and real customer growth tools. Vagaro runs your business, Daisy grows it.',
    verdict:
      'Vagaro is a solid all-rounder for US-based salons wanting comprehensive features at a good price. It remains an operations tool, though, built to help you manage rather than grow. For a growth-oriented business, Daisy\'s AI, acquisition engine and GCC support make it the better investment.',
    featureCommentary: {
      onlineBooking:
        'Vagaro offers excellent booking backed by a consumer marketplace of 220K+ businesses. Daisy matches the booking quality and adds AI-powered self-service that can run the entire booking flow, upsells and payments included, without anyone stepping in.',
      posAndPayments:
        'Vagaro has an excellent POS with hardware options and 2.75% transaction fees, though the $10/month for each additional staff calendar adds up. Daisy drops the per-staff surcharge with flat pricing and offers comparable payment processing.',
      clientManagement:
        'Vagaro provides solid client profiles. Daisy builds on that with AI that predicts behavior and sends personalized outreach automatically.',
      staffManagement:
        'Both handle staff scheduling well. Vagaro charges $10/month per additional calendar, which gets expensive for larger teams. Daisy includes every member of staff in its flat pricing.',
      marketingAndCrm:
        'Vagaro sells good marketing tools as add-ons, covering email and text campaigns. Daisy treats AI-powered marketing automation with cashback rewards as a core feature rather than an extra.',
      inventoryManagement:
        'Vagaro has good inventory tracking and product management, while Daisy offers basic inventory. For inventory-heavy businesses, Vagaro has the slight edge.',
      reportingAndAnalytics:
        'Both offer solid reporting. Daisy adds AI insights that recommend specific actions from your data instead of only displaying metrics.',
      marketplaceAndDiscovery:
        'Vagaro has a consumer marketplace listing 220K+ businesses. Daisy combines marketplace, cashback and AI marketing into a broader acquisition strategy.',
      aiCapabilities:
        'Vagaro\'s AI amounts to basic automated reminders. Daisy provides a 24/7 AI receptionist, a chatbot, smart scheduling and AI marketing. This is the largest gap between the two platforms.',
    },
    whoShouldChooseDaisy: [
      'You want AI covering bookings, calls and customer service 24/7',
      'Your GCC clients need Arabic support',
      'You want acquisition tools, not only operations management',
      'You want flat pricing with no per-staff add-ons',
      'You want cashback rewards driving loyalty and repeat bookings',
      'You are trying to grow the business, not just keep it running',
    ],
    whoShouldChooseCompetitor: [
      'You need a top-tier POS with physical hardware integration',
      'You want a 30-day free trial before committing',
      'You are a US-based salon wanting a proven, feature-rich operations platform',
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
      'For solo professionals in the US, GlossGenius wins on design and simplicity. Its AI, though, is analytics only and sits in the $148/mo tier, team features are locked behind Platinum, and there is no Arabic or GCC support. If you have growth ambitions, a team, or clients outside those markets, Daisy is the clear choice.',
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
        'The Growth Analyst in Platinum at $148/mo is the only AI GlossGenius has. There is no AI receptionist, no chatbot and no smart scheduling. Daisy includes the whole AI ecosystem in the base platform: receptionist, chatbot, scheduling, marketing and analytics.',
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
    metaTitle: 'Daisy vs Mindbody: Modern AI vs Legacy Platform',
    metaDescription:
      'Compare Daisy and Mindbody for salon and spa management. AI features, pricing, and modern UX versus Mindbody\'s established but aging platform.',
    keywords: ['daisy vs mindbody', 'mindbody alternative', 'mindbody comparison', 'spa software comparison'],
    heroTitle: 'Daisy vs Mindbody',
    heroSubtitle: 'A modern AI-native platform against the legacy giant of wellness software. Is it time to upgrade?',
    tldr: 'Mindbody is the established enterprise player, listing 2M+ classes/month. It is also expensive at $139-699/mo, the interface has aged, and it charges marketplace commissions. Daisy offers modern AI, Arabic support and growth tools at a more accessible price.',
    verdict: 'Mindbody suits large fitness studios and established wellness brands that need its extensive ecosystem. For a beauty business after modern AI, GCC support or pricing it can predict, Daisy is the better choice.',
    featureCommentary: {
      onlineBooking: 'Both offer robust booking. Mindbody brings a huge consumer marketplace, with 2M+ monthly classes. Daisy adds AI self-service that carries the full booking conversation.',
      posAndPayments: 'Mindbody has a comprehensive POS and both handle payments well, though Mindbody charges marketplace commissions on top of the subscription.',
      clientManagement: 'Mindbody has extensive client profiles built on years of data. Daisy adds AI insights and engagement that starts on its own.',
      staffManagement: 'Both handle staff well, and Mindbody is the more established option for large enterprise teams.',
      marketingAndCrm: 'Mindbody sells marketing as add-ons. Daisy treats AI automation with cashback rewards as a core feature.',
      inventoryManagement: 'Inventory tracking is comparable on both platforms.',
      reportingAndAnalytics: 'Mindbody has extensive reporting. Daisy adds AI recommendations on top.',
      marketplaceAndDiscovery: 'That huge marketplace is Mindbody\'s strongest asset. Daisy answers with 360° acquisition, combining marketplace, cashback and AI marketing.',
      aiCapabilities: 'Mindbody has basic automation. Daisy provides a full AI ecosystem: receptionist, chatbot, smart scheduling and marketing automation.',
    },
    whoShouldChooseDaisy: [
      'You want modern AI, including a receptionist and chatbot',
      'You need Arabic for the GCC market',
      'You want transparent pricing with no marketplace commissions',
      'You want customer acquisition driven by cashback',
      'You would rather not work in a legacy interface',
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
    slug: 'daisy-vs-glamera',
    competitorSlug: 'glamera',
    metaTitle: 'Daisy vs Glamera: GCC Beauty Platforms Compared',
    metaDescription:
      'Compare Daisy and Glamera for Arabic beauty businesses. AI features, GCC coverage, and business management, which Arabic platform delivers more?',
    keywords: ['daisy vs glamera', 'glamera alternative', 'arabic salon software', 'gcc beauty platform'],
    heroTitle: 'Daisy vs Glamera',
    heroSubtitle: 'Both speak Arabic. Only one has AI, full business management and 6-country GCC coverage.',
    tldr: 'Glamera is a Saudi-focused marketplace with basic features and a free tier. Daisy is a complete AI-powered platform built for the GCC, live in Kuwait today, with full business management and growth tools. Both support Arabic natively.',
    verdict: 'Glamera is fine for a Saudi business that wants a free marketplace listing. Once you need anything past basic booking, whether that is AI, POS, marketing or multi-country GCC coverage, Daisy is the clear winner.',
    featureCommentary: {
      onlineBooking: 'Glamera offers basic booking alongside its marketplace. Daisy adds AI-powered self-service booking.',
      posAndPayments: 'Glamera has minimal POS. Daisy provides full point-of-sale and payment processing.',
      clientManagement: 'Glamera offers basic client information. Daisy provides AI-driven client intelligence.',
      staffManagement: 'Glamera has basic scheduling. Daisy includes full staff management, with AI arranging it.',
      marketingAndCrm: 'Glamera has no marketing tools at all. Daisy provides AI-powered marketing with cashback rewards.',
      inventoryManagement: 'Glamera has no inventory management. Daisy covers the basics.',
      reportingAndAnalytics: 'Glamera offers basic reports. Daisy adds AI insights you can act on.',
      marketplaceAndDiscovery: 'Glamera has a growing Saudi marketplace of 100K+ users. Daisy runs marketplace, cashback and AI marketing across 6 GCC countries.',
      aiCapabilities: 'Glamera has no AI whatsoever. Daisy provides a full AI ecosystem: receptionist, chatbot, scheduling, marketing and analytics.',
    },
    whoShouldChooseDaisy: [
      'You want an AI receptionist covering you 24/7',
      'You need coverage beyond Saudi Arabia',
      'You want complete business management, covering POS, inventory and reporting',
      'You want to build your own brand rather than lean on Glamera\'s marketplace',
      'You need marketing automation and cashback rewards',
    ],
    whoShouldChooseCompetitor: [
      'You operate only in Saudi Arabia',
      'You want a free marketplace listing and no commitment',
      'Basic booking is all you need for now',
    ],
  },
  {
    slug: 'daisy-vs-dingg',
    competitorSlug: 'dingg',
    metaTitle: 'Daisy vs DINGG: AI Salon Platforms Compared',
    metaDescription:
      'Compare Daisy and DINGG for AI-powered salon management. Both offer AI features, but which AI ecosystem is more complete for GCC businesses?',
    keywords: ['daisy vs dingg', 'dingg alternative', 'ai salon software', 'gcc salon management'],
    heroTitle: 'Daisy vs DINGG',
    heroSubtitle: 'Both offer AI and Arabic support, but Daisy is built for the GCC, live in Kuwait today, with a complete growth ecosystem.',
    tldr: 'DINGG offers a competitive AI suite at $49-79/mo and is expanding into the UAE. Daisy covers more of the GCC, 6 countries against 1, and adds a consumer marketplace, cashback and white-labeling that DINGG does not have.',
    verdict: 'DINGG is a credible AI competitor and priced affordably. It is early in its GCC expansion, though, covering the UAE only, with no marketplace, no cashback and limited funding. Daisy offers more complete AI, a wider GCC presence and stronger growth tools.',
    featureCommentary: {
      onlineBooking: 'Both offer good booking. DINGG keeps it basic, while Daisy adds AI self-service across the whole flow.',
      posAndPayments: 'Both offer POS. Daisy carries more payment options across all GCC countries.',
      clientManagement: 'Both handle client profiles. Daisy adds AI for retention and personalization.',
      staffManagement: 'Both handle scheduling, and team management is comparable.',
      marketingAndCrm: 'DINGG keeps AI marketing in its Professional tier at $79/mo. Daisy includes AI marketing with cashback rewards at base pricing.',
      inventoryManagement: 'DINGG has basic inventory and Daisy tracks much the same.',
      reportingAndAnalytics: 'DINGG offers standard reporting. Daisy adds AI recommendations and forecasting.',
      marketplaceAndDiscovery: 'DINGG has no consumer marketplace. Daisy acquires customers through marketplace and cashback together.',
      aiCapabilities: 'DINGG puts its AI receptionist, chatbot and scheduling in the Professional tier at $79/mo. Daisy\'s AI also takes payment inside the booking flow, runs white-labeled, and is built for the GCC, live in Kuwait today.',
    },
    whoShouldChooseDaisy: [
      'You need GCC coverage beyond the UAE',
      'You want a consumer marketplace bringing customers in',
      'You want cashback rewards keeping clients around',
      'You want white-label control of the brand',
      'You need AI that carries booking and payment end to end',
    ],
    whoShouldChooseCompetitor: [
      'You are in the UAE only and budget comes first',
      'You want AI at the lowest price you can find, at $49-79/mo',
      'Basic AI without a marketplace is enough for you',
    ],
  },
  {
    slug: 'daisy-vs-repeatmd',
    competitorSlug: 'repeatmd',
    metaTitle: 'Daisy vs RepeatMD: Complete Platform vs Marketing Tool',
    metaDescription:
      'Compare Daisy and RepeatMD. Complete AI platform at flat pricing vs $700/mo marketing-only tool. Which delivers better ROI?',
    keywords: ['daisy vs repeatmd', 'repeatmd alternative', 'med spa software', 'beauty cashback platform'],
    heroTitle: 'Daisy vs RepeatMD',
    heroSubtitle: 'A complete platform with cashback built in, against a $700/mo marketing-only tool.',
    tldr: 'RepeatMD charges $700/mo for marketing and loyalty tools, and you still need separate software for booking, POS and operations. Daisy puts AI, booking, POS, marketing and cashback in one platform.',
    verdict: 'RepeatMD is an expensive marketing add-on at $700/mo. It proves the cashback concept works, but you still have to buy operations software separately. Daisy costs less and delivers the cashback alongside the complete platform.',
    featureCommentary: {
      onlineBooking: 'RepeatMD barely does booking, because it is not a booking platform. Daisy provides full AI-powered booking.',
      posAndPayments: 'RepeatMD has basic payments. Daisy offers a complete POS and payment processing.',
      clientManagement: 'RepeatMD has good client profiles built around retention. Daisy matches them and adds AI.',
      staffManagement: 'RepeatMD has almost no staff features. Daisy provides complete staff management.',
      marketingAndCrm: 'This is where RepeatMD is strongest, with its Adonis and Aria AI agents and Beauty Bank cashback. Daisy offers comparable AI marketing with cashback, and the rest of the platform besides.',
      inventoryManagement: 'RepeatMD has no inventory at all. Daisy covers the basics.',
      reportingAndAnalytics: 'RepeatMD has good retention analytics. Daisy looks at the wider business too.',
      marketplaceAndDiscovery: 'Neither has a consumer marketplace on the scale of Fresha or Booksy, though Daisy has marketplace capabilities RepeatMD lacks.',
      aiCapabilities: 'RepeatMD has chat AI agents and marketing AI. Daisy adds a voice AI receptionist and smart scheduling, and covers the full customer journey.',
    },
    whoShouldChooseDaisy: [
      'You want a complete platform rather than marketing tools alone',
      'You cannot justify $700/mo for marketing on its own',
      'You need booking, POS and operations included',
      'You want a voice AI receptionist',
      'You need Arabic support and GCC compliance',
    ],
    whoShouldChooseCompetitor: [
      'You run a high-revenue US med spa, at $50K+/mo',
      'Your operations software is already in place and you only need marketing',
      'You specifically want RepeatMD\'s Adonis and Aria agents',
    ],
  },
  {
    slug: 'daisy-vs-planity',
    competitorSlug: 'planity',
    metaTitle: 'Daisy vs Planity: AI Platform vs French Marketplace',
    metaDescription:
      'Compare Daisy and Planity. AI-powered growth platform for GCC vs France\'s #1 beauty marketplace with zero AI capabilities.',
    keywords: ['daisy vs planity', 'planity alternative', 'beauty marketplace comparison'],
    heroTitle: 'Daisy vs Planity',
    heroSubtitle: 'An AI-powered global platform against France\'s commission-free marketplace. Different markets, different approaches.',
    tldr: 'Planity dominates France with 10M+ monthly bookings and commission-free pricing. Daisy is built for the GCC, with a native Arabic and English interface and local payment methods, live in Kuwait today and expanding across the Gulf.',
    verdict: 'In France, Planity leads clearly. Anywhere else, and in the GCC particularly, Daisy is the obvious choice, with AI, Arabic and comprehensive business management.',
    featureCommentary: {
      onlineBooking: 'Planity is excellent at booking in the French market, handling 10M+ monthly. Daisy provides AI-powered booking for the GCC.',
      posAndPayments: 'Planity has a decent POS for France. Daisy offers full GCC-compliant payments.',
      clientManagement: 'Both handle client profiles, and Daisy adds AI on top.',
      staffManagement: 'Scheduling is comparable on both.',
      marketingAndCrm: 'Planity keeps marketing basic. Daisy provides AI-powered marketing with cashback.',
      inventoryManagement: 'Planity has basic inventory and Daisy is much the same.',
      reportingAndAnalytics: 'Both offer reporting. Daisy adds AI insights.',
      marketplaceAndDiscovery: 'Planity runs France\'s largest beauty marketplace. Daisy runs one for the GCC, with cashback attached.',
      aiCapabilities: 'Planity has no AI whatsoever. Daisy provides a complete AI ecosystem.',
    },
    whoShouldChooseDaisy: [
      'You operate outside France',
      'You want an AI receptionist and chatbot',
      'You need Arabic support',
      'You want cashback rewards for customer retention',
      'You need GCC compliance and local payment methods',
    ],
    whoShouldChooseCompetitor: [
      'You operate only in France',
      'You want the reach of France\'s largest beauty marketplace',
      'Commission-free marketplace pricing is what you are after',
    ],
  },
  // P4: Tier 3 competitors
  {
    slug: 'daisy-vs-mangomint',
    competitorSlug: 'mangomint',
    metaTitle: 'Daisy vs Mangomint: AI Growth vs Clean Operations',
    metaDescription: 'Compare Daisy and Mangomint. AI-powered growth platform versus premium operations-focused salon software ($165-375/mo).',
    keywords: ['daisy vs mangomint', 'mangomint alternative', 'premium salon software'],
    heroTitle: 'Daisy vs Mangomint',
    heroSubtitle: 'Mangomint runs a beautiful salon. Daisy grows a successful business.',
    tldr: 'Mangomint holds the highest Capterra rating at 4.9/5, and the design is beautiful, for $165-375/mo. It is US-only though, with no AI, no marketplace and no customer acquisition tools. Daisy offers AI and growth tools at a more accessible price.',
    verdict: 'For a US salon that wants clean operations above all, Mangomint is exceptional. For a business that wants AI-driven growth as well as operations, Daisy is the better fit.',
    featureCommentary: {
      onlineBooking: 'Both offer excellent booking, and Mangomint earns its praise for clean, intuitive design.',
      posAndPayments: 'Both handle POS and payments, and Mangomint\'s hardware integration is tidy.',
      clientManagement: 'Both handle client profiles well, with Daisy adding AI insights.',
      staffManagement: 'Staff management is a Mangomint strength, and it is rated among the best available.',
      marketingAndCrm: 'Mangomint keeps marketing basic. Daisy includes AI-powered marketing with cashback.',
      inventoryManagement: 'Both cover the inventory basics.',
      reportingAndAnalytics: 'Both offer solid reporting, with Daisy adding AI recommendations.',
      marketplaceAndDiscovery: 'Mangomint has no marketplace at all. Daisy provides one, with cashback alongside.',
      aiCapabilities: 'Mangomint has workflow automations but no true AI. Daisy has the full AI ecosystem.',
    },
    whoShouldChooseDaisy: ['You want AI at all', 'You need Arabic and GCC support', 'You want tools that acquire customers', 'You want a more accessible price'],
    whoShouldChooseCompetitor: ['You want the highest-rated US salon software', 'Clean design matters most', 'You need operations only, not growth tools'],
  },
  {
    slug: 'daisy-vs-square-appointments',
    competitorSlug: 'square-appointments',
    metaTitle: 'Daisy vs Square Appointments: Beauty Platform vs Generic Scheduling',
    metaDescription: 'Compare Daisy (purpose-built beauty AI) with Square Appointments (generic scheduling). Beauty-specific features vs generic scheduling.',
    keywords: ['daisy vs square appointments', 'square appointments alternative', 'beauty scheduling software'],
    heroTitle: 'Daisy vs Square Appointments',
    heroSubtitle: 'Beauty AI built for the job, against a generic scheduling add-on to a payment processor.',
    tldr: 'Square Appointments is a free generic scheduling tool out of Square\'s POS ecosystem. Daisy is built for beauty, with AI, a marketplace and Arabic support. Square is a good place to start, Daisy is where growing businesses end up.',
    verdict: 'For free scheduling at the start, Square Appointments is fine. It is not built for beauty, though, and there is no AI, no marketplace and no Arabic. A growing salon leaves it behind quickly.',
    featureCommentary: {
      onlineBooking: 'Square has good generic booking. Daisy offers AI-powered booking built around beauty.',
      posAndPayments: 'Square\'s POS is among the best anywhere, which its payments heritage explains. Daisy matches it on what a beauty business needs.',
      clientManagement: 'Square has basic contacts. Daisy offers client profiles built for beauty, with AI attached.',
      staffManagement: 'Square puts basic multi-staff support in its paid plans. Daisy includes full staff management shaped around beauty.',
      marketingAndCrm: 'Square has basic email marketing. Daisy includes AI campaigns with cashback.',
      inventoryManagement: 'Square has decent product management, inherited from its retail side.',
      reportingAndAnalytics: 'Square offers standard reports. Daisy adds AI insights aimed at beauty.',
      marketplaceAndDiscovery: 'Square has no beauty marketplace. Daisy provides one, with cashback alongside.',
      aiCapabilities: 'Square has no AI. Daisy provides the full AI ecosystem.',
    },
    whoShouldChooseDaisy: ['You want features built for beauty', 'You need an AI receptionist', 'You want a marketplace where clients can find you', 'You need Arabic/GCC support'],
    whoShouldChooseCompetitor: ['You need free scheduling to begin with', 'You are already in the Square POS ecosystem', 'You need retail-grade POS hardware'],
  },
  {
    slug: 'daisy-vs-phorest',
    competitorSlug: 'phorest',
    metaTitle: 'Daisy vs Phorest: AI Growth vs CRM Loyalty',
    metaDescription: 'Compare Daisy and Phorest for salon management. AI-powered growth platform versus UK\'s loyalty-focused salon CRM.',
    keywords: ['daisy vs phorest', 'phorest alternative', 'salon crm comparison'],
    heroTitle: 'Daisy vs Phorest',
    heroSubtitle: 'Modern AI-powered growth against an established loyalty-focused CRM. Which approach wins?',
    tldr: 'Phorest has excellent CRM and loyalty tools and has been established in the UK and Ireland since 2003. Daisy adds an AI receptionist, a marketplace, cashback and Arabic support, none of which Phorest has.',
    verdict: 'In the UK market, Phorest is very good at holding on to clients. Daisy handles acquisition as well as retention, with AI behind both, which suits a business trying to grow rather than only keep what it has.',
    featureCommentary: {
      onlineBooking: 'Both offer solid booking, with Daisy adding AI self-service.',
      posAndPayments: 'POS and payments are handled well on both.',
      clientManagement: 'CRM is where Phorest is strongest, and it is what they built the product around. Daisy matches it and adds AI.',
      staffManagement: 'Both handle staff scheduling.',
      marketingAndCrm: 'Phorest is strong on loyalty and marketing automation. Daisy adds AI campaigns with cashback.',
      inventoryManagement: 'Both cover the inventory basics.',
      reportingAndAnalytics: 'Reporting is solid on both.',
      marketplaceAndDiscovery: 'Phorest has basic discovery. Daisy provides a full marketplace with cashback attached.',
      aiCapabilities: 'Phorest\'s AI covers marketing, and not much else. Daisy provides the full ecosystem.',
    },
    whoShouldChooseDaisy: ['You want the full AI ecosystem', 'You need Arabic and GCC support', 'You want a marketplace bringing clients in', 'You want cashback rewards'],
    whoShouldChooseCompetitor: ['You are established in the UK or Ireland', 'A deep loyalty program is what matters most'],
  },
  {
    slug: 'daisy-vs-acuity-scheduling',
    competitorSlug: 'acuity-scheduling',
    metaTitle: 'Daisy vs Acuity Scheduling: Beauty AI vs Generic Booking',
    metaDescription: 'Compare Daisy (beauty AI platform) and Acuity Scheduling (generic booking). Why beauty businesses need more than a scheduling tool.',
    keywords: ['daisy vs acuity scheduling', 'acuity alternative for salons', 'salon scheduling comparison'],
    heroTitle: 'Daisy vs Acuity Scheduling',
    heroSubtitle: 'A generic scheduling tool at $16/mo against a complete beauty business growth platform.',
    tldr: 'As generic scheduling at $16-49/mo, Acuity is excellent. Salons also need POS, CRM, AI, a marketplace and Arabic support, and Acuity offers none of it.',
    verdict: 'For simple appointment scheduling, Acuity is great. For a beauty business that wants growth, meaning AI, a marketplace, cashback and Arabic, Daisy is built for the job.',
    featureCommentary: {
      onlineBooking: 'Scheduling is all Acuity does, and it does it very well. Daisy matches that and adds AI.',
      posAndPayments: 'Acuity collects payments and little more. Daisy offers a full POS.',
      clientManagement: 'Acuity has basic contacts. Daisy provides a CRM built for beauty, with AI.',
      staffManagement: 'Acuity supports multiple calendars. Daisy includes staff management proper.',
      marketingAndCrm: 'Acuity has no marketing tools. Daisy includes AI campaigns with cashback.',
      inventoryManagement: 'Acuity has no inventory. Daisy covers what a beauty business stocks.',
      reportingAndAnalytics: 'Acuity reports very little. Daisy provides AI-powered analytics.',
      marketplaceAndDiscovery: 'Acuity has no marketplace. Daisy provides one, with cashback alongside.',
      aiCapabilities: 'Acuity has no AI. Daisy provides the full AI ecosystem.',
    },
    whoShouldChooseDaisy: ['You want more than scheduling', 'You need POS and business management', 'You want AI and a marketplace', 'You need Arabic/GCC support'],
    whoShouldChooseCompetitor: ['Basic appointment scheduling is all you need', 'Your budget is under $20/mo', 'You are on Squarespace and want it to integrate'],
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
    metaDescription: 'Looking for a Fresha alternative? Daisy offers AI receptionist, transparent pricing, Arabic support, and cashback, without Fresha\'s hidden fees.',
    keywords: ['fresha alternative', 'fresha replacement', 'better than fresha', 'salon software like fresha'],
    heroTitle: 'Looking for a Fresha Alternative?',
    heroSubtitle: 'Subscription fees, then transaction fees, then marketplace commissions. The costs keep stacking.',
    painPoints: [
      'Transaction fees of 2.19% + $0.20 eating into every payment',
      '20% commission on marketplace bookings, so new clients cost you money',
      'No Arabic, which rules out serving GCC clients properly',
      'No AI receptionist, so you are still answering calls and messages yourself',
      'Fresha-branded booking pages, with no control over how your brand looks',
      'Recent feature removals and pricing changes that broke trust',
    ],
    switchingReasons: [
      'An AI receptionist covering bookings, payments and customer service 24/7',
      'Flat, transparent pricing with no hidden transaction fees or commissions',
      'Native Arabic and English for the GCC market',
      'Cashback rewards that build loyalty and bring people back',
      'White-label booking pages, so the brand stays yours',
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
    heroSubtitle: 'A great app, but per-provider pricing and thin AI are holding the business back.',
    painPoints: [
      'Per-provider pricing at $29.99-49.99 each, which gets expensive as the team grows',
      'Digital Doorman routes calls and nothing more, so it cannot take payment or answer a question',
      'No Arabic, so GCC clients are out of reach',
      'No cashback or loyalty program to keep customers coming back',
      'A Booksy-branded experience, with little control over your own',
      'No white-labeling, so you cannot brand it professionally',
    ],
    switchingReasons: [
      'Flat pricing whatever the team size, so growing costs you nothing extra',
      'The full AI ecosystem: receptionist, chatbot, smart scheduling and marketing',
      'Native Arabic and English, which opens the GCC',
      'Cashback rewards that keep customers returning without prompting',
      'White-label everything, so it is your brand and your experience throughout',
      'No contracts, and help with the migration',
    ],
    topAlternatives: ['fresha', 'vagaro', 'glossgenius', 'boulevard'],
  },
  {
    slug: 'vagaro',
    competitorSlug: 'vagaro',
    metaTitle: 'Best Vagaro Alternative for Growing Salons (2026)',
    metaDescription: 'Looking beyond Vagaro? Daisy adds AI receptionist, Arabic support, and cashback acquisition tools that Vagaro doesn\'t offer.',
    keywords: ['vagaro alternative', 'vagaro replacement', 'better than vagaro', 'salon software like vagaro'],
    heroTitle: 'Looking for a Vagaro Alternative?',
    heroSubtitle: 'Vagaro manages your business well. It just does not grow it.',
    painPoints: [
      '$10/month for every additional staff calendar, which adds up fast',
      'No AI receptionist, so the calls are still yours to answer',
      'No Arabic, which closes off the GCC',
      'Built around operations, with nothing that goes out and finds customers',
      'Marketing sold as add-ons rather than built into the platform',
      'No cashback or loyalty rewards to bring people back',
    ],
    switchingReasons: [
      'An AI receptionist covering your phones, bookings and payments 24/7',
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
    metaDescription: 'Looking for a modern Mindbody alternative? Daisy offers AI receptionist, transparent pricing, and Arabic support without the legacy platform headaches.',
    keywords: ['mindbody alternative', 'mindbody replacement', 'better than mindbody'],
    heroTitle: 'Looking for a Mindbody Alternative?',
    heroSubtitle: 'An industry giant, though the dated interface, the prices and the marketplace commissions are pushing businesses out.',
    painPoints: [
      'Expensive plans at $139-699/mo, with marketplace commissions on top',
      'A legacy interface that has not kept up',
      'No AI receptionist and no chatbot',
      'No Arabic, which closes off the GCC',
      'Complicated contracts, and a steady stream of upselling',
      'Built mainly for fitness, with beauty treated as secondary',
    ],
    switchingReasons: [
      'A modern AI-powered platform with an interface that stays out of your way',
      'An AI receptionist covering customer service 24/7',
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
    metaDescription: 'Want more than clean operations? Daisy adds AI, marketplace, cashback, and Arabic support to premium salon management.',
    keywords: ['mangomint alternative', 'mangomint replacement'],
    heroTitle: 'Looking for a Mangomint Alternative?',
    heroSubtitle: 'A beautiful operations tool with no AI, no marketplace and nothing that brings customers in.',
    painPoints: [
      'Premium pricing of $165-375/mo, and no AI for it',
      'No consumer marketplace for customer discovery',
      'US-only, with no Arabic and no GCC support',
      'Operations only, with nothing for growth or acquisition',
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
    heroSubtitle: 'A great POS, but generic scheduling does not hold up in a serious beauty business.',
    painPoints: [
      'Generic scheduling that was never built for beauty',
      'No AI whatsoever',
      'No beauty marketplace, so clients cannot find you through one',
      'No Arabic and no GCC support',
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
    metaDescription: 'Moving beyond Phorest? Get AI receptionist, marketplace, and Arabic support alongside strong CRM.',
    keywords: ['phorest alternative', 'phorest replacement'],
    heroTitle: 'Looking for a Phorest Alternative?',
    heroSubtitle: 'Excellent CRM and loyalty. The rest of the industry moved to AI, and Phorest did not.',
    painPoints: [
      'Built around the UK and Ireland, with no GCC or Arabic support',
      'No AI receptionist and no chatbot',
      'No consumer marketplace at all',
      'Limited reach outside its home markets',
    ],
    switchingReasons: [
      'The full AI ecosystem behind your salon management',
      'A consumer marketplace, with cashback attached',
      'Arabic and English support for the GCC',
      'AI-powered marketing that reaches past the inbox',
    ],
    topAlternatives: ['fresha', 'vagaro', 'booksy'],
  },
  {
    slug: 'acuity-scheduling',
    competitorSlug: 'acuity-scheduling',
    metaTitle: 'Best Acuity Scheduling Alternative for Salons (2026)',
    metaDescription: 'Need more than scheduling? Daisy offers beauty-specific POS, AI, marketplace, and Arabic support.',
    keywords: ['acuity scheduling alternative', 'acuity alternative for beauty'],
    heroTitle: 'Looking for an Acuity Scheduling Alternative?',
    heroSubtitle: 'Great at appointments. A beauty business also needs POS, CRM, AI and a marketplace.',
    painPoints: [
      'Scheduling and nothing else: no POS, no inventory, no CRM',
      'Never built for beauty in the first place',
      'No AI of any kind',
      'No marketplace, so clients do not find you through it',
    ],
    switchingReasons: [
      'A complete beauty platform: booking, POS, CRM and AI',
      'An AI receptionist carrying the whole customer journey',
      'A consumer marketplace with cashback rewards',
      'Arabic and English support for GCC markets',
    ],
    topAlternatives: ['vagaro', 'fresha', 'glossgenius'],
  },
  {
    slug: 'timely',
    competitorSlug: 'timely',
    metaTitle: 'Best Timely Alternative: Flat Pricing + AI (2026)',
    metaDescription: 'Tired of per-staff pricing? Daisy offers flat pricing, AI receptionist, and Arabic support.',
    keywords: ['timely alternative', 'timely replacement', 'timely salon software alternative'],
    heroTitle: 'Looking for a Timely Alternative?',
    heroSubtitle: 'A clean interface, but per-staff pricing and no AI hold a growing team back.',
    painPoints: [
      'Per-staff pricing that climbs with every hire',
      'No AI in the product at all',
      'Aimed at New Zealand, Australia and the UK, with no GCC or Arabic',
      'No marketplace bringing customers in',
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
    metaDescription: 'Enterprise overkill? Daisy delivers powerful AI, marketplace, and native Arabic, without the lock-in or custom pricing.',
    keywords: ['zenoti alternative', 'zenoti replacement', 'zenoti alternative for salons'],
    heroTitle: 'Looking for a Zenoti Alternative?',
    heroSubtitle: 'An impressive AI suite, wrapped in enterprise contracts and opaque pricing, with no Arabic UI. Overkill for a growing salon.',
    painPoints: [
      'Opaque pricing on custom quotes only, at $225+/mo per location',
      'Annual contracts that are expensive to get out of',
      'Enterprise complexity that a smaller business will never use',
      'A Dubai office, but the interface has no Arabic. English only',
      'No consumer marketplace and no cashback rewards',
      'A long and complicated implementation',
    ],
    switchingReasons: [
      'A powerful AI receptionist without the enterprise price tag',
      'Flat, transparent pricing, with no custom quote to chase',
      'A consumer marketplace with cashback, bringing customers in',
      'A native Arabic and English interface, built for the GCC from day one',
      'A quick setup, with no enterprise implementation to sit through',
      'White-label control of your brand included',
    ],
    topAlternatives: ['fresha', 'boulevard', 'mindbody', 'vagaro'],
  },
  {
    slug: 'setmore',
    competitorSlug: 'setmore',
    metaTitle: 'Best Setmore Alternative for Beauty Businesses (2026)',
    metaDescription: 'Outgrowing free scheduling? Daisy offers beauty-specific AI, POS, CRM, marketplace, and Arabic support.',
    keywords: ['setmore alternative', 'setmore replacement', 'setmore alternative for salons'],
    heroTitle: 'Looking for a Setmore Alternative?',
    heroSubtitle: 'Free scheduling is pleasant enough. A beauty business needs AI, POS, CRM and a marketplace that sends clients your way.',
    painPoints: [
      'Generic scheduling that was not built for beauty',
      'No AI features whatsoever',
      'No POS, no CRM, no inventory management',
      'No consumer marketplace where clients could find you',
      'No Arabic and no support for GCC markets',
      'Per-user pricing that hurts more the more you grow',
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
    metaDescription: 'Drowning in add-on modules? Daisy gives beauty businesses AI, marketplace, and native Arabic, all included.',
    keywords: ['simplybook alternative', 'simplybook.me alternative', 'simplybook replacement'],
    heroTitle: 'Looking for a SimplyBook.me Alternative?',
    heroSubtitle: '70+ add-on modules sound flexible until you notice you are paying extra for everything a beauty business actually needs.',
    painPoints: [
      'Generic booking for any industry, with nothing specific to beauty',
      '70+ modules you have to choose between and pay for separately',
      'No AI features at all',
      'Arabic that reads as translated rather than native, on a clunky RTL layout',
      'No consumer marketplace to bring clients in',
      'No POS or CRM built in',
    ],
    switchingReasons: [
      'An AI receptionist included, with no add-on fee',
      'Built for beauty and wellness businesses specifically',
      'A consumer marketplace with cashback that brings clients to you',
      'Native Arabic and English, with RTL done properly',
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
    metaDescription: 'Looking for Fresha alternatives? Compare the top 7 salon platforms with better AI, pricing transparency, and Arabic support.',
    keywords: ['best fresha alternatives', 'fresha alternatives', 'fresha competitors', 'salon software like fresha'],
    heroTitle: '7 Best Fresha Alternatives in 2026',
    heroSubtitle: 'Fresha\'s subscription fees plus hidden transaction costs are adding up. Here are the best alternatives for a growing beauty business.',
    intro: 'Fresha runs the world\'s largest beauty marketplace. It also stacks monthly subscriptions on top of transaction fees, takes 20% commission on marketplace bookings and offers no AI, which is sending businesses looking. The alternatives below are compared on features, pricing, AI and international support.',
    alternatives: ['booksy', 'vagaro', 'glossgenius', 'boulevard', 'mangomint', 'square-appointments'],
    bestFor: {
      'booksy': 'Best for mobile-first solopreneurs',
      'vagaro': 'Best for US salons wanting comprehensive features at a low price',
      'glossgenius': 'Best for independent stylists wanting beautiful, simple software',
      'boulevard': 'Best for premium salons with high-touch client experiences',
      'mangomint': 'Best for operations-focused salons wanting clean UX',
      'square-appointments': 'Best for businesses already using Square for payments',
    },
    daisyEdge: 'Not one of these alternatives includes an AI receptionist that books appointments 24/7, a cashback-powered acquisition marketplace, or native Arabic support. Daisy combines all three with white-label branding and flat pricing, which makes it a growth tool rather than an operations one.',
  },
  {
    slug: 'best-booksy-alternatives',
    competitorSlug: 'booksy',
    metaTitle: '7 Best Booksy Alternatives for Beauty Pros (2026)',
    metaDescription: 'Top Booksy alternatives compared. Find booking platforms with better AI, flat pricing, and international support for your beauty business.',
    keywords: ['best booksy alternatives', 'booksy alternatives', 'booksy competitors'],
    heroTitle: '7 Best Booksy Alternatives in 2026',
    heroSubtitle: 'Per-provider pricing and thin AI no longer working for you? Here are better options for a growing team.',
    intro: 'Booksy is a popular mobile-first booking app. For a team, though, per-provider pricing gets expensive, the Digital Doorman AI does nothing beyond routing calls, and there is no GCC support. The alternatives below suit different kinds of business.',
    alternatives: ['fresha', 'vagaro', 'glossgenius', 'boulevard', 'mangomint', 'square-appointments'],
    bestFor: {
      'fresha': 'Best for marketplace-driven client discovery',
      'vagaro': 'Best for feature-rich salon management on a budget',
      'glossgenius': 'Best for solo beauty pros wanting simplicity',
      'boulevard': 'Best for upscale salons and med spas',
      'mangomint': 'Best for salons prioritizing clean operations',
      'square-appointments': 'Best for businesses needing strong POS integration',
    },
    daisyEdge: 'These alternatives all handle operations well. None of them offers AI-powered acquisition, a 24/7 voice receptionist, or cashback rewards that bring new clients through the door. That growth layer is what booking platforms tend to miss, and what Daisy adds.',
  },
  {
    slug: 'best-vagaro-alternatives',
    competitorSlug: 'vagaro',
    metaTitle: '7 Best Vagaro Alternatives for Salons (2026)',
    metaDescription: 'Top Vagaro alternatives compared. AI-powered platforms, better pricing models, and international support for modern salons.',
    keywords: ['best vagaro alternatives', 'vagaro alternatives', 'vagaro competitors'],
    heroTitle: '7 Best Vagaro Alternatives in 2026',
    heroSubtitle: 'Vagaro manages well without growing anything. These alternatives add AI-powered acquisition.',
    intro: 'Vagaro is a comprehensive US salon platform with no AI, a per-staff calendar fee and no international support. Which of the alternatives below fits depends on what you are optimising for.',
    alternatives: ['fresha', 'booksy', 'glossgenius', 'boulevard', 'mindbody', 'mangomint'],
    bestFor: {
      'fresha': 'Best for salons wanting free marketplace exposure',
      'booksy': 'Best for mobile-first independent professionals',
      'glossgenius': 'Best for solo stylists who value design and simplicity',
      'boulevard': 'Best for premium multi-service salons',
      'mindbody': 'Best for fitness and wellness businesses',
      'mangomint': 'Best for operationally complex salons',
    },
    daisyEdge: 'Vagaro alternatives manage your business. None of them goes out and finds you customers. Daisy adds an AI receptionist, a cashback marketplace and Arabic and English support, which turns salon software into a growth engine.',
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
    daisyEdge: 'These alternatives close the team management gap. None of them includes AI that answers the phone, books the appointment and keeps finding new customers around the clock. Daisy does, at flat pricing and with no per-staff fee.',
  },
  // P3
  {
    slug: 'best-mindbody-alternatives',
    competitorSlug: 'mindbody',
    metaTitle: '7 Best Mindbody Alternatives: Modern & Affordable',
    metaDescription: 'Top Mindbody alternatives compared. Modern platforms with better UI, AI features, and transparent pricing.',
    keywords: ['best mindbody alternatives', 'mindbody alternatives', 'mindbody competitors'],
    heroTitle: '7 Best Mindbody Alternatives in 2026',
    heroSubtitle: 'Legacy pricing and a dated interface sending you looking? These modern platforms do more.',
    intro: 'Mindbody dominated wellness software for years. Prices of $139-699/mo, marketplace commissions on top and an interface that has not aged well are now pushing businesses towards alternatives with AI and pricing they can read.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'boulevard', 'glossgenius', 'mangomint'],
    bestFor: {
      'fresha': 'Best for salons wanting a free starting tier',
      'vagaro': 'Best for comprehensive features at a fraction of Mindbody pricing',
      'booksy': 'Best for mobile-first barbers and beauty pros',
      'boulevard': 'Best for premium client experiences',
      'glossgenius': 'Best for independent professionals wanting modern UX',
      'mangomint': 'Best for highest-rated salon operations',
    },
    daisyEdge: 'The modern alternatives fix the interface and the pricing. Not one of them puts AI automation, cashback-driven acquisition and Arabic support in the same platform. Daisy gives you the modern experience with the growth tools already in it.',
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
    heroSubtitle: 'Clean operations at $165+/mo. So where is the AI, and where are the new customers?',
    intro: 'Mangomint holds the highest Capterra rating at 4.9/5. Premium pricing, no AI and no marketplace still leave room for alternatives that can actually grow a business.',
    alternatives: ['boulevard', 'vagaro', 'glossgenius', 'booksy'],
    bestFor: {
      'boulevard': 'Best for premium salons wanting enterprise polish',
      'vagaro': 'Best for all-round value with comprehensive features',
      'glossgenius': 'Best for design-conscious solo professionals',
      'booksy': 'Best for affordable mobile-first booking',
    },
    daisyEdge: 'These alternatives handle operations beautifully. None of them adds AI-powered acquisition, cashback loyalty or Arabic support. Daisy puts those on top of premium salon management.',
  },
  {
    slug: 'best-square-appointments-alternatives',
    competitorSlug: 'square-appointments',
    metaTitle: '7 Best Square Appointments Alternatives for Salons',
    metaDescription: 'Need more than generic scheduling? These beauty-specific platforms offer AI, marketplace, and salon management.',
    keywords: ['best square appointments alternatives', 'square appointments alternatives'],
    heroTitle: '7 Best Square Appointments Alternatives in 2026',
    heroSubtitle: 'Great at payments. A beauty business needs tools built for it.',
    intro: 'Square Appointments is a solid free scheduling tool attached to a great POS, and it was never built for beauty. The alternatives below bring industry-specific features, AI and a marketplace.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius', 'boulevard', 'mangomint'],
    bestFor: {
      'fresha': 'Best for free marketplace-powered booking',
      'vagaro': 'Best for the most complete feature set',
      'booksy': 'Best for beauty professionals wanting industry-specific tools',
      'glossgenius': 'Best for independent stylists upgrading from generic tools',
      'boulevard': 'Best for premium salon experiences',
      'mangomint': 'Best for operations-focused salon management',
    },
    daisyEdge: 'The beauty-specific alternatives cover what Square leaves out. None includes AI that takes calls and bookings 24/7, or a cashback marketplace that brings new clients in. Daisy is built for a beauty business that wants to grow rather than only fill a calendar.',
  },
  // P5
  {
    slug: 'best-zenoti-alternatives',
    competitorSlug: 'zenoti',
    metaTitle: '7 Best Zenoti Alternatives for Salons & Spas (2026)',
    metaDescription: 'Looking for Zenoti alternatives? Compare the top 7 platforms with better pricing, easier setup, and Arabic support for multi-location businesses.',
    keywords: ['best zenoti alternatives', 'zenoti alternatives', 'zenoti competitors', 'salon software like zenoti'],
    heroTitle: '7 Best Zenoti Alternatives in 2026',
    heroSubtitle: 'Enterprise pricing from $225+/mo per location, on an annual contract, after a complicated implementation. These alternatives deliver AI without the overhead.',
    intro: 'Zenoti is a powerful enterprise platform running 6 AI agents. At $225+/month per location, with mandatory annual contracts and a long implementation, plenty of businesses go looking elsewhere. It has GCC offices and still no Arabic UI. The alternatives below are compared on AI, pricing and how quickly you can deploy them.',
    alternatives: ['boulevard', 'mangomint', 'mindbody', 'fresha', 'vagaro', 'phorest'],
    bestFor: {
      'boulevard': 'Best for premium multi-location salons',
      'mangomint': 'Best for clean operations without enterprise complexity',
      'mindbody': 'Best for fitness and wellness crossover businesses',
      'fresha': 'Best for cost-conscious salons wanting marketplace exposure',
      'vagaro': 'Best for comprehensive features at mid-market pricing',
      'phorest': 'Best for UK/Ireland salons with strong CRM needs',
    },
    daisyEdge: 'The enterprise alternatives cut Zenoti\'s complexity down. None offers a fully integrated AI receptionist, a cashback acquisition engine and a native Arabic UI with no per-location surcharge. Daisy delivers the enterprise AI without the enterprise overhead.',
  },
  {
    slug: 'best-acuity-alternatives',
    competitorSlug: 'acuity-scheduling',
    metaTitle: '7 Best Acuity Scheduling Alternatives for Salons (2026)',
    metaDescription: 'Need more than basic scheduling? These beauty-specific alternatives to Acuity offer AI, POS, CRM, and marketplace features.',
    keywords: ['best acuity scheduling alternatives', 'acuity scheduling alternatives', 'acuity alternatives', 'scheduling software like acuity'],
    heroTitle: '7 Best Acuity Scheduling Alternatives in 2026',
    heroSubtitle: 'Acuity is great at generic scheduling. A beauty business needs POS, CRM, inventory and AI, not only a calendar.',
    intro: 'Acuity Scheduling by Squarespace reviews extremely well for general appointment booking, at 4.8/5 across 5600+ reviews. It was not built for beauty. With no POS, no CRM, no inventory management, no AI and no Arabic support, a growing salon leaves it behind fast. Here are the best beauty-specific alternatives.',
    alternatives: ['fresha', 'booksy', 'vagaro', 'glossgenius', 'setmore', 'simplybook-me'],
    bestFor: {
      'fresha': 'Best for free beauty-specific booking with marketplace',
      'booksy': 'Best for mobile-first beauty professionals',
      'vagaro': 'Best for full-featured salon management',
      'glossgenius': 'Best for independent stylists wanting beautiful software',
      'setmore': 'Best for budget-friendly basic scheduling',
      'simplybook-me': 'Best for businesses wanting modular customisation',
    },
    daisyEdge: 'These beauty-specific alternatives cover what Acuity leaves out for salons: POS, CRM and inventory. None of them adds AI that answers your phone 24/7, a cashback marketplace that brings new clients in, or native Arabic support. Daisy is the complete upgrade path.',
  },
  {
    slug: 'best-phorest-alternatives',
    competitorSlug: 'phorest',
    metaTitle: '5 Best Phorest Alternatives with AI & Marketplace (2026)',
    metaDescription: 'Love Phorest\'s CRM but need AI, marketplace, and Arabic support? These alternatives offer more growth tools for beauty businesses.',
    keywords: ['best phorest alternatives', 'phorest alternatives', 'phorest competitors', 'salon software like phorest'],
    heroTitle: '5 Best Phorest Alternatives in 2026',
    heroSubtitle: 'Excellent CRM and loyalty at ~$99/mo, confined to the UK and Ireland, with no AI, no marketplace and no Arabic support.',
    intro: 'Phorest has a loyal following across the UK and Ireland, built on excellent CRM, strong loyalty programs and a 4.8 rating. No AI, no customer marketplace and no Arabic or GCC support all cap its appeal once a business wants to grow past its current market. Here are the top alternatives.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'boulevard'],
    bestFor: {
      'fresha': 'Best for global marketplace reach',
      'vagaro': 'Best for comprehensive features at competitive pricing',
      'booksy': 'Best for mobile-first professionals',
      'boulevard': 'Best for premium salon brands',
    },
    daisyEdge: 'These alternatives reach beyond the UK and Ireland. None of them combines CRM-level client management with AI-powered acquisition, cashback loyalty and native Arabic support. Daisy matches what Phorest does with clients and adds the growth tools it never had.',
  },
  {
    slug: 'best-timely-alternatives',
    competitorSlug: 'timely',
    metaTitle: '5 Best Timely Alternatives Without Per-Staff Pricing (2026)',
    metaDescription: 'Timely\'s per-staff pricing scales badly for growing teams. These alternatives offer flat-rate or better pricing with AI and marketplace.',
    keywords: ['best timely alternatives', 'timely alternatives', 'timely competitors', 'salon software like timely'],
    heroTitle: '5 Best Timely Alternatives in 2026',
    heroSubtitle: 'A clean interface on a $30/mo base, then $9-15/staff that mounts up fast, with no AI, no marketplace and no Arabic support.',
    intro: 'Timely has a clean interface and a solid 4.7 rating across New Zealand, Australia and the UK. Per-staff pricing, at $9-15/staff on top of the $30/mo base, scales badly once a team grows, and there is no AI, no marketplace and no Arabic support to grow into. Here are better alternatives for a scaling beauty business.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius'],
    bestFor: {
      'fresha': 'Best for free marketplace-driven booking',
      'vagaro': 'Best for growing teams wanting flat-rate value',
      'booksy': 'Best for affordable mobile booking',
      'glossgenius': 'Best for design-focused solo professionals',
    },
    daisyEdge: 'These alternatives take the per-staff surprises out of the bill. None includes a 24/7 AI receptionist, cashback acquisition or native Arabic support. Daisy charges a flat, transparent rate and builds the growth tools into every plan.',
  },
  {
    slug: 'best-setmore-alternatives',
    competitorSlug: 'setmore',
    metaTitle: '7 Best Setmore Alternatives for Beauty Businesses (2026)',
    metaDescription: 'Outgrowing Setmore\'s basic scheduling? These beauty-specific platforms offer AI, POS, CRM, marketplace, and Arabic support.',
    keywords: ['best setmore alternatives', 'setmore alternatives', 'setmore competitors', 'scheduling software like setmore'],
    heroTitle: '7 Best Setmore Alternatives in 2026',
    heroSubtitle: 'Free scheduling is pleasant enough. Growing a beauty business takes POS, CRM, inventory, AI and a marketplace.',
    intro: 'Setmore gives you free basic scheduling, with paid tiers at $5-12/user/month. It is a generic tool: nothing specific to beauty, no POS, no CRM, no AI, no Arabic support. Once the business needs more than a calendar, the purpose-built alternatives below are worth far more.',
    alternatives: ['fresha', 'booksy', 'vagaro', 'glossgenius', 'acuity-scheduling', 'simplybook-me'],
    bestFor: {
      'fresha': 'Best for free beauty-specific marketplace booking',
      'booksy': 'Best for affordable beauty-specific step up',
      'vagaro': 'Best for the most features per dollar',
      'glossgenius': 'Best for solo stylists wanting premium simplicity',
      'acuity-scheduling': 'Best for advanced scheduling customisation',
      'simplybook-me': 'Best for businesses wanting modular add-on flexibility',
    },
    daisyEdge: 'These alternatives add the beauty-specific features generic scheduling never had. None includes AI-powered acquisition, cashback rewards or Arabic support. Daisy is where a business goes when it has outgrown free tools.',
  },
  {
    slug: 'best-simplybookme-alternatives',
    competitorSlug: 'simplybook-me',
    metaTitle: '7 Best SimplyBook.me Alternatives for Salons (2026)',
    metaDescription: 'Tired of managing 70+ add-ons? These beauty-specific SimplyBook.me alternatives offer all-in-one platforms with AI and marketplace.',
    keywords: ['best simplybookme alternatives', 'simplybook.me alternatives', 'simplybook alternatives', 'booking software like simplybookme'],
    heroTitle: '7 Best SimplyBook.me Alternatives in 2026',
    heroSubtitle: 'Modular pricing across 70+ add-ons sounds flexible until you are paying for 15 features that should have come in the box.',
    intro: 'SimplyBook.me offers generic booking on a modular add-on system, running from free to $59.90/mo. Managing 70+ add-ons, Arabic that is translated rather than native, no AI and no marketplace make it a frustrating fit for a beauty business that wants things to work without assembly. Here are the best all-in-one alternatives.',
    alternatives: ['fresha', 'booksy', 'vagaro', 'glossgenius', 'acuity-scheduling', 'setmore'],
    bestFor: {
      'fresha': 'Best for free all-in-one marketplace booking',
      'booksy': 'Best for mobile-first beauty professionals',
      'vagaro': 'Best for comprehensive features without add-on complexity',
      'glossgenius': 'Best for clean design and simplicity',
      'acuity-scheduling': 'Best for advanced scheduling customisation',
      'setmore': 'Best for free basic scheduling',
    },
    daisyEdge: 'These alternatives swap the add-on complexity for all-in-one platforms. None includes AI that takes calls and bookings 24/7, or a cashback marketplace that acquires clients. Daisy replaces the complexity with one platform that also grows the business.',
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
    verdict: 'Fresha wins on marketplace scale and lower starting price. Booksy wins on mobile experience and has a basic AI voice feature (Digital Doorman). Neither offers Arabic support, full AI ecosystem, or cashback-driven customer acquisition.',
    whoShouldChooseA: [
      'You want an affordable starting point with marketplace exposure',
      'Marketplace discovery is your primary acquisition channel',
      'You prefer web-based management over mobile',
    ],
    whoShouldChooseB: [
      'You prefer a mobile-first experience',
      'You want basic AI voice receptionist (Digital Doorman)',
      'You\'re an independent barber or beauty pro',
    ],
    daisyPitch: 'Both Fresha and Booksy are operations tools with marketplace bolt-ons. Daisy is a growth platform with full AI ecosystem, Arabic support, cashback rewards, and white-labeling, capabilities neither competitor offers.',
  },
  {
    slugA: 'fresha',
    slugB: 'vagaro',
    combinedSlug: 'fresha-vs-vagaro',
    metaTitle: 'Fresha vs Vagaro: Marketplace vs Feature-Rich (2026)',
    metaDescription: 'Compare Fresha (from $9.95/mo + fees) and Vagaro (feature-rich at $30/mo). Pricing, features, and which is better for your salon.',
    keywords: ['fresha vs vagaro', 'fresha or vagaro', 'vagaro vs fresha'],
    heroTitle: 'Fresha vs Vagaro',
    heroSubtitle: 'Low starting price with stacking fees versus $30/mo with comprehensive features, which model works better?',
    verdict: 'Fresha starts cheaper but subscription fees plus transaction fees plus commissions add up. Vagaro offers more features at a predictable $30/mo. Neither has AI receptionist, Arabic support, or cashback rewards.',
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
    daisyPitch: 'Fresha and Vagaro focus on operations. Daisy adds what both lack: AI receptionist, cashback acquisition, Arabic support, and proactive growth tools.',
  },
  {
    slugA: 'booksy',
    slugB: 'vagaro',
    combinedSlug: 'booksy-vs-vagaro',
    metaTitle: 'Booksy vs Vagaro: Mobile App vs All-in-One (2026)',
    metaDescription: 'Compare Booksy (mobile-first) and Vagaro (feature-rich). Per-provider vs per-calendar pricing, AI features, and marketplace differences.',
    keywords: ['booksy vs vagaro', 'booksy or vagaro', 'vagaro vs booksy'],
    heroTitle: 'Booksy vs Vagaro',
    heroSubtitle: 'Mobile-first booking app versus comprehensive all-in-one salon platform.',
    verdict: 'Booksy excels on mobile UX and has basic AI (Digital Doorman). Vagaro offers more features and better POS. Both lack Arabic support, full AI, and cashback rewards.',
    whoShouldChooseA: [
      'Mobile-first experience is your top priority',
      'You\'re a solo barber or beauty pro',
      'You want basic AI call handling',
    ],
    whoShouldChooseB: [
      'You want the most comprehensive feature set',
      'POS and hardware integration matter',
      'You need strong inventory and reporting',
    ],
    daisyPitch: 'Both are solid operations platforms. Daisy offers what neither provides: full AI ecosystem, Arabic/English multilingual support, cashback customer acquisition, and white-label brand control.',
  },
  {
    slugA: 'vagaro',
    slugB: 'mindbody',
    combinedSlug: 'vagaro-vs-mindbody',
    metaTitle: 'Vagaro vs Mindbody: Value vs Legacy (2026)',
    metaDescription: 'Compare Vagaro ($30/mo) and Mindbody ($139+/mo). Feature comparison, pricing breakdown, and a modern alternative for GCC businesses.',
    keywords: ['vagaro vs mindbody', 'vagaro or mindbody', 'mindbody vs vagaro'],
    heroTitle: 'Vagaro vs Mindbody',
    heroSubtitle: 'Modern value at $30/mo versus legacy premium at $139+/mo, the features tell the real story.',
    verdict: 'Vagaro offers comparable features at a fraction of Mindbody\'s price. Mindbody wins on marketplace scale and enterprise features. Neither has AI receptionist, Arabic support, or cashback.',
    whoShouldChooseA: [
      'You want comprehensive features at an affordable price',
      'You\'re a small-to-medium salon or spa',
      'You value a 30-day free trial',
    ],
    whoShouldChooseB: [
      'You need Mindbody\'s massive fitness marketplace',
      'Enterprise-level multi-location management is required',
      'You\'re deeply invested in the Mindbody ecosystem',
    ],
    daisyPitch: 'Both are operations platforms at different price points. Daisy adds AI-powered growth: receptionist, cashback, Arabic support, and customer acquisition tools that neither Vagaro nor Mindbody offer.',
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
    metaDescription: 'Compare Fresha (from $9.95/mo + marketplace) and GlossGenius ($24/mo beauty-focused). Features, pricing, and which suits your salon better.',
    keywords: ['fresha vs glossgenius', 'fresha or glossgenius'],
    heroTitle: 'Fresha vs GlossGenius',
    heroSubtitle: 'Marketplace with stacking fees versus beautiful design at $24/mo, which trade-off works for you?',
    verdict: 'Fresha wins on marketplace scale. GlossGenius wins on design and simplicity. Neither has full AI, Arabic, or cashback.',
    whoShouldChooseA: ['You want marketplace exposure with low starting cost', 'Client discovery through marketplace matters most', 'You\'re comfortable with transaction fees on top of subscription'],
    whoShouldChooseB: ['Design and aesthetics matter most', 'You want affordable paid software ($24/mo)', 'You\'re a solo US beauty professional'],
    daisyPitch: 'Fresha gives marketplace, GlossGenius gives design. Daisy gives both plus AI, Arabic, cashback, and growth tools.',
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
    verdict: 'Booksy wins on mobile app and marketplace. GlossGenius wins on design and affordability. Booksy has basic AI; GlossGenius has AI analytics only at $148/mo.',
    whoShouldChooseA: ['Mobile experience is priority', 'You want marketplace exposure', 'Basic AI call handling appeals to you'],
    whoShouldChooseB: ['Beautiful booking pages matter most', 'You want the simplest tool at $24/mo', 'You\'re a US-based solo professional'],
    daisyPitch: 'Both serve solo US professionals well. Daisy serves growing businesses with full AI, Arabic support, team management, marketplace, and cashback.',
  },
  {
    slugA: 'mindbody',
    slugB: 'boulevard',
    combinedSlug: 'mindbody-vs-boulevard',
    metaTitle: 'Mindbody vs Boulevard: Legacy vs Modern Premium (2026)',
    metaDescription: 'Compare Mindbody (enterprise legacy) and Boulevard (modern premium). Features, AI, pricing, and which premium platform to choose.',
    keywords: ['mindbody vs boulevard', 'mindbody or boulevard'],
    heroTitle: 'Mindbody vs Boulevard',
    heroSubtitle: 'The industry legacy versus the modern premium challenger, which premium platform delivers more?',
    verdict: 'Mindbody has marketplace scale and enterprise depth. Boulevard has modern design and AI scheduling. Both are premium-priced with no Arabic or cashback.',
    whoShouldChooseA: ['You need the largest fitness marketplace', 'Enterprise multi-location is essential', 'You\'re an established fitness/wellness brand'],
    whoShouldChooseB: ['Modern design and UX matter', 'AI scheduling optimization appeals', 'You\'re a premium salon/spa brand'],
    daisyPitch: 'Both are expensive US-only operations platforms. Daisy provides full AI, Arabic support, cashback acquisition, and growth tools at more accessible pricing.',
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
    metaDescription: 'Compare Fresha (from $9.95/mo + fees) and Mindbody ($139+/mo enterprise). Two ends of salon software, plus a modern alternative.',
    keywords: ['fresha vs mindbody', 'fresha or mindbody'],
    heroTitle: 'Fresha vs Mindbody',
    heroSubtitle: 'The budget marketplace versus the enterprise legacy, two ends of beauty business software.',
    verdict: 'Fresha is better for cost-conscious small businesses with its lower starting price. Mindbody is better for large enterprise operations. Both lack AI receptionist, Arabic, and cashback.',
    whoShouldChooseA: ['Cost is the top priority', 'You want marketplace exposure at a lower price point', 'You\'re a small salon'],
    whoShouldChooseB: ['Enterprise features are required', 'Large fitness marketplace matters', 'Multi-location management needed'],
    daisyPitch: 'Between budget-with-hidden-fees and expensive-enterprise, Daisy offers the modern middle: full AI, Arabic support, cashback, and growth tools at transparent pricing.',
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
    verdict: 'Fresha wins on beauty-specific features and marketplace exposure with 25M+ users. Square Appointments wins on POS quality and free tier. Neither offers AI receptionist, Arabic support, or cashback rewards.',
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
    daisyPitch: 'Fresha offers marketplace reach; Square offers POS strength. Daisy combines both approaches with full AI receptionist, Arabic support, cashback-driven customer acquisition, and white-label branding.',
  },
  {
    slugA: 'booksy',
    slugB: 'mindbody',
    combinedSlug: 'booksy-vs-mindbody',
    metaTitle: 'Booksy vs Mindbody: Mobile vs Enterprise (2026)',
    metaDescription: 'Compare Booksy (mobile-first, $29.99/mo) and Mindbody (enterprise, $139+/mo). Features, pricing, AI, and which platform suits your business.',
    keywords: ['booksy vs mindbody', 'booksy or mindbody', 'mindbody vs booksy comparison'],
    heroTitle: 'Booksy vs Mindbody',
    heroSubtitle: 'Mobile-first affordability versus enterprise legacy, two very different tiers of beauty business software.',
    verdict: 'Booksy wins on mobile experience, affordability, and has a basic AI voice feature (Digital Doorman). Mindbody wins on enterprise scale and the largest fitness marketplace. Neither offers Arabic support or cashback rewards.',
    whoShouldChooseA: [
      'You\'re an independent professional who values mobile-first',
      'Budget matters ,  $29.99/mo vs $139+/mo',
      'Basic AI call routing (Digital Doorman) appeals to you',
    ],
    whoShouldChooseB: [
      'You run a multi-location fitness or wellness brand',
      'Enterprise reporting and integrations are essential',
      'The largest fitness marketplace matters for discovery',
    ],
    daisyPitch: 'Booksy is affordable but limited; Mindbody is powerful but expensive and dated. Daisy bridges the gap with full AI ecosystem, Arabic support, cashback acquisition, and modern UX at accessible pricing.',
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
    verdict: 'Booksy wins on beauty-specific features, mobile app, and marketplace. Square wins on POS, free tier, and payment ecosystem. Booksy has basic AI; Square has none. Neither supports Arabic or cashback.',
    whoShouldChooseA: [
      'You\'re a beauty professional who wants a specialized platform',
      'Mobile-first experience and marketplace matter',
      'Basic AI voice handling (Digital Doorman) is appealing',
    ],
    whoShouldChooseB: [
      'Payment processing is your primary need',
      'You want to start free and scale up',
      'You already rely on the Square ecosystem',
    ],
    daisyPitch: 'Booksy specializes in beauty; Square specializes in payments. Daisy combines beauty-specific tools with full AI receptionist, Arabic support, cashback rewards, and growth-focused features neither platform offers.',
  },
  {
    slugA: 'vagaro',
    slugB: 'square-appointments',
    combinedSlug: 'vagaro-vs-square-appointments',
    metaTitle: 'Vagaro vs Square Appointments: Features vs POS (2026)',
    metaDescription: 'Compare Vagaro (feature-rich salon software) and Square Appointments (payment-first scheduling). Pricing, features, and which delivers more value.',
    keywords: ['vagaro vs square appointments', 'vagaro or square appointments', 'square appointments vs vagaro'],
    heroTitle: 'Vagaro vs Square Appointments',
    heroSubtitle: 'Comprehensive beauty features at $30/mo versus free payment-first scheduling, depth versus simplicity.',
    verdict: 'Vagaro wins on feature depth, beauty-specific tools, and POS quality. Square wins on free tier and payment ecosystem integration. Vagaro has a basic AI chatbot; Square has no AI. Neither supports Arabic or cashback.',
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
    daisyPitch: 'Vagaro manages operations well; Square handles payments well. Daisy is a growth platform that does both and adds full AI receptionist, Arabic support, cashback-driven acquisition, and white-label branding.',
  },
  {
    slugA: 'glossgenius',
    slugB: 'square-appointments',
    combinedSlug: 'glossgenius-vs-square-appointments',
    metaTitle: 'GlossGenius vs Square Appointments: Design vs POS (2026)',
    metaDescription: 'Compare GlossGenius (beautifully designed salon tool) and Square Appointments (payment-first scheduling). Features, pricing, and which suits your salon.',
    keywords: ['glossgenius vs square appointments', 'glossgenius or square appointments', 'square appointments vs glossgenius'],
    heroTitle: 'GlossGenius vs Square Appointments',
    heroSubtitle: 'Beautiful beauty-focused design at $24/mo versus free payment-first scheduling, aesthetics versus ecosystem.',
    verdict: 'GlossGenius wins on design, beauty-specific branding, and client experience. Square wins on free tier, POS ecosystem, and payment processing. GlossGenius has AI analytics at $148/mo; Square has no AI. Neither supports Arabic or cashback.',
    whoShouldChooseA: [
      'Brand aesthetics and beautiful booking pages matter most',
      'You\'re a solo beauty professional who values design',
      'AI analytics insights justify the higher tier price',
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
    metaTitle: 'Mindbody vs Zenoti: Enterprise Legacy vs AI-First (2026)',
    metaDescription: 'Compare Mindbody (legacy enterprise, $139+/mo) and Zenoti (AI-first enterprise, $225+/mo). Features, AI capabilities, and which enterprise platform wins.',
    keywords: ['mindbody vs zenoti', 'mindbody or zenoti', 'zenoti vs mindbody comparison'],
    heroTitle: 'Mindbody vs Zenoti',
    heroSubtitle: 'The industry legacy versus the AI-first challenger, two enterprise platforms, fundamentally different approaches.',
    verdict: 'Mindbody wins on marketplace scale and brand recognition in fitness. Zenoti wins on AI capabilities with 6 AI agents and modern architecture. Both are expensive enterprise solutions with no cashback or full Arabic UI support.',
    whoShouldChooseA: [
      'You need the largest fitness and wellness marketplace',
      'Brand recognition and industry trust matter most',
      'You\'re a large fitness or yoga studio chain',
    ],
    whoShouldChooseB: [
      'AI-first operations with 6 specialized AI agents appeal to you',
      'Modern architecture and continuous innovation matter',
      'You\'re an enterprise salon or spa chain',
    ],
    daisyPitch: 'Both are expensive enterprise platforms locked to annual contracts. Daisy delivers AI capabilities rivaling Zenoti with marketplace reach rivaling Mindbody, plus Arabic support, cashback acquisition, and accessible pricing for all business sizes.',
  },
  {
    slugA: 'zenoti',
    slugB: 'boulevard',
    combinedSlug: 'zenoti-vs-boulevard',
    metaTitle: 'Zenoti vs Boulevard: AI Enterprise vs Premium Design (2026)',
    metaDescription: 'Compare Zenoti (AI-first enterprise, $225+/mo) and Boulevard (premium design, $158+/mo). AI capabilities, features, and which premium platform to choose.',
    keywords: ['zenoti vs boulevard', 'zenoti or boulevard', 'boulevard vs zenoti comparison'],
    heroTitle: 'Zenoti vs Boulevard',
    heroSubtitle: 'AI-first enterprise with 6 agents versus premium design with intelligent scheduling, the premium platform showdown.',
    verdict: 'Zenoti wins on AI depth (6 specialized agents) and global enterprise scale. Boulevard wins on design quality, UX, and more accessible entry pricing. Neither has Arabic UI, cashback rewards, or marketplace-driven acquisition.',
    whoShouldChooseA: [
      'You need the most advanced AI capabilities in the industry',
      'Global enterprise scale with multi-location management is key',
      'You\'re a large chain willing to invest $225+/mo per location',
    ],
    whoShouldChooseB: [
      'Premium design and client experience are top priorities',
      'Intelligent scheduling AI is sufficient for your needs',
      'You\'re a premium US-based salon or spa brand',
    ],
    daisyPitch: 'Zenoti leads on AI; Boulevard leads on design. Daisy combines strong AI with beautiful UX and adds what both miss: Arabic support, cashback-driven customer acquisition, and growth tools accessible to businesses of all sizes.',
  },
  {
    slugA: 'acuity-scheduling',
    slugB: 'setmore',
    combinedSlug: 'acuity-vs-setmore',
    metaTitle: 'Acuity Scheduling vs Setmore: General Schedulers Compared (2026)',
    metaDescription: 'Compare Acuity Scheduling (by Squarespace, $16/mo) and Setmore (free tier). General scheduling tools, plus why beauty businesses need more.',
    keywords: ['acuity vs setmore', 'acuity scheduling vs setmore', 'setmore vs acuity comparison'],
    heroTitle: 'Acuity Scheduling vs Setmore',
    heroSubtitle: 'Two general-purpose scheduling tools, but are they enough for beauty and wellness businesses?',
    verdict: 'Acuity wins on power, customization, and excellent reviews (4.8 stars). Setmore wins on pricing with a generous free tier. Both are general scheduling tools, neither is beauty-specific, and neither offers AI, POS, CRM, or Arabic support.',
    whoShouldChooseA: [
      'You need powerful scheduling customization and integrations',
      'Squarespace website integration is important',
      'You\'re willing to pay for a polished scheduling experience',
    ],
    whoShouldChooseB: [
      'Free scheduling is the top priority',
      'You need basic booking with minimal cost',
      'You\'re a small business just getting started',
    ],
    daisyPitch: 'Both are general schedulers that lack beauty-specific features, POS, CRM, AI, and marketplace. Daisy is purpose-built for beauty businesses with full AI receptionist, Arabic support, cashback rewards, and end-to-end business growth tools.',
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
