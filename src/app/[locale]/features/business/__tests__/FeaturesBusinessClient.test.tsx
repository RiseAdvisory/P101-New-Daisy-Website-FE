import { render, screen } from '@testing-library/react';
import { FeaturesBusinessClient } from '../FeaturesBusinessClient';

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
  usePathname: jest.fn(() => '/features/business'),
}));

jest.mock('@/components/heroSection/HeroSection', () => ({
  HeroPage: ({ description }: { description: string }) => (
    <div data-testid="hero-page">{description}</div>
  ),
}));

jest.mock('@/components/featuresPage/SectionBusiness', () => ({
  SectionBusiness: ({ listOption }: { listOption: any }) => (
    <div data-testid="section-business">
      {listOption ? `${listOption.length} options` : 'No options'}
    </div>
  ),
}));

jest.mock('@/components/featuresPage/DesktopViewProfessional', () => ({
  DesktopViewProfessional: ({
    categoryData,
  }: {
    dataBusiness: any;
    categoryData: any;
  }) => {
    const categories = Object.entries(categoryData)
      .filter(([, v]) => v && (v as any[]).length > 0)
      .map(([k]) => k);
    return (
      <div data-testid="desktop-view">
        {categories.length > 0
          ? `Categories: ${categories.join(', ')}`
          : 'No categories'}
        {Object.entries(categoryData).map(([key, items]: [string, any]) =>
          items && items.length > 0 ? (
            <div key={key} data-testid={`category-${key}`}>
              {items.map((item: any) => item.attributes?.title).join(', ')}
            </div>
          ) : null,
        )}
      </div>
    );
  },
}));

jest.mock('@/components/featuresPage/MobileSectionProfessional', () => ({
  MobileViewProfessional: ({
    categoryData,
  }: {
    dataFeatures: any;
    categoryData: any;
  }) => {
    const categories = Object.entries(categoryData)
      .filter(([, v]) => v && (v as any[]).length > 0)
      .map(([k]) => k);
    return (
      <div data-testid="mobile-view">
        {categories.length > 0
          ? `Categories: ${categories.join(', ')}`
          : 'No categories'}
      </div>
    );
  },
}));

jest.mock('@/components/featuresPage/SignUpBlog', () => ({
  SignUpBlog: () => <div data-testid="signup-blog">SignUp</div>,
}));

describe('FeaturesBusinessClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders hero with title from local data', () => {
    render(<FeaturesBusinessClient lang="en" />);
    expect(screen.getByTestId('hero-page')).toHaveTextContent(
      'Everything Your Business Needs to Grow',
    );
  });

  it('renders navigation with 8 business options', () => {
    render(<FeaturesBusinessClient lang="en" />);
    expect(screen.getByTestId('section-business')).toHaveTextContent(
      '8 options',
    );
  });

  it('renders all 8 category sections', () => {
    render(<FeaturesBusinessClient lang="en" />);
    const desktopView = screen.getByTestId('desktop-view');
    expect(desktopView).toHaveTextContent('ai');
    expect(desktopView).toHaveTextContent('booking');
    expect(desktopView).toHaveTextContent('communication');
    expect(desktopView).toHaveTextContent('marketing');
    expect(desktopView).toHaveTextContent('payments');
    expect(desktopView).toHaveTextContent('growth');
    expect(desktopView).toHaveTextContent('control');
    expect(desktopView).toHaveTextContent('reports');
  });

  it('renders AI category items', () => {
    render(<FeaturesBusinessClient lang="en" />);
    expect(screen.getByTestId('category-ai')).toHaveTextContent(
      'AI Receptionist',
    );
    expect(screen.getByTestId('category-ai')).toHaveTextContent(
      'Smart Scheduling',
    );
  });

  it('renders marketing category items', () => {
    render(<FeaturesBusinessClient lang="en" />);
    expect(screen.getByTestId('category-marketing')).toHaveTextContent(
      'Cashback Campaigns',
    );
    expect(screen.getByTestId('category-marketing')).toHaveTextContent(
      'Referral Program',
    );
    expect(screen.getByTestId('category-marketing')).toHaveTextContent(
      'Social Media Tools',
    );
  });

  it('renders Arabic content when language is ar', () => {
    render(<FeaturesBusinessClient lang="ar" />);
    expect(screen.getByTestId('hero-page')).toHaveTextContent(
      'كل ما يحتاجه عملك للنمو',
    );
  });

  it('renders desktop and mobile views', () => {
    render(<FeaturesBusinessClient lang="en" />);
    expect(screen.getByTestId('desktop-view')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-view')).toBeInTheDocument();
  });

  it('renders signup blog section', () => {
    render(<FeaturesBusinessClient lang="en" />);
    expect(screen.getByTestId('signup-blog')).toBeInTheDocument();
  });

  it('no longer shows skeleton (data is synchronous)', () => {
    render(<FeaturesBusinessClient lang="en" />);
    expect(screen.queryByTestId('skeleton')).not.toBeInTheDocument();
  });
});
