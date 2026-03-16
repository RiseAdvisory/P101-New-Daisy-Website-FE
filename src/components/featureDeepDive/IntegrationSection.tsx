
import Link from 'next/link';
import { ArrowRight, Link2 } from 'lucide-react';

interface IntegrationPoint {
  category: string;
  slug: string;
  benefit: string;
}

interface IntegrationSectionProps {
  integrationPoints: IntegrationPoint[];
  userType: 'business' | 'professional';
}

export function IntegrationSection({
  integrationPoints,
  userType,
}: IntegrationSectionProps) {
  if (integrationPoints.length === 0) return null;

  return (
    <section className="w-full bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          Works Seamlessly With
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-[#455150]">
          Every feature in Daisy connects. Here is how this category integrates
          with the rest of the platform.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {integrationPoints.map((point, index) => (
            <Link
              key={index}
              href={`/features/${userType}/${point.slug}`}
              className="group flex items-start gap-4 rounded-2xl border border-[#E8E9E9] bg-white p-6 transition-all hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Link2 className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-base font-semibold text-[#172524] group-hover:text-primary">
                  {point.category}
                </h3>
                <p className="text-sm leading-relaxed text-[#455150]">
                  {point.benefit}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
