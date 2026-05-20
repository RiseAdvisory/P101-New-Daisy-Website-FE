import { render, screen, within } from '@testing-library/react';
import { ComparisonTableV2 } from '../ComparisonTableV2';
import type {
  FeatureCategory,
} from '@/lib/constants/pricing/v2/pricingV2Shared';
import type { PricingTierV2 } from '@/lib/constants/pricing/v2/pricingV2Business';

const tiers: PricingTierV2[] = [
  {
    id: 'basic',
    title: 'Basic',
    oneLiner: 'x',
    monthlyPrice: 50,
    annualTotal: 500,
    annualPerMonth: 42,
    annualSavingsLine: 'Save $100',
    cardHighlights: [],
    ctaLabel: 'Start',
  },
  {
    id: 'growth',
    title: 'Growth',
    oneLiner: 'y',
    monthlyPrice: 150,
    annualTotal: 1500,
    annualPerMonth: 125,
    annualSavingsLine: 'Save $300',
    cardHighlights: [],
    ctaLabel: 'Start',
  },
  {
    id: 'business',
    title: 'Business',
    oneLiner: 'z',
    monthlyPrice: 250,
    annualTotal: 2500,
    annualPerMonth: 208,
    annualSavingsLine: 'Save $500',
    cardHighlights: [],
    ctaLabel: 'Start',
  },
];

const categories: FeatureCategory[] = [
  {
    title: 'Scale & seats',
    rows: [
      { name: 'Team members / calendars', values: ['5', '10', '15'] },
      { name: 'Bookings per month', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
    ],
  },
  {
    title: 'AI features',
    rows: [
      {
        name: 'AI Receptionist',
        note: '1,000 free credits at signup',
        values: [true, true, true],
      },
      { name: 'Advanced AI Customization', values: [undefined, undefined, true] },
      { name: 'Booleans should also render', values: [false, true, true] },
    ],
  },
];

describe('ComparisonTableV2', () => {
  it('renders the tier names in the header', () => {
    render(<ComparisonTableV2 categories={categories} tiers={tiers} />);
    expect(screen.getByRole('columnheader', { name: 'Basic' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Growth' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Business' })).toBeInTheDocument();
  });

  it('renders every category title', () => {
    render(<ComparisonTableV2 categories={categories} tiers={tiers} />);
    expect(screen.getByText('Scale & seats')).toBeInTheDocument();
    expect(screen.getByText('AI features')).toBeInTheDocument();
  });

  it('renders string values as visible text in the matching cell', () => {
    render(<ComparisonTableV2 categories={categories} tiers={tiers} />);
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    // "Unlimited" appears 3x (one per tier on the bookings row)
    expect(screen.getAllByText('Unlimited')).toHaveLength(3);
  });

  it('renders a checkmark for boolean true values', () => {
    render(<ComparisonTableV2 categories={categories} tiers={tiers} />);
    // AI Receptionist row: 3 true values → 3 checkmarks for that row.
    // We can't easily isolate per row, but we can assert checkmark icons exist.
    const checks = screen.getAllByLabelText('Included');
    expect(checks.length).toBeGreaterThanOrEqual(3);
  });

  it('renders a dash (Not included icon) for undefined and false values', () => {
    render(<ComparisonTableV2 categories={categories} tiers={tiers} />);
    // Advanced AI Customization row has 2 undefined values
    // "Booleans should also render" row has 1 false value
    const dashes = screen.getAllByLabelText('Not included');
    expect(dashes.length).toBeGreaterThanOrEqual(3);
  });

  it('shows the feature note text when provided', () => {
    render(<ComparisonTableV2 categories={categories} tiers={tiers} />);
    expect(screen.getByText('1,000 free credits at signup')).toBeInTheDocument();
  });

  it('feature row names are visible inside their category', () => {
    render(<ComparisonTableV2 categories={categories} tiers={tiers} />);
    expect(screen.getByText('Team members / calendars')).toBeInTheDocument();
    expect(screen.getByText('AI Receptionist')).toBeInTheDocument();
    expect(screen.getByText('Advanced AI Customization')).toBeInTheDocument();
  });

  it('uses a single <table> (not nested) so columns stay aligned', () => {
    const { container } = render(
      <ComparisonTableV2 categories={categories} tiers={tiers} />,
    );
    // The whole comparison is one table with category-header rows inside.
    const tables = container.querySelectorAll('table');
    expect(tables.length).toBe(1);
  });

  it('renders a <colgroup> so all column widths are locked at the table level', () => {
    const { container } = render(
      <ComparisonTableV2 categories={categories} tiers={tiers} />,
    );
    const colgroup = container.querySelector('colgroup');
    expect(colgroup).not.toBeNull();
    // One col for the feature column + one per tier.
    const cols = colgroup?.querySelectorAll('col');
    expect(cols?.length).toBe(tiers.length + 1);
  });

  it('renders each category title as a full-width header row', () => {
    render(<ComparisonTableV2 categories={categories} tiers={tiers} />);
    for (const category of categories) {
      const headerCell = screen.getByText(category.title);
      expect(headerCell.tagName.toLowerCase()).toBe('td');
      // colSpan covers all columns (feature + tiers).
      expect(headerCell).toHaveAttribute('colspan', String(tiers.length + 1));
    }
  });

  it('keeps the row-to-cell layout aligned for every feature row', () => {
    const { container } = render(
      <ComparisonTableV2 categories={categories} tiers={tiers} />,
    );
    const row = screen.getByText('Team members / calendars').closest('tr');
    expect(row).not.toBeNull();
    if (row) {
      const cells = within(row).getAllByRole('cell');
      // 1 name cell + 1 per tier = 4 total
      expect(cells.length).toBe(tiers.length + 1);
    }
    expect(container).toBeTruthy();
  });
});
