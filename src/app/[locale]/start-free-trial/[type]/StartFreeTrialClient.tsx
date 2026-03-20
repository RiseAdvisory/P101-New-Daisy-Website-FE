'use client';
import { useState } from 'react';
import { ProfileForm } from '@/components/formBusiness/FormBusiness';
import { PlayMarketButton } from '@/components/buttonApp/PlayMarketButton';
import { AppStoreButton } from '@/components/buttonApp/AppStoreButton';
import { StartFreeTrialContent } from '@/lib/constants/pages/startFreeTrialData';

interface StartFreeTrialClientProps {
  data: StartFreeTrialContent;
  defaultType: 'business' | 'professional';
}

export const StartFreeTrialClient = ({
  data,
  defaultType,
}: StartFreeTrialClientProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="bg-[#F8F5F3] py-16 md:py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-[#172524] text-3xl md:text-4xl font-bold mb-4">
            {data.success.title}
          </h2>
          <p className="text-[#455150] text-lg mb-8 max-w-md mx-auto">
            {data.success.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreButton />
            <PlayMarketButton />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F8F5F3] py-16 md:py-24 px-4">
      <div className="max-w-[860px] mx-auto">
        <ProfileForm
          defaultType={defaultType}
          buttonText={data.form.buttonText}
          onSuccess={() => setSubmitted(true)}
        />
      </div>
    </section>
  );
};
