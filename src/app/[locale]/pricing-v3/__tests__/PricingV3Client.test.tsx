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

    it('renders renamed tier display names (Starter Business / Growing Team / Multi-Location)', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(screen.getAllByText('Starter Business').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Growing Team').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Multi-Location').length).toBeGreaterThan(0);
    });

    it('renders the "0% Commission on Your Existing Clients" callout', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText(/0% Commission on Your Existing Clients/i),
      ).toBeInTheDocument();
    });

    it('renders the "How Daisy Pricing Works" section', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText('How Daisy Pricing Works'),
      ).toBeInTheDocument();
    });

    it('renders the "AI Conversations" callout (not "credits" first)', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText(/Around 50 AI Receptionist Conversations/i),
      ).toBeInTheDocument();
    });

    it('renders the business-only sales CTA', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText(/Need More Locations, Staff, or Custom AI Workflows/i),
      ).toBeInTheDocument();
    });

    it('renders the business reassurance section', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText('Built for Owners, Managers, and Reception Teams'),
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

    it('renders the "0% Commission on Your Own Clients" variant for solo', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.getByText(/0% Commission on Your Own Clients/i),
      ).toBeInTheDocument();
    });

    it('does NOT render the business-only sales CTA', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.queryByText(/Need More Locations, Staff, or Custom AI Workflows/i),
      ).not.toBeInTheDocument();
    });

    it('renders the solo reassurance section', () => {
      render(<PricingV3Client persona="professional" locale="en" />);
      expect(
        screen.getByText('Look Professional Even If You Work Independently'),
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
    it('renders the "Why Daisy is different" comparison table', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(screen.getByText('More Than Booking Software')).toBeInTheDocument();
    });

    it('renders the AI usage example section', () => {
      render(<PricingV3Client persona="business" locale="en" />);
      expect(
        screen.getByText(/What Happens After the Included AI Conversations/i),
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
