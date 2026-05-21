import { Sparkles } from 'lucide-react';
import type { PersonaCopy } from '@/lib/constants/pricing/v3/pricingV3Shared';

interface Props {
  personaCopy: PersonaCopy;
}

export const AIConversationsCalloutV3 = ({ personaCopy }: Props) => {
  return (
    <section className="bg-white px-4 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-5xl rounded-2xl bg-[#F8F5F3] p-10 ring-1 ring-[#E8E9E9] md:p-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <div className="flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-[#CAB2A6]">
              <Sparkles className="h-8 w-8" aria-hidden="true" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="mb-4 text-[24px] font-semibold leading-[30px] text-[#172524] md:text-[32px] md:leading-10">
              {personaCopy.aiConversationsTitle}
            </h2>
            <p className="mb-3 text-base leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
              {personaCopy.aiConversationsBody}
            </p>
            <p className="text-xs italic text-[#586968] ltr:font-montserrat rtl:font-cairo">
              {personaCopy.aiCreditsFineprint}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
