import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import Link from 'next/link';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';
import {
  daisyVsPages,
  competitorVsPages,
} from '@/lib/constants/competitors/comparisonPages';
import { getCompetitor } from '@/lib/constants/competitors';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Daisy Comparisons — See How We Stack Up | Daisy',
  description:
    'Compare Daisy against Fresha, Booksy, Vagaro, GlossGenius, and more. Feature-by-feature analysis, pricing breakdowns, and honest verdicts.',
  keywords: [
    'salon software comparison',
    'beauty booking comparison',
    'daisy vs fresha',
    'daisy vs booksy',
    'salon software reviews',
  ],
  openGraph: {
    title: 'Daisy Comparisons — See How We Stack Up | Daisy',
    description:
      'Compare Daisy against Fresha, Booksy, Vagaro, GlossGenius, and more. Feature-by-feature analysis, pricing breakdowns, and honest verdicts.',
    url: 'https://www.jointhedaisy.com/compare',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daisy Comparisons — See How We Stack Up | Daisy',
    description:
      'Compare Daisy against Fresha, Booksy, Vagaro, GlossGenius, and more. Feature-by-feature analysis and pricing breakdowns.',
  },
    alternates: localeAlternates('/compare', locale),
  };
}

export default function CompareIndexPage() {
  return (
    <main className="min-h-screen">
      <WebPageSchema
        title="Daisy Comparisons — See How We Stack Up | Daisy"
        description="Compare Daisy against Fresha, Booksy, Vagaro, GlossGenius, and more. Feature-by-feature analysis and pricing breakdowns."
        url="https://www.jointhedaisy.com/compare"
      />
      <PageBreadcrumbSchema
        items={[{ name: 'Compare', url: 'https://www.jointhedaisy.com/compare' }]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F8F5F3] to-white px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
          Compare Daisy
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#455150]">
          Honest, detailed comparisons to help you choose the right beauty
          business platform. We show strengths and weaknesses — for everyone.
        </p>
      </section>

      {/* Daisy vs Pages */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-8 text-2xl font-bold text-[#172524]">
          Daisy vs Competitors
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {daisyVsPages.map((page) => {
            const competitor = getCompetitor(page.competitorSlug);
            if (!competitor) return null;
            return (
              <Link
                key={page.slug}
                href={`/compare/${page.slug}`}
                className="rounded-lg border border-[#E8E9E9] p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 text-lg font-semibold text-[#172524]">
                  Daisy vs {competitor.name}
                </h3>
                <p className="text-sm text-[#586968]">
                  Tier {competitor.tier} · {competitor.headquarters}
                </p>
                <p className="mt-2 line-clamp-2 text-sm text-[#455150]">
                  {page.tldr}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Competitor vs Competitor */}
      <section className="bg-[#F8F5F3] py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-2xl font-bold text-[#172524]">
            Competitor vs Competitor
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {competitorVsPages.map((page) => {
              const a = getCompetitor(page.slugA);
              const b = getCompetitor(page.slugB);
              if (!a || !b) return null;
              return (
                <Link
                  key={page.combinedSlug}
                  href={`/compare/${page.combinedSlug}`}
                  className="rounded-lg border border-[#E8E9E9] bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1 text-lg font-semibold text-[#172524]">
                    {a.name} vs {b.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-[#455150]">
                    {page.verdict}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-[#172524]">
          Ready to see Daisy in action?
        </h2>
        <p className="mb-6 text-[#455150]">
          Start your free trial and experience the difference AI makes.
        </p>
        <Link
          href="/get-the-app"
          className="inline-block rounded-lg bg-primaryBtn px-8 py-3 font-semibold text-white transition-colors hover:bg-primary"
        >
          Get Started Free
        </Link>
      </section>
    </main>
  );
}
