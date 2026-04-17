import { render, screen } from '@testing-library/react';
import { MobileScrollSection } from '../MobileScrollSection';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img alt="" {...props} />
  ),
}));

// Mock the NoScrollingAnimationBusiness component
jest.mock('@/components/noAnimationBusiness/NoAnimationBusiness', () => ({
  NoScrollingAnimationBusiness: ({
    title,
    subtitle,
    description,
    image,
  }: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }) => (
    <div data-testid="no-scrolling-animation">
      <span data-testid="title">{title}</span>
      <span data-testid="subtitle">{subtitle}</span>
      <span data-testid="description">{description}</span>
      <span data-testid="image-url">{image}</span>
    </div>
  ),
}));

// Mock the Separator component
jest.mock('@/components/ui/separator', () => ({
  Separator: () => <hr data-testid="separator" />,
}));

describe('MobileScrollSection', () => {
  const mockScrollData = [
    {
      id: 1,
      attributes: {
        sortId: 1,
        styleBgMobileSecond: { backgroundColor: 'red' },
        styleImageMobile: { width: 100 },
        styleFirstBgJSON: { opacity: 1 },
        styleSecondBgJSON: { opacity: 0.5 },
        firstBg: {
          data: [{ attributes: { url: '/images/bg1.jpg' } }],
        },
        secondBg: {
          data: [{ attributes: { url: '/images/bg2.jpg' } }],
        },
        mainImage: {
          data: [
            {
              attributes: {
                formats: {
                  large: { url: '/images/main.jpg', width: 800, height: 600 },
                  small: { width: 400, height: 300 },
                },
              },
            },
          ],
        },
        infoScroll: {
          description: 'Test Description',
          text: 'Test Title',
          title: 'Test Subtitle',
          listSub: ['Item 1', 'Item 2'],
        },
      },
    },
    {
      id: 2,
      attributes: {
        sortId: 2,
        styleBgMobileSecond: {},
        styleImageMobile: {},
        styleFirstBgJSON: {},
        styleSecondBgJSON: {},
        firstBg: { data: null },
        secondBg: { data: null },
        mainImage: { data: null },
        infoScroll: {
          description: 'Second Description',
          text: 'Second Title',
          title: 'Second Subtitle',
        },
      },
    },
  ];

  it('renders null when dataScroll is null', () => {
    const { container } = render(<MobileScrollSection dataScroll={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders scroll items when dataScroll is provided', () => {
    render(<MobileScrollSection dataScroll={mockScrollData} />);

    const animations = screen.getAllByTestId('no-scrolling-animation');
    expect(animations).toHaveLength(2);
  });

  it('renders separators between items', () => {
    render(<MobileScrollSection dataScroll={mockScrollData} />);

    const separators = screen.getAllByTestId('separator');
    expect(separators).toHaveLength(2);
  });

  it('passes correct props to NoScrollingAnimationBusiness', () => {
    render(<MobileScrollSection dataScroll={mockScrollData} />);

    const titles = screen.getAllByTestId('title');
    expect(titles[0]).toHaveTextContent('Test Title');
    expect(titles[1]).toHaveTextContent('Second Title');

    const subtitles = screen.getAllByTestId('subtitle');
    expect(subtitles[0]).toHaveTextContent('Test Subtitle');

    const descriptions = screen.getAllByTestId('description');
    expect(descriptions[0]).toHaveTextContent('Test Description');
  });

  it('handles empty dataScroll array', () => {
    const { container } = render(<MobileScrollSection dataScroll={[]} />);

    // Should render the container but with no items
    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();
    expect(list?.children).toHaveLength(0);
  });

  it('handles missing image data gracefully', () => {
    const dataWithMissingImages = [
      {
        id: 1,
        attributes: {
          sortId: 1,
          firstBg: { data: null },
          secondBg: { data: null },
          mainImage: { data: null },
          infoScroll: {
            description: 'No images',
            text: 'Title',
            title: 'Subtitle',
          },
        },
      },
    ];

    render(<MobileScrollSection dataScroll={dataWithMissingImages} />);

    const animation = screen.getByTestId('no-scrolling-animation');
    expect(animation).toBeInTheDocument();
  });

  it('has correct mobile-only visibility class', () => {
    const { container } = render(
      <MobileScrollSection dataScroll={mockScrollData} />,
    );

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('md:hidden');
  });

  it('prefers mobileUrl over formats.large.url when available', () => {
    const dataWithMobileUrl = [
      {
        id: 1,
        attributes: {
          sortId: 1,
          firstBg: { data: [{ attributes: { url: '/images/bg.jpg' } }] },
          secondBg: { data: null },
          mainImage: {
            data: [
              {
                attributes: {
                  mobileUrl: '/images/mobile-specific.webp',
                  formats: {
                    large: { url: '/images/desktop.webp' },
                    small: { url: '/images/mobile-specific.webp', width: 400, height: 300 },
                  },
                },
              },
            ],
          },
          infoScroll: {
            description: 'Test',
            text: 'Title',
            title: 'Subtitle',
          },
        },
      },
    ];

    render(<MobileScrollSection dataScroll={dataWithMobileUrl} />);
    expect(screen.getByTestId('image-url')).toHaveTextContent('/images/mobile-specific.webp');
  });

  it('falls back to formats.large.url when mobileUrl is absent', () => {
    const dataWithoutMobileUrl = [
      {
        id: 1,
        attributes: {
          sortId: 1,
          firstBg: { data: [{ attributes: { url: '/images/bg.jpg' } }] },
          secondBg: { data: null },
          mainImage: {
            data: [
              {
                attributes: {
                  formats: {
                    large: { url: '/images/desktop-fallback.webp' },
                    small: { url: '/images/desktop-fallback.webp', width: 400, height: 300 },
                  },
                },
              },
            ],
          },
          infoScroll: {
            description: 'Test',
            text: 'Title',
            title: 'Subtitle',
          },
        },
      },
    ];

    render(<MobileScrollSection dataScroll={dataWithoutMobileUrl} />);
    expect(screen.getByTestId('image-url')).toHaveTextContent('/images/desktop-fallback.webp');
  });
});
