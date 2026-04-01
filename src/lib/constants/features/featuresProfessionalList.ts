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
      title: 'Easy, Flexible and Powerful, You will love it!',
      titleScroll: 'Explore the features',
      featureList: [
        {
          id: 1,
          attributes: {
            sortId: 11,
            title: 'AI Receptionist',
            description:
              'Handles client conversations on WhatsApp and Instagram around the clock',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/ai-receptionist.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
            sortId: 12,
            title: 'AI Appointment Booking',
            description:
              'Automatically books, reschedules, and cancels appointments via conversation',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/ai-booking.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 0px 0px 0px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 3,
          attributes: {
            sortId: 13,
            title: 'Multilingual Support',
            description:
              'Understands English, Arabic, voice messages, and mixed language input',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/multilingual-ai.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
          id: 4,
          attributes: {
            sortId: 14,
            title: '24/7 Availability',
            description:
              'Never miss a client inquiry even outside your working hours',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/247-concierge.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
          id: 5,
          attributes: {
            sortId: 21,
            title: 'Online Booking Page',
            description:
              'Clients book your services through a branded personal booking link',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/smart-calender.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
          id: 6,
          attributes: {
            sortId: 22,
            title: 'Smart Calendar',
            description:
              'View and manage your daily, weekly, and monthly appointments easily',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/smart-calender.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
          id: 7,
          attributes: {
            sortId: 23,
            title: 'Google Calendar Sync',
            description:
              'Two-way sync keeps your personal and work schedules aligned',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/google-sync.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 0px 24px 0px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 8,
          attributes: {
            sortId: 24,
            title: 'Automated Reminders',
            description:
              'Reduce no-shows with automatic booking reminders sent to clients',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/meta-integration.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 9,
          attributes: {
            sortId: 31,
            title: 'WhatsApp Notifications',
            description:
              'Send booking confirmations and reminders to clients via WhatsApp',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/meta-integration.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 10,
          attributes: {
            sortId: 32,
            title: 'Meta Integration',
            description:
              'Manage client conversations from WhatsApp & Instagram directly in one place',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/meta-integration.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 11,
          attributes: {
            sortId: 33,
            title: 'Push & Email Alerts',
            description:
              'Instant notifications keep you updated on every booking and change',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/push-email-alerts.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 12,
          attributes: {
            sortId: 34,
            title: 'Contact Sync',
            description:
              'Import phone contacts to quickly find and add existing clients',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/contact-sync.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 13,
          attributes: {
            sortId: 41,
            title: 'Branded Booking Site',
            description:
              'A themed personal website with your services and booking link',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/service-portfolio.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '0px 24px 24px 24px',
              objectFit: 'contain',
              objectPosition: 'top',
            },
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
          id: 14,
          attributes: {
            sortId: 42,
            title: 'Service Portfolio',
            description:
              'Showcase your best work with photos and videos online',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/service-portfolio.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '0px 24px 24px 24px',
              objectFit: 'contain',
              objectPosition: 'top',
            },
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
          id: 15,
          attributes: {
            sortId: 43,
            title: 'Marketplace Visibility',
            description:
              'Get discovered by new clients searching the Daisy marketplace app',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/marketplace.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '105px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 16,
          attributes: {
            sortId: 44,
            title: 'Cashback Promotions',
            description:
              'Attract clients with flash and regular cashback offers on services',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/cashback-promotions.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 17,
          attributes: {
            sortId: 51,
            title: 'Online Payments',
            description:
              'Accept card, KNET, wallet, and online link payments from clients',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/client-insights.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 18,
          attributes: {
            sortId: 52,
            title: 'In-Person Checkout',
            description:
              'Process walk-in payments with a built-in point-of-sale system',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/client-insights.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 19,
          attributes: {
            sortId: 53,
            title: 'Earnings Tracking',
            description:
              'Monitor your revenue and track income across all your services',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/earnings-tracking.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 20,
          attributes: {
            sortId: 54,
            title: 'Invoice Management',
            description:
              'Generate and send professional invoices to your clients instantly',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/invoice-management.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 21,
          attributes: {
            sortId: 61,
            title: 'Client Database',
            description:
              'Build a personal CRM with complete client profiles and history',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/client-database.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 22,
          attributes: {
            sortId: 62,
            title: 'Reputation Building',
            description:
              'Grow through verified client reviews, ratings, and social proof',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/reputation-building.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 23,
          attributes: {
            sortId: 63,
            title: 'Social Media Link',
            description:
              'Share your booking link across social media to attract clients',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/social-media-link.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '0px 24px 24px 24px',
              objectFit: 'contain',
              objectPosition: 'top',
            },
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
          id: 24,
          attributes: {
            sortId: 64,
            title: 'Multi-Workspace Support',
            description:
              'Offer your services across multiple locations or workspace profiles',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/multi-workspace.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 25,
          attributes: {
            sortId: 71,
            title: 'Service Management',
            description:
              'Create and organize your services, pricing, packages, and add-ons',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/service-management.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 26,
          attributes: {
            sortId: 72,
            title: 'Schedule Control',
            description:
              'Set your working hours, breaks, holidays, and blocked times',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/schedule-control.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 27,
          attributes: {
            sortId: 73,
            title: 'Cancellation Policy',
            description:
              'Enforce your own cancellation rules with automated fee processing',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/cancellation-policy.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 28,
          attributes: {
            sortId: 74,
            title: 'Client Blacklisting',
            description:
              'Block problem clients to protect your time and business',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/client-insights.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 29,
          attributes: {
            sortId: 81,
            title: 'Earnings Reports',
            description:
              'View detailed breakdowns of your income across all services',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/earnings-reports.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 30,
          attributes: {
            sortId: 82,
            title: 'Booking Analytics',
            description:
              'Track appointment trends, completion rates, and no-show patterns',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/booking-analysis.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 31,
          attributes: {
            sortId: 83,
            title: 'Client Insights',
            description:
              'Understand your client base with retention and activity data',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/client-insights.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 32,
          attributes: {
            sortId: 84,
            title: 'Downloadable Reports',
            description:
              'Export your performance data for any custom date range',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/downloadable-reports.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
      title: 'سهلة ومرنة وقوية، سيحبها عملاؤك!',
      titleScroll: 'استكشف المميزات',
      featureList: [
        {
          id: 1,
          attributes: {
            sortId: 11,
            title: 'موظف استقبال ذكي',
            description:
              'يتولى محادثات العملاء على واتساب وإنستغرام على مدار الساعة',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/ai-receptionist.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
            sortId: 12,
            title: 'حجز المواعيد بالذكاء الاصطناعي',
            description:
              'يحجز ويعيد جدولة ويلغي المواعيد تلقائياً عبر المحادثة',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/ai-booking.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
          id: 3,
          attributes: {
            sortId: 13,
            title: 'دعم متعدد اللغات',
            description:
              'يفهم الإنجليزية والعربية والرسائل الصوتية والنصوص المختلطة',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/multilingual-ai.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
          id: 4,
          attributes: {
            sortId: 14,
            title: 'متاح على مدار الساعة',
            description:
              'لا تفوّت أي استفسار من العملاء حتى خارج ساعات العمل',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/247-concierge.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
          id: 5,
          attributes: {
            sortId: 21,
            title: 'صفحة الحجز الإلكتروني',
            description:
              'يحجز العملاء خدماتك من خلال رابط حجز شخصي يحمل علامتك التجارية',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/smart-calender.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
          id: 6,
          attributes: {
            sortId: 22,
            title: 'تقويم ذكي',
            description:
              'عرض وإدارة مواعيدك اليومية والأسبوعية والشهرية بسهولة',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/smart-calender.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
          id: 7,
          attributes: {
            sortId: 23,
            title: 'مزامنة تقويم جوجل',
            description:
              'مزامنة ثنائية الاتجاه تحافظ على توافق جداولك الشخصية والمهنية',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/google-sync.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 0px 24px 0px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 8,
          attributes: {
            sortId: 24,
            title: 'تذكيرات تلقائية',
            description:
              'قلل حالات عدم الحضور بتذكيرات حجز تلقائية تُرسل للعملاء',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/meta-integration.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 9,
          attributes: {
            sortId: 31,
            title: 'إشعارات واتساب',
            description:
              'أرسل تأكيدات الحجز والتذكيرات للعملاء عبر واتساب',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/meta-integration.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 10,
          attributes: {
            sortId: 32,
            title: 'تكامل رسائل إنستغرام',
            description:
              'أدر محادثات العملاء من إنستغرام مباشرة في مكان واحد',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/meta-integration.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 11,
          attributes: {
            sortId: 33,
            title: 'تنبيهات فورية وبريد إلكتروني',
            description:
              'إشعارات فورية تبقيك على اطلاع بكل حجز وتغيير',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/push-email-alerts.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 12,
          attributes: {
            sortId: 34,
            title: 'مزامنة جهات الاتصال',
            description:
              'استورد جهات اتصال هاتفك للعثور على العملاء الحاليين وإضافتهم بسرعة',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/contact-sync.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 13,
          attributes: {
            sortId: 41,
            title: 'موقع حجز بعلامتك التجارية',
            description:
              'موقع شخصي بتصميم مميز يعرض خدماتك ورابط الحجز الخاص بك',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/service-portfolio.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '0px 24px 24px 24px',
              objectFit: 'contain',
              objectPosition: 'top',
            },
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
          id: 14,
          attributes: {
            sortId: 42,
            title: 'معرض الأعمال',
            description:
              'اعرض أفضل أعمالك بالصور والفيديوهات عبر الإنترنت',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/service-portfolio.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '0px 24px 24px 24px',
              objectFit: 'contain',
              objectPosition: 'top',
            },
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
          id: 15,
          attributes: {
            sortId: 43,
            title: 'الظهور في السوق',
            description:
              'اجعل العملاء الجدد يكتشفونك عبر البحث في تطبيق ديزي',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/marketplace.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '105px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 16,
          attributes: {
            sortId: 44,
            title: 'عروض الكاش باك',
            description:
              'اجذب العملاء بعروض كاش باك فورية ومنتظمة على الخدمات',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/cashback-promotions.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 17,
          attributes: {
            sortId: 51,
            title: 'الدفع الإلكتروني',
            description:
              'اقبل المدفوعات بالبطاقة وكي نت والمحفظة والروابط الإلكترونية من العملاء',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/client-insights.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 18,
          attributes: {
            sortId: 52,
            title: 'الدفع الحضوري',
            description:
              'عالج مدفوعات الزيارات المباشرة بنظام نقطة بيع مدمج',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/client-insights.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 19,
          attributes: {
            sortId: 53,
            title: 'تتبع الأرباح',
            description:
              'راقب إيراداتك وتتبع دخلك عبر جميع خدماتك',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/earnings-tracking.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 20,
          attributes: {
            sortId: 54,
            title: 'إدارة الفواتير',
            description:
              'أنشئ وأرسل فواتير احترافية لعملائك فوراً',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/invoice-management.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 21,
          attributes: {
            sortId: 61,
            title: 'قاعدة بيانات العملاء',
            description:
              'أنشئ نظام إدارة علاقات عملاء شخصي بملفات وسجلات كاملة',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/client-database.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 22,
          attributes: {
            sortId: 62,
            title: 'بناء السمعة',
            description:
              'انمُ من خلال تقييمات العملاء الموثقة والتصنيفات والإثبات الاجتماعي',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/reputation-building.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 23,
          attributes: {
            sortId: 63,
            title: 'رابط وسائل التواصل',
            description:
              'شارك رابط حجزك عبر وسائل التواصل الاجتماعي لجذب العملاء',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/social-media-link.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '0px 24px 24px 24px',
              objectFit: 'contain',
              objectPosition: 'top',
            },
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
          id: 24,
          attributes: {
            sortId: 64,
            title: 'دعم مساحات عمل متعددة',
            description:
              'قدّم خدماتك عبر مواقع أو ملفات مساحات عمل متعددة',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/multi-workspace.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 25,
          attributes: {
            sortId: 71,
            title: 'إدارة الخدمات',
            description:
              'أنشئ ونظّم خدماتك وأسعارك وباقاتك وإضافاتك',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/service-management.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 26,
          attributes: {
            sortId: 72,
            title: 'التحكم بالجدول',
            description:
              'حدد ساعات عملك واستراحاتك وإجازاتك وأوقاتك المحجوبة',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/schedule-control.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 27,
          attributes: {
            sortId: 73,
            title: 'سياسة الإلغاء',
            description:
              'طبّق قواعد الإلغاء الخاصة بك مع معالجة تلقائية للرسوم',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/cancellation-policy.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 28,
          attributes: {
            sortId: 74,
            title: 'حظر العملاء',
            description:
              'احظر العملاء المزعجين لحماية وقتك وعملك',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/client-insights.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 29,
          attributes: {
            sortId: 81,
            title: 'تقارير الأرباح',
            description:
              'اطّلع على تفاصيل دخلك عبر جميع الخدمات',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/earnings-reports.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 30,
          attributes: {
            sortId: 82,
            title: 'تحليلات الحجوزات',
            description:
              'تتبع اتجاهات المواعيد ومعدلات الإكمال وأنماط عدم الحضور',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/booking-analysis.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 31,
          attributes: {
            sortId: 83,
            title: 'رؤى العملاء',
            description:
              'افهم قاعدة عملائك من خلال بيانات الاحتفاظ والنشاط',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/client-insights.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px 24px 0px 24px',
              objectFit: 'contain',
              objectPosition: 'bottom',
            },
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
          id: 32,
          attributes: {
            sortId: 84,
            title: 'تقارير قابلة للتحميل',
            description:
              'صدّر بيانات أدائك لأي نطاق تاريخ مخصص',
            picture: {
              data: [
                {
                  attributes: {
                    url: '/images/features/professional/downloadable-reports.webp',
                  },
                },
              ],
            },
            stylePicture: {
              width: '100%',
              height: '100%',
              padding: '24px',
              objectFit: 'contain',
            },
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
