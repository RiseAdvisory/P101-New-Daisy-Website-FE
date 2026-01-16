'use client';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  faqs: FaqItem[];
}

export function FaqSchema({ faqs }: FaqSchemaProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
