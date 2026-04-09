import { render, screen } from '@testing-library/react';
import { MetaTechBadge } from '../MetaTechBadge';

describe('MetaTechBadge', () => {
  it('renders English label by default', () => {
    render(<MetaTechBadge />);
    expect(
      screen.getByText('Official Meta Tech Provider'),
    ).toBeInTheDocument();
  });

  it('renders Arabic label when locale is ar', () => {
    render(<MetaTechBadge locale="ar" />);
    expect(screen.getByText('مزود تقنية Meta رسمي')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<MetaTechBadge className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders SVG icon with aria-hidden', () => {
    const { container } = render(<MetaTechBadge />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });
});
