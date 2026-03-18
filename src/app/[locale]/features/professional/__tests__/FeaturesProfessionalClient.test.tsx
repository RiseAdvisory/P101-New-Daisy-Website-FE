import { render, screen } from '@testing-library/react';
import { FeaturesProfessionalClient } from '../FeaturesProfessionalClient';

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
  usePathname: jest.fn(() => '/features/professional'),
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

describe('FeaturesProfessionalClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders hero with title from local data', () => {
    render(<FeaturesProfessionalClient lang="en" />);
    expect(screen.getByTestId('hero-page')).toHaveTextContent(
      'Easy, Flexible and Powerful, You will love it!',
    );
  });

  it('renders feature list from local data', () => {
    render(<FeaturesProfessionalClient lang="en" />);
    const list = screen.getByTestId('features-list');
    expect(list).toHaveTextContent('AI Receptionist');
    expect(list).toHaveTextContent('AI Appointment Booking');
    expect(list).toHaveTextContent('Multilingual Support');
  });

  it('renders features from flat list', () => {
    render(<FeaturesProfessionalClient lang="en" />);
    const list = screen.getByTestId('features-list');
    expect(list).toHaveTextContent('AI Receptionist');
    expect(list).toHaveTextContent('Smart Calendar');
    expect(list).toHaveTextContent('Online Payments');
    expect(list).toHaveTextContent('Earnings Reports');
    expect(list).toHaveTextContent('Schedule Control');
    expect(list).toHaveTextContent('Marketplace Visibility');
  });

  it('renders Arabic content when language is ar', () => {
    render(<FeaturesProfessionalClient lang="ar" />);
    expect(screen.getByTestId('hero-page')).toHaveTextContent(
      'سهلة ومرنة وقوية، سيحبها عملاؤك!',
    );
  });

  it('renders signup blog section', () => {
    render(<FeaturesProfessionalClient lang="en" />);
    expect(screen.getByTestId('signup-blog')).toBeInTheDocument();
  });
});
