import { TestimonialsCustomerList } from '@/components/blogPage/testimonialsPage/ListTestimonials';
import { OurPartnersSection } from '@/components/ourPartners/OurPartnersSection';
import Separator from '@/components/separator/Separator';
import { testimonialsHeroData } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';

interface TestimonialsListProps {
  locale: string;
}

export function TestimonialsList({ locale }: TestimonialsListProps) {
  const isRtl = locale === 'ar';
  // Default to the business persona's hero on the server. The
  // TestimonialsCustomerList client island below still personalises the
  // visible card list at runtime; SSR just needs a real hero for crawlers.
  const hero = t(testimonialsHeroData.business, locale);

  return (
    <>
      <section className="w-full bg-primary px-4 pt-32 pb-12 md:pt-40 md:pb-16" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#D5D9D9]">
            {hero?.bredCrumbDesription ??
              (isRtl ? 'الموارد / شهادات العملاء' : 'Resources / Testimonials')}
          </p>
          <h1 className="text-white text-[32px] leading-10 font-semibold md:text-[48px] md:leading-[60px]">
            {hero?.title ?? ''}
          </h1>
          {hero?.description && (
            <p className="mt-4 text-lg text-[#D5D9D9] md:text-xl ltr:font-montserrat">
              {hero.description}
            </p>
          )}
          {hero?.secondDescription && (
            <p className="mt-2 text-base text-[#A8B0AF] ltr:font-montserrat">
              {hero.secondDescription}
            </p>
          )}
        </div>
      </section>
      <TestimonialsCustomerList textMore={hero?.textMoreList ?? ''} />
      <div className="bg-[#F8F5F3] px-4 md:px-20">
        <Separator className="bg-[#D5D9D9]" />
      </div>
      <OurPartnersSection stylePartners="!bg-[#F8F5F3] !mt-0" />
    </>
  );
}
