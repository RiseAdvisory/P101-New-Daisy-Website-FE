import { render, screen } from '@testing-library/react';
import { PlatformStrengths } from '../PlatformStrengths';

// Mock StatisticHighlight
jest.mock('@/components/geo/StatisticHighlight', () => ({
  StatisticHighlight: ({ value, context }: { value: string; context: string }) => (
    <span data-testid="stat">{value} {context}</span>
  ),
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => {
  const MockIcon = ({ className }: { className?: string }) => (
    <svg data-testid="icon" className={className} />
  );
  MockIcon.displayName = 'MockIcon';
  return new Proxy({} as Record<string, typeof MockIcon>, {
    get: () => MockIcon,
  });
});

describe('PlatformStrengths', () => {
  const defaultProps = {
    headline: 'One Platform',
    subHeadline: 'Replace your tools',
    capabilities: [
      { label: 'Booking', description: 'Smart scheduling' },
      { label: 'Payments', description: 'Seamless transactions' },
    ],
    stats: [
      { value: '8', context: 'tools in one' },
      { value: '24/7', context: 'AI support' },
    ],
  };

  it('renders headline as h2', () => {
    render(<PlatformStrengths {...defaultProps} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('One Platform');
  });

  it('renders all capabilities', () => {
    render(<PlatformStrengths {...defaultProps} />);
    expect(screen.getByText('Booking')).toBeInTheDocument();
    expect(screen.getByText('Payments')).toBeInTheDocument();
    expect(screen.getByText('Smart scheduling')).toBeInTheDocument();
  });

  it('renders stats', () => {
    render(<PlatformStrengths {...defaultProps} />);
    const stats = screen.getAllByTestId('stat');
    expect(stats).toHaveLength(2);
    expect(stats[0]).toHaveTextContent('8 tools in one');
  });

  it('renders capability descriptions', () => {
    render(<PlatformStrengths {...defaultProps} />);
    expect(screen.getByText('Seamless transactions')).toBeInTheDocument();
  });

  it('renders subHeadline', () => {
    render(<PlatformStrengths {...defaultProps} />);
    expect(screen.getByText('Replace your tools')).toBeInTheDocument();
  });
});
