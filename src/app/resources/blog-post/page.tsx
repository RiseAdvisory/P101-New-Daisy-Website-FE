import { CardPosts } from '@/components/blogPage/blogPosts/CardPosts';
import { HeroPage } from '@/components/heroSection/HeroSection';

const BlogPosts = () => {
  return (
    <div className="w-full">
      <HeroPage
        hiddenArrow={true}
        visibleDescriiton={false}
        title="CONTACT US"
        description="Stories & Ideas"
        heightScreen={false}
        styleSection="pb-[100px]"
        secondDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <CardPosts />
    </div>
  );
};
export default BlogPosts;
