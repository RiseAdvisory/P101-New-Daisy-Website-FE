import { render, screen, waitFor } from '@testing-library/react';
import { ContactClient } from '../ContactClient';
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
  usePathname: jest.fn(() => '/contact'),
}));

// Mock child components
jest.mock('@/components/heroSection/HeroSection', () => ({
  HeroPage: ({
    title,
    description,
    secondDescription,
  }: {
    title?: string;
    description?: string;
    secondDescription?: string;
  }) => (
    <div data-testid="hero-page">
      <h1 data-testid="hero-title">{title}</h1>
      <p data-testid="hero-description">{description}</p>
      <p data-testid="hero-second-description">{secondDescription}</p>
    </div>
  ),
}));

jest.mock('@/components/contactsPage/SupportSection', () => ({
  SupportSection: ({ contacts }: { contacts: unknown }) => (
    <div data-testid="support-section">
      {contacts ? 'Contacts Loaded' : 'No Contacts'}
    </div>
  ),
}));

describe('ContactClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock language store
    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'en',
    }));
  });

  const mockContactData = {
    data: {
      data: [
        {
          attributes: {
            heroTitle: 'Contact Us',
            heroSubtitle: 'Get in touch',
            heroDescription: 'We would love to hear from you',
            listContact: [
              { type: 'email', value: 'contact@example.com' },
              { type: 'phone', value: '+1234567890' },
            ],
          },
        },
      ],
    },
  };

  it('renders hero section with fetched data', async () => {
    mockAxiosInstance.get.mockResolvedValueOnce(mockContactData);

    render(<ContactClient />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-title')).toHaveTextContent('Contact Us');
      expect(screen.getByTestId('hero-description')).toHaveTextContent(
        'Get in touch',
      );
    });
  });

  it('fetches data from correct API endpoint', async () => {
    mockAxiosInstance.get.mockResolvedValueOnce(mockContactData);

    render(<ContactClient />);

    await waitFor(() => {
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/contact-pages?locale=en',
      );
    });
  });

  it('renders SupportSection with contact data', async () => {
    mockAxiosInstance.get.mockResolvedValueOnce(mockContactData);

    render(<ContactClient />);

    await waitFor(() => {
      expect(screen.getByTestId('support-section')).toHaveTextContent(
        'Contacts Loaded',
      );
    });
  });

  it('handles API error gracefully', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    mockAxiosInstance.get.mockRejectedValueOnce(new Error('API Error'));

    render(<ContactClient />);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error fetching contact page data:',
        expect.any(Error),
      );
    });

    consoleSpy.mockRestore();
  });

  it('renders with empty data without crashing', async () => {
    mockAxiosInstance.get.mockResolvedValueOnce({
      data: { data: [{ attributes: {} }] },
    });

    render(<ContactClient />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-page')).toBeInTheDocument();
    });
  });

  it('renders secondDescription from API', async () => {
    mockAxiosInstance.get.mockResolvedValueOnce(mockContactData);

    render(<ContactClient />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-second-description')).toHaveTextContent(
        'We would love to hear from you',
      );
    });
  });

  it('refetches data when language changes', async () => {
    mockAxiosInstance.get.mockResolvedValue(mockContactData);

    const { rerender } = render(<ContactClient />);

    await waitFor(() => {
      expect(mockAxiosInstance.get).toHaveBeenCalledTimes(1);
    });

    // Simulate language change
    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'ar',
    }));

    rerender(<ContactClient />);

    await waitFor(() => {
      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        '/contact-pages?locale=ar',
      );
    });
  });

  it('renders SupportSection without contacts when data is missing', async () => {
    mockAxiosInstance.get.mockResolvedValueOnce({
      data: { data: [{ attributes: { heroTitle: 'Contact' } }] },
    });

    render(<ContactClient />);

    await waitFor(() => {
      expect(screen.getByTestId('support-section')).toHaveTextContent(
        'No Contacts',
      );
    });
  });
});
