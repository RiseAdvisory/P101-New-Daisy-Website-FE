import { render, screen, waitFor } from '@testing-library/react';
import { ContactClient } from '../ContactClient';

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

  it('renders hero section with local data', async () => {
    render(<ContactClient />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-page')).toBeInTheDocument();
    });
  });

  it('renders SupportSection component', async () => {
    render(<ContactClient />);

    await waitFor(() => {
      expect(screen.getByTestId('support-section')).toBeInTheDocument();
    });
  });

  it('renders with data without crashing', async () => {
    render(<ContactClient />);

    await waitFor(() => {
      expect(screen.getByTestId('hero-page')).toBeInTheDocument();
    });
  });
});
