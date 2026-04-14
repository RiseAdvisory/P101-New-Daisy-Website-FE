'use client';
import Image from 'next/image';
import { ClockIcon } from '@/assets/icons/clockIcon/ClockIcon';
import { CalendarIcon } from '@/assets/icons/calendarIcon/CalendarIcon';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { usePostStore } from '@/store/post';
import { useChoosePath } from '@/store/currentPath';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';
import { formatBlogDate, formatReadTime } from '@/lib/utils/blogFormat';
import { getAuthorBio } from '@/lib/constants/blog/authorData';
import { translateTag } from '@/lib/constants/blog/tagTranslations';

export const CardPosts = ({
  redirect,
  style,
  listCard,
  typePath,
}: {
  redirect: boolean;
  style?: string;
  listCard: any;
  typePath: string;
}) => {
  const router = useRouter();
  const { handlePost, setMarkdownPost, setHandleId } = usePostStore();
  const { choosePatnName } = useChoosePath();
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  const isRtl = locale === 'ar';

  useEffect(() => {
    handlePost({});
    setMarkdownPost({});
  }, [handlePost, setMarkdownPost]);
  //sorting lists

  const sortingList = listCard?.sort(
    (a: any, b: any) => b.attributes.sortId - a.attributes.sortId,
  );

  useEffect(() => {
    choosePatnName(typePath);
  }, []);

  return (
    <div className="bg-[#F8F5F3]">
      <div className="h-[230px] md:h-[240px] bg-primary"></div>
      <ul className="bg-[#F8F5F3] px-4 space-y-8 pb-[28px] md:pb-[140px] translate-y-[-231px] md:translate-y-[-241px] bg-transparent -mb-[230px] md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
        {listCard &&
          sortingList.map((item: any, index: number) => {
            const imageData = item.attributes.image?.data?.[0];
            const imagePosts = imageData?.attributes?.formats?.large?.url
              ?? imageData?.attributes?.url
              ?? '/images/blog/placeholder.webp';
            const ownerData = item.attributes.iconOwner?.data?.[0];
            const ownerSrc = ownerData?.attributes?.url ?? '/images/blog/author-daisy-team.webp';
            return (
              <li
                onClick={() => {
                  if (redirect) {
                    setHandleId(item.id);
                    handlePost(item.attributes);
                    setMarkdownPost(item.attributes.aboutPosts);
                    // Navigate to blog post using slug
                    if (item.attributes.slug) {
                      router.push(`/${locale}/resources/blog/${typePath}/${item.attributes.slug}`);
                    } else {
                      // Fallback to old route if slug doesn't exist yet
                      router.push(`/${locale}/resources/legal`);
                    }
                  }
                }}
                key={index}
                className={`w-full mx-auto flex flex-col items-center text-start rounded-[12px] bg-white border overflow-hidden ${style} hover:shadow-2xl`}
              >
                <div className="w-full h-[240px]">
                  <Image
                    src={imagePosts}
                    alt="Blog article thumbnail"
                    className="w-full object-cover h-[230px] md:h-[240px]"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="px-6 py-4 mt-6">
                  <div className="flex justify-start gap-2 text-sm">
                    <span className="px-3 py-1 text-[#2543AD] bg-[#E9ECF7] rounded-sm">
                      {translateTag(item.attributes.tags?.category || '', 'category', locale)}
                    </span>
                    <span className="px-3 py-1 text-[#14736F] bg-[#E7F1F1] rounded-sm">
                      {translateTag(item.attributes.tags?.topic || '', 'topic', locale)}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg ltr:font-montserrat font-semibold">
                    {item.attributes.title}
                  </h3>

                  <div
                    className={`flex flex-wrap items-center text-gray-500 text-sm mt-4 ${
                      isRtl ? 'divide-x-reverse' : ''
                    } divide-x divide-gray-300/70`}
                    dir={isRtl ? 'rtl' : 'ltr'}
                  >
                    <div className="hidden md:flex items-center px-2 first:pl-0 last:pr-0">
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
                    <span className="flex items-center px-2 first:pl-0 last:pr-0">
                      <CalendarIcon className="ltr:mr-[10px] rtl:ml-[10px]" />
                      {formatBlogDate(
                        item.attributes.user?.data?.attributes?.date ?? item.attributes.user?.date ?? item.attributes.publishedAt,
                        locale,
                        item.attributes.user?.data?.attributes?.date ?? item.attributes.user?.date ?? ''
                      )}
                    </span>
                    <span className="flex items-center px-2 first:pl-0 last:pr-0">
                      <ClockIcon className="ltr:mr-2 rtl:ml-2" />
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
