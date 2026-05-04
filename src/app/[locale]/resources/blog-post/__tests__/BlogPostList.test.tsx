/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import type { LocalBlogPost } from '@/lib/constants/blog/blogData';

const buildPost = (
  id: number,
  slug: string,
  sortId: number,
  overrides: Partial<LocalBlogPost['attributes']> = {},
): LocalBlogPost => ({
  id,
  attributes: {
    title: `Post ${id}`,
    slug,
    description: `Description ${id}`,
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
    publishedAt: '2026-01-01T00:00:00.000Z',
    locale: 'en',
    sortId,
    ...overrides,
  } as LocalBlogPost['attributes'],
});

const businessPosts = [
  buildPost(1, 'business-a', 1),
  buildPost(2, 'business-b', 2),
];
const professionalPosts = [buildPost(3, 'pro-a', 1)];
const customerPosts = [buildPost(4, 'cust-a', 1)];

jest.mock('@/lib/api/blog', () => ({
  getAllBlogPosts: jest.fn(async (userType: string) => {
    if (userType === 'business') return businessPosts;
    if (userType === 'professional') return professionalPosts;
    if (userType === 'customer') return customerPosts;
    return [];
  }),
}));

jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  };
});

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: (props: { src: string; alt?: string }) => <img {...props} />,
}));

import { BlogPostList } from '../BlogPostList';

async function renderAsync(node: Promise<React.ReactElement>) {
  const resolved = await node;
  return render(resolved);
}

describe('BlogPostList', () => {
  it('renders an anchor link for every post across all three personas when no persona filter', async () => {
    const { container } = await renderAsync(BlogPostList({ locale: 'en' }));
    const hrefs = Array.from(container.querySelectorAll('a[href]'))
      .map((a) => a.getAttribute('href'))
      .filter((h): h is string => Boolean(h?.includes('/resources/blog/')));
    expect(hrefs).toEqual(
      expect.arrayContaining([
        '/en/resources/blog/business/business-a',
        '/en/resources/blog/business/business-b',
        '/en/resources/blog/professional/pro-a',
        '/en/resources/blog/customer/cust-a',
      ]),
    );
    expect(hrefs).toHaveLength(4);
  });

  it('only renders the chosen persona`s posts when persona prop is set', async () => {
    const { container } = await renderAsync(
      BlogPostList({ locale: 'en', persona: 'business' }),
    );
    const hrefs = Array.from(container.querySelectorAll('a[href]'))
      .map((a) => a.getAttribute('href'))
      .filter((h): h is string => Boolean(h?.includes('/resources/blog/')));
    expect(hrefs.every((h) => h.includes('/business/'))).toBe(true);
    expect(hrefs).toHaveLength(2);
  });

  it('sorts posts by sortId descending', async () => {
    const { container } = await renderAsync(
      BlogPostList({ locale: 'en', persona: 'business' }),
    );
    const titles = Array.from(container.querySelectorAll('h3')).map(
      (h) => h.textContent,
    );
    // sortId=2 (Post 2) should appear before sortId=1 (Post 1).
    expect(titles[0]).toBe('Post 2');
    expect(titles[1]).toBe('Post 1');
  });

  it('renders the Arabic hreflang dir on /ar locale', async () => {
    const { container } = await renderAsync(BlogPostList({ locale: 'ar' }));
    expect(container.firstElementChild?.getAttribute('dir')).toBe('rtl');
  });

  it('falls back to /resources/blog-post when a post has no slug', async () => {
    const blogModule = await import('@/lib/api/blog');
    (blogModule.getAllBlogPosts as jest.Mock).mockResolvedValueOnce([
      buildPost(99, '', 1, { slug: '' }),
    ]);
    (blogModule.getAllBlogPosts as jest.Mock).mockResolvedValueOnce([]);
    (blogModule.getAllBlogPosts as jest.Mock).mockResolvedValueOnce([]);
    const { container } = await renderAsync(BlogPostList({ locale: 'en' }));
    const slugLessLink = container.querySelector(
      'a[href="/en/resources/blog-post"]',
    );
    expect(slugLessLink).not.toBeNull();
  });
});
