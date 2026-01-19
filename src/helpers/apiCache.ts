/**
 * Enhanced in-memory cache for API responses with SWR (stale-while-revalidate) pattern.
 * Caches header, footer, and language data to avoid repeated API calls.
 *
 * Features:
 * - Extended TTL for static content (30 minutes for headers/footers)
 * - SWR pattern: serve stale content while fetching fresh data in background
 * - Different cache durations based on content type
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
  staleAt: number; // When data becomes stale (but still usable)
}

interface CacheStore {
  [key: string]: CacheEntry<unknown>;
}

interface PendingRevalidation {
  [key: string]: boolean;
}

// Cache duration in milliseconds
const DEFAULT_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes for dynamic content
const STATIC_CACHE_DURATION = 30 * 60 * 1000; // 30 minutes for static content (header, footer)
const STALE_BUFFER = 60 * 1000; // 1 minute buffer before actual expiry

// In-memory cache store
const cache: CacheStore = {};

// Track pending revalidations to avoid duplicate fetches
const pendingRevalidations: PendingRevalidation = {};

/**
 * Get the appropriate cache duration based on cache key
 */
function getCacheDuration(key: string): number {
  const staticKeys = [
    CACHE_KEYS.HEADER,
    CACHE_KEYS.HEADER_TOGGLE,
    CACHE_KEYS.HEADER_LANG,
    CACHE_KEYS.FOOTER_NAV,
    CACHE_KEYS.FOOTER_SOCIAL,
  ];

  for (const staticKey of staticKeys) {
    if (key.startsWith(staticKey)) {
      return STATIC_CACHE_DURATION;
    }
  }

  return DEFAULT_CACHE_DURATION;
}

/**
 * Get a cached value by key.
 * Returns stale data if available while triggering background revalidation.
 */
export function getCached<T>(key: string): T | null {
  const entry = cache[key] as CacheEntry<T> | undefined;

  if (!entry) {
    return null;
  }

  const now = Date.now();

  // If completely expired, remove from cache
  if (now > entry.expiresAt) {
    delete cache[key];
    return null;
  }

  return entry.data;
}

/**
 * Check if cached data is stale (but still usable)
 */
export function isStale(key: string): boolean {
  const entry = cache[key];
  if (!entry) return true;

  return Date.now() > entry.staleAt;
}

/**
 * Check if a revalidation is already pending for this key
 */
export function isRevalidating(key: string): boolean {
  return !!pendingRevalidations[key];
}

/**
 * Mark a key as being revalidated
 */
export function markRevalidating(key: string, status: boolean): void {
  if (status) {
    pendingRevalidations[key] = true;
  } else {
    delete pendingRevalidations[key];
  }
}

/**
 * Set a value in cache with SWR support
 */
export function setCache<T>(
  key: string,
  data: T,
  duration?: number,
): void {
  const cacheDuration = duration ?? getCacheDuration(key);
  const now = Date.now();

  cache[key] = {
    data,
    timestamp: now,
    staleAt: now + cacheDuration - STALE_BUFFER,
    expiresAt: now + cacheDuration,
  };

  // Clear revalidation flag if it was set
  markRevalidating(key, false);
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
  Object.keys(pendingRevalidations).forEach((key) => delete pendingRevalidations[key]);
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
 * Get cache statistics for debugging
 */
export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: Object.keys(cache).length,
    keys: Object.keys(cache),
  };
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

/**
 * Cache durations exported for use in components
 */
export const CACHE_DURATIONS = {
  DEFAULT: DEFAULT_CACHE_DURATION,
  STATIC: STATIC_CACHE_DURATION,
  SHORT: 2 * 60 * 1000, // 2 minutes
} as const;
