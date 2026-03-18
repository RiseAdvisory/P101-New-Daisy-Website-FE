import { render, screen, fireEvent } from '@testing-library/react';
import { DropdownResources } from '../DropDownResources';
import * as languageStore from '@/store/language';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/business'),
}));

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
    onClick,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
    className?: string;
  }) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {children}
      </a>
    );
  };
});

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock Zustand language store
jest.mock('@/store/language', () => ({
  useChangeLanguage: jest.fn(),
}));

// Mock Zustand current page store
jest.mock('@/store/currentPage', () => ({
  useChangePage: jest.fn(() => ({ page: 'business' })),
}));

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('DropdownResources', () => {
  const mockSetOpenBlog = jest.fn();
  const mockSetActive = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.clear();
    localStorageMock.setItem('activePage', '/business');
    localStorageMock.setItem('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');
  });

  describe('LTR Mode (English)', () => {
    beforeEach(() => {
      (languageStore.useChangeLanguage as jest.Mock).mockReturnValue({
        lang: 'en',
        changeLanguages: jest.fn(),
      });
    });

    it('should render dropdown when openBlog is true', () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      expect(screen.getByText('BUSINESS')).toBeInTheDocument();
    });

    it('should not render dropdown when openBlog is false', () => {
      render(
        <DropdownResources
          openBlog={false}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      expect(screen.queryByText('BUSINESS')).not.toBeInTheDocument();
    });

    it('should display all menu items with correct text alignment', () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      expect(screen.getByText('Blog posts')).toBeInTheDocument();
      expect(screen.getByText('Tutorials & Guides')).toBeInTheDocument();
      expect(screen.getByText('Customer testimonials')).toBeInTheDocument();
      expect(screen.getByText('Updates')).toBeInTheDocument();

      // Check for left padding in LTR mode
      const linkElement = screen.getByText('Blog posts').closest('a');
      expect(linkElement).toHaveClass('ltr:pl-4');
    });

    it('should have correct positioning classes for LTR', () => {
      const { container } = render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      const dropdown = container.querySelector('.fixed');
      expect(dropdown).toHaveClass('left-0');
      expect(dropdown).toHaveClass('rtl:left-auto');
      expect(dropdown).toHaveClass('rtl:right-0');
    });

    it('should close dropdown when clicking outside', () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      // Click outside the dropdown
      fireEvent.mouseDown(document.body);

      expect(mockSetOpenBlog).toHaveBeenCalledWith(false);
    });

    it('should call setOpenBlog when clicking a menu item', () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      fireEvent.click(screen.getByText('Blog posts'));

      expect(mockSetOpenBlog).toHaveBeenCalledWith(false);
    });

    it('should render image element before content element in LTR', () => {
      const { container } = render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      const flexContainer = container.querySelector('.flex.ltr\\:flex-row');
      const firstChild = flexContainer?.firstChild as HTMLElement;

      // In LTR, image should be first child
      expect(firstChild).toHaveClass('max-w-[420px]');
    });
  });

  describe('RTL Mode (Arabic)', () => {
    beforeEach(() => {
      (languageStore.useChangeLanguage as jest.Mock).mockReturnValue({
        lang: 'ar',
        changeLanguages: jest.fn(),
      });
      localStorageMock.setItem('lang', 'ar');
      document.documentElement.setAttribute('dir', 'rtl');
    });

    it('should render dropdown in RTL mode with Arabic content', () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      expect(screen.getByText('شركة')).toBeInTheDocument();
    });

    it('should display all menu items in Arabic with correct text alignment', () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      expect(screen.getByText('مقالات المدونة')).toBeInTheDocument();
      expect(screen.getByText('الدروس التعليمية والأدلة')).toBeInTheDocument();
      expect(screen.getByText('آراء العملاء')).toBeInTheDocument();
      expect(screen.getByText('التحديثات')).toBeInTheDocument();

      // Check for right padding in RTL mode
      const linkElement = screen.getByText('مقالات المدونة').closest('a');
      expect(linkElement).toHaveClass('rtl:pr-4');
    });

    it('should have rtl:text-right class for heading in RTL mode', () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      const heading = screen.getByText('شركة');
      expect(heading).toHaveClass('rtl:text-right');
    });

    it('should render content element before image element in RTL', () => {
      const { container } = render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      const flexContainer = container.querySelector('.flex.ltr\\:flex-row');
      // In RTL (lang=ar), component renders contentElement first, then imageElement
      const firstChild = flexContainer?.firstChild as HTMLElement;
      expect(firstChild).toHaveClass('flex-1');
    });

    it('should apply flex-row-reverse in RTL mode', () => {
      const { container } = render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      const flexContainer = container.querySelector('.flex');
      expect(flexContainer).toHaveClass('rtl:flex-row-reverse');
    });
  });

  describe('Hover Behavior', () => {
    beforeEach(() => {
      (languageStore.useChangeLanguage as jest.Mock).mockReturnValue({
        lang: 'en',
        changeLanguages: jest.fn(),
      });
    });

    it('should have hover styles on menu items', () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      const listItem = screen.getByText('Blog posts').closest('li');
      expect(listItem).toHaveClass('hover:bg-[#E8E9E9]');
      expect(listItem).toHaveClass('hover:outline-gray-300');
      expect(listItem).toHaveClass('hover:outline');
    });
  });

  describe('Page Type Selection', () => {
    it('should show customer resources when activePage is /customer', () => {
      (languageStore.useChangeLanguage as jest.Mock).mockReturnValue({
        lang: 'en',
        changeLanguages: jest.fn(),
      });
      localStorageMock.setItem('activePage', '/customer');

      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      expect(screen.getByText('CUSTOMER')).toBeInTheDocument();
    });

    it('should show professional resources when activePage is /professional', () => {
      (languageStore.useChangeLanguage as jest.Mock).mockReturnValue({
        lang: 'en',
        changeLanguages: jest.fn(),
      });
      localStorageMock.setItem('activePage', '/professional');

      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      expect(screen.getByText('PROFESSIONAL')).toBeInTheDocument();
    });
  });
});
