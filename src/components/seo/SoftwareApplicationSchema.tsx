export function SoftwareApplicationSchema() {
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'The Daisy',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Booking & Scheduling Software',
    operatingSystem: 'Web browser, iOS, Android',
    url: 'https://jointhedaisy.com',
    description:
      'Beauty and wellness booking management software for salons, spas, and freelance service providers. Features online booking, appointment management, client management, payment processing, and cashback rewards.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '0',
      highPrice: '250',
      offerCount: '6',
      offers: [
        // Professional Plans (for freelancers/solo professionals)
        {
          '@type': 'Offer',
          name: 'Starter Plan (Professional)',
          price: '0',
          priceCurrency: 'USD',
          description:
            'Free plan for professionals starting out. First 100 bookings free, 1 user/calendar, 1 workspace, themed profile site, schedule management, POS, client management, WhatsApp notifications, and basic support.',
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
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '500',
              unitText: 'annual',
            },
          },
          description:
            'For solo experienced professionals. 1 user/calendar, 1 workspace, unlimited bookings, online payments, automated reminders, subscription packages, marketplace visibility, advanced analytics, free data migration, and priority support.',
        },
        {
          '@type': 'Offer',
          name: 'Elite Plan (Professional)',
          price: '100',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '100',
            priceCurrency: 'USD',
            billingDuration: 'P1M',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '1000',
              unitText: 'annual',
            },
          },
          description:
            'For solo experienced professionals needing multi-location support. 1 user/calendar, 2 workspaces, 2 countries, unlimited bookings, online payments, automated reminders, advanced analytics, free data migration, and priority support.',
        },
        // Business Plans (for salons/spas with teams)
        {
          '@type': 'Offer',
          name: 'Basic Plan (Business)',
          price: '50',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '50',
            priceCurrency: 'USD',
            billingDuration: 'P1M',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '42',
              unitText: 'monthly when billed annually',
            },
          },
          description:
            'For businesses starting out. 14-day trial, 5 users/calendars, 1 workspace, unlimited bookings, POS, client management, WhatsApp notifications, themed profile site, and basic support.',
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
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '128',
              unitText: 'monthly when billed annually',
            },
          },
          description:
            'For growing businesses. 14-day trial, 10 users/calendars, 2 workspaces, unlimited bookings, online payments, automated reminders, subscription packages, marketplace visibility, and priority support.',
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
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '208',
              unitText: 'monthly when billed annually',
            },
          },
          description:
            'For established businesses with multiple locations. 14-day trial, 15 users/calendars, 4 workspaces, unlimited bookings, advanced analytics, free data migration, free assisted onboarding, and all Growth plan features.',
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
    screenshot: 'https://i.imgur.com/MNoL6BE.jpeg',
    softwareHelp: {
      '@type': 'WebPage',
      url: 'https://jointhedaisy.com/faq',
    },
    creator: {
      '@type': 'Organization',
      name: 'The Daisy',
      url: 'https://jointhedaisy.com',
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
