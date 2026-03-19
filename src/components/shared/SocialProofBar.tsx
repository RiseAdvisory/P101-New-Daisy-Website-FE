import { StatisticHighlight } from '@/components/geo/StatisticHighlight';

interface SocialProofBarProps {
  stats: Array<{ value: string; context: string }>;
}

export const SocialProofBar = ({ stats }: SocialProofBarProps) => {
  return (
    <section className="w-full bg-[#F8F5F3] py-10 md:py-14 px-4">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
        {stats.map((stat) => (
          <div key={stat.context} className="text-center px-6 py-4">
            <StatisticHighlight value={stat.value} context={stat.context} />
          </div>
        ))}
      </div>
    </section>
  );
};
