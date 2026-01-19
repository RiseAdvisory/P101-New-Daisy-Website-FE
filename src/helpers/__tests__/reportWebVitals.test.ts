/**
 * Tests for reportWebVitals helper
 */

// Mock web-vitals module
const mockOnCLS = jest.fn();
const mockOnFCP = jest.fn();
const mockOnLCP = jest.fn();
const mockOnTTFB = jest.fn();
const mockOnINP = jest.fn();

jest.mock('web-vitals', () => ({
  onCLS: mockOnCLS,
  onFCP: mockOnFCP,
  onLCP: mockOnLCP,
  onTTFB: mockOnTTFB,
  onINP: mockOnINP,
}));

describe('reportWebVitals', () => {
  const originalEnv = process.env;
  let reportWebVitals: typeof import('../reportWebVitals').reportWebVitals;
  let logWebVitals: typeof import('../reportWebVitals').logWebVitals;

  beforeEach(async () => {
    jest.resetModules();
    jest.clearAllMocks();
    process.env = { ...originalEnv };

    // Clear mocks
    mockOnCLS.mockClear();
    mockOnFCP.mockClear();
    mockOnLCP.mockClear();
    mockOnTTFB.mockClear();
    mockOnINP.mockClear();

    // Re-import to get fresh instance
    const vitalsModule = await import('../reportWebVitals');
    reportWebVitals = vitalsModule.reportWebVitals;
    logWebVitals = vitalsModule.logWebVitals;
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('reportWebVitals', () => {
    it('should register callbacks for all web vitals metrics', async () => {
      reportWebVitals();

      // Wait for dynamic import to resolve
      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(mockOnCLS).toHaveBeenCalledWith(expect.any(Function));
      expect(mockOnFCP).toHaveBeenCalledWith(expect.any(Function));
      expect(mockOnLCP).toHaveBeenCalledWith(expect.any(Function));
      expect(mockOnTTFB).toHaveBeenCalledWith(expect.any(Function));
      expect(mockOnINP).toHaveBeenCalledWith(expect.any(Function));
    });

    it('should handle debug option', async () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

      reportWebVitals({ debug: true });

      // Wait for dynamic import
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Get the callback that was registered for CLS
      const clsCallback = mockOnCLS.mock.calls[0][0];

      // Simulate a metric being reported
      clsCallback({
        id: 'test-id',
        name: 'CLS',
        value: 0.1,
        rating: 'good',
      });

      expect(consoleLogSpy).toHaveBeenCalledWith('[Web Vitals]', 'CLS', 0.1, 'good');

      consoleLogSpy.mockRestore();
    });

    it('should send to analytics when DSN is configured', async () => {
      process.env.NEXT_PUBLIC_ANALYTICS_ID = 'test-analytics-id';

      const mockSendBeacon = jest.fn().mockReturnValue(true);
      Object.defineProperty(navigator, 'sendBeacon', {
        value: mockSendBeacon,
        writable: true,
        configurable: true,
      });

      reportWebVitals();

      await new Promise((resolve) => setTimeout(resolve, 0));

      const lcpCallback = mockOnLCP.mock.calls[0][0];

      lcpCallback({
        id: 'lcp-id',
        name: 'LCP',
        value: 2500,
        rating: 'good',
      });

      expect(mockSendBeacon).toHaveBeenCalled();
      const blobArg = mockSendBeacon.mock.calls[0][1];
      expect(blobArg).toBeInstanceOf(Blob);
    });

    it('should not send to analytics when DSN is not configured', async () => {
      process.env.NEXT_PUBLIC_ANALYTICS_ID = '';

      const mockSendBeacon = jest.fn();
      const mockFetch = jest.fn();
      Object.defineProperty(navigator, 'sendBeacon', {
        value: mockSendBeacon,
        writable: true,
        configurable: true,
      });
      global.fetch = mockFetch;

      reportWebVitals();

      await new Promise((resolve) => setTimeout(resolve, 0));

      const fcpCallback = mockOnFCP.mock.calls[0][0];

      fcpCallback({
        id: 'fcp-id',
        name: 'FCP',
        value: 1000,
        rating: 'good',
      });

      expect(mockSendBeacon).not.toHaveBeenCalled();
      expect(mockFetch).not.toHaveBeenCalled();
    });

    it('should fallback to fetch when sendBeacon is not available', async () => {
      process.env.NEXT_PUBLIC_ANALYTICS_ID = 'test-analytics-id';

      // Remove sendBeacon
      Object.defineProperty(navigator, 'sendBeacon', {
        value: undefined,
        writable: true,
        configurable: true,
      });

      const mockFetch = jest.fn().mockResolvedValue({ ok: true });
      global.fetch = mockFetch;

      reportWebVitals();

      await new Promise((resolve) => setTimeout(resolve, 0));

      const ttfbCallback = mockOnTTFB.mock.calls[0][0];

      ttfbCallback({
        id: 'ttfb-id',
        name: 'TTFB',
        value: 500,
        rating: 'good',
      });

      expect(mockFetch).toHaveBeenCalledWith(
        'https://vitals.vercel-analytics.com/v1/vitals',
        expect.objectContaining({
          method: 'POST',
          credentials: 'omit',
          keepalive: true,
        }),
      );
    });
  });

  describe('logWebVitals', () => {
    it('should register callbacks for all web vitals metrics', async () => {
      logWebVitals();

      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(mockOnCLS).toHaveBeenCalledWith(expect.any(Function));
      expect(mockOnFCP).toHaveBeenCalledWith(expect.any(Function));
      expect(mockOnLCP).toHaveBeenCalledWith(expect.any(Function));
      expect(mockOnTTFB).toHaveBeenCalledWith(expect.any(Function));
      expect(mockOnINP).toHaveBeenCalledWith(expect.any(Function));
    });

    it('should log metrics to console', async () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

      logWebVitals();

      await new Promise((resolve) => setTimeout(resolve, 0));

      // Simulate CLS metric
      const clsCallback = mockOnCLS.mock.calls[0][0];
      clsCallback({ value: 0.05, rating: 'good' });
      expect(consoleLogSpy).toHaveBeenCalledWith('[CLS]', 0.05, 'good');

      // Simulate FCP metric
      const fcpCallback = mockOnFCP.mock.calls[0][0];
      fcpCallback({ value: 1800, rating: 'good' });
      expect(consoleLogSpy).toHaveBeenCalledWith('[FCP]', 1800, 'ms', 'good');

      // Simulate LCP metric
      const lcpCallback = mockOnLCP.mock.calls[0][0];
      lcpCallback({ value: 2500, rating: 'good' });
      expect(consoleLogSpy).toHaveBeenCalledWith('[LCP]', 2500, 'ms', 'good');

      // Simulate TTFB metric
      const ttfbCallback = mockOnTTFB.mock.calls[0][0];
      ttfbCallback({ value: 200, rating: 'good' });
      expect(consoleLogSpy).toHaveBeenCalledWith('[TTFB]', 200, 'ms', 'good');

      // Simulate INP metric
      const inpCallback = mockOnINP.mock.calls[0][0];
      inpCallback({ value: 100, rating: 'good' });
      expect(consoleLogSpy).toHaveBeenCalledWith('[INP]', 100, 'ms', 'good');

      consoleLogSpy.mockRestore();
    });
  });
});
