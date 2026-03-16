// =============================================================================
// WS3: Feature Deep-Dive Page Data — Category-level deep dives
// =============================================================================

export interface FeatureDeepDiveFaq {
  question: string;
  answer: string;
}

export interface FeatureDeepDive {
  slug: string;
  categoryName: string;
  userType: 'business' | 'professional';

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroStat?: { value: string; label: string };

  // Overview
  overview: string;
  painPoints: string[];
  growthOutcome: string;

  // Sub-features
  subFeatures: {
    name: string;
    description: string;
    howItWorks?: string[];
    keyBenefit: string;
  }[];

  // Workflow
  workflow: {
    step: number;
    title: string;
    description: string;
  }[];

  // Comparison
  comparisonHighlights: {
    area: string;
    daisy: string;
    typical: string;
  }[];

  // Use Cases
  useCases: {
    title: string;
    businessType: string;
    scenario: string;
  }[];

  // Integration Points
  integrationPoints: {
    category: string;
    slug: string;
    benefit: string;
  }[];

  // AI Enhancement (null for AI category page itself)
  aiEnhancement?: {
    capabilities: { title: string; description: string }[];
  };

  // Network Effects (AI category page only)
  networkEffects?: {
    description: string;
    benefits: string[];
  };

  // FAQ
  faqs: FeatureDeepDiveFaq[];

  // Related
  relatedCategories: string[];
  relatedArticleSlugs: string[];
}

// -----------------------------------------------------------------------------
// Feature Deep-Dive Pages Data
// -----------------------------------------------------------------------------

export const featureDeepDives: FeatureDeepDive[] = [
  // =========================================================================
  // BUSINESS: AI-Powered Intelligence
  // =========================================================================
  {
    slug: 'ai-powered-intelligence',
    categoryName: 'AI-Powered Intelligence',
    userType: 'business',

    metaTitle:
      'AI-Powered Salon Intelligence — Automate Bookings, Calls & Growth | Daisy',
    metaDescription:
      'Daisy\'s AI receptionist answers calls, books appointments, processes payments, and delivers smart insights 24/7 in Arabic and English. See how AI transforms salon management.',
    keywords: [
      'AI salon management',
      'AI receptionist for salons',
      'automated salon booking',
      'AI-powered beauty business',
      'salon AI assistant',
      'smart salon software',
      'AI beauty technology',
      'salon automation',
      'AI appointment scheduling',
      'virtual receptionist salon',
    ],

    heroTitle: 'AI-Powered Intelligence for Your Beauty Business',
    heroSubtitle:
      'Your 24/7 AI receptionist that answers every call, books every appointment, and uncovers growth insights your competitors miss — in Arabic and English.',
    heroStat: {
      value: '24/7',
      label: 'Always-on AI receptionist',
    },

    overview:
      'The beauty industry is experiencing a fundamental shift. Businesses that rely solely on manual processes — answering phones, scheduling appointments, following up with clients — are losing ground to competitors who leverage artificial intelligence. Daisy\'s AI-Powered Intelligence is not a simple chatbot; it is a comprehensive AI system built specifically for beauty businesses. It handles customer interactions across voice, chat, and messaging in both Arabic and English, processes bookings and payments autonomously, and surfaces actionable insights from your business data. Whether you run a single chair or manage a multi-location chain, the AI scales to match your ambitions without increasing your headcount.',

    painPoints: [
      'Industry data shows salons miss 30–40% of inbound calls, meaning potential bookings go to competitors who respond faster.',
      'Staff spend up to 4 hours daily on administrative tasks — answering phones, confirming appointments, sending reminders — instead of serving clients.',
      'Generic CRM tools and booking platforms lack beauty-industry intelligence, forcing business owners to piece together fragmented solutions.',
      'Manual scheduling creates double-bookings, underutilised time slots, and scheduling gaps that directly reduce daily revenue.',
      'Without data-driven insights, business decisions rely on gut feeling rather than evidence, leading to missed growth opportunities.',
    ],

    growthOutcome:
      'Businesses using Daisy\'s AI report capturing bookings they previously missed, reducing admin overhead, and gaining clear visibility into performance metrics — translating directly into measurable revenue growth and more time for client service.',

    subFeatures: [
      {
        name: 'AI Receptionist',
        description:
          'A fully autonomous receptionist that handles inbound and outbound customer interactions through voice calls, WhatsApp, Instagram DMs, website chat, and SMS. It understands context, remembers client preferences, and communicates naturally in both Arabic and English — no scripts, no hold music, no missed calls.',
        howItWorks: [
          'Customer reaches out via any supported channel (phone, WhatsApp, chat, social media).',
          'AI identifies the customer from your database or creates a new profile automatically.',
          'AI understands the request — booking, rescheduling, pricing inquiry, or general question — and responds naturally.',
          'If booking, AI checks real-time availability, suggests optimal time slots, and confirms the appointment.',
          'Payment is processed if required, and confirmation is sent to both client and staff.',
        ],
        keyBenefit:
          'Capture every potential booking 24/7 without adding reception staff.',
      },
      {
        name: 'Smart Scheduling Engine',
        description:
          'Goes beyond basic calendar management. The scheduling engine analyses historical patterns, staff performance data, and service durations to optimise your appointment calendar. It minimises gaps between appointments, accounts for setup and cleanup time, and suggests schedule adjustments that maximise daily revenue.',
        howItWorks: [
          'Analyses your historical booking patterns and service duration data.',
          'Identifies scheduling gaps and underperforming time slots.',
          'Recommends optimal booking sequences to maximise chair utilisation.',
          'Automatically adjusts buffer times based on service complexity.',
        ],
        keyBenefit:
          'Increase appointments per day by filling schedule gaps your team would miss.',
      },
      {
        name: 'Predictive Business Insights',
        description:
          'Transforms your raw business data into strategic intelligence. The AI analyses revenue trends, client behaviour patterns, seasonal fluctuations, and service performance to surface insights that drive better decisions. Instead of scrolling through spreadsheets, you receive clear, actionable recommendations.',
        howItWorks: [
          'Continuously analyses booking, revenue, and client data in the background.',
          'Identifies trends — rising demand for specific services, client churn risk, seasonal patterns.',
          'Generates weekly insight reports with specific recommendations.',
          'Flags anomalies or issues that need immediate attention.',
        ],
        keyBenefit:
          'Make data-backed decisions instead of relying on guesswork.',
      },
      {
        name: 'Automated Client Communication',
        description:
          'Handles the entire client communication lifecycle — from booking confirmations and reminders to follow-up messages and re-engagement campaigns. Each message is personalised based on client history, preferences, and behaviour patterns, making every interaction feel personal rather than automated.',
        howItWorks: [
          'Sends personalised booking confirmations with service details and prep instructions.',
          'Delivers smart reminders at optimal intervals to reduce no-shows.',
          'Follows up after appointments for feedback and rebooking suggestions.',
          'Re-engages lapsed clients with personalised offers based on their history.',
        ],
        keyBenefit:
          'Reduce no-shows and keep clients coming back without manual follow-up effort.',
      },
      {
        name: 'Bilingual Intelligence (Arabic & English)',
        description:
          'Not just translation — true bilingual understanding. The AI comprehends cultural nuances, local dialects, and industry terminology in both Arabic and English. Clients can switch languages mid-conversation, and the AI adapts seamlessly. This is particularly critical for GCC markets where clients expect service in their preferred language.',
        keyBenefit:
          'Serve Arabic and English-speaking clients equally well, expanding your addressable market.',
      },
      {
        name: 'AI-Powered Upselling',
        description:
          'Analyses each client\'s service history, preferences, and purchase patterns to identify natural upsell opportunities. When a client books a haircut, the AI might suggest a conditioning treatment based on their last visit. The recommendations feel helpful rather than pushy because they are grounded in real data.',
        keyBenefit:
          'Increase average transaction value with intelligent, personalised recommendations.',
      },
    ],

    workflow: [
      {
        step: 1,
        title: 'Connect Your Channels',
        description:
          'Link your phone line, WhatsApp Business, Instagram, website, and any other customer touchpoints. Setup takes minutes, not days.',
      },
      {
        step: 2,
        title: 'AI Learns Your Business',
        description:
          'The AI ingests your service menu, pricing, staff schedules, and business rules. It starts understanding your specific operation immediately.',
      },
      {
        step: 3,
        title: 'Customers Interact Naturally',
        description:
          'Clients call, message, or chat as they normally would. The AI handles the conversation naturally — booking, answering questions, or routing complex requests to your team.',
      },
      {
        step: 4,
        title: 'Bookings Flow Automatically',
        description:
          'Confirmed appointments appear on your calendar. Staff receive their schedules. Clients get confirmations and reminders. Payments are processed. No manual steps required.',
      },
      {
        step: 5,
        title: 'Insights Drive Growth',
        description:
          'The AI continuously analyses your data and delivers actionable insights — which services to promote, when to adjust pricing, which clients to re-engage, and where to allocate resources.',
      },
    ],

    comparisonHighlights: [
      {
        area: 'Customer Response',
        daisy: '24/7 instant response across all channels — voice, chat, social, SMS',
        typical: 'Limited to business hours, relies on staff availability',
      },
      {
        area: 'Language Support',
        daisy: 'Native Arabic and English with cultural context understanding',
        typical: 'English only, or basic translation overlays',
      },
      {
        area: 'Booking Intelligence',
        daisy: 'AI optimises schedule for maximum revenue and efficiency',
        typical: 'Basic calendar with manual slot management',
      },
      {
        area: 'Client Insights',
        daisy: 'Predictive analytics with automated weekly reports and recommendations',
        typical: 'Basic reports you need to generate and interpret manually',
      },
      {
        area: 'Upselling',
        daisy: 'AI-driven personalised recommendations based on client history',
        typical: 'Relies on staff memory and initiative',
      },
      {
        area: 'Communication',
        daisy: 'Automated personalised lifecycle messaging across all channels',
        typical: 'Manual SMS reminders, basic email templates',
      },
    ],

    useCases: [
      {
        title: 'The Solo Stylist Who Never Misses a Call',
        businessType: 'Solo Salon',
        scenario:
          'Sarah runs a one-chair salon. She physically cannot answer the phone while with a client. Before Daisy, she lost an estimated 40% of enquiries. Now the AI receptionist handles every call, books appointments during her sessions, and even processes deposits — meaning Sarah focuses entirely on her craft while her bookings stay full.',
      },
      {
        title: 'The Multi-Location Chain That Scaled Smart',
        businessType: 'Salon Chain',
        scenario:
          'A 5-branch salon group was spending on multiple receptionists across locations. Daisy\'s AI handles all incoming communications centrally, routes bookings to the correct branch, and provides unified analytics across all locations. The group reduced reception overhead while improving booking capture rates.',
      },
      {
        title: 'The Premium Spa Offering Bilingual Luxury',
        businessType: 'Luxury Spa',
        scenario:
          'A high-end spa in Dubai serves both Arabic and English-speaking clients. The AI communicates naturally in both languages, understands premium service expectations, and personalises every interaction based on the client\'s history and preferences — maintaining the luxury experience from first contact to follow-up.',
      },
    ],

    integrationPoints: [
      {
        category: 'Booking Management',
        slug: 'booking-management',
        benefit:
          'AI-optimised bookings feed directly into the scheduling system, eliminating double-bookings and maximising calendar utilisation.',
      },
      {
        category: 'Communication Tools',
        slug: 'communication-tools',
        benefit:
          'AI powers the communication layer — automated messages, follow-ups, and re-engagement campaigns across all channels.',
      },
      {
        category: 'Analytics & Reports',
        slug: 'analytics-reports',
        benefit:
          'AI-generated insights surface in your analytics dashboard, providing predictive recommendations alongside historical data.',
      },
      {
        category: 'Marketing & Promotions',
        slug: 'marketing-promotions',
        benefit:
          'AI identifies the best clients to target, optimal promotion timing, and personalised offers that drive higher conversion rates.',
      },
    ],

    networkEffects: {
      description:
        'Daisy\'s AI is not static — it improves with every interaction across the entire platform. As more beauty businesses use Daisy, the AI learns broader industry patterns: seasonal trends, service popularity shifts, pricing optimisation strategies, and client behaviour insights. This compounding intelligence means early adopters gain an accelerating advantage over competitors.',
      benefits: [
        'Scheduling predictions improve as the AI processes millions of appointment patterns across the industry.',
        'Client communication becomes more effective as the AI learns which messaging approaches drive the highest engagement and rebooking rates.',
        'Revenue forecasting accuracy increases with exposure to diverse business models and market conditions.',
        'Service recommendations become more relevant as the AI understands cross-industry trends and emerging client preferences.',
        'Bilingual capabilities strengthen with every Arabic and English conversation, capturing more nuances and dialects.',
      ],
    },

    faqs: [
      {
        question: 'How does the AI receptionist handle complex booking requests?',
        answer:
          'The AI understands multi-service bookings, specific staff requests, time preferences, and special requirements. It checks real-time availability across your team, considers service durations and buffer times, and can handle changes or cancellations autonomously. For truly unique situations, it seamlessly routes to a human team member with full context.',
      },
      {
        question: 'Is the AI receptionist available in Arabic?',
        answer:
          'Yes. Daisy\'s AI operates natively in both Arabic and English with full cultural context understanding. It is not a translation layer — it genuinely understands and responds in both languages, including GCC dialects and beauty industry terminology. Clients can even switch languages mid-conversation.',
      },
      {
        question: 'Will the AI replace my reception staff?',
        answer:
          'The AI is designed to augment, not replace. It handles routine enquiries, after-hours calls, and high-volume periods that your team cannot manage alone. Your staff can focus on premium in-person service while the AI ensures no opportunity is missed. Many businesses find they can grow without adding reception headcount.',
      },
      {
        question: 'How long does it take to set up the AI?',
        answer:
          'Initial setup takes under an hour. You connect your communication channels, import your service menu and pricing, and set your business rules. The AI begins handling interactions immediately and continues improving its understanding of your specific business over the first few weeks.',
      },
      {
        question: 'Can the AI process payments?',
        answer:
          'Yes. The AI can collect deposits, process full payments, and handle payment-related queries — all within the conversation flow. It integrates with Daisy\'s built-in payment processing, so clients can pay when they book without being redirected to a separate page.',
      },
      {
        question: 'How does the AI improve over time?',
        answer:
          'The AI learns from every interaction — yours and the broader Daisy network. It refines its understanding of your services, client preferences, and communication style. Additionally, platform-wide learning means the AI incorporates industry trends and best practices from thousands of beauty businesses.',
      },
      {
        question: 'What happens if the AI cannot handle a request?',
        answer:
          'The AI gracefully escalates to your team. It transfers the conversation with full context — what the client asked, their history, and any relevant details — so the handoff is seamless. You can also set custom rules for which types of requests should always go to a human.',
      },
    ],

    relatedCategories: [
      'booking-management',
      'communication-tools',
      'analytics-reports',
    ],
    relatedArticleSlugs: [],
  },
];
