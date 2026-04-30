import { render, screen, cleanup, act } from '@testing-library/react';
import { ChangeUserTypeMobile } from '../ChangeUserMobile';

const mockPush = jest.fn();
const mockReplace = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/contact'),
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

jest.mock('@/components/ui/dropdown-menu', () => ({
  DropdownMenu: ({ children }: any) => <div>{children}</div>,
  DropdownMenuTrigger: ({ children, className }: any) => (
    <button className={className}>{children}</button>
  ),
  DropdownMenuContent: ({ children }: any) => <div>{children}</div>,
  DropdownMenuItem: ({ children }: any) => <div>{children}</div>,
}));

jest.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

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

describe('ChangeUserTypeMobile — first-visit persona default', () => {
  const defaultProps = {
    state: '',
    setState: jest.fn(),
    list: [],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/contact');
  });

  afterEach(() => cleanup());

  it('renders the Business label on first visit when localStorage is empty', async () => {
    setLocalStorageValue(null);

    await act(async () => {
      render(<ChangeUserTypeMobile {...defaultProps} />);
    });

    // The dropdown trigger displays the persona label inside a <p>.
    // The trigger renders the persona label inside a <p>; the dropdown items
    // render the same labels in <button>s, so several matches are expected.
    const labels = screen.getAllByText('Business');
    expect(labels.length).toBeGreaterThanOrEqual(1);
    expect(labels.some((el) => el.tagName === 'P')).toBe(true);
  });

  it('writes /business to localStorage on first visit', async () => {
    const { setItem } = setLocalStorageValue(null);

    await act(async () => {
      render(<ChangeUserTypeMobile {...defaultProps} />);
    });

    expect(setItem).toHaveBeenCalledWith('activePage', '/business');
    expect(mockSetUserChange).toHaveBeenCalledWith('/business');
  });

  it('migrates the deprecated /customer value to /business', async () => {
    const { setItem } = setLocalStorageValue('/customer');

    await act(async () => {
      render(<ChangeUserTypeMobile {...defaultProps} />);
    });

    expect(setItem).toHaveBeenCalledWith('activePage', '/business');
    // The trigger renders the persona label inside a <p>; the dropdown items
    // render the same labels in <button>s, so several matches are expected.
    const labels = screen.getAllByText('Business');
    expect(labels.length).toBeGreaterThanOrEqual(1);
    expect(labels.some((el) => el.tagName === 'P')).toBe(true);
  });

  it('respects an existing /professional value and shows the Professional label', async () => {
    setLocalStorageValue('/professional');

    await act(async () => {
      render(<ChangeUserTypeMobile {...defaultProps} />);
    });

    const labels = screen.getAllByText('Professional');
    expect(labels.some((el) => el.tagName === 'P')).toBe(true);
    expect(mockSetUserChange).toHaveBeenCalledWith('/professional');
  });

  it('never calls setUserChange with an empty string', async () => {
    setLocalStorageValue(null);

    await act(async () => {
      render(<ChangeUserTypeMobile {...defaultProps} />);
    });

    for (const call of mockSetUserChange.mock.calls) {
      expect(call[0]).not.toBe('');
    }
  });
});
