import { I18nContent } from '../i18n';
import { FeatureListItem, BusinessOption } from '@/types/strapi';

export type BusinessCategoryKey =
  | 'ai'
  | 'booking'
  | 'communication'
  | 'marketing'
  | 'payments'
  | 'growth'
  | 'control'
  | 'reports';

export interface CategorySectionData {
  title: string;
  description: string;
}

export interface FeaturesBusinessPageContent {
  title: string;
  listBusinessOptions: BusinessOption[];
  /** Section headers for each category */
  aiPowered: CategorySectionData;
  bookingManagement: CategorySectionData;
  communication: CategorySectionData;
  marketingTools: CategorySectionData;
  collectPayments: CategorySectionData;
  growth: CategorySectionData;
  control: CategorySectionData;
  performanceReports: CategorySectionData;
  /** Feature items per category */
  categoryItems: Record<BusinessCategoryKey, FeatureListItem[]>;
  /** Carousel images */
  firstImage: { data: [{ attributes: { url: string } }] };
  secondImage: { data: [{ attributes: { url: string } }] };
  thirdImage: { data: [{ attributes: { url: string } }] };
  firstMobileImage?: { data: [{ attributes: { url: string } }] | null };
  secondMobileImage?: { data: [{ attributes: { url: string } }] | null };
  thirdMobileImage?: { data: [{ attributes: { url: string } }] | null };
  firstImageStyle?: Record<string, string | number>;
  secondImageStyle?: Record<string, string | number>;
  thirdImageStyle?: Record<string, string | number>;
  firstMobileImageStyle?: Record<string, string | number>;
  secondMobileImageStyle?: Record<string, string | number>;
  thirdMobileImageStyle?: Record<string, string | number>;
}

/** Helper to build a FeatureListItem from simple data */
function item(
  id: number,
  title: string,
  description: string,
  imageUrl: string,
  stylePicture?: Record<string, string | number>,
  mobileImageUrl?: string,
  mobileStylePicture?: Record<string, string | number>,
): FeatureListItem {
  return {
    id,
    attributes: {
      sortId: id,
      title,
      description,
      picture: {
        data: [{ attributes: { url: imageUrl } }],
      },
      stylePicture: stylePicture ?? {
        padding: '24px',
        boxSizing: 'border-box',
      },
      mobilePicture: mobileImageUrl
        ? { data: [{ attributes: { url: mobileImageUrl } }] }
        : { data: null },
      mobileStylePicture: mobileStylePicture ?? {
        padding: '16px 10px',
        boxSizing: 'border-box',
      },
    },
  };
}

export const featuresBusinessData: I18nContent<FeaturesBusinessPageContent> = {
  en: {
    title: 'Everything Your Business Needs to Grow',
    listBusinessOptions: [
      {
        title: 'AI Powered',
        description: 'Smart automation for your business',
        icon: 'brain',
        path: 'ai-powered',
      },
      {
        title: 'Booking Management',
        description: 'Effortless appointment scheduling',
        icon: 'calendar',
        path: 'booking-management',
      },
      {
        title: 'Communication',
        description: 'Stay connected with clients',
        icon: 'message-circle',
        path: 'communication',
      },
      {
        title: 'Marketing Tools',
        description: 'Grow your reach and visibility',
        icon: 'megaphone',
        path: 'marketing-tools',
      },
      {
        title: 'Collect Payments',
        description: 'Seamless payment processing',
        icon: 'credit-card',
        path: 'collect-payments',
      },
      {
        title: 'Growth',
        description: 'Scale your business',
        icon: 'trending-up',
        path: 'growth',
      },
      {
        title: 'Control',
        description: 'Full brand control',
        icon: 'settings',
        path: 'control',
      },
      {
        title: 'Reports',
        description: 'Data-driven insights',
        icon: 'bar-chart',
        path: 'reports',
      },
    ],
    aiPowered: {
      title: 'AI POWERED',
      description: 'Let AI Handle the Routine, You Handle the Art',
    },
    bookingManagement: {
      title: 'BOOKING MANAGEMENT',
      description: 'Effortless Scheduling That Works Around the Clock',
    },
    communication: {
      title: 'COMMUNICATION',
      description: 'Stay Connected With Every Client',
    },
    marketingTools: {
      title: 'MARKETING TOOLS',
      description: 'Attract More Clients With Smart Marketing',
    },
    collectPayments: {
      title: 'COLLECT PAYMENTS',
      description: 'Get Paid Faster, Easier, and Securely',
    },
    growth: {
      title: 'GROWTH',
      description: 'Scale Your Business With Confidence',
    },
    control: {
      title: 'CONTROL',
      description: 'Your Brand, Your Rules',
    },
    performanceReports: {
      title: 'PERFORMANCE REPORTS',
      description: 'Know Your Numbers, Grow Your Business',
    },
    categoryItems: {
      ai: [
        item(
          1,
          'AI Receptionist',
          'Your 24/7 virtual receptionist handles bookings, answers questions, and manages customer inquiries — even while you sleep.',
          '/images/features/business/ai-receptionist.png',
        ),
        item(
          2,
          'Smart Scheduling',
          'AI optimizes your appointment calendar to minimize gaps and maximize revenue. Automatic conflict detection keeps your day running smoothly.',
          '/images/features/business/ai-booking.png',
        ),
        item(
          3,
          'Personalized Recommendations',
          'AI suggests upsells and add-on services based on client history, increasing average ticket value.',
          '/images/features/business/multilingual-ai.png',
        ),
        item(
          4,
          'Automated Follow-ups',
          'Never lose a client. AI sends personalized follow-up messages, rebooking reminders, and birthday offers automatically.',
          '/images/features/business/247-concierge.png',
        ),
      ],
      booking: [
        item(
          1,
          'Online Booking',
          'Let customers book appointments anytime from your website, social media, or the Daisy app. No phone calls needed.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
        item(
          2,
          'Calendar Management',
          'View and manage all appointments in a unified calendar. Drag, drop, and reschedule with ease.',
          '/images/pages/business/scroll/integrations.png',
        ),
        item(
          3,
          'Automated Reminders',
          'Reduce no-shows by up to 90% with automatic SMS and push notification reminders sent before appointments.',
          '/images/features/business/schedule-page.png',
        ),
        item(
          4,
          'Waitlist Management',
          'Fill cancelled slots automatically from your waitlist. Keep your schedule full and your revenue flowing.',
          '/images/pages/business/scroll/integrations.png',
        ),
      ],
      communication: [
        item(
          1,
          'In-App Messaging',
          'Chat directly with clients through the Daisy app. Share updates, confirmations, and special offers in real-time.',
          '/images/pages/business/scroll/schedule.png',
        ),
        item(
          2,
          'Broadcast Messages',
          'Reach all your clients at once with targeted broadcast messages. Announce promotions, new services, or holiday hours.',
          '/images/pages/professional/scroll/staff-details.png',
        ),
        item(
          3,
          'WhatsApp Integration',
          'Connect with clients on their favorite platform. Send booking confirmations and reminders via WhatsApp.',
          '/images/pages/business/scroll/schedule.png',
        ),
      ],
      marketing: [
        item(
          1,
          'Marketplace Listing',
          'Get discovered by thousands of new customers on the Daisy marketplace. Your profile showcases your best work.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
        item(
          2,
          'Cashback Campaigns',
          'Create irresistible cashback offers that bring customers back again and again. You set the rules.',
          '/images/pages/customer/scroll/experiences.png',
        ),
        item(
          3,
          'Referral Program',
          'Turn happy clients into brand ambassadors. Reward them for bringing friends and family to your business.',
          '/images/pages/business/scroll/analytics.png',
        ),
        item(
          4,
          'Social Media Tools',
          'Share your services, reviews, and offers directly to Instagram, Facebook, and more with one click.',
          '/images/pages/customer/scroll/rating.png',
        ),
      ],
      payments: [
        item(
          1,
          'Multiple Payment Methods',
          'Accept credit cards, debit cards, Apple Pay, and cash. Give your clients the flexibility they expect.',
          '/images/pages/business/scroll/integrations.png',
        ),
        item(
          2,
          'Digital Invoicing',
          'Send professional invoices automatically after each service. Keep your records clean and organized.',
          '/images/features/business/schedule-page.png',
        ),
        item(
          3,
          'Tip Management',
          'Let clients add tips during checkout. Tips go directly to the right professional — no manual tracking needed.',
          '/images/pages/customer/scroll/home-screen.png',
        ),
      ],
      growth: [
        item(
          1,
          'Multi-Branch Management',
          'Manage multiple locations from one dashboard. Compare performance and allocate resources where they matter most.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
        item(
          2,
          'Team Management',
          'Add employees, set schedules, assign services, and track performance. Build a team that thrives.',
          '/images/pages/customer/scroll/experiences.png',
        ),
        item(
          3,
          'Customer Loyalty',
          'Build lasting relationships with built-in loyalty programs. Reward repeat customers and increase lifetime value.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
        item(
          4,
          'Subscription Plans',
          'Offer membership packages that guarantee recurring revenue. Clients commit, you grow.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
      ],
      control: [
        item(
          1,
          'White-Label Branding',
          'Make Daisy look like your own. Customize colors, logos, and client-facing elements to match your brand.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
        item(
          2,
          'Custom Booking Page',
          'Create a branded booking page that lives on your website. Your brand, your client experience.',
          '/images/features/business/vendor-intro-alt.png',
        ),
        item(
          3,
          'Role-Based Permissions',
          'Control who sees what. Set permissions for managers, receptionists, and professionals independently.',
          '/images/pages/customer/scroll/rating.png',
        ),
      ],
      reports: [
        item(
          1,
          'Revenue Analytics',
          'Track daily, weekly, and monthly revenue with detailed breakdowns by service, professional, and branch.',
          '/images/pages/business/scroll/analytics.png',
        ),
        item(
          2,
          'Client Insights',
          'Understand your client base with demographics, visit frequency, and spending patterns. Make data-driven decisions.',
          '/images/features/business/analytics-alt.png',
        ),
        item(
          3,
          'Employee Performance',
          'Monitor individual professional metrics: bookings, revenue, ratings, and client retention rates.',
          '/images/pages/professional/scroll/staff-details.png',
        ),
      ],
    },
    firstImage: {
      data: [
        { attributes: { url: '/images/features/business/phone-first.png' } },
      ],
    },
    secondImage: {
      data: [
        { attributes: { url: '/images/features/business/ipad.png' } },
      ],
    },
    thirdImage: {
      data: [
        { attributes: { url: '/images/features/business/phone-last.png' } },
      ],
    },
    firstMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/phone-first.png',
          },
        },
      ],
    },
    secondMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/ipad.png',
          },
        },
      ],
    },
    thirdMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/phone-last.png',
          },
        },
      ],
    },
    firstImageStyle: { objectFit: 'contain' },
    secondImageStyle: { objectFit: 'contain' },
    thirdImageStyle: { objectFit: 'contain' },
    firstMobileImageStyle: { objectFit: 'contain' },
    secondMobileImageStyle: { objectFit: 'contain' },
    thirdMobileImageStyle: { objectFit: 'contain' },
  },
  ar: {
    title: 'كل ما يحتاجه عملك للنمو',
    listBusinessOptions: [
      {
        title: 'مدعوم بالذكاء الاصطناعي',
        description: 'أتمتة ذكية لعملك',
        icon: 'brain',
        path: 'ai-powered',
      },
      {
        title: 'إدارة الحجوزات',
        description: 'جدولة مواعيد سهلة',
        icon: 'calendar',
        path: 'booking-management',
      },
      {
        title: 'التواصل',
        description: 'ابقَ على تواصل مع العملاء',
        icon: 'message-circle',
        path: 'communication',
      },
      {
        title: 'أدوات التسويق',
        description: 'وسّع نطاق وصولك',
        icon: 'megaphone',
        path: 'marketing-tools',
      },
      {
        title: 'تحصيل المدفوعات',
        description: 'معالجة دفع سلسة',
        icon: 'credit-card',
        path: 'collect-payments',
      },
      {
        title: 'النمو',
        description: 'وسّع عملك',
        icon: 'trending-up',
        path: 'growth',
      },
      {
        title: 'التحكم',
        description: 'تحكم كامل بالعلامة التجارية',
        icon: 'settings',
        path: 'control',
      },
      {
        title: 'التقارير',
        description: 'رؤى مبنية على البيانات',
        icon: 'bar-chart',
        path: 'reports',
      },
    ],
    aiPowered: {
      title: 'مدعوم بالذكاء الاصطناعي',
      description: 'دع الذكاء الاصطناعي يتعامل مع الروتين، وأنت تتعامل مع الفن',
    },
    bookingManagement: {
      title: 'إدارة الحجوزات',
      description: 'جدولة سهلة تعمل على مدار الساعة',
    },
    communication: {
      title: 'التواصل',
      description: 'ابقَ على تواصل مع كل عميل',
    },
    marketingTools: {
      title: 'أدوات التسويق',
      description: 'اجذب المزيد من العملاء بتسويق ذكي',
    },
    collectPayments: {
      title: 'تحصيل المدفوعات',
      description: 'احصل على أموالك بشكل أسرع وأسهل وأكثر أماناً',
    },
    growth: {
      title: 'النمو',
      description: 'وسّع عملك بثقة',
    },
    control: {
      title: 'التحكم',
      description: 'علامتك التجارية، قواعدك',
    },
    performanceReports: {
      title: 'تقارير الأداء',
      description: 'اعرف أرقامك، نمّي عملك',
    },
    categoryItems: {
      ai: [
        item(
          1,
          'موظف استقبال ذكي',
          'موظف الاستقبال الافتراضي يعمل على مدار الساعة يتعامل مع الحجوزات، يجيب على الأسئلة، ويدير استفسارات العملاء — حتى أثناء نومك.',
          '/images/features/business/ai-receptionist.png',
        ),
        item(
          2,
          'جدولة ذكية',
          'الذكاء الاصطناعي يحسّن تقويم مواعيدك لتقليل الفجوات وزيادة الإيرادات. الكشف التلقائي عن التعارضات يبقي يومك سلساً.',
          '/images/features/business/ai-booking.png',
        ),
        item(
          3,
          'توصيات مخصصة',
          'الذكاء الاصطناعي يقترح خدمات إضافية بناءً على تاريخ العميل، مما يزيد متوسط قيمة الفاتورة.',
          '/images/features/business/multilingual-ai.png',
        ),
        item(
          4,
          'متابعات تلقائية',
          'لا تفقد عميلاً. الذكاء الاصطناعي يرسل رسائل متابعة مخصصة، وتذكيرات بإعادة الحجز، وعروض أعياد الميلاد تلقائياً.',
          '/images/features/business/247-concierge.png',
        ),
      ],
      booking: [
        item(
          1,
          'الحجز عبر الإنترنت',
          'دع العملاء يحجزون المواعيد في أي وقت من موقعك الإلكتروني أو وسائل التواصل أو تطبيق ديزي. بدون مكالمات هاتفية.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
        item(
          2,
          'إدارة التقويم',
          'عرض وإدارة جميع المواعيد في تقويم موحد. اسحب وأفلت وأعد الجدولة بسهولة.',
          '/images/pages/business/scroll/integrations.png',
        ),
        item(
          3,
          'تذكيرات تلقائية',
          'قلل حالات عدم الحضور بنسبة تصل إلى 90% مع تذكيرات SMS وإشعارات تلقائية قبل المواعيد.',
          '/images/features/business/schedule-page.png',
        ),
        item(
          4,
          'إدارة قائمة الانتظار',
          'املأ الفترات الملغاة تلقائياً من قائمة الانتظار. حافظ على جدولك ممتلئاً وإيراداتك مستمرة.',
          '/images/pages/business/scroll/integrations.png',
        ),
      ],
      communication: [
        item(
          1,
          'المراسلة داخل التطبيق',
          'تحدث مباشرة مع العملاء عبر تطبيق ديزي. شارك التحديثات والتأكيدات والعروض الخاصة في الوقت الفعلي.',
          '/images/pages/business/scroll/schedule.png',
        ),
        item(
          2,
          'رسائل جماعية',
          'تواصل مع جميع عملائك دفعة واحدة برسائل موجهة. أعلن عن العروض الترويجية والخدمات الجديدة.',
          '/images/pages/professional/scroll/staff-details.png',
        ),
        item(
          3,
          'تكامل واتساب',
          'تواصل مع العملاء على منصتهم المفضلة. أرسل تأكيدات الحجز والتذكيرات عبر واتساب.',
          '/images/pages/business/scroll/schedule.png',
        ),
      ],
      marketing: [
        item(
          1,
          'قائمة في السوق',
          'اكتشفك آلاف العملاء الجدد على سوق ديزي. ملفك الشخصي يعرض أفضل أعمالك.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
        item(
          2,
          'حملات الكاش باك',
          'أنشئ عروض كاش باك لا تقاوم تعيد العملاء مراراً وتكراراً. أنت تضع القواعد.',
          '/images/pages/customer/scroll/experiences.png',
        ),
        item(
          3,
          'برنامج الإحالة',
          'حوّل العملاء السعداء إلى سفراء لعلامتك التجارية. كافئهم على جلب الأصدقاء والعائلة.',
          '/images/pages/business/scroll/analytics.png',
        ),
        item(
          4,
          'أدوات التواصل الاجتماعي',
          'شارك خدماتك وتقييماتك وعروضك مباشرة على إنستغرام وفيسبوك والمزيد بنقرة واحدة.',
          '/images/pages/customer/scroll/rating.png',
        ),
      ],
      payments: [
        item(
          1,
          'طرق دفع متعددة',
          'اقبل بطاقات الائتمان والخصم وApple Pay والنقد. امنح عملاءك المرونة التي يتوقعونها.',
          '/images/pages/business/scroll/integrations.png',
        ),
        item(
          2,
          'فواتير رقمية',
          'أرسل فواتير احترافية تلقائياً بعد كل خدمة. حافظ على سجلاتك نظيفة ومنظمة.',
          '/images/features/business/schedule-page.png',
        ),
        item(
          3,
          'إدارة الإكراميات',
          'دع العملاء يضيفون الإكراميات أثناء الدفع. الإكراميات تذهب مباشرة للمحترف المناسب.',
          '/images/pages/customer/scroll/home-screen.png',
        ),
      ],
      growth: [
        item(
          1,
          'إدارة فروع متعددة',
          'أدر مواقع متعددة من لوحة تحكم واحدة. قارن الأداء وخصص الموارد حيث تهم أكثر.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
        item(
          2,
          'إدارة الفريق',
          'أضف موظفين، حدد الجداول، عيّن الخدمات، وتتبع الأداء. ابنِ فريقاً يزدهر.',
          '/images/pages/customer/scroll/experiences.png',
        ),
        item(
          3,
          'ولاء العملاء',
          'ابنِ علاقات دائمة مع برامج ولاء مدمجة. كافئ العملاء المتكررين وزِد القيمة مدى الحياة.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
        item(
          4,
          'خطط الاشتراك',
          'قدّم حزم عضوية تضمن إيرادات متكررة. العملاء يلتزمون، وأنت تنمو.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
      ],
      control: [
        item(
          1,
          'علامة تجارية مخصصة',
          'اجعل ديزي تبدو كأنها ملكك. خصص الألوان والشعارات والعناصر التي يراها العميل لتتناسب مع علامتك.',
          '/images/pages/business/scroll/vendor-intro.png',
        ),
        item(
          2,
          'صفحة حجز مخصصة',
          'أنشئ صفحة حجز بعلامتك التجارية تعيش على موقعك الإلكتروني. علامتك، تجربة عملائك.',
          '/images/features/business/vendor-intro-alt.png',
        ),
        item(
          3,
          'أذونات حسب الدور',
          'تحكم في من يرى ماذا. حدد الأذونات للمديرين وموظفي الاستقبال والمحترفين بشكل مستقل.',
          '/images/pages/customer/scroll/rating.png',
        ),
      ],
      reports: [
        item(
          1,
          'تحليلات الإيرادات',
          'تتبع الإيرادات اليومية والأسبوعية والشهرية مع تفاصيل حسب الخدمة والمحترف والفرع.',
          '/images/pages/business/scroll/analytics.png',
        ),
        item(
          2,
          'رؤى العملاء',
          'افهم قاعدة عملائك من خلال الديموغرافيا وتكرار الزيارات وأنماط الإنفاق. اتخذ قرارات مبنية على البيانات.',
          '/images/features/business/analytics-alt.png',
        ),
        item(
          3,
          'أداء الموظفين',
          'راقب مقاييس كل محترف: الحجوزات والإيرادات والتقييمات ومعدلات الاحتفاظ بالعملاء.',
          '/images/pages/professional/scroll/staff-details.png',
        ),
      ],
    },
    firstImage: {
      data: [
        { attributes: { url: '/images/features/business/phone-first.png' } },
      ],
    },
    secondImage: {
      data: [
        { attributes: { url: '/images/features/business/ipad.png' } },
      ],
    },
    thirdImage: {
      data: [
        { attributes: { url: '/images/features/business/phone-last.png' } },
      ],
    },
    firstMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/phone-first.png',
          },
        },
      ],
    },
    secondMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/ipad.png',
          },
        },
      ],
    },
    thirdMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/phone-last.png',
          },
        },
      ],
    },
    firstImageStyle: { objectFit: 'contain' },
    secondImageStyle: { objectFit: 'contain' },
    thirdImageStyle: { objectFit: 'contain' },
    firstMobileImageStyle: { objectFit: 'contain' },
    secondMobileImageStyle: { objectFit: 'contain' },
    thirdMobileImageStyle: { objectFit: 'contain' },
  },
};
