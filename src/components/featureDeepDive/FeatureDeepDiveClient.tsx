import Link from 'next/link';
import {
  getFeatureDeepDive,
  getRelatedFeatureDeepDives,
} from '@/lib/constants/features/featureDeepDive';
import { FeaturesBreadcrumbSchema } from '@/components/seo/FeaturesBreadcrumbSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { FaqSchema } from '@/components/seo/FaqSchema';

function SoftwareApplicationSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'The Daisy',
    applicationCategory: 'BusinessApplication',
    description,
    url,
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free trial available',
    },
    featureList: name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
import { SolutionCTA } from '@/components/solutionsPage/SolutionCTA';
import { RelatedPages } from '@/components/comparePage/RelatedPages';
import { FeatureHero } from './FeatureHero';
import { OverviewSection } from './OverviewSection';
import { SubFeaturesSection } from './SubFeaturesSection';
import { WorkflowSection } from './WorkflowSection';
import { ComparisonHighlight } from './ComparisonHighlight';
import { UseCasesSection } from './UseCasesSection';
import { IntegrationSection } from './IntegrationSection';
import { AiEnhancementSection } from './AiEnhancementSection';
import { NetworkEffectsSection } from './NetworkEffectsSection';
import { DemoPlaceholder } from './DemoPlaceholder';

type DeepDiveLocale = 'en' | 'ar';

const uiStrings: Record<
  DeepDiveLocale,
  {
    features: string;
    faq: string;
    readyToExperience: (name: string) => string;
    ctaSubtext: (name: string, userType: string) => string;
    business: string;
    professional: string;
    overview: {
      whatIsTitle: (name: string) => string;
      keyCapabilitiesLabel: string;
      whyNeedTitle: (name: string) => string;
      businessImpactLabel: string;
    };
    subFeatures: {
      title: (name: string) => string;
      subtitle: string;
      keyBenefitLabel: string;
      howItWorks: string;
    };
    workflow: {
      heading: string;
      subtitle: string;
    };
    comparison: {
      heading: string;
      subtitle: string;
      areaLabel: string;
      daisyLabel: string;
      typicalLabel: string;
    };
    useCases: {
      heading: string;
      subtitle: string;
    };
    integration: {
      heading: string;
      subtitle: string;
      explore: string;
    };
    aiEnhancement: {
      badge: string;
      heading: string;
      subtitle: string;
    };
    networkEffects: {
      badge: string;
      heading: string;
    };
    demo: {
      heading: (name: string) => string;
      paragraph: (name: string) => string;
    };
  }
> = {
  en: {
    features: 'Features',
    faq: 'Frequently Asked Questions',
    readyToExperience: (name: string) => `Ready to Experience ${name}?`,
    ctaSubtext: (name: string, userType: string) =>
      `See how Daisy's ${name} features can transform your ${userType === 'business' ? 'business' : 'career'}. Start your free trial today.`,
    business: 'Business',
    professional: 'Professional',
    overview: {
      whatIsTitle: (name: string) => `What Is ${name} for Beauty Businesses?`,
      keyCapabilitiesLabel: 'Key capabilities:',
      whyNeedTitle: (name: string) =>
        `Why Do Beauty Businesses Need ${name}?`,
      businessImpactLabel: 'The Business Impact',
    },
    subFeatures: {
      title: (name: string) => `How Does The Daisy's ${name} Work?`,
      subtitle:
        'Every tool is designed to save beauty businesses time and grow revenue.',
      keyBenefitLabel: 'Key benefit:',
      howItWorks: 'How it works',
    },
    workflow: {
      heading: 'How Do You Get Started?',
      subtitle:
        'Getting started is straightforward. Here is the process from setup to results.',
    },
    comparison: {
      heading: 'Daisy vs. Typical Solutions',
      subtitle:
        "See how Daisy's approach compares to what most platforms offer.",
      areaLabel: 'Area',
      daisyLabel: 'Daisy',
      typicalLabel: 'Typical Software',
    },
    useCases: {
      heading: 'How Do Beauty Businesses Use This?',
      subtitle: 'Real-world examples from salons, spas, and clinics.',
    },
    integration: {
      heading: 'Works Seamlessly With',
      subtitle:
        'Every feature in Daisy connects. Here is how this category integrates with the rest of the platform.',
      explore: 'Explore',
    },
    aiEnhancement: {
      badge: 'AI-Enhanced',
      heading: 'How AI Supercharges This Feature',
      subtitle:
        "Every capability in this category is powered by Daisy's AI engine, adding intelligence that traditional tools simply cannot match.",
    },
    networkEffects: {
      badge: 'Compounding Advantage',
      heading: 'The Network Effect',
    },
    demo: {
      heading: (name: string) => `See ${name} in Action`,
      paragraph: (name: string) =>
        `Interactive demo coming soon. In the meantime, start your free trial to experience ${name} first-hand.`,
    },
  },
  ar: {
    features: 'المميزات',
    faq: 'الأسئلة الشائعة',
    readyToExperience: (name: string) => `هل أنت مستعد لتجربة ${name}؟`,
    ctaSubtext: (name: string, userType: string) =>
      `اكتشف كيف يمكن لميزات ${name} من ديزي أن تحوّل ${userType === 'business' ? 'عملك' : 'مسيرتك المهنية'}. ابدأ تجربتك المجانية اليوم.`,
    business: 'الأعمال',
    professional: 'المحترفين',
    overview: {
      whatIsTitle: (name: string) => `ما هو ${name} لصالونات التجميل؟`,
      keyCapabilitiesLabel: 'المزايا الرئيسية:',
      whyNeedTitle: (name: string) =>
        `لماذا تحتاج صالونات التجميل إلى ${name}؟`,
      businessImpactLabel: 'الأثر على الأعمال',
    },
    subFeatures: {
      title: (name: string) => `كيف تعمل ميزة ${name} في ديزي؟`,
      subtitle:
        'كل أداة في ديزي صُممت لتوفير الوقت لصالونات التجميل وزيادة الإيرادات.',
      keyBenefitLabel: 'الفائدة الرئيسية:',
      howItWorks: 'كيف تعمل',
    },
    workflow: {
      heading: 'كيف تبدأ؟',
      subtitle: 'الخطوات التالية واضحة. من الإعداد حتى النتائج.',
    },
    comparison: {
      heading: 'ديزي مقابل الحلول التقليدية',
      subtitle:
        'قارن أسلوب ديزي بما تقدمه معظم المنصات المتاحة في السوق.',
      areaLabel: 'النطاق',
      daisyLabel: 'ديزي',
      typicalLabel: 'البرمجيات العادية',
    },
    useCases: {
      heading: 'كيف تستخدمها صالونات التجميل؟',
      subtitle: 'أمثلة تطبيقية من صالونات ومراكز سبا وعيادات.',
    },
    integration: {
      heading: 'تعمل بسلاسة مع',
      subtitle:
        'كل ميزة في ديزي مترابطة. هذا هو شكل التكامل بين التصنيفات داخل المنصة.',
      explore: 'استكشف',
    },
    aiEnhancement: {
      badge: 'مدعوم بالذكاء الاصطناعي',
      heading: 'كيف يعزز الذكاء الاصطناعي هذه الميزة؟',
      subtitle:
        'كل عنصر ضمن هذا التصنيف مدعوم بمحرك ذكاء اصطناعي من ديزي، مما يضيف قدرة تشغيلية يصعب على الأدوات التقليدية مجاراتها.',
    },
    networkEffects: {
      badge: 'ميزة التراكم',
      heading: 'أثر الشبكة',
    },
    demo: {
      heading: (name: string) => `شاهد ${name} عمليًا`,
      paragraph: (name: string) =>
        `عرض توضيحي تفاعلي قريبًا. حتى ذلك الحين ابدأ تجربتك المجانية لتجربة ${name} مباشرة.`,
    },
  },
};

interface Props {
  userType: 'business' | 'professional';
  slug: string;
  locale?: string;
}

export function FeatureDeepDiveClient({ userType, slug, locale = 'en' }: Props) {
  const activeLocale = locale === 'ar' ? 'ar' : 'en';
  const data = getFeatureDeepDive(userType, slug, activeLocale);
  if (!data) return null;

  const t = uiStrings[activeLocale];
  const related = getRelatedFeatureDeepDives(userType, slug, activeLocale);
  const userLabel = userType === 'business' ? t.business : t.professional;
  const overviewLabels = {
    whatIsTitle: t.overview.whatIsTitle(data.categoryName),
    keyCapabilitiesLabel: t.overview.keyCapabilitiesLabel,
    whyNeedTitle: t.overview.whyNeedTitle(data.categoryName),
    businessImpactLabel: t.overview.businessImpactLabel,
  };
  const subFeatureLabels = {
    title: t.subFeatures.title(data.categoryName),
    subtitle: t.subFeatures.subtitle,
    keyBenefitLabel: t.subFeatures.keyBenefitLabel,
    howItWorks: t.subFeatures.howItWorks,
  };
  const workflowLabels = {
    heading: t.workflow.heading,
    subtitle: t.workflow.subtitle,
  };
  const comparisonLabels = {
    heading: t.comparison.heading,
    subtitle: t.comparison.subtitle,
    areaLabel: t.comparison.areaLabel,
    daisyLabel: t.comparison.daisyLabel,
    typicalLabel: t.comparison.typicalLabel,
  };
  const useCasesLabels = {
    heading: t.useCases.heading,
    subtitle: t.useCases.subtitle,
  };
  const integrationLabels = {
    heading: t.integration.heading,
    subtitle: t.integration.subtitle,
    exploreLabel: t.integration.explore,
  };
  const aiEnhancementLabels = {
    badge: t.aiEnhancement.badge,
    heading: t.aiEnhancement.heading,
    subtitle: t.aiEnhancement.subtitle,
  };
  const networkEffectLabels = {
    badge: t.networkEffects.badge,
    heading: t.networkEffects.heading,
  };
  const demoLabels = {
    heading: t.demo.heading(data.categoryName),
    paragraph: t.demo.paragraph(data.categoryName),
  };

  const relatedLinks = related.map((r) => ({
    title: r.categoryName,
    url: `/${activeLocale}/features/${userType}/${r.slug}`,
    description: r.metaDescription.slice(0, 120) + '...',
  }));

  return (
    <main className="min-h-screen">
      {/* SEO Schemas */}
      <FeaturesBreadcrumbSchema
        pageName={userLabel}
        pageSlug={userType}
        categoryName={data.categoryName}
        categorySlug={slug}
      />
      <WebPageSchema
        title={data.metaTitle}
        description={data.metaDescription}
        url={`https://www.jointhedaisy.com/${activeLocale}/features/${userType}/${slug}`}
      />
      {data.faqs.length > 0 && <FaqSchema faqs={data.faqs} />}
      <SoftwareApplicationSchema
        name={data.categoryName}
        description={data.metaDescription}
        url={`https://www.jointhedaisy.com/${activeLocale}/features/${userType}/${slug}`}
      />

      {/* Visual Breadcrumb */}
      <div className="bg-gradient-to-br from-primary via-primary to-[#1a3a3a] px-4 pt-28 md:pt-32">
        <nav className="mx-auto max-w-4xl text-sm text-white/60">
          <Link href={`/${activeLocale}/features`} className="hover:text-white/80">
            {t.features}
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/${activeLocale}/features/${userType}`}
            className="hover:text-white/80"
          >
            {userLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{data.categoryName}</span>
        </nav>
      </div>

      {/* Hero */}
      <FeatureHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        stat={data.heroStat}
      />

      {/* Overview + Pain Points + Growth Outcome */}
      <OverviewSection
        labels={overviewLabels}
        overview={data.overview}
        keyCapabilities={data.keyCapabilities}
        painPoints={data.painPoints}
        growthOutcome={data.growthOutcome}
      />

      {/* Sub-Features */}
      <SubFeaturesSection
        labels={subFeatureLabels}
        subFeatures={data.subFeatures}
      />

      {/* Workflow */}
      <WorkflowSection
        labels={workflowLabels}
        workflow={data.workflow}
      />

      {/* Comparison */}
      {data.comparisonHighlights.length > 0 && (
        <ComparisonHighlight labels={comparisonLabels} comparisons={data.comparisonHighlights} />
      )}

      {/* Use Cases */}
      <UseCasesSection labels={useCasesLabels} useCases={data.useCases} />

      {/* Integration Points */}
      <IntegrationSection
        labels={integrationLabels}
        integrationPoints={data.integrationPoints}
        userType={userType}
        locale={activeLocale}
      />

      {/* AI Enhancement, shown for non-AI category pages */}
      {data.aiEnhancement && (
        <AiEnhancementSection
          labels={aiEnhancementLabels}
          capabilities={data.aiEnhancement.capabilities}
        />
      )}

      {/* Network Effects. AI category page only */}
      {data.networkEffects && (
        <NetworkEffectsSection
          labels={networkEffectLabels}
          description={data.networkEffects.description}
          benefits={data.networkEffects.benefits}
        />
      )}

      {/* Demo Placeholder */}
      <DemoPlaceholder labels={demoLabels} />

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="w-full bg-[#F8F5F3] px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-[28px] font-semibold leading-9 text-[#172524] md:text-[36px] md:leading-[44px]">
              {t.faq}
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-lg border border-[#E8E9E9] bg-white"
                >
                  <summary className="cursor-pointer p-4 font-medium text-[#172524]">
                    {faq.question}
                  </summary>
                  <p className="border-t border-[#E8E9E9] p-4 text-[#455150]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <SolutionCTA
        headline={t.readyToExperience(data.categoryName)}
        subtext={t.ctaSubtext(data.categoryName, userType)}
      />

      {/* Related */}
      {relatedLinks.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-12">
          <RelatedPages links={relatedLinks} />
        </section>
      )}
    </main>
  );
}
