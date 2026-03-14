'use client';
import dynamic from 'next/dynamic';
import { useChangeLanguage } from '@/store/language';
import { Skeleton } from '@/components/ui/skeleton';
import { t } from '@/lib/constants/i18n';
import { becomePartnerData } from '@/lib/constants/shared/becomePartnerData';

// Lazy load the form component to reduce initial bundle size
const ProfileForm = dynamic(
  () =>
    import('../formBusiness/FormBusiness').then((mod) => mod.ProfileForm),
  {
    ssr: false,
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

export const BecomeFormPartner = () => {
  const { lang } = useChangeLanguage();
  const data = t(becomePartnerData, lang);

  return (
    <div
      id="partner-with-us"
      className="bg-primary px-4 border-b border-primaryBtn pb-14"
    >
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-white text-[32px] leading-10">
          {data.title}
        </h1>
        <p className="text-center text-[#D5D9D9]  mt-3 ltr:font-montserrat">
          {data.subtitle}
        </p>
      </div>
      <ProfileForm />
    </div>
  );
};
