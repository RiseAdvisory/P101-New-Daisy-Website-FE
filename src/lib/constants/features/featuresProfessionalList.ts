import { I18nContent } from '../i18n';
import { FeatureListItem } from '@/types/strapi';

export interface FeaturesProfessionalPageContent {
  title: string;
  titleScroll: string;
  featureList: FeatureListItem[];
}

export const featuresProfessionalData: I18nContent<FeaturesProfessionalPageContent> =
  {
    en: {
      title: 'Tools Built for Beauty Professionals',
      titleScroll: 'Professional Features',
      featureList: [
        {
          id: 1,
          attributes: {
            sortId: 1,
            title: 'Smart Calendar Management',
            description:
              'Manage your schedule with an intelligent calendar that syncs across devices. Set availability, block time off, and let clients book open slots automatically.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-1.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-1-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
        {
          id: 2,
          attributes: {
            sortId: 2,
            title: 'Client Profiles & History',
            description:
              'Access detailed client profiles with booking history, preferences, and notes. Deliver personalized service every time.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-2.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-2-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
        {
          id: 3,
          attributes: {
            sortId: 3,
            title: 'Earnings Dashboard',
            description:
              'Track your income in real-time. See daily, weekly, and monthly earnings breakdowns with tips and commission details.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-3.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-3-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
        {
          id: 4,
          attributes: {
            sortId: 4,
            title: 'Service Menu Builder',
            description:
              'Create and customize your service menu with pricing, duration, and descriptions. Showcase your specialties to attract the right clients.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-4.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-4-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
        {
          id: 5,
          attributes: {
            sortId: 5,
            title: 'Flexible Scheduling',
            description:
              'Set your own hours and work on your terms. Daisy gives you complete control over when and where you work.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-5.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-5-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
        {
          id: 6,
          attributes: {
            sortId: 6,
            title: 'Instant Notifications',
            description:
              'Never miss a booking. Get real-time alerts for new appointments, cancellations, and client messages.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-6.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-6-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
      ],
    },
    ar: {
      title: 'أدوات مصممة لمحترفي الجمال',
      titleScroll: 'ميزات المحترفين',
      featureList: [
        {
          id: 1,
          attributes: {
            sortId: 1,
            title: 'إدارة التقويم الذكي',
            description:
              'أدر جدولك بتقويم ذكي يتزامن عبر الأجهزة. حدد التوفر، وأوقات الراحة، ودع العملاء يحجزون تلقائياً.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-1.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-1-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
        {
          id: 2,
          attributes: {
            sortId: 2,
            title: 'ملفات العملاء والتاريخ',
            description:
              'الوصول إلى ملفات العملاء التفصيلية مع تاريخ الحجوزات والتفضيلات والملاحظات. قدّم خدمة مخصصة في كل مرة.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-2.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-2-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
        {
          id: 3,
          attributes: {
            sortId: 3,
            title: 'لوحة الأرباح',
            description:
              'تتبع دخلك في الوقت الفعلي. شاهد تفاصيل الأرباح اليومية والأسبوعية والشهرية مع الإكراميات والعمولات.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-3.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-3-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
        {
          id: 4,
          attributes: {
            sortId: 4,
            title: 'منشئ قائمة الخدمات',
            description:
              'أنشئ وخصص قائمة خدماتك بالأسعار والمدة والأوصاف. اعرض تخصصاتك لجذب العملاء المناسبين.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-4.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-4-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
        {
          id: 5,
          attributes: {
            sortId: 5,
            title: 'جدولة مرنة',
            description:
              'حدد ساعاتك الخاصة واعمل وفق شروطك. ديزي تمنحك تحكماً كاملاً في متى وأين تعمل.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-5.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-5-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
        {
          id: 6,
          attributes: {
            sortId: 6,
            title: 'إشعارات فورية',
            description:
              'لا تفوّت أي حجز. احصل على تنبيهات فورية للمواعيد الجديدة والإلغاءات ورسائل العملاء.',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-6.png',
                  },
                },
              ],
            },
            stylePicture: {
              width: '80%',
              maxWidth: '300px',
              margin: '0 auto',
            },
            mobilePicture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/feature-6-mobile.png',
                  },
                },
              ],
            },
            mobileStylePicture: {
              width: '70%',
              maxWidth: '260px',
              margin: '0 auto',
            },
          },
        },
      ],
    },
  };
