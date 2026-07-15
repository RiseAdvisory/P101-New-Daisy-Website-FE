export function SoftwareApplicationSchema() {
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'The Daisy',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Booking & Scheduling Software',
    operatingSystem: 'Web browser, iOS, Android',
    url: 'https://www.jointhedaisy.com',
    description:
      'Beauty and wellness booking management software for salons, spas, and freelance service providers. Features online booking, appointment management, client management, payment processing, and cashback rewards.',
    // Prices mirror the live /pricing page (monthly billing only — annual
    // billing is currently hidden). Keep in sync with
    // src/lib/constants/pricing/v3/pricingV3Business.ts and
    // pricingV3Professional.ts when tiers change.
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '1',
      highPrice: '250',
      offerCount: '6',
      offers: [
        // Solo Professional Plans (freelancers/solo professionals)
        {
          '@type': 'Offer',
          name: 'Starter Plan (Solo Professional)',
          price: '1',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1',
            priceCurrency: 'USD',
            billingDuration: 'P1M',
          },
          description:
            'For solo professionals getting started. 14-day free trial, no card required. $1 per month keeps the workspace active; an additional $25 per month applies in any calendar month with more than 5 appointments. Branded booking site, personal service menu, WhatsApp and Instagram booking, appointment scheduling, payments, reviews and client records, and 50 AI receptionist conversations.',
        },
        {
          '@type': 'Offer',
          name: 'Professional Plan',
          price: '50',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '50',
            priceCurrency: 'USD',
            billingDuration: 'P1M',
          },
          description:
            'For solo professionals growing their client base. Everything in Starter plus online payments with cancellation policy, automated reminders, prepaid service packages, detailed reviews and feedback, and priority support.',
        },
        {
          '@type': 'Offer',
          name: 'Elite Plan (Solo Professional)',
          price: '100',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '100',
            priceCurrency: 'USD',
            billingDuration: 'P1M',
          },
          description:
            'For high-volume solo professionals. Everything in Professional plus 2 workspaces across 2 countries, advanced AI receptionist customization, email and WhatsApp template customization, advanced analytics, and free data migration with assisted onboarding.',
        },
        // Business Plans (salons/spas with teams)
        {
          '@type': 'Offer',
          name: 'Basic Plan (Business)',
          price: '1',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1',
            priceCurrency: 'USD',
            billingDuration: 'P1M',
          },
          description:
            'For small teams getting online. 14-day free trial, no card required. $1 per month keeps the workspace active; an additional $50 per month applies in any calendar month with more than 5 appointments. 5 team members, 1 workspace, branded booking site, team calendar, payments, customer messaging, and 50 AI receptionist conversations.',
        },
        {
          '@type': 'Offer',
          name: 'Growth Plan (Business)',
          price: '150',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '150',
            priceCurrency: 'USD',
            billingDuration: 'P1M',
          },
          description:
            'For active salons and spas. Everything in Basic plus 10 team members, 2 workspaces, online payments, automated reminders, reviews, customer follow-up tools, and priority support.',
        },
        {
          '@type': 'Offer',
          name: 'Business Plan',
          price: '250',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '250',
            priceCurrency: 'USD',
            billingDuration: 'P1M',
          },
          description:
            'For growing businesses with multiple branches. Everything in Growth plus 15 team members, 4 workspaces, advanced analytics, AI customization, free data migration, and assisted onboarding.',
        },
      ],
    },
    featureList: [
      'Online appointment booking',
      'Client management and CRM',
      'Staff scheduling and management',
      'Payment processing',
      'Cashback rewards program',
      'Promotional campaigns',
      'Business analytics and reporting',
      'Multi-language support (English/Arabic)',
      'Mobile app for iOS and Android',
      'Real-time availability calendar',
    ],
    screenshot: '/images/og/og-default.jpg',
    softwareHelp: {
      '@type': 'WebPage',
      url: 'https://www.jointhedaisy.com/faq',
    },
    creator: {
      '@type': 'Organization',
      name: 'The Daisy',
      url: 'https://www.jointhedaisy.com',
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: [
        'Salons',
        'Spas',
        'Beauty professionals',
        'Wellness service providers',
        'Freelance stylists',
        'Barber shops',
      ],
    },
    keywords: [
      'salon booking software',
      'spa management system',
      'beauty booking app',
      'wellness scheduling software',
      'appointment booking system',
      'salon management software',
      'beauty business software',
      'freelance stylist booking',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(softwareApplicationSchema),
      }}
    />
  );
}
