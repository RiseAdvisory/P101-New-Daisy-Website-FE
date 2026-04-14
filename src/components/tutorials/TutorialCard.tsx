import Image from 'next/image';
import Link from 'next/link';
import { TutorialArticle } from '@/lib/constants/tutorials/getTutorialArticles';
import { localePath } from '@/lib/utils/locale';
import { CalendarIcon } from '@/assets/icons/calendarIcon/CalendarIcon';
import { ClockIcon } from '@/assets/icons/clockIcon/ClockIcon';
import { formatBlogDate, formatReadTime } from '@/lib/utils/blogFormat';

interface TutorialCardProps {
  article: TutorialArticle;
  locale: string;
}

export const TutorialCard = ({ article, locale }: TutorialCardProps) => {
  const isRtl = locale === 'ar';
  const dateText = formatBlogDate(article.date, locale, article.date);
  const timeText = formatReadTime(article.readTime, locale);

  return (
    <Link
      href={localePath(article.linkPath, locale)}
      className="w-full flex flex-col items-center text-start rounded-[12px] bg-white border overflow-hidden hover:shadow-2xl transition-shadow"
    >
      <div className="w-full h-[240px]">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full object-cover h-[230px] md:h-[240px]"
          width={1000}
          height={1000}
          loading="lazy"
        />
      </div>
      <div className="px-6 py-4 mt-6">
        <h3 className="text-lg ltr:font-montserrat font-semibold line-clamp-2">
          {article.title}
        </h3>
        <div className="flex justify-start gap-2 text-gray-500 text-sm mt-4" dir={isRtl ? 'rtl' : 'ltr'}>
          {dateText && (
            <span className="flex items-center ltr:border-r ltr:pr-[10px] rtl:border-l rtl:pl-[10px]">
              <CalendarIcon className="ltr:mr-[10px] rtl:ml-[10px]" />
              {dateText}
            </span>
          )}
          {timeText && (
            <span className="flex items-center rtl:pr-2">
              <ClockIcon className="ltr:mr-2 rtl:ml-2" />
              {timeText}
            </span>
          )}
        </div>
        <p className="mt-2 text-[#455150] text-sm ltr:font-montserrat line-clamp-3">
          {article.description}
        </p>
      </div>
    </Link>
  );
};
