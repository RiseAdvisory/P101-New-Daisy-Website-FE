import { render, screen } from '@testing-library/react';
import { ImageWrapper } from '../ImageWrapper';

jest.mock('next/image', () => {
  return function MockImage(props: any) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  };
});

describe('ImageWrapper', () => {
  it('renders an image with the given src and alt', () => {
    render(<ImageWrapper src="/test.png" alt="Test image" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/test.png');
    expect(img).toHaveAttribute('alt', 'Test image');
  });

  it('applies default padding of 24px', () => {
    const { container } = render(
      <ImageWrapper src="/test.png" alt="Test" />,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.padding).toBe('24px');
  });

  it('merges stylePicture overrides onto the wrapper div', () => {
    const { container } = render(
      <ImageWrapper
        src="/test.png"
        alt="Test"
        stylePicture={{ padding: '10px', width: '80%' }}
      />,
    );
    const wrapper = container.firstChild as HTMLElement;
    // stylePicture overrides default padding
    expect(wrapper.style.padding).toBe('10px');
    expect(wrapper.style.width).toBe('80%');
  });

  it('uses provided sizes attribute', () => {
    render(
      <ImageWrapper
        src="/test.png"
        alt="Test"
        sizes="(max-width: 768px) 100vw, 100vw"
      />,
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute(
      'sizes',
      '(max-width: 768px) 100vw, 100vw',
    );
  });

  it('applies custom zIndex class', () => {
    const { container } = render(
      <ImageWrapper src="/test.png" alt="Test" zIndex="z-10" />,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('z-10');
  });

  it('defaults to z-20 when no zIndex is provided', () => {
    const { container } = render(
      <ImageWrapper src="/test.png" alt="Test" />,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('z-20');
  });

  it('sets objectFit contain on the image', () => {
    render(<ImageWrapper src="/test.png" alt="Test" />);
    const img = screen.getByRole('img');
    expect(img.style.objectFit).toBe('contain');
  });
});
