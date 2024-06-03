import { Vacansies } from '@/components/careersPage/Vacancies';
import { HeroPage } from '@/components/heroSection/HeroSection';

const Careers = () => {
  return (
    <div className="w-full">
      <HeroPage
        hiddenArrow={false}
        visibleDescriiton={false}
        title="CAREERS"
        description="Current Openings"
        heightScreen={true}
        styleSection="pb-[100px]"
        secondDescription="We are always on the lookout for passionate and self motivated people to join our team. Serving our customers and making sure they are happy with the outcome is something we strive to do continuously."
      />
      <Vacansies />
    </div>
  );
};
export default Careers;
