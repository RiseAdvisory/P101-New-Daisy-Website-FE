'use client';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { t } from '@/lib/constants/i18n';
import { becomePartnerData } from '@/lib/constants/shared/becomePartnerData';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';

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
  defaultType?: 'business' | 'freelance';
  title?: string;
  subtitle?: string;
}

export const BecomeFormPartner = ({ defaultType, title, subtitle }: BecomeFormPartnerProps) => {
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const data = t(becomePartnerData, locale);

  return (
    <div
      id="partner-with-us"
      className="bg-primary px-4 border-b border-primaryBtn pb-14"
    >
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h2 className="text-center text-white text-[32px] leading-10">
          {title || data.title}
        </h2>
        <p className="text-center text-[#D5D9D9]  mt-3 ltr:font-montserrat">
          {subtitle || data.subtitle}
        </p>
      </div>
      <ProfileForm defaultType={defaultType} />
    </div>
  );
};
