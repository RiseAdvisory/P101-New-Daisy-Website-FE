import { I18nContent } from '@/lib/constants/i18n';
import { LandingPageContent } from '@/lib/constants/pages/scrollSections.types';
import { registerAngle } from './index';

const scrollStyles = {
  panel1: { styleMainPictureJSON: { position: 'absolute', padding: '24px 0px 24px 24px', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'right' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleSecondBgJSON: { position: 'absolute', top: '40px', right: '30px', width: '100px' }, styleBgMobileSecond: { position: 'absolute', top: '-70px', right: '-70px', width: '200px', height: '200px', transform: 'rotate(180deg) scaleX(-1)' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
  panel2: { styleMainPictureJSON: { position: 'absolute', padding: '24px 24px 0px 24px', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
  panel3: { styleMainPictureJSON: { position: 'absolute', padding: '24px', width: '100%', height: '100%', objectFit: 'contain' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleSecondBgJSON: { position: 'absolute', top: '40px', right: '30px', width: '100px' }, styleBgMobileSecond: { position: 'absolute', top: '-70px', right: '-70px', width: '200px', height: '200px', transform: 'rotate(180deg) scaleX(-1)' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
  panel4: { styleMainPictureJSON: { position: 'absolute', padding: '24px', width: '100%', height: '100%', objectFit: 'contain' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
};

const allInOneAngle: Record<'business' | 'professional', I18nContent<LandingPageContent>> = {
  business: {
    en: {
      hero: {
        categoryLabel: 'ALL-IN-ONE FOR BUSINESS',
        headline: '8 Tools. One Platform.\nZero Headaches.',
        subHeadline: 'Booking, marketing, payments, staff scheduling, customer acquisition, analytics, brand management and AI reception, all replaced by one subscription, one dashboard, one login.',
        ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/get-the-app',
        trustLine: 'No credit card required. Our team helps you set up.',
        answerBlock: { question: 'What tools does Daisy replace for beauty businesses?', answer: 'Daisy replaces 8 separate tools: the AI receptionist for messaging, smart booking, customer acquisition through the marketplace and cashback, payment processing and invoicing, staff management, marketing automation, the analytics dashboard and white-label brand control. One platform, one subscription, one login.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'See Your Current Tool Stack', text: '5+ Apps. Multiple Logins. Monthly Bills.', description: 'Right now there is a booking app, a messaging tool, a payment processor, a marketing platform and probably more. Separate logins, separate invoices, nothing talking to anything else.', listSub: ['Multiple subscriptions adding up', 'Data siloed across platforms', 'No connection between tools'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Watch Daisy Replace Each One', text: 'One by One, They All Fold Into Daisy', description: 'The booking software goes. The payment processor is built in. Marketing runs on AI. Staff scheduling and analytics sit in the same place. Everything you were paying for separately now lives in one platform.', listSub: ['Each tool replaced, not just duplicated', 'AI connects everything together', 'Data flows between all features'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/payment-collection.webp', mainImageMobile: '/images/pages/business/scroll/payment-collection-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Everything in One Dashboard', text: 'One Login. Complete Visibility.', description: 'Open Daisy and it is all in front of you: bookings, messages, payments, staff schedules, analytics and marketing in one view, with nothing to switch between and no missing context.', listSub: ['Single dashboard for everything', 'Real-time data across all features', 'Complete business visibility'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'One Subscription. One Invoice.', text: 'Simpler. Cheaper. Better.', description: 'One price instead of 5+ subscriptions. It costs less than the stack you are running now, and works considerably better because the parts were built to fit.', listSub: ['One price for 8 tools', 'Lower total cost than separate tools', 'No integration headaches'] } },
      ],
      socialProofStats: [
        { value: '8', context: 'tools replaced' },
        { value: '1', context: 'subscription for everything' },
        { value: '24/7', context: 'AI running it all' },
      ],
      howItWorks: { title: 'How It Works', steps: [
        { title: 'Sign up and tell us about your business', description: 'Takes 5 minutes. Tell us your services, staff, and hours.' },
        { title: 'Our team helps you get set up', description: 'We migrate your data, configure your AI receptionist, and test everything with you.' },
        { title: 'Go live. Your AI receptionist takes over.', description: 'Customers get instant responses. You get control.' },
      ] },
      pricingHook: { headline: 'Free to Start. Grow at Your Own Pace.', body: "14-day free trial with full access to every feature. No credit card required. After that, flexible plans starting from $50/month. Your AI receptionist doesn't just handle messages. It learns your customers' preferences over time, personalizing every interaction and turning first-time visitors into loyal regulars. Commission only on new customers the Daisy marketplace brings you, your existing clients, zero commission.", ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/get-the-app', pricingLinkText: 'See full pricing details \u2192', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'Everything You Need to Run Your Business', subHeadline: 'Stop paying for 8 separate tools. Daisy combines everything you need to run and grow your beauty business.', capabilities: [
        { label: 'AI Receptionist', description: '24/7 WhatsApp and Instagram messaging, booking, and payments' },
        { label: 'Smart Booking', description: 'Intelligent scheduling that fills your calendar' },
        { label: 'Customer Acquisition', description: 'Marketplace, cashback, and marketing tools' },
        { label: 'Payments & Invoicing', description: 'Seamless transactions and financial tracking' },
        { label: 'Staff Management', description: 'Scheduling, permissions, and performance' },
        { label: 'Marketing Engine', description: 'Promotions, campaigns, and customer retention' },
        { label: 'Analytics Dashboard', description: 'Revenue trends, insights, and reporting' },
        { label: 'Brand Control', description: 'White-label everything with your brand' },
      ], stats: [{ value: '8', context: 'tools replaced' }, { value: '24/7', context: 'AI receptionist' }, { value: '10+', context: 'languages supported' }] },
      inlineCtas: {
        afterScroll: { headline: 'Ready to replace your entire tool stack?', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/get-the-app' },
        afterFeatures: { headline: 'Start Your 14-Day Free Trial', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/get-the-app', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/business' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'What tools does Daisy replace?', answer: 'Your booking software, messaging tools, payment processor, marketing platform, staff scheduling app, analytics, brand and website management, and acquisition channels. All 8 categories, one platform.' },
        { question: 'How much does it cost compared to separate tools?', answer: 'Daisy starts at $50/month after a 14-day free trial. Most businesses are spending $200-500/month across separate tools for booking, marketing, payments and messaging. This replaces all of them for a fraction of it.' },
        { question: 'Can I migrate my data from current tools?', answer: 'Yes. The onboarding team moves your client data, booking history and preferences across from your current tools at no extra cost, and stays with you through it.' },
        { question: 'Is there a free trial?', answer: 'Yes, a 14-day free trial with every feature open and no credit card. We help you set up and migrate your data during it.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'الكل في واحد للأعمال',
        headline: '8 أدوات. منصة واحدة.\nبدون صداع.',
        subHeadline: 'الحجوزات والتسويق والمدفوعات وجدولة الموظفين واستقطاب العملاء والتحليلات وإدارة العلامة التجارية واستقبال الذكاء الاصطناعي. ديزي تستبدلها جميعًا. اشتراك واحد، لوحة تحكم واحدة، تسجيل دخول واحد.',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/get-the-app',
        trustLine: 'لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد.',
        answerBlock: { question: 'ما الأدوات التي تستبدلها ديزي لأعمال التجميل؟', answer: 'ديزي تستبدل 8 أدوات منفصلة: موظف استقبال ذكي للمراسلة، حجز ذكي للجدولة، استقطاب العملاء عبر السوق والكاش باك، معالجة المدفوعات والفوترة، إدارة الموظفين، أتمتة التسويق، لوحة التحليلات، والتحكم بالعلامة التجارية البيضاء. منصة واحدة، اشتراك واحد، تسجيل دخول واحد.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'انظر إلى أدواتك الحالية', text: '+5 تطبيقات. تسجيلات دخول متعددة. فواتير شهرية.', description: 'حاليًا أنت تدفع لتطبيق حجز وأداة مراسلة ومعالج دفع ومنصة تسويق وربما أكثر. تسجيلات دخول مختلفة، فواتير مختلفة، بدون تكامل بينها.', listSub: ['اشتراكات متعددة تتراكم', 'البيانات معزولة عبر المنصات', 'بدون ربط بين الأدوات'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'شاهد ديزي تستبدل كل واحدة', text: 'واحدة تلو الأخرى، كلها تنضم إلى ديزي', description: 'برنامج الحجز، تم استبداله. معالج الدفع، مدمج. أدوات التسويق، مؤتمتة بالذكاء الاصطناعي. جدولة الموظفين، موحدة. التحليلات، لوحة تحكم واحدة. كل أداة كنت تدفع لها بشكل منفصل الآن في منصة واحدة.', listSub: ['كل أداة تُستبدل، ليس فقط تُنسخ', 'الذكاء الاصطناعي يربط كل شيء معًا', 'البيانات تتدفق بين جميع الميزات'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/payment-collection.webp', mainImageMobile: '/images/pages/business/scroll/payment-collection-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'كل شيء في لوحة تحكم واحدة', text: 'تسجيل دخول واحد. رؤية كاملة.', description: 'افتح ديزي واطلع على كل شيء: الحجوزات والرسائل والمدفوعات وجداول الموظفين والتحليلات والتسويق في عرض واحد. بدون تبديل بين التطبيقات. بدون سياق مفقود.', listSub: ['لوحة تحكم واحدة لكل شيء', 'بيانات في الوقت الفعلي عبر جميع الميزات', 'رؤية كاملة للعمل'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'اشتراك واحد. فاتورة واحدة.', text: 'أبسط. أرخص. أفضل.', description: 'بدلاً من +5 اشتراكات منفصلة، تدفع سعرًا واحدًا لكل شيء. التكلفة أقل من مجموع أدواتك الحالية، والتجربة أفضل بكثير لأن كل شيء يعمل معًا.', listSub: ['سعر واحد لـ 8 أدوات', 'تكلفة إجمالية أقل من الأدوات المنفصلة', 'بدون صداع التكامل'] } },
      ],
      socialProofStats: [
        { value: '8', context: 'أدوات تم استبدالها' },
        { value: '1', context: 'اشتراك لكل شيء' },
        { value: '24/7', context: 'الذكاء الاصطناعي يدير الكل' },
      ],
      howItWorks: { title: 'كيف يعمل', steps: [
        { title: 'سجّل وأخبرنا عن عملك', description: 'يستغرق 5 دقائق. أخبرنا عن خدماتك وموظفيك وساعات عملك.' },
        { title: 'فريقنا يساعدك في الإعداد', description: 'ننقل بياناتك ونُعدّ موظف الاستقبال الذكي ونختبر كل شيء معك.' },
        { title: 'ابدأ العمل. موظف الاستقبال الذكي يتولى المهمة.', description: 'العملاء يحصلون على ردود فورية. أنت تحصل على التحكم.' },
      ] },
      pricingHook: { headline: 'ابدأ مجانًا. انمُ بالسرعة التي تناسبك.', body: 'تجربة مجانية لمدة 14 يومًا مع وصول كامل لجميع الميزات. لا حاجة لبطاقة ائتمان. بعد ذلك، باقات مرنة تبدأ من 50 دولار/شهريًا. موظف الاستقبال الذكي لا يتولى الرسائل فحسب. بل يتعلم تفضيلات عملائك بمرور الوقت، ويُخصّص كل تفاعل ويحوّل الزوار الجدد إلى عملاء أوفياء. عمولة فقط على العملاء الجدد الذين يجلبهم سوق ديزي، عملاؤك الحاليون، بدون أي عمولة.', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/get-the-app', pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'كل ما تحتاجه لإدارة عملك', subHeadline: 'توقف عن الدفع لـ 8 أدوات منفصلة. ديزي تجمع كل ما تحتاجه لإدارة وتنمية أعمالك في مجال التجميل.', capabilities: [
        { label: 'موظف استقبال ذكي', description: 'رسائل واتساب وإنستغرام وحجوزات ومدفوعات على مدار الساعة' },
        { label: 'حجز ذكي', description: 'جدولة ذكية تملأ تقويمك' },
        { label: 'استقطاب العملاء', description: 'سوق إلكتروني وكاش باك وأدوات تسويق' },
        { label: 'المدفوعات والفوترة', description: 'معاملات سلسة وتتبع مالي' },
        { label: 'إدارة الموظفين', description: 'جدولة وصلاحيات وأداء' },
        { label: 'محرك التسويق', description: 'عروض وحملات والاحتفاظ بالعملاء' },
        { label: 'لوحة التحليلات', description: 'اتجاهات الإيرادات والرؤى والتقارير' },
        { label: 'التحكم بالعلامة التجارية', description: 'كل شيء بعلامتك التجارية الخاصة' },
      ], stats: [{ value: '8', context: 'أدوات تم استبدالها' }, { value: '24/7', context: 'موظف استقبال ذكي' }, { value: '+10', context: 'لغة مدعومة' }] },
      inlineCtas: {
        afterScroll: { headline: 'مستعد لاستبدال كل أدواتك بمنصة واحدة؟', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/get-the-app' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/get-the-app', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/business' },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'ما الأدوات التي تستبدلها ديزي؟', answer: 'ديزي تستبدل برنامج الحجز وأدوات المراسلة ومعالج الدفع ومنصة التسويق وتطبيق جدولة الموظفين وأدوات التحليلات وإدارة العلامة التجارية/الموقع وقنوات استقطاب العملاء. جميع الفئات الـ 8 في منصة واحدة.' },
        { question: 'كم تكلف مقارنة بالأدوات المنفصلة؟', answer: 'ديزي تبدأ من 50 دولار/شهريًا بعد تجربة مجانية لمدة 14 يومًا. معظم الأعمال تنفق 200-500 دولار/شهريًا على أدوات منفصلة للحجز والتسويق والمدفوعات والمراسلة. ديزي تجمع كل هذا بجزء من التكلفة.' },
        { question: 'هل يمكنني نقل بياناتي من الأدوات الحالية؟', answer: 'نعم. فريق الإعداد لدينا يساعدك في نقل بيانات العملاء وسجل الحجوزات والتفضيلات من أدواتك الحالية بدون تكلفة إضافية. الانتقال سلس ومدعوم.' },
        { question: 'هل هناك تجربة مجانية؟', answer: 'نعم. ابدأ بتجربة مجانية لمدة 14 يومًا مع وصول كامل لجميع الميزات. لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد ونقل البيانات أثناء التجربة.' },
      ],
    },
  },
  professional: {
    en: {
      hero: {
        categoryLabel: 'ALL-IN-ONE FOR PROFESSIONALS',
        headline: 'One App for Your Entire Career.',
        subHeadline: 'Scheduling, bookings, payments, client management, portfolio, marketing, and AI assistant. Everything you need, nothing you don\'t.',
        ctaText: 'Start Your Free Trial', ctaLink: '/get-the-app',
        trustLine: 'Free to join. No credit card required.',
        answerBlock: { question: 'What does the Daisy all-in-one app include for professionals?', answer: 'Everything a beauty professional needs sits in one place: the AI booking assistant, flexible scheduling, payments, client management, your portfolio, marketing automation, calendar sync and marketplace visibility. One app in place of several, wherever you happen to be working.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Your Scheduling App: Gone.', text: 'Daisy Handles Your Calendar', description: 'The separate scheduling app goes. Daisy holds your availability, takes bookings 24/7 and will not double-book you. The calendar fills while you are with clients.', listSub: ['Set hours across multiple locations', 'AI accepts bookings while you work', 'Zero scheduling conflicts'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Your Payment App: Gone.', text: 'Daisy Processes Payments', description: 'No awkward conversation about money, and no separate payment tool. Clients pay in the app before or after the appointment, and the earnings are tracked for you.', listSub: ['In-app payment processing', 'Automatic receipts and tracking', 'Weekly payouts to your bank'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Your Marketing Effort: Gone.', text: 'AI Handles Client Retention', description: 'No more chasing people for a rebooking. The AI learns what they like and sends the reminder itself, and retention climbs while you do nothing.', listSub: ['Personalized rebooking reminders', 'AI learns client preferences', 'Zero manual marketing effort'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Everything in One App', text: 'Open Daisy. See Your Whole Career.', description: 'Schedule, bookings, payments, clients, portfolio, earnings and the AI assistant, all in one app. Nothing to switch between and nothing lost in the gaps.', listSub: ['One app, one login', 'All your data in one place', 'Works on phone, tablet, and web'] } },
      ],
      socialProofStats: [
        { value: '1', context: 'app for everything' },
        { value: '0%', context: 'commission on existing clients' },
        { value: '24/7', context: 'AI assistant included' },
      ],
      howItWorks: { title: 'How It Works', steps: [
        { title: 'Sign up and tell us about yourself', description: 'Takes 5 minutes. Your services, your availability, your prices.' },
        { title: 'Our team helps you get set up', description: 'We set up your profile and your AI assistant, and walk you through all of it.' },
        { title: 'Go live. Focus on your clients.', description: 'Daisy takes the bookings. You do the work you trained for.' },
      ] },
      pricingHook: { headline: 'Free to Join. Zero Risk.', body: "Create your profile and start taking bookings at no cost, with premium features on affordable plans. Daisy does more than hold your schedule: it learns what your clients prefer, shapes their booking experience around it, and makes sure nothing goes unanswered. Commission applies only to new clients who find you through the Daisy marketplace. Your existing clients always pay zero.", ctaText: 'Get Listed for Free', ctaLink: '/get-the-app', pricingLinkText: 'See full pricing details \u2192', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'Everything You Need in One App', subHeadline: 'No more moving between a scheduling app, a payment tool and a messaging thread. Daisy holds all of it together.', capabilities: [
        { label: 'AI Booking Assistant', description: 'Handles bookings and payments while you work' },
        { label: 'Flexible Scheduling', description: 'Set your own hours across multiple locations' },
        { label: 'Earnings Tracker', description: 'Track revenue in real-time with detailed breakdowns' },
        { label: 'Professional Profile', description: 'Showcase your work and attract new clients' },
        { label: 'Client Management', description: 'Build relationships with detailed client profiles' },
        { label: 'Smart Notifications', description: 'Appointment reminders that reduce no-shows' },
        { label: 'Calendar Sync', description: 'Sync with Google Calendar and other tools' },
        { label: 'Marketplace Visibility', description: 'Customers find you when searching nearby' },
      ], stats: [{ value: '1', context: 'app for everything' }, { value: '24/7', context: 'AI-powered booking' }, { value: '10+', context: 'languages supported' }] },
      inlineCtas: {
        afterScroll: { headline: 'Ready to simplify your professional life?', ctaText: 'Start Your Free Trial', ctaLink: '/get-the-app' },
        afterFeatures: { headline: 'Start Your Free Trial', ctaText: 'Start Your Free Trial', ctaLink: '/get-the-app', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/professional' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'What does the all-in-one app include?', answer: 'All of it: the AI booking assistant, flexible scheduling, payments, client management, your portfolio, personalised marketing, calendar sync and marketplace visibility.' },
        { question: 'Is there a fee or commission?', answer: 'Joining is free. Commission applies only to new clients who book you through the Daisy marketplace, and your existing clients pay none. Premium features sit on affordable subscription tiers.' },
        { question: 'Can I manage multiple locations?', answer: 'Yes. Each location gets its own hours, services and availability, and the AI assistant handles bookings across all of them at once.' },
        { question: 'How do I get started?', answer: 'Sign up in 5 minutes, set your services and availability, and our team configures the rest. You can be taking bookings the same day.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'الكل في واحد للمتخصصين',
        headline: 'تطبيق واحد لمسيرتك المهنية بأكملها.',
        subHeadline: 'الجدولة والحجوزات والمدفوعات وإدارة العملاء والمعرض والتسويق ومساعد الذكاء الاصطناعي. كل ما تحتاجه، لا شيء لا تحتاجه.',
        ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/get-the-app',
        trustLine: 'الانضمام مجاني. لا حاجة لبطاقة ائتمان.',
        answerBlock: { question: 'ما الذي يتضمنه تطبيق ديزي الشامل للمتخصصين؟', answer: 'ديزي تجمع كل ما يحتاجه متخصص التجميل: مساعد حجز ذكي وجدولة مرنة ومعالجة المدفوعات وإدارة العملاء ومعرض أعمال مهني وأتمتة التسويق ومزامنة التقويم وظهور في السوق. تطبيق واحد يستبدل أدوات متعددة ويعمل أينما عملت.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'تطبيق الجدولة: اختفى.', text: 'ديزي تدير تقويمك', description: 'لا مزيد من تطبيق جدولة منفصل. ديزي تدير توافرك وتقبل الحجوزات على مدار الساعة وتمنع الحجوزات المزدوجة. تقويمك يمتلئ بنفسه بينما تركز على العملاء.', listSub: ['حدد الساعات عبر مواقع متعددة', 'الذكاء الاصطناعي يقبل الحجوزات أثناء عملك', 'بدون تعارضات في الجدولة'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'تطبيق الدفع: اختفى.', text: 'ديزي تعالج المدفوعات', description: 'لا مزيد من محادثات الدفع المحرجة أو أدوات الدفع المنفصلة. العملاء يدفعون عبر التطبيق قبل أو بعد موعدهم. الأرباح تُتتبع تلقائيًا.', listSub: ['معالجة الدفع في التطبيق', 'إيصالات وتتبع تلقائي', 'دفعات أسبوعية لحسابك البنكي'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'جهد التسويق: اختفى.', text: 'الذكاء الاصطناعي يتولى الاحتفاظ بالعملاء', description: 'لا مزيد من ملاحقة العملاء يدويًا لإعادة الحجز. الذكاء الاصطناعي يتعلم التفضيلات ويرسل تذكيرات مخصصة تلقائيًا. معدل الاحتفاظ يرتفع دون أن تحرك ساكنًا.', listSub: ['تذكيرات إعادة حجز مخصصة', 'الذكاء الاصطناعي يتعلم تفضيلات العملاء', 'بدون جهد تسويقي يدوي'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'كل شيء في تطبيق واحد', text: 'افتح ديزي. اطلع على مسيرتك بأكملها.', description: 'الجدول والحجوزات والمدفوعات والعملاء والمعرض والأرباح ومساعد الذكاء الاصطناعي كلها في تطبيق واحد. بدون تبديل بين الأدوات. بدون معلومات مفقودة. فقط مسيرتك، منظمة.', listSub: ['تطبيق واحد، تسجيل دخول واحد', 'كل بياناتك في مكان واحد', 'يعمل على الهاتف والتابلت والويب'] } },
      ],
      socialProofStats: [
        { value: '1', context: 'تطبيق لكل شيء' },
        { value: '0%', context: 'عمولة على العملاء الحاليين' },
        { value: '24/7', context: 'مساعد ذكي مشمول' },
      ],
      howItWorks: { title: 'كيف يعمل', steps: [
        { title: 'سجّل وأخبرنا عن نفسك', description: 'يستغرق 5 دقائق. حدد خدماتك وتوافرك وأسعارك.' },
        { title: 'فريقنا يساعدك في الإعداد', description: 'نُعدّ ملفك الشخصي ونُجهّز مساعدك الذكي ونشرح لك كل شيء.' },
        { title: 'ابدأ العمل. ركّز على عملائك.', description: 'ديزي تتولى حجوزاتك. أنت تتولى إبداعك.' },
      ] },
      pricingHook: { headline: 'الانضمام مجاني. بدون أي مخاطر.', body: 'أنشئ ملفك الشخصي وابدأ بقبول الحجوزات بدون تكلفة. الميزات المتقدمة متاحة من خلال باقات بأسعار معقولة. ديزي لا تدير جدولك فحسب. بل تتعلم تفضيلات عملائك، وتُخصّص تجربة حجزهم، وتتأكد من عدم تفويت أي استفسار. العمولة فقط على العملاء الجدد الذين يجدونك عبر سوق ديزي، عملاؤك الحاليون، بدون أي عمولة دائمًا.', ctaText: 'سجّل مجانًا', ctaLink: '/get-the-app', pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'كل ما تحتاجه في تطبيق واحد', subHeadline: 'لا مزيد من التنقل بين تطبيقات الجدولة وأدوات الدفع ومراسلة العملاء. ديزي تجمع كل شيء معًا.', capabilities: [
        { label: 'مساعد الحجز الذكي', description: 'يتولى الحجوزات والمدفوعات أثناء عملك' },
        { label: 'جدولة مرنة', description: 'حدد ساعات عملك عبر مواقع متعددة' },
        { label: 'متتبع الأرباح', description: 'تتبع الإيرادات في الوقت الفعلي مع تفاصيل دقيقة' },
        { label: 'الملف المهني', description: 'اعرض أعمالك واجذب عملاء جدد' },
        { label: 'إدارة العملاء', description: 'ابنِ علاقات مع ملفات عملاء مفصلة' },
        { label: 'إشعارات ذكية', description: 'تذكيرات بالمواعيد تقلل حالات عدم الحضور' },
        { label: 'مزامنة التقويم', description: 'مزامنة مع تقويم جوجل وأدوات أخرى' },
        { label: 'ظهور في السوق', description: 'العملاء يجدونك عند البحث بالقرب منهم' },
      ], stats: [{ value: '1', context: 'تطبيق لكل شيء' }, { value: '24/7', context: 'حجز مدعوم بالذكاء الاصطناعي' }, { value: '+10', context: 'لغة مدعومة' }] },
      inlineCtas: {
        afterScroll: { headline: 'مستعد لتبسيط حياتك المهنية؟', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/get-the-app' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/get-the-app', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/professional' },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'ما الذي يتضمنه التطبيق الشامل؟', answer: 'كل شيء: مساعد حجز ذكي وجدولة مرنة ومعالجة المدفوعات وإدارة العملاء ومعرض أعمال مهني وتسويق مخصص ومزامنة التقويم وظهور في السوق. تطبيق واحد لمسيرتك المهنية بأكملها.' },
        { question: 'هل هناك رسوم أو عمولة؟', answer: 'الانضمام مجاني. العمولة تُفرض فقط على العملاء الجدد الذين يحجزون عبر سوق ديزي، عملاؤك الحاليون بدون أي عمولة. الميزات المتقدمة متاحة من خلال باقات اشتراك بأسعار معقولة.' },
        { question: 'هل يمكنني إدارة مواقع متعددة؟', answer: 'نعم. حدد ساعات وخدمات وتوافر مختلفة لكل موقع. مساعدك الذكي يدير الحجوزات عبر جميعها في وقت واحد.' },
        { question: 'كيف أبدأ؟', answer: 'سجّل في 5 دقائق، حدد خدماتك وتوافرك، وفريقنا يساعدك في إعداد كل شيء. يمكنك قبول الحجوزات في نفس اليوم.' },
      ],
    },
  },
};

registerAngle('all-in-one', allInOneAngle);
