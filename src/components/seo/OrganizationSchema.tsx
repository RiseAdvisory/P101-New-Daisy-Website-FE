export function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Daisy',
    url: 'https://www.jointhedaisy.com',
    logo: 'https://www.jointhedaisy.com/icon-512.png',
    description:
      'The Daisy is a platform connecting businesses, professionals, and customers for exceptional service experiences.',
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
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://www.jointhedaisy.com/contact',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.jointhedaisy.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
