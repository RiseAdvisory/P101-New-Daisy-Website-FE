import { FC } from 'react';
import { cn } from '@/lib/utils';
import { daisyDataI18n } from '@/lib/constants/competitors/competitorData';
import { Bot, Users, Palette, TrendingUp, Layers, Globe } from 'lucide-react';

interface DaisyDifferentiatorsProps {
  highlightFor?: string;
  locale?: string;
}

const differentiatorIcons = [Bot, Users, Palette, TrendingUp, Layers, Globe];

const uiStrings = {
  en: {
    heading: 'What Makes Daisy Different',
    subheading: 'Six differentiators that set Daisy apart from every competitor',
    keyAdvantage: 'Key advantage',
    descriptions: [
      'Handles bookings, payments, and customer service in Arabic and English around the clock.',
      'Marketplace, cashback rewards, and AI marketing working together to fill your calendar.',
      'White-label everything so clients see your brand, not ours.',
      'More businesses on the platform means smarter AI recommendations for everyone.',
      'Booking, payments, CRM, marketing, analytics, inventory, marketplace, and AI in one platform.',
      'Native Arabic and English with full RTL support, built for the GCC market and beyond.',
    ],
  },
  ar: {
    heading: 'ما الذي يميّز ديزي',
    subheading: 'ست ميزات تفصل ديزي عن كل منافس',
    keyAdvantage: 'ميزة رئيسية',
    descriptions: [
      'يتولى الحجوزات والمدفوعات وخدمة العملاء بالعربية والإنجليزية على مدار الساعة.',
      'السوق ومكافآت الكاشباك والتسويق بالذكاء الاصطناعي يعملون معاً لملء جدولك.',
      'وايت ليبل لكل شيء حتى يرى العملاء علامتك التجارية، وليس علامتنا.',
      'كلما زاد عدد الشركات على المنصة، أصبحت توصيات الذكاء الاصطناعي أذكى للجميع.',
      'الحجوزات والمدفوعات وإدارة العملاء والتسويق والتحليلات والمخزون والسوق والذكاء الاصطناعي في منصة واحدة.',
      'عربي وإنجليزي أصلي مع دعم كامل للاتجاه من اليمين لليسار، مصمم لسوق الخليج وما بعده.',
    ],
  },
};

export const DaisyDifferentiators: FC<DaisyDifferentiatorsProps> = ({
  highlightFor,
  locale = 'en',
}) => {
  const t = uiStrings[locale as keyof typeof uiStrings] || uiStrings.en;
  const localeDaisyData = daisyDataI18n[locale as keyof typeof daisyDataI18n] || daisyDataI18n.en;
  const differentiators = localeDaisyData.keyDifferentiators;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-center text-3xl font-bold text-[#172524]">
          {t.heading}
        </h2>
        <p className="mb-12 text-center text-[#455150]">
          {t.subheading}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((diff, index) => {
            const Icon = differentiatorIcons[index] ?? Layers;
            const description = t.descriptions[index] ?? '';
            const isHighlighted =
              highlightFor &&
              diff.toLowerCase().includes(highlightFor.toLowerCase());

            // Extract short title from the differentiator text
            const titleMatch = diff.match(/^([^(]+)/);
            const title = titleMatch ? titleMatch[1].trim() : diff;

            return (
              <div
                key={index}
                className={cn(
                  'group relative rounded-2xl border p-6 transition-all hover:shadow-md',
                  isHighlighted
                    ? 'border-primaryBtn/40 bg-primary/5 shadow-sm ring-2 ring-primary/10'
                    : 'border-[#E8E9E9] bg-white',
                )}
              >
                {isHighlighted && (
                  <div className="absolute -top-2.5 right-4">
                    <span className="rounded-full bg-primaryBtn px-3 py-0.5 text-[10px] font-bold text-white uppercase">
                      {t.keyAdvantage}
                    </span>
                  </div>
                )}

                <div
                  className={cn(
                    'mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors',
                    isHighlighted
                      ? 'bg-primaryBtn/20 text-primary'
                      : 'bg-primary/5 text-primary group-hover:bg-primary/10',
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 text-base font-bold text-[#172524]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#455150]">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DaisyDifferentiators;
