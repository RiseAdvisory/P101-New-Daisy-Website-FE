import { render, screen } from '@testing-library/react';
import { SolutionsPageClient } from '../SolutionsPageClient';

jest.mock('@/components/solutionsPage/SolutionHero', () => ({
  SolutionHero: ({ title }: { title: string }) => (
    <div data-testid="solution-hero">{title}</div>
  ),
}));
jest.mock('@/components/solutionsPage/ChallengesSection', () => ({
  ChallengesSection: () => <div data-testid="challenges-section" />,
}));
jest.mock('@/components/solutionsPage/IndustryFeatures', () => ({
  IndustryFeatures: () => <div data-testid="industry-features" />,
}));
jest.mock('@/components/solutionsPage/SolutionCTA', () => ({
  SolutionCTA: () => <div data-testid="solution-cta" />,
}));
jest.mock('@/components/comparePage/DaisyDifferentiators', () => ({
  DaisyDifferentiators: () => <div data-testid="daisy-differentiators" />,
}));
jest.mock('@/components/comparePage/RelatedPages', () => ({
  RelatedPages: ({ links }: { links: Array<{ title: string }> }) => (
    <div data-testid="related-pages">{links.length} links</div>
  ),
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

describe('SolutionsPageClient', () => {
  it('returns null for invalid slug', () => {
    const { container } = render(<SolutionsPageClient slug="nonexistent" />);
    expect(container.innerHTML).toBe('');
  });

  describe('valid solution page', () => {
    it('renders SolutionHero with correct title', () => {
      render(<SolutionsPageClient slug="salon-management-software" />);
      const hero = screen.getByTestId('solution-hero');
      expect(hero).toBeInTheDocument();
      expect(hero.textContent).toContain('Salon Management Software');
    });

    it('renders intro text', () => {
      render(<SolutionsPageClient slug="salon-management-software" />);
      expect(screen.getByText(/Traditional salon software/)).toBeInTheDocument();
    });

    it('renders ChallengesSection', () => {
      render(<SolutionsPageClient slug="salon-management-software" />);
      expect(screen.getByTestId('challenges-section')).toBeInTheDocument();
    });

    it('renders IndustryFeatures', () => {
      render(<SolutionsPageClient slug="salon-management-software" />);
      expect(screen.getByTestId('industry-features')).toBeInTheDocument();
    });

    it('renders DaisyDifferentiators', () => {
      render(<SolutionsPageClient slug="salon-management-software" />);
      expect(screen.getByTestId('daisy-differentiators')).toBeInTheDocument();
    });

    it('renders FAQ section when faqs exist', () => {
      render(<SolutionsPageClient slug="salon-management-software" />);
      expect(
        screen.getByText('Frequently Asked Questions')
      ).toBeInTheDocument();
    });

    it('renders SolutionCTA', () => {
      render(<SolutionsPageClient slug="salon-management-software" />);
      expect(screen.getByTestId('solution-cta')).toBeInTheDocument();
    });

    it('renders RelatedPages with links', () => {
      render(<SolutionsPageClient slug="salon-management-software" />);
      expect(screen.getByTestId('related-pages')).toBeInTheDocument();
    });
  });
});
