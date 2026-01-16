export function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Daisy',
    url: 'https://jointhedaisy.com',
    logo: 'https://i.imgur.com/MNoL6BE.jpeg',
    description:
      'The Daisy is a platform connecting businesses, professionals, and customers for exceptional service experiences.',
    sameAs: [
      // Add social media links when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://jointhedaisy.com/contact',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://jointhedaisy.com/search?q={search_term_string}',
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
