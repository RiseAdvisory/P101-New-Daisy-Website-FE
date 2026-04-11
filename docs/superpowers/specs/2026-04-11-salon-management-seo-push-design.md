# Salon Management SEO Push — Design Spec

**Date:** 2026-04-11
**Goal:** Dominate "salon management" and "salon software" search queries globally by reinforcing the internal link topology and expanding glossary coverage to capture query variants.
**Trigger:** GSC report (Apr 2-8, 2026) showing `/en/glossary/salon-management-software` indexed with 85 impressions, 0 clicks, avg position 57. 23 distinct queries detected. "what is salon software?" ranked at position 7.5.

---

## Context

### What we have

| Content Type | Count | Salon-mgmt related |
|---|---|---|
| Pillar pages | 11 | 1 (`/en/salon-management-software`) |
| Blog articles | 21 files | 17 mention "salon management" or "salon software" |
| Guides | 7 | 5 |
| Glossary entries | 7 | 5 |
| Solution pages | 13 | 1 primary + 12 related verticals |

### The problem

**The glossary page is completely orphaned.** Zero inbound internal links from any content. Google found it through the sitemap but has no authority signals to rank it higher.

**12 of 17 relevant blog articles don't link anywhere in the topic cluster.** They mention "salon management" or "salon software" in their body text but contain no links to the glossary, pillar, or solution pages.

**No cross-type linking exists.** Glossary entries only link to other glossary entries. Guides don't link to glossary or pillar. The pillar page doesn't link to glossary entries. Each content type is an island.

### GSC query signals

| Query | Impressions | Position | Has dedicated page? |
|---|---|---|---|
| salon management software | 23 | 63 | Yes (glossary + pillar + solution) |
| salon management system | 9 | 66 | No |
| salon management systems | 7 | 60 | No |
| salon management | 5 | 59 | No (covered by pillar) |
| salon employee management software | 2 | 81 | No |
| what is salon software? | 2 | 7.5 | Partially (glossary) |
| salon customer management | 1 | 66 | No |

---

## Part A — Internal Link Reinforcement

### A1. Blog articles → Glossary + Pillar

**12 blog article files** that mention "salon management" or "salon software" without linking to the topic cluster. For each, add:
- One contextual link to `/en/glossary/salon-management-software` where the term "salon management software" first appears or is defined
- One contextual link to `/en/salon-management-software` (pillar page) where a broader reference to the platform or comprehensive guide fits

**Files to update:**

1. `src/lib/constants/blog/articles/multi-channel.ts`
2. `src/lib/constants/blog/articles/marketing-promotions.ts`
3. `src/lib/constants/blog/articles/beauty-business-growth.ts`
4. `src/lib/constants/blog/articles/staff-management.ts`
5. `src/lib/constants/blog/articles/business-growth.ts`
6. `src/lib/constants/blog/articles/daisy-advantage.ts`
7. `src/lib/constants/blog/articles/team-management.ts`
8. `src/lib/constants/blog/articles/analytics-reports.ts`
9. `src/lib/constants/blog/articles/payment-processing.ts`
10. `src/lib/constants/blog/articles/ai-intelligence.ts`
11. `src/lib/constants/blog/articles/client-retention.ts`
12. `src/lib/constants/blog/articles/booking-management.ts`

**Link format:** Inline HTML anchor tags within the article content (matching existing link patterns in the codebase):
```html
<a href="/en/glossary/salon-management-software">salon management software</a>
<a href="/en/salon-management-software">complete salon management guide</a>
```

**Rule:** One glossary link and one pillar link per article max. Don't over-optimize. Place where the mention is most natural.

### A2. Glossary entries → Blog articles + Pillar

**5 existing salon-related glossary entries** currently only cross-link to each other via `relatedTerms`. Update each entry's `extendedDescription` or FAQ answers to include contextual links to:
- The pillar page (`/en/salon-management-software`)
- 1-2 relevant blog articles

**Entries to update:**

1. `salon-management-software` — link to pillar + "how to choose" blog article
2. `ai-receptionist-for-salons` — link to pillar + AI intelligence blog articles
3. `cashback-beauty-booking` — link to pillar + client retention blog articles
4. `white-label-salon-software` — link to pillar + daisy advantage blog articles
5. `salon-booking-software` — link to pillar + booking management blog articles

### A3. Pillar page → Glossary entries

Update `src/lib/constants/pillars/salon-management-software.ts` to add contextual links to glossary entries where technical terms are introduced in the pillar content. Target terms:
- "salon management software" → `/en/glossary/salon-management-software`
- "AI receptionist" → `/en/glossary/ai-receptionist-for-salons`
- "online booking" → `/en/glossary/salon-booking-software`
- "white-label" → `/en/glossary/white-label-salon-software`
- "cashback" → `/en/glossary/cashback-beauty-booking`

**Rule:** Link each term once on first mention only. Don't repeat links.

### A4. Guides → Glossary + Pillar

Update `src/lib/constants/guides/guideData.ts` to add links in the 5 salon-related guides:

1. `reduce-salon-no-shows` — link to glossary (salon-management-software) + pillar
2. `get-more-salon-clients` — link to glossary (salon-management-software, cashback-beauty-booking) + pillar
3. `choose-best-salon-software` — link to glossary (salon-management-software) + pillar
4. `switch-from-fresha` — link to glossary (salon-management-software, salon-booking-software) + pillar
5. `set-up-online-booking-salon` — link to glossary (salon-booking-software) + pillar

---

## Part B — New Glossary Entries

### B1. `salon-management-system`

**Target queries:** "salon management system" (9 impressions, pos 66), "salon management systems" (7 impressions, pos 60), "management system for salon" (2 impressions, pos 74)

**Angle:** Distinct from "software" by covering the full system concept — hardware + software + workflows + integrations working together. A salon management system includes the software, the POS terminal, the payment hardware, staff workflows, and how they connect.

**Format:** Matches `GlossaryEntry` interface exactly:
- `slug`: `salon-management-system`
- `term`: `Salon Management System`
- `definition`: Focus on the holistic system (not just the software)
- `extendedDescription`: Market context, why systems beat point solutions, how Daisy provides a unified system
- `keyFeatures`: 6 comparison rows (Daisy vs typical)
- `howDaisyImplements`: Daisy as a complete system, not just software
- `faqs`: 6-8 questions derived from GSC queries + People Also Ask patterns
- `relatedTerms`: `['salon-management-software', 'salon-booking-software', 'salon-employee-management-software']`
- `keywords`: `['salon management system', 'salon management systems', 'management system for salon', 'salon system', 'beauty salon management system']`

**Internal links from day one:**
- Link FROM the 12 blog articles (where "salon management system" appears naturally)
- Link FROM the pillar page
- Link TO the pillar page, existing glossary entries, and relevant blog articles

### B2. `salon-employee-management-software`

**Target queries:** "salon employee management software" (2 impressions, pos 81), "which salon software has built-in staff management features" (2 impressions, pos 87)

**Angle:** Staff scheduling, commission structures, performance tracking, shift management, team permissions. The people side of salon operations.

**Format:** Matches `GlossaryEntry` interface exactly:
- `slug`: `salon-employee-management-software`
- `term`: `Salon Employee Management Software`
- `definition`: Focus on staff-specific capabilities
- `extendedDescription`: Staff management challenges in salons, commission complexity, scheduling
- `keyFeatures`: 6 comparison rows focused on staff features
- `howDaisyImplements`: Daisy's staff scheduling, commission tracking, team permissions
- `faqs`: 6-8 questions about staff management features
- `relatedTerms`: `['salon-management-software', 'salon-management-system', 'salon-booking-software']`
- `keywords`: `['salon employee management software', 'salon staff management', 'salon scheduling software', 'salon team management', 'salon staff scheduling']`

**Internal links from day one:**
- Link FROM staff-management.ts and team-management.ts blog articles
- Link FROM the pillar page (where staff management is discussed)
- Link TO pillar page, glossary entries, and staff-related blog articles

### B3. `salon-customer-management`

**Target queries:** "salon customer management" (1 impression, pos 66), "salon customer management software" (related)

**Angle:** CRM, client records, visit history, preferences, loyalty programs, retention analytics. The client relationship side.

**Format:** Matches `GlossaryEntry` interface exactly:
- `slug`: `salon-customer-management`
- `term`: `Salon Customer Management`
- `definition`: Focus on client relationship capabilities
- `extendedDescription`: Why client data matters, retention vs acquisition costs, CRM in beauty
- `keyFeatures`: 6 comparison rows focused on CRM features
- `howDaisyImplements`: Daisy's AI-driven CRM, client profiles, cashback loyalty
- `faqs`: 6-8 questions about client management
- `relatedTerms`: `['salon-management-software', 'cashback-beauty-booking', 'salon-management-system']`
- `keywords`: `['salon customer management', 'salon CRM', 'salon client management', 'beauty client management', 'salon customer database']`

**Internal links from day one:**
- Link FROM client-retention.ts blog articles
- Link FROM the pillar page (where client management is discussed)
- Link TO pillar page, glossary entries, and retention-related blog articles

---

## Part C — Image Generation for New Glossary Entries

Each new glossary entry needs a hero image generated via the existing pipeline.

**Tool:** Replicate API using `openai/gpt-image-1.5` model
**Script:** `scripts/generate-article-images.mjs`
**Config:** `config/image-generator.json` (1440x810, WebP, quality: high, compression: 85)
**Output:** `public/images/glossary/{slug}.webp`
**Plan file:** Append to `docs/image-generation-plan-guides-glossary.md`

### Image prompts

Append these 3 entries to `docs/image-generation-plan-guides-glossary.md`:

**## 11. salon-management-system**
- Prompt: Professional editorial photography. A bird's-eye view of an entire salon floor plan laid out on a dark walnut table — a tablet, a POS terminal, appointment cards, a cash drawer, staff badges, and connection lines drawn in chalk between them. All the pieces of a system, connected. Warm overhead lighting, dark wood, metallic hardware, chalk-white connection lines. No text, no watermarks, no logos, no words, no letters. Cinematic composition, rule of thirds, shallow depth of field.

**## 12. salon-employee-management-software**
- Prompt: Professional editorial photography. A row of five salon stations viewed from above, each with a different set of professional tools neatly arranged — scissors, brushes, combs, clips — like individual workstations with personality. Each station lit by its own pendant light. Team individuality within a shared space. Warm amber pendant lights, cool grey countertops, colorful tools. No people. No text, no watermarks, no logos, no words, no letters. Cinematic composition, rule of thirds, shallow depth of field.

**## 13. salon-customer-management**
- Prompt: Professional editorial photography. A Rolodex-style card holder on a reception desk, but instead of paper cards, each slot holds a small framed portrait-sized mirror reflecting warm salon light. Client relationships, personal connections, curated care. Rose gold card holder, soft pink and warm gold reflections, blurred salon chairs in background. No faces visible in mirrors. No text, no watermarks, no logos, no words, no letters. Cinematic composition, rule of thirds, shallow depth of field.

### Generation command

```bash
# Generate each new glossary image
node scripts/generate-article-images.mjs --slug=salon-management-system --auto
node scripts/generate-article-images.mjs --slug=salon-employee-management-software --auto
node scripts/generate-article-images.mjs --slug=salon-customer-management --auto
```

### Verification

After generation, verify images exist:
```bash
ls -la public/images/glossary/salon-management-system.webp
ls -la public/images/glossary/salon-employee-management-software.webp
ls -la public/images/glossary/salon-customer-management.webp
```

The glossary page component (`GlossaryPageClient.tsx`) already resolves images via `src={/images/glossary/${slug}.webp}` — no code changes needed for image display.

---

## Implementation Sequence

1. **Create 3 new glossary entries** in `glossaryData.ts` (Part B)
2. **Append image prompts** to `docs/image-generation-plan-guides-glossary.md` (Part C)
3. **Generate 3 glossary images** via `scripts/generate-article-images.mjs` (Part C)
4. **Update 12 blog articles** with glossary + pillar links (Part A1)
5. **Update 5 existing glossary entries** with blog + pillar links (Part A2)
6. **Update pillar page** with glossary links (Part A3)
7. **Update 5 guides** with glossary + pillar links (Part A4)
8. **Cross-link new glossary entries** with existing content (Part B internal links)
9. **Build and verify** — production build passes, no broken links, images render

Steps 1-3 run first (glossary entries must exist before linking to them).
Steps 4-8 can be parallelised into 3 batches:
- Batch 1: Blog article links (A1) + Guide links (A4)
- Batch 2: Glossary entry updates (A2) + Pillar page updates (A3)
- Batch 3: New entry cross-links (Part B internal links)

Step 9 runs after all batches complete.

---

## Success Criteria

**Short-term (2-4 weeks):**
- New glossary entries appear in GSC with impressions
- Existing glossary page position improves from 57 toward 30
- "salon management system" queries start showing the new glossary page

**Medium-term (4-8 weeks):**
- Clicks begin appearing (requires position < 20 for most queries)
- "what is salon software?" maintains or improves from position 7.5
- Total impression count for the topic cluster grows beyond 85/week

**Measurement:**
- Weekly GSC exports comparing position and impression trends
- Track by page and by query to see which content types gain fastest

---

## Files Modified

| File | Change |
|---|---|
| `src/lib/constants/glossary/glossaryData.ts` | Add 3 new entries + update 5 existing entries with cross-links |
| `src/lib/constants/pillars/salon-management-software.ts` | Add glossary links on first mention of key terms |
| `src/lib/constants/guides/guideData.ts` | Add glossary + pillar links in 5 guides |
| `src/lib/constants/blog/articles/multi-channel.ts` | Add glossary + pillar links |
| `src/lib/constants/blog/articles/marketing-promotions.ts` | Add glossary + pillar links |
| `src/lib/constants/blog/articles/beauty-business-growth.ts` | Add glossary + pillar links |
| `src/lib/constants/blog/articles/staff-management.ts` | Add glossary + pillar links |
| `src/lib/constants/blog/articles/business-growth.ts` | Add glossary + pillar links |
| `src/lib/constants/blog/articles/daisy-advantage.ts` | Add glossary + pillar links |
| `src/lib/constants/blog/articles/team-management.ts` | Add glossary + pillar links |
| `src/lib/constants/blog/articles/analytics-reports.ts` | Add glossary + pillar links |
| `src/lib/constants/blog/articles/payment-processing.ts` | Add glossary + pillar links |
| `src/lib/constants/blog/articles/ai-intelligence.ts` | Add glossary + pillar links |
| `src/lib/constants/blog/articles/client-retention.ts` | Add glossary + pillar links |
| `src/lib/constants/blog/articles/booking-management.ts` | Add glossary + pillar links |
| `docs/image-generation-plan-guides-glossary.md` | Append 3 new glossary image prompts |
| `public/images/glossary/salon-management-system.webp` | Generated hero image (new) |
| `public/images/glossary/salon-employee-management-software.webp` | Generated hero image (new) |
| `public/images/glossary/salon-customer-management.webp` | Generated hero image (new) |

**Total: 18 files modified/created**
