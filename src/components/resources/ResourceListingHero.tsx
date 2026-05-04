/**
 * Server-rendered hero for the /resources/* listing pages.
 *
 * Matches the canonical pattern used by the glossary and guides index
 * pages and the pillar PillarHero component:
 *   - light #F8F5F3 background
 *   - centered #172524 H1 in 4xl/5xl
 *   - #455150 lede with data-geo-answer for AI citers
 *   - optional eyebrow breadcrumb above H1
 *   - optional secondary description under the lede
 *
 * Lives outside the four resource listings so any future resources page
 * (e.g. a new /resources/case-studies) can drop it in and stay visually
 * consistent without re-implementing markup.
 */
interface ResourceListingHeroProps {
  /** Required main heading. */
  title: string;
  /** Required lede paragraph — also feeds GEO/AEO via data-geo-answer. */
  description: string;
  /** Optional smaller paragraph below the lede. */
  secondaryDescription?: string;
  /**
   * Optional breadcrumb-style eyebrow above the H1
   * (e.g. "Resources / Blog Posts"). Rendered as small uppercase text.
   */
  eyebrow?: string;
  /** Locale string — drives RTL/LTR direction. */
  locale: string;
}

export function ResourceListingHero({
  title,
  description,
  secondaryDescription,
  eyebrow,
  locale,
}: ResourceListingHeroProps) {
  const isRtl = locale === 'ar';

  return (
    <section
      className="bg-[#F8F5F3] px-4 py-16 md:py-24"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#586968]">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-4 text-4xl font-bold text-[#172524] md:text-5xl">
          {title}
        </h1>
        <p className="text-lg text-[#455150]" data-geo-answer="true">
          {description}
        </p>
        {secondaryDescription && (
          <p className="mt-4 text-base text-[#586968]">{secondaryDescription}</p>
        )}
      </div>
    </section>
  );
}
