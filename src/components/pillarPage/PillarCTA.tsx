import Link from 'next/link';

interface PillarCTAProps {
  title?: string;
  subtitle?: string;
}

export function PillarCTA({
  title = 'Ready to Grow Your Business?',
  subtitle = 'Try Daisy free for 14 days. No credit card required.',
}: PillarCTAProps) {
  return (
    <section className="bg-primary px-4 py-12">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>
        <p className="mb-6 text-white/80">{subtitle}</p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/get-the-app"
            className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Start Free Trial
          </Link>
          <Link
            href="/pricing"
            className="inline-block rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
