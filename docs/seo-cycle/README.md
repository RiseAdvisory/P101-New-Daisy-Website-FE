# SEO Optimization Cycle

A recurring 2-3 week feedback loop to improve search impressions, CTR, and rankings.

## Folder Structure

```
docs/seo-cycle/
├── README.md                          ← This file (process overview)
├── PLAYBOOK.md                        ← Step-by-step execution guide
├── CHANGELOG.md                       ← Log of every change made and its outcome
├── tracking/
│   ├── page-tracker.csv               ← Per-page performance tracking over time
│   ├── change-log.csv                 ← Title/description changes with dates
│   └── keyword-opportunities.csv      ← Keyword gaps and targets
├── reports/
│   ├── YYYY-MM-DD-cycle-report.md     ← Bi-weekly cycle report (template below)
│   └── (Search Console CSV exports)
└── templates/
    ├── cycle-report-template.md       ← Copy this for each new cycle
    └── title-test-template.md         ← Copy this when A/B testing titles
```

## Cycle Schedule

| Week | Activity | Time Required |
|------|----------|---------------|
| Week 1 (Mon) | Pull data, diagnose, plan changes | 1-2 hours |
| Week 1 (Tue-Fri) | Implement changes (1-2 pages max) | 30 min - 1 hour |
| Week 2-3 | Wait for Google to re-crawl and re-rank | No action |
| Week 3 (Mon) | Measure impact, start next cycle | 1-2 hours |

## Quick Start

1. Read `PLAYBOOK.md` for the full process
2. Export data from Google Search Console
3. Copy `templates/cycle-report-template.md` to `reports/YYYY-MM-DD-cycle-report.md`
4. Follow the playbook steps
5. Log changes in `CHANGELOG.md` and `tracking/change-log.csv`
