export interface GuideStep {
  name: string;
  text: string;
}

export interface GuideData {
  slug: string;
  title: string;
  answer: string;
  problemExplained: string;
  steps: GuideStep[];
  howDaisyHelps: string;
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  relatedGuides: string[];
}

export const guideEntries: GuideData[] = [
  {
    slug: 'reduce-salon-no-shows',
    title: 'How Do I Reduce No-Shows at My Salon?',
    answer:
      'Reduce no-shows by implementing automated reminders (SMS + email), requiring deposits for high-value services, and using AI prediction to identify at-risk bookings. Salons using these strategies see a 30-40% reduction in no-shows.',
    problemExplained:
      'No-shows cost the average salon $67,000 per year in lost revenue (industry estimates). Each empty appointment slot represents not just lost service revenue, but also wasted staff time and a missed opportunity to serve another client. The problem is especially acute for salons relying on manual reminder calls or no confirmation system at all. Research shows that 23% of appointments are missed when no reminder is sent, dropping to 5-10% with automated multi-channel reminders.',
    steps: [
      {
        name: 'Set up automated appointment reminders',
        text: 'Configure SMS, email, and WhatsApp reminders at 24 hours and 2 hours before each appointment. Multi-channel reminders are more effective than single-channel, reducing no-shows by up to 40%.',
      },
      {
        name: 'Implement a deposit or prepayment policy',
        text: 'Require deposits for high-value services or first-time clients. Even a small deposit (10-20% of service cost) significantly reduces no-show rates because customers have financial commitment.',
      },
      {
        name: 'Create a clear cancellation policy',
        text: 'Establish and communicate a cancellation policy (e.g., 24-hour notice required). Display it during booking and in confirmation emails so expectations are set from the start.',
      },
      {
        name: 'Enable online rescheduling',
        text: 'Make it easy for clients to reschedule online rather than just not showing up. When rescheduling is friction-free, clients are more likely to move their appointment than skip it entirely.',
      },
      {
        name: 'Use AI to predict and prevent no-shows',
        text: 'AI-powered platforms can flag high-risk appointments based on client history, booking patterns, and timing. Take proactive action on flagged bookings with additional reminders or deposit requirements.',
      },
      {
        name: 'Maintain a smart waitlist',
        text: 'When cancellations happen, an automated waitlist can instantly notify interested clients and fill the gap. This turns a loss into a recovery and keeps your schedule full.',
      },
    ],
    howDaisyHelps:
      'Daisy automates all of these no-show prevention strategies out of the box. Automated multi-channel reminders (SMS, email, WhatsApp), customizable deposit requirements, AI prediction for at-risk bookings, easy online rescheduling, and a smart waitlist that fills cancellations automatically. Salons using Daisy\'s full prevention suite report no-show rates under 5%.',
    faqs: [
      {
        question: 'What is the average no-show rate for salons?',
        answer:
          'Without any prevention measures, the average salon no-show rate is 20-30%. With automated reminders alone, this drops to 10-15%. With a full prevention strategy (reminders + deposits + AI), rates can fall below 5%.',
      },
      {
        question: 'How much revenue do salons lose from no-shows?',
        answer:
          'The average salon loses an estimated $67,000 per year from no-shows, based on industry calculations. For busy multi-chair salons, this figure can exceed $100,000 annually.',
      },
      {
        question: 'Should I charge clients for no-shows?',
        answer:
          'Charging for no-shows is less effective than prevention. Deposits and prepayments reduce no-shows proactively, while post-no-show charges often damage client relationships and are difficult to collect.',
      },
      {
        question: 'What type of appointment reminders work best?',
        answer:
          'SMS reminders are most effective (95%+ open rate), followed by WhatsApp and then email. Sending reminders at two touchpoints (24 hours and 2 hours before) is optimal for reducing no-shows.',
      },
      {
        question: 'Can AI really predict salon no-shows?',
        answer:
          'Yes. AI analyzes booking history, client behavior patterns, day/time correlations, and service type to flag appointments with higher no-show probability, allowing proactive intervention.',
      },
      {
        question: 'How do I fill last-minute cancellations?',
        answer:
          'Maintain a smart waitlist. When a cancellation occurs, the system automatically notifies interested clients by SMS. Daisy\'s AI waitlist fills most cancellations within 30 minutes.',
      },
      {
        question: 'Does requiring deposits scare away new clients?',
        answer:
          'Research shows minimal impact on booking rates (less than 5% reduction) while reducing no-shows by 50-60%. The key is setting reasonable deposit amounts (10-20%) and communicating the policy clearly.',
      },
      {
        question: 'What salon software helps prevent no-shows?',
        answer:
          'Daisy provides the most comprehensive no-show prevention suite with automated multi-channel reminders, AI prediction, smart deposits, easy rescheduling, and automated waitlist management -- all included in every plan.',
      },
    ],
    metaTitle: 'How to Reduce Salon No-Shows by 40% | Proven Strategies',
    metaDescription:
      'Learn proven strategies to reduce salon no-shows by 30-40%. Automated reminders, deposits, AI prediction, and smart waitlists -- with step-by-step implementation guide.',
    relatedGuides: ['get-more-salon-clients', 'choose-best-salon-software'],
  },
  {
    slug: 'get-more-salon-clients',
    title: 'How Do I Get More Clients for My Salon?',
    answer:
      'Grow your salon client base through a combination of online marketplace visibility, cashback loyalty programs, automated marketing campaigns, Google Business optimization, and AI-powered customer acquisition tools.',
    problemExplained:
      'The beauty industry is highly competitive, with the average salon competing against 8-12 nearby businesses for the same customer base. Traditional marketing (flyers, word-of-mouth) has limited reach, while digital marketing requires expertise most salon owners lack. The cost of acquiring a new salon client averages $25-50 through paid advertising. Salon owners need scalable, automated acquisition channels that work while they focus on delivering great service.',
    steps: [
      {
        name: 'Optimize your Google Business Profile',
        text: 'Claim and optimize your Google Business listing with professional photos, accurate hours, services menu, and enable "Reserve with Google" booking. 46% of all Google searches have local intent.',
      },
      {
        name: 'List on a discovery marketplace',
        text: 'Join a beauty marketplace like Daisy where new customers actively search for services. Marketplace discovery brings clients who are ready to book -- not just browsing.',
      },
      {
        name: 'Launch a cashback loyalty program',
        text: 'Offer cashback rewards on bookings to incentivize first-time visits and repeat business. Cashback programs increase customer lifetime value by 20-30% compared to traditional loyalty cards.',
      },
      {
        name: 'Set up automated marketing campaigns',
        text: 'Use AI-powered marketing to send targeted promotions, re-engagement emails to lapsed clients, birthday offers, and referral incentives -- all automatically.',
      },
      {
        name: 'Enable 24/7 booking availability',
        text: 'Install an AI receptionist that answers calls, messages, and booking inquiries around the clock. Beauty businesses miss up to 35% of calls outside hours -- each one is a potential new client.',
      },
      {
        name: 'Collect and showcase reviews',
        text: 'Actively request reviews after appointments. Salons with 50+ reviews and 4.5+ stars attract 3x more new bookings than those without. Automate review requests via SMS after each visit.',
      },
    ],
    howDaisyHelps:
      'Daisy provides 360-degree customer acquisition: marketplace discovery brings new clients, cashback keeps them coming back, AI marketing automates promotions, and the AI receptionist ensures you never miss a lead. All channels work together to grow your client base automatically.',
    faqs: [
      {
        question: 'How do salons get new clients in 2026?',
        answer:
          'Modern salons acquire clients through digital discovery (Google, marketplaces), cashback incentives, social media, automated marketing, and AI-powered lead capture. The most effective approach combines multiple channels.',
      },
      {
        question: 'How much does it cost to acquire a new salon client?',
        answer:
          'Through paid ads, $25-50 per client. Through organic marketplace discovery (like Daisy\'s cashback marketplace), acquisition costs are significantly lower because clients come to you already motivated to book.',
      },
      {
        question: 'What is the best marketing strategy for a salon?',
        answer:
          'The most cost-effective strategy combines marketplace visibility (for discovery), cashback loyalty (for retention), automated email/SMS campaigns (for re-engagement), and Google Business optimization (for local search).',
      },
      {
        question: 'How can I compete with bigger salons in my area?',
        answer:
          'Technology levels the playing field. A small salon with AI booking, automated marketing, and cashback rewards can provide a more compelling customer experience than a larger competitor using manual processes.',
      },
      {
        question: 'Does social media marketing work for salons?',
        answer:
          'Social media is great for brand building but converts at lower rates than search and marketplace channels. Use social for awareness, but invest in channels where customers are actively looking to book.',
      },
      {
        question: 'How do I get clients to come back after their first visit?',
        answer:
          'Cashback rewards, automated follow-up messages, birthday offers, and re-engagement campaigns. Daisy\'s AI identifies clients at risk of churning and triggers targeted retention campaigns.',
      },
    ],
    metaTitle: 'How to Get More Salon Clients in 2026 | Growth Strategies',
    metaDescription:
      'Learn how to attract more clients to your salon with marketplace discovery, cashback programs, AI marketing, and 24/7 booking. Step-by-step client acquisition guide.',
    relatedGuides: ['reduce-salon-no-shows', 'choose-best-salon-software'],
  },
  {
    slug: 'choose-best-salon-software',
    title: 'How Do I Choose the Best Salon Software?',
    answer:
      'Evaluate salon software based on core features (booking, POS, CRM), growth tools (marketing, AI, cashback), pricing transparency (watch for per-staff fees and commissions), GCC/Arabic support if needed, and data migration support.',
    problemExplained:
      'With over 50 salon software options on the market, choosing the right one is overwhelming. Many platforms advertise low starting prices but add per-staff fees, transaction charges, and marketplace commissions that significantly increase the real cost. Switching costs are high once your data is locked in, so the initial decision matters. The best approach is to evaluate based on total cost of ownership, growth capabilities (not just operations), and long-term flexibility.',
    steps: [
      {
        name: 'List your must-have features',
        text: 'Start with non-negotiables: online booking, payment processing, client management, and staff scheduling. Then add growth features: marketing automation, AI capabilities, and customer acquisition tools.',
      },
      {
        name: 'Calculate the true total cost',
        text: 'Look beyond the base price. Add per-staff fees, transaction fees (typically 2-3%), marketplace commissions, and premium feature costs. A $25/month plan can become $200+ with hidden costs.',
      },
      {
        name: 'Check growth vs operations focus',
        text: 'Operations-only tools help you manage what you have. Growth platforms (like Daisy) actively help you acquire new customers, increase retention, and grow revenue. Choose based on your business goals.',
      },
      {
        name: 'Verify language and market support',
        text: 'If you serve Arabic-speaking clients or operate in the GCC, ensure native Arabic support (not just a translation layer), local payment methods, and regional compliance features.',
      },
      {
        name: 'Evaluate AI capabilities',
        text: 'AI is transforming salon software. Look for AI receptionist, smart scheduling, predictive analytics, and automated marketing. These features can save 10+ hours per week and increase revenue.',
      },
      {
        name: 'Test the migration process',
        text: 'Before committing, ask about data migration from your current system. The best platforms offer free migration assistance and can import your client records, appointment history, and business data.',
      },
    ],
    howDaisyHelps:
      'Daisy checks every box: comprehensive features, transparent flat pricing (no per-staff or transaction fees), AI-powered growth tools, native Arabic/English support, and free data migration on the Business plan. Start with a 14-day free trial to experience it yourself.',
    faqs: [
      {
        question: 'What is the best salon software in 2026?',
        answer:
          'The best salon software depends on your needs. For growth-focused businesses wanting AI, cashback, and white-label branding, Daisy leads. For budget-conscious single-chair operators, simpler tools may suffice. Always evaluate total cost including hidden fees.',
      },
      {
        question: 'What hidden fees should I watch for in salon software?',
        answer:
          'Common hidden fees: per-staff charges ($5-15/staff/month), transaction fees (2-3% per payment), marketplace commissions (20-30%), premium feature upsells, and hardware costs. Daisy charges a flat monthly fee with none of these.',
      },
      {
        question: 'Should I choose salon software with a marketplace?',
        answer:
          'If customer acquisition is a priority, yes. But beware of marketplace commissions (up to 30% per booking on some platforms). Daisy\'s marketplace has zero commission -- you keep 100% of booking revenue.',
      },
      {
        question: 'How important are AI features in salon software?',
        answer:
          'Increasingly important. AI receptionist alone can recover 35% of missed calls. Smart scheduling reduces gaps. Automated marketing saves 5-10 hours weekly. AI is the biggest differentiator in modern salon software.',
      },
      {
        question: 'Can I try salon software before buying?',
        answer:
          'Most reputable platforms offer free trials. Daisy provides a 14-day free trial on all plans with no credit card required, so you can fully evaluate the platform before committing.',
      },
      {
        question: 'How do I switch from my current salon software?',
        answer:
          'Check if your current platform allows data export. Then choose a new platform with migration support. Daisy\'s Business plan includes free assisted migration from any major platform (Fresha, Booksy, Vagaro, etc.).',
      },
      {
        question: 'Is free salon software worth it?',
        answer:
          'Free salon software typically monetizes through marketplace commissions, transaction fees, or limited features. Calculate the total cost -- a "free" platform charging 20% commission may cost more than a paid platform with flat pricing.',
      },
      {
        question: 'What salon software works best for multi-location businesses?',
        answer:
          'Multi-location salons need centralized management, per-location analytics, and consistent branding. Daisy supports up to 4 locations on the Business plan with white-label branding and unified reporting.',
      },
    ],
    metaTitle: 'How to Choose the Best Salon Software in 2026 | Buyer\'s Guide',
    metaDescription:
      'Step-by-step guide to choosing salon software. Compare features, pricing models, AI capabilities, and hidden fees. Find the right platform for your beauty business.',
    relatedGuides: ['reduce-salon-no-shows', 'get-more-salon-clients'],
  },
  {
    slug: 'switch-from-fresha',
    title: 'How Do I Switch from Fresha to Another Platform?',
    answer:
      'Switch from Fresha by exporting your client data, choosing a platform with migration support (like Daisy\'s free migration), setting up your new system in parallel, and transitioning clients with clear communication.',
    problemExplained:
      'Fresha\'s recent pricing changes -- introducing paid features and new fees to a platform that was previously free -- have prompted many salon owners to explore alternatives. However, switching feels risky because of client data, booking history, and the learning curve. The key is planning: export your data first, set up the new platform alongside Fresha, and make a clean switch once everything is tested.',
    steps: [
      {
        name: 'Export your data from Fresha',
        text: 'Download your client list, appointment history, and financial records from Fresha. Go to Settings > Data Export to get CSV files. Save these securely -- this is your most valuable business asset.',
      },
      {
        name: 'Choose your new platform',
        text: 'Evaluate alternatives based on features, pricing, and migration support. Key factors: does it offer AI features Fresha lacks? Is pricing transparent? Does it support your market (Arabic, GCC)?',
      },
      {
        name: 'Set up the new platform in parallel',
        text: 'Import your client data and configure services, staff, and settings in the new system while Fresha is still running. This ensures zero downtime during the transition.',
      },
      {
        name: 'Test everything before switching',
        text: 'Book test appointments, process test payments, verify reminders work, and ensure all integrations (Google Calendar, payment processors) are configured correctly.',
      },
      {
        name: 'Communicate the change to clients',
        text: 'Send a professional email/SMS to all clients with your new booking link. Emphasize the benefits (better experience, cashback rewards, etc.) rather than just the change.',
      },
      {
        name: 'Deactivate Fresha and go live',
        text: 'Once confirmed, deactivate your Fresha account and redirect all booking channels to your new platform. Monitor closely for the first 2 weeks to catch any issues.',
      },
    ],
    howDaisyHelps:
      'Daisy makes switching from Fresha seamless. Free data migration (Business plan) imports all your client records and history. You get features Fresha never offered: AI receptionist, cashback loyalty, white-label branding, and Arabic support. Plus transparent flat pricing with no marketplace commissions.',
    faqs: [
      {
        question: 'Can I export my data from Fresha?',
        answer:
          'Yes. Fresha allows data export of client lists, appointment history, and financial records via CSV. Go to Settings > Data Export in your Fresha dashboard.',
      },
      {
        question: 'What is the best Fresha alternative in 2026?',
        answer:
          'Daisy is the top Fresha alternative for salons wanting AI features, cashback loyalty, and transparent pricing. Unlike Fresha\'s evolving fee structure, Daisy offers flat pricing from $50/month with no commissions.',
      },
      {
        question: 'Will I lose my clients if I switch from Fresha?',
        answer:
          'No. Export your client data and import it into your new platform. Send a professional transition email with your new booking link. Most clients follow their salon, not the booking platform.',
      },
      {
        question: 'How long does it take to switch from Fresha?',
        answer:
          'Typically 3-5 days for a full transition. With Daisy\'s assisted migration, the data import takes 24-48 hours, and you can run both systems in parallel during the transition.',
      },
      {
        question: 'Is Fresha still free?',
        answer:
          'Fresha has been introducing paid features, transaction fees, and premium tiers. While a basic free plan may still exist, most salons need paid features, making the true cost comparable to or higher than flat-rate alternatives like Daisy.',
      },
      {
        question: 'What features does Daisy have that Fresha doesn\'t?',
        answer:
          'Daisy offers several features Fresha lacks: AI voice receptionist, cashback customer acquisition, full white-label branding, native Arabic support, and transparent flat pricing with no transaction fees or marketplace commissions.',
      },
    ],
    metaTitle: 'How to Switch from Fresha | Migration Guide 2026',
    metaDescription:
      'Step-by-step guide to switching from Fresha to a better salon platform. Export data, migrate clients, and transition smoothly with zero downtime.',
    relatedGuides: ['choose-best-salon-software', 'get-more-salon-clients'],
  },
  {
    slug: 'set-up-online-booking-salon',
    title: 'How Do I Set Up Online Booking for My Salon?',
    answer:
      'Set up online booking by choosing salon software with integrated scheduling, configuring your services and staff availability, embedding the booking widget on your website, enabling Reserve with Google, and promoting your booking link across all channels.',
    problemExplained:
      'Many salons still rely on phone calls and walk-ins for bookings, missing out on the 67% of customers who prefer to book online. Without online booking, salons lose clients to competitors who offer it, miss after-hours inquiries, and spend staff time on phone calls that could be automated. Setting up online booking is one of the highest-ROI investments a salon can make.',
    steps: [
      {
        name: 'Choose salon booking software',
        text: 'Select a platform that includes online booking, calendar management, and automated reminders. Daisy offers AI-powered booking with no transaction fees starting at $50/month.',
      },
      {
        name: 'Configure your services and pricing',
        text: 'Add all services with accurate descriptions, durations, and pricing. Group them into categories (hair, nails, skin, etc.) for easy navigation.',
      },
      {
        name: 'Set up staff availability',
        text: 'Configure each staff member\'s working hours, break times, and service capabilities. The system will only show available slots to customers.',
      },
      {
        name: 'Customize your booking page',
        text: 'Add your logo, brand colors, and photos. With Daisy\'s white-label feature, your booking page looks like YOUR website, not a third-party platform.',
      },
      {
        name: 'Add booking to your website and social media',
        text: 'Embed the booking widget on your website, add a "Book Now" button to Instagram and Facebook, and enable Reserve with Google for direct search bookings.',
      },
      {
        name: 'Set up payment and cancellation policies',
        text: 'Configure whether to require deposits, enable prepayment, and set your cancellation policy. These settings significantly reduce no-shows.',
      },
    ],
    howDaisyHelps:
      'Daisy makes online booking setup effortless: configure your services and staff, customize your booking page with your branding, and go live in under a day. AI-powered scheduling optimizes appointments, automated reminders reduce no-shows, and the 24/7 AI receptionist handles inquiries even when you\'re busy.',
    faqs: [
      {
        question: 'How long does it take to set up online booking?',
        answer:
          'With modern platforms like Daisy, you can set up online booking in 1-2 hours. Add your services, configure staff schedules, customize branding, and share your booking link.',
      },
      {
        question: 'Do I need a website to accept online bookings?',
        answer:
          'No. Daisy provides a standalone booking page you can share directly via link, QR code, or social media. Having a website helps, but isn\'t required.',
      },
      {
        question: 'How much does online booking software cost for salons?',
        answer:
          'Online booking is included in most salon management platforms. Daisy starts at $50/month with no additional booking fees. Some platforms charge per-booking fees of $1-3, which add up quickly.',
      },
      {
        question: 'Can clients book through Instagram or Google?',
        answer:
          'Yes. Daisy integrates with Google Reserve for direct booking from search results, and you can add "Book Now" links to Instagram, Facebook, WhatsApp, and any social platform.',
      },
      {
        question: 'Will online booking work with my current website?',
        answer:
          'Yes. Most salon booking systems provide an embeddable widget or iframe that works with any website platform (WordPress, Squarespace, Wix, custom sites, etc.).',
      },
      {
        question: 'How do I handle walk-ins alongside online bookings?',
        answer:
          'Daisy manages both seamlessly. Walk-ins are added to the live calendar instantly, and online availability updates in real-time. No double-booking risk.',
      },
    ],
    metaTitle: 'How to Set Up Online Booking for Your Salon | Complete Guide',
    metaDescription:
      'Step-by-step guide to setting up online salon booking. Configure services, embed on your website, enable Google booking, and start accepting appointments 24/7.',
    relatedGuides: ['reduce-salon-no-shows', 'get-more-salon-clients'],
  },
];

export function getGuide(slug: string): GuideData | undefined {
  return guideEntries.find((entry) => entry.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guideEntries.map((entry) => entry.slug);
}
