import { render, screen } from '@testing-library/react';
import { SocialProofBar } from '../SocialProofBar';

describe('SocialProofBar', () => {
  const defaultStats = [
    { value: '8', context: 'tools replaced' },
    { value: '24/7', context: 'AI receptionist' },
    { value: '10+', context: 'languages supported' },
  ];

  it('renders all stat values', () => {
    render(<SocialProofBar stats={defaultStats} />);
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
    expect(screen.getByText('10+')).toBeInTheDocument();
  });

  it('renders stat contexts', () => {
    render(<SocialProofBar stats={defaultStats} />);
    expect(screen.getByText('tools replaced')).toBeInTheDocument();
    expect(screen.getByText('AI receptionist')).toBeInTheDocument();
    expect(screen.getByText('languages supported')).toBeInTheDocument();
  });
});
