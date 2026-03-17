import { FC } from 'react';
import { Shield, ArrowRightLeft, Database, Award, Clock } from 'lucide-react';

interface ObjectionHandlingProps {
  variant: 'full' | 'compact';
  competitorName?: string;
}

interface Objection {
  question: string;
  answer: string;
  icon: FC<{ className?: string }>;
}

function getObjections(competitorName?: string): Objection[] {
  const name = competitorName ?? 'your current software';

  return [
    {
      question: 'Is it hard to switch?',
      answer: `Switching from ${name} to Daisy is straightforward. Our dedicated onboarding team handles the entire migration — importing your client database, appointment history, and settings. Most businesses are fully operational on Daisy within 48 hours.`,
      icon: ArrowRightLeft,
    },
    {
      question: 'What about my existing data?',
      answer: `Your data is safe. We support data imports from all major platforms including ${name}. Client records, appointment history, product inventory, and staff schedules transfer seamlessly. We also help clean and organize your data during migration.`,
      icon: Database,
    },
    {
      question: 'Is Daisy proven?',
      answer:
        'Daisy is built by a team with deep experience in the beauty and wellness industry across the GCC region. Our AI receptionist technology has been tested with pilot partners, and we offer a 14-day free trial so you can see the results before committing.',
      icon: Award,
    },
    {
      question: 'What if I want to cancel?',
      answer:
        'There are no long-term contracts or lock-in periods. You can cancel anytime, and we make it easy to export all your data. We believe in earning your business every month, not trapping you with contracts.',
      icon: Shield,
    },
    {
      question: 'How long does onboarding take?',
      answer:
        'Most businesses are fully up and running within 1-2 days. Our onboarding specialists walk you through every step — from data migration to staff training. We also provide ongoing support whenever you need it.',
      icon: Clock,
    },
  ];
}

export const ObjectionHandling: FC<ObjectionHandlingProps> = ({
  variant,
  competitorName,
}) => {
  const allObjections = getObjections(competitorName);
  const objections =
    variant === 'compact' ? allObjections.slice(0, 3) : allObjections;

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-[#172524]">
          Common Questions About Switching
        </h2>
        <p className="mb-10 text-center text-[#455150]">
          Honest answers to the concerns we hear most
        </p>

        <div className="space-y-3">
          {objections.map((objection, index) => {
            const Icon = objection.icon;

            return (
              <details
                key={index}
                className="group rounded-xl border border-[#E8E9E9] bg-white transition-all open:border-primaryBtn/30 open:bg-primary/5 open:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-[#F8F5F3]/50 [&::-webkit-details-marker]:hidden list-none">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#F8F5F3] text-[#586968] transition-colors group-open:bg-primary/10 group-open:text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="flex-1 text-base font-semibold text-[#172524]">
                    {objection.question}
                  </span>
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-[#D5D9D9] transition-transform duration-200 group-open:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 pl-20 text-sm leading-relaxed text-[#455150]">
                  {objection.answer}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ObjectionHandling;
