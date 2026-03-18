import { render, screen } from '@testing-library/react';
import { FeaturesCustomerClient } from '../FeaturesCustomerClient';

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
  usePathname: jest.fn(() => '/features/customer'),
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

describe('FeaturesCustomerClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders hero with title from local data', () => {
    render(<FeaturesCustomerClient lang="en" />);
    expect(screen.getByTestId('hero-page')).toHaveTextContent(
      'Everything You Need to Book, Save & Shine',
    );
  });

  it('renders feature list from local data', () => {
    render(<FeaturesCustomerClient lang="en" />);
    const list = screen.getByTestId('features-list');
    expect(list).toHaveTextContent('Cashback Magic');
    expect(list).toHaveTextContent('Rate & Earn Points');
  });

  it('renders all 2 features', () => {
    render(<FeaturesCustomerClient lang="en" />);
    const list = screen.getByTestId('features-list');
    // All 2 titles should be present
    expect(list).toHaveTextContent('Cashback Magic');
    expect(list).toHaveTextContent('Rate & Earn Points');
  });

  it('renders Arabic content when language is ar', () => {
    render(<FeaturesCustomerClient lang="ar" />);
    expect(screen.getByTestId('hero-page')).toHaveTextContent(
      'كل ما تحتاجه للحجز والتوفير والتألق',
    );
  });

  it('renders signup blog section', () => {
    render(<FeaturesCustomerClient lang="en" />);
    expect(screen.getByTestId('signup-blog')).toBeInTheDocument();
  });
});
