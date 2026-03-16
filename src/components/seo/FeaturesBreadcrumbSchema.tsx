export function FeaturesBreadcrumbSchema({
  pageName,
  pageSlug,
  categoryName,
  categorySlug,
}: {
  pageName: string;
  pageSlug: string;
  categoryName?: string;
  categorySlug?: string;
}) {
  const items = [
    {
      '@type': 'ListItem' as const,
      position: 1,
      name: 'Home',
      item: 'https://www.jointhedaisy.com',
    },
    {
      '@type': 'ListItem' as const,
      position: 2,
      name: 'Features',
      item: 'https://www.jointhedaisy.com/features',
    },
    {
      '@type': 'ListItem' as const,
      position: 3,
      name: pageName,
      item: `https://www.jointhedaisy.com/features/${pageSlug}`,
    },
  ];

  if (categoryName && categorySlug) {
    items.push({
      '@type': 'ListItem' as const,
      position: 4,
      name: categoryName,
      item: `https://www.jointhedaisy.com/features/${pageSlug}/${categorySlug}`,
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
