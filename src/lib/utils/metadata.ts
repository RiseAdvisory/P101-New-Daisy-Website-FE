import { Metadata } from 'next';

const BASE_URL = 'https://www.jointhedaisy.com';

/**
 * Generate locale-aware alternates for page metadata.
 * Includes canonical for the current locale, hreflang alternates,
 * and GCC regional hreflang tags (ar-AE, ar-SA, etc.) for targeted
 * Arabic content delivery in the Gulf region.
 *
 * @param path - The page path without locale prefix (e.g., '/business')
 * @param locale - The current locale ('en' or 'ar')
 */
export function localeAlternates(
  path: string,
  locale: string
): Metadata['alternates'] {
  return {
    canonical: `${BASE_URL}/${locale}${path}`,
    languages: {
      en: `${BASE_URL}/en${path}`,
      ar: `${BASE_URL}/ar${path}`,
      'ar-AE': `${BASE_URL}/ar${path}`,
      'ar-SA': `${BASE_URL}/ar${path}`,
      'ar-KW': `${BASE_URL}/ar${path}`,
      'ar-BH': `${BASE_URL}/ar${path}`,
      'ar-OM': `${BASE_URL}/ar${path}`,
      'ar-QA': `${BASE_URL}/ar${path}`,
      'x-default': `${BASE_URL}/en${path}`,
    },
  };
}
