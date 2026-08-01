import { updatesHeroData } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';
import {
  RELEASE_NOTES,
  type ReleasePlatform,
} from '@/lib/constants/updates/releaseNotes';
import { ResourceListingHero } from '@/components/resources/ResourceListingHero';

interface UpdatesListProps {
  locale: string;
}

const PLATFORM_LABELS: Record<ReleasePlatform, { en: string; ar: string }> = {
  ios: { en: 'iOS', ar: 'iOS' },
  android: { en: 'Android', ar: 'أندرويد' },
  web: { en: 'Web', ar: 'الويب' },
};

// The calendar is pinned to Gregorian so the rendered date always matches
// the ISO value in the <time datetime> attribute, whatever the runtime's
// ICU defaults are. Note ar-SA would resolve to the Islamic calendar and
// print a Hijri date (١٣ صفر ١٤٤٨) for a 2026-07-27 entry, so it is not
// used here.
function formatDate(iso: string, locale: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(
    locale === 'ar' ? 'ar-u-ca-gregory' : 'en-US-u-ca-gregory',
    { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' },
  );
}

export function UpdatesList({ locale }: UpdatesListProps) {
  const isRtl = locale === 'ar';
  const hero = t(updatesHeroData.business, locale);

  // Maintenance releases feed the app stores but not this page, which
  // promises new tools and features for the business.
  const entries = RELEASE_NOTES.filter((note) => !note.maintenanceOnly);

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
        {entries.length === 0 && (
          <div className="mx-auto max-w-3xl pt-16 text-center">
            <p className="text-lg text-[#455150] ltr:font-montserrat rtl:font-cairo">
              {isRtl
                ? 'ميزات وأدوات الأعمال الجديدة تُنشر هنا مع كل إصدار. تابعنا لمعرفة الجديد قريباً.'
                : 'New business features and tools are posted here with each release. Check back soon.'}
            </p>
          </div>
        )}

        <ol className="mx-auto flex max-w-3xl flex-col gap-6 pt-4">
          {entries.map((note) => {
            const title = t(note.title, locale);
            const summary = t(note.summary, locale);
            const highlights = t(note.highlights, locale);
            return (
              <li
                key={note.version}
                className="rounded-xl border border-[#E8E9E9] bg-white p-6 md:p-8"
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <time
                    dateTime={note.date}
                    className="text-xs font-medium text-[#586968] ltr:font-montserrat rtl:font-cairo"
                  >
                    {formatDate(note.date, locale)}
                  </time>
                  {note.platforms.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-[#E7F1F1] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#14736F] ltr:font-montserrat rtl:font-cairo"
                    >
                      {PLATFORM_LABELS[p][isRtl ? 'ar' : 'en']}
                    </span>
                  ))}
                  {/* Semver versions (app releases) shown as a chip; web
                      slugs are internal identifiers and stay hidden. */}
                  {/^\d+\.\d+\.\d+$/.test(note.version) && (
                    <span className="rounded-full bg-[#F8F5F3] px-2 py-0.5 text-[10px] font-semibold text-[#586968] ltr:font-montserrat rtl:font-cairo">
                      v{note.version}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-semibold text-[#172524] md:text-2xl">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
                  {summary}
                </p>

                {/* Native <details> keeps the full content in the SSR HTML
                    for crawlers and AI engines without any client JS. */}
                <details className="group mt-4">
                  <summary className="cursor-pointer text-sm font-semibold text-[#8B6554] ltr:font-montserrat rtl:font-cairo [&::-webkit-details-marker]:hidden">
                    <span className="group-open:hidden">
                      {isRtl ? 'عرض التفاصيل' : 'See details'}
                    </span>
                    <span className="hidden group-open:inline">
                      {isRtl ? 'إخفاء التفاصيل' : 'Hide details'}
                    </span>
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#172524] ltr:font-montserrat rtl:font-cairo"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8B6554]"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
