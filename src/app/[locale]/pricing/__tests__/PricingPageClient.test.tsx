import { render, screen } from '@testing-library/react';
import { PricingPageClient } from '../PricingPageClient';

// Mock child components
jest.mock('@/components/pricingPage/GridPricingCard', () => ({
  GridPricingCard: (props: Record<string, unknown>) => (
    <div data-testid="grid-pricing-card" data-persona={props.activePricingPage}>
      Pricing Cards
    </div>
  ),
}));

jest.mock('@/components/pricingPage/EnterpriseSection', () => ({
  EnterPrise: () => <div data-testid="enterprise-section">Enterprise</div>,
}));

jest.mock('@/components/pricingPage/CalculatePricing', () => ({
  CalculatePricing: () => <div data-testid="calculator">Calculator</div>,
}));

jest.mock('@/components/qaAccordion/QAAccordion', () => ({
  QAAccordion: ({ item }: { item: { question: string } }) => (
    <div data-testid="faq-item">{item.question}</div>
  ),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => <img alt="" {...props} />,
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

jest.mock('@/lib/utils/locale', () => ({
  localePath: (path: string, locale: string) => `/${locale}${path}`,
  getLocaleFromPathname: () => 'en',
  stripLocaleFromPathname: (p: string) => p.replace(/^\/en/, ''),
}));

jest.mock('next/navigation', () => ({
  usePathname: () => '/en/pricing/business',
}));

describe('PricingPageClient', () => {
  describe('business persona', () => {
    it('renders pricing cards for business', () => {
      render(<PricingPageClient persona="business" lang="en" />);
      const cards = screen.getByTestId('grid-pricing-card');
      expect(cards).toHaveAttribute('data-persona', 'business');
    });

    it('renders calculator section', () => {
      render(<PricingPageClient persona="business" lang="en" />);
      expect(screen.getByTestId('calculator')).toBeInTheDocument();
    });

    it('renders enterprise section', () => {
      render(<PricingPageClient persona="business" lang="en" />);
      expect(screen.getByTestId('enterprise-section')).toBeInTheDocument();
    });

    it('renders FAQ items', () => {
      render(<PricingPageClient persona="business" lang="en" />);
      const faqItems = screen.getAllByTestId('faq-item');
      expect(faqItems.length).toBeGreaterThan(0);
    });

    it('renders cross-link to professional pricing', () => {
      render(<PricingPageClient persona="business" lang="en" />);
      const crossLink = screen.getByText(/professional/i, {
        selector: 'a',
      });
      expect(crossLink).toHaveAttribute(
        'href',
        '/en/pricing/professional',
      );
    });

    it('renders final CTA linking to business free trial', () => {
      render(<PricingPageClient persona="business" lang="en" />);
      const ctaLink = screen
        .getByText(/start your 14-day free trial/i)
        .closest('a');
      expect(ctaLink).toHaveAttribute(
        'href',
        '/en/start-free-trial/business',
      );
    });

    it('renders billing toggle', () => {
      render(<PricingPageClient persona="business" lang="en" />);
      expect(screen.getByText('Monthly')).toBeInTheDocument();
      expect(screen.getByText('Annually')).toBeInTheDocument();
    });
  });

  describe('professional persona', () => {
    it('renders pricing cards for professional', () => {
      render(<PricingPageClient persona="professional" lang="en" />);
      const cards = screen.getByTestId('grid-pricing-card');
      expect(cards).toHaveAttribute('data-persona', 'professional');
    });

    it('does NOT render calculator section', () => {
      render(<PricingPageClient persona="professional" lang="en" />);
      expect(screen.queryByTestId('calculator')).not.toBeInTheDocument();
    });

    it('does NOT render enterprise section', () => {
      render(<PricingPageClient persona="professional" lang="en" />);
      expect(
        screen.queryByTestId('enterprise-section'),
      ).not.toBeInTheDocument();
    });

    it('renders cross-link to business pricing', () => {
      render(<PricingPageClient persona="professional" lang="en" />);
      const crossLink = screen.getByText(/business/i, {
        selector: 'a',
      });
      expect(crossLink).toHaveAttribute('href', '/en/pricing/business');
    });

    it('renders FAQ items', () => {
      render(<PricingPageClient persona="professional" lang="en" />);
      const faqItems = screen.getAllByTestId('faq-item');
      expect(faqItems.length).toBeGreaterThan(0);
    });

    it('renders final CTA linking to professional free trial', () => {
      render(<PricingPageClient persona="professional" lang="en" />);
      const ctaLink = screen
        .getByText(/start your free trial/i)
        .closest('a');
      expect(ctaLink).toHaveAttribute(
        'href',
        '/en/start-free-trial/professional',
      );
    });
  });
});
