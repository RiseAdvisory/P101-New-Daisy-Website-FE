import { notFound } from 'next/navigation';
import AlternativePage, {
  generateStaticParams,
  generateMetadata,
} from '../page';

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

jest.mock('../AlternativePageClient', () => ({
  AlternativePageClient: ({ slug }: { slug: string }) => (
    <div data-testid="alternative-page-client">{slug}</div>
  ),
}));

describe('Alternative [slug] page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ---------------------------------------------------------------------------
  // generateStaticParams
  // ---------------------------------------------------------------------------
  describe('generateStaticParams', () => {
    it('returns all alternative slugs as params objects', () => {
      const params = generateStaticParams();
      expect(Array.isArray(params)).toBe(true);
      expect(params.length).toBeGreaterThan(0);
      params.forEach((p) => {
        expect(p).toHaveProperty('slug');
        expect(typeof p.slug).toBe('string');
      });
    });

    it('includes single-competitor alternative slugs', () => {
      const params = generateStaticParams();
      expect(params.some((p) => !p.slug.startsWith('best-'))).toBe(true);
    });

    it('includes best-alternatives slugs', () => {
      const params = generateStaticParams();
      expect(params.some((p) => p.slug.startsWith('best-'))).toBe(true);
    });
  });

  // ---------------------------------------------------------------------------
  // generateMetadata
  // ---------------------------------------------------------------------------
  describe('generateMetadata', () => {
    it('returns correct metadata for an alternative slug', () => {
      const meta = generateMetadata({ params: { slug: 'fresha' } });
      expect(meta.title).toBeTruthy();
      expect(meta.description).toBeTruthy();
      expect(meta.keywords).toBeDefined();
      expect(meta.openGraph?.url).toContain('/alternative/fresha');
      expect(meta.alternates?.canonical).toContain('/alternative/fresha');
    });

    it('returns correct metadata for a best-alternatives slug', () => {
      const meta = generateMetadata({
        params: { slug: 'best-fresha-alternatives' },
      });
      expect(meta.title).toBeTruthy();
      expect(meta.description).toBeTruthy();
      expect(meta.openGraph?.url).toContain('/alternative/best-fresha-alternatives');
    });

    it('returns "Not Found" for invalid slug', () => {
      const meta = generateMetadata({ params: { slug: 'nonexistent' } });
      expect(meta.title).toBe('Not Found');
    });
  });

  // ---------------------------------------------------------------------------
  // Page component
  // ---------------------------------------------------------------------------
  describe('AlternativePage component', () => {
    it('calls notFound() for invalid slug', () => {
      AlternativePage({ params: { slug: 'nonexistent-slug' } });
      expect(notFound).toHaveBeenCalled();
    });

    it('renders AlternativePageClient for valid slug', () => {
      const result = AlternativePage({ params: { slug: 'fresha' } });
      expect(result).toBeTruthy();
    });
  });
});
