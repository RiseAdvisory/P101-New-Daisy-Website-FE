import dynamic from 'next/dynamic';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { AnswerBlock } from '@/components/geo/AnswerBlock';
import { t } from '@/lib/constants/i18n';
import { businessPageData } from '@/lib/constants/pages/businessPage';
import { toScrollSectionItems } from '@/lib/constants/pages/scrollSections.types';

// Lazy load below-fold components
const InlineCTA = dynamic(
  () => import('@/components/shared/InlineCTA').then((mod) => mod.InlineCTA),
);
const SocialProofBar = dynamic(
  () => import('@/components/shared/SocialProofBar').then((mod) => mod.SocialProofBar),
);
const HowItWorks = dynamic(
  () => import('@/components/shared/HowItWorks').then((mod) => mod.HowItWorks),
);
const PricingHook = dynamic(
  () => import('@/components/shared/PricingHook').then((mod) => mod.PricingHook),
);
const PlatformStrengths = dynamic(
  () => import('@/components/shared/PlatformStrengths').then((mod) => mod.PlatformStrengths),
);
const QASection = dynamic(
  () => import('@/components/QASection/QASection').then((mod) => mod.QASection),
);
const BecomeFormPartner = dynamic(
  () => import('@/components/businessPage/BecomeFormPartner').then((mod) => mod.BecomeFormPartner),
);

const uiStrings = {
  en: {
    formTitle: 'Ready to Take Control? Tell Us About Your Business.',
    formSubtitle: 'Our team will reach out within 24 hours to help you get started.',
  },
  ar: {
    formTitle: 'هل أنت مستعد للسيطرة؟ أخبرنا عن عملك.',
    formSubtitle: 'سيتواصل فريقنا معك خلال 24 ساعة لمساعدتك على البدء.',
  },
} as const;

export const BusinessClient = ({ lang }: { lang: string }) => {
  const pageData = t(businessPageData, lang);
  const dataScroll = toScrollSectionItems(pageData.scrollSections);
  const ui = uiStrings[lang as keyof typeof uiStrings] || uiStrings.en;

  return (
    <div className="w-full bg-primary md:-mt-[100px]">
      <LockerContainer listInfo={dataScroll} />
      <MobileScrollSection dataScroll={dataScroll} />
      {pageData.hero?.answerBlock && (
        <div className="bg-[#F8F5F3] px-4 py-12 md:py-16">
          <div className="max-w-2xl mx-auto">
            <AnswerBlock
              question={pageData.hero.answerBlock.question}
              answer={pageData.hero.answerBlock.answer}
            />
          </div>
        </div>
      )}
      {pageData.inlineCtas?.afterScroll && (
        <InlineCTA
          headline={pageData.inlineCtas.afterScroll.headline}
          ctaText={pageData.inlineCtas.afterScroll.ctaText}
          ctaLink={pageData.inlineCtas.afterScroll.ctaLink}
        />
      )}
      {pageData.socialProofStats && (
        <SocialProofBar stats={pageData.socialProofStats} />
      )}
      {pageData.howItWorks && (
        <HowItWorks title={pageData.howItWorks.title} steps={pageData.howItWorks.steps} />
      )}
      {pageData.pricingHook && (
        <PricingHook
          headline={pageData.pricingHook.headline}
          body={pageData.pricingHook.body}
          ctaText={pageData.pricingHook.ctaText}
          ctaLink={pageData.pricingHook.ctaLink}
          pricingLinkText={pageData.pricingHook.pricingLinkText}
          pricingLinkHref={pageData.pricingHook.pricingLinkHref}
        />
      )}
      {pageData.platformStrengths && (
        <PlatformStrengths
          headline={pageData.platformStrengths.headline}
          subHeadline={pageData.platformStrengths.subHeadline}
          capabilities={pageData.platformStrengths.capabilities}
          stats={pageData.platformStrengths.stats}
          hideStats
        />
      )}
      {pageData.inlineCtas?.afterFeatures && (
        <InlineCTA
          headline={pageData.inlineCtas.afterFeatures.headline}
          ctaText={pageData.inlineCtas.afterFeatures.ctaText}
          ctaLink={pageData.inlineCtas.afterFeatures.ctaLink}
          secondaryLinkText={pageData.inlineCtas.afterFeatures.secondaryLinkText}
          secondaryLinkHref={pageData.inlineCtas.afterFeatures.secondaryLinkHref}
        />
      )}
      <QASection pageType="Business" titleFraque={pageData.titleFraque} fallbackFaqs={pageData.fallbackFaqs} />
      <BecomeFormPartner
        defaultType="business"
        title={ui.formTitle}
        subtitle={ui.formSubtitle}
      />
    </div>
  );
};
