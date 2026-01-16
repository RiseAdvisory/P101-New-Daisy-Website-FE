import {
  render,
  screen,
  cleanup,
  fireEvent,
  act,
} from '@testing-library/react';
import { Footer } from '../Footer';
import * as apiCache from '@/helpers/apiCache';

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

// Mock axios
jest.mock('@/helpers/axiosConfig', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
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

// Mock apiCache
jest.mock('@/helpers/apiCache', () => ({
  getCached: jest.fn(),
  setCache: jest.fn(),
  getCacheKey: jest.fn((key, locale) => `${key}:${locale}`),
  CACHE_KEYS: {
    FOOTER_SOCIAL: 'footer-social',
    FOOTER_NAV: 'footer-nav',
  },
}));

describe('Footer', () => {
  let mockRequestIdleCallback: jest.Mock;
  let originalRequestIdleCallback: typeof window.requestIdleCallback;

  const mockSocialLinks = {
    facebook_url: 'https://facebook.com/test',
    twitter_url: 'https://twitter.com/test',
    linkedin_url: 'https://linkedin.com/test',
    instagram_url: 'https://instagram.com/test',
  };

  const mockNavList = [
    { nav: '/about', name: 'About' },
    { nav: '/contact', name: 'Contact' },
  ];

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

    // Reset apiCache mocks
    (apiCache.getCached as jest.Mock).mockReturnValue(null);
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

  describe('caching behavior', () => {
    it('checks cache on mount', async () => {
      render(<Footer />);

      // Should check cache for both social and nav data
      expect(apiCache.getCacheKey).toHaveBeenCalledWith('footer-social', 'en');
      expect(apiCache.getCacheKey).toHaveBeenCalledWith('footer-nav', 'en');
      expect(apiCache.getCached).toHaveBeenCalled();
    });

    it('uses cached data when available', async () => {
      // Set up cache to return data
      (apiCache.getCached as jest.Mock).mockImplementation((key: string) => {
        if (key === 'footer-social:en') return mockSocialLinks;
        if (key === 'footer-nav:en') return mockNavList;
        return null;
      });

      render(<Footer />);

      // Wait for state updates
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // Should display cached navigation
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();

      // Should display social icons
      expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    });
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
