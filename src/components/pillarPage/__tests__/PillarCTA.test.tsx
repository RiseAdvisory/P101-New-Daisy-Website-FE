import { render, screen } from '@testing-library/react';
import { PillarCTA } from '../PillarCTA';

jest.mock('next/link', () => {
  function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  }
  return MockLink;
});

describe('PillarCTA', () => {
  it('renders default title and subtitle', () => {
    render(<PillarCTA />);
    expect(screen.getByText('Ready to Grow Your Business?')).toBeInTheDocument();
    expect(screen.getByText('Try Daisy free for 14 days. No credit card required.')).toBeInTheDocument();
  });

  it('renders custom title and subtitle', () => {
    render(<PillarCTA title="Custom Title" subtitle="Custom subtitle text" />);
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom subtitle text')).toBeInTheDocument();
  });

  it('renders Start Free Trial link', () => {
    render(<PillarCTA />);
    const link = screen.getByText('Start Free Trial');
    expect(link.closest('a')).toHaveAttribute('href', '/get-the-app');
  });

  it('renders View Pricing link', () => {
    render(<PillarCTA />);
    const link = screen.getByText('View Pricing');
    expect(link.closest('a')).toHaveAttribute('href', '/pricing');
  });
});
