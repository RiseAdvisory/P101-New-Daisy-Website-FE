import { render, screen, waitFor } from '@testing-library/react';
import { AboutClient } from '../AboutClient';
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
  usePathname: jest.fn(() => '/about'),
}));

// Mock child components
jest.mock('@/components/heroSection/HeroSection', () => ({
  HeroPage: ({
    title,
    description,
  }: {
    title?: string;
    description?: string;
  }) => (
    <div data-testid="hero-page">
      <h1 data-testid="hero-title">{title}</h1>
      <p data-testid="hero-description">{description}</p>
    </div>
  ),
}));

jest.mock('@/components/aboutPage/OurMission', () => ({
  OurMissing: ({ heroAbout }: { heroAbout: unknown }) => (
    <div data-testid="our-mission">
      {heroAbout ? 'Mission Loaded' : 'No Data'}
    </div>
  ),
}));

jest.mock('@/components/aboutPage/OurValue', () => ({
  OurValue: ({ heroAbout }: { heroAbout: unknown }) => (
    <div data-testid="our-value">{heroAbout ? 'Value Loaded' : 'No Data'}</div>
  ),
}));

describe('AboutClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock language store
    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'en',
    }));
  });

  const mockAboutData = {
    data: {
      data: [
        {
          attributes: {
            heroTitle: 'About Us',
            heroSubtitle: 'Our Story',
            titleScroll: 'Learn More',
            missionTitle: 'Our Mission',
            missionDescription: 'To provide the best service',
            valueTitle: 'Our Values',
            valueDescription: 'Excellence and integrity',
          },
        },
      ],
    },
  };

  it('renders hero section with fetched data', async () => {
    mockAxiosInstance.get.mockResolvedValueOnce(mockAboutData);

    render(<AboutClient />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-title')).toHaveTextContent('About Us');
      expect(screen.getByTestId('hero-description')).toHaveTextContent(
        'Our Story',
      );
    });
  });

  it('fetches data from correct API endpoint', async () => {
    mockAxiosInstance.get.mockResolvedValueOnce(mockAboutData);

    render(<AboutClient />);

    await waitFor(() => {
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/about-pages?populate=*&locale=en',
      );
    });
  });

  it('renders OurMission and OurValue components', async () => {
    mockAxiosInstance.get.mockResolvedValueOnce(mockAboutData);

    render(<AboutClient />);

    await waitFor(() => {
      expect(screen.getByTestId('our-mission')).toHaveTextContent(
        'Mission Loaded',
      );
      expect(screen.getByTestId('our-value')).toHaveTextContent('Value Loaded');
    });
  });

  it('handles API error gracefully', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    mockAxiosInstance.get.mockRejectedValueOnce(new Error('API Error'));

    render(<AboutClient />);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error fetching about page data:',
        expect.any(Error),
      );
    });

    consoleSpy.mockRestore();
  });

  it('renders with empty data without crashing', async () => {
    mockAxiosInstance.get.mockResolvedValueOnce({
      data: { data: [{ attributes: {} }] },
    });

    render(<AboutClient />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-page')).toBeInTheDocument();
    });
  });

  it('refetches data when language changes', async () => {
    mockAxiosInstance.get.mockResolvedValue(mockAboutData);

    const { rerender } = render(<AboutClient />);

    await waitFor(() => {
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
    });

    // Simulate language change
    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'ar',
    }));

    rerender(<AboutClient />);

    await waitFor(() => {
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/about-pages?populate=*&locale=ar',
      );
    });
  });
});
