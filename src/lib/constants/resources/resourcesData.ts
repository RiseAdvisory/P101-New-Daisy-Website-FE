import { I18nContent } from '@/lib/constants/i18n';

/**
 * Tutorials page hero data (per user type)
 */
export const tutorialsHeroData: Record<string, I18nContent<{
  bredCrumbDesription?: string;
  bredCrumbTitle?: string;
  title: string;
  subtitle: string;
  description?: string;
  titleScroll?: string;
}>> = {
  customer: {
    en: {
      bredCrumbDesription: 'Resources',
      bredCrumbTitle: 'Tutorials',
      title: 'Customer Tutorials',
      subtitle: 'Learn how to get the most out of The Daisy platform',
      description: 'Step-by-step guides to help you book services, earn cashback, and manage your wellness journey.',
      titleScroll: 'Explore Our Tutorials',
    },
    ar: {
      bredCrumbDesription: 'الموارد',
      bredCrumbTitle: 'الدروس',
      title: 'دروس العملاء',
      subtitle: 'تعلم كيفية الاستفادة القصوى من منصة ديزي',
      description: 'أدلة خطوة بخطوة لمساعدتك في حجز الخدمات وكسب الكاشباك وإدارة رحلة العافية.',
      titleScroll: 'استكشف دروسنا',
    },
  },
  business: {
    en: {
      bredCrumbDesription: 'Resources',
      bredCrumbTitle: 'Tutorials',
      title: 'Business Tutorials',
      subtitle: 'Master your salon management with The Daisy',
      description: 'Comprehensive guides to help you manage your business, staff, and grow your client base.',
      titleScroll: 'Explore Our Tutorials',
    },
    ar: {
      bredCrumbDesription: 'الموارد',
      bredCrumbTitle: 'الدروس',
      title: 'دروس الأعمال',
      subtitle: 'أتقن إدارة صالونك مع ديزي',
      description: 'أدلة شاملة لمساعدتك في إدارة عملك وموظفيك وتنمية قاعدة عملائك.',
      titleScroll: 'استكشف دروسنا',
    },
  },
  professional: {
    en: {
      bredCrumbDesription: 'Resources',
      bredCrumbTitle: 'Tutorials',
      title: 'Professional Tutorials',
      subtitle: 'Grow your career with The Daisy tools',
      description: 'Guides to help you manage your schedule, build your brand, and increase your earnings.',
      titleScroll: 'Explore Our Tutorials',
    },
    ar: {
      bredCrumbDesription: 'الموارد',
      bredCrumbTitle: 'الدروس',
      title: 'دروس المهنيين',
      subtitle: 'نمِّ حياتك المهنية مع أدوات ديزي',
      description: 'أدلة لمساعدتك في إدارة جدولك وبناء علامتك التجارية وزيادة أرباحك.',
      titleScroll: 'استكشف دروسنا',
    },
  },
};

/**
 * Tutorial info data (per user type)
 */
export const tutorialInfoData: Record<string, I18nContent<{
  title?: string;
  description?: string;
}>> = {
  customer: {
    en: { title: 'Getting Started', description: 'Learn the basics of booking and earning cashback.' },
    ar: { title: 'البدء', description: 'تعلم أساسيات الحجز وكسب الكاشباك.' },
  },
  business: {
    en: { title: 'Getting Started', description: 'Learn how to set up and manage your business on Daisy.' },
    ar: { title: 'البدء', description: 'تعلم كيفية إعداد وإدارة عملك على ديزي.' },
  },
  professional: {
    en: { title: 'Getting Started', description: 'Learn how to manage your schedule and grow your client base.' },
    ar: { title: 'البدء', description: 'تعلم كيفية إدارة جدولك وتنمية قاعدة عملائك.' },
  },
};

/**
 * Tutorial tabs data (per user type)
 */
export const tutorialTabsData: Record<string, I18nContent<Array<{
  id: number;
  attributes: {
    sortId: number;
    titleListTab: string;
    fieldInfoTabs: string;
  };
}>>> = {
  customer: {
    en: [
      {
        id: 1,
        attributes: {
          sortId: 3,
          titleListTab: 'Booking a Service',
          fieldInfoTabs: '<h2>How to Book a Service</h2><p>Booking a service on Daisy is quick and easy. Browse available services, select your preferred time, and confirm your booking. You will receive a confirmation notification immediately.</p>',
        },
      },
      {
        id: 2,
        attributes: {
          sortId: 2,
          titleListTab: 'Earning Cashback',
          fieldInfoTabs: '<h2>How to Earn Cashback</h2><p>Every booking you make earns you cashback rewards. The cashback is automatically credited to your Daisy wallet and can be used towards future bookings.</p>',
        },
      },
      {
        id: 3,
        attributes: {
          sortId: 1,
          titleListTab: 'Managing Your Profile',
          fieldInfoTabs: '<h2>Managing Your Profile</h2><p>Keep your profile up to date to get the best recommendations. Add your preferences, update your contact information, and manage your payment methods.</p>',
        },
      },
    ],
    ar: [
      {
        id: 1,
        attributes: {
          sortId: 3,
          titleListTab: 'حجز خدمة',
          fieldInfoTabs: '<h2>كيفية حجز خدمة</h2><p>حجز خدمة على ديزي سريع وسهل. تصفح الخدمات المتاحة واختر وقتك المفضل وأكد حجزك.</p>',
        },
      },
    ],
  },
  business: {
    en: [
      {
        id: 1,
        attributes: {
          sortId: 2,
          titleListTab: 'Setting Up Your Branch',
          fieldInfoTabs: '<h2>Setting Up Your Branch</h2><p>Get your business visible on Daisy in minutes. Add your branch details, services, pricing, and working hours.</p>',
        },
      },
      {
        id: 2,
        attributes: {
          sortId: 1,
          titleListTab: 'Managing Staff',
          fieldInfoTabs: '<h2>Managing Your Staff</h2><p>Add team members, set their schedules, and track their performance all from your Daisy dashboard.</p>',
        },
      },
    ],
    ar: [
      {
        id: 1,
        attributes: {
          sortId: 2,
          titleListTab: 'إعداد فرعك',
          fieldInfoTabs: '<h2>إعداد فرعك</h2><p>اجعل عملك مرئيًا على ديزي في دقائق. أضف تفاصيل فرعك وخدماتك وأسعارك وساعات عملك.</p>',
        },
      },
    ],
  },
  professional: {
    en: [
      {
        id: 1,
        attributes: {
          sortId: 2,
          titleListTab: 'Managing Your Schedule',
          fieldInfoTabs: '<h2>Managing Your Schedule</h2><p>Set your availability, block off personal time, and let Daisy handle the booking logistics.</p>',
        },
      },
      {
        id: 2,
        attributes: {
          sortId: 1,
          titleListTab: 'Building Your Portfolio',
          fieldInfoTabs: '<h2>Building Your Portfolio</h2><p>Showcase your best work to attract new clients. Add photos, certifications, and specializations to your profile.</p>',
        },
      },
    ],
    ar: [
      {
        id: 1,
        attributes: {
          sortId: 2,
          titleListTab: 'إدارة جدولك',
          fieldInfoTabs: '<h2>إدارة جدولك</h2><p>حدد أوقات توفرك وخصص أوقاتك الشخصية ودع ديزي يتولى لوجستيات الحجز.</p>',
        },
      },
    ],
  },
};

/**
 * Tab components data
 */
export const tabComponentsData: I18nContent<{
  title?: string;
}> = {
  en: { title: 'Tutorial Details' },
  ar: { title: 'تفاصيل الدرس' },
};

/**
 * Updates page hero data (per user type)
 */
export const updatesHeroData: Record<string, I18nContent<{
  title: string;
  subtitle: string;
  description?: string;
  bredCrumbDesription?: string;
  bredCrumbTitle?: string;
  breadcrumbs?: string;
}>> = {
  customer: {
    en: {
      title: 'Platform Updates',
      subtitle: 'Stay up to date with the latest features and improvements',
      description: 'We are constantly improving The Daisy to give you the best experience.',
      bredCrumbDesription: 'Resources',
      bredCrumbTitle: 'Updates',
      breadcrumbs: 'Resources > Updates',
    },
    ar: {
      title: 'تحديثات المنصة',
      subtitle: 'ابقَ على اطلاع بأحدث الميزات والتحسينات',
      description: 'نحن نعمل باستمرار على تحسين ديزي لمنحك أفضل تجربة.',
      bredCrumbDesription: 'الموارد',
      bredCrumbTitle: 'التحديثات',
      breadcrumbs: 'الموارد > التحديثات',
    },
  },
  business: {
    en: {
      title: 'Business Updates',
      subtitle: 'New tools and features for your business',
      description: 'See what is new for business owners on The Daisy platform.',
      bredCrumbDesription: 'Resources',
      bredCrumbTitle: 'Updates',
      breadcrumbs: 'Resources > Updates',
    },
    ar: {
      title: 'تحديثات الأعمال',
      subtitle: 'أدوات وميزات جديدة لعملك',
      description: 'اطلع على الجديد لأصحاب الأعمال على منصة ديزي.',
      bredCrumbDesription: 'الموارد',
      bredCrumbTitle: 'التحديثات',
      breadcrumbs: 'الموارد > التحديثات',
    },
  },
  professional: {
    en: {
      title: 'Professional Updates',
      subtitle: 'Tools and features to boost your career',
      description: 'Discover what is new for professionals on The Daisy platform.',
      bredCrumbDesription: 'Resources',
      bredCrumbTitle: 'Updates',
      breadcrumbs: 'Resources > Updates',
    },
    ar: {
      title: 'تحديثات المهنيين',
      subtitle: 'أدوات وميزات لتعزيز حياتك المهنية',
      description: 'اكتشف الجديد للمهنيين على منصة ديزي.',
      bredCrumbDesription: 'الموارد',
      bredCrumbTitle: 'التحديثات',
      breadcrumbs: 'الموارد > التحديثات',
    },
  },
};

/**
 * Updates posts data (reuses blog structure)
 */
export const updatesPostsByUserType: Record<string, any[]> = {
  customer: [],
  business: [],
  professional: [],
};

/**
 * Testimonials page hero data (per user type)
 */
export const testimonialsHeroData: Record<string, I18nContent<{
  bredCrumbTitle?: string;
  bredCrumbDesription?: string;
  title: string;
  description: string;
  secondDescription?: string;
  textMoreList?: string;
}>> = {
  customer: {
    en: {
      bredCrumbTitle: 'Testimonials',
      bredCrumbDesription: 'Resources',
      title: 'What Our Customers Say',
      description: 'Real stories from real customers who love using The Daisy',
      secondDescription: 'Discover how The Daisy is transforming the way people book and enjoy beauty services.',
      textMoreList: 'Load More',
    },
    ar: {
      bredCrumbTitle: 'الشهادات',
      bredCrumbDesription: 'الموارد',
      title: 'ماذا يقول عملاؤنا',
      description: 'قصص حقيقية من عملاء حقيقيين يحبون استخدام ديزي',
      secondDescription: 'اكتشف كيف تحوّل ديزي طريقة حجز خدمات الجمال والاستمتاع بها.',
      textMoreList: 'تحميل المزيد',
    },
  },
  business: {
    en: {
      bredCrumbTitle: 'Testimonials',
      bredCrumbDesription: 'Resources',
      title: 'What Business Owners Say',
      description: 'Hear from salon and spa owners who have grown their business with The Daisy',
      secondDescription: 'See how The Daisy helps businesses attract more clients and increase revenue.',
      textMoreList: 'Load More',
    },
    ar: {
      bredCrumbTitle: 'الشهادات',
      bredCrumbDesription: 'الموارد',
      title: 'ماذا يقول أصحاب الأعمال',
      description: 'اسمع من أصحاب الصالونات والمنتجعات الذين نمّوا أعمالهم مع ديزي',
      secondDescription: 'شاهد كيف تساعد ديزي الأعمال في جذب المزيد من العملاء وزيادة الإيرادات.',
      textMoreList: 'تحميل المزيد',
    },
  },
  professional: {
    en: {
      bredCrumbTitle: 'Testimonials',
      bredCrumbDesription: 'Resources',
      title: 'What Professionals Say',
      description: 'Stories from beauty professionals who have advanced their careers with The Daisy',
      secondDescription: 'Learn how The Daisy empowers professionals with flexible scheduling and more clients.',
      textMoreList: 'Load More',
    },
    ar: {
      bredCrumbTitle: 'الشهادات',
      bredCrumbDesription: 'الموارد',
      title: 'ماذا يقول المهنيون',
      description: 'قصص من محترفي الجمال الذين طوروا حياتهم المهنية مع ديزي',
      secondDescription: 'تعلم كيف تمكّن ديزي المهنيين بجدولة مرنة والمزيد من العملاء.',
      textMoreList: 'تحميل المزيد',
    },
  },
};

/**
 * Testimonials list data (per user type)
 */
export const testimonialsListByUserType: Record<string, any[]> = {
  customer: [
    {
      id: 1,
      attributes: {
        sortId: 3,
        iconOwner: { data: [{ attributes: { url: '/images/testimonials/customer-1.webp' } }] },
        listTestimonials: {
          text: 'Amazing Experience',
          description: 'The Daisy made booking my salon appointments so easy. I love the cashback feature!',
          author: 'Sarah K.',
          role: 'Loyal Customer',
        },
      },
    },
    {
      id: 2,
      attributes: {
        sortId: 2,
        iconOwner: { data: [{ attributes: { url: '/images/testimonials/customer-2.webp' } }] },
        listTestimonials: {
          text: 'Great Savings',
          description: 'I have saved so much money with the cashback rewards. Highly recommend!',
          author: 'Amira L.',
          role: 'Regular User',
        },
      },
    },
    {
      id: 3,
      attributes: {
        sortId: 1,
        iconOwner: { data: [{ attributes: { url: '/images/testimonials/customer-3.webp' } }] },
        listTestimonials: {
          text: 'Convenient and Reliable',
          description: 'No more calling salons to book. Everything is just a tap away.',
          author: 'Maya R.',
          role: 'App User',
        },
      },
    },
  ],
  business: [
    {
      id: 101,
      attributes: {
        sortId: 2,
        iconOwner: { data: [{ attributes: { url: '/images/testimonials/business-1.webp' } }] },
        listTestimonials: {
          text: 'Transformed Our Business',
          description: 'Since joining The Daisy, our bookings have increased by 40%. The AI receptionist is a game-changer.',
          author: 'Nora S.',
          role: 'Salon Owner',
        },
      },
    },
    {
      id: 102,
      attributes: {
        sortId: 1,
        iconOwner: { data: [{ attributes: { url: '/images/testimonials/business-2.webp' } }] },
        listTestimonials: {
          text: 'Easy to Manage',
          description: 'Managing my staff schedules and tracking revenue has never been easier.',
          author: 'Ahmed F.',
          role: 'Spa Manager',
        },
      },
    },
  ],
  professional: [
    {
      id: 201,
      attributes: {
        sortId: 2,
        iconOwner: { data: [{ attributes: { url: '/images/testimonials/pro-1.webp' } }] },
        listTestimonials: {
          text: 'Freedom to Choose',
          description: 'I love the flexibility Daisy gives me. I set my own hours and clients come to me.',
          author: 'Layla M.',
          role: 'Hair Stylist',
        },
      },
    },
    {
      id: 202,
      attributes: {
        sortId: 1,
        iconOwner: { data: [{ attributes: { url: '/images/testimonials/pro-2.webp' } }] },
        listTestimonials: {
          text: 'Growing My Client Base',
          description: 'The marketplace has helped me reach clients I never would have found on my own.',
          author: 'Rania K.',
          role: 'Beauty Therapist',
        },
      },
    },
  ],
};

/**
 * Partners section data
 */
export const partnersData: I18nContent<{
  title: string;
  subtitle: string;
}> = {
  en: {
    title: 'Our Partners',
    subtitle: 'Trusted by leading beauty and wellness businesses',
  },
  ar: {
    title: 'شركاؤنا',
    subtitle: 'موثوق من قبل شركات الجمال والعافية الرائدة',
  },
};
