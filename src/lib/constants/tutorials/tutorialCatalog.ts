import { I18nContent } from '@/lib/constants/i18n';

export interface TutorialCategory {
  slug: string;
  label: I18nContent<string>;
  articleSlugs: string[];
  guideSlugs: string[];
}

export interface TutorialCatalog {
  business: TutorialCategory[];
  professional: TutorialCategory[];
}

export const tutorialCatalog: TutorialCatalog = {
  business: [
    {
      slug: 'booking-scheduling',
      label: { en: 'Booking & Scheduling', ar: 'الحجز والجدولة' },
      articleSlugs: [
        'online-booking-for-salons-setup-guide',
        'reduce-salon-no-shows',
        'salon-waitlist-management',
        'group-booking-packages-salon',
        'mobile-booking-beauty-salon',
        'recurring-appointment-scheduling-salon',
      ],
      guideSlugs: [
        'set-up-online-booking-salon',
      ],
    },
    {
      slug: 'salon-management',
      label: { en: 'Salon Management & Software', ar: 'إدارة الصالون والبرمجيات' },
      articleSlugs: [
        'how-to-choose-salon-management-software',
        'switching-salon-software-migration-guide',
        'small-salon-software-options',
        'multi-location-salon-software',
        'salon-software-roi-calculator',
        'first-month-new-salon-platform',
        'calculate-roi-switching-salon-software',
      ],
      guideSlugs: [
        'choose-best-salon-software',
        'switch-from-fresha',
      ],
    },
    {
      slug: 'staff-management',
      label: { en: 'Staff & Team Management', ar: 'إدارة الموظفين والفريق' },
      articleSlugs: [
        'salon-staff-scheduling-best-practices',
        'salon-commission-structures-guide',
        'hiring-salon-staff-interview-guide',
        'salon-employee-retention-strategies',
        'staff-scheduling-salon-owners-guide',
        'commission-structures-keep-top-talent',
        'managing-permissions-salon-access-control',
      ],
      guideSlugs: [],
    },
    {
      slug: 'marketing',
      label: { en: 'Marketing & Promotions', ar: 'التسويق والعروض' },
      articleSlugs: [
        'complete-guide-salon-loyalty-programs',
        'salon-referral-programs-that-work',
        'email-marketing-salons-templates',
        'daisy-cashback-system-customer-loyalty',
        'salon-marketing-ideas-2026',
        'salon-social-media-marketing',
        'salon-email-marketing-templates',
        'salon-loyalty-program-guide',
        'salon-referral-program-guide',
        'google-my-business-salon-optimization',
        'salon-seo-local-search-guide',
        'managing-instagram-dms-beauty-business',
      ],
      guideSlugs: [
        'get-more-salon-clients',
      ],
    },
    {
      slug: 'client-retention',
      label: { en: 'Client Retention', ar: 'الاحتفاظ بالعملاء' },
      articleSlugs: [
        'salon-client-retention-rate-guide',
        'salon-rebooking-strategies',
        'salon-client-experience-guide',
        'salon-client-personalization-tips',
        'salon-win-back-campaigns',
        'salon-customer-feedback-guide',
      ],
      guideSlugs: [],
    },
    {
      slug: 'payments',
      label: { en: 'Payments & POS', ar: 'المدفوعات ونقاط البيع' },
      articleSlugs: [
        'salon-pos-system-buyers-guide',
        'salon-tipping-policies-digital',
        'contactless-payments-salon-setup',
        'salon-invoicing-billing-guide',
        'salon-pos-systems-2026-guide',
        'tipping-best-practices-beauty-businesses',
      ],
      guideSlugs: [],
    },
    {
      slug: 'communication',
      label: { en: 'Communication & Client Outreach', ar: 'التواصل والتوعية' },
      articleSlugs: [
        'automated-reminders-reduce-no-shows',
        'client-communication-templates-beauty',
        'sms-marketing-fill-salon-chairs',
        'review-request-automation-5-star-reviews',
      ],
      guideSlugs: [],
    },
    {
      slug: 'ai-technology',
      label: { en: 'AI & Technology', ar: 'الذكاء الاصطناعي والتكنولوجيا' },
      articleSlugs: [
        'ai-scheduling-saves-salon-owners-time',
        'predictive-analytics-salons-beginners-guide',
        'ai-receptionist-salon-customer-service',
        'multilingual-beauty-business-tools',
        'ai-beauty-industry-applications',
      ],
      guideSlugs: [],
    },
    {
      slug: 'analytics',
      label: { en: 'Analytics & Reporting', ar: 'التحليلات والتقارير' },
      articleSlugs: [
        'client-retention-reporting-know-your-numbers',
        'revenue-forecasting-beauty-businesses',
        'data-driven-salons-outperform-competition',
        'salon-revenue-reporting-guide',
      ],
      guideSlugs: [],
    },
    {
      slug: 'business-growth',
      label: { en: 'Business Growth', ar: 'نمو الأعمال' },
      articleSlugs: [
        'how-to-start-beauty-business',
        'salon-pricing-strategy-guide',
        'increase-salon-revenue-strategies',
        'expanding-salon-adding-locations',
        'salon-membership-subscription-models',
        'salon-business-plan-template',
        'scaling-beauty-business-multiple-locations',
        'multi-channel-acquisition-beauty-business-growth',
        'daisy-marketing-suite-attracts-new-clients',
        'sustainability-beauty-salons',
      ],
      guideSlugs: [],
    },
  ],
  professional: [
    {
      slug: 'freelance-business',
      label: { en: 'Freelance Business', ar: 'العمل الحر' },
      articleSlugs: [
        'freelance-stylist-scheduling-guide',
        'going-freelance-beauty-professional',
        'freelance-hairstylist-business-setup',
        'setting-prices-independent-beauty-pro',
        'personal-brand-beauty-industry',
        'finding-clients-freelance-beauty',
        'freelance-beauty-professional-insurance',
        'tax-guide-freelance-beauty-professionals',
        'scaling-freelancer-to-beauty-business',
        'building-freelance-beauty-business',
      ],
      guideSlugs: [],
    },
    {
      slug: 'marketing-brand',
      label: { en: 'Marketing & Brand Building', ar: 'التسويق وبناء العلامة التجارية' },
      articleSlugs: [
        'social-media-marketing-beauty-professionals',
        'independent-beauty-professional-marketing',
        'building-personal-brand-beauty-professional-guide',
      ],
      guideSlugs: [],
    },
    {
      slug: 'payments-income',
      label: { en: 'Payments & Income', ar: 'المدفوعات والدخل' },
      articleSlugs: [
        'getting-paid-faster-freelance-beauty-invoicing',
        'freelance-stylist-payment-methods',
        'tracking-freelance-beauty-income',
      ],
      guideSlugs: [],
    },
    {
      slug: 'schedule-time',
      label: { en: 'Schedule & Time Management', ar: 'الجدولة وإدارة الوقت' },
      articleSlugs: [
        'managing-freelance-beauty-schedule',
        'time-management-independent-beauty-professionals',
      ],
      guideSlugs: [],
    },
    {
      slug: 'client-relationships',
      label: { en: 'Client Relationships', ar: 'علاقات العملاء' },
      articleSlugs: [
        'building-client-relationships-beauty-pros',
        'independent-beauty-pro-client-loyalty',
      ],
      guideSlugs: [],
    },
    {
      slug: 'ai-technology',
      label: { en: 'AI & Technology', ar: 'الذكاء الاصطناعي والتكنولوجيا' },
      articleSlugs: [
        'ai-tools-independent-beauty-professional',
      ],
      guideSlugs: [],
    },
  ],
};
