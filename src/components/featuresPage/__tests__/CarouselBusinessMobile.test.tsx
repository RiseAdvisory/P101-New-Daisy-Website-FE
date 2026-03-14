import { render, screen } from '@testing-library/react';
import { CarouselBusinessMobile } from '../CarouselBusinessMobile';

jest.mock('next/image', () => {
  return function MockImage(props: any) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  };
});

jest.mock('embla-carousel-autoplay', () => {
  return jest.fn(() => ({}));
});

jest.mock('@/components/ui/carousel', () => ({
  Carousel: ({ children, ...props }: any) => (
    <div data-testid="carousel" {...props}>
      {children}
    </div>
  ),
  CarouselContent: ({ children }: any) => <div>{children}</div>,
  CarouselItem: ({ children }: any) => <div>{children}</div>,
}));

const makeBusinessData = (overrides: Record<string, any> = {}) => ({
  firstImage: {
    data: [
      { attributes: { url: '/images/features/business/first-desktop.png' } },
    ],
  },
  secondImage: {
    data: [
      { attributes: { url: '/images/features/business/second-desktop.png' } },
    ],
  },
  thirdImage: {
    data: [
      { attributes: { url: '/images/features/business/third-desktop.png' } },
    ],
  },
  firstImageStyle: { width: '220px' },
  secondImageStyle: { width: '250px' },
  thirdImageStyle: { width: '220px' },
  ...overrides,
});

describe('CarouselBusinessMobile', () => {
  it('uses desktop images when no mobile images are provided', () => {
    render(<CarouselBusinessMobile dataBusiness={makeBusinessData()} />);

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute(
      'src',
      '/images/features/business/first-desktop.png',
    );
    expect(images[1]).toHaveAttribute(
      'src',
      '/images/features/business/second-desktop.png',
    );
    expect(images[2]).toHaveAttribute(
      'src',
      '/images/features/business/third-desktop.png',
    );
  });

  it('uses mobile images when provided', () => {
    const data = makeBusinessData({
      firstMobileImage: {
        data: [
          {
            attributes: {
              url: '/images/features/business/first-mobile.png',
            },
          },
        ],
      },
      secondMobileImage: {
        data: [
          {
            attributes: {
              url: '/images/features/business/second-mobile.png',
            },
          },
        ],
      },
      thirdMobileImage: {
        data: [
          {
            attributes: {
              url: '/images/features/business/third-mobile.png',
            },
          },
        ],
      },
    });

    render(<CarouselBusinessMobile dataBusiness={data} />);

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute(
      'src',
      '/images/features/business/first-mobile.png',
    );
    expect(images[1]).toHaveAttribute(
      'src',
      '/images/features/business/second-mobile.png',
    );
    expect(images[2]).toHaveAttribute(
      'src',
      '/images/features/business/third-mobile.png',
    );
  });

  it('uses mobile styles when provided', () => {
    const data = makeBusinessData({
      firstMobileImageStyle: { width: '180px' },
      secondMobileImageStyle: { width: '200px' },
      thirdMobileImageStyle: { width: '180px' },
    });

    render(<CarouselBusinessMobile dataBusiness={data} />);

    const images = screen.getAllByRole('img');
    expect(images[0].style.width).toBe('180px');
    expect(images[1].style.width).toBe('200px');
    expect(images[2].style.width).toBe('180px');
  });

  it('falls back to desktop styles when mobile styles are absent', () => {
    render(<CarouselBusinessMobile dataBusiness={makeBusinessData()} />);

    const images = screen.getAllByRole('img');
    expect(images[0].style.width).toBe('220px');
    expect(images[1].style.width).toBe('250px');
    expect(images[2].style.width).toBe('220px');
  });

  it('mixes mobile and desktop images when partially provided', () => {
    const data = makeBusinessData({
      firstMobileImage: {
        data: [
          {
            attributes: {
              url: '/images/features/business/first-mobile.png',
            },
          },
        ],
      },
      // secondMobileImage not provided — should fall back
      // thirdMobileImage not provided — should fall back
    });

    render(<CarouselBusinessMobile dataBusiness={data} />);

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute(
      'src',
      '/images/features/business/first-mobile.png',
    );
    expect(images[1]).toHaveAttribute(
      'src',
      '/images/features/business/second-desktop.png',
    );
    expect(images[2]).toHaveAttribute(
      'src',
      '/images/features/business/third-desktop.png',
    );
  });
});
