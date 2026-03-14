import { render, screen } from '@testing-library/react';
import { FeatureProfessionalList } from '../FeatureProfessionalList';

jest.mock('next/image', () => {
  return function MockImage(props: any) {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  };
});

const makeListItem = (overrides: Record<string, any> = {}) => ({
  attributes: {
    title: 'Test Feature',
    description: 'A test description',
    picture: {
      data: [
        {
          attributes: {
            url: '/images/features/professional/desktop.png',
            formats: {
              large: {
                url: '/images/features/professional/desktop-large.png',
              },
            },
          },
        },
      ],
    },
    stylePicture: { padding: '20px' },
    ...overrides,
  },
});

describe('FeatureProfessionalList', () => {
  it('uses desktop image when no mobilePicture is provided', () => {
    render(
      <FeatureProfessionalList
        title="Section"
        desription="Description"
        dataList={[makeListItem()]}
      />,
    );

    const images = screen.getAllByRole('img');
    const featureImage = images.find((img) =>
      img.getAttribute('src')?.includes('desktop'),
    );
    expect(featureImage).toBeDefined();
    expect(featureImage!.getAttribute('src')).toBe(
      '/images/features/professional/desktop-large.png',
    );
  });

  it('uses mobilePicture when provided', () => {
    const item = makeListItem({
      mobilePicture: {
        data: [
          {
            attributes: {
              url: '/images/features/professional/mobile.png',
              formats: {
                large: {
                  url: '/images/features/professional/mobile-large.png',
                },
              },
            },
          },
        ],
      },
    });

    render(
      <FeatureProfessionalList
        title="Section"
        desription="Description"
        dataList={[item]}
      />,
    );

    const images = screen.getAllByRole('img');
    const featureImage = images.find((img) =>
      img.getAttribute('src')?.includes('mobile'),
    );
    expect(featureImage).toBeDefined();
    expect(featureImage!.getAttribute('src')).toBe(
      '/images/features/professional/mobile-large.png',
    );
  });

  it('applies mobileStylePicture when provided', () => {
    const item = makeListItem({
      mobileStylePicture: { padding: '8px', width: '100%' },
      mobilePicture: {
        data: [
          {
            attributes: {
              url: '/images/features/professional/mobile.png',
            },
          },
        ],
      },
    });

    render(
      <FeatureProfessionalList
        title="Section"
        desription="Description"
        dataList={[item]}
      />,
    );

    const images = screen.getAllByRole('img');
    const featureImage = images.find(
      (img) => img.getAttribute('alt') === 'Test Feature',
    );
    expect(featureImage!.style.padding).toBe('8px');
  });

  it('falls back to stylePicture when mobileStylePicture is absent', () => {
    render(
      <FeatureProfessionalList
        title="Section"
        desription="Description"
        dataList={[makeListItem()]}
      />,
    );

    const images = screen.getAllByRole('img');
    const featureImage = images.find(
      (img) => img.getAttribute('alt') === 'Test Feature',
    );
    expect(featureImage!.style.padding).toBe('20px');
  });

  it('falls back to desktop url when mobilePicture has no formats', () => {
    const item = makeListItem({
      mobilePicture: {
        data: [
          {
            attributes: {
              url: '/images/features/professional/mobile-raw.png',
            },
          },
        ],
      },
    });

    render(
      <FeatureProfessionalList
        title="Section"
        desription="Description"
        dataList={[item]}
      />,
    );

    const images = screen.getAllByRole('img');
    const featureImage = images.find((img) =>
      img.getAttribute('src')?.includes('mobile-raw'),
    );
    expect(featureImage).toBeDefined();
  });
});
