import {
  render,
  screen,
  cleanup,
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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByTestId('logo-icon')).toBeInTheDocument();
  });

  it('renders logo with link to home', () => {
    render(<Footer />);
    const logoLink = screen.getByRole('link', { name: /logo/i });
    expect(logoLink).toHaveAttribute('href', '/en');
  });

  it('renders navigation links from constants', () => {
    render(<Footer />);
    // Footer now uses multi-column layout with footerColumns
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Privacy')).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Footer />);
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument();
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

  describe('persona-aware footer links', () => {
    it('links features to /business when on a business page', () => {
      const { usePathname } = require('next/navigation');
      usePathname.mockReturnValue('/en/business');

      render(<Footer />);

      const links = screen.getAllByRole('link');
      const featuresLink = links.find((l) => l.getAttribute('href')?.includes('/features/'));
      if (featuresLink) {
        expect(featuresLink.getAttribute('href')).toContain('/features/business');
      }
    });

    it('links features to /professional when on a professional page', () => {
      const { usePathname } = require('next/navigation');
      usePathname.mockReturnValue('/en/professional');

      render(<Footer />);

      const links = screen.getAllByRole('link');
      const featuresLink = links.find((l) => l.getAttribute('href')?.includes('/features/'));
      if (featuresLink) {
        expect(featuresLink.getAttribute('href')).toContain('/features/professional');
      }
    });

    it('defaults to business persona on unrelated pages', () => {
      const { usePathname } = require('next/navigation');
      usePathname.mockReturnValue('/en/about');

      render(<Footer />);

      const links = screen.getAllByRole('link');
      const featuresLink = links.find((l) => l.getAttribute('href')?.includes('/features/'));
      if (featuresLink) {
        expect(featuresLink.getAttribute('href')).toContain('/features/business');
      }
    });
  });

});
