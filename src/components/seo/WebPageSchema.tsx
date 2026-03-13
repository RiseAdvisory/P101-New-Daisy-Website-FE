'use client';

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
}

export function WebPageSchema({
  title,
  description,
  url,
  dateModified,
}: WebPageSchemaProps) {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    ...(dateModified && { dateModified }),
    isPartOf: {
      '@type': 'WebSite',
      name: 'The Daisy',
      url: 'https://www.jointhedaisy.com',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
    />
  );
}
