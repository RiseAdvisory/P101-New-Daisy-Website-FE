
interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

interface WorkflowSectionProps {
  workflow: WorkflowStep[];
  labels: {
    heading: string;
    subtitle: string;
  };
}

export function WorkflowSection({ workflow, labels }: WorkflowSectionProps) {
  return (
    <section className="w-full bg-[#F8F5F3] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          {labels.heading}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-[#455150]">
          {labels.subtitle}
        </p>

        <ol className="space-y-6">
          {workflow.map((item) => (
            <li
              key={item.step}
              className="rounded-2xl border border-[#E8E9E9] bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#172524]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#455150]">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
