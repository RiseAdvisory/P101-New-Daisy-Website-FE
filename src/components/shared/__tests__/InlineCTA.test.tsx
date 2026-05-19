import { render, screen } from '@testing-library/react';
import { InlineCTA } from '../InlineCTA';

describe('InlineCTA', () => {
  const defaultProps = {
    headline: 'Ready to get started?',
    ctaText: 'Start Free Trial',
    ctaLink: '/get-the-app',
  };

  it('renders the headline', () => {
    render(<InlineCTA {...defaultProps} />);
    expect(screen.getByText('Ready to get started?')).toBeInTheDocument();
  });

  it('renders the CTA link with correct href', () => {
    render(<InlineCTA {...defaultProps} />);
    const link = screen.getByRole('link', { name: /start free trial/i });
    expect(link).toHaveAttribute('href', '/get-the-app');
  });

  it('renders the CTA text', () => {
    render(<InlineCTA {...defaultProps} />);
    expect(screen.getByText('Start Free Trial')).toBeInTheDocument();
  });
});
