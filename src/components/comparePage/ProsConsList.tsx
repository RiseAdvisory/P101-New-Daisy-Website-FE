'use client';

import { FC } from 'react';
import { Check, X } from 'lucide-react';

interface ProsConsListProps {
  pros: string[];
  cons: string[];
  title: string;
}

export const ProsConsList: FC<ProsConsListProps> = ({ pros, cons, title }) => {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          {title}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Pros */}
          <div className="rounded-2xl border border-green-200 bg-green-50/50 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <Check className="h-4 w-4 text-green-700" strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold text-green-800">Strengths</h3>
            </div>
            <ul className="space-y-4">
              {pros.map((pro) => (
                <li key={pro} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-sm leading-relaxed text-gray-700">
                    {pro}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                <X className="h-4 w-4 text-red-700" strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold text-red-800">Limitations</h3>
            </div>
            <ul className="space-y-4">
              {cons.map((con) => (
                <li key={con} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                  <span className="text-sm leading-relaxed text-gray-700">
                    {con}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProsConsList;
