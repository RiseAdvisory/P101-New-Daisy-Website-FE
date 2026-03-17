import { render, screen } from '@testing-library/react';
import { ComparePageClient } from '../ComparePageClient';

// Mock all child components to isolate rendering logic
jest.mock('@/components/comparePage/ComparisonHero', () => ({
  ComparisonHero: ({ title, variant }: { title: string; variant: string }) => (
    <div data-testid="comparison-hero" data-variant={variant}>
      {title}
    </div>
  ),
}));
jest.mock('@/components/comparePage/QuickComparisonTable', () => ({
  QuickComparisonTable: () => <div data-testid="quick-comparison-table" />,
}));
jest.mock('@/components/comparePage/FeatureComparisonTable', () => ({
  FeatureComparisonTable: () => <div data-testid="feature-comparison-table" />,
}));
jest.mock('@/components/comparePage/PricingComparisonCard', () => ({
  PricingComparisonCard: () => <div data-testid="pricing-comparison-card" />,
}));
jest.mock('@/components/comparePage/ProsConsList', () => ({
  ProsConsList: ({ title }: { title: string }) => (
    <div data-testid="pros-cons-list">{title}</div>
  ),
}));
jest.mock('@/components/comparePage/VerdictSection', () => ({
  VerdictSection: () => <div data-testid="verdict-section" />,
}));
jest.mock('@/components/comparePage/DaisyDifferentiators', () => ({
  DaisyDifferentiators: () => <div data-testid="daisy-differentiators" />,
}));
jest.mock('@/components/comparePage/GrowthVsOperations', () => ({
  GrowthVsOperations: () => <div data-testid="growth-vs-operations" />,
}));
jest.mock('@/components/comparePage/ObjectionHandling', () => ({
  ObjectionHandling: () => <div data-testid="objection-handling" />,
}));
jest.mock('@/components/comparePage/SwitchingCTA', () => ({
  SwitchingCTA: () => <div data-testid="switching-cta" />,
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

describe('ComparePageClient', () => {
  it('returns null for invalid slug', () => {
    const { container } = render(<ComparePageClient slug="nonexistent" />);
    expect(container.innerHTML).toBe('');
  });

  describe('daisy-vs variant', () => {
    it('renders DaisyVsPage with hero variant "daisy-vs"', () => {
      render(<ComparePageClient slug="daisy-vs-fresha" />);
      const hero = screen.getByTestId('comparison-hero');
      expect(hero).toBeInTheDocument();
      expect(hero.getAttribute('data-variant')).toBe('daisy-vs');
    });

    it('renders TL;DR section', () => {
      render(<ComparePageClient slug="daisy-vs-fresha" />);
      expect(screen.getByText('TL;DR')).toBeInTheDocument();
    });

    it('renders QuickComparisonTable', () => {
      render(<ComparePageClient slug="daisy-vs-fresha" />);
      expect(screen.getByTestId('quick-comparison-table')).toBeInTheDocument();
    });

    it('renders FeatureComparisonTable', () => {
      render(<ComparePageClient slug="daisy-vs-fresha" />);
      expect(screen.getByTestId('feature-comparison-table')).toBeInTheDocument();
    });

    it('renders ProsConsList for both competitor and Daisy', () => {
      render(<ComparePageClient slug="daisy-vs-fresha" />);
      const lists = screen.getAllByTestId('pros-cons-list');
      expect(lists.length).toBe(2);
      expect(lists[1].textContent).toBe('Daisy');
    });

    it('renders VerdictSection', () => {
      render(<ComparePageClient slug="daisy-vs-fresha" />);
      expect(screen.getByTestId('verdict-section')).toBeInTheDocument();
    });

    it('renders DaisyDifferentiators', () => {
      render(<ComparePageClient slug="daisy-vs-fresha" />);
      expect(screen.getByTestId('daisy-differentiators')).toBeInTheDocument();
    });

    it('renders SwitchingCTA', () => {
      render(<ComparePageClient slug="daisy-vs-fresha" />);
      expect(screen.getByTestId('switching-cta')).toBeInTheDocument();
    });
  });

  describe('competitor-vs variant', () => {
    it('renders CompetitorVsPage with hero variant "competitor-vs"', () => {
      render(<ComparePageClient slug="fresha-vs-booksy" />);
      const hero = screen.getByTestId('comparison-hero');
      expect(hero).toBeInTheDocument();
      expect(hero.getAttribute('data-variant')).toBe('competitor-vs');
    });

    it('renders FeatureComparisonTable', () => {
      render(<ComparePageClient slug="fresha-vs-booksy" />);
      expect(screen.getByTestId('feature-comparison-table')).toBeInTheDocument();
    });

    it('renders "Why Choose Daisy Over Both?" pitch', () => {
      render(<ComparePageClient slug="fresha-vs-booksy" />);
      expect(screen.getByText('Why Choose Daisy Over Both?')).toBeInTheDocument();
    });

    it('renders DaisyDifferentiators', () => {
      render(<ComparePageClient slug="fresha-vs-booksy" />);
      expect(screen.getByTestId('daisy-differentiators')).toBeInTheDocument();
    });

    it('renders SwitchingCTA', () => {
      render(<ComparePageClient slug="fresha-vs-booksy" />);
      expect(screen.getByTestId('switching-cta')).toBeInTheDocument();
    });
  });
});
