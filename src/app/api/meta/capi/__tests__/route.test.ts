/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server';
import { POST } from '../route';

const mockFetch = jest.fn();
global.fetch = mockFetch;

function makeRequest(
  body: object,
  { origin = 'https://www.jointhedaisy.com', country = 'KW', cookie = '' } = {},
): NextRequest {
  const headers: Record<string, string> = {
    'content-type': 'application/json',
    'x-vercel-ip-country': country,
  };
  if (origin) headers.origin = origin;
  if (cookie) headers.cookie = cookie;
  return new NextRequest('https://www.jointhedaisy.com/api/meta/capi', {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
}

const viewContent = { eventName: 'ViewContent', eventId: 'evt-1', customData: { content_category: 'business' } };

describe('/api/meta/capi', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = { ...originalEnv, META_PIXEL_ID: '123', META_CAPI_ACCESS_TOKEN: 'secret-token' };
    mockFetch.mockResolvedValue({ ok: true, status: 200, text: () => Promise.resolve('') });
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('forwards an allowed event to Meta with the token in the body, not the URL', async () => {
    const res = await POST(makeRequest({ ...viewContent, email: ' Owner@Salon.com ' }));
    expect(res.status).toBe(200);
    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, init] = mockFetch.mock.calls[0];
    expect(url).not.toContain('secret-token');
    expect(url).toContain('/v26.0/123/events');
    const sent = JSON.parse(init.body);
    expect(sent.access_token).toBe('secret-token');
    expect(sent.data[0].event_name).toBe('ViewContent');
    expect(sent.data[0].event_id).toBe('evt-1');
    // Hashed, never raw.
    expect(JSON.stringify(sent)).not.toContain('salon.com');
    expect(sent.data[0].user_data.em[0]).toMatch(/^[a-f0-9]{64}$/);
  });

  // Public endpoint writing into the pixel Meta optimises spend on.
  it('rejects an event name the site never sends', async () => {
    const res = await POST(makeRequest({ eventName: 'Purchase', eventId: 'evt-2' }));
    expect(res.status).toBe(400);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it('accepts the Get Started click', async () => {
    const res = await POST(makeRequest({ eventName: 'GetStartedClick', eventId: 'evt-3' }));
    expect(res.status).toBe(200);
    expect(JSON.parse(mockFetch.mock.calls[0][1].body).data[0].event_name).toBe('GetStartedClick');
  });

  it('rejects requests that do not come from our pages', async () => {
    const res = await POST(makeRequest(viewContent, { origin: 'https://evil.example' }));
    expect(res.status).toBe(403);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it('rejects requests with no origin or referer', async () => {
    const res = await POST(makeRequest(viewContent, { origin: '' }));
    expect(res.status).toBe(403);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  // Defence in depth for the client-side gate in trackConversion().
  it('drops events from consent-required territories', async () => {
    const res = await POST(makeRequest(viewContent, { country: 'GB' }));
    expect(res.status).toBe(200);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it('drops events from a visitor who declined', async () => {
    const res = await POST(makeRequest(viewContent, { cookie: 'clarity-consent=declined' }));
    expect(mockFetch).not.toHaveBeenCalled();
    expect(res.status).toBe(200);
  });

  it('does nothing when the Conversions API is not configured', async () => {
    delete process.env.META_CAPI_ACCESS_TOKEN;
    const res = await POST(makeRequest(viewContent));
    expect(res.status).toBe(200);
    expect(mockFetch).not.toHaveBeenCalled();
  });
});
