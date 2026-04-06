/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server';
import { POST } from '../route';

const mockFetch = jest.fn();
global.fetch = mockFetch;

function makeRequest(body?: object): NextRequest {
  return new NextRequest('http://localhost:3000/api/enquiry', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
}

describe('/api/enquiry', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      DAISY_ENQUIRY_API_URL: 'https://app.trythedaisy.com/api/v1/vendor/demo/enquiry',
      LEAD_CAPTURE_WEBHOOK_URL: 'https://example.com/webhook',
    };

    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      text: () => Promise.resolve(''),
    });
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('returns 400 for invalid body', async () => {
    const response = await POST(makeRequest());
    expect(response.status).toBe(500);
  });

  it('returns 400 when required fields are missing', async () => {
    const response = await POST(makeRequest({ email: '' }));
    expect(response.status).toBe(400);
  });

  it('submits to primary API and webhook', async () => {
    const response = await POST(
      makeRequest({
        firstname: 'Rahimi',
        lastname: 'Rise',
        email: 'rahimi@example.com',
        type: 'enquiry',
      }),
    );

    expect(response.status).toBe(200);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://app.trythedaisy.com/api/v1/vendor/demo/enquiry',
      expect.objectContaining({ method: 'POST' }),
    );
    expect(mockFetch).toHaveBeenCalledWith(
      'https://example.com/webhook',
      expect.objectContaining({ method: 'POST' }),
    );
  });

  it('returns 502 when primary API fails', async () => {
    mockFetch.mockImplementation((url: string) => {
      if (url.includes('vendor/demo/enquiry')) {
        return Promise.resolve({
          ok: false,
          status: 500,
          text: () => Promise.resolve('upstream failed'),
        });
      }

      return Promise.resolve({
        ok: true,
        status: 200,
        text: () => Promise.resolve(''),
      });
    });

    const response = await POST(
      makeRequest({
        name: 'Rahimi',
        email: 'rahimi@example.com',
        type: 'enquiry',
      }),
    );

    expect(response.status).toBe(502);
  });
});
