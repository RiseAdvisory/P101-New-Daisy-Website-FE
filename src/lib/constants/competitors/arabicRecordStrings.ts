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
  'Riyadh, Saudi Arabia': 'الرياض، السعودية',
  'San Francisco, CA, USA': 'سان فرانسيسكو، كاليفورنيا، الولايات المتحدة',
  'San Luis Obispo, CA, USA': 'سان لويس أوبيسبو، كاليفورنيا، الولايات المتحدة',
  'Warsaw, Poland (US HQ: Chicago)': 'وارسو، بولندا (المقر الأمريكي: شيكاغو)',
};

/** Descriptive tier labels. Product plan names are deliberately absent. */
const TIER_LABELS: Record<string, string> = {
  '+1 Staff': '+1 موظف',
  Custom: 'مخصص',
  'Each additional calendar': 'كل تقويم إضافي',
  'Each additional team member': 'كل عضو إضافي في الفريق',
  'One calendar': 'تقويم واحد',
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
  'Subscription + reduced commission': 'اشتراك + عمولة مخفّضة',
  'Up to 35% per booking': 'حتى 35% لكل حجز',

  // Booksy (biz.booksy.com/pricing, read 2026-10-09)
  '$29.99/mo + $20/mo per extra user (US)':
    '$29.99 شهرياً + $20 شهرياً لكل مستخدم إضافي (الولايات المتحدة)',
  '2.49% + $0.10 card reader, 2.49% + $0.20 Tap to Pay, 2.69% + $0.30 mobile and keyed-in (US)':
    '2.49% + $0.10 عبر قارئ البطاقات، و2.49% + $0.20 عبر Tap to Pay، و2.69% + $0.30 للدفع عبر الجوال والإدخال اليدوي (الولايات المتحدة)',
  "None unless you turn on Boost: then a one-time 30% of a new client's first visit, capped at $100":
    'لا عمولة ما لم تفعّل Boost، وعندها تُحتسب لمرة واحدة 30% من قيمة الزيارة الأولى للعميل الجديد، بحد أقصى $100',
  'Each additional team member adds $20/month': 'كل عضو إضافي في الفريق يضيف $20 شهرياً',
  'Card payments from 2.49% + $0.10 per transaction on the Booksy Card Reader':
    'مدفوعات البطاقات من 2.49% + $0.10 لكل معاملة عبر قارئ البطاقات من Booksy',
  "Optional Boost: one-time 30% of a new client's first visit, up to $100":
    'خدمة Boost الاختيارية: 30% لمرة واحدة من قيمة الزيارة الأولى للعميل الجديد، بحد أقصى $100',
  'Fast Payouts in 30 minutes cost 1.5%; next-business-day payouts are free':
    'التحويل السريع خلال 30 دقيقة برسوم 1.5%، والتحويل في يوم العمل التالي مجاني',
  'Card reader hardware: Stripe Reader M2 $53.10 or S710 $299, plus shipping':
    'أجهزة قراءة البطاقات: Stripe Reader M2 بسعر $53.10 أو S710 بسعر $299، إضافة إلى تكلفة الشحن',

  // Vagaro (help centre "Vagaro Plans, Pricing, and Premium Features", read 2026-10-09)
  '$23.99/mo for 1 calendar (US offer; $30/mo regular)':
    '$23.99 شهرياً لتقويم واحد (عرض في الولايات المتحدة، والسعر المعتاد $30 شهرياً)',
  '2.6% + $0.10 in person, 3.5% + $0.19 keyed-in (US small merchants)':
    '2.6% + $0.10 للدفع الحضوري، و3.5% + $0.19 للإدخال اليدوي (التجار الصغار في الولايات المتحدة)',
  "None on standard Marketplace bookings (US); Vera Fill My Books charges 20% on a new customer's first booking":
    'لا عمولة على حجوزات السوق العادية (الولايات المتحدة)، بينما تفرض ميزة Vera Fill My Books نسبة 20% على أول حجز للعميل الجديد',
  '$10/month per additional calendar, up to seven paid licences':
    '$10 شهرياً لكل تقويم إضافي، حتى سبعة تراخيص مدفوعة',
  'Monthly FANF and Mastercard location fees on card processing':
    'رسوم FANF الشهرية ورسوم الموقع من Mastercard على معالجة البطاقات',
  'Text marketing from $20/month for 1,000 credits': 'التسويق بالرسائل النصية من $20 شهرياً مقابل 1,000 رصيد',
  'Vera Receptionist $10/month, which needs a Text Marketing plan':
    'موظف الاستقبال Vera Receptionist بسعر $10 شهرياً، ويتطلب باقة للتسويق بالرسائل النصية',
  'Forms $10/month and MySite website $20/month':
    'النماذج بسعر $10 شهرياً، وموقع MySite الإلكتروني بسعر $20 شهرياً',
  'Branded app $100/month plus a $100 development fee (limited-time price)':
    'تطبيق يحمل علامتك التجارية بسعر $100 شهرياً إضافة إلى رسوم تطوير $100 (سعر لفترة محدودة)',

  '$10/month per additional staff calendar': '$10 شهرياً لكل تقويم موظف إضافي',
  'AI features only in Platinum tier ($148/mo)':
    'ميزات الذكاء الاصطناعي في باقة Platinum فقط ($148 شهرياً)',
  'AI features only in Premier+ tiers ($295+/mo)':
    'ميزات الذكاء الاصطناعي في باقات Premier وما فوقها فقط ($295+ شهرياً)',
  'AI features only in higher tier': 'ميزات الذكاء الاصطناعي في الباقة الأعلى فقط',
  'Add-on feature costs': 'تكاليف الميزات الإضافية',
  'Advanced AI features may be in higher tiers': 'قد تكون ميزات الذكاء الاصطناعي المتقدمة في باقات أعلى',
  'Advanced features may require higher plans': 'قد تتطلب الميزات المتقدمة باقات أعلى',
  'Basic support': 'دعم أساسي',
  'Contract lock-in with early termination fees': 'التزام تعاقدي مع رسوم إنهاء مبكر',
  'Custom pricing requires sales call, no transparency':
    'التسعير المخصص يتطلب اتصالاً بفريق المبيعات، دون شفافية',
  'Features are add-on modules, costs accumulate': 'الميزات وحدات إضافية، وتتراكم التكاليف',
  'Forms add-on': 'إضافة النماذج',
  'Hardware costs': 'تكاليف الأجهزة',
  'Hardware costs for POS': 'تكاليف أجهزة نقاط البيع',
  'Implementation and onboarding fees': 'رسوم التطبيق والإعداد',
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
  'Messenger[ai] AI front desk is separate add-on (~$199/mo)':
    'مكتب الاستقبال الذكي Messenger[ai] إضافة منفصلة (~$199 شهرياً)',
  'Opaque higher-tier pricing': 'تسعير غير واضح للباقات الأعلى',
  'Opaque pricing': 'تسعير غير واضح',
  'Opaque pricing, requires sales contact': 'تسعير غير واضح، يتطلب التواصل مع المبيعات',
  'Payment processing': 'معالجة المدفوعات',
  'Payment processing fees': 'رسوم معالجة المدفوعات',
  'Payment processing fees not included': 'رسوم معالجة المدفوعات غير مشمولة',
  'Payment processing fees on all transactions': 'رسوم معالجة المدفوعات على جميع المعاملات',
  'Per-barber pricing': 'تسعير لكل حلاق',
  'Per-location pricing for multi-site businesses': 'تسعير لكل موقع للأعمال متعددة الفروع',
  'Per-provider pricing scales with team size': 'التسعير لكل مقدّم خدمة يرتفع مع حجم الفريق',
  'Per-staff costs scale quickly': 'تكاليف كل موظف ترتفع بسرعة',
  'Per-user pricing scales': 'التسعير لكل مستخدم يرتفع مع النمو',
  'Per-user pricing scales with team': 'التسعير لكل مستخدم يرتفع مع حجم الفريق',
  'Premium marketplace placement costs': 'تكاليف الظهور المميز في السوق',
  'Premium marketplace placement costs extra': 'الظهور المميز في السوق بتكلفة إضافية',
  'Premium placement fees': 'رسوم الظهور المميز',
  'Premium pricing': 'تسعير مرتفع',
  'Premium pricing for premium market': 'تسعير مرتفع لسوق الفئة العليا',
  'SMS costs': 'تكاليف الرسائل النصية',
  'SMS costs extra': 'الرسائل النصية بتكلفة إضافية',
  'SMS/messaging costs': 'تكاليف الرسائل النصية والمراسلة',
  'Setup and onboarding fees for higher tiers': 'رسوم الإعداد والتهيئة للباقات الأعلى',
  'Team features only in highest tier': 'ميزات الفريق في الباقة الأعلى فقط',
  'Text marketing add-on costs': 'تكاليف إضافة التسويق بالرسائل النصية',
  'Transaction fees on all Square payments': 'رسوم معاملات على جميع مدفوعات Square',
  'Very basic features': 'ميزات أساسية جداً',
  'Very basic, beauty businesses need additional tools': 'أساسي جداً، وتحتاج أعمال التجميل إلى أدوات إضافية',
  'Very high commission rates': 'نسب عمولة مرتفعة جداً',
  'Very high monthly cost for the feature set': 'تكلفة شهرية مرتفعة جداً مقارنة بالميزات',
  'Website builder add-on': 'إضافة منشئ المواقع',
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
