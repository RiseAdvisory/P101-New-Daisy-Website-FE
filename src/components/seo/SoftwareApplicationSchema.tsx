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
      highPrice: '99',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          name: 'Free Plan',
          price: '0',
          priceCurrency: 'USD',
          description: 'Get started with essential booking features',
        },
        {
          '@type': 'Offer',
          name: 'Professional Plan',
          price: '49',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '49',
            priceCurrency: 'USD',
            billingDuration: 'P1M',
          },
          description: 'For growing beauty professionals',
        },
        {
          '@type': 'Offer',
          name: 'Business Plan',
          price: '99',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '99',
            priceCurrency: 'USD',
            billingDuration: 'P1M',
          },
          description: 'For salons and spas with multiple staff',
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
