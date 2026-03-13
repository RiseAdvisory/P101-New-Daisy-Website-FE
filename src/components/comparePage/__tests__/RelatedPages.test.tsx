import { render, screen } from '@testing-library/react';
import { RelatedPages } from '../RelatedPages';

jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href}>{children}</a>;
  };
});

jest.mock('lucide-react', () => ({
  ArrowRight: () => <span data-testid="arrow-icon" />,
}));

describe('RelatedPages', () => {
  const links = [
    {
      title: 'Daisy vs Booksy',
      url: '/compare/daisy-vs-booksy',
      description: 'Compare Daisy and Booksy features.',
    },
    {
      title: 'Daisy vs Vagaro',
      url: '/compare/daisy-vs-vagaro',
      description: 'Compare Daisy and Vagaro features.',
    },
  ];

  it('renders nothing when links is empty', () => {
    const { container } = render(<RelatedPages links={[]} />);
    expect(container.innerHTML).toBe('');
  });

  it('renders link cards with titles', () => {
    render(<RelatedPages links={links} />);
    expect(screen.getByText('Daisy vs Booksy')).toBeInTheDocument();
    expect(screen.getByText('Daisy vs Vagaro')).toBeInTheDocument();
  });

  it('renders descriptions', () => {
    render(<RelatedPages links={links} />);
    expect(
      screen.getByText('Compare Daisy and Booksy features.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Compare Daisy and Vagaro features.')
    ).toBeInTheDocument();
  });

  it('links point to correct URLs', () => {
    render(<RelatedPages links={links} />);
    const linkElements = screen.getAllByRole('link');
    expect(linkElements[0]).toHaveAttribute('href', '/compare/daisy-vs-booksy');
    expect(linkElements[1]).toHaveAttribute('href', '/compare/daisy-vs-vagaro');
  });

  it('renders section title "Related Comparisons"', () => {
    render(<RelatedPages links={links} />);
    expect(screen.getByText('Related Comparisons')).toBeInTheDocument();
  });
});
