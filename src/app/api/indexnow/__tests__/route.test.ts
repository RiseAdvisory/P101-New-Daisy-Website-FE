/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server';
import { GET, POST } from '../route';

// Mock global fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

function makeRequest(
  method: string,
  body?: object,
  headers?: Record<string, string>,
): NextRequest {
  const url = 'http://localhost:3000/api/indexnow';
  const init: RequestInit = {
    method,
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
  };
  if (body) {
    init.body = JSON.stringify(body);
  }
  return new NextRequest(url, init);
}

const MOCK_SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.jointhedaisy.com/en/business</loc></url>
  <url><loc>https://www.jointhedaisy.com/en/pricing</loc></url>
  <url><loc>https://www.jointhedaisy.com/ar/business</loc></url>
</urlset>`;

describe('/api/indexnow', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      INDEXNOW_SECRET: 'test-secret-123',
      INDEXNOW_KEY: 'test-key-abc',
    };
    // Default: sitemap fetch succeeds, IndexNow API succeeds
    mockFetch.mockImplementation((url: string) => {
      if (url.includes('sitemap.xml')) {
        return Promise.resolve({
          ok: true,
          status: 200,
          text: () => Promise.resolve(MOCK_SITEMAP),
        });
      }
      // IndexNow API
      return Promise.resolve({
        ok: true,
        status: 200,
        text: () => Promise.resolve(''),
      });
    });
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe('GET', () => {
    it('returns health check response', async () => {
      const response = await GET();
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data.service).toBe('IndexNow');
      expect(data.status).toBe('ready');
    });
  });

  describe('POST', () => {
    it('returns 503 if INDEXNOW_SECRET is not set', async () => {
      delete process.env.INDEXNOW_SECRET;
      const req = makeRequest('POST', undefined, {
        authorization: 'Bearer anything',
      });
      const response = await POST(req);
      expect(response.status).toBe(503);
    });

    it('returns 503 if INDEXNOW_KEY is not set', async () => {
      delete process.env.INDEXNOW_KEY;
      const req = makeRequest('POST', undefined, {
        authorization: 'Bearer test-secret-123',
      });
      const response = await POST(req);
      expect(response.status).toBe(503);
    });

    it('returns 401 without auth header', async () => {
      const req = makeRequest('POST');
      const response = await POST(req);
      expect(response.status).toBe(401);
    });

    it('returns 401 with wrong secret', async () => {
      const req = makeRequest('POST', undefined, {
        authorization: 'Bearer wrong-secret',
      });
      const response = await POST(req);
      expect(response.status).toBe(401);
    });

    it('fetches sitemap and submits all URLs with valid auth', async () => {
      const req = makeRequest('POST', undefined, {
        authorization: 'Bearer test-secret-123',
      });
      const response = await POST(req);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.submitted).toBe(3);

      // Verify sitemap was fetched
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('sitemap.xml'),
        expect.anything(),
      );

      // Verify IndexNow was called
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.indexnow.org/IndexNow',
        expect.objectContaining({ method: 'POST' }),
      );
    });

    it('submits specific valid URLs', async () => {
      const req = makeRequest(
        'POST',
        { urls: ['https://www.jointhedaisy.com/en/business'] },
        { authorization: 'Bearer test-secret-123' },
      );
      const response = await POST(req);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.submitted).toBe(1);
    });

    it('rejects URLs from wrong domain', async () => {
      const req = makeRequest(
        'POST',
        { urls: ['https://evil.com/hack'] },
        { authorization: 'Bearer test-secret-123' },
      );
      const response = await POST(req);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain('No valid URLs');
    });

    it('rejects HTTP URLs', async () => {
      const req = makeRequest(
        'POST',
        { urls: ['http://www.jointhedaisy.com/en/business'] },
        { authorization: 'Bearer test-secret-123' },
      );
      const response = await POST(req);
      expect(response.status).toBe(400);
    });

    it('rejects too many URLs', async () => {
      const urls = Array.from(
        { length: 10001 },
        (_, i) => `https://www.jointhedaisy.com/en/page-${i}`,
      );
      const req = makeRequest(
        'POST',
        { urls },
        { authorization: 'Bearer test-secret-123' },
      );
      const response = await POST(req);
      expect(response.status).toBe(400);
      const data = await response.json();
      expect(data.error).toContain('Maximum');
    });

    it('filters out invalid URLs from mixed input', async () => {
      const req = makeRequest(
        'POST',
        {
          urls: [
            'https://www.jointhedaisy.com/en/business',
            'https://evil.com/hack',
            'not-a-url',
            'https://www.jointhedaisy.com/en/pricing',
          ],
        },
        { authorization: 'Bearer test-secret-123' },
      );
      const response = await POST(req);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.submitted).toBe(2);
    });

    it('passes INDEXNOW_KEY to IndexNow API', async () => {
      const req = makeRequest('POST', undefined, {
        authorization: 'Bearer test-secret-123',
      });
      await POST(req);

      const indexNowCall = mockFetch.mock.calls.find(
        (call: string[]) => call[0] === 'https://api.indexnow.org/IndexNow',
      );
      expect(indexNowCall).toBeDefined();
      const body = JSON.parse(indexNowCall[1].body);
      expect(body.key).toBe('test-key-abc');
    });

    it('handles sitemap fetch failure gracefully', async () => {
      mockFetch.mockImplementation((url: string) => {
        if (url.includes('sitemap.xml')) {
          return Promise.resolve({ ok: false, status: 500 });
        }
        return Promise.resolve({ ok: true, status: 200 });
      });

      const req = makeRequest('POST', undefined, {
        authorization: 'Bearer test-secret-123',
      });
      const response = await POST(req);
      expect(response.status).toBe(500);
    });
  });
});
