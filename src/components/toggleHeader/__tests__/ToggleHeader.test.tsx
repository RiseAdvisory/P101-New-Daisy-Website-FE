import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ToggleButton from '../ToggleHeader';

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
      optionsToggle: [
        { label: 'Business', path: '/business' },
        { label: 'Professional', path: '/professional' },
      ],
      optionsToggleFeatures: [],
      getTheApp: 'Start Free Trial',
      listLanguage: [],
    },
    ar: {
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

  it('navigates within /pricing-v2 (not the live /pricing) when on the v2 preview', () => {
    // /pricing-v2 contains the substring "/pricing", so the generic
    // pricing check would otherwise route off the v2 preview to the
    // live page. The v2 branch must come first.
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/pricing-v2/business');

    render(<ToggleButton />);

    const professionalBtn = screen.getByText('Professional');
    fireEvent.click(professionalBtn);

    expect(mockPush).toHaveBeenCalledWith('/en/pricing-v2/professional');
  });

  it('navigates within /pricing-v2 from professional back to business', () => {
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/pricing-v2/professional');

    render(<ToggleButton />);

    const businessBtn = screen.getByText('Business');
    fireEvent.click(businessBtn);

    expect(mockPush).toHaveBeenCalledWith('/en/pricing-v2/business');
  });

  it('still routes within live /pricing when on /pricing/business', () => {
    // Regression guard: the v2 branch must not consume normal /pricing
    // navigation. /pricing/business → /pricing/professional.
    const { usePathname } = require('next/navigation');
    usePathname.mockReturnValue('/pricing/business');

    render(<ToggleButton />);

    const professionalBtn = screen.getByText('Professional');
    fireEvent.click(professionalBtn);

    expect(mockPush).toHaveBeenCalledWith('/en/pricing/professional');
  });
});
