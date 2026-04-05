interface ProfilePageSchemaProps {
  url: string;
}

export function ProfilePageSchema({ url }: ProfilePageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url,
    mainEntity: {
      '@type': 'Organization',
      name: 'The Daisy',
      alternateName: ['Daisy', 'jointhedaisy'],
      description:
        'AI-powered beauty and wellness platform helping salons, spas, clinics, and freelance professionals grow through smart booking, an AI receptionist, customer acquisition, and full white-label brand control.',
      url: 'https://www.jointhedaisy.com',
      image: 'https://www.jointhedaisy.com/icon-512.png',
      sameAs: [
        'https://www.threads.net/@thedaisy.app',
        'https://twitter.com/thedaisy_app',
        'https://www.linkedin.com/company/the-daisy/',
        'https://www.instagram.com/thedaisy.app/',
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
