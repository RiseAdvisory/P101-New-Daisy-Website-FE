import { render, screen } from '@testing-library/react';
import { FeatureDeepDiveClient } from '../FeatureDeepDiveClient';

// Mock all child components
jest.mock('@/components/seo/FeaturesBreadcrumbSchema', () => ({
  FeaturesBreadcrumbSchema: () => (
    <div data-testid="breadcrumb-schema" />
  ),
}));

jest.mock('@/components/seo/WebPageSchema', () => ({
  WebPageSchema: () => <div data-testid="web-page-schema" />,
}));

jest.mock('@/components/seo/FaqSchema', () => ({
  FaqSchema: () => <div data-testid="faq-schema" />,
}));

jest.mock('@/components/solutionsPage/SolutionCTA', () => ({
  SolutionCTA: ({ headline }: { headline?: string }) => (
    <div data-testid="solution-cta">{headline}</div>
  ),
}));

jest.mock('@/components/comparePage/RelatedPages', () => ({
  RelatedPages: () => <div data-testid="related-pages" />,
}));

jest.mock('../FeatureHero', () => ({
  FeatureHero: ({ title }: { title: string }) => (
    <div data-testid="feature-hero">{title}</div>
  ),
}));

jest.mock('../OverviewSection', () => ({
  OverviewSection: () => <div data-testid="overview-section" />,
}));

jest.mock('../SubFeaturesSection', () => ({
  SubFeaturesSection: () => <div data-testid="sub-features-section" />,
}));

jest.mock('../WorkflowSection', () => ({
  WorkflowSection: () => <div data-testid="workflow-section" />,
}));

jest.mock('../ComparisonHighlight', () => ({
  ComparisonHighlight: () => <div data-testid="comparison-highlight" />,
}));

jest.mock('../UseCasesSection', () => ({
  UseCasesSection: () => <div data-testid="use-cases-section" />,
}));

jest.mock('../IntegrationSection', () => ({
  IntegrationSection: () => <div data-testid="integration-section" />,
}));

jest.mock('../AiEnhancementSection', () => ({
  AiEnhancementSection: () => (
    <div data-testid="ai-enhancement-section" />
  ),
}));

jest.mock('../NetworkEffectsSection', () => ({
  NetworkEffectsSection: () => (
    <div data-testid="network-effects-section" />
  ),
}));

jest.mock('../DemoPlaceholder', () => ({
  DemoPlaceholder: () => <div data-testid="demo-placeholder" />,
}));

describe('FeatureDeepDiveClient', () => {
  it('returns null for invalid slug', () => {
    const { container } = render(
      <FeatureDeepDiveClient userType="business" slug="nonexistent" />,
    );
    expect(container.innerHTML).toBe('');
  });

  it('renders all core sections for valid business slug', () => {
    render(
      <FeatureDeepDiveClient
        userType="business"
        slug="ai-powered-intelligence"
      />,
    );

    expect(screen.getByTestId('feature-hero')).toBeInTheDocument();
    expect(screen.getByTestId('overview-section')).toBeInTheDocument();
    expect(screen.getByTestId('sub-features-section')).toBeInTheDocument();
    expect(screen.getByTestId('workflow-section')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-highlight')).toBeInTheDocument();
    expect(screen.getByTestId('use-cases-section')).toBeInTheDocument();
    expect(screen.getByTestId('integration-section')).toBeInTheDocument();
    expect(screen.getByTestId('demo-placeholder')).toBeInTheDocument();
    expect(screen.getByTestId('solution-cta')).toBeInTheDocument();
  });

  it('renders SEO schemas', () => {
    render(
      <FeatureDeepDiveClient
        userType="business"
        slug="ai-powered-intelligence"
      />,
    );

    expect(screen.getByTestId('breadcrumb-schema')).toBeInTheDocument();
    expect(screen.getByTestId('web-page-schema')).toBeInTheDocument();
    expect(screen.getByTestId('faq-schema')).toBeInTheDocument();
  });

  it('renders hero with correct title', () => {
    render(
      <FeatureDeepDiveClient
        userType="business"
        slug="ai-powered-intelligence"
      />,
    );

    expect(screen.getByTestId('feature-hero').textContent).toContain(
      'Salons',
    );
  });

  it('renders network effects section for AI page', () => {
    render(
      <FeatureDeepDiveClient
        userType="business"
        slug="ai-powered-intelligence"
      />,
    );

    expect(
      screen.getByTestId('network-effects-section'),
    ).toBeInTheDocument();
  });

  it('does not render AI enhancement section for AI page itself', () => {
    render(
      <FeatureDeepDiveClient
        userType="business"
        slug="ai-powered-intelligence"
      />,
    );

    expect(
      screen.queryByTestId('ai-enhancement-section'),
    ).not.toBeInTheDocument();
  });

  it('renders FAQ section with questions', () => {
    render(
      <FeatureDeepDiveClient
        userType="business"
        slug="ai-powered-intelligence"
      />,
    );

    const faqHeading = screen.getByText('Frequently Asked Questions');
    expect(faqHeading).toBeInTheDocument();
  });

  it('renders visual breadcrumb navigation', () => {
    render(
      <FeatureDeepDiveClient
        userType="business"
        slug="ai-powered-intelligence"
      />,
    );

    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
    expect(screen.getByText('AI-Powered Intelligence')).toBeInTheDocument();
  });

  it('renders CTA with category-specific headline', () => {
    render(
      <FeatureDeepDiveClient
        userType="business"
        slug="ai-powered-intelligence"
      />,
    );

    expect(screen.getByTestId('solution-cta').textContent).toContain(
      'AI-Powered Intelligence',
    );
  });
});
