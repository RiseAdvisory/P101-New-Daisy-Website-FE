import { I18nContent } from '@/lib/constants/i18n';
import { LandingPageContent } from '@/lib/constants/pages/scrollSections.types';
import { registerAngle } from './index';

const scrollStyles = {
  panel1: { styleMainPictureJSON: { position: 'absolute', padding: '24px 0px 24px 24px', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'right' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleSecondBgJSON: { position: 'absolute', top: '40px', right: '30px', width: '100px' }, styleBgMobileSecond: { position: 'absolute', top: '-70px', right: '-70px', width: '200px', height: '200px', transform: 'rotate(180deg) scaleX(-1)' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
  panel2: { styleMainPictureJSON: { position: 'absolute', padding: '24px 24px 0px 24px', width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
  panel3: { styleMainPictureJSON: { position: 'absolute', padding: '24px', width: '100%', height: '100%', objectFit: 'contain' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleSecondBgJSON: { position: 'absolute', top: '40px', right: '30px', width: '100px' }, styleBgMobileSecond: { position: 'absolute', top: '-70px', right: '-70px', width: '200px', height: '200px', transform: 'rotate(180deg) scaleX(-1)' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
  panel4: { styleMainPictureJSON: { position: 'absolute', padding: '24px', width: '100%', height: '100%', objectFit: 'contain' }, styleFirstBgJSON: { position: 'absolute', bottom: '0', left: '0', width: '50%', maxWidth: '300px' }, styleImageMobile: { position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '40px' } },
};

const aiMarketingAngle: Record<'business' | 'professional', I18nContent<LandingPageContent>> = {
  business: {
    en: {
      hero: {
        categoryLabel: 'AI MARKETING FOR BUSINESS',
        headline: 'Marketing That Knows Your Customers.',
        subHeadline: 'AI reads customer preferences, visit history and behaviour, then sends the right offer to the right person at the right moment. No marketing degree needed.',
        ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/get-the-app',
        trustLine: 'No credit card required. Our team helps you set up.',
        answerBlock: { question: 'How does AI marketing work for beauty businesses?', answer: 'It reads each customer\'s visit history, service preferences and booking patterns, then sends personalised offers, rebooking reminders and promotions over WhatsApp at the moment they are most likely to act. Retention rises without you doing anything.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'AI Identifies Lapsed Customers', text: 'They Haven\'t Visited in a While', description: 'A regular has not booked in 6 weeks. Measured against their usual pattern, the AI works out they are overdue and ready for a nudge.', listSub: ['Tracks visit frequency per customer', 'Detects when customers are overdue', 'No manual tracking required'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Personalizes the Perfect Offer', text: 'Based on Their Preferences', description: 'The message is built from that customer\'s favourite services and past bookings. Not a generic promotion, an invitation written for them.', listSub: ['Uses service history and preferences', 'Personalizes message content', 'Optimizes timing for best response'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/payment-collection.webp', mainImageMobile: '/images/pages/business/scroll/payment-collection-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Sends via WhatsApp Automatically', text: 'The Right Channel at the Right Time', description: 'The offer goes out on WhatsApp, where it is most likely to be read and acted on. The whole campaign runs without you writing a word.', listSub: ['WhatsApp delivery for high open rates', 'Automated sending at optimal times', 'Zero manual effort required'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Customer Rebooks', text: 'Retention on Autopilot', description: 'They read it, tap to rebook, and the AI takes it from there. The calendar fills and revenue climbs without any marketing effort from you.', listSub: ['One-tap rebooking from the message', 'Revenue recovered from lapsed clients', 'Retention improves automatically'] } },
      ],
      socialProofStats: [
        { value: '24/7', context: 'AI working on retention' },
        { value: '0', context: 'manual marketing effort' },
        { value: '8', context: 'tools in one platform' },
      ],
      howItWorks: { title: 'How It Works', steps: [
        { title: 'Sign up and tell us about your business', description: 'Takes 5 minutes. Your services, your staff, your hours.' },
        { title: 'Our team helps you get set up', description: 'We move your data across, set up the AI receptionist and test it all with you.' },
        { title: 'Go live. Your AI receptionist takes over.', description: 'Customers get an instant answer. You get the control.' },
      ] },
      pricingHook: { headline: 'Free to Start. Grow at Your Own Pace.', body: "A 14-day free trial with every feature open, no credit card. After that, flexible plans from $50/month. Your AI receptionist does more than answer messages: it learns what your customers like and turns first-time visitors into regulars. Commission applies only to new customers the Daisy marketplace sends you. On your existing clients, zero.", ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/get-the-app', pricingLinkText: 'See full pricing details \u2192', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'Everything You Need to Run Your Business', subHeadline: 'Stop paying for 8 separate tools. Daisy holds everything you need to run and grow the business in one place.', capabilities: [
        { label: 'Marketing Engine', description: 'Promotions, campaigns, and customer retention' },
        { label: 'AI Receptionist', description: '24/7 WhatsApp and Instagram messaging, booking, and payments' },
        { label: 'Smart Booking', description: 'Intelligent scheduling that fills your calendar' },
        { label: 'Customer Acquisition', description: 'Marketplace, cashback, and marketing tools' },
        { label: 'Payments & Invoicing', description: 'Seamless transactions and financial tracking' },
        { label: 'Staff Management', description: 'Scheduling, permissions, and performance' },
        { label: 'Analytics Dashboard', description: 'Revenue trends, insights, and reporting' },
        { label: 'Brand Control', description: 'White-label everything with your brand' },
      ], stats: [{ value: '24/7', context: 'AI marketing' }, { value: '8', context: 'tools in one platform' }, { value: '10+', context: 'languages supported' }] },
      inlineCtas: {
        afterScroll: { headline: 'Ready to let AI handle your marketing?', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/get-the-app' },
        afterFeatures: { headline: 'Start Your 14-Day Free Trial', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/get-the-app', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/business' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'How does AI marketing work?', answer: 'It reads each customer\'s visit history, service preferences and behaviour, then writes and sends personalised offers and rebooking reminders over WhatsApp at the right moment.' },
        { question: 'What data does the AI use?', answer: 'Booking history, service preferences, visit frequency, spending patterns and how each person prefers to be contacted. All of it comes from normal use of the platform, and none of it is shared with third parties.' },
        { question: 'Can I control what gets sent?', answer: 'Yes. You set the promotion rules, approve the templates and decide how often anyone gets contacted. The AI stays inside those limits.' },
        { question: 'Does it work for new customers too?', answer: 'Yes. New customers get a welcome sequence and a nudge towards a first rebooking, and the messages grow more personal as the AI learns what they like.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'تسويق الذكاء الاصطناعي للأعمال',
        headline: 'تسويق يعرف عملاءك.',
        subHeadline: 'الذكاء الاصطناعي يحلل تفضيلات العملاء وسجل الزيارات والسلوك. يرسل العرض المناسب للشخص المناسب في الوقت المناسب. لا حاجة لشهادة في التسويق.',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/get-the-app',
        trustLine: 'لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد.',
        answerBlock: { question: 'كيف يعمل تسويق الذكاء الاصطناعي لأعمال التجميل؟', answer: 'تسويق الذكاء الاصطناعي يحلل سجل زيارات كل عميل وتفضيلات الخدمات وأنماط الحجز. يرسل تلقائيًا عروضًا مخصصة وتذكيرات إعادة الحجز والعروض الترويجية عبر واتساب في الوقت الأمثل. تحصل على احتفاظ أعلى بدون جهد يدوي.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'الذكاء الاصطناعي يحدد العملاء المتأخرين', text: 'لم يزوروا منذ فترة', description: 'الذكاء الاصطناعي يلاحظ أن عميلًا منتظمًا لم يحجز منذ 6 أسابيع. بناءً على نمط زياراته المعتاد، يحدد أنه متأخر وجاهز للتذكير.', listSub: ['يتتبع تكرار الزيارات لكل عميل', 'يكشف متى يتأخر العملاء', 'بدون تتبع يدوي مطلوب'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يخصص العرض المثالي', text: 'بناءً على تفضيلاتهم', description: 'الذكاء الاصطناعي يصنع رسالة مخصصة بناءً على الخدمات المفضلة للعميل والحجوزات السابقة. ليس عرضًا ترويجيًا عامًا، بل دعوة مخصصة.', listSub: ['يستخدم سجل الخدمات والتفضيلات', 'يخصص محتوى الرسالة', 'يحسّن التوقيت لأفضل استجابة'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/payment-collection.webp', mainImageMobile: '/images/pages/business/scroll/payment-collection-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يرسل عبر واتساب تلقائيًا', text: 'القناة المناسبة في الوقت المناسب', description: 'العرض المخصص يُرسل عبر واتساب، حيث يكون العميل أكثر احتمالًا لرؤيته والتفاعل معه. الذكاء الاصطناعي يدير الحملة بالكامل دون أن تكتب رسالة واحدة.', listSub: ['تسليم واتساب لمعدلات فتح عالية', 'إرسال تلقائي في الأوقات المثلى', 'بدون أي جهد يدوي مطلوب'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'العميل يعيد الحجز', text: 'الاحتفاظ على الطيار الآلي', description: 'العميل يرى الرسالة المخصصة وينقر لإعادة الحجز والذكاء الاصطناعي يتولى الباقي. تقويمك يمتلئ وإيراداتك تنمو، كل ذلك بدون جهد تسويقي.', listSub: ['إعادة حجز بنقرة واحدة من الرسالة', 'إيرادات مستعادة من العملاء المتأخرين', 'الاحتفاظ يتحسن تلقائيًا'] } },
      ],
      socialProofStats: [
        { value: '24/7', context: 'الذكاء الاصطناعي يعمل على الاحتفاظ' },
        { value: '0', context: 'جهد تسويقي يدوي' },
        { value: '8', context: 'أدوات في منصة واحدة' },
      ],
      howItWorks: { title: 'كيف يعمل', steps: [
        { title: 'سجّل وأخبرنا عن عملك', description: 'يستغرق 5 دقائق. أخبرنا عن خدماتك وموظفيك وساعات عملك.' },
        { title: 'فريقنا يساعدك في الإعداد', description: 'ننقل بياناتك ونُعدّ موظف الاستقبال الذكي ونختبر كل شيء معك.' },
        { title: 'ابدأ العمل. موظف الاستقبال الذكي يتولى المهمة.', description: 'العملاء يحصلون على ردود فورية. أنت تحصل على التحكم.' },
      ] },
      pricingHook: { headline: 'ابدأ مجانًا. انمُ بالسرعة التي تناسبك.', body: 'تجربة مجانية لمدة 14 يومًا مع وصول كامل لجميع الميزات. لا حاجة لبطاقة ائتمان. بعد ذلك، باقات مرنة تبدأ من 50 دولار/شهريًا. موظف الاستقبال الذكي لا يتولى الرسائل فحسب. بل يتعلم تفضيلات عملائك بمرور الوقت، ويُخصّص كل تفاعل ويحوّل الزوار الجدد إلى عملاء أوفياء. عمولة فقط على العملاء الجدد الذين يجلبهم سوق ديزي، عملاؤك الحاليون، بدون أي عمولة.', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/get-the-app', pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'كل ما تحتاجه لإدارة عملك', subHeadline: 'توقف عن الدفع لـ 8 أدوات منفصلة. ديزي تجمع كل ما تحتاجه لإدارة وتنمية أعمالك في مجال التجميل.', capabilities: [
        { label: 'محرك التسويق', description: 'عروض وحملات والاحتفاظ بالعملاء' },
        { label: 'موظف استقبال ذكي', description: 'رسائل واتساب وإنستغرام وحجوزات ومدفوعات على مدار الساعة' },
        { label: 'حجز ذكي', description: 'جدولة ذكية تملأ تقويمك' },
        { label: 'استقطاب العملاء', description: 'سوق إلكتروني وكاش باك وأدوات تسويق' },
        { label: 'المدفوعات والفوترة', description: 'معاملات سلسة وتتبع مالي' },
        { label: 'إدارة الموظفين', description: 'جدولة وصلاحيات وأداء' },
        { label: 'لوحة التحليلات', description: 'اتجاهات الإيرادات والرؤى والتقارير' },
        { label: 'التحكم بالعلامة التجارية', description: 'كل شيء بعلامتك التجارية الخاصة' },
      ], stats: [{ value: '24/7', context: 'تسويق ذكي' }, { value: '8', context: 'أدوات في منصة واحدة' }, { value: '+10', context: 'لغة مدعومة' }] },
      inlineCtas: {
        afterScroll: { headline: 'مستعد لترك الذكاء الاصطناعي يدير تسويقك؟', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/get-the-app' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/get-the-app', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/business' },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'كيف يعمل تسويق الذكاء الاصطناعي؟', answer: 'الذكاء الاصطناعي يحلل سجل زيارات كل عميل وتفضيلات الخدمات وأنماط السلوك. يصنع ويرسل تلقائيًا عروضًا مخصصة وتذكيرات إعادة الحجز عبر واتساب في الوقت المناسب.' },
        { question: 'ما البيانات التي يستخدمها الذكاء الاصطناعي؟', answer: 'يستخدم الذكاء الاصطناعي سجل الحجوزات وتفضيلات الخدمات وتكرار الزيارات وأنماط الإنفاق وتفضيلات التواصل. جميع البيانات تُجمع من خلال الاستخدام الطبيعي للمنصة ولا تُشارك مع أطراف ثالثة.' },
        { question: 'هل يمكنني التحكم فيما يُرسل؟', answer: 'نعم. تحدد قواعد العروض الترويجية وتوافق على قوالب الرسائل وتتحكم في تكرار التواصل. الذكاء الاصطناعي يعمل ضمن إرشاداتك.' },
        { question: 'هل يعمل للعملاء الجدد أيضًا؟', answer: 'نعم. الذكاء الاصطناعي يرسل تسلسلات ترحيبية للعملاء الجدد ويشجع أول إعادة حجز ويخصص تدريجيًا كلما تعلم تفضيلاتهم بمرور الوقت.' },
      ],
    },
  },
  professional: {
    en: {
      hero: {
        categoryLabel: 'AI MARKETING FOR PROFESSIONALS',
        headline: 'Grow Your Client Base Without\nthe Marketing Hustle.',
        subHeadline: "Daisy's AI learns your clients' preferences and sends personalized rebooking reminders. You get repeat clients without chasing them.",
        ctaText: 'Start Your Free Trial', ctaLink: '/get-the-app',
        trustLine: 'Free to join. No credit card required.',
        answerBlock: { question: 'How does AI marketing help beauty professionals grow?', answer: "Daisy's AI tracks client preferences and visit patterns, then automatically sends personalized rebooking reminders via WhatsApp. You get repeat clients and grow your base without spending time on marketing or follow-ups." },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'AI Learns Client Preferences', text: 'It Remembers What They Love', description: 'The AI builds a picture of each client over time: favourite services, preferred times, how often they come in. That is what makes the outreach personal.', listSub: ['Tracks favorite services per client', 'Remembers preferred booking times', 'Learns from every interaction'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Notices a Client Is Due for a Visit', text: 'Perfect Timing, Every Time', description: 'A regular usually rebooks every 4 weeks. At 5 weeks the AI notices and sends a reminder before they book somewhere else.', listSub: ['Detects overdue clients automatically', 'Timing based on individual patterns', 'Prevents clients from drifting away'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Sends Personalized Reminder', text: 'Not a Generic Message. A Personal Touch.', description: 'The WhatsApp message mentions their last service and suggests the next appointment. It reads as personal because it is built from real history rather than a template.', listSub: ['References their last visit', 'Suggests relevant services', 'Feels personal, not automated'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Client Rebooks Automatically', text: 'Your Calendar Grows. You Did Nothing.', description: 'They tap to rebook from the message, the AI confirms it and your calendar updates. Retention climbs and you did no marketing.', listSub: ['One-tap rebooking from WhatsApp', 'Calendar updated automatically', 'Higher retention, zero effort'] } },
      ],
      socialProofStats: [
        { value: '0', context: 'hours spent on marketing' },
        { value: '24/7', context: 'AI-powered retention' },
        { value: '0%', context: 'commission on existing clients' },
      ],
      howItWorks: { title: 'How It Works', steps: [
        { title: 'Sign up and tell us about yourself', description: 'Takes 5 minutes. Your services, your availability, your prices.' },
        { title: 'Our team helps you get set up', description: 'We set up your profile and your AI assistant, and walk you through all of it.' },
        { title: 'Go live. Focus on your clients.', description: 'Daisy takes the bookings. You do the work you trained for.' },
      ] },
      pricingHook: { headline: 'Free to Join. Zero Risk.', body: "Create your profile and start taking bookings at no cost, with premium features on affordable plans. Daisy does more than hold your schedule: it learns what your clients prefer, shapes their booking experience around it, and makes sure nothing goes unanswered. Commission applies only to new clients who find you through the Daisy marketplace. Your existing clients always pay zero.", ctaText: 'Get Listed for Free', ctaLink: '/get-the-app', pricingLinkText: 'See full pricing details \u2192', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'Everything You Need in One App', subHeadline: 'No more moving between a scheduling app, a payment tool and a messaging thread. Daisy holds all of it together.', capabilities: [
        { label: 'Smart Notifications', description: 'Appointment reminders that reduce no-shows' },
        { label: 'AI Booking Assistant', description: 'Handles bookings and payments while you work' },
        { label: 'Flexible Scheduling', description: 'Set your own hours across multiple locations' },
        { label: 'Earnings Tracker', description: 'Track revenue in real-time with detailed breakdowns' },
        { label: 'Professional Profile', description: 'Showcase your work and attract new clients' },
        { label: 'Client Management', description: 'Build relationships with detailed client profiles' },
        { label: 'Calendar Sync', description: 'Sync with Google Calendar and other tools' },
        { label: 'Marketplace Visibility', description: 'Customers find you when searching nearby' },
      ], stats: [{ value: '0', context: 'marketing hours' }, { value: '24/7', context: 'AI retention' }, { value: '10+', context: 'languages supported' }] },
      inlineCtas: {
        afterScroll: { headline: 'Ready to grow your client base on autopilot?', ctaText: 'Start Your Free Trial', ctaLink: '/get-the-app' },
        afterFeatures: { headline: 'Start Your Free Trial', ctaText: 'Start Your Free Trial', ctaLink: '/get-the-app', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/professional' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'Does the AI contact my clients for me?', answer: 'Yes. The AI sends personalized rebooking reminders via WhatsApp based on each client\'s visit history and preferences. Messages feel personal because they reference real data about their past services.' },
        { question: 'Can I control what messages are sent?', answer: 'Yes. You approve the templates, set how often people hear from you and choose which reminders go out. The AI stays inside that.' },
        { question: 'How does it know when to send reminders?', answer: 'The AI tracks each client\'s booking patterns and visit frequency. It detects when a client is overdue compared to their usual pattern and sends a timely reminder.' },
        { question: 'Is there a fee or commission?', answer: 'Joining is free. Commission applies only to new clients who book you through the Daisy marketplace, and your existing clients pay none. Premium features sit on affordable subscription tiers.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'تسويق الذكاء الاصطناعي للمتخصصين',
        headline: 'نمّ قاعدة عملائك بدون\nعناء التسويق.',
        subHeadline: 'الذكاء الاصطناعي في ديزي يتعلم تفضيلات عملائك ويرسل تذكيرات إعادة حجز مخصصة. تحصل على عملاء متكررين دون ملاحقتهم.',
        ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/get-the-app',
        trustLine: 'الانضمام مجاني. لا حاجة لبطاقة ائتمان.',
        answerBlock: { question: 'كيف يساعد تسويق الذكاء الاصطناعي متخصصي التجميل على النمو؟', answer: 'الذكاء الاصطناعي في ديزي يتتبع تفضيلات العملاء وأنماط الزيارات، ثم يرسل تلقائيًا تذكيرات إعادة حجز مخصصة عبر واتساب. تحصل على عملاء متكررين وتنمي قاعدتك دون قضاء وقت في التسويق أو المتابعات.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'الذكاء الاصطناعي يتعلم تفضيلات العملاء', text: 'يتذكر ما يحبونه', description: 'مع الوقت، يبني الذكاء الاصطناعي ملفًا لكل عميل. خدماتهم المفضلة وأوقاتهم المفضلة وتكرار حجوزاتهم. هذه المعرفة تدعم التواصل المخصص.', listSub: ['يتتبع الخدمات المفضلة لكل عميل', 'يتذكر أوقات الحجز المفضلة', 'يتعلم من كل تفاعل'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/smart-scheduling.webp', mainImageMobile: '/images/pages/business/scroll/smart-scheduling-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يلاحظ أن العميل حان وقت زيارته', text: 'التوقيت المثالي، في كل مرة', description: 'عميل منتظم يعيد الحجز كل 4 أسابيع عادةً. الذكاء الاصطناعي يلاحظ مرور 5 أسابيع ويطلق تذكيرًا مخصصًا قبل أن يحجز في مكان آخر.', listSub: ['يكشف العملاء المتأخرين تلقائيًا', 'التوقيت مبني على أنماط فردية', 'يمنع ابتعاد العملاء'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/booking-confirmed.webp', mainImageMobile: '/images/pages/business/scroll/booking-confirmed-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يرسل تذكيرًا مخصصًا', text: 'ليست رسالة عامة. لمسة شخصية.', description: 'الذكاء الاصطناعي يرسل رسالة واتساب تشير إلى آخر خدمة وتقترح الموعد التالي. تبدو شخصية لأنها مبنية على بيانات حقيقية، ليس قالبًا.', listSub: ['يشير إلى آخر زيارة', 'يقترح خدمات ذات صلة', 'يبدو شخصيًا، ليس آليًا'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/ai-receptionist-chat.webp', mainImageMobile: '/images/pages/business/scroll/ai-receptionist-chat-mobile.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'العميل يعيد الحجز تلقائيًا', text: 'تقويمك ينمو. لم تفعل شيئًا.', description: 'العميل ينقر لإعادة الحجز من رسالة واتساب. الذكاء الاصطناعي يؤكد الموعد ويحدث تقويمك. معدل الاحتفاظ يرتفع بدون أي جهد تسويقي.', listSub: ['إعادة حجز بنقرة واحدة من واتساب', 'التقويم يتحدث تلقائيًا', 'احتفاظ أعلى، بدون جهد'] } },
      ],
      socialProofStats: [
        { value: '0', context: 'ساعات تُنفق على التسويق' },
        { value: '24/7', context: 'احتفاظ مدعوم بالذكاء الاصطناعي' },
        { value: '0%', context: 'عمولة على العملاء الحاليين' },
      ],
      howItWorks: { title: 'كيف يعمل', steps: [
        { title: 'سجّل وأخبرنا عن نفسك', description: 'يستغرق 5 دقائق. حدد خدماتك وتوافرك وأسعارك.' },
        { title: 'فريقنا يساعدك في الإعداد', description: 'نُعدّ ملفك الشخصي ونُجهّز مساعدك الذكي ونشرح لك كل شيء.' },
        { title: 'ابدأ العمل. ركّز على عملائك.', description: 'ديزي تتولى حجوزاتك. أنت تتولى إبداعك.' },
      ] },
      pricingHook: { headline: 'الانضمام مجاني. بدون أي مخاطر.', body: 'أنشئ ملفك الشخصي وابدأ بقبول الحجوزات بدون تكلفة. الميزات المتقدمة متاحة من خلال باقات بأسعار معقولة. ديزي لا تدير جدولك فحسب. بل تتعلم تفضيلات عملائك، وتُخصّص تجربة حجزهم، وتتأكد من عدم تفويت أي استفسار. العمولة فقط على العملاء الجدد الذين يجدونك عبر سوق ديزي، عملاؤك الحاليون، بدون أي عمولة دائمًا.', ctaText: 'سجّل مجانًا', ctaLink: '/get-the-app', pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'كل ما تحتاجه في تطبيق واحد', subHeadline: 'لا مزيد من التنقل بين تطبيقات الجدولة وأدوات الدفع ومراسلة العملاء. ديزي تجمع كل شيء معًا.', capabilities: [
        { label: 'إشعارات ذكية', description: 'تذكيرات بالمواعيد تقلل حالات عدم الحضور' },
        { label: 'مساعد الحجز الذكي', description: 'يتولى الحجوزات والمدفوعات أثناء عملك' },
        { label: 'جدولة مرنة', description: 'حدد ساعات عملك عبر مواقع متعددة' },
        { label: 'متتبع الأرباح', description: 'تتبع الإيرادات في الوقت الفعلي مع تفاصيل دقيقة' },
        { label: 'الملف المهني', description: 'اعرض أعمالك واجذب عملاء جدد' },
        { label: 'إدارة العملاء', description: 'ابنِ علاقات مع ملفات عملاء مفصلة' },
        { label: 'مزامنة التقويم', description: 'مزامنة مع تقويم جوجل وأدوات أخرى' },
        { label: 'ظهور في السوق', description: 'العملاء يجدونك عند البحث بالقرب منهم' },
      ], stats: [{ value: '0', context: 'ساعات تسويق' }, { value: '24/7', context: 'احتفاظ ذكي' }, { value: '+10', context: 'لغة مدعومة' }] },
      inlineCtas: {
        afterScroll: { headline: 'مستعد لتنمية قاعدة عملائك على الطيار الآلي؟', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/get-the-app' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/get-the-app', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/professional' },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'هل يتواصل الذكاء الاصطناعي مع عملائي نيابة عني؟', answer: 'نعم. يرسل الذكاء الاصطناعي تذكيرات إعادة حجز مخصصة عبر واتساب بناءً على سجل زيارات كل عميل وتفضيلاته. الرسائل تبدو شخصية لأنها تشير إلى بيانات حقيقية عن خدماتهم السابقة.' },
        { question: 'هل يمكنني التحكم في الرسائل المرسلة؟', answer: 'نعم. توافق على قوالب الرسائل وتحدد تكرار التواصل وتتحكم في أنواع التذكيرات المرسلة. الذكاء الاصطناعي يعمل ضمن إرشاداتك.' },
        { question: 'كيف يعرف متى يرسل التذكيرات؟', answer: 'يتتبع الذكاء الاصطناعي أنماط حجز كل عميل وتكرار الزيارات. يكشف متى يكون العميل متأخرًا مقارنة بنمطه المعتاد ويرسل تذكيرًا في الوقت المناسب.' },
        { question: 'هل هناك رسوم أو عمولة؟', answer: 'الانضمام مجاني. العمولة تُفرض فقط على العملاء الجدد الذين يحجزون عبر سوق ديزي، عملاؤك الحاليون بدون أي عمولة. الميزات المتقدمة متاحة من خلال باقات اشتراك بأسعار معقولة.' },
      ],
    },
  },
};

registerAngle('ai-marketing', aiMarketingAngle);
