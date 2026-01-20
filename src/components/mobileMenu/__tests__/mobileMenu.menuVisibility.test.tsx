/**
 * Tests for MobileMenu component menu visibility logic
 * Focuses on localStorage-based conditional rendering of mobile menu items
 * Note: Full menu rendering tests require user interaction (opening dropdown)
 * This test file focuses on verifying localStorage is read correctly via useEffect
 */

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MobileMenu } from '../mobileMenu';
import { shouldHideMenuItem, NAV_PATHS } from '@/lib/utils/menuVisibility';

// Mock Next.js modules
jest.mock('next/link', () => {
  // eslint-disable-next-line react/display-name
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>;
  };
});

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

// Mock axios
jest.mock('@/helpers/axiosConfig', () => ({
  __esModule: true,
  default: {
    get: jest.fn((url: string) => {
      if (url.includes('/headers')) {
        return Promise.resolve({
          data: {
            data: [
              {
                attributes: {
                  getTheApp: 'Get the app',
                },
              },
            ],
          },
        });
      }
      if (url.includes('/mobile-list-navigations')) {
        return Promise.resolve({
          data: {
            data: [
              {
                attributes: {
                  listNavigation: [
                    { title: 'Home', nav: '/' },
                    { title: 'About', nav: '/about' },
                    { title: 'Features', nav: '/features' },
                    {
                      title: 'Resources',
                      nav: '/resources',
                      submenu: [],
                    },
                    { title: 'Pricing', nav: '/pricing' },
                  ],
                  bredCrumbTitle: 'Back',
                  bredCrumbDesription: 'Go back',
                },
              },
            ],
          },
        });
      }
      return Promise.resolve({ data: { data: [] } });
    }),
  },
}));

// Mock Zustand stores
jest.mock('@/store/language', () => ({
  useChangeLanguage: () => ({
    lang: 'en',
  }),
}));

jest.mock('@/store/currentPage', () => ({
  useChangePage: () => ({
    page: '/customer',
  }),
}));

jest.mock('@/store/openMenu', () => ({
  useOpenMenu: () => ({
    toggleOpenMenu: jest.fn(),
  }),
}));

// Mock components
jest.mock('@/assets/icons/burgerMenu/BurgerMenu', () => ({
  BurgerMenu: () => <div>Burger</div>,
}));

jest.mock('@/assets/icons/closeIcon/CloseIcon', () => ({
  CloseIcon: () => <div>Close</div>,
}));

jest.mock('@/assets/icons/arrowRightIcon/ArrowRightIcon', () => ({
  ArrowRightIcon: () => <div>Arrow</div>,
}));

jest.mock('../../buttonApp/GetAppButton', () => ({
  GetAppButton: () => <div>Get App</div>,
}));

jest.mock('../../separator/Separator', () => ({
  __esModule: true,
  default: () => <hr />,
}));

jest.mock('../breadCrumbMobile', () => ({
  BreadcrumbMobile: () => <div>Breadcrumb</div>,
}));

describe('MobileMenu - Menu Visibility Logic', () => {
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

  describe('localStorage integration', () => {
    it('should read activePage from localStorage on mount', async () => {
      const getItemSpy = jest.spyOn(window.localStorage, 'getItem');
      localStorageMock['activePage'] = '/customer';

      render(<MobileMenu />);

      await waitFor(() => {
        // Verify localStorage was accessed
        expect(getItemSpy).toHaveBeenCalledWith('activePage');
      });
    });

    it('should call localStorage.getItem only in useEffect, not during render', async () => {
      const getItemSpy = jest.spyOn(window.localStorage, 'getItem');
      localStorageMock['activePage'] = '/customer';

      render(<MobileMenu />);

      await waitFor(() => {
        // Component should be rendered
        expect(getItemSpy).toHaveBeenCalled();
      });

      // localStorage should be called a finite number of times, not in render loop
      const callCount = getItemSpy.mock.calls.filter(
        (call) => call[0] === 'activePage',
      ).length;
      expect(callCount).toBeGreaterThan(0);
      expect(callCount).toBeLessThan(10); // Should not be called repeatedly
    });
  });

  describe('shouldHideMenuItem utility integration', () => {
    // These tests verify that the shouldHideMenuItem function works correctly
    // The MobileMenu component uses this function internally

    it('should correctly identify items to hide on customer page', () => {
      expect(shouldHideMenuItem(NAV_PATHS.RESOURCES, '/customer')).toBe(false);
      expect(shouldHideMenuItem(NAV_PATHS.FEATURES, '/customer')).toBe(true);
      expect(shouldHideMenuItem(NAV_PATHS.PRICING, '/customer')).toBe(false);
    });

    it('should correctly identify items to hide on business page', () => {
      expect(shouldHideMenuItem(NAV_PATHS.RESOURCES, '/business')).toBe(false);
      expect(shouldHideMenuItem(NAV_PATHS.FEATURES, '/business')).toBe(true);
      expect(shouldHideMenuItem(NAV_PATHS.PRICING, '/business')).toBe(false);
    });

    it('should correctly identify items to hide on professional page', () => {
      expect(shouldHideMenuItem(NAV_PATHS.RESOURCES, '/professional')).toBe(
        false,
      );
      expect(shouldHideMenuItem(NAV_PATHS.FEATURES, '/professional')).toBe(
        true,
      );
      expect(shouldHideMenuItem(NAV_PATHS.PRICING, '/professional')).toBe(
        false,
      );
    });

    it('should not hide any items on non-user-type pages', () => {
      expect(shouldHideMenuItem(NAV_PATHS.RESOURCES, '/about')).toBe(false);
      expect(shouldHideMenuItem(NAV_PATHS.FEATURES, '/about')).toBe(false);
      expect(shouldHideMenuItem(NAV_PATHS.PRICING, '/about')).toBe(false);
    });
  });

  describe('component rendering', () => {
    it('should render without crashing with null activePage', async () => {
      localStorageMock['activePage'] = '';

      const { container } = render(<MobileMenu />);

      await waitFor(() => {
        expect(container.querySelector('button')).toBeInTheDocument();
      });
    });

    it('should render without crashing with customer activePage', async () => {
      localStorageMock['activePage'] = '/customer';

      const { container } = render(<MobileMenu />);

      await waitFor(() => {
        expect(container.querySelector('button')).toBeInTheDocument();
      });
    });

    it('should render without crashing with business activePage', async () => {
      localStorageMock['activePage'] = '/business';

      const { container } = render(<MobileMenu />);

      await waitFor(() => {
        expect(container.querySelector('button')).toBeInTheDocument();
      });
    });
  });
});
