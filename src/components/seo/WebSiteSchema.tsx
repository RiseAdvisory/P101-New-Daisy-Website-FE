export function WebSiteSchema() {
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Daisy',
    url: 'https://www.jointhedaisy.com',
    description:
      'AI-powered beauty and wellness platform connecting businesses, professionals, and customers.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
    />
  );
}
