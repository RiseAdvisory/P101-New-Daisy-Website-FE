import { render, screen, fireEvent } from '@testing-library/react';
import { PricingV3Client } from '../PricingV3Client';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush, replace: jest.fn() }),
}));

describe('PricingV3Client', () => {
  beforeEach(() => {
    mockPush.mockClear();
    window.localStorage.clear();
  });

  describe('business persona', () => {
    it('renders the toggle-aware hero headline', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText(/Run Your Salon, Spa, or Clinic With Booking/i),
      ).toBeInTheDocument();
    });

    it('renders the "Pricing for:" persona-selector label', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(screen.getByText(/Pricing for:/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Businesses' })).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Solo Professionals' }),
      ).toBeInTheDocument();
    });

    it('renders renamed tier display names (Starter Business / Growing Team / Multi-Location)', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(screen.getAllByText('Starter Business').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Growing Team').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Multi-Location').length).toBeGreaterThan(0);
    });

    it('renders outcome-driven plan descriptions instead of "Choose this if"', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText(
          /Get your business online with a branded booking site, team calendar/i,
        ),
      ).toBeInTheDocument();
      expect(screen.queryByText(/^Choose this if:/i)).not.toBeInTheDocument();
    });

    it('renders the updated trial pill copy', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getAllByText(/No card required to start/i).length,
      ).toBeGreaterThan(0);
    });

    it('renders the "0% Commission on Your Existing Clients" callout', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      // The phrase appears in the commission callout heading AND in the
      // HowItWorks card 3 body — assert that AT LEAST one match exists.
      expect(
        screen.getAllByText(/0% Commission on Your Existing Clients/i).length,
      ).toBeGreaterThan(0);
    });

    it('renders the "How Daisy Pricing Works" section', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText('How Daisy Pricing Works'),
      ).toBeInTheDocument();
    });

    it('renders the "AI Conversations" callout with the pay-as-you-go reassurance line', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      // "Around 50 AI receptionist conversations" appears on the cards
      // too, so use getAllByText for the headline phrase.
      expect(
        screen.getAllByText(/Around 50 AI Receptionist Conversations/i).length,
      ).toBeGreaterThan(0);
      expect(
        screen.getByText(
          /Additional AI usage is available through pay-as-you-go top-ups/i,
        ),
      ).toBeInTheDocument();
    });

    it('renders the persona-aware final CTA headline', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText('Ready to Run Your Business With Daisy?'),
      ).toBeInTheDocument();
    });

    it('uses the dynamic "Start Business Trial" CTA', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getAllByText('Start Business Trial').length,
      ).toBeGreaterThan(0);
    });
  });

  describe('professional persona', () => {
    it('renders the toggle-aware hero headline', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.getByText(/Get Booked, Look Professional/i),
      ).toBeInTheDocument();
    });

    it('renders renamed tier display names (Starter / Growing / Pro Plus)', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.getAllByText('Starter Professional').length,
      ).toBeGreaterThan(0);
      expect(
        screen.getAllByText('Growing Professional').length,
      ).toBeGreaterThan(0);
      expect(screen.getAllByText('Pro Plus').length).toBeGreaterThan(0);
    });

    it('renders the solo outcome description', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.getByText(
          /Create a professional booking site and manage appointments/i,
        ),
      ).toBeInTheDocument();
    });

    it('renders the "0% Commission on Your Own Clients" variant for solo', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.getByText(/0% Commission on Your Own Clients/i),
      ).toBeInTheDocument();
    });

    it('renders the persona-aware final CTA headline', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.getByText('Ready to Get Booked With Daisy?'),
      ).toBeInTheDocument();
    });

    it('uses the dynamic "Start Solo Trial" CTA', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.getAllByText('Start Solo Trial').length,
      ).toBeGreaterThan(0);
    });
  });

  describe('shared behavior', () => {
    it('renders the payment-processing-fees FAQ', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText(/Are Payment Processing Fees Included\?/i),
      ).toBeInTheDocument();
    });

    it('starts the comparison table collapsed and exposes a View All toggle', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      const viewAllBtn = screen.getByRole('button', { name: /View All Features/i });
      expect(viewAllBtn).toBeInTheDocument();
      fireEvent.click(viewAllBtn);
      expect(
        screen.getByRole('button', { name: /Show Less/i }),
      ).toBeInTheDocument();
    });

    it('renders categorized add-ons (Capacity / AI Receptionist / Growth / Setup)', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(screen.getByText('Capacity')).toBeInTheDocument();
      expect(screen.getByText('AI Receptionist')).toBeInTheDocument();
      expect(screen.getByText('Growth')).toBeInTheDocument();
      expect(screen.getByText('Setup')).toBeInTheDocument();
    });

    it('does NOT render the removed standalone "Why Daisy" or reassurance sections', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.queryByText('More Than Booking Software'),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Built for Owners, Managers, and Reception Teams'),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/Need More Locations, Staff, or Custom AI Workflows/i),
      ).not.toBeInTheDocument();
    });

    it('persists the billing period choice across remounts via localStorage', () => {
      window.localStorage.setItem('pricingV3BillingPeriod', 'monthly');
      render(<PricingV3Client persona="business" locale="en" />);
      // Monthly Business prices: $50 / $150 / $250
      expect(screen.getByText('$50')).toBeInTheDocument();
      expect(screen.getByText('$150')).toBeInTheDocument();
      expect(screen.getByText('$250')).toBeInTheDocument();
    });
  });
});
