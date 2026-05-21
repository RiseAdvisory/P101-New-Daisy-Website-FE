/**
 * Shared content for the /pricing-v3 preview.
 *
 * The v3 page leads with the hero, then walks through pricing logic
 * (how it works, commission, AI receptionist), the feature comparison,
 * add-ons, FAQ, and a persona-specific final CTA.
 *
 * Bilingual (EN + AR). Arabic uses Cairo body type via the global font
 * stack; copy follows the same beauty/wellness vocabulary used in v2.
 */

import { I18nContent } from '../../i18n';

export type Persona = 'business' | 'professional';

// ----- Per-persona copy bundles -----

export interface PersonaCopy {
  heroHeadline: string;
  heroSubheadline: string;
  howItWorksTitle: string;
  howItWorksCard1: { title: string; body: string };
  howItWorksCard2: { title: string; body: string };
  howItWorksCard3: { title: string; body: string };
  commissionTitle: string;
  commissionBody1: string;
  commissionBody2: string;
  aiConversationsTitle: string;
  aiConversationsBody: string;
  aiCreditsFineprint: string;
  ctaPrimary: string;
  ctaSecondary: string;
  finalCtaHeadline: string;
  finalCtaBody: string;
}

// ----- Shared (persona-agnostic) UI strings -----

export interface SharedCopy {
  personaSelectorLabel: string;
  personaToggleBusiness: string;
  personaToggleProfessional: string;
  billingMonthly: string;
  billingAnnual: string;
  twoMonthsFreeBadge: string;
  mostPopularBadge: string;
  trialBadge: string;
  cardPerMonth: string;
  cardBilledMonthlyLine1: string;
  cardBilledMonthlyLine2: string;
  cardBilledAnnuallyLine1: (annualTotal: number) => string;
  cardBestForLabel: string;
  cardIncludedHeader: string;
  cardConditionalHeader: string;
  cardConditionalNote: string;
  // Single reassurance line that replaces the verbose AI usage table in v3.
  aiTopUpReassurance: string;
  compareHeading: string;
  compareSubheading: string;
  compareFeatureHeader: string;
  compareViewAllLabel: string;
  compareViewLessLabel: string;
  compareSwipeHint: string;
  addOnsHeading: string;
  addOnsSubheading: string;
  faqHeading: string;
  marketplaceFootnote: string;
}

export const SHARED_COPY: I18nContent<SharedCopy> = {
  en: {
    personaSelectorLabel: 'Pricing for',
    personaToggleBusiness: 'Businesses',
    personaToggleProfessional: 'Solo Professionals',
    billingMonthly: 'Monthly',
    billingAnnual: 'Annual',
    twoMonthsFreeBadge: '2 Months Free',
    mostPopularBadge: 'Most Popular',
    trialBadge: '14-day free trial · No card required to start',
    cardPerMonth: '/ month',
    cardBilledMonthlyLine1: 'Billed monthly.',
    cardBilledMonthlyLine2: 'Cancel anytime.',
    cardBilledAnnuallyLine1: (annualTotal) =>
      `Billed annually at $${annualTotal}.`,
    cardBestForLabel: 'Best for',
    cardIncludedHeader: 'Included with your plan',
    cardConditionalHeader: 'Available after quality review',
    cardConditionalNote:
      'Marketplace visibility, featured placement, and cashback promotions become available after a service-quality review.',
    aiTopUpReassurance:
      'Additional AI usage is available through pay-as-you-go top-ups, and pricing is shown before purchase.',
    compareHeading: 'Compare Every Feature',
    compareSubheading: 'The full feature matrix, organized by category.',
    compareFeatureHeader: 'Feature',
    compareViewAllLabel: 'View All Features',
    compareViewLessLabel: 'Show Less',
    compareSwipeHint: 'Swipe to compare tiers →',
    addOnsHeading: 'Add-Ons',
    addOnsSubheading:
      'Extra capacity and services, billed alongside your subscription.',
    faqHeading: 'Frequently Asked Questions',
    marketplaceFootnote:
      '* Marketplace visibility, cashback promotions, and featured placement require a service-quality review.',
  },
  ar: {
    personaSelectorLabel: 'الأسعار لـ',
    personaToggleBusiness: 'الأعمال',
    personaToggleProfessional: 'المحترفون المستقلون',
    billingMonthly: 'شهري',
    billingAnnual: 'سنوي',
    twoMonthsFreeBadge: 'شهران مجاناً',
    mostPopularBadge: 'الأكثر شعبية',
    trialBadge: 'تجربة مجانية 14 يوماً · بدون بطاقة للبدء',
    cardPerMonth: '/ شهر',
    cardBilledMonthlyLine1: 'فوترة شهرية.',
    cardBilledMonthlyLine2: 'ألغِ في أي وقت.',
    cardBilledAnnuallyLine1: (annualTotal) =>
      `فوترة سنوية بمبلغ ${annualTotal} دولاراً.`,
    cardBestForLabel: 'الأنسب لـ',
    cardIncludedHeader: 'مشمول مع خطتك',
    cardConditionalHeader: 'متاح بعد مراجعة الجودة',
    cardConditionalNote:
      'يصبح الظهور في السوق، والموضع المميّز، وعروض الكاشباك متاحة بعد مراجعة جودة الخدمة.',
    aiTopUpReassurance:
      'الاستخدام الإضافي للذكاء الاصطناعي متاح عبر الشحن حسب الاستخدام، ويتم عرض السعر قبل الشراء.',
    compareHeading: 'قارن كل الميزات',
    compareSubheading: 'مصفوفة الميزات الكاملة، منظّمة حسب الفئة.',
    compareFeatureHeader: 'الميزة',
    compareViewAllLabel: 'عرض كل الميزات',
    compareViewLessLabel: 'عرض أقل',
    compareSwipeHint: '← اسحب لمقارنة الخطط',
    addOnsHeading: 'الإضافات',
    addOnsSubheading: 'سعة وخدمات إضافية، تُحتسب مع اشتراكك.',
    faqHeading: 'الأسئلة الشائعة',
    marketplaceFootnote:
      '* الظهور في السوق، وعروض الكاشباك، والموضع المميّز تتطلب مراجعة جودة الخدمة.',
  },
};

// ----- Persona-aware copy bundles -----

export const PERSONA_COPY: Record<Persona, I18nContent<PersonaCopy>> = {
  business: {
    en: {
      heroHeadline:
        'Run Your Salon, Spa, or Clinic With Booking, Payments, and AI Front Desk Support',
      heroSubheadline:
        'Manage your team, bookings, payments, reviews, and customer messages in one platform, with an AI receptionist for WhatsApp, Instagram, and your booking site.',
      howItWorksTitle: 'How Daisy Pricing Works',
      howItWorksCard1: {
        title: 'Subscription = Business Tools',
        body: 'Your subscription gives you the tools to run your business: booking, team calendars, payments, reviews, client records, and customer communication.',
      },
      howItWorksCard2: {
        title: 'AI Receptionist = Trial + Pay-As-You-Go',
        body: 'AI receptionist usage starts with included trial conversations, then continues with pay-as-you-go usage when you want more.',
      },
      howItWorksCard3: {
        title: 'Marketplace = Commission Only on New Customers',
        body: 'Marketplace commission only applies when Daisy brings you a new customer. You pay 0% commission on your existing clients.',
      },
      commissionTitle: '0% Commission on Your Existing Clients. Always.',
      commissionBody1:
        'Your clients stay yours. If a client books through your branded Daisy site, Instagram, WhatsApp, direct booking link, or QR code, Daisy charges 0% commission.',
      commissionBody2:
        'Commission only applies when Daisy brings you a new customer through the marketplace.',
      aiConversationsTitle:
        'Every Plan Includes Around 50 AI Receptionist Conversations',
      aiConversationsBody:
        'Test the AI receptionist with around 50 customer conversations included. Use it to handle common booking questions, availability requests, service inquiries, and follow-ups.',
      aiCreditsFineprint:
        'Powered by 1,000 included AI credits. After that, continue with pay-as-you-go top-ups.',
      ctaPrimary: 'Start Business Trial',
      ctaSecondary: 'Book a Demo',
      finalCtaHeadline: 'Ready to Run Your Business With Daisy?',
      finalCtaBody:
        'Start your 14-day trial without a card, or book a demo if you want help choosing the right plan.',
    },
    ar: {
      heroHeadline:
        'أدر صالونك أو منتجعك أو عيادتك بالحجوزات والمدفوعات ودعم استقبال ذكي',
      heroSubheadline:
        'أدر فريقك وحجوزاتك ومدفوعاتك وتقييماتك ورسائل عملائك في منصة واحدة، مع موظف استقبال ذكي لواتساب وإنستغرام وموقع حجوزاتك.',
      howItWorksTitle: 'كيف تعمل أسعار ديزي',
      howItWorksCard1: {
        title: 'الاشتراك = أدوات الأعمال',
        body: 'يمنحك اشتراكك الأدوات لإدارة أعمالك: الحجز، وتقاويم الفريق، والمدفوعات، والتقييمات، وسجلات العملاء، والتواصل مع العملاء.',
      },
      howItWorksCard2: {
        title: 'موظف الاستقبال الذكي = تجربة + ادفع حسب الاستخدام',
        body: 'يبدأ استخدام موظف الاستقبال الذكي بمحادثات تجريبية مشمولة، ثم يستمر بالدفع حسب الاستخدام عندما تريد المزيد.',
      },
      howItWorksCard3: {
        title: 'السوق = عمولة على العملاء الجدد فقط',
        body: 'تُطبَّق عمولة السوق فقط عندما تجلب لك ديزي عميلاً جديداً. تدفع 0% عمولة على عملائك الحاليين.',
      },
      commissionTitle: '0% عمولة على عملائك الحاليين. دائماً.',
      commissionBody1:
        'عملاؤك يبقون لك. إذا حجز عميل عبر موقعك على ديزي بعلامتك التجارية، أو إنستغرام، أو واتساب، أو رابط الحجز المباشر، أو رمز QR، تأخذ ديزي 0% عمولة.',
      commissionBody2:
        'تُطبَّق العمولة فقط عندما تجلب لك ديزي عميلاً جديداً عبر السوق.',
      aiConversationsTitle:
        'كل خطة تشمل حوالي 50 محادثة لموظف الاستقبال الذكي',
      aiConversationsBody:
        'اختبر موظف الاستقبال الذكي مع حوالي 50 محادثة عملاء مشمولة. استخدمه للتعامل مع أسئلة الحجز الشائعة، وطلبات التوفر، واستفسارات الخدمات، والمتابعات.',
      aiCreditsFineprint:
        'مدعوم بـ 1000 رصيد ذكاء اصطناعي مشمول. بعدها، تابع باستخدام الشحن حسب الاستخدام.',
      ctaPrimary: 'ابدأ تجربة الأعمال',
      ctaSecondary: 'احجز عرضاً توضيحياً',
      finalCtaHeadline: 'هل أنت مستعد لإدارة أعمالك مع ديزي؟',
      finalCtaBody:
        'ابدأ تجربتك المجانية لمدة 14 يوماً بدون بطاقة، أو احجز عرضاً توضيحياً إذا أردت المساعدة في اختيار الخطة المناسبة.',
    },
  },
  professional: {
    en: {
      heroHeadline:
        'Get Booked, Look Professional, and Let AI Help With Customer Messages',
      heroSubheadline:
        'Create your branded booking site, manage appointments, accept payments, and respond faster to customers through WhatsApp, Instagram, and AI receptionist support.',
      howItWorksTitle: 'How Daisy Pricing Works',
      howItWorksCard1: {
        title: 'Subscription = Your Tools',
        body: 'Your subscription gives you the tools to manage your bookings, payments, clients, reviews, and customer messages.',
      },
      howItWorksCard2: {
        title: 'AI Receptionist = Trial + Pay-As-You-Go',
        body: 'AI receptionist usage starts with included trial conversations, then continues with pay-as-you-go usage when you want more.',
      },
      howItWorksCard3: {
        title: 'Marketplace = Commission Only on New Customers',
        body: 'Marketplace commission only applies when Daisy brings you a new customer. You pay 0% commission on your own existing clients.',
      },
      commissionTitle: '0% Commission on Your Own Clients. Always.',
      commissionBody1:
        'Your client relationships stay yours. If a client books through your branded Daisy site, Instagram, WhatsApp, direct booking link, or QR code, Daisy charges 0% commission.',
      commissionBody2:
        'Commission only applies when Daisy brings you a new customer through the marketplace.',
      aiConversationsTitle:
        'Every Plan Includes Around 50 AI Receptionist Conversations',
      aiConversationsBody:
        'Test the AI receptionist with around 50 customer conversations included. Use it to help answer booking questions, service inquiries, availability requests, and follow-ups while you are busy serving clients.',
      aiCreditsFineprint:
        'Powered by 1,000 included AI credits. After that, continue with pay-as-you-go top-ups.',
      ctaPrimary: 'Start Solo Trial',
      ctaSecondary: 'Create Your Booking Site',
      finalCtaHeadline: 'Ready to Get Booked With Daisy?',
      finalCtaBody:
        'Start your 14-day trial and create your professional booking site.',
    },
    ar: {
      heroHeadline:
        'احصل على حجوزات، اظهر بمظهر احترافي، ودع الذكاء الاصطناعي يساعدك في رسائل العملاء',
      heroSubheadline:
        'أنشئ موقع حجوزاتك بعلامتك التجارية، وأدر مواعيدك، واقبل المدفوعات، وردّ على عملائك بشكل أسرع عبر واتساب وإنستغرام ودعم موظف الاستقبال الذكي.',
      howItWorksTitle: 'كيف تعمل أسعار ديزي',
      howItWorksCard1: {
        title: 'الاشتراك = أدواتك',
        body: 'يمنحك اشتراكك الأدوات لإدارة حجوزاتك ومدفوعاتك وعملائك وتقييماتك ورسائل العملاء.',
      },
      howItWorksCard2: {
        title: 'موظف الاستقبال الذكي = تجربة + ادفع حسب الاستخدام',
        body: 'يبدأ استخدام موظف الاستقبال الذكي بمحادثات تجريبية مشمولة، ثم يستمر بالدفع حسب الاستخدام عندما تريد المزيد.',
      },
      howItWorksCard3: {
        title: 'السوق = عمولة على العملاء الجدد فقط',
        body: 'تُطبَّق عمولة السوق فقط عندما تجلب لك ديزي عميلاً جديداً. تدفع 0% عمولة على عملائك الحاليين الخاصين بك.',
      },
      commissionTitle: '0% عمولة على عملائك الخاصين. دائماً.',
      commissionBody1:
        'علاقاتك مع عملائك تبقى لك. إذا حجز عميل عبر موقعك على ديزي بعلامتك التجارية، أو إنستغرام، أو واتساب، أو رابط الحجز المباشر، أو رمز QR، تأخذ ديزي 0% عمولة.',
      commissionBody2:
        'تُطبَّق العمولة فقط عندما تجلب لك ديزي عميلاً جديداً عبر السوق.',
      aiConversationsTitle:
        'كل خطة تشمل حوالي 50 محادثة لموظف الاستقبال الذكي',
      aiConversationsBody:
        'اختبر موظف الاستقبال الذكي مع حوالي 50 محادثة عملاء مشمولة. استخدمه للمساعدة في الإجابة عن أسئلة الحجز، واستفسارات الخدمات، وطلبات التوفر، والمتابعات أثناء انشغالك بخدمة عملائك.',
      aiCreditsFineprint:
        'مدعوم بـ 1000 رصيد ذكاء اصطناعي مشمول. بعدها، تابع باستخدام الشحن حسب الاستخدام.',
      ctaPrimary: 'ابدأ التجربة الفردية',
      ctaSecondary: 'أنشئ موقع حجوزاتك',
      finalCtaHeadline: 'هل أنت مستعد للحصول على حجوزات مع ديزي؟',
      finalCtaBody:
        'ابدأ تجربتك المجانية لمدة 14 يوماً وأنشئ موقع حجوزاتك الاحترافي.',
    },
  },
};

// ----- Add-ons (categorized, persona-aware) -----

export interface AddOnRow {
  name: string;
  price: string;
}

export interface AddOnCategory {
  title: string;
  rows: AddOnRow[];
}

export const ADD_ONS: Record<Persona, I18nContent<AddOnCategory[]>> = {
  business: {
    en: [
      {
        title: 'Capacity',
        rows: [
          { name: 'Extra User / Calendar', price: '$10 / additional calendar / month' },
          { name: 'Extra Workspace / Location', price: '$25 / additional workspace / month' },
          { name: 'Multi-Country Setup', price: '$50 / additional country / month (manual setup)' },
        ],
      },
      {
        title: 'AI Receptionist',
        rows: [
          { name: 'AI Conversation Top-Up', price: 'Pay-as-you-go with volume bonus on larger packs' },
          { name: 'Higher-Volume AI Usage', price: 'Custom pricing for high-throughput operations' },
        ],
      },
      {
        title: 'Growth',
        rows: [
          { name: 'Featured Promotion', price: 'Pay per campaign, priced at setup' },
          { name: 'Cashback Campaign', price: 'Pay per campaign — boost repeat visits' },
          { name: 'Marketplace Campaign', price: 'Pay per campaign — increased visibility inside the Daisy marketplace' },
        ],
      },
      {
        title: 'Setup',
        rows: [
          { name: 'Assisted Onboarding', price: '$100 one-time (included on top tier)' },
          { name: 'Data Migration', price: 'Free on Multi-Location, available on lower tiers' },
          { name: 'Multi-Location Setup', price: 'White-glove configuration for 3+ locations' },
        ],
      },
    ],
    ar: [
      {
        title: 'السعة',
        rows: [
          { name: 'مستخدم/تقويم إضافي', price: '10 دولارات / تقويم إضافي / شهر' },
          { name: 'مساحة عمل/موقع إضافي', price: '25 دولاراً / مساحة عمل إضافية / شهر' },
          { name: 'إعداد متعدد الدول', price: '50 دولاراً / دولة إضافية / شهر (إعداد يدوي)' },
        ],
      },
      {
        title: 'موظف الاستقبال الذكي',
        rows: [
          { name: 'شحن محادثات الذكاء الاصطناعي', price: 'ادفع حسب الاستخدام مع مكافأة حجم للحزم الأكبر' },
          { name: 'استخدام أعلى للذكاء الاصطناعي', price: 'تسعير مخصّص للعمليات عالية الإنتاج' },
        ],
      },
      {
        title: 'النمو',
        rows: [
          { name: 'إعلان مميّز', price: 'دفع لكل حملة، يُحدَّد السعر عند الإعداد' },
          { name: 'حملة كاشباك', price: 'دفع لكل حملة — تعزيز الزيارات المتكررة' },
          { name: 'حملة في السوق', price: 'دفع لكل حملة — ظهور أعلى داخل سوق ديزي' },
        ],
      },
      {
        title: 'الإعداد',
        rows: [
          { name: 'إعداد بمساعدة الفريق', price: '100 دولار مرة واحدة (مشمول في الخطة العليا)' },
          { name: 'نقل البيانات', price: 'مجاني على متعدد المواقع، متاح على الخطط الأدنى' },
          { name: 'إعداد متعدد المواقع', price: 'إعداد شامل لـ 3 مواقع أو أكثر' },
        ],
      },
    ],
  },
  professional: {
    en: [
      {
        title: 'Capacity',
        rows: [
          { name: 'Extra Calendar', price: '$10 / additional calendar / month' },
          { name: 'Extra Workspace', price: '$25 / additional workspace / month' },
        ],
      },
      {
        title: 'AI Receptionist',
        rows: [
          { name: 'AI Conversation Top-Up', price: 'Pay-as-you-go with volume bonus on larger packs' },
          { name: 'Higher-Volume AI Usage', price: 'Custom pricing if you handle very high message volume' },
        ],
      },
      {
        title: 'Growth',
        rows: [
          { name: 'Featured Promotion', price: 'Pay per campaign, priced at setup' },
          { name: 'Cashback Campaign', price: 'Pay per campaign — boost repeat visits' },
          { name: 'Marketplace Campaign', price: 'Pay per campaign — increased visibility inside the Daisy marketplace' },
        ],
      },
      {
        title: 'Setup',
        rows: [
          { name: 'Assisted Onboarding', price: '$100 one-time (included on top tier)' },
          { name: 'Profile & Service Menu Setup', price: 'White-glove setup of your branded site' },
        ],
      },
    ],
    ar: [
      {
        title: 'السعة',
        rows: [
          { name: 'تقويم إضافي', price: '10 دولارات / تقويم إضافي / شهر' },
          { name: 'مساحة عمل إضافية', price: '25 دولاراً / مساحة عمل إضافية / شهر' },
        ],
      },
      {
        title: 'موظف الاستقبال الذكي',
        rows: [
          { name: 'شحن محادثات الذكاء الاصطناعي', price: 'ادفع حسب الاستخدام مع مكافأة حجم للحزم الأكبر' },
          { name: 'استخدام أعلى للذكاء الاصطناعي', price: 'تسعير مخصّص إذا كنت تتعامل مع حجم رسائل عالٍ جداً' },
        ],
      },
      {
        title: 'النمو',
        rows: [
          { name: 'إعلان مميّز', price: 'دفع لكل حملة، يُحدَّد السعر عند الإعداد' },
          { name: 'حملة كاشباك', price: 'دفع لكل حملة — تعزيز الزيارات المتكررة' },
          { name: 'حملة في السوق', price: 'دفع لكل حملة — ظهور أعلى داخل سوق ديزي' },
        ],
      },
      {
        title: 'الإعداد',
        rows: [
          { name: 'إعداد بمساعدة الفريق', price: '100 دولار مرة واحدة (مشمول في الخطة العليا)' },
          { name: 'إعداد الملف الشخصي وقائمة الخدمات', price: 'إعداد شامل لموقعك بعلامتك التجارية' },
        ],
      },
    ],
  },
};

// ----- FAQ — shared list with one persona-specific item appended -----

export interface FAQItem {
  question: string;
  answer: string;
}

export const SHARED_FAQ: I18nContent<FAQItem[]> = {
  en: [
    {
      question: 'Do I Pay Commission on My Existing Clients?',
      answer:
        'No. Daisy charges 0% commission on your existing clients. If customers book through your branded booking site, direct link, QR code, WhatsApp, Instagram, or your own marketing channels, there is no Daisy commission. Commission only applies when Daisy brings you a new customer through the marketplace.',
    },
    {
      question: 'What Are AI Receptionist Conversations?',
      answer:
        'AI receptionist conversations are customer conversations handled with AI support, such as service questions, booking inquiries, availability requests, follow-ups, and common customer questions.',
    },
    {
      question: 'What Happens After My Included AI Conversations Are Used?',
      answer:
        'You can continue using the AI receptionist through pay-as-you-go top-ups. Daisy will show the cost before you buy additional usage.',
    },
    {
      question: 'Is Marketplace Visibility Guaranteed?',
      answer:
        'Marketplace visibility is available after a quality review. This helps Daisy maintain a trusted marketplace for customers looking for reliable beauty, wellness, and service providers.',
    },
    {
      question: 'Do I Need a Credit Card to Start?',
      answer:
        'You can start the 14-day trial without a credit card. A card is only required to activate AI receptionist credits, process payments, or continue after the trial.',
    },
    {
      question: 'Are Payment Processing Fees Included?',
      answer:
        'Payment processing fees are separate from your Daisy subscription and depend on the payment provider used for your account. Applicable fees are shown before payments are activated.',
    },
  ],
  ar: [
    {
      question: 'هل أدفع عمولة على عملائي الحاليين؟',
      answer:
        'لا. تأخذ ديزي 0% عمولة على عملائك الحاليين. إذا حجز العملاء عبر موقع حجوزاتك بعلامتك التجارية، أو رابط مباشر، أو رمز QR، أو واتساب، أو إنستغرام، أو قنواتك التسويقية الخاصة، فلا توجد عمولة لديزي. تُطبَّق العمولة فقط عندما تجلب لك ديزي عميلاً جديداً عبر السوق.',
    },
    {
      question: 'ما هي محادثات موظف الاستقبال الذكي؟',
      answer:
        'محادثات موظف الاستقبال الذكي هي محادثات العملاء التي يتم التعامل معها بدعم الذكاء الاصطناعي، مثل أسئلة الخدمات، واستفسارات الحجز، وطلبات التوفر، والمتابعات، وأسئلة العملاء الشائعة.',
    },
    {
      question: 'ماذا يحدث بعد استنفاد محادثات الذكاء الاصطناعي المشمولة؟',
      answer:
        'يمكنك متابعة استخدام موظف الاستقبال الذكي عبر الشحن حسب الاستخدام. ستعرض لك ديزي التكلفة قبل شراء استخدام إضافي.',
    },
    {
      question: 'هل الظهور في السوق مضمون؟',
      answer:
        'الظهور في السوق متاح بعد مراجعة جودة. يساعد ذلك ديزي في الحفاظ على سوق موثوق للعملاء الذين يبحثون عن مقدّمي خدمات جمال وعافية موثوقين.',
    },
    {
      question: 'هل أحتاج بطاقة ائتمان للبدء؟',
      answer:
        'يمكنك بدء التجربة لمدة 14 يوماً بدون بطاقة ائتمان. تُطلب البطاقة فقط لتفعيل أرصدة موظف الاستقبال الذكي، أو معالجة المدفوعات، أو المتابعة بعد التجربة.',
    },
    {
      question: 'هل رسوم معالجة المدفوعات مشمولة؟',
      answer:
        'رسوم معالجة المدفوعات منفصلة عن اشتراك ديزي وتعتمد على مزود الدفع المستخدم لحسابك. تُعرض الرسوم المطبّقة قبل تفعيل المدفوعات.',
    },
  ],
};

export const BUSINESS_ONLY_FAQ: I18nContent<FAQItem> = {
  en: {
    question: 'Can I Add More Team Members or Locations?',
    answer:
      'Yes. You can add extra users, calendars, workspaces, or locations depending on your plan. Larger businesses can contact Daisy for a custom setup.',
  },
  ar: {
    question: 'هل يمكنني إضافة المزيد من أعضاء الفريق أو المواقع؟',
    answer:
      'نعم. يمكنك إضافة مستخدمين، أو تقاويم، أو مساحات عمل، أو مواقع إضافية وفقاً لخطتك. يمكن للأعمال الأكبر التواصل مع ديزي لإعداد مخصّص.',
  },
};

export const PROFESSIONAL_ONLY_FAQ: I18nContent<FAQItem> = {
  en: {
    question: 'Is Daisy Suitable If I Work Alone?',
    answer:
      'Yes. Daisy is designed for solo professionals who want a professional booking site, easier appointment management, customer messaging, payments, reviews, and growth tools.',
  },
  ar: {
    question: 'هل ديزي مناسبة إذا كنت أعمل بمفردي؟',
    answer:
      'نعم. صُممت ديزي للمحترفين المستقلين الذين يريدون موقع حجوزات احترافي، وإدارة مواعيد أسهل، ومراسلات للعملاء، ومدفوعات، وتقييمات، وأدوات نمو.',
  },
};
