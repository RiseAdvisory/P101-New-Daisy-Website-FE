import { render, screen } from '@testing-library/react';
import { SocialProofBar } from '../SocialProofBar';

// Mock StatisticHighlight
jest.mock('@/components/geo/StatisticHighlight', () => ({
  StatisticHighlight: ({ value, context }: { value: string; context: string }) => (
    <span data-testid="stat">{value} {context}</span>
  ),
}));

describe('SocialProofBar', () => {
  const defaultStats = [
    { value: '8', context: 'tools replaced' },
    { value: '24/7', context: 'AI receptionist' },
    { value: '10+', context: 'languages supported' },
  ];

  it('renders all stats', () => {
    render(<SocialProofBar stats={defaultStats} />);
    const stats = screen.getAllByTestId('stat');
    expect(stats).toHaveLength(3);
  });

  it('renders stat values and contexts', () => {
    render(<SocialProofBar stats={defaultStats} />);
    expect(screen.getByText('8 tools replaced')).toBeInTheDocument();
    expect(screen.getByText('24/7 AI receptionist')).toBeInTheDocument();
    expect(screen.getByText('10+ languages supported')).toBeInTheDocument();
  });
});
