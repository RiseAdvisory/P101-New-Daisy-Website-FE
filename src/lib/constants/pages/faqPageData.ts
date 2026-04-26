// src/lib/constants/pages/faqPageData.ts
import { I18nContent } from '../i18n';

export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  questions: FaqQuestion[];
}

export interface FaqPersonaContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  categories: FaqCategory[];
}

export interface FaqPageData {
  business: FaqPersonaContent;
  customer: FaqPersonaContent;
  professional: FaqPersonaContent;
}

export type FaqPersona = 'business' | 'customer' | 'professional';

export const VALID_FAQ_PERSONAS: FaqPersona[] = ['business', 'customer', 'professional'];

export const faqPageData: I18nContent<FaqPageData> = {
  en: {
    business: {
      heroTitle: 'FAQ',
      heroSubtitle: 'Frequently Asked Questions for Business Owners',
      heroDescription: 'Everything you need to know about running your beauty business on The Daisy.',
      categories: [
        {
          title: 'Getting Started & Onboarding',
          questions: [
            { question: 'What is The Daisy?', answer: 'The Daisy is an all-in-one platform for beauty businesses. It combines AI-powered customer service, appointment booking, payments, marketing, and team management into a single system — replacing the 5+ separate tools most salons use today.' },
            { question: 'Who is The Daisy designed for?', answer: 'Salons, spas, clinics, and independent beauty professionals of any size. Whether you operate a single chair or manage multiple locations, the platform scales to fit your business.' },
            { question: 'How do I sign up?', answer: 'Download The Daisy app from the App Store or Google Play and create your business account. The setup wizard walks you through adding your services, team, and availability. Most businesses are live within a day.' },
            { question: 'What does onboarding include?', answer: 'Our onboarding team helps you configure your service menu, import client data from your previous system, set up your AI receptionist, and train your staff on the platform — all at no extra cost.' },
            { question: 'Is there a free trial?', answer: 'Yes. Every business gets a 14-day free trial with full access to all features. No credit card required. You can cancel anytime during the trial with no charges.' },
            { question: 'What do I need to get started?', answer: 'A smartphone or tablet, your service menu with pricing, and your team\'s availability. That\'s it. No special hardware, no installation fees, no long-term contracts.' },
          ],
        },
        {
          title: 'Pricing & Plans',
          questions: [
            { question: 'How much does it cost?', answer: 'Start with a 14-day free trial: full access, no credit card required. After that, flexible plans start from $50/month. You only pay commission on new customers who find you through the Daisy marketplace. Your existing clients, zero commission.' },
            { question: 'What is included in the subscription?', answer: 'Every plan includes online booking, AI receptionist, calendar management, client database, payment processing, team scheduling, and basic analytics. Higher tiers add advanced marketing tools, multi-location management, and priority support.' },
            { question: 'Are there any hidden fees?', answer: 'No. Your subscription fee and marketplace commission (on new clients only) are the only costs. Payment processing fees are standard industry rates and transparently displayed before you sign up.' },
            { question: 'Can I change my plan later?', answer: 'Yes. Upgrade or downgrade anytime from your account settings. Changes take effect at the start of your next billing cycle. No penalties for switching.' },
            { question: 'Is there a contract or lock-in period?', answer: 'No. All plans are month-to-month. You can cancel anytime with no cancellation fees. Your data remains accessible for 30 days after cancellation.' },
            { question: 'Do I pay commission on my existing clients?', answer: 'No. Commission is only charged on new clients who discover and book you through the Daisy marketplace. Clients you bring to the platform yourself are commission-free, always.' },
          ],
        },
        {
          title: 'AI Receptionist & Automation',
          questions: [
            { question: 'How does the AI receptionist work?', answer: 'The AI handles your WhatsApp and Instagram messages 24/7: answering customer questions, checking availability, booking appointments, and processing payments. It learns your services, pricing, and preferences over time to give your customers a personalized experience.' },
            { question: 'What messaging channels does the AI handle?', answer: 'Currently WhatsApp and Instagram DMs, with more channels coming soon. The AI responds instantly in Arabic and English, matching your customers\' preferred language.' },
            { question: 'Can I customise what the AI says?', answer: 'Yes. You set the tone, the information it shares, and the boundaries of what it can handle. For example, you can instruct it to always offer a specific promotion or to escalate certain requests to a human.' },
            { question: 'What happens if the AI cannot answer a question?', answer: 'It seamlessly hands the conversation to you or a team member via an in-app notification. The customer never experiences a dead end — the handoff is instant and includes the full conversation context.' },
            { question: 'Does the AI improve over time?', answer: 'Yes. The more interactions it handles, the better it understands your business. It learns your most common questions, preferred responses, and customer patterns to provide increasingly accurate and helpful replies.' },
            { question: 'Can I turn off the AI and handle messages myself?', answer: 'Absolutely. You can disable AI responses for any channel at any time and handle messages manually. Many businesses use the AI for after-hours and weekends while managing conversations personally during business hours.' },
          ],
        },
        {
          title: 'Booking & Calendar',
          questions: [
            { question: 'How does online booking work?', answer: 'Customers book through your personalised booking page, the Daisy marketplace, or directly via WhatsApp and Instagram. Appointments sync to your calendar in real time. You control your availability, buffer times, and booking rules.' },
            { question: 'Can I sync with Google Calendar?', answer: 'Yes. Two-way sync with Google Calendar means your Daisy appointments appear in Google and your Google events block availability in Daisy. No double bookings.' },
            { question: 'How do you handle no-shows?', answer: 'You can require deposits at booking, send automated reminders (WhatsApp, SMS, or email) at intervals you choose, and set a cancellation policy with automatic enforcement. Businesses using these features report up to 60% fewer no-shows.' },
            { question: 'Can customers book multiple services in one visit?', answer: 'Yes. Customers can bundle services into a single appointment. The system automatically calculates the total duration and price, and schedules the right team members for each service.' },
            { question: 'Do you support recurring appointments?', answer: 'Yes. Customers and staff can set up recurring bookings (weekly, biweekly, monthly) that auto-populate the calendar. Recurring clients get priority scheduling and automated reminders.' },
            { question: 'How does the waitlist work?', answer: 'When a time slot is full, customers can join the waitlist. If a cancellation opens up, the system automatically notifies waitlisted customers and fills the slot — no manual work required.' },
          ],
        },
        {
          title: 'Payments & Commission',
          questions: [
            { question: 'How does commission work?', answer: 'Commission is only charged on new clients who find and book you through the Daisy marketplace. Your existing clients and direct bookings are always commission-free. The commission rate is transparent and fixed — no surprises.' },
            { question: 'What payment methods can my customers use?', answer: 'Credit and debit cards, Apple Pay, Google Pay, and in-app wallet balance (from cashback). Customers can also pay in person using your existing POS. All digital payments are processed securely through our payment partner.' },
            { question: 'When do I get paid?', answer: 'Payouts are processed weekly and deposited directly to your bank account. You can track all transactions, pending payouts, and completed deposits in real time from your dashboard.' },
            { question: 'What are the payment processing fees?', answer: 'Standard industry processing fees apply (typically 2.5-2.9% + fixed fee per transaction). These are clearly displayed in your dashboard. No hidden charges.' },
            { question: 'Can customers tip through the app?', answer: 'Yes. After each appointment, customers can add a tip directly in the app. Tips are included in your regular payout with no additional processing fees.' },
            { question: 'Do you provide invoices and receipts?', answer: 'Yes. Receipts are automatically sent to customers after each appointment. You can generate invoices for corporate clients and download financial reports for your accountant at any time.' },
          ],
        },
        {
          title: 'Switching from Another Platform',
          questions: [
            { question: 'Can I migrate from my current booking system?', answer: 'Yes. Our onboarding team helps you migrate your client data, booking history, and preferences at no extra cost.' },
            { question: 'How long does migration take?', answer: 'Most migrations are completed within 3-5 business days. Simple migrations (client list and service menu) can be done in a single day. Complex migrations (full booking history, loyalty points, package balances) may take up to a week.' },
            { question: 'Will I lose my client data?', answer: 'No. We transfer your client contact information, appointment history, preferences, and notes. Your clients\' experience is seamless — they simply start booking through your new Daisy page.' },
            { question: 'Can I run both systems in parallel during the transition?', answer: 'Yes. We recommend a 1-2 week overlap period where both systems are active. This gives your team time to get comfortable with Daisy before fully switching over.' },
            { question: 'Do my clients need to create new accounts?', answer: 'No. When clients book through your Daisy page for the first time, their account is created automatically. They do not need to re-enter information that was migrated from your previous system.' },
            { question: 'What if I am currently in a contract with another provider?', answer: 'You can start your Daisy free trial while still under contract elsewhere. Many businesses use the trial period to set up and test the platform, then switch fully once their existing contract ends.' },
          ],
        },
      ],
    },
    customer: {
      heroTitle: 'FAQ',
      heroSubtitle: 'Frequently Asked Questions for Customers',
      heroDescription: 'Everything you need to know about booking beauty services and earning cashback with The Daisy.',
      categories: [
        {
          title: 'Getting Started',
          questions: [
            { question: 'What is The Daisy?', answer: 'The Daisy is a beauty booking app that lets you discover, book, and pay for salon, spa, and clinic services — all in one place. You earn cashback on every booking and can manage all your appointments from your phone.' },
            { question: 'How do I sign up?', answer: 'Download The Daisy app from the App Store or Google Play and create an account with your email or phone number. It takes less than a minute.' },
            { question: 'How do I find beauty services near me?', answer: 'Open the app and browse by category (hair, nails, skincare, spa, etc.) or search for a specific service. The app shows providers near your location with ratings, reviews, pricing, and available time slots.' },
            { question: 'Is The Daisy available as a website or only as an app?', answer: 'You can browse services and book on the web, but the full experience — including cashback wallet, appointment management, and push notifications — is available in the mobile app.' },
            { question: 'What languages does the app support?', answer: 'The app is fully available in English and Arabic, including all booking flows, notifications, and customer support.' },
            { question: 'Is The Daisy free to use?', answer: 'Yes. The Daisy is completely free for customers. There are no subscription fees, booking fees, or hidden charges. You simply pay for the services you book.' },
          ],
        },
        {
          title: 'Booking & Appointments',
          questions: [
            { question: 'How do I book an appointment?', answer: 'Find a provider, choose a service, pick a date and time, and confirm. You can also book directly through a provider\'s WhatsApp or Instagram using the AI assistant.' },
            { question: 'Can I cancel or reschedule a booking?', answer: 'Yes. You can cancel or reschedule from the app. Each provider sets their own cancellation policy — some allow free cancellation up to 24 hours before, while others may require a deposit that is non-refundable within a certain window.' },
            { question: 'How do I know my booking is confirmed?', answer: 'You receive an instant confirmation in the app and via WhatsApp or email. You also get reminders before your appointment — typically 48 hours and 2 hours before.' },
            { question: 'Can I book for someone else?', answer: 'Yes. You can book services for friends or family members. Just add their details when completing the booking.' },
            { question: 'Can I book multiple services at once?', answer: 'Yes. You can bundle multiple services (for example, haircut + colour + blowdry) into a single appointment. The total price and duration are calculated automatically.' },
            { question: 'What if I need to contact the salon before my appointment?', answer: 'You can message the salon directly through the app. Many salons also have an AI assistant that can answer common questions instantly, 24/7.' },
          ],
        },
        {
          title: 'Cashback & Rewards',
          questions: [
            { question: 'How does cashback work?', answer: 'Every time you book and complete a service through The Daisy, a percentage of what you pay is credited back to your Daisy wallet as cashback. The exact percentage varies by provider and promotion.' },
            { question: 'How much cashback do I earn?', answer: 'Cashback rates vary by provider and service, typically ranging from 3% to 15%. Some providers run special promotions with higher cashback rates. The cashback amount is always shown before you confirm your booking.' },
            { question: 'How do I use my cashback?', answer: 'Your cashback balance is stored in your Daisy wallet. You can apply it as a discount on any future booking — partially or in full. It works like store credit that never expires.' },
            { question: 'Does cashback expire?', answer: 'No. Your cashback balance does not expire as long as your account is active.' },
            { question: 'Can I check my cashback balance?', answer: 'Yes. Your current balance is always visible in the wallet section of the app. You can also view a full history of cashback earned and redeemed.' },
            { question: 'Is there a referral programme?', answer: 'Yes. When you refer a friend and they complete their first booking, both of you earn bonus cashback. The referral reward amount is displayed in the app\'s referral section.' },
          ],
        },
        {
          title: 'Payments & Refunds',
          questions: [
            { question: 'What payment methods are accepted?', answer: 'Credit and debit cards, Apple Pay, Google Pay, and your Daisy wallet balance. You can also pay in person at the salon if the provider supports it.' },
            { question: 'Is my payment information secure?', answer: 'Yes. All payments are processed through PCI-compliant payment providers. Your card details are encrypted and never stored on our servers.' },
            { question: 'How do refunds work?', answer: 'Refunds follow the cancellation policy set by each provider. If you are eligible for a refund, it is processed to your original payment method within 5-10 business days, or instantly to your Daisy wallet.' },
            { question: 'What happens if a payment fails?', answer: 'If a payment fails, your booking is not confirmed. You will be prompted to try again with the same or a different payment method. No charge is made unless the payment is successful.' },
            { question: 'Do I get a receipt?', answer: 'Yes. A digital receipt is sent to your email and saved in the app after every completed appointment.' },
            { question: 'Can I pay in a different currency?', answer: 'Payments are processed in the local currency of the service provider. If your card is in a different currency, your bank\'s standard exchange rate applies.' },
          ],
        },
        {
          title: 'Account & Profile',
          questions: [
            { question: 'How do I update my profile?', answer: 'Go to your profile in the app to update your name, phone number, email, profile photo, and beauty preferences. Changes are saved instantly.' },
            { question: 'Can I save my favourite providers?', answer: 'Yes. Tap the heart icon on any provider to save them to your favourites list for quick rebooking.' },
            { question: 'How do I view my booking history?', answer: 'Your complete booking history — past and upcoming — is available in the appointments section of the app, including receipts and provider details.' },
            { question: 'How do I manage notifications?', answer: 'Go to Settings > Notifications in the app to control which alerts you receive (booking confirmations, reminders, promotions, cashback updates). You can choose between push notifications, WhatsApp, email, or SMS.' },
            { question: 'Is my personal data protected?', answer: 'Yes. We comply with data protection regulations and never sell your personal information. You can review our full privacy policy in the app or on our website.' },
            { question: 'How do I delete my account?', answer: 'Go to Settings > Account > Delete Account. Your data will be permanently removed within 30 days. Any remaining cashback balance will be forfeited upon deletion.' },
          ],
        },
      ],
    },
    professional: {
      heroTitle: 'FAQ',
      heroSubtitle: 'Frequently Asked Questions for Professionals',
      heroDescription: 'Everything you need to know about building your career on The Daisy.',
      categories: [
        {
          title: 'Getting Started',
          questions: [
            { question: 'What is The Daisy for beauty professionals?', answer: 'The Daisy gives beauty professionals their own booking page, AI-powered customer service, payment processing, and visibility in a marketplace of customers actively looking for services — whether you work at a salon, freelance, or run your own business.' },
            { question: 'Who can join as a professional?', answer: 'Hairstylists, nail technicians, aestheticians, makeup artists, beauty therapists, barbers, spa therapists, and any licensed beauty or wellness professional. Freelance, salon-based, and mobile service providers are all welcome.' },
            { question: 'Do I need to work at a salon to join?', answer: 'No. Freelance professionals, independent stylists, mobile service providers, and salon-based professionals are all welcome.' },
            { question: 'How do I sign up?', answer: 'Download The Daisy app, select "Professional" during registration, and complete your profile with your services, pricing, availability, and portfolio photos. Verification typically takes 24-48 hours.' },
            { question: 'Is there a verification process?', answer: 'Yes. We verify your professional credentials and portfolio to maintain quality standards on the platform. This protects both you and your future clients.' },
            { question: 'Is it free to join?', answer: 'Yes. Joining is free. Commission is only charged on new clients who book you through the Daisy marketplace — your existing clients pay zero commission. Premium features are available through affordable subscription tiers.' },
          ],
        },
        {
          title: 'Earnings & Payments',
          questions: [
            { question: 'Is there a fee or commission?', answer: 'Joining is free. Commission is only charged on new clients who book you through the Daisy marketplace, your existing clients pay zero commission. Premium features available through affordable subscription tiers.' },
            { question: 'When and how do I get paid?', answer: 'Your earnings are tracked in real-time in the app. Payments are processed securely and deposited to your bank account weekly. You can see exactly what you earned from each appointment.' },
            { question: 'Can I track my earnings in real time?', answer: 'Yes. Your dashboard shows daily, weekly, and monthly earnings breakdowns, including tips, commission deductions, and pending payouts.' },
            { question: 'What payment methods do my clients use?', answer: 'Clients can pay via credit/debit cards, Apple Pay, Google Pay, or their Daisy wallet balance. You receive all payments through your weekly payout regardless of how the client paid.' },
            { question: 'Do I receive tips through the app?', answer: 'Yes. Clients can add tips after appointments. Tips are included in your regular weekly payout with no additional fees deducted.' },
            { question: 'Can I get a tax summary of my earnings?', answer: 'Yes. The app generates downloadable earnings reports that you can share with your accountant. Reports include gross earnings, commission, tips, and net payouts.' },
          ],
        },
        {
          title: 'Scheduling & Availability',
          questions: [
            { question: 'How do I set my availability?', answer: 'Set your working hours for each day of the week in your profile settings. You can also block specific dates for holidays or personal time. Changes take effect immediately.' },
            { question: 'Can I manage my own calendar?', answer: 'Yes. You have full control over your calendar. Set working hours, add buffer time between appointments, block personal time, and manage recurring schedules — all from the app.' },
            { question: 'Can I block time off for holidays or breaks?', answer: 'Yes. Block any date range from your calendar. Existing bookings during that period will be flagged so you can reschedule them before the time off begins.' },
            { question: 'Do you support recurring schedules?', answer: 'Yes. Set up a repeating weekly schedule and the platform automatically applies it. You can override individual days as needed without changing your overall pattern.' },
            { question: 'What time zones does the platform support?', answer: 'The platform automatically adjusts for your local time zone based on your location settings. All appointment times are displayed in your local time.' },
            { question: 'How do cancellations work for professionals?', answer: 'You set your own cancellation policy (free cancellation window, deposit requirements). The platform enforces it automatically. If a client cancels within the penalty window, you retain the deposit.' },
          ],
        },
        {
          title: 'Profile & Visibility',
          questions: [
            { question: 'How do customers find my profile?', answer: 'Your profile appears in the Daisy marketplace when customers search for beauty services in your area. The more complete your profile, the higher your visibility.' },
            { question: 'How can I improve my visibility?', answer: 'Complete your full profile, add high-quality portfolio photos, collect client reviews, respond quickly to messages, and maintain a high booking completion rate. The algorithm rewards active, reliable professionals.' },
            { question: 'Can clients leave reviews?', answer: 'Yes. After each completed appointment, clients can leave a rating and written review. Positive reviews boost your visibility and help attract new clients.' },
            { question: 'Can I showcase my portfolio?', answer: 'Yes. Upload photos of your work to your profile. Before-and-after images, service examples, and your workspace environment help clients choose you with confidence.' },
            { question: 'Can I list my specialisations?', answer: 'Yes. Tag your profile with your specialisations (e.g., balayage, bridal makeup, keratin treatments). This helps you appear in targeted searches from clients looking for specific expertise.' },
            { question: 'How does ranking work in the marketplace?', answer: 'Ranking is based on a combination of factors: profile completeness, response time, booking completion rate, client reviews, and overall activity. There is no paid placement — visibility is earned through quality and reliability.' },
          ],
        },
        {
          title: 'Going Independent',
          questions: [
            { question: 'Does The Daisy support freelance professionals?', answer: 'Yes. The Daisy is designed for both salon-based and independent professionals. Freelancers get the same booking, payment, and AI tools — plus marketplace visibility to attract new clients without salon overhead.' },
            { question: 'What tools does The Daisy provide for independent professionals?', answer: 'Your own booking page, AI receptionist for WhatsApp and Instagram, payment processing, calendar management, client database, automated reminders, and marketplace visibility. Everything you need to run a solo practice.' },
            { question: 'How should I price my services?', answer: 'Research comparable services in your area, factor in your experience and specialisations, and set competitive prices in your profile. You can adjust pricing anytime and run promotions to attract new clients.' },
            { question: 'How do I build a client base from scratch?', answer: 'Complete your profile, add portfolio photos, set competitive pricing, and the marketplace will start showing you to nearby customers. Encourage early clients to leave reviews — social proof is the fastest way to grow on the platform.' },
            { question: 'Do I need my own insurance?', answer: 'We strongly recommend professional liability insurance for all independent professionals. The Daisy does not provide insurance coverage — you are responsible for your own professional indemnity and public liability insurance.' },
            { question: 'Can I transition from salon employment to freelance on The Daisy?', answer: 'Yes. Many professionals start by creating their profile while still employed at a salon, then gradually transition as they build their independent client base. The platform supports this gradual shift.' },
          ],
        },
      ],
    },
  },
  ar: {
    business: {
      heroTitle: 'الأسئلة الشائعة',
      heroSubtitle: 'الأسئلة الشائعة لأصحاب الأعمال',
      heroDescription: 'كل ما تحتاج معرفته حول إدارة أعمال التجميل الخاصة بك على ديزي.',
      categories: [
        {
          title: 'البدء والتسجيل',
          questions: [
            { question: 'ما هو ديزي؟', answer: 'ديزي هو منصة شاملة لأعمال التجميل. يجمع بين خدمة العملاء المدعومة بالذكاء الاصطناعي، وحجز المواعيد، والمدفوعات، والتسويق، وإدارة الفريق في نظام واحد — ليحل محل الأدوات المتعددة التي تستخدمها معظم الصالونات اليوم.' },
            { question: 'لمن صُمم ديزي؟', answer: 'الصالونات والمنتجعات الصحية والعيادات ومتخصصي التجميل المستقلين من أي حجم. سواء كنت تدير كرسياً واحداً أو عدة فروع، المنصة تتكيف مع حجم عملك.' },
            { question: 'كيف أسجل؟', answer: 'حمّل تطبيق ديزي من متجر التطبيقات أو جوجل بلاي وأنشئ حساب عملك. معالج الإعداد يرشدك خلال إضافة خدماتك وفريقك ومواعيد توفرك. معظم الأعمال تبدأ العمل خلال يوم واحد.' },
            { question: 'ماذا يشمل التسجيل؟', answer: 'يساعدك فريق التسجيل في إعداد قائمة خدماتك، واستيراد بيانات العملاء من نظامك السابق، وإعداد موظف الاستقبال الذكي، وتدريب فريقك على المنصة — كل ذلك بدون تكلفة إضافية.' },
            { question: 'هل هناك فترة تجريبية مجانية؟', answer: 'نعم. كل عمل يحصل على فترة تجريبية مجانية لمدة 14 يوماً مع وصول كامل لجميع الميزات. لا حاجة لبطاقة ائتمان. يمكنك الإلغاء في أي وقت خلال الفترة التجريبية بدون أي رسوم.' },
            { question: 'ما الذي أحتاجه للبدء؟', answer: 'هاتف ذكي أو جهاز لوحي، قائمة خدماتك مع الأسعار، ومواعيد توفر فريقك. هذا كل شيء. لا حاجة لأجهزة خاصة أو رسوم تثبيت أو عقود طويلة الأجل.' },
          ],
        },
        {
          title: 'الأسعار والباقات',
          questions: [
            { question: 'كم تكلفة الاشتراك؟', answer: 'ابدأ بفترة تجريبية مجانية لمدة 14 يوماً: وصول كامل، بدون بطاقة ائتمان. بعد ذلك، تبدأ الباقات المرنة من 50 دولار/شهرياً. تدفع عمولة فقط على العملاء الجدد الذين يجدونك عبر سوق ديزي. عملاؤك الحاليون، بدون عمولة.' },
            { question: 'ما المشمول في الاشتراك؟', answer: 'كل باقة تشمل الحجز عبر الإنترنت، وموظف الاستقبال الذكي، وإدارة التقويم، وقاعدة بيانات العملاء، ومعالجة المدفوعات، وجدولة الفريق، والتحليلات الأساسية. الباقات الأعلى تضيف أدوات تسويق متقدمة وإدارة مواقع متعددة ودعم أولوية.' },
            { question: 'هل هناك رسوم مخفية؟', answer: 'لا. رسوم اشتراكك وعمولة السوق (على العملاء الجدد فقط) هي التكاليف الوحيدة. رسوم معالجة المدفوعات هي الأسعار القياسية في الصناعة ويتم عرضها بشفافية قبل التسجيل.' },
            { question: 'هل يمكنني تغيير باقتي لاحقاً؟', answer: 'نعم. قم بالترقية أو التخفيض في أي وقت من إعدادات حسابك. التغييرات تسري في بداية دورة الفوترة التالية. لا عقوبات للتبديل.' },
            { question: 'هل هناك عقد أو فترة التزام؟', answer: 'لا. جميع الباقات شهرية. يمكنك الإلغاء في أي وقت بدون رسوم إلغاء. بياناتك تبقى متاحة لمدة 30 يوماً بعد الإلغاء.' },
            { question: 'هل أدفع عمولة على عملائي الحاليين؟', answer: 'لا. العمولة تُفرض فقط على العملاء الجدد الذين يكتشفونك ويحجزون عبر سوق ديزي. العملاء الذين تجلبهم بنفسك إلى المنصة بدون عمولة، دائمًا.' },
          ],
        },
        {
          title: 'موظف الاستقبال الذكي والأتمتة',
          questions: [
            { question: 'كيف يعمل موظف الاستقبال الذكي؟', answer: 'يتعامل الذكاء الاصطناعي مع رسائل واتساب وإنستغرام على مدار الساعة: الإجابة على أسئلة العملاء، والتحقق من التوفر، وحجز المواعيد، ومعالجة المدفوعات. يتعلم خدماتك وأسعارك وتفضيلاتك مع مرور الوقت لتقديم تجربة شخصية لعملائك.' },
            { question: 'ما قنوات المراسلة التي يتعامل معها الذكاء الاصطناعي؟', answer: 'حالياً واتساب ورسائل إنستغرام المباشرة، مع المزيد من القنوات قريباً. يستجيب الذكاء الاصطناعي فوراً بالعربية والإنجليزية، مطابقاً للغة المفضلة لعملائك.' },
            { question: 'هل يمكنني تخصيص ما يقوله الذكاء الاصطناعي؟', answer: 'نعم. أنت تحدد النبرة والمعلومات التي يشاركها وحدود ما يمكنه التعامل معه. على سبيل المثال، يمكنك توجيهه لتقديم عرض ترويجي معين دائمًا أو تصعيد طلبات معينة إلى شخص حقيقي.' },
            { question: 'ماذا يحدث إذا لم يستطع الذكاء الاصطناعي الإجابة على سؤال؟', answer: 'ينقل المحادثة بسلاسة إليك أو إلى أحد أعضاء فريقك عبر إشعار في التطبيق. العميل لا يواجه أبداً طريقاً مسدوداً — التحويل فوري ويتضمن سياق المحادثة الكامل.' },
            { question: 'هل يتحسن الذكاء الاصطناعي مع الوقت؟', answer: 'نعم. كلما زادت التفاعلات التي يتعامل معها، كلما فهم عملك بشكل أفضل. يتعلم أكثر أسئلتك شيوعاً وردودك المفضلة وأنماط عملائك لتقديم ردود أكثر دقة وفائدة.' },
            { question: 'هل يمكنني إيقاف الذكاء الاصطناعي والتعامل مع الرسائل بنفسي؟', answer: 'بالتأكيد. يمكنك تعطيل ردود الذكاء الاصطناعي لأي قناة في أي وقت والتعامل مع الرسائل يدوياً. العديد من الأعمال تستخدم الذكاء الاصطناعي لما بعد ساعات العمل وعطلات نهاية الأسبوع بينما تدير المحادثات شخصياً خلال ساعات العمل.' },
          ],
        },
        {
          title: 'الحجز والتقويم',
          questions: [
            { question: 'كيف يعمل الحجز عبر الإنترنت؟', answer: 'يحجز العملاء من خلال صفحة الحجز المخصصة لك، أو سوق ديزي، أو مباشرة عبر واتساب وإنستغرام. المواعيد تتزامن مع تقويمك في الوقت الفعلي. أنت تتحكم في توفرك وأوقات الاستراحة وقواعد الحجز.' },
            { question: 'هل يمكنني المزامنة مع تقويم جوجل؟', answer: 'نعم. المزامنة ثنائية الاتجاه مع تقويم جوجل تعني أن مواعيد ديزي تظهر في جوجل وأحداث جوجل تحجب التوفر في ديزي. لا حجوزات مزدوجة.' },
            { question: 'كيف تتعاملون مع عدم الحضور؟', answer: 'يمكنك طلب إيداعات عند الحجز، وإرسال تذكيرات تلقائية (واتساب أو رسائل نصية أو بريد إلكتروني) على فترات تختارها، وتحديد سياسة إلغاء مع تطبيق تلقائي. الأعمال التي تستخدم هذه الميزات تبلغ عن انخفاض يصل إلى 60% في حالات عدم الحضور.' },
            { question: 'هل يمكن للعملاء حجز خدمات متعددة في زيارة واحدة؟', answer: 'نعم. يمكن للعملاء تجميع الخدمات في موعد واحد. يحسب النظام تلقائياً المدة الإجمالية والسعر، ويجدول أعضاء الفريق المناسبين لكل خدمة.' },
            { question: 'هل تدعمون المواعيد المتكررة؟', answer: 'نعم. يمكن للعملاء والموظفين إعداد حجوزات متكررة (أسبوعية، كل أسبوعين، شهرية) تملأ التقويم تلقائياً. العملاء المتكررون يحصلون على أولوية الجدولة وتذكيرات تلقائية.' },
            { question: 'كيف تعمل قائمة الانتظار؟', answer: 'عندما يكون وقت ما ممتلئاً، يمكن للعملاء الانضمام لقائمة الانتظار. إذا حدث إلغاء، يقوم النظام تلقائياً بإخطار العملاء في قائمة الانتظار وملء الموعد — بدون عمل يدوي.' },
          ],
        },
        {
          title: 'المدفوعات والعمولة',
          questions: [
            { question: 'كيف تعمل العمولة؟', answer: 'العمولة تُفرض فقط على العملاء الجدد الذين يجدونك ويحجزون عبر سوق ديزي. عملاؤك الحاليون والحجوزات المباشرة بدون عمولة دائمًا. نسبة العمولة شفافة وثابتة — بدون مفاجآت.' },
            { question: 'ما طرق الدفع المتاحة لعملائي؟', answer: 'بطاقات الائتمان والخصم، وأبل باي، وجوجل باي، ورصيد المحفظة (من الكاشباك). يمكن للعملاء أيضاً الدفع شخصياً باستخدام نقطة البيع الخاصة بك. جميع المدفوعات الرقمية تُعالج بأمان.' },
            { question: 'متى أحصل على أموالي؟', answer: 'تُعالج المدفوعات أسبوعياً وتُودع مباشرة في حسابك البنكي. يمكنك تتبع جميع المعاملات والمدفوعات المعلقة والإيداعات المكتملة في الوقت الفعلي من لوحة التحكم.' },
            { question: 'ما هي رسوم معالجة المدفوعات؟', answer: 'تُطبق رسوم المعالجة القياسية في الصناعة (عادة 2.5-2.9% + رسوم ثابتة لكل معاملة). تُعرض بوضوح في لوحة التحكم. لا رسوم مخفية.' },
            { question: 'هل يمكن للعملاء إعطاء إكرامية عبر التطبيق؟', answer: 'نعم. بعد كل موعد، يمكن للعملاء إضافة إكرامية مباشرة في التطبيق. الإكراميات مشمولة في دفعتك العادية بدون رسوم معالجة إضافية.' },
            { question: 'هل توفرون فواتير وإيصالات؟', answer: 'نعم. تُرسل الإيصالات تلقائياً للعملاء بعد كل موعد. يمكنك إنشاء فواتير للعملاء المؤسسيين وتحميل التقارير المالية لمحاسبك في أي وقت.' },
          ],
        },
        {
          title: 'الانتقال من منصة أخرى',
          questions: [
            { question: 'هل يمكنني الانتقال من نظام الحجز الحالي؟', answer: 'نعم. يساعدك فريق التسجيل في نقل بيانات عملائك وسجل الحجوزات والتفضيلات بدون تكلفة إضافية.' },
            { question: 'كم يستغرق الانتقال؟', answer: 'معظم عمليات الانتقال تكتمل خلال 3-5 أيام عمل. عمليات الانتقال البسيطة (قائمة العملاء وقائمة الخدمات) يمكن إنجازها في يوم واحد. عمليات الانتقال المعقدة (سجل الحجوزات الكامل، نقاط الولاء، أرصدة الباقات) قد تستغرق حتى أسبوع.' },
            { question: 'هل سأفقد بيانات عملائي؟', answer: 'لا. ننقل معلومات الاتصال بعملائك وسجل المواعيد والتفضيلات والملاحظات. تجربة عملائك سلسة — يبدؤون ببساطة بالحجز عبر صفحة ديزي الجديدة.' },
            { question: 'هل يمكنني تشغيل كلا النظامين بالتوازي خلال الانتقال؟', answer: 'نعم. نوصي بفترة تداخل من أسبوع إلى أسبوعين حيث يكون كلا النظامين نشطين. هذا يمنح فريقك وقتاً للتعود على ديزي قبل التبديل الكامل.' },
            { question: 'هل يحتاج عملائي إلى إنشاء حسابات جديدة؟', answer: 'لا. عندما يحجز العملاء عبر صفحة ديزي الخاصة بك لأول مرة، يُنشأ حسابهم تلقائياً. لا يحتاجون لإعادة إدخال المعلومات التي تم نقلها من نظامك السابق.' },
            { question: 'ماذا لو كنت حالياً في عقد مع مزود آخر؟', answer: 'يمكنك بدء الفترة التجريبية المجانية لديزي أثناء وجودك في عقد مع مزود آخر. العديد من الأعمال تستخدم فترة التجربة لإعداد واختبار المنصة، ثم تنتقل بالكامل بمجرد انتهاء عقدهم الحالي.' },
          ],
        },
      ],
    },
    customer: {
      heroTitle: 'الأسئلة الشائعة',
      heroSubtitle: 'الأسئلة الشائعة للعملاء',
      heroDescription: 'كل ما تحتاج معرفته حول حجز خدمات التجميل وكسب الكاشباك مع ديزي.',
      categories: [
        {
          title: 'البدء',
          questions: [
            { question: 'ما هو ديزي؟', answer: 'ديزي هو تطبيق لحجز خدمات التجميل يتيح لك اكتشاف وحجز ودفع مقابل خدمات الصالون والمنتجع الصحي والعيادة — كل ذلك في مكان واحد. تكسب كاشباك على كل حجز ويمكنك إدارة جميع مواعيدك من هاتفك.' },
            { question: 'كيف أسجل؟', answer: 'حمّل تطبيق ديزي من متجر التطبيقات أو جوجل بلاي وأنشئ حساباً ببريدك الإلكتروني أو رقم هاتفك. يستغرق أقل من دقيقة.' },
            { question: 'كيف أجد خدمات التجميل القريبة مني؟', answer: 'افتح التطبيق وتصفح حسب الفئة (شعر، أظافر، عناية بالبشرة، سبا، إلخ) أو ابحث عن خدمة محددة. يعرض التطبيق مقدمي الخدمات القريبين من موقعك مع التقييمات والمراجعات والأسعار والمواعيد المتاحة.' },
            { question: 'هل ديزي متاح كموقع إلكتروني أم تطبيق فقط؟', answer: 'يمكنك تصفح الخدمات والحجز على الويب، لكن التجربة الكاملة — بما في ذلك محفظة الكاشباك وإدارة المواعيد والإشعارات — متاحة في تطبيق الهاتف.' },
            { question: 'ما اللغات التي يدعمها التطبيق؟', answer: 'التطبيق متاح بالكامل بالعربية والإنجليزية، بما في ذلك جميع مسارات الحجز والإشعارات ودعم العملاء.' },
            { question: 'هل ديزي مجاني للاستخدام؟', answer: 'نعم. ديزي مجاني تماماً للعملاء. لا توجد رسوم اشتراك أو رسوم حجز أو رسوم مخفية. أنت تدفع فقط مقابل الخدمات التي تحجزها.' },
          ],
        },
        {
          title: 'الحجز والمواعيد',
          questions: [
            { question: 'كيف أحجز موعداً؟', answer: 'ابحث عن مقدم خدمة، اختر خدمة، حدد تاريخاً ووقتاً، وأكّد. يمكنك أيضاً الحجز مباشرة عبر واتساب أو إنستغرام الخاص بمقدم الخدمة باستخدام المساعد الذكي.' },
            { question: 'هل يمكنني إلغاء أو إعادة جدولة حجز؟', answer: 'نعم. يمكنك الإلغاء أو إعادة الجدولة من التطبيق. كل مقدم خدمة يحدد سياسة إلغائه الخاصة — بعضهم يسمح بالإلغاء المجاني حتى 24 ساعة قبل الموعد، بينما قد يطلب آخرون إيداعاً غير قابل للاسترداد ضمن نافذة زمنية معينة.' },
            { question: 'كيف أعرف أن حجزي مؤكد؟', answer: 'تتلقى تأكيداً فورياً في التطبيق وعبر واتساب أو البريد الإلكتروني. تتلقى أيضاً تذكيرات قبل موعدك — عادة 48 ساعة وساعتين قبل الموعد.' },
            { question: 'هل يمكنني الحجز لشخص آخر؟', answer: 'نعم. يمكنك حجز خدمات لأصدقائك أو أفراد عائلتك. فقط أضف تفاصيلهم عند إكمال الحجز.' },
            { question: 'هل يمكنني حجز خدمات متعددة في وقت واحد؟', answer: 'نعم. يمكنك تجميع خدمات متعددة (مثل قص + صبغة + تصفيف) في موعد واحد. يُحسب السعر الإجمالي والمدة تلقائياً.' },
            { question: 'ماذا لو احتجت التواصل مع الصالون قبل موعدي؟', answer: 'يمكنك مراسلة الصالون مباشرة عبر التطبيق. العديد من الصالونات لديها أيضاً مساعد ذكي يمكنه الإجابة على الأسئلة الشائعة فوراً، على مدار الساعة.' },
          ],
        },
        {
          title: 'الكاشباك والمكافآت',
          questions: [
            { question: 'كيف يعمل الكاشباك؟', answer: 'في كل مرة تحجز وتكمل خدمة عبر ديزي، يُضاف نسبة مئوية مما دفعته إلى محفظة ديزي الخاصة بك ككاشباك. النسبة الدقيقة تختلف حسب مقدم الخدمة والعرض الترويجي.' },
            { question: 'كم كاشباك أكسب؟', answer: 'نسب الكاشباك تختلف حسب مقدم الخدمة والخدمة، عادة تتراوح بين 3% و15%. بعض مقدمي الخدمات يقدمون عروضاً خاصة بنسب كاشباك أعلى. مبلغ الكاشباك يُعرض دائمًا قبل تأكيد الحجز.' },
            { question: 'كيف أستخدم الكاشباك؟', answer: 'رصيد الكاشباك مخزن في محفظة ديزي. يمكنك تطبيقه كخصم على أي حجز مستقبلي — جزئياً أو كلياً. يعمل مثل رصيد المتجر الذي لا ينتهي أبداً.' },
            { question: 'هل ينتهي الكاشباك؟', answer: 'لا. رصيد الكاشباك لا ينتهي طالما حسابك نشط.' },
            { question: 'هل يمكنني التحقق من رصيد الكاشباك؟', answer: 'نعم. رصيدك الحالي مرئي دائمًا في قسم المحفظة في التطبيق. يمكنك أيضاً عرض سجل كامل للكاشباك المكتسب والمستخدم.' },
            { question: 'هل هناك برنامج إحالة؟', answer: 'نعم. عندما تحيل صديقاً ويكمل حجزه الأول، كلاكما تكسبان كاشباك إضافي. مبلغ مكافأة الإحالة معروض في قسم الإحالات في التطبيق.' },
          ],
        },
        {
          title: 'المدفوعات والاسترداد',
          questions: [
            { question: 'ما طرق الدفع المقبولة؟', answer: 'بطاقات الائتمان والخصم، وأبل باي، وجوجل باي، ورصيد محفظة ديزي. يمكنك أيضاً الدفع شخصياً في الصالون إذا كان مقدم الخدمة يدعم ذلك.' },
            { question: 'هل معلومات الدفع الخاصة بي آمنة؟', answer: 'نعم. جميع المدفوعات تُعالج عبر مزودي دفع متوافقين مع معايير PCI. تفاصيل بطاقتك مشفرة ولا تُخزن أبداً على خوادمنا.' },
            { question: 'كيف يعمل الاسترداد؟', answer: 'الاسترداد يتبع سياسة الإلغاء المحددة من كل مقدم خدمة. إذا كنت مؤهلاً للاسترداد، يُعالج إلى طريقة الدفع الأصلية خلال 5-10 أيام عمل، أو فوراً إلى محفظة ديزي.' },
            { question: 'ماذا يحدث إذا فشل الدفع؟', answer: 'إذا فشل الدفع، لا يُؤكد حجزك. سيُطلب منك المحاولة مرة أخرى بنفس طريقة الدفع أو بطريقة مختلفة. لا يُخصم أي مبلغ ما لم ينجح الدفع.' },
            { question: 'هل أحصل على إيصال؟', answer: 'نعم. يُرسل إيصال رقمي إلى بريدك الإلكتروني ويُحفظ في التطبيق بعد كل موعد مكتمل.' },
            { question: 'هل يمكنني الدفع بعملة مختلفة؟', answer: 'تُعالج المدفوعات بالعملة المحلية لمقدم الخدمة. إذا كانت بطاقتك بعملة مختلفة، يُطبق سعر الصرف القياسي لبنكك.' },
          ],
        },
        {
          title: 'الحساب والملف الشخصي',
          questions: [
            { question: 'كيف أحدّث ملفي الشخصي؟', answer: 'اذهب إلى ملفك الشخصي في التطبيق لتحديث اسمك ورقم هاتفك وبريدك الإلكتروني وصورتك وتفضيلات التجميل. التغييرات تُحفظ فوراً.' },
            { question: 'هل يمكنني حفظ مقدمي الخدمات المفضلين؟', answer: 'نعم. اضغط على أيقونة القلب على أي مقدم خدمة لحفظه في قائمة المفضلة للحجز السريع.' },
            { question: 'كيف أعرض سجل حجوزاتي؟', answer: 'سجل حجوزاتك الكامل — السابقة والقادمة — متاح في قسم المواعيد في التطبيق، بما في ذلك الإيصالات وتفاصيل مقدم الخدمة.' },
            { question: 'كيف أدير الإشعارات؟', answer: 'اذهب إلى الإعدادات > الإشعارات في التطبيق للتحكم في التنبيهات التي تتلقاها (تأكيدات الحجز، التذكيرات، العروض الترويجية، تحديثات الكاشباك). يمكنك الاختيار بين إشعارات الهاتف أو واتساب أو البريد الإلكتروني أو الرسائل النصية.' },
            { question: 'هل بياناتي الشخصية محمية؟', answer: 'نعم. نلتزم بقوانين حماية البيانات ولا نبيع معلوماتك الشخصية أبداً. يمكنك مراجعة سياسة الخصوصية الكاملة في التطبيق أو على موقعنا.' },
            { question: 'كيف أحذف حسابي؟', answer: 'اذهب إلى الإعدادات > الحساب > حذف الحساب. سيتم حذف بياناتك نهائياً خلال 30 يوماً. أي رصيد كاشباك متبقٍ سيُفقد عند الحذف.' },
          ],
        },
      ],
    },
    professional: {
      heroTitle: 'الأسئلة الشائعة',
      heroSubtitle: 'الأسئلة الشائعة للمتخصصين',
      heroDescription: 'كل ما تحتاج معرفته حول بناء مسيرتك المهنية على ديزي.',
      categories: [
        {
          title: 'البدء',
          questions: [
            { question: 'ما هو ديزي للمتخصصين في التجميل؟', answer: 'يمنح ديزي متخصصي التجميل صفحة حجز خاصة بهم، وخدمة عملاء مدعومة بالذكاء الاصطناعي، ومعالجة مدفوعات، وظهور في سوق عملاء يبحثون بنشاط عن الخدمات — سواء كنت تعمل في صالون أو مستقل أو تدير عملك الخاص.' },
            { question: 'من يمكنه الانضمام كمتخصص؟', answer: 'مصففو الشعر، وفنيو الأظافر، وأخصائيو التجميل، وفنانو المكياج، ومعالجو التجميل، والحلاقون، ومعالجو السبا، وأي متخصص مرخص في التجميل أو العافية. المستقلون والعاملون في الصالونات ومقدمو الخدمات المتنقلة مرحب بهم جميعاً.' },
            { question: 'هل أحتاج للعمل في صالون للانضمام؟', answer: 'لا. المتخصصون المستقلون والمصففون المستقلون ومقدمو الخدمات المتنقلة والمتخصصون العاملون في الصالونات مرحب بهم جميعاً.' },
            { question: 'كيف أسجل؟', answer: 'حمّل تطبيق ديزي، اختر "متخصص" أثناء التسجيل، وأكمل ملفك الشخصي بخدماتك وأسعارك وتوفرك وصور أعمالك. التحقق يستغرق عادة 24-48 ساعة.' },
            { question: 'هل هناك عملية تحقق؟', answer: 'نعم. نتحقق من بيانات اعتمادك المهنية ومعرض أعمالك للحفاظ على معايير الجودة على المنصة. هذا يحمي أنت وعملاءك المستقبليين.' },
            { question: 'هل الانضمام مجاني؟', answer: 'نعم. الانضمام مجاني. العمولة تُفرض فقط على العملاء الجدد الذين يحجزونك عبر سوق ديزي — عملاؤك الحاليون بدون عمولة. ميزات متقدمة متاحة عبر مستويات اشتراك بأسعار معقولة.' },
          ],
        },
        {
          title: 'الأرباح والمدفوعات',
          questions: [
            { question: 'هل هناك رسوم أو عمولة؟', answer: 'الانضمام مجاني. العمولة تُفرض فقط على العملاء الجدد الذين يحجزونك عبر سوق ديزي، عملاؤك الحاليون بدون عمولة. ميزات متقدمة متاحة عبر مستويات اشتراك بأسعار معقولة.' },
            { question: 'متى وكيف أحصل على أموالي؟', answer: 'تُتبع أرباحك في الوقت الفعلي في التطبيق. تُعالج المدفوعات بأمان وتُودع في حسابك البنكي أسبوعياً. يمكنك رؤية ما كسبته بالضبط من كل موعد.' },
            { question: 'هل يمكنني تتبع أرباحي في الوقت الفعلي؟', answer: 'نعم. لوحة التحكم تعرض تفاصيل الأرباح اليومية والأسبوعية والشهرية، بما في ذلك الإكراميات واستقطاعات العمولة والمدفوعات المعلقة.' },
            { question: 'ما طرق الدفع التي يستخدمها عملائي؟', answer: 'يمكن للعملاء الدفع عبر بطاقات الائتمان/الخصم، وأبل باي، وجوجل باي، أو رصيد محفظة ديزي. تتلقى جميع المدفوعات عبر دفعتك الأسبوعية بغض النظر عن طريقة دفع العميل.' },
            { question: 'هل أتلقى إكراميات عبر التطبيق؟', answer: 'نعم. يمكن للعملاء إضافة إكراميات بعد المواعيد. الإكراميات مشمولة في دفعتك الأسبوعية العادية بدون رسوم إضافية.' },
            { question: 'هل يمكنني الحصول على ملخص ضريبي لأرباحي؟', answer: 'نعم. يُنشئ التطبيق تقارير أرباح قابلة للتحميل يمكنك مشاركتها مع محاسبك. التقارير تشمل الأرباح الإجمالية والعمولة والإكراميات وصافي المدفوعات.' },
          ],
        },
        {
          title: 'الجدولة والتوفر',
          questions: [
            { question: 'كيف أحدد توفري؟', answer: 'حدد ساعات عملك لكل يوم من أيام الأسبوع في إعدادات ملفك الشخصي. يمكنك أيضاً حظر تواريخ محددة للإجازات أو الوقت الشخصي. التغييرات تسري فوراً.' },
            { question: 'هل يمكنني إدارة تقويمي بنفسي؟', answer: 'نعم. لديك تحكم كامل في تقويمك. حدد ساعات العمل وأضف وقت استراحة بين المواعيد واحظر الوقت الشخصي وأدر الجداول المتكررة — كل ذلك من التطبيق.' },
            { question: 'هل يمكنني حظر وقت للإجازات أو الاستراحات؟', answer: 'نعم. احظر أي نطاق تاريخ من تقويمك. الحجوزات الحالية خلال تلك الفترة سيتم تمييزها حتى تتمكن من إعادة جدولتها قبل بدء الإجازة.' },
            { question: 'هل تدعمون الجداول المتكررة؟', answer: 'نعم. قم بإعداد جدول أسبوعي متكرر والمنصة تطبقه تلقائياً. يمكنك تجاوز أيام فردية حسب الحاجة دون تغيير نمطك العام.' },
            { question: 'ما المناطق الزمنية التي تدعمها المنصة؟', answer: 'تتكيف المنصة تلقائياً مع منطقتك الزمنية المحلية بناءً على إعدادات موقعك. جميع أوقات المواعيد تُعرض بتوقيتك المحلي.' },
            { question: 'كيف تعمل الإلغاءات للمتخصصين؟', answer: 'أنت تحدد سياسة الإلغاء الخاصة بك (نافذة الإلغاء المجاني، متطلبات الإيداع). المنصة تطبقها تلقائياً. إذا ألغى عميل ضمن نافذة العقوبة، تحتفظ بالإيداع.' },
          ],
        },
        {
          title: 'الملف الشخصي والظهور',
          questions: [
            { question: 'كيف يجد العملاء ملفي الشخصي؟', answer: 'يظهر ملفك الشخصي في سوق ديزي عندما يبحث العملاء عن خدمات التجميل في منطقتك. كلما كان ملفك الشخصي أكثر اكتمالاً، كان ظهورك أعلى.' },
            { question: 'كيف يمكنني تحسين ظهوري؟', answer: 'أكمل ملفك الشخصي بالكامل، وأضف صور أعمال عالية الجودة، واجمع تقييمات العملاء، واستجب بسرعة للرسائل، وحافظ على معدل إتمام حجوزات مرتفع. الخوارزمية تكافئ المتخصصين النشطين والموثوقين.' },
            { question: 'هل يمكن للعملاء ترك تقييمات؟', answer: 'نعم. بعد كل موعد مكتمل، يمكن للعملاء ترك تقييم ومراجعة مكتوبة. التقييمات الإيجابية تعزز ظهورك وتساعد في جذب عملاء جدد.' },
            { question: 'هل يمكنني عرض معرض أعمالي؟', answer: 'نعم. ارفع صور أعمالك إلى ملفك الشخصي. صور قبل وبعد وأمثلة الخدمات وبيئة مكان عملك تساعد العملاء في اختيارك بثقة.' },
            { question: 'هل يمكنني إدراج تخصصاتي؟', answer: 'نعم. وسم ملفك الشخصي بتخصصاتك (مثل بالياج، مكياج عرائس، علاجات كيراتين). هذا يساعدك في الظهور في عمليات البحث المستهدفة من العملاء الذين يبحثون عن خبرة محددة.' },
            { question: 'كيف يعمل الترتيب في السوق؟', answer: 'الترتيب يعتمد على مجموعة عوامل: اكتمال الملف الشخصي، وقت الاستجابة، معدل إتمام الحجوزات، تقييمات العملاء، والنشاط العام. لا يوجد ظهور مدفوع — الظهور يُكتسب من خلال الجودة والموثوقية.' },
          ],
        },
        {
          title: 'العمل المستقل',
          questions: [
            { question: 'هل يدعم ديزي المتخصصين المستقلين؟', answer: 'نعم. ديزي مصمم للمتخصصين العاملين في الصالونات والمستقلين على حد سواء. المستقلون يحصلون على نفس أدوات الحجز والدفع والذكاء الاصطناعي — بالإضافة إلى ظهور في السوق لجذب عملاء جدد بدون تكاليف الصالون.' },
            { question: 'ما الأدوات التي يوفرها ديزي للمتخصصين المستقلين؟', answer: 'صفحة حجز خاصة بك، وموظف استقبال ذكي لواتساب وإنستغرام، ومعالجة مدفوعات، وإدارة تقويم، وقاعدة بيانات عملاء، وتذكيرات تلقائية، وظهور في السوق. كل ما تحتاجه لإدارة ممارسة مستقلة.' },
            { question: 'كيف أسعّر خدماتي؟', answer: 'ابحث عن خدمات مماثلة في منطقتك، واحسب خبرتك وتخصصاتك، وحدد أسعاراً تنافسية في ملفك الشخصي. يمكنك تعديل الأسعار في أي وقت وتقديم عروض ترويجية لجذب عملاء جدد.' },
            { question: 'كيف أبني قاعدة عملاء من الصفر؟', answer: 'أكمل ملفك الشخصي، وأضف صور أعمال، وحدد أسعاراً تنافسية، وسيبدأ السوق بعرضك للعملاء القريبين. شجع العملاء الأوائل على ترك تقييمات — الدليل الاجتماعي هو أسرع طريقة للنمو على المنصة.' },
            { question: 'هل أحتاج تأمين خاص بي؟', answer: 'نوصي بشدة بتأمين المسؤولية المهنية لجميع المتخصصين المستقلين. ديزي لا يوفر تغطية تأمينية — أنت مسؤول عن تأمين التعويض المهني والمسؤولية العامة.' },
            { question: 'هل يمكنني الانتقال من العمل في صالون إلى العمل المستقل على ديزي؟', answer: 'نعم. العديد من المتخصصين يبدؤون بإنشاء ملفهم الشخصي أثناء عملهم في صالون، ثم ينتقلون تدريجياً مع بناء قاعدة عملائهم المستقلة. المنصة تدعم هذا الانتقال التدريجي.' },
          ],
        },
      ],
    },
  },
};
