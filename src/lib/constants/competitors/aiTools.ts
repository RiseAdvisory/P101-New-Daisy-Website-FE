// =============================================================================
// WS1: AI-Only Tool Data (Tier 4)
// Last updated: March 2026
// =============================================================================

import type { AiToolData } from './competitorData';

export const aiTools: AiToolData[] = [
  // ---------------------------------------------------------------------------
  // 1. Anolla
  // ---------------------------------------------------------------------------
  {
    slug: 'anolla',
    name: 'Anolla',
    website: 'https://www.anolla.com',
    description:
      'AI beauty assistant specializing in multi-language chat-based booking and customer service. Supports 25 languages. Chat-only platform — no voice capabilities.',
    aiCapabilities: {
      voiceReceptionist: false,
      chatBooking: true,
      multiLanguage: true,
      languageCount: 25,
      smartScheduling: false,
      autonomousBooking: true,
      integrationRequired: true,
      integratesWith: [
        'Fresha',
        'Booksy',
        'Mindbody',
        'Square Appointments',
        'Calendly',
      ],
    },
    pricing: {
      hasFreePlan: true,
      startingPrice: '$29/mo',
      pricingModel: 'Tiered by message volume',
    },
    limitations: [
      'Chat-only — no voice/phone receptionist capability',
      'Requires existing booking software (integration-dependent)',
      'No POS, payments, or business management features',
      'No client management or CRM',
      'No marketplace or customer acquisition tools',
      'Limited to booking and FAQ — no marketing automation',
      'Integration quality varies by platform',
    ],
    daisyAdvantages: [
      'Full platform (AI + booking + POS + CRM + marketing) vs chat-only add-on',
      'Voice + chat AI receptionist vs chat-only',
      'No integration needed — everything built in',
      'AI handles payments, not just bookings',
      'Customer acquisition engine (marketplace + cashback) vs zero growth tools',
      'Full business management suite vs single-purpose tool',
      'Native Arabic with equal priority vs general multi-language support',
    ],
    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 2. BookingBee.ai
  // ---------------------------------------------------------------------------
  {
    slug: 'bookingbee-ai',
    name: 'BookingBee.ai',
    website: 'https://www.bookingbee.ai',
    description:
      'AI voice receptionist add-on for beauty and wellness businesses. Handles inbound phone calls and routes to booking. Requires existing salon software for actual appointment management.',
    aiCapabilities: {
      voiceReceptionist: true,
      chatBooking: false,
      multiLanguage: true,
      languageCount: 5,
      smartScheduling: false,
      autonomousBooking: false,
      integrationRequired: true,
      integratesWith: [
        'Vagaro',
        'Mindbody',
        'Fresha',
        'Boulevard',
        'Square Appointments',
      ],
    },
    pricing: {
      hasFreePlan: false,
      startingPrice: '$99/mo',
      pricingModel: 'Tiered by call volume ($99-$3,000/mo)',
    },
    limitations: [
      'Voice only — no chat or messaging capability',
      'Cannot autonomously book appointments (routes to existing software)',
      'Requires separate booking/management software',
      'Expensive at scale ($3,000/mo for high call volume)',
      'No POS, payments, or business management features',
      'Limited language support (5 languages vs Daisy\'s Arabic/English focus)',
      'Integration dependency creates potential failure points',
      'No customer acquisition or marketing tools',
    ],
    daisyAdvantages: [
      'Full platform vs voice-only add-on — no separate software needed',
      'AI autonomously books and collects payments vs just routing calls',
      'Voice + chat + messaging vs voice-only',
      'Flat, predictable pricing vs $99-3,000/mo based on volume',
      'Complete business management suite included',
      'Customer acquisition engine (marketplace + cashback + marketing)',
      'Native Arabic/English vs limited multi-language',
      'No integration dependencies — everything works together natively',
    ],
    lastResearched: '2026-03-13',
  },

  // ---------------------------------------------------------------------------
  // 3. SharpAI
  // ---------------------------------------------------------------------------
  {
    slug: 'sharpai',
    name: 'SharpAI',
    website: 'https://www.sharpai.co',
    description:
      'UK-based CRM and client management tool for salons with basic automation features. Positioned as AI-powered but primarily offers rule-based automation rather than true AI capabilities.',
    aiCapabilities: {
      voiceReceptionist: false,
      chatBooking: false,
      multiLanguage: false,
      smartScheduling: false,
      autonomousBooking: false,
      integrationRequired: false,
      integratesWith: ['Phorest', 'Fresha', 'Timely'],
    },
    pricing: {
      hasFreePlan: false,
      startingPrice: '$49/mo',
      pricingModel: 'Per-salon monthly subscription',
    },
    limitations: [
      'Not true AI — rule-based automation marketed as "AI"',
      'No voice or chat receptionist capability',
      'Cannot book appointments or process payments',
      'CRM-only — no booking, POS, or operations features',
      'Limited integrations (3 platforms)',
      'UK-focused with limited international support',
      'No Arabic or multi-language support',
      'No marketplace or customer acquisition features',
      'Basic automation (reminders, follow-ups) not intelligent scheduling',
    ],
    daisyAdvantages: [
      'True AI (receptionist, chatbot, smart scheduling) vs rule-based automation',
      'Full platform (booking + POS + CRM + marketing) vs CRM-only tool',
      'Voice + chat AI that books and processes payments',
      'Customer acquisition engine vs no growth tools',
      'Native Arabic/English vs English-only',
      'GCC-compliant with local payments vs UK-only focus',
      'All-in-one — no integration dependencies',
      'Transparent AI capabilities vs misleading "AI" branding',
    ],
    lastResearched: '2026-03-13',
  },
];
