interface BreadcrumbItem {
  name: string;
  /** Full URL (legacy) or path without locale prefix, e.g. '/faq' */
  url: string;
}

interface PageBreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  locale?: string;
}

const BASE_URL = 'https://www.jointhedaisy.com';

/**
 * Extract path from a full URL or return as-is if already a path.
 * e.g. 'https://www.jointhedaisy.com/faq' → '/faq'
 *      '/faq' → '/faq'
 */
function toPath(urlOrPath: string): string {
  if (urlOrPath.startsWith('http')) {
    try {
      const u = new URL(urlOrPath);
      return u.pathname === '/' ? '' : u.pathname;
    } catch {
      return urlOrPath;
    }
  }
  return urlOrPath;
}

export function PageBreadcrumbSchema({
  items,
  locale = 'en',
}: PageBreadcrumbSchemaProps) {
  if (!items || items.length === 0) return null;

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
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${BASE_URL}/${locale}${toPath(item.url)}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
