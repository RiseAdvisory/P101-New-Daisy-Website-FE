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
        subHeadline: 'AI analyzes customer preferences, visit history, and behavior. It sends the right offer to the right person at the right time. No marketing degree required.',
        ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business',
        trustLine: 'No credit card required. Our team helps you set up.',
        answerBlock: { question: 'How does AI marketing work for beauty businesses?', answer: 'AI marketing analyzes each customer\'s visit history, service preferences, and booking patterns. It automatically sends personalized offers, rebooking reminders, and promotions via WhatsApp at the optimal time. You get higher retention without manual effort.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/business/scroll/device-mockups.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', secondBg: '/images/pages/business/scroll/stars.png', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'AI Identifies Lapsed Customers', text: 'They Haven\'t Visited in a While', description: 'The AI notices a regular customer hasn\'t booked in 6 weeks. Based on their usual visit pattern, it determines they are overdue and ready for a nudge.', listSub: ['Tracks visit frequency per customer', 'Detects when customers are overdue', 'No manual tracking required'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/schedule.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Personalizes the Perfect Offer', text: 'Based on Their Preferences', description: 'The AI creates a personalized message based on the customer\'s favorite services and past bookings. It is not a generic promotion, it is a tailored invitation.', listSub: ['Uses service history and preferences', 'Personalizes message content', 'Optimizes timing for best response'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/integrations.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', secondBg: '/images/pages/business/scroll/stars.png', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Sends via WhatsApp Automatically', text: 'The Right Channel at the Right Time', description: 'The personalized offer is sent via WhatsApp, where the customer is most likely to see and act on it. The AI handles the entire campaign without you writing a single message.', listSub: ['WhatsApp delivery for high open rates', 'Automated sending at optimal times', 'Zero manual effort required'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/analytics.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Customer Rebooks', text: 'Retention on Autopilot', description: 'The customer sees the personalized message, taps to rebook, and the AI handles the rest. Your calendar fills up and your revenue grows, all without marketing effort.', listSub: ['One-tap rebooking from the message', 'Revenue recovered from lapsed clients', 'Retention improves automatically'] } },
      ],
      socialProofStats: [
        { value: '24/7', context: 'AI working on retention' },
        { value: '0', context: 'manual marketing effort' },
        { value: '8', context: 'tools in one platform' },
      ],
      howItWorks: { steps: [
        { title: 'Sign up and tell us about your business', description: 'Takes 5 minutes. Tell us your services, staff, and hours.' },
        { title: 'Our team helps you get set up', description: 'We migrate your data, configure your AI receptionist, and test everything with you.' },
        { title: 'Go live. Your AI receptionist takes over.', description: 'Customers get instant responses. You get control.' },
      ] },
      pricingHook: { headline: 'Free to Start. Grow at Your Own Pace.', body: "14-day free trial with full access to every feature. No credit card required. After that, flexible plans starting from $50/month. Your AI receptionist doesn't just handle messages. It learns your customers' preferences over time, personalizing every interaction and turning first-time visitors into loyal regulars. Commission only on new customers the Daisy marketplace brings you, your existing clients, zero commission.", ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business', pricingLinkText: 'See full pricing details \u2192', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'Everything You Need to Run Your Business', subHeadline: 'Stop paying for 8 separate tools. Daisy combines everything you need to run and grow your beauty business.', capabilities: [
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
        afterScroll: { headline: 'Ready to let AI handle your marketing?', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business' },
        afterFeatures: { headline: 'Start Your 14-Day Free Trial', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/business' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'How does AI marketing work?', answer: 'The AI analyzes each customer\'s visit history, service preferences, and behavior patterns. It automatically creates and sends personalized offers and rebooking reminders via WhatsApp at the right time.' },
        { question: 'What data does the AI use?', answer: 'The AI uses booking history, service preferences, visit frequency, spending patterns, and communication preferences. All data is collected through normal platform usage and never shared with third parties.' },
        { question: 'Can I control what gets sent?', answer: 'Yes. You set the rules for promotions, approve message templates, and control the frequency of outreach. The AI works within your guidelines.' },
        { question: 'Does it work for new customers too?', answer: 'Yes. The AI sends welcome sequences to new customers, encourages first rebookings, and gradually personalizes as it learns their preferences over time.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'تسويق الذكاء الاصطناعي للأعمال',
        headline: 'تسويق يعرف عملاءك.',
        subHeadline: 'الذكاء الاصطناعي يحلل تفضيلات العملاء وسجل الزيارات والسلوك. يرسل العرض المناسب للشخص المناسب في الوقت المناسب. لا حاجة لشهادة في التسويق.',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business',
        trustLine: 'لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد.',
        answerBlock: { question: 'كيف يعمل تسويق الذكاء الاصطناعي لأعمال التجميل؟', answer: 'تسويق الذكاء الاصطناعي يحلل سجل زيارات كل عميل وتفضيلات الخدمات وأنماط الحجز. يرسل تلقائيًا عروضًا مخصصة وتذكيرات إعادة الحجز والعروض الترويجية عبر واتساب في الوقت الأمثل. تحصل على احتفاظ أعلى بدون جهد يدوي.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/business/scroll/device-mockups.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', secondBg: '/images/pages/business/scroll/stars.png', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'الذكاء الاصطناعي يحدد العملاء المتأخرين', text: 'لم يزوروا منذ فترة', description: 'الذكاء الاصطناعي يلاحظ أن عميلًا منتظمًا لم يحجز منذ 6 أسابيع. بناءً على نمط زياراته المعتاد، يحدد أنه متأخر وجاهز للتذكير.', listSub: ['يتتبع تكرار الزيارات لكل عميل', 'يكشف متى يتأخر العملاء', 'بدون تتبع يدوي مطلوب'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/schedule.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يخصص العرض المثالي', text: 'بناءً على تفضيلاتهم', description: 'الذكاء الاصطناعي يصنع رسالة مخصصة بناءً على الخدمات المفضلة للعميل والحجوزات السابقة. ليس عرضًا ترويجيًا عامًا، بل دعوة مخصصة.', listSub: ['يستخدم سجل الخدمات والتفضيلات', 'يخصص محتوى الرسالة', 'يحسّن التوقيت لأفضل استجابة'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/integrations.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', secondBg: '/images/pages/business/scroll/stars.png', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يرسل عبر واتساب تلقائيًا', text: 'القناة المناسبة في الوقت المناسب', description: 'العرض المخصص يُرسل عبر واتساب، حيث يكون العميل أكثر احتمالًا لرؤيته والتفاعل معه. الذكاء الاصطناعي يدير الحملة بالكامل دون أن تكتب رسالة واحدة.', listSub: ['تسليم واتساب لمعدلات فتح عالية', 'إرسال تلقائي في الأوقات المثلى', 'بدون أي جهد يدوي مطلوب'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/analytics.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'العميل يعيد الحجز', text: 'الاحتفاظ على الطيار الآلي', description: 'العميل يرى الرسالة المخصصة وينقر لإعادة الحجز والذكاء الاصطناعي يتولى الباقي. تقويمك يمتلئ وإيراداتك تنمو، كل ذلك بدون جهد تسويقي.', listSub: ['إعادة حجز بنقرة واحدة من الرسالة', 'إيرادات مستعادة من العملاء المتأخرين', 'الاحتفاظ يتحسن تلقائيًا'] } },
      ],
      socialProofStats: [
        { value: '24/7', context: 'الذكاء الاصطناعي يعمل على الاحتفاظ' },
        { value: '0', context: 'جهد تسويقي يدوي' },
        { value: '8', context: 'أدوات في منصة واحدة' },
      ],
      howItWorks: { steps: [
        { title: 'سجّل وأخبرنا عن عملك', description: 'يستغرق 5 دقائق. أخبرنا عن خدماتك وموظفيك وساعات عملك.' },
        { title: 'فريقنا يساعدك في الإعداد', description: 'ننقل بياناتك ونُعدّ موظف الاستقبال الذكي ونختبر كل شيء معك.' },
        { title: 'ابدأ العمل. موظف الاستقبال الذكي يتولى المهمة.', description: 'العملاء يحصلون على ردود فورية. أنت تحصل على التحكم.' },
      ] },
      pricingHook: { headline: 'ابدأ مجانًا. انمُ بالسرعة التي تناسبك.', body: 'تجربة مجانية لمدة 14 يومًا مع وصول كامل لجميع الميزات. لا حاجة لبطاقة ائتمان. بعد ذلك، باقات مرنة تبدأ من 50 دولار/شهريًا. موظف الاستقبال الذكي لا يتولى الرسائل فحسب. بل يتعلم تفضيلات عملائك بمرور الوقت، ويُخصّص كل تفاعل ويحوّل الزوار الجدد إلى عملاء أوفياء. عمولة فقط على العملاء الجدد الذين يجلبهم سوق ديزي، عملاؤك الحاليون، بدون أي عمولة.', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business', pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190', pricingLinkHref: '/pricing' },
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
        afterScroll: { headline: 'مستعد لترك الذكاء الاصطناعي يدير تسويقك؟', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/business' },
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
        ctaText: 'Start Your Free Trial', ctaLink: '/start-free-trial/professional',
        trustLine: 'Free to join. No credit card required.',
        answerBlock: { question: 'How does AI marketing help beauty professionals grow?', answer: "Daisy's AI tracks client preferences and visit patterns, then automatically sends personalized rebooking reminders via WhatsApp. You get repeat clients and grow your base without spending time on marketing or follow-ups." },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', secondBg: '/images/pages/business/scroll/stars.png', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'AI Learns Client Preferences', text: 'It Remembers What They Love', description: 'Over time, the AI builds a profile of each client. Their favorite services, preferred times, and booking frequency. This knowledge powers personalized outreach.', listSub: ['Tracks favorite services per client', 'Remembers preferred booking times', 'Learns from every interaction'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/schedule.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Notices a Client Is Due for a Visit', text: 'Perfect Timing, Every Time', description: 'A regular client usually rebooks every 4 weeks. The AI notices it has been 5 weeks and triggers a personalized reminder before they book somewhere else.', listSub: ['Detects overdue clients automatically', 'Timing based on individual patterns', 'Prevents clients from drifting away'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/analytics.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', secondBg: '/images/pages/business/scroll/stars.png', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Sends Personalized Reminder', text: 'Not a Generic Message. A Personal Touch.', description: 'The AI sends a WhatsApp message referencing their last service and suggesting their next appointment. It feels personal because it is based on real data, not a template.', listSub: ['References their last visit', 'Suggests relevant services', 'Feels personal, not automated'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/device-mockups.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'Client Rebooks Automatically', text: 'Your Calendar Grows. You Did Nothing.', description: 'The client taps to rebook from the WhatsApp message. The AI confirms the appointment and updates your calendar. Your retention rate climbs without any marketing effort.', listSub: ['One-tap rebooking from WhatsApp', 'Calendar updated automatically', 'Higher retention, zero effort'] } },
      ],
      socialProofStats: [
        { value: '0', context: 'hours spent on marketing' },
        { value: '24/7', context: 'AI-powered retention' },
        { value: '0%', context: 'commission on existing clients' },
      ],
      howItWorks: { steps: [
        { title: 'Sign up and tell us about yourself', description: 'Takes 5 minutes. Set your services, availability, and pricing.' },
        { title: 'Our team helps you get set up', description: 'We configure your profile, set up your AI assistant, and walk you through everything.' },
        { title: 'Go live. Focus on your clients.', description: 'Daisy handles your bookings. You handle your craft.' },
      ] },
      pricingHook: { headline: 'Free to Join. Zero Risk.', body: "Create your profile and start accepting bookings at no cost. Premium features available through affordable plans. Daisy doesn't just manage your schedule. It learns your clients' preferences, personalizes their booking experience, and makes sure you never miss an inquiry. Commission only on new clients who find you through the Daisy marketplace, your existing clients always pay zero commission.", ctaText: 'Get Listed for Free', ctaLink: '/start-free-trial/professional', pricingLinkText: 'See full pricing details \u2192', pricingLinkHref: '/pricing' },
      platformStrengths: { headline: 'Everything You Need in One App', subHeadline: 'No more juggling between scheduling apps, payment tools, and messaging clients. Daisy brings it all together.', capabilities: [
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
        afterScroll: { headline: 'Ready to grow your client base on autopilot?', ctaText: 'Start Your Free Trial', ctaLink: '/start-free-trial/professional' },
        afterFeatures: { headline: 'Start Your Free Trial', ctaText: 'Start Your Free Trial', ctaLink: '/start-free-trial/professional', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/professional' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'Does the AI contact my clients for me?', answer: 'Yes. The AI sends personalized rebooking reminders via WhatsApp based on each client\'s visit history and preferences. Messages feel personal because they reference real data about their past services.' },
        { question: 'Can I control what messages are sent?', answer: 'Yes. You approve message templates, set outreach frequency, and control the types of reminders sent. The AI works within your guidelines.' },
        { question: 'How does it know when to send reminders?', answer: 'The AI tracks each client\'s booking patterns and visit frequency. It detects when a client is overdue compared to their usual pattern and sends a timely reminder.' },
        { question: 'Is there a fee or commission?', answer: 'Joining is free. Commission is only charged on new clients who book you through the Daisy marketplace, your existing clients pay zero commission. Premium features available through affordable subscription tiers.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'تسويق الذكاء الاصطناعي للمتخصصين',
        headline: 'نمّ قاعدة عملائك بدون\nعناء التسويق.',
        subHeadline: 'الذكاء الاصطناعي في ديزي يتعلم تفضيلات عملائك ويرسل تذكيرات إعادة حجز مخصصة. تحصل على عملاء متكررين دون ملاحقتهم.',
        ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/start-free-trial/professional',
        trustLine: 'الانضمام مجاني. لا حاجة لبطاقة ائتمان.',
        answerBlock: { question: 'كيف يساعد تسويق الذكاء الاصطناعي متخصصي التجميل على النمو؟', answer: 'الذكاء الاصطناعي في ديزي يتتبع تفضيلات العملاء وأنماط الزيارات، ثم يرسل تلقائيًا تذكيرات إعادة حجز مخصصة عبر واتساب. تحصل على عملاء متكررين وتنمي قاعدتك دون قضاء وقت في التسويق أو المتابعات.' },
      },
      scrollSections: [
        { sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', secondBg: '/images/pages/business/scroll/stars.png', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'الذكاء الاصطناعي يتعلم تفضيلات العملاء', text: 'يتذكر ما يحبونه', description: 'مع الوقت، يبني الذكاء الاصطناعي ملفًا لكل عميل. خدماتهم المفضلة وأوقاتهم المفضلة وتكرار حجوزاتهم. هذه المعرفة تدعم التواصل المخصص.', listSub: ['يتتبع الخدمات المفضلة لكل عميل', 'يتذكر أوقات الحجز المفضلة', 'يتعلم من كل تفاعل'] } },
        { sortId: 2, mainImage: '/images/pages/business/scroll/schedule.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يلاحظ أن العميل حان وقت زيارته', text: 'التوقيت المثالي، في كل مرة', description: 'عميل منتظم يعيد الحجز كل 4 أسابيع عادةً. الذكاء الاصطناعي يلاحظ مرور 5 أسابيع ويطلق تذكيرًا مخصصًا قبل أن يحجز في مكان آخر.', listSub: ['يكشف العملاء المتأخرين تلقائيًا', 'التوقيت مبني على أنماط فردية', 'يمنع ابتعاد العملاء'] } },
        { sortId: 3, mainImage: '/images/pages/business/scroll/analytics.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', secondBg: '/images/pages/business/scroll/stars.png', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'يرسل تذكيرًا مخصصًا', text: 'ليست رسالة عامة. لمسة شخصية.', description: 'الذكاء الاصطناعي يرسل رسالة واتساب تشير إلى آخر خدمة وتقترح الموعد التالي. تبدو شخصية لأنها مبنية على بيانات حقيقية، ليس قالبًا.', listSub: ['يشير إلى آخر زيارة', 'يقترح خدمات ذات صلة', 'يبدو شخصيًا، ليس آليًا'] } },
        { sortId: 4, mainImage: '/images/pages/business/scroll/device-mockups.png', firstBg: '/images/pages/business/scroll/leaf-bg.png', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500, infoScroll: { title: 'العميل يعيد الحجز تلقائيًا', text: 'تقويمك ينمو. لم تفعل شيئًا.', description: 'العميل ينقر لإعادة الحجز من رسالة واتساب. الذكاء الاصطناعي يؤكد الموعد ويحدث تقويمك. معدل الاحتفاظ يرتفع بدون أي جهد تسويقي.', listSub: ['إعادة حجز بنقرة واحدة من واتساب', 'التقويم يتحدث تلقائيًا', 'احتفاظ أعلى، بدون جهد'] } },
      ],
      socialProofStats: [
        { value: '0', context: 'ساعات تُنفق على التسويق' },
        { value: '24/7', context: 'احتفاظ مدعوم بالذكاء الاصطناعي' },
        { value: '0%', context: 'عمولة على العملاء الحاليين' },
      ],
      howItWorks: { steps: [
        { title: 'سجّل وأخبرنا عن نفسك', description: 'يستغرق 5 دقائق. حدد خدماتك وتوافرك وأسعارك.' },
        { title: 'فريقنا يساعدك في الإعداد', description: 'نُعدّ ملفك الشخصي ونُجهّز مساعدك الذكي ونشرح لك كل شيء.' },
        { title: 'ابدأ العمل. ركّز على عملائك.', description: 'ديزي تتولى حجوزاتك. أنت تتولى إبداعك.' },
      ] },
      pricingHook: { headline: 'الانضمام مجاني. بدون أي مخاطر.', body: 'أنشئ ملفك الشخصي وابدأ بقبول الحجوزات بدون تكلفة. الميزات المتقدمة متاحة من خلال باقات بأسعار معقولة. ديزي لا تدير جدولك فحسب. بل تتعلم تفضيلات عملائك، وتُخصّص تجربة حجزهم، وتتأكد من عدم تفويت أي استفسار. العمولة فقط على العملاء الجدد الذين يجدونك عبر سوق ديزي، عملاؤك الحاليون، بدون أي عمولة دائمًا.', ctaText: 'سجّل مجانًا', ctaLink: '/start-free-trial/professional', pricingLinkText: 'اطلع على تفاصيل الأسعار الكاملة \u2190', pricingLinkHref: '/pricing' },
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
        afterScroll: { headline: 'مستعد لتنمية قاعدة عملائك على الطيار الآلي؟', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/start-free-trial/professional' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/start-free-trial/professional', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/professional' },
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
