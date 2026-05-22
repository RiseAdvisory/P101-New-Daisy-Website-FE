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
    it('renders the pricing-specific hero headline using consistent "AI Receptionist" terminology', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText(
          /Plans for Booking, Payments, and AI Receptionist Support/i,
        ),
      ).toBeInTheDocument();
      // Should NOT use the old "AI Front Desk Support" wording.
      expect(
        screen.queryByText(/AI Front Desk Support/i),
      ).not.toBeInTheDocument();
    });

    it('renders the "Pricing for:" persona-selector label', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(screen.getByText(/Pricing for:/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Businesses' })).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Solo Professionals' }),
      ).toBeInTheDocument();
    });

    it('renders v2-aligned tier display names (Basic / Growth / Business)', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(screen.getAllByText('Basic').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Growth').length).toBeGreaterThan(0);
      // "Business" also appears in the persona toggle, so just assert
      // it's present at least once.
      expect(screen.getAllByText(/^Business$/).length).toBeGreaterThan(0);
    });

    it('renders outcome-driven plan descriptions', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText(
          /Get your business online with a branded booking site, team calendar/i,
        ),
      ).toBeInTheDocument();
      // Growth description should mention retaining regulars (proves 3-line copy lands).
      expect(
        screen.getByText(/help your salon retain regulars/i),
      ).toBeInTheDocument();
      expect(screen.queryByText(/^Choose this if:/i)).not.toBeInTheDocument();
    });

    it('renders the updated trial pill copy', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getAllByText(/No card required to start/i).length,
      ).toBeGreaterThan(0);
    });

    it('renders "Includes 50 AI receptionist conversations" only on the Basic tier (no duplication on Growth)', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      // Two expected hits: 1 on the Basic card bullet, 1 in the AI
      // Conversations callout title ("Every Plan Includes 50 AI
      // Receptionist Conversations"). Growth inherits via "Everything
      // in Basic" so the bullet is intentionally dropped from it; if it
      // came back, this count would be 3.
      const matches = screen.getAllByText(
        /Includes 50 AI receptionist conversations/i,
      );
      expect(matches.length).toBe(2);
      // Growth card shows "Everything in Basic" instead.
      expect(screen.getByText('Everything in Basic')).toBeInTheDocument();
    });

    it('does NOT render the "Available after quality review" card section', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.queryByText(/Available after quality review/i),
      ).not.toBeInTheDocument();
    });

    it('renders the "0% Commission on Your Existing Clients" callout', () => {
      render(<PricingV3Client persona="business" locale="en" />);
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
      expect(
        screen.getAllByText(/50 AI Receptionist Conversations/i).length,
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

    it('renders the business-only Enterprise / Contact Us section', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByRole('heading', { name: /^Enterprise$/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /For multi-location businesses needing custom integrations/i,
        ),
      ).toBeInTheDocument();
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    it('uses the dynamic "Start Business Trial" CTA', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getAllByText('Start Business Trial').length,
      ).toBeGreaterThan(0);
    });
  });

  describe('professional persona', () => {
    it('renders the pricing-specific hero headline', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.getByText(
          /Plans for Booking, Payments, and AI Receptionist Support/i,
        ),
      ).toBeInTheDocument();
    });

    it('does NOT render the business-only Enterprise section', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.queryByRole('heading', { name: /^Enterprise$/i }),
      ).not.toBeInTheDocument();
    });

    it('renders v2-aligned tier display names (Starter / Professional / Elite)', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(screen.getAllByText('Starter').length).toBeGreaterThan(0);
      expect(
        screen.getAllByText(/^Professional$/).length,
      ).toBeGreaterThan(0);
      expect(screen.getAllByText('Elite').length).toBeGreaterThan(0);
    });

    it('renders the solo outcome description', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.getByText(
          /Create a professional booking site, manage appointments, accept payments/i,
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
      // "Growth" also appears as a tier name; assert at least one match.
      expect(screen.getAllByText('Growth').length).toBeGreaterThan(0);
      expect(screen.getByText('Setup')).toBeInTheDocument();
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
