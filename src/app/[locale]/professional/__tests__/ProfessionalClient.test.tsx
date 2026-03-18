import { render, screen, waitFor } from '@testing-library/react';
import { ProfessionalClient } from '../ProfessionalClient';

// Mock dependencies

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
  usePathname: jest.fn(() => '/professional'),
}));

// Mock child components
jest.mock('@/components/QASection/QASection', () => ({
  QASection: ({ pageType }: { pageType: string }) => (
    <div data-testid="qa-section">{pageType}</div>
  ),
}));

jest.mock('@/components/businessPage/BecomeFormPartner', () => ({
  BecomeFormPartner: () => (
    <div data-testid="become-partner">Become Partner Form</div>
  ),
}));

jest.mock('@/components/experienceDaisy/ExperienceDaisy', () => ({
  ExperienceDaisy: () => <div data-testid="experience-daisy">Experience</div>,
}));

jest.mock('@/components/joinTheDaysi/JoinTheDaysi', () => ({
  JoinTheDaisy: () => <div data-testid="join-daisy">Join</div>,
}));

jest.mock('@/components/businessPage/GrowthSection', () => ({
  GrowthSection: ({
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

describe('ProfessionalClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders content from local data', async () => {
    render(<ProfessionalClient lang="en" />);

    await waitFor(() => {
      expect(screen.getByTestId('growth-section')).toBeInTheDocument();
    });
  });

  it('renders QASection with Professional pageType', async () => {
    render(<ProfessionalClient lang="en" />);

    await waitFor(() => {
      expect(screen.getByTestId('qa-section')).toHaveTextContent(
        'Professional',
      );
    });
  });

  it('renders BecomeFormPartner component', async () => {
    render(<ProfessionalClient lang="en" />);

    await waitFor(() => {
      expect(screen.getByTestId('become-partner')).toBeInTheDocument();
    });
  });

  it('renders all main sections when data is loaded', async () => {
    render(<ProfessionalClient lang="en" />);

    await waitFor(() => {
      expect(screen.getByTestId('locker-container')).toBeInTheDocument();
      expect(screen.getByTestId('mobile-scroll-section')).toBeInTheDocument();
      expect(screen.getByTestId('growth-section')).toBeInTheDocument();
      expect(screen.getByTestId('join-daisy')).toBeInTheDocument();
      expect(screen.getByTestId('experience-daisy')).toBeInTheDocument();
      expect(screen.getByTestId('qa-section')).toBeInTheDocument();
      expect(screen.getByTestId('become-partner')).toBeInTheDocument();
    });
  });
});
