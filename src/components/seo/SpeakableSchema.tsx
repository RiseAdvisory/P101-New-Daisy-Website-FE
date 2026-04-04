interface SpeakableSchemaProps {
  url: string;
  title: string;
  cssSelectors?: string[];
}

export function SpeakableSchema({
  url,
  title,
  cssSelectors = ['[data-geo-answer]', 'article > p:first-of-type'],
}: SpeakableSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
