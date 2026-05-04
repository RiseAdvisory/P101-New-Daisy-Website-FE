import {
  updatesHeroData,
  updatesPostsByUserType,
} from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';
import { ResourceListingHero } from '@/components/resources/ResourceListingHero';

interface UpdatesListProps {
  locale: string;
}

const PERSONAS = ['business', 'professional', 'customer'] as const;

export function UpdatesList({ locale }: UpdatesListProps) {
  const isRtl = locale === 'ar';
  const hero = t(updatesHeroData.business, locale);

  const seen = new Set<string>();
  const allUpdates = PERSONAS.flatMap((persona) => {
    const list: Array<Record<string, unknown>> = updatesPostsByUserType[persona] ?? [];
    return list
      .map((item) => ({ ...item, _persona: persona }))
      .filter((item) => {
        const slug = (item as { attributes?: { slug?: string } }).attributes?.slug;
        if (!slug || seen.has(slug)) return false;
        seen.add(slug);
        return true;
      });
  });

  return (
    <div className="w-full" dir={isRtl ? 'rtl' : 'ltr'}>
      <ResourceListingHero
        locale={locale}
        eyebrow={
          hero?.bredCrumbDesription ??
          (isRtl ? 'الموارد / التحديثات' : 'Resources / Updates')
        }
        title={hero?.title ?? ''}
        description={hero?.subtitle ?? ''}
        secondaryDescription={hero?.description}
      />

      <section className="bg-[#F8F5F3] px-4 pb-[140px]">
        {allUpdates.length === 0 ? (
          <div className="mx-auto max-w-3xl pt-16 text-center text-[#586968]">
            <p className="text-lg ltr:font-montserrat">
              {isRtl
                ? 'لا توجد تحديثات حالياً. تابعنا لمعرفة الجديد قريباً.'
                : 'No updates yet — check back soon for what we’re shipping next.'}
            </p>
          </div>
        ) : (
          <ul className="mx-auto grid max-w-6xl gap-6 pt-4 md:grid-cols-3">
            {allUpdates.map((item, idx) => {
              const a = (item as { attributes?: Record<string, unknown> })
                .attributes as Record<string, unknown> | undefined;
              const slug = a?.slug as string | undefined;
              const title = (a?.title as string | undefined) ?? '';
              const description = (a?.description as string | undefined) ?? '';
              const href = slug
                ? `/${locale}/resources/blog/updates/${slug}`
                : `/${locale}/resources/updates`;
              return (
                <li
                  key={slug ?? idx}
                  className="overflow-hidden rounded-xl border bg-white transition hover:shadow-2xl"
                >
                  <a href={href} className="block px-6 py-4">
                    <h3 className="text-lg font-semibold ltr:font-montserrat">
                      {title}
                    </h3>
                    {description && (
                      <p className="mt-2 text-sm text-[#455150] ltr:font-montserrat">
                        {description}
                      </p>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
