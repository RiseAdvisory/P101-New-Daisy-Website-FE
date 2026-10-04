import { FC } from 'react';
import { Check, X } from 'lucide-react';

interface ProsConsListProps {
  pros: string[];
  cons: string[];
  title: string;
  heading?: string;
  locale?: string;
}

const uiStrings = {
  en: { strengths: 'Strengths', weigh: 'Things to weigh' },
  ar: { strengths: 'نقاط القوة', weigh: 'ما يستحق الموازنة' },
};

/**
 * One platform's column: heading, then Strengths, then Things to weigh,
 * stacked. The two cards used to sit side by side inside a column that was
 * already half the page, which left each list about 140px wide on desktop.
 *
 * Placed in a two-column parent grid, each list spans three rows of it
 * through a subgrid, so the headings, Strengths cards and Things-to-weigh
 * cards line up across the two platforms even when one heading wraps to an
 * extra line. Outside such a grid it simply stacks.
 */
export const ProsConsList: FC<ProsConsListProps> = ({
  pros,
  cons,
  title,
  heading,
  locale = 'en',
}) => {
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  return (
    <section className="flex flex-col gap-6 md:row-span-3 md:grid md:grid-rows-subgrid">
      <h2 className="text-center text-3xl font-bold text-[#172524] md:self-end">
        {heading || title}
      </h2>

      {/* Pros */}
      <div className="rounded-2xl border border-primaryBtn/30 bg-primary/5 p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-4 w-4 text-primary" strokeWidth={3} />
          </div>
          <h3 className="text-lg font-bold text-primary">{t.strengths}</h3>
        </div>
        <ul className="space-y-4">
          {pros.map((pro) => (
            <li key={pro} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primaryBtn" />
              <span className="text-sm leading-relaxed text-[#455150]">
                {pro}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons. Natural height: stretched to its neighbour, a short list would
          sit at the top of a mostly empty card. */}
      <div className="self-start rounded-2xl border border-red-200 bg-red-50/50 p-6 md:p-8 w-full">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50">
            <X className="h-4 w-4 text-red-500" strokeWidth={3} />
          </div>
          <h3 className="text-lg font-bold text-red-600">{t.weigh}</h3>
        </div>
        <ul className="space-y-4">
          {cons.map((con) => (
            <li key={con} className="flex items-start gap-3">
              <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
              <span className="text-sm leading-relaxed text-[#455150]">
                {con}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProsConsList;
