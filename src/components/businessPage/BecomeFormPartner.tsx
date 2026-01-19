'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axiosInstance from '@/helpers/axiosConfig';
import { useChangeLanguage } from '@/store/language';
import { Skeleton } from '@/components/ui/skeleton';

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
  const [titleFormBecome, setTitleFormBecome] = useState<any>();

  const { lang } = useChangeLanguage();

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(
          `/become-partners?locale=${lang}`,
        );
        setTitleFormBecome(response?.data?.data);
      } catch {
        // Error fetching become partner data
      }
    })();
  }, [lang]);
  return (
    <div
      id="partner-with-us"
      className="bg-primary px-4 border-b border-primaryBtn pb-14"
    >
      <div className="flex flex-col mx-auto text-center pt-20 px-3">
        <h1 className="text-center text-white text-[32px] leading-10">
          {titleFormBecome?.[0]?.attributes?.title}
        </h1>
        <p className="text-center text-[#D5D9D9]  mt-3 ltr:font-montserrat">
          {titleFormBecome?.[0]?.attributes?.subtitle}
        </p>
      </div>
      <ProfileForm />
    </div>
  );
};
