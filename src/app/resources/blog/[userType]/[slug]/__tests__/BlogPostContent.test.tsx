import { render, waitFor } from '@testing-library/react';
import BlogPostContent from '../BlogPostContent';
import { BlogPost } from '@/lib/api/blog';
import axiosInstance from '@/helpers/axiosConfig';

// Mock dependencies
jest.mock('@/store/post', () => ({
  usePostStore: () => ({
    handlePost: jest.fn(),
    setHandleId: jest.fn(),
  }),
}));

jest.mock('@/store/currentPath', () => ({
  useChoosePath: () => ({
    choosePathStrapi: jest.fn(),
    chooseBreadcrumb: jest.fn(),
    choosePatnName: jest.fn(),
  }),
}));

jest.mock('@/store/language', () => ({
  useChangeLanguage: () => ({
    lang: 'en',
  }),
}));

jest.mock('@/helpers/axiosConfig');

// Mock components
jest.mock('@/components/blogPage/blogPosts/HeroBlogId', () => ({
  HeroBlogPage: () => <div data-testid="hero-blog-page">Hero</div>,
}));

jest.mock('@/components/blogPage/blogPosts/AbouPosts', () => ({
  AboutPosts: () => <div data-testid="about-posts">About Posts</div>,
}));

jest.mock('@/components/blogPage/blogPosts/CreatePerfect', () => ({
  CreatePerfect: ({ textDownload, textCreate }: any) => (
    <div data-testid="create-perfect">
      <span data-testid="text-download">{textDownload}</span>
      <span data-testid="text-create">{textCreate}</span>
    </div>
  ),
}));

jest.mock('@/components/blogPage/blogPosts/SimiliarTopics', () => ({
  SimiliarTopick: ({ titleSimilar }: any) => (
    <div data-testid="similar-topics">
      <span data-testid="title-similar">{titleSimilar}</span>
    </div>
  ),
}));

const mockedAxiosInstance = axiosInstance as jest.Mocked<typeof axiosInstance>;

describe('BlogPostContent', () => {
  const mockPost: BlogPost = {
    id: 1,
    attributes: {
      title: 'Test Blog Post',
      slug: 'test-blog-post',
      description: 'Test description',
      publishedAt: '2026-01-15T10:00:00.000Z',
      updatedAt: '2026-01-16T10:00:00.000Z',
      locale: 'en',
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render all child components', () => {
    mockedAxiosInstance.get.mockResolvedValueOnce({
      data: { data: [] },
    });

    const { getByTestId } = render(
      <BlogPostContent post={mockPost} userType="customer" />
    );

    expect(getByTestId('hero-blog-page')).toBeInTheDocument();
    expect(getByTestId('about-posts')).toBeInTheDocument();
    expect(getByTestId('create-perfect')).toBeInTheDocument();
    expect(getByTestId('similar-topics')).toBeInTheDocument();
  });

  it('should fetch CTA data successfully', async () => {
    const mockCTAData = {
      data: {
        data: [
          {
            attributes: {
              textCreate: 'Custom CTA Text',
              textDownload: 'Custom Download',
              titleSimilar: 'Custom Similar Title',
            },
          },
        ],
      },
    };

    mockedAxiosInstance.get.mockResolvedValueOnce(mockCTAData);

    const { getByTestId } = render(
      <BlogPostContent post={mockPost} userType="customer" />
    );

    await waitFor(() => {
      expect(mockedAxiosInstance.get).toHaveBeenCalledWith(
        '/legal-downloads?locale=en'
      );
    });

    await waitFor(() => {
      expect(getByTestId('text-download')).toHaveTextContent('Custom Download');
      expect(getByTestId('text-create')).toHaveTextContent('Custom CTA Text');
      expect(getByTestId('title-similar')).toHaveTextContent(
        'Custom Similar Title'
      );
    });
  });

  it('should use default CTA text when fetch fails', async () => {
    mockedAxiosInstance.get.mockRejectedValueOnce(new Error('Network error'));

    const { getByTestId } = render(
      <BlogPostContent post={mockPost} userType="customer" />
    );

    await waitFor(() => {
      expect(getByTestId('text-download')).toHaveTextContent('Download now!');
      expect(getByTestId('text-create')).toHaveTextContent(
        'Create Your Own Perfect Wellness Ritual With The Daisy Packages'
      );
      expect(getByTestId('title-similar')).toHaveTextContent(
        'Other Topics That You May Interest You'
      );
    });
  });

  it('should sanitize CTA data by removing HTML tags', async () => {
    const mockCTADataWithHTML = {
      data: {
        data: [
          {
            attributes: {
              textCreate: '<script>alert("xss")</script>Valid Text',
              textDownload: '<b>Download</b>',
              titleSimilar: '<img src=x onerror=alert(1)>Title',
            },
          },
        ],
      },
    };

    mockedAxiosInstance.get.mockResolvedValueOnce(mockCTADataWithHTML);

    const { getByTestId } = render(
      <BlogPostContent post={mockPost} userType="customer" />
    );

    await waitFor(() => {
      // HTML tags should be stripped
      expect(getByTestId('text-create')).toHaveTextContent('Valid Text');
      expect(getByTestId('text-download')).toHaveTextContent('Download');
      expect(getByTestId('title-similar')).toHaveTextContent('Title');
    });
  });

  it('should reject CTA text that exceeds max length', async () => {
    const mockCTADataTooLong = {
      data: {
        data: [
          {
            attributes: {
              textCreate: 'A'.repeat(501), // Exceeds 500 char limit
              textDownload: 'B'.repeat(101), // Exceeds 100 char limit
              titleSimilar: 'C'.repeat(201), // Exceeds 200 char limit
            },
          },
        ],
      },
    };

    mockedAxiosInstance.get.mockResolvedValueOnce(mockCTADataTooLong);

    const { getByTestId } = render(
      <BlogPostContent post={mockPost} userType="customer" />
    );

    await waitFor(() => {
      // Should use default values when text is too long
      expect(getByTestId('text-download')).toHaveTextContent('Download now!');
      expect(getByTestId('text-create')).toHaveTextContent(
        'Create Your Own Perfect Wellness Ritual With The Daisy Packages'
      );
      expect(getByTestId('title-similar')).toHaveTextContent(
        'Other Topics That You May Interest You'
      );
    });
  });

  it('should handle business user type', () => {
    mockedAxiosInstance.get.mockResolvedValueOnce({
      data: { data: [] },
    });

    render(<BlogPostContent post={mockPost} userType="business" />);

    // Component should render without errors
    expect(mockedAxiosInstance.get).toHaveBeenCalled();
  });

  it('should handle professional user type', () => {
    mockedAxiosInstance.get.mockResolvedValueOnce({
      data: { data: [] },
    });

    render(<BlogPostContent post={mockPost} userType="professional" />);

    // Component should render without errors
    expect(mockedAxiosInstance.get).toHaveBeenCalled();
  });

  it('should use default values when CTA data is invalid type', async () => {
    const mockInvalidCTAData = {
      data: {
        data: [
          {
            attributes: {
              textCreate: 123, // Invalid type
              textDownload: null, // Invalid type
              titleSimilar: undefined, // Invalid type
            },
          },
        ],
      },
    };

    mockedAxiosInstance.get.mockResolvedValueOnce(mockInvalidCTAData);

    const { getByTestId } = render(
      <BlogPostContent post={mockPost} userType="customer" />
    );

    await waitFor(() => {
      expect(getByTestId('text-download')).toHaveTextContent('Download now!');
      expect(getByTestId('text-create')).toHaveTextContent(
        'Create Your Own Perfect Wellness Ritual With The Daisy Packages'
      );
      expect(getByTestId('title-similar')).toHaveTextContent(
        'Other Topics That You May Interest You'
      );
    });
  });
});
