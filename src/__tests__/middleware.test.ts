/**
 * @jest-environment node
 */

import { NextRequest } from 'next/server';
import { middleware } from '../middleware';

describe('middleware', () => {
  it('should pass through all requests', async () => {
    const request = new NextRequest('https://example.com/page', {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const response = await middleware(request);

    expect(response.headers.get('x-middleware-next')).toBe('1');
  });

  it('should pass through bot requests without proxying', async () => {
    const request = new NextRequest('https://example.com/page', {
      headers: {
        'user-agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)',
      },
    });

    const response = await middleware(request);

    expect(response.headers.get('x-middleware-next')).toBe('1');
  });
});
