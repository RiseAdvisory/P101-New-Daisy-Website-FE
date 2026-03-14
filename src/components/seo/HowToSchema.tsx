'use client';

interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  title: string;
  description: string;
  steps: HowToStep[];
}

export function HowToSchema({ title, description, steps }: HowToSchemaProps) {
  if (!steps || steps.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
