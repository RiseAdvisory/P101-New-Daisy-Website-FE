/**
 * Business tier data for /pricing-v3 (EN + AR).
 * Tier names match the live /pricing page: Basic / Growth / Business.
 * Each tier carries a "best for" tagline and an outcome-driven description
 * sentence (what the buyer gets, not how to decide).
 */

import { I18nContent } from '../../i18n';
import { FeatureCategory } from './pricingV3Types';

export interface PricingTierV3 {
  id: 'basic' | 'growth' | 'business';
  // Display name shown on the card (NOT the backend plan name).
  displayName: string;
  // Short tagline rendered under the tier name as a "best for" badge.
  bestFor: string;
  // Outcome-driven plan description: one sentence saying what the buyer
  // gets.
  description: string;
  monthlyPrice: number;
  annualTotal: number;
  annualPerMonth: number;
  annualSavingsLine: string;
  cardHighlights: string[];
  isMostPopular?: boolean;
}

export const BUSINESS_TIERS_V3: I18nContent<PricingTierV3[]> = {
  en: [
    {
      id: 'basic',
      displayName: 'Basic',
      bestFor: 'Best for small teams',
      description:
        'Get your business online with a branded booking site, team calendar, payments, and customer messaging in one system.',
      monthlyPrice: 50,
      annualTotal: 500,
      annualPerMonth: 42,
      annualSavingsLine: 'Save $100 (2 Months Free)',
      cardHighlights: [
        '5 team members, 1 location',
        'Branded booking site',
        'WhatsApp + Instagram booking',
        'Staff calendars & scheduling',
        'POS, payments, client records',
        'Includes 50 AI receptionist conversations',
      ],
    },
    {
      id: 'growth',
      displayName: 'Growth',
      bestFor: 'Best for active salons and spas',
      description:
        'Run daily operations with stronger booking, payments, reminders, reviews, and customer follow-up tools.',
      monthlyPrice: 150,
      annualTotal: 1500,
      annualPerMonth: 125,
      annualSavingsLine: 'Save $300 (2 Months Free)',
      isMostPopular: true,
      cardHighlights: [
        '10 team members, 2 locations',
        'Everything in Basic',
        'Online payments + cancellation policy',
        'Automated reminders & prepaid service packages',
        'Detailed reviews & feedback',
        'Includes 50 AI receptionist conversations',
        'Priority customer support',
      ],
    },
    {
      id: 'business',
      displayName: 'Business',
      bestFor: 'Best for growing businesses',
      description:
        'Manage multiple branches with advanced analytics, AI customization, data migration, and assisted onboarding.',
      monthlyPrice: 250,
      annualTotal: 2500,
      annualPerMonth: 208,
      annualSavingsLine: 'Save $500 (2 Months Free)',
      cardHighlights: [
        '15 team members, 4 locations',
        'Everything in Growth',
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
      displayName: 'الأساسية',
      bestFor: 'الأنسب للفرق الصغيرة',
      description:
        'ابدأ نشاطك على الإنترنت بموقع حجوزات بعلامتك التجارية، وتقويم للفريق، ومدفوعات، ومراسلات العملاء، كل ذلك في نظام واحد.',
      monthlyPrice: 50,
      annualTotal: 500,
      annualPerMonth: 42,
      annualSavingsLine: 'وفّر 100 دولار (شهران مجاناً)',
      cardHighlights: [
        '5 أعضاء فريق، موقع واحد',
        'موقع حجوزات بعلامتك التجارية',
        'حجز عبر واتساب وإنستغرام',
        'تقاويم وجدولة للموظفين',
        'نقاط بيع، مدفوعات، سجلات عملاء',
        'يشمل 50 محادثة لموظف الاستقبال الذكي',
      ],
    },
    {
      id: 'growth',
      displayName: 'النمو',
      bestFor: 'الأنسب للصالونات والمنتجعات النشطة',
      description:
        'أدر عملياتك اليومية بأدوات أقوى للحجز والدفع والتذكيرات والتقييمات ومتابعة العملاء.',
      monthlyPrice: 150,
      annualTotal: 1500,
      annualPerMonth: 125,
      annualSavingsLine: 'وفّر 300 دولار (شهران مجاناً)',
      isMostPopular: true,
      cardHighlights: [
        '10 أعضاء فريق، موقعان',
        'كل ما في خطة الأساسية',
        'مدفوعات أونلاين + سياسة إلغاء',
        'تذكيرات آلية وباقات خدمات مدفوعة مسبقاً',
        'تقييمات وملاحظات تفصيلية',
        'يشمل 50 محادثة لموظف الاستقبال الذكي',
        'دعم عملاء بأولوية',
      ],
    },
    {
      id: 'business',
      displayName: 'الأعمال',
      bestFor: 'الأنسب للأعمال النامية',
      description:
        'أدر فروعك المتعددة بتحليلات متقدمة، وتخصيص للذكاء الاصطناعي، ونقل بيانات، وإعداد بمساعدة الفريق.',
      monthlyPrice: 250,
      annualTotal: 2500,
      annualPerMonth: 208,
      annualSavingsLine: 'وفّر 500 دولار (شهران مجاناً)',
      cardHighlights: [
        '15 عضو فريق، 4 مواقع',
        'كل ما في خطة النمو',
        'تخصيص متقدم لموظف الاستقبال الذكي، يشمل النبرة وقواعد العمل وأسلوب الرد',
        'تخصيص قوالب البريد وواتساب',
        'تحليلات واتجاهات متقدمة',
        'نقل بيانات وإعداد بمساعدة الفريق مجاناً',
      ],
    },
  ],
};

/**
 * Default comparison table shows only the headline rows. The full matrix
 * is mounted behind a "View All Features" toggle.
 */
export const BUSINESS_COMPARISON_DEFAULT_V3: I18nContent<FeatureCategory[]> = {
  en: [
    {
      title: 'Headline Comparison',
      rows: [
        { name: 'Team Members / Calendars', values: ['5', '10', '15'] },
        { name: 'Locations', values: ['1', '2', '4'] },
        { name: 'Branded Booking Site', values: [true, true, true] },
        { name: 'WhatsApp + Instagram Booking', values: [true, true, true] },
        { name: 'Payments / POS', values: [true, true, true] },
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
        { name: 'أعضاء الفريق / التقاويم', values: ['5', '10', '15'] },
        { name: 'المواقع', values: ['1', '2', '4'] },
        { name: 'موقع حجوزات بعلامتك', values: [true, true, true] },
        { name: 'حجز عبر واتساب وإنستغرام', values: [true, true, true] },
        { name: 'مدفوعات / نقاط بيع', values: [true, true, true] },
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

export const BUSINESS_COMPARISON_FULL_V3: I18nContent<FeatureCategory[]> = {
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
