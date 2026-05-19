'use client';
import { useEffect } from 'react';
import { GetTheAppScan } from '@/components/getTheApp/GetTheApp';
import { HeroPage } from '@/components/heroSection/HeroSection';
import Separator from '@/components/separator/Separator';
import { t } from '@/lib/constants/i18n';
import { getTheAppPageData } from '@/lib/constants/pages/getTheAppPageData';

export const GetTheAppClient = ({ lang }: { lang: string }) => {

  // Mirrors the pre-paint inline script in page.tsx. The inline script catches
  // hard navigations (direct URL, refresh, external links), but Next.js soft
  // navigations from internal <Link> clicks don't re-execute it — this effect
  // covers that path so mobile visitors get punted to the smartlink either way.
  useEffect(() => {
    try {
      if (window.matchMedia('(max-width: 767px)').matches) {
        window.location.replace('https://thedaisy.link/install-app');
      }
    } catch {
      // matchMedia missing / unusual UA — fall through to the on-site page.
    }
  }, []);

  const data = t(getTheAppPageData, lang);

  return (
    <>
      <HeroPage
        bredCrumbTitle={data.titleBredCrumb.title}
        bredCrumbDesription={data.titleBredCrumb.description}
        isVisibleBreadCrumbs={true}
        hiddenArrow={true}
        visibleDescriiton={false}
        title={data.title}
        description={data.description}
        heightScreen={false}
        styleSection="pb-0 pt-6 px-[16px]"
        secondDescription={data.subtitle}
      />
      <div className="px-4 bg-primary py-[46px] md:px-[400px]">
        <Separator className="bg-[#586968] " />
      </div>
      <GetTheAppScan qrCode={data.qrCode} />
    </>
  );
};
