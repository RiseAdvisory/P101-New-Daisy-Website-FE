import { I18nContent } from '../i18n';

export interface PricingCardItem {
  title: string;
  subTitle: string;
  description: string;
  price: string;
  priceYear: string;
  optionPlus: string;
  options: string[];
}

export interface EnterpriseData {
  title: string;
  description: string;
  textButton: string;
}

export interface ResetCalculation {
  weRecommend: string;
  tryPeriod: string;
  details: string;
  includedInPlan: string;
  staffLabel: string;
  freeLabel: string;
  workspaceLabel: string;
  workspacesLabel: string;
  countryLabel: string;
  countriesLabel: string;
  additionalLabel: string;
  monthShort: string;
  additionalResources: string;
  additionalTotal: string;
  yourRequirements: string;
  totalPrice: string;
  basePlan: string;
  per: string;
  month: string;
  year: string;
  billed: string;
  billedMonthly: string;
  billedYearly: string;
  textStart: string;
}

export interface TextItemPricing {
  perPeriod: string;
  annualy: string;
  monthly: string;
  discount: string;
  textStarted: string;
  everything: string;
  mobileView: string;
  mobileHide: string;
}

export interface CalculateInputField {
  title: string;
  description: string;
}

export interface CalculateToggleField {
  title: string;
  description: string;
  minimumTierIndex?: number;
}

export interface CalculateData {
  firstInput: CalculateInputField;
  secondInput: CalculateInputField;
  thirdInput: CalculateInputField;
  toggleFirst: CalculateToggleField;
  toggleSecond: CalculateToggleField;
  toggleThird: CalculateToggleField;
}

export interface PricingTypeData {
  title: string;
  subtitle: string;
  pricingCard: PricingCardItem[];
  calculate: CalculateData;
}

export interface BtnTextCalculate {
  yes: string;
  no: string;
}

export interface PricingFaqItem {
  question: string;
  answer: string;
}

export interface PricingPageContent {
  title: string;
  switchAnnually: {
    monthly: string;
    annually: string;
  };
  toggleBusinessProfessional: { path: string; label: string }[];
  textCalculate: string;
  textReset: string;
  textFreeTrial: string;
  textRecomended: string;
  textItemPricing: TextItemPricing;
  btnTextCalculate: BtnTextCalculate;
  business: PricingTypeData;
  professional: PricingTypeData;
  enterprise: EnterpriseData;
  resetCalculation: ResetCalculation;
  crossLinks: {
    business: { text: string; linkText: string };
    professional: { text: string; linkText: string };
  };
  calculatorSectionTitle: string;
  calculatorSectionSubtitle: string;
  faqSectionTitle: string;
  finalCta: {
    business: { title: string; button: string };
    professional: { title: string; button: string };
  };
  pricingFaqs: {
    business: PricingFaqItem[];
    professional: PricingFaqItem[];
  };
}

export const pricingPageData: I18nContent<PricingPageContent> = {
  en: {
    title: 'Straightforward Pricing That Grows With You',
    switchAnnually: {
      monthly: 'Monthly',
      annually: 'Annually',
    },
    toggleBusinessProfessional: [
      { path: 'business', label: 'Businesses' },
      { path: 'professional', label: 'Professional' },
    ],
    textCalculate: 'Calculate',
    textReset: 'Reset Calculation',
    textFreeTrial: 'Start Free Trial',
    textRecomended: 'Recomended',
    textItemPricing: {
      perPeriod: '/ ',
      annualy: 'month',
      monthly: 'month',
      discount: 'Save up to 17%',
      textStarted: 'Get Started',
      everything: 'Everything in',
      mobileView: 'View all features',
      mobileHide: 'Hide features',
    },
    btnTextCalculate: {
      yes: 'Yes',
      no: 'No',
    },
    business: {
      title: 'Find the Right Plan',
      subtitle: 'Answer a few questions to find the best plan for your business',
      calculate: {
        firstInput: {
          title: 'How many staff do you have?',
          description: 'Number of staff members who will use the platform',
        },
        secondInput: {
          title: 'How many workspaces?',
          description:
            'Number of locations or workspaces your business operates from',
        },
        thirdInput: {
          title: 'How many countries?',
          description: 'Number of countries you operate in',
        },
        toggleFirst: {
          title: 'Do you provide home services?',
          description: 'Mobile or on-site services at customer locations',
          minimumTierIndex: 0,
        },
        toggleSecond: {
          title: 'Do you need assisted onboarding?',
          description:
            'Help with setting up your services menu and platform configuration',
          minimumTierIndex: 2,
        },
        toggleThird: {
          title: 'Do you need concierge support?',
          description: 'Dedicated 24/7 support for your business',
          minimumTierIndex: 1,
        },
      },
      pricingCard: [
        {
          title: 'Basic',
          subTitle: '14-day free trial, no credit card required',
          description:
            'Just starting out but want to build a solid customer base & brand and while growing their presence as a professional service provider',
          price: '50',
          priceYear: '42',
          optionPlus: '',
          options: [
            '5 Users / Calendar',
            '1 Workspace/location',
            '1 Country',
            'Unlimited bookings',
            'Themed Profile site with Social Links & Booking Feature',
            'Sales Management (POS)',
            'Client Management',
            'Mobile & Desktop App',
            'General Reports',
            'Customer Reviews Management',
            'In App & Email Notifications',
            'WhatsApp Notifications',
            'Portfolio of services',
            'Social Media Daisy Link',
            'Phone Contacts Syncing',
            'Google Calendar',
            'Basic Customer Support',
          ],
        },
        {
          title: 'Growth',
          subTitle: '14-day free trial, no credit card required',
          description:
            'Ideal for Solo Experienced Professionals that want to provide an exceptional experience to their customers',
          price: '150',
          priceYear: '128',
          optionPlus: 'Basic',
          options: [
            '10 Users / Calendar',
            '2 Workspaces/location',
            '1 Country',
            'Unlimited bookings',
            'Automated reminders',
            'Subscription packages',
            'Online Payments',
            'Enforce Cancellation Fees & Refunds',
            'App Elastic search visibility',
            'Marketplace App visibility',
            'Customer Reviews & Feedback',
            'Priority Customer Support',
          ],
        },
        {
          title: 'Business',
          subTitle: '14-day free trial, no credit card required',
          description:
            'Businesses with multiple workspaces or locations that are excellence oriented in service and customer service',
          price: '250',
          priceYear: '208',
          optionPlus: 'Growth',
          options: [
            '15 Users / Calendar',
            '4 Workspaces/location',
            '1 Country',
            'Advanced Analytics and Trends',
            'Free Data Migration',
            'Free Assisted Onboarding & Services Menu Setup',
          ],
        },
      ],
    },
    professional: {
      title: 'Find the Right Plan',
      subtitle:
        'Answer a few questions to find the best plan for your career',
      calculate: {
        firstInput: {
          title: 'How many staff do you have?',
          description: 'Number of professionals in your team',
        },
        secondInput: {
          title: 'How many workspaces?',
          description: 'Number of locations you work from',
        },
        thirdInput: {
          title: 'How many countries?',
          description: 'Number of countries you operate in',
        },
        toggleFirst: {
          title: 'Do you provide home services?',
          description: 'Mobile or on-site services at customer locations',
          minimumTierIndex: 0,
        },
        toggleSecond: {
          title: 'Do you need assisted onboarding?',
          description:
            'Help with setting up your services menu and platform configuration',
          minimumTierIndex: 2,
        },
        toggleThird: {
          title: 'Do you need concierge support?',
          description: 'Dedicated 24/7 support for your practice',
          minimumTierIndex: 1,
        },
      },
      pricingCard: [
        {
          title: 'Starter',
          subTitle: '14-day free trial, no credit card required',
          description:
            'Just starting out but want to build a solid customer base & brand and while growing their presence as a professional service provider',
          price: '25',
          priceYear: '21',
          optionPlus: '',
          options: [
            '1 User / Calendar',
            '1 Workspace/location',
            '1 Country',
            '100 Bookings',
            'Themed Profile site with Social links & booking feature',
            'Schedule Management',
            'Sales Management (POS)',
            'Client Management',
            'Mobile & Desktop App',
            'General Reports',
            'Customer Reviews Management',
            'In App & Email Notifications',
            'WhatsApp Notifications',
            'Portfolio of services',
            'Social Media Daisy Link',
            'Phone Contacts Syncing',
            'Google Calendar',
            'Basic Customer Support',
          ],
        },
        {
          title: 'Professional',
          subTitle: '14-day free trial, no credit card required',
          description:
            'Ideal for Solo Experienced Professionals that want to provide an exceptional experience to their customers',
          price: '50',
          priceYear: '42',
          optionPlus: 'Starter',
          options: [
            '1 User / Calendar',
            '1 Workspace/location',
            '1 Country',
            'Unlimited bookings',
            'Automated reminders to reduce no shows & encourage early rebooking',
            'Subscription packages',
            'Online Payments',
            'Enforce Cancellation Fees & Refunds',
            'App Elastic search visibility',
            'Marketplace App visibility',
            'Customer Reviews & Feedback',
            'Advanced Analytics and Trends',
            'Free Data Migration',
            'Free Assisted Onboarding & Services Menu Setup',
            'Priority Customer Support',
          ],
        },
        {
          title: 'Elite',
          subTitle: '14-day free trial, no credit card required',
          description:
            'Ideal for Solo Experienced Professionals that want to provide an exceptional experience to their customers',
          price: '100',
          priceYear: '83',
          optionPlus: 'Professional',
          options: [
            '1 User / Calendar',
            '2 Workspaces/location',
            '2 Countries',
            'Unlimited bookings',
            'Automated reminders to reduce no shows & encourage early rebooking',
            'Subscription packages',
            'Online Payments',
            'Enforce Cancellation Fees & Refunds',
            'App Elastic search visibility',
            'Marketplace App visibility',
            'Customer Reviews & Feedback',
            'Advanced Analytics and Trends',
            'Free Data Migration',
            'Free Assisted Onboarding & Services Menu Setup',
            'Priority Customer Support',
          ],
        },
      ],
    },
    enterprise: {
      title: 'Enterprise',
      description:
        'For multi-location businesses needing custom integrations, dedicated account management, volume discounts, and enterprise SLAs. Let\u2019s build a plan that fits your scale.',
      textButton: 'Contact Us',
    },
    resetCalculation: {
      weRecommend: 'We Recommend:',
      tryPeriod: '14 days free trial',
      details: 'Plan Details',
      includedInPlan: 'Included in Plan:',
      staffLabel: 'Staff',
      freeLabel: 'Free',
      workspaceLabel: 'Workspace',
      workspacesLabel: 'Workspaces',
      countryLabel: 'Country',
      countriesLabel: 'Countries',
      additionalLabel: 'additional',
      monthShort: 'mo',
      additionalResources: 'Additional Resources:',
      additionalTotal: 'Additional Total:',
      yourRequirements: 'Your Requirements:',
      totalPrice: 'Total Price',
      basePlan: 'base',
      per: '/',
      month: 'month',
      year: 'year',
      billed: 'Billed',
      billedMonthly: 'Billed Monthly',
      billedYearly: 'Billed Yearly',
      textStart: 'Get Started',
    },
    crossLinks: {
      business: { text: 'Looking for individual plans?', linkText: 'See Professional pricing \u2192' },
      professional: { text: 'Looking for team plans?', linkText: 'See Business pricing \u2192' },
    },
    calculatorSectionTitle: 'Not sure which plan is right?',
    calculatorSectionSubtitle: 'Answer a few questions and we\'ll recommend the best plan for you.',
    faqSectionTitle: 'Pricing Questions',
    finalCta: {
      business: { title: 'Ready to grow your salon?', button: 'Start Your 14-Day Free Trial' },
      professional: { title: 'Ready to grow your career?', button: 'Start Your Free Trial' },
    },
    pricingFaqs: {
      business: [
        { question: 'What happens after the 14-day free trial?', answer: 'Your account continues on the plan you selected. If you haven\'t added payment details, your account pauses until you do. No surprise charges.' },
        { question: 'Can I switch plans later?', answer: 'Yes, you can upgrade or downgrade at any time. Changes take effect on your next billing cycle. When upgrading, you get immediate access to the new features.' },
        { question: 'Are there any setup fees or hidden costs?', answer: 'No setup fees, no hidden costs. The price you see is the price you pay. Additional staff, workspaces, and countries are clearly priced at $10, $25, and $50/month respectively.' },
        { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and bank transfers for annual plans. All payments are processed securely through Stripe.' },
        { question: 'Do you offer discounts for annual billing?', answer: 'Yes, save up to 17% when you switch to annual billing. For example, the Growth plan drops from $150/month to $128/month when billed annually.' },
      ],
      professional: [
        { question: 'Is the Starter plan really free?', answer: 'Yes, the Starter plan is completely free for your first 100 bookings. No credit card required. Once you reach 100 bookings, you can upgrade to the Professional plan to continue with unlimited bookings.' },
        { question: 'Can I switch plans later?', answer: 'Yes, you can upgrade at any time. Changes take effect immediately and you get instant access to all new features. Downgrading takes effect on your next billing cycle.' },
        { question: 'What\'s included in assisted onboarding?', answer: 'Our team helps you set up your entire services menu, configure your availability, import your existing client data, and optimise your profile for the marketplace. It\'s like having a personal setup assistant.' },
        { question: 'Why would I need 2 workspaces?', answer: 'If you work from multiple locations (e.g., a salon chair rental and home visits, or two different salon locations), each location counts as a workspace. The Elite plan supports 2 workspaces and 2 countries.' },
        { question: 'Do you charge per booking or per transaction?', answer: 'No. Daisy uses flat monthly pricing with no per-booking fees and no transaction fees on payments. Your costs are predictable every month.' },
      ],
    },
  },

  ar: {
    title: 'التسعير المباشر الذي ينمو معك',
    switchAnnually: {
      monthly: 'شهري',
      annually: 'سنوي',
    },
    toggleBusinessProfessional: [
      { path: 'business', label: 'أعمال' },
      { path: 'professional', label: 'محترف' },
    ],
    textCalculate: 'احسب',
    textReset: 'إعادة تعيين الحساب',
    textFreeTrial: 'ابدأ النسخة التجريبية المجانية',
    textRecomended: 'موصى به',
    textItemPricing: {
      perPeriod: '/ ',
      annualy: 'شهر',
      monthly: 'شهر',
      discount: 'وفر حتى 17%',
      textStarted: 'ابدأ الآن',
      everything: 'كل شيء في',
      mobileView: 'عرض جميع الميزات',
      mobileHide: 'إخفاء الميزات',
    },
    btnTextCalculate: {
      yes: 'نعم',
      no: 'لا',
    },
    business: {
      title: 'اعثر على الخطة المناسبة',
      subtitle: 'أجب عن بعض الأسئلة للعثور على أفضل خطة لعملك',
      calculate: {
        firstInput: {
          title: 'كم عدد الموظفين لديك؟',
          description: 'عدد الموظفين الذين سيستخدمون المنصة',
        },
        secondInput: {
          title: 'كم عدد مساحات العمل؟',
          description: 'عدد المواقع أو مساحات العمل التي يعمل منها عملك',
        },
        thirdInput: {
          title: 'كم عدد الدول؟',
          description: 'عدد الدول التي تعمل فيها',
        },
        toggleFirst: {
          title: 'هل تقدم خدمات منزلية؟',
          description: 'خدمات متنقلة أو في موقع العميل',
          minimumTierIndex: 0,
        },
        toggleSecond: {
          title: 'هل تحتاج مساعدة في الإعداد؟',
          description: 'مساعدة في إعداد قائمة خدماتك وتكوين المنصة',
          minimumTierIndex: 2,
        },
        toggleThird: {
          title: 'هل تحتاج دعم مخصص؟',
          description: 'دعم مخصص على مدار الساعة لعملك',
          minimumTierIndex: 1,
        },
      },
      pricingCard: [
        {
          title: 'أساسي',
          subTitle: 'تجربة مجانية 14 يوم، بدون بطاقة ائتمان',
          description:
            'بدأت للتو ولكن تريد بناء قاعدة عملاء قوية وعلامة تجارية مع تنمية حضورك كمقدم خدمة محترف',
          price: '50',
          priceYear: '42',
          optionPlus: '',
          options: [
            '5 مستخدمين / تقويم',
            '1 مساحة عمل/موقع',
            '1 دولة',
            'حجوزات غير محدودة',
            'صفحة ملف شخصي مع روابط اجتماعية وميزة الحجز',
            'إدارة المبيعات (نقطة البيع)',
            'إدارة العملاء',
            'تطبيق للجوال وسطح المكتب',
            'تقارير عامة',
            'إدارة تقييمات العملاء',
            'إشعارات داخل التطبيق والبريد الإلكتروني',
            'إشعارات واتساب',
            'محفظة الخدمات',
            'رابط ديزي لوسائل التواصل الاجتماعي',
            'مزامنة جهات اتصال الهاتف',
            'تقويم جوجل',
            'دعم العملاء الأساسي',
          ],
        },
        {
          title: 'نمو',
          subTitle: 'تجربة مجانية 14 يوم، بدون بطاقة ائتمان',
          description:
            'مثالي للمحترفين ذوي الخبرة الذين يرغبون في تقديم تجربة استثنائية لعملائهم',
          price: '150',
          priceYear: '128',
          optionPlus: 'أساسي',
          options: [
            '10 مستخدمين / تقويم',
            '2 مساحة عمل/موقع',
            '1 دولة',
            'حجوزات غير محدودة',
            'تذكيرات تلقائية',
            'باقات الاشتراك',
            'مدفوعات إلكترونية',
            'فرض رسوم الإلغاء والاسترداد',
            'ظهور في البحث المرن بالتطبيق',
            'ظهور في سوق التطبيق',
            'تقييمات وملاحظات العملاء',
            'دعم العملاء ذو الأولوية',
          ],
        },
        {
          title: 'عمل',
          subTitle: 'تجربة مجانية 14 يوم، بدون بطاقة ائتمان',
          description:
            'للشركات ذات المساحات أو المواقع المتعددة التي تسعى للتميز في الخدمة وخدمة العملاء',
          price: '250',
          priceYear: '208',
          optionPlus: 'نمو',
          options: [
            '15 مستخدم / تقويم',
            '4 مساحات عمل/موقع',
            '1 دولة',
            'تحليلات واتجاهات متقدمة',
            'نقل بيانات مجاني',
            'مساعدة مجانية في الإعداد وإعداد قائمة الخدمات',
          ],
        },
      ],
    },
    professional: {
      title: 'اعثر على الخطة المناسبة',
      subtitle: 'أجب عن بعض الأسئلة للعثور على أفضل خطة لمسيرتك المهنية',
      calculate: {
        firstInput: {
          title: 'كم عدد الموظفين لديك؟',
          description: 'عدد المحترفين في فريقك',
        },
        secondInput: {
          title: 'كم عدد مساحات العمل؟',
          description: 'عدد المواقع التي تعمل منها',
        },
        thirdInput: {
          title: 'كم عدد الدول؟',
          description: 'عدد الدول التي تعمل فيها',
        },
        toggleFirst: {
          title: 'هل تقدم خدمات منزلية؟',
          description: 'خدمات متنقلة أو في موقع العميل',
          minimumTierIndex: 0,
        },
        toggleSecond: {
          title: 'هل تحتاج مساعدة في الإعداد؟',
          description: 'مساعدة في إعداد قائمة خدماتك وتكوين المنصة',
          minimumTierIndex: 2,
        },
        toggleThird: {
          title: 'هل تحتاج دعم مخصص؟',
          description: 'دعم مخصص على مدار الساعة لممارستك',
          minimumTierIndex: 1,
        },
      },
      pricingCard: [
        {
          title: 'مبتدئ',
          subTitle: 'تجربة مجانية 14 يوم، بدون بطاقة ائتمان',
          description:
            'بدأت للتو ولكن تريد بناء قاعدة عملاء قوية وعلامة تجارية مع تنمية حضورك كمقدم خدمة محترف',
          price: '25',
          priceYear: '21',
          optionPlus: '',
          options: [
            '1 مستخدم / تقويم',
            '1 مساحة عمل/موقع',
            '1 دولة',
            '100 حجز',
            'صفحة ملف شخصي مع روابط اجتماعية وميزة الحجز',
            'إدارة الجدول',
            'إدارة المبيعات (نقطة البيع)',
            'إدارة العملاء',
            'تطبيق للجوال وسطح المكتب',
            'تقارير عامة',
            'إدارة تقييمات العملاء',
            'إشعارات داخل التطبيق والبريد الإلكتروني',
            'إشعارات واتساب',
            'محفظة الخدمات',
            'رابط ديزي لوسائل التواصل الاجتماعي',
            'مزامنة جهات اتصال الهاتف',
            'تقويم جوجل',
            'دعم العملاء الأساسي',
          ],
        },
        {
          title: 'محترف',
          subTitle: 'تجربة مجانية 14 يوم، بدون بطاقة ائتمان',
          description:
            'مثالي للمحترفين ذوي الخبرة الذين يرغبون في تقديم تجربة استثنائية لعملائهم',
          price: '50',
          priceYear: '42',
          optionPlus: 'مبتدئ',
          options: [
            '1 مستخدم / تقويم',
            '1 مساحة عمل/موقع',
            '1 دولة',
            'حجوزات غير محدودة',
            'تذكيرات تلقائية لتقليل عدم الحضور وتشجيع إعادة الحجز المبكر',
            'باقات الاشتراك',
            'مدفوعات إلكترونية',
            'فرض رسوم الإلغاء والاسترداد',
            'ظهور في البحث المرن بالتطبيق',
            'ظهور في سوق التطبيق',
            'تقييمات وملاحظات العملاء',
            'تحليلات واتجاهات متقدمة',
            'نقل بيانات مجاني',
            'مساعدة مجانية في الإعداد وإعداد قائمة الخدمات',
            'دعم العملاء ذو الأولوية',
          ],
        },
        {
          title: 'النخبة',
          subTitle: 'تجربة مجانية 14 يوم، بدون بطاقة ائتمان',
          description:
            'مثالي للمحترفين ذوي الخبرة الذين يرغبون في تقديم تجربة استثنائية لعملائهم',
          price: '100',
          priceYear: '83',
          optionPlus: 'محترف',
          options: [
            '1 مستخدم / تقويم',
            '2 مساحة عمل/موقع',
            '2 دول',
            'حجوزات غير محدودة',
            'تذكيرات تلقائية لتقليل عدم الحضور وتشجيع إعادة الحجز المبكر',
            'باقات الاشتراك',
            'مدفوعات إلكترونية',
            'فرض رسوم الإلغاء والاسترداد',
            'ظهور في البحث المرن بالتطبيق',
            'ظهور في سوق التطبيق',
            'تقييمات وملاحظات العملاء',
            'تحليلات واتجاهات متقدمة',
            'نقل بيانات مجاني',
            'مساعدة مجانية في الإعداد وإعداد قائمة الخدمات',
            'دعم العملاء ذو الأولوية',
          ],
        },
      ],
    },
    enterprise: {
      title: 'المؤسسات',
      description:
        'للشركات متعددة الفروع التي تحتاج تكاملات مخصصة، إدارة حساب مخصصة، خصومات على الحجم، واتفاقيات مستوى خدمة للمؤسسات. دعنا نبني خطة تناسب حجم أعمالك.',
      textButton: 'اتصل بنا',
    },
    resetCalculation: {
      weRecommend: 'نوصي بـ:',
      tryPeriod: 'تجربة مجانية 14 يوم',
      details: 'تفاصيل الخطة',
      includedInPlan: 'مشمول في الخطة:',
      staffLabel: 'الموظفين',
      freeLabel: 'مجاني',
      workspaceLabel: 'مساحة عمل',
      workspacesLabel: 'مساحات عمل',
      countryLabel: 'دولة',
      countriesLabel: 'دول',
      additionalLabel: 'إضافي',
      monthShort: 'شهر',
      additionalResources: 'موارد إضافية:',
      additionalTotal: 'الإجمالي الإضافي:',
      yourRequirements: 'متطلباتك:',
      totalPrice: 'السعر الإجمالي',
      basePlan: 'أساسي',
      per: '/',
      month: 'شهر',
      year: 'سنة',
      billed: 'يُحاسب',
      billedMonthly: 'يُحاسب شهريًا',
      billedYearly: 'يُحاسب سنويًا',
      textStart: 'ابدأ الآن',
    },
    crossLinks: {
      business: { text: 'تبحث عن خطط فردية؟', linkText: 'عرض أسعار المحترفين \u2190' },
      professional: { text: 'تبحث عن خطط الفرق؟', linkText: 'عرض أسعار الأعمال \u2190' },
    },
    calculatorSectionTitle: 'غير متأكد من الخطة المناسبة؟',
    calculatorSectionSubtitle: 'أجب عن بعض الأسئلة وسنوصي بأفضل خطة لك.',
    faqSectionTitle: 'أسئلة عن التسعير',
    finalCta: {
      business: { title: 'مستعد لتنمية صالونك؟', button: 'ابدأ تجربتك المجانية لمدة 14 يومًا' },
      professional: { title: 'مستعد لتنمية مسيرتك المهنية؟', button: 'ابدأ تجربتك المجانية' },
    },
    pricingFaqs: {
      business: [
        { question: 'ماذا يحدث بعد التجربة المجانية لمدة 14 يومًا؟', answer: 'يستمر حسابك على الخطة التي اخترتها. إذا لم تضف تفاصيل الدفع، يتوقف حسابك مؤقتًا حتى تفعل ذلك. لا رسوم مفاجئة.' },
        { question: 'هل يمكنني تغيير الخطة لاحقًا؟', answer: 'نعم، يمكنك الترقية أو التخفيض في أي وقت. تسري التغييرات في دورة الفوترة التالية. عند الترقية، تحصل على وصول فوري إلى الميزات الجديدة.' },
        { question: 'هل هناك رسوم إعداد أو تكاليف مخفية؟', answer: 'لا رسوم إعداد ولا تكاليف مخفية. السعر الذي تراه هو السعر الذي تدفعه. الموظفون الإضافيون ومساحات العمل والدول مسعرة بوضوح بـ 10$ و25$ و50$/شهر على التوالي.' },
        { question: 'ما طرق الدفع المقبولة؟', answer: 'نقبل جميع بطاقات الائتمان الرئيسية (فيزا، ماستركارد، أمريكان إكسبرس) والتحويلات البنكية للخطط السنوية. تتم جميع المدفوعات بأمان عبر Stripe.' },
        { question: 'هل تقدمون خصومات على الفوترة السنوية؟', answer: 'نعم، وفر حتى 17% عند التحويل إلى الفوترة السنوية. على سبيل المثال، خطة النمو تنخفض من 150$/شهر إلى 128$/شهر عند الفوترة السنوية.' },
      ],
      professional: [
        { question: 'هل خطة المبتدئ مجانية حقًا؟', answer: 'نعم، خطة المبتدئ مجانية تمامًا لأول 100 حجز. لا حاجة لبطاقة ائتمان. بمجرد وصولك إلى 100 حجز، يمكنك الترقية إلى خطة المحترف للاستمرار بحجوزات غير محدودة.' },
        { question: 'هل يمكنني تغيير الخطة لاحقًا؟', answer: 'نعم، يمكنك الترقية في أي وقت. تسري التغييرات فورًا وتحصل على وصول فوري لجميع الميزات الجديدة. يسري التخفيض في دورة الفوترة التالية.' },
        { question: 'ماذا يتضمن الإعداد المُساعد؟', answer: 'يساعدك فريقنا في إعداد قائمة خدماتك بالكامل، وتكوين توفرك، واستيراد بيانات عملائك الحاليين، وتحسين ملفك الشخصي للسوق. إنه مثل وجود مساعد إعداد شخصي.' },
        { question: 'لماذا أحتاج مساحتي عمل؟', answer: 'إذا كنت تعمل من مواقع متعددة (مثل استئجار كرسي في صالون وزيارات منزلية، أو موقعي صالون مختلفين)، يُحسب كل موقع كمساحة عمل. خطة النخبة تدعم مساحتي عمل ودولتين.' },
        { question: 'هل تفرضون رسومًا لكل حجز أو لكل معاملة؟', answer: 'لا. تستخدم ديزي تسعيرًا شهريًا ثابتًا بدون رسوم لكل حجز وبدون رسوم معاملات على المدفوعات. تكاليفك متوقعة كل شهر.' },
      ],
    },
  },
};
