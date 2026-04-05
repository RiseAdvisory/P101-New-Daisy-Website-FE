import { render } from '@testing-library/react';
import { PageBreadcrumbSchema } from '../PageBreadcrumbSchema';

describe('PageBreadcrumbSchema', () => {
  function renderAndParse(
    items: { name: string; url: string }[],
    locale?: string,
  ) {
    const { container } = render(
      <PageBreadcrumbSchema items={items} locale={locale} />,
    );
    const scriptTag = container.querySelector(
      'script[type="application/ld+json"]',
    );
    return JSON.parse(scriptTag?.innerHTML || '');
  }

  it('renders null when items is empty', () => {
    const { container } = render(<PageBreadcrumbSchema items={[]} />);
    const scriptTag = container.querySelector(
      'script[type="application/ld+json"]',
    );
    expect(scriptTag).toBeNull();
  });

  it('includes locale prefix in Home URL', () => {
    const schema = renderAndParse(
      [{ name: 'FAQ', url: 'https://www.jointhedaisy.com/faq' }],
      'en',
    );
    expect(schema.itemListElement[0].item).toBe(
      'https://www.jointhedaisy.com/en',
    );
  });

  it('includes locale prefix in item URLs', () => {
    const schema = renderAndParse(
      [{ name: 'FAQ', url: 'https://www.jointhedaisy.com/faq' }],
      'en',
    );
    expect(schema.itemListElement[1].item).toBe(
      'https://www.jointhedaisy.com/en/faq',
    );
  });

  it('uses Arabic locale when specified', () => {
    const schema = renderAndParse(
      [{ name: 'FAQ', url: 'https://www.jointhedaisy.com/faq' }],
      'ar',
    );
    expect(schema.itemListElement[0].item).toBe(
      'https://www.jointhedaisy.com/ar',
    );
    expect(schema.itemListElement[1].item).toBe(
      'https://www.jointhedaisy.com/ar/faq',
    );
  });

  it('defaults to en locale', () => {
    const schema = renderAndParse([
      { name: 'Pricing', url: 'https://www.jointhedaisy.com/pricing' },
    ]);
    expect(schema.itemListElement[0].item).toBe(
      'https://www.jointhedaisy.com/en',
    );
    expect(schema.itemListElement[1].item).toBe(
      'https://www.jointhedaisy.com/en/pricing',
    );
  });

  it('extracts path from full URLs', () => {
    const schema = renderAndParse(
      [
        {
          name: 'Business',
          url: 'https://www.jointhedaisy.com/business',
        },
      ],
      'en',
    );
    expect(schema.itemListElement[1].item).toBe(
      'https://www.jointhedaisy.com/en/business',
    );
  });

  it('handles multiple breadcrumb items', () => {
    const schema = renderAndParse(
      [
        { name: 'Solutions', url: '/solutions' },
        { name: 'Salon Software', url: '/solutions/salon-management-software' },
      ],
      'en',
    );
    expect(schema.itemListElement).toHaveLength(3);
    expect(schema.itemListElement[1].position).toBe(2);
    expect(schema.itemListElement[2].position).toBe(3);
    expect(schema.itemListElement[2].item).toBe(
      'https://www.jointhedaisy.com/en/solutions/salon-management-software',
    );
  });
});
