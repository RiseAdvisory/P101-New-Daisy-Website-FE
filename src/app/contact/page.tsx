import { SupportSection } from '@/components/contactsPage/SupportSection';
import { HeroPage } from '@/components/heroSection/HeroSection';

const Contacts = () => {
  return (
    <div className="w-full">
      <HeroPage
        hiddenArrow={true}
        visibleDescriiton={false}
        title="Contact Us"
        description="Get In Touch"
        heightScreen={false}
        styleSection="pb-[100px]"
        secondDescription="Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? 
        Let us know"
      />
      <SupportSection />
    </div>
  );
};
export default Contacts;
