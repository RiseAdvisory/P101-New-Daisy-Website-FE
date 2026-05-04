import { TestimonialsCustomerList } from '@/components/blogPage/testimonialsPage/ListTestimonials';
import { OurPartnersSection } from '@/components/ourPartners/OurPartnersSection';
import Separator from '@/components/separator/Separator';
import { testimonialsHeroData } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';
import { ResourceListingHero } from '@/components/resources/ResourceListingHero';

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
      <ResourceListingHero
        locale={locale}
        eyebrow={
          hero?.bredCrumbDesription ??
          (isRtl ? 'الموارد / شهادات العملاء' : 'Resources / Testimonials')
        }
        title={hero?.title ?? ''}
        description={hero?.description ?? ''}
        secondaryDescription={hero?.secondDescription}
      />
      <TestimonialsCustomerList textMore={hero?.textMoreList ?? ''} />
      <div className="bg-[#F8F5F3] px-4 md:px-20">
        <Separator className="bg-[#D5D9D9]" />
      </div>
      <OurPartnersSection stylePartners="!bg-[#F8F5F3] !mt-0" />
    </>
  );
}
