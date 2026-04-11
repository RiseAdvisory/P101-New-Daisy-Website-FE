import { render, screen, waitFor } from '@testing-library/react';
import { CustomerClient } from '../CustomerClient';

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

jest.mock('@/components/joinTheDaisy/JoinTheDaisy', () => ({
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

  it('renders content from local data', async () => {
    render(<CustomerClient />);

    await waitFor(() => {
      expect(screen.getByTestId('growth-section')).toBeInTheDocument();
    });
  });

  it('renders QASection with Customer pageType', async () => {
    render(<CustomerClient />);

    await waitFor(() => {
      expect(screen.getByTestId('qa-section')).toHaveTextContent('Customer');
    });
  });

  it('renders all main sections when data is loaded', async () => {
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
