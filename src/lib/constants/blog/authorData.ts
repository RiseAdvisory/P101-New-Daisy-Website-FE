export interface AuthorBio {
  name: string;
  jobTitle: string;
  bio: string;
  image: string;
}

export interface AuthorBioI18n {
  en: AuthorBio;
  ar: AuthorBio;
}

export const authorBios: Record<string, AuthorBioI18n> = {
  'Dr. Elara Voss': {
    en: {
      name: 'Dr. Elara Voss',
      jobTitle: 'Beauty Business Strategist & Growth Architect',
      bio: 'Dr. Elara Voss is a beauty business strategist based in Riyadh, specialising in financial architecture, pricing strategy, and scalable growth for salons and clinics across the GCC and Europe. She holds an MBA from INSEAD and has helped dozens of beauty businesses transform from busy-but-unprofitable to financially sound.',
      image: '/images/blog/author-elara-voss.webp',
    },
    ar: {
      name: 'د. إيلارا فوس',
      jobTitle: 'استراتيجية أعمال التجميل ومهندسة النمو',
      bio: 'د. إيلارا فوس هي استراتيجية أعمال تجميل مقيمة في الرياض، متخصصة في الهندسة المالية واستراتيجيات التسعير والنمو القابل للتوسع للصالونات والعيادات في دول الخليج وأوروبا. تحمل ماجستير في إدارة الأعمال من INSEAD وساعدت عشرات مشاريع التجميل في التحول من مشغولة لكن غير مربحة إلى مستقرة مالياً.',
      image: '/images/blog/author-elara-voss.webp',
    },
  },
  'Julian Moreau': {
    en: {
      name: 'Julian Moreau',
      jobTitle: 'Beauty Industry Growth Strategist & Digital Marketing Specialist',
      bio: 'Julian Moreau is a Dubai-based beauty industry growth consultant specialising in social media, SEO, loyalty programs, and multi-channel client acquisition. He has helped salons across the GCC fill chairs and build lasting client relationships through practical, results-driven marketing strategies.',
      image: '/images/blog/author-julian-moreau.webp',
    },
    ar: {
      name: 'جوليان مورو',
      jobTitle: 'استراتيجي نمو صناعة التجميل ومتخصص في التسويق الرقمي',
      bio: 'جوليان مورو هو مستشار نمو في صناعة التجميل مقيم في دبي، متخصص في وسائل التواصل الاجتماعي وتحسين محركات البحث وبرامج الولاء واستقطاب العملاء متعدد القنوات. ساعد صالونات في جميع أنحاء الخليج في ملء الكراسي وبناء علاقات دائمة مع العملاء من خلال استراتيجيات تسويق عملية قائمة على النتائج.',
      image: '/images/blog/author-julian-moreau.webp',
    },
  },
  'Ethan Cole': {
    en: {
      name: 'Ethan Cole',
      jobTitle: 'Behavioral Data Analyst & Digital Conversion Strategist',
      bio: 'Ethan Cole is a New York-based behavioral analyst who studies why beauty customers hesitate, click, and convert. With a background in applied mathematics and data science, he helps booking platforms and beauty marketplaces reduce decision friction and turn interest into action.',
      image: '/images/blog/author-ethan-cole.webp',
    },
    ar: {
      name: 'إيثان كول',
      jobTitle: 'محلل بيانات سلوكية واستراتيجي تحويل رقمي',
      bio: 'إيثان كول هو محلل سلوكي مقيم في نيويورك يدرس لماذا يتردد عملاء التجميل وينقرون ويتحولون. بخلفية في الرياضيات التطبيقية وعلوم البيانات، يساعد منصات الحجز وأسواق التجميل في تقليل احتكاك القرار وتحويل الاهتمام إلى فعل.',
      image: '/images/blog/author-ethan-cole.webp',
    },
  },
  'Sofia Alvarez': {
    en: {
      name: 'Sofia Alvarez',
      jobTitle: 'Salon Operations Consultant & Beauty Technology Strategist',
      bio: 'Sofia Alvarez is a Barcelona-based operations consultant who specialises in turning chaotic salon operations into calm, efficient systems. From staff scheduling and software selection to payment infrastructure and process design, she helps beauty businesses run properly so owners can stop firefighting and start managing.',
      image: '/images/blog/author-sofia-alvarez.webp',
    },
    ar: {
      name: 'صوفيا ألفاريز',
      jobTitle: 'مستشارة عمليات الصالونات واستراتيجية تقنيات التجميل',
      bio: 'صوفيا ألفاريز هي مستشارة عمليات مقيمة في برشلونة متخصصة في تحويل عمليات الصالونات الفوضوية إلى أنظمة هادئة وفعالة. من جدولة الموظفين واختيار البرامج إلى البنية التحتية للمدفوعات وتصميم العمليات، تساعد مشاريع التجميل في العمل بشكل صحيح حتى يتوقف أصحابها عن إطفاء الحرائق ويبدؤوا بالإدارة.',
      image: '/images/blog/author-sofia-alvarez.webp',
    },
  },
  'Amara Nasser': {
    en: {
      name: 'Amara Nasser',
      jobTitle: 'Independent Beauty Professional & Freelance Career Mentor',
      bio: 'Amara Nasser is a London-based freelance stylist and career mentor who helps beauty professionals build sustainable independent practices. Having navigated the leap from salon employment to a thriving freelance career herself, she shares the practical lessons — pricing, taxes, client acquisition, and everything in between — that no one taught her.',
      image: '/images/blog/author-amara-nasser.webp',
    },
    ar: {
      name: 'أمارا ناصر',
      jobTitle: 'متخصصة تجميل مستقلة ومرشدة مهنية للعمل الحر',
      bio: 'أمارا ناصر هي مصففة شعر مستقلة ومرشدة مهنية مقيمة في لندن تساعد متخصصي التجميل في بناء ممارسات مستقلة مستدامة. بعد أن خاضت تجربة الانتقال من العمل في الصالونات إلى مسيرة مهنية حرة مزدهرة، تشارك الدروس العملية — التسعير والضرائب واستقطاب العملاء وكل ما بينهما — التي لم يعلّمها أحد إياها.',
      image: '/images/blog/author-amara-nasser.webp',
    },
  },
  'The Daisy Team': {
    en: {
      name: 'The Daisy Team',
      jobTitle: 'Content Team',
      bio: 'The Daisy Team covers platform updates, product comparisons, and industry insights to help beauty businesses make informed technology decisions.',
      image: '/images/blog/author-daisy-team.webp',
    },
    ar: {
      name: 'فريق ديزي',
      jobTitle: 'فريق المحتوى',
      bio: 'يغطي فريق ديزي تحديثات المنصة ومقارنات المنتجات ورؤى الصناعة لمساعدة مشاريع التجميل في اتخاذ قرارات تقنية مدروسة.',
      image: '/images/blog/author-daisy-team.webp',
    },
  },
};

/** Helper to get author bio for a specific locale */
export function getAuthorBio(authorName: string, locale: string): AuthorBio | null {
  const author = authorBios[authorName];
  if (!author) return null;
  return locale === 'ar' ? author.ar : author.en;
}
