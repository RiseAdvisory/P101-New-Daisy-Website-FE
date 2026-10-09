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
  'Oakland, CA, USA': 'أوكلاند، كاليفورنيا، الولايات المتحدة',
  'Paris, France': 'باريس، فرنسا',
  'Pleasanton, CA, USA': 'بليزانتون، كاليفورنيا، الولايات المتحدة',
  'Portland, OR, USA': 'بورتلاند، أوريغون، الولايات المتحدة',
  'Raleigh, NC, USA': 'رالي، كارولاينا الشمالية، الولايات المتحدة',
  'Pune, India': 'بونه، الهند',
  'Riyadh, Saudi Arabia': 'الرياض، السعودية',
  'San Francisco, CA, USA': 'سان فرانسيسكو، كاليفورنيا، الولايات المتحدة',
  'San Luis Obispo, CA, USA': 'سان لويس أوبيسبو، كاليفورنيا، الولايات المتحدة',
  'Warsaw, Poland (US HQ: Chicago)': 'وارسو، بولندا (المقر الأمريكي: شيكاغو)',
  'Wellington, New Zealand': 'ويلينغتون، نيوزيلندا',
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
  'Pricing on request': 'السعر عند الطلب',
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
  // GlossGenius (glossgenius.com/pricing, genius.ai/reception), read 2026-10-09.
  '$28/mo ($24/mo billed annually)': '$28 شهرياً ($24 شهرياً عند الدفع السنوي)',
  '$56/mo ($48/mo billed annually)': '$56 شهرياً ($48 شهرياً عند الدفع السنوي)',
  '$168/mo ($148/mo billed annually)': '$168 شهرياً ($148 شهرياً عند الدفع السنوي)',
  'Reception (AI receptionist): $50/mo from 1 December 2026, with 100 minutes and 200 texts; $0.50 per extra minute and $0.05 per extra text':
    'Reception (موظف الاستقبال الذكي): $50 شهرياً اعتباراً من 1 ديسمبر 2026، وتشمل 100 دقيقة و200 رسالة نصية، ثم $0.50 لكل دقيقة إضافية و$0.05 لكل رسالة إضافية',
  'Payroll add-on: $40/mo plus $6 per seat': 'إضافة الرواتب (Payroll): $40 شهرياً إضافة إلى $6 لكل مستخدم',
  'Instant payouts: 1.8% fee': 'التحويل الفوري للمدفوعات: رسوم بنسبة 1.8%',
  'Each additional location: the plan price less 15%': 'كل موقع إضافي: سعر الباقة مع خصم 15%',
  // Boulevard (joinblvd.com/pricing, joinblvd.com/features/ai-receptionist), read 2026-10-09.
  '$159/mo ($143/mo billed annually)': '$159 شهرياً ($143 شهرياً عند الدفع السنوي)',
  '$325/mo per location ($293/mo billed annually)':
    '$325 شهرياً لكل موقع ($293 شهرياً عند الدفع السنوي)',
  '$455/mo per location ($410/mo billed annually)':
    '$455 شهرياً لكل موقع ($410 شهرياً عند الدفع السنوي)',
  'Pricing on request': 'السعر عند الطلب',
  'From 2.65% per card transaction (as low as 1% with Boulevard Offset)':
    'من 2.65% لكل معاملة بالبطاقة (وقد تنخفض إلى 1% مع برنامج Boulevard Offset)',
  'Beau AI receptionist: $125/mo per location for 200 minutes, then $0.60 per minute':
    'موظف الاستقبال الذكي Beau: $125 شهرياً لكل موقع مقابل 200 دقيقة، ثم $0.60 لكل دقيقة',
  'Automated campaigns: $2 per completed appointment': 'الحملات المؤتمتة: $2 لكل موعد مكتمل',
  'Forms add-on: from $65/mo per location (included in Prestige)':
    'إضافة النماذج: من $65 شهرياً لكل موقع (مشمولة في باقة Prestige)',
  'Email blasts beyond the plan allowance: $0.01 per email':
    'رسائل البريد الإلكتروني الجماعية بعد الحصة المشمولة في الباقة: $0.01 لكل رسالة',
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
  // Square Appointments, Mangomint, Phorest and Timely (vendor pages read 2026-10-09).
  'Square Free (US): 2.6% + 15¢ in person, 3.3% + 30¢ online':
    'Square Free (الولايات المتحدة): 2.6% + 15¢ للدفع الحضوري، و3.3% + 30¢ للدفع أونلاين',
  'Square Plus text marketing: 500 texts a month included, then 3¢ per text (US)':
    'التسويق بالرسائل النصية في Square Plus: 500 رسالة شهرياً مشمولة، ثم 3¢ لكل رسالة (الولايات المتحدة)',
  'Keyed or card-on-file payments: 3.5% + 15¢ (US)':
    'الدفع بإدخال رقم البطاقة يدوياً أو ببطاقة محفوظة: 3.5% + 15¢ (الولايات المتحدة)',
  'Cards issued outside the US: an extra 1.5%': 'البطاقات الصادرة خارج الولايات المتحدة: 1.5% إضافية',
  'Square hardware from $59 (US)': 'أجهزة Square تبدأ من $59 (الولايات المتحدة)',
  '2.45% + 15¢ in person, 2.90% + 30¢ for virtual payments':
    '2.45% + 15¢ للدفع الحضوري، و2.90% + 30¢ للدفع عن بُعد',
  'Phone add-on: $70/mo per line': 'إضافة الهاتف: $70 شهرياً لكل خط',
  'Marketing add-on: from $30/mo for 3,500 credits': 'إضافة التسويق: من $30 شهرياً مقابل 3,500 رصيد',
  'Payroll add-on: $50/mo + $8 per worker': 'إضافة الرواتب: $50 شهرياً + $8 لكل موظف',
  'UK SMS: 9.5p per message on Starter, 8.2p on Grow, 7p on Ultimate; 500 free a month on Elite':
    'الرسائل النصية في المملكة المتحدة: 9.5 بنس للرسالة في Starter، و8.2 بنس في Grow، و7 بنسات في Ultimate، و500 رسالة مجانية شهرياً في Elite',
  'Front Desk AI is an add-on, priced on request': 'Front Desk AI إضافة مدفوعة، وسعرها عند الطلب',
  'From $9/mo (Base, one staff member)': 'من $9 شهرياً (Base، لموظف واحد)',
  '$9/mo, one staff member only': '$9 شهرياً، لموظف واحد فقط',
  '$26/mo, then $24 per extra staff': '$26 شهرياً، ثم $24 لكل موظف إضافي',
  '$39/mo, then $29 per extra staff': '$39 شهرياً، ثم $29 لكل موظف إضافي',
  '$47/mo, then $36 per extra staff': '$47 شهرياً، ثم $36 لكل موظف إضافي',
  'SMS beyond the monthly allowance: 5¢ each (US)':
    'الرسائل النصية الزائدة عن الحصة الشهرية: 5¢ للرسالة (الولايات المتحدة)',
  'Targeted SMS campaigns: 5¢ per SMS on Elevate and Innovate (US)':
    'حملات الرسائل النصية الموجّهة: 5¢ للرسالة في Elevate وInnovate (الولايات المتحدة)',
  'Card processing fees on Timely payments': 'رسوم معالجة البطاقات على مدفوعات Timely',
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
