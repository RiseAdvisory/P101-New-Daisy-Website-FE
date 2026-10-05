import { FC } from 'react';
import { cn } from '@/lib/utils';
import { formatComparisonDate } from '@/lib/constants/competitors/comparisonLastUpdated';

interface ComparisonHeroProps {
  title: string;
  subtitle: string;
  variant:
    | 'daisy-vs'
    | 'alternative'
    | 'best-alternatives'
    | 'competitor-vs'
    | 'solution';
  locale?: string;
  /** ISO date (yyyy-mm-dd) the page last changed; shown under the subtitle. */
  lastUpdated?: string;
}

const lastUpdatedLabel = { en: 'Last updated', ar: 'آخر تحديث' } as const;

const badgeText: Record<'en' | 'ar', Record<ComparisonHeroProps['variant'], string>> = {
  en: {
    'daisy-vs': 'Head-to-Head Comparison',
    alternative: 'Alternative Guide',
    'best-alternatives': 'Top Alternatives',
    'competitor-vs': 'Software Comparison',
    solution: 'Solution Overview',
  },
  ar: {
    'daisy-vs': 'مقارنة مباشرة',
    alternative: 'دليل البدائل',
    'best-alternatives': 'أبرز البدائل',
    'competitor-vs': 'مقارنة البرامج',
    solution: 'نظرة عامة على الحل',
  },
};

export const ComparisonHero: FC<ComparisonHeroProps> = ({
  title,
  subtitle,
  variant,
  locale = 'en',
  lastUpdated,
}) => {
  const badge = (badgeText[locale as 'en' | 'ar'] ?? badgeText.en)[variant];

  return (
    <section
      className={cn(
        'relative overflow-hidden py-20 px-4 md:py-28 lg:py-32',
        'bg-gradient-to-b from-[#F8F5F3] to-white',
      )}
    >
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span
          className={cn(
            'mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-medium',
            'bg-primary/10 text-primary border-primary/20',
          )}
        >
          {badge}
        </span>

        <h1
          className={cn(
            'text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl',
            'text-[#172524]',
          )}
        >
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#455150] md:text-xl">
          {subtitle}
        </p>

        {lastUpdated && (
          <p className="mt-4 text-sm text-[#455150]" data-testid="comparison-last-updated">
            {lastUpdatedLabel[locale === 'ar' ? 'ar' : 'en']}:{' '}
            <time dateTime={lastUpdated}>{formatComparisonDate(lastUpdated, locale)}</time>
          </p>
        )}

        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-primary" />
      </div>
    </section>
  );
};

export default ComparisonHero;
