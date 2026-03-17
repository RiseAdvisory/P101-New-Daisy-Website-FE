import { render, screen } from '@testing-library/react';
import { FeaturesProfessionalClient } from '../FeaturesProfessionalClient';

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
    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'en',
    }));
  });

  it('renders hero with title from local data', () => {
    render(<FeaturesProfessionalClient lang="en" />);
    expect(screen.getByTestId('hero-page')).toHaveTextContent(
      'Tools Built for Beauty Professionals',
    );
  });

  it('renders feature list from local data', () => {
    render(<FeaturesProfessionalClient lang="en" />);
    const list = screen.getByTestId('features-list');
    expect(list).toHaveTextContent('Smart Calendar Management');
    expect(list).toHaveTextContent('Client Profiles & History');
    expect(list).toHaveTextContent('Earnings Dashboard');
  });

  it('renders all 6 features', () => {
    render(<FeaturesProfessionalClient lang="en" />);
    const list = screen.getByTestId('features-list');
    expect(list).toHaveTextContent('Smart Calendar Management');
    expect(list).toHaveTextContent('Client Profiles & History');
    expect(list).toHaveTextContent('Earnings Dashboard');
    expect(list).toHaveTextContent('Service Menu Builder');
    expect(list).toHaveTextContent('Flexible Scheduling');
    expect(list).toHaveTextContent('Instant Notifications');
  });

  it('renders Arabic content when language is ar', () => {
    render(<FeaturesProfessionalClient lang="ar" />);
    expect(screen.getByTestId('hero-page')).toHaveTextContent(
      'أدوات مصممة لمحترفي الجمال',
    );
  });

  it('renders signup blog section', () => {
    render(<FeaturesProfessionalClient lang="en" />);
    expect(screen.getByTestId('signup-blog')).toBeInTheDocument();
  });
});
