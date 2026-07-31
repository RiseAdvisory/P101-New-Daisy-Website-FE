import { render, screen, fireEvent, act } from '@testing-library/react';
import { InAppBrowserNotice } from '../InAppBrowserNotice';
import { ESCAPE_PARAM } from '@/lib/utils/inAppBrowser';

const INSTAGRAM_IOS =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 302.0.0.23.109';
const TIKTOK_IOS =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 BytedanceWebview/d8a21c6';
const INSTAGRAM_ANDROID =
  'Mozilla/5.0 (Linux; Android 13; SM-S908B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36 Instagram 302.0.0.23.109 Android';
const SAFARI_IOS =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

function setUserAgent(ua: string) {
  Object.defineProperty(window.navigator, 'userAgent', {
    value: ua,
    configurable: true,
  });
}

// The Safari hand-off is a plain anchor, so its target is assertable from the
// href attribute. That avoids stubbing window.location, which jsdom marks
// non-configurable.

describe('InAppBrowserNotice', () => {
  it('renders nothing in ordinary browsers', () => {
    setUserAgent(SAFARI_IOS);
    const { container } = render(<InAppBrowserNotice locale="en" />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing in the Instagram Android browser, which works normally', () => {
    setUserAgent(INSTAGRAM_ANDROID);
    const { container } = render(<InAppBrowserNotice locale="en" />);
    expect(container).toBeEmptyDOMElement();
  });

  it('names Instagram when that is the browser the visitor came from', () => {
    setUserAgent(INSTAGRAM_IOS);
    render(<InAppBrowserNotice locale="en" />);
    expect(screen.getByText(/Instagram blocks App Store links/i)).toBeInTheDocument();
  });

  it('falls back to generic wording for other in-app browsers', () => {
    setUserAgent(TIKTOK_IOS);
    render(<InAppBrowserNotice locale="en" />);
    expect(screen.getByText(/This app blocks App Store links/i)).toBeInTheDocument();
    expect(screen.queryByText(/Instagram blocks/i)).not.toBeInTheDocument();
  });

  it('always shows the manual steps, since the Safari hand-off can fail silently', () => {
    setUserAgent(INSTAGRAM_IOS);
    render(<InAppBrowserNotice locale="en" />);
    // These are the reliable path. They must never be hidden behind a
    // failure we cannot detect.
    expect(screen.getByText(/If nothing happens, open it yourself/i)).toBeInTheDocument();
    expect(screen.getByText(/Tap the ••• menu/i)).toBeInTheDocument();
  });

  it('points the hand-off link at the x-safari scheme with the escape marker', () => {
    setUserAgent(INSTAGRAM_IOS);
    render(<InAppBrowserNotice locale="en" />);

    const link = screen.getByRole('link', { name: 'Open in Safari' });
    // jsdom serves from http://localhost/, production from https, and the
    // prefix keeps whichever scheme the page was loaded with. Assert the
    // shape rather than a hard-coded origin.
    expect(link.getAttribute('href')).toMatch(/^x-safari-https?:\/\//);
    expect(link.getAttribute('href')).toContain(`${ESCAPE_PARAM}=1`);
  });

  it('copies the page URL and confirms it', async () => {
    setUserAgent(INSTAGRAM_IOS);
    const writeText = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    });

    render(<InAppBrowserNotice locale="en" />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Copy link' }));
    });

    expect(writeText).toHaveBeenCalledWith(window.location.href);
    expect(screen.getByRole('button', { name: 'Link copied' })).toBeInTheDocument();
  });

  it('survives a clipboard rejection without breaking the manual steps', async () => {
    setUserAgent(INSTAGRAM_IOS);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: jest.fn().mockRejectedValue(new Error('denied')) },
      configurable: true,
    });

    render(<InAppBrowserNotice locale="en" />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Copy link' }));
    });

    expect(screen.getByRole('button', { name: 'Copy link' })).toBeInTheDocument();
    expect(screen.getByText(/Tap the ••• menu/i)).toBeInTheDocument();
  });

  it('renders Arabic copy and RTL direction for the ar locale', () => {
    setUserAgent(INSTAGRAM_IOS);
    const { container } = render(<InAppBrowserNotice locale="ar" />);
    expect(container.querySelector('[dir="rtl"]')).toBeTruthy();
    expect(screen.getByText(/يمنع إنستغرام روابط App Store/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'افتح في سفاري' })).toBeInTheDocument();
  });
});
