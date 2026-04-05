const BASE_URL = 'https://www.jointhedaisy.com';

export function FeaturesBreadcrumbSchema({
  pageName,
  pageSlug,
  categoryName,
  categorySlug,
  locale = 'en',
}: {
  pageName: string;
  pageSlug: string;
  categoryName?: string;
  categorySlug?: string;
  locale?: string;
}) {
  const items = [
    {
      '@type': 'ListItem' as const,
      position: 1,
      name: 'Home',
      item: `${BASE_URL}/${locale}`,
    },
    {
      '@type': 'ListItem' as const,
      position: 2,
      name: 'Features',
      item: `${BASE_URL}/${locale}/features`,
    },
    {
      '@type': 'ListItem' as const,
      position: 3,
      name: pageName,
      item: `${BASE_URL}/${locale}/features/${pageSlug}`,
    },
  ];

  if (categoryName && categorySlug) {
    items.push({
      '@type': 'ListItem' as const,
      position: 4,
      name: categoryName,
      item: `${BASE_URL}/${locale}/features/${pageSlug}/${categorySlug}`,
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
