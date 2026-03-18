import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getBlogPostBySlug } from '@/lib/api/blog';

interface ClusterArticle {
  slug: string;
  userType: 'business' | 'professional';
}

interface ClusterArticleGridProps {
  articles: ClusterArticle[];
}

export async function ClusterArticleGrid({ articles }: ClusterArticleGridProps) {
  if (!articles || articles.length === 0) return null;

  const resolvedArticles = (
    await Promise.all(
      articles.map(async ({ slug, userType }) => {
        const post = await getBlogPostBySlug(userType, slug, 'en');
        if (!post) return null;
        return {
          slug,
          userType,
          title: post.attributes.title,
          description: post.attributes.description,
        };
      })
    )
  ).filter(Boolean);

  if (resolvedArticles.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="mb-8 text-2xl font-bold text-[#172524]">
        Related Articles
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resolvedArticles.map((article) =>
          article ? (
            <Link
              key={article.slug}
              href={`/en/resources/blog/${article.userType === 'business' ? 'businesses' : 'professionals'}/${article.slug}`}
              className="group flex flex-col rounded-xl border border-[#E8E9E9] bg-white p-6 transition-all hover:border-primaryBtn/30 hover:shadow-md"
            >
              <h3 className="text-base font-bold text-[#172524] transition-colors group-hover:text-primary">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#455150] line-clamp-2">
                {article.description}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read more
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ) : null
        )}
      </div>
    </section>
  );
}
