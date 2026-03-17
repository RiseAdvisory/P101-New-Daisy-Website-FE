import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getAllBlogSlugs,
  getRelatedBlogPosts,
  UserType,
} from '../blog';

describe('Blog API (Local Data)', () => {
  describe('getAllBlogPosts', () => {
    it('should return blog posts for business type', async () => {
      const result = await getAllBlogPosts('business', 'en');

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
      result.forEach((post) => {
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('attributes');
        expect(post.attributes).toHaveProperty('title');
        expect(post.attributes).toHaveProperty('slug');
      });
    });

    it('should return blog posts for professional type', async () => {
      const result = await getAllBlogPosts('professional', 'en');

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return empty array for customer type (no articles yet)', async () => {
      const result = await getAllBlogPosts('customer', 'en');

      expect(result).toBeInstanceOf(Array);
      expect(result).toEqual([]);
    });

    it('should return empty array for unknown user type', async () => {
      const result = await getAllBlogPosts('unknown' as UserType, 'en');

      expect(result).toEqual([]);
    });
  });

  describe('getBlogPostBySlug', () => {
    it('should return a blog post by slug', async () => {
      const result = await getBlogPostBySlug(
        'business',
        'ai-scheduling-saves-salon-owners-time',
        'en'
      );

      expect(result).not.toBeNull();
      expect(result?.attributes.slug).toBe(
        'ai-scheduling-saves-salon-owners-time'
      );
      expect(result?.attributes.title).toBe(
        'How AI Scheduling Saves Salon Owners 10+ Hours Per Week'
      );
    });

    it('should return null when post not found', async () => {
      const result = await getBlogPostBySlug(
        'customer',
        'non-existent-slug',
        'en'
      );

      expect(result).toBeNull();
    });

    it('should use default locale when not provided', async () => {
      const result = await getBlogPostBySlug(
        'business',
        'ai-scheduling-saves-salon-owners-time'
      );

      expect(result).not.toBeNull();
    });
  });

  describe('getAllBlogSlugs', () => {
    it('should return slugs for user types with articles', async () => {
      const result = await getAllBlogSlugs();

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);

      // Verify structure
      result.forEach((item) => {
        expect(item).toHaveProperty('userType');
        expect(item).toHaveProperty('slug');
        expect(item).toHaveProperty('locale');
      });

      // Should have slugs for business and professional
      const userTypes = new Set(result.map((item) => item.userType));
      expect(userTypes.has('business')).toBe(true);
      expect(userTypes.has('professional')).toBe(true);
    });
  });

  describe('getRelatedBlogPosts', () => {
    it('should return related posts by category', async () => {
      // Category 5 = AI Intelligence (business articles)
      const result = await getRelatedBlogPosts('business', 5, 999, 'en', 3);

      expect(result).toBeInstanceOf(Array);
    });

    it('should exclude current post from results', async () => {
      // Post ID 104 is in category 5 (AI Intelligence)
      const result = await getRelatedBlogPosts('business', 5, 104, 'en');

      // Should not include post with id 104
      result.forEach((post) => {
        expect(post.id).not.toBe(104);
      });
    });

    it('should respect the limit parameter', async () => {
      const result = await getRelatedBlogPosts('business', 5, 999, 'en', 1);

      expect(result.length).toBeLessThanOrEqual(1);
    });

    it('should return empty array for non-matching category', async () => {
      const result = await getRelatedBlogPosts('customer', 999, 1, 'en');

      expect(result).toEqual([]);
    });
  });
});
