import { I18nContent } from '@/lib/constants/i18n';
import { LandingPageContent } from '@/lib/constants/pages/scrollSections.types';
import { registerAngle } from './index';

// ---------------------------------------------------------------------------
// Shared scroll section style objects (reused from main landing pages)
// ---------------------------------------------------------------------------
const scrollStyles = {
  panel1: {
    styleMainPictureJSON: {
      position: 'absolute',
      padding: '24px 0px 24px 24px',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'right',
    },
    styleFirstBgJSON: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '50%',
      maxWidth: '300px',
    },
    styleSecondBgJSON: {
      position: 'absolute',
      top: '40px',
      right: '30px',
      width: '100px',
    },
    styleBgMobileSecond: {
      position: 'absolute',
      top: '-70px',
      right: '-70px',
      width: '200px',
      height: '200px',
      transform: 'rotate(180deg) scaleX(-1)',
    },
    styleImageMobile: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      bottom: '0',
      left: '40px',
    },
  },
  panel2: {
    styleMainPictureJSON: {
      position: 'absolute',
      padding: '24px 24px 0px 24px',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'bottom',
    },
    styleFirstBgJSON: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '50%',
      maxWidth: '300px',
    },
    styleImageMobile: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      bottom: '0',
      left: '40px',
    },
  },
  panel3: {
    styleMainPictureJSON: {
      position: 'absolute',
      padding: '24px',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    styleFirstBgJSON: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '50%',
      maxWidth: '300px',
    },
    styleSecondBgJSON: {
      position: 'absolute',
      top: '40px',
      right: '30px',
      width: '100px',
    },
    styleBgMobileSecond: {
      position: 'absolute',
      top: '-70px',
      right: '-70px',
      width: '200px',
      height: '200px',
      transform: 'rotate(180deg) scaleX(-1)',
    },
    styleImageMobile: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      bottom: '0',
      left: '40px',
    },
  },
  panel4: {
    styleMainPictureJSON: {
      position: 'absolute',
      padding: '24px',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    styleFirstBgJSON: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '50%',
      maxWidth: '300px',
    },
    styleImageMobile: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      bottom: '0',
      left: '40px',
    },
  },
};

const unifiedInboxAngle: Record<
  'business' | 'professional',
  I18nContent<LandingPageContent>
> = {
  business: {
    en: {
      hero: {
        categoryLabel: 'UNIFIED INBOX FOR BUSINESS',
        headline: 'One Inbox for Every Customer Conversation.',
        subHeadline:
          'WhatsApp, Instagram and the rest, all in one place. No switching between apps, and nothing buried in a platform nobody checked.',
        ctaText: 'Start Your 14-Day Free Trial',
        ctaLink: '/get-the-app',
        trustLine: 'No credit card required. Our team helps you set up.',
        answerBlock: {
          question: 'What is a unified inbox for beauty businesses?',
          answer:
            'It pulls every customer message from WhatsApp, Instagram and your other channels into one dashboard. The team sees every conversation together, the AI answers when nobody can, and nothing falls between platforms.',
        },
      },
      scrollSections: [
        {
          sortId: 1,
          mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel1,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'A WhatsApp Message Arrives',
            text: 'Instant Notification in Your Inbox',
            description:
              'A customer asks about a colour appointment on WhatsApp. Rather than sitting on someone\'s phone, it lands in the dashboard beside every other conversation.',
            listSub: [
              'WhatsApp messages appear instantly',
              'Full conversation history visible',
              'AI can auto-respond if you are busy',
            ],
          },
        },
        {
          sortId: 2,
          mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel2,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'An Instagram DM Follows',
            text: 'Same Thread. Same Place.',
            description:
              'Minutes later another one arrives on Instagram, and the two sit side by side in the same inbox. Nothing to switch between and nothing missed.',
            listSub: [
              'Instagram DMs in the same view',
              'Conversations never get lost',
              'Context from every channel in one thread',
            ],
          },
        },
        {
          sortId: 3,
          mainImage: '/images/pages/business/scroll/payment-collection.webp', mainImageMobile: '/images/pages/business/scroll/payment-collection-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel3,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'Your Team Sees Everything',
            text: 'One Dashboard for All Channels',
            description:
              'Anyone on the team can read and reply from the same dashboard, assign a conversation to someone or leave an internal note, so nobody waits long for an answer.',
            listSub: [
              'Assign messages to team members',
              'Internal notes for collaboration',
              'Response time tracking',
            ],
          },
        },
        {
          sortId: 4,
          mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel4,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'Customer Gets a Seamless Experience',
            text: "They Don't Know You're Using Multiple Channels",
            description:
              "WhatsApp or Instagram, the reply is equally quick and equally personal, and your brand sounds the same on both.",
            listSub: [
              'Consistent brand voice everywhere',
              'Fast replies regardless of channel',
              'Customers feel personally attended to',
            ],
          },
        },
      ],
      socialProofStats: [
        { value: '2+', context: 'messaging channels unified' },
        { value: '0', context: 'messages lost between platforms' },
        { value: '24/7', context: 'AI monitors all channels' },
      ],
      howItWorks: {
        title: 'How It Works',
      steps: [
          { title: 'Sign up and tell us about your business', description: 'Takes 5 minutes. Your services, your staff, your hours.' },
          { title: 'Our team helps you get set up', description: 'We move your data across, set up the AI receptionist and test it all with you.' },
          { title: 'Go live. Your AI receptionist takes over.', description: 'Customers get an instant answer. You get the control.' },
        ],
      },
      pricingHook: {
        headline: 'Free to Start. Grow at Your Own Pace.',
        body: "A 14-day free trial with every feature open, no credit card. After that, flexible plans from $50/month. Your AI receptionist does more than answer messages: it learns what your customers like and turns first-time visitors into regulars. Commission applies only to new customers the Daisy marketplace sends you. On your existing clients, zero.",
        ctaText: 'Start Your 14-Day Free Trial',
        ctaLink: '/get-the-app',
        pricingLinkText: 'See full pricing details \u2192',
        pricingLinkHref: '/pricing',
      },
      platformStrengths: {
        headline: 'Everything You Need to Run Your Business',
        subHeadline:
          'Stop paying for 8 separate tools. Daisy holds everything you need to run and grow the business in one place.',
        capabilities: [
          { label: 'AI Receptionist', description: '24/7 WhatsApp and Instagram messaging, booking, and payments' },
          { label: 'Smart Booking', description: 'Intelligent scheduling that fills your calendar' },
          { label: 'Customer Acquisition', description: 'Marketplace, cashback, and marketing tools' },
          { label: 'Payments & Invoicing', description: 'Seamless transactions and financial tracking' },
          { label: 'Staff Management', description: 'Scheduling, permissions, and performance' },
          { label: 'Marketing Engine', description: 'Promotions, campaigns, and customer retention' },
          { label: 'Analytics Dashboard', description: 'Revenue trends, insights, and reporting' },
          { label: 'Brand Control', description: 'White-label everything with your brand' },
        ],
        stats: [
          { value: '2+', context: 'messaging channels unified' },
          { value: '24/7', context: 'AI receptionist' },
          { value: '10+', context: 'languages supported' },
        ],
      },
      inlineCtas: {
        afterScroll: {
          headline: 'Ready to unify your customer conversations?',
          ctaText: 'Start Your 14-Day Free Trial',
          ctaLink: '/get-the-app',
        },
        afterFeatures: {
          headline: 'Start Your 14-Day Free Trial',
          ctaText: 'Start Your 14-Day Free Trial',
          ctaLink: '/get-the-app',
          secondaryLinkText: 'Explore all features \u2192',
          secondaryLinkHref: '/features/business',
        },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'What channels does the unified inbox support?', answer: 'WhatsApp and Instagram DMs today, with more channels on the way. Everything lands in one dashboard, so no conversation gets missed.' },
        { question: 'Can multiple team members use it?', answer: 'Yes. The whole team can read, assign and reply from the same inbox, and internal notes make the handovers clean.' },
        { question: 'Does the AI respond across all channels?', answer: 'Yes. The AI receptionist monitors all connected channels 24/7 and responds instantly in the customer\'s preferred language, whether they message on WhatsApp or Instagram.' },
        { question: 'How does it handle messages after hours?', answer: 'The AI receptionist never goes off. Messages sent overnight get an instant reply, appointments get booked and payments get taken, and you read it all in the morning.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'صندوق الوارد الموحد للأعمال',
        headline: 'صندوق وارد واحد لكل محادثات العملاء.',
        subHeadline:
          'واتساب وإنستغرام والمزيد. كل رسائل عملائك في مكان واحد. لا مزيد من التنقل بين التطبيقات أو فقدان الرسائل المدفونة في منصات مختلفة.',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
        ctaLink: '/get-the-app',
        trustLine: 'لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد.',
        answerBlock: {
          question: 'ما هو صندوق الوارد الموحد لأعمال التجميل؟',
          answer:
            'صندوق الوارد الموحد يجمع كل رسائل عملائك من واتساب وإنستغرام والقنوات الأخرى في لوحة تحكم واحدة. فريقك يرى كل محادثة في مكان واحد، والذكاء الاصطناعي يرد فورًا عندما لا تستطيع، ولا تضيع أي رسالة بين المنصات.',
        },
      },
      scrollSections: [
        {
          sortId: 1,
          mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel1,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'رسالة واتساب تصل',
            text: 'إشعار فوري في صندوق الوارد',
            description:
              'عميل يرسل رسالة واتساب يسأل عن موعد لتلوين الشعر. بدلاً من التحقق من هاتفك، تظهر الرسالة في لوحة التحكم الموحدة مع كل المحادثات الأخرى.',
            listSub: [
              'رسائل واتساب تظهر فورًا',
              'سجل المحادثة الكامل مرئي',
              'الذكاء الاصطناعي يمكنه الرد تلقائيًا إذا كنت مشغولًا',
            ],
          },
        },
        {
          sortId: 2,
          mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel2,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'رسالة إنستغرام تتبع',
            text: 'نفس المحادثة. نفس المكان.',
            description:
              'بعد دقائق، عميل آخر يراسلك على إنستغرام. كلتا المحادثتين جنبًا إلى جنب في نفس صندوق الوارد. بدون تبديل تطبيقات، بدون إشعارات فائتة.',
            listSub: [
              'رسائل إنستغرام في نفس العرض',
              'المحادثات لا تضيع أبدًا',
              'سياق كل قناة في محادثة واحدة',
            ],
          },
        },
        {
          sortId: 3,
          mainImage: '/images/pages/business/scroll/payment-collection.webp', mainImageMobile: '/images/pages/business/scroll/payment-collection-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel3,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'فريقك يرى كل شيء',
            text: 'لوحة تحكم واحدة لجميع القنوات',
            description:
              'كل عضو في الفريق يمكنه عرض الرسائل والرد عليها من لوحة تحكم واحدة. عيّن المحادثات واترك ملاحظات داخلية وتأكد من عدم انتظار أي عميل طويلًا للرد.',
            listSub: [
              'عيّن الرسائل لأعضاء الفريق',
              'ملاحظات داخلية للتعاون',
              'تتبع وقت الاستجابة',
            ],
          },
        },
        {
          sortId: 4,
          mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel4,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'العميل يحصل على تجربة سلسة',
            text: 'لا يعرف أنك تستخدم قنوات متعددة',
            description:
              'سواء تواصل العميل عبر واتساب أو إنستغرام، يحصل على نفس الرد السريع والمخصص. صوت علامتك التجارية يبقى متسقًا عبر كل قناة.',
            listSub: [
              'صوت علامة تجارية متسق في كل مكان',
              'ردود سريعة بغض النظر عن القناة',
              'العملاء يشعرون بالاهتمام الشخصي',
            ],
          },
        },
      ],
      socialProofStats: [
        { value: '+2', context: 'قناة مراسلة موحدة' },
        { value: '0', context: 'رسائل ضائعة بين المنصات' },
        { value: '24/7', context: 'الذكاء الاصطناعي يراقب جميع القنوات' },
      ],
      howItWorks: {
        title: 'كيف يعمل',
      steps: [
          { title: 'سجّل وأخبرنا عن عملك', description: 'يستغرق 5 دقائق. أخبرنا عن خدماتك وموظفيك وساعات عملك.' },
          { title: 'فريقنا يساعدك في الإعداد', description: 'ننقل بياناتك ونُعدّ موظف الاستقبال الذكي ونختبر كل شيء معك.' },
          { title: 'ابدأ العمل. موظف الاستقبال الذكي يتولى المهمة.', description: 'العملاء يحصلون على ردود فورية. أنت تحصل على التحكم.' },
        ],
      },
      pricingHook: {
        headline: 'ابدأ مجانًا. انمُ بالسرعة التي تناسبك.',
        body: 'تجربة مجانية لمدة 14 يومًا مع وصول كامل لجميع الميزات. لا حاجة لبطاقة ائتمان. بعد ذلك، باقات مرنة تبدأ من 50 دولار/شهريًا. موظف الاستقبال الذكي لا يتولى الرسائل فحسب. بل يتعلم تفضيلات عملائك بمرور الوقت، ويُخصّص كل تفاعل ويحوّل الزوار الجدد إلى عملاء أوفياء. عمولة فقط على العملاء الجدد الذين يجلبهم سوق ديزي، عملاؤك الحاليون، بدون أي عمولة.',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
        ctaLink: '/get-the-app',
        pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190',
        pricingLinkHref: '/pricing',
      },
      platformStrengths: {
        headline: 'كل ما تحتاجه لإدارة عملك',
        subHeadline:
          'توقف عن الدفع لـ 8 أدوات منفصلة. ديزي تجمع كل ما تحتاجه لإدارة وتنمية أعمالك في مجال التجميل.',
        capabilities: [
          { label: 'موظف استقبال ذكي', description: 'رسائل واتساب وإنستغرام وحجوزات ومدفوعات على مدار الساعة' },
          { label: 'حجز ذكي', description: 'جدولة ذكية تملأ تقويمك' },
          { label: 'استقطاب العملاء', description: 'سوق إلكتروني وكاش باك وأدوات تسويق' },
          { label: 'المدفوعات والفوترة', description: 'معاملات سلسة وتتبع مالي' },
          { label: 'إدارة الموظفين', description: 'جدولة وصلاحيات وأداء' },
          { label: 'محرك التسويق', description: 'عروض وحملات والاحتفاظ بالعملاء' },
          { label: 'لوحة التحليلات', description: 'اتجاهات الإيرادات والرؤى والتقارير' },
          { label: 'التحكم بالعلامة التجارية', description: 'كل شيء بعلامتك التجارية الخاصة' },
        ],
        stats: [
          { value: '+2', context: 'قناة مراسلة موحدة' },
          { value: '24/7', context: 'موظف استقبال ذكي' },
          { value: '+10', context: 'لغة مدعومة' },
        ],
      },
      inlineCtas: {
        afterScroll: {
          headline: 'مستعد لتوحيد محادثات عملائك؟',
          ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
          ctaLink: '/get-the-app',
        },
        afterFeatures: {
          headline: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
          ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
          ctaLink: '/get-the-app',
          secondaryLinkText: 'استكشف جميع الميزات \u2192',
          secondaryLinkHref: '/features/business',
        },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'ما القنوات التي يدعمها صندوق الوارد الموحد؟', answer: 'حاليًا واتساب ورسائل إنستغرام المباشرة، مع المزيد من القنوات قريبًا. تظهر جميع الرسائل في لوحة تحكم واحدة حتى لا تفوتك أي محادثة.' },
        { question: 'هل يمكن لعدة أعضاء في الفريق استخدامه؟', answer: 'نعم. فريقك بالكامل يمكنه عرض وتعيين والرد على الرسائل من نفس صندوق الوارد. الملاحظات الداخلية تساعد في التسليم بين الموظفين.' },
        { question: 'هل يرد الذكاء الاصطناعي عبر جميع القنوات؟', answer: 'نعم. موظف الاستقبال الذكي يراقب جميع القنوات المتصلة على مدار الساعة ويرد فورًا بلغة العميل المفضلة، سواء أرسل على واتساب أو إنستغرام.' },
        { question: 'كيف يتعامل مع الرسائل بعد ساعات العمل؟', answer: 'موظف الاستقبال الذكي يعمل دائمًا. الرسائل بعد ساعات العمل تحصل على ردود فورية، والمواعيد تُحجز، والمدفوعات تُعالج. تراجع كل شيء في الصباح.' },
      ],
    },
  },
  professional: {
    en: {
      hero: {
        categoryLabel: 'UNIFIED INBOX FOR PROFESSIONALS',
        headline: 'All Your Client Messages in One Place.',
        subHeadline:
          'Clients reach you on WhatsApp, Instagram and elsewhere. Stop checking 5 apps and read every conversation in one inbox.',
        ctaText: 'Start Your Free Trial',
        ctaLink: '/get-the-app',
        trustLine: 'Free to join. No credit card required.',
        answerBlock: {
          question: 'What is a unified inbox for beauty professionals?',
          answer:
            'It puts every client message from WhatsApp, Instagram and anywhere else into a single view. When you are mid-appointment the AI answers, so clients hear back straight away and no booking slips past.',
        },
      },
      scrollSections: [
        {
          sortId: 1,
          mainImage: '/images/pages/professional/scroll/staff-details.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel1,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'A Client Messages on WhatsApp',
            text: "You're Busy. Daisy Catches It.",
            description:
              "You are with a client when a WhatsApp message arrives asking what you have free. It drops into your inbox and Daisy answers it immediately.",
            listSub: [
              'WhatsApp messages captured automatically',
              'AI responds while you work',
              'No interruption to your current client',
            ],
          },
        },
        {
          sortId: 2,
          mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel2,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'Another DMs on Instagram',
            text: 'Both Land in Your Inbox.',
            description:
              'Another client sends an Instagram DM about prices, and it appears next to the WhatsApp thread. You look at both when you are free.',
            listSub: [
              'Instagram DMs alongside WhatsApp',
              'All conversations sorted by time',
              'No need to check multiple apps',
            ],
          },
        },
        {
          sortId: 3,
          mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel3,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'Both Handled Without You',
            text: 'AI Books and Confirms',
            description:
              'While you finish the appointment, the AI books the first client and sends the second your pricing. Both replies read as though you wrote them.',
            listSub: [
              'Bookings confirmed automatically',
              'Pricing and service info shared',
              'Clients feel personally attended to',
            ],
          },
        },
        {
          sortId: 4,
          mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel4,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'You Check Between Clients',
            text: 'Everything Handled. Nothing Missed.',
            description:
              "Between appointments you open the inbox: two bookings confirmed, payments taken, clients happy. You did not type a word.",
            listSub: [
              'Full summary of AI actions',
              'New bookings on your calendar',
              'Earnings updated in real-time',
            ],
          },
        },
      ],
      socialProofStats: [
        { value: '0', context: 'missed messages' },
        { value: '1', context: 'inbox for everything' },
        { value: '24/7', context: 'AI responds when you can\'t' },
      ],
      howItWorks: {
        title: 'How It Works',
      steps: [
          { title: 'Sign up and tell us about yourself', description: 'Takes 5 minutes. Your services, your availability, your prices.' },
          { title: 'Our team helps you get set up', description: 'We set up your profile and your AI assistant, and walk you through all of it.' },
          { title: 'Go live. Focus on your clients.', description: 'Daisy takes the bookings. You do the work you trained for.' },
        ],
      },
      pricingHook: {
        headline: 'Free to Join. Zero Risk.',
        body: "Create your profile and start taking bookings at no cost, with premium features on affordable plans. Daisy does more than hold your schedule: it learns what your clients prefer, shapes their booking experience around it, and makes sure nothing goes unanswered. Commission applies only to new clients who find you through the Daisy marketplace. Your existing clients always pay zero.",
        ctaText: 'Get Listed for Free',
        ctaLink: '/get-the-app',
        pricingLinkText: 'See full pricing details \u2192',
        pricingLinkHref: '/pricing',
      },
      platformStrengths: {
        headline: 'Everything You Need in One App',
        subHeadline:
          'No more moving between a scheduling app, a payment tool and a messaging thread. Daisy holds all of it together.',
        capabilities: [
          { label: 'AI Booking Assistant', description: 'Handles bookings and payments while you work' },
          { label: 'Flexible Scheduling', description: 'Set your own hours across multiple locations' },
          { label: 'Earnings Tracker', description: 'Track revenue in real-time with detailed breakdowns' },
          { label: 'Professional Profile', description: 'Showcase your work and attract new clients' },
          { label: 'Client Management', description: 'Build relationships with detailed client profiles' },
          { label: 'Smart Notifications', description: 'Appointment reminders that reduce no-shows' },
          { label: 'Calendar Sync', description: 'Sync with Google Calendar and other tools' },
          { label: 'Marketplace Visibility', description: 'Customers find you when searching nearby' },
        ],
        stats: [
          { value: '0', context: 'missed messages' },
          { value: '24/7', context: 'AI-powered booking' },
          { value: '10+', context: 'languages supported' },
        ],
      },
      inlineCtas: {
        afterScroll: {
          headline: 'Ready to see all your messages in one place?',
          ctaText: 'Start Your Free Trial',
          ctaLink: '/get-the-app',
        },
        afterFeatures: {
          headline: 'Start Your Free Trial',
          ctaText: 'Start Your Free Trial',
          ctaLink: '/get-the-app',
          secondaryLinkText: 'Explore all features \u2192',
          secondaryLinkHref: '/features/professional',
        },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'What channels are supported?', answer: 'WhatsApp and Instagram DMs today, with more channels on the way. It all arrives in one view, so there is nothing else to check.' },
        { question: 'Can the AI auto-reply when I\'m busy?', answer: 'Yes. It watches the inbox 24/7 and answers booking requests, service questions and pricing queries while you stay with whoever is in your chair.' },
        { question: 'Do I need to check multiple apps?', answer: 'No. Every message from every channel arrives in the same inbox, so there is one place to look.' },
        { question: 'Is there a fee or commission?', answer: 'Joining is free. Commission applies only to new clients who book you through the Daisy marketplace, and your existing clients pay none. Premium features sit on affordable subscription tiers.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'صندوق الوارد الموحد للمتخصصين',
        headline: 'كل رسائل عملائك في مكان واحد.',
        subHeadline:
          'العملاء يراسلونك على واتساب وإنستغرام والمزيد. توقف عن التحقق من 5 تطبيقات. اعرض كل المحادثات في صندوق وارد واحد نظيف.',
        ctaText: 'ابدأ تجربتك المجانية',
        ctaLink: '/get-the-app',
        trustLine: 'الانضمام مجاني. لا حاجة لبطاقة ائتمان.',
        answerBlock: {
          question: 'ما هو صندوق الوارد الموحد لمتخصصي التجميل؟',
          answer:
            'صندوق الوارد الموحد يضع كل رسائل عملائك من واتساب وإنستغرام والمنصات الأخرى في عرض واحد نظيف. الذكاء الاصطناعي يرد عندما تكون في منتصف موعد، فيحصل العملاء على ردود فورية ولا تفوتك أي فرصة حجز.',
        },
      },
      scrollSections: [
        {
          sortId: 1,
          mainImage: '/images/pages/professional/scroll/staff-details.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel1,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'عميل يراسل على واتساب',
            text: 'أنت مشغول. ديزي تلتقطها.',
            description:
              'أنت مع عميل عندما تصل رسالة جديدة على واتساب تسأل عن توفرك. تذهب مباشرة إلى صندوق الوارد الموحد. ديزي ترد فورًا.',
            listSub: [
              'رسائل واتساب تُلتقط تلقائيًا',
              'الذكاء الاصطناعي يرد أثناء عملك',
              'بدون مقاطعة لعميلك الحالي',
            ],
          },
        },
        {
          sortId: 2,
          mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel2,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'عميل آخر يراسل على إنستغرام',
            text: 'كلاهما يصل إلى صندوق الوارد.',
            description:
              'عميل مختلف يرسل رسالة إنستغرام عن الأسعار. تظهر بجانب محادثة واتساب. ترى كل شيء في مكان واحد عندما تكون جاهزًا.',
            listSub: [
              'رسائل إنستغرام بجانب واتساب',
              'كل المحادثات مرتبة بالوقت',
              'لا حاجة للتحقق من تطبيقات متعددة',
            ],
          },
        },
        {
          sortId: 3,
          mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel3,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'كلاهما تمت معالجته بدونك',
            text: 'الذكاء الاصطناعي يحجز ويؤكد',
            description:
              'بينما تنهي موعدك الحالي، يحجز الذكاء الاصطناعي لعميل واتساب ويرسل معلومات الأسعار لعميل إنستغرام. كلاهما يحصل على ردود مخصصة.',
            listSub: [
              'الحجوزات تُؤكد تلقائيًا',
              'معلومات الأسعار والخدمات تُشارك',
              'العملاء يشعرون بالاهتمام الشخصي',
            ],
          },
        },
        {
          sortId: 4,
          mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel4,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'تتفقد بين العملاء',
            text: 'كل شيء تمت معالجته. لا شيء فائت.',
            description:
              'بين المواعيد تفتح صندوق الوارد. حجزان جديدان مؤكدان، المدفوعات معالجة، العملاء سعداء. لم تكتب ردًا واحدًا.',
            listSub: [
              'ملخص كامل لإجراءات الذكاء الاصطناعي',
              'حجوزات جديدة في تقويمك',
              'الأرباح تتحدث في الوقت الفعلي',
            ],
          },
        },
      ],
      socialProofStats: [
        { value: '0', context: 'رسائل فائتة' },
        { value: '1', context: 'صندوق وارد لكل شيء' },
        { value: '24/7', context: 'الذكاء الاصطناعي يرد عندما لا تستطيع' },
      ],
      howItWorks: {
        title: 'كيف يعمل',
      steps: [
          { title: 'سجّل وأخبرنا عن نفسك', description: 'يستغرق 5 دقائق. حدد خدماتك وتوافرك وأسعارك.' },
          { title: 'فريقنا يساعدك في الإعداد', description: 'نُعدّ ملفك الشخصي ونُجهّز مساعدك الذكي ونشرح لك كل شيء.' },
          { title: 'ابدأ العمل. ركّز على عملائك.', description: 'ديزي تتولى حجوزاتك. أنت تتولى إبداعك.' },
        ],
      },
      pricingHook: {
        headline: 'الانضمام مجاني. بدون أي مخاطر.',
        body: 'أنشئ ملفك الشخصي وابدأ بقبول الحجوزات بدون تكلفة. الميزات المتقدمة متاحة من خلال باقات بأسعار معقولة. ديزي لا تدير جدولك فحسب. بل تتعلم تفضيلات عملائك، وتُخصّص تجربة حجزهم، وتتأكد من عدم تفويت أي استفسار. العمولة فقط على العملاء الجدد الذين يجدونك عبر سوق ديزي، عملاؤك الحاليون، بدون أي عمولة دائمًا.',
        ctaText: 'سجّل مجانًا',
        ctaLink: '/get-the-app',
        pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190',
        pricingLinkHref: '/pricing',
      },
      platformStrengths: {
        headline: 'كل ما تحتاجه في تطبيق واحد',
        subHeadline:
          'لا مزيد من التنقل بين تطبيقات الجدولة وأدوات الدفع ومراسلة العملاء. ديزي تجمع كل شيء معًا.',
        capabilities: [
          { label: 'مساعد الحجز الذكي', description: 'يتولى الحجوزات والمدفوعات أثناء عملك' },
          { label: 'جدولة مرنة', description: 'حدد ساعات عملك عبر مواقع متعددة' },
          { label: 'متتبع الأرباح', description: 'تتبع الإيرادات في الوقت الفعلي مع تفاصيل دقيقة' },
          { label: 'الملف المهني', description: 'اعرض أعمالك واجذب عملاء جدد' },
          { label: 'إدارة العملاء', description: 'ابنِ علاقات مع ملفات عملاء مفصلة' },
          { label: 'إشعارات ذكية', description: 'تذكيرات بالمواعيد تقلل حالات عدم الحضور' },
          { label: 'مزامنة التقويم', description: 'مزامنة مع تقويم جوجل وأدوات أخرى' },
          { label: 'ظهور في السوق', description: 'العملاء يجدونك عند البحث بالقرب منهم' },
        ],
        stats: [
          { value: '0', context: 'رسائل فائتة' },
          { value: '24/7', context: 'حجز مدعوم بالذكاء الاصطناعي' },
          { value: '+10', context: 'لغة مدعومة' },
        ],
      },
      inlineCtas: {
        afterScroll: {
          headline: 'مستعد لرؤية كل رسائلك في مكان واحد؟',
          ctaText: 'ابدأ تجربتك المجانية',
          ctaLink: '/get-the-app',
        },
        afterFeatures: {
          headline: 'ابدأ تجربتك المجانية',
          ctaText: 'ابدأ تجربتك المجانية',
          ctaLink: '/get-the-app',
          secondaryLinkText: 'استكشف جميع الميزات \u2192',
          secondaryLinkHref: '/features/professional',
        },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'ما القنوات المدعومة؟', answer: 'حاليًا واتساب ورسائل إنستغرام المباشرة، مع المزيد من القنوات قريبًا. تظهر جميع الرسائل في عرض واحد حتى لا تحتاج للتحقق من تطبيقات متعددة.' },
        { question: 'هل يمكن للذكاء الاصطناعي الرد تلقائيًا عندما أكون مشغولًا؟', answer: 'نعم. الذكاء الاصطناعي يراقب صندوق الوارد على مدار الساعة ويرد فورًا على طلبات الحجز وأسئلة الخدمات واستفسارات الأسعار بينما تركز على عميلك الحالي.' },
        { question: 'هل أحتاج للتحقق من تطبيقات متعددة؟', answer: 'لا. كل رسالة من كل قناة تظهر في صندوق وارد موحد واحد. تتحقق من مكان واحد وترى كل شيء.' },
        { question: 'هل هناك رسوم أو عمولة؟', answer: 'الانضمام مجاني. العمولة تُفرض فقط على العملاء الجدد الذين يحجزون عبر سوق ديزي، عملاؤك الحاليون بدون أي عمولة. الميزات المتقدمة متاحة من خلال باقات اشتراك بأسعار معقولة.' },
      ],
    },
  },
};

registerAngle('unified-inbox', unifiedInboxAngle);
