import { FC } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedPageLink {
  title: string;
  url: string;
  description: string;
}

interface RelatedPagesProps {
  links: RelatedPageLink[];
}

export const RelatedPages: FC<RelatedPagesProps> = ({ links }) => {
  if (links.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-[#172524]">
          Related Comparisons
        </h2>
        <p className="mb-10 text-center text-[#455150]">
          Explore more guides to find the right solution for your business
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="group flex flex-col rounded-xl border border-[#E8E9E9] bg-white p-6 transition-all hover:border-primaryBtn/30 hover:shadow-md"
            >
              <h3 className="text-base font-bold text-[#172524] transition-colors group-hover:text-primary">
                {link.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#455150]">
                {link.description}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read more
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPages;
