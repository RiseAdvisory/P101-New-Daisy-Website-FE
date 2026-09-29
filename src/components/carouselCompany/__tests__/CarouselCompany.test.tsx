import { render, screen } from '@testing-library/react';
import { CarouselCompany } from '../CarouselCompany';

// next/image throws on a null src, which is the bug under test. Render a plain
// <img> but reproduce that throw so the test fails if the guard is removed.
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string | null | undefined; alt: string }) => {
    if (src === null || src === undefined) {
      throw new TypeError("Cannot read properties of null (reading 'default')");
    }
    // eslint-disable-next-line @next/next/no-img-element -- this is a stub for next/image
    return <img src={src} alt={alt} />;
  },
}));

// The carousel primitives wrap embla, whose plugin handling needs a real DOM
// measurement pass. This test is about which items get rendered, not about
// embla, so stand the wrappers up as plain elements.
jest.mock('@/components/ui/carousel', () => ({
  Carousel: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="carousel">{children}</div>
  ),
  CarouselContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="carousel-content">{children}</div>
  ),
  CarouselItem: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="carousel-item">{children}</div>
  ),
}));

jest.mock('embla-carousel-autoplay', () => ({
  __esModule: true,
  default: () => ({
    name: 'autoplay',
    options: {},
    init: jest.fn(),
    destroy: jest.fn(),
  }),
}));

const vendor = (name: string, image: string | null) => ({ name, image });

describe('CarouselCompany', () => {
  it('renders a logo for each vendor that has an image', () => {
    render(
      <CarouselCompany
        data={[
          vendor('Zainas', '/logos/zainas.jpg'),
          vendor('Casa Moon', '/logos/casa-moon.jpg'),
        ]}
      />,
    );

    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getByAltText('Zainas')).toHaveAttribute(
      'src',
      '/logos/zainas.jpg',
    );
  });

  // The live vendors API returns records with image: null. Before the guard,
  // one of those in the randomly-selected batch crashed the whole section.
  it('skips vendors whose image is null instead of throwing', () => {
    expect(() =>
      render(
        <CarouselCompany
          data={[
            vendor('Zainas', '/logos/zainas.jpg'),
            vendor('No Logo Vendor', null),
            vendor('Casa Moon', '/logos/casa-moon.jpg'),
          ]}
        />,
      ),
    ).not.toThrow();

    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.queryByAltText('No Logo Vendor')).not.toBeInTheDocument();
  });

  it('skips vendors whose image is undefined or empty', () => {
    render(
      <CarouselCompany
        data={[
          vendor('Has Logo', '/logos/one.jpg'),
          { name: 'Missing Key' },
          vendor('Empty String', ''),
        ]}
      />,
    );

    expect(screen.getAllByRole('img')).toHaveLength(1);
    expect(screen.getByAltText('Has Logo')).toBeInTheDocument();
  });

  it('renders nothing when every vendor lacks an image', () => {
    render(
      <CarouselCompany data={[vendor('One', null), vendor('Two', null)]} />,
    );

    expect(screen.queryAllByRole('img')).toHaveLength(0);
  });

  it('handles an empty list and a missing list without throwing', () => {
    expect(() => render(<CarouselCompany data={[]} />)).not.toThrow();
    expect(() => render(<CarouselCompany data={undefined} />)).not.toThrow();
  });
});
