/**
 * Business-tier pricing data for /pricing-v2 (EN + AR).
 * Source of truth: Notion spec Doc #84 — Subscription Plans (Businesses table).
 */

import { I18nContent } from '../../i18n';
import { FeatureCategory } from './pricingV2Shared';

export interface PricingTierV2 {
  id: 'basic' | 'growth' | 'business';
  title: string;
  // One-line persona — answers "is this me?" in 10 seconds.
  oneLiner: string;
  monthlyPrice: number;
  // Annual = 10 × monthly (pay 10 months, get 2 free).
  annualTotal: number;
  // Convenience: per-month equivalent when billed annually, rounded.
  annualPerMonth: number;
  // Hard-coded savings line shown on the card.
  annualSavingsLine: string;
  // 4–6 differentiating bullets shown directly on the card.
  cardHighlights: string[];
  // Whether to flag this card as the recommended/most-popular choice.
  isMostPopular?: boolean;
}

export const BUSINESS_TIERS: I18nContent<PricingTierV2[]> = {
  en: [
    {
      id: 'basic',
      title: 'Basic',
      oneLiner:
        'Just starting out, building your customer base and brand.',
      monthlyPrice: 50,
      annualTotal: 500,
      annualPerMonth: 42,
      annualSavingsLine: 'Save $100 (2 Months Free)',
      cardHighlights: [
        '5 team members, 1 location',
        'AI Receptionist + 1,000 free credits',
        'WhatsApp + Instagram booking',
        'Marketplace visibility *',
        'Branded booking site, POS, reviews',
      ],
    },
    {
      id: 'growth',
      title: 'Growth',
      oneLiner:
        'Experienced, ready to deliver exceptional service online.',
      monthlyPrice: 150,
      annualTotal: 1500,
      annualPerMonth: 125,
      annualSavingsLine: 'Save $300 (2 Months Free)',
      isMostPopular: true,
      cardHighlights: [
        '10 team members, 2 locations',
        'Everything in Basic',
        'Online payments + cancellation policy',
        'Automated reminders & subscription packages',
        'Cashback promotions * + detailed reviews',
        'Priority customer support',
      ],
    },
    {
      id: 'business',
      title: 'Business',
      oneLiner:
        'Multi-location, excellence-oriented at every touchpoint.',
      monthlyPrice: 250,
      annualTotal: 2500,
      annualPerMonth: 208,
      annualSavingsLine: 'Save $500 (2 Months Free)',
      cardHighlights: [
        '15 team members, 4 locations',
        'Everything in Growth',
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
      title: 'الأساسية',
      oneLiner:
        'في بداية الطريق، تبني قاعدة عملاء وعلامتك التجارية.',
      monthlyPrice: 50,
      annualTotal: 500,
      annualPerMonth: 42,
      annualSavingsLine: 'وفّر 100 دولار (شهران مجاناً)',
      cardHighlights: [
        '5 أعضاء فريق، موقع واحد',
        'موظف استقبال ذكي + 1000 رصيد مجاني',
        'حجوزات واتساب وإنستغرام',
        'الظهور في السوق *',
        'موقع حجوزات موسوم، نقاط بيع، تقييمات',
      ],
    },
    {
      id: 'growth',
      title: 'النمو',
      oneLiner:
        'ذو خبرة، جاهز لتقديم تجارب استثنائية للعملاء.',
      monthlyPrice: 150,
      annualTotal: 1500,
      annualPerMonth: 125,
      annualSavingsLine: 'وفّر 300 دولار (شهران مجاناً)',
      isMostPopular: true,
      cardHighlights: [
        '10 أعضاء فريق، موقعان',
        'كل ما في الأساسية',
        'مدفوعات أونلاين + سياسة إلغاء',
        'تذكيرات آلية وباقات اشتراك',
        'عروض كاشباك * + تقييمات تفصيلية',
        'دعم عملاء أولوية',
      ],
    },
    {
      id: 'business',
      title: 'الأعمال',
      oneLiner:
        'متعدد المواقع، يتبنى التميّز في كل نقطة تواصل.',
      monthlyPrice: 250,
      annualTotal: 2500,
      annualPerMonth: 208,
      annualSavingsLine: 'وفّر 500 دولار (شهران مجاناً)',
      cardHighlights: [
        '15 عضو فريق، 4 مواقع',
        'كل ما في النمو',
        'تخصيص ذكاء اصطناعي متقدم (النبرة، التدريب، A/B)',
        'تخصيص قوالب البريد وواتساب',
        'تحليلات واتجاهات متقدمة',
        'نقل بيانات وإعداد بمساعدة الفريق مجاناً',
      ],
    },
  ],
};

/**
 * Full feature comparison, grouped into scannable categories.
 * Each row's `values` array maps 1:1 to BUSINESS_TIERS by index.
 */
export const BUSINESS_FEATURE_CATEGORIES: I18nContent<FeatureCategory[]> = {
  en: [
    {
      title: 'Scale & Seats',
      rows: [
        { name: 'Team Members / Calendars', values: ['5', '10', '15'] },
        { name: 'Workspaces / Locations', values: ['1', '2', '4'] },
        { name: 'Countries', values: ['1', '1', '1'] },
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
        { name: 'أعضاء الفريق / التقاويم', values: ['5', '10', '15'] },
        { name: 'مساحات العمل / المواقع', values: ['1', '2', '4'] },
        { name: 'الدول', values: ['1', '1', '1'] },
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
