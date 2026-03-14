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
  business: {
    pricingCard: PricingCardItem[];
  };
  professional: {
    pricingCard: PricingCardItem[];
  };
  enterprise: EnterpriseData;
  resetCalculation: ResetCalculation;
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
      annualy: 'year',
      monthly: 'month',
      discount: 'Save up to 20%',
      textStarted: 'Get Started',
      everything: 'Everything in',
      mobileView: 'View all features',
      mobileHide: 'Hide features',
    },
    business: {
      pricingCard: [
        {
          title: 'Basic',
          subTitle: '14 days try period',
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
          subTitle: '14 days try period',
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
          subTitle: '14 days try period',
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
      pricingCard: [
        {
          title: 'Starter',
          subTitle: 'First 100 bookings Free',
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
          subTitle: 'First 100 bookings Free',
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
          subTitle: 'First 100 bookings Free',
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
        'Multi national businesses that are looking to integrate their systems with a system that overlook all their entities globally',
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
      textStart: 'Get Started',
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
      annualy: 'سنة',
      monthly: 'شهر',
      discount: 'وفر حتى 20%',
      textStarted: 'ابدأ الآن',
      everything: 'كل شيء في',
      mobileView: 'عرض جميع الميزات',
      mobileHide: 'إخفاء الميزات',
    },
    business: {
      pricingCard: [
        {
          title: 'أساسي',
          subTitle: 'فترة تجريبية 14 يوم',
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
          subTitle: 'فترة تجريبية 14 يوم',
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
          subTitle: 'فترة تجريبية 14 يوم',
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
      pricingCard: [
        {
          title: 'مبتدئ',
          subTitle: 'أول 100 حجز مجاناً',
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
          subTitle: 'أول 100 حجز مجاناً',
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
          subTitle: 'أول 100 حجز مجاناً',
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
        'للشركات الكبيرة ذات المتطلبات الفريدة. أسعار مخصصة ودعم مخصص وحلول مصممة لمؤسستك.',
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
      textStart: 'ابدأ الآن',
    },
  },
};
