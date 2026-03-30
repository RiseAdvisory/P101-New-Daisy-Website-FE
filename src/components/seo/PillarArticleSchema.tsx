interface PillarArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  wordCount?: number;
  articleSections?: string[];
}

export function PillarArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  wordCount,
  articleSections,
}: PillarArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    ...(wordCount && { wordCount }),
    ...(articleSections &&
      articleSections.length > 0 && { articleSection: articleSections }),
    author: {
      '@type': 'Organization',
      name: 'Daisy',
      url: 'https://www.jointhedaisy.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Daisy',
      url: 'https://www.jointhedaisy.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.jointhedaisy.com/images/logo.webp',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
