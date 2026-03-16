interface ProductItem {
  name: string;
  description: string;
  url?: string;
  startingPrice?: string;
  features?: string[];
  rating?: number;
}

interface ProductComparisonSchemaProps {
  products: ProductItem[];
  pageTitle: string;
  pageUrl: string;
}

export function ProductComparisonSchema({
  products,
  pageTitle,
  pageUrl,
}: ProductComparisonSchemaProps) {
  if (!products || products.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: pageTitle,
    url: pageUrl,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: product.name,
        description: product.description,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        ...(product.url && { url: product.url }),
        ...(product.startingPrice && {
          offers: {
            '@type': 'Offer',
            price: product.startingPrice.replace(/[^0-9.]/g, ''),
            priceCurrency: 'USD',
            description: product.startingPrice,
          },
        }),
        ...(product.rating && {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating,
            bestRating: 5,
          },
        }),
        ...(product.features && {
          featureList: product.features.join(', '),
        }),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
