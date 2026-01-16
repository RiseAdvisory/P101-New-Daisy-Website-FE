/**
 * Simple in-memory cache for API responses to reduce blocking time.
 * Caches header, footer, and language data to avoid repeated API calls.
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

interface CacheStore {
  [key: string]: CacheEntry<unknown>;
}

// Cache duration in milliseconds (5 minutes default)
const DEFAULT_CACHE_DURATION = 5 * 60 * 1000;

// In-memory cache store
const cache: CacheStore = {};

/**
 * Get a cached value by key
 */
export function getCached<T>(key: string): T | null {
  const entry = cache[key] as CacheEntry<T> | undefined;

  if (!entry) {
    return null;
  }

  // Check if cache has expired
  if (Date.now() > entry.expiresAt) {
    delete cache[key];
    return null;
  }

  return entry.data;
}

/**
 * Set a value in cache
 */
export function setCache<T>(
  key: string,
  data: T,
  duration: number = DEFAULT_CACHE_DURATION,
): void {
  cache[key] = {
    data,
    timestamp: Date.now(),
    expiresAt: Date.now() + duration,
  };
}

/**
 * Generate a cache key for API requests
 */
export function getCacheKey(endpoint: string, locale: string): string {
  return `${endpoint}:${locale}`;
}

/**
 * Clear all cached data
 */
export function clearCache(): void {
  Object.keys(cache).forEach((key) => delete cache[key]);
}

/**
 * Clear cached data for a specific locale
 */
export function clearLocaleCache(locale: string): void {
  Object.keys(cache).forEach((key) => {
    if (key.endsWith(`:${locale}`)) {
      delete cache[key];
    }
  });
}

/**
 * Pre-defined cache keys for common data
 */
export const CACHE_KEYS = {
  HEADER: 'header',
  HEADER_TOGGLE: 'header-toggle',
  HEADER_LANG: 'header-lang',
  FOOTER_NAV: 'footer-nav',
  FOOTER_SOCIAL: 'footer-social',
} as const;
