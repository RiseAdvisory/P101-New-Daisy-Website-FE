import React from 'react';
import { render, screen } from '@testing-library/react';
import { TutorialCard } from '../TutorialCard';
import { TutorialArticle } from '@/lib/constants/tutorials/getTutorialArticles';

// Mock next/link
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

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock @/lib/utils/locale
jest.mock('@/lib/utils/locale', () => ({
  localePath: (path: string, locale: string) => `/${locale}${path}`,
}));

// Mock icons used inside TutorialCard
jest.mock('@/assets/icons/calendarIcon/CalendarIcon', () => ({
  CalendarIcon: () => <svg data-testid="calendar-icon" />,
}));

jest.mock('@/assets/icons/clockIcon/ClockIcon', () => ({
  ClockIcon: () => <svg data-testid="clock-icon" />,
}));

const mockArticle: TutorialArticle = {
  title: 'How to Set Up Online Booking for Your Salon',
  slug: 'online-booking-for-salons-setup-guide',
  description: 'A step-by-step guide to setting up online booking for your salon business.',
  image: '/images/blog/online-booking.webp',
  author: 'The Daisy Team',
  date: '15 January 2026',
  readTime: '6 min.',
  linkPath: '/resources/blog/businesses/online-booking-for-salons-setup-guide',
  source: 'blog',
};

describe('TutorialCard', () => {
  it('renders the article title', () => {
    render(<TutorialCard article={mockArticle} locale="en" />);
    expect(screen.getByText('How to Set Up Online Booking for Your Salon')).toBeInTheDocument();
  });

  it('renders the article description', () => {
    render(<TutorialCard article={mockArticle} locale="en" />);
    expect(
      screen.getByText(
        'A step-by-step guide to setting up online booking for your salon business.',
      ),
    ).toBeInTheDocument();
  });

  it('renders a link with the locale-prefixed href', () => {
    render(<TutorialCard article={mockArticle} locale="en" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute(
      'href',
      '/en/resources/blog/businesses/online-booking-for-salons-setup-guide',
    );
  });

  it('renders the date when provided', () => {
    render(<TutorialCard article={mockArticle} locale="en" />);
    expect(screen.getByText('15 January 2026')).toBeInTheDocument();
  });

  it('renders the readTime when provided', () => {
    render(<TutorialCard article={mockArticle} locale="en" />);
    expect(screen.getByText('6 min.')).toBeInTheDocument();
  });

  it('does NOT render the date when date is an empty string', () => {
    const articleWithoutDate: TutorialArticle = { ...mockArticle, date: '' };
    render(<TutorialCard article={articleWithoutDate} locale="en" />);
    // date span should not be present
    expect(screen.queryByTestId('calendar-icon')).not.toBeInTheDocument();
  });

  it('renders an image with the correct alt text', () => {
    render(<TutorialCard article={mockArticle} locale="en" />);
    const img = screen.getByAltText('How to Set Up Online Booking for Your Salon');
    expect(img).toBeInTheDocument();
  });

  it('applies locale prefix correctly for Arabic locale', () => {
    render(<TutorialCard article={mockArticle} locale="ar" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute(
      'href',
      '/ar/resources/blog/businesses/online-booking-for-salons-setup-guide',
    );
  });

  it('renders a guide article link correctly', () => {
    const guideArticle: TutorialArticle = {
      ...mockArticle,
      slug: 'set-up-online-booking-salon',
      linkPath: '/guides/set-up-online-booking-salon',
      source: 'guide',
    };
    render(<TutorialCard article={guideArticle} locale="en" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/en/guides/set-up-online-booking-salon');
  });
});
