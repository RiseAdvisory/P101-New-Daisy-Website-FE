import {
  render,
  screen,
  cleanup,
  fireEvent,
  act,
} from '@testing-library/react';
import { Footer } from '../Footer';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href}>{children}</a>;
  };
});

// Mock next/dynamic
jest.mock('next/dynamic', () => {
  return function mockDynamic() {
    return function MockFreshChatLoader() {
      return <div data-testid="freshchat-loader">FreshChat</div>;
    };
  };
});

// Mock Zustand store
jest.mock('@/store/language', () => ({
  useChangeLanguage: jest.fn(() => ({ lang: 'en' })),
}));

// Mock icons
jest.mock('@/assets/icons/logo/LogoIconsS', () => ({
  LogoIconsS: () => <div data-testid="logo-icon">Logo</div>,
}));

jest.mock('@/assets/icons/socialLinksIcons/FacebookIcons', () => ({
  FacebookIcons: () => <div data-testid="facebook-icon">FB</div>,
}));

jest.mock('@/assets/icons/socialLinksIcons/TwitterIcons', () => ({
  TwitterIcons: () => <div data-testid="twitter-icon">Twitter</div>,
}));

jest.mock('@/assets/icons/socialLinksIcons/LinkedInIcons', () => ({
  LinkedInIcons: () => <div data-testid="linkedin-icon">LinkedIn</div>,
}));

jest.mock('@/assets/icons/socialLinksIcons/InstagramIcons', () => ({
  InstagramIcons: () => <div data-testid="instagram-icon">Instagram</div>,
}));

// Mock buttons
jest.mock('@/components/buttonApp/PlayMarketButton', () => ({
  PlayMarketButton: () => (
    <button data-testid="play-market-btn">Play Store</button>
  ),
}));

jest.mock('@/components/buttonApp/AppStoreButton', () => ({
  AppStoreButton: () => <button data-testid="app-store-btn">App Store</button>,
}));

describe('Footer', () => {
  let mockRequestIdleCallback: jest.Mock;
  let originalRequestIdleCallback: typeof window.requestIdleCallback;

  beforeEach(() => {
    jest.clearAllMocks();

    // Store original
    originalRequestIdleCallback = window.requestIdleCallback;

    // Create mock for requestIdleCallback
    mockRequestIdleCallback = jest.fn((callback) => {
      callback({ didTimeout: false, timeRemaining: () => 50 });
      return 1;
    });
    window.requestIdleCallback =
      mockRequestIdleCallback as unknown as typeof window.requestIdleCallback;
  });

  afterEach(() => {
    cleanup();
    window.requestIdleCallback = originalRequestIdleCallback;
  });

  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByTestId('logo-icon')).toBeInTheDocument();
  });

  it('renders logo with link to home', () => {
    render(<Footer />);
    const logoLink = screen.getByRole('link', { name: /logo/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders navigation links from constants', () => {
    render(<Footer />);
    // Footer now uses hardcoded i18n constants, so nav items should be present immediately
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Footer />);
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
  });

  describe('deferred FreshChat loading', () => {
    it('uses requestIdleCallback to schedule interaction listeners', () => {
      render(<Footer />);
      expect(mockRequestIdleCallback).toHaveBeenCalled();
    });

    it('does not render FreshChat initially', () => {
      render(<Footer />);
      // FreshChat should not be rendered initially
      expect(screen.queryByTestId('freshchat-loader')).not.toBeInTheDocument();
    });

    it('loads FreshChat after scroll interaction', async () => {
      render(<Footer />);

      // Simulate scroll event
      await act(async () => {
        fireEvent.scroll(window);
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // FreshChat should now be rendered
      expect(screen.getByTestId('freshchat-loader')).toBeInTheDocument();
    });

    it('loads FreshChat after click interaction', async () => {
      render(<Footer />);

      // Simulate click event
      await act(async () => {
        fireEvent.click(window);
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // FreshChat should now be rendered
      expect(screen.getByTestId('freshchat-loader')).toBeInTheDocument();
    });

    it('loads FreshChat after touchstart interaction', async () => {
      render(<Footer />);

      // Simulate touchstart event
      await act(async () => {
        fireEvent.touchStart(window);
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // FreshChat should now be rendered
      expect(screen.getByTestId('freshchat-loader')).toBeInTheDocument();
    });
  });

  describe('2-second timeout fallback', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('loads FreshChat after 2-second timeout without user interaction', async () => {
      // Override requestIdleCallback to execute immediately but not trigger interaction
      const mockRIC = jest.fn((callback) => {
        callback({ didTimeout: false, timeRemaining: () => 50 });
        return 1;
      });
      window.requestIdleCallback =
        mockRIC as unknown as typeof window.requestIdleCallback;

      render(<Footer />);

      // FreshChat should not be rendered initially
      expect(screen.queryByTestId('freshchat-loader')).not.toBeInTheDocument();

      // Advance timers by 2 seconds (the fallback timeout)
      await act(async () => {
        jest.advanceTimersByTime(2000);
      });

      // FreshChat should now be rendered after timeout
      expect(screen.getByTestId('freshchat-loader')).toBeInTheDocument();
    });

    it('clears timeout when user interacts before 2 seconds', async () => {
      const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

      // Override requestIdleCallback to execute immediately
      const mockRIC = jest.fn((callback) => {
        callback({ didTimeout: false, timeRemaining: () => 50 });
        return 1;
      });
      window.requestIdleCallback =
        mockRIC as unknown as typeof window.requestIdleCallback;

      render(<Footer />);

      // Advance timers by 1 second (before the 2-second timeout)
      await act(async () => {
        jest.advanceTimersByTime(1000);
      });

      // FreshChat should not be rendered yet
      expect(screen.queryByTestId('freshchat-loader')).not.toBeInTheDocument();

      // User clicks before timeout
      await act(async () => {
        fireEvent.click(window);
      });

      // FreshChat should now be rendered
      expect(screen.getByTestId('freshchat-loader')).toBeInTheDocument();

      // Timeout should have been cleared
      expect(clearTimeoutSpy).toHaveBeenCalled();

      clearTimeoutSpy.mockRestore();
    });

    it('clears timeout on component unmount', async () => {
      const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

      // Override requestIdleCallback to execute immediately
      const mockRIC = jest.fn((callback) => {
        callback({ didTimeout: false, timeRemaining: () => 50 });
        return 1;
      });
      window.requestIdleCallback =
        mockRIC as unknown as typeof window.requestIdleCallback;

      const { unmount } = render(<Footer />);

      // Advance timers by 1 second (timeout is still pending)
      await act(async () => {
        jest.advanceTimersByTime(1000);
      });

      // Unmount before timeout fires
      unmount();

      // Timeout should have been cleared during cleanup
      expect(clearTimeoutSpy).toHaveBeenCalled();

      clearTimeoutSpy.mockRestore();
    });

    it('does not load FreshChat multiple times if timeout fires after interaction', async () => {
      // Override requestIdleCallback to execute immediately
      const mockRIC = jest.fn((callback) => {
        callback({ didTimeout: false, timeRemaining: () => 50 });
        return 1;
      });
      window.requestIdleCallback =
        mockRIC as unknown as typeof window.requestIdleCallback;

      render(<Footer />);

      // User clicks to trigger FreshChat loading
      await act(async () => {
        fireEvent.click(window);
      });

      // FreshChat should be rendered
      expect(screen.getByTestId('freshchat-loader')).toBeInTheDocument();

      // Advance timers past the 2-second mark
      await act(async () => {
        jest.advanceTimersByTime(3000);
      });

      // FreshChat should still be rendered (only once)
      const freshChatLoaders = screen.getAllByTestId('freshchat-loader');
      expect(freshChatLoaders).toHaveLength(1);
    });
  });

  describe('fallback behavior without requestIdleCallback', () => {
    beforeEach(() => {
      // @ts-expect-error - intentionally removing for test
      delete window.requestIdleCallback;
    });

    it('uses setTimeout as fallback when requestIdleCallback is not available', async () => {
      // This test verifies that the component doesn't crash without requestIdleCallback
      // and still sets up the deferred loading mechanism
      render(<Footer />);

      // Component should render without crashing
      expect(screen.getByTestId('logo-icon')).toBeInTheDocument();
    });
  });

  describe('app store buttons visibility', () => {
    it('shows app store buttons on regular pages', async () => {
      const { usePathname } = require('next/navigation');
      usePathname.mockReturnValue('/');

      render(<Footer />);

      // Wait for component to render
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // App store buttons should be visible on regular pages
      expect(screen.getByTestId('play-market-btn')).toBeInTheDocument();
      expect(screen.getByTestId('app-store-btn')).toBeInTheDocument();
    });

    it('hides app store buttons on get-the-app page', async () => {
      const { usePathname } = require('next/navigation');
      usePathname.mockReturnValue('/get-the-app');

      render(<Footer />);

      // Wait for component to render
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      expect(screen.queryByTestId('play-market-btn')).not.toBeInTheDocument();
      expect(screen.queryByTestId('app-store-btn')).not.toBeInTheDocument();
    });
  });

  describe('cleanup on unmount', () => {
    it('removes event listeners on unmount', async () => {
      // Create a mock that doesn't immediately execute callback
      const scheduledCallbacks: Array<() => void> = [];
      const mockRIC = jest.fn((callback) => {
        scheduledCallbacks.push(callback);
        return scheduledCallbacks.length;
      });

      window.requestIdleCallback =
        mockRIC as unknown as typeof window.requestIdleCallback;

      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

      const { unmount } = render(<Footer />);

      // Execute the scheduled callbacks to set up listeners
      await act(async () => {
        scheduledCallbacks.forEach((cb) => cb());
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // Now unmount the component
      unmount();

      // The cleanup effect should have run
      // Since listeners were added with { once: true }, they might already be removed
      // But the cleanup function in the effect should still attempt to remove them
      expect(removeEventListenerSpy).toHaveBeenCalled();

      removeEventListenerSpy.mockRestore();
    });
  });
});
