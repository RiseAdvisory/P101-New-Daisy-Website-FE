# WS5 Blog Cluster Articles — Design Spec

**Date:** 2026-03-18
**Status:** Approved
**Scope:** 80 new blog articles across 14 data files, supporting 11 pillar pages

---

## Overview

Build 72 new blog articles organized into 11 topic clusters plus 3 additional groups (Multi-Channel, BOFU, Thought Leadership). Each article targets a specific long-tail keyword, links back to its parent pillar page (WS4), and cross-links to related cluster articles and feature pages (WS3). This completes the pillar + cluster SEO architecture.

### Relationship to Existing Content

- **38 WS3 articles** already exist across 8 feature category files — these stay as-is
- **6 WS5 slugs** match existing WS3 articles exactly — these are already covered, no new article needed
- **~12 WS5 articles** overlap topically with WS3 — both kept, differentiated by angle (WS3 = Daisy-feature-focused, WS5 = industry-generic keyword), cross-linked as related reading
- **80 genuinely new articles** to create

---

## Decision Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Build scope | All 80 articles, phased | Dominate SEO/GEO with maximum topical authority |
| Overlap handling | Keep both WS3 and WS5, differentiate angle | WS3 captures feature keywords, WS5 captures industry keywords — no cannibalization with different slugs and angles |
| Infrastructure | Reuse existing blog system entirely | Same LocalBlogPost interface, same rendering, same blogData.ts wiring |
| Phasing | 6 build sessions in priority order | Ship highest-conversion content first (Daisy differentiators, BOFU) |

---

## Data Architecture

### No New Infrastructure

WS5 uses the identical system as WS3:
- Interface: `LocalBlogPost` from `src/lib/constants/blog/blogData.ts`
- Article files: `src/lib/constants/blog/articles/[cluster].ts`
- Wiring: Import + spread into `businessBlogPosts` / `professionalBlogPosts` in `blogData.ts`
- Rendering: Existing blog pages at `/resources/blog/[userType]/[slug]`

### New Files (13)

```
src/lib/constants/blog/articles/
├── daisy-advantage.ts          # Cluster 11 (8 articles)
├── bottom-of-funnel.ts         # BOFU (3 articles)
├── thought-leadership.ts       # Thought Leadership (4 articles)
├── salon-management.ts         # Cluster 1 (8 articles)
├── salon-marketing.ts          # Cluster 3 (8 articles)
├── beauty-business-growth.ts   # Cluster 4 (7 articles)
├── salon-payments.ts           # Cluster 5 (6 articles)
├── staff-management.ts         # Cluster 6 (6 articles)
├── client-retention.ts         # Cluster 7 (7 articles)
├── freelance-beauty.ts         # Cluster 8 (8 + 1 from Cluster 2 = 9 articles)
├── industry-trends.ts          # Cluster 9 (6 articles)
├── salon-analytics.ts          # Cluster 10 (4 articles)
└── multi-channel.ts            # Multi-Channel (3 articles)
```

### Modified Existing Files (1)

- `booking-management.ts` — append 1 new business article (ID 158, Cluster 2)

### Modified File

- `src/lib/constants/blog/blogData.ts` — add 14 imports + spread into arrays

### ID Ranges

- Business articles: 135-199 (continuing from WS3 last ID 134)
- Professional articles: 211-225 (continuing from WS3 last ID 210; 15 professional articles total)

### Export Convention for Mixed-Audience Files

Files containing both business and professional articles MUST export two separate named arrays, following the WS3 convention:

```typescript
// Example: salon-marketing.ts
export const salonMarketingBusinessArticles: LocalBlogPost[] = [...];
export const salonMarketingProfessionalArticles: LocalBlogPost[] = [...];
```

`blogData.ts` spreads the business array into `businessBlogPosts` and the professional array into `professionalBlogPosts`. Never mix audiences in a single export array.

### Category IDs

| ID | Name | Cluster |
|----|------|---------|
| 6 | Booking Management | Cluster 2 (reuse existing) |
| 13 | Salon Management | Cluster 1 |
| 14 | Salon Marketing | Cluster 3 |
| 15 | Beauty Business Growth | Cluster 4 |
| 16 | Salon Payments | Cluster 5 |
| 17 | Staff Management | Cluster 6 |
| 18 | Client Retention | Cluster 7 |
| 19 | Freelance Beauty | Cluster 8 |
| 20 | Industry Trends | Cluster 9 |
| 21 | Salon Analytics | Cluster 10 |
| 22 | Daisy Platform | Cluster 11 |
| 23 | Multi-Channel | Additional |
| 24 | Decision Stage | BOFU |
| 25 | Thought Leadership | Additional |

---

## Full Article Inventory (72 New Articles)

### Cluster 11: Daisy Platform Advantage (8 articles)
**Parent Pillar:** `/ai-salon-software`
**File:** `daisy-advantage.ts`

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 135 | How AI Receptionists Are Transforming Salon Customer Service | `ai-receptionist-salon-customer-service` | Guide | Business |
| 2 | 136 | Why All-in-One Salon Platforms Beat Point Solutions | `all-in-one-salon-platform-vs-point-solutions` | Comparison | Business |
| 3 | 137 | 360-Degree Customer Acquisition: The New Standard for Salons | `360-degree-customer-acquisition-salons` | Guide | Business |
| 4 | 138 | White-Label Booking: Why Your Brand Matters More Than Your Software's | `white-label-salon-booking` | Guide | Business |
| 5 | 139 | Running a Bilingual Beauty Business: Tools and Tips | `bilingual-beauty-business-tools` | Guide | Business |
| 6 | 140 | How Data-Driven Beauty Platforms Create Competitive Moats | `data-driven-beauty-platform` | Guide | Business |
| 7 | 141 | Why Modern Salons Need an AI Platform (Not Just Software) | `modern-salons-ai-platform-not-software` | Guide | Business |
| 8 | 142 | Is Your Current Salon Software Holding You Back? 10 Warning Signs | `salon-software-holding-you-back-warning-signs` | Guide | Business |

### BOFU: Decision Stage (3 articles)
**Parent Pillar:** `/salon-management-software`
**File:** `bottom-of-funnel.ts`

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 143 | Salon Software Switching Checklist: Your 30-Day Migration Plan | `salon-software-switching-checklist-migration` | Guide | Business |
| 2 | 144 | What to Expect in Your First Month With a New Salon Platform | `first-month-new-salon-platform` | Guide | Business |
| 3 | 145 | How to Calculate the ROI of Switching Salon Software | `calculate-roi-switching-salon-software` | Guide | Business |

### Thought Leadership (4 articles)
**Parent Pillar:** `/ai-salon-software`
**File:** `thought-leadership.ts`

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 146 | The Death of 'Salon Software': Why the Future Belongs to Platform Ecosystems | `death-of-salon-software-platform-ecosystems` | Thought Leadership | Business |
| 2 | 147 | Why Beauty Businesses That Don't Adopt AI Will Be Left Behind by 2028 | `beauty-businesses-adopt-ai-or-left-behind` | Thought Leadership | Business |
| 3 | 148 | From Operations to Growth: The Mindset Shift Every Salon Owner Needs | `operations-to-growth-mindset-shift-salon` | Thought Leadership | Business |
| 4 | 149 | Why Your Salon Uses 5 Different Apps (And How to Fix It) | `salon-five-apps-how-to-fix` | Guide | Business |

### Cluster 1: Salon Management Software (8 articles)
**Parent Pillar:** `/salon-management-software`
**File:** `salon-management.ts`

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 150 | How to Choose Salon Management Software: A Step-by-Step Guide | `how-to-choose-salon-management-software` | Guide | Business |
| 2 | 151 | Salon Software Features Checklist: 25 Must-Haves | `salon-software-features-checklist` | Listicle | Business |
| 3 | 152 | Switching Salon Software: Complete Migration Guide | `switching-salon-software-migration-guide` | Guide | Business |
| 4 | 153 | Cloud vs Desktop Salon Software: Which Is Better? | `cloud-vs-desktop-salon-software` | Comparison | Business |
| 5 | 154 | Small Salon Software: Best Options for 1-5 Staff | `small-salon-software-options` | Guide | Business |
| 6 | 155 | Multi-Location Salon Software: Managing Multiple Branches | `multi-location-salon-software` | Guide | Business |
| 7 | 156 | Salon Software ROI: Calculating Your Return on Investment | `salon-software-roi-calculator` | Guide | Business |
| 8 | 157 | Free vs Paid Salon Software: The True Cost Comparison | `free-vs-paid-salon-software` | Comparison | Business |

### Cluster 2: Beauty Booking (2 new articles)
**Parent Pillar:** `/beauty-booking-system`
**File:** Business article appended to `booking-management.ts`; Professional article appended to `freelance-beauty.ts`
**Note:** 5 of 7 planned articles already exist in WS3 `booking-management.ts`. The 2 remaining articles are appended to existing files rather than creating a standalone file for 2 articles.

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 158 | Recurring Appointment Scheduling for Salons | `recurring-appointment-scheduling-salon` | How-to | Business |
| 2 | 211 | Freelance Stylist Scheduling: Managing Your Own Calendar | `freelance-stylist-scheduling-guide` | Guide | Professional |

### Cluster 3: Salon Marketing (8 articles)
**Parent Pillar:** `/salon-marketing-strategies`
**File:** `salon-marketing.ts`
**Note:** Topics overlap with WS3 `marketing-promotions.ts` — differentiated by industry-generic keyword angle

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 159 | 15 Salon Marketing Ideas That Work in 2026 | `salon-marketing-ideas-2026` | Listicle | Business |
| 2 | 160 | Salon Social Media Marketing: Instagram, TikTok & Beyond | `salon-social-media-marketing` | Guide | Business |
| 3 | 161 | Salon Email Marketing: Templates & Automation Guide | `salon-email-marketing-templates` | Guide | Business |
| 4 | 162 | How to Create a Salon Loyalty Program That Retains Clients | `salon-loyalty-program-guide` | How-to | Business |
| 5 | 163 | Salon Referral Programs: Turn Clients Into Ambassadors | `salon-referral-program-guide` | How-to | Business |
| 6 | 164 | Google My Business for Salons: Complete Optimization Guide | `google-my-business-salon-optimization` | How-to | Business |
| 7 | 165 | Salon SEO: Ranking Your Business in Local Search | `salon-seo-local-search-guide` | Guide | Business |
| 8 | 212 | Marketing Yourself as an Independent Beauty Professional | `independent-beauty-professional-marketing` | Guide | Professional |

### Cluster 4: Beauty Business Growth (7 articles)
**Parent Pillar:** `/beauty-business-growth-guide`
**File:** `beauty-business-growth.ts`

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 166 | How to Start a Beauty Business: Complete Startup Guide | `how-to-start-beauty-business` | Guide | Business |
| 2 | 167 | Salon Pricing Strategy: How to Price Your Services | `salon-pricing-strategy-guide` | Guide | Business |
| 3 | 168 | Increasing Salon Revenue: 10 Proven Strategies | `increase-salon-revenue-strategies` | Listicle | Business |
| 4 | 169 | Expanding Your Salon: When and How to Add Locations | `expanding-salon-adding-locations` | Guide | Business |
| 5 | 170 | Salon Membership & Subscription Models | `salon-membership-subscription-models` | Guide | Business |
| 6 | 213 | Building a Freelance Beauty Business from Scratch | `building-freelance-beauty-business` | Guide | Professional |
| 7 | 171 | Salon Business Plan: Template & Writing Guide | `salon-business-plan-template` | Guide | Business |

### Cluster 5: Salon Payments (6 articles)
**Parent Pillar:** `/salon-payment-solutions`
**File:** `salon-payments.ts`
**Note:** Topics overlap with WS3 `payment-processing.ts` — differentiated by industry-generic keyword angle

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 172 | Salon POS Systems: Complete Buyer's Guide | `salon-pos-system-buyers-guide` | Guide | Business |
| 2 | 173 | Salon Tipping: Etiquette, Policies & Digital Solutions | `salon-tipping-policies-digital` | Guide | Business |
| 3 | 174 | Contactless Payments for Salons: Setup Guide | `contactless-payments-salon-setup` | How-to | Business |
| 4 | 175 | Salon Invoicing: Professional Billing Made Easy | `salon-invoicing-billing-guide` | How-to | Business |
| 5 | 214 | Getting Paid as a Freelance Stylist: Payment Methods Compared | `freelance-stylist-payment-methods` | Comparison | Professional |
| 6 | 176 | Payment Processing Fees for Salons: What You're Really Paying | `salon-payment-processing-fees` | Guide | Business |

### Cluster 6: Staff Management (6 articles)
**Parent Pillar:** `/salon-staff-management`
**File:** `staff-management.ts`
**Note:** Topics overlap with WS3 `team-management.ts` — differentiated angle

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 177 | Salon Staff Scheduling: Best Practices & Templates | `salon-staff-scheduling-best-practices` | How-to | Business |
| 2 | 178 | Salon Commission Structures: Find the Right Model | `salon-commission-structures-guide` | Guide | Business |
| 3 | 179 | Hiring Salon Staff: Interview Questions & Red Flags | `hiring-salon-staff-interview-guide` | Guide | Business |
| 4 | 180 | Salon Employee Retention: Keeping Your Best Stylists | `salon-employee-retention-strategies` | Guide | Business |
| 5 | 215 | Managing a Freelance Beauty Schedule Effectively | `managing-freelance-beauty-schedule` | How-to | Professional |
| 6 | 181 | Salon Staff Performance Reviews: A Template | `salon-staff-performance-reviews` | Guide | Business |

### Cluster 7: Client Retention (7 articles)
**Parent Pillar:** `/salon-client-retention`
**File:** `client-retention.ts`

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 182 | Salon Client Retention Rate: How to Calculate & Improve It | `salon-client-retention-rate-guide` | Guide | Business |
| 2 | 183 | Salon Rebooking Strategies: Getting Clients to Come Back | `salon-rebooking-strategies` | How-to | Business |
| 3 | 184 | Salon Client Experience: From First Visit to Loyal Regular | `salon-client-experience-guide` | Guide | Business |
| 4 | 185 | Salon Personalization: Remembering Every Client's Preferences | `salon-client-personalization-tips` | How-to | Business |
| 5 | 186 | Win-Back Campaigns: Re-Engaging Lost Salon Clients | `salon-win-back-campaigns` | How-to | Business |
| 6 | 187 | Customer Feedback for Salons: Collection & Action Guide | `salon-customer-feedback-guide` | Guide | Business |
| 7 | 216 | Building Client Loyalty as an Independent Beauty Pro | `independent-beauty-pro-client-loyalty` | Guide | Professional |

### Cluster 8: Freelance Beauty Professional (8 articles)
**Parent Pillar:** `/freelance-beauty-professional-guide`
**File:** `freelance-beauty.ts`

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 217 | Going Freelance as a Beauty Professional: Pros & Cons | `going-freelance-beauty-professional` | Guide | Professional |
| 2 | 218 | Freelance Hairstylist Business Setup: Legal & Financial Guide | `freelance-hairstylist-business-setup` | Guide | Professional |
| 3 | 219 | Setting Your Prices as an Independent Beauty Professional | `setting-prices-independent-beauty-pro` | How-to | Professional |
| 4 | 220 | Building a Personal Brand in the Beauty Industry | `personal-brand-beauty-industry` | Guide | Professional |
| 5 | 221 | Finding Clients as a Freelance Beauty Professional | `finding-clients-freelance-beauty` | Guide | Professional |
| 6 | 222 | Freelance Beauty Professional Insurance Guide | `freelance-beauty-professional-insurance` | Guide | Professional |
| 7 | 223 | Tax Guide for Freelance Beauty Professionals | `tax-guide-freelance-beauty-professionals` | Guide | Professional |
| 8 | 224 | Scaling Up: From Solo Freelancer to Beauty Business Owner | `scaling-freelancer-to-beauty-business` | Guide | Professional |

### Cluster 9: Industry Trends (6 articles)
**Parent Pillar:** `/beauty-industry-trends`
**File:** `industry-trends.ts`

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 188 | Beauty Industry Statistics 2026: Key Numbers to Know | `beauty-industry-statistics-2026` | Listicle | Business |
| 2 | 189 | AI in the Beauty Industry: Practical Applications | `ai-beauty-industry-applications` | Guide | Business |
| 3 | 190 | Sustainability in Beauty Salons: A Practical Guide | `sustainability-beauty-salons` | Guide | Business |
| 4 | 191 | The Rise of Beauty Marketplaces: What It Means for Salons | `beauty-marketplaces-impact-salons` | Guide | Business |
| 5 | 225 | Wellness Meets Beauty: The Integration Trend | `wellness-beauty-integration-trend` | Guide | Professional |
| 6 | 192 | Beauty Industry Predictions: What's Coming in 2027 | `beauty-industry-predictions-2027` | Guide | Business |

### Cluster 10: Salon Analytics (4 new articles)
**Parent Pillar:** `/salon-analytics-reporting`
**File:** `salon-analytics.ts`
**Note:** 1 of 5 planned articles (`tracking-freelance-beauty-income`) already exists in WS3

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 193 | 7 Salon KPIs Every Owner Should Track | `salon-kpis-to-track` | Listicle | Business |
| 2 | 194 | Understanding Salon Client Lifetime Value | `salon-client-lifetime-value` | Guide | Business |
| 3 | 195 | Salon Revenue Reporting: What to Measure & Why | `salon-revenue-reporting-guide` | Guide | Business |
| 4 | 196 | Data-Driven Salon Management: Beginner's Guide | `data-driven-salon-management` | Guide | Business |

### Multi-Channel Communication (3 articles)
**Parent Pillar:** `/salon-marketing-strategies`
**File:** `multi-channel.ts`

| # | ID | Title | Slug | Type | Audience |
|---|-----|-------|------|------|----------|
| 1 | 197 | WhatsApp Marketing for Salons: Complete Guide | `whatsapp-marketing-salons-guide` | Guide | Business |
| 2 | 198 | Managing Instagram DMs for Your Beauty Business | `managing-instagram-dms-beauty-business` | Guide | Business |
| 3 | 199 | Omnichannel Communication: Reaching Salon Clients Where They Are | `omnichannel-communication-salon-clients` | Guide | Business |

---

## Overlap Differentiation Strategy

For the ~12 articles where WS3 and WS5 target the same topic:

| WS3 article (Daisy-feature angle) | WS5 article (industry-generic angle) | Differentiation |
|---|---|---|
| `email-marketing-salons-templates` — tactical templates | `salon-email-marketing-templates` — strategy + automation guide | WS3 = templates to copy; WS5 = strategic framework |
| `complete-guide-salon-loyalty-programs` — Daisy implementation | `salon-loyalty-program-guide` — design from scratch | WS3 = Daisy setup; WS5 = industry-wide how-to |
| `salon-referral-programs-that-work` — results focus | `salon-referral-program-guide` — ambassadors playbook | WS3 = what works; WS5 = building the program |
| `staff-scheduling-salon-owners-guide` — owner's perspective | `salon-staff-scheduling-best-practices` — templates + workflows | WS3 = management; WS5 = operational templates |
| `commission-structures-keep-top-talent` — retention angle | `salon-commission-structures-guide` — financial modeling | WS3 = keep talent; WS5 = find the right model |
| `salon-pos-systems-2026-guide` — what to look for | `salon-pos-system-buyers-guide` — complete buyer's guide | WS3 = evaluation; WS5 = purchasing decision |
| `tipping-best-practices-beauty-businesses` — best practices | `salon-tipping-policies-digital` — etiquette + digital | WS3 = tips to implement; WS5 = policy design |
| `7-salon-metrics-track-weekly` — 7 specific metrics | `salon-kpis-to-track` — KPI framework | WS3 = weekly tracking; WS5 = what to track and why |
| `data-driven-salons-outperform-competition` — competitive edge | `data-driven-salon-management` — beginner's guide | WS3 = why data wins; WS5 = how to start |

**Intra-WS5 overlap — migration articles:**
| ID 143 `salon-software-switching-checklist-migration` | ID 152 `switching-salon-software-migration-guide` |
|---|---|
| BOFU: tactical 30-day checklist format | Cluster 1: comprehensive migration guide |
| Target: "salon software switching checklist" | Target: "switch salon software" |
| Angle: downloadable checklist, timeline, action items | Angle: complete process guide with data migration, team training |

Cross-linking rule: each overlapping pair links to the other as "Related reading" within the article content.

---

## Content Standards

Per article:
- 1,500-2,500 words of HTML content in `aboutPosts`
- FAQ section with 4+ questions using `<h3>` per question
- Meta title under 60 chars with `| Daisy` or `| The Daisy` brand suffix
- Meta description 150-160 chars
- GEO: direct-answer opening sentence per section
- Internal link to parent pillar page within first 200 words
- Internal link to at least 1 feature page
- Internal link to pricing page
- 1-2 cross-links to related articles
- Overlap articles: cross-link to WS3 counterpart

Content tone:
- Confident, knowledgeable — Daisy is the innovation leader
- Second person ("you", "your salon")
- Scannable: H2s, H3s, bullet points, numbered lists, tables
- Include data and statistics
- Reference Daisy naturally (not salesy)

---

## Build Sequence (6 Sessions)

### Session 1: Highest Conversion (15 articles)
- `daisy-advantage.ts` — 8 articles (IDs 135-142)
- `bottom-of-funnel.ts` — 3 articles (IDs 143-145)
- `thought-leadership.ts` — 4 articles (IDs 146-149)
- Wire into `blogData.ts`
- Run TypeScript check + blog tests

### Session 2: Top Pillar Support (10 articles)
- `salon-management.ts` — 8 articles (IDs 150-157)
- Append ID 158 to existing `booking-management.ts` (Cluster 2 business article)
- Append ID 211 to `freelance-beauty.ts` (Cluster 2 professional article, built in Session 5)
- Wire into `blogData.ts`
- Note: ID 211 is deferred to Session 5 when `freelance-beauty.ts` is created

### Session 3: Marketing + Growth (15 articles)
- `salon-marketing.ts` — 8 articles (IDs 159-165, 212)
- `beauty-business-growth.ts` — 7 articles (IDs 166-171, 213)
- Wire into `blogData.ts`

### Session 4: Payments + Staff (12 articles)
- `salon-payments.ts` — 6 articles (IDs 172-176, 214)
- `staff-management.ts` — 6 articles (IDs 177-181, 215)
- Wire into `blogData.ts`

### Session 5: Retention + Freelance (16 articles)
- `client-retention.ts` — 7 articles (IDs 182-187, 216)
- `freelance-beauty.ts` — 9 articles (IDs 211, 217-224; includes Cluster 2 professional article deferred from Session 2)
- Wire into `blogData.ts`

### Session 6: Trends + Analytics + Multi-Channel (13 articles)
- `industry-trends.ts` — 6 articles (IDs 188-192, 225)
- `salon-analytics.ts` — 4 articles (IDs 193-196)
- `multi-channel.ts` — 3 articles (IDs 197-199)
- Wire into `blogData.ts`
- Update `public/llms.txt` and `public/llms-full.txt`
- Final TypeScript check + blog tests + build verification

### After Each Session
- Commit and push
- Verify pages render at `/resources/blog/[userType]/[slug]`
- Check pillar page ClusterArticleGrid resolves new articles
- Update `public/llms.txt` and `public/llms-full.txt` with new article references (GEO priority — don't defer)

---

## Files Modified

### Per Session
- `src/lib/constants/blog/blogData.ts` — add imports + spread into arrays
- `public/llms.txt` — update with notable new articles
- `public/llms-full.txt` — same

### No New Routes or Components Needed
All articles render through the existing blog page infrastructure.
