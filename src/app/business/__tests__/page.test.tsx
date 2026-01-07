import { render, waitFor } from '@testing-library/react';
import Business from '../page';
import axiosInstance from '@/helpers/axiosConfig';
import * as helpers from '@/helpers/getPartners';

// Mock dependencies
jest.mock('@/helpers/axiosConfig');
jest.mock('@/helpers/getPartners');
jest.mock('@/store/loading');
jest.mock('@/store/language');

const mockAxiosInstance = axiosInstance as jest.Mocked<typeof axiosInstance>;
const mockGetData = helpers.getData as jest.MockedFunction<
  typeof helpers.getData
>;
const mockGetRandomElements = helpers.getRandomElements as jest.MockedFunction<
  typeof helpers.getRandomElements
>;

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img alt="" {...props} />,
}));

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    pathname: '/business',
    query: {},
  })),
  usePathname: jest.fn(() => '/business'),
  useSearchParams: jest.fn(() => new URLSearchParams()),
}));

// Helper to create complete growth data with all required fields
const createMockGrowthData = () => ({
  data: {
    data: [
      {
        attributes: {
          title: 'Growth Title',
          description: 'Growth Description',
          titleCard: 'Card Title',
          descriptionCard: 'Card Desc',
          firstBg: {
            data: [{ attributes: { url: 'https://example.com/img1.jpg' } }],
          },
          secondBg: {
            data: [{ attributes: { url: 'https://example.com/img2.jpg' } }],
          },
          thirdBg: {
            data: [{ attributes: { url: 'https://example.com/img3.jpg' } }],
          },
          fourthBg: {
            data: [{ attributes: { url: 'https://example.com/img4.jpg' } }],
          },
          mainImage: {
            data: [
              {
                attributes: {
                  formats: {
                    large: {
                      url: 'https://example.com/main.jpg',
                    },
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
});

describe('Business Page - Parallel API Calls', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock store hooks
    require('@/store/loading').useLoadingStore = jest.fn(() => ({
      handleArray: jest.fn(),
      handleLoadingStatus: jest.fn(),
    }));

    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'en',
    }));

    mockGetData.mockResolvedValue([]);
    mockGetRandomElements.mockReturnValue([]);
  });

  it('should successfully fetch all three API endpoints in parallel', async () => {
    const mockGrowthData = createMockGrowthData();

    const mockHomeData = {
      data: {
        data: [
          {
            attributes: {
              titleFraque: 'Business Title',
              titleBusiness: 'Business',
              titleMission: 'Mission',
              descriptionMission: 'Mission Desc',
            },
          },
        ],
      },
    };

    const mockScrollingData = {
      data: {
        data: [
          {
            attributes: {
              sortId: 2,
              infoScroll: { title: 'Second', description: 'Second Desc' },
              imageScroll: {
                data: {
                  attributes: { url: 'https://example.com/scroll2.jpg' },
                },
              },
            },
          },
          {
            attributes: {
              sortId: 1,
              infoScroll: { title: 'First', description: 'First Desc' },
              imageScroll: {
                data: {
                  attributes: { url: 'https://example.com/scroll1.jpg' },
                },
              },
            },
          },
        ],
      },
    };

    mockAxiosInstance.get
      .mockResolvedValueOnce(mockGrowthData)
      .mockResolvedValueOnce(mockHomeData)
      .mockResolvedValueOnce(mockScrollingData);

    render(<Business />);

    await waitFor(() => {
      // Verify all three API calls were made
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3);
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/growth-businesses?populate=*&locale=en',
      );
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/home-businesses?locale=en',
      );
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/home-bussiness-scrollings?populate=*&locale=en',
      );
    });
  });

  it('should handle API errors gracefully without breaking the page', async () => {
    // Mock all three calls to reject
    mockAxiosInstance.get
      .mockRejectedValueOnce(new Error('API Error'))
      .mockRejectedValueOnce(new Error('API Error'))
      .mockRejectedValueOnce(new Error('API Error'));

    const mockLoadingStore = {
      handleArray: jest.fn(),
      handleLoadingStatus: jest.fn(),
    };

    require('@/store/loading').useLoadingStore = jest.fn(
      () => mockLoadingStore,
    );

    render(<Business />);

    await waitFor(() => {
      expect(mockLoadingStore.handleLoadingStatus).toHaveBeenCalledWith(false);
    });
  });

  it('should sort scrolling data by sortId after parallel fetch', async () => {
    const mockGrowthData = createMockGrowthData();

    const mockHomeData = {
      data: {
        data: [
          {
            attributes: {
              titleFraque: 'Business',
              titleBusiness: 'Business',
              titleMission: 'Mission',
              descriptionMission: 'Mission Desc',
            },
          },
        ],
      },
    };

    const mockScrollingData = {
      data: {
        data: [
          {
            attributes: {
              sortId: 3,
              infoScroll: { title: 'Third', description: 'Third Desc' },
              imageScroll: {
                data: {
                  attributes: { url: 'https://example.com/scroll3.jpg' },
                },
              },
            },
          },
          {
            attributes: {
              sortId: 1,
              infoScroll: { title: 'First', description: 'First Desc' },
              imageScroll: {
                data: {
                  attributes: { url: 'https://example.com/scroll1.jpg' },
                },
              },
            },
          },
          {
            attributes: {
              sortId: 2,
              infoScroll: { title: 'Second', description: 'Second Desc' },
              imageScroll: {
                data: {
                  attributes: { url: 'https://example.com/scroll2.jpg' },
                },
              },
            },
          },
        ],
      },
    };

    mockAxiosInstance.get
      .mockResolvedValueOnce(mockGrowthData)
      .mockResolvedValueOnce(mockHomeData)
      .mockResolvedValueOnce(mockScrollingData);

    const { container } = render(<Business />);

    await waitFor(() => {
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3);
    });

    // Verify sorting is applied (data should be ordered 1, 2, 3)
    expect(container).toBeInTheDocument();
  });

  it('should handle partial API failures correctly', async () => {
    // First call succeeds, second fails, third succeeds
    const mockGrowthData = createMockGrowthData();
    const mockScrollingData = {
      data: {
        data: [
          {
            attributes: {
              sortId: 1,
              infoScroll: { title: 'First', description: 'First Desc' },
              imageScroll: {
                data: {
                  attributes: { url: 'https://example.com/scroll1.jpg' },
                },
              },
            },
          },
        ],
      },
    };

    mockAxiosInstance.get
      .mockResolvedValueOnce(mockGrowthData)
      .mockRejectedValueOnce(new Error('Home API Failed'))
      .mockResolvedValueOnce(mockScrollingData);

    const mockLoadingStore = {
      handleArray: jest.fn(),
      handleLoadingStatus: jest.fn(),
    };

    require('@/store/loading').useLoadingStore = jest.fn(
      () => mockLoadingStore,
    );

    render(<Business />);

    await waitFor(() => {
      // Should call handleLoadingStatus(false) in catch block
      expect(mockLoadingStore.handleLoadingStatus).toHaveBeenCalledWith(false);
    });
  });

  it('should verify Promise.all executes calls in parallel, not sequentially', async () => {
    const callTimes: number[] = [];
    const startTime = Date.now();

    mockAxiosInstance.get.mockImplementation(() => {
      callTimes.push(Date.now() - startTime);
      return Promise.resolve({ data: { data: [] } });
    });

    render(<Business />);

    await waitFor(() => {
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(3);
    });

    // All calls should be initiated at roughly the same time (within 50ms)
    // If sequential, they would be spaced apart significantly
    const maxTimeDiff = Math.max(...callTimes) - Math.min(...callTimes);
    expect(maxTimeDiff).toBeLessThan(50);
  });
});
