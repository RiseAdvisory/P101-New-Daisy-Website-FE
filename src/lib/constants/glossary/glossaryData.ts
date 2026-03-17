export interface GlossaryEntry {
  slug: string;
  term: string;
  definition: string;
  extendedDescription: string;
  keyFeatures: { label: string; daisy: string; typical: string }[];
  howDaisyImplements: string;
  faqs: { question: string; answer: string }[];
  relatedTerms: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const glossaryEntries: GlossaryEntry[] = [
  {
    slug: 'salon-management-software',
    term: 'Salon Management Software',
    definition:
      'is a digital platform that helps salon owners manage daily operations including appointment scheduling, client records, staff management, payments, and marketing from a single system.',
    extendedDescription:
      'Salon management software replaces manual booking systems, paper records, and disconnected tools with one integrated platform. Modern solutions like Daisy go beyond basic operations to include AI-powered features such as automated customer acquisition, voice receptionists, and predictive analytics. The global salon software market is projected to reach $712 million by 2028, driven by increasing demand for automation and customer experience tools.',
    keyFeatures: [
      { label: 'Online Booking', daisy: 'AI-powered 24/7', typical: 'Basic web form' },
      { label: 'Payment Processing', daisy: 'No transaction fees', typical: '2-3% per transaction' },
      { label: 'Client Management', daisy: 'AI-driven CRM', typical: 'Basic contact list' },
      { label: 'Staff Scheduling', daisy: 'Smart optimization', typical: 'Manual calendar' },
      { label: 'Marketing', daisy: 'Automated campaigns', typical: 'Basic email blasts' },
      { label: 'AI Features', daisy: 'Voice receptionist + chatbot', typical: 'None or basic' },
    ],
    howDaisyImplements:
      'Daisy combines all salon management functions into one AI-powered platform with a 24/7 voice receptionist, cashback customer acquisition, and white-label branding. Starting at $50/month with flat pricing and no per-staff fees, Daisy is designed for growth -- not just operations.',
    faqs: [
      {
        question: 'What is the best salon management software in 2026?',
        answer:
          'The best salon management software in 2026 combines AI capabilities, customer acquisition tools, and comprehensive business management. Daisy leads with its AI receptionist, cashback loyalty system, and white-label branding -- all for flat monthly pricing starting at $50/month.',
      },
      {
        question: 'How much does salon management software typically cost?',
        answer:
          'Salon management software ranges from free (with limitations and commissions) to $300+/month for premium solutions. Daisy offers three plans: Basic ($50/mo), Growth ($150/mo), and Business ($250/mo) with transparent flat pricing and no per-staff fees.',
      },
      {
        question: 'Do I need salon management software for a small salon?',
        answer:
          'Yes. Even small salons benefit significantly from management software. Research shows that salons using software see a 30-40% reduction in no-shows through automated reminders and can recapture up to 35% of missed after-hours calls with AI tools.',
      },
      {
        question: 'Can salon management software help me get more clients?',
        answer:
          'Most salon software only manages existing clients. Daisy is different -- it actively acquires new customers through marketplace discovery, cashback rewards, and AI-powered marketing automation, providing 360-degree customer acquisition.',
      },
      {
        question: 'What features should I look for in salon software?',
        answer:
          'Essential features include online booking, POS/payments, client management, staff scheduling, and reporting. Advanced features to look for include AI receptionist, customer acquisition tools, cashback loyalty, marketing automation, and Arabic language support.',
      },
      {
        question: 'Is salon management software hard to set up?',
        answer:
          'Modern cloud-based salon software like Daisy requires no hardware installation. Most salons are operational within 1-2 days. Daisy\'s Business plan includes free data migration and assisted onboarding.',
      },
      {
        question: 'Can I switch from my current salon software to Daisy?',
        answer:
          'Yes. Daisy supports data migration from all major platforms including Fresha, Booksy, Vagaro, and others. The Business plan includes free migration assistance to transfer your client data, appointment history, and business information.',
      },
      {
        question: 'Does salon management software work on mobile?',
        answer:
          'Daisy offers native iOS and Android apps plus a progressive web app, so you can manage your salon from any device. Staff can view schedules, check in clients, and process payments directly from their phones.',
      },
    ],
    relatedTerms: ['salon-booking-software', 'ai-receptionist-for-salons', 'white-label-salon-software'],
    metaTitle: 'What is Salon Management Software? | Definition & Features Guide',
    metaDescription:
      'Learn what salon management software is, key features to look for, and how AI-powered platforms like Daisy help salons grow with automated booking, payments, and marketing.',
    keywords: ['salon management software', 'salon software features', 'beauty business software', 'salon POS system', 'salon booking platform'],
  },
  {
    slug: 'ai-receptionist-for-salons',
    term: 'AI Receptionist for Salons',
    definition:
      'is an artificial intelligence system that handles phone calls, chat messages, and booking inquiries for beauty businesses 24/7, automatically scheduling appointments, answering questions, and processing payments without human intervention.',
    extendedDescription:
      'An AI receptionist uses natural language processing and voice synthesis to interact with customers just like a human receptionist would. It can answer calls during and after business hours, handle multiple conversations simultaneously, and convert inquiries into bookings. Research indicates that beauty businesses miss up to 35% of inbound calls outside business hours -- revenue that an AI receptionist can recapture.',
    keyFeatures: [
      { label: '24/7 Availability', daisy: 'Always on', typical: 'Business hours only' },
      { label: 'Language Support', daisy: 'Arabic & English', typical: 'English only' },
      { label: 'Booking Capability', daisy: 'Direct booking + payment', typical: 'Callback scheduling' },
      { label: 'Voice Quality', daisy: 'Natural conversation', typical: 'Robotic or basic IVR' },
      { label: 'Learning', daisy: 'Improves with usage', typical: 'Static scripts' },
      { label: 'Integration', daisy: 'Full CRM + calendar sync', typical: 'Standalone system' },
    ],
    howDaisyImplements:
      'Daisy\'s AI receptionist handles voice calls and chat messages in both Arabic and English, 24/7. It books appointments directly into your calendar, answers service and pricing questions, processes payments, and learns from every interaction to improve over time. Included in all Daisy plans at no extra cost.',
    faqs: [
      {
        question: 'What is an AI receptionist for salons?',
        answer:
          'An AI receptionist for salons is an automated system that answers phone calls and messages, books appointments, answers questions about services and pricing, and processes payments -- all without human intervention, 24 hours a day.',
      },
      {
        question: 'How much does an AI receptionist for a salon cost?',
        answer:
          'Standalone AI receptionist services for salons typically cost $200-500/month. Daisy includes an AI receptionist in all plans starting at $50/month, bundled with full salon management software.',
      },
      {
        question: 'Can an AI receptionist really replace a human receptionist?',
        answer:
          'An AI receptionist handles routine tasks like booking, rescheduling, and FAQs -- which account for 70-80% of salon calls. For complex issues, it can escalate to staff. Many salons use AI to supplement rather than replace human staff.',
      },
      {
        question: 'Does Daisy\'s AI receptionist work in Arabic?',
        answer:
          'Yes. Daisy\'s AI receptionist supports full bilingual operation in both Arabic and English, making it ideal for GCC markets. It can switch languages naturally within conversations.',
      },
      {
        question: 'How does an AI receptionist handle salon bookings?',
        answer:
          'The AI receptionist checks real-time staff availability, suggests optimal appointment slots, confirms the booking with the customer, sends reminders, and syncs everything to your salon calendar -- all automatically.',
      },
      {
        question: 'Will customers know they\'re talking to an AI?',
        answer:
          'Modern AI receptionists like Daisy\'s use natural language processing for human-like conversations. While transparency is important, most customers appreciate the instant response and 24/7 availability.',
      },
      {
        question: 'How many calls can an AI receptionist handle at once?',
        answer:
          'Unlike human receptionists, an AI receptionist can handle unlimited simultaneous calls and chat conversations. During peak hours, this means zero missed calls and zero hold times.',
      },
      {
        question: 'Do I need special equipment for an AI receptionist?',
        answer:
          'No. Daisy\'s AI receptionist works with your existing phone number. Calls are routed through the cloud -- no hardware, no installation, no IT setup required.',
      },
    ],
    relatedTerms: ['salon-management-software', 'salon-booking-software', 'white-label-salon-software'],
    metaTitle: 'What is an AI Receptionist for Salons? | 24/7 Automated Booking',
    metaDescription:
      'Learn what an AI receptionist for salons does, how it books appointments 24/7, and why beauty businesses are adopting AI to capture missed calls and grow revenue.',
    keywords: ['AI receptionist salon', 'salon virtual receptionist', 'automated salon booking', '24/7 salon answering', 'AI phone answering beauty'],
  },
  {
    slug: 'cashback-beauty-booking',
    term: 'Cashback in Beauty Booking',
    definition:
      'is a customer loyalty mechanism where beauty service platforms return a percentage of each booking value to the customer, incentivizing repeat visits and new customer acquisition through a rewards-based marketplace.',
    extendedDescription:
      'Cashback in beauty booking works differently from traditional discount-based loyalty programs. Instead of devaluing services with percentage-off deals, cashback rewards customers with credits for future visits. This approach increases customer lifetime value by an estimated 20-30% while maintaining full service pricing. The model has been proven in retail and fintech and is now transforming beauty industry customer acquisition.',
    keyFeatures: [
      { label: 'Reward Type', daisy: 'Cashback credits', typical: 'Points or discounts' },
      { label: 'Impact on Pricing', daisy: 'Full price maintained', typical: 'Discounted services' },
      { label: 'Customer Acquisition', daisy: 'Attracts new clients', typical: 'Retains existing only' },
      { label: 'Business Cost', daisy: 'Funded by platform', typical: 'Funded by business margin' },
      { label: 'Data Insights', daisy: 'Full spending analytics', typical: 'Basic visit counts' },
      { label: 'Flexibility', daisy: 'Customizable rates', typical: 'Fixed program' },
    ],
    howDaisyImplements:
      'Daisy\'s cashback system rewards customers with credits on every booking, funded at the platform level -- not from your margins. This means customers pay full price for services while earning rewards that bring them back. Businesses can customize cashback rates and run targeted campaigns to attract specific customer segments.',
    faqs: [
      {
        question: 'What is cashback in beauty booking?',
        answer:
          'Cashback in beauty booking is a loyalty system where customers receive a percentage of their booking value back as credits. Unlike discounts, cashback maintains full service pricing while incentivizing repeat visits.',
      },
      {
        question: 'How does salon cashback differ from loyalty points?',
        answer:
          'Cashback gives customers real monetary value (credits redeemable on future services) rather than abstract points. It\'s simpler to understand, more motivating, and increases customer lifetime value by 20-30%.',
      },
      {
        question: 'Does cashback reduce my salon\'s revenue?',
        answer:
          'No. With Daisy, cashback is funded at the platform level, not from your service margins. You charge full price while customers earn rewards -- creating a win-win that increases visit frequency.',
      },
      {
        question: 'How effective is cashback for getting new salon clients?',
        answer:
          'Cashback-based beauty marketplaces show significantly higher customer acquisition rates than traditional directories. The tangible reward lowers the barrier for first-time bookings at new salons.',
      },
      {
        question: 'Can I customize cashback rates for my salon?',
        answer:
          'Yes. Daisy allows businesses to set custom cashback rates and run targeted campaigns for different services, customer segments, or time periods to optimize customer acquisition and retention.',
      },
      {
        question: 'How do customers redeem their cashback?',
        answer:
          'Customers accumulate cashback credits in their Daisy wallet and can apply them to future bookings at any participating salon. The seamless wallet experience keeps customers within the Daisy ecosystem.',
      },
      {
        question: 'Is cashback better than offering discounts?',
        answer:
          'For beauty businesses, cashback is generally more effective than discounts. Discounts devalue your services and attract price-sensitive clients. Cashback maintains perceived value while building long-term loyalty.',
      },
      {
        question: 'Which salon software offers cashback for customers?',
        answer:
          'Daisy is one of the few salon platforms that includes a built-in cashback system. RepeatMD offers a similar concept for med spas at $700/month, while Daisy includes it in all plans starting at $50/month.',
      },
    ],
    relatedTerms: ['salon-management-software', 'salon-booking-software', 'ai-receptionist-for-salons'],
    metaTitle: 'What is Cashback in Beauty Booking? | Salon Loyalty Guide',
    metaDescription:
      'Learn how cashback beauty booking works, why it outperforms traditional loyalty programs, and how platforms like Daisy use cashback to acquire and retain salon clients.',
    keywords: ['cashback beauty booking', 'salon loyalty program', 'salon cashback rewards', 'beauty booking rewards', 'salon customer retention'],
  },
  {
    slug: 'white-label-salon-software',
    term: 'White-Label Salon Software',
    definition:
      'is a salon management platform that can be fully rebranded with your business\'s logo, colors, domain, and identity -- so every customer touchpoint (booking page, app, receipts, communications) shows your brand, not the software provider\'s.',
    extendedDescription:
      'White-label salon software solves a critical branding problem: most salon platforms force businesses to use the provider\'s branding, which dilutes brand identity and creates customer confusion. With white-label solutions, your booking page looks like YOUR website, confirmation emails come from YOUR brand, and the customer experience is seamlessly branded. This is particularly important for premium salons and multi-location businesses building brand equity.',
    keyFeatures: [
      { label: 'Booking Page', daisy: 'Fully branded', typical: 'Provider branded' },
      { label: 'Customer Communications', daisy: 'Your brand', typical: 'Software brand' },
      { label: 'Mobile App', daisy: 'Your logo & colors', typical: 'Not available' },
      { label: 'Receipts & Invoices', daisy: 'Custom branded', typical: 'Generic template' },
      { label: 'Domain', daisy: 'Your domain', typical: 'Provider subdomain' },
      { label: 'Cost', daisy: 'Included in plan', typical: 'Premium add-on ($100+/mo)' },
    ],
    howDaisyImplements:
      'Daisy includes full white-label capabilities in all plans at no extra cost. Customize your booking page, customer app, email templates, receipts, and all customer communications with your logo, colors, and brand identity. Your customers interact with your brand, not Daisy\'s.',
    faqs: [
      {
        question: 'What is white-label salon software?',
        answer:
          'White-label salon software is a platform you can rebrand as your own. Your customers see your logo, colors, and brand on the booking page, app, and all communications -- they never see the software provider\'s branding.',
      },
      {
        question: 'Why does white-label branding matter for salons?',
        answer:
          'Brand consistency builds trust and professionalism. When customers book through a page with YOUR branding (not Fresha\'s or Booksy\'s), it strengthens your brand identity and increases perceived value.',
      },
      {
        question: 'Which salon software offers white-label features?',
        answer:
          'Daisy includes full white-label branding in all plans. Boulevard and Mangomint offer some customization. Most platforms like Fresha, Booksy, and Vagaro prominently display their own branding.',
      },
      {
        question: 'How much does white-label salon software cost?',
        answer:
          'Standalone white-label solutions can cost $200-500/month on top of regular software fees. Daisy includes complete white-label capabilities in all plans starting at $50/month.',
      },
      {
        question: 'Can I use my own domain with salon booking software?',
        answer:
          'With Daisy, yes -- you can use your own domain for your booking page. Many competitors force you to use their subdomain (e.g., yoursalon.booksy.com), which dilutes your brand.',
      },
      {
        question: 'Does white-label affect the booking experience?',
        answer:
          'White-label software provides the same features and functionality but under your brand. Customers get a seamless experience that feels like your own custom platform.',
      },
      {
        question: 'Is white-label software good for multi-location salons?',
        answer:
          'Absolutely. Multi-location businesses benefit most from white-label because it maintains consistent branding across all locations while using one centralized management system.',
      },
      {
        question: 'Can I white-label the salon mobile app?',
        answer:
          'Daisy allows you to customize the customer-facing app with your branding. This creates a premium, professional experience that sets you apart from competitors using generic booking apps.',
      },
    ],
    relatedTerms: ['salon-management-software', 'salon-booking-software', 'ai-receptionist-for-salons'],
    metaTitle: 'What is White-Label Salon Software? | Custom Branded Booking',
    metaDescription:
      'Learn what white-label salon software is, why brand control matters for beauty businesses, and how Daisy lets you fully rebrand your booking experience.',
    keywords: ['white-label salon software', 'branded salon booking', 'custom salon app', 'salon branding software', 'white-label beauty platform'],
  },
  {
    slug: 'salon-booking-software',
    term: 'Salon Booking Software',
    definition:
      'is a digital tool that enables beauty businesses to accept, manage, and optimize appointment bookings online -- allowing customers to self-schedule 24/7 and reducing no-shows through automated reminders.',
    extendedDescription:
      'Salon booking software has evolved from simple online calendars to sophisticated platforms with AI-driven scheduling, waitlist management, and multi-channel booking (website, app, social media, Google). Studies show that salons offering online booking see up to 40% more appointments, while automated reminders reduce no-shows by 30-40%. The best booking systems integrate with payments, CRM, and marketing tools.',
    keyFeatures: [
      { label: '24/7 Online Booking', daisy: 'AI-powered', typical: 'Basic web widget' },
      { label: 'Automated Reminders', daisy: 'SMS + Email + WhatsApp', typical: 'Email only' },
      { label: 'Waitlist Management', daisy: 'AI-optimized', typical: 'Manual' },
      { label: 'Multi-Channel', daisy: 'Web + App + Google + Social', typical: 'Website only' },
      { label: 'No-Show Protection', daisy: 'Deposits + AI prediction', typical: 'Basic deposits' },
      { label: 'Smart Scheduling', daisy: 'Gap-filling AI', typical: 'First-available only' },
    ],
    howDaisyImplements:
      'Daisy\'s booking system uses AI to optimize schedules, fill gaps, reduce no-shows, and maximize staff utilization. Customers can book through your website, app, Google, or social media 24/7. Automated reminders via SMS, email, and WhatsApp reduce no-shows by up to 40%.',
    faqs: [
      {
        question: 'What is salon booking software?',
        answer:
          'Salon booking software lets customers schedule appointments online 24/7 while helping salon owners manage calendars, reduce no-shows, and optimize staff schedules automatically.',
      },
      {
        question: 'How does online booking increase salon revenue?',
        answer:
          'Salons offering 24/7 online booking see up to 40% more appointments because customers can book at any time. AI scheduling also fills calendar gaps and reduces idle time between appointments.',
      },
      {
        question: 'What\'s the best way to reduce salon no-shows?',
        answer:
          'Automated reminders via SMS and email reduce no-shows by 30-40%. Daisy adds AI prediction to identify high-risk bookings and optional deposit requirements for added protection.',
      },
      {
        question: 'Can customers book from Google Search?',
        answer:
          'Yes. Daisy supports Reserve with Google, allowing customers to book directly from your Google Business Profile search results -- meeting customers where they\'re already searching.',
      },
      {
        question: 'What is the difference between booking software and scheduling software?',
        answer:
          'Booking software is customer-facing (clients self-schedule). Scheduling software is staff-facing (managing employee shifts). Daisy combines both -- customers book online while the system optimizes staff calendars.',
      },
      {
        question: 'How does AI improve salon scheduling?',
        answer:
          'AI scheduling analyzes booking patterns, staff skills, service durations, and customer preferences to suggest optimal appointment times, fill schedule gaps, and maximize daily revenue per staff member.',
      },
      {
        question: 'Can I accept deposits through salon booking software?',
        answer:
          'Yes. Daisy supports upfront deposits and full prepayment when booking, reducing no-shows and improving cash flow. No transaction fees are charged on payments processed through Daisy.',
      },
      {
        question: 'Does salon booking software work for walk-in clients?',
        answer:
          'Daisy handles both online bookings and walk-in clients. Walk-ins can be added to the schedule in real-time, and the system adjusts availability instantly for all booking channels.',
      },
    ],
    relatedTerms: ['salon-management-software', 'ai-receptionist-for-salons', 'cashback-beauty-booking'],
    metaTitle: 'What is Salon Booking Software? | Online Appointment Scheduling',
    metaDescription:
      'Learn what salon booking software does, how it reduces no-shows by 30-40%, and why AI-powered scheduling helps beauty businesses grow revenue.',
    keywords: ['salon booking software', 'online salon scheduling', 'salon appointment system', 'beauty booking platform', 'salon no-show reduction'],
  },
];

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return glossaryEntries.find((entry) => entry.slug === slug);
}

export function getAllGlossarySlugs(): string[] {
  return glossaryEntries.map((entry) => entry.slug);
}
