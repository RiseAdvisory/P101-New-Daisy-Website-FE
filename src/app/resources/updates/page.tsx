import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { ListUpdatesResources } from '@/lib/constants/listCardUpdates';

const Updates = () => {
  return (
    <div>
      <HeroPage
        isVisibleBreadCrumbs={true}
        bredCrumbDesription="Resources"
        bredCrumbTitle="Stay Updated"
        hiddenArrow={true}
        visibleDescriiton={false}
        title="NEWS"
        description="Stay Updated"
        heightScreen={false}
        styleSection="pb-[100px] pt-6 px-[16px]"
        secondDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <CardPosts listCards={ListUpdatesResources} redirect={false} />
    </div>
  );
};
export default Updates;
