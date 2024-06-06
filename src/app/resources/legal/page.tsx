import { AboutPosts } from '@/components/blogPage/blogPosts/AbouPosts';
import { CreatePerfect } from '@/components/blogPage/blogPosts/CreatePerfect';
import { HeroBlogPage } from '@/components/blogPage/blogPosts/HeroBlogId';
import { SimiliarTopick } from '@/components/blogPage/blogPosts/SimiliarTopics';

const Legal = () => {
  return (
    <div className="w-full">
      <HeroBlogPage />
      <AboutPosts />
      <CreatePerfect />
      <SimiliarTopick />
    </div>
  );
};
export default Legal;
