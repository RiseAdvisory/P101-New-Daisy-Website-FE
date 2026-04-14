import { notFound } from 'next/navigation';
import SolutionsPage, {
  generateStaticParams,
  generateMetadata,
} from '../page';

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

jest.mock('../SolutionsPageClient', () => ({
  SolutionsPageClient: ({ slug, locale }: { slug: string; locale?: string }) => (
    <div data-testid="solutions-page-client">{slug} {locale}</div>
  ),
}));

describe('Solutions [slug] page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ---------------------------------------------------------------------------
  // generateStaticParams
  // ---------------------------------------------------------------------------
  describe('generateStaticParams', () => {
    it('returns all solution slugs as params objects', () => {
      const params = generateStaticParams();
      expect(Array.isArray(params)).toBe(true);
      expect(params.length).toBeGreaterThanOrEqual(11);
      params.forEach((p) => {
        expect(p).toHaveProperty('slug');
        expect(typeof p.slug).toBe('string');
      });
    });

    it('includes known solution slugs', () => {
      const params = generateStaticParams();
      const slugs = params.map((p) => p.slug);
      expect(slugs).toContain('salon-management-software');
      expect(slugs).toContain('spa-booking-system');
    });
  });

  // ---------------------------------------------------------------------------
  // generateMetadata
  // ---------------------------------------------------------------------------
  describe('generateMetadata', () => {
    it('returns correct metadata for valid slug', () => {
      const meta = generateMetadata({
        params: { locale: 'en', slug: 'salon-management-software' },
      });
      expect(meta.title).toBeTruthy();
      expect(meta.description).toBeTruthy();
      expect(meta.keywords).toBeDefined();
      expect(meta.openGraph?.url).toContain('/solutions/salon-management-software');
      expect(meta.alternates?.canonical).toContain('/solutions/salon-management-software');
    });

    it('returns "Not Found" for invalid slug', () => {
      const meta = generateMetadata({ params: { locale: 'en', slug: 'nonexistent' } });
      expect(meta.title).toBe('Not Found');
    });
  });

  // ---------------------------------------------------------------------------
  // Page component
  // ---------------------------------------------------------------------------
  describe('SolutionsPage component', () => {
    it('calls notFound() for invalid slug', () => {
      SolutionsPage({ params: { locale: 'en', slug: 'nonexistent-slug' } });
      expect(notFound).toHaveBeenCalled();
    });

    it('renders SolutionsPageClient for valid slug', () => {
      const result = SolutionsPage({
        params: { locale: 'en', slug: 'salon-management-software' },
      });
      expect(result).toBeTruthy();
    });
  });
});
