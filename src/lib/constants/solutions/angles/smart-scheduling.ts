import { I18nContent } from '@/lib/constants/i18n';
import { LandingPageContent } from '@/lib/constants/pages/scrollSections.types';
import { registerAngle } from './index';

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

const smartSchedulingAngle: Record<'business' | 'professional', I18nContent<LandingPageContent>> = {
  business: {
    en: {
      hero: {
        categoryLabel: 'SMART SCHEDULING FOR BUSINESS',
        headline: 'Scheduling That Fills Your Calendar.\nNot Your Time.',
        subHeadline:
          'AI handles availability checks, conflict detection, and staff scheduling. Customers book the right person at the right time. You never touch the calendar.',
        ctaText: 'Start Your 14-Day Free Trial',
        ctaLink: '/start-free-trial/business',
        trustLine: 'No credit card required. Our team helps you set up.',
        answerBlock: {
          question: 'How does AI smart scheduling work for beauty businesses?',
          answer:
            'AI smart scheduling checks real-time staff availability, detects conflicts, and suggests the best time slot for each customer. It handles multiple staff calendars simultaneously, prevents double-bookings, and accepts appointments 24/7 through WhatsApp and Instagram.',
        },
      },
      scrollSections: [
        {
          sortId: 1, mainImage: '/images/pages/business/scroll/device-mockups.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: {
            title: 'Customer Requests a Time',
            text: 'AI Checks All Staff Availability',
            description: 'A customer messages asking for a balayage appointment this Saturday. The AI instantly checks availability across all your stylists and finds the best options.',
            listSub: ['Checks all staff calendars in real-time', 'Considers service duration and breaks', 'Responds within seconds'],
          },
        },
        {
          sortId: 2, mainImage: '/images/pages/business/scroll/schedule.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: {
            title: 'Best Slot Suggested Automatically',
            text: 'Right Person. Right Time. Zero Conflicts.',
            description: 'The AI suggests the best available slot with the right stylist for the service. It factors in expertise, availability, and customer preferences to make the perfect match.',
            listSub: ['Matches stylist expertise to service', 'Avoids scheduling conflicts', 'Optimizes calendar utilization'],
          },
        },
        {
          sortId: 3, mainImage: '/images/pages/business/scroll/integrations.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: {
            title: 'Confirmed Without Double-Booking',
            text: 'Instant Confirmation. Zero Overlap.',
            description: 'The booking is confirmed instantly. The AI ensures no two customers are booked for the same stylist at the same time. Staff calendars update in real-time.',
            listSub: ['Zero double-bookings guaranteed', 'Instant confirmation to customer', 'Staff notified immediately'],
          },
        },
        {
          sortId: 4, mainImage: '/images/pages/business/scroll/analytics.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: {
            title: 'Your Calendar Stays Full and Organized',
            text: "You Didn't Touch a Thing",
            description: 'Your business calendar fills up efficiently. No gaps between appointments, no wasted staff time. The AI optimizes every slot so your team stays productive.',
            listSub: ['Optimized calendar with minimal gaps', 'Staff utilization maximized', 'Revenue per day increases'],
          },
        },
      ],
      socialProofStats: [
        { value: '0', context: 'scheduling conflicts' },
        { value: '24/7', context: 'bookings accepted, even after hours' },
        { value: '8', context: 'tools replaced' },
      ],
      howItWorks: {
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
        subHeadline: 'Stop paying for 8 separate tools. Daisy combines everything you need to run and grow your beauty business.',
        capabilities: [
          { label: 'Smart Booking', description: 'Intelligent scheduling that fills your calendar' },
          { label: 'AI Receptionist', description: '24/7 WhatsApp and Instagram messaging, booking, and payments' },
          { label: 'Customer Acquisition', description: 'Marketplace, cashback, and marketing tools' },
          { label: 'Payments & Invoicing', description: 'Seamless transactions and financial tracking' },
          { label: 'Staff Management', description: 'Scheduling, permissions, and performance' },
          { label: 'Marketing Engine', description: 'Promotions, campaigns, and customer retention' },
          { label: 'Analytics Dashboard', description: 'Revenue trends, insights, and reporting' },
          { label: 'Brand Control', description: 'White-label everything with your brand' },
        ],
        stats: [
          { value: '0', context: 'scheduling conflicts' },
          { value: '24/7', context: 'AI receptionist' },
          { value: '10+', context: 'languages supported' },
        ],
      },
      inlineCtas: {
        afterScroll: { headline: 'Ready to fill your calendar automatically?', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business' },
        afterFeatures: { headline: 'Start Your 14-Day Free Trial', ctaText: 'Start Your 14-Day Free Trial', ctaLink: '/start-free-trial/business', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/business' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'How does AI scheduling prevent conflicts?', answer: 'The AI checks all staff calendars in real-time before confirming any booking. It considers service duration, break times, and existing appointments to ensure zero overlap.' },
        { question: 'Can it handle multiple staff members?', answer: 'Yes. The AI manages calendars for your entire team simultaneously, matching each customer to the right staff member based on expertise, availability, and preference.' },
        { question: 'Does it work with my existing calendar?', answer: 'Yes. Daisy syncs with Google Calendar and other popular calendar tools. Changes in either system update in real-time.' },
        { question: 'What happens if a customer needs to reschedule?', answer: 'The AI handles rescheduling requests automatically. It finds the next best available slot and confirms the change with both the customer and staff member.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'الجدولة الذكية للأعمال',
        headline: 'جدولة تملأ تقويمك.\nليس وقتك.',
        subHeadline: 'الذكاء الاصطناعي يتحقق من التوافر ويكشف التعارضات ويدير جدولة الموظفين. العملاء يحجزون مع الشخص المناسب في الوقت المناسب. أنت لا تلمس التقويم.',
        ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا',
        ctaLink: '/start-free-trial/business',
        trustLine: 'لا حاجة لبطاقة ائتمان. فريقنا يساعدك في الإعداد.',
        answerBlock: {
          question: 'كيف تعمل الجدولة الذكية بالذكاء الاصطناعي لأعمال التجميل؟',
          answer: 'الجدولة الذكية تتحقق من توافر الموظفين في الوقت الفعلي وتكشف التعارضات وتقترح أفضل وقت لكل عميل. تدير تقويمات موظفين متعددة في وقت واحد وتمنع الحجوزات المزدوجة وتقبل المواعيد على مدار الساعة عبر واتساب وإنستغرام.',
        },
      },
      scrollSections: [
        {
          sortId: 1, mainImage: '/images/pages/business/scroll/device-mockups.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'عميل يطلب وقتًا', text: 'الذكاء الاصطناعي يتحقق من توافر جميع الموظفين', description: 'عميل يراسل يطلب موعد بالاياج يوم السبت. الذكاء الاصطناعي يتحقق فورًا من التوافر عبر جميع المصممين ويجد أفضل الخيارات.', listSub: ['يتحقق من جميع تقويمات الموظفين في الوقت الفعلي', 'يأخذ بالاعتبار مدة الخدمة والاستراحات', 'يرد خلال ثوانٍ'] },
        },
        {
          sortId: 2, mainImage: '/images/pages/business/scroll/schedule.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'أفضل موعد يُقترح تلقائيًا', text: 'الشخص المناسب. الوقت المناسب. بدون تعارضات.', description: 'الذكاء الاصطناعي يقترح أفضل موعد متاح مع المصمم المناسب للخدمة. يأخذ بالاعتبار الخبرة والتوافر وتفضيلات العميل لتحقيق المطابقة المثالية.', listSub: ['يطابق خبرة المصمم مع الخدمة', 'يتجنب تعارض المواعيد', 'يحسّن استخدام التقويم'] },
        },
        {
          sortId: 3, mainImage: '/images/pages/business/scroll/integrations.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'مؤكد بدون حجز مزدوج', text: 'تأكيد فوري. بدون تداخل.', description: 'الحجز يُؤكد فورًا. الذكاء الاصطناعي يضمن عدم حجز عميلين لنفس المصمم في نفس الوقت. تقويمات الموظفين تتحدث في الوقت الفعلي.', listSub: ['ضمان عدم الحجوزات المزدوجة', 'تأكيد فوري للعميل', 'الموظفون يُبلَّغون فورًا'] },
        },
        {
          sortId: 4, mainImage: '/images/pages/business/scroll/analytics.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'تقويمك يبقى ممتلئًا ومنظمًا', text: 'لم تلمس شيئًا', description: 'تقويم عملك يمتلئ بكفاءة. بدون فجوات بين المواعيد، بدون وقت ضائع للموظفين. الذكاء الاصطناعي يحسّن كل فترة حتى يبقى فريقك منتجًا.', listSub: ['تقويم محسّن بأقل فجوات', 'استخدام الموظفين مُعظّم', 'الإيرادات اليومية تزداد'] },
        },
      ],
      socialProofStats: [
        { value: '0', context: 'تعارضات في الجدولة' },
        { value: '24/7', context: 'الحجوزات مقبولة، حتى بعد ساعات العمل' },
        { value: '8', context: 'أدوات تم استبدالها' },
      ],
      howItWorks: {
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
          { label: 'حجز ذكي', description: 'جدولة ذكية تملأ تقويمك' },
          { label: 'موظف استقبال ذكي', description: 'رسائل واتساب وإنستغرام وحجوزات ومدفوعات على مدار الساعة' },
          { label: 'استقطاب العملاء', description: 'سوق إلكتروني وكاش باك وأدوات تسويق' },
          { label: 'المدفوعات والفوترة', description: 'معاملات سلسة وتتبع مالي' },
          { label: 'إدارة الموظفين', description: 'جدولة وصلاحيات وأداء' },
          { label: 'محرك التسويق', description: 'عروض وحملات والاحتفاظ بالعملاء' },
          { label: 'لوحة التحليلات', description: 'اتجاهات الإيرادات والرؤى والتقارير' },
          { label: 'التحكم بالعلامة التجارية', description: 'كل شيء بعلامتك التجارية الخاصة' },
        ],
        stats: [
          { value: '0', context: 'تعارضات في الجدولة' },
          { value: '24/7', context: 'موظف استقبال ذكي' },
          { value: '+10', context: 'لغة مدعومة' },
        ],
      },
      inlineCtas: {
        afterScroll: { headline: 'مستعد لملء تقويمك تلقائيًا؟', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaText: 'ابدأ تجربتك المجانية لمدة 14 يومًا', ctaLink: '/start-free-trial/business', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/business' },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'كيف تمنع الجدولة الذكية التعارضات؟', answer: 'الذكاء الاصطناعي يتحقق من جميع تقويمات الموظفين في الوقت الفعلي قبل تأكيد أي حجز. يأخذ بالاعتبار مدة الخدمة وأوقات الاستراحة والمواعيد القائمة لضمان عدم التداخل.' },
        { question: 'هل يمكنه إدارة عدة موظفين؟', answer: 'نعم. الذكاء الاصطناعي يدير تقويمات فريقك بالكامل في وقت واحد، ويطابق كل عميل مع الموظف المناسب بناءً على الخبرة والتوافر والتفضيل.' },
        { question: 'هل يعمل مع تقويمي الحالي؟', answer: 'نعم. ديزي تتزامن مع تقويم جوجل وأدوات التقويم الشائعة الأخرى. التغييرات في أي نظام تتحدث في الوقت الفعلي.' },
        { question: 'ماذا يحدث إذا احتاج العميل لإعادة الجدولة؟', answer: 'الذكاء الاصطناعي يتولى طلبات إعادة الجدولة تلقائيًا. يجد أفضل موعد متاح التالي ويؤكد التغيير مع العميل والموظف.' },
      ],
    },
  },
  professional: {
    en: {
      hero: {
        categoryLabel: 'SMART SCHEDULING FOR PROFESSIONALS',
        headline: 'Your Schedule. Your Rules.\nZero Admin.',
        subHeadline: "Set your hours, block personal time, work across multiple locations. Daisy's AI fills your calendar without you lifting a finger.",
        ctaText: 'Start Your Free Trial',
        ctaLink: '/start-free-trial/professional',
        trustLine: 'Free to join. No credit card required.',
        answerBlock: {
          question: 'How does smart scheduling work for beauty professionals?',
          answer: "Smart scheduling lets you set your own hours and availability across multiple locations. Daisy's AI fills your calendar by accepting booking requests 24/7, checking your schedule in real-time, and preventing double-bookings. You focus on clients while the AI handles scheduling admin.",
        },
      },
      scrollSections: [
        {
          sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'Set Your Availability', text: 'Your Hours. Your Locations. Your Rules.', description: 'Define your working hours, block personal time, and set availability across different locations. The AI respects your schedule and only books within your rules.', listSub: ['Set hours per day and location', 'Block personal time and holidays', 'Work across multiple locations'] },
        },
        {
          sortId: 2, mainImage: '/images/pages/business/scroll/schedule.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'Client Requests a Time', text: 'AI Finds the Perfect Slot', description: 'A client messages on WhatsApp asking for a haircut tomorrow. The AI checks your availability and suggests the next open slot that works for both of you.', listSub: ['Real-time availability check', 'Considers your preferences', 'Instant response to client'] },
        },
        {
          sortId: 3, mainImage: '/images/pages/business/scroll/analytics.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'Confirmed Without Interrupting You', text: 'No Back-and-Forth. No Double-Bookings.', description: "The AI confirms the booking, processes payment, and adds it to your calendar. You're mid-appointment and don't even notice until you check between clients.", listSub: ['Zero interruption to your work', 'Payment processed automatically', 'Calendar updated in real-time'] },
        },
        {
          sortId: 4, mainImage: '/images/pages/business/scroll/device-mockups.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'Your Calendar Fills Itself', text: 'More Clients. Less Admin.', description: 'Between appointments you check your phone. Your schedule is filling up for the week. New clients confirmed, existing clients rebooked. All without you doing a thing.', listSub: ['Schedule fills automatically', 'Gaps optimized between appointments', 'Your earnings grow without extra effort'] },
        },
      ],
      socialProofStats: [
        { value: '0%', context: 'time spent on scheduling admin' },
        { value: '24/7', context: 'bookings accepted automatically' },
        { value: '0%', context: 'commission on existing clients' },
      ],
      howItWorks: {
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
          { label: 'Flexible Scheduling', description: 'Set your own hours across multiple locations' },
          { label: 'AI Booking Assistant', description: 'Handles bookings and payments while you work' },
          { label: 'Earnings Tracker', description: 'Track revenue in real-time with detailed breakdowns' },
          { label: 'Professional Profile', description: 'Showcase your work and attract new clients' },
          { label: 'Client Management', description: 'Build relationships with detailed client profiles' },
          { label: 'Smart Notifications', description: 'Appointment reminders that reduce no-shows' },
          { label: 'Calendar Sync', description: 'Sync with Google Calendar and other tools' },
          { label: 'Marketplace Visibility', description: 'Customers find you when searching nearby' },
        ],
        stats: [
          { value: '0%', context: 'scheduling admin' },
          { value: '24/7', context: 'AI-powered booking' },
          { value: '10+', context: 'languages supported' },
        ],
      },
      inlineCtas: {
        afterScroll: { headline: 'Ready to stop managing your calendar manually?', ctaText: 'Start Your Free Trial', ctaLink: '/start-free-trial/professional' },
        afterFeatures: { headline: 'Start Your Free Trial', ctaText: 'Start Your Free Trial', ctaLink: '/start-free-trial/professional', secondaryLinkText: 'Explore all features \u2192', secondaryLinkHref: '/features/professional' },
      },
      titleFraque: 'Frequently Asked Questions',
      fallbackFaqs: [
        { question: 'Can I set my own working hours?', answer: 'Yes. You have full control over your schedule. Set different hours for different days, block personal time, and adjust availability whenever you need to.' },
        { question: 'What if I work at multiple locations?', answer: 'Daisy supports multi-location scheduling. Set different hours and services for each location and the AI manages your availability across all of them.' },
        { question: 'Can I block personal time?', answer: 'Absolutely. Block lunch breaks, personal appointments, holidays, or any time you need off. The AI will never book clients during blocked periods.' },
        { question: 'How does AI avoid double-bookings?', answer: 'The AI checks your real-time calendar before confirming any booking. It accounts for service duration, buffer time between appointments, and your personal blocked time.' },
      ],
    },
    ar: {
      hero: {
        categoryLabel: 'الجدولة الذكية للمتخصصين',
        headline: 'جدولك. قواعدك.\nبدون إدارة.',
        subHeadline: 'حدد ساعاتك، احظر الوقت الشخصي، اعمل عبر مواقع متعددة. الذكاء الاصطناعي في ديزي يملأ تقويمك دون أن تحرك ساكنًا.',
        ctaText: 'ابدأ تجربتك المجانية',
        ctaLink: '/start-free-trial/professional',
        trustLine: 'الانضمام مجاني. لا حاجة لبطاقة ائتمان.',
        answerBlock: {
          question: 'كيف تعمل الجدولة الذكية لمتخصصي التجميل؟',
          answer: 'الجدولة الذكية تتيح لك تحديد ساعات عملك وتوافرك عبر مواقع متعددة. الذكاء الاصطناعي في ديزي يملأ تقويمك بقبول طلبات الحجز على مدار الساعة والتحقق من جدولك في الوقت الفعلي ومنع الحجوزات المزدوجة. تركز على العملاء بينما يتولى الذكاء الاصطناعي إدارة الجدولة.',
        },
      },
      scrollSections: [
        {
          sortId: 1, mainImage: '/images/pages/professional/scroll/staff-details.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel1, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'حدد توافرك', text: 'ساعاتك. مواقعك. قواعدك.', description: 'حدد ساعات عملك واحظر الوقت الشخصي وحدد التوافر عبر مواقع مختلفة. الذكاء الاصطناعي يحترم جدولك ويحجز فقط ضمن قواعدك.', listSub: ['حدد الساعات لكل يوم وموقع', 'احظر الوقت الشخصي والعطل', 'اعمل عبر مواقع متعددة'] },
        },
        {
          sortId: 2, mainImage: '/images/pages/business/scroll/schedule.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel2, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'عميل يطلب وقتًا', text: 'الذكاء الاصطناعي يجد الموعد المثالي', description: 'عميل يراسل على واتساب يطلب قصة شعر غدًا. الذكاء الاصطناعي يتحقق من توافرك ويقترح أقرب موعد يناسبكما.', listSub: ['تحقق من التوافر في الوقت الفعلي', 'يأخذ بالاعتبار تفضيلاتك', 'رد فوري للعميل'] },
        },
        {
          sortId: 3, mainImage: '/images/pages/business/scroll/analytics.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', secondBg: '/images/pages/business/scroll/stars.webp', ...scrollStyles.panel3, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'مؤكد بدون مقاطعتك', text: 'بدون تراسل متكرر. بدون حجوزات مزدوجة.', description: 'الذكاء الاصطناعي يؤكد الحجز ويعالج الدفع ويضيفه إلى تقويمك. أنت في منتصف موعد ولا تلاحظ حتى تتفقد بين العملاء.', listSub: ['بدون مقاطعة لعملك', 'الدفع يُعالج تلقائيًا', 'التقويم يتحدث في الوقت الفعلي'] },
        },
        {
          sortId: 4, mainImage: '/images/pages/business/scroll/device-mockups.webp', firstBg: '/images/pages/business/scroll/leaf-bg.webp', ...scrollStyles.panel4, mainImageWidth: 300, mainImageHeight: 500,
          infoScroll: { title: 'تقويمك يمتلئ بنفسه', text: 'عملاء أكثر. إدارة أقل.', description: 'بين المواعيد تتفقد هاتفك. جدولك يمتلئ للأسبوع. عملاء جدد مؤكدون وعملاء حاليون أعادوا الحجز. كل ذلك بدون أن تفعل شيئًا.', listSub: ['الجدول يمتلئ تلقائيًا', 'الفجوات محسّنة بين المواعيد', 'أرباحك تنمو بدون جهد إضافي'] },
        },
      ],
      socialProofStats: [
        { value: '0%', context: 'وقت يُنفق على إدارة الجدولة' },
        { value: '24/7', context: 'الحجوزات مقبولة تلقائيًا' },
        { value: '0%', context: 'عمولة على العملاء الحاليين' },
      ],
      howItWorks: {
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
          { label: 'جدولة مرنة', description: 'حدد ساعات عملك عبر مواقع متعددة' },
          { label: 'مساعد الحجز الذكي', description: 'يتولى الحجوزات والمدفوعات أثناء عملك' },
          { label: 'متتبع الأرباح', description: 'تتبع الإيرادات في الوقت الفعلي مع تفاصيل دقيقة' },
          { label: 'الملف المهني', description: 'اعرض أعمالك واجذب عملاء جدد' },
          { label: 'إدارة العملاء', description: 'ابنِ علاقات مع ملفات عملاء مفصلة' },
          { label: 'إشعارات ذكية', description: 'تذكيرات بالمواعيد تقلل حالات عدم الحضور' },
          { label: 'مزامنة التقويم', description: 'مزامنة مع تقويم جوجل وأدوات أخرى' },
          { label: 'ظهور في السوق', description: 'العملاء يجدونك عند البحث بالقرب منهم' },
        ],
        stats: [
          { value: '0%', context: 'إدارة جدولة' },
          { value: '24/7', context: 'حجز مدعوم بالذكاء الاصطناعي' },
          { value: '+10', context: 'لغة مدعومة' },
        ],
      },
      inlineCtas: {
        afterScroll: { headline: 'مستعد للتوقف عن إدارة تقويمك يدويًا؟', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/start-free-trial/professional' },
        afterFeatures: { headline: 'ابدأ تجربتك المجانية', ctaText: 'ابدأ تجربتك المجانية', ctaLink: '/start-free-trial/professional', secondaryLinkText: 'استكشف جميع الميزات \u2192', secondaryLinkHref: '/features/professional' },
      },
      titleFraque: 'أسئلة شائعة',
      fallbackFaqs: [
        { question: 'هل يمكنني تحديد ساعات عملي الخاصة؟', answer: 'نعم. لديك تحكم كامل في جدولك. حدد ساعات مختلفة لأيام مختلفة، واحظر الوقت الشخصي، وعدّل التوافر متى احتجت.' },
        { question: 'ماذا لو كنت أعمل في مواقع متعددة؟', answer: 'ديزي تدعم الجدولة عبر مواقع متعددة. حدد ساعات وخدمات مختلفة لكل موقع والذكاء الاصطناعي يدير توافرك عبر جميعها.' },
        { question: 'هل يمكنني حظر الوقت الشخصي؟', answer: 'بالتأكيد. احظر استراحات الغداء والمواعيد الشخصية والعطل أو أي وقت تحتاج فيه إلى إجازة. الذكاء الاصطناعي لن يحجز عملاء خلال الفترات المحظورة.' },
        { question: 'كيف يتجنب الذكاء الاصطناعي الحجوزات المزدوجة؟', answer: 'الذكاء الاصطناعي يتحقق من تقويمك في الوقت الفعلي قبل تأكيد أي حجز. يأخذ بالاعتبار مدة الخدمة والفاصل الزمني بين المواعيد ووقتك الشخصي المحظور.' },
      ],
    },
  },
};

registerAngle('smart-scheduling', smartSchedulingAngle);
