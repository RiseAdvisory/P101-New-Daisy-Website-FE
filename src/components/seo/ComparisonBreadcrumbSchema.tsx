interface Props {
  pageName: string;
  pageSlug: string;
  section: 'compare' | 'alternative' | 'solutions' | 'glossary' | 'guides';
  locale?: string;
}

const sectionConfig: Record<
  Props['section'],
  { label: string; path: string }
> = {
  compare: { label: 'Compare', path: 'compare' },
  alternative: { label: 'Alternatives', path: 'alternative' },
  solutions: { label: 'Solutions', path: 'solutions' },
  glossary: { label: 'Glossary', path: 'glossary' },
  guides: { label: 'Guides', path: 'guides' },
};

const BASE_URL = 'https://www.jointhedaisy.com';

export function ComparisonBreadcrumbSchema({
  pageName,
  pageSlug,
  section,
  locale = 'en',
}: Props) {
  const { label, path } = sectionConfig[section];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${BASE_URL}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: label,
        item: `${BASE_URL}/${locale}/${path}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pageName,
        item: `${BASE_URL}/${locale}/${path}/${pageSlug}`,
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
