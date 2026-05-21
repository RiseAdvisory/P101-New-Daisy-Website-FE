/**
 * Professional-tier pricing data for /pricing-v2 (EN + AR).
 * Source of truth: Notion spec Doc #84 — Subscription Plans (Professionals table).
 */

import { I18nContent } from '../../i18n';
import { FeatureCategory } from './pricingV2Shared';
import { PricingTierV2 } from './pricingV2Business';

export const PROFESSIONAL_TIERS: I18nContent<PricingTierV2[]> = {
  en: [
    {
      id: 'basic',
      title: 'Starter',
      oneLiner:
        'Just starting out and building a solid client base while growing your personal brand as a professional service provider.',
      monthlyPrice: 25,
      annualTotal: 250,
      annualPerMonth: 21,
      annualSavingsLine: 'Save $50 (2 Months Free)',
      cardHighlights: [
        'Solo, 1 workspace, 1 country',
        'AI Receptionist + 1,000 free credits',
        'WhatsApp + Instagram booking',
        'Marketplace visibility *',
        'Branded booking site, POS, reviews',
      ],
    },
    {
      id: 'growth',
      title: 'Professional',
      oneLiner:
        'An experienced solo professional ready to deliver exceptional client experiences and grow with marketplace visibility.',
      monthlyPrice: 50,
      annualTotal: 500,
      annualPerMonth: 42,
      annualSavingsLine: 'Save $100 (2 Months Free)',
      isMostPopular: true,
      cardHighlights: [
        'Solo, 1 workspace, 1 country',
        'Everything in Starter',
        'Online payments + cancellation policy',
        'Automated reminders & subscription packages',
        'Cashback promotions * + detailed reviews',
        'Priority customer support',
      ],
    },
    {
      id: 'business',
      title: 'Elite',
      oneLiner:
        'An established solo professional operating across multiple workspaces or countries, excellence-oriented at every client touchpoint.',
      monthlyPrice: 100,
      annualTotal: 1000,
      annualPerMonth: 84,
      annualSavingsLine: 'Save $200 (2 Months Free)',
      cardHighlights: [
        'Solo, 2 workspaces, 2 countries',
        'Everything in Professional',
        'Advanced AI Customization (tone, training, A/B)',
        'Email + WhatsApp template customization',
        'Advanced analytics & trends',
        'Free data migration + assisted onboarding',
      ],
    },
  ],
  ar: [
    {
      id: 'basic',
      title: 'المبتدئ',
      oneLiner:
        'في بداية الطريق، تبني قاعدة عملاء قوية وتنمّي علامتك الشخصية كمقدم خدمات احترافي.',
      monthlyPrice: 25,
      annualTotal: 250,
      annualPerMonth: 21,
      annualSavingsLine: 'وفّر 50 دولاراً (شهران مجاناً)',
      cardHighlights: [
        'فردي، مساحة عمل واحدة، دولة واحدة',
        'موظف استقبال ذكي + 1000 رصيد مجاني',
        'حجوزات واتساب وإنستغرام',
        'الظهور في السوق *',
        'موقع حجوزات موسوم، نقاط بيع، تقييمات',
      ],
    },
    {
      id: 'growth',
      title: 'المحترف',
      oneLiner:
        'محترف مستقل ذو خبرة جاهز لتقديم تجارب استثنائية للعملاء والنمو مع الظهور في السوق.',
      monthlyPrice: 50,
      annualTotal: 500,
      annualPerMonth: 42,
      annualSavingsLine: 'وفّر 100 دولار (شهران مجاناً)',
      isMostPopular: true,
      cardHighlights: [
        'فردي، مساحة عمل واحدة، دولة واحدة',
        'كل ما في المبتدئ',
        'مدفوعات أونلاين + سياسة إلغاء',
        'تذكيرات آلية وباقات اشتراك',
        'عروض كاشباك * + تقييمات تفصيلية',
        'دعم عملاء أولوية',
      ],
    },
    {
      id: 'business',
      title: 'النخبة',
      oneLiner:
        'محترف مستقل راسخ يعمل عبر مساحات عمل أو دول متعددة، يتبنى التميّز في كل نقطة تواصل مع عملائه.',
      monthlyPrice: 100,
      annualTotal: 1000,
      annualPerMonth: 84,
      annualSavingsLine: 'وفّر 200 دولار (شهران مجاناً)',
      cardHighlights: [
        'فردي، مساحتا عمل، دولتان',
        'كل ما في المحترف',
        'تخصيص ذكاء اصطناعي متقدم (النبرة، التدريب، A/B)',
        'تخصيص قوالب البريد وواتساب',
        'تحليلات واتجاهات متقدمة',
        'نقل بيانات وإعداد بمساعدة مجاناً',
      ],
    },
  ],
};

/**
 * Professional feature comparison — mirrors the Business categories but
 * with Professional-tier scaling (1 user across all tiers, only Elite
 * offers a 2nd workspace / country).
 */
export const PROFESSIONAL_FEATURE_CATEGORIES: I18nContent<FeatureCategory[]> = {
  en: [
    {
      title: 'Scale & Seats',
      rows: [
        { name: 'Team Members / Calendars', values: ['1', '1', '1'] },
        { name: 'Workspaces / Locations', values: ['1', '1', '2'] },
        { name: 'Countries', values: ['1', '1', '2'] },
        { name: 'Bookings per Month', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
      ],
    },
    {
      title: 'Bookings & Schedule',
      rows: [
        { name: 'Schedule Management', values: [true, true, true] },
        { name: 'Sales Management (POS)', values: [true, true, true] },
        { name: 'Client Management', values: [true, true, true] },
        { name: 'Mobile & Desktop App', values: [true, true, true] },
        { name: 'Phone Contacts Syncing', values: [true, true, true] },
        { name: 'Google Calendar Syncing', values: [true, true, true] },
        { name: 'Automated Reminders (No-Shows, Rebooking)', values: [undefined, true, true] },
        { name: 'Subscription Packages', values: [undefined, true, true] },
        { name: 'Online Payment Processing', values: [undefined, true, true] },
        { name: 'Cancellation Policy Enforcement & Fees', values: [undefined, true, true] },
      ],
    },
    {
      title: 'AI & Communication',
      rows: [
        {
          name: 'AI Receptionist on Conversations',
          note: '1,000 free credits at signup, pay-as-you-go after',
          values: [true, true, true],
        },
        { name: 'WhatsApp Business Chat Integration', values: [true, true, true] },
        { name: 'Instagram Direct Message Integration', values: [true, true, true] },
        { name: 'In-App & Email Notifications', values: [true, true, true] },
        { name: 'WhatsApp Notifications', values: [true, true, true] },
        { name: 'Email Template Customization', values: [undefined, undefined, true] },
        { name: 'WhatsApp Message Template Customization', values: [undefined, undefined, true] },
        {
          name: 'Advanced AI Customization',
          note: 'Tone & voice training, conversation fine-tuning, multi-language, A/B testing',
          values: [undefined, undefined, true],
        },
      ],
    },
    {
      title: 'Customer Acquisition',
      rows: [
        {
          name: 'Marketplace App Visibility',
          note: 'Subject to service-quality review',
          values: [true, true, true],
        },
        { name: 'App Search Visibility (Elastic)', values: [undefined, true, true] },
        {
          name: 'Cashback Promotions',
          note: 'Subject to service-quality review',
          values: [undefined, true, true],
        },
        { name: 'Customer Reviews Management & Reply', values: [true, true, true] },
        { name: 'Detailed Customer Feedback Insights', values: [undefined, true, true] },
      ],
    },
    {
      title: 'Branding & Content',
      rows: [
        {
          name: 'Branded Booking Site',
          values: ['Default Template', 'Default + Premium', 'Default + Premium'],
        },
        {
          name: 'Media Portfolio of Services',
          values: ['3 Posts', '50 Posts', 'Unlimited'],
        },
        { name: 'Social Media Daisy Link', values: [true, true, true] },
      ],
    },
    {
      title: 'Analytics, Support & Onboarding',
      rows: [
        { name: 'General Reports', values: [true, true, true] },
        { name: 'Advanced Analytics & Trends', values: [undefined, undefined, true] },
        {
          name: 'Customer Support',
          values: ['Basic', 'Priority', 'Priority'],
        },
        { name: 'Free Data Migration', values: [undefined, undefined, true] },
        { name: 'Free Assisted Onboarding & Menu Setup', values: [undefined, undefined, true] },
      ],
    },
  ],
  ar: [
    {
      title: 'الحجم والمقاعد',
      rows: [
        { name: 'أعضاء الفريق / التقاويم', values: ['1', '1', '1'] },
        { name: 'مساحات العمل / المواقع', values: ['1', '1', '2'] },
        { name: 'الدول', values: ['1', '1', '2'] },
        { name: 'الحجوزات شهرياً', values: ['غير محدودة', 'غير محدودة', 'غير محدودة'] },
      ],
    },
    {
      title: 'الحجوزات والجدولة',
      rows: [
        { name: 'إدارة الجدول', values: [true, true, true] },
        { name: 'إدارة المبيعات (نقاط البيع)', values: [true, true, true] },
        { name: 'إدارة العملاء', values: [true, true, true] },
        { name: 'تطبيق الهاتف والكمبيوتر', values: [true, true, true] },
        { name: 'مزامنة جهات اتصال الهاتف', values: [true, true, true] },
        { name: 'مزامنة Google Calendar', values: [true, true, true] },
        { name: 'تذكيرات آلية (عدم الحضور، إعادة الحجز)', values: [undefined, true, true] },
        { name: 'باقات الاشتراك', values: [undefined, true, true] },
        { name: 'معالجة المدفوعات أونلاين', values: [undefined, true, true] },
        { name: 'فرض سياسة الإلغاء والرسوم', values: [undefined, true, true] },
      ],
    },
    {
      title: 'الذكاء الاصطناعي والتواصل',
      rows: [
        {
          name: 'موظف الاستقبال الذكي للمحادثات',
          note: '1000 رصيد مجاني عند التسجيل، ادفع حسب الاستخدام بعد ذلك',
          values: [true, true, true],
        },
        { name: 'تكامل دردشة واتساب للأعمال', values: [true, true, true] },
        { name: 'تكامل الرسائل المباشرة على إنستغرام', values: [true, true, true] },
        { name: 'إشعارات داخل التطبيق والبريد', values: [true, true, true] },
        { name: 'إشعارات واتساب', values: [true, true, true] },
        { name: 'تخصيص قوالب البريد الإلكتروني', values: [undefined, undefined, true] },
        { name: 'تخصيص قوالب رسائل واتساب', values: [undefined, undefined, true] },
        {
          name: 'تخصيص ذكاء اصطناعي متقدم',
          note: 'تدريب النبرة والصوت، صقل المحادثات، تعدد اللغات، اختبار A/B',
          values: [undefined, undefined, true],
        },
      ],
    },
    {
      title: 'اكتساب العملاء',
      rows: [
        {
          name: 'الظهور في تطبيق السوق',
          note: 'يخضع لمراجعة جودة الخدمة',
          values: [true, true, true],
        },
        { name: 'الظهور في بحث التطبيق (Elastic)', values: [undefined, true, true] },
        {
          name: 'عروض الكاشباك',
          note: 'يخضع لمراجعة جودة الخدمة',
          values: [undefined, true, true],
        },
        { name: 'إدارة تقييمات العملاء والرد', values: [true, true, true] },
        { name: 'رؤى تفصيلية حول ملاحظات العملاء', values: [undefined, true, true] },
      ],
    },
    {
      title: 'العلامة التجارية والمحتوى',
      rows: [
        {
          name: 'موقع حجوزات موسوم بعلامتك',
          values: ['القالب الافتراضي', 'افتراضي + بريميوم', 'افتراضي + بريميوم'],
        },
        {
          name: 'محفظة وسائط الخدمات',
          values: ['3 منشورات', '50 منشوراً', 'غير محدود'],
        },
        { name: 'رابط ديزي لوسائل التواصل', values: [true, true, true] },
      ],
    },
    {
      title: 'التحليلات والدعم والإعداد',
      rows: [
        { name: 'التقارير العامة', values: [true, true, true] },
        { name: 'تحليلات واتجاهات متقدمة', values: [undefined, undefined, true] },
        {
          name: 'دعم العملاء',
          values: ['أساسي', 'أولوية', 'أولوية'],
        },
        { name: 'نقل بيانات مجاني', values: [undefined, undefined, true] },
        { name: 'إعداد وقائمة خدمات بمساعدة مجانية', values: [undefined, undefined, true] },
      ],
    },
  ],
};
