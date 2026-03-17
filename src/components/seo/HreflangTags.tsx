/**
 * HreflangTags - Renders hreflang link tags for multi-locale SEO.
 *
 * Usage in page metadata (Next.js alternates):
 *   alternates: {
 *     languages: getHreflangAlternates('/business'),
 *   }
 *
 * Or as a component in <head> for pages that need it:
 *   <HreflangTags path="/business" />
 */

const BASE_URL = 'https://www.jointhedaisy.com';

/**
 * Returns alternates object for use in Next.js Metadata.alternates.languages
 */
export function getHreflangAlternates(path: string): Record<string, string> {
  return {
    en: `${BASE_URL}/en${path}`,
    ar: `${BASE_URL}/ar${path}`,
    'x-default': `${BASE_URL}/en${path}`,
  };
}

/**
 * React component that renders hreflang <link> tags.
 * Use in layouts or pages that need hreflang in the <head>.
 */
export function HreflangTags({ path }: { path: string }) {
  return (
    <>
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en${path}`} />
      <link rel="alternate" hrefLang="ar" href={`${BASE_URL}/ar${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/en${path}`} />
    </>
  );
}
