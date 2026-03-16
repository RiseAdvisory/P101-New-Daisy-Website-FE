
import { Network, CheckCircle2 } from 'lucide-react';

interface NetworkEffectsSectionProps {
  description: string;
  benefits: string[];
}

export function NetworkEffectsSection({
  description,
  benefits,
}: NetworkEffectsSectionProps) {
  return (
    <section className="w-full bg-[#F8F5F3] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Network className="h-4 w-4" />
            Compounding Advantage
          </div>
          <h2 className="text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
            The Network Effect
          </h2>
        </div>

        <p className="mb-8 text-center text-base leading-relaxed text-[#455150]">
          {description}
        </p>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-[#E8E9E9] bg-white p-4 shadow-sm"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-[#455150]">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
