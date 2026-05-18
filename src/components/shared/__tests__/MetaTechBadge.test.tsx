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

  it('renders all three platform logos with inherited (currentColor) fills', () => {
    // Guards against accidentally re-introducing hardcoded brand colors
    // (Meta blue, WhatsApp green, Instagram gradient) on the dark hero bg.
    const { container } = render(<MetaTechBadge />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs).toHaveLength(3);
    svgs.forEach((svg) => {
      const path = svg.querySelector('path');
      expect(path).toHaveAttribute('fill', 'currentColor');
    });
  });
});
