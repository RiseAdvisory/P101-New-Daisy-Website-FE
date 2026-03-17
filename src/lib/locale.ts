import { cookies } from 'next/headers';

export type Locale = 'en' | 'ar';

const SUPPORTED_LOCALES: Locale[] = ['en', 'ar'];
const DEFAULT_LOCALE: Locale = 'en';

/**
 * Read the user's locale preference from the cookie.
 * For use in server components only.
 * This is a Phase 1 bridge — Phase 2 replaces this with URL segments.
 *
 * NOTE: Calling cookies() makes the route dynamically rendered in Next.js 14
 * (not statically generated). Acceptable trade-off for Phase 1. Phase 2
 * eliminates this by using URL-based locale (params.locale), which is static.
 */
export function getLocale(): Locale {
  const cookieStore = cookies();
  const localeCookie = cookieStore.get('locale')?.value;

  if (localeCookie && SUPPORTED_LOCALES.includes(localeCookie as Locale)) {
    return localeCookie as Locale;
  }

  return DEFAULT_LOCALE;
}
