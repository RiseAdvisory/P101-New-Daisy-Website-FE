/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server';
import { middleware } from '../middleware';

describe('middleware', () => {
  it('should redirect non-locale URLs to locale-prefixed URLs', async () => {
    const request = new NextRequest('https://example.com/business', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const response = await middleware(request);

    // Should redirect to /en/business
    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toContain('/en/business');
  });

  it('should pass through requests with valid locale prefix', async () => {
    const request = new NextRequest('https://example.com/en/business', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const response = await middleware(request);

    // Should pass through (x-middleware-next = '1')
    expect(response.headers.get('x-middleware-next')).toBe('1');
  });

  it('should pass through static asset requests', async () => {
    const request = new NextRequest('https://example.com/_next/static/chunk.js', {
      headers: {
        'user-agent': 'Mozilla/5.0',
      },
    });

    const response = await middleware(request);

    expect(response.headers.get('x-middleware-next')).toBe('1');
  });

  it('should redirect root URL to /en/business in one hop', async () => {
    // / and /en used to both render the same BusinessClient with a canonical
    // mismatch, splitting ranking signals. The shortcut also collapses the
    // old two-hop chain (/ -> /en/ -> /en) into a single redirect.
    const request = new NextRequest('https://example.com/', {
      headers: {
        'user-agent': 'Mozilla/5.0',
      },
    });

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toMatch(/\/en\/business$/);
  });

  it('should redirect /en (locale root) to /en/business', async () => {
    const request = new NextRequest('https://example.com/en', {
      headers: { 'user-agent': 'Mozilla/5.0' },
    });

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toMatch(/\/en\/business$/);
  });

  it('should redirect /ar (locale root) to /ar/business', async () => {
    const request = new NextRequest('https://example.com/ar', {
      headers: { 'user-agent': 'Mozilla/5.0' },
    });

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toMatch(/\/ar\/business$/);
  });

  it('should pass /en/business through (no redirect loop)', async () => {
    const request = new NextRequest('https://example.com/en/business', {
      headers: { 'user-agent': 'Mozilla/5.0' },
    });

    const response = await middleware(request);

    expect(response.headers.get('x-middleware-next')).toBe('1');
  });

  it('should set locale cookie on redirect', async () => {
    const request = new NextRequest('https://example.com/pricing', {
      headers: {
        'user-agent': 'Mozilla/5.0',
      },
    });

    const response = await middleware(request);

    expect(response.status).toBe(301);
    // Cookie should be set
    const setCookie = response.headers.get('set-cookie');
    expect(setCookie).toContain('locale=en');
  });

  it('should detect Arabic from Accept-Language header', async () => {
    const request = new NextRequest('https://example.com/business', {
      headers: {
        'user-agent': 'Mozilla/5.0',
        'accept-language': 'ar,en;q=0.9',
      },
    });

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toContain('/ar/business');
  });

  // Convenience redirect tests
  it('should redirect /en/features to /en/features/business', async () => {
    const request = new NextRequest('https://example.com/en/features', {
      headers: { 'user-agent': 'Mozilla/5.0' },
    });

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toContain('/en/features/business');
  });

  it('should redirect /ar/features to /ar/features/business', async () => {
    const request = new NextRequest('https://example.com/ar/features', {
      headers: { 'user-agent': 'Mozilla/5.0' },
    });

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toContain('/ar/features/business');
  });

  it('should redirect /en/features/customer to /en/features/business', async () => {
    const request = new NextRequest('https://example.com/en/features/customer', {
      headers: { 'user-agent': 'Mozilla/5.0' },
    });

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toContain('/en/features/business');
  });

  it('should strip trailing slash from /en/ (subsequent /en hop redirects to /en/business)', async () => {
    const request = new NextRequest('https://example.com/en/', {
      headers: { 'user-agent': 'Mozilla/5.0' },
    });

    const response = await middleware(request);

    expect(response.status).toBe(301);
    // Trailing-slash strip runs first; the /en -> /en/business redirect
    // happens on the next request, not within this middleware invocation.
    expect(response.headers.get('location')).toMatch(/\/en$/);
  });

  it('should redirect /en/start-free-trial/business to /en/get-the-app', async () => {
    // Trial form was retired in favor of direct app download; form code is
    // kept for revertability but all trial-intent URLs collapse to /get-the-app.
    const request = new NextRequest(
      'https://example.com/en/start-free-trial/business',
      { headers: { 'user-agent': 'Mozilla/5.0' } },
    );

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toMatch(/\/en\/get-the-app$/);
  });

  it('should redirect /en/start-free-trial/professional to /en/get-the-app', async () => {
    const request = new NextRequest(
      'https://example.com/en/start-free-trial/professional',
      { headers: { 'user-agent': 'Mozilla/5.0' } },
    );

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toMatch(/\/en\/get-the-app$/);
  });

  it('should redirect /ar/start-free-trial/business to /ar/get-the-app', async () => {
    const request = new NextRequest(
      'https://example.com/ar/start-free-trial/business',
      { headers: { 'user-agent': 'Mozilla/5.0' } },
    );

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toMatch(/\/ar\/get-the-app$/);
  });

  it('should redirect /start-free-trial/business (no locale) to /en/get-the-app in one hop', async () => {
    const request = new NextRequest(
      'https://example.com/start-free-trial/business',
      { headers: { 'user-agent': 'Mozilla/5.0' } },
    );

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toMatch(/\/en\/get-the-app$/);
  });

  it('should not redirect /en/about (valid page)', async () => {
    const request = new NextRequest('https://example.com/en/about', {
      headers: { 'user-agent': 'Mozilla/5.0' },
    });

    const response = await middleware(request);

    expect(response.headers.get('x-middleware-next')).toBe('1');
  });

  it('should pass through sitemap requests', async () => {
    const request = new NextRequest('https://example.com/sitemap.xml', {
      headers: {
        'user-agent': 'Googlebot/2.1',
      },
    });

    const response = await middleware(request);

    expect(response.headers.get('x-middleware-next')).toBe('1');
  });
});
