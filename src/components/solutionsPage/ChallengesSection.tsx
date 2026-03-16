import { AlertCircle } from 'lucide-react';

interface Challenge {
  title: string;
  description: string;
}

interface ChallengesSectionProps {
  challenges: Challenge[];
  heading?: string;
}

export function ChallengesSection({ challenges, heading }: ChallengesSectionProps) {
  if (!challenges || challenges.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#F8F5F3] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
          {heading || 'What Challenges Do Beauty Businesses Face?'}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#E8E9E9] bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#172524]">
                {challenge.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#455150]">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
