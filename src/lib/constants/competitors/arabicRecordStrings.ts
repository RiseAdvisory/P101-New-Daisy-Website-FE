/**
 * Arabic for the competitor-record fields that the Arabic records inherit
 * from English.
 *
 * Each *.ar.ts builder does `{ ...englishRecord, ...overrides }` and only
 * overrides prose fields (strengths, weaknesses, FAQ, descriptions). So
 * `pricing` and `headquarters` came through in English onto every Arabic
 * comparison page: "$30/mo", "Pleasanton, CA, USA", "Payment processing fees".
 *
 * Many of these strings repeat across competitors, so they are translated once
 * here and applied in each builder. When an English value changes and has no
 * entry here, it renders in English - and the Arabic render test
 * (src/lib/i18n/__tests__/arabicPagesRenderArabic.test.tsx) fails, so add the
 * translation here.
 *
 * Competitors' own plan names (Premier, Booksy Biz, Ultimate...) are product
 * names and stay in Latin script, as Fresha's "Independent" and "Team" do.
 * Only descriptive tier labels are translated.
 */
import type { CompetitorData, PricingTier } from './competitorData';

const HEADQUARTERS: Record<string, string> = {
  'Amsterdam, Netherlands': 'أمستردام، هولندا',
  'Auckland, New Zealand': 'أوكلاند، نيوزيلندا',
  'Austin, TX, USA': 'أوستن، تكساس، الولايات المتحدة',
  'Bellevue, WA, USA': 'بلفيو، واشنطن، الولايات المتحدة',
  'Dubai, UAE': 'دبي، الإمارات',
  'Dublin, Ireland': 'دبلن، أيرلندا',
  'Houston, TX, USA': 'هيوستن، تكساس، الولايات المتحدة',
  'Limassol, Cyprus': 'ليماسول، قبرص',
  'London, UK': 'لندن، المملكة المتحدة',
  'Los Angeles, CA, USA': 'لوس أنجلوس، كاليفورنيا، الولايات المتحدة',
  'Miami, FL, USA': 'ميامي، فلوريدا، الولايات المتحدة',
  'Mumbai, India': 'مومباي، الهند',
  'New Delhi, India': 'نيودلهي، الهند',
  'New Jersey, USA': 'نيوجيرسي، الولايات المتحدة',
  'New York, NY, USA': 'نيويورك، الولايات المتحدة',
  'New York, USA (Squarespace)': 'نيويورك، الولايات المتحدة (Squarespace)',
  'Paris, France': 'باريس، فرنسا',
  'Pleasanton, CA, USA': 'بليزانتون، كاليفورنيا، الولايات المتحدة',
  'Portland, OR, USA': 'بورتلاند، أوريغون، الولايات المتحدة',
  'Raleigh, NC, USA': 'رالي، كارولاينا الشمالية، الولايات المتحدة',
  'Pune, India': 'بونه، الهند',
  'Riyadh, Saudi Arabia': 'الرياض، السعودية',
  'San Francisco, CA, USA': 'سان فرانسيسكو، كاليفورنيا، الولايات المتحدة',
  'San Luis Obispo, CA, USA': 'سان لويس أوبيسبو، كاليفورنيا، الولايات المتحدة',
  'Warsaw, Poland (US HQ: Chicago)': 'وارسو، بولندا (المقر الأمريكي: شيكاغو)',
};

/** Descriptive tier labels. Product plan names are deliberately absent. */
const TIER_LABELS: Record<string, string> = {
  '+1 Staff': '+1 موظف',
  Custom: 'مخصص',
  Free: 'مجاني',
  'Per location': 'لكل موقع',
  'Per user': 'لكل مستخدم',
};

/** Whole strings: pricing labels and the "costs that add up on top" lines. */
const EXACT: Record<string, string> = {
  'Commission-based': 'قائم على العمولة',
  'Contact for pricing': 'تواصل لمعرفة السعر',
  Custom: 'مخصص',
  Free: 'مجاني',
  'Quote-based': 'حسب عرض السعر',
  'Pricing on request': 'السعر عند الطلب',
  'Subscription + reduced commission': 'اشتراك + عمولة مخفّضة',
  'Up to 35% per booking': 'حتى 35% لكل حجز',

  '$10/month per additional staff calendar': '$10 شهرياً لكل تقويم موظف إضافي',
  'AI features only in Platinum tier ($148/mo)':
    'ميزات الذكاء الاصطناعي في باقة Platinum فقط ($148 شهرياً)',
  'AI features only in Premier+ tiers ($295+/mo)':
    'ميزات الذكاء الاصطناعي في باقات Premier وما فوقها فقط ($295+ شهرياً)',
  'AI features only in higher tier': 'ميزات الذكاء الاصطناعي في الباقة الأعلى فقط',
  'Add-on feature costs': 'تكاليف الميزات الإضافية',
  'Advanced features may require higher plans': 'قد تتطلب الميزات المتقدمة باقات أعلى',
  'Basic support': 'دعم أساسي',
  'Features are add-on modules, costs accumulate': 'الميزات وحدات إضافية، وتتراكم التكاليف',
  'Forms add-on': 'إضافة النماذج',
  'Hardware costs': 'تكاليف الأجهزة',
  'Hardware costs for POS': 'تكاليف أجهزة نقاط البيع',
  'Implementation fees': 'رسوم التطبيق',
  'Limited advanced features': 'ميزات متقدمة محدودة',
  'Limited beauty-specific features': 'ميزات محدودة خاصة بقطاع التجميل',
  'Limited business management in basic tier': 'إدارة أعمال محدودة في الباقة الأساسية',
  'Limited features': 'ميزات محدودة',
  'Limited features in free tier': 'ميزات محدودة في الباقة المجانية',
  'Limited marketing tools': 'أدوات تسويق محدودة',
  'Limited operations features, may need separate software':
    'ميزات تشغيل محدودة، وقد تحتاج إلى برنامج منفصل',
  'Limited transparency on full pricing': 'شفافية محدودة في التسعير الكامل',
  'Marketplace commission on bookings': 'عمولة السوق على الحجوزات',
  'Opaque higher-tier pricing': 'تسعير غير واضح للباقات الأعلى',
  'Opaque pricing': 'تسعير غير واضح',
  'Opaque pricing, requires sales contact': 'تسعير غير واضح، يتطلب التواصل مع المبيعات',
  'Payment processing': 'معالجة المدفوعات',
  'Payment processing fees': 'رسوم معالجة المدفوعات',
  'Payment processing fees on all transactions': 'رسوم معالجة المدفوعات على جميع المعاملات',
  'Per-barber pricing': 'تسعير لكل حلاق',
  'Per-provider pricing scales with team size': 'التسعير لكل مقدّم خدمة يرتفع مع حجم الفريق',
  'Per-staff costs scale quickly': 'تكاليف كل موظف ترتفع بسرعة',
  'Per-user pricing scales': 'التسعير لكل مستخدم يرتفع مع النمو',
  'Per-user pricing scales with team': 'التسعير لكل مستخدم يرتفع مع حجم الفريق',
  'Premium marketplace placement costs': 'تكاليف الظهور المميز في السوق',
  'Premium placement fees': 'رسوم الظهور المميز',
  'Premium pricing': 'تسعير مرتفع',
  'Premium pricing for premium market': 'تسعير مرتفع لسوق الفئة العليا',
  'SMS costs': 'تكاليف الرسائل النصية',
  'SMS costs extra': 'الرسائل النصية بتكلفة إضافية',
  'SMS marketing campaigns: €0.07 excl. VAT per SMS':
    'حملات التسويق بالرسائل النصية: €0.07 لكل رسالة دون ضريبة القيمة المضافة',
  'SMS/messaging costs': 'تكاليف الرسائل النصية والمراسلة',
  'Setup and onboarding fees for higher tiers': 'رسوم الإعداد والتهيئة للباقات الأعلى',
  'Staff & Owners App: SAR 10 per employee per month':
    'تطبيق الموظفين والملاك: SAR 10 لكل موظف شهرياً',
  'Team features only in highest tier': 'ميزات الفريق في الباقة الأعلى فقط',
  'Text marketing add-on costs': 'تكاليف إضافة التسويق بالرسائل النصية',
  'Transaction fees on all Square payments': 'رسوم معاملات على جميع مدفوعات Square',
  'Very basic features': 'ميزات أساسية جداً',
  'Very basic, beauty businesses need additional tools': 'أساسي جداً، وتحتاج أعمال التجميل إلى أدوات إضافية',
  'Very high commission rates': 'نسب عمولة مرتفعة جداً',
  'Very high monthly cost for the feature set': 'تكلفة شهرية مرتفعة جداً مقارنة بالميزات',
  'Website and self-service kiosk add-ons, priced on request':
    'إضافتا الموقع الإلكتروني وجهاز الخدمة الذاتية، السعر عند الطلب',
  'Website builder add-on': 'إضافة منشئ المواقع',

  // Mindbody and Zenoti, as each publishes them (read 2026-10-09).
  'From $79/mo per location (US)': 'من $79 شهرياً لكل موقع (الولايات المتحدة)',
  'Processing rate plus a fixed $0.10 to $0.30 per transaction with Mindbody Payments (North America and Asia)':
    'نسبة معالجة يُضاف إليها رسم ثابت من $0.10 إلى $0.30 لكل معاملة عبر Mindbody Payments (أمريكا الشمالية وآسيا)',
  "20% of a new client's first purchase through the Mindbody app, capped at $30":
    '20% من أول عملية شراء لعميل جديد يصل عبر تطبيق Mindbody، بحد أقصى $30',
  "Premium add-ons, such as the branded app, AI Concierge and email and text marketing, when your plan doesn't include them":
    'إضافات مدفوعة مثل التطبيق الذي يحمل علامتك وAI Concierge والتسويق بالبريد الإلكتروني والرسائل النصية، إذا لم تكن ضمن باقتك',
  'Data transfer service when you switch to Mindbody (fees may apply)':
    'خدمة نقل البيانات عند الانتقال إلى Mindbody (قد تُفرض عليها رسوم)',
  'Premium implementation, custom data conversion and Technical Account Management, priced separately':
    'التطبيق المتقدم وتحويل البيانات المخصص وإدارة الحساب التقنية، وتُسعَّر بشكل منفصل',
  'Voice, SMS and messaging usage, billed by consumption with optional base packs':
    'استخدام المكالمات الصوتية والرسائل النصية والمراسلة، ويُحتسب حسب الاستهلاك مع باقات أساسية اختيارية',
  'AI agents need the AI Plus package': 'وكلاء الذكاء الاصطناعي يتطلبون باقة AI Plus',
  // Acuity Scheduling, Setmore, SimplyBook.me and SQUIRE (verified 2026-10-09)
  '$16/mo billed annually': '$16 شهرياً عند الدفع السنوي',
  '$20/mo, or $16/mo billed annually': '$20 شهرياً، أو $16 شهرياً عند الدفع السنوي',
  '$34/mo, or $27/mo billed annually': '$34 شهرياً، أو $27 شهرياً عند الدفع السنوي',
  '$61/mo, or $49/mo billed annually': '$61 شهرياً، أو $49 شهرياً عند الدفع السنوي',
  'Card processing fees from Stripe, Square or PayPal (Acuity adds no payment fee of its own)':
    'رسوم معالجة البطاقات لدى Stripe أو Square أو PayPal (لا يضيف Acuity رسوماً خاصة به على المدفوعات)',
  'Prices exclude applicable taxes': 'الأسعار لا تشمل الضرائب المطبقة',
  'Free (paid from $5/mo per user, billed annually)':
    'مجاني (الباقات المدفوعة من $5 شهرياً لكل مستخدم عند الدفع السنوي)',
  '$12/mo per user, or $5/mo per user billed annually':
    '$12 شهرياً لكل مستخدم، أو $5 شهرياً لكل مستخدم عند الدفع السنوي',
  'Live Receptionist (human call answering, US only): $99/mo add-on':
    'خدمة Live Receptionist (رد بشري على المكالمات، في الولايات المتحدة فقط): إضافة بـ $99 شهرياً',
  'Extra SMS credits beyond the 500 a month per Pro user, bought in-app':
    'رصيد رسائل نصية إضافي يتجاوز 500 رسالة شهرياً لكل مستخدم في باقة Pro، يُشترى من داخل التطبيق',
  'Free (paid from $11.9/mo billed annually)':
    'مجاني (الباقات المدفوعة من $11.9 شهرياً عند الدفع السنوي)',
  '$13.9/mo, or $11.9/mo billed annually': '$13.9 شهرياً، أو $11.9 شهرياً عند الدفع السنوي',
  '$29.9/mo, or $24.9/mo billed annually': '$29.9 شهرياً، أو $24.9 شهرياً عند الدفع السنوي',
  '$59.9/mo, or $49.9/mo billed annually': '$59.9 شهرياً، أو $49.9 شهرياً عند الدفع السنوي',
  'SMS credits: $8 per 100': 'رصيد الرسائل النصية: $8 لكل 100',
  'WhatsApp credits: $8 per 100': 'رصيد رسائل واتساب: $8 لكل 100',
  'AI Voice Booking credits: $8 per 100': 'رصيد الحجز الصوتي بالذكاء الاصطناعي (AI Voice Booking): $8 لكل 100',
  'Extra bookings: $4 per 100': 'حجوزات إضافية: $4 لكل 100',
  '$150/mo per shop': '$150 شهرياً لكل محل',
  '$250/mo per shop': '$250 شهرياً لكل محل',
  'Operator AI phone answering: $99/mo add-on (listed on the Executive plan)':
    'الرد الهاتفي بالذكاء الاصطناعي Operator: إضافة بـ $99 شهرياً (مدرجة في باقة Executive)',
  'Branded website and landing pages: $25/mo add-on (listed on the Executive plan)':
    'موقع وصفحات هبوط تحمل علامتك: إضافة بـ $25 شهرياً (مدرجة في باقة Executive)',
};

/**
 * Price and fee strings follow a few patterns ("$30/mo", "~$49/mo per user",
 * "Free (paid from $29/mo)", "2.6% + $0.10 per transaction"), so they are
 * rewritten by rule rather than listed one by one. Amounts and currency
 * symbols are kept as published.
 */
function arabicPriceText(s: string): string {
  return s
    .replace(/\/mo each\b/g, ' شهرياً لكل منها')
    .replace(/\/mo per location\b/g, ' شهرياً لكل موقع')
    .replace(/\/mo per user\b/g, ' شهرياً لكل مستخدم')
    .replace(/\/mo\b/g, ' شهرياً')
    .replace(/ per user\b/g, ' لكل مستخدم')
    .replace(/ per transaction\b/g, ' لكل معاملة')
    .replace(/ per booking\b/g, ' لكل حجز')
    .replace(/^Free \(paid from (.+)\)$/, 'مجاني (الباقات المدفوعة من $1)')
    .replace(/^Commission-based \(up to (.+)\)$/, 'قائم على العمولة (حتى $1)')
    .replace(/^Custom \((.+)\)$/, 'مخصص ($1)')
    .replace(/^From /, 'من ');
}

/** Arabic for one inherited English value; Arabic input passes through. */
export function toArabicRecordText(s: string): string {
  if (!s) return s;
  return EXACT[s] ?? arabicPriceText(s);
}

function arabicTier(tier: PricingTier): PricingTier {
  return {
    ...tier,
    name: TIER_LABELS[tier.name] ?? tier.name,
    price: tier.price ? toArabicRecordText(tier.price) : tier.price,
  };
}

/** Translate the inherited English fields of an Arabic competitor record. */
export function localizeRecordToArabic(record: CompetitorData): CompetitorData {
  const pricing = record.pricing;
  return {
    ...record,
    headquarters: record.headquarters
      ? HEADQUARTERS[record.headquarters] ?? record.headquarters
      : record.headquarters,
    pricing: {
      ...pricing,
      startingPrice: toArabicRecordText(pricing.startingPrice),
      transactionFees: pricing.transactionFees
        ? toArabicRecordText(pricing.transactionFees)
        : pricing.transactionFees,
      commissionOnMarketplace: pricing.commissionOnMarketplace
        ? toArabicRecordText(pricing.commissionOnMarketplace)
        : pricing.commissionOnMarketplace,
      hiddenCosts: pricing.hiddenCosts.map(toArabicRecordText),
      tiers: pricing.tiers.map(arabicTier),
    },
  };
}
