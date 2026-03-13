import { render, screen } from '@testing-library/react';
import { AlternativePageClient } from '../AlternativePageClient';

jest.mock('@/components/comparePage/ComparisonHero', () => ({
  ComparisonHero: ({ title, variant }: { title: string; variant: string }) => (
    <div data-testid="comparison-hero" data-variant={variant}>
      {title}
    </div>
  ),
}));
jest.mock('@/components/comparePage/FeatureComparisonTable', () => ({
  FeatureComparisonTable: () => <div data-testid="feature-comparison-table" />,
}));
jest.mock('@/components/comparePage/CompetitorSummaryCard', () => ({
  CompetitorSummaryCard: ({ competitorSlug }: { competitorSlug: string }) => (
    <div data-testid="competitor-summary-card">{competitorSlug}</div>
  ),
}));
jest.mock('@/components/comparePage/DaisyDifferentiators', () => ({
  DaisyDifferentiators: () => <div data-testid="daisy-differentiators" />,
}));
jest.mock('@/components/comparePage/SwitchingCTA', () => ({
  SwitchingCTA: () => <div data-testid="switching-cta" />,
}));
jest.mock('@/components/comparePage/ObjectionHandling', () => ({
  ObjectionHandling: () => <div data-testid="objection-handling" />,
}));
jest.mock('@/components/comparePage/RelatedPages', () => ({
  RelatedPages: () => <div data-testid="related-pages" />,
}));
jest.mock('@/components/seo/FaqSchema', () => ({
  FaqSchema: () => null,
}));
jest.mock('@/components/seo/ComparisonBreadcrumbSchema', () => ({
  ComparisonBreadcrumbSchema: () => null,
}));
jest.mock('@/components/seo/WebPageSchema', () => ({
  WebPageSchema: () => null,
}));
jest.mock('lucide-react', () => ({
  Check: () => <span data-testid="check-icon" />,
  X: () => <span data-testid="x-icon" />,
}));

describe('AlternativePageClient', () => {
  it('returns null for invalid slug', () => {
    const { container } = render(<AlternativePageClient slug="nonexistent" />);
    expect(container.innerHTML).toBe('');
  });

  describe('alternative (single competitor) variant', () => {
    it('renders AlternativeSinglePage with hero variant "alternative"', () => {
      render(<AlternativePageClient slug="fresha" />);
      const hero = screen.getByTestId('comparison-hero');
      expect(hero).toBeInTheDocument();
      expect(hero.getAttribute('data-variant')).toBe('alternative');
    });

    it('renders pain points with X icons', () => {
      render(<AlternativePageClient slug="fresha" />);
      const xIcons = screen.getAllByTestId('x-icon');
      expect(xIcons.length).toBeGreaterThan(0);
    });

    it('renders switching reasons with Check icons', () => {
      render(<AlternativePageClient slug="fresha" />);
      const checkIcons = screen.getAllByTestId('check-icon');
      expect(checkIcons.length).toBeGreaterThan(0);
    });

    it('renders FeatureComparisonTable', () => {
      render(<AlternativePageClient slug="fresha" />);
      expect(screen.getByTestId('feature-comparison-table')).toBeInTheDocument();
    });

    it('renders DaisyDifferentiators', () => {
      render(<AlternativePageClient slug="fresha" />);
      expect(screen.getByTestId('daisy-differentiators')).toBeInTheDocument();
    });

    it('renders SwitchingCTA', () => {
      render(<AlternativePageClient slug="fresha" />);
      expect(screen.getByTestId('switching-cta')).toBeInTheDocument();
    });
  });

  describe('best-alternatives variant', () => {
    it('renders BestAlternativesPage with hero variant "best-alternatives"', () => {
      render(<AlternativePageClient slug="best-fresha-alternatives" />);
      const hero = screen.getByTestId('comparison-hero');
      expect(hero).toBeInTheDocument();
      expect(hero.getAttribute('data-variant')).toBe('best-alternatives');
    });

    it('renders "#1 Our Pick" badge for Daisy', () => {
      render(<AlternativePageClient slug="best-fresha-alternatives" />);
      expect(screen.getByText('#1 Our Pick')).toBeInTheDocument();
    });

    it('renders "Our Verdict" section', () => {
      render(<AlternativePageClient slug="best-fresha-alternatives" />);
      expect(screen.getByText('Our Verdict')).toBeInTheDocument();
    });

    it('renders alternative cards', () => {
      render(<AlternativePageClient slug="best-fresha-alternatives" />);
      const cards = screen.getAllByTestId('competitor-summary-card');
      expect(cards.length).toBeGreaterThan(0);
    });

    it('renders SwitchingCTA', () => {
      render(<AlternativePageClient slug="best-fresha-alternatives" />);
      expect(screen.getByTestId('switching-cta')).toBeInTheDocument();
    });
  });
});
