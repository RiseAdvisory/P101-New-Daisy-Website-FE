import { render, cleanup, act } from '@testing-library/react';
import ToggleButton from '../ToggleHeader';

// --- mocks (mirroring ToggleHeader.test.tsx) -------------------------------

const mockPush = jest.fn();
const mockReplace = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/contact'), // default: a non-persona page
  useRouter: jest.fn(() => ({ push: mockPush, replace: mockReplace })),
}));

const mockSetUserChange = jest.fn();
jest.mock('@/app/MyContext', () => ({
  useMyContext: jest.fn(() => ({
    userChange: 'business',
    setUserChange: mockSetUserChange,
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

jest.mock('@/components/ui/button', () => ({
  Button: ({
    children,
    onClick,
    className,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }) => (
    <button onClick={onClick} data-className={className}>
      {children}
    </button>
  ),
}));

// --- helpers ---------------------------------------------------------------

function setLocalStorageValue(value: string | null) {
  const setItem = jest.fn();
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => value),
      setItem,
      removeItem: jest.fn(),
    },
    writable: true,
  });
  return { setItem };
}

// --- tests -----------------------------------------------------------------

describe('ToggleButton — first-visit persona default', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/contact'); // non-persona page
  });

  afterEach(() => {
    cleanup();
  });

  it('defaults to /business and writes it to localStorage on first visit', async () => {
    const { setItem } = setLocalStorageValue(null);

    await act(async () => {
      render(<ToggleButton />);
    });

    expect(setItem).toHaveBeenCalledWith('activePage', '/business');
    // setUserChange should be called with the resolved persona (not '').
    expect(mockSetUserChange).toHaveBeenCalledWith('/business');
    expect(mockSetUserChange).not.toHaveBeenCalledWith('');
  });

  it('migrates the deprecated /customer value to /business', async () => {
    const { setItem } = setLocalStorageValue('/customer');

    await act(async () => {
      render(<ToggleButton />);
    });

    expect(setItem).toHaveBeenCalledWith('activePage', '/business');
    expect(mockSetUserChange).toHaveBeenCalledWith('/business');
  });

  it('respects an existing /professional value', async () => {
    setLocalStorageValue('/professional');

    await act(async () => {
      render(<ToggleButton />);
    });

    expect(mockSetUserChange).toHaveBeenCalledWith('/professional');
    // Should not write back when the stored value is already valid.
    expect(window.localStorage.setItem).not.toHaveBeenCalledWith(
      'activePage',
      '/business',
    );
  });

  it('never calls setUserChange with an empty string', async () => {
    setLocalStorageValue(null);

    await act(async () => {
      render(<ToggleButton />);
    });

    for (const call of mockSetUserChange.mock.calls) {
      expect(call[0]).not.toBe('');
    }
  });
});
