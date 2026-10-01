'use client';
import { ArrowSectionDown } from '@/assets/icons/arrowSectionDown/arrowSectionDown';
import { cn } from '@/lib/utils';
import { HomeIcon } from '@/assets/icons/homeIcon/HomeIcon';
import { BreadcrumbWithCustomSeparator } from '../blogPage/blogPosts/BreadCrumbs';
import { usePathname } from 'next/navigation';

// Scroll prompts callers pass in English; rendered in Arabic on /ar/ pages.
const SCROLL_PROMPT_AR: Record<string, string> = {
  'Don’t believe us? Keep reading...': 'لا تصدقنا؟ تابع القراءة...',
  'Explore the features': 'استكشف الميزات',
};

export const HeroPage = ({
  title,
  description,
  hiddenArrow,
  visibleDescriiton,
  heightScreen,
  styleSection,
  secondDescription,
  isVisibleBreadCrumbs,
  bredCrumbTitle,
  bredCrumbDesription,
  blockRef,
  titleScroll = 'Don’t believe us? Keep reading...',
  features,
  bredCrumbHref,
}: {
  title: string;
  description: string;
  hiddenArrow: boolean;
  visibleDescriiton: boolean;
  heightScreen: boolean;
  styleSection?: string;
  secondDescription?: string;
  isVisibleBreadCrumbs?: boolean;
  bredCrumbTitle?: string;
  bredCrumbDesription?: string;
  blockRef?: any;
  titleScroll?: string;
  features?: boolean;
  bredCrumbHref?: string;
}) => {
  const path = usePathname();
  const isAr = path?.split('/')[1] === 'ar';
  const scrollPrompt = isAr ? SCROLL_PROMPT_AR[titleScroll] ?? titleScroll : titleScroll;
  const Heading = features ? 'h1' : 'h2';
  const scrollToTopOfBlock = () => {
    if (blockRef.current) {
      blockRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div
      className={cn(
        `  w-full  bg-primary pt-[100px] flex flex-col justify-start items-center px-4 ${styleSection}`,
        { 'h-[95vh]': heightScreen },
      )}
    >
      {isVisibleBreadCrumbs && (
        <div className="flex pb-28 ltr:mr-auto rtl:ml-auto">
          <HomeIcon className="ltr:mr-2 rtl:ml-2 " />
          <BreadcrumbWithCustomSeparator
            bredCrumbTitle={bredCrumbTitle}
            bredCrumbDesription={bredCrumbDesription}
          />
        </div>
      )}
      {title !== '' && (
        <p className="font-semibold text-base text-[#F2DAD4] uppercase text-center">
          {title}
        </p>
      )}
      <Heading className="text-center mt-2 font-semibold text-[32px] leading-10 text-white md:px-16 lg:px-32 xl:px-48 md:text-[48px] md:leading-[60px]">
        {description}
      </Heading>
      <p
        className={cn(
          'text-base ltr:font-montserrat font-normal text-[#D5D9D9] mt-2 text-center md:px-16 lg:px-32 xl:px-48',
          {
            hidden: visibleDescriiton,
            'pb-16': hiddenArrow,
          },
        )}
      >
        {secondDescription}
      </p>
      <div
        className={cn(' flex flex-col justify-center my-auto', {
          hidden: hiddenArrow,
          'md:hidden': features,
        })}
      >
        <p className="text-base text-white font-normal ltr:font-montserrat">
          {scrollPrompt}
        </p>
        <span
          onClick={scrollToTopOfBlock}
          className={cn(
            'flex justify-center items-center rounded-full border border-primaryBtn w-[40px] h-[40px] cursor-pointer mx-auto mt-6',
          )}
        >
          <ArrowSectionDown />
        </span>
      </div>
    </div>
  );
};
