export function FeaturesBreadcrumbSchema({
  pageName,
  pageSlug,
}: {
  pageName: string;
  pageSlug: string;
}) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://jointhedaisy.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: 'https://jointhedaisy.com/features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pageName,
        item: `https://jointhedaisy.com/features/${pageSlug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
