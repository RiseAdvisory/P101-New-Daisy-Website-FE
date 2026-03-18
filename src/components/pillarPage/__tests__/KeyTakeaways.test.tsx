import { render, screen } from '@testing-library/react';
import { KeyTakeaways } from '../KeyTakeaways';

describe('KeyTakeaways', () => {
  it('renders heading and all takeaway items', () => {
    const takeaways = [
      'First takeaway point',
      'Second takeaway point',
      'Third takeaway point',
    ];
    render(<KeyTakeaways takeaways={takeaways} />);
    expect(screen.getByText('Key Takeaways')).toBeInTheDocument();
    expect(screen.getByText('First takeaway point')).toBeInTheDocument();
    expect(screen.getByText('Second takeaway point')).toBeInTheDocument();
    expect(screen.getByText('Third takeaway point')).toBeInTheDocument();
  });

  it('returns null when takeaways is empty', () => {
    const { container } = render(<KeyTakeaways takeaways={[]} />);
    expect(container.innerHTML).toBe('');
  });

  it('has data-geo-answer attribute for AI discoverability', () => {
    render(<KeyTakeaways takeaways={['A takeaway']} />);
    const wrapper = screen.getByText('Key Takeaways').closest('[data-geo-answer]');
    expect(wrapper).toHaveAttribute('data-geo-answer', 'true');
  });
});
