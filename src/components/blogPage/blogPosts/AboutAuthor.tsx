'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { usePostStore } from '@/store/post';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';
import { getAuthorBio } from '@/lib/constants/blog/authorData';

const uiStrings = {
  en: { aboutTheAuthor: 'About the Author' },
  ar: { aboutTheAuthor: 'عن الكاتب' },
};

export const AboutAuthor = () => {
  const { post } = usePostStore();
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);

  const authorName =
    post?.user?.data?.attributes?.name || post?.user?.name || '';
  const author = getAuthorBio(authorName, locale);

  if (!author) return null;

  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  const isRtl = locale === 'ar';

  return (
    <div className="px-4 md:px-[280px] pb-10 md:pb-16" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="border-t border-gray-200 pt-8">
        <div className="flex items-start gap-4">
          <Image
            src={author.image}
            alt={author.name}
            width={64}
            height={64}
            className="rounded-full shrink-0"
          />
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              {t.aboutTheAuthor}
            </p>
            <p className="text-base font-semibold text-gray-900">
              {author.name}
            </p>
            <p className="text-sm text-gray-500 mb-2">{author.jobTitle}</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {author.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
