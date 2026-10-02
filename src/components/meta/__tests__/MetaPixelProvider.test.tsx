import { render } from '@testing-library/react';
import { MetaPixelProvider } from '../MetaPixelProvider';

let mockPathname = '/en/business';
jest.mock('next/navigation', () => ({ usePathname: () => mockPathname }));
// The inline snippet is what sends the first PageView; here it is inert so the
// test can count only what the component itself fires.
jest.mock('next/script', () => ({ __esModule: true, default: () => null }));

function setCookies(value: string) {
  Object.defineProperty(document, 'cookie', { writable: true, configurable: true, value });
}

describe('MetaPixelProvider', () => {
  let fbq: jest.Mock;

  beforeEach(() => {
    fbq = jest.fn();
    window.fbq = fbq;
    mockPathname = '/en/business';
    setCookies('geo-country=KW');
  });

  afterEach(() => {
    delete window.fbq;
    setCookies('');
  });

  // The snippet already sends the first PageView. The component used to send
  // one too, racing it, so first page views could be counted twice.
  it('does not send a PageView of its own on first load', () => {
    render(<MetaPixelProvider pixelId="123" />);
    expect(fbq).not.toHaveBeenCalled();
  });

  it('sends one PageView per client-side navigation', () => {
    const { rerender } = render(<MetaPixelProvider pixelId="123" />);
    mockPathname = '/en/professional';
    rerender(<MetaPixelProvider pixelId="123" />);
    expect(fbq).toHaveBeenCalledTimes(1);
    expect(fbq).toHaveBeenCalledWith('track', 'PageView');

    rerender(<MetaPixelProvider pixelId="123" />); // same path: nothing new
    expect(fbq).toHaveBeenCalledTimes(1);
  });

  it('never loads in a consent-required country', () => {
    setCookies('geo-country=GB; clarity-consent=accepted');
    const { rerender } = render(<MetaPixelProvider pixelId="123" />);
    mockPathname = '/en/professional';
    rerender(<MetaPixelProvider pixelId="123" />);
    expect(fbq).not.toHaveBeenCalled();
  });
});
