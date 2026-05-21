/**
 * Shared content for the redesigned pricing page (/pricing-v2).
 * Bilingual via the existing I18nContent + t() pattern so the page can
 * render in both English (default) and Arabic (RTL).
 * Source of truth for plan structure: Notion spec Doc #84.
 */

import { I18nContent } from '../../i18n';

export type Persona = 'business' | 'professional';

export interface FeatureCategoryRow {
  name: string;
  note?: string;
  // For each tier index (0, 1, 2): undefined = not included, true = included,
  // string = included with detail (e.g. "3 posts" or "Unlimited")
  values: (boolean | string | undefined)[];
}

export interface FeatureCategory {
  title: string;
  rows: FeatureCategoryRow[];
}

export interface AddOnRow {
  name: string;
  price: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AICreditsContent {
  eyebrow: string;
  headline: string;
  body: string;
  badges: string[];
}

export interface CommissionContent {
  eyebrow: string;
  headline: string;
  body: string;
  fineprint: string;
}

/**
 * Static UI labels that aren't tied to plan data (headers, CTAs, helper text).
 */
export interface UIStrings {
  heroHeadline: string;
  heroSubtitle: string;
  personaToggleBusiness: string;
  personaToggleProfessional: string;
  billingMonthly: string;
  billingAnnual: string;
  twoMonthsFreeBadge: string;
  mostPopularBadge: string;
  cardCtaLabel: string;
  // Billing copy is split into two separate lines (each rendered on its
  // own row) so the card height stays constant when toggling monthly /
  // annual — the previous single-string version had different lengths
  // and word-wrapped to different heights between modes, causing the
  // cards to expand and contract.
  cardBilledMonthlyLine1: string;
  cardBilledMonthlyLine2: string;
  cardBilledAnnuallyLine1: (annualTotal: number) => string;
  // Line 2 in annual mode comes from `tier.annualSavingsLine` directly.
  cardPerMonth: string;
  marketplaceFootnote: string;
  compareHeading: string;
  compareSubheading: string;
  compareFeatureHeader: string;
  compareSwipeHint: string;
  addOnsHeading: string;
  addOnsSubheading: string;
  faqHeading: string;
  // Cross-link label depends on the OTHER persona
  crossLinkToProfessional: string;
  crossLinkToBusiness: string;
  finalCtaHeadline: string;
  finalCtaBody: string;
  finalCtaButton: string;
}

export const UI_STRINGS: I18nContent<UIStrings> = {
  en: {
    heroHeadline: 'Pricing That Grows With Your Business',
    heroSubtitle:
      'Pick the plan that matches your scale today. Move up or stay as you grow. Every plan starts with 1,000 free AI credits and a 14-day free trial.',
    personaToggleBusiness: 'For Business',
    personaToggleProfessional: 'For Solo Professional',
    billingMonthly: 'Monthly',
    billingAnnual: 'Annual',
    twoMonthsFreeBadge: '2 Months Free',
    mostPopularBadge: 'Most Popular',
    cardCtaLabel: 'Start Free Trial',
    cardBilledMonthlyLine1: 'Billed monthly.',
    cardBilledMonthlyLine2: 'Cancel anytime.',
    cardBilledAnnuallyLine1: (annualTotal) => `Billed annually at $${annualTotal}.`,
    cardPerMonth: '/ month',
    marketplaceFootnote:
      '* Marketplace visibility and cashback promotions require a service-quality review.',
    compareHeading: 'Compare Every Feature',
    compareSubheading: 'Every feature, every tier, side by side.',
    compareFeatureHeader: 'Feature',
    compareSwipeHint: 'Swipe to compare tiers →',
    addOnsHeading: 'Add-Ons',
    addOnsSubheading:
      'Extra capacity and one-off services, billed alongside your subscription.',
    faqHeading: 'Frequently Asked Questions',
    crossLinkToProfessional: 'Solo Professional? See Professional Pricing →',
    crossLinkToBusiness: 'Have a Team? See Business Pricing →',
    finalCtaHeadline: 'Ready To Grow With The Daisy?',
    finalCtaBody:
      'Start your 14-day free trial. No credit card required to try the platform; only required to unlock your 1,000 free AI credits.',
    finalCtaButton: 'Start Free Trial',
  },
  ar: {
    heroHeadline: 'أسعار تنمو مع نمو أعمالك',
    heroSubtitle:
      'اختر الباقة التي تناسب حجم أعمالك اليوم. ارتقِ أو ابقَ كما تشاء مع نموك. كل باقة تبدأ بـ 1000 رصيد ذكاء اصطناعي مجاني وتجربة مجانية لمدة 14 يوماً.',
    personaToggleBusiness: 'للأعمال',
    personaToggleProfessional: 'للمحترف المستقل',
    billingMonthly: 'شهري',
    billingAnnual: 'سنوي',
    twoMonthsFreeBadge: 'شهران مجاناً',
    mostPopularBadge: 'الأكثر شعبية',
    cardCtaLabel: 'ابدأ تجربتك المجانية',
    cardBilledMonthlyLine1: 'فوترة شهرية.',
    cardBilledMonthlyLine2: 'ألغِ في أي وقت.',
    cardBilledAnnuallyLine1: (annualTotal) =>
      `فوترة سنوية بقيمة $${annualTotal}.`,
    cardPerMonth: '/ شهرياً',
    marketplaceFootnote:
      '* يتطلب الظهور في السوق وعروض الكاشباك مراجعة لجودة الخدمة.',
    compareHeading: 'قارن بين كل الميزات',
    compareSubheading: 'كل ميزة، كل باقة، جنباً إلى جنب.',
    compareFeatureHeader: 'الميزة',
    compareSwipeHint: '← اسحب للمقارنة بين الباقات',
    addOnsHeading: 'الإضافات',
    addOnsSubheading: 'سعات إضافية وخدمات لمرة واحدة، تُفوتر مع اشتراكك.',
    faqHeading: 'الأسئلة الشائعة',
    crossLinkToProfessional: 'محترف مستقل؟ اطلع على أسعار المحترفين ←',
    crossLinkToBusiness: 'لديك فريق؟ اطلع على أسعار الأعمال ←',
    finalCtaHeadline: 'جاهز للنمو مع ديزي؟',
    finalCtaBody:
      'ابدأ تجربتك المجانية لمدة 14 يوماً. بدون بطاقة ائتمان لتجربة المنصة؛ تُطلب فقط لفتح أرصدة الذكاء الاصطناعي المجانية الـ 1000.',
    finalCtaButton: 'ابدأ تجربتك المجانية',
  },
};

// ----- AI Credits callout -----

export const AI_CREDITS_CALLOUT: I18nContent<AICreditsContent> = {
  en: {
    eyebrow: 'AI Built In',
    headline: 'Every Plan Starts With 1,000 Free AI Credits',
    body: 'About 50 AI Receptionist conversations to test how the AI handles your real customers on WhatsApp, Instagram, or your booking site. Worth around $100. Credit card required, but you will not be charged until you buy more credits.',
    badges: [
      'Never Expires',
      'No Subscription Tier Required',
      'Cancel Any Time Before Adding Credits',
    ],
  },
  ar: {
    eyebrow: 'الذكاء الاصطناعي مدمج',
    headline: 'كل باقة تبدأ بـ 1000 رصيد ذكاء اصطناعي مجاني',
    body: 'حوالي 50 محادثة لموظف الاستقبال الذكي لتجربة كيف يتعامل الذكاء الاصطناعي مع عملائك الفعليين على واتساب وإنستغرام وموقع الحجز الخاص بك. قيمتها حوالي 100 دولار. بطاقة الائتمان مطلوبة، لكن لن تُحسم منك أي مبالغ حتى تشتري أرصدة إضافية.',
    badges: [
      'لا تنتهي صلاحيتها',
      'لا تتطلب باقة معينة',
      'ألغِ في أي وقت قبل إضافة الأرصدة',
    ],
  },
};

// ----- Marketplace commission callout -----

export const COMMISSION_CALLOUT: I18nContent<CommissionContent> = {
  en: {
    eyebrow: 'Daisy Commission Promise',
    headline: '0% on Your Existing Clients. Always.',
    body: 'Customers booking through your branded site, your social links, or anyone you already had as a client carry zero platform fee, forever. We only earn commission on net-new customers The Daisy marketplace brings you. No exceptions.',
    fineprint:
      'Marketplace visibility eligibility is subject to a service-quality review.',
  },
  ar: {
    eyebrow: 'وعد ديزي بالعمولة',
    headline: '٠٪ على عملائك الحاليين. دائماً.',
    body: 'العملاء الذين يحجزون عبر موقعك الموسوم بعلامتك التجارية، أو روابطك على وسائل التواصل، أو أي شخص كان عميلاً لديك من قبل، بدون أي عمولة من المنصة، إلى الأبد. نحصل على عمولة فقط على العملاء الجدد الذين يجلبهم سوق ديزي إليك. بدون استثناءات.',
    fineprint: 'أهلية الظهور في السوق تخضع لمراجعة جودة الخدمة.',
  },
};

// ----- FAQ -----

export const PRICING_FAQ: I18nContent<FAQItem[]> = {
  en: [
    {
      question: 'What Are AI Credits and How Do They Work?',
      answer:
        'AI Credits power the AI Receptionist and AI automation features (WhatsApp replies, booking confirmations, follow-ups, etc.). Every plan gets 1,000 free credits on signup, enough for about 50 AI Receptionist conversations. After that you buy credit packs; larger packs come with a bonus credit %. Credits never expire.',
    },
    {
      question: 'How Much Commission Does Daisy Charge on Bookings?',
      answer:
        'Zero commission on customers you already had or who book directly via your branded site / social links. Commission only applies to net-new customers we bring you through the Daisy marketplace, and the rate is set during onboarding based on your category and country.',
    },
    {
      question: 'Can I Cancel Anytime?',
      answer:
        'Yes. Monthly plans cancel at the end of the current billing month with no refund of the in-progress month. Annual plans cancel immediately for the next renewal, but the annual fee paid in advance is non-refundable for unused months.',
    },
    {
      question: 'What About Payment Processing Fees?',
      answer:
        'Payment processing fees depend on your country and provider. Daisy passes these through at the provider\'s cost with no Daisy markup. Specific rates are confirmed during onboarding once your country and payment provider are set.',
    },
    {
      question: 'Why Is the Multi-Country Limit So Restrictive?',
      answer:
        'Each additional country requires a region-specific payment-provider setup plus ongoing compliance and tax handling on our side. The $50/country add-on covers that work; new countries are configured manually by our team, not self-serve.',
    },
    {
      question: 'What\'s the Difference Between Business and Professional Plans?',
      answer:
        'Business plans are for salons, spas, and clinics with a team: multiple staff calendars, multiple workspaces, team-aware booking. Professional plans are for solo providers: one calendar, one workspace, marketplace-discoverable. Same underlying engine, different fit.',
    },
    {
      question: 'Does Daisy Support Mobile and On-Location Services?',
      answer:
        'Yes. The platform works equally well for fixed-location businesses (salons, spas, clinics) and providers who travel to clients (mobile stylists, on-location nail techs, home wellness visits). Smart scheduling factors travel time between appointments into your calendar, and your branded booking site lets clients book service-area visits the same way they would book a studio appointment. Vendors who do both modes can manage everything in one calendar.',
    },
  ],
  ar: [
    {
      question: 'ما هي أرصدة الذكاء الاصطناعي وكيف تعمل؟',
      answer:
        'أرصدة الذكاء الاصطناعي تشغّل موظف الاستقبال الذكي وميزات الأتمتة الذكية (ردود واتساب، تأكيدات الحجوزات، المتابعات، إلخ). كل باقة تحصل على 1000 رصيد مجاني عند التسجيل، تكفي لحوالي 50 محادثة مع موظف الاستقبال الذكي. بعد ذلك تشتري باقات أرصدة؛ الباقات الأكبر تأتي مع نسبة أرصدة إضافية. الأرصدة لا تنتهي صلاحيتها.',
    },
    {
      question: 'كم تتقاضى ديزي عمولة على الحجوزات؟',
      answer:
        'صفر عمولة على العملاء الذين كانوا لديك من قبل أو الذين يحجزون مباشرة عبر موقعك الموسوم / روابط التواصل الاجتماعي. العمولة تنطبق فقط على العملاء الجدد الذين نجلبهم لك عبر سوق ديزي، ويتم تحديد النسبة أثناء الإعداد بناءً على فئتك وبلدك.',
    },
    {
      question: 'هل يمكنني الإلغاء في أي وقت؟',
      answer:
        'نعم. الباقات الشهرية تُلغى في نهاية شهر الفوترة الحالي بدون استرداد للشهر الجاري. الباقات السنوية تُلغى مباشرة بالنسبة للتجديد التالي، لكن الرسوم السنوية المدفوعة مقدماً غير قابلة للاسترداد للأشهر غير المستخدمة.',
    },
    {
      question: 'ماذا عن رسوم معالجة المدفوعات؟',
      answer:
        'رسوم معالجة المدفوعات تعتمد على بلدك ومزود الخدمة. ديزي تمرّر هذه الرسوم بسعر التكلفة من مزود الخدمة بدون أي زيادة. تُؤكد الأسعار المحددة أثناء الإعداد عند تحديد بلدك ومزود الدفع.',
    },
    {
      question: 'لماذا حد الدول المتعددة محدود جداً؟',
      answer:
        'كل دولة إضافية تتطلب إعداد مزود دفع خاص بالمنطقة بالإضافة إلى الالتزام المستمر بالامتثال ومعالجة الضرائب من جانبنا. إضافة 50 دولار/دولة تغطي هذا العمل؛ الدول الجديدة يتم تكوينها يدوياً بواسطة فريقنا، وليست خدمة ذاتية.',
    },
    {
      question: 'ما الفرق بين باقات الأعمال والمحترفين؟',
      answer:
        'باقات الأعمال للصالونات والمنتجعات والعيادات التي لديها فريق: تقاويم متعددة للموظفين، مساحات عمل متعددة، حجوزات مدركة للفريق. باقات المحترفين لمقدمي الخدمات المستقلين: تقويم واحد، مساحة عمل واحدة، قابلة للاكتشاف في السوق. نفس المحرك الأساسي، ملاءمة مختلفة.',
    },
    {
      question: 'هل تدعم ديزي الخدمات المتنقلة وخدمات الموقع؟',
      answer:
        'نعم. المنصة تعمل بنفس الكفاءة للأعمال ذات المواقع الثابتة (صالونات، منتجعات، عيادات) ومقدمي الخدمات الذين يتنقلون إلى العملاء (مصففو الشعر المتنقلون، فنيو الأظافر بزيارة الموقع، زيارات العافية المنزلية). الجدولة الذكية تأخذ في الاعتبار وقت التنقل بين المواعيد، وموقع الحجز الموسوم بعلامتك يتيح للعملاء حجز زيارات منطقة الخدمة بنفس طريقة حجز موعد في الاستوديو. المزودون الذين يعملون بالنمطين يمكنهم إدارة كل شيء في تقويم واحد.',
    },
  ],
};

// ----- Add-ons (shared between personas) -----

export const ADD_ONS: I18nContent<AddOnRow[]> = {
  en: [
    {
      name: 'AI Credit Pack (Top-Up)',
      price:
        'Pay-as-you-go with volume bonus. Larger packs earn more bonus credits.',
    },
    {
      name: 'Featured Promotion to Targeted Customers',
      price: 'Pay per campaign, priced at setup',
    },
    {
      name: 'Assisted Onboarding & Services Menu Setup',
      price: '$100 one-time (included on top tier)',
    },
    {
      name: 'Extra User / Calendar',
      price: '$10 per additional calendar / month',
    },
    {
      name: 'Extra Workspace / Location',
      price: '$25 per additional workspace / month',
    },
    {
      name: 'Multi-Country Setup',
      price: '$50 per additional country / month (configured by our team)',
    },
  ],
  ar: [
    {
      name: 'باقة أرصدة الذكاء الاصطناعي (إعادة شحن)',
      price:
        'ادفع حسب الاستخدام مع مكافأة الكمية. الباقات الأكبر تحصل على أرصدة إضافية أكثر.',
    },
    {
      name: 'ترويج مميز لعملاء مستهدفين',
      price: 'الدفع لكل حملة، يُحدد السعر عند الإعداد',
    },
    {
      name: 'إعداد مساعد وقائمة الخدمات',
      price: '100 دولار رسوم مرة واحدة (مشمولة في الباقة العليا)',
    },
    {
      name: 'مستخدم / تقويم إضافي',
      price: '10 دولارات لكل تقويم إضافي / شهرياً',
    },
    {
      name: 'مساحة عمل / موقع إضافي',
      price: '25 دولار لكل مساحة عمل إضافية / شهرياً',
    },
    {
      name: 'إعداد دول متعددة',
      price: '50 دولار لكل دولة إضافية / شهرياً (يُكوَّن بواسطة فريقنا)',
    },
  ],
};
