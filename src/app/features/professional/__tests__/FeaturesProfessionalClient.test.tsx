import { render, screen, waitFor } from '@testing-library/react';
import { FeaturesProfessionalClient } from '../FeaturesProfessionalClient';
import axiosInstance from '@/helpers/axiosConfig';

jest.mock('@/helpers/axiosConfig');
jest.mock('@/store/language');

const mockAxiosInstance = axiosInstance as jest.Mocked<typeof axiosInstance>;

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img alt="" {...props} />
  ),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  })),
  usePathname: jest.fn(() => '/features/professional'),
}));

jest.mock('@/components/heroSection/HeroSection', () => ({
  HeroPage: ({ description }: { description: string }) => (
    <div data-testid="hero-page">{description}</div>
  ),
}));

jest.mock('@/components/featuresPage/FeaturesCustomerList', () => ({
  FeaturesCustomerList: ({
    dataListBlog,
  }: {
    setScroll: any;
    dataListBlog: any;
  }) => (
    <div data-testid="features-list">
      {dataListBlog
        ? dataListBlog
            .map((item: any) => item.attributes.title)
            .join(', ')
        : 'No data'}
    </div>
  ),
}));

jest.mock('@/components/featuresPage/SignUpBlog', () => ({
  SignUpBlog: () => <div data-testid="signup-blog">SignUp</div>,
}));

describe('FeaturesProfessionalClient', () => {
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
            title: 'Professional Features',
            titleScroll: 'Explore Features',
          },
        },
      ],
    },
  };

  const makeFeatureItem = (id: number, sortId: number, title: string) => ({
    id,
    attributes: {
      sortId,
      title,
      description: `${title} description`,
      picture: {
        data: [{ attributes: { url: '/img.png', width: 100, height: 100 } }],
      },
    },
  });

  it('sorts feature list by attributes.sortId in ascending order', async () => {
    const unsortedList = {
      data: {
        data: [
          makeFeatureItem(1, 3, 'Third'),
          makeFeatureItem(2, 1, 'First'),
          makeFeatureItem(3, 2, 'Second'),
        ],
      },
    };

    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('features-professionals')) {
        return Promise.resolve(mockPageData);
      }
      if (url.includes('features-professional-list-sorts')) {
        return Promise.resolve(unsortedList);
      }
      return Promise.resolve({ data: { data: [] } });
    });

    render(<FeaturesProfessionalClient />);

    await waitFor(() => {
      expect(screen.getByTestId('features-list')).toHaveTextContent(
        'First, Second, Third',
      );
    });
  });

  it('sorts correctly when sortId values exceed 50', async () => {
    const highSortIds = {
      data: {
        data: [
          makeFeatureItem(1, 100, 'Hundredth'),
          makeFeatureItem(2, 5, 'Fifth'),
          makeFeatureItem(3, 55, 'FiftyFifth'),
          makeFeatureItem(4, 60, 'Sixtieth'),
          makeFeatureItem(5, 2, 'Second'),
        ],
      },
    };

    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('features-professionals')) {
        return Promise.resolve(mockPageData);
      }
      if (url.includes('features-professional-list-sorts')) {
        return Promise.resolve(highSortIds);
      }
      return Promise.resolve({ data: { data: [] } });
    });

    render(<FeaturesProfessionalClient />);

    await waitFor(() => {
      expect(screen.getByTestId('features-list')).toHaveTextContent(
        'Second, Fifth, FiftyFifth, Sixtieth, Hundredth',
      );
    });
  });

  it('handles items with missing sortId using fallback of 0', async () => {
    const mixedSortIds = {
      data: {
        data: [
          makeFeatureItem(1, 3, 'Third'),
          {
            id: 2,
            attributes: {
              title: 'NoSort',
              description: 'No sortId',
              picture: {
                data: [
                  { attributes: { url: '/img.png', width: 100, height: 100 } },
                ],
              },
            },
          },
          makeFeatureItem(3, 1, 'First'),
        ],
      },
    };

    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('features-professionals')) {
        return Promise.resolve(mockPageData);
      }
      if (url.includes('features-professional-list-sorts')) {
        return Promise.resolve(mixedSortIds);
      }
      return Promise.resolve({ data: { data: [] } });
    });

    render(<FeaturesProfessionalClient />);

    await waitFor(() => {
      expect(screen.getByTestId('features-list')).toHaveTextContent(
        'NoSort, First, Third',
      );
    });
  });

  it('handles empty feature list', async () => {
    mockAxiosInstance.get.mockImplementation((url: string) => {
      if (url.includes('features-professionals')) {
        return Promise.resolve(mockPageData);
      }
      if (url.includes('features-professional-list-sorts')) {
        return Promise.resolve({ data: { data: [] } });
      }
      return Promise.resolve({ data: { data: [] } });
    });

    render(<FeaturesProfessionalClient />);

    await waitFor(() => {
      expect(screen.getByTestId('features-list')).toHaveTextContent('');
    });
  });
});
