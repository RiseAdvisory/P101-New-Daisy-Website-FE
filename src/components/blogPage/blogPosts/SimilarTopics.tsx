'use client';
import Image from 'next/image';
import { CalendarIcon } from '@/assets/icons/calendarIcon/CalendarIcon';
import { ClockIcon } from '@/assets/icons/clockIcon/ClockIcon';
import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { usePostStore } from '@/store/post';
import { useMyContext } from '@/app/MyContext';
import { blogPostsByUserType } from '@/lib/constants/blog/blogData';
import { getLocaleFromPathname } from '@/lib/utils/locale';
import { formatBlogDate, formatReadTime } from '@/lib/utils/blogFormat';
import { getAuthorBio } from '@/lib/constants/blog/authorData';
import { translateTag } from '@/lib/constants/blog/tagTranslations';

export const SimilarTopics = ({ titleSimilar }: { titleSimilar: string }) => {
  const [listCard, setListCards] = useState<any>();

  const router = useRouter();
  const { handlePost } = usePostStore();
  const { userChange: currentPage } = useMyContext();

  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const isRtl = locale === 'ar';

  useEffect(() => {
    let type = 'customer';
    if (currentPage === '/customer') {
      type = 'customer';
    }
    if (currentPage === '/business') {
      type = 'business';
    }
    if (currentPage === '/professional') {
      type = 'professional';
    }

    // Load from local data, filtered by current locale
    const allPosts = blogPostsByUserType[type] || [];
    const localePosts = allPosts.filter(
      (p: any) => (p.attributes.locale || 'en') === locale
    );
    // Fall back to English if no posts for this locale
    setListCards(localePosts.length > 0 ? localePosts : allPosts.filter((p: any) => (p.attributes.locale || 'en') === 'en'));
  }, [currentPage, locale]);

  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className="text-[#172524] text-bold text-[32px] leading-[40px] pt-28 pb-10">
        {titleSimilar}
      </h2>
      <ul className="bg-[#F8F5F3] px-4 space-y-8 pb-[28px] md:pb-[140px] bg-transparent md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
        {listCard &&
          listCard.map((item: any, index: number) => {
            const imageData = item.attributes.image?.data?.[0];
            const imagePosts = imageData?.attributes?.url ?? '/images/blog/placeholder.webp';
            const ownerData = item.attributes.iconOwner?.data?.[0];
            const ownerSrc = ownerData?.attributes?.url ?? '/images/blog/author-daisy-team.webp';

            return (
              <li
                onClick={() => {
                  handlePost(item.attributes);
                  // Determine userType from currentPage
                  let userType = 'customer';
                  if (currentPage === '/business') userType = 'business';
                  if (currentPage === '/professional') userType = 'professional';

                  // Navigate to blog post using slug
                  if (item.attributes.slug) {
                    router.push(`/resources/blog/${userType}/${item.attributes.slug}`);
                  } else {
                    // Fallback to old route if slug doesn't exist yet
                    router.push('/resources/legal');
                  }
                }}
                key={index}
                className={`w-full mx-auto flex flex-col items-center text-start rounded-[12px] bg-white border overflow-hidden hover:shadow-2xl`}
              >
                <div className="w-full h-[240px]">
                  <Image
                    src={imagePosts}
                    alt="Beauty and wellness article"
                    className="w-full object-cover h-[230px] md:h-[240px]"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="px-6 py-4 mt-6">
                  <div className="flex justify-start gap-2 text-sm">
                    <span className="px-3 py-1 text-[#2543AD] bg-[#E9ECF7] rounded-sm ">
                      {translateTag(item.attributes.tags?.category || '', 'category', locale)}
                    </span>
                    <span className="px-3 py-1 text-[#14736F] bg-[#E7F1F1] rounded-sm">
                      {translateTag(item.attributes.tags?.topic || '', 'topic', locale)}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg ltr:font-montserrat font-semibold">
                    {item.attributes.title}
                  </h3>

                  <div className="flex justify-start gap-2 text-gray-500 text-sm mt-4" dir={isRtl ? 'rtl' : 'ltr'}>
                    <div className=" hidden md:flex ltr:border-r ltr:pr-[10px] rtl:border-l rtl:pl-[10px]">
                      <Image
                        src={ownerSrc}
                        alt="people"
                        className="ltr:mr-[10px] rtl:ml-[10px] rounded-full"
                        width={18}
                        height={18}
                      />
                      <span className=" text-gray-500 text-sm">
                        {getAuthorBio(item.attributes.user?.data?.attributes?.name ?? item.attributes.user?.name ?? '', locale)?.name ?? item.attributes.user?.data?.attributes?.name ?? item.attributes.user?.name}
                      </span>
                    </div>
                    <span className="flex items-center ltr:border-r ltr:pr-[10px] rtl:border-l rtl:pl-[10px]">
                      <CalendarIcon className="ltr:mr-[10px] rtl:ml-[10px]" />
                      {formatBlogDate(
                        item.attributes.user?.data?.attributes?.date
                          ?? item.attributes.user?.date
                          ?? item.attributes.publishedAt,
                        locale,
                        item.attributes.user?.data?.attributes?.date ?? item.attributes.user?.date ?? ''
                      )}
                    </span>
                    <span className="flex items-center rtl:pr-2">
                      <ClockIcon className="ltr:mr-[10px] rtl:ml-[10px]" />
                      {formatReadTime(
                        item.attributes.user?.data?.attributes?.time ?? item.attributes.user?.time,
                        locale
                      )}
                    </span>
                  </div>
                  <p className="mt-2 text-[#455150] text-sm ltr:font-montserrat">
                    {item.attributes.description}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
