import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';

interface VerdictSectionProps {
  verdict: string;
  daisyReasons: string[];
  competitorReasons: string[];
  competitorName: string;
  heading?: string;
}

export const VerdictSection: FC<VerdictSectionProps> = ({
  verdict,
  daisyReasons,
  competitorReasons,
  competitorName,
  heading,
}) => {
  return (
    <section className="py-16 px-4 bg-[#F8F5F3]">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-[#172524]">
          {heading || `Should You Choose Daisy or ${competitorName}?`}
        </h2>

        {/* Verdict Box */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-primaryBtn/30 bg-primary/5 p-8 shadow-sm md:p-10">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              Our Verdict
            </span>
          </div>
          <p className="text-lg leading-relaxed text-[#172524] md:text-xl">
            {verdict}
          </p>
        </div>

        {/* Choose If Lists */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Choose Daisy */}
          <div className="rounded-2xl border border-primaryBtn/30 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-[#172524]">
                Choose Daisy if...
              </h3>
            </div>
            <ul className="space-y-4">
              {daisyReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check
                      className="h-3 w-3 text-primary"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-sm leading-relaxed text-[#455150]">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Choose Competitor */}
          <div className="rounded-2xl border border-[#E8E9E9] bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F5F3]">
                <ArrowRight className="h-5 w-5 text-[#586968]" />
              </div>
              <h3 className="text-lg font-bold text-[#172524]">
                Choose {competitorName} if...
              </h3>
            </div>
            <ul className="space-y-4">
              {competitorReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F8F5F3]">
                    <Check
                      className="h-3 w-3 text-[#586968]"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-sm leading-relaxed text-[#455150]">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerdictSection;
