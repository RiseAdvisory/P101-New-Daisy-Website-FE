import { render, waitFor } from '@testing-library/react';
import Business from '../page';

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

// Mock child components to isolate page-level rendering
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

// Mock SEO components
jest.mock('@/components/seo/WebPageSchema', () => ({
  WebPageSchema: () => null,
}));

jest.mock('@/components/seo/PageBreadcrumbSchema', () => ({
  PageBreadcrumbSchema: () => null,
}));

describe('Business Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', async () => {
    const { container } = render(
      <Business params={{ locale: 'en' }} />,
    );

    await waitFor(() => {
      expect(container).toBeInTheDocument();
    });
  });

  it('should render all main sections', async () => {
    const { getByTestId } = render(
      <Business params={{ locale: 'en' }} />,
    );

    await waitFor(() => {
      expect(getByTestId('locker-container')).toBeInTheDocument();
      expect(getByTestId('mobile-scroll-section')).toBeInTheDocument();
      expect(getByTestId('growth-section')).toBeInTheDocument();
      expect(getByTestId('join-daisy')).toBeInTheDocument();
      expect(getByTestId('experience-daisy')).toBeInTheDocument();
      expect(getByTestId('qa-section')).toBeInTheDocument();
      expect(getByTestId('become-partner')).toBeInTheDocument();
    });
  });
});
