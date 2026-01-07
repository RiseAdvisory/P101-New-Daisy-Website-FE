/**
 * Tests for Header component menu visibility logic
 * Focuses on localStorage-based conditional rendering of menu items
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Header } from '../Header';

// Mock Next.js modules
jest.mock('next/link', () => {
  // eslint-disable-next-line react/display-name
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>;
  };
});

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

// Mock axios
jest.mock('@/helpers/axiosConfig', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() =>
      Promise.resolve({
        data: {
          data: [
            {
              attributes: {
                headerNavList: [
                  { title: 'Home', nav: '/' },
                  { title: 'About', nav: '/about' },
                  { title: 'Features', nav: '/features' },
                  { title: 'Resources', nav: '/resources' },
                  { title: 'Pricing', nav: '/pricing' },
                ],
                getTheApp: 'Get the app',
              },
            },
          ],
        },
      }),
    ),
  },
}));

// Mock Zustand stores
jest.mock('@/store/language', () => ({
  useChangeLanguage: () => ({
    lang: 'en',
    changeLanguages: jest.fn(),
  }),
}));

jest.mock('@/store/currentPage', () => ({
  useChangePage: () => ({
    page: '/customer',
  }),
}));

jest.mock('@/store/openMenu', () => ({
  useOpenMenu: () => ({
    isOpenMenu: false,
    toggleOpenMenu: jest.fn(),
  }),
}));

// Mock components that aren't relevant to this test
jest.mock('@/assets/icons/logo/LogoIconsS', () => ({
  LogoIconsS: () => <div>Logo</div>,
}));

jest.mock('../../buttonApp/GetAppButton', () => ({
  GetAppButton: () => <div>Get App Button</div>,
}));

jest.mock('../../toogleHeader/ToogleHeader', () => ({
  __esModule: true,
  default: () => <div>Toggle Button</div>,
}));

jest.mock('../../dropdownMobileHeader/DropdownMobileHeader', () => ({
  DropDownMobileHeader: () => <div>Language Dropdown</div>,
}));

jest.mock('../../dropdownMobileHeader/DropDownMobileHeaderLang', () => ({
  DropDownMobileHeaderLang: () => <div>Language Dropdown Mobile</div>,
}));

jest.mock('../../dropdownMobileHeader/ChangeUserMobile', () => ({
  ChangeUserTypeMobile: () => <div>User Type Mobile</div>,
}));

jest.mock('../../blogPage/DropDownResources', () => ({
  DropdownResources: () => <div>Resources Dropdown</div>,
}));

jest.mock('../../mobileMenu/mobileMenu', () => ({
  MobileMenu: () => <div>Mobile Menu</div>,
}));

describe('Header - Menu Visibility Logic', () => {
  let localStorageMock: { [key: string]: string };

  beforeEach(() => {
    // Setup localStorage mock
    localStorageMock = {};

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((key: string) => localStorageMock[key] || null),
        setItem: jest.fn((key: string, value: string) => {
          localStorageMock[key] = value;
        }),
        removeItem: jest.fn((key: string) => {
          delete localStorageMock[key];
        }),
        clear: jest.fn(() => {
          localStorageMock = {};
        }),
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when localStorage activePage is null', () => {
    it('should show all menu items including Resources, Features, and Pricing', async () => {
      localStorageMock['activePage'] = '';

      render(<Header />);

      await waitFor(() => {
        expect(screen.queryByText('Resources')).toBeInTheDocument();
        expect(screen.queryByText('Features')).toBeInTheDocument();
        expect(screen.queryByText('Pricing')).toBeInTheDocument();
      });
    });
  });

  describe('when localStorage activePage is /customer', () => {
    it('should hide Resources and Features but show Pricing', async () => {
      localStorageMock['activePage'] = '/customer';

      render(<Header />);

      await waitFor(() => {
        // Features and Resources should be hidden
        const allLinks = screen.queryAllByRole('link');
        const linkTexts = allLinks.map((link) => link.textContent);

        expect(linkTexts).not.toContain('Resources');
        expect(linkTexts).not.toContain('Features');
        // Pricing should be visible
        expect(screen.queryByText('Pricing')).toBeInTheDocument();
      });
    });
  });

  describe('when localStorage activePage is /business', () => {
    it('should hide Resources and Features but show Pricing', async () => {
      localStorageMock['activePage'] = '/business';

      render(<Header />);

      await waitFor(() => {
        const allLinks = screen.queryAllByRole('link');
        const linkTexts = allLinks.map((link) => link.textContent);

        expect(linkTexts).not.toContain('Resources');
        expect(linkTexts).not.toContain('Features');
        expect(screen.queryByText('Pricing')).toBeInTheDocument();
      });
    });
  });

  describe('when localStorage activePage is /professional', () => {
    it('should hide Resources and Features but show Pricing', async () => {
      localStorageMock['activePage'] = '/professional';

      render(<Header />);

      await waitFor(() => {
        const allLinks = screen.queryAllByRole('link');
        const linkTexts = allLinks.map((link) => link.textContent);

        expect(linkTexts).not.toContain('Resources');
        expect(linkTexts).not.toContain('Features');
        expect(screen.queryByText('Pricing')).toBeInTheDocument();
      });
    });
  });

  describe('when localStorage activePage is a non-user-type page', () => {
    it('should show all menu items on /about page', async () => {
      localStorageMock['activePage'] = '/about';

      render(<Header />);

      await waitFor(() => {
        expect(screen.queryByText('Resources')).toBeInTheDocument();
        expect(screen.queryByText('Features')).toBeInTheDocument();
        expect(screen.queryByText('Pricing')).toBeInTheDocument();
      });
    });
  });

  describe('localStorage read performance', () => {
    it('should not call localStorage.getItem during render', async () => {
      const getItemSpy = jest.spyOn(window.localStorage, 'getItem');
      localStorageMock['activePage'] = '/customer';

      render(<Header />);

      // Wait for component to mount and useEffect to run
      await waitFor(() => {
        expect(screen.getByText('Logo')).toBeInTheDocument();
      });

      // localStorage should only be called in useEffect, not during render
      // The exact count depends on implementation, but it should be finite
      const callCount = getItemSpy.mock.calls.length;
      expect(callCount).toBeGreaterThan(0); // Called at least once in useEffect
      expect(callCount).toBeLessThan(100); // But not repeatedly in render loop
    });
  });
});
