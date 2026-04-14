import { notFound } from 'next/navigation';
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  BlogPost,
} from '@/lib/api/blog';
import BlogPostPage, { generateMetadata, generateStaticParams } from '../page';

// Mock dependencies
jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

jest.mock('@/lib/api/blog', () => ({
  getBlogPostBySlug: jest.fn(),
  getAllBlogSlugs: jest.fn(),
}));

// Mock the child components
jest.mock('../BlogPostContent', () => {
  return function MockBlogPostContent() {
    return <div data-testid="blog-post-content">Blog Post Content</div>;
  };
});

jest.mock('../BlogPostJsonLd', () => {
  return function MockBlogPostJsonLd() {
    return <script data-testid="blog-post-jsonld">JSON-LD</script>;
  };
});

const mockedGetBlogPostBySlug = getBlogPostBySlug as jest.MockedFunction<
  typeof getBlogPostBySlug
>;
const mockedGetAllBlogSlugs = getAllBlogSlugs as jest.MockedFunction<
  typeof getAllBlogSlugs
>;
const mockedNotFound = notFound as jest.MockedFunction<typeof notFound>;

describe('Blog Post Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockBlogPost: BlogPost = {
    id: 1,
    attributes: {
      title: 'Test Blog Post',
      slug: 'test-blog-post',
      description: 'This is a test blog post description.',
      metaTitle: 'Test Meta Title',
      metaDescription: 'Test meta description for SEO',
      publishedAt: '2026-01-15T10:00:00.000Z',
      updatedAt: '2026-01-16T10:00:00.000Z',
      locale: 'en',
      user: {
        data: {
          id: 1,
          attributes: {
            name: 'John Doe',
            jobTitle: 'Content Writer',
            picture: {
              data: {
                attributes: {
                  url: '/images/blog/author.webp',
                },
              },
            },
          },
        },
      },
      category: {
        data: {
          id: 1,
          attributes: {
            name: 'Technology',
          },
        },
      },
      picture: {
        data: {
          attributes: {
            url: '/images/blog/featured.webp',
            alternativeText: 'Featured image',
          },
        },
      },
      ogImage: {
        data: {
          attributes: {
            url: '/images/blog/og-image.webp',
          },
        },
      },
    },
  };

  describe('generateStaticParams', () => {
    it('should generate static params for all blog posts', async () => {
      const mockSlugs = [
        { userType: 'customer' as const, slug: 'post-1', locale: 'en' },
        { userType: 'business' as const, slug: 'post-2', locale: 'en' },
        { userType: 'professional' as const, slug: 'post-3', locale: 'en' },
      ];

      mockedGetAllBlogSlugs.mockResolvedValueOnce(mockSlugs);

      const result = await generateStaticParams();

      expect(mockedGetAllBlogSlugs).toHaveBeenCalledTimes(1);
      expect(result).toEqual([
        { userType: 'customer', slug: 'post-1' },
        { userType: 'business', slug: 'post-2' },
        { userType: 'professional', slug: 'post-3' },
      ]);
    });

    it('should return empty array when no slugs exist', async () => {
      mockedGetAllBlogSlugs.mockResolvedValueOnce([]);

      const result = await generateStaticParams();

      expect(result).toEqual([]);
    });
  });

  describe('generateMetadata', () => {
    it('should return "Not Found" for invalid userType', async () => {
      const params = {
        params: { locale: 'en', userType: 'invalid', slug: 'test-slug' },
      };

      const metadata = await generateMetadata(params);

      expect(metadata).toEqual({ title: 'Not Found' });
      expect(mockedGetBlogPostBySlug).not.toHaveBeenCalled();
    });

    it('should return "Blog Post Not Found" when post does not exist', async () => {
      mockedGetBlogPostBySlug.mockResolvedValueOnce(null);

      const params = {
        params: { locale: 'en', userType: 'customer', slug: 'non-existent' },
      };

      const metadata = await generateMetadata(params);

      expect(metadata).toEqual({ title: 'Blog Post Not Found' });
      expect(mockedGetBlogPostBySlug).toHaveBeenCalledWith(
        'customer',
        'non-existent',
        'en',
      );
    });

    it('should generate complete metadata with all fields', async () => {
      mockedGetBlogPostBySlug.mockResolvedValueOnce(mockBlogPost);

      const params = {
        params: { locale: 'en', userType: 'customer', slug: 'test-blog-post' },
      };

      const metadata = await generateMetadata(params);

      expect(metadata).toEqual({
        title: 'Test Meta Title',
        description: 'Test meta description for SEO',
        openGraph: {
          title: 'Test Meta Title',
          description: 'Test meta description for SEO',
          type: 'article',
          publishedTime: '2026-01-15T10:00:00.000Z',
          modifiedTime: '2026-01-16T10:00:00.000Z',
          authors: ['John Doe'],
          images: [{ url: '/images/blog/og-image.webp' }],
        },
        twitter: {
          card: 'summary_large_image',
          title: 'Test Meta Title',
          description: 'Test meta description for SEO',
          images: ['/images/blog/og-image.webp'],
        },
        alternates: {
          canonical: 'https://www.jointhedaisy.com/en/resources/blog/customer/test-blog-post',
          languages: {
            en: 'https://www.jointhedaisy.com/en/resources/blog/customer/test-blog-post',
            ar: 'https://www.jointhedaisy.com/ar/resources/blog/customer/test-blog-post',
            'ar-AE': 'https://www.jointhedaisy.com/ar/resources/blog/customer/test-blog-post',
            'ar-SA': 'https://www.jointhedaisy.com/ar/resources/blog/customer/test-blog-post',
            'ar-KW': 'https://www.jointhedaisy.com/ar/resources/blog/customer/test-blog-post',
            'ar-BH': 'https://www.jointhedaisy.com/ar/resources/blog/customer/test-blog-post',
            'ar-OM': 'https://www.jointhedaisy.com/ar/resources/blog/customer/test-blog-post',
            'ar-QA': 'https://www.jointhedaisy.com/ar/resources/blog/customer/test-blog-post',
            'x-default': 'https://www.jointhedaisy.com/en/resources/blog/customer/test-blog-post',
          },
        },
      });
    });

    it('should fall back to title when metaTitle is missing', async () => {
      const postWithoutMetaTitle = {
        ...mockBlogPost,
        attributes: {
          ...mockBlogPost.attributes,
          metaTitle: undefined,
        },
      };

      mockedGetBlogPostBySlug.mockResolvedValueOnce(postWithoutMetaTitle);

      const params = {
        params: { locale: 'en', userType: 'customer', slug: 'test-blog-post' },
      };

      const metadata = await generateMetadata(params);

      expect(metadata.title).toBe('Test Blog Post');
      expect(metadata.openGraph?.title).toBe('Test Blog Post');
    });

    it('should use picture as fallback when ogImage is missing', async () => {
      const postWithoutOgImage = {
        ...mockBlogPost,
        attributes: {
          ...mockBlogPost.attributes,
          ogImage: undefined,
        },
      };

      mockedGetBlogPostBySlug.mockResolvedValueOnce(postWithoutOgImage);

      const params = {
        params: { locale: 'en', userType: 'customer', slug: 'test-blog-post' },
      };

      const metadata = await generateMetadata(params);

      expect(metadata.openGraph?.images).toEqual([
        { url: '/images/blog/featured.webp' },
      ]);
      expect(metadata.twitter?.images).toEqual([
        '/images/blog/featured.webp',
      ]);
    });

    it('should handle missing images gracefully', async () => {
      const postWithoutImages = {
        ...mockBlogPost,
        attributes: {
          ...mockBlogPost.attributes,
          ogImage: undefined,
          picture: undefined,
        },
      };

      mockedGetBlogPostBySlug.mockResolvedValueOnce(postWithoutImages);

      const params = {
        params: { locale: 'en', userType: 'customer', slug: 'test-blog-post' },
      };

      const metadata = await generateMetadata(params);

      expect(metadata.openGraph?.images).toBeUndefined();
      expect(metadata.twitter?.images).toBeUndefined();
    });

    it('should use "The Daisy Team" as fallback author', async () => {
      const postWithoutAuthor = {
        ...mockBlogPost,
        attributes: {
          ...mockBlogPost.attributes,
          user: undefined,
        },
      };

      mockedGetBlogPostBySlug.mockResolvedValueOnce(postWithoutAuthor);

      const params = {
        params: { locale: 'en', userType: 'customer', slug: 'test-blog-post' },
      };

      const metadata = await generateMetadata(params);

      expect(metadata.openGraph?.authors).toEqual(['The Daisy Team']);
    });
  });

  describe('BlogPostPage Component', () => {
    it('should call notFound for invalid userType', async () => {
      mockedNotFound.mockImplementation(() => {
        throw new Error('Not Found');
      });

      const params = {
        params: { locale: 'en', userType: 'invalid', slug: 'test-slug' },
      };

      await expect(BlogPostPage(params)).rejects.toThrow('Not Found');
      expect(mockedNotFound).toHaveBeenCalledTimes(1);
      expect(mockedGetBlogPostBySlug).not.toHaveBeenCalled();
    });

    it('should call notFound when post does not exist', async () => {
      mockedGetBlogPostBySlug.mockResolvedValueOnce(null);
      mockedNotFound.mockImplementation(() => {
        throw new Error('Not Found');
      });

      const params = {
        params: { locale: 'en', userType: 'customer', slug: 'non-existent' },
      };

      await expect(BlogPostPage(params)).rejects.toThrow('Not Found');
      expect(mockedGetBlogPostBySlug).toHaveBeenCalledWith(
        'customer',
        'non-existent',
        'en',
      );
      expect(mockedNotFound).toHaveBeenCalledTimes(1);
    });

    it('should render BlogPostJsonLd and BlogPostContent when post exists', async () => {
      mockedGetBlogPostBySlug.mockResolvedValueOnce(mockBlogPost);

      const params = {
        params: { locale: 'en', userType: 'customer', slug: 'test-blog-post' },
      };

      const result = await BlogPostPage(params);

      expect(mockedGetBlogPostBySlug).toHaveBeenCalledWith(
        'customer',
        'test-blog-post',
        'en',
      );
      expect(mockedNotFound).not.toHaveBeenCalled();

      // Verify the component structure
      expect(result).toBeTruthy();
    });

    it('should handle business user type', async () => {
      mockedGetBlogPostBySlug.mockResolvedValueOnce(mockBlogPost);

      const params = {
        params: { locale: 'en', userType: 'business', slug: 'test-blog-post' },
      };

      await BlogPostPage(params);

      expect(mockedGetBlogPostBySlug).toHaveBeenCalledWith(
        'business',
        'test-blog-post',
        'en',
      );
    });
  });
});
