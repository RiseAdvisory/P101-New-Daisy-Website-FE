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
