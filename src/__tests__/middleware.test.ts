/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server';
import { middleware } from '../middleware';

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch;

// Mock console.warn to track calls
const mockConsoleWarn = jest
  .spyOn(console, 'warn')
  .mockImplementation(() => {});

describe('middleware', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetAllMocks();
    process.env = { ...originalEnv };
    process.env.PRERENDER_TOKEN = 'test-token';

    // Default mock response for prerender service
    mockFetch.mockResolvedValue({
      body: 'prerendered content',
      status: 200,
      statusText: 'OK',
      headers: new Headers({ 'content-type': 'text/html' }),
    });
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('compliance pages', () => {
    const compliancePages = [
      '/privacy-policy',
      '/terms',
      '/terms-conditions',
      '/data-deletion',
      '/cookie-policy',
    ];

    it.each(compliancePages)(
      'should skip prerendering for %s even for bots',
      async (pathname) => {
        const request = new NextRequest(`https://example.com${pathname}`, {
          headers: { 'user-agent': 'googlebot' },
        });

        const response = await middleware(request);

        // Should return NextResponse.next() (no prerendering)
        expect(response.headers.get('x-middleware-next')).toBe('1');
        expect(mockFetch).not.toHaveBeenCalled();
      },
    );
  });

  describe('bot detection', () => {
    const botUserAgents = [
      'Googlebot/2.1 (+http://www.google.com/bot.html)',
      'Mozilla/5.0 (compatible; bingbot/2.0)',
      'facebookexternalhit/1.1',
      'Twitterbot/1.0',
      'LinkedInBot/1.0',
      'Slackbot-LinkExpanding 1.0',
      'Discordbot/2.0',
      'TelegramBot (like TwitterBot)',
      'WhatsApp/2.0',
    ];

    it.each(botUserAgents)(
      'should proxy %s requests to prerender service',
      async (userAgent) => {
        const request = new NextRequest('https://example.com/some-page', {
          headers: { 'user-agent': userAgent },
        });

        await middleware(request);

        expect(mockFetch).toHaveBeenCalledTimes(1);
        const fetchCall = mockFetch.mock.calls[0][0] as Request;
        expect(fetchCall.url).toBe(
          'https://service.prerender.io/https://example.com/some-page',
        );
        expect(fetchCall.headers.get('X-Prerender-Token')).toBe('test-token');
        expect(fetchCall.headers.get('X-Prerender-Int-Type')).toBe('NextJS');
      },
    );

    it('should not proxy non-bot requests', async () => {
      const request = new NextRequest('https://example.com/page', {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      });

      const response = await middleware(request);

      expect(response.headers.get('x-middleware-next')).toBe('1');
      expect(mockFetch).not.toHaveBeenCalled();
    });

    it('should handle empty user-agent gracefully', async () => {
      const request = new NextRequest('https://example.com/page', {
        headers: {},
      });

      const response = await middleware(request);

      expect(response.headers.get('x-middleware-next')).toBe('1');
      expect(mockFetch).not.toHaveBeenCalled();
    });
  });

  describe('x-prerender header', () => {
    it('should skip prerendering when x-prerender header is present', async () => {
      const request = new NextRequest('https://example.com/page', {
        headers: {
          'user-agent': 'googlebot',
          'x-prerender': '1',
        },
      });

      const response = await middleware(request);

      expect(response.headers.get('x-middleware-next')).toBe('1');
      expect(mockFetch).not.toHaveBeenCalled();
    });
  });

  describe('file extensions', () => {
    const staticExtensions = [
      '.js',
      '.css',
      '.png',
      '.jpg',
      '.gif',
      '.svg',
      '.ico',
      '.pdf',
      '.woff',
      '.ttf',
      '.webmanifest',
    ];

    it.each(staticExtensions)(
      'should skip prerendering for %s files even for bots',
      async (ext) => {
        const request = new NextRequest(
          `https://example.com/assets/file${ext}`,
          {
            headers: { 'user-agent': 'googlebot' },
          },
        );

        const response = await middleware(request);

        expect(response.headers.get('x-middleware-next')).toBe('1');
        expect(mockFetch).not.toHaveBeenCalled();
      },
    );

    it('should handle uppercase extensions', async () => {
      const request = new NextRequest('https://example.com/image.PNG', {
        headers: { 'user-agent': 'googlebot' },
      });

      const response = await middleware(request);

      expect(response.headers.get('x-middleware-next')).toBe('1');
      expect(mockFetch).not.toHaveBeenCalled();
    });
  });

  describe('PRERENDER_TOKEN handling', () => {
    it('should skip prerendering and warn when token is missing', async () => {
      delete process.env.PRERENDER_TOKEN;

      const request = new NextRequest('https://example.com/page', {
        headers: { 'user-agent': 'googlebot' },
      });

      const response = await middleware(request);

      expect(response.headers.get('x-middleware-next')).toBe('1');
      expect(mockFetch).not.toHaveBeenCalled();
      expect(mockConsoleWarn).toHaveBeenCalledWith(
        'PRERENDER_TOKEN is not configured; bots will be served directly without prerendering',
      );
    });

    it('should skip prerendering and warn when token is empty string', async () => {
      process.env.PRERENDER_TOKEN = '';

      const request = new NextRequest('https://example.com/page', {
        headers: { 'user-agent': 'googlebot' },
      });

      const response = await middleware(request);

      expect(response.headers.get('x-middleware-next')).toBe('1');
      expect(mockFetch).not.toHaveBeenCalled();
      expect(mockConsoleWarn).toHaveBeenCalledWith(
        'PRERENDER_TOKEN is not configured; bots will be served directly without prerendering',
      );
    });

    it('should use token when configured', async () => {
      process.env.PRERENDER_TOKEN = 'my-secret-token';

      const request = new NextRequest('https://example.com/page', {
        headers: { 'user-agent': 'googlebot' },
      });

      await middleware(request);

      expect(mockFetch).toHaveBeenCalledTimes(1);
      const fetchCall = mockFetch.mock.calls[0][0] as Request;
      expect(fetchCall.headers.get('X-Prerender-Token')).toBe('my-secret-token');
    });
  });

  describe('prerender response handling', () => {
    it('should forward prerender response with X-Redirected-From header', async () => {
      mockFetch.mockResolvedValue({
        body: '<html>prerendered</html>',
        status: 200,
        statusText: 'OK',
        headers: new Headers({
          'content-type': 'text/html',
          'x-prerender-cache': 'hit',
        }),
      });

      const request = new NextRequest('https://example.com/page', {
        headers: { 'user-agent': 'googlebot' },
      });

      const response = await middleware(request);

      expect(response.status).toBe(200);
      expect(response.headers.get('X-Redirected-From')).toBe(
        'https://example.com/page',
      );
    });

    it('should preserve prerender response status codes', async () => {
      mockFetch.mockResolvedValue({
        body: 'Not Found',
        status: 404,
        statusText: 'Not Found',
        headers: new Headers(),
      });

      const request = new NextRequest('https://example.com/missing-page', {
        headers: { 'user-agent': 'googlebot' },
      });

      const response = await middleware(request);

      expect(response.status).toBe(404);
      expect(response.statusText).toBe('Not Found');
    });
  });
});
