import { render } from '@testing-library/react';
import { TrackViewContent } from '../TrackViewContent';

const mockTrackConversion = jest.fn();
jest.mock('@/lib/meta/trackConversion', () => ({
  trackConversion: (...args: unknown[]) => mockTrackConversion(...args),
}));

function setCookies(value: string) {
  Object.defineProperty(document, 'cookie', { writable: true, configurable: true, value });
}

describe('TrackViewContent', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockTrackConversion.mockClear();
    delete window.fbq;
  });

  afterEach(() => {
    jest.useRealTimers();
    setCookies('');
    delete window.fbq;
  });

  // Returning visitor: _fbp survives from an earlier visit, so it exists
  // before the pixel script has run. Firing on the cookie alone sent only the
  // CAPI half - observed on production 2026-10-02.
  it('waits for the pixel, not just the cookie, on a returning visit', () => {
    setCookies('geo-country=KW; _fbp=fb.1.123.456');
    render(<TrackViewContent persona="professional" />);
    expect(mockTrackConversion).not.toHaveBeenCalled();

    window.fbq = jest.fn();
    jest.advanceTimersByTime(250);
    expect(mockTrackConversion).toHaveBeenCalledTimes(1);
    expect(mockTrackConversion).toHaveBeenCalledWith('ViewContent', {
      customData: { content_category: 'professional', content_name: 'professional-landing' },
    });
  });

  it('waits for the _fbp cookie on a first visit, so the server event can be matched', () => {
    setCookies('geo-country=KW');
    window.fbq = jest.fn();
    render(<TrackViewContent persona="business" />);
    expect(mockTrackConversion).not.toHaveBeenCalled();

    setCookies('geo-country=KW; _fbp=fb.1.123.456');
    jest.advanceTimersByTime(250);
    expect(mockTrackConversion).toHaveBeenCalledTimes(1);
  });

  // An ad blocker stops fbevents.js, so _fbp never appears. The CAPI half
  // must still go out.
  it('sends anyway after 5 seconds', () => {
    setCookies('geo-country=KW');
    render(<TrackViewContent persona="business" />);
    jest.advanceTimersByTime(5300);
    expect(mockTrackConversion).toHaveBeenCalledTimes(1);
  });

  it('does nothing where advertising consent is required', () => {
    setCookies('geo-country=GB; _fbp=fb.1.123.456');
    window.fbq = jest.fn();
    render(<TrackViewContent persona="business" />);
    jest.advanceTimersByTime(6000);
    expect(mockTrackConversion).not.toHaveBeenCalled();
  });
});
