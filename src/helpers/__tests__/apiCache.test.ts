import {
  getCached,
  setCache,
  getCacheKey,
  clearCache,
  clearLocaleCache,
  CACHE_KEYS,
} from '../apiCache';

describe('apiCache', () => {
  beforeEach(() => {
    // Clear cache before each test
    clearCache();
    // Reset Date.now mock if any
    jest.useRealTimers();
  });

  describe('setCache and getCached', () => {
    it('should store and retrieve cached data', () => {
      const testData = { foo: 'bar', count: 42 };
      setCache('test-key', testData);

      const result = getCached<typeof testData>('test-key');
      expect(result).toEqual(testData);
    });

    it('should return null for non-existent keys', () => {
      const result = getCached('non-existent-key');
      expect(result).toBeNull();
    });

    it('should handle different data types', () => {
      // String
      setCache('string-key', 'hello');
      expect(getCached('string-key')).toBe('hello');

      // Number
      setCache('number-key', 123);
      expect(getCached('number-key')).toBe(123);

      // Array
      setCache('array-key', [1, 2, 3]);
      expect(getCached('array-key')).toEqual([1, 2, 3]);

      // Object
      setCache('object-key', { nested: { value: true } });
      expect(getCached('object-key')).toEqual({ nested: { value: true } });

      // Null value (stored, not same as missing)
      setCache('null-key', null);
      expect(getCached('null-key')).toBeNull();
    });

    it('should overwrite existing cache entries', () => {
      setCache('overwrite-key', 'first');
      expect(getCached('overwrite-key')).toBe('first');

      setCache('overwrite-key', 'second');
      expect(getCached('overwrite-key')).toBe('second');
    });
  });

  describe('cache expiration', () => {
    it('should return null for expired cache entries', () => {
      jest.useFakeTimers();
      const now = Date.now();
      jest.setSystemTime(now);

      // Set cache with 1 second duration
      setCache('expiring-key', 'data', 1000);
      expect(getCached('expiring-key')).toBe('data');

      // Advance time by 500ms - should still be valid
      jest.setSystemTime(now + 500);
      expect(getCached('expiring-key')).toBe('data');

      // Advance time by 1001ms - should be expired
      jest.setSystemTime(now + 1001);
      expect(getCached('expiring-key')).toBeNull();
    });

    it('should delete expired entries from cache on access', () => {
      jest.useFakeTimers();
      const now = Date.now();
      jest.setSystemTime(now);

      setCache('delete-on-expire', 'data', 1000);

      // Advance past expiration
      jest.setSystemTime(now + 2000);

      // First access returns null and deletes
      expect(getCached('delete-on-expire')).toBeNull();

      // Set new value
      setCache('delete-on-expire', 'new-data', 1000);
      expect(getCached('delete-on-expire')).toBe('new-data');
    });

    it('should use default duration when not specified', () => {
      jest.useFakeTimers();
      const now = Date.now();
      jest.setSystemTime(now);

      setCache('default-duration', 'data');

      // Should still be valid after 4 minutes
      jest.setSystemTime(now + 4 * 60 * 1000);
      expect(getCached('default-duration')).toBe('data');

      // Should be expired after 5+ minutes
      jest.setSystemTime(now + 5 * 60 * 1000 + 1);
      expect(getCached('default-duration')).toBeNull();
    });
  });

  describe('getCacheKey', () => {
    it('should generate correct cache key format', () => {
      expect(getCacheKey('header', 'en')).toBe('header:en');
      expect(getCacheKey('footer', 'ar')).toBe('footer:ar');
      expect(getCacheKey('some-endpoint', 'fr')).toBe('some-endpoint:fr');
    });

    it('should work with CACHE_KEYS constants', () => {
      expect(getCacheKey(CACHE_KEYS.HEADER, 'en')).toBe('header:en');
      expect(getCacheKey(CACHE_KEYS.FOOTER_NAV, 'ar')).toBe('footer-nav:ar');
      expect(getCacheKey(CACHE_KEYS.FOOTER_SOCIAL, 'en')).toBe(
        'footer-social:en',
      );
    });
  });

  describe('clearCache', () => {
    it('should clear all cached entries', () => {
      setCache('key1', 'value1');
      setCache('key2', 'value2');
      setCache('key3', 'value3');

      expect(getCached('key1')).toBe('value1');
      expect(getCached('key2')).toBe('value2');
      expect(getCached('key3')).toBe('value3');

      clearCache();

      expect(getCached('key1')).toBeNull();
      expect(getCached('key2')).toBeNull();
      expect(getCached('key3')).toBeNull();
    });

    it('should handle empty cache', () => {
      // Should not throw when clearing empty cache
      expect(() => clearCache()).not.toThrow();
    });
  });

  describe('clearLocaleCache', () => {
    it('should clear only entries for specific locale', () => {
      setCache('header:en', 'english header');
      setCache('footer:en', 'english footer');
      setCache('header:ar', 'arabic header');
      setCache('footer:ar', 'arabic footer');

      clearLocaleCache('en');

      // English entries should be cleared
      expect(getCached('header:en')).toBeNull();
      expect(getCached('footer:en')).toBeNull();

      // Arabic entries should remain
      expect(getCached('header:ar')).toBe('arabic header');
      expect(getCached('footer:ar')).toBe('arabic footer');
    });

    it('should not affect entries without locale suffix', () => {
      setCache('global-key', 'global value');
      setCache('header:en', 'english header');

      clearLocaleCache('en');

      expect(getCached('global-key')).toBe('global value');
      expect(getCached('header:en')).toBeNull();
    });

    it('should handle non-existent locale', () => {
      setCache('header:en', 'english header');

      // Should not throw for non-existent locale
      expect(() => clearLocaleCache('fr')).not.toThrow();

      // Existing entries should remain
      expect(getCached('header:en')).toBe('english header');
    });
  });

  describe('CACHE_KEYS', () => {
    it('should have correct constant values', () => {
      expect(CACHE_KEYS.HEADER).toBe('header');
      expect(CACHE_KEYS.HEADER_TOGGLE).toBe('header-toggle');
      expect(CACHE_KEYS.HEADER_LANG).toBe('header-lang');
      expect(CACHE_KEYS.FOOTER_NAV).toBe('footer-nav');
      expect(CACHE_KEYS.FOOTER_SOCIAL).toBe('footer-social');
    });

    it('should be readonly', () => {
      // TypeScript should prevent this at compile time
      // This test verifies the values are as expected
      const keys = Object.keys(CACHE_KEYS);
      expect(keys).toHaveLength(5);
      expect(keys).toContain('HEADER');
      expect(keys).toContain('HEADER_TOGGLE');
      expect(keys).toContain('HEADER_LANG');
      expect(keys).toContain('FOOTER_NAV');
      expect(keys).toContain('FOOTER_SOCIAL');
    });
  });

  describe('integration scenarios', () => {
    it('should handle Header caching workflow', () => {
      const headerData = {
        getTheApp: 'Get The App',
        headerNavList: [{ title: 'Home', nav: '/' }],
      };

      const cacheKey = getCacheKey(CACHE_KEYS.HEADER, 'en');

      // Initially no cache
      expect(getCached(cacheKey)).toBeNull();

      // Set cache after API call
      setCache(cacheKey, headerData);

      // Subsequent calls get cached data
      expect(getCached(cacheKey)).toEqual(headerData);

      // Different locale has no cache
      const arCacheKey = getCacheKey(CACHE_KEYS.HEADER, 'ar');
      expect(getCached(arCacheKey)).toBeNull();
    });

    it('should handle Footer caching workflow', () => {
      const socialLinks = {
        facebook_url: 'https://facebook.com',
        twitter_url: 'https://twitter.com',
      };
      const navList = [{ name: 'About', nav: '/about' }];

      const socialKey = getCacheKey(CACHE_KEYS.FOOTER_SOCIAL, 'en');
      const navKey = getCacheKey(CACHE_KEYS.FOOTER_NAV, 'en');

      setCache(socialKey, socialLinks);
      setCache(navKey, navList);

      expect(getCached(socialKey)).toEqual(socialLinks);
      expect(getCached(navKey)).toEqual(navList);

      // Clear locale cache when language changes
      clearLocaleCache('en');

      expect(getCached(socialKey)).toBeNull();
      expect(getCached(navKey)).toBeNull();
    });
  });
});
