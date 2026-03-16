'use client';

interface FeatureHeroProps {
  title: string;
  subtitle: string;
  stat?: { value: string; label: string };
}

export function FeatureHero({ title, subtitle, stat }: FeatureHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary via-primary to-[#1a3a3a] px-4 pb-16 pt-8 md:pb-24 md:pt-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {stat && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="text-lg font-bold text-primaryBtn">
              {stat.value}
            </span>
            <span className="text-white/80">{stat.label}</span>
          </div>
        )}

        <h1 className="text-[32px] font-semibold leading-10 text-white md:text-[48px] md:leading-[60px]">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-relaxed text-[#D5D9D9] ltr:font-montserrat md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
