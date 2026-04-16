
import { Building2 } from 'lucide-react';

interface UseCase {
  title: string;
  businessType: string;
  scenario: string;
}

interface UseCasesSectionProps {
  useCases: UseCase[];
  labels: {
    heading: string;
    subtitle: string;
  };
}

export function UseCasesSection({ useCases, labels }: UseCasesSectionProps) {
  return (
    <section className="w-full bg-[#F8F5F3] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          {labels.heading}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-[#455150]">
          {labels.subtitle}
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-[#E8E9E9] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                {useCase.businessType}
              </span>
              <h3 className="mb-3 text-lg font-semibold text-[#172524]">
                {useCase.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-[#455150]">
                {useCase.scenario}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
