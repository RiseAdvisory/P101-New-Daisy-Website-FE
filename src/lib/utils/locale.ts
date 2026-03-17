const SUPPORTED_LOCALES = ['en', 'ar'];

/**
 * Extract the locale prefix from a pathname.
 * Returns the locale if the path starts with a supported locale, otherwise 'en'.
 *
 * Examples:
 *   '/en/business' -> 'en'
 *   '/ar/features/business' -> 'ar'
 *   '/business' -> 'en'
 */
export function getLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/');
  if (segments.length >= 2 && SUPPORTED_LOCALES.includes(segments[1])) {
    return segments[1];
  }
  return 'en';
}

/**
 * Remove the locale prefix from a pathname.
 *
 * Examples:
 *   '/en/business' -> '/business'
 *   '/ar/features/business' -> '/features/business'
 *   '/business' -> '/business'
 */
export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/');
  if (segments.length >= 2 && SUPPORTED_LOCALES.includes(segments[1])) {
    const rest = segments.slice(2).join('/');
    return `/${rest}`;
  }
  return pathname;
}

/**
 * Prefix a path with the given locale.
 * If the path already has a locale prefix, replaces it.
 *
 * Examples:
 *   localePath('/business', 'en') -> '/en/business'
 *   localePath('/en/business', 'ar') -> '/ar/business'
 *   localePath('/', 'en') -> '/en'
 */
export function localePath(path: string, locale: string): string {
  const stripped = stripLocaleFromPathname(path);
  if (stripped === '/') return `/${locale}`;
  return `/${locale}${stripped}`;
}
