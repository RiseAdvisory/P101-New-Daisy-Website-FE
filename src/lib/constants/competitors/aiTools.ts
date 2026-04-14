// =============================================================================
// WS1: AI-Only Tool Data (Tier 4)
// Last updated: March 2026
// =============================================================================

import type { AiToolData } from './competitorData';
import type { I18nContent } from '../i18n';

// ---------------------------------------------------------------------------
// English data (default export for backward compatibility)
// ---------------------------------------------------------------------------

export const aiTools: AiToolData[] = [
  // ---------------------------------------------------------------------------
  // 1. Anolla
  // ---------------------------------------------------------------------------
  {
    slug: 'anolla',
    name: 'Anolla',
    website: 'https://www.anolla.com',
    description:
      'AI beauty assistant specializing in multi-language chat-based booking and customer service. Supports 25 languages. Chat-only platform, no voice capabilities.',
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
      'Chat-only, no voice/phone receptionist capability',
      'Requires existing booking software (integration-dependent)',
      'No POS, payments, or business management features',
      'No client management or CRM',
      'No marketplace or customer acquisition tools',
      'Limited to booking and FAQ, no marketing automation',
      'Integration quality varies by platform',
    ],
    daisyAdvantages: [
      'Full platform (AI + booking + POS + CRM + marketing) vs chat-only add-on',
      'Voice + chat AI receptionist vs chat-only',
      'No integration needed, everything built in',
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
      'Voice only, no chat or messaging capability',
      'Cannot autonomously book appointments (routes to existing software)',
      'Requires separate booking/management software',
      'Expensive at scale ($3,000/mo for high call volume)',
      'No POS, payments, or business management features',
      'Limited language support (5 languages vs Daisy\'s Arabic/English focus)',
      'Integration dependency creates potential failure points',
      'No customer acquisition or marketing tools',
    ],
    daisyAdvantages: [
      'Full platform vs voice-only add-on, no separate software needed',
      'AI autonomously books and collects payments vs just routing calls',
      'Voice + chat + messaging vs voice-only',
      'Flat, predictable pricing vs $99-3,000/mo based on volume',
      'Complete business management suite included',
      'Customer acquisition engine (marketplace + cashback + marketing)',
      'Native Arabic/English vs limited multi-language',
      'No integration dependencies, everything works together natively',
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
      'Not true AI, rule-based automation marketed as "AI"',
      'No voice or chat receptionist capability',
      'Cannot book appointments or process payments',
      'CRM-only, no booking, POS, or operations features',
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
      'All-in-one, no integration dependencies',
      'Transparent AI capabilities vs misleading "AI" branding',
    ],
    lastResearched: '2026-03-13',
  },
];

// ---------------------------------------------------------------------------
// Arabic data
// ---------------------------------------------------------------------------

const aiToolsAr: AiToolData[] = [
  // ---------------------------------------------------------------------------
  // 1. Anolla
  // ---------------------------------------------------------------------------
  {
    slug: 'anolla',
    name: 'Anolla',
    website: 'https://www.anolla.com',
    description:
      'مساعد تجميل ذكي متخصص في الحجز وخدمة العملاء عبر المحادثة النصية بعدة لغات. يدعم 25 لغة. منصة محادثة نصية فقط، بدون قدرات صوتية.',
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
      startingPrice: '$29/شهرياً',
      pricingModel: 'باقات حسب حجم الرسائل',
    },
    limitations: [
      'محادثة نصية فقط، بدون موظف استقبال صوتي أو هاتفي',
      'يتطلب برنامج حجز قائم (يعتمد على التكامل)',
      'لا يوفر نقاط بيع أو مدفوعات أو ميزات إدارة الأعمال',
      'لا توجد إدارة عملاء أو نظام CRM',
      'لا يوجد سوق أو أدوات لاستقطاب العملاء',
      'يقتصر على الحجز والأسئلة الشائعة، بدون أتمتة تسويقية',
      'جودة التكامل تختلف حسب المنصة',
    ],
    daisyAdvantages: [
      'منصة متكاملة (ذكاء اصطناعي + حجز + نقاط بيع + CRM + تسويق) مقابل إضافة محادثة فقط',
      'موظف استقبال ذكي صوتي ونصي مقابل محادثة نصية فقط',
      'لا حاجة لتكامل خارجي، كل شيء مدمج',
      'الذكاء الاصطناعي يعالج المدفوعات وليس الحجوزات فقط',
      'محرك استقطاب العملاء (سوق + كاشباك) مقابل صفر أدوات نمو',
      'مجموعة إدارة أعمال كاملة مقابل أداة أحادية الغرض',
      'عربي أصلي بأولوية متساوية مقابل دعم عام لعدة لغات',
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
      'إضافة موظف استقبال صوتي ذكي لصالونات التجميل والعافية. يتعامل مع المكالمات الواردة ويوجهها للحجز. يتطلب برنامج صالون قائم لإدارة المواعيد الفعلية.',
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
      startingPrice: '$99/شهرياً',
      pricingModel: 'باقات حسب حجم المكالمات ($99-$3,000/شهرياً)',
    },
    limitations: [
      'صوتي فقط، بدون محادثة نصية أو رسائل',
      'لا يمكنه حجز المواعيد ذاتياً (يوجه فقط إلى البرنامج الحالي)',
      'يتطلب برنامج حجز/إدارة منفصل',
      'مكلف عند التوسع ($3,000/شهرياً لحجم مكالمات مرتفع)',
      'لا يوفر نقاط بيع أو مدفوعات أو ميزات إدارة أعمال',
      'دعم لغوي محدود (5 لغات مقابل تركيز ديزي على العربية/الإنجليزية)',
      'الاعتماد على التكامل يخلق نقاط ضعف محتملة',
      'لا توجد أدوات استقطاب عملاء أو تسويق',
    ],
    daisyAdvantages: [
      'منصة متكاملة مقابل إضافة صوتية فقط، بدون حاجة لبرنامج منفصل',
      'الذكاء الاصطناعي يحجز ويحصّل المدفوعات ذاتياً مقابل مجرد توجيه المكالمات',
      'صوت + محادثة + رسائل مقابل صوت فقط',
      'تسعير ثابت ومتوقع مقابل $99-3,000/شهرياً حسب الحجم',
      'مجموعة إدارة أعمال كاملة مضمنة',
      'محرك استقطاب العملاء (سوق + كاشباك + تسويق)',
      'عربي/إنجليزي أصلي مقابل دعم محدود لعدة لغات',
      'بدون اعتماد على تكامل خارجي، كل شيء يعمل معاً بشكل أصلي',
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
      'أداة CRM وإدارة عملاء مقرها المملكة المتحدة للصالونات مع ميزات أتمتة أساسية. تُقدّم على أنها مدعومة بالذكاء الاصطناعي لكنها تقدم بالأساس أتمتة قائمة على القواعد بدلاً من قدرات ذكاء اصطناعي حقيقية.',
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
      startingPrice: '$49/شهرياً',
      pricingModel: 'اشتراك شهري لكل صالون',
    },
    limitations: [
      'ليس ذكاءً اصطناعياً حقيقياً، أتمتة قائمة على القواعد تُسوّق كـ"ذكاء اصطناعي"',
      'لا يوجد موظف استقبال صوتي أو نصي',
      'لا يمكنه حجز المواعيد أو معالجة المدفوعات',
      'CRM فقط، بدون حجز أو نقاط بيع أو ميزات تشغيلية',
      'تكاملات محدودة (3 منصات)',
      'يركز على المملكة المتحدة مع دعم دولي محدود',
      'لا يدعم العربية أو عدة لغات',
      'لا يوجد سوق أو ميزات استقطاب عملاء',
      'أتمتة أساسية (تذكيرات، متابعات) وليس جدولة ذكية',
    ],
    daisyAdvantages: [
      'ذكاء اصطناعي حقيقي (موظف استقبال، محادثة ذكية، جدولة ذكية) مقابل أتمتة قائمة على القواعد',
      'منصة متكاملة (حجز + نقاط بيع + CRM + تسويق) مقابل أداة CRM فقط',
      'ذكاء اصطناعي صوتي ونصي يحجز ويعالج المدفوعات',
      'محرك استقطاب عملاء مقابل صفر أدوات نمو',
      'عربي/إنجليزي أصلي مقابل إنجليزي فقط',
      'متوافق مع دول الخليج مع مدفوعات محلية مقابل تركيز على المملكة المتحدة فقط',
      'الكل في واحد، بدون اعتماد على تكامل خارجي',
      'قدرات ذكاء اصطناعي شفافة مقابل علامة "ذكاء اصطناعي" مضللة',
    ],
    lastResearched: '2026-03-13',
  },
];

// ---------------------------------------------------------------------------
// I18n-wrapped export
// ---------------------------------------------------------------------------

export const aiToolsI18n: I18nContent<AiToolData[]> = {
  en: aiTools,
  ar: aiToolsAr,
};
