import { render, screen, fireEvent, cleanup, act } from '@testing-library/react';
import { ChangeUserTypeMobile } from '../ChangeUserMobile';

const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/pricing/business'),
  useRouter: jest.fn(() => ({ push: mockPush, replace: jest.fn() })),
}));

jest.mock('@/app/MyContext', () => ({
  useMyContext: jest.fn(() => ({
    userChange: 'business',
    setUserChange: jest.fn(),
  })),
}));

jest.mock('@/store/currentPage', () => ({
  useChangePage: jest.fn(() => ({ changePage: jest.fn() })),
}));

jest.mock('@/lib/utils/locale', () => ({
  getLocaleFromPathname: () => 'en',
  stripLocaleFromPathname: (p: string) => p.replace(/^\/(en|ar)/, ''),
  localePath: (path: string, locale: string) => `/${locale}${path}`,
}));

jest.mock('@/lib/constants/shared/headerData', () => ({
  headerData: {
    en: {
      headerNavList: [],
      optionsToggle: [
        { label: 'Business', path: '/business' },
        { label: 'Customer', path: '/customer' },
        { label: 'Professional', path: '/professional' },
      ],
      optionsToggleFeatures: [],
      getTheApp: 'Start Free Trial',
      listLanguage: [],
    },
  },
}));

jest.mock('@/lib/constants/i18n', () => ({
  t: (data: any) => data?.en ?? data,
}));

jest.mock('@/components/ui/dropdown-menu', () => ({
  DropdownMenu: ({ children }: any) => <div>{children}</div>,
  DropdownMenuTrigger: ({ children, className }: any) => (
    <button className={className}>{children}</button>
  ),
  DropdownMenuContent: ({ children }: any) => <div>{children}</div>,
  DropdownMenuItem: ({ children, onClick }: any) => (
    <div onClick={onClick}>{children}</div>
  ),
}));

jest.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });
  localStorageMock.clear();
  mockPush.mockClear();
});

afterEach(() => cleanup());

const defaultProps = {
  state: '',
  setState: jest.fn(),
  list: [
    { label: 'Business', path: '/business' },
    { label: 'Professional', path: '/professional' },
  ],
};

describe('ChangeUserTypeMobile — pricing route navigation', () => {
  it('navigates within /pricing when on /pricing/business and Professional is clicked', async () => {
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/pricing/business');

    await act(async () => {
      render(<ChangeUserTypeMobile {...defaultProps} />);
    });

    // Click the Professional persona button in the dropdown
    const professionalBtn = screen.getByRole('button', { name: 'Professional' });
    fireEvent.click(professionalBtn);

    expect(mockPush).toHaveBeenCalledWith('/en/pricing/professional');
  });

  it('navigates within /pricing when on /pricing/professional and Business is clicked', async () => {
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/pricing/professional');

    await act(async () => {
      render(<ChangeUserTypeMobile {...defaultProps} />);
    });

    const businessBtn = screen.getByRole('button', { name: 'Business' });
    fireEvent.click(businessBtn);

    expect(mockPush).toHaveBeenCalledWith('/en/pricing/business');
  });

  it('navigates within /pricing-v2 (not the live /pricing) when on the v2 preview', async () => {
    // /pricing-v2 contains the substring "/pricing"; the v2 branch must
    // be checked first AND early-return so we don't double-navigate.
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/pricing-v2/business');

    await act(async () => {
      render(<ChangeUserTypeMobile {...defaultProps} />);
    });

    const professionalBtn = screen.getByRole('button', { name: 'Professional' });
    fireEvent.click(professionalBtn);

    expect(mockPush).toHaveBeenCalledWith('/en/pricing-v2/professional');
    // Must NOT have also pushed to live /pricing
    expect(mockPush).not.toHaveBeenCalledWith('/en/pricing/professional');
  });

  it('only calls router.push once on the v2 preview (no double navigation)', async () => {
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/pricing-v2/professional');

    await act(async () => {
      render(<ChangeUserTypeMobile {...defaultProps} />);
    });

    const businessBtn = screen.getByRole('button', { name: 'Business' });
    fireEvent.click(businessBtn);

    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('/en/pricing-v2/business');
  });
});
