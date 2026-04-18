'use client';

import Link from 'next/link';
import { featureDeepDives, getFeatureDeepDive } from '@/lib/constants/features/featureDeepDive';
import { ArrowRight } from 'lucide-react';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';

const uiStrings = {
  en: {
    heading: 'Explore Each Feature in Detail',
    description: 'Deep-dive into how each feature works, what problems it solves, and how it compares to alternatives.',
    learnMore: 'Learn more',
  },
  ar: {
    heading: 'استكشف كل ميزة بالتفصيل',
    description: 'تعمّق في كيفية عمل كل ميزة، والمشاكل التي تحلها، وكيف تقارن بالبدائل.',
    learnMore: 'اعرف المزيد',
  },
};

interface FeatureDeepDiveLinksProps {
  userType: 'business' | 'professional';
}

export function FeatureDeepDiveLinks({ userType }: FeatureDeepDiveLinksProps) {
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  const isRtl = locale === 'ar';

  const entries = featureDeepDives.filter((f) => f.userType === userType);
  if (entries.length === 0) return null;

  return (
    <section className="w-full bg-white px-4 py-16 md:py-20" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          {t.heading}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base text-[#455150]">
          {t.description}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {entries.map((entry) => {
            // Get locale-aware data if available
            const localizedData = getFeatureDeepDive(userType, entry.slug, locale);
            const categoryName = localizedData?.categoryName || entry.categoryName;
            const metaDesc = localizedData?.metaDescription || entry.metaDescription;

            return (
              <Link
                key={entry.slug}
                href={`/${locale}/features/${userType}/${entry.slug}`}
                className="group flex flex-col rounded-xl border border-[#E8E9E9] bg-white p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="text-base font-bold text-[#172524] transition-colors group-hover:text-primary">
                  {categoryName}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#455150] line-clamp-2">
                  {metaDesc.slice(0, 100)}...
                </p>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary opacity-70 transition-opacity group-hover:opacity-100">
                  {t.learnMore}
                  <ArrowRight className={`h-3.5 w-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
