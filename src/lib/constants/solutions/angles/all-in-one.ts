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
        subHeadline: 'Booking, marketing, payments, staff scheduling, customer acquisition, analytics, brand management, and AI reception. Daisy replaces them all. One subscription, one dashboard, one login.',
        ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business',
        trustLine: 'No credit card required. Our team helps you set up.',
        answerBlock: { question: 'What tools does Daisy replace for beauty businesses?', answer: 'Daisy replaces 8 separate tools: AI receptionist for messaging, smart booking for scheduling, customer acquisition via marketplace and cashback, payment processing and invoicing, staff management, marketing automation, analytics dashboard, and white-label brand control. One platform, one subscription, one login.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'See Your Current Tool Stack', text: '5+ Apps. Multiple Logins. Monthly Bills.', description: 'Right now you are paying for a booking app, a messaging tool, a payment processor, a marketing platform, and maybe more. Different logins, different invoices, no integration between them.', listSub: ['Multiple subscriptions adding up', 'Data siloed across platforms', 'No connection between tools'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Watch Daisy Replace Each One', text: 'One by One, They All Fold Into Daisy', description: 'Booking software, replaced. Payment processor, built in. Marketing tools, automated by AI. Staff scheduling, unified. Analytics, one dashboard. Every tool you were paying for separately now lives in one platform.', listSub: ['Each tool replaced, not just duplicated', 'AI connects everything together', 'Data flows between all features'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/payment-collection.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Everything in One Dashboard', text: 'One Login. Complete Visibility.', description: 'Open Daisy and see everything: bookings, messages, payments, staff schedules, analytics, and marketing all in one view. No switching between apps. No missing context.', listSub: ['Single dashboard for everything', 'Real-time data across all features', 'Complete business visibility'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'One Subscription. One Invoice.', text: 'Simpler. Cheaper. Better.', description: 'Instead of 5+ separate subscriptions, you pay one price for everything. The cost is lower than your current tool stack, and the experience is far better because everything works together.', listSub: ['One price for 8 tools', 'Lower total cost than separate tools', 'No integration headaches'] } },
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
      pricingHook: { headline: 'Free to Start. Grow at Your Own Pace.', body: "14-day free trial with full access to every feature. No credit card required. After that, flexible plans starting from $50/month. Your AI receptionist doesn't just handle messages. It learns your customers' preferences over time, personalizing every interaction and turning first-time visitors into loyal regulars. Commission only on new customers the Daisy marketplace brings you, your existing clients, zero commission.", ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business', pricingLinkText: 'See full pricing details \u2192', pricingLinkHref: '/pricing' },
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
        afterScroll: { headline: 'Ready to replace your entire tool stack?', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business' },
        afterFeatures: { headline: 'Start Your 14-Day Free Trial', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/business' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'What tools does Daisy replace?', answer: 'Daisy replaces your booking software, messaging tools, payment processor, marketing platform, staff scheduling app, analytics tools, brand/website management, and customer acquisition channels. All 8 categories in one platform.' },
        { question: 'How much does it cost compared to separate tools?', answer: 'Daisy starts at $50/month after a 14-day free trial. Most businesses spend $200-500/month on separate tools for booking, marketing, payments, and messaging. Daisy consolidates all of these for a fraction of the cost.' },
        { question: 'Can I migrate my data from current tools?', answer: 'Yes. Our onboarding team helps you migrate client data, booking history, and preferences from your current tools at no extra cost. The transition is smooth and supported.' },
        { question: 'Is there a free trial?', answer: 'Yes. Start with a 14-day free trial with full access to every feature. No credit card required. Our team helps you set up and migrate your data during the trial.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'الكل في واحد للأعمال',
        headline: '8 أدوات. منصة واحدة.\nبدون صداع.',
        subHeadline: 'الحجوزات والتسويق والمدفوعات وجدولة الموظفين واستقطاب العملاء والتحليلات وإدارة العلامة التجارية واستقبال الذكاء الاصطناعي. ديزي تستبدلها جميعًا. اشتراك واحد، لوحة تحكم واحدة، تسجيل دخول واحد.',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business',
        trustLine: 'لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد.',
        answerBlock: { question: 'ما الأدوات التي تستبدلها ديزي لأعمال التجميل؟', answer: 'ديزي تستبدل 8 أدوات منفصلة: موظف استقبال ذكي للمراسلة، حجز ذكي للجدولة، استقطاب العملاء عبر السوق والكاش باك، معالجة المدفوعات والفوترة، إدارة الموظفين، أتمتة التسويق، لوحة التحليلات، والتحكم بالعلامة التجارية البيضاء. منصة واحدة، اشتراك واحد، تسجيل دخول واحد.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'انظر إلى أدواتك الحالية', text: '+5 تطبيقات. تسجيلات دخول متعددة. فواتير شهرية.', description: 'حاليًا أنت تدفع لتطبيق حجز وأداة مراسلة ومعالج دفع ومنصة تسويق وربما أكثر. تسجيلات دخول مختلفة، فواتير مختلفة، بدون تكامل بينها.', listSub: ['اشتراكات متعددة تتراكم', 'البيانات معزولة عبر المنصات', 'بدون ربط بين الأدوات'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'شاهد ديزي تستبدل كل واحدة', text: 'واحدة تلو الأخرى، كلها تنضم إلى ديزي', description: 'برنامج الحجز، تم استبداله. معالج الدفع، مدمج. أدوات التسويق، مؤتمتة بالذكاء الاصطناعي. جدولة الموظفين، موحدة. التحليلات، لوحة تحكم واحدة. كل أداة كنت تدفع لها بشكل منفصل الآن في منصة واحدة.', listSub: ['كل أداة تُستبدل، ليس فقط تُنسخ', 'الذكاء الاصطناعي يربط كل شيء معًا', 'البيانات تتدفق بين جميع الميزات'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/payment-collection.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'كل شيء في لوحة تحكم واحدة', text: 'تسجيل دخول واحد. رؤية كاملة.', description: 'افتح ديزي واطلع على كل شيء: الحجوزات والرسائل والمدفوعات وجداول الموظفين والتحليلات والتسويق في عرض واحد. بدون تبديل بين التطبيقات. بدون سياق مفقود.', listSub: ['لوحة تحكم واحدة لكل شيء', 'بيانات في الوقت الفعلي عبر جميع الميزات', 'رؤية كاملة للعمل'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'اشتراك واحد. فاتورة واحدة.', text: 'أبسط. أرخص. أفضل.', description: 'بدلاً من +5 اشتراكات منفصلة، تدفع سعرًا واحدًا لكل شيء. التكلفة أقل من مجموع أدواتك الحالية، والتجربة أفضل بكثير لأن كل شيء يعمل معًا.', listSub: ['سعر واحد لـ 8 أدوات', 'تكلفة إجمالية أقل من الأدوات المنفصلة', 'بدون صداع التكامل'] } },
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
      pricingHook: { headline: 'ابدأ مجانًا. انمُ بالسرعة التي تناسبك.', body: 'تجربة مجانية لمدة 14 يومًا مع وصول كامل لجميع الميزات. لا حاجة لبطاقة ائتمان. بعد ذلك، باقات مرنة تبدأ من 50 دولار/شهريًا. موظف الاستقبال الذكي لا يتولى الرسائل فحسب. بل يتعلم تفضيلات عملائك بمرور الوقت، ويُخصّص كل تفاعل ويحوّل الزوار الجدد إلى عملاء أوفياء. عمولة فقط على العملاء الجدد الذين يجلبهم سوق ديزي، عملاؤك الحاليون، بدون أي عمولة.', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business', pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190', pricingLinkHref: '/pricing' },
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
        afterScroll: { headline: 'مستعد لاستبدال كل أدواتك بمنصة واحدة؟', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/business' },
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
        ctaText: 'Start Your Free Trial', ctaLink: '/start-free-trial/professional',
        trustLine: 'Free to join. No credit card required.',
        answerBlock: { question: 'What does the Daisy all-in-one app include for professionals?', answer: 'Daisy combines everything a beauty professional needs: AI booking assistant, flexible scheduling, payment processing, client management, professional portfolio, marketing automation, calendar sync, and marketplace visibility. One app replaces multiple tools and works wherever you work.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Your Scheduling App: Gone.', text: 'Daisy Handles Your Calendar', description: 'No more separate scheduling app. Daisy manages your availability, accepts bookings 24/7, and prevents double-bookings. Your calendar fills itself while you focus on clients.', listSub: ['Set hours across multiple locations', 'AI accepts bookings while you work', 'Zero scheduling conflicts'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Your Payment App: Gone.', text: 'Daisy Processes Payments', description: 'No more awkward payment conversations or separate payment tools. Clients pay through the app before or after their appointment. Earnings tracked automatically.', listSub: ['In-app payment processing', 'Automatic receipts and tracking', 'Weekly payouts to your bank'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Your Marketing Effort: Gone.', text: 'AI Handles Client Retention', description: 'No more manually chasing clients for rebookings. The AI learns preferences and sends personalized reminders automatically. Your retention rate climbs without you lifting a finger.', listSub: ['Personalized rebooking reminders', 'AI learns client preferences', 'Zero manual marketing effort'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Everything in One App', text: 'Open Daisy. See Your Whole Career.', description: 'Schedule, bookings, payments, clients, portfolio, earnings, and AI assistant all in one app. No switching between tools. No missing information. Just your career, organized.', listSub: ['One app, one login', 'All your data in one place', 'Works on phone, tablet, and web'] } },
      ],
      socialProofStats: [
        { value: '1', context: 'app for everything' },
        { value: '0%', context: 'commission on existing clients' },
        { value: '24/7', context: 'AI assistant included' },
      ],
      howItWorks: { title: 'How It Works', steps: [
        { title: 'Sign up and tell us about yourself', description: 'Takes 5 minutes. Set your services, availability, and pricing.' },
        { title: 'Our team helps you get set up', description: 'We configure your profile, set up your AI assistant, and walk you through everything.' },
        { title: 'Go live. Focus on your clients.', description: 'Daisy handles your bookings. You handle your craft.' },
      ] },
      pricingHook: { headline: 'Free to Join. Zero Risk.', body: "Create your profile and start accepting bookings at no cost. Premium features available through affordable plans. Daisy doesn't just manage your schedule. It learns your clients' preferences, personalizes their booking experience, and makes sure you never miss an inquiry. Commission only on new clients who find you through the Daisy marketplace, your existing clients always pay zero commission.", ctaText: 'Get Listed for Free', ctaLink: '/start-free-trial/professional', pricingLinkText: 'See full pricing details \u2192', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'Everything You Need in One App', subHeadline: 'No more juggling between scheduling apps, payment tools, and messaging clients. Daisy brings it all together.', capabilities: [
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
        afterScroll: { headline: 'Ready to simplify your professional life?', ctaText: 'Start Your Free Trial', ctaLink: '/start-free-trial/professional' },
        afterFeatures: { headline: 'Start Your Free Trial', ctaText: 'Start Your Free Trial', ctaLink: '/start-free-trial/professional', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/professional' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'What does the all-in-one app include?', answer: 'Everything: AI booking assistant, flexible scheduling, payment processing, client management, professional portfolio, personalized marketing, calendar sync, and marketplace visibility. One app for your entire career.' },
        { question: 'Is there a fee or commission?', answer: 'Joining is free. Commission is only charged on new clients who book you through the Daisy marketplace, your existing clients pay zero commission. Premium features available through affordable subscription tiers.' },
        { question: 'Can I manage multiple locations?', answer: 'Yes. Set different hours, services, and availability for each location. Your AI assistant manages bookings across all of them simultaneously.' },
        { question: 'How do I get started?', answer: 'Sign up in 5 minutes, set your services and availability, and our team helps you get everything configured. You can be accepting bookings the same day.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'الكل في واحد للمتخصصين',
        headline: 'تطبيق واحد لمسيرتك المهنية بأكملها.',
        subHeadline: 'الجدولة والحجوزات والمدفوعات وإدارة العملاء والمعرض والتسويق ومساعد الذكاء الاصطناعي. كل ما تحتاجه، لا شيء لا تحتاجه.',
        ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/start-free-trial/professional',
        trustLine: 'الانضمام مجاني. لا حاجة لبطاقة ائتمان.',
        answerBlock: { question: 'ما الذي يتضمنه تطبيق ديزي الشامل للمتخصصين؟', answer: 'ديزي تجمع كل ما يحتاجه متخصص التجميل: مساعد حجز ذكي وجدولة مرنة ومعالجة المدفوعات وإدارة العملاء ومعرض أعمال مهني وأتمتة التسويق ومزامنة التقويم وظهور في السوق. تطبيق واحد يستبدل أدوات متعددة ويعمل أينما عملت.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'تطبيق الجدولة: اختفى.', text: 'ديزي تدير تقويمك', description: 'لا مزيد من تطبيق جدولة منفصل. ديزي تدير توافرك وتقبل الحجوزات على مدار الساعة وتمنع الحجوزات المزدوجة. تقويمك يمتلئ بنفسه بينما تركز على العملاء.', listSub: ['حدد الساعات عبر مواقع متعددة', 'الذكاء الاصطناعي يقبل الحجوزات أثناء عملك', 'بدون تعارضات في الجدولة'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'تطبيق الدفع: اختفى.', text: 'ديزي تعالج المدفوعات', description: 'لا مزيد من محادثات الدفع المحرجة أو أدوات الدفع المنفصلة. العملاء يدفعون عبر التطبيق قبل أو بعد موعدهم. الأرباح تُتتبع تلقائيًا.', listSub: ['معالجة الدفع في التطبيق', 'إيصالات وتتبع تلقائي', 'دفعات أسبوعية لحسابك البنكي'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'جهد التسويق: اختفى.', text: 'الذكاء الاصطناعي يتولى الاحتفاظ بالعملاء', description: 'لا مزيد من ملاحقة العملاء يدويًا لإعادة الحجز. الذكاء الاصطناعي يتعلم التفضيلات ويرسل تذكيرات مخصصة تلقائيًا. معدل الاحتفاظ يرتفع دون أن تحرك ساكنًا.', listSub: ['تذكيرات إعادة حجز مخصصة', 'الذكاء الاصطناعي يتعلم تفضيلات العملاء', 'بدون جهد تسويقي يدوي'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'كل شيء في تطبيق واحد', text: 'افتح ديزي. اطلع على مسيرتك بأكملها.', description: 'الجدول والحجوزات والمدفوعات والعملاء والمعرض والأرباح ومساعد الذكاء الاصطناعي كلها في تطبيق واحد. بدون تبديل بين الأدوات. بدون معلومات مفقودة. فقط مسيرتك، منظمة.', listSub: ['تطبيق واحد، تسجيل دخول واحد', 'كل بياناتك في مكان واحد', 'يعمل على الهاتف والتابلت والويب'] } },
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
      pricingHook: { headline: 'الانضمام مجاني. بدون أي مخاطر.', body: 'أنشئ ملفك الشخصي وابدأ بقبول الحجوزات بدون تكلفة. الميزات المتقدمة متاحة من خلال باقات بأسعار معقولة. ديزي لا تدير جدولك فحسب. بل تتعلم تفضيلات عملائك، وتُخصّص تجربة حجزهم، وتتأكد من عدم تفويت أي استفسار. العمولة فقط على العملاء الجدد الذين يجدونك عبر سوق ديزي، عملاؤك الحاليون، بدون أي عمولة دائمًا.', ctaText: 'سجّل مجانًا', ctaLink: '/start-free-trial/professional', pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190', pricingLinkHref: '/pricing' },
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
        afterScroll: { headline: 'مستعد لتبسيط حياتك المهنية؟', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/start-free-trial/professional' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/start-free-trial/professional', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/professional' },
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
