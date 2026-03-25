import dynamic from 'next/dynamic';
import { MobileScrollSection } from '@/components/shared/MobileScrollSection';
import LockerContainer from '@/components/lockerScrollingSection/LockerContainer/LockerContainer';
import { AnswerBlock } from '@/components/geo/AnswerBlock';
import { toScrollSectionItems, LandingPageContent } from '@/lib/constants/pages/scrollSections.types';

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

interface SolutionAngleClientProps {
  lang: string;
  pageData: LandingPageContent;
  persona: string;
}

export const SolutionAngleClient = ({
  lang,
  pageData,
  persona,
}: SolutionAngleClientProps) => {
  const dataScroll = toScrollSectionItems(pageData.scrollSections);
  const defaultType = persona === 'business' ? 'business' : 'professional';
  const pageType = persona === 'business' ? 'Business' : 'Professional';

  const formTitle =
    persona === 'business'
      ? lang === 'ar'
        ? 'مستعد للسيطرة؟ أخبرنا عن عملك.'
        : 'Ready to Take Control? Tell Us About Your Business.'
      : lang === 'ar'
        ? 'سجّل في ذا ديزي - مجانًا'
        : 'Get Listed on The Daisy for Free';

  const formSubtitle =
    persona === 'business'
      ? lang === 'ar'
        ? 'سيتواصل فريقنا معك خلال 24 ساعة لمساعدتك على البدء.'
        : 'Our team will reach out within 24 hours to help you get started.'
      : lang === 'ar'
        ? 'أخبرنا عن نفسك وسيساعدك فريقنا في الإعداد.'
        : 'Tell us about yourself and our team will help you get set up.';

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
        <HowItWorks steps={pageData.howItWorks.steps} />
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
      <QASection
        pageType={pageType}
        titleFraque={pageData.titleFraque}
        fallbackFaqs={pageData.fallbackFaqs}
      />
      <BecomeFormPartner
        defaultType={defaultType as 'business' | 'professional'}
        title={formTitle}
        subtitle={formSubtitle}
      />
    </div>
  );
};
