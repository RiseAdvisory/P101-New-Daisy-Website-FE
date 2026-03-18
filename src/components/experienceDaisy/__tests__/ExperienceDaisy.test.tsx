import { render, screen } from '@testing-library/react';
import { ExperienceDaisy } from '../ExperienceDaisy';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/en/business'),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img alt="" {...props} />
  ),
}));

jest.mock('../../performance/LazyMotion', () => ({
  LazyMotionDiv: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="lazy-motion">{children}</div>
  ),
}));

jest.mock('../../separator/Separator', () => ({
  __esModule: true,
  default: () => <hr data-testid="separator" />,
}));

jest.mock('../../buttonApp/PlayMarketButton', () => ({
  PlayMarketButton: () => <button data-testid="play-market">Play Store</button>,
}));

jest.mock('../../buttonApp/AppStoreButton', () => ({
  AppStoreButton: () => <button data-testid="app-store">App Store</button>,
}));

describe('ExperienceDaisy', () => {
  it('renders with default pageType (customer)', () => {
    render(<ExperienceDaisy />);
    // Should render without errors using default 'customer' type
    expect(screen.getByTestId('play-market')).toBeInTheDocument();
    expect(screen.getByTestId('app-store')).toBeInTheDocument();
  });

  it('renders with business pageType', () => {
    render(<ExperienceDaisy pageType="business" />);
    expect(screen.getByTestId('play-market')).toBeInTheDocument();
  });

  it('renders with professional pageType', () => {
    render(<ExperienceDaisy pageType="professional" />);
    expect(screen.getByTestId('play-market')).toBeInTheDocument();
  });

  it('renders with customer pageType', () => {
    render(<ExperienceDaisy pageType="customer" />);
    expect(screen.getByTestId('play-market')).toBeInTheDocument();
  });

  it('renders title and description from page-specific data', () => {
    render(<ExperienceDaisy pageType="business" />);
    // Should render heading element with content from experienceDaisyData
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBeTruthy();
  });

  it('renders app download buttons', () => {
    render(<ExperienceDaisy pageType="customer" />);
    expect(screen.getByTestId('play-market')).toBeInTheDocument();
    expect(screen.getByTestId('app-store')).toBeInTheDocument();
  });
});
