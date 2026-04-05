import { render, screen, cleanup, act } from '@testing-library/react';
import { Header } from '../Header';

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
    { title: 'Features', nav: '/features' },
    { title: 'Pricing', nav: '/pricing' },
    { title: 'Resources', nav: '/resources' },
    { title: 'About', nav: '/about' },
    { title: 'Contact', nav: '/contact' },
  ],
}));

jest.mock('@/lib/utils/menuVisibility', () => ({
  shouldHideMenuItem: jest.fn(() => false),
}));

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();

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
    expect(logoLink).toHaveAttribute('href', '/en/business');
  });

  describe('navigation from constants', () => {
    it('renders navigation items from English header constants', () => {
      render(<Header />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Features')).toBeInTheDocument();
      expect(screen.getByText('Pricing')).toBeInTheDocument();
      // Resources text appears in both the nav link and the mocked dropdown
      expect(screen.getAllByText('Resources').length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText('About Us')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('renders the "Get the App" button text from constants', () => {
      render(<Header />);

      expect(screen.getByTestId('get-app-btn')).toHaveTextContent(
        'Start Free Trial',
      );
    });

    it('renders navigation links with correct hrefs', () => {
      render(<Header />);

      const pricingLink = screen.getByText('Pricing').closest('a');
      expect(pricingLink).toHaveAttribute('href', '/en/pricing/business');

      const aboutLink = screen.getByText('About Us').closest('a');
      expect(aboutLink).toHaveAttribute('href', '/en/about');

      const contactLink = screen.getByText('Contact').closest('a');
      expect(contactLink).toHaveAttribute('href', '/en/contact');
    });
  });

  describe('skeleton loading state', () => {
    it('does not show skeleton when header data is loaded from constants', () => {
      render(<Header />);
      // Since data comes from constants, navigation items should render immediately
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Pricing')).toBeInTheDocument();
    });
  });

  describe('language change behavior', () => {
    it('switches to Arabic header data when language changes', async () => {
      const { usePathname } = require('next/navigation');

      // First render with English
      const { rerender } = render(<Header />);

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // Change pathname to Arabic locale
      usePathname.mockReturnValue('/ar/business');

      rerender(<Header />);

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

      // Should render Arabic navigation items from constants
      expect(screen.getByText('الرئيسية')).toBeInTheDocument();
      expect(screen.getByText('الأسعار')).toBeInTheDocument();
    });
  });
});
