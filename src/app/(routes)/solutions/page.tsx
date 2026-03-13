import { Metadata } from 'next';
import Link from 'next/link';
import { solutions } from '@/lib/constants/solutions';

export const metadata: Metadata = {
  title: 'Beauty Business Solutions — AI-Powered Software | Daisy',
  description:
    'Explore Daisy\'s solutions for salon management, spa booking, appointment scheduling, POS, CRM, and marketing. AI-powered software built for beauty businesses.',
  keywords: [
    'salon management software',
    'spa booking system',
    'beauty salon software',
    'salon appointment scheduling',
    'beauty business solutions',
  ],
  alternates: {
    canonical: 'https://www.jointhedaisy.com/solutions',
  },
};

export default function SolutionsIndexPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Solutions for Every Beauty Business
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Whether you run a salon, spa, barbershop, or med spa — Daisy has
          AI-powered tools built specifically for your business type.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="group rounded-lg border border-gray-200 p-6 transition-all hover:border-green-300 hover:shadow-md"
            >
              <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-green-700">
                {solution.heroTitle}
              </h2>
              <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                {solution.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-1">
                {solution.keywords.slice(0, 3).map((kw) => (
                  <span
                    key={kw}
                    className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Not sure which solution fits?
        </h2>
        <p className="mb-6 text-gray-600">
          Talk to our team and get a personalized recommendation for your beauty
          business.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/get-the-app"
            className="inline-block rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
          >
            Get Started Free
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
