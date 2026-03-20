import { I18nContent } from '@/lib/constants/i18n';
import { LandingPageContent } from '@/lib/constants/pages/scrollSections.types';
import { businessPageData } from '@/lib/constants/pages/businessPage';
import { professionalPageData } from '@/lib/constants/pages/professionalPage';
import { registerAngle } from './index';

// ---------------------------------------------------------------------------
// AI Receptionist angle — reuses main landing page content for scroll sections,
// stats, howItWorks, pricingHook, platformStrengths, inlineCtas, and FAQs.
// Only the hero and answer block differ per angle.
// ---------------------------------------------------------------------------

const aiReceptionistAngle: Record<
  'business' | 'professional',
  I18nContent<LandingPageContent>
> = {
  business: {
    en: {
      ...businessPageData.en,
      hero: {
        categoryLabel: 'AI RECEPTIONIST FOR BUSINESS',
        headline: 'Every Customer Message Answered. Instantly.',
        subHeadline:
          "Daisy's AI receptionist handles every WhatsApp and Instagram inquiry, books appointments, and processes payments, 24/7. One platform replaces your entire front desk.",
        ctaText: 'Start Your 14-Day Free Trial',
        ctaLink: '/start-free-trial/business',
        trustLine: 'No credit card required. Our team helps you set up.',
        answerBlock: {
          question: 'How does the Daisy AI receptionist work for beauty businesses?',
          answer:
            "The Daisy AI receptionist handles your WhatsApp and Instagram messages 24/7. It answers customer questions, checks staff availability, books appointments, and processes payments automatically. It learns your services, pricing, and preferences over time to provide personalized responses in 10+ languages.",
        },
      },
    },
    ar: {
      ...businessPageData.ar,
      hero: {
        categoryLabel: 'موظف الاستقبال الذكي للأعمال',
        headline: 'كل رسالة عميل تُجاب. فورًا.',
        subHeadline:
          'موظف الاستقبال الذكي من ديزي يتولى كل استفسار على واتساب وإنستغرام، يحجز المواعيد، ويعالج المدفوعات، على مدار الساعة. منصة واحدة تحل محل مكتب الاستقبال بالكامل.',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
        ctaLink: '/start-free-trial/business',
        trustLine: 'لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد.',
        answerBlock: {
          question: 'كيف يعمل موظف الاستقبال الذكي من ديزي لأعمال التجميل؟',
          answer:
            'يتولى موظف الاستقبال الذكي من ديزي رسائل واتساب وإنستغرام الخاصة بك على مدار الساعة. يجيب على أسئلة العملاء، يتحقق من توافر الموظفين، يحجز المواعيد، ويعالج المدفوعات تلقائيًا. يتعلم خدماتك وأسعارك وتفضيلاتك بمرور الوقت لتقديم ردود مخصصة بأكثر من 10 لغات.',
        },
      },
    },
  },
  professional: {
    en: {
      ...professionalPageData.en,
      hero: {
        categoryLabel: 'AI RECEPTIONIST FOR PROFESSIONALS',
        headline: 'Focus on Your Craft.\nDaisy Handles the Rest.',
        subHeadline:
          "Stop being your own receptionist. Daisy's AI handles your WhatsApp and Instagram messages, books appointments, and processes payments, while you focus on what you do best.",
        ctaText: 'Start Your Free Trial',
        ctaLink: '/start-free-trial/professional',
        trustLine: 'Free to join. No credit card required.',
        answerBlock: {
          question: 'How does the Daisy AI receptionist help beauty professionals?',
          answer:
            "The Daisy AI receptionist manages your WhatsApp and Instagram messages 24/7 while you focus on clients. It handles booking requests, answers service questions, and processes payments automatically. You set your hours and services, and Daisy fills your calendar without interrupting your work.",
        },
      },
    },
    ar: {
      ...professionalPageData.ar,
      hero: {
        categoryLabel: 'موظف الاستقبال الذكي للمتخصصين',
        headline: 'ركّز على إبداعك.\nديزي تتولى الباقي.',
        subHeadline:
          'توقف عن كونك موظف استقبال نفسك. الذكاء الاصطناعي في ديزي يتولى رسائل واتساب وإنستغرام، يحجز المواعيد، ويعالج المدفوعات، بينما تركز على ما تتقنه.',
        ctaText: 'ابدأ تجربتك المجانية',
        ctaLink: '/start-free-trial/professional',
        trustLine: 'الانضمام مجاني. لا حاجة لبطاقة ائتمان.',
        answerBlock: {
          question: 'كيف يساعد موظف الاستقبال الذكي من ديزي متخصصي التجميل؟',
          answer:
            'يدير موظف الاستقبال الذكي من ديزي رسائل واتساب وإنستغرام الخاصة بك على مدار الساعة بينما تركز على العملاء. يتولى طلبات الحجز ويجيب على أسئلة الخدمات ويعالج المدفوعات تلقائيًا. حدد ساعات عملك وخدماتك وديزي تملأ تقويمك دون مقاطعة عملك.',
        },
      },
    },
  },
};

registerAngle('ai-receptionist', aiReceptionistAngle);
