// =============================================================================
// WS2: Comparison Page Data — Powers all conversion pages
// =============================================================================

import type { CompetitorData } from './competitorData';
import { competitors, daisyData } from './competitorData';

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
  alternatives: string[]; // ordered slugs, Daisy always first
  verdict: string;
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
      'How does an AI-powered growth platform compare to the world\'s largest beauty marketplace?',
    tldr: 'Fresha is a marketplace with subscription fees plus hidden transaction costs. Daisy is a complete growth platform with AI receptionist, cashback rewards, and Arabic support. Choose Fresha for marketplace exposure; choose Daisy to actively grow your business.',
    verdict:
      'Fresha offers marketplace reach but now charges monthly subscriptions on top of transaction fees and commissions, and it lacks AI, Arabic support, and customer acquisition tools. Daisy is the better choice for businesses serious about growth, especially in the GCC market.',
    featureCommentary: {
      onlineBooking:
        'Both platforms offer excellent online booking. Fresha\'s strength is its massive consumer marketplace with 25M+ users. Daisy matches this with AI-powered booking that handles the entire flow — including payments and customer service — 24/7 without human intervention.',
      posAndPayments:
        'Fresha charges 2.19% + $0.20 on every card transaction, plus 20% commission on marketplace bookings. Over a year, a busy salon can pay thousands in hidden fees. Daisy offers transparent flat pricing with no per-transaction surprises.',
      clientManagement:
        'Fresha provides basic client profiles and history. Daisy adds AI-driven insights — predicting no-shows, identifying VIP clients, and suggesting personalized offers based on booking patterns.',
      staffManagement:
        'Both handle scheduling and staff calendars. Daisy\'s AI scheduling optimizes appointment slots to maximize revenue, reducing gaps and double-bookings automatically.',
      marketingAndCrm:
        'Fresha\'s marketing is pay-per-message blast campaigns. Daisy provides AI-powered marketing automation — targeted campaigns, cashback incentives, and personalized engagement that runs on autopilot.',
      inventoryManagement:
        'Both offer basic inventory tracking. This is a functional tie — neither platform specializes in deep inventory management.',
      reportingAndAnalytics:
        'Fresha offers standard reports. Daisy leverages AI to provide actionable recommendations, not just dashboards — spotting trends, suggesting pricing changes, and forecasting demand.',
      marketplaceAndDiscovery:
        'Fresha\'s biggest strength: 25M+ consumers browsing the marketplace. Daisy takes a different approach with 360° customer acquisition — marketplace + cashback rewards + AI marketing working together to bring in and retain customers.',
      aiCapabilities:
        'This is the biggest gap. Fresha has announced AI features for 2026 but hasn\'t shipped them. Daisy\'s AI receptionist is live today, handling calls, bookings, payments, and customer service in Arabic and English 24/7.',
    },
    whoShouldChooseDaisy: [
      'You want an AI receptionist handling bookings and customer service 24/7',
      'You need Arabic language support for GCC clients',
      'You want transparent pricing without hidden transaction fees',
      'You want to build your own brand, not Fresha\'s',
      'You want proactive customer acquisition, not just a marketplace listing',
      'You operate in the GCC and need local compliance and payment methods',
    ],
    whoShouldChooseCompetitor: [
      'You need a low-cost starting point ($9.95/mo base plan)',
      'You rely heavily on marketplace discovery for new clients',
      'You\'re a solo practitioner with minimal transaction volume',
      'You only operate in English-speaking Western markets',
    ],
  },
  {
    slug: 'daisy-vs-booksy',
    competitorSlug: 'booksy',
    metaTitle: 'Daisy vs Booksy: Full Feature Comparison (2026)',
    metaDescription:
      'Daisy vs Booksy — compare AI features, pricing, Arabic support, and customer acquisition tools. Find the best booking platform for your beauty business.',
    keywords: [
      'daisy vs booksy',
      'booksy alternative',
      'booksy comparison',
      'beauty booking app comparison',
      'salon app comparison',
    ],
    heroTitle: 'Daisy vs Booksy',
    heroSubtitle:
      'A mobile-first booking app versus a full AI-powered growth platform — which one helps your business grow?',
    tldr: 'Booksy is a solid mobile-first booking app with a basic AI voice receptionist ("Digital Doorman"). Daisy offers a complete AI ecosystem, Arabic support, cashback-driven customer acquisition, and flat pricing that doesn\'t scale per-provider.',
    verdict:
      'Booksy is great for independent barbers and beauty pros who want simple mobile booking with marketplace exposure. But its per-provider pricing gets expensive for teams, it has zero GCC presence, and its AI is limited to call routing. Daisy is the clear winner for growing businesses, especially in Arabic-speaking markets.',
    featureCommentary: {
      onlineBooking:
        'Both offer strong online booking with consumer-facing marketplaces. Booksy has an edge in mobile app design — it\'s built mobile-first. Daisy matches booking functionality while adding AI-powered self-service that handles the full customer journey.',
      posAndPayments:
        'Booksy charges 2.49% + $0.15 per transaction with per-provider pricing ($29.99-$49.99/provider/month). A 5-person team could pay $150-250/month before transaction fees. Daisy offers flat pricing regardless of team size.',
      clientManagement:
        'Both platforms handle client profiles and history. Daisy adds AI-driven client intelligence, automatically identifying churn risks and recommending retention strategies.',
      staffManagement:
        'Comparable features for scheduling. Booksy\'s per-provider pricing means every new team member increases cost. Daisy includes unlimited staff at flat pricing.',
      marketingAndCrm:
        'Booksy offers basic marketing tools in the Biz+ tier. Daisy provides AI-powered marketing automation with cashback rewards — a proven customer acquisition and retention engine.',
      inventoryManagement:
        'Booksy has basic inventory in Biz+. Daisy offers comparable tracking. Neither is an inventory management specialist.',
      reportingAndAnalytics:
        'Booksy offers standard business reports. Daisy adds AI-powered insights that proactively recommend actions — not just show data.',
      marketplaceAndDiscovery:
        'Booksy has a strong consumer marketplace, particularly popular with barbershops. Daisy offers marketplace + cashback rewards + AI marketing — three acquisition channels instead of one.',
      aiCapabilities:
        'Booksy\'s "Digital Doorman" handles inbound calls and routes to booking — it\'s a single-purpose AI feature. Daisy\'s AI ecosystem covers receptionist (voice + chat), smart scheduling, marketing automation, and analytics — all working together.',
    },
    whoShouldChooseDaisy: [
      'You want comprehensive AI, not just call routing',
      'You need Arabic language support',
      'Your team is growing and per-provider pricing is getting expensive',
      'You want cashback rewards to drive customer loyalty',
      'You operate in the GCC market',
      'You want to build your own brand with white-labeling',
    ],
    whoShouldChooseCompetitor: [
      'You\'re a solo barber or independent beauty professional',
      'You prioritize mobile-first experience above all else',
      'You operate only in the US or Europe',
      'You value Booksy\'s specific barbershop community',
    ],
  },
  {
    slug: 'daisy-vs-vagaro',
    competitorSlug: 'vagaro',
    metaTitle: 'Daisy vs Vagaro: Which Salon Software Is Better?',
    metaDescription:
      'Compare Daisy and Vagaro for salon management. AI features, pricing transparency, Arabic support, and customer acquisition tools — see how they stack up.',
    keywords: [
      'daisy vs vagaro',
      'vagaro alternative',
      'vagaro comparison',
      'salon management software comparison',
      'vagaro review',
    ],
    heroTitle: 'Daisy vs Vagaro',
    heroSubtitle:
      'A feature-rich operations platform versus an AI-powered growth engine — which suits your salon better?',
    tldr: 'Vagaro is a comprehensive US-focused operations platform with strong features and an affordable starting price. Daisy adds what Vagaro lacks: AI receptionist, cashback-driven acquisition, Arabic support, and true customer growth tools. Vagaro runs your business; Daisy grows it.',
    verdict:
      'Vagaro is a solid all-rounder for US-based salons that want comprehensive features at a good price. But it\'s fundamentally an operations tool — it helps you manage, not grow. Daisy\'s AI capabilities, customer acquisition engine, and GCC support make it the better investment for growth-oriented businesses.',
    featureCommentary: {
      onlineBooking:
        'Vagaro offers excellent booking with a consumer marketplace (220K+ businesses). Daisy matches the booking quality while adding AI-powered self-service that can handle the entire booking flow — including upsells and payments — without human intervention.',
      posAndPayments:
        'Vagaro has best-in-class POS with hardware options and 2.75% transaction fees. The $10/month per additional staff calendar adds up. Daisy\'s flat pricing removes the per-staff surcharge while offering comparable payment processing.',
      clientManagement:
        'Vagaro provides solid client profiles. Daisy enhances this with AI-driven intelligence that predicts behavior and automates personalized outreach.',
      staffManagement:
        'Both handle staff scheduling well. Vagaro charges $10/month per additional calendar, which can make larger teams expensive. Daisy includes all staff in its flat pricing.',
      marketingAndCrm:
        'Vagaro offers good marketing tools as add-ons (email, text campaigns). Daisy includes AI-powered marketing automation with cashback rewards as a core feature, not an add-on.',
      inventoryManagement:
        'Vagaro has good inventory tracking and product management. Daisy offers basic inventory. For inventory-heavy businesses, Vagaro has a slight edge here.',
      reportingAndAnalytics:
        'Both offer solid reporting. Daisy adds AI-powered actionable insights — recommending specific actions based on your data, not just displaying metrics.',
      marketplaceAndDiscovery:
        'Vagaro has a consumer marketplace with 220K+ businesses listed. Daisy offers marketplace + cashback + AI marketing — a more comprehensive acquisition strategy.',
      aiCapabilities:
        'Vagaro has minimal AI — basic automated reminders. Daisy provides 24/7 AI receptionist, chatbot, smart scheduling, and AI marketing. This is the largest gap between the two platforms.',
    },
    whoShouldChooseDaisy: [
      'You want AI to handle bookings, calls, and customer service 24/7',
      'You need Arabic support for GCC clients',
      'You want customer acquisition tools, not just operations management',
      'You want flat pricing without per-staff add-ons',
      'You want cashback rewards to drive loyalty and repeat bookings',
      'You\'re looking to actively grow, not just manage your business',
    ],
    whoShouldChooseCompetitor: [
      'You need best-in-class POS with physical hardware integration',
      'You prioritize a 30-day free trial before committing',
      'You\'re a US-based salon wanting a proven, feature-rich operations platform',
      'Deep inventory management is critical to your business',
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
      'A beautifully designed solopreneur tool versus a complete AI-powered growth platform — which matches your ambitions?',
    tldr: 'GlossGenius is beautiful, simple, and affordable ($24/mo) — ideal for solo US beauty professionals. Daisy is built for businesses that want to scale: AI receptionist, team management, marketplace with cashback, and Arabic support. GlossGenius helps you look great; Daisy helps you grow.',
    verdict:
      'GlossGenius wins on design and simplicity for solo professionals in the US. But its AI is limited to analytics in the $148/mo tier, team features are locked behind Platinum, and there\'s no Arabic or GCC support. Daisy is the clear choice for businesses with growth ambitions, teams, or international reach.',
    featureCommentary: {
      onlineBooking:
        'Both offer strong booking experiences. GlossGenius is known for its beautiful booking pages — design is a real differentiator. Daisy matches functionality while adding AI that can handle the full booking conversation.',
      posAndPayments:
        'GlossGenius charges 2.6% per transaction across all plans. Daisy offers flat pricing with transparent payment processing. For high-volume businesses, GlossGenius\'s transaction fees add up significantly.',
      clientManagement:
        'GlossGenius offers clean client profiles. Daisy adds AI-powered intelligence that helps you understand and retain clients proactively.',
      staffManagement:
        'This is a major gap: GlossGenius only supports team management in Platinum ($148/mo). It\'s designed for solopreneurs. Daisy includes full staff management in its base platform — scheduling, permissions, performance tracking.',
      marketingAndCrm:
        'GlossGenius has basic marketing in Standard, advanced in Gold. Daisy provides AI-powered marketing automation with cashback rewards that actively drive customer acquisition and retention.',
      inventoryManagement:
        'GlossGenius has basic product management. Daisy offers comparable features. Neither specializes in deep inventory.',
      reportingAndAnalytics:
        'GlossGenius offers an AI Growth Analyst in its Platinum tier ($148/mo). Daisy includes AI-powered analytics in its base platform — no premium tier required for smart insights.',
      marketplaceAndDiscovery:
        'GlossGenius has no consumer marketplace — it\'s a passive booking page. Daisy provides active customer acquisition through marketplace, cashback rewards, and AI-powered marketing.',
      aiCapabilities:
        'GlossGenius\'s only AI feature is the Growth Analyst (Platinum, $148/mo). No AI receptionist, no chatbot, no smart scheduling. Daisy\'s complete AI ecosystem — receptionist, chatbot, scheduling, marketing, analytics — is included in the base platform.',
    },
    whoShouldChooseDaisy: [
      'You have or plan to have a team (staff management included)',
      'You want AI receptionist, not just AI analytics',
      'You need Arabic support or operate in the GCC',
      'You want a marketplace and cashback to acquire customers',
      'You don\'t want to pay $148/mo for basic AI features',
      'You\'re focused on business growth, not just solo practice management',
    ],
    whoShouldChooseCompetitor: [
      'You\'re a solo beauty professional in the US',
      'Design and aesthetics are your top priority',
      'You want the simplest possible tool at $24/mo',
      'You don\'t need team management or AI receptionist',
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
    heroSubtitle: 'A modern AI-native platform versus the legacy giant of wellness software — is it time to upgrade?',
    tldr: 'Mindbody is the established enterprise player with 2M+ classes/month listed, but it\'s expensive ($139-699/mo), has a dated interface, and charges marketplace commissions. Daisy offers modern AI capabilities, Arabic support, and growth-focused tools at a more accessible price.',
    verdict: 'Mindbody suits large fitness studios and established enterprise wellness brands that need its extensive ecosystem. For beauty businesses wanting modern AI, GCC support, or transparent pricing, Daisy is the better choice.',
    featureCommentary: {
      onlineBooking: 'Both offer robust booking. Mindbody has a massive consumer marketplace (2M+ monthly classes). Daisy adds AI self-service that handles the full booking conversation.',
      posAndPayments: 'Mindbody has comprehensive POS. Both handle payments well, but Mindbody charges marketplace commissions on top of subscription fees.',
      clientManagement: 'Mindbody has extensive client profiles from years of data. Daisy adds AI-driven insights and proactive engagement.',
      staffManagement: 'Both handle staff well. Mindbody is more established for large enterprise teams.',
      marketingAndCrm: 'Mindbody offers marketing add-ons. Daisy provides AI-powered automation with cashback rewards as a core feature.',
      inventoryManagement: 'Comparable inventory tracking on both platforms.',
      reportingAndAnalytics: 'Mindbody has extensive reporting. Daisy adds AI-powered recommendations.',
      marketplaceAndDiscovery: 'Mindbody\'s massive marketplace is its strongest asset. Daisy counters with 360° acquisition: marketplace + cashback + AI marketing.',
      aiCapabilities: 'Mindbody has basic automation. Daisy provides full AI ecosystem: receptionist, chatbot, smart scheduling, marketing automation.',
    },
    whoShouldChooseDaisy: [
      'You want modern AI capabilities (receptionist, chatbot)',
      'You need Arabic support for GCC market',
      'You want transparent pricing without marketplace commissions',
      'You want cashback-driven customer acquisition',
      'You prefer modern UX over legacy interfaces',
    ],
    whoShouldChooseCompetitor: [
      'You\'re a large fitness or wellness studio with 10+ staff',
      'You need Mindbody\'s massive consumer marketplace',
      'You require enterprise-grade multi-location management',
      'You\'re deeply integrated with Mindbody\'s ecosystem',
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
    tldr: 'Toast is a restaurant technology company expanding into services with its POS infrastructure. Daisy is purpose-built for beauty and wellness with AI, marketplace, and Arabic support. Toast has great POS hardware; Daisy has industry-specific intelligence.',
    verdict: 'Toast\'s strength is its POS hardware and payment infrastructure. But it\'s a restaurant company adapting to beauty — it lacks AI receptionist, beauty-specific workflows, marketplace, and GCC support. Choose Daisy for a purpose-built beauty growth platform.',
    featureCommentary: {
      onlineBooking: 'Daisy offers purpose-built beauty booking with AI. Toast has basic scheduling adapted from its restaurant model.',
      posAndPayments: 'Toast\'s POS hardware is excellent — best-in-class from the restaurant industry. Daisy offers strong digital payments but Toast wins on physical POS.',
      clientManagement: 'Daisy provides beauty-specific client profiles with AI insights. Toast offers basic customer management.',
      staffManagement: 'Both handle scheduling. Daisy includes beauty-specific features like service assignment and skill-based routing.',
      marketingAndCrm: 'Daisy provides AI-powered marketing with cashback. Toast has basic email marketing from its restaurant stack.',
      inventoryManagement: 'Toast has strong inventory from restaurant operations. Daisy covers beauty-specific inventory needs.',
      reportingAndAnalytics: 'Both offer reporting. Daisy adds AI-powered beauty-specific insights and recommendations.',
      marketplaceAndDiscovery: 'Daisy has a consumer beauty marketplace. Toast has no beauty marketplace.',
      aiCapabilities: 'Daisy provides full beauty AI: receptionist, chatbot, smart scheduling, marketing. Toast has basic automation only.',
    },
    whoShouldChooseDaisy: [
      'You operate a beauty or wellness business (not a restaurant)',
      'You want AI receptionist and chatbot',
      'You need a consumer beauty marketplace',
      'You want Arabic support and GCC compliance',
      'You want beauty-specific workflows and features',
    ],
    whoShouldChooseCompetitor: [
      'You need restaurant-grade POS hardware',
      'You operate a hybrid restaurant/beauty concept',
      'You\'re already in the Toast ecosystem',
      'Physical POS terminals are your top priority',
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
    heroSubtitle: 'Two premium platforms — but only one includes AI receptionist and customer acquisition at base pricing.',
    tldr: 'Boulevard is beautifully designed with Precision Scheduling AI, but costs $158-410/mo with AI locked behind $295+. Daisy includes full AI ecosystem at base pricing with Arabic support and marketplace.',
    verdict: 'Boulevard is excellent for premium US salons that prioritize design and can afford $295+/mo for AI features. Daisy offers more AI capability at more accessible pricing, with GCC support Boulevard lacks.',
    featureCommentary: {
      onlineBooking: 'Both offer excellent booking. Boulevard\'s Precision Scheduling AI optimizes slot allocation — a genuinely innovative feature.',
      posAndPayments: 'Boulevard has strong POS at $158+/mo. Daisy offers comparable POS with flat pricing and no per-tier restrictions.',
      clientManagement: 'Both excel at client management. Boulevard has strong client experience features for luxury salons.',
      staffManagement: 'Both handle staff well. Boulevard includes franchise management in its Prestige tier.',
      marketingAndCrm: 'Boulevard offers marketing in Premier ($295/mo). Daisy includes AI marketing and cashback at base pricing.',
      inventoryManagement: 'Both offer good inventory tracking.',
      reportingAndAnalytics: 'Both provide strong reporting. Boulevard\'s Duo AI assistant offers insights in Premier tier.',
      marketplaceAndDiscovery: 'Boulevard has no consumer marketplace. Daisy provides marketplace + cashback acquisition.',
      aiCapabilities: 'Boulevard has Precision Scheduling + Duo assistant in Premier ($295/mo). Daisy includes receptionist + chatbot + scheduling + marketing at base pricing.',
    },
    whoShouldChooseDaisy: [
      'You want AI receptionist and chatbot at base pricing',
      'You need Arabic support for GCC markets',
      'You want a consumer marketplace for customer acquisition',
      'You prefer flat pricing over $158-410/mo tiers',
      'You want cashback rewards for customer retention',
    ],
    whoShouldChooseCompetitor: [
      'You operate a premium US luxury salon or spa',
      'You need franchise management features',
      'Design aesthetics are your absolute top priority',
      'You can budget $295+/mo for AI features',
    ],
  },
  {
    slug: 'daisy-vs-glamera',
    competitorSlug: 'glamera',
    metaTitle: 'Daisy vs Glamera: GCC Beauty Platforms Compared',
    metaDescription:
      'Compare Daisy and Glamera for Arabic beauty businesses. AI features, GCC coverage, and business management — which Arabic platform delivers more?',
    keywords: ['daisy vs glamera', 'glamera alternative', 'arabic salon software', 'gcc beauty platform'],
    heroTitle: 'Daisy vs Glamera',
    heroSubtitle: 'Both speak Arabic. Only one has AI, full business management, and 6-country GCC coverage.',
    tldr: 'Glamera is a Saudi-focused marketplace with basic features and a free tier. Daisy is a complete AI-powered platform with all 6 GCC countries, full business management, and growth tools. Both support Arabic natively.',
    verdict: 'Glamera is fine for Saudi businesses wanting free marketplace listing. For anything beyond basic booking — AI, POS, marketing, multi-country GCC coverage — Daisy is the clear winner.',
    featureCommentary: {
      onlineBooking: 'Glamera offers basic booking with marketplace. Daisy adds AI-powered self-service booking.',
      posAndPayments: 'Glamera has minimal POS. Daisy provides comprehensive point-of-sale and payment processing.',
      clientManagement: 'Glamera offers basic client info. Daisy provides AI-driven client intelligence.',
      staffManagement: 'Glamera has basic scheduling. Daisy includes full staff management with AI optimization.',
      marketingAndCrm: 'Glamera has no marketing tools. Daisy provides AI-powered marketing with cashback rewards.',
      inventoryManagement: 'Glamera has no inventory management. Daisy covers basic inventory needs.',
      reportingAndAnalytics: 'Glamera offers basic reports. Daisy adds AI-powered actionable insights.',
      marketplaceAndDiscovery: 'Glamera has a growing Saudi marketplace (100K+ users). Daisy offers marketplace + cashback + AI marketing across 6 GCC countries.',
      aiCapabilities: 'Glamera has zero AI. Daisy provides full AI ecosystem: receptionist, chatbot, scheduling, marketing, analytics.',
    },
    whoShouldChooseDaisy: [
      'You want AI receptionist for 24/7 service',
      'You need coverage beyond Saudi Arabia',
      'You want complete business management (POS, inventory, reporting)',
      'You want to build your own brand, not rely on Glamera\'s marketplace',
      'You need marketing automation and cashback rewards',
    ],
    whoShouldChooseCompetitor: [
      'You only operate in Saudi Arabia',
      'You want a free marketplace listing with no commitment',
      'Basic booking is all you need right now',
    ],
  },
  {
    slug: 'daisy-vs-dingg',
    competitorSlug: 'dingg',
    metaTitle: 'Daisy vs DINGG: AI Salon Platforms Compared',
    metaDescription:
      'Compare Daisy and DINGG for AI-powered salon management. Both offer AI features — but which AI ecosystem is more complete for GCC businesses?',
    keywords: ['daisy vs dingg', 'dingg alternative', 'ai salon software', 'gcc salon management'],
    heroTitle: 'Daisy vs DINGG',
    heroSubtitle: 'Both offer AI and Arabic support — but Daisy covers all 6 GCC countries with a complete growth ecosystem.',
    tldr: 'DINGG offers a competitive AI suite at $49-79/mo with UAE expansion. Daisy provides broader GCC coverage (6 countries vs 1), consumer marketplace, cashback, and white-labeling that DINGG lacks.',
    verdict: 'DINGG is a credible AI competitor at an affordable price point. But it\'s early in GCC expansion (UAE only), has no marketplace or cashback, and limited funding. Daisy offers more comprehensive AI, broader GCC presence, and stronger growth tools.',
    featureCommentary: {
      onlineBooking: 'Both offer good booking. DINGG has basic booking; Daisy adds AI-powered full-flow self-service.',
      posAndPayments: 'Both offer POS. Daisy has more comprehensive payment options across all GCC countries.',
      clientManagement: 'Both handle client profiles. Daisy adds AI intelligence for retention and personalization.',
      staffManagement: 'Both handle scheduling. Comparable features for team management.',
      marketingAndCrm: 'DINGG has AI marketing in its Professional tier ($79/mo). Daisy includes AI marketing with cashback rewards at base pricing.',
      inventoryManagement: 'DINGG has basic inventory. Daisy offers comparable tracking.',
      reportingAndAnalytics: 'DINGG offers standard reporting. Daisy adds AI-powered recommendations and forecasting.',
      marketplaceAndDiscovery: 'DINGG has no consumer marketplace. Daisy provides marketplace + cashback for customer acquisition.',
      aiCapabilities: 'DINGG has AI receptionist, chatbot, and scheduling in Professional tier ($79/mo). Daisy\'s AI handles payments in the booking flow, offers white-labeled experiences, and works across all 6 GCC countries.',
    },
    whoShouldChooseDaisy: [
      'You need GCC coverage beyond just UAE',
      'You want a consumer marketplace for customer acquisition',
      'You want cashback rewards for retention',
      'You want white-label brand control',
      'You need AI that handles full booking and payment flow',
    ],
    whoShouldChooseCompetitor: [
      'You\'re in UAE only and budget is your top priority',
      'You want AI features at the lowest possible price ($49-79/mo)',
      'Basic AI without marketplace is sufficient',
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
    heroSubtitle: 'A complete platform with cashback built-in versus a $700/mo marketing-only tool.',
    tldr: 'RepeatMD charges $700/mo for marketing and loyalty tools — you still need separate software for booking, POS, and operations. Daisy includes everything (AI + booking + POS + marketing + cashback) in one platform.',
    verdict: 'RepeatMD is an expensive marketing add-on ($700/mo) that validates the cashback concept but requires separate operations software. Daisy is more cost-effective with cashback + complete platform in one.',
    featureCommentary: {
      onlineBooking: 'RepeatMD has minimal booking — it\'s not a booking platform. Daisy provides full AI-powered booking.',
      posAndPayments: 'RepeatMD has basic payments. Daisy offers complete POS and payment processing.',
      clientManagement: 'RepeatMD has good client profiles for retention. Daisy matches this with AI-driven intelligence.',
      staffManagement: 'RepeatMD has minimal staff features. Daisy provides complete staff management.',
      marketingAndCrm: 'RepeatMD excels here with AI agents Adonis and Aria, plus Beauty Bank cashback. Daisy provides comparable AI marketing with cashback, plus everything else.',
      inventoryManagement: 'RepeatMD has no inventory. Daisy covers basic inventory needs.',
      reportingAndAnalytics: 'RepeatMD has good retention analytics. Daisy adds broader business analytics.',
      marketplaceAndDiscovery: 'Neither has a consumer marketplace comparable to Fresha/Booksy, but Daisy has marketplace capabilities RepeatMD lacks.',
      aiCapabilities: 'RepeatMD has chat AI agents and marketing AI. Daisy adds voice AI receptionist, smart scheduling, and handles the full customer journey.',
    },
    whoShouldChooseDaisy: [
      'You want a complete platform, not just marketing tools',
      'You can\'t justify $700/mo for marketing alone',
      'You need booking, POS, and operations included',
      'You want a voice AI receptionist',
      'You need Arabic support and GCC compliance',
    ],
    whoShouldChooseCompetitor: [
      'You\'re a high-revenue US med spa ($50K+/mo revenue)',
      'You already have operations software and need marketing only',
      'You want RepeatMD\'s specific Adonis/Aria AI agents',
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
    heroSubtitle: 'AI-powered global platform versus France\'s commission-free marketplace — different markets, different approaches.',
    tldr: 'Planity dominates France with 10M+ monthly bookings and commission-free pricing. Daisy serves GCC and global markets with AI, Arabic support, and growth tools Planity doesn\'t offer.',
    verdict: 'Planity is the clear leader in France. For any market outside France — especially GCC — Daisy is the obvious choice with AI, Arabic, and comprehensive business management.',
    featureCommentary: {
      onlineBooking: 'Planity excels in French market booking (10M+ monthly). Daisy provides AI-powered booking for GCC markets.',
      posAndPayments: 'Planity has decent POS for French market. Daisy offers comprehensive GCC-compliant payments.',
      clientManagement: 'Both handle client profiles. Daisy adds AI intelligence.',
      staffManagement: 'Both handle scheduling. Comparable features.',
      marketingAndCrm: 'Planity has basic marketing. Daisy provides AI-powered marketing with cashback.',
      inventoryManagement: 'Planity has basic inventory. Daisy is comparable.',
      reportingAndAnalytics: 'Both offer reporting. Daisy adds AI-powered insights.',
      marketplaceAndDiscovery: 'Planity has France\'s largest beauty marketplace. Daisy has marketplace for GCC with cashback.',
      aiCapabilities: 'Planity has zero AI. Daisy provides complete AI ecosystem.',
    },
    whoShouldChooseDaisy: [
      'You operate outside France',
      'You want AI receptionist and chatbot',
      'You need Arabic support',
      'You want cashback rewards for customer retention',
      'You need GCC compliance and local payments',
    ],
    whoShouldChooseCompetitor: [
      'You operate exclusively in France',
      'You want France\'s largest beauty marketplace',
      'Commission-free marketplace pricing is your priority',
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
    tldr: 'Mangomint has the highest Capterra rating (4.9/5) and beautiful design at $165-375/mo. But it\'s US-only with no AI, no marketplace, and no customer acquisition tools. Daisy offers AI + growth tools at more accessible pricing.',
    verdict: 'Mangomint is exceptional for US salons that prioritize clean operations. Daisy is better for businesses that want AI-driven growth plus operations.',
    featureCommentary: {
      onlineBooking: 'Both offer excellent booking. Mangomint is praised for clean, intuitive design.',
      posAndPayments: 'Both handle POS and payments. Mangomint has clean hardware integration.',
      clientManagement: 'Both handle client profiles well. Daisy adds AI insights.',
      staffManagement: 'Mangomint excels at staff management — it\'s rated best-in-class.',
      marketingAndCrm: 'Mangomint has basic marketing. Daisy includes AI-powered marketing with cashback.',
      inventoryManagement: 'Both cover basic inventory needs.',
      reportingAndAnalytics: 'Both offer solid reporting. Daisy adds AI recommendations.',
      marketplaceAndDiscovery: 'Mangomint has zero marketplace. Daisy provides marketplace + cashback.',
      aiCapabilities: 'Mangomint has workflow automations but no true AI. Daisy has full AI ecosystem.',
    },
    whoShouldChooseDaisy: ['You want AI capabilities', 'You need Arabic/GCC support', 'You want customer acquisition tools', 'You want more accessible pricing'],
    whoShouldChooseCompetitor: ['You want the highest-rated US salon software', 'Clean design is paramount', 'You only need operations, not growth tools'],
  },
  {
    slug: 'daisy-vs-square-appointments',
    competitorSlug: 'square-appointments',
    metaTitle: 'Daisy vs Square Appointments: Beauty Platform vs Generic Scheduling',
    metaDescription: 'Compare Daisy (purpose-built beauty AI) with Square Appointments (generic scheduling). Beauty-specific features vs generic scheduling.',
    keywords: ['daisy vs square appointments', 'square appointments alternative', 'beauty scheduling software'],
    heroTitle: 'Daisy vs Square Appointments',
    heroSubtitle: 'Purpose-built beauty AI versus a generic scheduling add-on to a payment processor.',
    tldr: 'Square Appointments is a free generic scheduling tool from Square\'s POS ecosystem. Daisy is purpose-built for beauty with AI, marketplace, and Arabic support. Square is a good starting point; Daisy is where growing businesses land.',
    verdict: 'Square Appointments is fine for getting started with free scheduling. But it\'s not beauty-specific — no AI, no marketplace, no Arabic. Growing salons will outgrow Square quickly.',
    featureCommentary: {
      onlineBooking: 'Square has good generic booking. Daisy offers beauty-specific AI-powered booking.',
      posAndPayments: 'Square\'s POS is best-in-class from its payment heritage. Daisy matches for beauty-specific needs.',
      clientManagement: 'Square has basic contacts. Daisy offers beauty-specific client profiles with AI.',
      staffManagement: 'Square has basic multi-staff in paid plans. Daisy includes comprehensive beauty-specific staff management.',
      marketingAndCrm: 'Square has basic email marketing. Daisy includes AI-powered campaigns with cashback.',
      inventoryManagement: 'Square has decent product management from its retail heritage.',
      reportingAndAnalytics: 'Square offers standard reports. Daisy adds AI-powered beauty insights.',
      marketplaceAndDiscovery: 'Square has no beauty marketplace. Daisy provides marketplace + cashback.',
      aiCapabilities: 'Square has no AI. Daisy provides full AI ecosystem.',
    },
    whoShouldChooseDaisy: ['You want beauty-specific features', 'You need AI receptionist', 'You want marketplace for customer discovery', 'You need Arabic/GCC support'],
    whoShouldChooseCompetitor: ['You need free scheduling to start', 'You\'re already in the Square POS ecosystem', 'You need retail-grade POS hardware'],
  },
  {
    slug: 'daisy-vs-phorest',
    competitorSlug: 'phorest',
    metaTitle: 'Daisy vs Phorest: AI Growth vs CRM Loyalty',
    metaDescription: 'Compare Daisy and Phorest for salon management. AI-powered growth platform versus UK\'s loyalty-focused salon CRM.',
    keywords: ['daisy vs phorest', 'phorest alternative', 'salon crm comparison'],
    heroTitle: 'Daisy vs Phorest',
    heroSubtitle: 'Modern AI-powered growth versus established loyalty-focused CRM — which approach wins?',
    tldr: 'Phorest has excellent CRM and loyalty tools, established since 2003 in UK/Ireland. Daisy adds AI receptionist, marketplace, cashback, and Arabic support that Phorest lacks.',
    verdict: 'Phorest excels at client retention in the UK market. Daisy offers both acquisition and retention with AI — better for businesses wanting to grow, not just retain.',
    featureCommentary: {
      onlineBooking: 'Both offer solid booking. Daisy adds AI self-service.',
      posAndPayments: 'Both handle POS and payments well.',
      clientManagement: 'Phorest excels at CRM — it\'s their core strength. Daisy matches with AI intelligence.',
      staffManagement: 'Both handle staff scheduling.',
      marketingAndCrm: 'Phorest is strong at loyalty and marketing automation. Daisy adds AI-powered campaigns with cashback.',
      inventoryManagement: 'Both cover basic inventory.',
      reportingAndAnalytics: 'Both offer solid reporting.',
      marketplaceAndDiscovery: 'Phorest has basic discovery. Daisy provides full marketplace + cashback.',
      aiCapabilities: 'Phorest has basic marketing AI. Daisy provides full AI ecosystem.',
    },
    whoShouldChooseDaisy: ['You want full AI ecosystem', 'You need Arabic/GCC support', 'You want marketplace for acquisition', 'You want cashback rewards'],
    whoShouldChooseCompetitor: ['You\'re established in the UK/Ireland market', 'Loyalty program depth is your top priority'],
  },
  {
    slug: 'daisy-vs-acuity-scheduling',
    competitorSlug: 'acuity-scheduling',
    metaTitle: 'Daisy vs Acuity Scheduling: Beauty AI vs Generic Booking',
    metaDescription: 'Compare Daisy (beauty AI platform) and Acuity Scheduling (generic booking). Why beauty businesses need more than a scheduling tool.',
    keywords: ['daisy vs acuity scheduling', 'acuity alternative for salons', 'salon scheduling comparison'],
    heroTitle: 'Daisy vs Acuity Scheduling',
    heroSubtitle: 'A generic scheduling tool at $16/mo versus a complete beauty business growth platform.',
    tldr: 'Acuity is excellent generic scheduling at $16-49/mo. But salons need POS, CRM, AI, marketplace, and Arabic support — features Acuity doesn\'t offer.',
    verdict: 'Acuity is great for simple appointment scheduling. For beauty businesses wanting growth — AI, marketplace, cashback, Arabic — Daisy is purpose-built for the job.',
    featureCommentary: {
      onlineBooking: 'Acuity excels at scheduling — it\'s their entire focus. Daisy matches plus adds AI.',
      posAndPayments: 'Acuity has basic payment collection. Daisy offers full POS.',
      clientManagement: 'Acuity has basic contacts. Daisy provides beauty-specific CRM with AI.',
      staffManagement: 'Acuity supports multiple calendars. Daisy includes full staff management.',
      marketingAndCrm: 'Acuity has no marketing tools. Daisy includes AI-powered campaigns with cashback.',
      inventoryManagement: 'Acuity has no inventory. Daisy covers beauty inventory needs.',
      reportingAndAnalytics: 'Acuity has minimal reporting. Daisy provides AI-powered analytics.',
      marketplaceAndDiscovery: 'Acuity has no marketplace. Daisy provides marketplace + cashback.',
      aiCapabilities: 'Acuity has no AI. Daisy provides full AI ecosystem.',
    },
    whoShouldChooseDaisy: ['You want more than just scheduling', 'You need POS and business management', 'You want AI and marketplace', 'You need Arabic/GCC support'],
    whoShouldChooseCompetitor: ['You only need basic appointment scheduling', 'Budget is under $20/mo', 'You\'re using Squarespace and want integration'],
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
    metaDescription: 'Looking for a Fresha alternative? Daisy offers AI receptionist, transparent pricing, Arabic support, and cashback — without Fresha\'s hidden fees.',
    keywords: ['fresha alternative', 'fresha replacement', 'better than fresha', 'salon software like fresha'],
    heroTitle: 'Looking for a Fresha Alternative?',
    heroSubtitle: 'Subscription fees, transaction fees, and marketplace commissions — the costs keep adding up.',
    painPoints: [
      'Transaction fees (2.19% + $0.20) eating into every payment',
      '20% commission on marketplace bookings — new clients cost you money',
      'No Arabic language support for GCC businesses',
      'No AI receptionist — still manually handling calls and messages',
      'Fresha-branded booking pages — no control over your brand',
      'Recent feature removals and pricing changes breaking trust',
    ],
    switchingReasons: [
      'AI receptionist handles bookings, payments, and customer service 24/7',
      'Transparent flat pricing — no hidden transaction fees or commissions',
      'Native Arabic and English support for GCC market',
      'Cashback rewards that drive customer loyalty and repeat bookings',
      'Full brand control with white-label booking pages',
      'Easy migration with data transfer support',
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
    heroSubtitle: 'Great app, but per-provider pricing and limited AI are holding your business back.',
    painPoints: [
      'Per-provider pricing ($29.99-49.99 each) gets expensive as your team grows',
      'Digital Doorman only routes calls — can\'t process payments or answer questions',
      'No Arabic language support — can\'t serve GCC clients',
      'No cashback or loyalty program to retain customers',
      'Booksy-branded experience — limited control over your brand',
      'No white-labeling option for professional branding',
    ],
    switchingReasons: [
      'Flat pricing regardless of team size — save as you grow',
      'Full AI ecosystem: receptionist, chatbot, smart scheduling, marketing',
      'Native Arabic/English for GCC market expansion',
      'Cashback rewards drive customer retention automatically',
      'White-label everything — your brand, your experience',
      'No contracts, easy migration support',
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
    heroSubtitle: 'Vagaro manages your business well — but it doesn\'t help you grow it.',
    painPoints: [
      '$10/month per additional staff calendar adds up fast',
      'No AI receptionist — still handling calls manually',
      'No Arabic support for GCC expansion',
      'Operations-focused with no proactive customer acquisition tools',
      'Marketing is add-on based, not built into the core platform',
      'No cashback or loyalty rewards to drive repeat business',
    ],
    switchingReasons: [
      'AI receptionist handles your phones, bookings, and payments 24/7',
      'Flat pricing includes all staff — no per-calendar surcharges',
      'Cashback rewards turn one-time visitors into loyal regulars',
      'AI-powered marketing runs on autopilot',
      'Arabic/English support opens GCC markets',
      '30-day overlap period — switch without losing a single booking',
    ],
    topAlternatives: ['fresha', 'booksy', 'mindbody', 'boulevard'],
  },
  {
    slug: 'glossgenius',
    competitorSlug: 'glossgenius',
    metaTitle: 'Best GlossGenius Alternative for Growing Teams (2026)',
    metaDescription: 'Outgrowing GlossGenius? Daisy offers team management, AI receptionist, and marketplace — without paying $148/mo for basic AI.',
    keywords: ['glossgenius alternative', 'glossgenius replacement', 'better than glossgenius'],
    heroTitle: 'Looking for a GlossGenius Alternative?',
    heroSubtitle: 'Beautiful design and great for solo pros — but what happens when you want to grow?',
    painPoints: [
      'Team management locked behind $148/mo Platinum tier',
      'AI limited to Growth Analyst analytics — no receptionist or chatbot',
      'No consumer marketplace for customer discovery',
      'US-only — no Arabic or international support',
      '2.6% transaction fees on every payment',
      'Designed for solopreneurs, not growing businesses',
    ],
    switchingReasons: [
      'Team management included from day one — hire without upgrading',
      'Full AI ecosystem: receptionist, chatbot, scheduling, marketing',
      'Consumer marketplace with cashback for customer acquisition',
      'Arabic/English support for GCC expansion',
      'AI included at base pricing — no $148/mo premium',
      'Built for growth: solo today, team tomorrow, empire eventually',
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
    heroSubtitle: 'An industry giant — but the dated interface, high prices, and marketplace commissions are pushing businesses away.',
    painPoints: [
      'Expensive plans ($139-699/mo) with marketplace commissions on top',
      'Legacy interface that hasn\'t kept up with modern UX',
      'No AI receptionist or chatbot',
      'No Arabic support for GCC markets',
      'Complex contracts and upselling',
      'Primarily fitness-focused — beauty is secondary',
    ],
    switchingReasons: [
      'Modern AI-powered platform with clean interface',
      'AI receptionist handles customer service 24/7',
      'Transparent pricing without marketplace commissions',
      'Arabic/English support for GCC markets',
      'Purpose-built for beauty and wellness',
      'Cashback rewards replace commission-based marketplace',
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
    heroSubtitle: 'Premium design and smart scheduling — but $158-410/mo and no marketplace is hard to justify.',
    painPoints: [
      'Premium pricing: $158/mo minimum, $295+/mo for AI features',
      'No consumer marketplace for customer acquisition',
      'US-only with no Arabic or GCC support',
      'AI locked behind Premier tier ($295/mo)',
      'No cashback or loyalty rewards built-in',
    ],
    switchingReasons: [
      'AI receptionist included at base pricing',
      'Consumer marketplace with cashback for acquisition',
      'Arabic/English support for GCC expansion',
      'More accessible pricing with full AI included',
      'White-label brand control',
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
    heroSubtitle: 'Beautiful operations tool — but no AI, no marketplace, and no customer acquisition.',
    painPoints: [
      'Premium pricing ($165-375/mo) without AI features',
      'No consumer marketplace for customer discovery',
      'US-only — no Arabic or GCC support',
      'Operations-only: no growth or acquisition tools',
    ],
    switchingReasons: [
      'AI receptionist and chatbot included',
      'Consumer marketplace with cashback',
      'Arabic/English support',
      'Growth tools alongside clean operations',
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
    heroSubtitle: 'Great POS, but generic scheduling doesn\'t cut it for serious beauty businesses.',
    painPoints: [
      'Generic scheduling — not built for beauty businesses',
      'No AI features at all',
      'No beauty marketplace for customer discovery',
      'No Arabic or GCC support',
    ],
    switchingReasons: [
      'Purpose-built for beauty and wellness',
      'AI receptionist handles bookings and customer service',
      'Consumer marketplace with cashback',
      'Arabic/English support for GCC markets',
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
    heroSubtitle: 'Excellent CRM and loyalty — but the world has moved to AI, and Phorest hasn\'t.',
    painPoints: [
      'UK/Ireland focused — no GCC or Arabic support',
      'No AI receptionist or chatbot',
      'No consumer marketplace',
      'Limited international reach',
    ],
    switchingReasons: [
      'Full AI ecosystem for modern salon management',
      'Consumer marketplace with cashback',
      'Arabic/English support for GCC',
      'AI-powered marketing that goes beyond email',
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
    heroSubtitle: 'Great for appointments, but your beauty business needs POS, CRM, AI, and a marketplace too.',
    painPoints: [
      'Scheduling-only — no POS, inventory, or CRM',
      'Not built for beauty businesses',
      'No AI features',
      'No marketplace for client discovery',
    ],
    switchingReasons: [
      'Complete beauty platform: booking + POS + CRM + AI',
      'AI receptionist handles the full customer journey',
      'Consumer marketplace with cashback rewards',
      'Arabic/English support for GCC markets',
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
    heroSubtitle: 'Clean interface but per-staff pricing and zero AI are holding back growing teams.',
    painPoints: [
      'Per-staff pricing scales with every hire',
      'No AI features at all',
      'NZ/AU/UK focused — no GCC or Arabic',
      'No marketplace for customer acquisition',
    ],
    switchingReasons: [
      'Flat pricing regardless of team size',
      'Full AI ecosystem included',
      'Arabic/English for GCC markets',
      'Consumer marketplace with cashback',
    ],
    topAlternatives: ['vagaro', 'fresha', 'booksy'],
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
    heroSubtitle: 'Fresha\'s subscription fees plus hidden transaction costs are getting expensive. Here are the best alternatives for growing beauty businesses.',
    intro: 'Fresha is the world\'s largest beauty marketplace, but monthly subscriptions stacked on top of transaction fees, 20% marketplace commissions, and no AI features are pushing businesses to look elsewhere. We\'ve compared the top alternatives based on features, pricing, AI capabilities, and international support.',
    alternatives: ['booksy', 'vagaro', 'glossgenius', 'boulevard', 'mangomint', 'square-appointments'],
    verdict: 'For beauty businesses wanting AI-powered growth with transparent pricing and Arabic support, Daisy is the top choice. For budget-conscious US solopreneurs, GlossGenius or Booksy are solid options.',
  },
  {
    slug: 'best-booksy-alternatives',
    competitorSlug: 'booksy',
    metaTitle: '7 Best Booksy Alternatives for Beauty Pros (2026)',
    metaDescription: 'Top Booksy alternatives compared. Find booking platforms with better AI, flat pricing, and international support for your beauty business.',
    keywords: ['best booksy alternatives', 'booksy alternatives', 'booksy competitors'],
    heroTitle: '7 Best Booksy Alternatives in 2026',
    heroSubtitle: 'Per-provider pricing and basic AI not cutting it? Here are better options for growing teams.',
    intro: 'Booksy is a popular mobile-first booking app, but per-provider pricing gets expensive for teams, Digital Doorman AI is limited to call routing, and there\'s no GCC support. We\'ve ranked the best alternatives for different business needs.',
    alternatives: ['fresha', 'vagaro', 'glossgenius', 'boulevard', 'mangomint', 'square-appointments'],
    verdict: 'Daisy leads with comprehensive AI and flat pricing. Vagaro is the best feature-rich alternative for US businesses. GlossGenius wins for solo beauty professionals on a budget.',
  },
  {
    slug: 'best-vagaro-alternatives',
    competitorSlug: 'vagaro',
    metaTitle: '7 Best Vagaro Alternatives for Salons (2026)',
    metaDescription: 'Top Vagaro alternatives compared. AI-powered platforms, better pricing models, and international support for modern salons.',
    keywords: ['best vagaro alternatives', 'vagaro alternatives', 'vagaro competitors'],
    heroTitle: '7 Best Vagaro Alternatives in 2026',
    heroSubtitle: 'Vagaro manages well but doesn\'t grow your business. These alternatives add AI-powered acquisition.',
    intro: 'Vagaro is a comprehensive US salon platform, but it lacks AI capabilities, charges per-staff calendar fees, and has no international support. If you need AI, Arabic, or customer acquisition tools, here are the best alternatives.',
    alternatives: ['fresha', 'booksy', 'glossgenius', 'boulevard', 'mindbody', 'mangomint'],
    verdict: 'Daisy is the top pick for businesses wanting AI-driven growth and GCC support. Boulevard suits premium US salons. Booksy is better for mobile-first solopreneurs.',
  },
  {
    slug: 'best-glossgenius-alternatives',
    competitorSlug: 'glossgenius',
    metaTitle: '7 Best GlossGenius Alternatives for Growing Teams',
    metaDescription: 'Outgrowing GlossGenius? Compare platforms with team management, AI, and marketplace features included.',
    keywords: ['best glossgenius alternatives', 'glossgenius alternatives', 'glossgenius competitors'],
    heroTitle: '7 Best GlossGenius Alternatives in 2026',
    heroSubtitle: 'Beautiful for solos, but team management at $148/mo and no marketplace limit growth.',
    intro: 'GlossGenius is loved for its design and simplicity, but team features require Platinum ($148/mo), AI is limited to analytics, and there\'s no marketplace. For growing businesses, here are better options.',
    alternatives: ['fresha', 'booksy', 'vagaro', 'boulevard', 'mangomint', 'square-appointments'],
    verdict: 'Daisy is best for teams wanting AI and marketplace at accessible pricing. Vagaro offers the most features per dollar for US businesses. Boulevard suits premium brands.',
  },
  // P3
  {
    slug: 'best-mindbody-alternatives',
    competitorSlug: 'mindbody',
    metaTitle: '7 Best Mindbody Alternatives: Modern & Affordable',
    metaDescription: 'Top Mindbody alternatives compared. Modern platforms with better UI, AI features, and transparent pricing.',
    keywords: ['best mindbody alternatives', 'mindbody alternatives', 'mindbody competitors'],
    heroTitle: '7 Best Mindbody Alternatives in 2026',
    heroSubtitle: 'Legacy pricing and dated UX pushing you to look elsewhere? These modern platforms deliver more.',
    intro: 'Mindbody dominated wellness software for years, but high prices ($139-699/mo), marketplace commissions, and a dated interface are driving businesses to modern alternatives with AI and transparent pricing.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'boulevard', 'glossgenius', 'mangomint'],
    verdict: 'Daisy offers the most modern experience with AI and Arabic support. Vagaro is the best feature-for-feature Mindbody replacement at a lower price.',
  },
  {
    slug: 'best-boulevard-alternatives',
    competitorSlug: 'boulevard',
    metaTitle: '5 Best Boulevard Alternatives: More AI, Better Value',
    metaDescription: 'Looking beyond Boulevard? Find platforms with AI, marketplace, and Arabic support at better pricing.',
    keywords: ['best boulevard alternatives', 'boulevard alternatives'],
    heroTitle: '5 Best Boulevard Alternatives in 2026',
    heroSubtitle: 'Premium design at $158+/mo with AI locked behind $295. These alternatives include more for less.',
    intro: 'Boulevard is a beautifully designed platform, but premium pricing and AI locked behind the Premier tier push businesses to seek better value. Here are the top alternatives.',
    alternatives: ['vagaro', 'mangomint', 'glossgenius', 'booksy'],
    verdict: 'Daisy offers full AI and marketplace at accessible pricing. Mangomint matches Boulevard\'s clean design. Vagaro is the best value for comprehensive features.',
  },
  // P4
  {
    slug: 'best-mangomint-alternatives',
    competitorSlug: 'mangomint',
    metaTitle: '5 Best Mangomint Alternatives with AI (2026)',
    metaDescription: 'Want AI features with Mangomint-quality operations? These alternatives add growth tools to clean salon management.',
    keywords: ['best mangomint alternatives', 'mangomint alternatives'],
    heroTitle: '5 Best Mangomint Alternatives in 2026',
    heroSubtitle: 'Clean operations at $165+/mo — but where\'s the AI and customer acquisition?',
    intro: 'Mangomint has the highest Capterra rating (4.9/5), but its premium pricing, no AI, and no marketplace leave room for alternatives that add growth capabilities.',
    alternatives: ['boulevard', 'vagaro', 'glossgenius', 'booksy'],
    verdict: 'Daisy adds AI and marketplace to premium salon management. Boulevard matches design quality. Vagaro offers the best all-round value.',
  },
  {
    slug: 'best-square-appointments-alternatives',
    competitorSlug: 'square-appointments',
    metaTitle: '7 Best Square Appointments Alternatives for Salons',
    metaDescription: 'Need more than generic scheduling? These beauty-specific platforms offer AI, marketplace, and salon management.',
    keywords: ['best square appointments alternatives', 'square appointments alternatives'],
    heroTitle: '7 Best Square Appointments Alternatives in 2026',
    heroSubtitle: 'Great for payments, but beauty businesses need purpose-built tools.',
    intro: 'Square Appointments is a solid free scheduling tool with great POS, but it\'s not built for beauty businesses. These alternatives offer industry-specific features, AI, and marketplace capabilities.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius', 'boulevard', 'mangomint'],
    verdict: 'Daisy is the best upgrade path for beauty businesses outgrowing Square. Fresha offers free marketplace. Vagaro is the most feature-complete.',
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
    metaDescription: 'Compare Fresha and Booksy side-by-side. Pricing, features, AI capabilities, and marketplace — plus a better alternative for GCC businesses.',
    keywords: ['fresha vs booksy', 'fresha or booksy', 'booksy vs fresha comparison'],
    heroTitle: 'Fresha vs Booksy',
    heroSubtitle: 'Two popular booking platforms — but which one is right for your beauty business?',
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
    daisyPitch: 'Both Fresha and Booksy are operations tools with marketplace bolt-ons. Daisy is a growth platform with full AI ecosystem, Arabic support, cashback rewards, and white-labeling — capabilities neither competitor offers.',
  },
  {
    slugA: 'fresha',
    slugB: 'vagaro',
    combinedSlug: 'fresha-vs-vagaro',
    metaTitle: 'Fresha vs Vagaro: Marketplace vs Feature-Rich (2026)',
    metaDescription: 'Compare Fresha (from $9.95/mo + fees) and Vagaro (feature-rich at $30/mo). Pricing, features, and which is better for your salon.',
    keywords: ['fresha vs vagaro', 'fresha or vagaro', 'vagaro vs fresha'],
    heroTitle: 'Fresha vs Vagaro',
    heroSubtitle: 'Low starting price with stacking fees versus $30/mo with comprehensive features — which model works better?',
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
    daisyPitch: 'Both are solid operations platforms. Daisy offers what neither provides: full AI ecosystem, Arabic/English bilingual support, cashback customer acquisition, and white-label brand control.',
  },
  {
    slugA: 'vagaro',
    slugB: 'mindbody',
    combinedSlug: 'vagaro-vs-mindbody',
    metaTitle: 'Vagaro vs Mindbody: Value vs Legacy (2026)',
    metaDescription: 'Compare Vagaro ($30/mo) and Mindbody ($139+/mo). Feature comparison, pricing breakdown, and a modern alternative for GCC businesses.',
    keywords: ['vagaro vs mindbody', 'vagaro or mindbody', 'mindbody vs vagaro'],
    heroTitle: 'Vagaro vs Mindbody',
    heroSubtitle: 'Modern value at $30/mo versus legacy premium at $139+/mo — the features tell the real story.',
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
    heroSubtitle: 'Beautiful design at $24/mo versus premium enterprise at $158/mo — different markets, different strengths.',
    verdict: 'GlossGenius wins on simplicity and affordability for solos. Boulevard wins on enterprise features and AI scheduling. Neither has Arabic support or cashback.',
    whoShouldChooseA: ['You\'re a solo beauty professional', 'Budget is under $50/mo', 'Simplicity over features'],
    whoShouldChooseB: ['You run a premium multi-location salon', 'AI scheduling optimization matters', 'Enterprise features are needed'],
    daisyPitch: 'Both target different segments of the US market. Daisy serves all business sizes with full AI, Arabic support, marketplace, and cashback — capabilities neither offers.',
  },
  {
    slugA: 'fresha',
    slugB: 'glossgenius',
    combinedSlug: 'fresha-vs-glossgenius',
    metaTitle: 'Fresha vs GlossGenius: Marketplace vs Design (2026)',
    metaDescription: 'Compare Fresha (from $9.95/mo + marketplace) and GlossGenius ($24/mo beauty-focused). Features, pricing, and which suits your salon better.',
    keywords: ['fresha vs glossgenius', 'fresha or glossgenius'],
    heroTitle: 'Fresha vs GlossGenius',
    heroSubtitle: 'Marketplace with stacking fees versus beautiful design at $24/mo — which trade-off works for you?',
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
    heroSubtitle: 'Mobile-first marketplace versus beautifully simple salon tool — two approaches for beauty professionals.',
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
    heroSubtitle: 'The industry legacy versus the modern premium challenger — which premium platform delivers more?',
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
    heroSubtitle: 'Comprehensive features versus beautiful simplicity — the right choice depends on your business stage.',
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
    metaDescription: 'Compare Fresha (from $9.95/mo + fees) and Mindbody ($139+/mo enterprise). Two ends of salon software — plus a modern alternative.',
    keywords: ['fresha vs mindbody', 'fresha or mindbody'],
    heroTitle: 'Fresha vs Mindbody',
    heroSubtitle: 'The budget marketplace versus the enterprise legacy — two ends of beauty business software.',
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
    heroSubtitle: 'Mobile-first affordability versus premium design and AI scheduling — which tier fits your business?',
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
    heroSubtitle: 'Feature-rich value at $30/mo versus premium design at $158/mo — the ROI question.',
    verdict: 'Vagaro offers excellent value with broad features. Boulevard offers premium experience with AI scheduling. Neither has Arabic, cashback, or full AI ecosystem.',
    whoShouldChooseA: ['Value for money is priority', 'You want broad feature coverage', 'Budget-friendly for growing teams'],
    whoShouldChooseB: ['Premium experience is priority', 'AI scheduling matters', 'You target luxury clientele'],
    daisyPitch: 'Vagaro gives features, Boulevard gives premium. Daisy gives AI + growth + Arabic support at fair pricing.',
  },
];

// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------

export function getDaisyVsPage(slug: string): DaisyVsPageData | undefined {
  return daisyVsPages.find((p) => p.slug === slug);
}

export function getAlternativePage(slug: string): AlternativePageData | undefined {
  return alternativePages.find((p) => p.slug === slug);
}

export function getBestAlternativesPage(slug: string): BestAlternativesPageData | undefined {
  return bestAlternativesPages.find((p) => p.slug === slug);
}

export function getCompetitorVsPage(slug: string): CompetitorVsPageData | undefined {
  return competitorVsPages.find((p) => p.combinedSlug === slug);
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
export function getComparePageData(slug: string): { type: 'daisy-vs'; data: DaisyVsPageData } | { type: 'competitor-vs'; data: CompetitorVsPageData } | undefined {
  const daisyVs = getDaisyVsPage(slug);
  if (daisyVs) return { type: 'daisy-vs', data: daisyVs };
  const competitorVs = getCompetitorVsPage(slug);
  if (competitorVs) return { type: 'competitor-vs', data: competitorVs };
  return undefined;
}

/** Resolve an alternative page slug to its data (either Alternative or BestAlternatives) */
export function getAlternativePageData(slug: string): { type: 'alternative'; data: AlternativePageData } | { type: 'best-alternatives'; data: BestAlternativesPageData } | undefined {
  const alt = getAlternativePage(slug);
  if (alt) return { type: 'alternative', data: alt };
  const bestAlt = getBestAlternativesPage(slug);
  if (bestAlt) return { type: 'best-alternatives', data: bestAlt };
  return undefined;
}

/** Get related comparison pages for internal linking */
export function getRelatedComparePages(currentSlug: string, limit: number = 4): { title: string; url: string; description: string }[] {
  const related: { title: string; url: string; description: string }[] = [];

  for (const page of daisyVsPages) {
    if (page.slug === currentSlug || related.length >= limit) continue;
    const competitor = competitors[page.competitorSlug];
    if (competitor) {
      related.push({
        title: `Daisy vs ${competitor.name}`,
        url: `/compare/${page.slug}`,
        description: page.metaDescription.slice(0, 120) + '...',
      });
    }
  }
  return related;
}

/** Get related alternative pages for internal linking */
export function getRelatedAlternativePages(currentSlug: string, limit: number = 4): { title: string; url: string; description: string }[] {
  const related: { title: string; url: string; description: string }[] = [];

  for (const page of alternativePages) {
    if (page.slug === currentSlug || related.length >= limit) continue;
    const competitor = competitors[page.competitorSlug];
    if (competitor) {
      related.push({
        title: `${competitor.name} Alternative`,
        url: `/alternative/${page.slug}`,
        description: page.metaDescription.slice(0, 120) + '...',
      });
    }
  }
  return related;
}
