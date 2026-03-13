'use client';

import { AlertCircle } from 'lucide-react';

interface Challenge {
  title: string;
  description: string;
}

interface ChallengesSectionProps {
  challenges: Challenge[];
}

export function ChallengesSection({ challenges }: ChallengesSectionProps) {
  if (!challenges || challenges.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#F8F9FA] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-[28px] font-semibold leading-9 text-gray-900 md:text-[36px] md:leading-[44px]">
          The Challenges You Face
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {challenge.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
