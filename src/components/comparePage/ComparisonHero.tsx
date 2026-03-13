'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';

interface ComparisonHeroProps {
  title: string;
  subtitle: string;
  variant:
    | 'daisy-vs'
    | 'alternative'
    | 'best-alternatives'
    | 'competitor-vs'
    | 'solution';
}

const variantStyles: Record<
  ComparisonHeroProps['variant'],
  { bg: string; accent: string; badge: string; badgeText: string }
> = {
  'daisy-vs': {
    bg: 'bg-gradient-to-br from-green-50 via-white to-teal-50',
    accent: 'text-green-700',
    badge: 'bg-green-100 text-green-700 border-green-200',
    badgeText: 'Head-to-Head Comparison',
  },
  alternative: {
    bg: 'bg-gradient-to-br from-teal-50 via-white to-green-50',
    accent: 'text-teal-700',
    badge: 'bg-teal-100 text-teal-700 border-teal-200',
    badgeText: 'Alternative Guide',
  },
  'best-alternatives': {
    bg: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50',
    accent: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    badgeText: 'Top Alternatives',
  },
  'competitor-vs': {
    bg: 'bg-gradient-to-br from-slate-50 via-white to-green-50',
    accent: 'text-slate-700',
    badge: 'bg-slate-100 text-slate-700 border-slate-200',
    badgeText: 'Software Comparison',
  },
  solution: {
    bg: 'bg-gradient-to-br from-green-50 via-white to-emerald-50',
    accent: 'text-green-700',
    badge: 'bg-green-100 text-green-700 border-green-200',
    badgeText: 'Solution Overview',
  },
};

export const ComparisonHero: FC<ComparisonHeroProps> = ({
  title,
  subtitle,
  variant,
}) => {
  const styles = variantStyles[variant];

  return (
    <section
      className={cn(
        'relative overflow-hidden py-20 px-4 md:py-28 lg:py-32',
        styles.bg,
      )}
    >
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span
          className={cn(
            'mb-6 inline-block rounded-full border px-4 py-1.5 text-sm font-medium',
            styles.badge,
          )}
        >
          {styles.badgeText}
        </span>

        <h1
          className={cn(
            'text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl',
            'text-gray-900',
          )}
        >
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
          {subtitle}
        </p>

        <div
          className={cn('mx-auto mt-8 h-1 w-20 rounded-full', {
            'bg-green-500': variant === 'daisy-vs' || variant === 'solution',
            'bg-teal-500': variant === 'alternative',
            'bg-emerald-500': variant === 'best-alternatives',
            'bg-slate-400': variant === 'competitor-vs',
          })}
        />
      </div>
    </section>
  );
};

export default ComparisonHero;
