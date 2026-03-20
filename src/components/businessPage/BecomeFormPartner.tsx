'use client';
import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { t } from '@/lib/constants/i18n';
import { becomePartnerData } from '@/lib/constants/shared/becomePartnerData';
import { startFreeTrialData } from '@/lib/constants/pages/startFreeTrialData';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';
import { PlayMarketButton } from '@/components/buttonApp/PlayMarketButton';
import { AppStoreButton } from '@/components/buttonApp/AppStoreButton';

// Lazy load the form component to reduce initial bundle size
const ProfileForm = dynamic(
  () =>
    import('../formBusiness/FormBusiness').then((mod) => mod.ProfileForm),
  {
    loading: () => (
      <div className="bg-white p-6 rounded-xl mt-[48px] md:mx-auto md:w-[860px]">
        <Skeleton className="h-12 w-full mb-4" />
        <Skeleton className="h-12 w-full mb-4" />
        <Skeleton className="h-12 w-full mb-4" />
        <Skeleton className="h-12 w-full" />
      </div>
    ),
  },
);

interface BecomeFormPartnerProps {
  defaultType?: 'business' | 'professional';
  title?: string;
  subtitle?: string;
}

export const BecomeFormPartner = ({ defaultType, title, subtitle }: BecomeFormPartnerProps) => {
  const [submitted, setSubmitted] = useState(false);
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const data = t(becomePartnerData, locale);

  // Get success copy from shared data
  const trialType = defaultType === 'business' ? 'business' : 'professional';
  const successData = t(startFreeTrialData[trialType as keyof typeof startFreeTrialData], locale);

  if (submitted) {
    return (
      <div
        id="partner-with-us"
        className="bg-primary px-4 py-16 md:py-24 border-b border-primaryBtn"
      >
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-primary"
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
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            {successData.success.title}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-md mx-auto">
            {successData.success.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreButton />
            <PlayMarketButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="partner-with-us"
      className="bg-primary px-4 border-b border-primaryBtn pb-14"
    >
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h2 className="text-center text-white text-[32px] leading-10">
          {title || data.title}
        </h2>
        <p className="text-center text-white/80 mt-3 ltr:font-montserrat">
          {subtitle || data.subtitle}
        </p>
      </div>
      <ProfileForm
        defaultType={defaultType}
        onSuccess={() => setSubmitted(true)}
      />
    </div>
  );
};
