import { CalloutBox } from './CalloutBox';
import Link from 'next/link';
import { renderSafeHtml } from '@/lib/utils/htmlContent';

interface PillarSectionProps {
  id: string;
  title: string;
  content: string;
  callout?: {
    type: 'tip' | 'warning' | 'info';
    text: string;
  };
  relatedLinks?: {
    title: string;
    url: string;
  }[];
}

export function PillarSection({
  id,
  title,
  content,
  callout,
  relatedLinks,
}: PillarSectionProps) {
  // Content is static TypeScript data (not user input), safe to render directly
  return (
    <section id={id} className="scroll-mt-24 py-8">
      <h2 className="mb-6 text-2xl font-bold text-[#172524] md:text-3xl">
        {title}
      </h2>
      <div
        className="blog-content prose-pillar text-[#455150]"
        dangerouslySetInnerHTML={{ __html: renderSafeHtml(content) }}
      />
      {callout && <CalloutBox type={callout.type} text={callout.text} />}
      {relatedLinks && relatedLinks.length > 0 && (
        <div className="mt-6 rounded-xl border border-[#E8E9E9] bg-[#F8F5F3] p-4">
          <p className="mb-2 text-sm font-semibold text-[#172524]">
            Related reading
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedLinks.map((link, i) => (
              <Link
                key={i}
                href={link.url}
                className="rounded-full border border-[#E8E9E9] bg-white px-3 py-1 text-sm text-[#455150] transition-colors hover:border-primary/20 hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
