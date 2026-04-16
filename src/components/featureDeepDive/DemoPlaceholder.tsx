
import { Play } from 'lucide-react';

interface DemoPlaceholderProps {
  labels: {
    heading: string;
    paragraph: string;
  };
}

export function DemoPlaceholder({ labels }: DemoPlaceholderProps) {
  return (
    <section className="w-full bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="rounded-2xl border-2 border-dashed border-[#E8E9E9] bg-[#FAFAFA] px-6 py-16 md:py-24">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Play className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-[#172524]">
            {labels.heading}
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-[#455150]">
            {labels.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
