import { I18nContent } from '../i18n';

export interface GuideStep {
  name: string;
  text: string;
}

export interface GuideData {
  /** ISO date — bump when the entry's content changes; surfaces in sitemap lastmod. */
  lastUpdated?: string;
  slug: string;
  title: string;
  answer: string;
  problemExplained: string;
  steps: GuideStep[];
  howDaisyHelps: string;
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  relatedGuides: string[];
}

export const guideData: I18nContent<GuideData[]> = {
  en: [
    {
      slug: 'reduce-salon-no-shows',
      title: 'How Do I Reduce No-Shows at My Salon?',
      answer:
        'Send automated reminders by SMS and email, take deposits on high-value services, and let AI flag the bookings most likely to be missed. Salons doing all three see no-shows fall 30-40%.',
      problemExplained:
        'Industry estimates put the cost of no-shows at $67,000 per year for an average salon. An empty slot is not only the lost service fee; it is paid staff time and a client you could have seen instead. It hurts most where reminders are made by hand, or not at all. Modern <a href="/en/glossary/salon-management-software">salon management software</a> automates the whole thing. With no reminder at all, 23% of appointments are missed. With automated reminders across several channels, that falls to 5-10%.',
      steps: [
        {
          name: 'Set up automated appointment reminders',
          text: 'Set SMS, email and WhatsApp reminders to go 24 hours and 2 hours before the appointment. Using several channels beats using one, and cuts no-shows by up to 40%.',
        },
        {
          name: 'Implement a deposit or prepayment policy',
          text: 'Ask for a deposit on high-value services and first-time clients. Even 10-20% of the service cost makes a real difference, because the client now has something at stake.',
        },
        {
          name: 'Create a clear cancellation policy',
          text: 'Write a cancellation policy, say 24-hour notice, and put it in front of people during booking and again in the confirmation email, so nobody is surprised by it later.',
        },
        {
          name: 'Enable online rescheduling',
          text: 'Make rescheduling online easy. Given a frictionless way to move an appointment, most people will move it rather than simply not turn up.',
        },
        {
          name: 'Use AI to predict and prevent no-shows',
          text: 'AI can flag the risky appointments from client history, booking patterns and timing. Act on the flags with an extra reminder or a deposit.',
        },
        {
          name: 'Maintain a smart waitlist',
          text: 'When someone cancels, an automated waitlist tells interested clients immediately and fills the gap, which turns a loss back into revenue.',
        },
      ],
      howDaisyHelps:
        'Daisy does all of this without configuration work. Reminders go out over SMS, email and WhatsApp, deposits are yours to set, AI flags the bookings at risk, clients reschedule themselves, and a smart waitlist fills the cancellations. Salons running the full set report no-show rates under 5%.',
      faqs: [
        {
          question: 'What is the average no-show rate for salons?',
          answer:
            'With nothing in place, the average salon sits at 20-30%. Automated reminders alone take it to 10-15%. Reminders, deposits and AI together bring it below 5%.',
        },
        {
          question: 'How much revenue do salons lose from no-shows?',
          answer:
            'Industry calculations put it at roughly $67,000 per year for an average salon, and past $100,000 for a busy multi-chair one.',
        },
        {
          question: 'Should I charge clients for no-shows?',
          answer:
            'Preventing them works better than billing for them. Deposits and prepayment stop the problem happening, while chasing a fee afterwards is hard to collect and harder on the relationship.',
        },
        {
          question: 'What type of appointment reminders work best?',
          answer:
            'SMS works best, with a 95%+ open rate, then WhatsApp, then email. Two reminders, one 24 hours ahead and one 2 hours ahead, is the combination that performs.',
        },
        {
          question: 'Can AI really predict salon no-shows?',
          answer:
            'Yes. It reads booking history, client behaviour, which days and times tend to go wrong, and the service type, then flags the appointments most likely to be missed so you can act first.',
        },
        {
          question: 'How do I fill last-minute cancellations?',
          answer:
            'Keep a smart waitlist. A cancellation triggers an SMS to the clients who wanted that slot, and Daisy fills most of them within 30 minutes.',
        },
        {
          question: 'Does requiring deposits scare away new clients?',
          answer:
            'Barely. Research puts the drop in bookings at under 5%, against a 50-60% fall in no-shows. Keep the deposit reasonable, 10-20%, and say clearly what it is for.',
        },
        {
          question: 'What salon software helps prevent no-shows?',
          answer:
            'Daisy covers the most ground here: reminders across channels, AI prediction, deposits, easy rescheduling and an automated waitlist, all included in every plan.',
        },
      ],
      metaTitle: 'How to Reduce Salon No-Shows by 40% | Proven Strategies',
      metaDescription:
        'Learn proven strategies to reduce salon no-shows by 30-40%. Automated reminders, deposits, AI prediction, and smart waitlists -- with step-by-step implementation guide.',
      keywords: ['reduce salon no-shows', 'salon no-show prevention', 'salon automated reminders', 'salon deposit policy', 'salon waitlist management'],
      relatedGuides: ['get-more-salon-clients', 'choose-best-salon-software'],
    },
    {
      slug: 'get-more-salon-clients',
      title: 'How Do I Get More Clients for My Salon?',
      answer:
        'Grow the client base on several fronts at once: marketplace visibility, cashback loyalty, automated marketing campaigns, a well-kept Google Business listing and AI acquisition tools.',
      problemExplained:
        'An average salon competes with 8-12 nearby businesses for the same people. Flyers and word of mouth only reach so far, and digital marketing wants expertise most owners were never taught. Through paid advertising, a new client costs $25-50 to acquire. The right <a href="/en/glossary/salon-management-software">salon management software</a> gives you acquisition channels that run themselves while you get on with the work.',
      steps: [
        {
          name: 'Optimize your Google Business Profile',
          text: 'Claim your Google Business listing and fill it properly: good photos, correct hours, your service menu, and "Reserve with Google" switched on. 46% of all Google searches have local intent.',
        },
        {
          name: 'List on a discovery marketplace',
          text: 'Get onto a beauty marketplace like Daisy, where people are already searching for services. Those clients arrive ready to book rather than browsing.',
        },
        {
          name: 'Launch a cashback loyalty program',
          text: 'Offer <a href="/en/glossary/cashback-beauty-booking">cashback rewards on bookings</a> to incentivize first-time visits and repeat business. Cashback programs increase customer lifetime value by 20-30% compared to traditional loyalty cards.',
        },
        {
          name: 'Set up automated marketing campaigns',
          text: 'Let AI run the targeted promotions, the re-engagement emails to lapsed clients, the birthday offers and the referral incentives, without you scheduling any of it.',
        },
        {
          name: 'Enable 24/7 booking availability',
          text: 'Put an AI receptionist on your calls, messages and booking inquiries around the clock. Beauty businesses miss up to 35% of calls outside opening hours, and every one of those was a potential client.',
        },
        {
          name: 'Collect and showcase reviews',
          text: 'Ask for reviews after appointments, and automate the request by SMS. Salons with 50+ reviews at 4.5+ stars pull 3x the new bookings of those without.',
        },
      ],
      howDaisyHelps:
        'Daisy provides 360-degree customer acquisition as a complete salon management platform: marketplace discovery brings new clients, cashback keeps them coming back, AI marketing automates promotions, and the AI receptionist ensures you never miss a lead. All channels work together to grow your client base automatically.',
      faqs: [
        {
          question: 'How do salons get new clients in 2026?',
          answer:
            'Through digital discovery on Google and marketplaces, cashback incentives, social media, automated marketing and AI lead capture. What works is running several of these together rather than betting on one.',
        },
        {
          question: 'How much does it cost to acquire a new salon client?',
          answer:
            'Through paid ads, $25-50 per client. Through organic marketplace discovery (like Daisy\'s cashback marketplace), acquisition costs are significantly lower because clients come to you already motivated to book.',
        },
        {
          question: 'What is the best marketing strategy for a salon?',
          answer:
            'The cheapest route combines four things: marketplace visibility for discovery, cashback for retention, automated email and SMS for re-engagement, and a well-kept Google Business listing for local search.',
        },
        {
          question: 'How can I compete with bigger salons in my area?',
          answer:
            'Technology flattens the difference. A small salon running AI booking, automated marketing and cashback can offer a better experience than a bigger competitor doing everything by hand.',
        },
        {
          question: 'Does social media marketing work for salons?',
          answer:
            'Social is good for building a brand and poor at converting compared with search and marketplaces. Use it for awareness, and put the money where people are actively looking to book.',
        },
        {
          question: 'How do I get clients to come back after their first visit?',
          answer:
            'Cashback, automated follow-ups, birthday offers and re-engagement campaigns. Daisy\'s AI spots who is drifting and starts a retention campaign aimed at them.',
        },
      ],
      metaTitle: 'How to Get More Salon Clients in 2026 | Growth Strategies',
      metaDescription:
        'Learn how to attract more clients to your salon with marketplace discovery, cashback programs, AI marketing, and 24/7 booking. Step-by-step client acquisition guide.',
      keywords: ['get more salon clients', 'salon customer acquisition', 'salon marketing strategies', 'salon growth tips', 'beauty business marketing'],
      relatedGuides: ['reduce-salon-no-shows', 'choose-best-salon-software'],
    },
    {
      slug: 'choose-best-salon-software',
      title: 'How Do I Choose the Best Salon Software?',
      answer:
        'Judge it on five things: the core features of booking, POS and CRM; the growth tools of marketing, AI and cashback; whether the pricing is honest, particularly about per-staff fees and commissions; Arabic and GCC support if you need it; and what help you get moving your data.',
      problemExplained:
        'There are over 50 <a href="/en/glossary/salon-management-software">salon software</a> options, which is enough to stall anyone. Plenty advertise a low starting price and then add per-staff fees, transaction charges and marketplace commissions that change the real number entirely. Once your data is inside one, leaving is expensive, so the first choice carries weight. Judge them on total cost of ownership, on what they do for growth rather than only operations, and on how much room they leave you later.',
      steps: [
        {
          name: 'List your must-have features',
          text: 'Start with what you cannot run without: online booking, payments, client management, staff scheduling. Then look at what grows the business: marketing automation, AI and acquisition tools.',
        },
        {
          name: 'Calculate the true total cost',
          text: 'The base price is not the price. Add per-staff fees, transaction fees of typically 2-3%, marketplace commissions and the cost of anything marked premium. A $25/month plan reaches $200+ easily.',
        },
        {
          name: 'Check growth vs operations focus',
          text: 'Operations tools manage what you already have. Growth platforms, Daisy among them, go out and find customers, hold on to them and raise revenue. Pick according to what you are trying to do.',
        },
        {
          name: 'Verify language and market support',
          text: 'Serving Arabic-speaking clients or working in the GCC means insisting on native Arabic rather than a translation layer, along with local payment methods and regional compliance.',
        },
        {
          name: 'Evaluate AI capabilities',
          text: 'AI is reshaping this category. Look for an AI receptionist, smart scheduling, predictive analytics and automated marketing, which together save 10+ hours per week and raise revenue.',
        },
        {
          name: 'Test the migration process',
          text: 'Ask about migration before you sign. The better platforms do it for free and import your client records, appointment history and business data for you.',
        },
      ],
      howDaisyHelps:
        'Daisy checks every box: comprehensive features, transparent flat pricing (no per-staff or transaction fees), AI-powered growth tools, native Arabic/English support, and free data migration on the Business plan. See our full salon management software guide for a detailed breakdown, or start with a 14-day free trial to experience it yourself.',
      faqs: [
        {
          question: 'What is the best salon software in 2026?',
          answer:
            'The best salon software depends on your needs. For growth-focused businesses wanting AI, cashback, and white-label branding, Daisy leads. For budget-conscious single-chair operators, simpler tools may suffice. Always evaluate total cost including hidden fees.',
        },
        {
          question: 'What hidden fees should I watch for in salon software?',
          answer:
            'The usual ones: per-staff charges of $5-15/staff/month, transaction fees of 2-3% per payment, marketplace commissions of 20-30%, premium upsells and hardware. Daisy charges a flat monthly fee and none of these.',
        },
        {
          question: 'Should I choose salon software with a marketplace?',
          answer:
            'If acquisition matters to you, yes, though watch the commissions, which reach 30% per booking on some platforms. Daisy\'s marketplace charges none, so you keep 100% of the booking revenue.',
        },
        {
          question: 'How important are AI features in salon software?',
          answer:
            'More every year. An AI receptionist alone recovers 35% of missed calls, smart scheduling closes the gaps, and automated marketing saves 5-10 hours weekly. It is the clearest difference between platforms now.',
        },
        {
          question: 'Can I try salon software before buying?',
          answer:
            'Most credible platforms do. Daisy gives you 14 days on any plan with no credit card, which is long enough to judge it properly.',
        },
        {
          question: 'How do I switch from my current salon software?',
          answer:
            'Check your current platform lets you export, then pick one that will help you import. Daisy\'s Business plan includes assisted migration from Fresha, Booksy, Vagaro and the rest at no cost.',
        },
        {
          question: 'Is free salon software worth it?',
          answer:
            'Free platforms make their money on marketplace commissions, transaction fees or features they hold back. Work out the total: a "free" platform taking 20% commission can cost more than a paid one on flat pricing.',
        },
        {
          question: 'What salon software works best for multi-location businesses?',
          answer:
            'Multi-location businesses need central management, analytics per site and branding that holds across them. Daisy handles up to 4 locations on the Business plan, white-labelled, with reporting in one place.',
        },
      ],
      metaTitle: 'How to Choose the Best Salon Software in 2026 | Buyer\'s Guide',
      metaDescription:
        'Step-by-step guide to choosing salon software. Compare features, pricing models, AI capabilities, and hidden fees. Find the right platform for your beauty business.',
      keywords: ['best salon software', 'salon software comparison', 'choose salon software', 'salon software pricing', 'beauty business software guide'],
      relatedGuides: ['reduce-salon-no-shows', 'get-more-salon-clients'],
    },
    {
      slug: 'switch-from-fresha',
      title: 'How Do I Switch from Fresha to Another Platform?',
      answer:
        'Export your client data, pick a platform that will help you import it, Daisy does this free, set the new system up alongside the old one, and tell your clients clearly what is changing.',
      problemExplained:
        'Fresha has added paid features and new fees to a platform that used to be free, and a lot of salon owners have started looking at alternative <a href="/en/glossary/salon-management-software">salon management software</a> because of it. Switching still feels risky: there is client data at stake, years of booking history, and a new system to learn. Planning is what removes the risk. Export the data first, build the new platform alongside Fresha, and move across once you have tested everything.',
      steps: [
        {
          name: 'Export your data from Fresha',
          text: 'Download your client list, appointment history and financial records from Fresha under Settings > Data Export, which gives you CSV files. Store them somewhere safe, because this is the most valuable thing your business owns.',
        },
        {
          name: 'Choose your new platform',
          text: 'Compare alternatives on features, pricing and migration help. The questions that matter: does it have the AI Fresha does not, can you read the pricing without a call, and does it work in your market?',
        },
        {
          name: 'Set up the new platform in parallel',
          text: 'Import the data and set up services, staff and settings while Fresha is still running, so nothing goes dark during the switch.',
        },
        {
          name: 'Test everything before switching',
          text: 'Make test bookings, run test payments, check the reminders arrive, and confirm the integrations to Google Calendar and your payment processor are set up properly.',
        },
        {
          name: 'Communicate the change to clients',
          text: 'Email or text every client with the new booking link, and lead with what they gain from it rather than with the fact that something changed.',
        },
        {
          name: 'Deactivate Fresha and go live',
          text: 'Once you are satisfied, close the Fresha account and point every booking channel at the new platform. Watch it closely for the first 2 weeks.',
        },
      ],
      howDaisyHelps:
        'Daisy makes switching from Fresha seamless. Free data migration (Business plan) imports all your client records and history. You get features Fresha never offered: AI receptionist, cashback loyalty, white-label branding, and Arabic support. Plus transparent flat pricing with no marketplace commissions.',
      faqs: [
        {
          question: 'Can I export my data from Fresha?',
          answer:
            'Yes. Client lists, appointment history and financial records all export as CSV, under Settings > Data Export in the Fresha dashboard.',
        },
        {
          question: 'What is the best Fresha alternative in 2026?',
          answer:
            'For a salon that wants AI, cashback loyalty and pricing it can read, Daisy is the strongest option. Where Fresha\'s fee structure keeps moving, Daisy is flat from $50/month with no commissions.',
        },
        {
          question: 'Will I lose my clients if I switch from Fresha?',
          answer:
            'No. Export the data, import it, and send a clear email with your new booking link. Clients follow the salon, not the booking software.',
        },
        {
          question: 'How long does it take to switch from Fresha?',
          answer:
            'Usually 3-5 days end to end. With assisted migration the import itself takes 24-48 hours, and you can run both systems side by side until you are confident.',
        },
        {
          question: 'Is Fresha still free?',
          answer:
            'Fresha has been adding paid features, transaction fees and premium tiers. A basic free plan may still exist, but most salons need what sits above it, which puts the real cost level with or above a flat-rate alternative like Daisy.',
        },
        {
          question: 'What features does Daisy have that Fresha doesn\'t?',
          answer:
            'Several: an AI voice receptionist, cashback acquisition, full white-label branding, native Arabic, and flat published pricing with no transaction fees or marketplace commissions.',
        },
      ],
      metaTitle: 'How to Switch from Fresha | Migration Guide 2026',
      metaDescription:
        'Step-by-step guide to switching from Fresha to a better salon platform. Export data, migrate clients, and transition smoothly with zero downtime.',
      keywords: ['switch from Fresha', 'Fresha alternative migration', 'Fresha data export', 'salon software migration', 'leave Fresha'],
      relatedGuides: ['choose-best-salon-software', 'get-more-salon-clients'],
    },
    {
      slug: 'set-up-online-booking-salon',
      title: 'How Do I Set Up Online Booking for My Salon?',
      answer:
        'Set up online booking by choosing salon software with integrated scheduling, configuring your services and staff availability, embedding the booking widget on your website, enabling Reserve with Google, and promoting your booking link across all channels.',
      problemExplained:
        'Plenty of salons still run on phone calls and walk-ins, which misses the 67% of customers who would rather book online. Without it you lose clients to competitors who have it, never hear the after-hours inquiries, and pay staff to answer calls a system could handle. Few things a salon can set up return as much.',
      steps: [
        {
          name: 'Choose salon booking software',
          text: 'Pick <a href="/en/glossary/salon-booking-software">salon booking software</a> that covers online booking, the calendar and automated reminders. Daisy does AI-powered booking with no transaction fees from $50/month.',
        },
        {
          name: 'Configure your services and pricing',
          text: 'Add every service with an accurate description, duration and price, grouped into categories such as hair, nails and skin so people can find things.',
        },
        {
          name: 'Set up staff availability',
          text: 'Set each person\'s working hours, breaks and which services they do. Customers then only ever see slots that genuinely exist.',
        },
        {
          name: 'Customize your booking page',
          text: 'Add your logo, colours and photos. White-labelled, the booking page reads as part of your own site rather than somebody else\'s platform.',
        },
        {
          name: 'Add booking to your website and social media',
          text: 'Put the widget on your website, add a "Book Now" button to Instagram and Facebook, and switch on Reserve with Google so people can book from search.',
        },
        {
          name: 'Set up payment and cancellation policies',
          text: 'Decide on deposits, prepayment and your cancellation policy. These three settings do most of the work against no-shows.',
        },
      ],
      howDaisyHelps:
        'Daisy makes online booking setup effortless: configure your services and staff, customize your booking page with your branding, and go live in under a day. As a full salon management platform, it includes AI-powered scheduling that optimizes appointments, automated reminders that reduce no-shows, and a 24/7 AI receptionist that handles inquiries even when you\'re busy.',
      faqs: [
        {
          question: 'How long does it take to set up online booking?',
          answer:
            'On a modern platform it takes 1-2 hours: add the services, set the staff schedules, apply your branding and share the link.',
        },
        {
          question: 'Do I need a website to accept online bookings?',
          answer:
            'No. Daisy gives you a booking page you can share as a link, a QR code or a social post. A website helps, but you can start without one.',
        },
        {
          question: 'How much does online booking software cost for salons?',
          answer:
            'Most salon management platforms include it. Daisy starts at $50/month with nothing added per booking, where some platforms charge $1-3 a booking, which mounts up quickly.',
        },
        {
          question: 'Can clients book through Instagram or Google?',
          answer:
            'Yes. Google Reserve lets people book straight from search results, and you can put "Book Now" links on Instagram, Facebook, WhatsApp and anywhere else you post.',
        },
        {
          question: 'Will online booking work with my current website?',
          answer:
            'Yes. Most systems give you an embeddable widget or iframe that works on WordPress, Squarespace, Wix or a custom site.',
        },
        {
          question: 'How do I handle walk-ins alongside online bookings?',
          answer:
            'Daisy handles both. A walk-in goes onto the live calendar immediately and online availability updates with it, so nothing gets double-booked.',
        },
      ],
      metaTitle: 'How to Set Up Online Booking for Your Salon | Complete Guide',
      metaDescription:
        'Step-by-step guide to setting up online salon booking. Configure services, embed on your website, enable Google booking, and start accepting appointments 24/7.',
      keywords: ['salon online booking setup', 'salon appointment scheduling', 'salon booking widget', 'Reserve with Google salon', 'online booking beauty business'],
      relatedGuides: ['reduce-salon-no-shows', 'get-more-salon-clients'],
    },
  ],
  ar: [
    {
      slug: 'reduce-salon-no-shows',
      title: 'كيف أقلل حالات عدم الحضور في صالوني؟',
      answer:
        'قلّل حالات عدم الحضور من خلال تفعيل التذكيرات التلقائية (رسائل نصية + بريد إلكتروني)، واشتراط دفع عربون للخدمات عالية القيمة، واستخدام الذكاء الاصطناعي للتنبؤ بالحجوزات المعرّضة للإلغاء. الصالونات التي تطبّق هذه الاستراتيجيات تشهد انخفاضاً بنسبة 30-40% في حالات عدم الحضور.',
      problemExplained:
        'يكلّف عدم الحضور الصالون المتوسط 67,000 دولار سنوياً من الإيرادات المفقودة (وفقاً لتقديرات القطاع). كل موعد فارغ لا يمثّل خسارة في إيرادات الخدمة فحسب، بل أيضاً هدراً لوقت الموظفين وفرصة ضائعة لخدمة عميل آخر. تتفاقم المشكلة بشكل خاص في الصالونات التي تعتمد على مكالمات التذكير اليدوية أو لا تملك نظام تأكيد أصلاً. تحلّ <a href="/ar/glossary/salon-management-software">برامج إدارة الصالونات</a> الحديثة هذه المشكلة بالأتمتة. تشير الأبحاث إلى أن 23% من المواعيد يتم تفويتها عند عدم إرسال تذكير، وتنخفض النسبة إلى 5-10% مع التذكيرات التلقائية متعددة القنوات.',
      steps: [
        {
          name: 'إعداد تذكيرات المواعيد التلقائية',
          text: 'اضبط تذكيرات عبر الرسائل النصية والبريد الإلكتروني والواتساب قبل 24 ساعة وساعتين من كل موعد. التذكيرات متعددة القنوات أكثر فعالية من القناة الواحدة، وتقلّل عدم الحضور بنسبة تصل إلى 40%.',
        },
        {
          name: 'تطبيق سياسة العربون أو الدفع المسبق',
          text: 'اشترط دفع عربون للخدمات عالية القيمة أو العملاء الجدد. حتى عربون صغير (10-20% من تكلفة الخدمة) يقلّل معدلات عدم الحضور بشكل ملحوظ لأن العملاء يكون لديهم التزام مالي.',
        },
        {
          name: 'وضع سياسة إلغاء واضحة',
          text: 'أنشئ سياسة إلغاء واضحة وأبلغ العملاء بها (مثلاً: يُشترط إشعار مسبق بـ 24 ساعة). اعرضها أثناء الحجز وفي رسائل التأكيد لضبط التوقعات من البداية.',
        },
        {
          name: 'تفعيل إعادة الجدولة عبر الإنترنت',
          text: 'سهّل على العملاء إعادة جدولة مواعيدهم عبر الإنترنت بدلاً من عدم الحضور. عندما تكون إعادة الجدولة سهلة وبلا عوائق، يميل العملاء لتغيير موعدهم بدلاً من تفويته تماماً.',
        },
        {
          name: 'استخدام الذكاء الاصطناعي للتنبؤ بعدم الحضور ومنعه',
          text: 'يمكن للمنصات المدعومة بالذكاء الاصطناعي تحديد المواعيد عالية المخاطر بناءً على سجل العميل وأنماط الحجز والتوقيت. اتخذ إجراءات استباقية للحجوزات المُعلَّمة بتذكيرات إضافية أو اشتراط عربون.',
        },
        {
          name: 'إدارة قائمة انتظار ذكية',
          text: 'عند حدوث إلغاء، يمكن لقائمة الانتظار التلقائية إبلاغ العملاء المهتمين فوراً وملء الفراغ. هذا يحوّل الخسارة إلى تعافٍ ويبقي جدولك ممتلئاً.',
        },
      ],
      howDaisyHelps:
        'تؤتمت ديزي جميع استراتيجيات منع عدم الحضور تلقائياً. بصفتها منصة إدارة صالونات متكاملة، تشمل تذكيرات تلقائية متعددة القنوات (رسائل نصية، بريد إلكتروني، واتساب)، ومتطلبات عربون قابلة للتخصيص، وتنبؤ بالذكاء الاصطناعي للحجوزات المعرّضة للخطر، وإعادة جدولة سهلة عبر الإنترنت، وقائمة انتظار ذكية تملأ الإلغاءات تلقائياً. الصالونات التي تستخدم مجموعة ديزي الكاملة للوقاية تسجّل معدلات عدم حضور أقل من 5%.',
      faqs: [
        {
          question: 'ما هو متوسط معدل عدم الحضور في الصالونات؟',
          answer:
            'بدون أي إجراءات وقائية، يتراوح متوسط معدل عدم الحضور في الصالونات بين 20-30%. مع التذكيرات التلقائية فقط، ينخفض إلى 10-15%. مع استراتيجية وقاية متكاملة (تذكيرات + عربون + ذكاء اصطناعي)، يمكن أن تنخفض المعدلات إلى أقل من 5%.',
        },
        {
          question: 'كم من الإيرادات تخسرها الصالونات بسبب عدم الحضور؟',
          answer:
            'يخسر الصالون المتوسط ما يقدّر بـ 67,000 دولار سنوياً بسبب عدم الحضور، وفقاً لحسابات القطاع. بالنسبة للصالونات المزدحمة متعددة الكراسي، يمكن أن يتجاوز هذا الرقم 100,000 دولار سنوياً.',
        },
        {
          question: 'هل يجب أن أفرض رسوماً على العملاء مقابل عدم الحضور؟',
          answer:
            'فرض رسوم على عدم الحضور أقل فعالية من الوقاية. العربون والدفع المسبق يقلّلان عدم الحضور بشكل استباقي، بينما الرسوم بعد عدم الحضور غالبًا ما تضر بعلاقات العملاء ويصعب تحصيلها.',
        },
        {
          question: 'ما نوع تذكيرات المواعيد الأكثر فعالية؟',
          answer:
            'التذكيرات عبر الرسائل النصية هي الأكثر فعالية (معدل فتح أكثر من 95%)، يليها الواتساب ثم البريد الإلكتروني. إرسال التذكيرات في نقطتين زمنيتين (قبل 24 ساعة وساعتين) هو الأمثل لتقليل عدم الحضور.',
        },
        {
          question: 'هل يمكن للذكاء الاصطناعي فعلاً التنبؤ بعدم حضور عملاء الصالون؟',
          answer:
            'نعم. يحلل الذكاء الاصطناعي سجل الحجوزات وأنماط سلوك العملاء وعلاقات اليوم/الوقت ونوع الخدمة لتحديد المواعيد ذات احتمالية أعلى لعدم الحضور، مما يتيح التدخل الاستباقي.',
        },
        {
          question: 'كيف أملأ الإلغاءات في اللحظة الأخيرة؟',
          answer:
            'أدِر قائمة انتظار ذكية. عند حدوث إلغاء، يُبلغ النظام العملاء المهتمين تلقائياً عبر الرسائل النصية. تملأ قائمة انتظار ديزي الذكية معظم الإلغاءات خلال 30 دقيقة.',
        },
        {
          question: 'هل اشتراط العربون يُنفّر العملاء الجدد؟',
          answer:
            'تُظهر الأبحاث تأثيراً ضئيلاً على معدلات الحجز (انخفاض أقل من 5%) مع تقليل عدم الحضور بنسبة 50-60%. المفتاح هو تحديد مبالغ عربون معقولة (10-20%) والتواصل بوضوح حول السياسة.',
        },
        {
          question: 'ما برنامج إدارة الصالونات الذي يساعد في منع عدم الحضور؟',
          answer:
            'توفر ديزي أشمل مجموعة لمنع عدم الحضور تشمل تذكيرات تلقائية متعددة القنوات، وتنبؤًا بالذكاء الاصطناعي، وعربونًا ذكيًا، وإعادة جدولة سهلة، وإدارة قائمة انتظار تلقائية، وكلها مشمولة في كل خطة.',
        },
      ],
      metaTitle: 'كيف تقلل عدم الحضور في الصالون بنسبة 40% | استراتيجيات مُثبتة',
      metaDescription:
        'تعلّم استراتيجيات مُثبتة لتقليل عدم الحضور في الصالون بنسبة 30-40%. تذكيرات تلقائية، وعربون، وتنبؤ بالذكاء الاصطناعي، وقوائم انتظار ذكية، مع دليل تطبيق خطوة بخطوة.',
      keywords: ['تقليل عدم الحضور في الصالون', 'منع عدم الحضور في الصالون', 'تذكيرات الصالون التلقائية', 'سياسة عربون الصالون', 'إدارة قائمة انتظار الصالون'],
      relatedGuides: ['get-more-salon-clients', 'choose-best-salon-software'],
    },
    {
      slug: 'get-more-salon-clients',
      title: 'كيف أحصل على عملاء أكثر لصالوني؟',
      answer:
        'نمِّ قاعدة عملاء صالونك من خلال مزيج من الظهور في السوق الإلكتروني، وبرامج ولاء الكاشباك، وحملات التسويق التلقائية، وتحسين ملفك التجاري على Google، وأدوات اكتساب العملاء المدعومة بالذكاء الاصطناعي.',
      problemExplained:
        'قطاع التجميل شديد التنافسية، حيث يتنافس الصالون المتوسط مع 8-12 منافساً قريباً على نفس قاعدة العملاء. التسويق التقليدي (المنشورات، الكلام الشفهي) محدود الوصول، بينما التسويق الرقمي يتطلب خبرة يفتقر إليها معظم أصحاب الصالونات. تبلغ تكلفة اكتساب عميل جديد للصالون 25-50 دولاراً في المتوسط عبر الإعلانات المدفوعة. <a href="/ar/glossary/salon-management-software">برنامج إدارة الصالونات</a> المناسب يمنح الملاك قنوات اكتساب قابلة للتوسع وتلقائية تعمل بينما يركزون على تقديم خدمة ممتازة.',
      steps: [
        {
          name: 'تحسين ملفك التجاري على Google',
          text: 'طالب بملكية ملفك التجاري على Google وحسّنه بصور احترافية وساعات عمل دقيقة وقائمة خدمات، وفعّل خاصية "الحجز عبر Google". 46% من جميع عمليات البحث على Google لها طابع محلي.',
        },
        {
          name: 'التسجيل في سوق اكتشاف',
          text: 'انضم إلى سوق تجميل مثل ديزي حيث يبحث العملاء الجدد بنشاط عن خدمات. اكتشاف السوق يجلب عملاء مستعدين للحجز، لا مجرد متصفحين.',
        },
        {
          name: 'إطلاق برنامج ولاء الكاشباك',
          text: 'قدّم <a href="/ar/glossary/cashback-beauty-booking">مكافآت كاشباك على الحجوزات</a> لتحفيز الزيارات الأولى وتكرار العمل. برامج الكاشباك تزيد القيمة العمرية للعميل بنسبة 20-30% مقارنة ببطاقات الولاء التقليدية.',
        },
        {
          name: 'إعداد حملات تسويقية تلقائية',
          text: 'استخدم التسويق المدعوم بالذكاء الاصطناعي لإرسال عروض مستهدفة، ورسائل إعادة تفاعل للعملاء المنقطعين، وعروض أعياد الميلاد، وحوافز الإحالة، وكل ذلك تلقائيًا.',
        },
        {
          name: 'تفعيل الحجز على مدار الساعة',
          text: 'ثبّت موظف استقبال ذكي يرد على المكالمات والرسائل واستفسارات الحجز على مدار الساعة. تفوّت شركات التجميل ما يصل إلى 35% من المكالمات خارج أوقات العمل، وكل مكالمة منها فرصة لعميل محتمل جديد.',
        },
        {
          name: 'جمع التقييمات وعرضها',
          text: 'اطلب التقييمات بنشاط بعد المواعيد. الصالونات التي تمتلك أكثر من 50 تقييماً و4.5+ نجوم تجذب 3 أضعاف الحجوزات الجديدة مقارنة بالتي لا تمتلك. أتمت طلبات التقييم عبر الرسائل النصية بعد كل زيارة.',
        },
      ],
      howDaisyHelps:
        'توفر ديزي منظومة متكاملة لاكتساب العملاء بصفتها منصة إدارة صالونات متكاملة: اكتشاف السوق يجلب عملاء جدداً، والكاشباك يضمن عودتهم، والتسويق بالذكاء الاصطناعي يؤتمت العروض، وموظف الاستقبال الذكي يضمن عدم تفويت أي فرصة. جميع القنوات تعمل معاً لتنمية قاعدة عملائك تلقائيًا.',
      faqs: [
        {
          question: 'كيف تحصل الصالونات على عملاء جدد في 2026؟',
          answer:
            'تكتسب الصالونات الحديثة عملاءها عبر الاكتشاف الرقمي (Google، الأسواق الإلكترونية)، وحوافز الكاشباك، ووسائل التواصل الاجتماعي، والتسويق التلقائي، واستقطاب العملاء بالذكاء الاصطناعي. النهج الأكثر فعالية يجمع بين قنوات متعددة.',
        },
        {
          question: 'كم تكلفة اكتساب عميل جديد للصالون؟',
          answer:
            'عبر الإعلانات المدفوعة، 25-50 دولاراً لكل عميل. عبر اكتشاف السوق العضوي (مثل سوق ديزي بالكاشباك)، تكاليف الاكتساب أقل بكثير لأن العملاء يأتون إليك بدافع الحجز بالفعل.',
        },
        {
          question: 'ما أفضل استراتيجية تسويق للصالون؟',
          answer:
            'أكثر الاستراتيجيات فعالية من حيث التكلفة تجمع بين ظهور السوق (للاكتشاف)، وولاء الكاشباك (للاحتفاظ)، وحملات البريد الإلكتروني والرسائل النصية التلقائية (لإعادة التفاعل)، وتحسين الملف التجاري على Google (للبحث المحلي).',
        },
        {
          question: 'كيف أنافس الصالونات الأكبر في منطقتي؟',
          answer:
            'التكنولوجيا تُكافئ الفرص. صالون صغير مزوّد بحجز ذكي وتسويق تلقائي ومكافآت كاشباك يمكنه تقديم تجربة عملاء أكثر جاذبية من منافس أكبر يعتمد على العمليات اليدوية.',
        },
        {
          question: 'هل التسويق عبر وسائل التواصل الاجتماعي فعّال للصالونات؟',
          answer:
            'وسائل التواصل الاجتماعي ممتازة لبناء العلامة التجارية لكنها تحوّل بمعدلات أقل من قنوات البحث والسوق. استخدم وسائل التواصل للتوعية، لكن استثمر في القنوات التي يبحث فيها العملاء بنشاط عن الحجز.',
        },
        {
          question: 'كيف أجعل العملاء يعودون بعد زيارتهم الأولى؟',
          answer:
            'مكافآت الكاشباك، ورسائل المتابعة التلقائية، وعروض أعياد الميلاد، وحملات إعادة التفاعل. يحدد ذكاء ديزي الاصطناعي العملاء المعرّضين للانقطاع ويُطلق حملات استبقاء مستهدفة.',
        },
      ],
      metaTitle: 'كيف تحصل على عملاء أكثر لصالونك في 2026 | استراتيجيات النمو',
      metaDescription:
        'تعلّم كيف تجذب المزيد من العملاء لصالونك عبر اكتشاف السوق وبرامج الكاشباك والتسويق بالذكاء الاصطناعي والحجز على مدار الساعة. دليل اكتساب العملاء خطوة بخطوة.',
      keywords: ['الحصول على عملاء للصالون', 'اكتساب عملاء الصالون', 'استراتيجيات تسويق الصالون', 'نصائح نمو الصالون', 'تسويق أعمال التجميل'],
      relatedGuides: ['reduce-salon-no-shows', 'choose-best-salon-software'],
    },
    {
      slug: 'choose-best-salon-software',
      title: 'كيف أختار أفضل برنامج لإدارة الصالون؟',
      answer:
        'قيّم برامج إدارة الصالونات بناءً على الميزات الأساسية (الحجز، نقاط البيع، إدارة العملاء)، وأدوات النمو (التسويق، الذكاء الاصطناعي، الكاشباك)، وشفافية التسعير (انتبه لرسوم الموظفين والعمولات)، ودعم منطقة الخليج/العربية إذا لزم الأمر، ودعم ترحيل البيانات.',
      problemExplained:
        'مع وجود أكثر من 50 خياراً من <a href="/ar/glossary/salon-management-software">برامج إدارة الصالونات</a> في السوق، يصبح الاختيار مرهقاً. تعلن العديد من المنصات عن أسعار بدء منخفضة لكنها تضيف رسوماً لكل موظف ورسوم معاملات وعمولات سوق تزيد التكلفة الحقيقية بشكل كبير. تكاليف التبديل مرتفعة بمجرد حبس بياناتك، لذا القرار الأولي مهم جداً. أفضل نهج هو التقييم بناءً على التكلفة الإجمالية للملكية، وقدرات النمو (وليس فقط العمليات)، والمرونة طويلة المدى.',
      steps: [
        {
          name: 'حدد الميزات التي لا غنى عنها',
          text: 'ابدأ بالأساسيات غير القابلة للتفاوض: الحجز عبر الإنترنت، ومعالجة المدفوعات، وإدارة العملاء، وجدولة الموظفين. ثم أضف ميزات النمو: أتمتة التسويق، وقدرات الذكاء الاصطناعي، وأدوات اكتساب العملاء.',
        },
        {
          name: 'احسب التكلفة الإجمالية الحقيقية',
          text: 'انظر إلى ما هو أبعد من السعر الأساسي. أضف رسوم الموظفين ورسوم المعاملات (عادة 2-3%) وعمولات السوق وتكاليف الميزات المتقدمة. خطة بـ 25 دولاراً شهرياً يمكن أن تصبح أكثر من 200 دولار مع التكاليف المخفية.',
        },
        {
          name: 'تحقق من التركيز على النمو مقابل العمليات',
          text: 'أدوات العمليات فقط تساعدك على إدارة ما لديك. منصات النمو (مثل ديزي) تساعدك بنشاط على اكتساب عملاء جدد وزيادة الاحتفاظ ونمو الإيرادات. اختر بناءً على أهداف عملك.',
        },
        {
          name: 'تحقق من دعم اللغة والسوق',
          text: 'إذا كنت تخدم عملاء يتحدثون العربية أو تعمل في منطقة الخليج، تأكد من دعم عربي أصلي (وليس مجرد طبقة ترجمة)، وطرق دفع محلية، وميزات امتثال إقليمية.',
        },
        {
          name: 'قيّم قدرات الذكاء الاصطناعي',
          text: 'يُحدث الذكاء الاصطناعي ثورة في برامج الصالونات. ابحث عن موظف استقبال ذكي، وجدولة ذكية، وتحليلات تنبؤية، وتسويق تلقائي. هذه الميزات يمكن أن توفر أكثر من 10 ساعات أسبوعياً وتزيد الإيرادات.',
        },
        {
          name: 'اختبر عملية الترحيل',
          text: 'قبل الالتزام، اسأل عن ترحيل البيانات من نظامك الحالي. أفضل المنصات تقدم مساعدة مجانية في الترحيل ويمكنها استيراد سجلات عملائك وتاريخ المواعيد وبيانات العمل.',
        },
      ],
      howDaisyHelps:
        'تحقق ديزي كل المعايير: ميزات شاملة، وتسعير ثابت شفاف (بدون رسوم لكل موظف أو رسوم معاملات)، وأدوات نمو مدعومة بالذكاء الاصطناعي، ودعم أصلي بالعربية والإنجليزية، وترحيل بيانات مجاني في خطة الأعمال. اطلع على دليل برامج إدارة الصالونات الكامل للاطلاع على شرح مفصّل، أو ابدأ بتجربة مجانية لمدة 14 يومًا لتجربتها بنفسك.',
      faqs: [
        {
          question: 'ما أفضل برنامج لإدارة الصالونات في 2026؟',
          answer:
            'أفضل برنامج لإدارة الصالونات يعتمد على احتياجاتك. للأعمال المركّزة على النمو التي تريد الذكاء الاصطناعي والكاشباك والعلامة التجارية المخصصة، تتصدر ديزي. للمشغلين ذوي الميزانية المحدودة بكرسي واحد، قد تكفي أدوات أبسط. قيّم دائمًا التكلفة الإجمالية بما فيها الرسوم المخفية.',
        },
        {
          question: 'ما الرسوم المخفية التي يجب الانتباه لها في برامج الصالونات؟',
          answer:
            'الرسوم المخفية الشائعة: رسوم لكل موظف (5-15 دولاراً/موظف/شهرياً)، ورسوم معاملات (2-3% لكل دفعة)، وعمولات سوق (20-30%)، وترقيات ميزات مدفوعة، وتكاليف أجهزة. تفرض ديزي رسماً شهرياً ثابتاً بدون أي من هذه.',
        },
        {
          question: 'هل يجب أن أختار برنامج صالون يتضمن سوقاً؟',
          answer:
            'إذا كان اكتساب العملاء أولوية، نعم. لكن احذر من عمولات السوق (حتى 30% لكل حجز في بعض المنصات). سوق ديزي بدون عمولات، وتحتفظ فيه بـ 100% من إيرادات الحجز.',
        },
        {
          question: 'ما مدى أهمية ميزات الذكاء الاصطناعي في برامج الصالونات؟',
          answer:
            'أهمية متزايدة. موظف الاستقبال الذكي وحده يمكنه استرداد 35% من المكالمات الفائتة. الجدولة الذكية تقلّل الفجوات. التسويق التلقائي يوفر 5-10 ساعات أسبوعياً. الذكاء الاصطناعي هو أكبر عامل تمييز في برامج الصالونات الحديثة.',
        },
        {
          question: 'هل يمكنني تجربة برنامج الصالون قبل الشراء؟',
          answer:
            'معظم المنصات الموثوقة تقدم تجارب مجانية. توفر ديزي تجربة مجانية لمدة 14 يومًا على جميع الخطط بدون بطاقة ائتمان، لتتمكن من تقييم المنصة بالكامل قبل الالتزام.',
        },
        {
          question: 'كيف أنتقل من برنامج الصالون الحالي؟',
          answer:
            'تحقق مما إذا كانت منصتك الحالية تسمح بتصدير البيانات. ثم اختر منصة جديدة تدعم الترحيل. تشمل خطة ديزي للأعمال ترحيلاً مجانياً بمساعدة من أي منصة رئيسية (Fresha، Booksy، Vagaro، إلخ).',
        },
        {
          question: 'هل برامج الصالون المجانية تستحق؟',
          answer:
            'برامج الصالون المجانية عادة تحقق أرباحها من عمولات السوق أو رسوم المعاملات أو الميزات المحدودة. احسب التكلفة الإجمالية؛ فمنصة "مجانية" تفرض عمولة 20% قد تكلّف أكثر من منصة مدفوعة بتسعير ثابت.',
        },
        {
          question: 'ما برنامج الصالون الأفضل للأعمال متعددة الفروع؟',
          answer:
            'الصالونات متعددة الفروع تحتاج إدارة مركزية وتحليلات لكل فرع وعلامة تجارية متسقة. تدعم ديزي ما يصل إلى 4 فروع في خطة الأعمال مع علامة تجارية مخصصة وتقارير موحّدة.',
        },
      ],
      metaTitle: 'كيف تختار أفضل برنامج لإدارة الصالون في 2026 | دليل المشتري',
      metaDescription:
        'دليل خطوة بخطوة لاختيار برنامج إدارة الصالون. قارن الميزات ونماذج التسعير وقدرات الذكاء الاصطناعي والرسوم المخفية. اعثر على المنصة المناسبة لعملك في مجال التجميل.',
      keywords: ['أفضل برنامج صالون', 'مقارنة برامج الصالونات', 'اختيار برنامج صالون', 'تسعير برامج الصالونات', 'دليل برامج أعمال التجميل'],
      relatedGuides: ['reduce-salon-no-shows', 'get-more-salon-clients'],
    },
    {
      slug: 'switch-from-fresha',
      title: 'كيف أنتقل من Fresha إلى منصة أخرى؟',
      answer:
        'انتقل من Fresha عن طريق تصدير بيانات عملائك، واختيار منصة تدعم الترحيل (مثل ترحيل ديزي المجاني)، وإعداد نظامك الجديد بالتوازي، وإبلاغ العملاء بالتغيير بتواصل واضح.',
      problemExplained:
        'دفعت تغييرات أسعار Fresha الأخيرة، بعد إدخال ميزات مدفوعة ورسوم جديدة لمنصة كانت مجانية سابقًا، العديد من أصحاب الصالونات إلى استكشاف بدائل <a href="/ar/glossary/salon-management-software">برامج إدارة الصالونات</a>. لكن التبديل يبدو محفوفًا بالمخاطر بسبب بيانات العملاء وسجل الحجوزات ومنحنى التعلم. المفتاح هو التخطيط: صدّر بياناتك أولًا، وأعدّ المنصة الجديدة بجانب Fresha، وانتقل بسلاسة بمجرد اختبار كل شيء.',
      steps: [
        {
          name: 'تصدير بياناتك من Fresha',
          text: 'حمّل قائمة عملائك وسجل المواعيد والسجلات المالية من Fresha. انتقل إلى الإعدادات > تصدير البيانات للحصول على ملفات CSV. احفظها بأمان؛ فهذا أثمن أصول عملك.',
        },
        {
          name: 'اختيار منصتك الجديدة',
          text: 'قيّم البدائل بناءً على الميزات والتسعير ودعم الترحيل. يغطي دليل برامج إدارة الصالونات لدينا العوامل الرئيسية: هل تقدم ميزات ذكاء اصطناعي لا يوفرها Fresha؟ هل التسعير شفاف؟ هل تدعم سوقك (العربية، الخليج)؟',
        },
        {
          name: 'إعداد المنصة الجديدة بالتوازي',
          text: 'استورد بيانات عملائك واضبط الخدمات والموظفين والإعدادات في النظام الجديد بينما Fresha لا يزال يعمل. هذا يضمن عدم انقطاع الخدمة أثناء الانتقال.',
        },
        {
          name: 'اختبار كل شيء قبل التبديل',
          text: 'احجز مواعيد تجريبية، وعالج مدفوعات تجريبية، وتحقق من عمل التذكيرات، وتأكد من ضبط جميع عمليات الربط (تقويم Google، معالجات الدفع) بشكل صحيح.',
        },
        {
          name: 'إبلاغ العملاء بالتغيير',
          text: 'أرسل بريداً إلكترونياً/رسالة نصية احترافية لجميع العملاء مع رابط الحجز الجديد. ركّز على الفوائد (تجربة أفضل، مكافآت كاشباك، إلخ) بدلاً من مجرد ذكر التغيير.',
        },
        {
          name: 'إلغاء تفعيل Fresha والانطلاق',
          text: 'بمجرد التأكد، ألغِ تفعيل حساب Fresha الخاص بك وأعد توجيه جميع قنوات الحجز إلى منصتك الجديدة. راقب عن كثب خلال أول أسبوعين لاكتشاف أي مشاكل.',
        },
      ],
      howDaisyHelps:
        'تجعل ديزي الانتقال من Fresha سلساً. ترحيل البيانات المجاني (خطة الأعمال) يستورد جميع سجلات عملائك وتاريخهم. تحصل على ميزات لم يقدمها Fresha أبداً: موظف استقبال ذكي، وولاء الكاشباك، وعلامة تجارية مخصصة بالكامل، ودعم العربية. إضافة إلى تسعير ثابت شفاف بدون عمولات سوق.',
      faqs: [
        {
          question: 'هل يمكنني تصدير بياناتي من Fresha؟',
          answer:
            'نعم. يسمح Fresha بتصدير بيانات قوائم العملاء وسجل المواعيد والسجلات المالية عبر ملفات CSV. انتقل إلى الإعدادات > تصدير البيانات في لوحة تحكم Fresha.',
        },
        {
          question: 'ما أفضل بديل لـ Fresha في 2026؟',
          answer:
            'ديزي هي البديل الأفضل لـ Fresha للصالونات التي تريد ميزات الذكاء الاصطناعي وولاء الكاشباك وتسعيراً شفافاً. على عكس هيكل رسوم Fresha المتغير، تقدم ديزي تسعيراً ثابتاً يبدأ من 50 دولاراً شهرياً بدون عمولات.',
        },
        {
          question: 'هل سأخسر عملائي إذا انتقلت من Fresha؟',
          answer:
            'لا. صدّر بيانات عملائك واستوردها في منصتك الجديدة. أرسل بريد انتقال احترافي مع رابط الحجز الجديد. معظم العملاء يتبعون صالونهم، وليس منصة الحجز.',
        },
        {
          question: 'كم من الوقت يستغرق الانتقال من Fresha؟',
          answer:
            'عادة 3-5 أيام للانتقال الكامل. مع ترحيل ديزي المُساعد، يستغرق استيراد البيانات 24-48 ساعة، ويمكنك تشغيل كلا النظامين بالتوازي أثناء الانتقال.',
        },
        {
          question: 'هل لا يزال Fresha مجانياً؟',
          answer:
            'بدأ Fresha بإدخال ميزات مدفوعة ورسوم معاملات ومستويات متقدمة. بينما قد تظل خطة مجانية أساسية موجودة، تحتاج معظم الصالونات لميزات مدفوعة، مما يجعل التكلفة الحقيقية مماثلة أو أعلى من بدائل ذات سعر ثابت مثل ديزي.',
        },
        {
          question: 'ما الميزات التي تمتلكها ديزي ولا يمتلكها Fresha؟',
          answer:
            'تقدم ديزي عدة ميزات لا يوفرها Fresha: موظف الاستقبال الذكي، واكتساب عملاء بالكاشباك، وعلامة تجارية مخصصة بالكامل، ودعم عربي أصلي، وتسعير ثابت شفاف بدون رسوم معاملات أو عمولات سوق.',
        },
      ],
      metaTitle: 'كيف تنتقل من Fresha | دليل الترحيل 2026',
      metaDescription:
        'دليل خطوة بخطوة للانتقال من Fresha إلى منصة صالون أفضل. صدّر البيانات، ورحّل العملاء، وانتقل بسلاسة بدون توقف.',
      keywords: ['الانتقال من Fresha', 'ترحيل بديل Fresha', 'تصدير بيانات Fresha', 'ترحيل برنامج الصالون', 'ترك Fresha'],
      relatedGuides: ['choose-best-salon-software', 'get-more-salon-clients'],
    },
    {
      slug: 'set-up-online-booking-salon',
      title: 'كيف أُعدّ الحجز عبر الإنترنت لصالوني؟',
      answer:
        'أعدّ الحجز عبر الإنترنت باختيار برنامج صالون يتضمن جدولة متكاملة، وضبط خدماتك وتوفر موظفيك، وتضمين أداة الحجز في موقعك الإلكتروني، وتفعيل الحجز عبر Google، والترويج لرابط الحجز عبر جميع القنوات.',
      problemExplained:
        'لا تزال العديد من الصالونات تعتمد على المكالمات الهاتفية والزيارات بدون موعد للحجوزات، مما يفوّت 67% من العملاء الذين يفضلون الحجز عبر الإنترنت. بدون حجز إلكتروني، تخسر الصالونات عملاء لصالح المنافسين الذين يقدمونه، وتفوّت استفسارات خارج أوقات العمل، وتنفق وقت الموظفين على مكالمات يمكن أتمتتها. إعداد الحجز عبر الإنترنت هو من أعلى الاستثمارات عائداً يمكن للصالون القيام بها.',
      steps: [
        {
          name: 'اختيار برنامج حجز الصالون',
          text: 'اختر <a href="/ar/glossary/salon-booking-software">برنامج حجز صالون</a> يتضمن الحجز عبر الإنترنت وإدارة التقويم والتذكيرات التلقائية. تقدم ديزي حجزاً مدعوماً بالذكاء الاصطناعي بدون رسوم معاملات يبدأ من 50 دولاراً شهرياً.',
        },
        {
          name: 'ضبط خدماتك وأسعارك',
          text: 'أضف جميع الخدمات بأوصاف دقيقة ومدد وأسعار. صنّفها في فئات (شعر، أظافر، بشرة، إلخ) لسهولة التصفح.',
        },
        {
          name: 'إعداد توفر الموظفين',
          text: 'اضبط ساعات عمل كل موظف وأوقات الاستراحة وقدرات الخدمة. سيعرض النظام فقط الفترات المتاحة للعملاء.',
        },
        {
          name: 'تخصيص صفحة الحجز',
          text: 'أضف شعارك وألوان علامتك التجارية وصورك. مع ميزة العلامة التجارية المخصصة من ديزي، تبدو صفحة حجزك كموقعك الخاص، وليس منصة طرف ثالث.',
        },
        {
          name: 'إضافة الحجز لموقعك ووسائل التواصل',
          text: 'ضمّن أداة الحجز في موقعك الإلكتروني، وأضف زر "احجز الآن" إلى إنستغرام وفيسبوك، وفعّل الحجز عبر Google للحجز المباشر من نتائج البحث.',
        },
        {
          name: 'إعداد سياسات الدفع والإلغاء',
          text: 'اضبط ما إذا كنت تريد اشتراط عربون أو تفعيل الدفع المسبق أو تحديد سياسة الإلغاء. هذه الإعدادات تقلّل عدم الحضور بشكل ملحوظ.',
        },
      ],
      howDaisyHelps:
        'تجعل ديزي إعداد الحجز عبر الإنترنت سهلاً: اضبط خدماتك وموظفيك، وخصّص صفحة الحجز بعلامتك التجارية، وانطلق في أقل من يوم. بصفتها منصة إدارة صالونات متكاملة، تشمل جدولة مدعومة بالذكاء الاصطناعي تُحسّن المواعيد، وتذكيرات تلقائية تقلّل عدم الحضور، وموظف استقبال ذكي يعمل على مدار الساعة يتعامل مع الاستفسارات حتى عندما تكون مشغولاً.',
      faqs: [
        {
          question: 'كم من الوقت يستغرق إعداد الحجز عبر الإنترنت؟',
          answer:
            'مع منصات حديثة مثل ديزي، يمكنك إعداد الحجز عبر الإنترنت خلال 1-2 ساعة. أضف خدماتك، واضبط جداول الموظفين، وخصّص العلامة التجارية، وشارك رابط الحجز.',
        },
        {
          question: 'هل أحتاج موقعاً إلكترونياً لقبول الحجوزات عبر الإنترنت؟',
          answer:
            'لا. توفر ديزي صفحة حجز مستقلة يمكنك مشاركتها مباشرة عبر رابط أو رمز QR أو وسائل التواصل الاجتماعي. امتلاك موقع يساعد، لكنه ليس مطلوباً.',
        },
        {
          question: 'كم تكلفة برنامج الحجز عبر الإنترنت للصالونات؟',
          answer:
            'الحجز عبر الإنترنت مشمول في معظم منصات إدارة الصالونات. تبدأ ديزي من 50 دولاراً شهرياً بدون رسوم حجز إضافية. بعض المنصات تفرض رسوماً لكل حجز بقيمة 1-3 دولارات، وهي تتراكم بسرعة.',
        },
        {
          question: 'هل يمكن للعملاء الحجز عبر إنستغرام أو Google؟',
          answer:
            'نعم. تتكامل ديزي مع خدمة الحجز عبر Google للحجز المباشر من نتائج البحث، ويمكنك إضافة روابط "احجز الآن" إلى إنستغرام وفيسبوك والواتساب وأي منصة تواصل اجتماعي.',
        },
        {
          question: 'هل سيعمل الحجز عبر الإنترنت مع موقعي الحالي؟',
          answer:
            'نعم. معظم أنظمة حجز الصالونات توفر أداة قابلة للتضمين أو iframe تعمل مع أي منصة مواقع (WordPress، Squarespace، Wix، مواقع مخصصة، إلخ).',
        },
        {
          question: 'كيف أتعامل مع الزيارات بدون موعد إلى جانب الحجوزات الإلكترونية؟',
          answer:
            'تدير ديزي كلاهما بسلاسة. تُضاف الزيارات بدون موعد إلى التقويم الحي فوراً، ويتحدث التوفر عبر الإنترنت بالوقت الفعلي. لا خطر حجز مزدوج.',
        },
      ],
      metaTitle: 'كيف تُعدّ الحجز عبر الإنترنت لصالونك | الدليل الشامل',
      metaDescription:
        'دليل خطوة بخطوة لإعداد الحجز الإلكتروني للصالون. اضبط الخدمات، وضمّن الأداة في موقعك، وفعّل الحجز عبر Google، وابدأ بقبول المواعيد على مدار الساعة.',
      keywords: ['إعداد حجز الصالون عبر الإنترنت', 'جدولة مواعيد الصالون', 'أداة حجز الصالون', 'الحجز عبر Google للصالون', 'الحجز الإلكتروني لأعمال التجميل'],
      relatedGuides: ['reduce-salon-no-shows', 'get-more-salon-clients'],
    },
  ],
};

// Backward compatibility exports
export const guideEntries = guideData.en;

export function getGuide(slug: string): GuideData | undefined {
  return guideData.en.find((entry) => entry.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guideData.en.map((entry) => entry.slug);
}

/** Sitemap-friendly view: slug + optional per-entry lastUpdated. */
export function getGuideSitemapData(): { slug: string; lastUpdated?: string }[] {
  return guideData.en.map(({ slug, lastUpdated }) => ({ slug, lastUpdated }));
}
