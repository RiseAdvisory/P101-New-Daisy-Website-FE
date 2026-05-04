import Image from 'next/image';
import Link from 'next/link';
import { ClockIcon } from '@/assets/icons/clockIcon/ClockIcon';
import { CalendarIcon } from '@/assets/icons/calendarIcon/CalendarIcon';
import { blogHeroData } from '@/lib/constants/blog/blogData';
import { t } from '@/lib/constants/i18n';
import { formatBlogDate, formatReadTime } from '@/lib/utils/blogFormat';
import { getAuthorBio } from '@/lib/constants/blog/authorData';
import { translateTag } from '@/lib/constants/blog/tagTranslations';
import { getAllBlogPosts, type UserType, type BlogPost } from '@/lib/api/blog';

const PERSONAS: UserType[] = ['business', 'professional', 'customer'];

interface BlogPostListProps {
  locale: string;
}

export async function BlogPostList({ locale }: BlogPostListProps) {
  const isRtl = locale === 'ar';
  const hero = t(blogHeroData, locale);

  // Fetch posts for every persona so all post URLs end up in the SSR HTML;
  // discoverability used to be blocked because the whole page was a client
  // component and no <a href> tags appeared in the initial response.
  const grouped = await Promise.all(
    PERSONAS.map(async (persona) => {
      const posts = await getAllBlogPosts(persona, locale);
      return {
        persona,
        posts: (posts || []).slice().sort(
          (a: BlogPost, b: BlogPost) =>
            ((b.attributes?.sortId as number) ?? 0) - ((a.attributes?.sortId as number) ?? 0),
        ),
      };
    }),
  );

  const allPosts = grouped.flatMap((g) =>
    g.posts.map((p) => ({ ...p, _persona: g.persona })),
  );

  return (
    <div className="w-full" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero — server-rendered */}
      <section className="w-full bg-primary px-4 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#D5D9D9]">
            {hero.breadcrumbs ?? (isRtl ? 'الموارد / المقالات' : 'Resources / Blog Posts')}
          </p>
          <h1 className="text-white text-[32px] leading-10 font-semibold md:text-[48px] md:leading-[60px]">
            {hero.title ?? ''}
          </h1>
          {hero.subtitle && (
            <p className="mt-4 text-lg text-[#D5D9D9] md:text-xl ltr:font-montserrat">
              {hero.subtitle}
            </p>
          )}
          {hero.description && (
            <p className="mt-2 text-base text-[#A8B0AF] ltr:font-montserrat">
              {hero.description}
            </p>
          )}
        </div>
      </section>

      {/* Post grid — server-rendered <a href> per card */}
      <section className="bg-[#F8F5F3] px-4 pb-[140px]">
        <ul className="mx-auto -mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {allPosts.map((item) => {
            const persona = (item as typeof item & { _persona: UserType })._persona;
            const a = item.attributes as Record<string, unknown> & {
              slug?: string;
              title?: string;
              description?: string;
              tags?: { category?: string; topic?: string };
              image?: { data?: Array<{ attributes?: { url?: string; formats?: { large?: { url?: string } } } }> };
              iconOwner?: { data?: Array<{ attributes?: { url?: string } }> };
              user?: { data?: { attributes?: { name?: string; date?: string; time?: string } }; name?: string; date?: string; time?: string };
              publishedAt?: string;
            };
            const imageData = a.image?.data?.[0];
            const imageSrc =
              imageData?.attributes?.formats?.large?.url ??
              imageData?.attributes?.url ??
              '/images/blog/placeholder.webp';
            const ownerSrc =
              a.iconOwner?.data?.[0]?.attributes?.url ??
              '/images/blog/author-daisy-team.webp';
            const authorName =
              getAuthorBio(
                a.user?.data?.attributes?.name ?? a.user?.name ?? '',
                locale,
              )?.name ??
              a.user?.data?.attributes?.name ??
              a.user?.name ??
              '';
            const dateRaw =
              a.user?.data?.attributes?.date ??
              a.user?.date ??
              a.publishedAt ??
              '';
            const timeRaw = a.user?.data?.attributes?.time ?? a.user?.time;
            const href = a.slug
              ? `/${locale}/resources/blog/${persona}/${a.slug}`
              : `/${locale}/resources/blog-post`;

            return (
              <li
                key={`${persona}-${a.slug ?? Math.random()}`}
                className="overflow-hidden rounded-xl border bg-white transition hover:shadow-2xl"
              >
                <Link href={href} className="block">
                  <div className="h-[240px] w-full">
                    <Image
                      src={imageSrc}
                      alt={a.title ?? ''}
                      width={1000}
                      height={1000}
                      className="h-[240px] w-full object-cover"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex justify-start gap-2 text-sm">
                      {a.tags?.category && (
                        <span className="rounded-sm bg-[#E9ECF7] px-3 py-1 text-[#2543AD]">
                          {translateTag(a.tags.category, 'category', locale)}
                        </span>
                      )}
                      {a.tags?.topic && (
                        <span className="rounded-sm bg-[#E7F1F1] px-3 py-1 text-[#14736F]">
                          {translateTag(a.tags.topic, 'topic', locale)}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold ltr:font-montserrat">
                      {a.title}
                    </h3>
                    <div
                      className={`mt-4 flex flex-wrap items-center text-sm text-gray-500 ${
                        isRtl ? 'divide-x-reverse' : ''
                      } divide-x divide-gray-300/70`}
                    >
                      <span
                        className={`hidden items-center px-2 md:flex ${
                          isRtl ? 'first:pr-0 last:pl-0' : 'first:pl-0 last:pr-0'
                        }`}
                      >
                        <Image
                          src={ownerSrc}
                          alt=""
                          width={18}
                          height={18}
                          className="rounded-full ltr:mr-[10px] rtl:ml-[10px]"
                        />
                        <span className="text-sm text-gray-500">{authorName}</span>
                      </span>
                      <span
                        className={`flex items-center px-2 ${
                          isRtl ? 'first:pr-0 last:pl-0' : 'first:pl-0 last:pr-0'
                        }`}
                      >
                        <CalendarIcon className="ltr:mr-[10px] rtl:ml-[10px]" />
                        {formatBlogDate(dateRaw, locale, dateRaw)}
                      </span>
                      <span
                        className={`flex items-center px-2 ${
                          isRtl ? 'first:pr-0 last:pl-0' : 'first:pl-0 last:pr-0'
                        }`}
                      >
                        <ClockIcon className="ltr:mr-2 rtl:ml-2" />
                        {formatReadTime(timeRaw, locale)}
                      </span>
                    </div>
                    {a.description && (
                      <p className="mt-2 text-sm text-[#455150] ltr:font-montserrat">
                        {a.description}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
