'use client';
import { HomeIcon } from '@/assets/icons/homeIcon/HomeIcon';
import { BreadcrumbWithCustomSeparator } from '@/components/blogPage/blogPosts/BreadCrumbs';
import Image from 'next/image';
import { CalendarIcon } from '@/assets/icons/calendarIcon/CalendarIcon';
import { ClockIcon } from '@/assets/icons/clockIcon/ClockIcon';
import { usePostStore } from '@/store/post';
import { useChoosePath } from '@/store/currentPath';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';
import { formatBlogDate, formatReadTime } from '@/lib/utils/blogFormat';
import { getAuthorBio } from '@/lib/constants/blog/authorData';

interface HeroBlogPageProps {
  breadcrumbTitle?: string;
  breadcrumbDescription?: string;
  breadcrumbHref?: string;
}

export const HeroBlogPage = ({ breadcrumbTitle, breadcrumbDescription, breadcrumbHref }: HeroBlogPageProps = {}) => {
  const { post } = usePostStore();
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const isRtl = locale === 'ar';

  const { patnName, bredcrumb } = useChoosePath();

  // Prefer props over store (avoids flash of stale store values)
  const finalBreadcrumbTitle = breadcrumbDescription || bredcrumb?.description;
  const finalBreadcrumbDesc = breadcrumbTitle || bredcrumb?.title;
  const finalBreadcrumbHref = breadcrumbHref || `/resources/${patnName}`;

  // Handle missing image data gracefully - now uses local paths directly
  const bgImage = post?.image?.data?.[0]?.attributes?.url
    ?? post?.picture?.data?.attributes?.url
    ?? '';

  const iconImg = post?.iconOwner?.data?.[0]?.attributes?.url
    ?? post?.user?.data?.attributes?.picture?.data?.attributes?.url
    ?? '';

  const rawDate = post?.user?.data?.attributes?.date || post?.user?.date || '';
  const dateText = formatBlogDate(rawDate || post?.publishedAt, locale, rawDate);
  const rawTime = post?.user?.data?.attributes?.time || post?.user?.time || '';
  const timeText = formatReadTime(rawTime, locale);

  return (
    <div
      className="relative bg-cover bg-center pb-[100px] md:pb-[400px] px-4 md:pl-[64px] md:pt-[25px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="flex pt-6">
        <HomeIcon className="ltr:mr-2 rtl:ml-2" />
        <BreadcrumbWithCustomSeparator
          bredCrumbTitle={finalBreadcrumbTitle}
          bredCrumbDesription={finalBreadcrumbDesc}
          bredCrumbHref={finalBreadcrumbHref}
        />
      </div>
      <h1 className="text-3xl font-bold text-white mt-8">{post?.title}</h1>
      <div
        className="flex justify-start text-[#ECEEED] text-sm mt-4 flex-col md:flex-row"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div
          className={`flex flex-wrap items-center ${
            isRtl ? 'divide-x-reverse' : ''
          } divide-x divide-white/25`}
        >
          <span className="flex items-center px-3 first:pl-0 last:pr-0">
            {iconImg && (
              <Image
                src={iconImg}
                alt="people"
                className="ltr:mr-[10px] rtl:ml-[10px] rounded-full"
                width={27}
                height={27}
              />
            )}
            <span className="text-sm">
              {getAuthorBio(
                post?.user?.data?.attributes?.name || post?.user?.name || '',
                locale,
              )?.name ||
                post?.user?.data?.attributes?.name ||
                post?.user?.name ||
                'Author'}
            </span>
          </span>
          <span className="flex items-center px-3 first:pl-0 last:pr-0">
            <CalendarIcon
              className="ltr:mr-[10px] rtl:ml-[10px]"
              fill="#ECEEED"
            />
            {dateText}
          </span>
          <span className="flex items-center px-3 first:pl-0 last:pr-0">
            <ClockIcon className="ltr:mr-2 rtl:ml-2" fill="#ECEEED" />
            {timeText}
          </span>
        </div>
      </div>
    </div>
  );
};
