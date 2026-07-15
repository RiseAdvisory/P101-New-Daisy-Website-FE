/**
 * Solo Professional tier data for /pricing (EN + AR).
 * Tier names match the live /pricing page: Starter / Professional / Elite.
 */

import { I18nContent } from '../../i18n';
import { FeatureCategory } from './pricingV3Types';
import { PricingTierV3 } from './pricingV3Business';

export const PROFESSIONAL_TIERS_V3: I18nContent<PricingTierV3[]> = {
  en: [
    {
      id: 'basic',
      displayName: 'Starter',
      bestFor: 'Best for getting started',
      description:
        'Create a professional booking site, manage appointments, accept payments, and present your services from one place.',
      // Entry tier bills a $1/month base; +$25/month applies only in
      // months the account passes 5 appointments (see the teal banner /
      // subscriptionStartsNote). The annual fields below predate the $1
      // base and MUST be revisited before re-enabling the billing toggle.
      monthlyPrice: 1,
      annualTotal: 250,
      annualPerMonth: 21,
      annualSavingsLine: 'Save $50 (2 Months Free)',
      isMostPopular: true,
      showLowRiskStart: true,
      cardHighlights: [
        'Branded booking site',
        'Personal service menu',
        'WhatsApp + Instagram booking',
        'Appointment scheduling',
        'Payments',
        'Reviews & client records',
        'Includes 50 AI receptionist conversations',
      ],
    },
    {
      id: 'growth',
      displayName: 'Professional',
      bestFor: 'Best for client growth',
      description:
        'Add payments, reminders, reviews, and stronger client follow-up tools so you keep serving clients as your bookings grow.',
      monthlyPrice: 50,
      annualTotal: 500,
      annualPerMonth: 42,
      annualSavingsLine: 'Save $100 (2 Months Free)',
      cardHighlights: [
        'Everything in Starter',
        'Online payments + cancellation policy',
        'Automated reminders & prepaid service packages',
        'Detailed reviews & feedback',
        'Priority customer support',
      ],
    },
    {
      id: 'business',
      displayName: 'Elite',
      bestFor: 'Best for high-volume professionals',
      description:
        'Use advanced tools, AI support, and growth features built for high-volume professionals with many weekly bookings.',
      monthlyPrice: 100,
      annualTotal: 1000,
      annualPerMonth: 84,
      annualSavingsLine: 'Save $200 (2 Months Free)',
      cardHighlights: [
        'Everything in Professional',
        '2 workspaces, 2 countries',
        'Advanced AI receptionist customization, including tone, business rules, and response style',
        'Email + WhatsApp template customization',
        'Advanced analytics & trends',
        'Free data migration + assisted onboarding',
      ],
    },
  ],
  ar: [
    {
      id: 'basic',
      displayName: 'المبتدئ',
      bestFor: 'الأنسب للبدء',
      description:
        'أنشئ موقع حجوزات احترافي، وأدر مواعيدك، واقبل المدفوعات، واعرض خدماتك من مكان واحد.',
      // $1/month base; +$25/month applies past 5 appointments/month.
      monthlyPrice: 1,
      annualTotal: 250,
      annualPerMonth: 21,
      annualSavingsLine: 'وفّر 50 دولاراً (شهران مجاناً)',
      isMostPopular: true,
      showLowRiskStart: true,
      cardHighlights: [
        'موقع حجوزات بعلامتك التجارية',
        'قائمة خدمات شخصية',
        'حجز عبر واتساب وإنستغرام',
        'جدولة المواعيد',
        'مدفوعات',
        'تقييمات وسجلات عملاء',
        'يشمل 50 محادثة لموظف الاستقبال الذكي',
      ],
    },
    {
      id: 'growth',
      displayName: 'المحترف',
      bestFor: 'الأنسب لنمو العملاء',
      description:
        'أضف المدفوعات والتذكيرات والتقييمات وأدوات متابعة أقوى للعملاء لتواصل خدمة عملائك مع نمو حجوزاتك.',
      monthlyPrice: 50,
      annualTotal: 500,
      annualPerMonth: 42,
      annualSavingsLine: 'وفّر 100 دولار (شهران مجاناً)',
      cardHighlights: [
        'كل ما في خطة المبتدئ',
        'مدفوعات أونلاين + سياسة إلغاء',
        'تذكيرات آلية وباقات خدمات مدفوعة مسبقاً',
        'تقييمات وملاحظات تفصيلية',
        'دعم عملاء بأولوية',
      ],
    },
    {
      id: 'business',
      displayName: 'النخبة',
      bestFor: 'الأنسب للمحترفين بحجم حجوزات عالٍ',
      description:
        'استخدم أدوات متقدمة ودعم الذكاء الاصطناعي وميزات النمو للمحترفين بحجم حجوزات أسبوعي كبير.',
      monthlyPrice: 100,
      annualTotal: 1000,
      annualPerMonth: 84,
      annualSavingsLine: 'وفّر 200 دولار (شهران مجاناً)',
      cardHighlights: [
        'كل ما في خطة المحترف',
        'مساحتا عمل، دولتان',
        'تخصيص متقدم لموظف الاستقبال الذكي، يشمل النبرة وقواعد العمل وأسلوب الرد',
        'تخصيص قوالب البريد وواتساب',
        'تحليلات واتجاهات متقدمة',
        'نقل بيانات وإعداد بمساعدة الفريق مجاناً',
      ],
    },
  ],
};

export const PROFESSIONAL_COMPARISON_DEFAULT_V3: I18nContent<FeatureCategory[]> = {
  en: [
    {
      title: 'Headline Comparison',
      rows: [
        { name: 'Team Members / Calendars', values: ['1', '1', '1'] },
        { name: 'Workspaces', values: ['1', '1', '2'] },
        { name: 'Branded Booking Site', values: [true, true, true] },
        { name: 'WhatsApp + Instagram Booking', values: [true, true, true] },
        { name: 'Payments', values: [undefined, true, true] },
        {
          name: 'AI Receptionist Conversations (50 included)',
          values: [true, true, true],
        },
        { name: 'Reviews', values: [true, true, true] },
        {
          name: 'Marketplace Eligibility',
          note: 'Subject to service-quality review',
          values: ['After review', 'After review', 'After review'],
        },
        {
          name: 'Support Level',
          values: ['Basic', 'Priority', 'Priority / Assisted'],
        },
      ],
    },
  ],
  ar: [
    {
      title: 'مقارنة عناوين رئيسية',
      rows: [
        { name: 'أعضاء الفريق / التقاويم', values: ['1', '1', '1'] },
        { name: 'مساحات العمل', values: ['1', '1', '2'] },
        { name: 'موقع حجوزات بعلامتك', values: [true, true, true] },
        { name: 'حجز عبر واتساب وإنستغرام', values: [true, true, true] },
        { name: 'مدفوعات', values: [undefined, true, true] },
        {
          name: 'محادثات موظف الاستقبال الذكي (50 مشمولة)',
          values: [true, true, true],
        },
        { name: 'التقييمات', values: [true, true, true] },
        {
          name: 'أهلية السوق',
          note: 'يخضع لمراجعة جودة الخدمة',
          values: ['بعد المراجعة', 'بعد المراجعة', 'بعد المراجعة'],
        },
        {
          name: 'مستوى الدعم',
          values: ['أساسي', 'أولوية', 'أولوية / بمساعدة'],
        },
      ],
    },
  ],
};

export const PROFESSIONAL_COMPARISON_FULL_V3: I18nContent<FeatureCategory[]> = {
  en: [
    {
      title: 'Scale & Seats',
      rows: [
        { name: 'Team Members / Calendars', values: ['1', '1', '1'] },
        { name: 'Workspaces', values: ['1', '1', '2'] },
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
        { name: 'Automated Reminders', values: [undefined, true, true] },
        { name: 'Prepaid Service Packages', values: [undefined, true, true] },
        { name: 'Online Payment Processing', values: [undefined, true, true] },
        { name: 'Cancellation Policy Enforcement', values: [undefined, true, true] },
      ],
    },
    {
      title: 'AI Receptionist & Communication',
      rows: [
        {
          name: 'AI Receptionist Conversations',
          note: '50 included, then pay-as-you-go',
          values: [true, true, true],
        },
        { name: 'WhatsApp Business Chat Integration', values: [true, true, true] },
        { name: 'Instagram Direct Message Integration', values: [true, true, true] },
        { name: 'In-App & Email Notifications', values: [true, true, true] },
        { name: 'WhatsApp Notifications', values: [true, true, true] },
        { name: 'Email Template Customization', values: [undefined, undefined, true] },
        { name: 'WhatsApp Template Customization', values: [undefined, undefined, true] },
        {
          name: 'Advanced AI Receptionist Customization',
          note: 'Tone, business rules, response style, multi-language',
          values: [undefined, undefined, true],
        },
      ],
    },
    {
      title: 'Marketing & Marketplace',
      rows: [
        {
          name: 'Marketplace App Visibility',
          note: 'Subject to service-quality review',
          values: ['After review', 'After review', 'After review'],
        },
        { name: 'App Search Visibility (Elastic)', values: [undefined, true, true] },
        {
          name: 'Cashback Promotions',
          note: 'Subject to service-quality review',
          values: [undefined, 'After review', 'After review'],
        },
        { name: 'Customer Reviews Management & Reply', values: [true, true, true] },
        { name: 'Detailed Customer Feedback', values: [undefined, true, true] },
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
      title: 'Support & Onboarding',
      rows: [
        { name: 'General Reports', values: [true, true, true] },
        { name: 'Advanced Analytics & Trends', values: [undefined, undefined, true] },
        { name: 'Customer Support', values: ['Basic', 'Priority', 'Priority / Assisted'] },
        { name: 'Free Data Migration', values: [undefined, undefined, true] },
        { name: 'Free Assisted Onboarding', values: [undefined, undefined, true] },
      ],
    },
  ],
  ar: [
    {
      title: 'الحجم والمقاعد',
      rows: [
        { name: 'أعضاء الفريق / التقاويم', values: ['1', '1', '1'] },
        { name: 'مساحات العمل', values: ['1', '1', '2'] },
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
        { name: 'تذكيرات آلية', values: [undefined, true, true] },
        { name: 'باقات خدمات مدفوعة مسبقاً', values: [undefined, true, true] },
        { name: 'معالجة المدفوعات أونلاين', values: [undefined, true, true] },
        { name: 'فرض سياسة الإلغاء', values: [undefined, true, true] },
      ],
    },
    {
      title: 'موظف الاستقبال الذكي والتواصل',
      rows: [
        {
          name: 'محادثات موظف الاستقبال الذكي',
          note: '50 مشمولة، ثم ادفع حسب الاستخدام',
          values: [true, true, true],
        },
        { name: 'تكامل دردشة واتساب للأعمال', values: [true, true, true] },
        { name: 'تكامل الرسائل المباشرة على إنستغرام', values: [true, true, true] },
        { name: 'إشعارات داخل التطبيق والبريد', values: [true, true, true] },
        { name: 'إشعارات واتساب', values: [true, true, true] },
        { name: 'تخصيص قوالب البريد الإلكتروني', values: [undefined, undefined, true] },
        { name: 'تخصيص قوالب رسائل واتساب', values: [undefined, undefined, true] },
        {
          name: 'تخصيص متقدم لموظف الاستقبال الذكي',
          note: 'النبرة، قواعد العمل، أسلوب الرد، تعدد اللغات',
          values: [undefined, undefined, true],
        },
      ],
    },
    {
      title: 'التسويق والسوق',
      rows: [
        {
          name: 'الظهور في تطبيق السوق',
          note: 'يخضع لمراجعة جودة الخدمة',
          values: ['بعد المراجعة', 'بعد المراجعة', 'بعد المراجعة'],
        },
        { name: 'الظهور في بحث التطبيق (Elastic)', values: [undefined, true, true] },
        {
          name: 'عروض الكاشباك',
          note: 'يخضع لمراجعة جودة الخدمة',
          values: [undefined, 'بعد المراجعة', 'بعد المراجعة'],
        },
        { name: 'إدارة تقييمات العملاء والرد', values: [true, true, true] },
        { name: 'ملاحظات تفصيلية للعملاء', values: [undefined, true, true] },
      ],
    },
    {
      title: 'العلامة التجارية والمحتوى',
      rows: [
        {
          name: 'موقع حجوزات بعلامتك',
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
      title: 'الدعم والإعداد',
      rows: [
        { name: 'التقارير العامة', values: [true, true, true] },
        { name: 'تحليلات واتجاهات متقدمة', values: [undefined, undefined, true] },
        { name: 'دعم العملاء', values: ['أساسي', 'أولوية', 'أولوية / بمساعدة'] },
        { name: 'نقل بيانات مجاني', values: [undefined, undefined, true] },
        { name: 'إعداد مجاني بمساعدة الفريق', values: [undefined, undefined, true] },
      ],
    },
  ],
};
