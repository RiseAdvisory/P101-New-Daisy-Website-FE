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
        width: '100%',
        height: '100%',
        padding: '24px',
        objectFit: 'contain',
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
        title: 'AI-Powered Intelligence',
        description: 'AI that books, sells, and serves 24/7',
        icon: 'brain',
        path: 'ai-powered',
      },
      {
        title: 'Booking Management',
        description: 'Smart calendars and automation',
        icon: 'calendar',
        path: 'booking-management',
      },
      {
        title: 'Multi-Channel Communication',
        description: 'Every messaging channel, one place',
        icon: 'message-circle',
        path: 'communication',
      },
      {
        title: 'Marketing Tools',
        description: 'Attract and retain clients',
        icon: 'megaphone',
        path: 'marketing-tools',
      },
      {
        title: 'Payment Processing',
        description: 'Every method, seamless checkout',
        icon: 'credit-card',
        path: 'collect-payments',
      },
      {
        title: 'Business Growth',
        description: 'Client and location management',
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
        title: 'Performance Reports',
        description: 'Actionable business insights',
        icon: 'bar-chart',
        path: 'reports',
      },
    ],
    aiPowered: {
      title: 'AI-POWERED INTELLIGENCE',
      description: 'Turn Every Inquiry Into Revenue With AI That Books, Sells, And Serves 24/7',
    },
    bookingManagement: {
      title: 'BOOKING MANAGEMENT',
      description: 'Effortless Appointment Scheduling With Smart Calendars And Automation',
    },
    communication: {
      title: 'MULTI-CHANNEL COMMUNICATION',
      description: 'Reach And Engage Clients Across Every Messaging Channel Seamlessly',
    },
    marketingTools: {
      title: 'MARKETING TOOLS',
      description: 'Attract New Clients And Keep Existing Ones Coming Back Often',
    },
    collectPayments: {
      title: 'PAYMENT PROCESSING',
      description: 'Accept Every Payment Method With Seamless Checkout And Invoicing',
    },
    growth: {
      title: 'BUSINESS GROWTH',
      description: 'Scale Your Business With Powerful Client And Location Management Tools',
    },
    control: {
      title: 'CONTROL',
      description: 'Your Brand, Your Rules',
    },
    performanceReports: {
      title: 'PERFORMANCE REPORTS',
      description: 'Actionable Insights Into Sales, Staff, Clients, And Daily Operations',
    },
    categoryItems: {
      ai: [
        item(
          1,
          'AI Receptionist',
          'Handles client conversations on WhatsApp and Instagram around the clock.',
          '/images/features/business/ai-receptionist.webp',
          { padding: '64px 24px 64px 24px', objectFit: 'cover' },
          '/images/features/business/ai-receptionist.webp',
          { padding: '32px 24px 32px 24px', objectFit: 'cover' },
        ),
        item(
          2,
          'AI Appointment Booking',
          'Books, reschedules, and cancels appointments through natural conversation.',
          '/images/features/business/ai-booking.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom'},
          '/images/features/business/ai-booking-mobile.webp',
          { padding: '50px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom'},
        ),
        item(
          3,
          '24/7 Concierge Service',
          'Never miss a booking with always-on AI scheduling availability.',
          '/images/features/business/247-concierge.webp',
          { padding: '42px 24px 24px 24px', objectFit: 'cover' },
          '/images/features/business/247-concierge.webp',
          { padding: '32px 24px 16px 24px', objectFit: 'cover' },
        ),
        item(
          4,
          'Multilingual AI Support',
          'Understands English, Arabic, voice messages, and mixed language input.',
          '/images/features/business/multilingual-ai.webp',
          { padding: '42px 24px 24px 24px', objectFit: 'cover' },
          '/images/features/business/multilingual-ai.webp',
          { padding: '32px 24px 16px 24px', objectFit: 'cover' },
        ),
      ],
      booking: [
        item(
          1,
          'Automated Reminders',
          'Reduce no-shows with timely booking reminders sent automatically.',
          '/images/features/business/schedule-page.webp',
        ),
        item(
          2,
          'Google Calendar Sync',
          'Two-way sync prevents double bookings and scheduling conflicts automatically.',
          '/images/features/business/google-sync.webp',
          { padding: '32px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/google-sync.webp',
          { padding: '32px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
        item(
          3,
          'Online Booking',
          'Customers book directly via shareable web links or the app.',
          '/images/pages/business/scroll/vendor-intro.webp',
        ),
        item(
          4,
          'Smart Calendar',
          'Visual day, week, and month views across all staff schedules.',
          '/images/features/business/smart-calendar.webp',
          { padding: '24px 24px 24px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/smart-calendar-mobile.webp',
          { padding: '90px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
      ],
      communication: [
        item(
          1,
          'Live Chat Support',
          'Real-time customer support through integrated in-app chat widget.',
          '/images/features/business/live-chat-support.webp',
          { padding: '0px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/live-chat-support-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
        item(
          2,
          'Smart Notifications',
          'Automated push, email, WhatsApp, and SMS alerts for every event.',
          '/images/pages/professional/scroll/staff-details.webp',
        ),
        item(
          3,
          'WhatsApp & Instagram Integrations',
          'Manage conversations from a single dashboard and chat with clients directly.',
          '/images/features/business/meta-integrations.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/meta-integrations-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
      ],
      marketing: [
        item(
          1,
          'Flash Cashback Offers',
          'Fill empty slots fast with limited-time cashback deals for clients.',
          '/images/features/business/marketing-flash.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/marketing-flash-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
        item(
          2,
          'Promotion Scheduling',
          'Schedule and target promotions to new or returning clients easily.',
          '/images/features/business/marketing-promo.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/marketing-promo-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
        item(
          3,
          'Ratings & Reviews',
          'Manage customer feedback and build powerful social proof online.',
          '/images/features/business/marketing-rating.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/marketing-rating-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
        item(
          4,
          'Marketplace Discovery',
          'Get discovered by new customers searching the Daisy marketplace app.',
          '/images/features/business/marketing-marketplace.webp',
          { padding: '24px 24px 24px 24px', objectFit: 'cover' },
          '/images/features/business/marketing-marketplace.webp',
          { padding: '24px 24px 24px 24px', objectFit: 'cover'},
        ),
      ],
      payments: [
        item(
          1,
          'Multiple Payment Methods',
          'Accept cash, card, KNET, wallet, and online link payments.',
          '/images/features/business/payment-methods.webp',
          { padding: '24px 24px 24px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/payment-methods.webp',
          { padding: '0px 0px 0px 0px', objectFit: 'cover'},
        ),
        item(
          2,
          'Invoice Management',
          'Generate, track, filter, and export professional invoices as PDF.',
          '/images/features/business/invoice-management.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/invoice-management-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
        item(
          3,
          'In-Store Checkout',
          'Complete in-person transactions with full point-of-sale processing built in.',
          '/images/features/business/store-checkout.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/store-checkout.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
        item(
          4,
          'Digital Wallet',
          'Customers pay with wallet balance and earn cashback rewards automatically.',
          '/images/features/business/daisy-wallet.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/daisy-wallet-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
      ],
      growth: [
        item(
          1,
          'Client Management',
          'Complete 360-degree view of every customer\'s bookings and history.',
          '/images/features/business/client-management.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/client-management-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
        item(
          2,
          'Multi-Branch Management',
          'Manage multiple locations and countries from one unified dashboard.',
          '/images/features/business/multi-workspace.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/multi-workspace-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
      ],
      control: [
        item(
          1,
          'White-Label Branding',
          'Make Daisy look like your own. Customize colors, logos, and client-facing elements to match your brand.',
          '/images/pages/business/scroll/vendor-intro.webp',
        ),
        item(
          2,
          'Custom Booking Page',
          'Create a branded booking page that lives on your website. Your brand, your client experience.',
          '/images/features/business/vendor-intro-alt.webp',
        ),
        item(
          3,
          'Role-Based Permissions',
          'Control who sees what. Set permissions for managers, receptionists, and professionals independently.',
          '/images/features/business/roles-and-permissions.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/roles-and-permissions-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
      ],
      reports: [
        item(
          1,
          'Sales Analytics',
          'Track revenue across services, staff, promotions, and time periods.',
          '/images/features/business/sales-analytics.webp',
          { padding: '64px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/sales-analytics-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
        item(
          2,
          'Staff Performance',
          'Monitor team productivity, ratings, and appointment volume at a glance.',
          '/images/features/business/staff-performance.webp',
          { padding: '0px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/staff-performance-mobile.webp',
          { padding: '24px 24px 0px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
        item(
          3,
          'Exportable Reports',
          'Download detailed business reports for any custom date range.',
          '/images/features/business/exportable-reports.webp',
          { padding: '24px 24px 24px 24px', objectFit: 'cover', objectPosition: 'bottom' },
          '/images/features/business/exportable-reports-mobile.webp',
          { padding: '24px 24px 24px 24px', objectFit: 'cover', objectPosition: 'bottom' },
        ),
      ],
    },
    firstImage: {
      data: [
        { attributes: { url: '/images/features/business/phone-first.webp' } },
      ],
    },
    secondImage: {
      data: [
        { attributes: { url: '/images/features/business/ipad-tablet-dashboard-mockup.webp' } },
      ],
    },
    thirdImage: {
      data: [
        { attributes: { url: '/images/features/business/phone-last.webp' } },
      ],
    },
    firstMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/phone-first.webp',
          },
        },
      ],
    },
    secondMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/ipad-tablet-dashboard-mockup.webp',
          },
        },
      ],
    },
    thirdMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/phone-last.webp',
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
          'موظف الاستقبال الافتراضي يعمل على مدار الساعة يتعامل مع الحجوزات، يجيب على الأسئلة، ويدير استفسارات العملاء ,  حتى أثناء نومك.',
          '/images/features/business/ai-receptionist.webp',
        ),
        item(
          2,
          'جدولة ذكية',
          'الذكاء الاصطناعي يحسّن تقويم مواعيدك لتقليل الفجوات وزيادة الإيرادات. الكشف التلقائي عن التعارضات يبقي يومك سلساً.',
          '/images/features/business/ai-booking.webp',
        ),
        item(
          3,
          'توصيات مخصصة',
          'الذكاء الاصطناعي يقترح خدمات إضافية بناءً على تاريخ العميل، مما يزيد متوسط قيمة الفاتورة.',
          '/images/features/business/multilingual-ai.webp',
        ),
        item(
          4,
          'متابعات تلقائية',
          'لا تفقد عميلاً. الذكاء الاصطناعي يرسل رسائل متابعة مخصصة، وتذكيرات بإعادة الحجز، وعروض أعياد الميلاد تلقائياً.',
          '/images/features/business/247-concierge.webp',
        ),
      ],
      booking: [
        item(
          1,
          'الحجز عبر الإنترنت',
          'دع العملاء يحجزون المواعيد في أي وقت من موقعك الإلكتروني أو وسائل التواصل أو تطبيق ديزي. بدون مكالمات هاتفية.',
          '/images/pages/business/scroll/vendor-intro.webp',
        ),
        item(
          2,
          'إدارة التقويم',
          'عرض وإدارة جميع المواعيد في تقويم موحد. اسحب وأفلت وأعد الجدولة بسهولة.',
          '/images/pages/business/scroll/integrations.webp',
        ),
        item(
          3,
          'تذكيرات تلقائية',
          'قلل حالات عدم الحضور بنسبة تصل إلى 90% مع تذكيرات SMS وإشعارات تلقائية قبل المواعيد.',
          '/images/features/business/schedule-page.webp',
        ),
        item(
          4,
          'إدارة قائمة الانتظار',
          'املأ الفترات الملغاة تلقائياً من قائمة الانتظار. حافظ على جدولك ممتلئاً وإيراداتك مستمرة.',
          '/images/pages/business/scroll/integrations.webp',
        ),
      ],
      communication: [
        item(
          1,
          'المراسلة داخل التطبيق',
          'تحدث مباشرة مع العملاء عبر تطبيق ديزي. شارك التحديثات والتأكيدات والعروض الخاصة في الوقت الفعلي.',
          '/images/pages/business/scroll/schedule.webp',
        ),
        item(
          2,
          'رسائل جماعية',
          'تواصل مع جميع عملائك دفعة واحدة برسائل موجهة. أعلن عن العروض الترويجية والخدمات الجديدة.',
          '/images/pages/professional/scroll/staff-details.webp',
        ),
        item(
          3,
          'تكامل واتساب',
          'تواصل مع العملاء على منصتهم المفضلة. أرسل تأكيدات الحجز والتذكيرات عبر واتساب.',
          '/images/pages/business/scroll/schedule.webp',
        ),
      ],
      marketing: [
        item(
          1,
          'قائمة في السوق',
          'اكتشفك آلاف العملاء الجدد على سوق ديزي. ملفك الشخصي يعرض أفضل أعمالك.',
          '/images/pages/business/scroll/vendor-intro.webp',
        ),
        item(
          2,
          'حملات الكاش باك',
          'أنشئ عروض كاش باك لا تقاوم تعيد العملاء مراراً وتكراراً. أنت تضع القواعد.',
          '/images/pages/customer/scroll/experiences.webp',
        ),
        item(
          3,
          'برنامج الإحالة',
          'حوّل العملاء السعداء إلى سفراء لعلامتك التجارية. كافئهم على جلب الأصدقاء والعائلة.',
          '/images/pages/business/scroll/analytics.webp',
        ),
        item(
          4,
          'أدوات التواصل الاجتماعي',
          'شارك خدماتك وتقييماتك وعروضك مباشرة على إنستغرام وفيسبوك والمزيد بنقرة واحدة.',
          '/images/pages/customer/scroll/rating.webp',
        ),
      ],
      payments: [
        item(
          1,
          'طرق دفع متعددة',
          'اقبل بطاقات الائتمان والخصم وApple Pay والنقد. امنح عملاءك المرونة التي يتوقعونها.',
          '/images/pages/business/scroll/integrations.webp',
        ),
        item(
          2,
          'فواتير رقمية',
          'أرسل فواتير احترافية تلقائياً بعد كل خدمة. حافظ على سجلاتك نظيفة ومنظمة.',
          '/images/features/business/schedule-page.webp',
        ),
        item(
          3,
          'إدارة الإكراميات',
          'دع العملاء يضيفون الإكراميات أثناء الدفع. الإكراميات تذهب مباشرة للمحترف المناسب.',
          '/images/pages/customer/scroll/home-screen.webp',
        ),
      ],
      growth: [
        item(
          1,
          'إدارة فروع متعددة',
          'أدر مواقع متعددة من لوحة تحكم واحدة. قارن الأداء وخصص الموارد حيث تهم أكثر.',
          '/images/pages/business/scroll/vendor-intro.webp',
        ),
        item(
          2,
          'إدارة الفريق',
          'أضف موظفين، حدد الجداول، عيّن الخدمات، وتتبع الأداء. ابنِ فريقاً يزدهر.',
          '/images/pages/customer/scroll/experiences.webp',
        ),
        item(
          3,
          'ولاء العملاء',
          'ابنِ علاقات دائمة مع برامج ولاء مدمجة. كافئ العملاء المتكررين وزِد القيمة مدى الحياة.',
          '/images/pages/business/scroll/vendor-intro.webp',
        ),
        item(
          4,
          'خطط الاشتراك',
          'قدّم حزم عضوية تضمن إيرادات متكررة. العملاء يلتزمون، وأنت تنمو.',
          '/images/pages/business/scroll/vendor-intro.webp',
        ),
      ],
      control: [
        item(
          1,
          'علامة تجارية مخصصة',
          'اجعل ديزي تبدو كأنها ملكك. خصص الألوان والشعارات والعناصر التي يراها العميل لتتناسب مع علامتك.',
          '/images/pages/business/scroll/vendor-intro.webp',
        ),
        item(
          2,
          'صفحة حجز مخصصة',
          'أنشئ صفحة حجز بعلامتك التجارية تعيش على موقعك الإلكتروني. علامتك، تجربة عملائك.',
          '/images/features/business/vendor-intro-alt.webp',
        ),
        item(
          3,
          'أذونات حسب الدور',
          'تحكم في من يرى ماذا. حدد الأذونات للمديرين وموظفي الاستقبال والمحترفين بشكل مستقل.',
          '/images/pages/customer/scroll/rating.webp',
        ),
      ],
      reports: [
        item(
          1,
          'تحليلات الإيرادات',
          'تتبع الإيرادات اليومية والأسبوعية والشهرية مع تفاصيل حسب الخدمة والمحترف والفرع.',
          '/images/pages/business/scroll/analytics.webp',
        ),
        item(
          2,
          'رؤى العملاء',
          'افهم قاعدة عملائك من خلال الديموغرافيا وتكرار الزيارات وأنماط الإنفاق. اتخذ قرارات مبنية على البيانات.',
          '/images/features/business/analytics-alt.webp',
        ),
        item(
          3,
          'أداء الموظفين',
          'راقب مقاييس كل محترف: الحجوزات والإيرادات والتقييمات ومعدلات الاحتفاظ بالعملاء.',
          '/images/pages/professional/scroll/staff-details.webp',
        ),
      ],
    },
    firstImage: {
      data: [
        { attributes: { url: '/images/features/business/phone-first.webp' } },
      ],
    },
    secondImage: {
      data: [
        { attributes: { url: '/images/features/business/ipad-tablet-dashboard-mockup.webp' } },
      ],
    },
    thirdImage: {
      data: [
        { attributes: { url: '/images/features/business/phone-last.webp' } },
      ],
    },
    firstMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/phone-first.webp',
          },
        },
      ],
    },
    secondMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/ipad-tablet-dashboard-mockup.webp',
          },
        },
      ],
    },
    thirdMobileImage: {
      data: [
        {
          attributes: {
            url: '/images/features/business/phone-last.webp',
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
