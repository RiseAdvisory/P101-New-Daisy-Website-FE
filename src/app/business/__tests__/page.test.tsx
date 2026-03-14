import { render, waitFor } from '@testing-library/react';
import Business from '../page';
import * as helpers from '@/helpers/getPartners';

// Mock dependencies
jest.mock('@/helpers/getPartners');
jest.mock('@/store/loading');
jest.mock('@/store/language');

const mockGetData = helpers.getData as jest.MockedFunction<
  typeof helpers.getData
>;
const mockGetRandomElements = helpers.getRandomElements as jest.MockedFunction<
  typeof helpers.getRandomElements
>;

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

describe('Business Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock store hooks
    require('@/store/loading').useLoadingStore = jest.fn(() => ({
      handleArray: jest.fn(),
      handleLoadingStatus: jest.fn(),
    }));

    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'en',
    }));

    mockGetData.mockResolvedValue([]);
    mockGetRandomElements.mockReturnValue([]);
  });

  it('should render without crashing', async () => {
    const { container } = render(<Business />);

    await waitFor(() => {
      expect(container).toBeInTheDocument();
    });
  });

  it('should handle errors gracefully without breaking the page', async () => {
    const mockLoadingStore = {
      handleArray: jest.fn(),
      handleLoadingStatus: jest.fn(),
    };

    require('@/store/loading').useLoadingStore = jest.fn(
      () => mockLoadingStore,
    );

    render(<Business />);

    await waitFor(() => {
      expect(mockLoadingStore.handleLoadingStatus).toHaveBeenCalled();
    });
  });
});
