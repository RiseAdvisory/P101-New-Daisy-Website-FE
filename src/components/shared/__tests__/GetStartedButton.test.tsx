import { fireEvent, render, screen } from '@testing-library/react';
import { GetStartedButton } from '../GetStartedButton';
import { clearAttribution } from '@/lib/attribution';

const mockTrackConversion = jest.fn();
jest.mock('@/lib/meta/trackConversion', () => ({
  trackConversion: (...args: unknown[]) => mockTrackConversion(...args),
}));

jest.mock('next/navigation', () => ({
  usePathname: () => '/en/business',
}));

function setCookies(value: string) {
  Object.defineProperty(document, 'cookie', { writable: true, configurable: true, value });
}

// jsdom cannot navigate; stop the link's default action so a click only runs
// the component's handler.
const preventNavigation = (e: Event) => e.preventDefault();

describe('GetStartedButton', () => {
  beforeEach(() => {
    mockTrackConversion.mockClear();
    clearAttribution();
    window.addEventListener('click', preventNavigation);
    window.addEventListener('auxclick', preventNavigation);
  });

  afterEach(() => {
    setCookies('');
    window.removeEventListener('click', preventNavigation);
    window.removeEventListener('auxclick', preventNavigation);
  });

  // Tracked under its own name, never as Lead: optimising on a click-labelled
  // Lead would teach Meta to find clickers rather than signups.
  it('tracks the click as GetStartedClick', () => {
    render(<GetStartedButton />);
    fireEvent.click(screen.getByTestId('get-started-cta'));

    expect(mockTrackConversion).toHaveBeenCalledTimes(1);
    expect(mockTrackConversion).toHaveBeenCalledWith('GetStartedClick', {
      customData: { content_name: 'business' },
    });
  });

  it('tracks a middle-click, which opens signup in a new tab', () => {
    render(<GetStartedButton />);
    fireEvent(
      screen.getByTestId('get-started-cta'),
      new MouseEvent('auxclick', { bubbles: true, button: 1 }),
    );
    expect(mockTrackConversion).toHaveBeenCalledTimes(1);
  });

  it('ignores a right-click', () => {
    render(<GetStartedButton />);
    fireEvent(
      screen.getByTestId('get-started-cta'),
      new MouseEvent('auxclick', { bubbles: true, button: 2 }),
    );
    expect(mockTrackConversion).not.toHaveBeenCalled();
  });

  // The pixel sets _fbp after this button has mounted, so an href built only
  // on mount would leave it out on a first visit.
  it('rebuilds the link at click time to pick up cookies set after mount', () => {
    render(<GetStartedButton />);
    const link = screen.getByTestId('get-started-cta') as HTMLAnchorElement;
    expect(new URL(link.href).searchParams.get('fbp')).toBeNull();

    setCookies('_fbp=fb.1.1700000000000.42');
    fireEvent.click(link);
    expect(new URL(link.href).searchParams.get('fbp')).toBe('fb.1.1700000000000.42');
  });
});
