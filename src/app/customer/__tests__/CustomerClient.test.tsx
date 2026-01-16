import { render, screen, waitFor } from '@testing-library/react';
import { CustomerClient } from '../CustomerClient';
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
  usePathname: jest.fn(() => '/customer'),
}));

// Mock child components
jest.mock('@/components/QASection/QASection', () => ({
  QASection: ({ pageType }: { pageType: string }) => (
    <div data-testid="qa-section">{pageType}</div>
  ),
}));

jest.mock('@/components/experienceDaisy/ExperienceDaisy', () => ({
  ExperienceDaisy: () => <div data-testid="experience-daisy">Experience</div>,
}));

jest.mock('@/components/joinTheDaysi/JoinTheDaysi', () => ({
  JoinTheDaisy: () => <div data-testid="join-daisy">Join</div>,
}));

jest.mock('@/components/businessPage/DaysiMission', () => ({
  DaysiMission: () => <div data-testid="daisy-mission">Mission</div>,
}));

jest.mock('@/components/customerPage/GrowthCustomer', () => ({
  GrowthSectionCustomer: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div data-testid="growth-section">
      <span data-testid="growth-title">{title}</span>
      <span data-testid="growth-description">{description}</span>
    </div>
  ),
}));

jest.mock('@/components/shared/MobileScrollSection', () => ({
  MobileScrollSection: ({ dataScroll }: { dataScroll: unknown[] | null }) => (
    <div data-testid="mobile-scroll-section">
      {dataScroll ? `${dataScroll.length} items` : 'No data'}
    </div>
  ),
}));

jest.mock(
  '@/components/lockerScrollingSection/LockerContainer/LockerContainer',
  () => ({
    __esModule: true,
    default: ({ listInfo }: { listInfo: unknown[] | null }) => (
      <div data-testid="locker-container">
        {listInfo ? `${listInfo.length} items` : 'No data'}
      </div>
    ),
  }),
);

jest.mock('@/components/ui/skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton">Loading...</div>,
}));

describe('CustomerClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock language store
    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'en',
    }));
  });

  const mockGrowthData = {
    data: {
      data: [
        {
          attributes: {
            title: 'Grow Your Business',
            description: 'Description here',
            subtitle: 'Subtitle here',
            buttonLearn: 'Learn More',
            buttonLink: '/learn',
            imageHero: {
              data: [{ attributes: { url: '/images/hero.jpg' } }],
            },
          },
        },
      ],
    },
  };

  const mockHomeData = {
    data: {
      data: [
        {
          attributes: {
            titleFraque: 'Customer FAQ',
          },
        },
      ],
    },
  };

  const mockScrollData = {
    data: {
      data: [
        {
          id: 1,
          attributes: {
            sortId: 1,
            infoScroll: { text: 'Item 1' },
          },
        },
        {
          id: 2,
          attributes: {
            sortId: 2,
            infoScroll: { text: 'Item 2' },
          },
        },
      ],
    },
  };

  it('renders skeleton while loading', () => {
    // Don't resolve the promises immediately
    mockAxiosInstance.get.mockImplementation(() => new Promise(() => {}));

    render(<CustomerClient />);

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('renders content after data is fetched', async () => {
    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('growth-customers')) {
        return Promise.resolve(mockGrowthData);
      }
      if (url.includes('home-customers')) {
        return Promise.resolve(mockHomeData);
      }
      if (url.includes('home-customer-scrollings')) {
        return Promise.resolve(mockScrollData);
      }
      return Promise.resolve({ data: { data: [] } });
    });

    render(<CustomerClient />);

    await waitFor(() => {
      expect(screen.getByTestId('growth-section')).toBeInTheDocument();
    });
  });

  it('fetches data from correct API endpoints', async () => {
    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('growth-customers')) {
        return Promise.resolve(mockGrowthData);
      }
      if (url.includes('home-customers')) {
        return Promise.resolve(mockHomeData);
      }
      if (url.includes('home-customer-scrollings')) {
        return Promise.resolve(mockScrollData);
      }
      return Promise.resolve({ data: { data: [] } });
    });

    render(<CustomerClient />);

    await waitFor(() => {
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/growth-customers?populate=*&locale=en',
      );
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/home-customers?locale=en',
      );
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/home-customer-scrollings?populate=*&locale=en',
      );
    });
  });

  it('renders GrowthSectionCustomer with correct props', async () => {
    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('growth-customers')) {
        return Promise.resolve(mockGrowthData);
      }
      if (url.includes('home-customers')) {
        return Promise.resolve(mockHomeData);
      }
      if (url.includes('home-customer-scrollings')) {
        return Promise.resolve(mockScrollData);
      }
      return Promise.resolve({ data: { data: [] } });
    });

    render(<CustomerClient />);

    await waitFor(() => {
      expect(screen.getByTestId('growth-title')).toHaveTextContent(
        'Grow Your Business',
      );
      expect(screen.getByTestId('growth-description')).toHaveTextContent(
        'Description here',
      );
    });
  });

  it('renders QASection with Customer pageType', async () => {
    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('growth-customers')) {
        return Promise.resolve(mockGrowthData);
      }
      if (url.includes('home-customers')) {
        return Promise.resolve(mockHomeData);
      }
      if (url.includes('home-customer-scrollings')) {
        return Promise.resolve(mockScrollData);
      }
      return Promise.resolve({ data: { data: [] } });
    });

    render(<CustomerClient />);

    await waitFor(() => {
      expect(screen.getByTestId('qa-section')).toHaveTextContent('Customer');
    });
  });

  it('handles API error gracefully', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    mockAxiosInstance.get.mockRejectedValue(new Error('API Error'));

    render(<CustomerClient />);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error fetching customer page data:',
        expect.any(Error),
      );
    });

    consoleSpy.mockRestore();
  });

  it('sorts scroll data by sortId', async () => {
    const unsortedScrollData = {
      data: {
        data: [
          { id: 1, attributes: { sortId: 3, infoScroll: { text: 'Item 3' } } },
          { id: 2, attributes: { sortId: 1, infoScroll: { text: 'Item 1' } } },
          { id: 3, attributes: { sortId: 2, infoScroll: { text: 'Item 2' } } },
        ],
      },
    };

    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('growth-customers')) {
        return Promise.resolve(mockGrowthData);
      }
      if (url.includes('home-customers')) {
        return Promise.resolve(mockHomeData);
      }
      if (url.includes('home-customer-scrollings')) {
        return Promise.resolve(unsortedScrollData);
      }
      return Promise.resolve({ data: { data: [] } });
    });

    render(<CustomerClient />);

    await waitFor(() => {
      expect(screen.getByTestId('mobile-scroll-section')).toHaveTextContent(
        '3 items',
      );
    });
  });

  it('renders all main sections when data is loaded', async () => {
    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('growth-customers')) {
        return Promise.resolve(mockGrowthData);
      }
      if (url.includes('home-customers')) {
        return Promise.resolve(mockHomeData);
      }
      if (url.includes('home-customer-scrollings')) {
        return Promise.resolve(mockScrollData);
      }
      return Promise.resolve({ data: { data: [] } });
    });

    render(<CustomerClient />);

    await waitFor(() => {
      expect(screen.getByTestId('locker-container')).toBeInTheDocument();
      expect(screen.getByTestId('mobile-scroll-section')).toBeInTheDocument();
      expect(screen.getByTestId('daisy-mission')).toBeInTheDocument();
      expect(screen.getByTestId('growth-section')).toBeInTheDocument();
      expect(screen.getByTestId('join-daisy')).toBeInTheDocument();
      expect(screen.getByTestId('experience-daisy')).toBeInTheDocument();
      expect(screen.getByTestId('qa-section')).toBeInTheDocument();
    });
  });
});
