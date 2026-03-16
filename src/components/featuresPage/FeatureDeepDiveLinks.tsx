import Link from 'next/link';
import { featureDeepDives } from '@/lib/constants/features/featureDeepDive';
import { ArrowRight } from 'lucide-react';

interface FeatureDeepDiveLinksProps {
  userType: 'business' | 'professional';
}

export function FeatureDeepDiveLinks({ userType }: FeatureDeepDiveLinksProps) {
  const entries = featureDeepDives.filter((f) => f.userType === userType);
  if (entries.length === 0) return null;

  return (
    <section className="w-full bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          Explore Each Feature in Detail
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base text-[#455150]">
          Deep-dive into how each feature works, what problems it solves, and
          how it compares to alternatives.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/features/${userType}/${entry.slug}`}
              className="group flex flex-col rounded-xl border border-[#E8E9E9] bg-white p-5 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <h3 className="text-base font-bold text-[#172524] transition-colors group-hover:text-primary">
                {entry.categoryName}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#455150] line-clamp-2">
                {entry.metaDescription.slice(0, 100)}...
              </p>
              <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
