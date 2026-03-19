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

jest.mock('@/components/shared/InlineCTA', () => ({
  InlineCTA: ({ headline }: { headline: string }) => (
    <div data-testid="inline-cta">{headline}</div>
  ),
}));

jest.mock('@/components/shared/SocialProofBar', () => ({
  SocialProofBar: () => <div data-testid="social-proof-bar">Social Proof</div>,
}));

jest.mock('@/components/shared/HowItWorks', () => ({
  HowItWorks: () => <div data-testid="how-it-works">How It Works</div>,
}));

jest.mock('@/components/shared/PricingHook', () => ({
  PricingHook: () => <div data-testid="pricing-hook">Pricing Hook</div>,
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

jest.mock('@/components/shared/LandingHero', () => ({
  LandingHero: () => <div data-testid="landing-hero">Hero</div>,
}));

jest.mock('@/components/shared/PlatformStrengths', () => ({
  PlatformStrengths: () => <div data-testid="platform-strengths">Strengths</div>,
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
    const { getByTestId, getAllByTestId } = render(
      <Business params={{ locale: 'en' }} />,
    );

    await waitFor(() => {
      expect(getByTestId('locker-container')).toBeInTheDocument();
      expect(getByTestId('mobile-scroll-section')).toBeInTheDocument();
      expect(getAllByTestId('inline-cta').length).toBeGreaterThanOrEqual(1);
      expect(getByTestId('social-proof-bar')).toBeInTheDocument();
      expect(getByTestId('how-it-works')).toBeInTheDocument();
      expect(getByTestId('pricing-hook')).toBeInTheDocument();
      expect(getByTestId('platform-strengths')).toBeInTheDocument();
      expect(getByTestId('qa-section')).toBeInTheDocument();
      expect(getByTestId('become-partner')).toBeInTheDocument();
    });
  });
});
