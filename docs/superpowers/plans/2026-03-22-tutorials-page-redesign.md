# Tutorials & Guides Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the `/resources/tutorials` page with a curated index that surfaces existing how-to/guide blog articles and standalone guides, organized by category and persona.

**Architecture:** A new `tutorialCatalog.ts` data file defines curated slug lists per persona/category. A helper function resolves slugs into renderable `TutorialArticle` objects. A new `TutorialCard` server component renders each article as a `<Link>`-wrapped card. The existing `TutorialsClient.tsx` is rewritten to render category sections with card grids.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, `next/link`, `next/image`

**Spec:** `docs/superpowers/specs/2026-03-22-tutorials-page-redesign-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/lib/constants/tutorials/tutorialCatalog.ts` | Create | Curated slug lists organized by persona and category with i18n labels |
| `src/lib/constants/tutorials/getTutorialArticles.ts` | Create | Resolves slugs → `TutorialArticle` objects from blog data + guide data |
| `src/components/tutorials/TutorialCard.tsx` | Create | Server-renderable card component using `<Link>` and `<Image>` |
| `src/app/[locale]/resources/tutorials/TutorialsClient.tsx` | Rewrite | Category-based card grid, persona-switched via header toggle |
| `src/app/[locale]/resources/tutorials/page.tsx` | Modify | Updated SEO metadata |
| `src/lib/constants/resources/resourcesData.ts` | Modify | Updated `tutorialsHeroData` copy for "Tutorials & Guides" framing |

---

### Task 1: Create Tutorial Catalog Data

**Files:**
- Create: `src/lib/constants/tutorials/tutorialCatalog.ts`

- [ ] **Step 1: Create the catalog file with types and data**

```typescript
// src/lib/constants/tutorials/tutorialCatalog.ts
import { I18nContent } from '@/lib/constants/i18n';

export interface TutorialCategory {
  slug: string;
  label: I18nContent<string>;
  articleSlugs: string[];
  guideSlugs: string[];
}

export interface TutorialCatalog {
  business: TutorialCategory[];
  professional: TutorialCategory[];
}

export const tutorialCatalog: TutorialCatalog = {
  business: [
    {
      slug: 'booking-scheduling',
      label: { en: 'Booking & Scheduling', ar: 'الحجز والجدولة' },
      articleSlugs: [
        'online-booking-for-salons-setup-guide',
        'reduce-salon-no-shows',
        'salon-waitlist-management',
        'group-booking-packages-salon',
        'mobile-booking-beauty-salon',
        'recurring-appointment-scheduling-salon',
      ],
      guideSlugs: [
        'set-up-online-booking-salon',
      ],
    },
    {
      slug: 'salon-management',
      label: { en: 'Salon Management & Software', ar: 'إدارة الصالون والبرمجيات' },
      articleSlugs: [
        'how-to-choose-salon-management-software',
        'switching-salon-software-migration-guide',
        'small-salon-software-options',
        'multi-location-salon-software',
        'salon-software-roi-calculator',
        'first-month-new-salon-platform',
        'calculate-roi-switching-salon-software',
      ],
      guideSlugs: [
        'choose-best-salon-software',
        'switch-from-fresha',
      ],
    },
    {
      slug: 'staff-management',
      label: { en: 'Staff & Team Management', ar: 'إدارة الموظفين والفريق' },
      articleSlugs: [
        'salon-staff-scheduling-best-practices',
        'salon-commission-structures-guide',
        'hiring-salon-staff-interview-guide',
        'salon-employee-retention-strategies',
        'staff-scheduling-salon-owners-guide',
        'commission-structures-keep-top-talent',
        'managing-permissions-salon-access-control',
      ],
      guideSlugs: [],
    },
    {
      slug: 'marketing',
      label: { en: 'Marketing & Promotions', ar: 'التسويق والعروض' },
      articleSlugs: [
        'complete-guide-salon-loyalty-programs',
        'salon-referral-programs-that-work',
        'email-marketing-salons-templates',
        'daisy-cashback-system-customer-loyalty',
        'salon-marketing-ideas-2026',
        'salon-social-media-marketing',
        'salon-email-marketing-templates',
        'salon-loyalty-program-guide',
        'salon-referral-program-guide',
        'google-my-business-salon-optimization',
        'salon-seo-local-search-guide',
        'managing-instagram-dms-beauty-business',
      ],
      guideSlugs: [
        'get-more-salon-clients',
      ],
    },
    {
      slug: 'client-retention',
      label: { en: 'Client Retention', ar: 'الاحتفاظ بالعملاء' },
      articleSlugs: [
        'salon-client-retention-rate-guide',
        'salon-rebooking-strategies',
        'salon-client-experience-guide',
        'salon-client-personalization-tips',
        'salon-win-back-campaigns',
        'salon-customer-feedback-guide',
      ],
      guideSlugs: [],
    },
    {
      slug: 'payments',
      label: { en: 'Payments & POS', ar: 'المدفوعات ونقاط البيع' },
      articleSlugs: [
        'salon-pos-system-buyers-guide',
        'salon-tipping-policies-digital',
        'contactless-payments-salon-setup',
        'salon-invoicing-billing-guide',
        'salon-pos-systems-2026-guide',
        'tipping-best-practices-beauty-businesses',
      ],
      guideSlugs: [],
    },
    {
      slug: 'communication',
      label: { en: 'Communication & Client Outreach', ar: 'التواصل والتوعية' },
      articleSlugs: [
        'automated-reminders-reduce-no-shows',
        'client-communication-templates-beauty',
        'sms-marketing-fill-salon-chairs',
        'review-request-automation-5-star-reviews',
      ],
      guideSlugs: [],
    },
    {
      slug: 'ai-technology',
      label: { en: 'AI & Technology', ar: 'الذكاء الاصطناعي والتكنولوجيا' },
      articleSlugs: [
        'ai-scheduling-saves-salon-owners-time',
        'predictive-analytics-salons-beginners-guide',
        'ai-receptionist-salon-customer-service',
        'multilingual-beauty-business-tools',
        'ai-beauty-industry-applications',
      ],
      guideSlugs: [],
    },
    {
      slug: 'analytics',
      label: { en: 'Analytics & Reporting', ar: 'التحليلات والتقارير' },
      articleSlugs: [
        'client-retention-reporting-know-your-numbers',
        'revenue-forecasting-beauty-businesses',
        'data-driven-salons-outperform-competition',
        'salon-revenue-reporting-guide',
      ],
      guideSlugs: [],
    },
    {
      slug: 'business-growth',
      label: { en: 'Business Growth', ar: 'نمو الأعمال' },
      articleSlugs: [
        'how-to-start-beauty-business',
        'salon-pricing-strategy-guide',
        'increase-salon-revenue-strategies',
        'expanding-salon-adding-locations',
        'salon-membership-subscription-models',
        'salon-business-plan-template',
        'scaling-beauty-business-multiple-locations',
        'multi-channel-acquisition-beauty-business-growth',
        'daisy-marketing-suite-attracts-new-clients',
        'sustainability-beauty-salons',
      ],
      guideSlugs: [],
    },
  ],
  professional: [
    {
      slug: 'freelance-business',
      label: { en: 'Freelance Business', ar: 'العمل الحر' },
      articleSlugs: [
        'freelance-stylist-scheduling-guide',
        'going-freelance-beauty-professional',
        'freelance-hairstylist-business-setup',
        'setting-prices-independent-beauty-pro',
        'personal-brand-beauty-industry',
        'finding-clients-freelance-beauty',
        'freelance-beauty-professional-insurance',
        'tax-guide-freelance-beauty-professionals',
        'scaling-freelancer-to-beauty-business',
        'building-freelance-beauty-business',
      ],
      guideSlugs: [],
    },
    {
      slug: 'marketing-brand',
      label: { en: 'Marketing & Brand Building', ar: 'التسويق وبناء العلامة التجارية' },
      articleSlugs: [
        'social-media-marketing-beauty-professionals',
        'independent-beauty-professional-marketing',
        'building-personal-brand-beauty-professional-guide',
      ],
      guideSlugs: [],
    },
    {
      slug: 'payments-income',
      label: { en: 'Payments & Income', ar: 'المدفوعات والدخل' },
      articleSlugs: [
        'getting-paid-faster-freelance-beauty-invoicing',
        'freelance-stylist-payment-methods',
        'tracking-freelance-beauty-income',
      ],
      guideSlugs: [],
    },
    {
      slug: 'schedule-time',
      label: { en: 'Schedule & Time Management', ar: 'الجدولة وإدارة الوقت' },
      articleSlugs: [
        'managing-freelance-beauty-schedule',
        'time-management-independent-beauty-professionals',
      ],
      guideSlugs: [],
    },
    {
      slug: 'client-relationships',
      label: { en: 'Client Relationships', ar: 'علاقات العملاء' },
      articleSlugs: [
        'building-client-relationships-beauty-pros',
        'independent-beauty-pro-client-loyalty',
      ],
      guideSlugs: [],
    },
    {
      slug: 'ai-technology',
      label: { en: 'AI & Technology', ar: 'الذكاء الاصطناعي والتكنولوجيا' },
      articleSlugs: [
        'ai-tools-independent-beauty-professional',
      ],
      guideSlugs: [],
    },
  ],
};
```

- [ ] **Step 2: Verify the file compiles**

Run: `npx tsc --noEmit src/lib/constants/tutorials/tutorialCatalog.ts` — if this fails due to path resolution, run `npx tsc --noEmit 2>&1 | grep tutorialCatalog` instead.

- [ ] **Step 3: Commit**

```bash
git add src/lib/constants/tutorials/tutorialCatalog.ts
git commit -m "feat: add tutorial catalog with curated slug lists per persona"
```

---

### Task 2: Create getTutorialArticles Helper

**Files:**
- Create: `src/lib/constants/tutorials/getTutorialArticles.ts`
- Read: `src/lib/constants/blog/blogData.ts` (for `businessBlogPosts`, `professionalBlogPosts`, `LocalBlogPost`)
- Read: `src/lib/constants/guides/guideData.ts` (for `guideEntries`, `GuideData`)

- [ ] **Step 1: Create the helper file**

This file defines the `TutorialArticle` interface and a function that resolves catalog slugs into renderable objects. It searches both `businessBlogPosts` and `professionalBlogPosts` arrays for each slug, and maps standalone guides into the same shape.

```typescript
// src/lib/constants/tutorials/getTutorialArticles.ts
import { tutorialCatalog, TutorialCategory } from './tutorialCatalog';
import { businessBlogPosts, professionalBlogPosts, LocalBlogPost } from '../blog/blogData';
import { guideEntries } from '../guides/guideData';

export interface TutorialArticle {
  title: string;
  slug: string;
  description: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  linkPath: string;
  source: 'blog' | 'guide';
}

const allBlogPosts = [...businessBlogPosts, ...professionalBlogPosts];

function blogPostToTutorialArticle(
  post: LocalBlogPost,
): TutorialArticle {
  // Check which array actually contains this post to get the right userType
  const isInBusiness = businessBlogPosts.some(
    (p) => p.attributes.slug === post.attributes.slug,
  );
  const resolvedUserType = isInBusiness ? 'businesses' : 'professionals';

  return {
    title: post.attributes.title,
    slug: post.attributes.slug,
    description: post.attributes.description,
    image:
      post.attributes.image?.data?.[0]?.attributes?.url ??
      post.attributes.picture?.data?.attributes?.url ??
      '/images/blog/grow-salon.webp',
    author:
      post.attributes.user?.data?.attributes?.name ??
      'The Daisy Team',
    date:
      post.attributes.user?.data?.attributes?.date ?? '',
    readTime:
      post.attributes.user?.data?.attributes?.time ?? '5 min.',
    linkPath: `/resources/blog/${resolvedUserType}/${post.attributes.slug}`,
    source: 'blog',
  };
}

function guideToTutorialArticle(slug: string): TutorialArticle | null {
  const guide = guideEntries.find((g) => g.slug === slug);
  if (!guide) return null;

  return {
    title: guide.title,
    slug: guide.slug,
    description: guide.answer.slice(0, 200) + (guide.answer.length > 200 ? '...' : ''),
    image: '/images/blog/grow-salon.webp',
    author: 'The Daisy Team',
    date: '',
    readTime: '5 min.',
    linkPath: `/guides/${guide.slug}`,
    source: 'guide',
  };
}

export interface TutorialCategoryWithArticles {
  category: TutorialCategory;
  articles: TutorialArticle[];
}

export function getTutorialArticles(
  persona: 'business' | 'professional',
): TutorialCategoryWithArticles[] {
  const categories = tutorialCatalog[persona];

  return categories
    .map((category) => {
      const blogArticles = category.articleSlugs
        .map((slug) => {
          const post = allBlogPosts.find(
            (p) => p.attributes.slug === slug,
          );
          if (!post) return null;
          return blogPostToTutorialArticle(post);
        })
        .filter((a): a is TutorialArticle => a !== null);

      const guideArticles = category.guideSlugs
        .map((slug) => guideToTutorialArticle(slug))
        .filter((a): a is TutorialArticle => a !== null);

      const articles = [...blogArticles, ...guideArticles];
      return { category, articles };
    })
    .filter((c) => c.articles.length > 0);
}
```

- [ ] **Step 2: Verify the file compiles**

Run: `npx tsc --noEmit 2>&1 | grep -i tutorial` — should show no new errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/constants/tutorials/getTutorialArticles.ts
git commit -m "feat: add getTutorialArticles helper to resolve catalog slugs"
```

---

### Task 3: Create TutorialCard Component

**Files:**
- Create: `src/components/tutorials/TutorialCard.tsx`
- Reference: `src/components/blogPage/blogPosts/CardPosts.tsx` (for visual style reference)

- [ ] **Step 1: Create the TutorialCard component**

A server-renderable card that uses `<Link>` (not `onClick`) for SEO. Visually matches blog cards.

```typescript
// src/components/tutorials/TutorialCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { TutorialArticle } from '@/lib/constants/tutorials/getTutorialArticles';
import { localePath } from '@/lib/utils/locale';
import { CalendarIcon } from '@/assets/icons/calendarIcon/CalendarIcon';
import { ClockIcon } from '@/assets/icons/clockIcon/ClockIcon';

interface TutorialCardProps {
  article: TutorialArticle;
  locale: string;
}

export const TutorialCard = ({ article, locale }: TutorialCardProps) => {
  return (
    <Link
      href={localePath(article.linkPath, locale)}
      className="w-full flex flex-col items-center text-start rounded-[12px] bg-white border overflow-hidden hover:shadow-2xl transition-shadow"
    >
      <div className="w-full h-[240px]">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full object-cover h-[230px] md:h-[240px]"
          width={1000}
          height={1000}
        />
      </div>
      <div className="px-6 py-4 mt-6">
        <h3 className="text-lg ltr:font-montserrat font-semibold line-clamp-2">
          {article.title}
        </h3>
        <div className="flex justify-start gap-2 text-gray-500 text-sm mt-4">
          {article.date && (
            <span className="flex items-center border-r pr-[10px]">
              <CalendarIcon className="ltr:mr-[10px] rtl:ml-[10px]" />
              {article.date}
            </span>
          )}
          {article.readTime && (
            <span className="flex items-center rtl:border-r rtl:pr-2">
              <ClockIcon className="ltr:mr-2 rtl:ml-2" />
              {article.readTime}
            </span>
          )}
        </div>
        <p className="mt-2 text-[#455150] text-sm ltr:font-montserrat line-clamp-3">
          {article.description}
        </p>
      </div>
    </Link>
  );
};
```

- [ ] **Step 2: Verify the file compiles**

Run: `npx tsc --noEmit 2>&1 | grep -i tutorialcard` — should show no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/tutorials/TutorialCard.tsx
git commit -m "feat: add TutorialCard server component for tutorials page"
```

---

### Task 4: Update Hero Data and SEO Metadata

**Files:**
- Modify: `src/lib/constants/resources/resourcesData.ts` (update `tutorialsHeroData`)
- Modify: `src/app/[locale]/resources/tutorials/page.tsx` (update metadata)

- [ ] **Step 1: Update tutorialsHeroData in resourcesData.ts**

Read the file first. Then update the `tutorialsHeroData` entries for `business`, `professional`, and `customer` (fallback to business copy). Keep the existing data structure — replace text values with:

**Business (en):**
- `title`: `'Tutorials & Guides'`
- `subtitle`: `'Step-by-step guides to grow and manage your beauty business'`
- `description`: `'Practical how-to articles covering booking, marketing, staff management, payments, and more.'`
- `bredCrumbDesription`: `'Resources'`
- `bredCrumbTitle`: `'Tutorials & Guides'`

**Business (ar):**
- `title`: `'الدروس والأدلة'`
- `subtitle`: `'أدلة خطوة بخطوة لتنمية وإدارة أعمال التجميل الخاصة بك'`
- `description`: `'مقالات عملية تغطي الحجز والتسويق وإدارة الموظفين والمدفوعات والمزيد.'`
- `bredCrumbDesription`: `'الموارد'`
- `bredCrumbTitle`: `'الدروس والأدلة'`

**Professional (en):**
- `title`: `'Tutorials & Guides'`
- `subtitle`: `'Practical guides for independent beauty professionals'`
- `description`: `'Build your freelance business, find clients, manage your schedule, and grow your brand.'`
- `bredCrumbDesription`: `'Resources'`
- `bredCrumbTitle`: `'Tutorials & Guides'`

**Professional (ar):**
- `title`: `'الدروس والأدلة'`
- `subtitle`: `'أدلة عملية لمحترفي التجميل المستقلين'`
- `description`: `'ابنِ عملك المستقل، واعثر على عملاء، وأدر جدولك، ونمِّ علامتك التجارية.'`
- `bredCrumbDesription`: `'الموارد'`
- `bredCrumbTitle`: `'الدروس والأدلة'`

**Customer:** Copy the business values (customer falls back to business)

- [ ] **Step 2: Update metadata in page.tsx**

Update the `generateMetadata` function to return:
- `title`: `'Beauty Industry Tutorials & Guides | The Daisy'`
- `description`: `'Step-by-step guides for salon owners and beauty professionals. Learn booking management, marketing strategies, staff scheduling, payments, and more.'`
- Update `keywords` to include tutorial/guide-related terms
- Update `openGraph` and `twitter` accordingly

- [ ] **Step 3: Verify compilation**

Run: `npx tsc --noEmit 2>&1 | grep -E "resourcesData|tutorials/page"` — should show no new errors.

- [ ] **Step 4: Commit**

```bash
git add src/lib/constants/resources/resourcesData.ts src/app/[locale]/resources/tutorials/page.tsx
git commit -m "feat: update tutorials hero data and SEO metadata for guides hub"
```

---

### Task 5: Rewrite TutorialsClient

**Files:**
- Rewrite: `src/app/[locale]/resources/tutorials/TutorialsClient.tsx`
- Reference: `src/components/tutorials/TutorialCard.tsx`
- Reference: `src/lib/constants/tutorials/getTutorialArticles.ts`
- Reference: `src/lib/constants/resources/resourcesData.ts` (for hero data)

- [ ] **Step 1: Rewrite TutorialsClient.tsx**

The component reads the current persona from `useMyContext()` (same as before), resolves the tutorial catalog for that persona, and renders category sections with card grids.

```typescript
// src/app/[locale]/resources/tutorials/TutorialsClient.tsx
'use client';
import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useMyContext } from '@/app/MyContext';
import { HeroPage } from '@/components/heroSection/HeroSection';
import { TutorialCard } from '@/components/tutorials/TutorialCard';
import {
  getTutorialArticles,
  TutorialCategoryWithArticles,
} from '@/lib/constants/tutorials/getTutorialArticles';
import { tutorialsHeroData } from '@/lib/constants/resources/resourcesData';
import { t } from '@/lib/constants/i18n';
import { getLocaleFromPathname } from '@/lib/utils/locale';

export const TutorialsClient = () => {
  const fullPathname = usePathname();
  const locale = useMemo(
    () => getLocaleFromPathname(fullPathname),
    [fullPathname],
  );
  const { userChange: currentPage } = useMyContext();

  const [heroData, setHeroData] = useState<{
    bredCrumbDesription?: string;
    bredCrumbTitle?: string;
    title: string;
    subtitle: string;
    description?: string;
    titleScroll?: string;
  } | null>(null);

  const [categories, setCategories] = useState<TutorialCategoryWithArticles[]>(
    [],
  );

  useEffect(() => {
    // Determine persona — default to business (customer falls back to business)
    let persona: 'business' | 'professional' = 'business';
    if (currentPage === '/professional') persona = 'professional';

    // Load hero data
    const type =
      currentPage === '/professional' ? 'professional' : 'business';
    const hero = tutorialsHeroData[type];
    if (hero) {
      setHeroData(t(hero, locale));
    }

    // Load tutorial articles
    setCategories(getTutorialArticles(persona));
  }, [locale, currentPage]);

  return (
    <>
      <HeroPage
        bredCrumbDesription={heroData?.bredCrumbDesription}
        bredCrumbTitle={heroData?.bredCrumbTitle}
        isVisibleBreadCrumbs={true}
        hiddenArrow={false}
        visibleDescriiton={false}
        title={heroData?.title ?? ''}
        description={heroData?.subtitle ?? ''}
        heightScreen={false}
        styleSection="pb-[60px] pt-6 px-[16px]"
        secondDescription={heroData?.description}
        titleScroll={heroData?.titleScroll}
      />
      <div className="bg-[#F8F5F3] px-4 md:px-16 pb-20">
        {categories.map((cat) => (
          <section key={cat.category.slug} className="mb-12">
            <h2 className="text-2xl font-bold text-[#172524] mb-6">
              {t(cat.category.label, locale)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cat.articles.map((article) => (
                <TutorialCard
                  key={article.slug}
                  article={article}
                  locale={locale}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};
```

Key differences from the old version:
- No more `TutorialSection` / `TabsTutorials` imports — **DO NOT delete these old components** (`TutorialSection.tsx`, `SelectTutorial.tsx`, `TutorialComponents.tsx`). They are left in place for potential future use. They become dead code but are candidates for cleanup in a follow-up.
- No more `scroll` state or scroll-to-top button
- `heightScreen={false}` on hero (no full-height hero for a listing page)
- Category sections with `<h2>` headings and 3-column card grids
- Persona-switched via `currentPage` from context

- [ ] **Step 2: Verify the build**

Run: `npm run build 2>&1 | tail -20` — check for compilation errors. The tutorials page should build successfully.

- [ ] **Step 3: Manual verification**

Run: `npm run dev` and navigate to `http://localhost:3000/en/resources/tutorials`

Verify:
- Hero section shows "Tutorials & Guides" with updated subtitle
- Category sections render with headings
- Cards display article titles, descriptions, dates, read times
- Clicking a card navigates to the correct blog article or guide page
- Switching the header toggle to Professional shows professional-focused categories
- Switching to Business shows business-focused categories

- [ ] **Step 4: Commit**

```bash
git add src/app/[locale]/resources/tutorials/TutorialsClient.tsx
git commit -m "feat: rewrite tutorials page as curated guide hub with category grid"
```

---

### Task 6: Final Verification and Cleanup

**Files:**
- Check: All files created/modified in Tasks 1-5

- [ ] **Step 1: Run full type check**

Run: `npx tsc --noEmit 2>&1 | grep -v "test\." | grep "error"` — should show no new errors.

- [ ] **Step 2: Run linter**

Run: `npm run lint 2>&1 | tail -20` — fix any linting issues in new files.

- [ ] **Step 3: Run existing tests**

Run: `npm run test 2>&1 | tail -20` — ensure no existing tests are broken.

- [ ] **Step 4: Verify sitemap still builds**

Run: `npm run build 2>&1 | grep -i "sitemap\|error"` — the tutorials page URL should appear in the sitemap.

- [ ] **Step 5: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: address linting and type errors in tutorials redesign"
```
