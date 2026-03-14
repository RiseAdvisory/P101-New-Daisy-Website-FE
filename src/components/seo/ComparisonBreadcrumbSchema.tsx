'use client';

interface Props {
  pageName: string;
  pageSlug: string;
  section: 'compare' | 'alternative' | 'solutions' | 'glossary' | 'guides';
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

export function ComparisonBreadcrumbSchema({
  pageName,
  pageSlug,
  section,
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
        item: 'https://www.jointhedaisy.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: label,
        item: `https://www.jointhedaisy.com/${path}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pageName,
        item: `https://www.jointhedaisy.com/${path}/${pageSlug}`,
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
