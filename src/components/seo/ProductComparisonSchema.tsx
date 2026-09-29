interface ProductItem {
  name: string;
  description: string;
  url?: string;
  startingPrice?: string;
  features?: string[];
  rating?: number;
  /** Required alongside `rating`; an aggregate with no count is omitted. */
  ratingCount?: number;
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
          // Take the FIRST monetary token only. Stripping every non-digit and
          // concatenating what was left turned '$120/mo + $10 per user' into a
          // published price of 12010, and 'up to 35%' into 35 - fabricated
          // figures about named competitors, emitted into structured data.
          const match = raw.match(/\d+(?:[.,]\d+)?/);
          const amount = match ? match[0].replace(',', '.') : null;
          // A percentage, a quote-only price, or more than one amount cannot be
          // reduced to a single offer. Omit rather than guess.
          const ambiguous =
            /%/.test(raw) ||
            /custom|quote|contact/i.test(raw) ||
            (raw.match(/\d+(?:[.,]\d+)?/g) ?? []).length > 1;
          if (!currency || !amount || ambiguous) return {};
          return {
            offers: {
              '@type': 'Offer',
              price: amount,
              priceCurrency: currency,
              description: raw,
            },
          };
        })(),
        // An aggregateRating needs a count and a source to be meaningful. We
        // were publishing a single cherry-picked platform score as though it
        // were THE aggregate rating for a named competitor, with no
        // ratingCount, so reordering the reviews array silently changed what
        // search engines ingested about them. Omitted until it can be
        // computed across sources with counts.
        ...(product.rating && product.ratingCount
          ? {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: product.rating,
                ratingCount: product.ratingCount,
                bestRating: 5,
              },
            }
          : {}),
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
