import { render, screen } from '@testing-library/react';
import { InlineCTA } from '../InlineCTA';

describe('InlineCTA', () => {
  const defaultProps = {
    headline: 'Ready to get started?',
    ctaText: 'Start Free Trial',
    ctaLink: '/start-free-trial',
  };

  it('renders the headline', () => {
    render(<InlineCTA {...defaultProps} />);
    expect(screen.getByText('Ready to get started?')).toBeInTheDocument();
  });

  it('renders the CTA link with correct href', () => {
    render(<InlineCTA {...defaultProps} />);
    const link = screen.getByRole('link', { name: /start free trial/i });
    expect(link).toHaveAttribute('href', '/start-free-trial');
  });

  it('renders the CTA text', () => {
    render(<InlineCTA {...defaultProps} />);
    expect(screen.getByText('Start Free Trial')).toBeInTheDocument();
  });
});
