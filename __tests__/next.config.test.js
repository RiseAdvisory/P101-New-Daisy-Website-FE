/**
 * Tests for Next.js image configuration security
 */
describe('Next.js Image Configuration Security', () => {
  let nextConfig;

  beforeEach(() => {
    // Require fresh config each time
    jest.resetModules();
    nextConfig = require('../next.config.mjs');
  });

  describe('Image Remote Patterns Security', () => {
    it('should only allow specific trusted domains', () => {
      const allowedHostnames = nextConfig.default.images.remotePatterns.map(
        (pattern) => pattern.hostname,
      );

      expect(allowedHostnames).toEqual([
        '*.trythedaisy.com',
        'localhost',
      ]);
    });

    it('should not allow wildcard hostname', () => {
      const hasWildcard = nextConfig.default.images.remotePatterns.some(
        (pattern) => pattern.hostname === '**',
      );

      expect(hasWildcard).toBe(false);
    });

    it('should have proper protocol restrictions', () => {
      const protocols = nextConfig.default.images.remotePatterns.map(
        (pattern) => pattern.protocol,
      );

      // All patterns should have a protocol defined
      protocols.forEach((protocol) => {
        expect(protocol).toBeDefined();
        expect(['http', 'https']).toContain(protocol);
      });
    });

    it('should allow https for production domains', () => {
      const httpsPatterns = nextConfig.default.images.remotePatterns.filter(
        (pattern) => pattern.protocol === 'https',
      );

      const productionDomains = [
        '*.trythedaisy.com',
      ];

      productionDomains.forEach((domain) => {
        expect(
          httpsPatterns.some((pattern) => pattern.hostname === domain),
        ).toBe(true);
      });
    });

    it('should allow http only for localhost', () => {
      const httpPatterns = nextConfig.default.images.remotePatterns.filter(
        (pattern) => pattern.protocol === 'http',
      );

      expect(httpPatterns).toHaveLength(1);
      expect(httpPatterns[0].hostname).toBe('localhost');
    });

    it('should not have deprecated domains configuration', () => {
      // The old 'domains' config should not be present alongside remotePatterns
      expect(nextConfig.default.images.domains).toBeUndefined();
    });
  });

  describe('Redirect Configuration', () => {
    it('should not have redirects (handled by middleware)', () => {
      // Redirects are now handled by middleware for locale-aware routing
      expect(nextConfig.default.redirects).toBeUndefined();
    });
  });

  describe('React Strict Mode', () => {
    it('should have React Strict Mode enabled', () => {
      expect(nextConfig.default.reactStrictMode).toBe(true);
    });
  });
});
