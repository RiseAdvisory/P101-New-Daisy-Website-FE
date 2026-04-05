/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server';
import { GET, POST } from '../route';

// Mock all content slug imports
jest.mock('@/lib/api/blog', () => ({
  getAllBlogSlugs: jest.fn().mockResolvedValue([
    { userType: 'business', slug: 'test-post', publishedAt: '2026-01-01' },
  ]),
}));

jest.mock('@/lib/constants/competitors/comparisonPages', () => ({
  getAllCompareSlugs: jest.fn().mockReturnValue(['daisy-vs-fresha']),
  getAllAlternativeSlugs: jest.fn().mockReturnValue(['fresha']),
}));

jest.mock('@/lib/constants/solutions', () => ({
  getAllSolutionSlugs: jest.fn().mockReturnValue(['salon-management-software']),
}));

jest.mock('@/lib/constants/glossary/glossaryData', () => ({
  getAllGlossarySlugs: jest.fn().mockReturnValue(['salon-management-software']),
}));

jest.mock('@/lib/constants/guides/guideData', () => ({
  getAllGuideSlugs: jest.fn().mockReturnValue(['reduce-salon-no-shows']),
}));

jest.mock('@/lib/constants/features/featureDeepDive', () => ({
  getAllFeatureDeepDiveSlugs: jest.fn().mockReturnValue(['ai-salon-management']),
}));

jest.mock('@/lib/constants/pillars', () => ({
  getAllPillarSlugs: jest.fn().mockReturnValue(['salon-management-software']),
}));

jest.mock('@/lib/constants/solutions/angles', () => ({
  getAllAngleParams: jest
    .fn()
    .mockReturnValue([{ slug: 'ai-receptionist', persona: 'business' }]),
}));

// Mock global fetch for IndexNow API calls
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

describe('/api/indexnow', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = { ...originalEnv, INDEXNOW_SECRET: 'test-secret-123' };
    mockFetch.mockResolvedValue({ status: 200, ok: true, text: () => Promise.resolve('') });
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

    it('submits all URLs with valid auth', async () => {
      const req = makeRequest('POST', undefined, {
        authorization: 'Bearer test-secret-123',
      });
      const response = await POST(req);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.submitted).toBeGreaterThan(0);
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
      const urls = Array.from({ length: 10001 }, (_, i) =>
        `https://www.jointhedaisy.com/en/page-${i}`,
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
  });
});
