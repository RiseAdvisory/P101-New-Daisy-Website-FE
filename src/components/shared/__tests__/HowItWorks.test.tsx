import { render, screen } from '@testing-library/react';
import { HowItWorks } from '../HowItWorks';

describe('HowItWorks', () => {
  const defaultSteps = [
    { title: 'Sign up', description: 'Takes 5 minutes.' },
    { title: 'Get set up', description: 'We help you configure everything.' },
    { title: 'Go live', description: 'Start accepting bookings.' },
  ];

  it('renders the "How It Works" heading', () => {
    render(<HowItWorks steps={defaultSteps} />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('How It Works');
  });

  it('renders all 3 steps', () => {
    render(<HowItWorks steps={defaultSteps} />);
    expect(screen.getByText('Sign up')).toBeInTheDocument();
    expect(screen.getByText('Get set up')).toBeInTheDocument();
    expect(screen.getByText('Go live')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<HowItWorks steps={defaultSteps} />);
    expect(screen.getByText('Takes 5 minutes.')).toBeInTheDocument();
    expect(screen.getByText('We help you configure everything.')).toBeInTheDocument();
    expect(screen.getByText('Start accepting bookings.')).toBeInTheDocument();
  });

  it('renders step numbers', () => {
    render(<HowItWorks steps={defaultSteps} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
