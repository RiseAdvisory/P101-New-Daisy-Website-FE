import axios from 'axios';
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getAllBlogSlugs,
  getRelatedBlogPosts,
  UserType,
} from '../blog';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock base URL
jest.mock('@/helpers/axiosConfig', () => ({
  baseURL: 'https://api.test.com',
  baseURLImage: 'https://cdn.test.com',
}));

describe('Blog API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllBlogPosts', () => {
    it('should fetch all blog posts for customer type', async () => {
      const mockResponse = {
        data: {
          data: [
            {
              id: 1,
              attributes: {
                title: 'Test Post',
                slug: 'test-post',
                description: 'Test description',
              },
            },
          ],
        },
      };

      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await getAllBlogPosts('customer', 'en');

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.test.com/api/resources-blog-post-customers',
        {
          params: {
            locale: 'en',
            populate: ['user.picture', 'category', 'picture', 'ogImage'],
            sort: 'publishedAt:desc',
          },
        }
      );
      expect(result).toEqual(mockResponse.data.data);
    });

    it('should handle business user type', async () => {
      const mockResponse = { data: { data: [] } };
      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      await getAllBlogPosts('business', 'ar');

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.test.com/api/resources-blog-post-businesses',
        expect.objectContaining({
          params: expect.objectContaining({
            locale: 'ar',
          }),
        })
      );
    });

    it('should handle professional user type', async () => {
      const mockResponse = { data: { data: [] } };
      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      await getAllBlogPosts('professional', 'en');

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.test.com/api/resources-blog-post-independents',
        expect.any(Object)
      );
    });

    it('should return empty array on error', async () => {
      const consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

      const result = await getAllBlogPosts('customer', 'en');

      expect(result).toEqual([]);
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });

    it('should handle missing data in response', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: {} });

      const result = await getAllBlogPosts('customer', 'en');

      expect(result).toEqual([]);
    });
  });

  describe('getBlogPostBySlug', () => {
    it('should fetch blog post by slug', async () => {
      const mockPost = {
        id: 1,
        attributes: {
          title: 'Test Post',
          slug: 'test-post',
          description: 'Test description',
        },
      };

      const mockResponse = {
        data: {
          data: [mockPost],
        },
      };

      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await getBlogPostBySlug('customer', 'test-post', 'en');

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.test.com/api/resources-blog-post-customers',
        {
          params: {
            locale: 'en',
            'filters[slug][$eq]': 'test-post',
            populate: ['user.picture', 'category', 'picture', 'ogImage'],
          },
        }
      );
      expect(result).toEqual(mockPost);
    });

    it('should return null when post not found', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: { data: [] } });

      const result = await getBlogPostBySlug('customer', 'non-existent', 'en');

      expect(result).toBeNull();
    });

    it('should return null on error', async () => {
      const consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

      const result = await getBlogPostBySlug('customer', 'test-post', 'en');

      expect(result).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });

    it('should use default locale when not provided', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: { data: [] } });

      await getBlogPostBySlug('customer', 'test-post');

      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          params: expect.objectContaining({
            locale: 'en',
          }),
        })
      );
    });
  });

  describe('getAllBlogSlugs', () => {
    it('should fetch all slugs for all user types and locales', async () => {
      const mockPosts = [
        {
          id: 1,
          attributes: { slug: 'post-1', title: 'Post 1', description: '' },
        },
        {
          id: 2,
          attributes: { slug: 'post-2', title: 'Post 2', description: '' },
        },
      ];

      // Mock 6 calls (3 user types × 2 locales)
      mockedAxios.get.mockResolvedValue({ data: { data: mockPosts } });

      const result = await getAllBlogSlugs();

      // Should have called for each user type and locale combination
      expect(mockedAxios.get).toHaveBeenCalledTimes(6);

      // Should return slugs for all combinations
      expect(result).toHaveLength(12); // 2 posts × 3 types × 2 locales

      // Verify structure
      expect(result[0]).toHaveProperty('userType');
      expect(result[0]).toHaveProperty('slug');
      expect(result[0]).toHaveProperty('locale');
    });

    it('should skip posts without slugs', async () => {
      const mockPosts = [
        {
          id: 1,
          attributes: { slug: 'post-1', title: 'Post 1', description: '' },
        },
        { id: 2, attributes: { slug: null, title: 'Post 2', description: '' } },
      ];

      mockedAxios.get.mockResolvedValue({ data: { data: mockPosts } });

      const result = await getAllBlogSlugs();

      // Should only include posts with slugs (1 post × 3 types × 2 locales = 6)
      expect(result).toHaveLength(6);
      expect(result.every((item) => item.slug)).toBe(true);
    });

    it('should handle errors gracefully and continue', async () => {
      const consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      // First call succeeds, second fails
      mockedAxios.get
        .mockResolvedValueOnce({
          data: {
            data: [
              {
                id: 1,
                attributes: { slug: 'post-1', title: 'Post 1', description: '' },
              },
            ],
          },
        })
        .mockRejectedValueOnce(new Error('Network error'))
        .mockResolvedValue({ data: { data: [] } });

      const result = await getAllBlogSlugs();

      // Should continue despite error
      expect(mockedAxios.get).toHaveBeenCalledTimes(6);
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });
  });

  describe('getRelatedBlogPosts', () => {
    it('should fetch related posts by category', async () => {
      const mockPosts = [
        {
          id: 2,
          attributes: {
            slug: 'related-post',
            title: 'Related Post',
            description: '',
          },
        },
      ];

      mockedAxios.get.mockResolvedValueOnce({ data: { data: mockPosts } });

      const result = await getRelatedBlogPosts('customer', 5, 1, 'en', 3);

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.test.com/api/resources-blog-post-customers',
        {
          params: {
            locale: 'en',
            'filters[category][id][$eq]': 5,
            'filters[id][$ne]': 1,
            populate: ['user.picture', 'category', 'picture'],
            sort: 'publishedAt:desc',
            'pagination[limit]': 3,
          },
        }
      );
      expect(result).toEqual(mockPosts);
    });

    it('should exclude current post from results', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: { data: [] } });

      await getRelatedBlogPosts('customer', 5, 10, 'en');

      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          params: expect.objectContaining({
            'filters[id][$ne]': 10,
          }),
        })
      );
    });

    it('should use default limit of 3', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: { data: [] } });

      await getRelatedBlogPosts('customer', 5, 1, 'en');

      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          params: expect.objectContaining({
            'pagination[limit]': 3,
          }),
        })
      );
    });

    it('should return empty array on error', async () => {
      const consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

      const result = await getRelatedBlogPosts('customer', 5, 1, 'en');

      expect(result).toEqual([]);
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });
  });

  describe('Edge Cases', () => {
    it('should handle malformed API responses', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: null });

      const result = await getAllBlogPosts('customer', 'en');

      expect(result).toEqual([]);
    });

    it('should handle undefined data in response', async () => {
      mockedAxios.get.mockResolvedValueOnce({});

      const result = await getBlogPostBySlug('customer', 'test', 'en');

      expect(result).toBeNull();
    });
  });
});
