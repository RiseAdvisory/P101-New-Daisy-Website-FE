import { render, screen } from '@testing-library/react';
import { PricingCardV2 } from '../PricingCardV2';
import type { PricingTierV2 } from '@/lib/constants/pricing/v2/pricingV2Business';
import {
  UI_STRINGS,
  type UIStrings,
} from '@/lib/constants/pricing/v2/pricingV2Shared';

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

const baseTier: PricingTierV2 = {
  id: 'growth',
  title: 'Growth',
  oneLiner: '6 to 10 chairs across 1 or 2 branches.',
  monthlyPrice: 150,
  annualTotal: 1500,
  annualPerMonth: 125,
  annualSavingsLine: 'Save $300 (2 Months Free)',
  cardHighlights: [
    '10 team members, 2 locations',
    'Online payments',
    'Cashback promotions',
  ],
};

const uiEn: UIStrings = UI_STRINGS.en;

describe('PricingCardV2', () => {
  it('shows the monthly price when billingPeriod=monthly', () => {
    render(
      <PricingCardV2
        tier={baseTier}
        billingPeriod="monthly"
        locale="en"
        ui={uiEn}
      />,
    );
    expect(screen.getByText('$150')).toBeInTheDocument();
    expect(screen.queryByText('$125')).not.toBeInTheDocument();
    expect(
      screen.getByText(/Billed monthly\. Cancel anytime\./i),
    ).toBeInTheDocument();
  });

  it('shows the annual-per-month price + savings line when billingPeriod=annual', () => {
    render(
      <PricingCardV2
        tier={baseTier}
        billingPeriod="annual"
        locale="en"
        ui={uiEn}
      />,
    );
    expect(screen.getByText('$125')).toBeInTheDocument();
    expect(screen.queryByText('$150')).not.toBeInTheDocument();
    // The cardBilledAnnually() builder produces "Billed annually at $1500. Save $300 (2 Months Free)."
    expect(
      screen.getByText(/Billed annually at \$1500/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Save \$300 \(2 Months Free\)/i),
    ).toBeInTheDocument();
  });

  it('renders the Most Popular ribbon when isMostPopular=true', () => {
    render(
      <PricingCardV2
        tier={{ ...baseTier, isMostPopular: true }}
        billingPeriod="monthly"
        locale="en"
        ui={uiEn}
      />,
    );
    expect(screen.getByText(/most popular/i)).toBeInTheDocument();
  });

  it('does NOT render the Most Popular ribbon by default', () => {
    render(
      <PricingCardV2
        tier={baseTier}
        billingPeriod="monthly"
        locale="en"
        ui={uiEn}
      />,
    );
    expect(screen.queryByText(/most popular/i)).not.toBeInTheDocument();
  });

  it('renders every card highlight bullet', () => {
    render(
      <PricingCardV2
        tier={baseTier}
        billingPeriod="monthly"
        locale="en"
        ui={uiEn}
      />,
    );
    for (const highlight of baseTier.cardHighlights) {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    }
  });

  it('CTA link points at the locale-prefixed /get-the-app', () => {
    render(
      <PricingCardV2
        tier={baseTier}
        billingPeriod="monthly"
        locale="en"
        ui={uiEn}
      />,
    );
    const link = screen.getByRole('link', { name: /start free trial/i });
    expect(link).toHaveAttribute('href', '/en/get-the-app');
  });

  it('respects the Arabic locale prefix on the CTA', () => {
    render(
      <PricingCardV2
        tier={baseTier}
        billingPeriod="monthly"
        locale="ar"
        ui={uiEn}
      />,
    );
    const link = screen.getByRole('link', { name: /start free trial/i });
    expect(link).toHaveAttribute('href', '/ar/get-the-app');
  });

  it('renders Arabic UI labels when given the Arabic UI bundle', () => {
    render(
      <PricingCardV2
        tier={{ ...baseTier, isMostPopular: true }}
        billingPeriod="monthly"
        locale="ar"
        ui={UI_STRINGS.ar}
      />,
    );
    // Most Popular badge → Arabic translation
    expect(screen.getByText(UI_STRINGS.ar.mostPopularBadge)).toBeInTheDocument();
    // CTA → Arabic translation
    expect(
      screen.getByRole('link', { name: UI_STRINGS.ar.cardCtaLabel }),
    ).toBeInTheDocument();
  });
});
