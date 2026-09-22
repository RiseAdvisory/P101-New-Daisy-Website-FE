import { render, screen } from '@testing-library/react';
import { TestimonialsCustomerList } from '../ListTestimonials';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/en/resources/testimonials'),
}));

jest.mock('@/app/MyContext', () => ({
  useMyContext: () => ({ userChange: '/business', setUserChange: jest.fn() }),
}));

jest.mock('@/lib/constants/resources/resourcesData', () => ({
  testimonialsListByUserType: {
    business: [
      {
        attributes: {
          sortId: 2,
          iconOwner: {
            data: [{ attributes: { url: '/images/testimonials/x.webp' } }],
          },
          listTestimonials: {
            text: 'Headline Nora S.',
            description: 'Body copy from Nora S.',
            author: 'Nora S.',
            role: 'Salon Owner',
          },
        },
      },
      {
        attributes: {
          sortId: 1,
          iconOwner: { data: [] },
          listTestimonials: {
            text: 'Headline Ahmed F.',
            description: 'Body copy from Ahmed F.',
            author: 'Ahmed F.',
            role: 'Spa Manager',
          },
        },
      },
    ],
  },
}));

describe('TestimonialsCustomerList', () => {
  it('renders the author name and role for each testimonial', () => {
    render(<TestimonialsCustomerList textMore="Load more" />);

    expect(screen.getByText('Nora S.')).toBeInTheDocument();
    expect(screen.getByText('Salon Owner')).toBeInTheDocument();
    expect(screen.getByText('Ahmed F.')).toBeInTheDocument();
    expect(screen.getByText('Spa Manager')).toBeInTheDocument();
  });

  it('shows initials in place of an avatar image', () => {
    render(<TestimonialsCustomerList textMore="Load more" />);

    expect(screen.getByText('NS')).toBeInTheDocument();
    expect(screen.getByText('AF')).toBeInTheDocument();
  });

  // public/images/testimonials/ does not exist, so any <img> here would 404.
  it('renders no images at all', () => {
    const { container } = render(
      <TestimonialsCustomerList textMore="Load more" />,
    );

    expect(container.querySelectorAll('img')).toHaveLength(0);
  });

  it('still renders when a testimonial has no icon data', () => {
    // The second fixture has iconOwner.data: [] — previously this fell back to
    // a default avatar file that does not exist.
    expect(() =>
      render(<TestimonialsCustomerList textMore="Load more" />),
    ).not.toThrow();

    expect(screen.getByText('AF')).toBeInTheDocument();
  });

  it('hides the initials from assistive tech, since the name is adjacent', () => {
    render(<TestimonialsCustomerList textMore="Load more" />);

    const initials = screen.getByText('NS');
    expect(initials).toHaveAttribute('aria-hidden', 'true');
    // The name itself stays readable to screen readers.
    expect(screen.getByText('Nora S.')).not.toHaveAttribute('aria-hidden');
  });

  it('does not show the load-more button when everything already fits', () => {
    render(<TestimonialsCustomerList textMore="Load more" />);

    expect(screen.queryByRole('button', { name: 'Load more' })).toBeNull();
  });
});
