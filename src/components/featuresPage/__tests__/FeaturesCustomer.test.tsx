import { render, screen } from '@testing-library/react';
import { FeaturesCustomerItem } from '../FeaturesCustomer';

jest.mock('next/image', () => {
  return function MockImage(props: any) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  };
});

jest.mock('@/lib/utils', () => ({
  cn: (...args: unknown[]) => args.filter(Boolean).join(' '),
}));

const makeItem = (overrides: Record<string, any> = {}) => ({
  title: 'Test Feature',
  description: 'A test description',
  style: '',
  sizePicture: { width: '200px' },
  picture: {
    data: [{ attributes: { url: '/images/features/customer/desktop.png' } }],
  },
  ...overrides,
});

describe('FeaturesCustomerItem', () => {
  it('renders a single image when no mobilePicture is provided', () => {
    render(<FeaturesCustomerItem item={makeItem()} index={0} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(1);
    expect(images[0]).toHaveAttribute(
      'src',
      '/images/features/customer/desktop.png',
    );
  });

  it('renders two images when mobilePicture is provided', () => {
    const item = makeItem({
      mobilePicture: {
        data: [
          { attributes: { url: '/images/features/customer/mobile.png' } },
        ],
      },
    });

    render(<FeaturesCustomerItem item={item} index={0} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);

    // Desktop image (hidden on mobile)
    expect(images[0]).toHaveAttribute(
      'src',
      '/images/features/customer/desktop.png',
    );
    expect(images[0].className).toContain('hidden md:block');

    // Mobile image (hidden on desktop)
    expect(images[1]).toHaveAttribute(
      'src',
      '/images/features/customer/mobile.png',
    );
    expect(images[1].className).toContain('md:hidden');
  });

  it('applies mobileStylePicture to the mobile image', () => {
    const item = makeItem({
      mobilePicture: {
        data: [
          { attributes: { url: '/images/features/customer/mobile.png' } },
        ],
      },
      mobileStylePicture: { width: '100px', padding: '8px' },
    });

    render(<FeaturesCustomerItem item={item} index={0} />);

    const images = screen.getAllByRole('img');
    // Mobile image should have mobileStylePicture
    expect(images[1].style.width).toBe('100px');
    expect(images[1].style.padding).toBe('8px');
  });

  it('falls back to sizePicture when mobileStylePicture is absent', () => {
    const item = makeItem({
      sizePicture: { width: '200px' },
      mobilePicture: {
        data: [
          { attributes: { url: '/images/features/customer/mobile.png' } },
        ],
      },
    });

    render(<FeaturesCustomerItem item={item} index={0} />);

    const images = screen.getAllByRole('img');
    // Mobile image should fall back to sizePicture
    expect(images[1].style.width).toBe('200px');
  });

  it('renders single image when mobilePicture data is null', () => {
    const item = makeItem({
      mobilePicture: { data: null },
    });

    render(<FeaturesCustomerItem item={item} index={0} />);
    expect(screen.getAllByRole('img')).toHaveLength(1);
  });

  it('renders single image when mobilePicture data is empty array', () => {
    const item = makeItem({
      mobilePicture: { data: [] },
    });

    render(<FeaturesCustomerItem item={item} index={0} />);
    expect(screen.getAllByRole('img')).toHaveLength(1);
  });

  it('uses fallback image when picture url is undefined', () => {
    const item = makeItem({
      picture: {
        data: [{ attributes: { url: undefined } }],
      },
    });

    render(<FeaturesCustomerItem item={item} index={0} />);

    const images = screen.getAllByRole('img');
    // Should fall back to imageLeaf (local asset)
    expect(images[0].getAttribute('src')).not.toContain('undefined');
  });
});
