// =============================================================================
// WS2: Comparison Page Data — Arabic
// English is the source of truth for slugs/identifiers. This file provides
// Arabic equivalents for all user-facing copy across compare pages.
// =============================================================================

import type {
  DaisyVsPageData,
  AlternativePageData,
  BestAlternativesPageData,
  CompetitorVsPageData,
} from './comparisonPages';

type FeatureCommentaryKey =
  | 'onlineBooking'
  | 'posAndPayments'
  | 'clientManagement'
  | 'staffManagement'
  | 'marketingAndCrm'
  | 'inventoryManagement'
  | 'reportingAndAnalytics'
  | 'marketplaceAndDiscovery'
  | 'aiCapabilities';

function featureCommentaryTemplate(
  competitorName: string,
  overrides: Partial<Record<FeatureCommentaryKey, string>> = {},
): Record<FeatureCommentaryKey, string> {
  const base: Record<FeatureCommentaryKey, string> = {
    onlineBooking:
      `كلا الحلّين يدعمان الحجز أونلاين، لكن الاختلاف في ما يحدث بعد الضغط على "احجز". ${competitorName} يركّز على الحجز كأداة تشغيل، بينما ديزي يربط الحجز بتدفق كامل: تذكيرات، عربون، متابعة، وإعادة حجز، بما يقلل التسرب ويرفع التحويل.`,
    posAndPayments:
      `المدفوعات ليست "زر دفع" فقط. ديزي يدمج العربون وقت الحجز، وPOS داخل الصالون، وتقسيم المدفوعات، وإدارة الرصيد/الاسترجاع. كثير من البدائل تضيف رسوماً أو وحدات منفصلة أو تحتاج أدوات خارجية لإكمال الصورة.`,
    clientManagement:
      `إدارة العملاء في ديزي تتجاوز الملف الأساسي إلى سياق وتشغيل: تفضيلات، تاريخ خدمات، مؤشرات انقطاع، وشرائح قابلة للتفعيل (للتسويق وإعادة التفعيل). ${competitorName} يقدم عادة أساسيات CRM، لكن ديزي يربط البيانات بإجراءات تلقائية.`,
    staffManagement:
      `إدارة الفريق ليست فقط جدول مناوبات. ديزي يوفر صلاحيات حسب الدور، تتبع أداء، وعمولات شفافة، مع أتمتة تقلل الأخطاء. ${competitorName} قد يقدم جداول جيدة، لكن الفارق غالباً في الشفافية والتتبع وربط الأداء بالإيراد.`,
    marketingAndCrm:
      `نمو الأعمال يتطلب أدوات تحويل واحتفاظ: كاشباك، إحالات، ولاء، وعروض موجهة. ديزي يقدم ذلك كجزء أساسي من المنصة، بينما كثير من الحلول تعتمد على حملات عامة أو إضافات مدفوعة أو أدوات خارجية.`,
    inventoryManagement:
      `إدارة المخزون تختلف بحسب حجم عملك. ديزي يغطي الأساسيات المرتبطة بالتشغيل، بينما قد تتفوق بعض المنصات في مخزون متقدم. إذا كان المخزون محوراً رئيسياً لديك، قارن العمق المطلوب قبل اتخاذ القرار.`,
    reportingAndAnalytics:
      `التقارير في ديزي مصممة لاتخاذ قرار: إيراد لحظي، احتفاظ، أداء خدمات وموظفين، واتجاهات. كثير من الأنظمة تقدم تقارير ثابتة، لكن ديزي يركز على مؤشرات قابلة للتفعيل بسرعة.`,
    marketplaceAndDiscovery:
      `الاكتشاف هو نقطة الاختلاف الكبرى. بعض المنافسين يعتمدون على سوق/دليل فقط، وبعضهم لا يقدم اكتشافاً أصلاً. ديزي يجمع بين سوق + أدوات احتفاظ (كاشباك/ولاء) + تواصل آلي، ليحوّل الاكتشاف إلى علاقة طويلة الأمد.`,
    aiCapabilities:
      `الذكاء الاصطناعي في ديزي ليس "ميزة واحدة" بل طبقة تشغيل: استقبال، محادثة، جدولة، ورؤى. كثير من المنافسين إما لا يملكون AI، أو يقدمون AI محدوداً (مثل توجيه مكالمات) أو يضعونه خلف باقات مرتفعة.`,
  };

  return { ...base, ...overrides };
}

const commonWhoChooseDaisy = [
  'تريد ذكاءً اصطناعياً عملياً (حجز، تذكير، متابعة) وليس وعوداً',
  'تحتاج واجهة عربية/إنجليزية وتجربة RTL سليمة',
  'تريد تسعيراً واضحاً بدون مفاجآت أو رسوم مخفية',
  'تريد أدوات اكتساب واحتفاظ (كاشباك/ولاء/إحالات) ضمن نفس المنصة',
  'تريد بناء علامتك وتجربة حجز تحمل هويتك (White-label)',
];

// =============================================================================
// Daisy vs [Competitor]
// =============================================================================

export const daisyVsPages: DaisyVsPageData[] = [
  {
    slug: 'daisy-vs-fresha',
    competitorSlug: 'fresha',
    metaTitle: 'ديزي مقابل Fresha: مقارنة شاملة (2026)',
    metaDescription:
      'قارن ديزي وFresha جنباً إلى جنب: الذكاء الاصطناعي، الدعم العربي، أدوات النمو، وشفافية التسعير مقابل نموذج السوق والرسوم المتراكمة.',
    keywords: ['ديزي مقابل fresha', 'بديل fresha', 'مقارنة fresha', 'برنامج صالون', 'منصة حجز تجميل'],
    heroTitle: 'ديزي مقابل Fresha',
    heroSubtitle:
      'منصة نمو مدعومة بالذكاء الاصطناعي مقابل أكبر سوق تجميل عالمي، أيهما يخدم عملك فعلاً؟',
    tldr:
      'Fresha قوي كسوق واكتشاف، لكنه يجمع اشتراكاً + رسوم معاملات + عمولات سوق. ديزي منصة نمو كاملة: استقبال ذكي، كاشباك، وواجهة عربية، مع تسعير أوضح وتجربة علامة أقوى.',
    verdict:
      'إذا كان هدفك الأساسي هو الاكتشاف عبر السوق فقط، قد يناسبك Fresha. إذا كنت تريد نموّاً واحتفاظاً قابلاً للقياس (خصوصاً في الخليج) فديزي غالباً الاستثمار الأفضل.',
    featureCommentary: featureCommentaryTemplate('Fresha', {
      posAndPayments:
        'Fresha معروف برسوم معاملات وعمولات السوق التي تتراكم مع حجم العمل. ديزي يركز على تسعير أوضح وربط الدفع بالحجز (عربون) وتقليل عدم الحضور دون مفاجآت.',
      marketplaceAndDiscovery:
        'Fresha يتفوق كسوق ضخم. ديزي يقدم اكتشافاً عبر السوق أيضاً، لكنه يركز بقوة على تحويل العميل الجديد إلى عميل عائد عبر كاشباك ورسائل إعادة حجز.',
      aiCapabilities:
        'حتى لو أعلن المنافس عن AI، القيمة في التنفيذ اليومي. ديزي يضع AI في قلب التشغيل (استقبال، رسائل، جدولة) وليس كإضافة لاحقة.',
    }),
    whoShouldChooseDaisy: [
      ...commonWhoChooseDaisy,
      'تريد تقليل عدم الحضور عبر العربون والتذكيرات المتدرجة',
      'تريد الاحتفاظ عبر كاشباك بدل اعتماد كامل على السوق',
    ],
    whoShouldChooseCompetitor: [
      'تعتمد على اكتشاف السوق كقناة اكتساب أساسية',
      'تقبل نموذج الرسوم المتراكمة مقابل حجم سوق كبير',
      'أولوية قصوى لديك هي السوق أكثر من بناء علامتك الخاصة',
    ],
  },
  {
    slug: 'daisy-vs-booksy',
    competitorSlug: 'booksy',
    metaTitle: 'ديزي مقابل Booksy: مقارنة الميزات (2026)',
    metaDescription:
      'قارن ديزي وBooksy: الذكاء الاصطناعي، التسعير، الدعم العربي، وأدوات النمو والاحتفاظ. اعرف أي منصة تناسب صالونك.',
    keywords: ['ديزي مقابل booksy', 'بديل booksy', 'مقارنة booksy'],
    heroTitle: 'ديزي مقابل Booksy',
    heroSubtitle:
      'تجربة جوال قوية مقابل منصة نمو كاملة، أيهما يرفع الإيراد ويقلل العبء؟',
    tldr:
      'Booksy قوي كتطبيق جوال لبعض الفئات ويشتهر بتسعير لكل مقدم خدمة. ديزي يركز على نمو الأعمال: استقبال ذكي، أدوات اكتساب/احتفاظ، ودعم عربي، مع تسعير أقل حساسية لتضخم الفريق.',
    verdict:
      'إذا كنت محترفاً فردياً يهمه تطبيق جوال بسيط، Booksy قد يكون كافياً. إذا كنت تبني فريقاً أو تريد AI أعمق وأدوات نمو، ديزي غالباً خيار أقوى.',
    featureCommentary: featureCommentaryTemplate('Booksy', {
      staffManagement:
        'Booksy يميل للتسعير حسب مقدم الخدمة، ما قد يصبح مكلفاً مع نمو الفريق. ديزي يركز على تشغيل فريق دون مضاعفة التكلفة مع كل توظيف.',
      aiCapabilities:
        'بعض ميزات AI لدى المنافس قد تكون محدودة (مثل توجيه المكالمات). ديزي يقدم طبقة AI أشمل تشمل الحجز والتواصل والمتابعة.',
    }),
    whoShouldChooseDaisy: [
      ...commonWhoChooseDaisy,
      'فريقك ينمو وتريد نموذج تسعير لا يعاقب التوظيف',
      'تريد اكتساباً واحتفاظاً (كاشباك/ولاء) ضمن المنصة',
    ],
    whoShouldChooseCompetitor: [
      'أنت فردي وتفضل تجربة جوال أولاً',
      'تقبل تسعير لكل مقدم خدمة مقابل بساطة التطبيق',
      'لا تحتاج واجهة عربية ولا أدوات نمو متقدمة',
    ],
  },
  {
    slug: 'daisy-vs-vagaro',
    competitorSlug: 'vagaro',
    metaTitle: 'ديزي مقابل Vagaro: أي برنامج صالون أفضل؟',
    metaDescription:
      'قارن ديزي وVagaro: الذكاء الاصطناعي، التسعير، إدارة الفريق، وأدوات اكتساب العملاء. اعرف الفرق بين إدارة التشغيل ونمو الإيراد.',
    keywords: ['ديزي مقابل vagaro', 'بديل vagaro', 'مقارنة vagaro'],
    heroTitle: 'ديزي مقابل Vagaro',
    heroSubtitle:
      'منصة تشغيل غنية بالميزات مقابل منصة نمو مدعومة بالذكاء الاصطناعي.',
    tldr:
      'Vagaro قوي كأداة تشغيل خاصة في أسواق محددة، لكنه أقل تركيزاً على الاكتساب والاحتفاظ. ديزي يضيف AI، كاشباك، ودعم عربي، مع تركيز على تحويل العملاء الجدد إلى عائدين.',
    verdict:
      'إذا كان تركيزك على تشغيل يومي بميزات كثيرة داخل سوق محدد، Vagaro قد يناسب. إذا كان هدفك نموّاً قابل للقياس في الخليج أو عبر AI، ديزي غالباً أفضل.',
    featureCommentary: featureCommentaryTemplate('Vagaro'),
    whoShouldChooseDaisy: [
      ...commonWhoChooseDaisy,
      'تريد اكتساباً عبر السوق + احتفاظاً عبر كاشباك',
      'تريد AI يساعد في استقبال وتواصل وجدولة',
    ],
    whoShouldChooseCompetitor: [
      'تريد منظومة تشغيل غنية في سوق يركز عليه Vagaro',
      'تفضّل بقاء أدوات النمو خارج المنصة أو كإضافات',
    ],
  },
  {
    slug: 'daisy-vs-glossgenius',
    competitorSlug: 'glossgenius',
    metaTitle: 'ديزي مقابل GlossGenius: مقارنة AI والنمو',
    metaDescription:
      'GlossGenius معروف بتجربة جميلة للمستقلين. قارن ذلك مع ديزي: استقبال ذكي، أدوات نمو، إدارة فريق، ودعم عربي.',
    keywords: ['ديزي مقابل glossgenius', 'بديل glossgenius'],
    heroTitle: 'ديزي مقابل GlossGenius',
    heroSubtitle:
      'أداة جميلة للمستقلين مقابل منصة نمو شاملة، أيهما يخدم طموحك؟',
    tldr:
      'GlossGenius مناسب للمستقلين الباحثين عن بساطة وتجربة تصميم قوية. ديزي مناسب عندما يكون الهدف نموّاً: AI، أدوات احتفاظ، وواجهة عربية، مع قابلية دعم فريق.',
    verdict:
      'إذا كنت فردياً وتريد بساطة "تبدو جميلة"، GlossGenius قد يكفي. إذا كنت تريد نموّاً قابلاً للتوسع، ديزي غالباً أفضل.',
    featureCommentary: featureCommentaryTemplate('GlossGenius', {
      marketingAndCrm:
        'بعض الأدوات لدى المنافس قد تكون محدودة أو مدفوعة بباقة أعلى. ديزي يقدم أدوات نمو كجزء أساسي (كاشباك/ولاء/إحالات).',
    }),
    whoShouldChooseDaisy: [
      ...commonWhoChooseDaisy,
      'تريد أدوات نمو تتجاوز "المظهر" إلى نتائج قابلة للقياس',
    ],
    whoShouldChooseCompetitor: [
      'أنت مستقل وتريد أبسط تجربة تصميم',
      'لا تحتاج أدوات اكتساب/احتفاظ متقدمة حالياً',
    ],
  },
  {
    slug: 'daisy-vs-mindbody',
    competitorSlug: 'mindbody',
    metaTitle: 'ديزي مقابل Mindbody: مقارنة حديثة (2026)',
    metaDescription:
      'Mindbody منصة قديمة بسعر مرتفع وتعقيد أعلى. قارنها مع ديزي: واجهة حديثة، AI، دعم عربي، وتسعير أوضح.',
    keywords: ['ديزي مقابل mindbody', 'بديل mindbody'],
    heroTitle: 'ديزي مقابل Mindbody',
    heroSubtitle:
      'منصة قديمة بثمن وتعقيد، مقابل منصة حديثة تركز على النمو.',
    tldr:
      'Mindbody قوي تاريخياً في العافية لكنه قد يكون مكلفاً ومعقداً. ديزي يركز على تجربة حديثة، AI عملي، ودعم عربي، مع إعداد أسرع وتسعير أوضح.',
    verdict:
      'إذا كنت تحتاج منظومة Mindbody تحديداً، قد تستمر عليه. إذا كنت تريد تجربة أحدث وملائمة للخليج مع AI، ديزي غالباً خيار أفضل.',
    featureCommentary: featureCommentaryTemplate('Mindbody'),
    whoShouldChooseDaisy: [...commonWhoChooseDaisy, 'تريد إعداداً أسرع وتعقيداً أقل'],
    whoShouldChooseCompetitor: ['تحتاج تكاملات/منظومة Mindbody الحالية', 'لا يهمك التعقيد مقابل اعتماد قديم'],
  },
  {
    slug: 'daisy-vs-toast',
    competitorSlug: 'toast',
    metaTitle: 'ديزي مقابل Toast: صالون أم مطاعم؟',
    metaDescription:
      'Toast قوي في POS للمطاعم. قارن ذلك مع ديزي المصمم للصالونات: حجز، تذكيرات، AI، واحتفاظ.',
    keywords: ['ديزي مقابل toast', 'toast للصالونات'],
    heroTitle: 'ديزي مقابل Toast',
    heroSubtitle:
      'POS ممتاز للمطاعم لا يعني منصة صالون ممتازة.',
    tldr:
      'Toast قد يلمع في POS، لكنه ليس مصمماً للحجز ودورة العميل في التجميل. ديزي يجمع الحجز + التواصل + الدفع + الاحتفاظ في تجربة واحدة.',
    verdict:
      'إذا كان همك الأساسي POS فقط قد تنظر لـ Toast، لكن لمعظم الصالونات منصة متخصصة مثل ديزي تقلل التشتت وتزيد التحويل.',
    featureCommentary: featureCommentaryTemplate('Toast', {
      onlineBooking:
        'في التجميل، الحجز وإدارة الموارد والمدة والموظف عناصر أساسية. ديزي مصمم لهذا، بينما أدوات غير متخصصة قد تتطلب حلولاً ملتفة.',
    }),
    whoShouldChooseDaisy: [...commonWhoChooseDaisy, 'تريد منصة مخصصة للتجميل لا POS عام'],
    whoShouldChooseCompetitor: ['تريد POS قوي جداً كنقطة البداية', 'تقبل إضافة أدوات حجز/CRM منفصلة'],
  },
  {
    slug: 'daisy-vs-boulevard',
    competitorSlug: 'boulevard',
    metaTitle: 'ديزي مقابل Boulevard: قيمة أفضل مع AI',
    metaDescription:
      'Boulevard معروف بتجربة مميزة وأسعار أعلى. قارن ذلك مع ديزي الذي يضم AI وأدوات نمو ودعم عربي بتسعير أوضح.',
    keywords: ['ديزي مقابل boulevard', 'بديل boulevard'],
    heroTitle: 'ديزي مقابل Boulevard',
    heroSubtitle:
      'تجربة Premium مقابل منصة نمو تسعى لنتائج قابلة للقياس.',
    tldr:
      'Boulevard خيار Premium لبعض الأعمال. ديزي يركز على AI وأدوات اكتساب/احتفاظ ودعم عربي بتسعير أوضح، ما يجعله مناسباً لفرق تنمو.',
    verdict:
      'إذا كان تصميم Premium هو أولويتك والميزانية مرنة، Boulevard قد يناسب. إذا كنت تريد AI وأدوات نمو ودعم عربي بقيمة أفضل، ديزي غالباً أفضل.',
    featureCommentary: featureCommentaryTemplate('Boulevard'),
    whoShouldChooseDaisy: [...commonWhoChooseDaisy, 'تريد قيمة أعلى مقابل سعر'],
    whoShouldChooseCompetitor: ['تريد تجربة Premium جداً كأولوية قصوى', 'تعمل في سوق يركز عليه Boulevard'],
  },
  {
    slug: 'daisy-vs-glamera',
    competitorSlug: 'glamera',
    metaTitle: 'ديزي مقابل Glamera: مقارنة للمنطقة (2026)',
    metaDescription:
      'قارن ديزي وGlamera: تجربة عربية، اكتساب واحتفاظ، وذكاء اصطناعي مقابل نموذج حجز/سوق.',
    keywords: ['ديزي مقابل glamera', 'بديل glamera'],
    heroTitle: 'ديزي مقابل Glamera',
    heroSubtitle:
      'أي منصة تمنحك اكتساباً واحتفاظاً وتحوّل البيانات إلى نمو؟',
    tldr:
      'Glamera قد يخدم كقناة اكتشاف/حجز. ديزي يجمع الاكتشاف مع أدوات احتفاظ (كاشباك/ولاء) وAI للتواصل والجدولة، ما يحسن التحويل ويقلل الاعتماد على قناة واحدة.',
    verdict:
      'إذا كنت تريد منصة تجمع الاكتساب والاحتفاظ والتحليلات في نظام واحد، ديزي غالباً أفضل من الاعتماد على سوق فقط.',
    featureCommentary: featureCommentaryTemplate('Glamera'),
    whoShouldChooseDaisy: [...commonWhoChooseDaisy],
    whoShouldChooseCompetitor: ['تريد قناة اكتشاف/حجز فقط', 'تقبل إبقاء أدوات الاحتفاظ خارج المنصة'],
  },
  {
    slug: 'daisy-vs-dingg',
    competitorSlug: 'dingg',
    metaTitle: 'ديزي مقابل Dingg: مقارنة (2026)',
    metaDescription:
      'قارن ديزي وDingg: الذكاء الاصطناعي، اللغة العربية، الاكتساب والاحتفاظ، وتجربة العلامة.',
    keywords: ['ديزي مقابل dingg', 'بديل dingg'],
    heroTitle: 'ديزي مقابل Dingg',
    heroSubtitle:
      'تجربة تشغيل مقابل منصة نمو بأدوات احتفاظ واكتساب.',
    tldr:
      'Dingg قد يوفر أساسيات تشغيل. ديزي يضيف طبقة نمو: AI، كاشباك/ولاء، وتحليلات تساعد على زيادة الإيراد دون زيادة عبء العمل.',
    verdict:
      'إذا كنت تريد نموّاً قابلاً للقياس مع AI واحتفاظ، ديزي غالباً خيار أقوى.',
    featureCommentary: featureCommentaryTemplate('Dingg'),
    whoShouldChooseDaisy: [...commonWhoChooseDaisy],
    whoShouldChooseCompetitor: ['تحتاج أساسيات تشغيل فقط', 'لا تحتاج أدوات نمو متقدمة حالياً'],
  },
  {
    slug: 'daisy-vs-repeatmd',
    competitorSlug: 'repeatmd',
    metaTitle: 'ديزي مقابل RepeatMD: لعيادات التجميل (2026)',
    metaDescription:
      'قارن ديزي وRepeatMD لعيادات التجميل: اكتساب واحتفاظ، تواصل، دفع، وتجربة عربية/إنجليزية.',
    keywords: ['ديزي مقابل repeatmd', 'بديل repeatmd'],
    heroTitle: 'ديزي مقابل RepeatMD',
    heroSubtitle:
      'أدوات موجهة لعيادات مقابل منصة شاملة للعمليات والنمو.',
    tldr:
      'RepeatMD قد يخدم سيناريوهات عيادات محددة. ديزي يقدم مساراً أوسع: حجز، تواصل، كاشباك/ولاء، وتحليلات، مع دعم عربي مناسب لأسواق الخليج.',
    verdict:
      'إذا كان لديك عيادة في الخليج وتحتاج تجربة عربية + اكتساب/احتفاظ، ديزي غالباً أكثر شمولاً.',
    featureCommentary: featureCommentaryTemplate('RepeatMD'),
    whoShouldChooseDaisy: [...commonWhoChooseDaisy, 'تريد منصة واحدة بدلاً من أدوات متعددة للعيادة'],
    whoShouldChooseCompetitor: ['تحتاج Workflow محدداً يغطيه RepeatMD بشكل مميز', 'لا تحتاج سوق/كاشباك'],
  },
  {
    slug: 'daisy-vs-planity',
    competitorSlug: 'planity',
    metaTitle: 'ديزي مقابل Planity: مقارنة (2026)',
    metaDescription:
      'Planity مشهور في أسواق معينة. قارن ذلك مع ديزي: AI، دعم عربي، أدوات نمو واحتفاظ، وتجربة علامة.',
    keywords: ['ديزي مقابل planity', 'بديل planity'],
    heroTitle: 'ديزي مقابل Planity',
    heroSubtitle:
      'منصة حجز/سوق في سوق محدد مقابل منصة نمو مصممة للتوسع.',
    tldr:
      'Planity قد يكون مناسباً في سوقه الأساسي. ديزي يناسب أعمالاً تريد نموّاً مع أدوات احتفاظ واكتساب وواجهة عربية/إنجليزية.',
    verdict:
      'إذا كانت أولويتك أسواق الخليج أو AI والاحتفاظ، ديزي غالباً أفضل من الاعتماد على منصة محلية لبلد محدد.',
    featureCommentary: featureCommentaryTemplate('Planity'),
    whoShouldChooseDaisy: [...commonWhoChooseDaisy],
    whoShouldChooseCompetitor: ['تعمل في السوق الأساسي لـ Planity وتريد حلولاً محلية هناك'],
  },
  {
    slug: 'daisy-vs-mangomint',
    competitorSlug: 'mangomint',
    metaTitle: 'ديزي مقابل Mangomint: تشغيل ممتاز مع نمو',
    metaDescription:
      'Mangomint معروف بتجربة تشغيل نظيفة وأسعار Premium. قارن ذلك مع ديزي الذي يضيف AI واكتساب/احتفاظ ودعم عربي.',
    keywords: ['ديزي مقابل mangomint', 'بديل mangomint'],
    heroTitle: 'ديزي مقابل Mangomint',
    heroSubtitle:
      'تشغيل نظيف مقابل تشغيل + نمو + AI.',
    tldr:
      'Mangomint يركز على التشغيل وتجربة UI. ديزي يضيف طبقة نمو: سوق، كاشباك/ولاء، AI للتواصل والجدولة، ودعم عربي.',
    verdict:
      'إذا كان هدفك تشغيل نظيف فقط قد يناسبك Mangomint. إذا أردت تشغيل + اكتساب + احتفاظ، ديزي غالباً أفضل.',
    featureCommentary: featureCommentaryTemplate('Mangomint'),
    whoShouldChooseDaisy: [...commonWhoChooseDaisy, 'تريد اكتساباً واحتفاظاً ضمن المنصة'],
    whoShouldChooseCompetitor: ['تريد تشغيل Premium فقط دون أدوات نمو متقدمة'],
  },
  {
    slug: 'daisy-vs-square-appointments',
    competitorSlug: 'square-appointments',
    metaTitle: 'ديزي مقابل Square Appointments: للتجميل تحديداً',
    metaDescription:
      'Square Appointments مناسب كبداية عامة. قارن ذلك مع ديزي المصمم للتجميل: AI، سوق، كاشباك، وتجربة عربية.',
    keywords: ['ديزي مقابل square appointments', 'بديل square appointments'],
    heroTitle: 'ديزي مقابل Square Appointments',
    heroSubtitle:
      'جدولة عامة ممتازة للدفع، لكنها ليست كافية لصالون يريد النمو.',
    tldr:
      'Square ممتاز في الدفع لكنه عام في الجدولة. ديزي يضيف طبقة تخصص: مدد خدمات، موارد، تواصل متعدد القنوات، أدوات احتفاظ واكتساب، وAI.',
    verdict:
      'إذا كنت تريد أدوات تجميل متخصصة ونموّاً، ديزي غالباً أفضل من أداة جدولة عامة.',
    featureCommentary: featureCommentaryTemplate('Square Appointments', {
      onlineBooking:
        'Square مناسب كجدولة عامة، لكن في التجميل تحتاج قواعد مدة وخدمة وموظف وموارد. ديزي مصمم لهذه التفاصيل.',
    }),
    whoShouldChooseDaisy: [...commonWhoChooseDaisy, 'تريد منصة تخصصية للتجميل لا أداة جدولة عامة'],
    whoShouldChooseCompetitor: ['أنت بالفعل على Square وتريد جدولة بسيطة كبداية'],
  },
  {
    slug: 'daisy-vs-phorest',
    competitorSlug: 'phorest',
    metaTitle: 'ديزي مقابل Phorest: CRM قوي مع AI',
    metaDescription:
      'Phorest معروف بـ CRM وولاء قويين في أسواق معينة. قارن ذلك مع ديزي الذي يضيف AI، سوق، ودعم عربي.',
    keywords: ['ديزي مقابل phorest', 'بديل phorest'],
    heroTitle: 'ديزي مقابل Phorest',
    heroSubtitle:
      'CRM قوي مقابل منصة نمو تجمع CRM + اكتساب + AI.',
    tldr:
      'Phorest قد يناسب صالونات في أسواقه الأساسية. ديزي يقدم AI واستقبال وتواصل وسوق وكاشباك مع دعم عربي مناسب للخليج.',
    verdict:
      'إذا كانت العربية والخليج ضمن أولوياتك، ديزي غالباً أقرب للاحتياج. إذا كنت في سوق Phorest وتريد CRM تحديداً قد يناسبك.',
    featureCommentary: featureCommentaryTemplate('Phorest'),
    whoShouldChooseDaisy: [...commonWhoChooseDaisy],
    whoShouldChooseCompetitor: ['تعمل في سوق Phorest الأساسي وتريد CRM/ولاء بعمق هناك'],
  },
  {
    slug: 'daisy-vs-acuity-scheduling',
    competitorSlug: 'acuity-scheduling',
    metaTitle: 'ديزي مقابل Acuity: أكثر من جدولة (2026)',
    metaDescription:
      'Acuity قوي كجدولة. قارن ذلك مع ديزي: منصة تجميل كاملة تشمل حجز + دفع + CRM + تواصل + AI + سوق.',
    keywords: ['ديزي مقابل acuity', 'بديل acuity', 'بديل acuity للصالونات'],
    heroTitle: 'ديزي مقابل Acuity',
    heroSubtitle:
      'جدولة ممتازة، لكنها ليست منصة صالون كاملة.',
    tldr:
      'Acuity أداة جدولة. ديزي منصة أعمال تجميل كاملة تربط الحجز بالدفع والتواصل والاحتفاظ والاكتساب، مع دعم عربي.',
    verdict:
      'إذا كان كل ما تحتاجه هو جدولة، Acuity قد يكفي. إذا كنت تريد نظاماً ينمّي الإيراد ويقلل العبء، ديزي غالباً أفضل.',
    featureCommentary: featureCommentaryTemplate('Acuity Scheduling', {
      marketplaceAndDiscovery:
        'أدوات الجدولة عادة لا تقدم اكتشافاً. ديزي يضيف سوقاً وأدوات احتفاظ لتحويل الاكتشاف إلى تكرار.',
    }),
    whoShouldChooseDaisy: [...commonWhoChooseDaisy, 'تريد منصة كاملة لا أداة جدولة فقط'],
    whoShouldChooseCompetitor: ['تريد جدولة فقط وتستخدم أدوات أخرى لباقي التشغيل'],
  },
];

// =============================================================================
// Alternative Pages
// =============================================================================

export const alternativePages: AlternativePageData[] = [
  {
    slug: 'fresha',
    competitorSlug: 'fresha',
    metaTitle: 'أفضل بديل لـ Fresha للصالونات (2026)',
    metaDescription:
      'تبحث عن بديل لـ Fresha؟ ديزي يقدم استقبال ذكي، تسعير أوضح، دعم عربي، وكاشباك، بدون رسوم متراكمة.',
    keywords: ['بديل fresha', 'استبدال fresha', 'أفضل من fresha'],
    heroTitle: 'تبحث عن بديل لـ Fresha؟',
    heroSubtitle:
      'اشتراك + رسوم معاملات + عمولات سوق، التكاليف تتراكم بسرعة.',
    painPoints: [
      'رسوم معاملات تقتطع من كل دفعة',
      'عمولات على حجوزات السوق ترفع تكلفة العميل الجديد',
      'تجربة علامة مقيدة (صفحة حجز تحمل هوية المنصة)',
      'تواصل ومتابعة أقل منهجية يعني احتفاظ أضعف',
      'اعتماد كبير على السوق بدل بناء ولاء لعلامتك',
    ],
    switchingReasons: [
      'استقبال ذكي وتواصل آلي يقللان التسرب وعدم الحضور',
      'تسعير أوضح وتكامل عربون وقت الحجز',
      'واجهة عربية/إنجليزية وتجربة RTL سليمة',
      'كاشباك وولاء يرفعان العودة دون خصومات عشوائية',
      'تحكم أكبر بهوية العلامة (White-label)',
      'دعم انتقال أسهل للبيانات الأساسية',
    ],
    topAlternatives: ['booksy', 'vagaro', 'glossgenius', 'square-appointments'],
  },
  {
    slug: 'booksy',
    competitorSlug: 'booksy',
    metaTitle: 'أفضل بديل لـ Booksy لمحترفي التجميل (2026)',
    metaDescription:
      'تجاوزت Booksy؟ ديزي يقدم نظام AI أشمل، تسعير أقل حساسية لنمو الفريق، دعم عربي، وأدوات احتفاظ واكتساب.',
    keywords: ['بديل booksy', 'استبدال booksy'],
    heroTitle: 'تبحث عن بديل لـ Booksy؟',
    heroSubtitle:
      'تجربة جيدة، لكن التسعير لكل مقدم خدمة وAI المحدود قد يعيقان النمو.',
    painPoints: [
      'التسعير لكل مقدم خدمة يصبح مكلفاً مع نمو الفريق',
      'AI قد يكون محدوداً في بعض السيناريوهات',
      'غياب واجهة عربية/RTL في كثير من الخيارات',
      'أدوات احتفاظ/ولاء ليست دائمًا جزءاً أساسياً',
    ],
    switchingReasons: [
      'AI عملي: استقبال + تذكير + متابعة + جدولة',
      'دعم عربي/إنجليزي مناسب للخليج',
      'أدوات كاشباك/إحالات/ولاء ضمن المنصة',
      'White-label لتقوية العلامة',
    ],
    topAlternatives: ['fresha', 'vagaro', 'glossgenius', 'boulevard'],
  },
  {
    slug: 'vagaro',
    competitorSlug: 'vagaro',
    metaTitle: 'أفضل بديل لـ Vagaro للصالونات المتنامية (2026)',
    metaDescription:
      'تبحث عن أكثر من تشغيل يومي؟ ديزي يضيف AI ودعم عربي وأدوات اكتساب/احتفاظ لا يقدمها Vagaro بنفس العمق.',
    keywords: ['بديل vagaro', 'استبدال vagaro'],
    heroTitle: 'تبحث عن بديل لـ Vagaro؟',
    heroSubtitle:
      'يدير العمل جيداً، لكن النمو يحتاج طبقة اكتساب واحتفاظ وAI.',
    painPoints: [
      'تركيز أكبر على التشغيل مقابل أدوات نمو أقل',
      'قد تتراكم تكلفة إضافات/وحدات حسب احتياجك',
      'غياب/ضعف دعم العربية في كثير من السيناريوهات',
    ],
    switchingReasons: [
      'AI يساعد في استقبال وتواصل وجدولة',
      'أدوات نمو واحتفاظ (كاشباك/إحالات/ولاء)',
      'واجهة عربية/إنجليزية',
      'تحكم بالعلامة عبر White-label',
    ],
    topAlternatives: ['fresha', 'booksy', 'boulevard', 'glossgenius'],
  },
  {
    slug: 'glossgenius',
    competitorSlug: 'glossgenius',
    metaTitle: 'أفضل بديل لـ GlossGenius للمحترفين (2026)',
    metaDescription:
      'تريد أكثر من أداة جميلة؟ ديزي يضيف AI واكتساب/احتفاظ ودعم عربي مع قابلية نمو لفريق.',
    keywords: ['بديل glossgenius', 'استبدال glossgenius'],
    heroTitle: 'تبحث عن بديل لـ GlossGenius؟',
    heroSubtitle:
      'تصميم جميل وبساطة، لكن أدوات النمو واللغة والتوسع قد تكون محدودة.',
    painPoints: [
      'مناسب أكثر للمستقلين من الفرق',
      'أدوات AI/النمو قد تكون محدودة أو مرتبطة بباقات',
      'دعم العربية/الخليج ليس محوراً في كثير من الأدوات',
    ],
    switchingReasons: [
      'AI شامل ضمن التشغيل اليومي',
      'واجهة عربية/إنجليزية',
      'سوق + كاشباك + ولاء لرفع الاحتفاظ',
      'قابلية دعم فريق مع نمو العمل',
    ],
    topAlternatives: ['fresha', 'booksy', 'boulevard', 'vagaro'],
  },
  {
    slug: 'mindbody',
    competitorSlug: 'mindbody',
    metaTitle: 'أفضل بديل حديث لـ Mindbody للصالونات (2026)',
    metaDescription:
      'تريد منصة أحدث من Mindbody؟ ديزي يقدم AI، تسعير أوضح، ودعم عربي دون تعقيد المنصات القديمة.',
    keywords: ['بديل mindbody', 'استبدال mindbody'],
    heroTitle: 'تبحث عن بديل لـ Mindbody؟',
    heroSubtitle:
      'واجهة قديمة وأسعار مرتفعة وتعقيد، تدفع الأعمال لحلول أحدث.',
    painPoints: [
      'تعقيد أعلى وإعداد أطول',
      'تكلفة مرتفعة مقارنة بحلول أحدث',
      'تجربة عربية/RTL ليست محوراً',
    ],
    switchingReasons: [
      'واجهة حديثة وAI عملي',
      'دعم عربي/إنجليزي',
      'تجربة علامة أقوى عبر White-label',
      'أدوات احتفاظ واكتساب ضمن منصة واحدة',
    ],
    topAlternatives: ['fresha', 'vagaro', 'boulevard', 'booksy'],
  },
  {
    slug: 'boulevard',
    competitorSlug: 'boulevard',
    metaTitle: 'أفضل بديل لـ Boulevard بقيمة أفضل (2026)',
    metaDescription:
      'تبحث عن قيمة أعلى؟ ديزي يقدم AI وأدوات نمو ودعم عربي بتسعير أوضح مقارنة بمنصات Premium.',
    keywords: ['بديل boulevard'],
    heroTitle: 'تبحث عن بديل لـ Boulevard؟',
    heroSubtitle:
      'تجربة Premium قد تأتي بسعر Premium، بينما يمكن الحصول على AI ونمو بقيمة أفضل.',
    painPoints: [
      'تسعير مرتفع لبعض الفرق',
      'أدوات اكتساب/احتفاظ ليست دائمًا جزءاً أساسياً',
      'دعم الخليج/العربية قد يكون محدوداً',
    ],
    switchingReasons: [
      'AI ضمن التشغيل اليومي',
      'سوق + كاشباك لرفع الاكتساب والاحتفاظ',
      'واجهة عربية/إنجليزية',
      'White-label لتجربة علامة قوية',
    ],
    topAlternatives: ['mangomint', 'vagaro', 'glossgenius', 'booksy'],
  },
  {
    slug: 'mangomint',
    competitorSlug: 'mangomint',
    metaTitle: 'أفضل بديل لـ Mangomint: نمو + AI (2026)',
    metaDescription:
      'تريد أكثر من تشغيل نظيف؟ ديزي يضيف AI وسوق وكاشباك ودعم عربي فوق إدارة الصالون.',
    keywords: ['بديل mangomint'],
    heroTitle: 'تبحث عن بديل لـ Mangomint؟',
    heroSubtitle:
      'تشغيل ممتاز، لكن أين أدوات الاكتساب والاحتفاظ واللغة؟',
    painPoints: [
      'تركيز على التشغيل دون طبقة اكتساب/احتفاظ كافية',
      'دعم العربية/الخليج ليس محوراً',
    ],
    switchingReasons: [
      'AI + سوق + كاشباك + ولاء',
      'واجهة عربية/إنجليزية',
      'أدوات نمو بجانب التشغيل',
    ],
    topAlternatives: ['boulevard', 'vagaro', 'glossgenius'],
  },
  {
    slug: 'square-appointments',
    competitorSlug: 'square-appointments',
    metaTitle: 'أفضل بديل لـ Square Appointments للصالونات (2026)',
    metaDescription:
      'تجاوزت جدولة عامة؟ ديزي يقدم ميزات مخصصة للتجميل مع AI وسوق ودعم عربي.',
    keywords: ['بديل square appointments'],
    heroTitle: 'تبحث عن بديل لـ Square Appointments؟',
    heroSubtitle:
      'POS ممتاز، لكن جدولة عامة لا تكفي لأعمال تجميل تريد النمو.',
    painPoints: [
      'جدولة عامة غير مخصصة للتجميل',
      'غياب AI وأدوات اكتساب/احتفاظ مدمجة',
      'غياب تجربة عربية/RTL في كثير من الخيارات',
    ],
    switchingReasons: [
      'منصة تجميل كاملة: حجز + تواصل + دفع + AI',
      'سوق + كاشباك لرفع الاكتساب والعودة',
      'واجهة عربية/إنجليزية',
    ],
    topAlternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius'],
  },
  {
    slug: 'phorest',
    competitorSlug: 'phorest',
    metaTitle: 'أفضل بديل لـ Phorest: نمو مدعوم بالذكاء الاصطناعي (2026)',
    metaDescription:
      'تبحث عن AI وسوق ودعم عربي مع أدوات CRM؟ ديزي يجمعها ضمن منصة واحدة.',
    keywords: ['بديل phorest'],
    heroTitle: 'تبحث عن بديل لـ Phorest؟',
    heroSubtitle:
      'CRM قوي، لكن التحول الآن نحو AI والاكتساب يتطلب طبقة إضافية.',
    painPoints: [
      'تركيز على أسواق محددة',
      'غياب/ضعف واجهة عربية في كثير من الحلول',
      'غياب سوق اكتشاف مدمج في بعض المنصات',
    ],
    switchingReasons: [
      'AI عملي + سوق + كاشباك',
      'واجهة عربية/إنجليزية',
      'تواصل متعدد القنوات يتجاوز البريد فقط',
    ],
    topAlternatives: ['fresha', 'vagaro', 'booksy'],
  },
  {
    slug: 'acuity-scheduling',
    competitorSlug: 'acuity-scheduling',
    metaTitle: 'أفضل بديل لـ Acuity Scheduling للصالونات (2026)',
    metaDescription:
      'تحتاج أكثر من جدولة؟ ديزي يقدم POS وCRM وAI وسوق ودعم عربي ضمن منصة تجميل كاملة.',
    keywords: ['بديل acuity scheduling'],
    heroTitle: 'تبحث عن بديل لـ Acuity Scheduling؟',
    heroSubtitle:
      'جدولة ممتازة، لكن عملك يحتاج POS وCRM واحتفاظ واكتساب أيضاً.',
    painPoints: [
      'جدولة فقط دون منظومة صالون كاملة',
      'غياب سوق اكتشاف وأدوات احتفاظ مدمجة',
      'تجربة عربية/RTL ليست محوراً',
    ],
    switchingReasons: [
      'منصة كاملة: حجز + دفع + تواصل + AI',
      'سوق + كاشباك + ولاء',
      'واجهة عربية/إنجليزية',
    ],
    topAlternatives: ['vagaro', 'fresha', 'glossgenius'],
  },
  {
    slug: 'timely',
    competitorSlug: 'timely',
    metaTitle: 'أفضل بديل لـ Timely: تسعير ثابت + AI (2026)',
    metaDescription:
      'تعبت من تسعير حسب الموظف؟ ديزي يقدم تسعيراً أوضح وAI ودعم عربي مع أدوات نمو.',
    keywords: ['بديل timely'],
    heroTitle: 'تبحث عن بديل لـ Timely؟',
    heroSubtitle:
      'واجهة نظيفة، لكن التسعير حسب الموظف وغياب AI يحدان من نمو الفرق.',
    painPoints: [
      'التسعير يتضخم مع كل توظيف',
      'غياب AI عملي في التشغيل اليومي',
      'تركيز أسواق محددة',
    ],
    switchingReasons: [
      'AI شامل ضمن المنصة',
      'تسعير لا يعاقب نمو الفريق',
      'واجهة عربية/إنجليزية',
      'سوق + كاشباك للاكتساب والاحتفاظ',
    ],
    topAlternatives: ['vagaro', 'fresha', 'booksy'],
  },
  {
    slug: 'zenoti',
    competitorSlug: 'zenoti',
    metaTitle: 'أفضل بديل لـ Zenoti للصالونات والسبا (2026)',
    metaDescription:
      'Zenoti قد يكون معقداً ومكلفاً بعقود. ديزي يقدم AI ونمواً ودعماً عربياً بقيمة وإعداد أسرع دون تعقيد المؤسسات.',
    keywords: ['بديل zenoti'],
    heroTitle: 'تبحث عن بديل لـ Zenoti؟',
    heroSubtitle:
      'حل مؤسسي قوي، لكنه قد يكون مبالغاً فيه من حيث التعقيد والتكلفة.',
    painPoints: [
      'تعقيد مؤسسي وإعداد طويل',
      'تسعير غير واضح/عقود',
      'تجربة عربية/RTL ليست دائمًا متاحة كما تتوقع',
      'غياب سوق اكتشاف وكاشباك في كثير من الحلول',
    ],
    switchingReasons: [
      'AI استقبال وتشغيل دون تعقيد مؤسسي',
      'واجهة عربية/إنجليزية أصلية',
      'سوق + كاشباك + أدوات نمو',
      'إعداد أسرع وتسعير أوضح',
    ],
    topAlternatives: ['fresha', 'boulevard', 'mindbody', 'vagaro'],
  },
  {
    slug: 'setmore',
    competitorSlug: 'setmore',
    metaTitle: 'أفضل بديل لـ Setmore لأعمال التجميل (2026)',
    metaDescription:
      'تجاوزت جدولة مجانية؟ ديزي يقدم AI وPOS وCRM وسوق ودعم عربي ضمن منصة تجميل كاملة.',
    keywords: ['بديل setmore'],
    heroTitle: 'تبحث عن بديل لـ Setmore؟',
    heroSubtitle:
      'جدولة مجانية جيدة كبداية، لكن النمو يحتاج أدوات تخصصية.',
    painPoints: [
      'حل عام غير مخصص للتجميل',
      'غياب AI وأدوات اكتساب/احتفاظ متقدمة',
      'تسعير/محدوديات قد تتضخم مع نمو الفريق',
      'غياب دعم عربي قوي وتجربة RTL أصلية',
    ],
    switchingReasons: [
      'AI استقبال وتواصل وجدولة',
      'سوق + كاشباك + ولاء',
      'واجهة عربية/إنجليزية',
      'White-label وتجربة علامة أقوى',
    ],
    topAlternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius'],
  },
  {
    slug: 'simplybook-me',
    competitorSlug: 'simplybook-me',
    metaTitle: 'أفضل بديل لـ SimplyBook.me للصالونات (2026)',
    metaDescription:
      'بدلاً من وحدات وإضافات كثيرة، ديزي يقدم AI وسوق ودعم عربي وكل ما يحتاجه الصالون ضمن منصة واحدة.',
    keywords: ['بديل simplybook', 'بديل simplybook.me'],
    heroTitle: 'تبحث عن بديل لـ SimplyBook.me؟',
    heroSubtitle:
      'مرونة الإضافات قد تتحول لتعقيد وتكلفة عندما تحتاج لكل شيء.',
    painPoints: [
      'حل عام غير مخصص للتجميل',
      'تعقيد وحدات/إضافات',
      'AI محدود أو غير موجود في كثير من السيناريوهات',
      'تجربة عربية مترجمة لا تعني RTL جيداً',
    ],
    switchingReasons: [
      'منصة تجميل كاملة بدون وحدات مدفوعة متفرقة',
      'AI عملي + سوق + كاشباك',
      'واجهة عربية/إنجليزية أصلية مع RTL',
      'White-label لتجربة احترافية',
    ],
    topAlternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius'],
  },
];

// =============================================================================
// Best Alternatives Pages
// =============================================================================

export const bestAlternativesPages: BestAlternativesPageData[] = [
  {
    slug: 'best-fresha-alternatives',
    competitorSlug: 'fresha',
    metaTitle: 'أفضل بدائل Fresha للصالونات (2026)',
    metaDescription:
      'قارن أفضل بدائل Fresha: AI أفضل، تسعير أوضح، ودعم عربي لأعمال التجميل.',
    keywords: ['بدائل fresha', 'أفضل بدائل fresha'],
    heroTitle: 'أفضل بدائل Fresha في 2026',
    heroSubtitle:
      'إذا كانت الرسوم المتراكمة والاعتماد على السوق يزعجانك، هذه بدائل قوية للنمو.',
    intro:
      'Fresha مشهور كسوق، لكن نموذج الرسوم قد يصبح مكلفاً مع نمو العمل، ومع غياب طبقة AI وأدوات الاحتفاظ قد تبحث عن بديل. هذه بدائل شائعة حسب احتياجك.',
    alternatives: ['booksy', 'vagaro', 'glossgenius', 'boulevard', 'mangomint', 'square-appointments'],
    bestFor: {
      booksy: 'الأفضل لمستقلين يفضلون الجوال',
      vagaro: 'الأفضل للميزات التشغيلية الشاملة',
      glossgenius: 'الأفضل للمستقلين الباحثين عن بساطة',
      boulevard: 'الأفضل لتجارب Premium',
      mangomint: 'الأفضل لتشغيل نظيف وواجهة ممتازة',
      'square-appointments': 'الأفضل لمن يستخدم Square للدفع',
    },
    daisyEdge:
      'الكثير من البدائل تحسن التشغيل أو السوق، لكن ديزي يجمع AI استقبال/تواصل + سوق + كاشباك + واجهة عربية/إنجليزية ضمن منصة واحدة مع White-label وتسعير أوضح.',
  },
  {
    slug: 'best-booksy-alternatives',
    competitorSlug: 'booksy',
    metaTitle: 'أفضل بدائل Booksy لمحترفي التجميل (2026)',
    metaDescription:
      'بدائل Booksy لفرق ومحترفين يريدون AI أعمق وتسعيراً أوضح ودعماً عربياً.',
    keywords: ['بدائل booksy', 'أفضل بدائل booksy'],
    heroTitle: 'أفضل بدائل Booksy في 2026',
    heroSubtitle:
      'إذا كان تسعير كل مقدم خدمة وAI المحدود يعيقانك، هذه خيارات أفضل.',
    intro:
      'Booksy مناسب لكثير من المستقلين، لكنه قد يصبح مكلفاً مع الفرق، وقد لا يقدم طبقة AI ونمو كافية لبعض الأعمال. إليك بدائل حسب احتياجك.',
    alternatives: ['fresha', 'vagaro', 'glossgenius', 'boulevard', 'mangomint', 'square-appointments'],
    bestFor: {
      fresha: 'الأفضل للاكتشاف عبر سوق كبير',
      vagaro: 'الأفضل لمن يريد منصة تشغيل شاملة',
      glossgenius: 'الأفضل للمستقلين الباحثين عن تجربة بسيطة',
      boulevard: 'الأفضل للأعمال Premium',
      mangomint: 'الأفضل لتشغيل نظيف دون تعقيد',
      'square-appointments': 'الأفضل لمن لديه POS قوي ويريد جدولة كبداية',
    },
    daisyEdge:
      'ديزي يضيف AI عملي + واجهة عربية/RTL + أدوات كاشباك/ولاء/إحالات، مع قابلية نمو لفريق دون تعقيد.',
  },
  {
    slug: 'best-vagaro-alternatives',
    competitorSlug: 'vagaro',
    metaTitle: 'أفضل بدائل Vagaro للصالونات (2026)',
    metaDescription:
      'بدائل Vagaro لمن يريد أدوات نمو وAI ودعماً عربياً بجانب التشغيل اليومي.',
    keywords: ['بدائل vagaro'],
    heroTitle: 'أفضل بدائل Vagaro في 2026',
    heroSubtitle:
      'إذا كنت تريد منصة تساعدك على النمو لا الإدارة فقط، هذه البدائل مناسبة.',
    intro:
      'Vagaro قوي في التشغيل، لكن كثيراً من الأعمال تريد طبقة اكتساب/احتفاظ وAI ودعماً عربياً. هذه بدائل شائعة حسب الحاجة.',
    alternatives: ['fresha', 'booksy', 'boulevard', 'glossgenius', 'mangomint', 'square-appointments'],
    bestFor: {
      fresha: 'الأفضل لسوق واكتشاف كبير',
      booksy: 'الأفضل للجوال للمستقلين',
      boulevard: 'الأفضل لتجربة Premium',
      glossgenius: 'الأفضل للمستقلين الباحثين عن بساطة',
      mangomint: 'الأفضل لتشغيل نظيف',
      'square-appointments': 'الأفضل لمن يستخدم Square',
    },
    daisyEdge:
      'ديزي يجمع AI واستقبال وتواصل + سوق + كاشباك/ولاء مع واجهة عربية، ما يرفع الاحتفاظ والاكتساب دون أدوات إضافية.',
  },
  {
    slug: 'best-glossgenius-alternatives',
    competitorSlug: 'glossgenius',
    metaTitle: 'أفضل بدائل GlossGenius (2026)',
    metaDescription:
      'بدائل GlossGenius لمن يريد AI أعمق وأدوات نمو ودعماً عربياً مع قابلية توسع.',
    keywords: ['بدائل glossgenius'],
    heroTitle: 'أفضل بدائل GlossGenius في 2026',
    heroSubtitle:
      'إذا كانت البساطة لا تكفي وحدها، هذه بدائل تضيف نموّاً.',
    intro:
      'GlossGenius ممتاز للمستقلين الباحثين عن بساطة، لكن بعض الأعمال تحتاج اكتساباً واحتفاظاً وواجهة عربية. هذه بدائل حسب الحاجة.',
    alternatives: ['fresha', 'booksy', 'vagaro', 'boulevard', 'mangomint', 'square-appointments'],
    bestFor: {
      fresha: 'الأفضل للاكتشاف عبر سوق',
      booksy: 'الأفضل لتجربة جوال',
      vagaro: 'الأفضل للميزات التشغيلية',
      boulevard: 'الأفضل لـ Premium',
      mangomint: 'الأفضل لتشغيل نظيف',
      'square-appointments': 'الأفضل كبداية عامة',
    },
    daisyEdge:
      'ديزي يجمع AI + سوق + كاشباك + واجهة عربية/RTL، ما يحول التسويق والسمعة إلى حجوزات فعلية.',
  },
  {
    slug: 'best-mindbody-alternatives',
    competitorSlug: 'mindbody',
    metaTitle: 'أفضل بدائل Mindbody (2026)',
    metaDescription:
      'بدائل Mindbody بواجهة أحدث وتسعير أوضح وAI ودعم عربي.',
    keywords: ['بدائل mindbody'],
    heroTitle: 'أفضل بدائل Mindbody في 2026',
    heroSubtitle:
      'تريد واجهة أحدث وتعقيد أقل؟ هذه بدائل قوية.',
    intro:
      'Mindbody منصة تاريخية، لكن أسعارها وتعقيدها يدفعان أعمالاً لحلول أحدث ومرنة وأكثر ملاءمة لأسواق متعددة. هذه بدائل شائعة.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'boulevard', 'glossgenius', 'mangomint'],
    bestFor: {
      fresha: 'الأفضل لمن يريد سوقاً كنقطة بداية',
      vagaro: 'الأفضل لمن يريد تشغيل شامل',
      booksy: 'الأفضل لتجربة جوال',
      boulevard: 'الأفضل لـ Premium',
      glossgenius: 'الأفضل للمستقلين',
      mangomint: 'الأفضل لتشغيل نظيف',
    },
    daisyEdge:
      'ديزي يضيف واجهة عربية/RTL + AI عملي + سوق + كاشباك ضمن منصة واحدة، مع White-label.',
  },
  {
    slug: 'best-boulevard-alternatives',
    competitorSlug: 'boulevard',
    metaTitle: 'أفضل بدائل Boulevard بقيمة أفضل (2026)',
    metaDescription:
      'بدائل Boulevard لمن يريد AI وأدوات نمو بتكلفة أكثر قابلية.',
    keywords: ['بدائل boulevard'],
    heroTitle: 'أفضل بدائل Boulevard في 2026',
    heroSubtitle:
      'Premium ليس دائمًا يعني أفضل قيمة. هذه البدائل تضيف AI ونمو.',
    intro:
      'Boulevard قوي لتجارب Premium، لكن كثيراً من الأعمال تريد قيمة أعلى وأدوات نمو وAI ودعماً عربياً. هذه بدائل شائعة.',
    alternatives: ['vagaro', 'mangomint', 'glossgenius', 'booksy'],
    bestFor: {
      vagaro: 'الأفضل لمن يريد منصة تشغيل شاملة',
      mangomint: 'الأفضل لتجربة UI نظيفة',
      glossgenius: 'الأفضل للمستقلين',
      booksy: 'الأفضل لتجربة جوال',
    },
    daisyEdge:
      'ديزي يقدم AI استقبال/تواصل + سوق + كاشباك + واجهة عربية/RTL ضمن منصة واحدة، بقيمة أفضل للفرق.',
  },
  {
    slug: 'best-mangomint-alternatives',
    competitorSlug: 'mangomint',
    metaTitle: 'أفضل بدائل Mangomint مع أدوات نمو (2026)',
    metaDescription:
      'بدائل Mangomint لمن يريد تشغيل نظيف مع AI واكتساب/احتفاظ.',
    keywords: ['بدائل mangomint'],
    heroTitle: 'أفضل بدائل Mangomint في 2026',
    heroSubtitle:
      'تشغيل ممتاز، لكن بدون طبقة اكتساب واحتفاظ يصبح النمو أصعب.',
    intro:
      'Mangomint خيار Premium للتشغيل، لكن كثيراً من الأعمال تريد سوقاً أو أدوات احتفاظ أو دعماً عربياً. هذه بدائل حسب الحاجة.',
    alternatives: ['boulevard', 'vagaro', 'glossgenius', 'booksy'],
    bestFor: {
      boulevard: 'الأفضل لتجربة Premium',
      vagaro: 'الأفضل لميزات تشغيل كثيرة',
      glossgenius: 'الأفضل للمستقلين',
      booksy: 'الأفضل للجوال',
    },
    daisyEdge:
      'ديزي يضيف سوق + كاشباك/ولاء + AI + واجهة عربية/RTL فوق التشغيل، ما يجعله مناسباً للنمو.',
  },
  {
    slug: 'best-square-appointments-alternatives',
    competitorSlug: 'square-appointments',
    metaTitle: 'أفضل بدائل Square Appointments للصالونات (2026)',
    metaDescription:
      'بدائل جدولة عامة بحلول مخصصة للتجميل تشمل AI وسوق وأدوات احتفاظ.',
    keywords: ['بدائل square appointments'],
    heroTitle: 'أفضل بدائل Square Appointments في 2026',
    heroSubtitle:
      'الدفع قوي، لكن التجميل يحتاج منصة تخصصية.',
    intro:
      'Square Appointments جدولة عامة مع POS ممتاز، لكنه ليس مصمماً للتفاصيل التشغيلية للتجميل ولا لأدوات اكتساب واحتفاظ. هذه بدائل مخصصة.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius', 'boulevard', 'mangomint'],
    bestFor: {
      fresha: 'الأفضل لسوق واكتشاف',
      vagaro: 'الأفضل لمن يريد ميزات تشغيل كثيرة',
      booksy: 'الأفضل للمستقلين بتجربة جوال',
      glossgenius: 'الأفضل لمن يريد بساطة',
      boulevard: 'الأفضل لـ Premium',
      mangomint: 'الأفضل لتشغيل نظيف',
    },
    daisyEdge:
      'ديزي يقدم AI عملي + سوق + كاشباك + واجهة عربية/RTL ضمن منصة واحدة، ما يتجاوز مجرد الجدولة.',
  },
  {
    slug: 'best-zenoti-alternatives',
    competitorSlug: 'zenoti',
    metaTitle: 'أفضل بدائل Zenoti للصالونات والسبا (2026)',
    metaDescription:
      'بدائل Zenoti بتعقيد أقل وتسعير أوضح وإعداد أسرع مع دعم عربي.',
    keywords: ['بدائل zenoti'],
    heroTitle: 'أفضل بدائل Zenoti في 2026',
    heroSubtitle:
      'حلول مؤسسية قوية لكن بثمن وتعقيد. هذه بدائل عملية.',
    intro:
      'Zenoti منصة مؤسسية قوية، لكن كثيراً من الأعمال تحتاج AI وتشغيل بدون عقود وتعقيد طويل. هذه بدائل شائعة.',
    alternatives: ['boulevard', 'mangomint', 'mindbody', 'fresha', 'vagaro', 'phorest'],
    bestFor: {
      boulevard: 'الأفضل لتجربة Premium متعددة الفروع',
      mangomint: 'الأفضل لتشغيل Premium دون تعقيد',
      mindbody: 'الأفضل لسيناريوهات عافية/لياقة',
      fresha: 'الأفضل للسوق كنقطة بداية',
      vagaro: 'الأفضل لميزات تشغيل كثيرة',
      phorest: 'الأفضل لمن يركز على CRM في أسواق معينة',
    },
    daisyEdge:
      'ديزي يقدم AI + سوق + كاشباك + واجهة عربية/RTL دون عبء مؤسسي، مع White-label.',
  },
  {
    slug: 'best-acuity-alternatives',
    competitorSlug: 'acuity-scheduling',
    metaTitle: 'أفضل بدائل Acuity Scheduling للصالونات (2026)',
    metaDescription:
      'بدائل تتجاوز الجدولة إلى منصة صالون كاملة مع AI وسوق وCRM.',
    keywords: ['بدائل acuity', 'بدائل acuity scheduling'],
    heroTitle: 'أفضل بدائل Acuity في 2026',
    heroSubtitle:
      'إذا كانت الجدولة وحدها لا تكفي، هذه بدائل مناسبة للتجميل.',
    intro:
      'Acuity ممتاز كجدولة عامة، لكن أعمال التجميل تحتاج POS وCRM وتواصل واحتفاظ واكتساب. هذه بدائل مخصصة للتجميل.',
    alternatives: ['vagaro', 'fresha', 'glossgenius', 'booksy', 'square-appointments', 'mindbody'],
    bestFor: {
      vagaro: 'الأفضل لمن يريد منصة تشغيل شاملة',
      fresha: 'الأفضل للاكتشاف عبر سوق',
      glossgenius: 'الأفضل للمستقلين',
      booksy: 'الأفضل للجوال',
      'square-appointments': 'الأفضل كبداية عامة مع POS قوي',
      mindbody: 'الأفضل لبعض سيناريوهات العافية',
    },
    daisyEdge:
      'ديزي يقدم منصة كاملة للتجميل: AI استقبال/تواصل + سوق + كاشباك + واجهة عربية/RTL.',
  },
  {
    slug: 'best-phorest-alternatives',
    competitorSlug: 'phorest',
    metaTitle: 'أفضل بدائل Phorest (2026)',
    metaDescription:
      'بدائل Phorest لمن يريد AI وسوق ودعم عربي مع أدوات CRM.',
    keywords: ['بدائل phorest'],
    heroTitle: 'أفضل بدائل Phorest في 2026',
    heroSubtitle:
      'CRM قوي، لكن العالم يتحرك نحو AI والاكتساب.',
    intro:
      'Phorest قوي في CRM في أسواقه، لكن كثيراً من الأعمال تريد AI، اكتساباً عبر سوق، وواجهة عربية. هذه بدائل شائعة.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius', 'boulevard', 'mindbody'],
    bestFor: {
      fresha: 'الأفضل للسوق',
      vagaro: 'الأفضل للتشغيل',
      booksy: 'الأفضل للجوال',
      glossgenius: 'الأفضل للمستقلين',
      boulevard: 'الأفضل لـ Premium',
      mindbody: 'الأفضل لبعض سيناريوهات العافية',
    },
    daisyEdge:
      'ديزي يجمع AI + سوق + كاشباك + واجهة عربية/RTL ضمن منصة واحدة، ما يضيف طبقة نمو واحتفاظ.',
  },
  {
    slug: 'best-timely-alternatives',
    competitorSlug: 'timely',
    metaTitle: 'أفضل بدائل Timely (2026)',
    metaDescription:
      'بدائل Timely لمن يريد تسعيراً لا يعاقب التوظيف مع AI ودعم عربي.',
    keywords: ['بدائل timely'],
    heroTitle: 'أفضل بدائل Timely في 2026',
    heroSubtitle:
      'إذا كان التسعير حسب الموظف يزعجك، هذه بدائل أفضل.',
    intro:
      'Timely خيار نظيف في بعض الأسواق، لكن مع نمو الفريق تريد نموذجاً لا يتضخم مع كل توظيف وتريد AI عملي. هذه بدائل شائعة.',
    alternatives: ['vagaro', 'fresha', 'booksy', 'glossgenius', 'boulevard', 'mangomint'],
    bestFor: {
      vagaro: 'الأفضل لميزات تشغيل كثيرة',
      fresha: 'الأفضل للسوق',
      booksy: 'الأفضل للجوال',
      glossgenius: 'الأفضل للمستقلين',
      boulevard: 'الأفضل لـ Premium',
      mangomint: 'الأفضل لتشغيل نظيف',
    },
    daisyEdge:
      'ديزي يقدم AI + سوق + كاشباك + واجهة عربية/RTL، مع نموذج قيمة يناسب النمو.',
  },
  {
    slug: 'best-setmore-alternatives',
    competitorSlug: 'setmore',
    metaTitle: 'أفضل بدائل Setmore لأعمال التجميل (2026)',
    metaDescription:
      'بدائل جدولة عامة إلى منصة تجميل كاملة مع AI وسوق ودعم عربي.',
    keywords: ['بدائل setmore'],
    heroTitle: 'أفضل بدائل Setmore في 2026',
    heroSubtitle:
      'إذا كنت تريد أكثر من جدولة مجانية، هذه بدائل مخصصة للتجميل.',
    intro:
      'Setmore مناسب كبداية، لكن النمو يتطلب حجز + تواصل + احتفاظ + اكتساب + AI. هذه بدائل شائعة.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius', 'square-appointments', 'acuity-scheduling'],
    bestFor: {
      fresha: 'الأفضل للسوق',
      vagaro: 'الأفضل للتشغيل الشامل',
      booksy: 'الأفضل للجوال',
      glossgenius: 'الأفضل للمستقلين',
      'square-appointments': 'الأفضل لمن يستخدم Square',
      'acuity-scheduling': 'الأفضل لمن يريد جدولة عامة',
    },
    daisyEdge:
      'ديزي يقدم AI استقبال/تواصل + سوق + كاشباك + واجهة عربية/RTL، ما يجعله منصة نمو لا مجرد جدولة.',
  },
  {
    slug: 'best-simplybook-me-alternatives',
    competitorSlug: 'simplybook-me',
    metaTitle: 'أفضل بدائل SimplyBook.me (2026)',
    metaDescription:
      'بدائل SimplyBook.me لمن يريد منصة متكاملة بدون تعقيد وحدات.',
    keywords: ['بدائل simplybook', 'بدائل simplybook.me'],
    heroTitle: 'أفضل بدائل SimplyBook.me في 2026',
    heroSubtitle:
      'إذا كانت الإضافات الكثيرة تعقّد تجربتك، هذه بدائل أبسط.',
    intro:
      'SimplyBook.me يقدم وحدات كثيرة، لكن أعمال التجميل غالباً تريد حلاً متكاملاً دون شراء إضافات متفرقة. هذه بدائل شائعة.',
    alternatives: ['fresha', 'vagaro', 'booksy', 'glossgenius', 'square-appointments', 'acuity-scheduling'],
    bestFor: {
      fresha: 'الأفضل للسوق',
      vagaro: 'الأفضل للتشغيل',
      booksy: 'الأفضل للجوال',
      glossgenius: 'الأفضل للمستقلين',
      'square-appointments': 'الأفضل كبداية عامة',
      'acuity-scheduling': 'الأفضل للجدولة العامة',
    },
    daisyEdge:
      'ديزي يختصر التعقيد: منصة واحدة تضم AI + سوق + كاشباك + واجهة عربية/RTL مع White-label.',
  },
];

// =============================================================================
// Competitor vs Competitor
// =============================================================================

export const competitorVsPages: CompetitorVsPageData[] = [
  {
    slugA: 'fresha',
    slugB: 'booksy',
    combinedSlug: 'fresha-vs-booksy',
    metaTitle: 'Fresha مقابل Booksy: أيهما أفضل للصالونات؟ (2026)',
    metaDescription:
      'قارن Fresha وBooksy: التسعير، الميزات، الاكتشاف، وطبقة الذكاء الاصطناعي. بالإضافة لبديل أقوى للخليج.',
    keywords: ['fresha vs booksy', 'booksy vs fresha'],
    heroTitle: 'Fresha مقابل Booksy',
    heroSubtitle: 'منصتان شائعتان للحجز، لكن أيهما أنسب لعملك؟',
    verdict:
      'Fresha يتفوق في حجم السوق والاكتشاف، وBooksy يتفوق في تجربة الجوال لبعض الفئات. لكن كلاهما عادة يفتقد واجهة عربية وتجربة AI شاملة وأدوات كاشباك/ولاء مدمجة.',
    whoShouldChooseA: [
      'تريد سوقاً كبيراً كقناة اكتساب أساسية',
      'تقبل الرسوم المتراكمة مقابل الاكتشاف',
    ],
    whoShouldChooseB: ['تفضل تجربة جوال أولاً', 'أنت مستقل وتريد بساطة'],
    daisyPitch:
      'ديزي ليس مجرد تشغيل؛ هو منصة نمو تجمع AI استقبال/تواصل + سوق + كاشباك + واجهة عربية/RTL مع White-label.',
  },
  {
    slugA: 'fresha',
    slugB: 'vagaro',
    combinedSlug: 'fresha-vs-vagaro',
    metaTitle: 'Fresha مقابل Vagaro: سوق مقابل ميزات تشغيل (2026)',
    metaDescription:
      'قارن Fresha وVagaro: الرسوم، الميزات، السوق، وأي نموذج يناسب صالونك.',
    keywords: ['fresha vs vagaro', 'vagaro vs fresha'],
    heroTitle: 'Fresha مقابل Vagaro',
    heroSubtitle: 'سوق مع رسوم متراكمة مقابل منصة تشغيل بميزات كثيرة.',
    verdict:
      'Fresha يميل للاكتشاف عبر السوق لكنه قد يضيف رسوماً متراكمة. Vagaro يقدم ميزات تشغيل كثيرة. كلاهما عادة أضعف في واجهة عربية وAI شامل وأدوات كاشباك مدمجة.',
    whoShouldChooseA: ['تريد اكتشافاً عبر السوق كأولوية', 'تقبل نموذج الرسوم مقابل السوق'],
    whoShouldChooseB: ['تريد ميزات تشغيل كثيرة', 'تعمل في سوق يركز عليه Vagaro'],
    daisyPitch:
      'ديزي يجمع الاكتشاف والاحتفاظ وAI في منصة واحدة مناسبة للخليج مع واجهة عربية/RTL.',
  },
  {
    slugA: 'booksy',
    slugB: 'vagaro',
    combinedSlug: 'booksy-vs-vagaro',
    metaTitle: 'Booksy مقابل Vagaro: جوال مقابل منصة شاملة (2026)',
    metaDescription:
      'قارن Booksy وVagaro: التسعير، الميزات، وملاءمة كل منصة لصالونك.',
    keywords: ['booksy vs vagaro', 'vagaro vs booksy'],
    heroTitle: 'Booksy مقابل Vagaro',
    heroSubtitle: 'تطبيق جوال مقابل منصة تشغيل بميزات كثيرة.',
    verdict:
      'Booksy مناسب للمستقلين وتجربة الجوال. Vagaro يقدم ميزات تشغيل أكثر. كلاهما عادة لا يقدم طبقة AI واحتفاظ واكتساب بنفس شمول ديزي ولا واجهة عربية أصلية.',
    whoShouldChooseA: ['تفضل الجوال', 'أنت مستقل وتريد بساطة'],
    whoShouldChooseB: ['تريد ميزات تشغيل أكثر', 'تحتاج إدارة فريق بشكل أوسع'],
    daisyPitch:
      'ديزي يضيف AI واستقبال وتواصل + سوق + كاشباك/ولاء مع واجهة عربية/RTL.',
  },
  {
    slugA: 'vagaro',
    slugB: 'mindbody',
    combinedSlug: 'vagaro-vs-mindbody',
    metaTitle: 'Vagaro مقابل Mindbody: منتصف السوق مقابل منصة قديمة (2026)',
    metaDescription:
      'قارن Vagaro وMindbody: السعر، التعقيد، والميزات، وأي خيار يناسب عملك.',
    keywords: ['vagaro vs mindbody', 'mindbody vs vagaro'],
    heroTitle: 'Vagaro مقابل Mindbody',
    heroSubtitle: 'منصة تشغيل بأسعار أوضح مقابل تعقيد وأسعار أعلى.',
    verdict:
      'Vagaro غالباً أبسط وأوضح سعراً من Mindbody. Mindbody قوي تاريخياً لكن قد يكون أثقل وتعقيده أعلى. كلاهما عادة ليس الأفضل لمن يريد واجهة عربية وAI واحتفاظ مدمج.',
    whoShouldChooseA: ['تريد تشغيل واضح وتكلفة أقل', 'تفضل منصة أبسط'],
    whoShouldChooseB: ['تحتاج منظومة Mindbody الحالية', 'تقبل تعقيداً أعلى'],
    daisyPitch:
      'ديزي يقدم تجربة أحدث مع AI وسوق وكاشباك وواجهة عربية/RTL.',
  },
  {
    slugA: 'glossgenius',
    slugB: 'boulevard',
    combinedSlug: 'glossgenius-vs-boulevard',
    metaTitle: 'GlossGenius مقابل Boulevard: مستقلون مقابل Premium',
    metaDescription:
      'قارن GlossGenius وBoulevard: لمن كل منصة؟ وما الذي ينقصها للنمو؟',
    keywords: ['glossgenius vs boulevard', 'boulevard vs glossgenius'],
    heroTitle: 'GlossGenius مقابل Boulevard',
    heroSubtitle: 'بساطة للمستقلين مقابل تجربة Premium.',
    verdict:
      'GlossGenius يميل للمستقلين، وBoulevard يميل للأعمال Premium. لكن كلاهما لا يجمع عادة AI استقبال/تواصل + سوق + كاشباك + واجهة عربية ضمن منصة واحدة.',
    whoShouldChooseA: ['أنت مستقل وتريد بساطة وتصميم'],
    whoShouldChooseB: ['أنت Premium وتريد تجربة راقية', 'الميزانية مرنة'],
    daisyPitch:
      'ديزي يجمع التشغيل مع أدوات نمو وAI وواجهة عربية/RTL بقيمة أفضل للفرق.',
  },
  {
    slugA: 'fresha',
    slugB: 'glossgenius',
    combinedSlug: 'fresha-vs-glossgenius',
    metaTitle: 'Fresha مقابل GlossGenius: سوق مقابل أداة للمستقلين (2026)',
    metaDescription:
      'قارن Fresha وGlossGenius: اكتشاف السوق مقابل بساطة المستقلين.',
    keywords: ['fresha vs glossgenius'],
    heroTitle: 'Fresha مقابل GlossGenius',
    heroSubtitle: 'سوق كبير مقابل تجربة مصممة للمستقل.',
    verdict:
      'Fresha يتفوق في الاكتشاف عبر السوق، وGlossGenius يتفوق في بساطة للمستقلين. لكن كلاهما عادة لا يقدم منظومة AI + كاشباك + واجهة عربية/RTL مثل ديزي.',
    whoShouldChooseA: ['تريد سوقاً كبيراً'],
    whoShouldChooseB: ['أنت مستقل وتريد بساطة'],
    daisyPitch:
      'ديزي يوازن بين الاكتشاف والاحتفاظ وAI مع واجهة عربية/RTL.',
  },
  {
    slugA: 'booksy',
    slugB: 'glossgenius',
    combinedSlug: 'booksy-vs-glossgenius',
    metaTitle: 'Booksy مقابل GlossGenius: أيهما أفضل للمستقلين؟ (2026)',
    metaDescription:
      'قارن Booksy وGlossGenius للمحترفين المستقلين: الجوال، التسعير، وأدوات النمو.',
    keywords: ['booksy vs glossgenius'],
    heroTitle: 'Booksy مقابل GlossGenius',
    heroSubtitle: 'خياران شائعان للمستقلين، لكن بتركيز مختلف.',
    verdict:
      'Booksy يركز على الجوال وقد يتوسع بسوقه. GlossGenius يركز على بساطة وتصميم. إذا كنت تريد AI وواجهة عربية وأدوات احتفاظ، ديزي يتفوق غالباً.',
    whoShouldChooseA: ['تريد تجربة جوال قوية'],
    whoShouldChooseB: ['تريد بساطة وتصميم'],
    daisyPitch:
      'ديزي يضيف AI استقبال/تواصل + أدوات احتفاظ واكتساب + واجهة عربية/RTL.',
  },
  {
    slugA: 'mindbody',
    slugB: 'boulevard',
    combinedSlug: 'mindbody-vs-boulevard',
    metaTitle: 'Mindbody مقابل Boulevard: قديم مقابل Premium',
    metaDescription:
      'قارن Mindbody وBoulevard: التعقيد، السعر، والملاءمة لصالونات اليوم.',
    keywords: ['mindbody vs boulevard'],
    heroTitle: 'Mindbody مقابل Boulevard',
    heroSubtitle: 'منصة قديمة قوية مقابل تجربة Premium حديثة.',
    verdict:
      'Boulevard غالباً أحدث تجربة من Mindbody. Mindbody قد يكون أثقل وتعقيده أعلى. لكن كلاهما عادة لا يقدم واجهة عربية/RTL وأدوات كاشباك وAI عملي مثل ديزي.',
    whoShouldChooseA: ['تحتاج منظومة Mindbody'],
    whoShouldChooseB: ['تريد تجربة Premium'],
    daisyPitch:
      'ديزي يقدم تجربة أحدث ملائمة للخليج مع AI وسوق وكاشباك.',
  },
  {
    slugA: 'vagaro',
    slugB: 'glossgenius',
    combinedSlug: 'vagaro-vs-glossgenius',
    metaTitle: 'Vagaro مقابل GlossGenius: منصة تشغيل مقابل بساطة',
    metaDescription:
      'قارن Vagaro وGlossGenius: لمنصة تشغيل مقابل أداة بسيطة للمستقلين.',
    keywords: ['vagaro vs glossgenius'],
    heroTitle: 'Vagaro مقابل GlossGenius',
    heroSubtitle: 'تشغيل شامل مقابل بساطة للمستقل.',
    verdict:
      'Vagaro مناسب لميزات تشغيل كثيرة. GlossGenius مناسب للمستقلين. إذا كان هدفك نموّاً في الخليج مع AI وواجهة عربية وأدوات احتفاظ، ديزي أقوى.',
    whoShouldChooseA: ['تريد ميزات تشغيل كثيرة'],
    whoShouldChooseB: ['أنت مستقل وتريد بساطة'],
    daisyPitch:
      'ديزي يجمع التشغيل مع AI + سوق + كاشباك وواجهة عربية/RTL.',
  },
  {
    slugA: 'fresha',
    slugB: 'mindbody',
    combinedSlug: 'fresha-vs-mindbody',
    metaTitle: 'Fresha مقابل Mindbody: سوق مقابل منصة قديمة (2026)',
    metaDescription:
      'قارن Fresha وMindbody: السوق، الرسوم، التعقيد، وأي منصة تناسبك.',
    keywords: ['fresha vs mindbody'],
    heroTitle: 'Fresha مقابل Mindbody',
    heroSubtitle: 'اكتشاف السوق مقابل منظومة قديمة ذات تكلفة أعلى.',
    verdict:
      'Fresha يمنح اكتشافاً عبر السوق لكنه يعتمد على الرسوم. Mindbody قوي تاريخياً لكنه معقد. إذا كانت العربية وAI والنمو أولوية، ديزي يتفوق غالباً.',
    whoShouldChooseA: ['تريد سوقاً كأولوية'],
    whoShouldChooseB: ['تحتاج منظومة Mindbody'],
    daisyPitch:
      'ديزي يجمع اكتساباً واحتفاظاً وAI وواجهة عربية/RTL.',
  },
  {
    slugA: 'booksy',
    slugB: 'boulevard',
    combinedSlug: 'booksy-vs-boulevard',
    metaTitle: 'Booksy مقابل Boulevard: جوال مقابل Premium',
    metaDescription:
      'قارن Booksy وBoulevard: اختلاف كبير في الجمهور والسعر.',
    keywords: ['booksy vs boulevard'],
    heroTitle: 'Booksy مقابل Boulevard',
    heroSubtitle: 'حل للمستقلين مقابل تجربة Premium.',
    verdict:
      'Booksy مناسب للمستقلين والجوال. Boulevard مناسب لمن يريد Premium. إذا كنت تريد AI وواجهة عربية وأدوات نمو، ديزي يجمعها غالباً بقيمة أفضل.',
    whoShouldChooseA: ['أنت مستقل وتفضل الجوال'],
    whoShouldChooseB: ['أنت Premium وتريد تجربة راقية'],
    daisyPitch:
      'ديزي يجمع التشغيل مع AI وسوق وكاشباك وواجهة عربية/RTL.',
  },
  {
    slugA: 'vagaro',
    slugB: 'boulevard',
    combinedSlug: 'vagaro-vs-boulevard',
    metaTitle: 'Vagaro مقابل Boulevard: قيمة مقابل Premium',
    metaDescription:
      'قارن Vagaro وBoulevard: ميزات تشغيل كثيرة مقابل تجربة Premium.',
    keywords: ['vagaro vs boulevard'],
    heroTitle: 'Vagaro مقابل Boulevard',
    heroSubtitle: 'خياران مختلفان في السعر والتموضع.',
    verdict:
      'Vagaro يقدم قيمة بميزات كثيرة. Boulevard يقدم Premium بسعر أعلى. إذا كانت العربية وAI والنمو أولوية، ديزي أقوى غالباً.',
    whoShouldChooseA: ['تريد قيمة وميزات كثيرة'],
    whoShouldChooseB: ['تريد Premium والميزانية مرنة'],
    daisyPitch:
      'ديزي يقدم AI + سوق + كاشباك وواجهة عربية/RTL ضمن منصة واحدة.',
  },
  {
    slugA: 'fresha',
    slugB: 'square-appointments',
    combinedSlug: 'fresha-vs-square-appointments',
    metaTitle: 'Fresha مقابل Square Appointments: سوق مقابل جدولة عامة',
    metaDescription:
      'قارن Fresha (سوق) وSquare Appointments (جدولة عامة مع POS).',
    keywords: ['fresha vs square appointments'],
    heroTitle: 'Fresha مقابل Square Appointments',
    heroSubtitle: 'سوق اكتشاف مقابل جدولة مرتبطة بـ POS.',
    verdict:
      'Fresha يركز على السوق. Square يركز على POS. إذا كنت تريد منصة تجميل كاملة مع AI وواجهة عربية وأدوات احتفاظ، ديزي يجمعها.',
    whoShouldChooseA: ['تريد سوقاً كبيراً'],
    whoShouldChooseB: ['أنت على Square وتريد جدولة بسيطة'],
    daisyPitch:
      'ديزي يجمع الحجز والتواصل والدفع والاحتفاظ والاكتشاف في منصة واحدة.',
  },
  {
    slugA: 'booksy',
    slugB: 'mindbody',
    combinedSlug: 'booksy-vs-mindbody',
    metaTitle: 'Booksy مقابل Mindbody: جوال مقابل منصة قديمة (2026)',
    metaDescription:
      'قارن Booksy وMindbody: لجمهور مختلف ومستوى تعقيد مختلف.',
    keywords: ['booksy vs mindbody'],
    heroTitle: 'Booksy مقابل Mindbody',
    heroSubtitle: 'مستقلون وجوال مقابل منظومة أثقل.',
    verdict:
      'Booksy يميل للمستقلين. Mindbody قد يخدم منظومات عافية أكبر لكن بتعقيد. إذا كانت العربية وAI والنمو مهمة، ديزي خيار قوي.',
    whoShouldChooseA: ['تريد جوال وبساطة'],
    whoShouldChooseB: ['تحتاج منظومة Mindbody'],
    daisyPitch:
      'ديزي يقدم تجربة أحدث مع AI وسوق وكاشباك وواجهة عربية/RTL.',
  },
  {
    slugA: 'booksy',
    slugB: 'square-appointments',
    combinedSlug: 'booksy-vs-square-appointments',
    metaTitle: 'Booksy مقابل Square Appointments: أيهما أنسب للمستقل؟',
    metaDescription:
      'قارن Booksy (جوال) وSquare Appointments (جدولة عامة) للمستقلين.',
    keywords: ['booksy vs square appointments'],
    heroTitle: 'Booksy مقابل Square Appointments',
    heroSubtitle: 'جوال مخصص مقابل جدولة عامة مع POS قوي.',
    verdict:
      'Booksy يميل لتجربة جوال مخصصة. Square مناسب كبداية عامة. إذا كنت تريد AI ودعم عربي وأدوات احتفاظ، ديزي أقوى.',
    whoShouldChooseA: ['تفضل تجربة جوال مخصصة'],
    whoShouldChooseB: ['تستخدم Square وتريد جدولة بسيطة'],
    daisyPitch:
      'ديزي يقدم منصة تجميل كاملة مع AI وسوق وكاشباك وواجهة عربية/RTL.',
  },
  {
    slugA: 'vagaro',
    slugB: 'square-appointments',
    combinedSlug: 'vagaro-vs-square-appointments',
    metaTitle: 'Vagaro مقابل Square Appointments: تشغيل مقابل جدولة عامة',
    metaDescription:
      'قارن Vagaro وSquare Appointments: ميزات تشغيل كثيرة مقابل حل عام.',
    keywords: ['vagaro vs square appointments'],
    heroTitle: 'Vagaro مقابل Square Appointments',
    heroSubtitle: 'منصة تشغيل مقابل جدولة عامة.',
    verdict:
      'Vagaro يقدم ميزات تشغيل أكثر. Square مناسب كبداية عامة. إذا كنت تريد AI واحتفاظ واكتساب وواجهة عربية، ديزي يجمعها.',
    whoShouldChooseA: ['تريد منصة تشغيل شاملة'],
    whoShouldChooseB: ['تريد حل جدولة بسيط مع Square'],
    daisyPitch:
      'ديزي يضيف AI + سوق + كاشباك وواجهة عربية/RTL.',
  },
  {
    slugA: 'glossgenius',
    slugB: 'square-appointments',
    combinedSlug: 'glossgenius-vs-square-appointments',
    metaTitle: 'GlossGenius مقابل Square Appointments: تصميم مقابل حل عام',
    metaDescription:
      'قارن GlossGenius وSquare Appointments للمستقلين: أيهما أفضل تجربة؟',
    keywords: ['glossgenius vs square appointments'],
    heroTitle: 'GlossGenius مقابل Square Appointments',
    heroSubtitle: 'بساطة وتصميم مقابل جدولة عامة.',
    verdict:
      'GlossGenius يميل لتجربة مصممة للمستقلين. Square عام ومناسب كبداية. إذا كانت العربية وAI وأدوات نمو أولوية، ديزي أفضل غالباً.',
    whoShouldChooseA: ['تريد بساطة وتصميم'],
    whoShouldChooseB: ['تريد جدولة عامة مع POS'],
    daisyPitch:
      'ديزي يجمع AI واستقبال وتواصل + سوق + كاشباك وواجهة عربية/RTL.',
  },
  {
    slugA: 'mindbody',
    slugB: 'zenoti',
    combinedSlug: 'mindbody-vs-zenoti',
    metaTitle: 'Mindbody مقابل Zenoti: منصات كبيرة بتعقيد',
    metaDescription:
      'قارن Mindbody وZenoti: تعقيد وتسعير وإعداد، وأين يناسب كل منهما.',
    keywords: ['mindbody vs zenoti', 'zenoti vs mindbody'],
    heroTitle: 'Mindbody مقابل Zenoti',
    heroSubtitle: 'حلول كبيرة بمقايضة التعقيد والتكلفة.',
    verdict:
      'كلتا المنصتين قد تناسبان مؤسسات كبيرة، لكن كثيراً من الأعمال تريد AI وتجربة أحدث دون تعقيد. ديزي يقدم ذلك مع واجهة عربية/RTL.',
    whoShouldChooseA: ['تحتاج منظومة Mindbody'],
    whoShouldChooseB: ['تحتاج منصة مؤسسية متقدمة جداً'],
    daisyPitch:
      'ديزي يقدم AI ونمو وتجربة عربية/RTL دون عبء مؤسسي.',
  },
  {
    slugA: 'zenoti',
    slugB: 'boulevard',
    combinedSlug: 'zenoti-vs-boulevard',
    metaTitle: 'Zenoti مقابل Boulevard: مؤسسي مقابل Premium',
    metaDescription:
      'قارن Zenoti وBoulevard: تعقيد مؤسسي مقابل تجربة Premium.',
    keywords: ['zenoti vs boulevard', 'boulevard vs zenoti'],
    heroTitle: 'Zenoti مقابل Boulevard',
    heroSubtitle: 'حل مؤسسي مقابل تجربة Premium.',
    verdict:
      'Zenoti مؤسسي ومعقد، وBoulevard Premium. إذا كنت تريد AI ونمو مع واجهة عربية وتجربة أبسط، ديزي غالباً خيار أفضل.',
    whoShouldChooseA: ['تحتاج منصة مؤسسية'],
    whoShouldChooseB: ['تريد Premium والميزانية مرنة'],
    daisyPitch:
      'ديزي يوازن بين AI والنمو وقيمة أعلى بواجهة عربية/RTL.',
  },
  {
    slugA: 'acuity-scheduling',
    slugB: 'setmore',
    combinedSlug: 'acuity-vs-setmore',
    metaTitle: 'Acuity مقابل Setmore: جدولة عامة (2026)',
    metaDescription:
      'قارن Acuity وSetmore كحلول جدولة عامة، ومتى تحتاج منصة تجميل كاملة.',
    keywords: ['acuity vs setmore', 'setmore vs acuity'],
    heroTitle: 'Acuity مقابل Setmore',
    heroSubtitle: 'حلّان للجدولة العامة، لكن التجميل يحتاج أكثر.',
    verdict:
      'كلاهما مناسب كبداية للجدولة. إذا كنت تحتاج POS وCRM وتواصل واحتفاظ واكتساب وواجهة عربية/RTL، منصة تخصصية مثل ديزي أقوى.',
    whoShouldChooseA: ['تريد جدولة عامة مرنة'],
    whoShouldChooseB: ['تريد جدولة بسيطة وربما مجانية كبداية'],
    daisyPitch:
      'ديزي يقدم منصة تجميل كاملة مع AI وسوق وكاشباك وواجهة عربية/RTL.',
  },
];

