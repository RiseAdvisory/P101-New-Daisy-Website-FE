'use client';
import { useEffect } from 'react';
import { GetTheAppScan } from '@/components/getTheApp/GetTheApp';
import { HeroPage } from '@/components/heroSection/HeroSection';
import Separator from '@/components/separator/Separator';
import { t } from '@/lib/constants/i18n';
import { getTheAppPageData } from '@/lib/constants/pages/getTheAppPageData';
import { buttonAppData } from '@/lib/constants/shared/buttonAppData';

export const GetTheAppClient = ({ lang }: { lang: string }) => {

  // Soft-nav fallback for visitors who reach /get-the-app via some path that
  // skipped MobileAppRedirector (programmatic nav, internal links not picked
  // up by the document-level handler, etc.). On phone viewports, routes to
  // the App Store or Play Store based on device OS. Unknown UAs stay on the
  // on-site page, which shows both store buttons.
  useEffect(() => {
    try {
      if (!window.matchMedia('(max-width: 767px)').matches) return;
      const ua = navigator.userAgent || '';
      const win = window as unknown as { MSStream?: unknown };
      if (/iPad|iPhone|iPod/.test(ua) && !win.MSStream) {
        window.location.replace(buttonAppData.en.appStore.link);
      } else if (/android/i.test(ua)) {
        window.location.replace(buttonAppData.en.googlePlay.link);
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
