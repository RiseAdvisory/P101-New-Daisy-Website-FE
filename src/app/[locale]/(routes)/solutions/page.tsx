import { Metadata } from 'next';
import { localeAlternates } from '@/lib/utils/metadata';
import Link from 'next/link';
import { solutions } from '@/lib/constants/solutions';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { PageBreadcrumbSchema } from '@/components/seo/PageBreadcrumbSchema';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  return {
  title: 'Beauty Business Solutions. AI-Powered Software | The Daisy',
  description:
    'Explore The Daisy solutions for salons, spas, barbershops, and med spas. AI booking, POS, CRM, marketing, and staff management built for your business type.',
  keywords: [
    'salon management software',
    'spa booking system',
    'beauty salon software',
    'salon appointment scheduling',
    'beauty business solutions',
  ],
  openGraph: {
    title: 'Beauty Business Solutions. AI-Powered Software | The Daisy',
    description:
      'Explore Daisy\'s solutions for salon management, spa booking, appointment scheduling, POS, CRM, and marketing.',
    url: `https://www.jointhedaisy.com/${locale}/solutions`,
    type: 'website',
    images: [{ url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: 'The Daisy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Business Solutions. AI-Powered Software | The Daisy',
    description:
      'Explore Daisy\'s solutions for salon management, spa booking, appointment scheduling, POS, CRM, and marketing.',
    images: ['/images/og/og-default.jpg'],
  },
    alternates: localeAlternates('/solutions', locale),
  };
}

export default function SolutionsIndexPage({ params }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen">
      <WebPageSchema
        title="Beauty Business Solutions. AI-Powered Software | The Daisy"
        description="Explore Daisy's solutions for salon management, spa booking, appointment scheduling, POS, CRM, and marketing."
        url="https://www.jointhedaisy.com/solutions"
      />
      <PageBreadcrumbSchema
        locale={params.locale}
        items={[{ name: 'Solutions', url: 'https://www.jointhedaisy.com/solutions' }]}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F8F5F3] to-white px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
          Solutions for Every Beauty Business
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#455150]">
          Whether you run a salon, spa, barbershop, or med spa. Daisy has
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
              className="group rounded-lg border border-[#E8E9E9] p-6 transition-all hover:border-primaryBtn/40 hover:shadow-md"
            >
              <h2 className="mb-2 text-xl font-semibold text-[#172524] group-hover:text-primary">
                {solution.heroTitle}
              </h2>
              <p className="mb-4 line-clamp-3 text-sm text-[#455150]">
                {solution.heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-1">
                {solution.keywords.slice(0, 3).map((kw) => (
                  <span
                    key={kw}
                    className="rounded bg-[#F8F5F3] px-2 py-0.5 text-xs text-[#586968]"
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
      <section className="bg-[#F8F5F3] px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-[#172524]">
          Not sure which solution fits?
        </h2>
        <p className="mb-6 text-[#455150]">
          Talk to our team and get a personalized recommendation for your beauty
          business.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/get-the-app"
            className="inline-block rounded-lg bg-primaryBtn px-8 py-3 font-semibold text-white transition-colors hover:bg-primary"
          >
            Get Started Free
          </Link>
          <Link
            href="/contact"
            className="inline-block rounded-lg border border-[#E8E9E9] px-8 py-3 font-semibold text-[#455150] transition-colors hover:bg-[#F8F5F3]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
