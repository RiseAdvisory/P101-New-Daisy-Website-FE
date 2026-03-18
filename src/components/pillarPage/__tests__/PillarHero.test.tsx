import { render, screen } from '@testing-library/react';
import { PillarHero } from '../PillarHero';

jest.mock('next/link', () => {
  function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  }
  return MockLink;
});

describe('PillarHero', () => {
  const defaultProps = {
    title: 'The Complete Guide to Salon Software',
    subtitle: 'Everything you need to know about salon management.',
    readingTime: '18 min read',
    lastUpdated: '2026-03-18T00:00:00.000Z',
    breadcrumbTitle: 'Salon Management Software',
  };

  it('renders title as h1', () => {
    render(<PillarHero {...defaultProps} />);
    expect(
      screen.getByRole('heading', { level: 1 })
    ).toHaveTextContent('The Complete Guide to Salon Software');
  });

  it('renders subtitle', () => {
    render(<PillarHero {...defaultProps} />);
    expect(
      screen.getByText('Everything you need to know about salon management.')
    ).toBeInTheDocument();
  });

  it('renders reading time', () => {
    render(<PillarHero {...defaultProps} />);
    expect(screen.getByText('18 min read')).toBeInTheDocument();
  });

  it('renders formatted date', () => {
    render(<PillarHero {...defaultProps} />);
    expect(screen.getByText(/March 18, 2026/)).toBeInTheDocument();
  });

  it('renders breadcrumb with Home link', () => {
    render(<PillarHero {...defaultProps} />);
    const homeLink = screen.getByText('Home');
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders breadcrumb title', () => {
    render(<PillarHero {...defaultProps} />);
    expect(screen.getByText('Salon Management Software')).toBeInTheDocument();
  });
});
