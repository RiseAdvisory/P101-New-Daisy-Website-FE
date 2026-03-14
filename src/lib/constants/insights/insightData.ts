export interface StatCategory {
  category: string;
  stats: {
    value: string;
    description: string;
    source: string;
  }[];
}

export const industryStats: StatCategory[] = [
  {
    category: 'Market Size & Growth',
    stats: [
      {
        value: '$712M',
        description: 'Projected global salon software market size by 2028',
        source: 'Grand View Research',
      },
      {
        value: '12.5%',
        description: 'Compound annual growth rate (CAGR) of beauty tech industry',
        source: 'Allied Market Research',
      },
      {
        value: '$532B',
        description: 'Global beauty and personal care market value in 2025',
        source: 'Statista',
      },
      {
        value: '87%',
        description: 'Of salon owners say technology is essential for business growth',
        source: 'Salon Today survey',
      },
    ],
  },
  {
    category: 'Booking & Scheduling',
    stats: [
      {
        value: '67%',
        description: 'Of beauty customers prefer booking online vs. calling',
        source: 'GetApp survey',
      },
      {
        value: '40%',
        description: 'Increase in appointments when salons offer 24/7 online booking',
        source: 'Salon booking platform data',
      },
      {
        value: '46%',
        description: 'Of all Google searches have local intent (relevant for salon discovery)',
        source: 'Google',
      },
      {
        value: '35%',
        description: 'Of salon calls go unanswered during peak hours and after-hours',
        source: 'Industry research estimates',
      },
    ],
  },
  {
    category: 'No-Shows & Cancellations',
    stats: [
      {
        value: '20-30%',
        description: 'Average no-show rate for salons without prevention measures',
        source: 'Industry average estimates',
      },
      {
        value: '30-40%',
        description: 'Reduction in no-shows with automated SMS/email reminders',
        source: 'Salon software platform data',
      },
      {
        value: '$67,000',
        description: 'Estimated annual revenue lost per salon due to no-shows',
        source: 'Industry calculations',
      },
      {
        value: '95%',
        description: 'Open rate for SMS appointment reminders (vs. 20% for email)',
        source: 'SMS marketing benchmarks',
      },
    ],
  },
  {
    category: 'Customer Acquisition & Retention',
    stats: [
      {
        value: '$25-50',
        description: 'Average cost to acquire a new salon client through paid advertising',
        source: 'Digital marketing benchmarks',
      },
      {
        value: '5x',
        description: 'It costs 5x more to acquire a new customer than retain an existing one',
        source: 'Harvard Business Review',
      },
      {
        value: '20-30%',
        description: 'Increase in customer lifetime value with cashback loyalty programs',
        source: 'Loyalty program research',
      },
      {
        value: '3x',
        description: 'More new bookings for salons with 50+ reviews and 4.5+ star rating',
        source: 'BrightLocal consumer survey',
      },
    ],
  },
  {
    category: 'AI & Automation in Beauty',
    stats: [
      {
        value: '73%',
        description: 'Of service businesses plan to increase AI investment by 2027',
        source: 'McKinsey Global Survey',
      },
      {
        value: '10+ hours',
        description: 'Per week saved by salon owners using AI scheduling and automation',
        source: 'Salon software user surveys',
      },
      {
        value: '24/7',
        description: 'AI receptionists operate round-the-clock, capturing after-hours revenue',
        source: 'AI receptionist platform data',
      },
      {
        value: '70-80%',
        description: 'Of routine salon calls can be handled by AI without human intervention',
        source: 'AI customer service benchmarks',
      },
    ],
  },
  {
    category: 'GCC Beauty Market',
    stats: [
      {
        value: '$28B',
        description: 'GCC beauty and personal care market value',
        source: 'Euromonitor International',
      },
      {
        value: '15%+',
        description: 'Annual growth rate of beauty services in UAE and Saudi Arabia',
        source: 'Regional market reports',
      },
      {
        value: '70%+',
        description: 'Of GCC beauty consumers use mobile apps for service bookings',
        source: 'Regional consumer surveys',
      },
      {
        value: '2',
        description: 'Languages (Arabic + English) required for full GCC market coverage',
        source: 'GCC demographics',
      },
    ],
  },
  {
    category: 'Payment & Revenue',
    stats: [
      {
        value: '2-3%',
        description: 'Typical transaction fee charged by payment processors (Daisy charges 0%)',
        source: 'Payment industry standard',
      },
      {
        value: '20-30%',
        description: 'Marketplace commission charged by some "free" booking platforms',
        source: 'Platform pricing analysis',
      },
      {
        value: '15-20%',
        description: 'Revenue increase reported by salons using integrated POS systems',
        source: 'POS adoption studies',
      },
      {
        value: '68%',
        description: 'Of customers prefer cashless payment options at salons',
        source: 'Consumer payment surveys',
      },
    ],
  },
];

export const insightsMetaTitle = 'Salon Industry Statistics 2026 | Beauty Business Data & Trends';
export const insightsMetaDescription =
  'Comprehensive salon industry statistics for 2026. Market size, booking trends, no-show rates, AI adoption, GCC beauty market data, and customer acquisition benchmarks.';
