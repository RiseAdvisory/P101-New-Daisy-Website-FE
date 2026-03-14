import { Metadata } from 'next';
import Link from 'next/link';
import { guideEntries } from '@/lib/constants/guides/guideData';

export const metadata: Metadata = {
  title: 'Salon Business Guides | How-To Guides for Beauty Businesses | Daisy',
  description:
    'Step-by-step guides for salon owners: reduce no-shows, get more clients, choose the right software, set up online booking, and grow your beauty business.',
  openGraph: {
    title: 'Salon Business Guides | How-To Guides for Beauty Businesses',
    description:
      'Step-by-step guides for salon owners on growing their beauty business.',
    url: 'https://www.jointhedaisy.com/guides',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jointhedaisy.com/guides',
  },
};

export default function GuidesIndex() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#F8F5F3] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
            Salon Business Guides
          </h1>
          <p className="text-lg text-[#455150]" data-geo-answer="true">
            Step-by-step guides to help you grow your beauty business, reduce
            costs, and make smarter decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-6">
          {guideEntries.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block rounded-2xl border border-[#E8E9E9] bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md md:p-8"
            >
              <h2 className="mb-3 text-2xl font-bold text-[#172524] group-hover:text-primary">
                {guide.title}
              </h2>
              <p className="mb-4 text-[#455150]" data-geo-answer="true">
                {guide.answer}
              </p>
              <div className="text-sm font-medium text-primary">
                Read full guide ({guide.steps.length} steps) &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
