import { render } from '@testing-library/react';
import { ComparisonBreadcrumbSchema } from '../ComparisonBreadcrumbSchema';

describe('ComparisonBreadcrumbSchema', () => {
  function renderAndParse(props: {
    pageName: string;
    pageSlug: string;
    section: 'compare' | 'alternative' | 'solutions';
  }) {
    const { container } = render(<ComparisonBreadcrumbSchema {...props} />);
    const scriptTag = container.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(scriptTag).toBeInTheDocument();
    return JSON.parse(scriptTag?.innerHTML || '');
  }

  it('renders a valid JSON-LD script tag', () => {
    const { container } = render(
      <ComparisonBreadcrumbSchema
        pageName="Daisy vs Fresha"
        pageSlug="daisy-vs-fresha"
        section="compare"
      />
    );
    const scriptTag = container.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(scriptTag).toBeInTheDocument();
    expect(() => JSON.parse(scriptTag?.innerHTML || '')).not.toThrow();
  });

  it('contains correct schema type', () => {
    const schema = renderAndParse({
      pageName: 'Daisy vs Fresha',
      pageSlug: 'daisy-vs-fresha',
      section: 'compare',
    });
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('BreadcrumbList');
  });

  it('has 3 breadcrumb items', () => {
    const schema = renderAndParse({
      pageName: 'Daisy vs Fresha',
      pageSlug: 'daisy-vs-fresha',
      section: 'compare',
    });
    expect(schema.itemListElement).toHaveLength(3);
  });

  it('first item is Home', () => {
    const schema = renderAndParse({
      pageName: 'Test',
      pageSlug: 'test',
      section: 'compare',
    });
    expect(schema.itemListElement[0].name).toBe('Home');
    expect(schema.itemListElement[0].item).toBe(
      'https://www.jointhedaisy.com/en'
    );
    expect(schema.itemListElement[0].position).toBe(1);
  });

  it.each([
    ['compare', 'Compare', '/compare'],
    ['alternative', 'Alternatives', '/alternative'],
    ['solutions', 'Solutions', '/solutions'],
  ] as const)(
    'second item maps section "%s" to label "%s" and path "%s"',
    (section, expectedLabel, expectedPath) => {
      const schema = renderAndParse({
        pageName: 'Test Page',
        pageSlug: 'test-slug',
        section,
      });
      const secondItem = schema.itemListElement[1];
      expect(secondItem.name).toBe(expectedLabel);
      expect(secondItem.item).toBe(
        `https://www.jointhedaisy.com/en${expectedPath}`
      );
      expect(secondItem.position).toBe(2);
    }
  );

  it('third item contains page name and full URL', () => {
    const schema = renderAndParse({
      pageName: 'Daisy vs Fresha',
      pageSlug: 'daisy-vs-fresha',
      section: 'compare',
    });
    const thirdItem = schema.itemListElement[2];
    expect(thirdItem.name).toBe('Daisy vs Fresha');
    expect(thirdItem.item).toBe(
      'https://www.jointhedaisy.com/en/compare/daisy-vs-fresha'
    );
    expect(thirdItem.position).toBe(3);
  });
});
