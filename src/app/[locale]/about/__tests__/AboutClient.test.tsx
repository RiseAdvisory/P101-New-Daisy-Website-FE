import { render, screen, waitFor } from '@testing-library/react';
import { AboutClient } from '../AboutClient';

// Mock dependencies
jest.mock('@/store/language');

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

  it('renders hero section with local data', async () => {
    render(<AboutClient />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-page')).toBeInTheDocument();
    });
  });

  it('renders OurMission and OurValue components', async () => {
    render(<AboutClient />);

    await waitFor(() => {
      expect(screen.getByTestId('our-mission')).toBeInTheDocument();
      expect(screen.getByTestId('our-value')).toBeInTheDocument();
    });
  });

  it('renders with data without crashing', async () => {
    render(<AboutClient />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-page')).toBeInTheDocument();
    });
  });
});
