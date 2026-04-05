interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
  primaryImage?: string;
}

export function WebPageSchema({
  title,
  description,
  url,
  dateModified,
  primaryImage,
}: WebPageSchemaProps) {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    ...(dateModified && { dateModified }),
    ...(primaryImage && {
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: primaryImage,
      },
    }),
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
