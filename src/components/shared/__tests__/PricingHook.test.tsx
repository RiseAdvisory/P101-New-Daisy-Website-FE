import { render, screen } from '@testing-library/react';
import { PricingHook } from '../PricingHook';

describe('PricingHook', () => {
  const defaultProps = {
    headline: 'Free to Start',
    body: '14-day free trial with full access.',
    ctaText: 'Start Free Trial',
    ctaLink: '/start-free-trial',
    pricingLinkText: 'See full pricing details',
    pricingLinkHref: '/pricing',
  };

  it('renders the headline', () => {
    render(<PricingHook {...defaultProps} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Free to Start');
  });

  it('renders the body text', () => {
    render(<PricingHook {...defaultProps} />);
    expect(screen.getByText('14-day free trial with full access.')).toBeInTheDocument();
  });

  it('renders the CTA link with correct href', () => {
    render(<PricingHook {...defaultProps} />);
    const ctaLink = screen.getByRole('link', { name: /start free trial/i });
    expect(ctaLink).toHaveAttribute('href', '/start-free-trial');
  });

  it('renders the pricing details link', () => {
    render(<PricingHook {...defaultProps} />);
    const pricingLink = screen.getByRole('link', { name: /see full pricing details/i });
    expect(pricingLink).toHaveAttribute('href', '/pricing');
  });
});
