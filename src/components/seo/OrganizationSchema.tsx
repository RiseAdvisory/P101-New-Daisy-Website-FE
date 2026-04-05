export function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'OnlineBusiness',
    name: 'The Daisy',
    alternateName: ['Daisy', 'jointhedaisy'],
    url: 'https://www.jointhedaisy.com',
    logo: 'https://www.jointhedaisy.com/icon-512.png',
    description:
      'The Daisy is an AI-powered beauty and wellness platform connecting businesses, professionals, and customers. Features AI receptionist, smart booking, customer acquisition, payments, and marketing tools for salons, spas, and clinics.',
    slogan: 'Grow Your Beauty Business with AI',
    brand: {
      '@type': 'Brand',
      name: 'The Daisy',
      logo: 'https://www.jointhedaisy.com/icon-512.png',
    },
    sameAs: [
      'https://www.threads.net/@thedaisy.app',
      'https://twitter.com/thedaisy_app',
      'https://www.linkedin.com/company/the-daisy/',
      'https://www.instagram.com/thedaisy.app/',
    ],
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Bahrain' },
      { '@type': 'Country', name: 'Oman' },
      { '@type': 'Country', name: 'Qatar' },
    ],
    foundingDate: '2024',
    knowsLanguage: ['en', 'ar'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: 'https://www.jointhedaisy.com/contact',
        email: 'hello@jointhedaisy.com',
        availableLanguage: ['English', 'Arabic'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: 'https://www.jointhedaisy.com/en/start-free-trial/business',
        availableLanguage: ['English', 'Arabic'],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
