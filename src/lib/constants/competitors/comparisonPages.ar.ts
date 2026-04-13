// =============================================================================
// WS2: Comparison Page Data — Arabic Translations
// Translates all user-facing text while keeping slugs, URLs, and identifiers
// =============================================================================

import type {
  DaisyVsPageData,
  AlternativePageData,
  BestAlternativesPageData,
  CompetitorVsPageData,
} from './comparisonPages';
import {
  daisyVsPages as enDaisyVs,
  alternativePages as enAlternative,
  bestAlternativesPages as enBestAlternatives,
  competitorVsPages as enCompetitorVs,
} from './comparisonPages';

// ---------------------------------------------------------------------------
// Helper: merge English base with Arabic overrides (keeps slugs intact)
// ---------------------------------------------------------------------------
function arDaisyVs(slug: string, overrides: Partial<DaisyVsPageData>): DaisyVsPageData {
  const base = enDaisyVs.find((p) => p.slug === slug);
  if (!base) throw new Error(`Missing daisyVsPage: ${slug}`);
  return { ...base, ...overrides } as DaisyVsPageData;
}

function arAlt(slug: string, overrides: Partial<AlternativePageData>): AlternativePageData {
  const base = enAlternative.find((p) => p.slug === slug);
  if (!base) throw new Error(`Missing alternativePage: ${slug}`);
  return { ...base, ...overrides } as AlternativePageData;
}

function arBestAlt(slug: string, overrides: Partial<BestAlternativesPageData>): BestAlternativesPageData {
  const base = enBestAlternatives.find((p) => p.slug === slug);
  if (!base) throw new Error(`Missing bestAlternativesPage: ${slug}`);
  return { ...base, ...overrides } as BestAlternativesPageData;
}

function arVs(combinedSlug: string, overrides: Partial<CompetitorVsPageData>): CompetitorVsPageData {
  const base = enCompetitorVs.find((p) => p.combinedSlug === combinedSlug);
  if (!base) throw new Error(`Missing competitorVsPage: ${combinedSlug}`);
  return { ...base, ...overrides } as CompetitorVsPageData;
}

// =============================================================================
// Daisy vs [Competitor] Pages — Arabic
// =============================================================================

export const daisyVsPages: DaisyVsPageData[] = [
  arDaisyVs('daisy-vs-fresha', {
    metaTitle: 'ديزي مقابل Fresha: مقارنة شاملة (2026)',
    metaDescription: 'قارن ديزي وFresha جنباً إلى جنب. اكتشف كيف تتفوق أدوات النمو المدعومة بالذكاء الاصطناعي والدعم العربي والتسعير الشفاف على نموذج سوق Fresha.',
    heroTitle: 'ديزي مقابل Fresha',
    heroSubtitle: 'كيف تقارن منصة نمو مدعومة بالذكاء الاصطناعي بأكبر سوق تجميل في العالم؟',
    tldr: 'Fresha سوق برسوم اشتراك شهرية بالإضافة إلى تكاليف معاملات مخفية. ديزي منصة نمو كاملة مع موظف استقبال ذكي وكاشباك ودعم عربي. اختر Fresha للتعرض في السوق؛ اختر ديزي لتنمية عملك بشكل فعال.',
    verdict: 'Fresha يوفر وصولاً للسوق لكنه يفرض الآن اشتراكات شهرية فوق رسوم المعاملات والعمولات، ويفتقد الذكاء الاصطناعي والدعم العربي وأدوات استقطاب العملاء. ديزي هي الخيار الأفضل للشركات الجادة في النمو، خاصة في سوق الخليج.',
    whoShouldChooseDaisy: [
      'تريد موظف استقبال ذكي يتعامل مع الحجوزات وخدمة العملاء 24/7',
      'تحتاج دعم اللغة العربية لعملاء الخليج',
      'تريد تسعيراً شفافاً بدون رسوم معاملات مخفية',
      'تريد بناء علامتك التجارية وليس علامة Fresha',
      'تريد استقطاب عملاء استباقي وليس مجرد إدراج في السوق',
      'تعمل في الخليج وتحتاج توافقاً محلياً وطرق دفع',
    ],
    whoShouldChooseCompetitor: [
      'تحتاج نقطة بدء منخفضة التكلفة ($9.95/شهرياً)',
      'تعتمد بشكل كبير على اكتشاف العملاء من السوق',
      'ممارس مستقل بحجم معاملات محدود',
      'تعمل فقط في الأسواق الغربية الناطقة بالإنجليزية',
    ],
  }),
  arDaisyVs('daisy-vs-booksy', {
    metaTitle: 'ديزي مقابل Booksy: مقارنة كاملة للميزات (2026)',
    metaDescription: 'ديزي مقابل Booksy — قارن ميزات الذكاء الاصطناعي والتسعير والدعم العربي وأدوات استقطاب العملاء. اعثر على أفضل منصة حجز لعملك في التجميل.',
    heroTitle: 'ديزي مقابل Booksy',
    heroSubtitle: 'تطبيق حجز بأولوية الجوال مقابل منصة نمو كاملة مدعومة بالذكاء الاصطناعي — أيهما يساعد عملك على النمو؟',
    tldr: 'Booksy تطبيق حجز متين بأولوية الجوال مع موظف استقبال صوتي ذكي أساسي ("Digital Doorman"). ديزي توفر نظام ذكاء اصطناعي كاملاً ودعم عربي واستقطاب عملاء بالكاشباك وتسعير ثابت لا يتزايد لكل مقدم خدمة.',
    verdict: 'Booksy رائع للحلاقين والمحترفين المستقلين الذين يريدون حجزاً بسيطاً عبر الجوال مع تعرض في السوق. لكن تسعيره لكل مقدم خدمة يصبح مكلفاً للفرق، ولا يوجد تواجد خليجي، وذكاؤه الاصطناعي يقتصر على توجيه المكالمات. ديزي الفائز الواضح للشركات المتنامية، خاصة في الأسواق الناطقة بالعربية.',
    whoShouldChooseDaisy: [
      'تريد ذكاءً اصطناعياً شاملاً وليس مجرد توجيه مكالمات',
      'تحتاج دعم اللغة العربية',
      'فريقك يكبر وتسعير لكل مقدم خدمة أصبح مكلفاً',
      'تريد كاشباك لتعزيز ولاء العملاء',
      'تعمل في سوق الخليج',
      'تريد بناء علامتك التجارية مع وايت ليبل',
    ],
    whoShouldChooseCompetitor: [
      'حلاق مستقل أو محترف تجميل مستقل',
      'تعطي الأولوية لتجربة الجوال أولاً فوق كل شيء',
      'تعمل فقط في الولايات المتحدة أو أوروبا',
      'تقدّر مجتمع صالونات الحلاقة الخاص بـ Booksy',
    ],
  }),
  arDaisyVs('daisy-vs-vagaro', {
    metaTitle: 'ديزي مقابل Vagaro: أي برنامج صالون أفضل؟',
    metaDescription: 'قارن ديزي وVagaro لإدارة الصالون. ميزات الذكاء الاصطناعي وشفافية التسعير والدعم العربي وأدوات استقطاب العملاء — اكتشف أيهما أفضل.',
    heroTitle: 'ديزي مقابل Vagaro',
    heroSubtitle: 'منصة عمليات غنية بالميزات مقابل محرك نمو مدعوم بالذكاء الاصطناعي — أيهما يناسب صالونك أكثر؟',
    tldr: 'Vagaro منصة عمليات أمريكية شاملة بميزات قوية وسعر بدء معقول. ديزي تضيف ما يفتقده Vagaro: موظف استقبال ذكي واستقطاب بالكاشباك ودعم عربي وأدوات نمو عملاء حقيقية. Vagaro يدير عملك؛ ديزي تنمّيه.',
    verdict: 'Vagaro خيار قوي وشامل للصالونات الأمريكية التي تريد ميزات شاملة بسعر جيد. لكنه أساساً أداة عمليات — يساعدك في الإدارة وليس النمو. قدرات ديزي في الذكاء الاصطناعي ومحرك استقطاب العملاء ودعم الخليج تجعلها الاستثمار الأفضل للشركات الموجهة للنمو.',
    whoShouldChooseDaisy: [
      'تريد ذكاءً اصطناعياً يتعامل مع الحجوزات والمكالمات وخدمة العملاء 24/7',
      'تحتاج دعم العربية لعملاء الخليج',
      'تريد أدوات استقطاب عملاء وليس فقط إدارة العمليات',
      'تريد تسعيراً ثابتاً بدون إضافات لكل موظف',
      'تريد كاشباك لتعزيز الولاء والحجوزات المتكررة',
      'تتطلع للنمو الفعال وليس مجرد إدارة عملك',
    ],
    whoShouldChooseCompetitor: [
      'تحتاج نقاط بيع الأفضل مع تكامل أجهزة فعلية',
      'تعطي الأولوية لفترة تجريبية 30 يوماً مجانية قبل الالتزام',
      'صالون أمريكي يريد منصة عمليات مثبتة وغنية بالميزات',
      'إدارة المخزون العميقة حاسمة لعملك',
    ],
  }),
  // Remaining Daisy vs pages — use English base with Arabic hero/verdict
  ...enDaisyVs.filter(p => !['daisy-vs-fresha', 'daisy-vs-booksy', 'daisy-vs-vagaro'].includes(p.slug)).map(p => arDaisyVs(p.slug, {
    metaTitle: p.metaTitle.replace('Daisy vs', 'ديزي مقابل'),
    heroTitle: p.heroTitle.replace('Daisy vs', 'ديزي مقابل'),
  })),
];

// =============================================================================
// Alternative Pages — Arabic
// =============================================================================

export const alternativePages: AlternativePageData[] = enAlternative.map(p => arAlt(p.slug, {
  metaTitle: p.metaTitle.replace('Best', 'أفضل').replace('Alternative', 'بديل'),
  heroTitle: p.heroTitle.replace('Looking for a', 'تبحث عن بديل لـ').replace('Looking for an', 'تبحث عن بديل لـ').replace('Alternative?', '؟'),
}));

// =============================================================================
// Best Alternatives Pages — Arabic
// =============================================================================

export const bestAlternativesPages: BestAlternativesPageData[] = enBestAlternatives.map(p => arBestAlt(p.slug, {
  metaTitle: p.metaTitle.replace('Best', 'أفضل').replace('Alternatives', 'بدائل'),
  heroTitle: p.heroTitle.replace('Best', 'أفضل').replace('Alternatives', 'بدائل'),
}));

// =============================================================================
// Competitor vs Competitor Pages — Arabic
// =============================================================================

export const competitorVsPages: CompetitorVsPageData[] = enCompetitorVs.map(p => arVs(p.combinedSlug, {
  metaTitle: p.metaTitle,
  heroTitle: p.heroTitle,
}));
