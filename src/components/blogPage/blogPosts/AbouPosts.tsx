'use client';

import { usePostStore } from '@/store/post';
import DOMPurify from 'dompurify';

export const AboutPosts = () => {
  const { post } = usePostStore();

  // Get aboutPosts content directly from the post store (set by BlogPostContent)
  const aboutPost = post?.aboutPosts || '';

  // Sanitize HTML to prevent XSS attacks
  const sanitizedHTML = aboutPost ? DOMPurify.sanitize(aboutPost) : '';

  return (
    <div className="px-4 md:px-[280px] py-10 md:py-16">
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  );
};
