import { Metadata } from 'next';
import Link from 'next/link';
import {
  alternativePages,
  bestAlternativesPages,
} from '@/lib/constants/competitors/comparisonPages';
import { getCompetitor } from '@/lib/constants/competitors';

export const metadata: Metadata = {
  title: 'Salon Software Alternatives — Compare & Switch | Daisy',
  description:
    'Looking for alternatives to Fresha, Booksy, Vagaro, or GlossGenius? Compare top salon software alternatives with AI features, pricing, and Arabic support.',
  keywords: [
    'fresha alternative',
    'booksy alternative',
    'vagaro alternative',
    'salon software alternatives',
  ],
  alternates: {
    canonical: 'https://www.jointhedaisy.com/alternative',
  },
};

export default function AlternativeIndexPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Salon Software Alternatives
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Ready to switch? Find the best alternative for your current salon
          platform — with honest comparisons and clear recommendations.
        </p>
      </section>

      {/* Alternative Pages */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
          Find Your Alternative
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {alternativePages.map((page) => {
            const competitor = getCompetitor(page.competitorSlug);
            if (!competitor) return null;
            return (
              <Link
                key={page.slug}
                href={`/alternative/${page.slug}`}
                className="rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {competitor.name} Alternative
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                  {page.heroSubtitle}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Best Alternatives */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Best Alternatives Roundups
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {bestAlternativesPages.map((page) => {
              const competitor = getCompetitor(page.competitorSlug);
              if (!competitor) return null;
              return (
                <Link
                  key={page.slug}
                  href={`/alternative/${page.slug}`}
                  className="rounded-lg border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    {page.heroTitle}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {page.intro}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Ready to make the switch?
        </h2>
        <p className="mb-6 text-gray-600">
          Daisy makes switching easy with migration support and zero downtime.
        </p>
        <Link
          href="/get-the-app"
          className="inline-block rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
        >
          Start Free Trial
        </Link>
      </section>
    </main>
  );
}
