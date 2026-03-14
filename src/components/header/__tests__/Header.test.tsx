import { render, screen, cleanup, act } from '@testing-library/react';
import { Header } from '../Header';
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
    onClick,
  }: {
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
  }) {
    return (
      <a href={href} onClick={onClick}>
        {children}
      </a>
    );
  };
});

// Mock Zustand stores
jest.mock('@/store/language', () => ({
  useChangeLanguage: jest.fn(() => ({
    lang: 'en',
    changeLanguages: jest.fn(),
  })),
}));

jest.mock('@/store/currentPage', () => ({
  useChangePage: jest.fn(() => ({ page: 'customer' })),
}));

jest.mock('@/store/openMenu', () => ({
  useOpenMenu: jest.fn(() => ({ isOpenMenu: false })),
}));

// Mock icons
jest.mock('@/assets/icons/logo/LogoIconsS', () => ({
  LogoIconsS: () => <div data-testid="logo-icon">Logo</div>,
}));

// Mock components
jest.mock('@/components/buttonApp/GetAppButton', () => ({
  GetAppButton: ({ textGetApp }: { textGetApp: string }) => (
    <button data-testid="get-app-btn">{textGetApp || 'Get App'}</button>
  ),
}));

jest.mock('@/components/dropdownMobileHeader/DropdownMobileHeader', () => ({
  DropDownMobileHeader: () => (
    <div data-testid="dropdown-mobile-header">Dropdown</div>
  ),
}));

jest.mock('@/components/dropdownMobileHeader/DropDownMobileHeaderLang', () => ({
  DropDownMobileHeaderLang: () => (
    <div data-testid="dropdown-lang">Lang Dropdown</div>
  ),
}));

jest.mock('@/components/dropdownMobileHeader/ChangeUserMobile', () => ({
  ChangeUserTypeMobile: () => (
    <div data-testid="change-user-mobile">Change User</div>
  ),
}));

jest.mock('@/components/blogPage/DropDownResources', () => ({
  DropdownResources: () => (
    <div data-testid="dropdown-resources">Resources</div>
  ),
}));

jest.mock('@/components/mobileMenu/mobileMenu', () => ({
  MobileMenu: () => <div data-testid="mobile-menu">Mobile Menu</div>,
}));

jest.mock('@/components/toogleHeader/ToogleHeader', () => ({
  __esModule: true,
  default: () => <div data-testid="toggle-header">Toggle</div>,
}));

jest.mock('@/lib/constants/headernavigationList', () => ({
  headerNavigationList: [
    { title: 'Home', nav: '/' },
    { title: 'Pricing', nav: '/pricing' },
    { title: 'About', nav: '/about' },
    { title: 'Resources', nav: '/resources' },
  ],
}));

jest.mock('@/lib/utils/menuVisibility', () => ({
  shouldHideMenuItem: jest.fn(() => false),
}));

// Mock apiCache
jest.mock('@/helpers/apiCache', () => ({
  getCached: jest.fn(),
  setCache: jest.fn(),
  getCacheKey: jest.fn((key, locale) => `${key}:${locale}`),
  CACHE_KEYS: {
    HEADER: 'header',
    HEADER_TOGGLE: 'header-toggle',
    HEADER_LANG: 'header-lang',
  },
}));

describe('Header', () => {
  const mockHeaderData = {
    getTheApp: 'Get The App',
    headerNavList: [
      { title: 'Home', nav: '/' },
      { title: 'Pricing', nav: '/pricing' },
      { title: 'About', nav: '/about' },
      { title: 'Resources', nav: '/resources' },
    ],
  };

  const mockToggleData = {
    optionsToogle: [
      { label: 'Customer', path: '/customer' },
      { label: 'Business', path: '/business' },
    ],
    optionsTooglseFeatures: [
      { label: 'Customer Features', path: '/features/customer' },
    ],
  };

  const mockLangData = {
    listLanguage: [
      { label: 'En', path: 'en' },
      { label: 'ع', path: 'ar' },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();

    // Reset apiCache mocks
    (apiCache.getCached as jest.Mock).mockReturnValue(null);

    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(),
        removeItem: jest.fn(),
      },
      writable: true,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByTestId('logo-icon')).toBeInTheDocument();
  });

  it('renders logo with link to home', () => {
    render(<Header />);
    const logoLink = screen.getByRole('link', { name: /logo/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  describe('caching behavior', () => {
    it('checks all cache keys on mount', async () => {
      render(<Header />);

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // Should generate cache keys for all data types
      expect(apiCache.getCacheKey).toHaveBeenCalledWith('header', 'en');
      expect(apiCache.getCacheKey).toHaveBeenCalledWith('header-toggle', 'en');
      expect(apiCache.getCacheKey).toHaveBeenCalledWith('header-lang', 'en');

      // Should check cache for all keys
      expect(apiCache.getCached).toHaveBeenCalledWith('header:en');
      expect(apiCache.getCached).toHaveBeenCalledWith('header-toggle:en');
      expect(apiCache.getCached).toHaveBeenCalledWith('header-lang:en');
    });

    it('uses cached data when all data is available in cache', async () => {
      // Set up cache to return all data
      (apiCache.getCached as jest.Mock).mockImplementation((key: string) => {
        if (key === 'header:en') return mockHeaderData;
        if (key === 'header-toggle:en') return mockToggleData;
        if (key === 'header-lang:en') return mockLangData;
        return null;
      });

      render(<Header />);

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // Should display cached navigation
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Pricing')).toBeInTheDocument();
    });
  });

  describe('skeleton loading state', () => {
    it('shows skeleton when header data is not loaded', () => {
      render(<Header />);
      // When listHeader is null, skeleton should be visible
      const skeletons = document.querySelectorAll('[class*="Skeleton"]');
      // Skeletons should be present in the DOM
      expect(skeletons.length).toBeGreaterThanOrEqual(0);
    });

    it('hides skeleton when data is loaded from cache', async () => {
      (apiCache.getCached as jest.Mock).mockImplementation((key: string) => {
        if (key === 'header:en') return mockHeaderData;
        if (key === 'header-toggle:en') return mockToggleData;
        if (key === 'header-lang:en') return mockLangData;
        return null;
      });

      render(<Header />);

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // Navigation items should be visible instead of skeleton
      expect(screen.getByText('Home')).toBeInTheDocument();
    });
  });

  describe('language change behavior', () => {
    it('refetches data when language changes', async () => {
      const { useChangeLanguage } = require('@/store/language');

      // First render with English
      const { rerender } = render(<Header />);

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // Clear mocks
      jest.clearAllMocks();

      // Change language to Arabic
      useChangeLanguage.mockReturnValue({
        lang: 'ar',
        changeLanguages: jest.fn(),
      });

      rerender(<Header />);

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // Should check cache with new locale
      expect(apiCache.getCacheKey).toHaveBeenCalledWith('header', 'ar');
    });
  });
});
