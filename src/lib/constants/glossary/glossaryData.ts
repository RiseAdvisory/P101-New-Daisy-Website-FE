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
          'Yes. Daisy\'s AI receptionist supports full multilingual operation in Arabic, English, and more, making it ideal for GCC markets. It can switch languages naturally within conversations.',
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
  {
    slug: 'salon-management-system',
    term: 'Salon Management System',
    definition:
      'is the complete operational infrastructure — software, hardware, workflows, and integrations — that a beauty business uses to run daily operations, from appointment booking and point-of-sale terminals to staff coordination and customer communications.',
    extendedDescription:
      'A salon management system goes beyond software alone. It encompasses the <a href="/en/glossary/salon-management-software">salon management software</a> platform, POS hardware, payment terminals, scheduling workflows, and the integrations that connect them into a unified operation. While "software" refers to the digital tool, "system" describes how everything works together — including team processes and customer touchpoints. Salons that implement a complete management system rather than bolting together separate tools report 25-35% higher operational efficiency and significantly fewer errors from manual data re-entry. The trend toward all-in-one systems is accelerating as salon owners recognize that disconnected tools create data silos, duplicated work, and missed opportunities. Read the <a href="/en/salon-management-software">complete salon management guide</a> for a deeper look at how modern systems transform beauty businesses.',
    keyFeatures: [
      { label: 'Software Platform', daisy: 'All-in-one cloud', typical: 'Separate tools' },
      { label: 'POS Integration', daisy: 'Built-in, zero fees', typical: 'Third-party terminal' },
      { label: 'Staff Workflows', daisy: 'AI-optimized', typical: 'Manual processes' },
      { label: 'Customer Channels', daisy: 'Unified inbox', typical: 'Fragmented (phone, email, DM)' },
      { label: 'Data Flow', daisy: 'Automatic across all functions', typical: 'Manual re-entry between tools' },
      { label: 'Hardware Required', daisy: 'None (cloud + any device)', typical: 'Dedicated terminals' },
    ],
    howDaisyImplements:
      'Daisy replaces the entire patchwork of salon tools with one cloud-based system. Booking, payments, CRM, staff scheduling, marketing, and AI receptionist all share a single data layer — so a client booking flows automatically into the calendar, triggers reminders, updates the CRM, and feeds analytics without any manual steps. No dedicated hardware required; works on any phone, tablet, or computer.',
    faqs: [
      {
        question: 'What is a salon management system?',
        answer:
          'A salon management system is the complete operational setup a salon uses to run its business — combining software, hardware (POS, payment terminals), workflows, and integrations into one coordinated infrastructure. It is broader than software alone.',
      },
      {
        question: 'What is the difference between a salon management system and salon management software?',
        answer:
          'Salon management software is the digital platform (the app you log into). A salon management system includes the software plus the hardware, workflows, and integrations that make it all work together. Daisy provides the complete system — no additional hardware or tools needed.',
      },
      {
        question: 'What should a salon management system include?',
        answer:
          'A complete system should include online booking, POS and payment processing, client CRM, staff scheduling, marketing automation, reporting, and ideally AI tools like an automated receptionist. All components should share data without manual re-entry.',
      },
      {
        question: 'How much does a salon management system cost?',
        answer:
          'Costs range from $50-500/month for the software platform, plus $0-2,000 for hardware if required. Daisy eliminates hardware costs entirely — the complete system runs on your existing devices starting at $50/month.',
      },
      {
        question: 'Can a small salon benefit from a management system?',
        answer:
          'Absolutely. Small salons often benefit most because the owner is handling multiple roles. A unified system automates admin tasks, captures missed calls via AI, and reduces the manual workload that keeps small salon owners working evenings and weekends.',
      },
      {
        question: 'How do I switch to a new salon management system?',
        answer:
          'A well-planned migration takes 2-4 weeks. Key steps: export client data from your current system, import into the new platform, configure services and staff, test thoroughly, then go live. Daisy offers free migration assistance on the Business plan.',
      },
      {
        question: 'Do I need separate hardware for a salon management system?',
        answer:
          'Not with modern cloud-based systems like Daisy. Traditional systems required dedicated POS terminals and servers. Daisy runs on any device with a browser — phone, tablet, laptop — with no special hardware purchases.',
      },
      {
        question: 'What is the best salon management system in 2026?',
        answer:
          'The best system in 2026 combines comprehensive software with AI capabilities and requires no additional hardware. Daisy leads with its all-in-one approach: AI receptionist, cashback customer acquisition, white-label branding, and zero-hardware cloud platform starting at $50/month.',
      },
    ],
    relatedTerms: ['salon-management-software', 'salon-booking-software', 'salon-employee-management-software'],
    metaTitle: 'What is a Salon Management System? | Complete Guide',
    metaDescription:
      'Learn what a salon management system is, how it differs from software alone, and why an all-in-one system with AI tools helps salons run more efficiently.',
    keywords: ['salon management system', 'salon management systems', 'management system for salon', 'beauty salon management system', 'salon system'],
  },
  {
    slug: 'salon-employee-management-software',
    term: 'Salon Employee Management Software',
    definition:
      'is specialized functionality within <a href="/en/glossary/salon-management-software">salon management software</a> that handles staff scheduling, commission tracking, performance analytics, team permissions, and workforce coordination for beauty businesses.',
    extendedDescription:
      'Managing salon employees involves unique challenges that generic HR tools cannot address: commission-based pay structures, chair rental arrangements, skill-based appointment routing, rotating schedules, and per-stylist performance metrics. Salon employee management software solves these by integrating staff scheduling directly with the booking calendar, automatically calculating commissions based on service revenue, and providing per-employee analytics. Salons with 5+ staff members typically save 3-5 hours per week on scheduling and payroll tasks alone. For a broader view of how staff management fits into the complete platform, see the <a href="/en/salon-management-software">salon management software guide</a>.',
    keyFeatures: [
      { label: 'Shift Scheduling', daisy: 'AI-optimized rosters', typical: 'Manual spreadsheet' },
      { label: 'Commission Tracking', daisy: 'Automatic per-service', typical: 'Manual calculation' },
      { label: 'Performance Analytics', daisy: 'Per-stylist dashboard', typical: 'Basic totals only' },
      { label: 'Team Permissions', daisy: 'Role-based access', typical: 'All-or-nothing access' },
      { label: 'Skill-Based Routing', daisy: 'Automatic matching', typical: 'Manual assignment' },
      { label: 'Payroll Integration', daisy: 'Export-ready reports', typical: 'Separate system' },
    ],
    howDaisyImplements:
      'Daisy handles the full employee lifecycle: AI-optimized scheduling that accounts for skills and availability, automatic commission calculation per service, individual performance dashboards, role-based access controls, and payroll-ready reports. Staff can view their schedules, track earnings, and manage availability from the mobile app.',
    faqs: [
      {
        question: 'What is salon employee management software?',
        answer:
          'Salon employee management software is a set of tools within a salon platform that handles staff scheduling, commission tracking, performance analytics, and team coordination — designed specifically for the unique needs of beauty businesses.',
      },
      {
        question: 'How does salon staff scheduling software work?',
        answer:
          'It integrates staff availability, skills, and the booking calendar to create optimized schedules. When a client books a balayage, the system only shows stylists qualified for that service. Daisy uses AI to balance workload and minimize scheduling gaps.',
      },
      {
        question: 'Can salon software calculate commissions automatically?',
        answer:
          'Yes. Daisy automatically calculates commissions based on customizable rules — percentage of service revenue, product sales, or flat rates per service. Staff can see their earnings in real-time through the app.',
      },
      {
        question: 'What salon software has built-in staff management features?',
        answer:
          'Daisy, Boulevard, and Mangomint include comprehensive staff management. Fresha and Booksy offer basic scheduling but limited commission tracking and performance analytics. Daisy includes all staff features in every plan.',
      },
      {
        question: 'How do I track salon employee performance?',
        answer:
          'Daisy provides per-stylist dashboards showing revenue generated, average ticket size, rebooking rate, client retention, product sales, and utilization rate. Owners can identify top performers and coaching opportunities at a glance.',
      },
      {
        question: 'Can staff manage their own schedules?',
        answer:
          'With Daisy, staff can view schedules, request time off, swap shifts (with manager approval), and set availability preferences — all from the mobile app. This reduces scheduling admin for salon owners.',
      },
      {
        question: 'Does salon employee software handle chair rental arrangements?',
        answer:
          'Yes. Daisy supports both employee and chair-rental models. For chair renters, you can set fixed rental fees, track their bookings separately, and provide independent schedule management while maintaining overall salon visibility.',
      },
      {
        question: 'How many staff can salon management software handle?',
        answer:
          'Daisy scales from solo practitioners to 100+ staff across multiple locations. All plans include unlimited staff members with no per-seat fees — a key differentiator from platforms that charge per employee.',
      },
    ],
    relatedTerms: ['salon-management-software', 'salon-management-system', 'salon-booking-software'],
    metaTitle: 'What is Salon Employee Management Software? | Staff Scheduling Guide',
    metaDescription:
      'Learn what salon employee management software does, how it automates staff scheduling and commissions, and why AI-powered tools save salon owners hours every week.',
    keywords: ['salon employee management software', 'salon staff management', 'salon scheduling software', 'salon team management', 'salon staff scheduling'],
  },
  {
    slug: 'salon-customer-management',
    term: 'Salon Customer Management',
    definition:
      'is the practice of collecting, organizing, and leveraging client data — visit history, service preferences, spending patterns, and communication records — to deliver personalized experiences, increase retention, and grow lifetime value in a beauty business.',
    extendedDescription:
      'Salon customer management (often called salon CRM) transforms a business from reactive service delivery to proactive client relationship building. Instead of treating every visit as a standalone transaction, customer management tools create a 360-degree profile of each client — their preferred stylist, product sensitivities, color formulas, visit frequency, and spending habits. Research shows that increasing client retention by just 5% can boost profits by 25-95%, making customer management the highest-ROI function in most salons. Platforms like <a href="/en/glossary/salon-management-software">salon management software</a> integrate CRM directly with booking and payments so data flows automatically — no manual entry required. For the full picture, see the <a href="/en/salon-management-software">complete salon management guide</a>.',
    keyFeatures: [
      { label: 'Client Profiles', daisy: 'AI-enriched 360-degree', typical: 'Basic contact card' },
      { label: 'Visit History', daisy: 'Full service + product + notes', typical: 'Appointment dates only' },
      { label: 'Automated Follow-Ups', daisy: 'AI-triggered campaigns', typical: 'Manual reminders' },
      { label: 'Loyalty Program', daisy: 'Cashback rewards', typical: 'Paper punch cards' },
      { label: 'Segmentation', daisy: 'Behavioral + spending', typical: 'None or basic' },
      { label: 'Reactivation', daisy: 'AI identifies lapsed clients', typical: 'Owner manually checks' },
    ],
    howDaisyImplements:
      'Daisy builds rich client profiles automatically from every interaction — bookings, payments, messages, reviews. The AI identifies clients at risk of churning, suggests rebooking reminders, and powers the <a href="/en/glossary/cashback-beauty-booking">cashback loyalty system</a> that keeps clients returning. Segmentation tools let you target campaigns by spending level, visit frequency, preferred services, and more.',
    faqs: [
      {
        question: 'What is salon customer management?',
        answer:
          'Salon customer management is the practice of tracking client data (visits, preferences, spending) and using it to personalize service, increase retention, and grow each client\'s lifetime value. Modern salon CRM tools automate most of this work.',
      },
      {
        question: 'Why is client management important for salons?',
        answer:
          'Retaining an existing client costs 5-7x less than acquiring a new one, and a 5% increase in retention can boost profits by 25-95%. Client management helps you keep more clients, increase their visit frequency, and grow their average spend.',
      },
      {
        question: 'What is salon CRM software?',
        answer:
          'Salon CRM (Customer Relationship Management) software tracks client interactions, preferences, and history to help you build stronger relationships. Daisy includes CRM as part of its all-in-one platform rather than requiring a separate tool.',
      },
      {
        question: 'How do I track client preferences in a salon?',
        answer:
          'Daisy automatically records service history, product purchases, stylist preferences, and appointment notes. Staff can add color formulas, allergy information, and personal notes that appear automatically at the next visit.',
      },
      {
        question: 'Can salon software help win back lost clients?',
        answer:
          'Yes. Daisy\'s AI identifies clients who haven\'t visited within their normal cycle and triggers automated win-back campaigns — personalized messages with incentives to rebook. This recovers 10-20% of at-risk clients.',
      },
      {
        question: 'What is the best way to build a salon client database?',
        answer:
          'Use an integrated salon platform like Daisy that captures client data automatically from every booking, payment, and interaction. This builds your database passively without requiring staff to manually enter information.',
      },
      {
        question: 'How does cashback help with customer retention?',
        answer:
          'Cashback rewards give clients a tangible reason to return — they have credits waiting to be used. Daisy\'s cashback system increases visit frequency by 20-30% compared to salons without loyalty programs.',
      },
      {
        question: 'Can I segment my salon clients for targeted marketing?',
        answer:
          'Yes. Daisy lets you segment clients by spending level, visit frequency, preferred services, location, and custom tags. This powers targeted campaigns — like a VIP offer to your top 20% spenders.',
      },
    ],
    relatedTerms: ['salon-management-software', 'cashback-beauty-booking', 'salon-management-system'],
    metaTitle: 'What is Salon Customer Management? | CRM & Retention Guide',
    metaDescription:
      'Learn what salon customer management is, how CRM tools increase client retention by 25-95%, and why AI-powered platforms like Daisy automate the entire process.',
    keywords: ['salon customer management', 'salon CRM', 'salon client management', 'beauty client management', 'salon customer database'],
  },
];

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return glossaryEntries.find((entry) => entry.slug === slug);
}

export function getAllGlossarySlugs(): string[] {
  return glossaryEntries.map((entry) => entry.slug);
}
