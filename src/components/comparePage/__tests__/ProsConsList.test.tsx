import { render, screen } from '@testing-library/react';
import { ProsConsList } from '../ProsConsList';

jest.mock('lucide-react', () => ({
  Check: () => <span data-testid="check-icon" />,
  X: () => <span data-testid="x-icon" />,
}));

describe('ProsConsList', () => {
  const defaultProps = {
    pros: ['Great support', 'Fair pricing'],
    cons: ['Limited features', 'No AI'],
    title: 'Fresha',
  };

  it('renders the title', () => {
    render(<ProsConsList {...defaultProps} />);
    expect(screen.getByText('Fresha')).toBeInTheDocument();
  });

  it('renders "Strengths" and "Limitations" headers', () => {
    render(<ProsConsList {...defaultProps} />);
    expect(screen.getByText('Strengths')).toBeInTheDocument();
    expect(screen.getByText('Limitations')).toBeInTheDocument();
  });

  it('renders all pros items', () => {
    render(<ProsConsList {...defaultProps} />);
    expect(screen.getByText('Great support')).toBeInTheDocument();
    expect(screen.getByText('Fair pricing')).toBeInTheDocument();
  });

  it('renders all cons items', () => {
    render(<ProsConsList {...defaultProps} />);
    expect(screen.getByText('Limited features')).toBeInTheDocument();
    expect(screen.getByText('No AI')).toBeInTheDocument();
  });

  it('renders check icons for pros', () => {
    render(<ProsConsList {...defaultProps} />);
    const checkIcons = screen.getAllByTestId('check-icon');
    // One in the header + one per pro item
    expect(checkIcons.length).toBe(defaultProps.pros.length + 1);
  });

  it('renders X icons for cons', () => {
    render(<ProsConsList {...defaultProps} />);
    const xIcons = screen.getAllByTestId('x-icon');
    // One in the header + one per con item
    expect(xIcons.length).toBe(defaultProps.cons.length + 1);
  });
});
