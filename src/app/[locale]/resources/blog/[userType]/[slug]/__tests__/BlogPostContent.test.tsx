import { render } from '@testing-library/react';
import BlogPostContent from '../BlogPostContent';
import { BlogPost } from '@/lib/api/blog';

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

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/en/resources/blog'),
}));

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
    const { getByTestId } = render(
      <BlogPostContent post={mockPost} userType="customer" />
    );

    expect(getByTestId('hero-blog-page')).toBeInTheDocument();
    expect(getByTestId('about-posts')).toBeInTheDocument();
    expect(getByTestId('create-perfect')).toBeInTheDocument();
    expect(getByTestId('similar-topics')).toBeInTheDocument();
  });

  it('should display CTA text from local data', () => {
    const { getByTestId } = render(
      <BlogPostContent post={mockPost} userType="customer" />
    );

    expect(getByTestId('text-download')).toHaveTextContent('Download now!');
    expect(getByTestId('text-create')).toHaveTextContent(
      'Create Your Own Perfect Wellness Ritual With The Daisy Packages'
    );
    expect(getByTestId('title-similar')).toHaveTextContent(
      'Other Topics That May Interest You'
    );
  });

  it('should handle business user type', () => {
    const { getByTestId } = render(
      <BlogPostContent post={mockPost} userType="business" />
    );

    expect(getByTestId('hero-blog-page')).toBeInTheDocument();
  });

  it('should handle professional user type', () => {
    const { getByTestId } = render(
      <BlogPostContent post={mockPost} userType="professional" />
    );

    expect(getByTestId('hero-blog-page')).toBeInTheDocument();
  });
});
