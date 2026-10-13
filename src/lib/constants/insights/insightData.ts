import { I18nContent } from '../i18n';

export interface StatCategory {
  category: string;
  stats: {
    value: string;
    description: string;
    source: string;
  }[];
}

export const industryStats: StatCategory[] = [
  {
    category: 'Market Size & Growth',
    stats: [
      {
        value: '$712M',
        description: 'Projected global salon software market size by 2028',
        source: 'Grand View Research',
      },
      {
        value: '12.5%',
        description: 'Compound annual growth rate (CAGR) of beauty tech industry',
        source: 'Allied Market Research',
      },
      {
        value: '$532B',
        description: 'Global beauty and personal care market value in 2025',
        source: 'Statista',
      },
      {
        value: '87%',
        description: 'Of salon owners say technology is essential for business growth',
        source: 'Salon Today survey',
      },
    ],
  },
  {
    category: 'Booking & Scheduling',
    stats: [
      {
        value: '67%',
        description: 'Of beauty customers prefer booking online vs. calling',
        source: 'GetApp survey',
      },
      {
        value: '40%',
        description: 'Increase in appointments when salons offer 24/7 online booking',
        source: 'Salon booking platform data',
      },
      {
        value: '46%',
        description: 'Of all Google searches have local intent (relevant for salon discovery)',
        source: 'Google',
      },
    ],
  },
  {
    category: 'No-Shows & Cancellations',
    stats: [
      {
        value: '20-30%',
        description: 'Average no-show rate for salons without prevention measures',
        source: 'Industry average estimates',
      },
      {
        value: '30-40%',
        description: 'Reduction in no-shows with automated SMS/email reminders',
        source: 'Salon software platform data',
      },
      {
        value: '$67,000',
        description: 'Estimated annual revenue lost per salon due to no-shows',
        source: 'Industry calculations',
      },
      {
        value: '95%',
        description: 'Open rate for SMS appointment reminders (vs. 20% for email)',
        source: 'SMS marketing benchmarks',
      },
    ],
  },
  {
    category: 'Customer Acquisition & Retention',
    stats: [
      {
        value: '$25-50',
        description: 'Average cost to acquire a new salon client through paid advertising',
        source: 'Digital marketing benchmarks',
      },
      {
        value: '5x',
        description: 'It costs 5x more to acquire a new customer than retain an existing one',
        source: 'Harvard Business Review',
      },
      {
        value: '20-30%',
        description: 'Increase in customer lifetime value with cashback loyalty programs',
        source: 'Loyalty program research',
      },
      {
        value: '3x',
        description: 'More new bookings for salons with 50+ reviews and 4.5+ star rating',
        source: 'BrightLocal consumer survey',
      },
    ],
  },
  {
    category: 'AI & Automation in Beauty',
    stats: [
      {
        value: '73%',
        description: 'Of service businesses plan to increase AI investment by 2027',
        source: 'McKinsey Global Survey',
      },
      {
        value: '10+ hours',
        description: 'Per week saved by salon owners using AI scheduling and automation',
        source: 'Salon software user surveys',
      },
      {
        value: '24/7',
        description: 'AI receptionists run round-the-clock and capture after-hours revenue',
        source: 'AI receptionist platform data',
      },
    ],
  },
  {
    category: 'GCC Beauty Market',
    stats: [
      {
        value: '$28B',
        description: 'GCC beauty and personal care market value',
        source: 'Euromonitor International',
      },
      {
        value: '15%+',
        description: 'Annual growth rate of beauty services in UAE and Saudi Arabia',
        source: 'Regional market reports',
      },
      {
        value: '70%+',
        description: 'Of GCC beauty consumers use mobile apps for service bookings',
        source: 'Regional consumer surveys',
      },
      {
        value: '2',
        description: 'Languages (Arabic + English) required for full GCC market coverage',
        source: 'GCC demographics',
      },
    ],
  },
  {
    category: 'Payment & Revenue',
    stats: [
      {
        value: '2-3%',
        description: 'Typical transaction fee charged by payment processors (Daisy charges 0%)',
        source: 'Payment industry standard',
      },
      {
        value: '50%',
        description:
          'One-time commission Fresha publishes on each new client its UAE marketplace introduces (minimum AED 20; returning clients free)',
        source: 'Fresha published UAE pricing',
      },
      {
        value: '15-20%',
        description: 'Revenue increase reported by salons using integrated POS systems',
        source: 'POS adoption studies',
      },
      {
        value: '68%',
        description: 'Of customers prefer cashless payment options at salons',
        source: 'Consumer payment surveys',
      },
    ],
  },
];

const industryStatsAr: StatCategory[] = [
  {
    category: 'حجم السوق والنمو',
    stats: [
      {
        value: '$712 مليون',
        description: 'الحجم المتوقع لسوق برمجيات الصالونات عالمياً بحلول 2028',
        source: 'Grand View Research',
      },
      {
        value: '12.5%',
        description: 'معدل النمو السنوي المركّب لقطاع تكنولوجيا التجميل',
        source: 'Allied Market Research',
      },
      {
        value: '$532 مليار',
        description: 'قيمة سوق التجميل والعناية الشخصية عالمياً في 2025',
        source: 'Statista',
      },
      {
        value: '87%',
        description: 'من أصحاب الصالونات يؤكدون أن التكنولوجيا ضرورية لنمو أعمالهم',
        source: 'استطلاع Salon Today',
      },
    ],
  },
  {
    category: 'الحجز والجدولة',
    stats: [
      {
        value: '67%',
        description: 'من عملاء التجميل يفضلون الحجز عبر الإنترنت بدلاً من الاتصال الهاتفي',
        source: 'استطلاع GetApp',
      },
      {
        value: '40%',
        description: 'زيادة في المواعيد عند توفير خدمة الحجز الإلكتروني على مدار الساعة',
        source: 'بيانات منصات حجز الصالونات',
      },
      {
        value: '46%',
        description: 'من عمليات البحث على Google ذات طابع محلي (مهم لاكتشاف الصالونات)',
        source: 'Google',
      },
    ],
  },
  {
    category: 'حالات عدم الحضور والإلغاء',
    stats: [
      {
        value: '20-30%',
        description: 'متوسط معدل عدم الحضور في الصالونات التي لا تتخذ إجراءات وقائية',
        source: 'تقديرات متوسط القطاع',
      },
      {
        value: '30-40%',
        description: 'انخفاض في حالات عدم الحضور عند استخدام تذكيرات آلية عبر الرسائل النصية والبريد الإلكتروني',
        source: 'بيانات منصات برامج الصالونات',
      },
      {
        value: '$67,000',
        description: 'الإيرادات السنوية المقدّرة التي يخسرها كل صالون بسبب عدم حضور العملاء',
        source: 'حسابات القطاع',
      },
      {
        value: '95%',
        description: 'معدل فتح تذكيرات المواعيد عبر الرسائل النصية (مقابل 20% للبريد الإلكتروني)',
        source: 'معايير التسويق بالرسائل النصية',
      },
    ],
  },
  {
    category: 'استقطاب العملاء والاحتفاظ بهم',
    stats: [
      {
        value: '$25-50',
        description: 'متوسط تكلفة استقطاب عميل جديد للصالون عبر الإعلانات المدفوعة',
        source: 'معايير التسويق الرقمي',
      },
      {
        value: '5x',
        description: 'تكلفة استقطاب عميل جديد تبلغ 5 أضعاف تكلفة الاحتفاظ بعميل حالي',
        source: 'Harvard Business Review',
      },
      {
        value: '20-30%',
        description: 'زيادة في القيمة الدائمة للعميل مع برامج الولاء والاسترداد النقدي',
        source: 'أبحاث برامج الولاء',
      },
      {
        value: '3x',
        description: 'حجوزات جديدة أكثر للصالونات التي تمتلك أكثر من 50 تقييماً بمعدل 4.5+ نجوم',
        source: 'استطلاع المستهلكين من BrightLocal',
      },
    ],
  },
  {
    category: 'الذكاء الاصطناعي والأتمتة في قطاع التجميل',
    stats: [
      {
        value: '73%',
        description: 'من شركات الخدمات تخطط لزيادة استثماراتها في الذكاء الاصطناعي بحلول 2027',
        source: 'استطلاع McKinsey العالمي',
      },
      {
        value: '+10 ساعات',
        description: 'يوفرها أصحاب الصالونات أسبوعياً باستخدام الجدولة والأتمتة بالذكاء الاصطناعي',
        source: 'استطلاعات مستخدمي برامج الصالونات',
      },
      {
        value: '24/7',
        description: 'موظفو الاستقبال الافتراضيون يعملون على مدار الساعة لاستقطاب إيرادات خارج أوقات العمل',
        source: 'بيانات منصات الاستقبال الذكي',
      },
    ],
  },
  {
    category: 'سوق التجميل في دول مجلس التعاون الخليجي',
    stats: [
      {
        value: '$28 مليار',
        description: 'قيمة سوق التجميل والعناية الشخصية في دول مجلس التعاون الخليجي',
        source: 'Euromonitor International',
      },
      {
        value: '+15%',
        description: 'معدل النمو السنوي لخدمات التجميل في الإمارات والمملكة العربية السعودية',
        source: 'تقارير الأسواق الإقليمية',
      },
      {
        value: '+70%',
        description: 'من مستهلكي التجميل في دول الخليج يستخدمون تطبيقات الجوال لحجز الخدمات',
        source: 'استطلاعات المستهلكين الإقليمية',
      },
      {
        value: '2',
        description: 'لغتان (العربية + الإنجليزية) مطلوبتان لتغطية سوق دول الخليج بالكامل',
        source: 'التركيبة السكانية في الخليج',
      },
    ],
  },
  {
    category: 'المدفوعات والإيرادات',
    stats: [
      {
        value: '2-3%',
        description: 'رسوم المعاملات التي تفرضها معالجات الدفع عادةً (ديزي تفرض 0%)',
        source: 'معيار قطاع المدفوعات',
      },
      {
        value: '50%',
        description: 'عمولة لمرة واحدة تنشرها Fresha على كل عميل جديد يجلبه سوقها في الإمارات (بحد أدنى 20 درهماً؛ العملاء العائدون مجاناً)',
        source: 'أسعار Fresha المنشورة في الإمارات',
      },
      {
        value: '15-20%',
        description: 'زيادة في الإيرادات أبلغت عنها الصالونات التي تستخدم أنظمة نقاط بيع متكاملة',
        source: 'دراسات اعتماد نقاط البيع',
      },
      {
        value: '68%',
        description: 'من العملاء يفضلون خيارات الدفع الإلكتروني في الصالونات',
        source: 'استطلاعات مدفوعات المستهلكين',
      },
    ],
  },
];

export const insightsMetaTitle = 'Salon Industry Statistics 2026 | Beauty Business Data & Trends';
export const insightsMetaDescription =
  'Comprehensive salon industry statistics for 2026. Market size, booking trends, no-show rates, AI adoption, GCC beauty market data, and customer acquisition benchmarks.';

export const insightsData: I18nContent<StatCategory[]> = {
  en: industryStats,
  ar: industryStatsAr,
};

export const insightsMetaTitleI18n: I18nContent<string> = {
  en: insightsMetaTitle,
  ar: 'إحصائيات قطاع الصالونات 2026 | بيانات واتجاهات أعمال التجميل',
};

export const insightsMetaDescriptionI18n: I18nContent<string> = {
  en: insightsMetaDescription,
  ar: 'إحصائيات شاملة لقطاع الصالونات لعام 2026. حجم السوق، اتجاهات الحجز، معدلات عدم الحضور، تبني الذكاء الاصطناعي، بيانات سوق التجميل الخليجي، ومعايير استقطاب العملاء.',
};
