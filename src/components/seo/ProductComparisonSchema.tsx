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
        ...(() => {
          // Prices are published in local currency and differ by market, so the
          // currency must be read from the string rather than assumed. Emitting a
          // local-currency figure as USD would publish a false price in structured
          // data, which search engines ingest. If the currency cannot be
          // determined, omit the offer rather than guess.
          const raw = product.startingPrice;
          if (!raw) return {};
          const currency = /AED/i.test(raw)
            ? 'AED'
            : /SAR/i.test(raw)
              ? 'SAR'
              : /QAR/i.test(raw)
                ? 'QAR'
                : /OMR/i.test(raw)
                  ? 'OMR'
                  : /BHD/i.test(raw)
                    ? 'BHD'
                    : /KWD/i.test(raw)
                      ? 'KWD'
                      : /[$]|USD/i.test(raw)
                        ? 'USD'
                        : /£|GBP/i.test(raw)
                          ? 'GBP'
                          : /€|EUR/i.test(raw)
                            ? 'EUR'
                            : null;
          const amount = raw.replace(/[^0-9.]/g, '');
          if (!currency || !amount) return { };
          return {
            offers: {
              '@type': 'Offer',
              price: amount,
              priceCurrency: currency,
              description: raw,
            },
          };
        })(),
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
