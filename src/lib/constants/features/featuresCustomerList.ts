import { I18nContent } from '../i18n';
import { FeatureListItem } from '@/types/strapi';

export interface FeaturesCustomerPageContent {
  title: string;
  titleScroll: string;
  featureList: FeatureListItem[];
}

export const featuresCustomerData: I18nContent<FeaturesCustomerPageContent> = {
  en: {
    title: 'Everything You Need to Book, Save & Shine',
    titleScroll: 'Customer Features',
    featureList: [
      {
        id: 1,
        attributes: {
          sortId: 1,
          title: 'Cashback Magic',
          description:
            'Earn real cashback on every booking. The more you book, the more you save. Your beauty routine now pays you back.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-1.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-1-mobile.png',
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
          title: 'Manage Your Bookings',
          description:
            'Book, reschedule, or cancel appointments with a single tap. Your calendar, your control.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-2.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-2-mobile.png',
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
          title: 'Rate & Earn Points',
          description:
            'Share your experience and earn bonus points. Your honest reviews help the community and reward you.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-3.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-3-mobile.png',
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
          title: 'Discover Top Services',
          description:
            'Browse curated beauty and wellness services near you. Filter by rating, price, and availability.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-4.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-4-mobile.png',
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
          title: 'Wallet & Rewards',
          description:
            'Track your cashback balance, redeem rewards, and manage payments all in one place.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-5.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-5-mobile.png',
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
          title: 'Personalized Recommendations',
          description:
            'Get AI-powered suggestions based on your preferences, past bookings, and trending services.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-6.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-6-mobile.png',
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
    title: 'كل ما تحتاجه للحجز والتوفير والتألق',
    titleScroll: 'ميزات العملاء',
    featureList: [
      {
        id: 1,
        attributes: {
          sortId: 1,
          title: 'سحر الكاش باك',
          description:
            'احصل على كاش باك حقيقي مع كل حجز. كلما حجزت أكثر، وفرت أكثر. روتين جمالك الآن يكافئك.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-1.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-1-mobile.png',
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
          title: 'إدارة حجوزاتك',
          description:
            'احجز أو أعد الجدولة أو ألغِ المواعيد بنقرة واحدة. تقويمك، تحكمك.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-2.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-2-mobile.png',
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
          title: 'قيّم واكسب نقاط',
          description:
            'شارك تجربتك واكسب نقاط إضافية. تقييماتك الصادقة تساعد المجتمع وتكافئك.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-3.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-3-mobile.png',
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
          title: 'اكتشف أفضل الخدمات',
          description:
            'تصفح خدمات الجمال والعافية المختارة بالقرب منك. فلتر حسب التقييم والسعر والتوفر.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-4.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-4-mobile.png',
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
          title: 'المحفظة والمكافآت',
          description:
            'تتبع رصيد الكاش باك، استبدل المكافآت، وأدر المدفوعات كلها في مكان واحد.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-5.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-5-mobile.png',
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
          title: 'توصيات مخصصة',
          description:
            'احصل على اقتراحات مدعومة بالذكاء الاصطناعي بناءً على تفضيلاتك وحجوزاتك السابقة والخدمات الرائجة.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-6.png',
                },
              },
            ],
          },
          stylePicture: { width: '80%', maxWidth: '300px', margin: '0 auto' },
          mobilePicture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/feature-6-mobile.png',
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
