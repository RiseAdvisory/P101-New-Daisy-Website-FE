import { render, screen } from '@testing-library/react';
import { FeaturesCustomerClient } from '../FeaturesCustomerClient';

jest.mock('@/store/language');

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
    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'en',
    }));
  });

  it('renders hero with title from local data', () => {
    render(<FeaturesCustomerClient />);
    expect(screen.getByTestId('hero-page')).toHaveTextContent(
      'Everything You Need to Book, Save & Shine',
    );
  });

  it('renders feature list from local data', () => {
    render(<FeaturesCustomerClient />);
    const list = screen.getByTestId('features-list');
    expect(list).toHaveTextContent('Cashback Magic');
    expect(list).toHaveTextContent('Manage Your Bookings');
    expect(list).toHaveTextContent('Rate & Earn Points');
  });

  it('renders all 6 features', () => {
    render(<FeaturesCustomerClient />);
    const list = screen.getByTestId('features-list');
    // All 6 titles should be present
    expect(list).toHaveTextContent('Cashback Magic');
    expect(list).toHaveTextContent('Manage Your Bookings');
    expect(list).toHaveTextContent('Rate & Earn Points');
    expect(list).toHaveTextContent('Discover Top Services');
    expect(list).toHaveTextContent('Wallet & Rewards');
    expect(list).toHaveTextContent('Personalized Recommendations');
  });

  it('renders Arabic content when language is ar', () => {
    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'ar',
    }));
    render(<FeaturesCustomerClient />);
    expect(screen.getByTestId('hero-page')).toHaveTextContent(
      'كل ما تحتاجه للحجز والتوفير والتألق',
    );
  });

  it('renders signup blog section', () => {
    render(<FeaturesCustomerClient />);
    expect(screen.getByTestId('signup-blog')).toBeInTheDocument();
  });
});
