import { I18nContent } from '../i18n';
import { LandingPageContent } from './scrollSections.types';

export const businessPageData: I18nContent<LandingPageContent> = {
  en: {
    hero: {
      categoryLabel: 'FOR BUSINESS OWNERS',
      headline: 'Stop Losing Customers to Missed Calls',
      subHeadline:
        "Daisy's AI receptionist answers every inquiry, books every appointment, and processes every payment — 24/7. One platform replaces your entire front desk.",
      ctaText: 'Start Your 14-Day Free Trial',
      ctaLink: '/start-free-trial/business',
      answerBlock: {
        question: 'What is The Daisy for beauty businesses?',
        answer:
          'The Daisy is an AI-powered beauty business platform that combines a 24/7 AI receptionist with booking management, customer acquisition, payments, staff scheduling, and marketing. It replaces 8 separate tools with one multilingual platform — currently supporting Arabic and English.',
      },
    },
    platformStrengths: {
      headline: 'Everything You Need to Run Your Business',
      subHeadline:
        'Stop paying for 8 separate tools. Daisy combines everything you need to run and grow your beauty business.',
      capabilities: [
        { label: 'AI Receptionist', description: '24/7 automated booking, payments, and customer service' },
        { label: 'Smart Booking', description: 'Intelligent scheduling that fills your calendar' },
        { label: 'Customer Acquisition', description: 'Marketplace, cashback, and marketing tools' },
        { label: 'Payments & Invoicing', description: 'Seamless transactions and financial tracking' },
        { label: 'Staff Management', description: 'Scheduling, permissions, and performance' },
        { label: 'Marketing Engine', description: 'Promotions, campaigns, and customer retention' },
        { label: 'Analytics Dashboard', description: 'Revenue trends, insights, and reporting' },
        { label: 'Brand Control', description: 'White-label everything with your brand' },
      ],
      stats: [
        { value: '8', context: 'tools in one platform' },
        { value: '24/7', context: 'AI receptionist' },
        { value: '10+', context: 'languages supported' },
      ],
    },
    socialProofStats: [
      { value: '8', context: 'tools replaced by one platform' },
      { value: '24/7', context: 'AI receptionist — never misses a call' },
      { value: '10+', context: 'languages supported' },
    ],
    howItWorks: {
      steps: [
        { title: 'Sign up and tell us about your business', description: 'Takes 5 minutes. Tell us your services, staff, and hours.' },
        { title: 'Our team helps you get set up', description: 'We migrate your data, configure your AI receptionist, and test everything with you.' },
        { title: 'Go live — your AI receptionist takes over', description: 'Customers get instant responses. You get control.' },
      ],
    },
    pricingHook: {
      headline: 'Free to Start. Grow at Your Own Pace.',
      body: '14-day free trial with full access to every feature. No credit card required. After that, flexible plans starting from $50/month. Commission only on new customers the Daisy marketplace brings you — your existing clients, zero commission.',
      ctaText: 'Start Your 14-Day Free Trial',
      ctaLink: '/start-free-trial/business',
      pricingLinkText: 'See full pricing details →',
      pricingLinkHref: '/pricing',
    },
    inlineCtas: {
      afterScroll: {
        headline: 'Ready to put your reception on autopilot?',
        ctaText: 'Start Your 14-Day Free Trial',
        ctaLink: '/start-free-trial/business',
      },
      afterFeatures: {
        headline: 'Start Your 14-Day Free Trial',
        ctaText: 'Start Your 14-Day Free Trial',
        ctaLink: '/start-free-trial/business',
      },
    },
    titleFraque: 'Frequently Asked Questions',
    fallbackFaqs: [
      { question: 'Can I migrate from my current booking system?', answer: 'Yes. Our onboarding team helps you migrate your client data, booking history, and preferences at no extra cost.' },
      { question: 'Does The Daisy work in Arabic?', answer: 'Yes. Fully multilingual — your AI receptionist speaks Arabic and English fluently. Customer communications, your booking page, and the entire interface support both languages with full RTL. More languages coming soon.' },
      { question: 'Do I need to change how I run my business?', answer: 'No. Daisy adapts to your workflow. Keep your brand, your processes, your team. We just handle your reception and give you better tools.' },
      { question: 'Is my data safe?', answer: 'Yes. Enterprise-grade encryption, secure payment processing, and your data is never shared. You own your customer data completely.' },
    ],
    scrollSections: [
      {
        sortId: 1,
        mainImage: '/images/pages/business/scroll/device-mockups.png',
        firstBg: '/images/pages/business/scroll/leaf-bg.png',
        secondBg: '/images/pages/business/scroll/stars.png',
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
        mainImageWidth: 300,
        mainImageHeight: 500,
        infoScroll: {
          title: 'A Customer Has a Question',
          text: 'Your AI Receptionist Responds Instantly',
          description:
            "A customer messages at 9 PM asking about availability for a balayage appointment. Your AI receptionist responds within seconds — friendly, professional, in their language.",
          listSub: [
            'Responds in Arabic and English',
            'Available 24/7, even holidays',
            'Knows your services and pricing',
          ],
        },
      },
      {
        sortId: 2,
        mainImage: '/images/pages/business/scroll/schedule.png',
        firstBg: '/images/pages/business/scroll/leaf-bg.png',
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
        mainImageWidth: 300,
        mainImageHeight: 500,
        infoScroll: {
          title: 'Appointment Booked in Minutes',
          text: 'Smart Scheduling, Zero Conflicts',
          description:
            "The AI checks your real-time availability, suggests the best time slot, and books the appointment — no double-bookings, no back-and-forth.",
          listSub: [
            'Checks staff availability automatically',
            'Sends instant confirmation',
            'Avoids scheduling conflicts',
          ],
        },
      },
      {
        sortId: 3,
        mainImage: '/images/pages/business/scroll/integrations.png',
        firstBg: '/images/pages/business/scroll/leaf-bg.png',
        secondBg: '/images/pages/business/scroll/stars.png',
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
        mainImageWidth: 300,
        mainImageHeight: 500,
        infoScroll: {
          title: 'Payment Handled Before They Arrive',
          text: 'Deposits, Full Payments, or Pay-at-Visit',
          description:
            "The customer pays a deposit or the full amount right in the chat. By the time they walk in, everything is settled.",
          listSub: [
            'Secure in-chat payment',
            'Deposit or full payment options',
            'Automatic receipts sent',
          ],
        },
      },
      {
        sortId: 4,
        mainImage: '/images/pages/business/scroll/analytics.png',
        firstBg: '/images/pages/business/scroll/leaf-bg.png',
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
        mainImageWidth: 300,
        mainImageHeight: 500,
        infoScroll: {
          title: 'Confirmed and on Your Calendar',
          text: "You Didn't Lift a Finger",
          description:
            "The appointment appears on your calendar with all the details — service, time, staff member, payment status. Your customer got a perfect experience. You were home with your family.",
          listSub: [
            'Synced to your business calendar',
            'Customer gets reminder before visit',
            'Staff notified automatically',
          ],
        },
      },
    ],
  },

  ar: {
    hero: {
      categoryLabel: 'لأصحاب الأعمال',
      headline: 'توقف عن خسارة العملاء بسبب المكالمات الفائتة',
      subHeadline:
        'موظف الاستقبال الذكي من ديزي يجيب على كل استفسار، يحجز كل موعد، ويعالج كل دفعة — على مدار الساعة. منصة واحدة تحل محل مكتب الاستقبال بالكامل.',
      ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
      ctaLink: '/start-free-trial/business',
      answerBlock: {
        question: 'ما هو ذا ديزي لأعمال التجميل؟',
        answer:
          'ذا ديزي هو منصة أعمال تجميل مدعومة بالذكاء الاصطناعي تجمع بين موظف استقبال ذكي يعمل على مدار الساعة مع إدارة الحجوزات واستقطاب العملاء والمدفوعات وجدولة الموظفين والتسويق. يستبدل 8 أدوات منفصلة بمنصة متعددة اللغات — تدعم حاليًا العربية والإنجليزية.',
      },
    },
    platformStrengths: {
      headline: 'كل ما تحتاجه لإدارة عملك',
      subHeadline:
        'توقف عن الدفع لـ 8 أدوات منفصلة. ديزي تجمع كل ما تحتاجه لإدارة وتنمية أعمالك في مجال التجميل.',
      capabilities: [
        { label: 'موظف استقبال ذكي', description: 'حجوزات ومدفوعات وخدمة عملاء آلية على مدار الساعة' },
        { label: 'حجز ذكي', description: 'جدولة ذكية تملأ تقويمك' },
        { label: 'استقطاب العملاء', description: 'سوق إلكتروني وكاش باك وأدوات تسويق' },
        { label: 'المدفوعات والفوترة', description: 'معاملات سلسة وتتبع مالي' },
        { label: 'إدارة الموظفين', description: 'جدولة وصلاحيات وأداء' },
        { label: 'محرك التسويق', description: 'عروض وحملات والاحتفاظ بالعملاء' },
        { label: 'لوحة التحليلات', description: 'اتجاهات الإيرادات والرؤى والتقارير' },
        { label: 'التحكم بالعلامة التجارية', description: 'كل شيء بعلامتك التجارية الخاصة' },
      ],
      stats: [
        { value: '8', context: 'أدوات في منصة واحدة' },
        { value: '24/7', context: 'موظف استقبال ذكي' },
        { value: '+10', context: 'لغة مدعومة' },
      ],
    },
    socialProofStats: [
      { value: '8', context: 'أدوات تم استبدالها بمنصة واحدة' },
      { value: '24/7', context: 'موظف استقبال ذكي — لا يفوت أي مكالمة' },
      { value: '+10', context: 'لغة مدعومة' },
    ],
    howItWorks: {
      steps: [
        { title: 'سجّل وأخبرنا عن عملك', description: 'يستغرق 5 دقائق. أخبرنا عن خدماتك وموظفيك وساعات عملك.' },
        { title: 'فريقنا يساعدك في الإعداد', description: 'ننقل بياناتك ونُعدّ موظف الاستقبال الذكي ونختبر كل شيء معك.' },
        { title: 'ابدأ العمل — موظف الاستقبال الذكي يتولى المهمة', description: 'العملاء يحصلون على ردود فورية. أنت تحصل على التحكم.' },
      ],
    },
    pricingHook: {
      headline: 'ابدأ مجانًا. انمُ بالسرعة التي تناسبك.',
      body: 'تجربة مجانية لمدة 14 يومًا مع وصول كامل لجميع الميزات. لا حاجة لبطاقة ائتمان. بعد ذلك، باقات مرنة تبدأ من 50 دولار/شهريًا. عمولة فقط على العملاء الجدد الذين يجلبهم سوق ديزي — عملاؤك الحاليون، بدون أي عمولة.',
      ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
      ctaLink: '/start-free-trial/business',
      pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة ←',
      pricingLinkHref: '/pricing',
    },
    inlineCtas: {
      afterScroll: {
        headline: 'مستعد لوضع استقبالك على الطيار الآلي؟',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
        ctaLink: '/start-free-trial/business',
      },
      afterFeatures: {
        headline: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
        ctaLink: '/start-free-trial/business',
      },
    },
    titleFraque: 'أسئلة شائعة',
    fallbackFaqs: [
      { question: 'هل يمكنني الانتقال من نظام الحجز الحالي؟', answer: 'نعم. يساعدك فريق الإعداد لدينا في نقل بيانات عملائك وسجل الحجوزات وتفضيلاتك دون أي تكلفة إضافية.' },
      { question: 'هل يعمل ذا ديزي باللغة العربية؟', answer: 'نعم. متعدد اللغات بالكامل — موظف الاستقبال الذكي يتحدث العربية والإنجليزية بطلاقة. اتصالات العملاء وصفحة الحجز والواجهة بالكامل تدعم اللغتين مع RTL كامل. المزيد من اللغات قريبًا.' },
      { question: 'هل أحتاج لتغيير طريقة إدارة عملي؟', answer: 'لا. ديزي يتكيف مع سير عملك. احتفظ بعلامتك التجارية وعملياتك وفريقك. نحن فقط نتولى الاستقبال ونمنحك أدوات أفضل.' },
      { question: 'هل بياناتي آمنة؟', answer: 'نعم. تشفير بمستوى المؤسسات ومعالجة دفع آمنة وبياناتك لا تُشارك أبدًا. أنت تملك بيانات عملائك بالكامل.' },
    ],
    scrollSections: [
      {
        sortId: 1,
        mainImage: '/images/pages/business/scroll/device-mockups.png',
        firstBg: '/images/pages/business/scroll/leaf-bg.png',
        secondBg: '/images/pages/business/scroll/stars.png',
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
        mainImageWidth: 300,
        mainImageHeight: 500,
        infoScroll: {
          title: 'عميل لديه سؤال',
          text: 'موظف الاستقبال الذكي يرد فورًا',
          description:
            'عميل يراسل الساعة 9 مساءً يسأل عن توفر موعد للبالاياج. موظف الاستقبال الذكي يرد خلال ثوانٍ — ودود، محترف، بلغته.',
          listSub: [
            'يرد بالعربية والإنجليزية',
            'متاح على مدار الساعة، حتى في العطل',
            'يعرف خدماتك وأسعارك',
          ],
        },
      },
      {
        sortId: 2,
        mainImage: '/images/pages/business/scroll/schedule.png',
        firstBg: '/images/pages/business/scroll/leaf-bg.png',
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
        mainImageWidth: 300,
        mainImageHeight: 500,
        infoScroll: {
          title: 'الموعد محجوز في دقائق',
          text: 'جدولة ذكية، بدون تعارضات',
          description:
            'يتحقق الذكاء الاصطناعي من توافرك الفعلي ويقترح أفضل وقت ويحجز الموعد — بدون حجوزات مزدوجة، بدون تراسل متكرر.',
          listSub: [
            'يتحقق من توافر الموظفين تلقائيًا',
            'يرسل تأكيدًا فوريًا',
            'يتجنب تعارض المواعيد',
          ],
        },
      },
      {
        sortId: 3,
        mainImage: '/images/pages/business/scroll/integrations.png',
        firstBg: '/images/pages/business/scroll/leaf-bg.png',
        secondBg: '/images/pages/business/scroll/stars.png',
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
        mainImageWidth: 300,
        mainImageHeight: 500,
        infoScroll: {
          title: 'الدفع تم قبل وصولهم',
          text: 'عربون، دفع كامل، أو عند الزيارة',
          description:
            'العميل يدفع عربونًا أو المبلغ الكامل مباشرة في المحادثة. عند وصوله، كل شيء مُنجز.',
          listSub: [
            'دفع آمن في المحادثة',
            'خيارات عربون أو دفع كامل',
            'إيصالات تلقائية تُرسل',
          ],
        },
      },
      {
        sortId: 4,
        mainImage: '/images/pages/business/scroll/analytics.png',
        firstBg: '/images/pages/business/scroll/leaf-bg.png',
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
        mainImageWidth: 300,
        mainImageHeight: 500,
        infoScroll: {
          title: 'مؤكد ومسجل في تقويمك',
          text: 'لم تحرك ساكنًا',
          description:
            'الموعد يظهر في تقويمك بكل التفاصيل — الخدمة، الوقت، الموظف، حالة الدفع. عميلك حصل على تجربة مثالية. وأنت كنت في المنزل مع عائلتك.',
          listSub: [
            'مزامنة مع تقويم عملك',
            'العميل يحصل على تذكير قبل الزيارة',
            'الموظفون يُبلَّغون تلقائيًا',
          ],
        },
      },
    ],
  },
};
