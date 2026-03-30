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
                  url: '/images/features/customer/phone-1.webp',
                },
              },
            ],
          },
          stylePicture: { width: '100%', height: '100%', padding: '24px', objectFit: 'contain' },
          mobilePicture: {
            data: null,
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
          title: 'Rate & Earn Points',
          description:
            'Share your experience and earn bonus points. Your honest reviews help the community and reward you.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/phone-2.webp',
                },
              },
            ],
          },
          stylePicture: { width: '100%', height: '100%', padding: '24px', objectFit: 'contain' },
          mobilePicture: {
            data: null,
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
                  url: '/images/features/customer/phone-1.webp',
                },
              },
            ],
          },
          stylePicture: { width: '100%', height: '100%', padding: '24px', objectFit: 'contain' },
          mobilePicture: {
            data: null,
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
          title: 'قيّم واكسب نقاط',
          description:
            'شارك تجربتك واكسب نقاط إضافية. تقييماتك الصادقة تساعد المجتمع وتكافئك.',
          picture: {
            data: [
              {
                attributes: {
                  url: '/images/features/customer/phone-2.webp',
                },
              },
            ],
          },
          stylePicture: { width: '100%', height: '100%', padding: '24px', objectFit: 'contain' },
          mobilePicture: {
            data: null,
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
