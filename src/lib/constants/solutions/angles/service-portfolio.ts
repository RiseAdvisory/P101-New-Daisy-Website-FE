import { I18nContent } from '@/lib/constants/i18n';
import { LandingPageContent } from '@/lib/constants/pages/scrollSections.types';
import { registerAngle } from './index';

const scrollStyles = {
  panel1: { styleMainPictureJSON: { position: 'absolute', padding: '24px 0px 24px 24px', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'right' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleSecondBgJSON: { position: 'absolute', top: '40px', right: '30px', width: '100px' }, styleBgMobileSecond: { position: 'absolute', top: '-70px', right: '-70px', width: '200px', height: '200px', transform: 'rotate(180deg) scaleX(-1)' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
  panel2: { styleMainPictureJSON: { position: 'absolute', padding: '24px 24px 0px 24px', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
  panel3: { styleMainPictureJSON: { position: 'absolute', padding: '24px', width: '100%', height: '100%', objectFit: 'contain' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleSecondBgJSON: { position: 'absolute', top: '40px', right: '30px', width: '100px' }, styleBgMobileSecond: { position: 'absolute', top: '-70px', right: '-70px', width: '200px', height: '200px', transform: 'rotate(180deg) scaleX(-1)' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
  panel4: { styleMainPictureJSON: { position: 'absolute', padding: '24px', width: '100%', height: '100%', objectFit: 'contain' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
};

const servicePortfolioAngle: Record<'business' | 'professional', I18nContent<LandingPageContent>> = {
  business: {
    en: {
      hero: {
        categoryLabel: 'SERVICE PORTFOLIO FOR BUSINESS',
        headline: 'Show Your Work Before They Walk In.',
        subHeadline: 'Rich service menus with photos, videos, and descriptions. Customers see exactly what they are booking. Confidence drives conversion.',
        ctaText: 'Start Your 14-Day Free Trial',
        ctaLink: '/start-free-trial/business',
        trustLine: 'No credit card required. Our team helps you set up.',
        answerBlock: { question: 'What is a visual service portfolio for beauty businesses?', answer: 'A visual service portfolio lets you showcase your services with photos, videos, descriptions, and transparent pricing. Customers browse your menu, see examples of your work, and book with confidence. Businesses with visual menus see significantly higher conversion rates.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/business/scroll/device-mockups.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Customer Browses Your Service Menu', text: 'Visual. Detailed. Compelling.', description: 'A customer opens your service page and sees a beautifully organized menu. Each service has photos, descriptions, duration, and pricing. They know exactly what to expect.', listSub: ['Photos and videos for each service', 'Clear descriptions and duration', 'Transparent pricing builds confidence'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/schedule.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'They See Photos and Videos', text: 'Your Best Work on Display', description: 'Before/after photos, styling videos, and client testimonials give customers a preview of what they can expect. Visual proof removes hesitation and drives bookings.', listSub: ['Before/after transformation photos', 'Service showcase videos', 'Real client testimonials'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/integrations.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'They Pick with Confidence', text: 'No Guesswork. Just Certainty.', description: 'The customer selects exactly the service they want. No confusion about what is included, how long it takes, or what it costs. They book because they already trust the outcome.', listSub: ['Service details eliminate confusion', 'Multiple categories organized clearly', 'Add-ons and packages visible'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/analytics.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'They Book Immediately', text: 'Confidence Converts to Revenue', description: 'The customer books the service, picks a time, and pays. Your visual portfolio did the selling. You get a confirmed booking without a single message.', listSub: ['Higher conversion from visual menus', 'Fewer questions before booking', 'Revenue increases with less effort'] } },
      ],
      socialProofStats: [
        { value: '3x', context: 'more bookings with visual menus' },
        { value: '0', context: 'guesswork for customers' },
        { value: '8', context: 'service categories supported' },
      ],
      howItWorks: { title: 'How It Works', steps: [
        { title: 'Sign up and tell us about your business', description: 'Takes 5 minutes. Tell us your services, staff, and hours.' },
        { title: 'Our team helps you get set up', description: 'We migrate your data, configure your AI receptionist, and test everything with you.' },
        { title: 'Go live. Your AI receptionist takes over.', description: 'Customers get instant responses. You get control.' },
      ] },
      pricingHook: { headline: 'Free to Start. Grow at Your Own Pace.', body: "14-day free trial with full access to every feature. No credit card required. After that, flexible plans starting from $50/month. Your AI receptionist doesn't just handle messages. It learns your customers' preferences over time, personalizing every interaction and turning first-time visitors into loyal regulars. Commission only on new customers the Daisy marketplace brings you, your existing clients, zero commission.", ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business', pricingLinkText: 'See full pricing details \u2192', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'Everything You Need to Run Your Business', subHeadline: 'Stop paying for 8 separate tools. Daisy combines everything you need to run and grow your beauty business.', capabilities: [
        { label: 'Customer Acquisition', description: 'Marketplace, cashback, and marketing tools' },
        { label: 'AI Receptionist', description: '24/7 WhatsApp and Instagram messaging, booking, and payments' },
        { label: 'Smart Booking', description: 'Intelligent scheduling that fills your calendar' },
        { label: 'Payments & Invoicing', description: 'Seamless transactions and financial tracking' },
        { label: 'Staff Management', description: 'Scheduling, permissions, and performance' },
        { label: 'Marketing Engine', description: 'Promotions, campaigns, and customer retention' },
        { label: 'Analytics Dashboard', description: 'Revenue trends, insights, and reporting' },
        { label: 'Brand Control', description: 'White-label everything with your brand' },
      ], stats: [{ value: '3x', context: 'more bookings' }, { value: '24/7', context: 'AI receptionist' }, { value: '10+', context: 'languages supported' }] },
      inlineCtas: {
        afterScroll: { headline: 'Ready to show customers what you can do?', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business' },
        afterFeatures: { headline: 'Start Your 14-Day Free Trial', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/business' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'Can I add photos and videos to services?', answer: 'Yes. Each service can have multiple photos, before/after images, and video showcases. Rich media helps customers understand what they are booking and increases conversion.' },
        { question: 'How do customers browse my menu?', answer: 'Customers see a beautifully organized service menu on your booking page. Services are grouped by category with photos, descriptions, pricing, and duration clearly displayed.' },
        { question: 'Can I set different prices for different services?', answer: 'Absolutely. Each service has its own pricing, and you can create tiered pricing, add-on options, and package deals. Everything is transparent and visible to customers.' },
        { question: 'Does it support multiple service categories?', answer: 'Yes. Organize your services into categories like hair, nails, skincare, and more. Customers can browse by category or search for specific services.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'معرض الخدمات للأعمال',
        headline: 'اعرض أعمالك قبل أن يصلوا.',
        subHeadline: 'قوائم خدمات غنية بالصور والفيديوهات والأوصاف. العملاء يرون بالضبط ما يحجزونه. الثقة تقود التحويل.',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
        ctaLink: '/start-free-trial/business',
        trustLine: 'لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد.',
        answerBlock: { question: 'ما هو معرض الخدمات البصري لأعمال التجميل؟', answer: 'معرض الخدمات البصري يتيح لك عرض خدماتك بالصور والفيديوهات والأوصاف والأسعار الشفافة. العملاء يتصفحون قائمتك ويرون أمثلة على أعمالك ويحجزون بثقة. الأعمال ذات القوائم البصرية ترى معدلات تحويل أعلى بشكل ملحوظ.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/business/scroll/device-mockups.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'العميل يتصفح قائمة خدماتك', text: 'بصري. مفصل. مقنع.', description: 'عميل يفتح صفحة خدماتك ويرى قائمة منظمة بشكل جميل. كل خدمة لها صور وأوصاف ومدة وأسعار. يعرف بالضبط ما يتوقعه.', listSub: ['صور وفيديوهات لكل خدمة', 'أوصاف واضحة ومدة', 'أسعار شفافة تبني الثقة'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/schedule.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يرون الصور والفيديوهات', text: 'أفضل أعمالك معروضة', description: 'صور قبل/بعد وفيديوهات التصفيف وشهادات العملاء تعطي العملاء معاينة لما يتوقعونه. الإثبات البصري يزيل التردد ويدفع الحجوزات.', listSub: ['صور تحول قبل/بعد', 'فيديوهات عرض الخدمات', 'شهادات عملاء حقيقية'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/integrations.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يختارون بثقة', text: 'بدون تخمين. فقط يقين.', description: 'العميل يختار بالضبط الخدمة التي يريدها. بدون ارتباك حول ما هو مشمول أو كم يستغرق أو كم يكلف. يحجزون لأنهم يثقون بالنتيجة مسبقًا.', listSub: ['تفاصيل الخدمة تزيل الارتباك', 'فئات متعددة منظمة بوضوح', 'الإضافات والباقات مرئية'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/analytics.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يحجزون فورًا', text: 'الثقة تتحول إلى إيرادات', description: 'العميل يحجز الخدمة ويختار وقتًا ويدفع. معرض أعمالك البصري قام بالبيع. تحصل على حجز مؤكد بدون رسالة واحدة.', listSub: ['تحويل أعلى من القوائم البصرية', 'أسئلة أقل قبل الحجز', 'الإيرادات تزداد بجهد أقل'] } },
      ],
      socialProofStats: [
        { value: '3x', context: 'حجوزات أكثر مع القوائم البصرية' },
        { value: '0', context: 'تخمين للعملاء' },
        { value: '8', context: 'فئات خدمات مدعومة' },
      ],
      howItWorks: { title: 'كيف يعمل', steps: [
        { title: 'سجّل وأخبرنا عن عملك', description: 'يستغرق 5 دقائق. أخبرنا عن خدماتك وموظفيك وساعات عملك.' },
        { title: 'فريقنا يساعدك في الإعداد', description: 'ننقل بياناتك ونُعدّ موظف الاستقبال الذكي ونختبر كل شيء معك.' },
        { title: 'ابدأ العمل. موظف الاستقبال الذكي يتولى المهمة.', description: 'العملاء يحصلون على ردود فورية. أنت تحصل على التحكم.' },
      ] },
      pricingHook: { headline: 'ابدأ مجانًا. انمُ بالسرعة التي تناسبك.', body: 'تجربة مجانية لمدة 14 يومًا مع وصول كامل لجميع الميزات. لا حاجة لبطاقة ائتمان. بعد ذلك، باقات مرنة تبدأ من 50 دولار/شهريًا. موظف الاستقبال الذكي لا يتولى الرسائل فحسب. بل يتعلم تفضيلات عملائك بمرور الوقت، ويُخصّص كل تفاعل ويحوّل الزوار الجدد إلى عملاء أوفياء. عمولة فقط على العملاء الجدد الذين يجلبهم سوق ديزي، عملاؤك الحاليون، بدون أي عمولة.', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business', pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'كل ما تحتاجه لإدارة عملك', subHeadline: 'توقف عن الدفع لـ 8 أدوات منفصلة. ديزي تجمع كل ما تحتاجه لإدارة وتنمية أعمالك في مجال التجميل.', capabilities: [
        { label: 'استقطاب العملاء', description: 'سوق إلكتروني وكاش باك وأدوات تسويق' },
        { label: 'موظف استقبال ذكي', description: 'رسائل واتساب وإنستغرام وحجوزات ومدفوعات على مدار الساعة' },
        { label: 'حجز ذكي', description: 'جدولة ذكية تملأ تقويمك' },
        { label: 'المدفوعات والفوترة', description: 'معاملات سلسة وتتبع مالي' },
        { label: 'إدارة الموظفين', description: 'جدولة وصلاحيات وأداء' },
        { label: 'محرك التسويق', description: 'عروض وحملات والاحتفاظ بالعملاء' },
        { label: 'لوحة التحليلات', description: 'اتجاهات الإيرادات والرؤى والتقارير' },
        { label: 'التحكم بالعلامة التجارية', description: 'كل شيء بعلامتك التجارية الخاصة' },
      ], stats: [{ value: '3x', context: 'حجوزات أكثر' }, { value: '24/7', context: 'موظف استقبال ذكي' }, { value: '+10', context: 'لغة مدعومة' }] },
      inlineCtas: {
        afterScroll: { headline: 'مستعد لإظهار ما يمكنك تقديمه للعملاء؟', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/business' },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'هل يمكنني إضافة صور وفيديوهات للخدمات؟', answer: 'نعم. كل خدمة يمكن أن تحتوي على صور متعددة وصور قبل/بعد وعروض فيديو. الوسائط الغنية تساعد العملاء على فهم ما يحجزونه وتزيد التحويل.' },
        { question: 'كيف يتصفح العملاء قائمتي؟', answer: 'يرى العملاء قائمة خدمات منظمة بشكل جميل على صفحة الحجز. الخدمات مجمعة حسب الفئة مع صور وأوصاف وأسعار ومدة معروضة بوضوح.' },
        { question: 'هل يمكنني تحديد أسعار مختلفة لخدمات مختلفة؟', answer: 'بالتأكيد. كل خدمة لها أسعارها الخاصة، ويمكنك إنشاء أسعار متدرجة وخيارات إضافية وصفقات باقات. كل شيء شفاف ومرئي للعملاء.' },
        { question: 'هل يدعم فئات خدمات متعددة؟', answer: 'نعم. نظّم خدماتك في فئات مثل الشعر والأظافر والعناية بالبشرة والمزيد. يمكن للعملاء التصفح حسب الفئة أو البحث عن خدمات محددة.' },
      ],
    },
  },
  professional: {
    en: {
      hero: {
        categoryLabel: 'SERVICE PORTFOLIO FOR PROFESSIONALS',
        headline: 'Your Portfolio Is Your Best Marketing.',
        subHeadline: 'Display your best work, showcase client transformations, and let your skills speak for themselves. Clients book what they see.',
        ctaText: 'Start Your Free Trial',
        ctaLink: '/start-free-trial/professional',
        trustLine: 'Free to join. No credit card required.',
        answerBlock: { question: 'How does a service portfolio help beauty professionals?', answer: 'A professional portfolio showcases your best work with before/after photos, client transformations, and service descriptions. Clients browse your gallery, see real results, and book based on what they see. Your skills become your most powerful marketing tool.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Client Finds Your Profile', text: 'Your Gallery. Your Reputation.', description: 'A potential client discovers your profile and immediately sees your work gallery. Before/after photos, styling showcase, and client reviews give them confidence in your skills.', listSub: ['Portfolio gallery on your profile', 'Before/after transformation photos', 'Client reviews alongside your work'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/schedule.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'They Browse Your Work Gallery', text: 'Real Results. Real Confidence.', description: 'The client scrolls through your portfolio organized by service type. Hair color transformations, styling examples, and detailed descriptions show your range and expertise.', listSub: ['Organized by service type', 'Detailed descriptions per photo', 'Shows your range and expertise'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/analytics.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Reviews Alongside Photos', text: 'Social Proof That Converts', description: 'Client reviews appear next to your portfolio photos. Potential clients see both the visual result and the written experience. This combination builds trust and drives bookings.', listSub: ['Reviews matched to services', 'Star ratings visible', 'Authentic client experiences'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/device-mockups.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'They Book Based on What They See', text: 'Your Skills Sell Themselves.', description: 'The client picks the exact service they want based on your portfolio examples. They book confidently because they have already seen what you can do. No sales pitch needed.', listSub: ['Book directly from your portfolio', 'Confident clients, fewer cancellations', 'Your work does the marketing'] } },
      ],
      socialProofStats: [
        { value: '1', context: 'professional portfolio, always visible' },
        { value: '0', context: 'cost to showcase your work' },
        { value: '10+', context: 'languages for your audience' },
      ],
      howItWorks: { title: 'How It Works', steps: [
        { title: 'Sign up and tell us about yourself', description: 'Takes 5 minutes. Set your services, availability, and pricing.' },
        { title: 'Our team helps you get set up', description: 'We configure your profile, set up your AI assistant, and walk you through everything.' },
        { title: 'Go live. Focus on your clients.', description: 'Daisy handles your bookings. You handle your craft.' },
      ] },
      pricingHook: { headline: 'Free to Join. Zero Risk.', body: "Create your profile and start accepting bookings at no cost. Premium features available through affordable plans. Daisy doesn't just manage your schedule. It learns your clients' preferences, personalizes their booking experience, and makes sure you never miss an inquiry. Commission only on new clients who find you through the Daisy marketplace, your existing clients always pay zero commission.", ctaText: 'Get Listed for Free', ctaLink: '/start-free-trial/professional', pricingLinkText: 'See full pricing details \u2192', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'Everything You Need in One App', subHeadline: 'No more juggling between scheduling apps, payment tools, and messaging clients. Daisy brings it all together.', capabilities: [
        { label: 'Professional Profile', description: 'Showcase your work and attract new clients' },
        { label: 'AI Booking Assistant', description: 'Handles bookings and payments while you work' },
        { label: 'Flexible Scheduling', description: 'Set your own hours across multiple locations' },
        { label: 'Earnings Tracker', description: 'Track revenue in real-time with detailed breakdowns' },
        { label: 'Client Management', description: 'Build relationships with detailed client profiles' },
        { label: 'Smart Notifications', description: 'Appointment reminders that reduce no-shows' },
        { label: 'Calendar Sync', description: 'Sync with Google Calendar and other tools' },
        { label: 'Marketplace Visibility', description: 'Customers find you when searching nearby' },
      ], stats: [{ value: '1', context: 'professional portfolio' }, { value: '24/7', context: 'AI-powered booking' }, { value: '10+', context: 'languages supported' }] },
      inlineCtas: {
        afterScroll: { headline: 'Ready to let your work speak for itself?', ctaText: 'Start Your Free Trial', ctaLink: '/start-free-trial/professional' },
        afterFeatures: { headline: 'Start Your Free Trial', ctaText: 'Start Your Free Trial', ctaLink: '/start-free-trial/professional', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/professional' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'Can I upload before/after photos?', answer: 'Yes. Upload unlimited before/after photos to your portfolio. Each photo can be tagged with the service type, helping clients find examples of exactly what they want.' },
        { question: 'How do reviews appear on my profile?', answer: 'Client reviews appear alongside your portfolio photos and on your profile page. Star ratings and written reviews give potential clients confidence in your work.' },
        { question: 'Can I organize my portfolio by service type?', answer: 'Absolutely. Tag each photo with the service category so clients can browse your hair coloring work, styling, cuts, or any other specialty separately.' },
        { question: 'Do I need to work at a salon to have a portfolio?', answer: 'No. Freelance professionals, mobile service providers, and independent stylists can all create portfolios. Your profile works wherever you work.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'معرض الخدمات للمتخصصين',
        headline: 'معرض أعمالك هو أفضل تسويق لك.',
        subHeadline: 'اعرض أفضل أعمالك، أبرز تحولات العملاء، ودع مهاراتك تتحدث عن نفسها. العملاء يحجزون ما يرونه.',
        ctaText: 'ابدأ تجربتك المجانية',
        ctaLink: '/start-free-trial/professional',
        trustLine: 'الانضمام مجاني. لا حاجة لبطاقة ائتمان.',
        answerBlock: { question: 'كيف يساعد معرض الخدمات متخصصي التجميل؟', answer: 'معرض الأعمال المهني يعرض أفضل أعمالك بصور قبل/بعد وتحولات العملاء وأوصاف الخدمات. العملاء يتصفحون معرضك ويرون نتائج حقيقية ويحجزون بناءً على ما يرونه. مهاراتك تصبح أقوى أداة تسويقية لك.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'عميل يجد ملفك الشخصي', text: 'معرضك. سمعتك.', description: 'عميل محتمل يكتشف ملفك ويرى فورًا معرض أعمالك. صور قبل/بعد وعرض التصفيف ومراجعات العملاء تمنحه الثقة في مهاراتك.', listSub: ['معرض أعمال على ملفك الشخصي', 'صور تحول قبل/بعد', 'مراجعات العملاء بجانب أعمالك'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/schedule.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يتصفحون معرض أعمالك', text: 'نتائج حقيقية. ثقة حقيقية.', description: 'العميل يتصفح معرض أعمالك المنظم حسب نوع الخدمة. تحولات ألوان الشعر وأمثلة التصفيف والأوصاف المفصلة تُظهر نطاقك وخبرتك.', listSub: ['منظم حسب نوع الخدمة', 'أوصاف مفصلة لكل صورة', 'يُظهر نطاقك وخبرتك'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/analytics.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'المراجعات بجانب الصور', text: 'إثبات اجتماعي يحقق التحويل', description: 'مراجعات العملاء تظهر بجانب صور معرض أعمالك. العملاء المحتملون يرون النتيجة البصرية والتجربة المكتوبة. هذا المزيج يبني الثقة ويدفع الحجوزات.', listSub: ['مراجعات مطابقة للخدمات', 'تقييمات النجوم مرئية', 'تجارب عملاء حقيقية'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/device-mockups.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يحجزون بناءً على ما يرونه', text: 'مهاراتك تبيع نفسها.', description: 'العميل يختار الخدمة بالضبط بناءً على أمثلة معرض أعمالك. يحجز بثقة لأنه رأى مسبقًا ما يمكنك فعله. بدون حاجة لعرض بيع.', listSub: ['حجز مباشر من معرض أعمالك', 'عملاء واثقون وإلغاءات أقل', 'عملك يقوم بالتسويق'] } },
      ],
      socialProofStats: [
        { value: '1', context: 'معرض أعمال مهني، مرئي دائمًا' },
        { value: '0', context: 'تكلفة لعرض أعمالك' },
        { value: '+10', context: 'لغة لجمهورك' },
      ],
      howItWorks: { title: 'كيف يعمل', steps: [
        { title: 'سجّل وأخبرنا عن نفسك', description: 'يستغرق 5 دقائق. حدد خدماتك وتوافرك وأسعارك.' },
        { title: 'فريقنا يساعدك في الإعداد', description: 'نُعدّ ملفك الشخصي ونُجهّز مساعدك الذكي ونشرح لك كل شيء.' },
        { title: 'ابدأ العمل. ركّز على عملائك.', description: 'ديزي تتولى حجوزاتك. أنت تتولى إبداعك.' },
      ] },
      pricingHook: { headline: 'الانضمام مجاني. بدون أي مخاطر.', body: 'أنشئ ملفك الشخصي وابدأ بقبول الحجوزات بدون تكلفة. الميزات المتقدمة متاحة من خلال باقات بأسعار معقولة. ديزي لا تدير جدولك فحسب. بل تتعلم تفضيلات عملائك، وتُخصّص تجربة حجزهم، وتتأكد من عدم تفويت أي استفسار. العمولة فقط على العملاء الجدد الذين يجدونك عبر سوق ديزي، عملاؤك الحاليون، بدون أي عمولة دائمًا.', ctaText: 'سجّل مجانًا', ctaLink: '/start-free-trial/professional', pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'كل ما تحتاجه في تطبيق واحد', subHeadline: 'لا مزيد من التنقل بين تطبيقات الجدولة وأدوات الدفع ومراسلة العملاء. ديزي تجمع كل شيء معًا.', capabilities: [
        { label: 'الملف المهني', description: 'اعرض أعمالك واجذب عملاء جدد' },
        { label: 'مساعد الحجز الذكي', description: 'يتولى الحجوزات والمدفوعات أثناء عملك' },
        { label: 'جدولة مرنة', description: 'حدد ساعات عملك عبر مواقع متعددة' },
        { label: 'متتبع الأرباح', description: 'تتبع الإيرادات في الوقت الفعلي مع تفاصيل دقيقة' },
        { label: 'إدارة العملاء', description: 'ابنِ علاقات مع ملفات عملاء مفصلة' },
        { label: 'إشعارات ذكية', description: 'تذكيرات بالمواعيد تقلل حالات عدم الحضور' },
        { label: 'مزامنة التقويم', description: 'مزامنة مع تقويم جوجل وأدوات أخرى' },
        { label: 'ظهور في السوق', description: 'العملاء يجدونك عند البحث بالقرب منهم' },
      ], stats: [{ value: '1', context: 'معرض أعمال مهني' }, { value: '24/7', context: 'حجز مدعوم بالذكاء الاصطناعي' }, { value: '+10', context: 'لغة مدعومة' }] },
      inlineCtas: {
        afterScroll: { headline: 'مستعد لترك أعمالك تتحدث عن نفسها؟', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/start-free-trial/professional' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/start-free-trial/professional', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/professional' },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'هل يمكنني رفع صور قبل/بعد؟', answer: 'نعم. ارفع صور قبل/بعد غير محدودة إلى معرض أعمالك. كل صورة يمكن تصنيفها بنوع الخدمة لمساعدة العملاء في العثور على أمثلة لما يريدونه بالضبط.' },
        { question: 'كيف تظهر المراجعات على ملفي الشخصي؟', answer: 'مراجعات العملاء تظهر بجانب صور معرض أعمالك وعلى صفحة ملفك. تقييمات النجوم والمراجعات المكتوبة تمنح العملاء المحتملين الثقة في أعمالك.' },
        { question: 'هل يمكنني تنظيم معرض أعمالي حسب نوع الخدمة؟', answer: 'بالتأكيد. صنّف كل صورة بفئة الخدمة حتى يتمكن العملاء من تصفح أعمال تلوين الشعر أو التصفيف أو القص أو أي تخصص آخر بشكل منفصل.' },
        { question: 'هل أحتاج للعمل في صالون لإنشاء معرض أعمال؟', answer: 'لا. المتخصصون المستقلون ومقدمو الخدمات المتنقلون والمصممون المستقلون يمكنهم جميعًا إنشاء معارض أعمال. ملفك الشخصي يعمل أينما عملت.' },
      ],
    },
  },
};

registerAngle('service-portfolio', servicePortfolioAngle);
