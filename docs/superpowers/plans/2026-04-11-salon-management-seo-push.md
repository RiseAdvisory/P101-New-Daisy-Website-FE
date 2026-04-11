# Salon Management SEO Push — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Dominate "salon management" and "salon software" search queries by reinforcing internal links across the topic cluster and creating 3 new glossary entries to capture query variants.

**Architecture:** All content is static TypeScript in `src/lib/constants/`. Links are HTML anchor tags inside content strings. New glossary entries follow the existing `GlossaryEntry` interface. Hero images generated via Replicate pipeline.

**Tech Stack:** Next.js 14, TypeScript, static data files, Replicate API (image gen)

**Spec:** `docs/superpowers/specs/2026-04-11-salon-management-seo-push-design.md`

---

## Task 1: Add 3 new glossary entries

**Files:**
- Modify: `src/lib/constants/glossary/glossaryData.ts` (insert before line 341, the closing `];`)

- [ ] **Step 1: Read the current glossary file to confirm insertion point**

The file ends with the `salon-booking-software` entry at line 340, then `];` at line 341. New entries go before `];`.

- [ ] **Step 2: Add salon-management-system entry**

Insert after line 340 (after the closing `},` of `salon-booking-software`), before `];`:

```typescript
  {
    slug: 'salon-management-system',
    term: 'Salon Management System',
    definition:
      'is the complete operational infrastructure — software, hardware, workflows, and integrations — that a beauty business uses to run daily operations, from appointment booking and point-of-sale terminals to staff coordination and customer communications.',
    extendedDescription:
      'A salon management system goes beyond software alone. It encompasses the <a href="/en/glossary/salon-management-software">salon management software</a> platform, POS hardware, payment terminals, scheduling workflows, and the integrations that connect them into a unified operation. While "software" refers to the digital tool, "system" describes how everything works together — including team processes and customer touchpoints. Salons that implement a complete management system rather than bolting together separate tools report 25-35% higher operational efficiency and significantly fewer errors from manual data re-entry. The trend toward all-in-one systems is accelerating as salon owners recognize that disconnected tools create data silos, duplicated work, and missed opportunities. Read the <a href="/en/salon-management-software">complete salon management guide</a> for a deeper look at how modern systems transform beauty businesses.',
    keyFeatures: [
      { label: 'Software Platform', daisy: 'All-in-one cloud', typical: 'Separate tools' },
      { label: 'POS Integration', daisy: 'Built-in, zero fees', typical: 'Third-party terminal' },
      { label: 'Staff Workflows', daisy: 'AI-optimized', typical: 'Manual processes' },
      { label: 'Customer Channels', daisy: 'Unified inbox', typical: 'Fragmented (phone, email, DM)' },
      { label: 'Data Flow', daisy: 'Automatic across all functions', typical: 'Manual re-entry between tools' },
      { label: 'Hardware Required', daisy: 'None (cloud + any device)', typical: 'Dedicated terminals' },
    ],
    howDaisyImplements:
      'Daisy replaces the entire patchwork of salon tools with one cloud-based system. Booking, payments, CRM, staff scheduling, marketing, and AI receptionist all share a single data layer — so a client booking flows automatically into the calendar, triggers reminders, updates the CRM, and feeds analytics without any manual steps. No dedicated hardware required; works on any phone, tablet, or computer.',
    faqs: [
      {
        question: 'What is a salon management system?',
        answer:
          'A salon management system is the complete operational setup a salon uses to run its business — combining software, hardware (POS, payment terminals), workflows, and integrations into one coordinated infrastructure. It is broader than software alone.',
      },
      {
        question: 'What is the difference between a salon management system and salon management software?',
        answer:
          'Salon management software is the digital platform (the app you log into). A salon management system includes the software plus the hardware, workflows, and integrations that make it all work together. Daisy provides the complete system — no additional hardware or tools needed.',
      },
      {
        question: 'What should a salon management system include?',
        answer:
          'A complete system should include online booking, POS and payment processing, client CRM, staff scheduling, marketing automation, reporting, and ideally AI tools like an automated receptionist. All components should share data without manual re-entry.',
      },
      {
        question: 'How much does a salon management system cost?',
        answer:
          'Costs range from $50-500/month for the software platform, plus $0-2,000 for hardware if required. Daisy eliminates hardware costs entirely — the complete system runs on your existing devices starting at $50/month.',
      },
      {
        question: 'Can a small salon benefit from a management system?',
        answer:
          'Absolutely. Small salons often benefit most because the owner is handling multiple roles. A unified system automates admin tasks, captures missed calls via AI, and reduces the manual workload that keeps small salon owners working evenings and weekends.',
      },
      {
        question: 'How do I switch to a new salon management system?',
        answer:
          'A well-planned migration takes 2-4 weeks. Key steps: export client data from your current system, import into the new platform, configure services and staff, test thoroughly, then go live. Daisy offers free migration assistance on the Business plan.',
      },
      {
        question: 'Do I need separate hardware for a salon management system?',
        answer:
          'Not with modern cloud-based systems like Daisy. Traditional systems required dedicated POS terminals and servers. Daisy runs on any device with a browser — phone, tablet, laptop — with no special hardware purchases.',
      },
      {
        question: 'What is the best salon management system in 2026?',
        answer:
          'The best system in 2026 combines comprehensive software with AI capabilities and requires no additional hardware. Daisy leads with its all-in-one approach: AI receptionist, cashback customer acquisition, white-label branding, and zero-hardware cloud platform starting at $50/month.',
      },
    ],
    relatedTerms: ['salon-management-software', 'salon-booking-software', 'salon-employee-management-software'],
    metaTitle: 'What is a Salon Management System? | Complete Guide',
    metaDescription:
      'Learn what a salon management system is, how it differs from software alone, and why an all-in-one system with AI tools helps salons run more efficiently.',
    keywords: ['salon management system', 'salon management systems', 'management system for salon', 'beauty salon management system', 'salon system'],
  },
```

- [ ] **Step 3: Add salon-employee-management-software entry**

Insert after the `salon-management-system` entry:

```typescript
  {
    slug: 'salon-employee-management-software',
    term: 'Salon Employee Management Software',
    definition:
      'is specialized functionality within <a href="/en/glossary/salon-management-software">salon management software</a> that handles staff scheduling, commission tracking, performance analytics, team permissions, and workforce coordination for beauty businesses.',
    extendedDescription:
      'Managing salon employees involves unique challenges that generic HR tools cannot address: commission-based pay structures, chair rental arrangements, skill-based appointment routing, rotating schedules, and per-stylist performance metrics. Salon employee management software solves these by integrating staff scheduling directly with the booking calendar, automatically calculating commissions based on service revenue, and providing per-employee analytics. Salons with 5+ staff members typically save 3-5 hours per week on scheduling and payroll tasks alone. For a broader view of how staff management fits into the complete platform, see the <a href="/en/salon-management-software">salon management software guide</a>.',
    keyFeatures: [
      { label: 'Shift Scheduling', daisy: 'AI-optimized rosters', typical: 'Manual spreadsheet' },
      { label: 'Commission Tracking', daisy: 'Automatic per-service', typical: 'Manual calculation' },
      { label: 'Performance Analytics', daisy: 'Per-stylist dashboard', typical: 'Basic totals only' },
      { label: 'Team Permissions', daisy: 'Role-based access', typical: 'All-or-nothing access' },
      { label: 'Skill-Based Routing', daisy: 'Automatic matching', typical: 'Manual assignment' },
      { label: 'Payroll Integration', daisy: 'Export-ready reports', typical: 'Separate system' },
    ],
    howDaisyImplements:
      'Daisy handles the full employee lifecycle: AI-optimized scheduling that accounts for skills and availability, automatic commission calculation per service, individual performance dashboards, role-based access controls, and payroll-ready reports. Staff can view their schedules, track earnings, and manage availability from the mobile app.',
    faqs: [
      {
        question: 'What is salon employee management software?',
        answer:
          'Salon employee management software is a set of tools within a salon platform that handles staff scheduling, commission tracking, performance analytics, and team coordination — designed specifically for the unique needs of beauty businesses.',
      },
      {
        question: 'How does salon staff scheduling software work?',
        answer:
          'It integrates staff availability, skills, and the booking calendar to create optimized schedules. When a client books a balayage, the system only shows stylists qualified for that service. Daisy uses AI to balance workload and minimize scheduling gaps.',
      },
      {
        question: 'Can salon software calculate commissions automatically?',
        answer:
          'Yes. Daisy automatically calculates commissions based on customizable rules — percentage of service revenue, product sales, or flat rates per service. Staff can see their earnings in real-time through the app.',
      },
      {
        question: 'What salon software has built-in staff management features?',
        answer:
          'Daisy, Boulevard, and Mangomint include comprehensive staff management. Fresha and Booksy offer basic scheduling but limited commission tracking and performance analytics. Daisy includes all staff features in every plan.',
      },
      {
        question: 'How do I track salon employee performance?',
        answer:
          'Daisy provides per-stylist dashboards showing revenue generated, average ticket size, rebooking rate, client retention, product sales, and utilization rate. Owners can identify top performers and coaching opportunities at a glance.',
      },
      {
        question: 'Can staff manage their own schedules?',
        answer:
          'With Daisy, staff can view schedules, request time off, swap shifts (with manager approval), and set availability preferences — all from the mobile app. This reduces scheduling admin for salon owners.',
      },
      {
        question: 'Does salon employee software handle chair rental arrangements?',
        answer:
          'Yes. Daisy supports both employee and chair-rental models. For chair renters, you can set fixed rental fees, track their bookings separately, and provide independent schedule management while maintaining overall salon visibility.',
      },
      {
        question: 'How many staff can salon management software handle?',
        answer:
          'Daisy scales from solo practitioners to 100+ staff across multiple locations. All plans include unlimited staff members with no per-seat fees — a key differentiator from platforms that charge per employee.',
      },
    ],
    relatedTerms: ['salon-management-software', 'salon-management-system', 'salon-booking-software'],
    metaTitle: 'What is Salon Employee Management Software? | Staff Scheduling Guide',
    metaDescription:
      'Learn what salon employee management software does, how it automates staff scheduling and commissions, and why AI-powered tools save salon owners hours every week.',
    keywords: ['salon employee management software', 'salon staff management', 'salon scheduling software', 'salon team management', 'salon staff scheduling'],
  },
```

- [ ] **Step 4: Add salon-customer-management entry**

Insert after the `salon-employee-management-software` entry:

```typescript
  {
    slug: 'salon-customer-management',
    term: 'Salon Customer Management',
    definition:
      'is the practice of collecting, organizing, and leveraging client data — visit history, service preferences, spending patterns, and communication records — to deliver personalized experiences, increase retention, and grow lifetime value in a beauty business.',
    extendedDescription:
      'Salon customer management (often called salon CRM) transforms a business from reactive service delivery to proactive client relationship building. Instead of treating every visit as a standalone transaction, customer management tools create a 360-degree profile of each client — their preferred stylist, product sensitivities, color formulas, visit frequency, and spending habits. Research shows that increasing client retention by just 5% can boost profits by 25-95%, making customer management the highest-ROI function in most salons. Platforms like <a href="/en/glossary/salon-management-software">salon management software</a> integrate CRM directly with booking and payments so data flows automatically — no manual entry required. For the full picture, see the <a href="/en/salon-management-software">complete salon management guide</a>.',
    keyFeatures: [
      { label: 'Client Profiles', daisy: 'AI-enriched 360-degree', typical: 'Basic contact card' },
      { label: 'Visit History', daisy: 'Full service + product + notes', typical: 'Appointment dates only' },
      { label: 'Automated Follow-Ups', daisy: 'AI-triggered campaigns', typical: 'Manual reminders' },
      { label: 'Loyalty Program', daisy: 'Cashback rewards', typical: 'Paper punch cards' },
      { label: 'Segmentation', daisy: 'Behavioral + spending', typical: 'None or basic' },
      { label: 'Reactivation', daisy: 'AI identifies lapsed clients', typical: 'Owner manually checks' },
    ],
    howDaisyImplements:
      'Daisy builds rich client profiles automatically from every interaction — bookings, payments, messages, reviews. The AI identifies clients at risk of churning, suggests rebooking reminders, and powers the <a href="/en/glossary/cashback-beauty-booking">cashback loyalty system</a> that keeps clients returning. Segmentation tools let you target campaigns by spending level, visit frequency, preferred services, and more.',
    faqs: [
      {
        question: 'What is salon customer management?',
        answer:
          'Salon customer management is the practice of tracking client data (visits, preferences, spending) and using it to personalize service, increase retention, and grow each client\'s lifetime value. Modern salon CRM tools automate most of this work.',
      },
      {
        question: 'Why is client management important for salons?',
        answer:
          'Retaining an existing client costs 5-7x less than acquiring a new one, and a 5% increase in retention can boost profits by 25-95%. Client management helps you keep more clients, increase their visit frequency, and grow their average spend.',
      },
      {
        question: 'What is salon CRM software?',
        answer:
          'Salon CRM (Customer Relationship Management) software tracks client interactions, preferences, and history to help you build stronger relationships. Daisy includes CRM as part of its all-in-one platform rather than requiring a separate tool.',
      },
      {
        question: 'How do I track client preferences in a salon?',
        answer:
          'Daisy automatically records service history, product purchases, stylist preferences, and appointment notes. Staff can add color formulas, allergy information, and personal notes that appear automatically at the next visit.',
      },
      {
        question: 'Can salon software help win back lost clients?',
        answer:
          'Yes. Daisy\'s AI identifies clients who haven\'t visited within their normal cycle and triggers automated win-back campaigns — personalized messages with incentives to rebook. This recovers 10-20% of at-risk clients.',
      },
      {
        question: 'What is the best way to build a salon client database?',
        answer:
          'Use an integrated salon platform like Daisy that captures client data automatically from every booking, payment, and interaction. This builds your database passively without requiring staff to manually enter information.',
      },
      {
        question: 'How does cashback help with customer retention?',
        answer:
          'Cashback rewards give clients a tangible reason to return — they have credits waiting to be used. Daisy\'s cashback system increases visit frequency by 20-30% compared to salons without loyalty programs.',
      },
      {
        question: 'Can I segment my salon clients for targeted marketing?',
        answer:
          'Yes. Daisy lets you segment clients by spending level, visit frequency, preferred services, location, and custom tags. This powers targeted campaigns — like a VIP offer to your top 20% spenders.',
      },
    ],
    relatedTerms: ['salon-management-software', 'cashback-beauty-booking', 'salon-management-system'],
    metaTitle: 'What is Salon Customer Management? | CRM & Retention Guide',
    metaDescription:
      'Learn what salon customer management is, how CRM tools increase client retention by 25-95%, and why AI-powered platforms like Daisy automate the entire process.',
    keywords: ['salon customer management', 'salon CRM', 'salon client management', 'beauty client management', 'salon customer database'],
  },
```

- [ ] **Step 5: Run TypeScript check**

Run: `npx tsc --noEmit 2>&1 | grep glossaryData | head -10`
Expected: No errors mentioning glossaryData.ts

- [ ] **Step 6: Commit**

```bash
git add src/lib/constants/glossary/glossaryData.ts
git commit -m "feat: add 3 new glossary entries (salon-management-system, salon-employee-management-software, salon-customer-management)"
```

---

## Task 2: Append image prompts to plan file

**Files:**
- Modify: `docs/image-generation-plan-guides-glossary.md` (append after line 41)

- [ ] **Step 1: Update the header count and append prompts**

Change line 3 from `**10 images to generate**` to `**13 images to generate**`.

Append after line 41 (after the `salon-booking-software` entry):

```markdown

## 11. salon-management-system
- Prompt: Professional editorial photography. A bird's-eye view of an entire salon floor plan laid out on a dark walnut table — a tablet, a POS terminal, appointment cards, a cash drawer, staff badges, and connection lines drawn in chalk between them. All the pieces of a system, connected. Warm overhead lighting, dark wood, metallic hardware, chalk-white connection lines. No text, no watermarks, no logos, no words, no letters. Cinematic composition, rule of thirds, shallow depth of field.

## 12. salon-employee-management-software
- Prompt: Professional editorial photography. A row of five salon stations viewed from above, each with a different set of professional tools neatly arranged — scissors, brushes, combs, clips — like individual workstations with personality. Each station lit by its own pendant light. Team individuality within a shared space. Warm amber pendant lights, cool grey countertops, colorful tools. No people. No text, no watermarks, no logos, no words, no letters. Cinematic composition, rule of thirds, shallow depth of field.

## 13. salon-customer-management
- Prompt: Professional editorial photography. A Rolodex-style card holder on a reception desk, but instead of paper cards, each slot holds a small framed portrait-sized mirror reflecting warm salon light. Client relationships, personal connections, curated care. Rose gold card holder, soft pink and warm gold reflections, blurred salon chairs in background. No faces visible in mirrors. No text, no watermarks, no logos, no words, no letters. Cinematic composition, rule of thirds, shallow depth of field.
```

- [ ] **Step 2: Commit**

```bash
git add docs/image-generation-plan-guides-glossary.md
git commit -m "docs: add image prompts for 3 new glossary entries"
```

---

## Task 3: Generate glossary hero images

**Files:**
- Create: `public/images/glossary/salon-management-system.webp`
- Create: `public/images/glossary/salon-employee-management-software.webp`
- Create: `public/images/glossary/salon-customer-management.webp`

- [ ] **Step 1: Generate images via Replicate**

Run each command sequentially (requires `REPLICATE_API_TOKEN` env var):

```bash
node scripts/generate-article-images.mjs --slug=salon-management-system --auto
node scripts/generate-article-images.mjs --slug=salon-employee-management-software --auto
node scripts/generate-article-images.mjs --slug=salon-customer-management --auto
```

- [ ] **Step 2: Verify images exist**

```bash
ls -la public/images/glossary/salon-management-system.webp
ls -la public/images/glossary/salon-employee-management-software.webp
ls -la public/images/glossary/salon-customer-management.webp
```

Expected: 3 WebP files, each roughly 50-200KB.

- [ ] **Step 3: Commit**

```bash
git add public/images/glossary/salon-management-system.webp public/images/glossary/salon-employee-management-software.webp public/images/glossary/salon-customer-management.webp
git commit -m "feat: add hero images for 3 new glossary entries"
```

---

## Task 4: Add internal links in 12 blog articles

**Files:**
- Modify: 12 blog article files in `src/lib/constants/blog/articles/`

For each file below, find the first natural mention of "salon management" or a closely related phrase in the article body HTML, and wrap it in a link. Add one glossary link and one pillar link per article. Use the existing link pattern: `<a href="/en/glossary/salon-management-software">salon management software</a>` and `<a href="/en/salon-management-software">complete salon management guide</a>`.

- [ ] **Step 1: Add links to multi-channel.ts**

Find the first unlinked mention of "salon management platform" (around line 305) and wrap:
```
salon management platform → <a href="/en/glossary/salon-management-software">salon management platform</a>
```

Find a natural place to reference the pillar (around line 497 where a complete solution is mentioned) and add:
```
complete salon management solution → <a href="/en/salon-management-software">complete salon management solution</a>
```

- [ ] **Step 2: Add links to marketing-promotions.ts**

Find the first unlinked mention of "salon management" or "salon software" and add glossary + pillar links following the same pattern.

- [ ] **Step 3: Add links to beauty-business-growth.ts**

Same pattern: one glossary link, one pillar link.

- [ ] **Step 4: Add links to staff-management.ts**

Same pattern. Additionally, link one mention of "employee management" to the new glossary entry:
```
<a href="/en/glossary/salon-employee-management-software">employee management software</a>
```

- [ ] **Step 5: Add links to business-growth.ts**

Same pattern: one glossary link, one pillar link.

- [ ] **Step 6: Add links to daisy-advantage.ts**

Same pattern: one glossary link, one pillar link.

- [ ] **Step 7: Add links to team-management.ts**

Same pattern. Additionally, link one mention of "staff management" to the employee management glossary:
```
<a href="/en/glossary/salon-employee-management-software">staff management software</a>
```

- [ ] **Step 8: Add links to analytics-reports.ts**

Same pattern: one glossary link, one pillar link.

- [ ] **Step 9: Add links to payment-processing.ts**

Same pattern: one glossary link, one pillar link.

- [ ] **Step 10: Add links to ai-intelligence.ts**

Same pattern: one glossary link, one pillar link.

- [ ] **Step 11: Add links to client-retention.ts**

Same pattern. Additionally, link one mention of "client management" to the new glossary entry:
```
<a href="/en/glossary/salon-customer-management">client management</a>
```

- [ ] **Step 12: Add links to booking-management.ts**

Same pattern: one glossary link, one pillar link.

- [ ] **Step 13: Run build check**

Run: `npx next build 2>&1 | tail -5`
Expected: Build succeeds.

- [ ] **Step 14: Commit**

```bash
git add src/lib/constants/blog/articles/multi-channel.ts src/lib/constants/blog/articles/marketing-promotions.ts src/lib/constants/blog/articles/beauty-business-growth.ts src/lib/constants/blog/articles/staff-management.ts src/lib/constants/blog/articles/business-growth.ts src/lib/constants/blog/articles/daisy-advantage.ts src/lib/constants/blog/articles/team-management.ts src/lib/constants/blog/articles/analytics-reports.ts src/lib/constants/blog/articles/payment-processing.ts src/lib/constants/blog/articles/ai-intelligence.ts src/lib/constants/blog/articles/client-retention.ts src/lib/constants/blog/articles/booking-management.ts
git commit -m "feat: add glossary and pillar internal links to 12 blog articles"
```

---

## Task 5: Add cross-links in 5 existing glossary entries

**Files:**
- Modify: `src/lib/constants/glossary/glossaryData.ts`

Update the `extendedDescription` of each existing glossary entry to include one contextual link to the pillar page and one to a relevant blog article. Also update `relatedTerms` to include the 3 new entries where relevant.

- [ ] **Step 1: Update salon-management-software entry (lines 21-22)**

In `extendedDescription`, after the market size sentence, append: `For a comprehensive evaluation framework, read the <a href="/en/salon-management-software">complete salon management software guide</a>.`

Update `relatedTerms` (line 75) to add the new entries:
```typescript
relatedTerms: ['salon-booking-software', 'ai-receptionist-for-salons', 'white-label-salon-software', 'salon-management-system', 'salon-employee-management-software', 'salon-customer-management'],
```

- [ ] **Step 2: Update ai-receptionist-for-salons entry (lines 86-87)**

In `extendedDescription`, append: `Learn how AI receptionist capabilities fit into a <a href="/en/salon-management-software">complete salon management platform</a>.`

- [ ] **Step 3: Update cashback-beauty-booking entry (lines 151-152)**

In `extendedDescription`, append: `See how cashback integrates with <a href="/en/glossary/salon-customer-management">salon customer management</a> to maximize client lifetime value.`

- [ ] **Step 4: Update white-label-salon-software entry (lines 216-217)**

In `extendedDescription`, append: `Explore how white-label capabilities work alongside other features in a <a href="/en/salon-management-software">modern salon management system</a>.`

- [ ] **Step 5: Update salon-booking-software entry (lines 281-282)**

In `extendedDescription`, append: `Booking software is a core component of any <a href="/en/glossary/salon-management-system">salon management system</a>.`

- [ ] **Step 6: Commit**

```bash
git add src/lib/constants/glossary/glossaryData.ts
git commit -m "feat: add cross-links in existing glossary entries to pillar and new entries"
```

---

## Task 6: Add glossary links in pillar page

**Files:**
- Modify: `src/lib/constants/pillars/salon-management-software.ts`

- [ ] **Step 1: Read the pillar page content**

Read the file to find first mentions of key terms in the `sections` content.

- [ ] **Step 2: Link first mention of "AI receptionist"**

Find the first unlinked mention of "AI receptionist" in the sections content and wrap:
```
<a href="/en/glossary/ai-receptionist-for-salons">AI receptionist</a>
```

- [ ] **Step 3: Link first mention of "online booking"**

Find the first unlinked mention of "online booking" and wrap:
```
<a href="/en/glossary/salon-booking-software">online booking software</a>
```

- [ ] **Step 4: Link first mention of "white-label"**

Find the first unlinked mention of "white-label" and wrap:
```
<a href="/en/glossary/white-label-salon-software">white-label branding</a>
```

- [ ] **Step 5: Link first mention of "cashback"**

Find the first unlinked mention of "cashback" and wrap:
```
<a href="/en/glossary/cashback-beauty-booking">cashback rewards</a>
```

- [ ] **Step 6: Link first mention of "staff management" or "employee management"**

Find the first unlinked mention and wrap:
```
<a href="/en/glossary/salon-employee-management-software">staff management</a>
```

- [ ] **Step 7: Link first mention of "client management" or "customer management"**

Find the first unlinked mention and wrap:
```
<a href="/en/glossary/salon-customer-management">client management</a>
```

- [ ] **Step 8: Commit**

```bash
git add src/lib/constants/pillars/salon-management-software.ts
git commit -m "feat: add glossary links on first mention of key terms in pillar page"
```

---

## Task 7: Add links in 5 guides

**Files:**
- Modify: `src/lib/constants/guides/guideData.ts`

For each of the 5 salon-related guides, add one contextual link to the glossary and one to the pillar page within the `problemExplained`, `howDaisyHelps`, or step `text` fields.

- [ ] **Step 1: Update reduce-salon-no-shows**

In `howDaisyHelps` or `problemExplained`, add:
```
<a href="/en/glossary/salon-management-software">salon management software</a>
```
And in a step about the platform:
```
<a href="/en/salon-management-software">complete salon management guide</a>
```

- [ ] **Step 2: Update get-more-salon-clients**

Add glossary link to `salon-management-software` and a link to `cashback-beauty-booking` glossary entry where cashback is discussed. Add pillar link.

- [ ] **Step 3: Update choose-best-salon-software**

Add glossary link and pillar link in appropriate fields.

- [ ] **Step 4: Update switch-from-fresha**

Add glossary link to `salon-management-software` and `salon-booking-software`. Add pillar link.

- [ ] **Step 5: Update set-up-online-booking-salon**

Add glossary link to `salon-booking-software`. Add pillar link.

- [ ] **Step 6: Commit**

```bash
git add src/lib/constants/guides/guideData.ts
git commit -m "feat: add glossary and pillar links in 5 salon guides"
```

---

## Task 8: Final build verification

- [ ] **Step 1: Run production build**

```bash
npx next build 2>&1 | tail -10
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Verify new glossary pages render**

```bash
npm run dev &
sleep 5
curl -s http://localhost:3000/en/glossary/salon-management-system | grep -o '<h1[^>]*>.*</h1>' | head -1
curl -s http://localhost:3000/en/glossary/salon-employee-management-software | grep -o '<h1[^>]*>.*</h1>' | head -1
curl -s http://localhost:3000/en/glossary/salon-customer-management | grep -o '<h1[^>]*>.*</h1>' | head -1
kill %1
```

Expected: Each curl returns an h1 containing the glossary term.

- [ ] **Step 3: Verify no broken internal links**

```bash
grep -r 'href="/en/glossary/salon-management-system"' src/ | wc -l
grep -r 'href="/en/glossary/salon-employee-management-software"' src/ | wc -l
grep -r 'href="/en/glossary/salon-customer-management"' src/ | wc -l
grep -r 'href="/en/glossary/salon-management-software"' src/ | wc -l
grep -r 'href="/en/salon-management-software"' src/ | wc -l
```

Expected: Each count > 0 (new entries are linked to and link out).
