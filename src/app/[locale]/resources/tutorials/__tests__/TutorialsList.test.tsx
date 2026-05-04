/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import type { TutorialCategoryWithArticles } from '@/lib/constants/tutorials/getTutorialArticles';

const businessCats: TutorialCategoryWithArticles[] = [
  {
    category: { slug: 'getting-started', label: { en: 'Getting Started', ar: 'البدء' } },
    articles: [
      { slug: 'biz-a', title: 'Business A', linkPath: '/resources/blog/business/biz-a', description: 'd', image: '/x.webp', readingTime: '5 min' },
      { slug: 'shared-1', title: 'Shared 1', linkPath: '/resources/blog/business/shared-1', description: 'd', image: '/x.webp', readingTime: '5 min' },
    ] as TutorialCategoryWithArticles['articles'],
  },
];
const professionalCats: TutorialCategoryWithArticles[] = [
  {
    category: { slug: 'getting-started', label: { en: 'Getting Started', ar: 'البدء' } },
    articles: [
      // Same slug as business — must be deduped in the hub view.
      { slug: 'shared-1', title: 'Shared 1 Pro', linkPath: '/resources/blog/professional/shared-1', description: 'd', image: '/x.webp', readingTime: '5 min' },
      { slug: 'pro-a', title: 'Pro A', linkPath: '/resources/blog/professional/pro-a', description: 'd', image: '/x.webp', readingTime: '5 min' },
    ] as TutorialCategoryWithArticles['articles'],
  },
];

jest.mock('@/lib/constants/tutorials/getTutorialArticles', () => {
  const actual = jest.requireActual('@/lib/constants/tutorials/getTutorialArticles');
  return {
    ...actual,
    getTutorialArticles: jest.fn((persona: string) =>
      persona === 'professional' ? professionalCats : businessCats,
    ),
  };
});

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

jest.mock('@/lib/utils/locale', () => {
  const actual = jest.requireActual('@/lib/utils/locale');
  return {
    ...actual,
    localePath: (path: string, locale: string) => `/${locale}${path}`,
  };
});

import { TutorialsList } from '../TutorialsList';

describe('TutorialsList', () => {
  it('renders both personas` articles in the hub view, deduped by slug', () => {
    const { container } = render(<TutorialsList locale="en" />);
    const hrefs = Array.from(container.querySelectorAll('a[href]'))
      .map((a) => a.getAttribute('href'))
      .filter((h): h is string => Boolean(h?.includes('/resources/blog/')));
    // Each unique slug appears exactly once across both personas.
    const slugs = hrefs.map((h) => h.split('/').pop());
    expect(new Set(slugs)).toEqual(new Set(['biz-a', 'shared-1', 'pro-a']));
    expect(hrefs).toHaveLength(3);
  });

  it('renders only the selected persona`s articles when persona prop is set', () => {
    const { container } = render(
      <TutorialsList locale="en" persona="business" />,
    );
    const hrefs = Array.from(container.querySelectorAll('a[href]'))
      .map((a) => a.getAttribute('href'))
      .filter((h): h is string => Boolean(h?.includes('/resources/blog/')));
    const slugs = hrefs.map((h) => h.split('/').pop());
    expect(new Set(slugs)).toEqual(new Set(['biz-a', 'shared-1']));
    expect(hrefs).toHaveLength(2);
  });

  it('renders the Arabic hreflang dir on /ar locale', () => {
    const { container } = render(<TutorialsList locale="ar" />);
    expect(container.firstElementChild?.getAttribute('dir')).toBe('rtl');
  });
});
