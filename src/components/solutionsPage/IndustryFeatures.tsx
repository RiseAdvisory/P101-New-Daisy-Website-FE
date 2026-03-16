import {
  Star,
  Calendar,
  Users,
  BarChart3,
  Wallet,
  MessageSquare,
  Shield,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface IndustryFeaturesProps {
  features: Feature[];
  heading?: string;
}

const iconMap: Record<string, LucideIcon> = {
  star: Star,
  calendar: Calendar,
  users: Users,
  chart: BarChart3,
  wallet: Wallet,
  message: MessageSquare,
  shield: Shield,
  sparkles: Sparkles,
};

export function IndustryFeatures({ features, heading }: IndustryFeaturesProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-[28px] font-semibold leading-9 text-gray-900 md:text-[36px] md:leading-[44px]">
          {heading || 'How Does Daisy Solve These Challenges?'}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base text-gray-600">
          Purpose-built tools designed to help your business grow, not just
          operate.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent =
              feature.icon && iconMap[feature.icon.toLowerCase()]
                ? iconMap[feature.icon.toLowerCase()]
                : Star;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-200 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-200 group-hover:bg-primary/20">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
