import { render, screen } from '@testing-library/react';
import { ComparisonHero } from '../ComparisonHero';

jest.mock('@/lib/utils', () => ({
  cn: (...args: unknown[]) => args.filter(Boolean).join(' '),
}));

describe('ComparisonHero', () => {
  const defaultProps = {
    title: 'Daisy vs Fresha',
    subtitle: 'Compare the two platforms',
  };

  it('renders title and subtitle', () => {
    render(<ComparisonHero {...defaultProps} variant="daisy-vs" />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Daisy vs Fresha' })
    ).toBeInTheDocument();
    expect(
      screen.getByText('Compare the two platforms')
    ).toBeInTheDocument();
  });

  it.each([
    ['daisy-vs', 'Head-to-Head Comparison'],
    ['alternative', 'Alternative Guide'],
    ['best-alternatives', 'Top Alternatives'],
    ['competitor-vs', 'Software Comparison'],
    ['solution', 'Solution Overview'],
  ] as const)(
    'displays correct badge text for variant "%s"',
    (variant, expectedBadge) => {
      render(
        <ComparisonHero {...defaultProps} variant={variant} />
      );
      expect(screen.getByText(expectedBadge)).toBeInTheDocument();
    }
  );
});
