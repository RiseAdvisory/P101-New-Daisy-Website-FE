import { render, screen, waitFor } from '@testing-library/react';
import { FeaturesBusinessClient } from '../FeaturesBusinessClient';
import axiosInstance from '@/helpers/axiosConfig';

// Mock dependencies
jest.mock('@/helpers/axiosConfig');
jest.mock('@/store/language');

const mockAxiosInstance = axiosInstance as jest.Mocked<typeof axiosInstance>;

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img alt="" {...props} />
  ),
}));

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  })),
  usePathname: jest.fn(() => '/features/business'),
}));

// Mock child components
jest.mock('@/components/heroSection/HeroSection', () => ({
  HeroPage: ({ description }: { description: string }) => (
    <div data-testid="hero-page">{description}</div>
  ),
}));

jest.mock('@/components/featuresPage/SectionBusiness', () => ({
  SectionBusiness: ({ listOption }: { listOption: any }) => (
    <div data-testid="section-business">
      {listOption ? `${listOption.length} options` : 'No options'}
    </div>
  ),
}));

jest.mock('@/components/featuresPage/DesctopViewProfessional', () => ({
  DesctopViewProfessional: ({
    categoryData,
  }: {
    dataBusiness: any;
    categoryData: any;
  }) => {
    const categories = Object.entries(categoryData)
      .filter(([, v]) => v && (v as any[]).length > 0)
      .map(([k]) => k);
    return (
      <div data-testid="desktop-view">
        {categories.length > 0
          ? `Categories: ${categories.join(', ')}`
          : 'No categories'}
        {Object.entries(categoryData).map(([key, items]: [string, any]) =>
          items && items.length > 0 ? (
            <div key={key} data-testid={`category-${key}`}>
              {items.map((item: any) => item.attributes?.title).join(', ')}
            </div>
          ) : null,
        )}
      </div>
    );
  },
}));

jest.mock('@/components/featuresPage/MobileSectionProfessional', () => ({
  MobileViewProfessional: ({
    categoryData,
  }: {
    dataFeatures: any;
    categoryData: any;
  }) => {
    const categories = Object.entries(categoryData)
      .filter(([, v]) => v && (v as any[]).length > 0)
      .map(([k]) => k);
    return (
      <div data-testid="mobile-view">
        {categories.length > 0
          ? `Categories: ${categories.join(', ')}`
          : 'No categories'}
      </div>
    );
  },
}));

jest.mock('@/components/featuresPage/SignUpBlog', () => ({
  SignUpBlog: () => <div data-testid="signup-blog">SignUp</div>,
}));

jest.mock('@/components/ui/skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton">Loading...</div>,
}));

describe('FeaturesBusinessClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'en',
    }));
  });

  const mockPageData = {
    data: {
      data: [
        {
          attributes: {
            title: 'Business Features',
            listBusinessOptions: [
              { title: 'AI', path: 'ai' },
              { title: 'Booking', path: 'booking' },
              { title: 'Communication', path: 'communication' },
              { title: 'Marketing', path: 'marketing' },
              { title: 'Payments', path: 'payments' },
              { title: 'Growth', path: 'growth' },
              { title: 'Control', path: 'control' },
              { title: 'Reports', path: 'reports' },
            ],
            marketingTools: {
              title: 'Marketing Tools',
              description: 'Boost your business',
            },
            collectPayments: {
              title: 'Collect Payments',
              description: 'Get paid easily',
            },
            performanceReports: {
              title: 'Reports',
              description: 'Track performance',
            },
          },
        },
      ],
    },
  };

  const mockCategoryResponse = (items: any[] = [{ id: 1 }]) => ({
    data: { data: items },
  });

  const setupMockResponses = ({
    existingFail = false,
    newFail = false,
  } = {}) => {
    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('feature-businesses')) {
        return Promise.resolve(mockPageData);
      }
      // Existing endpoints
      if (
        url.includes('features-business-marketings') ||
        url.includes('feature-business-payments') ||
        url.includes('feature-business-reports')
      ) {
        if (existingFail) return Promise.reject(new Error('API Error'));
        return Promise.resolve(mockCategoryResponse());
      }
      // New endpoints
      if (newFail) return Promise.reject(new Error('Not Found'));
      return Promise.resolve(mockCategoryResponse());
    });
  };

  it('renders skeleton while loading', () => {
    mockAxiosInstance.get.mockImplementation(() => new Promise(() => {}));
    render(<FeaturesBusinessClient />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('renders content after data is fetched', async () => {
    setupMockResponses();
    render(<FeaturesBusinessClient />);

    await waitFor(() => {
      expect(screen.getByTestId('desktop-view')).toBeInTheDocument();
      expect(screen.getByTestId('mobile-view')).toBeInTheDocument();
      expect(screen.getByTestId('section-business')).toBeInTheDocument();
    });
  });

  it('fetches from all 8 category endpoints plus page data', async () => {
    setupMockResponses();
    render(<FeaturesBusinessClient />);

    await waitFor(() => {
      // Page data
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/feature-businesses?populate=*&locale=en',
      );
      // Existing 3 endpoints
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/features-business-marketings?populate=*&locale=en&pagination[pageSize]=100',
      );
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/feature-business-payments?populate=*&locale=en&pagination[pageSize]=100',
      );
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/feature-business-reports?populate=*&locale=en&pagination[pageSize]=100',
      );
      // New 5 endpoints
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/feature-business-ai-powereds?populate=*&locale=en&pagination[pageSize]=100',
      );
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/feature-business-bookings?populate=*&locale=en&pagination[pageSize]=100',
      );
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/feature-business-communications?populate=*&locale=en&pagination[pageSize]=100',
      );
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/feature-business-growths?populate=*&locale=en&pagination[pageSize]=100',
      );
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/feature-business-controls?populate=*&locale=en&pagination[pageSize]=100',
      );
    });
  });

  it('passes category data to desktop and mobile views', async () => {
    setupMockResponses();
    render(<FeaturesBusinessClient />);

    await waitFor(() => {
      const desktopView = screen.getByTestId('desktop-view');
      expect(desktopView).toHaveTextContent('marketing');
      expect(desktopView).toHaveTextContent('payments');
      expect(desktopView).toHaveTextContent('reports');
      expect(desktopView).toHaveTextContent('ai');
      expect(desktopView).toHaveTextContent('booking');
    });
  });

  it('renders navigation with correct option count', async () => {
    setupMockResponses();
    render(<FeaturesBusinessClient />);

    await waitFor(() => {
      expect(screen.getByTestId('section-business')).toHaveTextContent(
        '8 options',
      );
    });
  });

  it('handles new endpoint failures gracefully — existing categories still render', async () => {
    setupMockResponses({ newFail: true });
    render(<FeaturesBusinessClient />);

    await waitFor(() => {
      const desktopView = screen.getByTestId('desktop-view');
      // Existing categories should still render
      expect(desktopView).toHaveTextContent('marketing');
      expect(desktopView).toHaveTextContent('payments');
      expect(desktopView).toHaveTextContent('reports');
      // New categories should not appear
      expect(desktopView).not.toHaveTextContent('ai');
      expect(desktopView).not.toHaveTextContent('booking');
    });
  });

  it('handles complete API failure gracefully', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    mockAxiosInstance.get.mockRejectedValue(new Error('Network Error'));

    render(<FeaturesBusinessClient />);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error fetching business features:',
        expect.any(Error),
      );
    });

    consoleSpy.mockRestore();
  });

  it('removes skeleton after loading completes', async () => {
    setupMockResponses();
    render(<FeaturesBusinessClient />);

    // Skeleton should be visible initially
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();

    // After loading, skeleton should be gone
    await waitFor(() => {
      expect(screen.queryByTestId('skeleton')).not.toBeInTheDocument();
    });
  });

  it('removes skeleton even after API error', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    mockAxiosInstance.get.mockRejectedValue(new Error('Error'));

    render(<FeaturesBusinessClient />);

    await waitFor(() => {
      expect(screen.queryByTestId('skeleton')).not.toBeInTheDocument();
    });

    consoleSpy.mockRestore();
  });

  it('passes hero description from page data', async () => {
    setupMockResponses();
    render(<FeaturesBusinessClient />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-page')).toHaveTextContent(
        'Business Features',
      );
    });
  });

  it('sorts category data by attributes.sortId in ascending order', async () => {
    const unsortedItems = [
      { id: 1, attributes: { sortId: 3, title: 'Third' } },
      { id: 2, attributes: { sortId: 1, title: 'First' } },
      { id: 3, attributes: { sortId: 2, title: 'Second' } },
    ];

    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('feature-businesses')) {
        return Promise.resolve(mockPageData);
      }
      if (url.includes('features-business-marketings')) {
        return Promise.resolve(mockCategoryResponse(unsortedItems));
      }
      if (
        url.includes('feature-business-payments') ||
        url.includes('feature-business-reports')
      ) {
        return Promise.resolve(mockCategoryResponse([]));
      }
      return Promise.reject(new Error('Not Found'));
    });

    render(<FeaturesBusinessClient />);

    await waitFor(() => {
      expect(screen.getByTestId('category-marketing')).toHaveTextContent(
        'First, Second, Third',
      );
    });
  });

  it('sorts correctly when sortId values exceed 50', async () => {
    const highSortIds = [
      { id: 1, attributes: { sortId: 100, title: 'Hundredth' } },
      { id: 2, attributes: { sortId: 5, title: 'Fifth' } },
      { id: 3, attributes: { sortId: 55, title: 'FiftyFifth' } },
      { id: 4, attributes: { sortId: 60, title: 'Sixtieth' } },
      { id: 5, attributes: { sortId: 2, title: 'Second' } },
    ];

    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('feature-businesses')) {
        return Promise.resolve(mockPageData);
      }
      if (url.includes('features-business-marketings')) {
        return Promise.resolve(mockCategoryResponse(highSortIds));
      }
      if (
        url.includes('feature-business-payments') ||
        url.includes('feature-business-reports')
      ) {
        return Promise.resolve(mockCategoryResponse([]));
      }
      return Promise.reject(new Error('Not Found'));
    });

    render(<FeaturesBusinessClient />);

    await waitFor(() => {
      expect(screen.getByTestId('category-marketing')).toHaveTextContent(
        'Second, Fifth, FiftyFifth, Sixtieth, Hundredth',
      );
    });
  });

  it('handles items with missing sortId using fallback of 0', async () => {
    const mixedSortIds = [
      { id: 1, attributes: { sortId: 3, title: 'Third' } },
      { id: 2, attributes: { title: 'NoSort' } },
      { id: 3, attributes: { sortId: 1, title: 'First' } },
    ];

    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('feature-businesses')) {
        return Promise.resolve(mockPageData);
      }
      if (url.includes('features-business-marketings')) {
        return Promise.resolve(mockCategoryResponse(mixedSortIds));
      }
      if (
        url.includes('feature-business-payments') ||
        url.includes('feature-business-reports')
      ) {
        return Promise.resolve(mockCategoryResponse([]));
      }
      return Promise.reject(new Error('Not Found'));
    });

    render(<FeaturesBusinessClient />);

    await waitFor(() => {
      expect(screen.getByTestId('category-marketing')).toHaveTextContent(
        'NoSort, First, Third',
      );
    });
  });
});
