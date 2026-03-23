import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ToggleButton from '../ToogleHeader';

// Mock next/navigation
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/business'),
  useRouter: jest.fn(() => ({ push: mockPush, replace: jest.fn() })),
}));

// Mock MyContext
const mockSetUserChange = jest.fn();
jest.mock('@/app/MyContext', () => ({
  useMyContext: jest.fn(() => ({
    userChange: '',
    setUserChange: mockSetUserChange,
  })),
}));

// Mock currentPage store
const mockChangePage = jest.fn();
jest.mock('@/store/currentPage', () => ({
  useChangePage: jest.fn(() => ({ changePage: mockChangePage })),
}));

// Mock locale utilities
jest.mock('@/lib/utils/locale', () => ({
  getLocaleFromPathname: () => 'en',
  stripLocaleFromPathname: (path: string) => path.replace(/^\/(en|ar)/, ''),
  localePath: (path: string, locale: string) => `/${locale}${path}`,
}));

// Mock headerData
jest.mock('@/lib/constants/shared/headerData', () => ({
  headerData: {
    en: {
      headerNavList: [],
      optionsToogle: [
        { label: 'Business', path: '/business' },
        { label: 'Professional', path: '/professional' },
      ],
      optionsTooglseFeatures: [],
      getTheApp: 'Start Free Trial',
      listLanguage: [],
    },
    ar: {
      headerNavList: [],
      optionsToogle: [
        { label: 'Business', path: '/business' },
        { label: 'Professional', path: '/professional' },
      ],
      optionsTooglseFeatures: [],
      getTheApp: 'Start Free Trial',
      listLanguage: [],
    },
  },
}));

// Mock i18n
jest.mock('@/lib/constants/i18n', () => ({
  t: (data: any) => data?.en ?? data,
}));

// Mock Button component
jest.mock('@/components/ui/button', () => ({
  Button: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
  }) => <button onClick={onClick}>{children}</button>,
}));

describe('ToggleButton — solutions routing', () => {
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

  it('navigates to the same solution slug with professional persona when on a solutions/business page', () => {
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/solutions/brand-control/business');

    render(<ToggleButton />);

    const professionalBtn = screen.getByText('Professional');
    fireEvent.click(professionalBtn);

    expect(mockPush).toHaveBeenCalledWith(
      '/en/solutions/brand-control/professional',
    );
  });

  it('navigates to the same solution slug with business persona when on a solutions/professional page', () => {
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/solutions/ai-intelligence/professional');

    render(<ToggleButton />);

    const businessBtn = screen.getByText('Business');
    fireEvent.click(businessBtn);

    expect(mockPush).toHaveBeenCalledWith(
      '/en/solutions/ai-intelligence/business',
    );
  });

  it('navigates to features/professional when on a features page and Professional is clicked', () => {
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/features/business');

    render(<ToggleButton />);

    const professionalBtn = screen.getByText('Professional');
    fireEvent.click(professionalBtn);

    expect(mockPush).toHaveBeenCalledWith('/en/features/professional');
  });

  it('navigates to start-free-trial/professional when on a start-free-trial page and Professional is clicked', () => {
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/start-free-trial/business');

    render(<ToggleButton />);

    const professionalBtn = screen.getByText('Professional');
    fireEvent.click(professionalBtn);

    expect(mockPush).toHaveBeenCalledWith('/en/start-free-trial/professional');
  });
});
