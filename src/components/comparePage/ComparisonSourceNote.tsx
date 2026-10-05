import { FC } from 'react';
import { formatComparisonDate } from '@/lib/constants/competitors/comparisonLastUpdated';

/**
 * Closing note on every comparison and alternatives page: when the page last
 * changed, where the information about other companies comes from, that the
 * comparisons rest on Daisy's own evaluation criteria, and where to report
 * something out of date.
 *
 * It complements accurate copy; it does not excuse inaccurate copy. A note at
 * the bottom of a page does not cure a false statement above it.
 */
const CONTACT_EMAIL = 'info@trythedaisy.com';

const uiStrings = {
  en: {
    heading: 'About this page',
    updated: (date: string) => `This page was last updated on ${date}.`,
    sources:
      'Information about other companies comes from their own published materials at the time of writing. Prices and features change, so check each company\'s website for the latest details.',
    criteria: "Comparisons and ratings on this page are based on The Daisy's internal evaluation criteria.",
    contactBefore: 'If you spot something out of date or inaccurate, email ',
    contactAfter: " and we'll correct it.",
  },
  ar: {
    heading: 'عن هذه الصفحة',
    updated: (date: string) => `آخر تحديث لهذه الصفحة في ${date}.`,
    sources:
      'تستند المعلومات المتعلقة بالشركات الأخرى إلى ما نشرته تلك الشركات وقت الكتابة. وبما أن الأسعار والميزات تتغير، يُرجى مراجعة الموقع الرسمي لكل شركة للاطلاع على أحدث التفاصيل.',
    criteria: 'تستند المقارنات والتقييمات في هذه الصفحة إلى معايير التقييم الداخلية لدى ديزي.',
    contactBefore: 'وإذا لاحظت معلومة غير محدّثة أو غير دقيقة، راسلنا على ',
    contactAfter: ' وسنصححها.',
  },
} as const;

interface Props {
  locale?: string;
  /** ISO date (yyyy-mm-dd) from comparisonLastUpdated. */
  lastUpdated?: string;
}

export const ComparisonSourceNote: FC<Props> = ({ locale = 'en', lastUpdated }) => {
  const t = uiStrings[locale === 'ar' ? 'ar' : 'en'];
  return (
    <section
      className="mx-auto max-w-4xl px-4 pb-12"
      aria-labelledby="comparison-source-note"
      data-testid="comparison-source-note"
    >
      <div className="border-t border-gray-200 pt-6 text-sm leading-relaxed text-[#455150]">
        <h2 id="comparison-source-note" className="mb-2 text-base font-semibold text-[#172524]">
          {t.heading}
        </h2>
        <p>
          {lastUpdated && (
            <>
              {t.updated(formatComparisonDate(lastUpdated, locale))}{' '}
            </>
          )}
          {t.sources} {t.criteria}
        </p>
        <p className="mt-2">
          {t.contactBefore}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            dir="ltr"
            className="font-medium text-primary underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
          {t.contactAfter}
        </p>
      </div>
    </section>
  );
};

export default ComparisonSourceNote;
