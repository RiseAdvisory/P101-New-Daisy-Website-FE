import { I18nContent } from '@/lib/constants/i18n';

/**
 * Blog post data structure matching the Strapi response shape
 * so components consuming this data don't need structural changes.
 */
export interface LocalBlogPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    aboutPosts?: string;
    metaTitle?: string;
    metaDescription?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    sortId?: number;
    tags?: {
      wellness?: string;
      hair?: string;
      digital?: string;
      [key: string]: string | undefined;
    };
    user?: {
      data?: {
        id: number;
        attributes?: {
          name: string;
          jobTitle?: string;
          date?: string;
          time?: string;
          picture?: {
            data?: {
              attributes?: {
                url: string;
              };
            };
          };
        };
      };
    };
    iconOwner?: {
      data?: {
        attributes?: {
          url: string;
        };
      }[];
    };
    category?: {
      data?: {
        id: number;
        attributes?: {
          name: string;
        };
      };
    };
    picture?: {
      data?: {
        attributes?: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    image?: {
      data?: {
        attributes?: {
          url: string;
          alternativeText?: string;
          formats?: {
            large?: { url: string };
          };
        };
      }[];
    };
    ogImage?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
  };
}

const defaultAuthor = {
  data: {
    id: 1,
    attributes: {
      name: 'The Daisy Team',
      jobTitle: 'Content Team',
      date: '15 January 2026',
      time: '5 min.',
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

/**
 * Customer blog posts
 */
export const customerBlogPosts: LocalBlogPost[] = [
  {
    id: 1,
    attributes: {
      title: 'Top 5 Wellness Trends to Watch in 2026',
      slug: 'top-5-wellness-trends-2026',
      description:
        'Discover the biggest wellness trends shaping the beauty and self-care industry this year, from AI-powered personalization to holistic health experiences.',
      aboutPosts:
        '<h2>The Future of Wellness</h2><p>The wellness industry is evolving rapidly, driven by technology and a growing demand for personalized experiences. Here are the top 5 trends to watch in 2026.</p><h3>1. AI-Powered Personalization</h3><p>Artificial intelligence is transforming how we discover and book wellness services. Platforms like Daisy use AI to recommend services based on your preferences, history, and goals.</p><h3>2. Holistic Health Experiences</h3><p>Consumers are increasingly seeking integrated wellness experiences that address mind, body, and spirit in a single visit.</p><h3>3. Cashback and Loyalty Programs</h3><p>Smart consumers are choosing platforms that reward their loyalty. Cashback programs make premium services more accessible.</p><h3>4. Sustainable Beauty</h3><p>Eco-conscious beauty practices are becoming the norm, with salons adopting sustainable products and reducing waste.</p><h3>5. On-Demand Booking</h3><p>24/7 online booking with AI receptionists is replacing traditional phone-based scheduling.</p>',
      metaTitle: 'Top 5 Wellness Trends 2026 | The Daisy Blog',
      metaDescription:
        'Discover the biggest wellness trends shaping 2026. From AI personalization to holistic health, learn what is transforming the beauty industry.',
      createdAt: '2026-01-10T08:00:00.000Z',
      updatedAt: '2026-01-15T10:00:00.000Z',
      publishedAt: '2026-01-15T10:00:00.000Z',
      locale: 'en',
      sortId: 3,
      tags: { wellness: 'Wellness', hair: 'Trends' },
      user: defaultAuthor,
      iconOwner: defaultIconOwner,
      category: { data: { id: 1, attributes: { name: 'Wellness' } } },
      picture: {
        data: {
          attributes: {
            url: '/images/blog/wellness-trends.webp',
            alternativeText: 'Wellness trends 2026',
          },
        },
      },
      image: {
        data: [
          {
            attributes: {
              url: '/images/blog/wellness-trends.webp',
              formats: { large: { url: '/images/blog/wellness-trends.webp' } },
            },
          },
        ],
      },
    },
  },
  {
    id: 2,
    attributes: {
      title: 'How to Choose the Right Salon for Your Needs',
      slug: 'how-to-choose-right-salon',
      description:
        'Finding the perfect salon can be overwhelming. Here is a guide to help you make the best choice for your beauty and wellness needs.',
      aboutPosts:
        '<h2>Finding Your Perfect Salon</h2><p>With so many options available, choosing the right salon requires some research. Here is what to consider.</p><h3>Check Reviews and Ratings</h3><p>Online reviews give you real insights into the quality of service. Look for consistent positive feedback and detailed reviews.</p><h3>Consider Location and Convenience</h3><p>A salon that is easy to get to will make regular appointments much more manageable.</p><h3>Look at Services Offered</h3><p>Make sure the salon offers all the services you need, from basic cuts to specialized treatments.</p><h3>Use a Booking Platform</h3><p>Platforms like Daisy make it easy to compare salons, read reviews, and book appointments all in one place.</p>',
      metaTitle: 'How to Choose the Right Salon | The Daisy Blog',
      metaDescription:
        'Learn how to find the perfect salon for your beauty needs. Tips on checking reviews, comparing services, and using booking platforms.',
      createdAt: '2026-01-05T08:00:00.000Z',
      updatedAt: '2026-01-08T10:00:00.000Z',
      publishedAt: '2026-01-08T10:00:00.000Z',
      locale: 'en',
      sortId: 2,
      tags: { wellness: 'Beauty', hair: 'Tips' },
      user: defaultAuthor,
      iconOwner: defaultIconOwner,
      category: { data: { id: 2, attributes: { name: 'Beauty Tips' } } },
      picture: {
        data: {
          attributes: {
            url: '/images/blog/choose-salon.webp',
            alternativeText: 'How to choose a salon',
          },
        },
      },
      image: {
        data: [
          {
            attributes: {
              url: '/images/blog/choose-salon.webp',
              formats: { large: { url: '/images/blog/choose-salon.webp' } },
            },
          },
        ],
      },
    },
  },
  {
    id: 3,
    attributes: {
      title: 'The Benefits of Cashback on Beauty Services',
      slug: 'benefits-cashback-beauty-services',
      description:
        'Learn how cashback programs are changing the way customers save on beauty and wellness services.',
      aboutPosts:
        '<h2>Save While You Glow</h2><p>Cashback programs are revolutionizing the beauty industry, making premium services more accessible than ever.</p><h3>How Cashback Works</h3><p>When you book services through Daisy, you earn a percentage back on every transaction. This cashback goes directly into your wallet and can be used for future bookings.</p><h3>Maximizing Your Savings</h3><p>Regular customers can save significantly over time. Book consistently, refer friends, and take advantage of promotional offers for even more cashback.</p><h3>Why Choose Cashback Over Discounts</h3><p>Unlike one-time discounts, cashback accumulates over time, providing ongoing value and encouraging you to explore new services.</p>',
      metaTitle: 'Benefits of Cashback on Beauty Services | The Daisy Blog',
      metaDescription:
        'Discover how cashback rewards on beauty bookings help you save money while enjoying premium salon and wellness services.',
      createdAt: '2025-12-20T08:00:00.000Z',
      updatedAt: '2025-12-22T10:00:00.000Z',
      publishedAt: '2025-12-22T10:00:00.000Z',
      locale: 'en',
      sortId: 1,
      tags: { wellness: 'Savings', hair: 'Cashback' },
      user: defaultAuthor,
      iconOwner: defaultIconOwner,
      category: { data: { id: 1, attributes: { name: 'Wellness' } } },
      picture: {
        data: {
          attributes: {
            url: '/images/blog/cashback-beauty.webp',
            alternativeText: 'Cashback beauty services',
          },
        },
      },
      image: {
        data: [
          {
            attributes: {
              url: '/images/blog/cashback-beauty.webp',
              formats: { large: { url: '/images/blog/cashback-beauty.webp' } },
            },
          },
        ],
      },
    },
  },
];

/**
 * Business blog posts
 */
export const businessBlogPosts: LocalBlogPost[] = [
  {
    id: 101,
    attributes: {
      title: 'How AI Is Transforming Salon Management in 2026',
      slug: 'ai-transforming-salon-management-2026',
      description:
        'Discover how artificial intelligence is helping salon owners streamline operations, attract more clients, and grow revenue.',
      aboutPosts:
        '<h2>AI-Powered Salon Management</h2><p>Artificial intelligence is no longer a futuristic concept for salon businesses. Today, AI tools are helping salon owners manage their operations more efficiently than ever.</p><h3>24/7 AI Receptionist</h3><p>Never miss a booking again. AI receptionists handle calls, answer questions, and schedule appointments around the clock.</p><h3>Smart Scheduling</h3><p>AI optimizes your appointment calendar, reducing gaps and maximizing your team\'s productivity.</p><h3>Customer Insights</h3><p>AI analytics reveal patterns in customer behavior, helping you make data-driven decisions about services, pricing, and promotions.</p>',
      metaTitle: 'AI Transforming Salon Management 2026 | The Daisy Blog',
      metaDescription:
        'Learn how AI is revolutionizing salon management with smart scheduling, 24/7 receptionists, and customer insights.',
      createdAt: '2026-01-12T08:00:00.000Z',
      updatedAt: '2026-01-14T10:00:00.000Z',
      publishedAt: '2026-01-14T10:00:00.000Z',
      locale: 'en',
      sortId: 3,
      tags: { wellness: 'Business', hair: 'AI' },
      user: defaultAuthor,
      iconOwner: defaultIconOwner,
      category: { data: { id: 3, attributes: { name: 'Business Growth' } } },
      picture: {
        data: {
          attributes: {
            url: '/images/blog/ai-salon-management.webp',
            alternativeText: 'AI salon management',
          },
        },
      },
      image: {
        data: [
          {
            attributes: {
              url: '/images/blog/ai-salon-management.webp',
              formats: {
                large: { url: '/images/blog/ai-salon-management.webp' },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 102,
    attributes: {
      title: '5 Strategies to Grow Your Salon Business',
      slug: '5-strategies-grow-salon-business',
      description:
        'Proven strategies to help salon owners increase revenue, attract new clients, and build lasting customer loyalty.',
      aboutPosts:
        '<h2>Growing Your Salon</h2><p>Growth doesn\'t happen by accident. Here are five proven strategies every salon owner should implement.</p><h3>1. Build an Online Presence</h3><p>Make it easy for customers to find and book with you online. A strong digital presence is essential.</p><h3>2. Implement a Loyalty Program</h3><p>Cashback and rewards programs keep customers coming back and increase lifetime value.</p><h3>3. Optimize Your Schedule</h3><p>Use smart scheduling tools to reduce no-shows and maximize chair utilization.</p><h3>4. Invest in Your Team</h3><p>Happy, skilled employees deliver better service and drive growth.</p><h3>5. Use Data to Make Decisions</h3><p>Track key metrics and use analytics to identify opportunities for improvement.</p>',
      metaTitle: '5 Strategies to Grow Your Salon Business | The Daisy Blog',
      metaDescription:
        'Discover 5 proven strategies to grow your salon business, from loyalty programs to smart scheduling and data-driven decisions.',
      createdAt: '2026-01-02T08:00:00.000Z',
      updatedAt: '2026-01-05T10:00:00.000Z',
      publishedAt: '2026-01-05T10:00:00.000Z',
      locale: 'en',
      sortId: 2,
      tags: { wellness: 'Growth', hair: 'Strategy' },
      user: defaultAuthor,
      iconOwner: defaultIconOwner,
      category: { data: { id: 3, attributes: { name: 'Business Growth' } } },
      picture: {
        data: {
          attributes: {
            url: '/images/blog/grow-salon.webp',
            alternativeText: 'Grow your salon business',
          },
        },
      },
      image: {
        data: [
          {
            attributes: {
              url: '/images/blog/grow-salon.webp',
              formats: { large: { url: '/images/blog/grow-salon.webp' } },
            },
          },
        ],
      },
    },
  },
  {
    id: 103,
    attributes: {
      title: 'Reducing No-Shows with Smart Booking Technology',
      slug: 'reducing-no-shows-smart-booking',
      description:
        'No-shows cost salons billions annually. Learn how technology can dramatically reduce missed appointments.',
      aboutPosts:
        '<h2>The No-Show Problem</h2><p>No-shows and last-minute cancellations cost the beauty industry an estimated $67 billion annually. Here is how technology can help.</p><h3>Automated Reminders</h3><p>SMS and push notification reminders reduce no-shows by up to 40%.</p><h3>Prepayment and Deposits</h3><p>Requiring a deposit at booking time significantly increases commitment.</p><h3>Waitlist Management</h3><p>Automated waitlists fill cancelled slots quickly, minimizing lost revenue.</p>',
      metaTitle: 'Reducing No-Shows with Smart Booking | The Daisy Blog',
      metaDescription:
        'Learn how smart booking technology with automated reminders and deposits can reduce salon no-shows by up to 40%.',
      createdAt: '2025-12-18T08:00:00.000Z',
      updatedAt: '2025-12-20T10:00:00.000Z',
      publishedAt: '2025-12-20T10:00:00.000Z',
      locale: 'en',
      sortId: 1,
      tags: { wellness: 'Operations', hair: 'Technology' },
      user: defaultAuthor,
      iconOwner: defaultIconOwner,
      category: { data: { id: 3, attributes: { name: 'Business Growth' } } },
      picture: {
        data: {
          attributes: {
            url: '/images/blog/reduce-no-shows.webp',
            alternativeText: 'Reduce no-shows technology',
          },
        },
      },
      image: {
        data: [
          {
            attributes: {
              url: '/images/blog/reduce-no-shows.webp',
              formats: {
                large: { url: '/images/blog/reduce-no-shows.webp' },
              },
            },
          },
        ],
      },
    },
  },
];

/**
 * Professional blog posts
 */
export const professionalBlogPosts: LocalBlogPost[] = [
  {
    id: 201,
    attributes: {
      title: 'Building Your Personal Brand as a Beauty Professional',
      slug: 'building-personal-brand-beauty-professional',
      description:
        'Tips and strategies for beauty professionals to build a strong personal brand and attract more clients.',
      aboutPosts:
        '<h2>Your Brand Matters</h2><p>In a competitive industry, your personal brand sets you apart. Here is how to build one that attracts clients and opportunities.</p><h3>Define Your Niche</h3><p>Specializing in specific services or techniques makes you the go-to expert in that area.</p><h3>Build an Online Portfolio</h3><p>Showcase your best work on social media and professional platforms.</p><h3>Collect and Share Reviews</h3><p>Client testimonials are the most powerful marketing tool for professionals.</p><h3>Network Strategically</h3><p>Connect with other professionals and businesses to expand your reach and opportunities.</p>',
      metaTitle:
        'Building Your Personal Brand as a Beauty Pro | The Daisy Blog',
      metaDescription:
        'Learn how beauty professionals can build a strong personal brand, attract more clients, and advance their careers.',
      createdAt: '2026-01-08T08:00:00.000Z',
      updatedAt: '2026-01-10T10:00:00.000Z',
      publishedAt: '2026-01-10T10:00:00.000Z',
      locale: 'en',
      sortId: 3,
      tags: { wellness: 'Career', hair: 'Branding' },
      user: defaultAuthor,
      iconOwner: defaultIconOwner,
      category: {
        data: { id: 4, attributes: { name: 'Professional Growth' } },
      },
      picture: {
        data: {
          attributes: {
            url: '/images/blog/personal-brand.webp',
            alternativeText: 'Building personal brand',
          },
        },
      },
      image: {
        data: [
          {
            attributes: {
              url: '/images/blog/personal-brand.webp',
              formats: { large: { url: '/images/blog/personal-brand.webp' } },
            },
          },
        ],
      },
    },
  },
  {
    id: 202,
    attributes: {
      title: 'Flexible Scheduling: The Key to Work-Life Balance',
      slug: 'flexible-scheduling-work-life-balance',
      description:
        'How modern scheduling tools help beauty professionals achieve better work-life balance while maximizing earnings.',
      aboutPosts:
        '<h2>Work Smarter, Not Harder</h2><p>Flexible scheduling is transforming how beauty professionals manage their careers. Here is how to make it work for you.</p><h3>Set Your Own Hours</h3><p>Platforms like Daisy let you control when you are available, giving you the freedom to design your ideal schedule.</p><h3>Maximize Peak Hours</h3><p>Smart scheduling helps you identify and capitalize on high-demand time slots.</p><h3>Reduce Downtime</h3><p>Fill gaps in your schedule with walk-in availability or shorter services.</p>',
      metaTitle:
        'Flexible Scheduling for Beauty Professionals | The Daisy Blog',
      metaDescription:
        'Discover how flexible scheduling tools help beauty professionals achieve work-life balance while maximizing their earnings.',
      createdAt: '2025-12-28T08:00:00.000Z',
      updatedAt: '2026-01-02T10:00:00.000Z',
      publishedAt: '2026-01-02T10:00:00.000Z',
      locale: 'en',
      sortId: 2,
      tags: { wellness: 'Scheduling', hair: 'Balance' },
      user: defaultAuthor,
      iconOwner: defaultIconOwner,
      category: {
        data: { id: 4, attributes: { name: 'Professional Growth' } },
      },
      picture: {
        data: {
          attributes: {
            url: '/images/blog/flexible-scheduling.webp',
            alternativeText: 'Flexible scheduling',
          },
        },
      },
      image: {
        data: [
          {
            attributes: {
              url: '/images/blog/flexible-scheduling.webp',
              formats: {
                large: { url: '/images/blog/flexible-scheduling.webp' },
              },
            },
          },
        ],
      },
    },
  },
  {
    id: 203,
    attributes: {
      title: 'Growing Your Client Base as an Independent Professional',
      slug: 'growing-client-base-independent-professional',
      description:
        'Practical tips for independent beauty professionals to attract and retain more clients using modern tools.',
      aboutPosts:
        '<h2>Attract More Clients</h2><p>As an independent professional, building and maintaining a strong client base is essential for success.</p><h3>Leverage Platform Marketplaces</h3><p>Join platforms like Daisy to get discovered by new clients actively looking for your services.</p><h3>Encourage Referrals</h3><p>Word-of-mouth remains the most effective growth channel. Make it easy for satisfied clients to refer others.</p><h3>Deliver Exceptional Service</h3><p>Quality work speaks for itself. Focus on exceeding expectations with every appointment.</p>',
      metaTitle: 'Growing Your Client Base | The Daisy Blog',
      metaDescription:
        'Practical tips for independent beauty professionals to attract new clients and grow their business using modern platforms.',
      createdAt: '2025-12-15T08:00:00.000Z',
      updatedAt: '2025-12-18T10:00:00.000Z',
      publishedAt: '2025-12-18T10:00:00.000Z',
      locale: 'en',
      sortId: 1,
      tags: { wellness: 'Growth', hair: 'Clients' },
      user: defaultAuthor,
      iconOwner: defaultIconOwner,
      category: {
        data: { id: 4, attributes: { name: 'Professional Growth' } },
      },
      picture: {
        data: {
          attributes: {
            url: '/images/blog/grow-client-base.webp',
            alternativeText: 'Growing client base',
          },
        },
      },
      image: {
        data: [
          {
            attributes: {
              url: '/images/blog/grow-client-base.webp',
              formats: {
                large: { url: '/images/blog/grow-client-base.webp' },
              },
            },
          },
        ],
      },
    },
  },
];

/**
 * All blog posts indexed by user type
 */
export const blogPostsByUserType: Record<string, LocalBlogPost[]> = {
  customer: customerBlogPosts,
  business: businessBlogPosts,
  professional: professionalBlogPosts,
};

/**
 * Blog hero data (formerly from hero-resources-blogposts endpoint)
 */
export const blogHeroData: I18nContent<{
  title: string;
  subtitle: string;
  description?: string;
  breadcrumbs?: string;
}> = {
  en: {
    title: 'Blog Posts',
    subtitle: 'Insights, tips, and stories from the world of beauty and wellness',
    description: 'Stay up to date with the latest trends, expert advice, and platform updates.',
    breadcrumbs: 'Resources > Blog Posts',
  },
  ar: {
    title: 'مقالات المدونة',
    subtitle: 'رؤى ونصائح وقصص من عالم الجمال والعافية',
    description: 'ابقَ على اطلاع بأحدث الاتجاهات ونصائح الخبراء وتحديثات المنصة.',
    breadcrumbs: 'الموارد > مقالات المدونة',
  },
};

/**
 * CTA data (formerly from legal-downloads endpoint)
 */
export const blogCTAData: I18nContent<{
  textCreate: string;
  textDownload: string;
  titleSimilar: string;
}> = {
  en: {
    textCreate: 'Create Your Own Perfect Wellness Ritual With The Daisy Packages',
    textDownload: 'Download now!',
    titleSimilar: 'Other Topics That May Interest You',
  },
  ar: {
    textCreate: 'أنشئ طقوس العافية المثالية مع باقات ديزي',
    textDownload: 'حمّل الآن!',
    titleSimilar: 'مواضيع أخرى قد تهمك',
  },
};
