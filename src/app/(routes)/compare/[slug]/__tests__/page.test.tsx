import { notFound } from 'next/navigation';
import ComparePage, {
  generateStaticParams,
  generateMetadata,
} from '../page';

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

// Mock ComparePageClient to isolate server page logic
jest.mock('../ComparePageClient', () => ({
  ComparePageClient: ({ slug }: { slug: string }) => (
    <div data-testid="compare-page-client">{slug}</div>
  ),
}));

describe('Compare [slug] page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ---------------------------------------------------------------------------
  // generateStaticParams
  // ---------------------------------------------------------------------------
  describe('generateStaticParams', () => {
    it('returns all compare slugs as params objects', () => {
      const params = generateStaticParams();
      expect(Array.isArray(params)).toBe(true);
      expect(params.length).toBeGreaterThan(0);
      params.forEach((p) => {
        expect(p).toHaveProperty('slug');
        expect(typeof p.slug).toBe('string');
      });
    });

    it('includes daisy-vs slugs', () => {
      const params = generateStaticParams();
      expect(params.some((p) => p.slug.startsWith('daisy-vs-'))).toBe(true);
    });

    it('includes competitor-vs slugs', () => {
      const params = generateStaticParams();
      expect(params.some((p) => !p.slug.startsWith('daisy-vs-'))).toBe(true);
    });
  });

  // ---------------------------------------------------------------------------
  // generateMetadata
  // ---------------------------------------------------------------------------
  describe('generateMetadata', () => {
    it('returns correct metadata for a daisy-vs slug', () => {
      const meta = generateMetadata({ params: { slug: 'daisy-vs-fresha' } });
      expect(meta.title).toBeTruthy();
      expect(meta.description).toBeTruthy();
      expect(meta.keywords).toBeDefined();
      expect(meta.openGraph?.url).toContain('/compare/daisy-vs-fresha');
      expect(meta.alternates?.canonical).toContain('/compare/daisy-vs-fresha');
    });

    it('returns correct metadata for a competitor-vs slug', () => {
      const meta = generateMetadata({ params: { slug: 'fresha-vs-booksy' } });
      expect(meta.title).toBeTruthy();
      expect(meta.description).toBeTruthy();
      expect(meta.openGraph?.url).toContain('/compare/fresha-vs-booksy');
    });

    it('returns "Not Found" for invalid slug', () => {
      const meta = generateMetadata({ params: { slug: 'nonexistent' } });
      expect(meta.title).toBe('Not Found');
    });
  });

  // ---------------------------------------------------------------------------
  // Page component
  // ---------------------------------------------------------------------------
  describe('ComparePage component', () => {
    it('calls notFound() for invalid slug', () => {
      ComparePage({ params: { slug: 'nonexistent-slug' } });
      expect(notFound).toHaveBeenCalled();
    });

    it('renders ComparePageClient for valid slug', () => {
      const result = ComparePage({ params: { slug: 'daisy-vs-fresha' } });
      expect(result).toBeTruthy();
    });
  });
});
