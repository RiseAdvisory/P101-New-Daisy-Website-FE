import { notFound } from 'next/navigation';
import SolutionAnglePage, {
  generateStaticParams,
  generateMetadata,
} from '../page';

const NOT_FOUND_ERROR = 'NEXT_NOT_FOUND';
jest.mock('next/navigation', () => ({
  notFound: jest.fn(() => {
    throw new Error(NOT_FOUND_ERROR);
  }),
}));

jest.mock('../SolutionAngleClient', () => ({
  SolutionAngleClient: ({
    persona,
    lang,
  }: {
    persona: string;
    lang: string;
  }) => (
    <div data-testid="solution-angle-client">
      {persona}-{lang}
    </div>
  ),
}));

jest.mock('@/components/seo/WebPageSchema', () => ({
  WebPageSchema: () => null,
}));

jest.mock('@/components/seo/PageBreadcrumbSchema', () => ({
  PageBreadcrumbSchema: () => null,
}));

jest.mock('@/components/seo/FaqSchema', () => ({
  FaqSchema: () => null,
}));

jest.mock('@/components/shared/LandingHero', () => ({
  LandingHero: ({ headline }: { headline: string }) => (
    <div data-testid="landing-hero">{headline}</div>
  ),
}));

describe('Solution Angle [persona] page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ---------------------------------------------------------------------------
  // generateStaticParams
  // ---------------------------------------------------------------------------
  describe('generateStaticParams', () => {
    it('returns 14 params (7 slugs x 2 personas)', () => {
      const params = generateStaticParams();
      expect(params).toHaveLength(14);
    });

    it('includes both personas for each slug', () => {
      const params = generateStaticParams();
      const aiReceptionistParams = params.filter(
        (p) => p.slug === 'ai-receptionist',
      );
      expect(aiReceptionistParams).toHaveLength(2);
      expect(aiReceptionistParams.map((p) => p.persona).sort()).toEqual([
        'business',
        'professional',
      ]);
    });

    it('includes all 7 angle slugs', () => {
      const params = generateStaticParams();
      const slugs = [...new Set(params.map((p) => p.slug))];
      expect(slugs).toContain('ai-receptionist');
      expect(slugs).toContain('unified-inbox');
      expect(slugs).toContain('brand-control');
      expect(slugs).toContain('smart-scheduling');
      expect(slugs).toContain('service-portfolio');
      expect(slugs).toContain('ai-marketing');
      expect(slugs).toContain('all-in-one');
    });
  });

  // ---------------------------------------------------------------------------
  // generateMetadata
  // ---------------------------------------------------------------------------
  describe('generateMetadata', () => {
    it('returns metadata for valid slug and persona', () => {
      const meta = generateMetadata({
        params: {
          locale: 'en',
          slug: 'ai-receptionist',
          persona: 'business',
        },
      });
      expect(meta.title).toContain('The Daisy');
      expect(meta.description).toBeTruthy();
      expect(meta.openGraph?.url).toContain(
        '/solutions/ai-receptionist/business',
      );
    });

    it('returns "Not Found" for invalid slug', () => {
      const meta = generateMetadata({
        params: { locale: 'en', slug: 'nonexistent', persona: 'business' },
      });
      expect(meta.title).toBe('Not Found');
    });

    it('returns "Not Found" for invalid persona', () => {
      const meta = generateMetadata({
        params: {
          locale: 'en',
          slug: 'ai-receptionist',
          persona: 'customer',
        },
      });
      expect(meta.title).toBe('Not Found');
    });
  });

  // ---------------------------------------------------------------------------
  // Page component
  // ---------------------------------------------------------------------------
  describe('SolutionAnglePage component', () => {
    it('calls notFound() for invalid slug', () => {
      expect(() =>
        SolutionAnglePage({
          params: {
            locale: 'en',
            slug: 'nonexistent-slug',
            persona: 'business',
          },
        }),
      ).toThrow(NOT_FOUND_ERROR);
      expect(notFound).toHaveBeenCalled();
    });

    it('calls notFound() for invalid persona', () => {
      expect(() =>
        SolutionAnglePage({
          params: {
            locale: 'en',
            slug: 'ai-receptionist',
            persona: 'invalid-persona',
          },
        }),
      ).toThrow(NOT_FOUND_ERROR);
      expect(notFound).toHaveBeenCalled();
    });

    it('renders for valid business slug and persona', () => {
      const result = SolutionAnglePage({
        params: {
          locale: 'en',
          slug: 'ai-receptionist',
          persona: 'business',
        },
      });
      expect(result).toBeTruthy();
      expect(notFound).not.toHaveBeenCalled();
    });

    it('renders for valid professional slug and persona', () => {
      const result = SolutionAnglePage({
        params: {
          locale: 'en',
          slug: 'unified-inbox',
          persona: 'professional',
        },
      });
      expect(result).toBeTruthy();
      expect(notFound).not.toHaveBeenCalled();
    });

    it('renders Arabic locale correctly', () => {
      const result = SolutionAnglePage({
        params: {
          locale: 'ar',
          slug: 'brand-control',
          persona: 'business',
        },
      });
      expect(result).toBeTruthy();
      expect(notFound).not.toHaveBeenCalled();
    });
  });
});
