import { render, screen, fireEvent } from '@testing-library/react';
import { PricingV2Client } from '../PricingV2Client';

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

describe('PricingV2Client', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  describe('business persona', () => {
    it('renders the three Business tier names', () => {
      render(<PricingV2Client persona="business" locale="en" />);
      expect(
        screen.getAllByText(/Basic/).length,
      ).toBeGreaterThanOrEqual(1);
      expect(
        screen.getAllByText(/Growth/).length,
      ).toBeGreaterThanOrEqual(1);
      expect(
        screen.getAllByText(/Business/).length,
      ).toBeGreaterThanOrEqual(1);
    });

    it('defaults to annual billing and shows the per-month annual price', () => {
      render(<PricingV2Client persona="business" locale="en" />);
      // Basic annual per-month is $42
      expect(screen.getByText('$42')).toBeInTheDocument();
      // Growth annual per-month is $125
      expect(screen.getByText('$125')).toBeInTheDocument();
      // Business annual per-month is $208
      expect(screen.getByText('$208')).toBeInTheDocument();
    });

    it('switches to monthly pricing when the Monthly toggle is clicked', () => {
      render(<PricingV2Client persona="business" locale="en" />);
      fireEvent.click(screen.getByRole('button', { name: /^Monthly$/ }));
      expect(screen.getByText('$50')).toBeInTheDocument();
      expect(screen.getByText('$150')).toBeInTheDocument();
      expect(screen.getByText('$250')).toBeInTheDocument();
    });
  });

  describe('professional persona', () => {
    it('renders the three Professional tier names', () => {
      render(<PricingV2Client persona="professional" locale="en" />);
      expect(
        screen.getAllByText(/Starter/).length,
      ).toBeGreaterThanOrEqual(1);
      expect(
        screen.getAllByText(/Professional/).length,
      ).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/Elite/).length).toBeGreaterThanOrEqual(1);
    });

    it('shows the Professional tier monthly pricing in monthly mode', () => {
      render(<PricingV2Client persona="professional" locale="en" />);
      fireEvent.click(screen.getByRole('button', { name: /^Monthly$/ }));
      expect(screen.getByText('$25')).toBeInTheDocument();
      expect(screen.getByText('$50')).toBeInTheDocument();
      expect(screen.getByText('$100')).toBeInTheDocument();
    });
  });

  describe('callouts present on every persona', () => {
    it('renders the AI Credits callout', () => {
      render(<PricingV2Client persona="business" locale="en" />);
      // The "1,000 free AI credits" copy appears in both the callout headline
      // and the FAQ — assert at least one occurrence.
      expect(
        screen.getAllByText(/1,000 free AI credits/i).length,
      ).toBeGreaterThan(0);
    });

    it('renders the Commission Promise callout', () => {
      render(<PricingV2Client persona="business" locale="en" />);
      expect(
        screen.getByText(/0% on your existing clients/i),
      ).toBeInTheDocument();
    });

    it('renders the cross-link to the other persona', () => {
      render(<PricingV2Client persona="business" locale="en" />);
      const xlink = screen.getByRole('link', {
        name: /Solo professional\? See Professional pricing/i,
      });
      expect(xlink).toHaveAttribute('href', '/en/pricing-v2/professional');
    });

    it('renders the FAQ section with key questions', () => {
      render(<PricingV2Client persona="business" locale="en" />);
      expect(screen.getByText(/AI Credits and how do they work/i)).toBeInTheDocument();
      expect(screen.getByText(/Can I cancel anytime/i)).toBeInTheDocument();
    });

    it('renders the final CTA pointing at /get-the-app', () => {
      render(<PricingV2Client persona="business" locale="en" />);
      const ctas = screen.getAllByRole('link', { name: /Start free trial/i });
      // There are multiple "Start free trial" CTAs across the cards + final
      // section. All should point at /en/get-the-app.
      expect(ctas.length).toBeGreaterThan(0);
      for (const cta of ctas) {
        expect(cta).toHaveAttribute('href', '/en/get-the-app');
      }
    });
  });

  describe('billing period persistence', () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    it('persists the chosen billing period to localStorage', () => {
      render(<PricingV2Client persona="business" locale="en" />);
      fireEvent.click(screen.getByRole('button', { name: /^Monthly$/ }));
      expect(window.localStorage.getItem('pricingV2BillingPeriod')).toBe(
        'monthly',
      );
    });

    it('hydrates from localStorage on mount so a persona switch keeps the user on their chosen period', () => {
      // Simulate the user previously selecting Monthly, then a remount
      // from clicking the persona toggle (which navigates to the other
      // persona's page and re-mounts PricingV2Client from scratch).
      window.localStorage.setItem('pricingV2BillingPeriod', 'monthly');
      render(<PricingV2Client persona="professional" locale="en" />);
      // Monthly Professional prices: $25 / $50 / $100
      expect(screen.getByText('$25')).toBeInTheDocument();
      expect(screen.getByText('$50')).toBeInTheDocument();
      expect(screen.getByText('$100')).toBeInTheDocument();
    });

    it('still defaults to annual when no value is stored', () => {
      // localStorage cleared in beforeEach
      render(<PricingV2Client persona="business" locale="en" />);
      // Annual Business per-month: $42 / $125 / $208
      expect(screen.getByText('$42')).toBeInTheDocument();
      expect(screen.getByText('$125')).toBeInTheDocument();
      expect(screen.getByText('$208')).toBeInTheDocument();
    });
  });
});
