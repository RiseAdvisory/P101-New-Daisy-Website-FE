'use client';

import { FC, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Shield, ArrowRightLeft, Database, Award, Clock } from 'lucide-react';

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

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Common Questions About Switching
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Honest answers to the concerns we hear most
        </p>

        <div className="space-y-3">
          {objections.map((objection, index) => {
            const isOpen = openIndex === index;
            const Icon = objection.icon;

            return (
              <div
                key={index}
                className={cn(
                  'overflow-hidden rounded-xl border transition-all',
                  isOpen
                    ? 'border-green-200 bg-green-50/30 shadow-sm'
                    : 'border-gray-200 bg-white',
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50/50"
                >
                  <div
                    className={cn(
                      'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors',
                      isOpen
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-500',
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="flex-1 text-base font-semibold text-gray-900">
                    {objection.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>

                <div
                  className={cn(
                    'grid transition-all duration-200',
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 pl-20 text-sm leading-relaxed text-gray-600">
                      {objection.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ObjectionHandling;
