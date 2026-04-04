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
 * Returns alternates object for use in Next.js Metadata.alternates.languages.
 * Includes GCC regional hreflang tags for targeted Arabic delivery.
 */
export function getHreflangAlternates(path: string): Record<string, string> {
  return {
    en: `${BASE_URL}/en${path}`,
    ar: `${BASE_URL}/ar${path}`,
    'ar-AE': `${BASE_URL}/ar${path}`,
    'ar-SA': `${BASE_URL}/ar${path}`,
    'ar-KW': `${BASE_URL}/ar${path}`,
    'ar-BH': `${BASE_URL}/ar${path}`,
    'ar-OM': `${BASE_URL}/ar${path}`,
    'ar-QA': `${BASE_URL}/ar${path}`,
    'x-default': `${BASE_URL}/en${path}`,
  };
}

/**
 * React component that renders hreflang <link> tags.
 * Use in layouts or pages that need hreflang in the <head>.
 * Includes GCC regional hreflang for targeted Arabic delivery.
 */
export function HreflangTags({ path }: { path: string }) {
  return (
    <>
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en${path}`} />
      <link rel="alternate" hrefLang="ar" href={`${BASE_URL}/ar${path}`} />
      <link rel="alternate" hrefLang="ar-AE" href={`${BASE_URL}/ar${path}`} />
      <link rel="alternate" hrefLang="ar-SA" href={`${BASE_URL}/ar${path}`} />
      <link rel="alternate" hrefLang="ar-KW" href={`${BASE_URL}/ar${path}`} />
      <link rel="alternate" hrefLang="ar-BH" href={`${BASE_URL}/ar${path}`} />
      <link rel="alternate" hrefLang="ar-OM" href={`${BASE_URL}/ar${path}`} />
      <link rel="alternate" hrefLang="ar-QA" href={`${BASE_URL}/ar${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/en${path}`} />
    </>
  );
}
