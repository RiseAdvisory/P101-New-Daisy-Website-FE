# SEO Cycle Playbook

Step-by-step guide for each 2-3 week optimization cycle.

---

## Phase 1: Pull Data (30 minutes)

### Google Search Console

1. Go to **Performance > Search Results**
2. Set date range to **last 28 days**
3. Click **Pages** tab
4. Export CSV (save to `reports/` as `YYYY-MM-DD-gsc-pages.csv`)
5. Click **Queries** tab
6. Export CSV (save as `YYYY-MM-DD-gsc-queries.csv`)

### Bing Webmaster Tools

1. Go to **Search Performance**
2. Export page and keyword data
3. Save to `reports/` as `YYYY-MM-DD-bing-pages.csv`

### Page Indexing

1. Go to **Indexing > Pages** in GSC
2. Note the current counts:
   - Indexed: ___
   - Not indexed: ___
   - Any new errors: ___

---

## Phase 2: Diagnose (30-60 minutes)

Open the exported CSVs and answer these questions:

### A. Which pages have high impressions but low CTR?

Sort pages by impressions (descending). Flag any page with:
- **100+ impressions AND CTR below 2%**

These are pages Google shows to people, but people don't click. The title and/or meta description isn't compelling enough.

**Action**: Rewrite title or meta description (not both — change one at a time).

### B. Which pages are on the cusp of page 1?

Sort pages by position. Flag any page with:
- **Position 6-15** (bottom of page 1 or top of page 2)
- **Decent impressions** (50+)

These are pages close to breaking through.

**Action**: Strengthen content, add internal links from high-authority pages, update with fresh data.

### C. Which queries are you ranking for that you didn't target?

Sort queries by impressions. Look for surprising queries you didn't intentionally optimize for.

**Action**: Create or improve content that directly targets these queries.

### D. Which pages get zero impressions?

These are either not indexed, targeting the wrong keywords, or too thin.

**Action**: Check indexing status, review content quality, improve internal linking.

### E. Any declining trends?

Compare this cycle's numbers to the previous cycle. Flag:
- Pages that lost 20%+ impressions
- Pages that dropped 3+ positions
- Pages that lost CTR despite stable position

**Action**: Content may be going stale, or a competitor published something better. Update the content.

---

## Phase 3: Plan Changes (15 minutes)

Based on your diagnosis, pick **1-3 pages** to improve this cycle. No more.

For each page, document in the cycle report:
1. **Page URL**
2. **Current metrics** (impressions, clicks, CTR, position)
3. **Diagnosis** (why it's underperforming)
4. **Planned change** (what you'll do)
5. **Expected outcome** (what you hope to see in 2-3 weeks)

**Rules:**
- Change only ONE thing per page (title OR description OR content — not all three)
- Don't touch pages that are performing well
- Prioritize pages with the highest impressions first (bigger audience = bigger impact)

---

## Phase 4: Implement Changes (30-60 minutes)

Make the changes. For each change:

1. Record the **old value** and **new value** in `tracking/change-log.csv`
2. Record the **date** of the change
3. Deploy the change
4. Request re-indexing in GSC for the specific URL (URL Inspection > Request Indexing)

### Types of Changes

**Title rewrites** (for low CTR):
- Lead with the benefit, not the topic
- Include a number or year if relevant
- Keep under 60 characters
- Don't change titles on pages already ranking well

**Description rewrites** (for low CTR):
- Summarize what the reader will get
- Include a call to action ("Learn how...", "Discover...")
- Keep under 155 characters
- Make it specific, not generic

**Content improvements** (for pages at position 6-15):
- Add a new section that answers a related question
- Update statistics with current year data
- Add internal links from your highest-traffic pages
- Improve the opening paragraph to be more direct

**Internal linking** (for pages with low authority):
- Add links to the target page from 3-5 high-traffic pages
- Use descriptive anchor text (not "click here")
- Link from contextually relevant content

---

## Phase 5: Wait (2-3 weeks)

Do nothing to those pages for 2-3 weeks. Google needs time to:
- Re-crawl the page
- Re-evaluate the content
- Adjust rankings

---

## Phase 6: Measure Impact (30 minutes)

At the start of the next cycle:

1. Pull fresh data (repeat Phase 1)
2. For each page you changed, compare:
   - Impressions: before vs after
   - CTR: before vs after
   - Position: before vs after
   - Clicks: before vs after
3. Record results in `tracking/change-log.csv`
4. Update `CHANGELOG.md` with outcomes

### Interpreting Results

| Outcome | Meaning | Next Action |
|---------|---------|-------------|
| CTR improved, position stable | Title/description change worked | Keep it, move to next page |
| Position improved | Content/linking change worked | Keep it, consider further optimization |
| No change | Change was neutral | Try a different approach next cycle |
| Metrics declined | Change was negative | Revert the change immediately |

---

## Monthly Review (quarterly deep dive)

Every 4th cycle (roughly monthly), do a broader review:

1. **Content freshness audit**: Which articles have dates older than 6 months?
2. **Keyword gap analysis**: What are competitors ranking for that you're not?
3. **Indexing health check**: Any new crawl errors? Pages dropping from index?
4. **Core Web Vitals**: Any regressions in LCP, CLS, or INP?
5. **Structured data validation**: Run key pages through Rich Results Test

---

## What NOT to Do

- Don't change 10 pages at once — you won't know what worked
- Don't obsess over position for vanity keywords
- Don't change titles on pages already ranking in the top 3
- Don't ignore low-impression pages entirely — they may need better internal linking
- Don't chase algorithm updates — focus on content quality
- Don't forget to measure — every change should be tracked
