interface SolutionHeroProps {
  title: string;
  subtitle: string;
}

export function SolutionHero({ title, subtitle }: SolutionHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary via-primary to-[#1a3a3a] px-4 pb-16 pt-32 md:pb-24 md:pt-40">
      {/* Subtle dot pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
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
