export interface AuthorBio {
  name: string;
  jobTitle: string;
  bio: string;
  image: string;
}

export const authorBios: Record<string, AuthorBio> = {
  'Dr. Elara Voss': {
    name: 'Dr. Elara Voss',
    jobTitle: 'Beauty Business Strategist & Growth Architect',
    bio: 'Dr. Elara Voss is a beauty business strategist based in Riyadh, specialising in financial architecture, pricing strategy, and scalable growth for salons and clinics across the GCC and Europe. She holds an MBA from INSEAD and has helped dozens of beauty businesses transform from busy-but-unprofitable to financially sound.',
    image: '/images/blog/author-elara-voss.webp',
  },
  'Julian Moreau': {
    name: 'Julian Moreau',
    jobTitle: 'Beauty Industry Growth Strategist & Digital Marketing Specialist',
    bio: 'Julian Moreau is a Dubai-based beauty industry growth consultant specialising in social media, SEO, loyalty programs, and multi-channel client acquisition. He has helped salons across the GCC fill chairs and build lasting client relationships through practical, results-driven marketing strategies.',
    image: '/images/blog/author-julian-moreau.webp',
  },
  'Ethan Cole': {
    name: 'Ethan Cole',
    jobTitle: 'Behavioral Data Analyst & Digital Conversion Strategist',
    bio: 'Ethan Cole is a New York-based behavioral analyst who studies why beauty customers hesitate, click, and convert. With a background in applied mathematics and data science, he helps booking platforms and beauty marketplaces reduce decision friction and turn interest into action.',
    image: '/images/blog/author-ethan-cole.webp',
  },
  'Sofia Alvarez': {
    name: 'Sofia Alvarez',
    jobTitle: 'Salon Operations Consultant & Beauty Technology Strategist',
    bio: 'Sofia Alvarez is a Barcelona-based operations consultant who specialises in turning chaotic salon operations into calm, efficient systems. From staff scheduling and software selection to payment infrastructure and process design, she helps beauty businesses run properly so owners can stop firefighting and start managing.',
    image: '/images/blog/author-sofia-alvarez.webp',
  },
  'Amara Nasser': {
    name: 'Amara Nasser',
    jobTitle: 'Independent Beauty Professional & Freelance Career Mentor',
    bio: 'Amara Nasser is a London-based freelance stylist and career mentor who helps beauty professionals build sustainable independent practices. Having navigated the leap from salon employment to a thriving freelance career herself, she shares the practical lessons — pricing, taxes, client acquisition, and everything in between — that no one taught her.',
    image: '/images/blog/author-amara-nasser.webp',
  },
  'The Daisy Team': {
    name: 'The Daisy Team',
    jobTitle: 'Content Team',
    bio: 'The Daisy Team covers platform updates, product comparisons, and industry insights to help beauty businesses make informed technology decisions.',
    image: '/images/blog/author-daisy-team.webp',
  },
};
