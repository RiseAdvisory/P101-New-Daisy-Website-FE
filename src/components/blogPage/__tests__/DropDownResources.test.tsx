import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DropdownResources } from '../DropDownResources';
import * as languageStore from '@/store/language';
import axiosInstance from '@/helpers/axiosConfig';

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

// Mock axios
jest.mock('@/helpers/axiosConfig', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
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

  const mockResourcesDataEn = {
    data: {
      data: [
        {
          attributes: {
            title: 'BUSINESS',
            itemResources: [
              {
                title: 'Blog posts',
                description: 'Find cool stories and ideas',
                nav: '/resources/blog-post',
              },
              {
                title: 'Tutorials & Guides',
                description: 'Lorem ipsum dolor sit dolor',
                nav: '/resources/tutorials',
              },
              {
                title: 'Customer testimonials',
                description: 'Lorem ipsum dolor sit dolor',
                nav: '/resources/testimonials',
              },
              {
                title: 'Updates',
                description: 'Lorem ipsum dolor sit dolor',
                nav: '/resources/updates',
              },
            ],
          },
        },
      ],
    },
  };

  const mockResourcesDataAr = {
    data: {
      data: [
        {
          attributes: {
            title: 'شركة',
            itemResources: [
              {
                title: 'مقالات المدونة',
                description: 'اكتشف قصصًا وأفكارًا مميزة',
                nav: '/resources/blog-post',
              },
              {
                title: 'الدروس التعليمية والأدلة',
                description: 'نص تجريبي لأغراض العرض فقط',
                nav: '/resources/tutorials',
              },
              {
                title: 'آراء العملاء',
                description: 'نص تجريبي لأغراض العرض فقط',
                nav: '/resources/testimonials',
              },
              {
                title: 'التحديثات',
                description: 'نص تجريبي لأغراض العرض فقط',
                nav: '/resources/updates',
              },
            ],
          },
        },
      ],
    },
  };

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
      (axiosInstance.get as jest.Mock).mockResolvedValue(mockResourcesDataEn);
    });

    it('should render dropdown when openBlog is true', async () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('BUSINESS')).toBeInTheDocument();
      });
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

    it('should display all menu items with correct text alignment', async () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('Blog posts')).toBeInTheDocument();
        expect(screen.getByText('Tutorials & Guides')).toBeInTheDocument();
        expect(screen.getByText('Customer testimonials')).toBeInTheDocument();
        expect(screen.getByText('Updates')).toBeInTheDocument();
      });

      // Check for left padding in LTR mode
      const linkElement = screen.getByText('Blog posts').closest('a');
      expect(linkElement).toHaveClass('ltr:pl-4');
    });

    it('should have correct positioning classes for LTR', async () => {
      const { container } = render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('BUSINESS')).toBeInTheDocument();
      });

      const dropdown = container.querySelector('.fixed');
      expect(dropdown).toHaveClass('left-0');
      expect(dropdown).toHaveClass('rtl:left-auto');
      expect(dropdown).toHaveClass('rtl:right-0');
    });

    it('should close dropdown when clicking outside', async () => {
      const { container } = render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('BUSINESS')).toBeInTheDocument();
      });

      // Click outside the dropdown
      fireEvent.mouseDown(document.body);

      expect(mockSetOpenBlog).toHaveBeenCalledWith(false);
    });

    it('should call setOpenBlog when clicking a menu item', async () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('Blog posts')).toBeInTheDocument();
      });

      fireEvent.click(screen.getByText('Blog posts'));

      expect(mockSetOpenBlog).toHaveBeenCalledWith(false);
    });

    it('should render image element before content element in LTR', async () => {
      const { container } = render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('BUSINESS')).toBeInTheDocument();
      });

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
      (axiosInstance.get as jest.Mock).mockResolvedValue(mockResourcesDataAr);
      localStorageMock.setItem('lang', 'ar');
      document.documentElement.setAttribute('dir', 'rtl');
    });

    it('should render dropdown in RTL mode with Arabic content', async () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('شركة')).toBeInTheDocument();
      });
    });

    it('should display all menu items in Arabic with correct text alignment', async () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('مقالات المدونة')).toBeInTheDocument();
        expect(screen.getByText('الدروس التعليمية والأدلة')).toBeInTheDocument();
        expect(screen.getByText('آراء العملاء')).toBeInTheDocument();
        expect(screen.getByText('التحديثات')).toBeInTheDocument();
      });

      // Check for right padding in RTL mode
      const linkElement = screen.getByText('مقالات المدونة').closest('a');
      expect(linkElement).toHaveClass('rtl:pr-4');
    });

    it('should have rtl:text-right class for heading in RTL mode', async () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        const heading = screen.getByText('شركة');
        expect(heading).toHaveClass('rtl:text-right');
      });
    });

    it('should render content element before image element in RTL', async () => {
      const { container } = render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('شركة')).toBeInTheDocument();
      });

      const flexContainer = container.querySelector('.flex.rtl\\:flex-row-reverse');
      const firstChild = flexContainer?.firstChild as HTMLElement;

      // In RTL, content (flex-1) should be first child
      expect(firstChild).toHaveClass('flex-1');
    });

    it('should apply flex-row-reverse in RTL mode', async () => {
      const { container } = render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('شركة')).toBeInTheDocument();
      });

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
      (axiosInstance.get as jest.Mock).mockResolvedValue(mockResourcesDataEn);
    });

    it('should have hover styles on menu items', async () => {
      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('Blog posts')).toBeInTheDocument();
      });

      const listItem = screen.getByText('Blog posts').closest('li');
      expect(listItem).toHaveClass('hover:bg-[#E8E9E9]');
      expect(listItem).toHaveClass('hover:outline-gray-300');
      expect(listItem).toHaveClass('hover:outline');
    });
  });

  describe('API Integration', () => {
    it('should fetch resources for business page', async () => {
      (languageStore.useChangeLanguage as jest.Mock).mockReturnValue({
        lang: 'en',
        changeLanguages: jest.fn(),
      });
      (axiosInstance.get as jest.Mock).mockResolvedValue(mockResourcesDataEn);

      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(axiosInstance.get).toHaveBeenCalledWith(
          '/resource-list-business-types?locale=en'
        );
      });
    });

    it('should fetch resources in Arabic locale', async () => {
      (languageStore.useChangeLanguage as jest.Mock).mockReturnValue({
        lang: 'ar',
        changeLanguages: jest.fn(),
      });
      (axiosInstance.get as jest.Mock).mockResolvedValue(mockResourcesDataAr);
      localStorageMock.setItem('lang', 'ar');

      render(
        <DropdownResources
          openBlog={true}
          setOpenBlog={mockSetOpenBlog}
          setActive={mockSetActive}
        />
      );

      await waitFor(() => {
        expect(axiosInstance.get).toHaveBeenCalledWith(
          '/resource-list-business-types?locale=ar'
        );
      });
    });
  });
});
