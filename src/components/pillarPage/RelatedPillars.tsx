import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getPillarPage } from '@/lib/constants/pillars';

interface RelatedPillarsProps {
  slugs: string[];
}

export function RelatedPillars({ slugs }: RelatedPillarsProps) {
  if (!slugs || slugs.length === 0) return null;

  const pillars = slugs
    .map((slug) => getPillarPage(slug))
    .filter(Boolean);

  if (pillars.length === 0) return null;

  return (
    <section className="bg-[#F8F5F3] px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-2xl font-bold text-[#172524]">
          Related Guides
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) =>
            pillar ? (
              <Link
                key={pillar.slug}
                href={`/${pillar.slug}`}
                className="group flex flex-col rounded-xl border border-[#E8E9E9] bg-white p-6 transition-all hover:border-primaryBtn/30 hover:shadow-md"
              >
                <h3 className="text-base font-bold text-[#172524] transition-colors group-hover:text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#455150] line-clamp-2">
                  {pillar.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-70 transition-opacity group-hover:opacity-100">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
