import { render, screen } from '@testing-library/react';
import { LandingHero } from '../LandingHero';

// Mock AnswerBlock
jest.mock('@/components/geo/AnswerBlock', () => ({
  AnswerBlock: ({ question, answer }: { question: string; answer: string }) => (
    <div data-testid="answer-block">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  ),
}));

describe('LandingHero', () => {
  const defaultProps = {
    categoryLabel: 'FOR BUSINESS OWNERS',
    headline: 'Test Headline',
    subHeadline: 'Test sub-headline text',
    ctaText: 'Start Free Trial',
    ctaLink: '/get-the-app',
  };

  it('renders the headline as h1', () => {
    render(<LandingHero {...defaultProps} />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Test Headline');
  });

  it('renders category label', () => {
    render(<LandingHero {...defaultProps} />);
    expect(screen.getByText('FOR BUSINESS OWNERS')).toBeInTheDocument();
  });

  it('renders CTA link', () => {
    render(<LandingHero {...defaultProps} />);
    const link = screen.getByRole('link', { name: /start free trial/i });
    expect(link).toHaveAttribute('href', '/get-the-app');
  });

  it('renders answer block when provided', () => {
    render(
      <LandingHero
        {...defaultProps}
        answerBlock={{
          question: 'What is The Daisy?',
          answer: 'An AI-powered platform.',
        }}
      />,
    );
    expect(screen.getByText('What is The Daisy?')).toBeInTheDocument();
    expect(screen.getByText('An AI-powered platform.')).toBeInTheDocument();
  });

  it('does not render answer block when not provided', () => {
    render(<LandingHero {...defaultProps} />);
    expect(screen.queryByTestId('geo-answer')).not.toBeInTheDocument();
  });

  it('renders trust line when provided', () => {
    render(
      <LandingHero
        {...defaultProps}
        trustLine="No credit card required."
      />,
    );
    expect(screen.getByText('No credit card required.')).toBeInTheDocument();
  });

  it('does not render trust line when not provided', () => {
    render(<LandingHero {...defaultProps} />);
    expect(screen.queryByText('No credit card required.')).not.toBeInTheDocument();
  });
});

// GetStartedButton derives its utm_campaign slug from the pathname.
jest.mock('next/navigation', () => ({
  usePathname: () => '/en/business',
}));

describe('LandingHero — hero CTA destination', () => {
  const base = {
    categoryLabel: 'FOR BUSINESS OWNERS',
    headline: 'Every Customer Message Answered.',
    subHeadline: 'One platform replaces your front desk.',
    ctaText: 'Start Your 14-Day Free Trial',
    ctaLink: '/get-the-app',
  };

  it('sends the hero to web signup when opted in, keeping the trial wording', () => {
    // The hero is the most valuable slot on the page. Pointing it at the app
    // stores dropped the trial offer and routed past the signup funnel,
    // where store redirects destroy attribution.
    render(<LandingHero {...base} ctaToSignup />);

    const cta = screen.getByRole('link', {
      name: 'Start Your 14-Day Free Trial',
    });
    expect(cta.getAttribute('href')).toContain('trythedaisy.com');
    expect(cta.getAttribute('href')).not.toContain('get-the-app');
  });

  it('attaches attribution to the hero CTA', () => {
    render(<LandingHero {...base} ctaToSignup />);
    const href = screen
      .getByRole('link', { name: 'Start Your 14-Day Free Trial' })
      .getAttribute('href')!;
    expect(href).toMatch(/utm_source=/);
  });

  it('still uses ctaLink when not opted in', () => {
    render(<LandingHero {...base} />);
    const cta = screen.getByRole('link', {
      name: 'Start Your 14-Day Free Trial',
    });
    expect(cta).toHaveAttribute('href', '/get-the-app');
  });

  it('renders exactly one hero CTA, not a pair', () => {
    // The destination labelling used lower down exists to tell two adjacent
    // buttons apart. There is nothing to disambiguate here.
    const { container } = render(<LandingHero {...base} ctaToSignup />);
    const ctas = [...container.querySelectorAll('a')].filter((a) =>
      /trial|download/i.test(a.textContent || ''),
    );
    expect(ctas).toHaveLength(1);
  });
});
