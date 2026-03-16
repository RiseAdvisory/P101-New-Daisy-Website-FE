'use client';

import { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface SubFeature {
  name: string;
  description: string;
  howItWorks?: string[];
  keyBenefit: string;
}

interface SubFeaturesSectionProps {
  subFeatures: SubFeature[];
  categoryName: string;
}

export function SubFeaturesSection({
  subFeatures,
  categoryName,
}: SubFeaturesSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          How Does The Daisy&apos;s {categoryName} Work?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-[#455150]">
          Every tool is designed to save beauty businesses time and grow
          revenue.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {subFeatures.map((feature, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E8E9E9] bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-[#172524]">
                  {feature.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#455150]">
                  {feature.description}
                </p>

                {/* Key Benefit */}
                <div className="mb-4 rounded-lg bg-primary/5 px-4 py-3">
                  <p className="text-sm font-medium text-primary">
                    Key benefit: {feature.keyBenefit}
                  </p>
                </div>

                {/* Expandable How It Works */}
                {feature.howItWorks && feature.howItWorks.length > 0 && (
                  <div>
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      How it works
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isExpanded && (
                      <ol className="mt-3 space-y-2 border-t border-[#E8E9E9] pt-3">
                        {feature.howItWorks.map((step, stepIndex) => (
                          <li
                            key={stepIndex}
                            className="flex gap-3 text-sm text-[#455150]"
                          >
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                              {stepIndex + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
