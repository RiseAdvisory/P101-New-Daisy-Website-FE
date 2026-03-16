
import { Sparkles } from 'lucide-react';

interface AiCapability {
  title: string;
  description: string;
}

interface AiEnhancementSectionProps {
  capabilities: AiCapability[];
}

export function AiEnhancementSection({
  capabilities,
}: AiEnhancementSectionProps) {
  return (
    <section className="w-full bg-gradient-to-br from-[#172524] to-[#1a3a3a] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
            <Sparkles className="h-4 w-4 text-primaryBtn" />
            AI-Enhanced
          </div>
          <h2 className="text-[28px] font-semibold leading-9 text-white md:text-[36px] md:leading-[44px]">
            How AI Supercharges This Feature
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#D5D9D9]">
            Every capability in this category is powered by Daisy&apos;s AI
            engine, adding intelligence that traditional tools simply
            cannot match.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <h3 className="mb-2 text-lg font-semibold text-white">
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#D5D9D9]">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
