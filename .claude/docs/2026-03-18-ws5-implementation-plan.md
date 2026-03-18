# WS5 Blog Cluster Articles — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 72 new blog articles across 13 new data files + 1 modified file to complete the pillar + cluster SEO architecture.

**Architecture:** Each article is a static TypeScript data object conforming to the existing `LocalBlogPost` interface. New files are created in `src/lib/constants/blog/articles/`, imported and spread into `businessBlogPosts` / `professionalBlogPosts` arrays in `blogData.ts`. No new components, routes, or infrastructure.

**Tech Stack:** TypeScript, Next.js 14 (static data), HTML content strings

**Spec:** `.claude/docs/2026-03-18-ws5-blog-clusters-design.md`

---

## Reference: Article File Template

Every new article file follows this exact pattern. Refer to `src/lib/constants/blog/articles/booking-management.ts` as the canonical example.

```typescript
import { LocalBlogPost } from '../blogData';

const defaultAuthor = {
  data: {
    id: 1,
    attributes: {
      name: 'The Daisy Team',
      jobTitle: 'Content Team',
      date: '18 March 2026',
      time: '8 min.',
      picture: {
        data: {
          attributes: {
            url: '/images/blog/author-daisy-team.webp',
          },
        },
      },
    },
  },
};

const defaultIconOwner = {
  data: [
    {
      attributes: {
        url: '/images/blog/author-daisy-team.webp',
      },
    },
  ],
};

// Article definitions here...

// Export: separate arrays for business and professional
export const [clusterName]BusinessArticles: LocalBlogPost[] = [...];
export const [clusterName]ProfessionalArticles: LocalBlogPost[] = [...];  // only if file has professional articles
```

## Reference: Content Standards Per Article

- 1,500-2,500 words of HTML in `aboutPosts`
- FAQ section (4+ `<h3>` questions under `<h2>Frequently Asked Questions</h2>`)
- Meta title under 60 chars with `| Daisy` or `| The Daisy`
- Meta description 150-160 chars
- GEO: direct-answer opening sentence per section
- Link to parent pillar page within first 200 words
- Link to at least 1 feature page + pricing page
- 1-2 cross-links to related articles
- Overlap articles: cross-link to WS3 counterpart as "Related reading"
- Tags: `{ digital: 'CategoryName', wellness: 'TopicName' }`
- Dates: `2026-03-18T...`
- locale: `'en'`

## Reference: blogData.ts Wiring Pattern

```typescript
// In blogData.ts — add import at top:
import {
  [clusterName]BusinessArticles,
  [clusterName]ProfessionalArticles,  // only if file has professional articles
} from './articles/[filename]';

// Spread into arrays:
export const businessBlogPosts: LocalBlogPost[] = [
  ...existingArticles,
  ...[clusterName]BusinessArticles,
];

export const professionalBlogPosts: LocalBlogPost[] = [
  ...existingArticles,
  ...[clusterName]ProfessionalArticles,
];
```

---

## Task 1: Session 1 — Daisy Advantage + BOFU + Thought Leadership (15 articles)

**Files:**
- Create: `src/lib/constants/blog/articles/daisy-advantage.ts`
- Create: `src/lib/constants/blog/articles/bottom-of-funnel.ts`
- Create: `src/lib/constants/blog/articles/thought-leadership.ts`
- Modify: `src/lib/constants/blog/blogData.ts`
- Modify: `public/llms.txt`
- Modify: `public/llms-full.txt`

### Subtask 1.1: Create `daisy-advantage.ts` (8 articles)

- [ ] **Step 1: Create the data file with all 8 articles**

File: `src/lib/constants/blog/articles/daisy-advantage.ts`
Category: `{ data: { id: 22, attributes: { name: 'Daisy Platform' } } }`
Parent pillar: `/ai-salon-software`

Articles to create (all Business audience):
| ID | Title | Slug | sortId |
|----|-------|------|--------|
| 135 | How AI Receptionists Are Transforming Salon Customer Service | `ai-receptionist-salon-customer-service` | 41 |
| 136 | Why All-in-One Salon Platforms Beat Point Solutions | `all-in-one-salon-platform-vs-point-solutions` | 42 |
| 137 | 360-Degree Customer Acquisition: The New Standard for Salons | `360-degree-customer-acquisition-salons` | 43 |
| 138 | White-Label Booking: Why Your Brand Matters More Than Your Software's | `white-label-salon-booking` | 44 |
| 139 | Running a Bilingual Beauty Business: Tools and Tips | `bilingual-beauty-business-tools` | 45 |
| 140 | How Data-Driven Beauty Platforms Create Competitive Moats | `data-driven-beauty-platform` | 46 |
| 141 | Why Modern Salons Need an AI Platform (Not Just Software) | `modern-salons-ai-platform-not-software` | 47 |
| 142 | Is Your Current Salon Software Holding You Back? 10 Warning Signs | `salon-software-holding-you-back-warning-signs` | 48 |

Export: `export const daisyAdvantageBusinessArticles: LocalBlogPost[] = [...]`

Each article must include internal links to `/en/ai-salon-software` (parent pillar), `/en/features/business/ai-salon-management`, and `/en/pricing`.

### Subtask 1.2: Create `bottom-of-funnel.ts` (3 articles)

- [ ] **Step 2: Create the data file with all 3 articles**

File: `src/lib/constants/blog/articles/bottom-of-funnel.ts`
Category: `{ data: { id: 24, attributes: { name: 'Decision Stage' } } }`
Parent pillar: `/salon-management-software`

Articles to create (all Business audience):
| ID | Title | Slug | sortId |
|----|-------|------|--------|
| 143 | Salon Software Switching Checklist: Your 30-Day Migration Plan | `salon-software-switching-checklist-migration` | 49 |
| 144 | What to Expect in Your First Month With a New Salon Platform | `first-month-new-salon-platform` | 50 |
| 145 | How to Calculate the ROI of Switching Salon Software | `calculate-roi-switching-salon-software` | 51 |

Export: `export const bottomOfFunnelBusinessArticles: LocalBlogPost[] = [...]`

Note: ID 143 targets "salon software switching checklist" (tactical checklist format). This is differentiated from ID 152 in Cluster 1 which targets "switch salon software" (comprehensive migration guide). Cross-link between the two.

### Subtask 1.3: Create `thought-leadership.ts` (4 articles)

- [ ] **Step 3: Create the data file with all 4 articles**

File: `src/lib/constants/blog/articles/thought-leadership.ts`
Category: `{ data: { id: 25, attributes: { name: 'Thought Leadership' } } }`
Parent pillar: `/ai-salon-software`

Articles to create (all Business audience):
| ID | Title | Slug | sortId |
|----|-------|------|--------|
| 146 | The Death of 'Salon Software': Why the Future Belongs to Platform Ecosystems | `death-of-salon-software-platform-ecosystems` | 52 |
| 147 | Why Beauty Businesses That Don't Adopt AI Will Be Left Behind by 2028 | `beauty-businesses-adopt-ai-or-left-behind` | 53 |
| 148 | From Operations to Growth: The Mindset Shift Every Salon Owner Needs | `operations-to-growth-mindset-shift-salon` | 54 |
| 149 | Why Your Salon Uses 5 Different Apps (And How to Fix It) | `salon-five-apps-how-to-fix` | 55 |

Export: `export const thoughtLeadershipBusinessArticles: LocalBlogPost[] = [...]`

### Subtask 1.4: Wire into blogData.ts

- [ ] **Step 4: Add imports and spread into businessBlogPosts**

Add to top of `src/lib/constants/blog/blogData.ts`:
```typescript
import { daisyAdvantageBusinessArticles } from './articles/daisy-advantage';
import { bottomOfFunnelBusinessArticles } from './articles/bottom-of-funnel';
import { thoughtLeadershipBusinessArticles } from './articles/thought-leadership';
```

Add to `businessBlogPosts` array:
```typescript
...daisyAdvantageBusinessArticles,
...bottomOfFunnelBusinessArticles,
...thoughtLeadershipBusinessArticles,
```

### Subtask 1.5: Verify

- [ ] **Step 5: Run TypeScript check**

Run: `npx tsc --noEmit 2>&1 | grep "error TS" | grep -iv "test\|__tests__" | head -10`
Expected: No errors in article or blogData files

- [ ] **Step 6: Run blog tests**

Run: `npx jest src/lib/api/__tests__/blog.test.ts --no-coverage`
Expected: All 12 tests pass

- [ ] **Step 7: Verify no duplicate IDs or slugs**

Run: `grep -h "^  id:" src/lib/constants/blog/articles/*.ts | sort -t: -k2 -n | uniq -d`
Expected: No output (no duplicates)

### Subtask 1.6: Update GEO files

- [ ] **Step 8: Update llms.txt and llms-full.txt**

Add a "Blog Cluster Articles" section to `public/llms.txt` listing the most notable new articles (at minimum: AI Receptionist, 360-Degree Acquisition, Switching Checklist, ROI Calculator).

Add corresponding entries to `public/llms-full.txt`.

### Subtask 1.7: Commit

- [ ] **Step 9: Commit Session 1**

```bash
git add src/lib/constants/blog/articles/daisy-advantage.ts \
  src/lib/constants/blog/articles/bottom-of-funnel.ts \
  src/lib/constants/blog/articles/thought-leadership.ts \
  src/lib/constants/blog/blogData.ts \
  public/llms.txt public/llms-full.txt
git commit -m "feat: add 15 WS5 blog articles — Daisy advantage, BOFU, thought leadership"
```

---

## Task 2: Session 2 — Salon Management + Booking Append (9 articles)

**Files:**
- Create: `src/lib/constants/blog/articles/salon-management.ts`
- Modify: `src/lib/constants/blog/articles/booking-management.ts` (append 1 article)
- Modify: `src/lib/constants/blog/blogData.ts`
- Modify: `public/llms.txt`, `public/llms-full.txt`

### Subtask 2.1: Create `salon-management.ts` (8 articles)

- [ ] **Step 1: Create the data file with all 8 articles**

File: `src/lib/constants/blog/articles/salon-management.ts`
Category: `{ data: { id: 13, attributes: { name: 'Salon Management' } } }`
Parent pillar: `/salon-management-software`

Articles (all Business):
| ID | Title | Slug | sortId |
|----|-------|------|--------|
| 150 | How to Choose Salon Management Software: A Step-by-Step Guide | `how-to-choose-salon-management-software` | 56 |
| 151 | Salon Software Features Checklist: 25 Must-Haves | `salon-software-features-checklist` | 57 |
| 152 | Switching Salon Software: Complete Migration Guide | `switching-salon-software-migration-guide` | 58 |
| 153 | Cloud vs Desktop Salon Software: Which Is Better? | `cloud-vs-desktop-salon-software` | 59 |
| 154 | Small Salon Software: Best Options for 1-5 Staff | `small-salon-software-options` | 60 |
| 155 | Multi-Location Salon Software: Managing Multiple Branches | `multi-location-salon-software` | 61 |
| 156 | Salon Software ROI: Calculating Your Return on Investment | `salon-software-roi-calculator` | 62 |
| 157 | Free vs Paid Salon Software: The True Cost Comparison | `free-vs-paid-salon-software` | 63 |

Export: `export const salonManagementBusinessArticles: LocalBlogPost[] = [...]`

Note: ID 152 (`switching-salon-software-migration-guide`) targets "switch salon software" as a comprehensive guide. Cross-link to ID 143 (`salon-software-switching-checklist-migration`) which is a tactical 30-day checklist.

### Subtask 2.2: Append 1 article to `booking-management.ts`

- [ ] **Step 2: Add article ID 158 inside the existing `bookingManagementBusinessArticles` array literal**

**IMPORTANT:** Add the new article object literal INSIDE the existing array — do NOT create a new export. The article goes as a new entry at the end of the array that is already exported as `bookingManagementBusinessArticles`. No new import is needed in `blogData.ts` because it already imports this array.

| ID | Title | Slug | sortId |
|----|-------|------|--------|
| 158 | Recurring Appointment Scheduling for Salons | `recurring-appointment-scheduling-salon` | 64 |

Category: `{ data: { id: 6, attributes: { name: 'Booking Management' } } }` (existing)
Parent pillar: `/beauty-booking-system`

### Subtask 2.3: Wire salon-management into blogData.ts

- [ ] **Step 3: Add import and spread**

```typescript
import { salonManagementBusinessArticles } from './articles/salon-management';
// ... spread into businessBlogPosts
```

Note: booking-management.ts is already imported — no new import needed for the appended article.

### Subtask 2.4: Verify + Update GEO + Commit

- [ ] **Step 4: TypeScript check + blog tests**
- [ ] **Step 5: Update llms.txt and llms-full.txt**
- [ ] **Step 6: Commit**

```bash
git commit -m "feat: add 9 WS5 blog articles — salon management cluster + booking append"
```

---

## Task 3: Session 3 — Salon Marketing + Business Growth (15 articles)

**Files:**
- Create: `src/lib/constants/blog/articles/salon-marketing.ts`
- Create: `src/lib/constants/blog/articles/beauty-business-growth.ts`
- Modify: `src/lib/constants/blog/blogData.ts`
- Modify: `public/llms.txt`, `public/llms-full.txt`

### Subtask 3.1: Create `salon-marketing.ts` (8 articles)

- [ ] **Step 1: Create the data file**

Category: `{ data: { id: 14, attributes: { name: 'Salon Marketing' } } }`
Parent pillar: `/salon-marketing-strategies`

Articles: IDs 159-165 (Business) + ID 212 (Professional)
Export: `salonMarketingBusinessArticles` + `salonMarketingProfessionalArticles`

Overlap note: These articles target industry-generic keywords. WS3 `marketing-promotions.ts` covers similar topics with Daisy-feature angle. Each WS5 article must cross-link to its WS3 counterpart.

### Subtask 3.2: Create `beauty-business-growth.ts` (7 articles)

- [ ] **Step 2: Create the data file**

Category: `{ data: { id: 15, attributes: { name: 'Beauty Business Growth' } } }`
Parent pillar: `/beauty-business-growth-guide`

Articles: IDs 166-171 (Business) + ID 213 (Professional)
Export: `beautyBusinessGrowthBusinessArticles` + `beautyBusinessGrowthProfessionalArticles`

### Subtask 3.3: Wire into blogData.ts

- [ ] **Step 3: Add imports and spread into BOTH business and professional arrays**

```typescript
// Add to imports:
import {
  salonMarketingBusinessArticles,
  salonMarketingProfessionalArticles,
} from './articles/salon-marketing';
import {
  beautyBusinessGrowthBusinessArticles,
  beautyBusinessGrowthProfessionalArticles,
} from './articles/beauty-business-growth';

// Spread into businessBlogPosts:
...salonMarketingBusinessArticles,
...beautyBusinessGrowthBusinessArticles,

// Spread into professionalBlogPosts:
...salonMarketingProfessionalArticles,
...beautyBusinessGrowthProfessionalArticles,
```

**CRITICAL:** Both files contain 1 professional article each (IDs 212, 213). If the professional arrays are not spread into `professionalBlogPosts`, those articles will exist in the file but never render at `/resources/blog/professional/[slug]`.

### Subtask 3.4: Verify + GEO + Commit

- [ ] **Step 4: TypeScript check + blog tests**
- [ ] **Step 5: Update llms.txt and llms-full.txt**
- [ ] **Step 6: Commit**

```bash
git commit -m "feat: add 15 WS5 blog articles — salon marketing + business growth clusters"
```

---

## Task 4: Session 4 — Payments + Staff Management (12 articles)

**Files:**
- Create: `src/lib/constants/blog/articles/salon-payments.ts`
- Create: `src/lib/constants/blog/articles/staff-management.ts`
- Modify: `src/lib/constants/blog/blogData.ts`
- Modify: `public/llms.txt`, `public/llms-full.txt`

### Subtask 4.1: Create `salon-payments.ts` (6 articles)

- [ ] **Step 1: Create the data file**

Category: `{ data: { id: 16, attributes: { name: 'Salon Payments' } } }`
Parent pillar: `/salon-payment-solutions`

Articles: IDs 172-176 (Business) + ID 214 (Professional)
Export: `salonPaymentsBusinessArticles` + `salonPaymentsProfessionalArticles`

Overlap note: WS3 `payment-processing.ts` covers similar topics. Differentiate per the overlap table in the spec.

### Subtask 4.2: Create `staff-management.ts` (6 articles)

- [ ] **Step 2: Create the data file**

Category: `{ data: { id: 17, attributes: { name: 'Staff Management' } } }`
Parent pillar: `/salon-staff-management`

Articles: IDs 177-181 (Business) + ID 215 (Professional)
Export: `staffManagementBusinessArticles` + `staffManagementProfessionalArticles`

Overlap note: WS3 `team-management.ts` covers similar topics. Differentiate per the overlap table.

### Subtask 4.3: Wire into blogData.ts

- [ ] **Step 3: Add imports and spread into BOTH business and professional arrays**

```typescript
// Add to imports:
import {
  salonPaymentsBusinessArticles,
  salonPaymentsProfessionalArticles,
} from './articles/salon-payments';
import {
  staffManagementBusinessArticles,
  staffManagementProfessionalArticles,
} from './articles/staff-management';

// Spread into businessBlogPosts:
...salonPaymentsBusinessArticles,
...staffManagementBusinessArticles,

// Spread into professionalBlogPosts:
...salonPaymentsProfessionalArticles,
...staffManagementProfessionalArticles,
```

**CRITICAL:** Both files contain 1 professional article each (IDs 214, 215). Spread into `professionalBlogPosts` or they won't render.

### Subtask 4.4: Verify + GEO + Commit

- [ ] **Step 4: TypeScript check + blog tests**
- [ ] **Step 5: Update llms.txt and llms-full.txt**
- [ ] **Step 6: Commit**

```bash
git commit -m "feat: add 12 WS5 blog articles — salon payments + staff management clusters"
```

---

## Task 5: Session 5 — Client Retention + Freelance (16 articles)

**Files:**
- Create: `src/lib/constants/blog/articles/client-retention.ts`
- Create: `src/lib/constants/blog/articles/freelance-beauty.ts`
- Modify: `src/lib/constants/blog/blogData.ts`
- Modify: `public/llms.txt`, `public/llms-full.txt`

### Subtask 5.1: Create `client-retention.ts` (7 articles)

- [ ] **Step 1: Create the data file**

Category: `{ data: { id: 18, attributes: { name: 'Client Retention' } } }`
Parent pillar: `/salon-client-retention`

Articles: IDs 182-187 (Business) + ID 216 (Professional)
Export: `clientRetentionBusinessArticles` + `clientRetentionProfessionalArticles`

### Subtask 5.2: Create `freelance-beauty.ts` (9 articles)

- [ ] **Step 2: Create the data file**

Category: `{ data: { id: 19, attributes: { name: 'Freelance Beauty' } } }`
Parent pillar: `/freelance-beauty-professional-guide`

Articles: ID 211 (deferred from Session 2, Cluster 2) + IDs 217-224 (Cluster 8)
All Professional audience.
Export: `freelanceBeautyProfessionalArticles` (single array, all professional)

Note: ID 211 (`freelance-stylist-scheduling-guide`) has parent pillar `/beauty-booking-system` (Cluster 2), while IDs 217-224 have parent pillar `/freelance-beauty-professional-guide` (Cluster 8). Both are in the same file because they share the Professional audience, but internal links differ per article.

### Subtask 5.3: Wire into blogData.ts

- [ ] **Step 3: Add imports and spread into correct arrays**

```typescript
// Add to imports:
import {
  clientRetentionBusinessArticles,
  clientRetentionProfessionalArticles,
} from './articles/client-retention';
import {
  freelanceBeautyProfessionalArticles,
} from './articles/freelance-beauty';

// Spread into businessBlogPosts:
...clientRetentionBusinessArticles,

// Spread into professionalBlogPosts:
...clientRetentionProfessionalArticles,
...freelanceBeautyProfessionalArticles,
```

**CRITICAL:** `client-retention.ts` has 1 professional article (ID 216). `freelance-beauty.ts` is ALL professional (9 articles). Both must be spread into `professionalBlogPosts`.

### Subtask 5.4: Verify + GEO + Commit

- [ ] **Step 4: TypeScript check + blog tests**
- [ ] **Step 5: Update llms.txt and llms-full.txt**
- [ ] **Step 6: Commit**

```bash
git commit -m "feat: add 16 WS5 blog articles — client retention + freelance beauty clusters"
```

---

## Task 6: Session 6 — Trends + Analytics + Multi-Channel (13 articles) + Final Verification

**Files:**
- Create: `src/lib/constants/blog/articles/industry-trends.ts`
- Create: `src/lib/constants/blog/articles/salon-analytics.ts`
- Create: `src/lib/constants/blog/articles/multi-channel.ts`
- Modify: `src/lib/constants/blog/blogData.ts`
- Modify: `public/llms.txt`, `public/llms-full.txt`

### Subtask 6.1: Create `industry-trends.ts` (6 articles)

- [ ] **Step 1: Create the data file**

Category: `{ data: { id: 20, attributes: { name: 'Industry Trends' } } }`
Parent pillar: `/beauty-industry-trends`

Articles: IDs 188-192 (Business) + ID 225 (Professional)
Export: `industryTrendsBusinessArticles` + `industryTrendsProfessionalArticles`

### Subtask 6.2: Create `salon-analytics.ts` (4 articles)

- [ ] **Step 2: Create the data file**

Category: `{ data: { id: 21, attributes: { name: 'Salon Analytics' } } }`
Parent pillar: `/salon-analytics-reporting`

Articles: IDs 193-196 (all Business)
Export: `salonAnalyticsBusinessArticles`

Note: WS3 already has `tracking-freelance-beauty-income` (ID 210) covering the 5th planned article. No need to recreate.

### Subtask 6.3: Create `multi-channel.ts` (3 articles)

- [ ] **Step 3: Create the data file**

Category: `{ data: { id: 23, attributes: { name: 'Multi-Channel' } } }`
Parent pillar: `/salon-marketing-strategies`

Articles: IDs 197-199 (all Business)
Export: `multiChannelBusinessArticles`

### Subtask 6.4: Wire + Verify

- [ ] **Step 4: Add all imports to blogData.ts**

```typescript
// Add to imports:
import {
  industryTrendsBusinessArticles,
  industryTrendsProfessionalArticles,
} from './articles/industry-trends';
import { salonAnalyticsBusinessArticles } from './articles/salon-analytics';
import { multiChannelBusinessArticles } from './articles/multi-channel';

// Spread into businessBlogPosts:
...industryTrendsBusinessArticles,
...salonAnalyticsBusinessArticles,
...multiChannelBusinessArticles,

// Spread into professionalBlogPosts:
...industryTrendsProfessionalArticles,
```

**Note:** `industry-trends.ts` has 1 professional article (ID 225). `salon-analytics.ts` and `multi-channel.ts` are all business.
- [ ] **Step 5: Run TypeScript check**

Run: `npx tsc --noEmit 2>&1 | grep "error TS" | grep -iv "test\|__tests__" | head -10`
Expected: No errors

- [ ] **Step 6: Run blog tests**

Run: `npx jest src/lib/api/__tests__/blog.test.ts --no-coverage`
Expected: All 12 tests pass

- [ ] **Step 7: Verify no duplicate IDs across all article files**

Run: `grep -h "^  id:" src/lib/constants/blog/articles/*.ts | sort -t: -k2 -n | uniq -d`
Expected: No output

- [ ] **Step 8: Verify no duplicate slugs across all article files**

Run: `grep -h "slug:" src/lib/constants/blog/articles/*.ts | grep "'" | sed "s/.*'\(.*\)'.*/\1/" | sort | uniq -d`
Expected: No output

- [ ] **Step 9: Count total articles**

Run: `grep -h "^  id:" src/lib/constants/blog/articles/*.ts | wc -l`
Expected: 110 (38 WS3 + 72 WS5)

### Subtask 6.5: Final GEO update

- [ ] **Step 10: Update llms.txt and llms-full.txt**

Add comprehensive "Blog Content Library" section listing all clusters and notable articles. Update any article counts referenced elsewhere in the file.

### Subtask 6.6: Commit + PR

- [ ] **Step 11: Commit Session 6**

```bash
git commit -m "feat: add 13 WS5 blog articles — trends, analytics, multi-channel clusters (WS5 complete)"
```

- [ ] **Step 12: Create PR**

Use the commit-and-pr skill to push and create PR with full summary of all 80 new articles across 6 sessions.

---

## Verification Checklist (Run After All Sessions)

- [ ] Total article count: 110 (38 WS3 + 72 WS5)
- [ ] All IDs unique (business: 104-199, professional: 204-225)
- [ ] All slugs unique
- [ ] All metaTitles under 60 chars with brand suffix
- [ ] No metaDescriptions over 160 chars
- [ ] All articles have FAQ sections
- [ ] All articles have internal links to parent pillar page
- [ ] TypeScript compiles with 0 errors in article/blog files
- [ ] Blog tests pass (12/12)
- [ ] `llms.txt` and `llms-full.txt` updated with cluster article references
- [ ] Pillar page ClusterArticleGrid resolves articles correctly
