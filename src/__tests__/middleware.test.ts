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

  it('should redirect root URL to locale business page', async () => {
    const request = new NextRequest('https://example.com/', {
      headers: {
        'user-agent': 'Mozilla/5.0',
      },
    });

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toContain('/en/business');
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

  it('should redirect /en/ to /en/business', async () => {
    const request = new NextRequest('https://example.com/en/', {
      headers: { 'user-agent': 'Mozilla/5.0' },
    });

    const response = await middleware(request);

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toContain('/en/business');
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
