import { I18nContent } from '@/lib/constants/i18n';
import { LandingPageContent } from '@/lib/constants/pages/scrollSections.types';
import { registerAngle } from './index';

// ---------------------------------------------------------------------------
// Shared scroll section style objects
// ---------------------------------------------------------------------------
const scrollStyles = {
  panel1: {
    styleMainPictureJSON: { position: 'absolute', padding: '24px 0px 24px 24px', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'right' },
    styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' },
    styleSecondBgJSON: { position: 'absolute', top: '40px', right: '30px', width: '100px' },
    styleBgMobileSecond: { position: 'absolute', top: '-70px', right: '-70px', width: '200px', height: '200px', transform: 'rotate(180deg) scaleX(-1)' },
    styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' },
  },
  panel2: {
    styleMainPictureJSON: { position: 'absolute', padding: '24px 24px 0px 24px', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' },
    styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' },
    styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' },
  },
  panel3: {
    styleMainPictureJSON: { position: 'absolute', padding: '24px', width: '100%', height: '100%', objectFit: 'contain' },
    styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' },
    styleSecondBgJSON: { position: 'absolute', top: '40px', right: '30px', width: '100px' },
    styleBgMobileSecond: { position: 'absolute', top: '-70px', right: '-70px', width: '200px', height: '200px', transform: 'rotate(180deg) scaleX(-1)' },
    styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' },
  },
  panel4: {
    styleMainPictureJSON: { position: 'absolute', padding: '24px', width: '100%', height: '100%', objectFit: 'contain' },
    styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' },
    styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' },
  },
};

const brandControlAngle: Record<'business' | 'professional', I18nContent<LandingPageContent>> = {
  business: {
    en: {
      hero: {
        categoryLabel: 'BRAND CONTROL FOR BUSINESS',
        headline: 'Your Brand on Every Touchpoint. Not Ours.',
        subHeadline:
          'Your logo, your colors, your domain. Customers see your brand from booking to confirmation. No "Powered by" badges. No co-branding.',
        ctaText: 'Start Your 14-Day Free Trial',
        ctaLink: '/start-free-trial/business',
        trustLine: 'No credit card required. Our team helps you set up.',
        answerBlock: {
          question: 'What is white-label brand control for beauty businesses?',
          answer:
            'White-label brand control means your customers see your brand at every step: your logo on the booking page, your colors on confirmations, your domain on every link. The Daisy powers everything behind the scenes, but your brand is the only one your customers experience.',
        },
      },
      scrollSections: [
        {
          sortId: 1,
          mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel1,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'Customer Visits Your Booking Page',
            text: 'Your Logo. Your Colors. Your Domain.',
            description:
              'A customer clicks your booking link and lands on a page that looks and feels entirely yours. Your logo, your brand colors, your fonts. They have no idea a platform powers it.',
            listSub: [
              'Custom domain support',
              'Your logo and brand colors',
              'No third-party branding visible',
            ],
          },
        },
        {
          sortId: 2,
          mainImage: '/images/pages/business/scroll/smart-scheduling.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel2,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'They See Your Services and Team',
            text: 'A Professional Showcase That Converts',
            description:
              'Your service menu, your team photos, your descriptions. Everything is presented under your brand. Customers browse with confidence because they recognize your identity.',
            listSub: [
              'Branded service menu',
              'Team profiles under your brand',
              'Professional look that builds trust',
            ],
          },
        },
        {
          sortId: 3,
          mainImage: '/images/pages/business/scroll/payment-collection.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel3,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'They Book Through Your Brand',
            text: 'Seamless Experience From Start to Finish',
            description:
              'The booking flow, payment screen, and confirmation all carry your brand. The customer never leaves your world. They trust the process because they trust you.',
            listSub: [
              'Branded booking and payment flow',
              'Your confirmation messages',
              'Customer trust stays with your brand',
            ],
          },
        },
        {
          sortId: 4,
          mainImage: '/images/pages/business/scroll/booking-confirmed.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel4,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'Confirmation Arrives with Your Branding',
            text: 'Every Touchpoint Reinforces Your Identity',
            description:
              'The customer receives a branded confirmation and reminder. Your logo on every notification. Your name on every receipt. Your business, your reputation.',
            listSub: [
              'Branded confirmations and reminders',
              'Your logo on receipts',
              'Full control over 8 touchpoints',
            ],
          },
        },
      ],
      socialProofStats: [
        { value: '100%', context: 'your brand, not ours' },
        { value: '0', context: 'co-branding badges' },
        { value: '8', context: 'touchpoints you control' },
      ],
      howItWorks: {
        title: 'How It Works',
      steps: [
          { title: 'Sign up and tell us about your business', description: 'Takes 5 minutes. Tell us your services, staff, and hours.' },
          { title: 'Our team helps you get set up', description: 'We migrate your data, configure your AI receptionist, and test everything with you.' },
          { title: 'Go live. Your AI receptionist takes over.', description: 'Customers get instant responses. You get control.' },
        ],
      },
      pricingHook: {
        headline: 'Free to Start. Grow at Your Own Pace.',
        body: "14-day free trial with full access to every feature. No credit card required. After that, flexible plans starting from $50/month. Your AI receptionist doesn't just handle messages. It learns your customers' preferences over time, personalizing every interaction and turning first-time visitors into loyal regulars. Commission only on new customers the Daisy marketplace brings you, your existing clients, zero commission.",
        ctaText: 'Start Your 14-Day Free Trial',
        ctaLink: '/start-free-trial/business',
        pricingLinkText: 'See full pricing details \u2192',
        pricingLinkHref: '/pricing',
      },
      platformStrengths: {
        headline: 'Everything You Need to Run Your Business',
        subHeadline:
          'Stop paying for 8 separate tools. Daisy combines everything you need to run and grow your beauty business.',
        capabilities: [
          { label: 'Brand Control', description: 'White-label everything with your brand' },
          { label: 'AI Receptionist', description: '24/7 WhatsApp and Instagram messaging, booking, and payments' },
          { label: 'Smart Booking', description: 'Intelligent scheduling that fills your calendar' },
          { label: 'Customer Acquisition', description: 'Marketplace, cashback, and marketing tools' },
          { label: 'Payments & Invoicing', description: 'Seamless transactions and financial tracking' },
          { label: 'Staff Management', description: 'Scheduling, permissions, and performance' },
          { label: 'Marketing Engine', description: 'Promotions, campaigns, and customer retention' },
          { label: 'Analytics Dashboard', description: 'Revenue trends, insights, and reporting' },
        ],
        stats: [
          { value: '100%', context: 'your brand' },
          { value: '24/7', context: 'AI receptionist' },
          { value: '10+', context: 'languages supported' },
        ],
      },
      inlineCtas: {
        afterScroll: {
          headline: 'Ready to put your brand on every customer touchpoint?',
          ctaText: 'Start Your 14-Day Free Trial',
          ctaLink: '/start-free-trial/business',
        },
        afterFeatures: {
          headline: 'Start Your 14-Day Free Trial',
          ctaText: 'Start Your 14-Day Free Trial',
          ctaLink: '/start-free-trial/business',
          secondaryLinkText: 'Explore all features \u2192',
          secondaryLinkHref: '/features/business',
        },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'Can I use my own domain?', answer: 'Yes. You can connect your own custom domain so your booking page lives on your website, not ours. Customers see your URL, your brand, your identity.' },
        { question: 'What can I customize?', answer: 'Logo, brand colors, fonts, booking page layout, confirmation messages, reminder notifications, receipts, and more. Every customer-facing touchpoint is fully customizable.' },
        { question: 'Will customers see The Daisy brand?', answer: 'No. There are no "Powered by" badges or co-branding. Your customers interact with your brand exclusively.' },
        { question: 'Can I match my existing brand guidelines?', answer: 'Absolutely. Upload your logo, set your brand colors, and customize your fonts. The booking experience matches your existing brand identity seamlessly.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'التحكم بالعلامة التجارية للأعمال',
        headline: 'علامتك التجارية على كل نقطة تواصل. ليست علامتنا.',
        subHeadline:
          'شعارك، ألوانك، نطاقك. العملاء يرون علامتك التجارية من الحجز إلى التأكيد. بدون شارات "مدعوم من". بدون علامات مشتركة.',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
        ctaLink: '/start-free-trial/business',
        trustLine: 'لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد.',
        answerBlock: {
          question: 'ما هو التحكم بالعلامة التجارية البيضاء لأعمال التجميل؟',
          answer:
            'التحكم بالعلامة التجارية البيضاء يعني أن عملاءك يرون علامتك في كل خطوة: شعارك على صفحة الحجز، ألوانك على التأكيدات، نطاقك على كل رابط. ديزي تدير كل شيء خلف الكواليس، لكن علامتك التجارية هي الوحيدة التي يختبرها عملاؤك.',
        },
      },
      scrollSections: [
        {
          sortId: 1,
          mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel1,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'العميل يزور صفحة الحجز الخاصة بك',
            text: 'شعارك. ألوانك. نطاقك.',
            description:
              'عميل ينقر على رابط الحجز ويصل إلى صفحة تبدو وتشعر بأنها ملكك بالكامل. شعارك، ألوان علامتك، خطوطك. لا يعلم أن منصة تديرها.',
            listSub: [
              'دعم النطاق المخصص',
              'شعارك وألوان علامتك التجارية',
              'بدون علامات تجارية لأطراف ثالثة',
            ],
          },
        },
        {
          sortId: 2,
          mainImage: '/images/pages/business/scroll/smart-scheduling.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel2,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'يرون خدماتك وفريقك',
            text: 'عرض احترافي يحقق التحويل',
            description:
              'قائمة خدماتك، صور فريقك، أوصافك. كل شيء مقدم تحت علامتك التجارية. العملاء يتصفحون بثقة لأنهم يتعرفون على هويتك.',
            listSub: [
              'قائمة خدمات بعلامتك التجارية',
              'ملفات الفريق تحت علامتك',
              'مظهر احترافي يبني الثقة',
            ],
          },
        },
        {
          sortId: 3,
          mainImage: '/images/pages/business/scroll/payment-collection.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel3,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'يحجزون عبر علامتك التجارية',
            text: 'تجربة سلسة من البداية إلى النهاية',
            description:
              'تدفق الحجز وشاشة الدفع والتأكيد كلها تحمل علامتك التجارية. العميل لا يغادر عالمك أبدًا. يثقون بالعملية لأنهم يثقون بك.',
            listSub: [
              'تدفق حجز ودفع بعلامتك',
              'رسائل التأكيد الخاصة بك',
              'ثقة العميل تبقى مع علامتك',
            ],
          },
        },
        {
          sortId: 4,
          mainImage: '/images/pages/business/scroll/booking-confirmed.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel4,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'التأكيد يصل بعلامتك التجارية',
            text: 'كل نقطة تواصل تعزز هويتك',
            description:
              'العميل يتلقى تأكيدًا وتذكيرًا بعلامتك التجارية. شعارك على كل إشعار. اسمك على كل إيصال. عملك، سمعتك.',
            listSub: [
              'تأكيدات وتذكيرات بعلامتك',
              'شعارك على الإيصالات',
              'تحكم كامل في 8 نقاط تواصل',
            ],
          },
        },
      ],
      socialProofStats: [
        { value: '100%', context: 'علامتك التجارية، ليست علامتنا' },
        { value: '0', context: 'شارات علامات مشتركة' },
        { value: '8', context: 'نقاط تواصل تتحكم بها' },
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
        ctaLink: '/start-free-trial/business',
        pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190',
        pricingLinkHref: '/pricing',
      },
      platformStrengths: {
        headline: 'كل ما تحتاجه لإدارة عملك',
        subHeadline: 'توقف عن الدفع لـ 8 أدوات منفصلة. ديزي تجمع كل ما تحتاجه لإدارة وتنمية أعمالك في مجال التجميل.',
        capabilities: [
          { label: 'التحكم بالعلامة التجارية', description: 'كل شيء بعلامتك التجارية الخاصة' },
          { label: 'موظف استقبال ذكي', description: 'رسائل واتساب وإنستغرام وحجوزات ومدفوعات على مدار الساعة' },
          { label: 'حجز ذكي', description: 'جدولة ذكية تملأ تقويمك' },
          { label: 'استقطاب العملاء', description: 'سوق إلكتروني وكاش باك وأدوات تسويق' },
          { label: 'المدفوعات والفوترة', description: 'معاملات سلسة وتتبع مالي' },
          { label: 'إدارة الموظفين', description: 'جدولة وصلاحيات وأداء' },
          { label: 'محرك التسويق', description: 'عروض وحملات والاحتفاظ بالعملاء' },
          { label: 'لوحة التحليلات', description: 'اتجاهات الإيرادات والرؤى والتقارير' },
        ],
        stats: [
          { value: '100%', context: 'علامتك التجارية' },
          { value: '24/7', context: 'موظف استقبال ذكي' },
          { value: '+10', context: 'لغة مدعومة' },
        ],
      },
      inlineCtas: {
        afterScroll: {
          headline: 'مستعد لوضع علامتك التجارية على كل نقطة تواصل؟',
          ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
          ctaLink: '/start-free-trial/business',
        },
        afterFeatures: {
          headline: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
          ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
          ctaLink: '/start-free-trial/business',
          secondaryLinkText: 'استكشف جميع الميزات \u2192',
          secondaryLinkHref: '/features/business',
        },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'هل يمكنني استخدام نطاقي الخاص؟', answer: 'نعم. يمكنك ربط نطاقك المخصص حتى تكون صفحة الحجز على موقعك، ليس على موقعنا. العملاء يرون عنوان URL الخاص بك، علامتك، هويتك.' },
        { question: 'ما الذي يمكنني تخصيصه؟', answer: 'الشعار، ألوان العلامة التجارية، الخطوط، تخطيط صفحة الحجز، رسائل التأكيد، إشعارات التذكير، الإيصالات، والمزيد. كل نقطة تواصل مع العملاء قابلة للتخصيص بالكامل.' },
        { question: 'هل سيرى العملاء علامة ذا ديزي التجارية؟', answer: 'لا. لا توجد شارات "مدعوم من" أو علامات مشتركة. عملاؤك يتفاعلون مع علامتك التجارية حصريًا.' },
        { question: 'هل يمكنني مطابقة إرشادات علامتي التجارية الحالية؟', answer: 'بالتأكيد. ارفع شعارك، حدد ألوان علامتك، وخصص خطوطك. تجربة الحجز تتطابق مع هوية علامتك التجارية الحالية بسلاسة.' },
      ],
    },
  },
  professional: {
    en: {
      hero: {
        categoryLabel: 'BRAND CONTROL FOR PROFESSIONALS',
        headline: 'Your Professional Brand. Your Booking Page.',
        subHeadline:
          'Stand out with a branded profile that showcases your work. Clients book through your page, not a generic platform.',
        ctaText: 'Start Your Free Trial',
        ctaLink: '/start-free-trial/professional',
        trustLine: 'Free to join. No credit card required.',
        answerBlock: {
          question: 'How does brand control work for beauty professionals?',
          answer:
            'Brand control lets you present your own professional identity to clients. Your branded profile showcases your portfolio, services, and reviews. Clients book through your page and see your name and work, not a generic platform listing.',
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
            title: 'Client Finds Your Branded Profile',
            text: 'Your Name. Your Work. Your Reputation.',
            description:
              'A potential client discovers your professional profile. They see your name, your portfolio photos, and your reviews. The page reflects your identity, not a generic listing.',
            listSub: [
              'Professional profile with your branding',
              'Portfolio photos front and center',
              'Reviews build your personal reputation',
            ],
          },
        },
        {
          sortId: 2,
          mainImage: '/images/pages/business/scroll/smart-scheduling.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel2,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'They Browse Your Portfolio and Services',
            text: 'Your Best Work Speaks for Itself',
            description:
              'The client scrolls through your work gallery and service menu. Before/after photos, service descriptions, and pricing are all presented beautifully under your professional brand.',
            listSub: [
              'Visual portfolio gallery',
              'Detailed service descriptions',
              'Transparent pricing builds trust',
            ],
          },
        },
        {
          sortId: 3,
          mainImage: '/images/pages/business/scroll/booking-confirmed.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel3,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'They Book Through Your Page',
            text: 'Seamless Experience Under Your Name',
            description:
              'The client selects a service, picks a time, and books directly through your branded page. The entire experience feels personal and professional.',
            listSub: [
              'Book directly from your profile',
              'Your name on the confirmation',
              'No generic platform branding',
            ],
          },
        },
        {
          sortId: 4,
          mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel4,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'They Get Branded Confirmation',
            text: 'Your Identity at Every Step',
            description:
              'The client receives a confirmation with your name and details. Reminders come from your professional brand. Every interaction reinforces your reputation.',
            listSub: [
              'Branded confirmation messages',
              'Reminders under your name',
              'Builds long-term client loyalty',
            ],
          },
        },
      ],
      socialProofStats: [
        { value: '1', context: 'branded booking page, all yours' },
        { value: '0', context: 'platform branding visible to clients' },
        { value: '10+', context: 'languages for your audience' },
      ],
      howItWorks: {
        title: 'How It Works',
      steps: [
          { title: 'Sign up and tell us about yourself', description: 'Takes 5 minutes. Set your services, availability, and pricing.' },
          { title: 'Our team helps you get set up', description: 'We configure your profile, set up your AI assistant, and walk you through everything.' },
          { title: 'Go live. Focus on your clients.', description: 'Daisy handles your bookings. You handle your craft.' },
        ],
      },
      pricingHook: {
        headline: 'Free to Join. Zero Risk.',
        body: "Create your profile and start accepting bookings at no cost. Premium features available through affordable plans. Daisy doesn't just manage your schedule. It learns your clients' preferences, personalizes their booking experience, and makes sure you never miss an inquiry. Commission only on new clients who find you through the Daisy marketplace, your existing clients always pay zero commission.",
        ctaText: 'Get Listed for Free',
        ctaLink: '/start-free-trial/professional',
        pricingLinkText: 'See full pricing details \u2192',
        pricingLinkHref: '/pricing',
      },
      platformStrengths: {
        headline: 'Everything You Need in One App',
        subHeadline: 'No more juggling between scheduling apps, payment tools, and messaging clients. Daisy brings it all together.',
        capabilities: [
          { label: 'Professional Profile', description: 'Showcase your work and attract new clients' },
          { label: 'AI Booking Assistant', description: 'Handles bookings and payments while you work' },
          { label: 'Flexible Scheduling', description: 'Set your own hours across multiple locations' },
          { label: 'Earnings Tracker', description: 'Track revenue in real-time with detailed breakdowns' },
          { label: 'Client Management', description: 'Build relationships with detailed client profiles' },
          { label: 'Smart Notifications', description: 'Appointment reminders that reduce no-shows' },
          { label: 'Calendar Sync', description: 'Sync with Google Calendar and other tools' },
          { label: 'Marketplace Visibility', description: 'Customers find you when searching nearby' },
        ],
        stats: [
          { value: '1', context: 'branded page' },
          { value: '24/7', context: 'AI-powered booking' },
          { value: '10+', context: 'languages supported' },
        ],
      },
      inlineCtas: {
        afterScroll: {
          headline: 'Ready to build your professional brand online?',
          ctaText: 'Start Your Free Trial',
          ctaLink: '/start-free-trial/professional',
        },
        afterFeatures: {
          headline: 'Start Your Free Trial',
          ctaText: 'Start Your Free Trial',
          ctaLink: '/start-free-trial/professional',
          secondaryLinkText: 'Explore all features \u2192',
          secondaryLinkHref: '/features/professional',
        },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'Can I customize my profile page?', answer: 'Yes. You can add your name, photo, bio, portfolio images, service descriptions, and pricing. Your profile looks and feels like your own professional website.' },
        { question: 'Will clients see The Daisy brand?', answer: 'Clients interact with your professional profile. Your name, your work, and your brand are what they see and remember.' },
        { question: 'Can I add my portfolio?', answer: 'Absolutely. Upload before/after photos, service showcase images, and client transformations. Your portfolio is displayed prominently on your profile page.' },
        { question: 'How do clients find my page?', answer: 'Your profile appears in the Daisy marketplace when customers search for beauty services in your area. You can also share your direct booking link on social media and messaging apps.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'التحكم بالعلامة التجارية للمتخصصين',
        headline: 'علامتك المهنية. صفحة الحجز الخاصة بك.',
        subHeadline:
          'تميّز بملف شخصي يحمل علامتك التجارية ويعرض أعمالك. العملاء يحجزون عبر صفحتك، ليس عبر منصة عامة.',
        ctaText: 'ابدأ تجربتك المجانية',
        ctaLink: '/start-free-trial/professional',
        trustLine: 'الانضمام مجاني. لا حاجة لبطاقة ائتمان.',
        answerBlock: {
          question: 'كيف يعمل التحكم بالعلامة التجارية لمتخصصي التجميل؟',
          answer:
            'التحكم بالعلامة التجارية يتيح لك تقديم هويتك المهنية الخاصة للعملاء. ملفك الشخصي يعرض معرض أعمالك وخدماتك ومراجعاتك. العملاء يحجزون عبر صفحتك ويرون اسمك وأعمالك، ليس قائمة منصة عامة.',
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
            title: 'عميل يجد ملفك الشخصي المميز',
            text: 'اسمك. أعمالك. سمعتك.',
            description:
              'عميل محتمل يكتشف ملفك المهني. يرى اسمك وصور أعمالك ومراجعاتك. الصفحة تعكس هويتك، ليست قائمة عامة.',
            listSub: [
              'ملف مهني بعلامتك التجارية',
              'صور الأعمال في الواجهة',
              'المراجعات تبني سمعتك الشخصية',
            ],
          },
        },
        {
          sortId: 2,
          mainImage: '/images/pages/business/scroll/smart-scheduling.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel2,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'يتصفحون معرض أعمالك وخدماتك',
            text: 'أفضل أعمالك تتحدث عن نفسها',
            description:
              'العميل يتصفح معرض أعمالك وقائمة خدماتك. صور قبل/بعد وأوصاف الخدمات والأسعار كلها معروضة بشكل جميل تحت علامتك المهنية.',
            listSub: [
              'معرض أعمال بصري',
              'أوصاف خدمات مفصلة',
              'أسعار شفافة تبني الثقة',
            ],
          },
        },
        {
          sortId: 3,
          mainImage: '/images/pages/business/scroll/booking-confirmed.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          secondBg: '/images/pages/business/scroll/stars.webp',
          ...scrollStyles.panel3,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'يحجزون عبر صفحتك',
            text: 'تجربة سلسة تحت اسمك',
            description:
              'العميل يختار خدمة ويحدد وقتًا ويحجز مباشرة عبر صفحتك المميزة. التجربة بأكملها تبدو شخصية ومهنية.',
            listSub: [
              'حجز مباشر من ملفك الشخصي',
              'اسمك على التأكيد',
              'بدون علامات منصة عامة',
            ],
          },
        },
        {
          sortId: 4,
          mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp',
          firstBg: '/images/pages/business/scroll/leaf-bg.webp',
          ...scrollStyles.panel4,
          mainImageWidth: 300,
          mainImageHeight: 500,
          infoScroll: {
            title: 'يحصلون على تأكيد بعلامتك',
            text: 'هويتك في كل خطوة',
            description:
              'العميل يتلقى تأكيدًا باسمك وتفاصيلك. التذكيرات تأتي من علامتك المهنية. كل تفاعل يعزز سمعتك.',
            listSub: [
              'رسائل تأكيد بعلامتك',
              'تذكيرات تحت اسمك',
              'يبني ولاء العملاء على المدى الطويل',
            ],
          },
        },
      ],
      socialProofStats: [
        { value: '1', context: 'صفحة حجز بعلامتك، ملكك بالكامل' },
        { value: '0', context: 'علامات منصة مرئية للعملاء' },
        { value: '+10', context: 'لغة لجمهورك' },
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
        ctaLink: '/start-free-trial/professional',
        pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190',
        pricingLinkHref: '/pricing',
      },
      platformStrengths: {
        headline: 'كل ما تحتاجه في تطبيق واحد',
        subHeadline: 'لا مزيد من التنقل بين تطبيقات الجدولة وأدوات الدفع ومراسلة العملاء. ديزي تجمع كل شيء معًا.',
        capabilities: [
          { label: 'الملف المهني', description: 'اعرض أعمالك واجذب عملاء جدد' },
          { label: 'مساعد الحجز الذكي', description: 'يتولى الحجوزات والمدفوعات أثناء عملك' },
          { label: 'جدولة مرنة', description: 'حدد ساعات عملك عبر مواقع متعددة' },
          { label: 'متتبع الأرباح', description: 'تتبع الإيرادات في الوقت الفعلي مع تفاصيل دقيقة' },
          { label: 'إدارة العملاء', description: 'ابنِ علاقات مع ملفات عملاء مفصلة' },
          { label: 'إشعارات ذكية', description: 'تذكيرات بالمواعيد تقلل حالات عدم الحضور' },
          { label: 'مزامنة التقويم', description: 'مزامنة مع تقويم جوجل وأدوات أخرى' },
          { label: 'ظهور في السوق', description: 'العملاء يجدونك عند البحث بالقرب منهم' },
        ],
        stats: [
          { value: '1', context: 'صفحة بعلامتك' },
          { value: '24/7', context: 'حجز مدعوم بالذكاء الاصطناعي' },
          { value: '+10', context: 'لغة مدعومة' },
        ],
      },
      inlineCtas: {
        afterScroll: {
          headline: 'مستعد لبناء علامتك المهنية عبر الإنترنت؟',
          ctaText: 'ابدأ تجربتك المجانية',
          ctaLink: '/start-free-trial/professional',
        },
        afterFeatures: {
          headline: 'ابدأ تجربتك المجانية',
          ctaText: 'ابدأ تجربتك المجانية',
          ctaLink: '/start-free-trial/professional',
          secondaryLinkText: 'استكشف جميع الميزات \u2192',
          secondaryLinkHref: '/features/professional',
        },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'هل يمكنني تخصيص صفحة ملفي الشخصي؟', answer: 'نعم. يمكنك إضافة اسمك وصورتك ونبذتك وصور أعمالك وأوصاف الخدمات والأسعار. ملفك الشخصي يبدو ويشعر كأنه موقعك المهني الخاص.' },
        { question: 'هل سيرى العملاء علامة ذا ديزي التجارية؟', answer: 'العملاء يتفاعلون مع ملفك المهني. اسمك وأعمالك وعلامتك هي ما يرونه ويتذكرونه.' },
        { question: 'هل يمكنني إضافة معرض أعمالي؟', answer: 'بالتأكيد. ارفع صور قبل/بعد وصور عرض الخدمات وتحولات العملاء. معرض أعمالك يُعرض بشكل بارز على صفحة ملفك الشخصي.' },
        { question: 'كيف يجد العملاء صفحتي؟', answer: 'يظهر ملفك الشخصي في سوق ديزي عندما يبحث العملاء عن خدمات التجميل في منطقتك. يمكنك أيضًا مشاركة رابط الحجز المباشر على وسائل التواصل الاجتماعي وتطبيقات المراسلة.' },
      ],
    },
  },
};

registerAngle('brand-control', brandControlAngle);
