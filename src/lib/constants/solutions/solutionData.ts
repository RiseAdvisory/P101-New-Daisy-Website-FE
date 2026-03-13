// =============================================================================
// WS2: Solution Page Data — Use-case and vertical pages
// =============================================================================

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  challenges: { title: string; description: string }[];
  features: { title: string; description: string; icon?: string }[];
  faqs: SolutionFaq[];
  relatedSolutions: string[];
  relatedComparisons: string[];
}

// -----------------------------------------------------------------------------
// Solution Pages Data
// -----------------------------------------------------------------------------

export const solutions: SolutionData[] = [
  // P1: 4 highest-traffic keywords
  {
    slug: 'salon-management-software',
    metaTitle: 'AI-Powered Salon Management Software | Daisy',
    metaDescription:
      'Daisy is the all-in-one salon management software with AI receptionist, online booking, POS, cashback rewards, and Arabic support. Try free for 14 days.',
    keywords: [
      'salon management software',
      'salon software',
      'best salon management software',
      'salon booking system',
      'salon pos system',
    ],
    heroTitle: 'Salon Management Software That Grows Your Business',
    heroSubtitle:
      'Stop managing. Start growing. Daisy\'s AI handles bookings, payments, and customer service 24/7 while you focus on what you do best.',
    intro: 'Traditional salon software helps you manage appointments and track payments. Daisy goes further — it\'s a growth platform that uses AI to bring in new clients, keep existing ones coming back, and handle the admin work that eats into your day. From solo stylists to multi-location salons, Daisy scales with your ambitions.',
    challenges: [
      {
        title: 'Missed calls mean missed revenue',
        description:
          'Industry data shows salons miss 30-40% of inbound calls. Every missed call is a potential booking lost to a competitor who answers faster.',
      },
      {
        title: 'Staff stretched thin between clients and phones',
        description:
          'Your team should focus on delivering great service, not answering phones and managing bookings between appointments.',
      },
      {
        title: 'No-shows drain your schedule',
        description:
          'Last-minute cancellations and no-shows leave holes in your calendar and revenue. Without smart reminders and deposits, the problem persists.',
      },
      {
        title: 'Finding new clients is expensive',
        description:
          'Social media ads, marketplace commissions, and flyer printing add up. Most salons lack a systematic approach to customer acquisition.',
      },
      {
        title: 'Juggling multiple tools',
        description:
          'Booking here, payments there, marketing somewhere else. Multiple subscriptions cost more and create data silos that hide business insights.',
      },
    ],
    features: [
      {
        title: '24/7 AI Receptionist',
        description:
          'Never miss a booking again. Daisy\'s AI answers calls, messages, and website inquiries in Arabic and English — processing bookings and payments without human intervention.',
      },
      {
        title: 'Smart Online Booking',
        description:
          'Clients book anytime from your website, social media, or the Daisy marketplace. AI optimizes your schedule to minimize gaps and maximize revenue.',
      },
      {
        title: 'Integrated POS & Payments',
        description:
          'Accept all payment methods with transparent pricing. No hidden transaction fees eating into your revenue.',
      },
      {
        title: 'Cashback Customer Acquisition',
        description:
          'Daisy\'s cashback rewards turn first-time visitors into loyal regulars. Reward customers for repeat bookings, referrals, and reviews.',
      },
      {
        title: 'AI-Powered Marketing',
        description:
          'Automated campaigns that target the right clients at the right time. AI personalizes offers based on booking history, preferences, and behavior.',
      },
      {
        title: 'Complete Staff Management',
        description:
          'Schedule staff, track performance, assign services, and manage permissions — all included in flat pricing, no per-staff fees.',
      },
    ],
    faqs: [
      {
        question: 'What makes Daisy different from other salon management software?',
        answer:
          'Daisy is the only salon platform that combines AI receptionist, cashback customer acquisition, and full business management in one platform. While competitors focus on operations, Daisy focuses on growth — with AI that handles bookings, payments, and marketing 24/7 in Arabic and English.',
      },
      {
        question: 'How much does salon management software cost?',
        answer:
          'Salon software ranges from free (with hidden fees like Fresha) to $400+/mo (Boulevard, Mangomint). Daisy offers flat pricing that includes AI, unlimited staff, and all features — no per-staff surcharges or feature tiers.',
      },
      {
        question: 'Can I switch from my current salon software?',
        answer:
          'Yes. Daisy provides migration support to transfer your client database, service menu, and booking history. Most businesses complete the switch in under a week with zero downtime.',
      },
      {
        question: 'Does Daisy work for salons in the Middle East?',
        answer:
          'Daisy is built for the GCC with native Arabic UI (not translated), local payment methods (Mada, Apple Pay, etc.), and full VAT compliance across UAE, KSA, Kuwait, Bahrain, Oman, and Qatar.',
      },
    ],
    relatedSolutions: ['beauty-salon-software', 'salon-appointment-scheduling', 'spa-booking-system'],
    relatedComparisons: ['daisy-vs-fresha', 'daisy-vs-vagaro', 'daisy-vs-booksy'],
  },
  {
    slug: 'spa-booking-system',
    metaTitle: 'AI Spa Booking System & Management Software | Daisy',
    metaDescription:
      'Streamline your spa with Daisy\'s AI booking system. Online reservations, AI receptionist, cashback rewards, and Arabic support for GCC spas.',
    keywords: [
      'spa booking system',
      'spa management software',
      'spa appointment software',
      'spa scheduling software',
      'online spa booking',
    ],
    heroTitle: 'Spa Booking System Powered by AI',
    heroSubtitle:
      'Give your spa guests the seamless experience they expect — from AI-powered booking to personalized treatment reminders.',
    intro: 'Spa businesses run on experience — from the first phone call to the post-treatment follow-up. Daisy ensures every touchpoint is exceptional with AI that handles inquiries, books multi-service appointments, and keeps guests coming back with cashback rewards.',
    challenges: [
      {
        title: 'Complex multi-service bookings',
        description:
          'Spa guests often book multiple services with different therapists. Managing availability across staff, rooms, and equipment requires intelligent scheduling.',
      },
      {
        title: 'High-value bookings lost to phone tag',
        description:
          'Spa packages are high-ticket items. When potential guests can\'t reach you immediately, they book elsewhere.',
      },
      {
        title: 'Guest retention is expensive',
        description:
          'Attracting spa guests costs more than salon clients. Without a loyalty strategy, you\'re constantly paying to acquire the same customer.',
      },
      {
        title: 'Premium brand experience online',
        description:
          'Your online booking should match your in-spa experience. Generic, branded-by-someone-else booking pages undermine your premium positioning.',
      },
    ],
    features: [
      {
        title: '24/7 AI Concierge',
        description:
          'Daisy\'s AI handles spa inquiries, recommends packages, and books complex multi-service appointments — all in Arabic and English.',
      },
      {
        title: 'Smart Multi-Service Scheduling',
        description:
          'AI optimizes therapist, room, and equipment availability for multi-service bookings. No double-booking, no gaps.',
      },
      {
        title: 'White-Label Booking Experience',
        description:
          'Your brand, your booking page. Daisy provides fully customizable white-label booking that matches your spa\'s premium aesthetic.',
      },
      {
        title: 'Cashback Guest Loyalty',
        description:
          'Turn first-time visitors into regulars with cashback rewards. Guests earn on every visit, creating a financial incentive to return.',
      },
      {
        title: 'Integrated POS for Retail',
        description:
          'Sell products alongside services. Track retail inventory, bundle products with treatments, and process payments in one system.',
      },
      {
        title: 'Guest Intelligence',
        description:
          'AI tracks preferences, allergies, and treatment history. Personalize every interaction and proactively suggest follow-up treatments.',
      },
    ],
    faqs: [
      {
        question: 'What features should spa booking software have?',
        answer:
          'Essential features include multi-service scheduling, resource management (rooms, equipment), POS for retail, client profiles with preferences/allergies, marketing automation, and mobile booking. Daisy adds AI concierge, cashback loyalty, and Arabic support.',
      },
      {
        question: 'Can Daisy handle multi-therapist spa bookings?',
        answer:
          'Yes. Daisy\'s AI scheduling optimizes complex multi-service bookings across therapists, rooms, and equipment — automatically preventing conflicts and minimizing gaps.',
      },
      {
        question: 'Does Daisy support spa package bookings?',
        answer:
          'Yes. Create custom packages combining multiple services, set pricing, and let AI recommend packages to guests based on their preferences and history.',
      },
    ],
    relatedSolutions: ['salon-management-software', 'beauty-salon-software', 'salon-appointment-scheduling'],
    relatedComparisons: ['daisy-vs-mindbody', 'daisy-vs-boulevard', 'daisy-vs-vagaro'],
  },
  {
    slug: 'beauty-salon-software',
    metaTitle: 'Beauty Salon Software with AI & Cashback | Daisy',
    metaDescription:
      'Complete beauty salon software with AI receptionist, client management, marketing automation, and cashback rewards. Built for the GCC and global market.',
    keywords: [
      'beauty salon software',
      'beauty business software',
      'beauty salon management',
      'hair salon software',
      'beauty salon pos',
    ],
    heroTitle: 'Beauty Salon Software Built for Growth',
    heroSubtitle:
      'The beauty industry moves fast. Your software should keep up — with AI that books, markets, and grows your salon while you create.',
    intro: 'Beauty salons need more than appointment books and payment terminals. In a competitive market, the salons that thrive are the ones that acquire clients efficiently, retain them with loyalty rewards, and deliver exceptional service. Daisy is built specifically for beauty professionals who think like business owners.',
    challenges: [
      {
        title: 'Competition is fierce',
        description:
          'New salons open constantly. Standing out requires more than great service — you need smart marketing, a loyalty strategy, and a professional online presence.',
      },
      {
        title: 'Client retention costs less than acquisition',
        description:
          'It costs 5x more to acquire a new client than keep an existing one. Most salon software focuses on operations, not retention.',
      },
      {
        title: 'Social media isn\'t enough',
        description:
          'Instagram followers don\'t equal bookings. You need a direct conversion path from discovery to booking to payment.',
      },
      {
        title: 'Growing means more complexity',
        description:
          'Adding staff, services, and locations multiplies complexity. Without smart tools, growth creates chaos.',
      },
    ],
    features: [
      {
        title: 'AI Receptionist for Beauty',
        description:
          'Handles booking calls, answers service questions, and processes payments in Arabic and English. Your virtual front desk works 24/7.',
      },
      {
        title: 'Beauty-Specific Client Profiles',
        description:
          'Track color formulas, treatment history, product preferences, and allergies. AI uses this data to personalize every interaction.',
      },
      {
        title: 'Cashback-Powered Loyalty',
        description:
          'Clients earn cashback on every visit. The financial incentive keeps them coming back and referring friends.',
      },
      {
        title: 'Marketplace Discovery',
        description:
          'Get discovered by new clients browsing the Daisy marketplace. No 20% commissions — your clients, your revenue.',
      },
      {
        title: 'AI Marketing Automation',
        description:
          'Automated birthday offers, rebooking reminders, and win-back campaigns. AI personalizes timing and offers for each client.',
      },
      {
        title: 'White-Label Brand Control',
        description:
          'Your booking page, your app, your brand. No "Powered by" logos or competitor-branded experiences.',
      },
    ],
    faqs: [
      {
        question: 'What is the best beauty salon software?',
        answer:
          'The best beauty salon software depends on your needs. For growth-focused salons wanting AI, cashback, and Arabic support, Daisy leads. For budget solopreneurs, GlossGenius ($24/mo) is affordable. For marketplace exposure, Fresha (free with fees) has the largest consumer base.',
      },
      {
        question: 'How much does beauty salon software cost?',
        answer:
          'Beauty salon software ranges from free (Fresha, with hidden fees) to $400+/mo (Mangomint, Boulevard). Daisy offers flat pricing that includes AI, unlimited staff, and all features without per-staff surcharges.',
      },
      {
        question: 'Is Daisy good for hair salons?',
        answer:
          'Yes. Daisy supports hair salon-specific features like color formula tracking, rebooking reminders for regular cuts/colors, and staff skill-based booking. The AI receptionist handles the common calls hair salons receive.',
      },
    ],
    relatedSolutions: ['salon-management-software', 'salon-appointment-scheduling', 'spa-booking-system'],
    relatedComparisons: ['daisy-vs-fresha', 'daisy-vs-glossgenius', 'daisy-vs-booksy'],
  },
  {
    slug: 'salon-appointment-scheduling',
    metaTitle: 'AI Salon Appointment Scheduling Software | Daisy',
    metaDescription:
      'Automate salon scheduling with AI. Daisy handles bookings, reduces no-shows, and optimizes your calendar — so you focus on clients, not admin.',
    keywords: [
      'salon appointment scheduling',
      'salon scheduling software',
      'appointment booking software',
      'online appointment scheduling',
      'beauty appointment system',
    ],
    heroTitle: 'Salon Appointment Scheduling, Automated by AI',
    heroSubtitle:
      'Stop playing phone tag. Let AI fill your calendar, reduce no-shows, and optimize every hour of your day.',
    intro: 'Appointment scheduling is the backbone of every salon. But manual scheduling — phone calls, DMs, back-and-forth texts — wastes hours every week. Daisy\'s AI handles the entire scheduling flow: from inquiry to booking to payment to reminder, in Arabic and English, 24/7.',
    challenges: [
      {
        title: 'Phone tag wastes everyone\'s time',
        description:
          'Clients call, you\'re with a client, they leave a voicemail, you call back, they\'re busy. This back-and-forth loses bookings.',
      },
      {
        title: 'Double-bookings and scheduling errors',
        description:
          'Manual scheduling creates conflicts. Multiple booking channels (phone, walk-in, online) without real-time sync causes double-bookings.',
      },
      {
        title: 'No-shows kill revenue',
        description:
          'Without automated reminders and deposit requirements, no-shows can eat 10-15% of your bookings.',
      },
      {
        title: 'After-hours bookings lost',
        description:
          '60% of online bookings happen outside business hours. Without 24/7 booking capability, you\'re losing evening and weekend inquiries.',
      },
    ],
    features: [
      {
        title: 'AI-Powered Self-Service Booking',
        description:
          'Clients book directly from any channel — website, phone, social media, marketplace. AI handles the conversation, checks availability, and processes payment.',
      },
      {
        title: 'Smart Schedule Optimization',
        description:
          'AI minimizes gaps between appointments, suggests optimal time slots, and maximizes your daily revenue per chair.',
      },
      {
        title: 'Automated Reminders & No-Show Protection',
        description:
          'SMS and WhatsApp reminders reduce no-shows by up to 50%. Optional deposit requirements for high-value bookings.',
      },
      {
        title: '24/7 AI Phone Handling',
        description:
          'Never miss a call. AI answers in Arabic or English, books appointments, and handles common questions — even at 2 AM.',
      },
      {
        title: 'Multi-Channel Booking Sync',
        description:
          'Website, phone, walk-in, marketplace, social — all bookings sync to one calendar in real-time. Zero conflicts.',
      },
      {
        title: 'Waitlist & Cancellation Fill',
        description:
          'When someone cancels, AI automatically contacts waitlisted clients to fill the gap. No revenue lost.',
      },
    ],
    faqs: [
      {
        question: 'What is the best salon appointment scheduling software?',
        answer:
          'For AI-powered scheduling with Arabic support, Daisy is the top choice. For basic free scheduling, Square Appointments or Fresha work. For budget scheduling only, Acuity ($16/mo) is affordable but lacks salon-specific features.',
      },
      {
        question: 'How does AI scheduling work?',
        answer:
          'Daisy\'s AI answers calls and messages, understands what service the client wants, checks real-time availability across all staff, suggests optimal time slots, processes payment or deposit, and sends confirmation — all without human intervention.',
      },
      {
        question: 'Can clients book through WhatsApp?',
        answer:
          'Yes. Daisy\'s AI chatbot handles booking conversations on WhatsApp, Instagram DMs, and website chat in Arabic and English.',
      },
      {
        question: 'How much can AI scheduling save my salon?',
        answer:
          'Salons using AI scheduling typically save 15-20 hours per week on phone calls and admin, reduce no-shows by 40-50%, and increase bookings by capturing after-hours inquiries that previously went unanswered.',
      },
    ],
    relatedSolutions: ['salon-management-software', 'beauty-salon-software', 'spa-booking-system'],
    relatedComparisons: ['daisy-vs-acuity-scheduling', 'daisy-vs-fresha', 'daisy-vs-booksy'],
  },
  // P2: 7 remaining solutions
  {
    slug: 'barbershop-software',
    metaTitle: 'Barbershop Software with AI Booking | Daisy',
    metaDescription: 'Run your barbershop smarter with AI booking, walk-in management, and cashback loyalty. No per-barber pricing.',
    keywords: ['barbershop software', 'barber booking software', 'barbershop management', 'barber scheduling app'],
    heroTitle: 'Barbershop Software That Works as Hard as You Do',
    heroSubtitle: 'Walk-ins, regulars, and everything in between — managed by AI so you focus on the chair.',
    intro: 'Barbershops run differently than salons. Walk-ins are common, regulars expect their usual, and the vibe matters. Daisy understands barbershop culture and provides tools that match — from AI that handles calls to flat pricing that doesn\'t charge per barber.',
    challenges: [
      { title: 'Walk-in management chaos', description: 'Balancing walk-ins with appointments without frustrating either group.' },
      { title: 'Per-barber pricing kills growth', description: 'Adding a new barber to the team shouldn\'t cost $30+/mo extra.' },
      { title: 'Regulars want their barber', description: 'Clients have preferences. Without smart booking, they end up with the wrong person.' },
      { title: 'No marketing beyond social media', description: 'Instagram is great for showcasing cuts, but converting followers to bookings needs a direct path.' },
    ],
    features: [
      { title: 'Walk-In + Appointment Hybrid', description: 'Manage walk-ins and scheduled appointments in one view. AI estimates wait times and notifies walk-in clients.' },
      { title: 'Flat Pricing, No Per-Barber Fees', description: 'Add your whole team without worrying about per-seat costs. One price, unlimited barbers.' },
      { title: 'AI Phone Handling', description: 'AI answers calls, books appointments, and lets regulars request their preferred barber.' },
      { title: 'Cashback Loyalty', description: 'Turn walk-ins into regulars with cashback rewards that bring them back.' },
    ],
    faqs: [
      { question: 'Is Daisy good for barbershops?', answer: 'Yes. Daisy supports walk-in management, barber preferences, flat pricing (no per-barber fees), and AI phone handling — all designed for how barbershops actually operate.' },
      { question: 'How does Daisy compare to SQUIRE for barbershops?', answer: 'SQUIRE is barbershop-specific but US-only with per-barber pricing. Daisy offers flat pricing, AI, Arabic support, and cashback that SQUIRE lacks.' },
    ],
    relatedSolutions: ['salon-management-software', 'salon-appointment-scheduling'],
    relatedComparisons: ['daisy-vs-booksy', 'daisy-vs-vagaro'],
  },
  {
    slug: 'nail-salon-software',
    metaTitle: 'Nail Salon Software with AI & Cashback | Daisy',
    metaDescription: 'Manage your nail salon with AI booking, service tracking, and cashback loyalty. Built for nail techs and salon owners.',
    keywords: ['nail salon software', 'nail salon management', 'nail salon booking', 'nail tech software'],
    heroTitle: 'Nail Salon Software Designed for Growth',
    heroSubtitle: 'From quick manicures to luxury nail art — manage bookings, retain clients, and grow with AI.',
    intro: 'Nail salons have unique needs: varied service durations, multiple techs working simultaneously, and clients who value consistency. Daisy handles the scheduling complexity while AI builds client loyalty through personalized experiences and cashback rewards.',
    challenges: [
      { title: 'Varied service durations', description: 'A quick manicure takes 30 minutes; a full nail art set takes 2+ hours. Scheduling must account for these differences.' },
      { title: 'Repeat booking is everything', description: 'Nail services need regular maintenance. Without automated rebooking, clients drift to competitors.' },
      { title: 'Walk-in heavy business', description: 'Many nail salons depend on walk-ins. Managing the queue fairly while honoring appointments is challenging.' },
    ],
    features: [
      { title: 'Service-Duration Scheduling', description: 'AI accounts for different service lengths and buffer times when booking. No more overlapping appointments.' },
      { title: 'Automatic Rebooking', description: 'AI reminds clients when it\'s time for their next appointment and books them automatically.' },
      { title: 'Walk-In Queue Management', description: 'Fair digital queue for walk-ins with estimated wait times.' },
      { title: 'Cashback Loyalty', description: 'Reward regular clients with cashback that builds with each visit.' },
    ],
    faqs: [
      { question: 'Can Daisy handle nail salon scheduling?', answer: 'Yes. Daisy supports varied service durations, multiple simultaneous techs, walk-in queues, and automatic rebooking for maintenance appointments.' },
    ],
    relatedSolutions: ['salon-management-software', 'beauty-salon-software'],
    relatedComparisons: ['daisy-vs-fresha', 'daisy-vs-glossgenius'],
  },
  {
    slug: 'med-spa-software',
    metaTitle: 'Med Spa Software with AI & Compliance | Daisy',
    metaDescription: 'AI-powered med spa management with consent forms, treatment tracking, and cashback retention. HIPAA-aware and GCC compliant.',
    keywords: ['med spa software', 'medspa management', 'aesthetic practice software', 'medical spa booking'],
    heroTitle: 'Med Spa Software for the AI Era',
    heroSubtitle: 'Clinical precision meets AI efficiency. Manage treatments, ensure compliance, and grow your practice.',
    intro: 'Med spas operate at the intersection of healthcare and beauty. You need clinical-grade record keeping, consent management, and treatment tracking — plus the marketing and client experience of a luxury business. Daisy delivers both.',
    challenges: [
      { title: 'Compliance and consent management', description: 'Medical aesthetic treatments require proper consent forms, treatment records, and compliance documentation.' },
      { title: 'High-value patient retention', description: 'Med spa treatments are expensive. Losing a patient to a competitor is costly.' },
      { title: 'Complex treatment schedules', description: 'Many treatments require multiple sessions over weeks or months. Tracking and scheduling follow-ups is complex.' },
    ],
    features: [
      { title: 'Digital Consent & Records', description: 'Secure digital consent forms and treatment records. Track before/after photos and notes.' },
      { title: 'Treatment Series Management', description: 'Schedule and track multi-session treatments. AI reminds patients of upcoming sessions.' },
      { title: 'AI Patient Concierge', description: 'AI handles inquiries about treatments, pricing, and availability in Arabic and English.' },
      { title: 'Cashback Retention', description: 'High-value patients earn cashback that incentivizes completing treatment series and returning for new ones.' },
    ],
    faqs: [
      { question: 'Is Daisy suitable for medical spas?', answer: 'Yes. Daisy supports consent forms, treatment records, multi-session scheduling, and compliance requirements. The AI concierge handles patient inquiries about treatments professionally.' },
      { question: 'How does Daisy compare to RepeatMD for med spas?', answer: 'RepeatMD is a $700/mo marketing tool requiring separate operations software. Daisy is a complete platform including AI, booking, POS, and marketing with cashback — all in one.' },
    ],
    relatedSolutions: ['spa-booking-system', 'salon-management-software'],
    relatedComparisons: ['daisy-vs-repeatmd', 'daisy-vs-boulevard', 'daisy-vs-mindbody'],
  },
  {
    slug: 'salon-pos-system',
    metaTitle: 'Salon POS System with AI & Cashback | Daisy',
    metaDescription: 'Complete salon POS with AI-powered payments, inventory tracking, and cashback rewards. Transparent pricing, no hidden fees.',
    keywords: ['salon pos system', 'salon point of sale', 'beauty salon pos', 'salon payment system'],
    heroTitle: 'Salon POS System with Built-In Growth',
    heroSubtitle: 'Process payments, track retail, and grow revenue — all from one system with transparent pricing.',
    intro: 'Your POS should do more than process payments. Daisy\'s salon POS integrates with AI booking, client profiles, and cashback rewards — turning every transaction into a growth opportunity.',
    challenges: [
      { title: 'Hidden transaction fees', description: 'Most POS systems charge 2-3% per transaction. On $10,000/mo in card payments, that\'s $200-300 in fees.' },
      { title: 'Retail tracking', description: 'Selling products alongside services requires integrated inventory and payment in one system.' },
      { title: 'Split payments and tips', description: 'Clients want to split payments, add tips, and use multiple methods. The POS needs to handle it all.' },
    ],
    features: [
      { title: 'Transparent Payment Processing', description: 'Clear pricing with no hidden fees. Know exactly what you\'re paying per transaction.' },
      { title: 'Integrated Retail & Services', description: 'Sell products and services in one checkout flow. Track inventory automatically.' },
      { title: 'Cashback at Checkout', description: 'Clients earn cashback automatically at payment. No extra steps for staff or customers.' },
      { title: 'AI Revenue Insights', description: 'AI analyzes payment patterns to recommend pricing optimizations and upsell opportunities.' },
    ],
    faqs: [
      { question: 'What POS system is best for salons?', answer: 'For beauty-specific POS with AI and cashback, Daisy leads. For hardware-first POS, Square or Toast are strong. For comprehensive features, Vagaro\'s POS is solid.' },
    ],
    relatedSolutions: ['salon-management-software', 'beauty-salon-software'],
    relatedComparisons: ['daisy-vs-square-appointments', 'daisy-vs-vagaro'],
  },
  {
    slug: 'salon-crm-software',
    metaTitle: 'AI Salon CRM Software | Client Management | Daisy',
    metaDescription: 'Manage salon clients with AI-powered CRM. Track preferences, automate marketing, and drive retention with cashback rewards.',
    keywords: ['salon crm software', 'salon client management', 'beauty crm', 'salon customer management'],
    heroTitle: 'Salon CRM Powered by AI Intelligence',
    heroSubtitle: 'Know your clients better than they know themselves. AI tracks preferences, predicts needs, and automates retention.',
    intro: 'Client relationships are the foundation of every successful salon. Daisy\'s AI-powered CRM goes beyond basic profiles — it predicts behavior, personalizes communications, and automatically engages clients to keep them coming back.',
    challenges: [
      { title: 'Client churn is invisible', description: 'By the time you notice a regular hasn\'t been in, they\'ve already found another salon.' },
      { title: 'Personalization is manual', description: 'Remembering every client\'s preferences and history requires either perfect memory or good notes.' },
      { title: 'Marketing feels generic', description: 'Blast emails to everyone don\'t perform. Personalized outreach requires data and automation.' },
    ],
    features: [
      { title: 'AI Churn Prediction', description: 'AI identifies clients at risk of leaving before they stop booking. Automatically triggers re-engagement.' },
      { title: 'Rich Client Profiles', description: 'Color formulas, product preferences, allergies, service history, spending patterns — all in one view.' },
      { title: 'Automated Personalized Marketing', description: 'AI sends the right offer to the right client at the right time. Birthday campaigns, rebooking reminders, win-back sequences.' },
      { title: 'Cashback Retention Engine', description: 'Financial incentives tied to client behavior. Reward loyalty, referrals, and reviews automatically.' },
    ],
    faqs: [
      { question: 'What CRM features do salons need?', answer: 'Essential: client profiles, booking history, automated reminders, marketing campaigns. Advanced: AI churn prediction, personalized offers, cashback loyalty, and multi-channel communication.' },
    ],
    relatedSolutions: ['salon-management-software', 'beauty-salon-software'],
    relatedComparisons: ['daisy-vs-phorest', 'daisy-vs-fresha'],
  },
  {
    slug: 'salon-marketing-software',
    metaTitle: 'AI Salon Marketing Software & Cashback | Daisy',
    metaDescription: 'Grow your salon with AI marketing automation and cashback rewards. Automated campaigns, marketplace listing, and Arabic support.',
    keywords: ['salon marketing software', 'beauty salon marketing', 'salon marketing tools', 'salon advertising'],
    heroTitle: 'Salon Marketing That Runs on Autopilot',
    heroSubtitle: 'Stop guessing. Let AI handle your marketing with campaigns that actually convert — plus cashback that keeps clients coming back.',
    intro: 'Most salon owners don\'t have time for marketing. Between servicing clients and managing operations, social media posts and email campaigns fall behind. Daisy\'s AI marketing runs on autopilot — sending the right message to the right client at the right time.',
    challenges: [
      { title: 'No time for marketing', description: 'Between clients and admin, marketing always gets pushed to "later."' },
      { title: 'Social media is unpredictable', description: 'Algorithm changes, pay-to-play, and no direct booking path make social media unreliable as a growth channel.' },
      { title: 'Acquisition costs keep rising', description: 'Google ads, social ads, and marketplace commissions get more expensive every year.' },
    ],
    features: [
      { title: 'AI Campaign Manager', description: 'AI creates, schedules, and optimizes campaigns. Birthday offers, seasonal promotions, and rebooking reminders — automated.' },
      { title: 'Cashback Acquisition Engine', description: 'Cashback rewards create a financial incentive for booking, referring friends, and leaving reviews.' },
      { title: 'Marketplace Visibility', description: 'Get discovered on the Daisy marketplace by clients actively looking for beauty services in your area.' },
      { title: 'Multi-Channel Outreach', description: 'Email, SMS, WhatsApp — reach clients on the channel they prefer. AI picks the optimal channel per client.' },
    ],
    faqs: [
      { question: 'How does AI salon marketing work?', answer: 'Daisy\'s AI analyzes your client data to identify opportunities (lapsed clients, upcoming birthdays, seasonal trends), creates personalized campaigns, and sends them at optimal times — all automatically.' },
    ],
    relatedSolutions: ['salon-crm-software', 'salon-management-software'],
    relatedComparisons: ['daisy-vs-repeatmd', 'daisy-vs-phorest'],
  },
  {
    slug: 'salon-booking-app',
    metaTitle: 'Salon Booking App with AI & Cashback | Daisy',
    metaDescription: 'Give your clients the best booking experience with Daisy\'s salon booking app. AI-powered, multi-channel, with cashback rewards.',
    keywords: ['salon booking app', 'beauty booking app', 'salon appointment app', 'hair salon booking app'],
    heroTitle: 'The Salon Booking App Clients Love',
    heroSubtitle: 'Clients book in seconds. AI handles the rest. Cashback keeps them coming back.',
    intro: 'Your clients expect to book instantly from their phone — at 10 PM, on the bus, between meetings. Daisy\'s booking app gives them that convenience while AI manages your calendar, prevents double-bookings, and fills cancellations automatically.',
    challenges: [
      { title: 'Clients expect instant booking', description: '78% of consumers prefer booking online. If your salon doesn\'t offer it, competitors do.' },
      { title: 'Multiple booking channels cause chaos', description: 'Phone, Instagram DM, walk-in, website — without sync, you get double-bookings and missed appointments.' },
      { title: 'Generic booking pages hurt your brand', description: 'A "Powered by Fresha" booking page doesn\'t reflect your salon\'s personality and sends clients to competitor listings.' },
    ],
    features: [
      { title: 'Instant Mobile Booking', description: 'Clients book in seconds from any device. Beautiful, fast, branded booking experience.' },
      { title: 'AI Schedule Management', description: 'All channels sync in real-time. AI handles conflicts, waitlists, and cancellation fills.' },
      { title: 'White-Label App Experience', description: 'Your brand on every screen. No competitor logos or marketplace distractions.' },
      { title: 'Cashback Incentives', description: 'Clients earn cashback for booking through the app, creating a habit loop.' },
    ],
    faqs: [
      { question: 'What is the best salon booking app?', answer: 'For AI-powered booking with Arabic support and cashback, Daisy leads. For free marketplace-based booking, Fresha is popular. For mobile-first, Booksy has a great app.' },
    ],
    relatedSolutions: ['salon-appointment-scheduling', 'salon-management-software'],
    relatedComparisons: ['daisy-vs-booksy', 'daisy-vs-fresha'],
  },
  {
    slug: 'beauty-business-management',
    metaTitle: 'Beauty Business Management Platform | Daisy',
    metaDescription: 'Complete beauty business management with AI. Booking, POS, staff, marketing, and cashback — all in one platform. Arabic + English.',
    keywords: ['beauty business management', 'beauty business software', 'salon business management', 'beauty industry software'],
    heroTitle: 'Beauty Business Management, Reimagined with AI',
    heroSubtitle: 'One platform for everything: booking, payments, staff, marketing, and growth. Powered by AI, built for beauty.',
    intro: 'Running a beauty business means wearing many hats: stylist, manager, marketer, accountant. Daisy consolidates every tool you need into one AI-powered platform — so you can focus on the creative work that brought you to this industry.',
    challenges: [
      { title: 'Tool sprawl', description: 'Booking tool, POS, CRM, marketing, accounting — 5+ subscriptions with no integration.' },
      { title: 'Data silos', description: 'When your tools don\'t talk to each other, you miss insights that could grow your business.' },
      { title: 'Scaling complexity', description: 'What works for one location breaks at two. Growth requires systems, not more manual work.' },
    ],
    features: [
      { title: 'All-in-One Platform', description: 'Booking, POS, CRM, marketing, inventory, reporting, and AI — one login, one subscription.' },
      { title: 'AI Business Intelligence', description: 'AI connects all your data to surface insights: revenue trends, client behavior, staff performance, growth opportunities.' },
      { title: 'Multi-Location Ready', description: 'Open your second location without opening a second set of problems. Centralized management, location-specific details.' },
      { title: 'Growth Engine Built-In', description: 'AI marketing, cashback rewards, and marketplace — acquisition and retention on autopilot.' },
    ],
    faqs: [
      { question: 'What is beauty business management software?', answer: 'Beauty business management software handles booking, payments, client management, staff scheduling, marketing, and reporting — ideally in one integrated platform. Daisy adds AI and cashback to this foundation.' },
    ],
    relatedSolutions: ['salon-management-software', 'beauty-salon-software', 'spa-booking-system'],
    relatedComparisons: ['daisy-vs-vagaro', 'daisy-vs-mindbody', 'daisy-vs-fresha'],
  },
];

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

export function getSolution(slug: string): SolutionData | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug);
}

export function getRelatedSolutions(currentSlug: string): SolutionData[] {
  const current = getSolution(currentSlug);
  if (!current) return [];
  return current.relatedSolutions
    .map((slug) => getSolution(slug))
    .filter((s): s is SolutionData => s !== undefined);
}
