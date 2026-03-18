import Link from 'next/link';

interface PillarHeroProps {
  title: string;
  subtitle: string;
  readingTime: string;
  lastUpdated: string;
  breadcrumbTitle: string;
}

export function PillarHero({
  title,
  subtitle,
  readingTime,
  lastUpdated,
  breadcrumbTitle,
}: PillarHeroProps) {
  const formattedDate = new Date(lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="bg-[#F8F5F3] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-6 text-sm text-[#586968]">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#172524]">{breadcrumbTitle}</span>
        </nav>
        <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
          {title}
        </h1>
        <p className="mb-6 text-lg leading-relaxed text-[#455150] md:text-xl">
          {subtitle}
        </p>
        <div className="flex items-center gap-4 text-sm text-[#586968]">
          <span>{readingTime}</span>
          <span className="h-1 w-1 rounded-full bg-[#586968]" />
          <span>Updated {formattedDate}</span>
        </div>
      </div>
    </section>
  );
}
