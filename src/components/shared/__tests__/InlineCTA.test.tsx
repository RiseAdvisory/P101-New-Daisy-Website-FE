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

// GetStartedButton reads the pathname to derive its utm_campaign slug.
jest.mock('next/navigation', () => ({
  usePathname: () => '/en/business',
}));

describe('InlineCTA — paired signup and download CTAs', () => {
  const paired = {
    headline: 'Ready to get started?',
    ctaText: 'Download the app',
    ctaLink: '/get-the-app',
    showGetStarted: true,
  };

  it('labels the two actions by destination, not by the same offer', () => {
    // Both buttons used to promise starting a free trial, which is true of
    // either path and so told the visitor nothing about which to pick.
    render(<InlineCTA {...paired} locale="en" />);

    expect(
      screen.getByRole('link', { name: 'Start free trial' }),
    ).toBeInTheDocument();
    const download = screen.getByRole('link', { name: 'Download the app' });
    expect(download).toHaveAttribute('href', '/get-the-app');
  });

  it('carries the trial promise once, under the pair', () => {
    render(<InlineCTA {...paired} locale="en" />);
    expect(
      screen.getByText('14 days free. No card required.'),
    ).toBeInTheDocument();
  });

  it('renders the trial promise in Arabic', () => {
    render(<InlineCTA {...paired} locale="ar" />);
    expect(screen.getByText('14 يوماً مجاناً. بدون بطاقة.')).toBeInTheDocument();
  });

  it('sends the signup CTA to the web app, not the app stores', () => {
    render(<InlineCTA {...paired} locale="en" />);
    const signup = screen.getByRole('link', { name: 'Start free trial' });
    expect(signup.getAttribute('href')).toContain('trythedaisy.com');
  });

  it('shows neither the signup CTA nor the trial line when not opted in', () => {
    // The app-store path must never be replaced by accident.
    render(
      <InlineCTA
        headline="Ready?"
        ctaText="Download the app"
        ctaLink="/get-the-app"
        locale="en"
      />,
    );
    expect(
      screen.queryByRole('link', { name: 'Start free trial' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('14 days free. No card required.'),
    ).not.toBeInTheDocument();
  });
});
