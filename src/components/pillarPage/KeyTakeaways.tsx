interface KeyTakeawaysProps {
  takeaways: string[];
}
import { renderSafeHtml } from '@/lib/utils/htmlContent';

export function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div
      className="mx-auto max-w-5xl px-4 py-8"
      data-geo-answer="true"
    >
      <div className="rounded-2xl border border-primaryBtn/30 bg-primary/5 p-6 md:p-8">
        <h2 className="mb-4 text-lg font-bold text-[#172524]">
          Key Takeaways
        </h2>
        <ul className="space-y-2">
          {takeaways.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#455150]">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <span
                dangerouslySetInnerHTML={{ __html: renderSafeHtml(item) }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
