'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { MessageIcons } from '../../assets/icons/messageIcons/MessageIcons';
import { PhoneIcon } from '../../assets/icons/phoneIcon/PhoneIcon';
import { SupportIcon } from '../../assets/icons/supportIcon/SupportIcon';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load the form component to reduce initial bundle size
const FormContacts = dynamic(
  () => import('./FormContacts').then((mod) => mod.FormContacts),
  {
    loading: () => (
      <div className="bg-white p-6 rounded-xl md:mx-auto md:w-[860px] mx-4 border border-[#E8E9E9] md:-translate-y-[235px] -translate-y-[299px]">
        <Skeleton className="h-12 w-full mb-4" />
        <Skeleton className="h-12 w-full mb-4" />
        <Skeleton className="h-32 w-full mb-4" />
        <Skeleton className="h-12 w-full" />
      </div>
    ),
  },
);

export const SupportSection = ({
  contacts = [],
  locale = 'en',
}: {
  contacts: any;
  locale?: string;
}) => {
  const helperTitle =
    locale === 'ar'
      ? 'هل تريد عرضًا أو تفاصيل أسعار أو مساعدة في اختيار الخطة المناسبة؟'
      : 'Want a demo, pricing details, or help choosing the right setup?';
  const helperDescription =
    locale === 'ar'
      ? 'املأ النموذج وسيتواصل معك فريقنا عادة خلال 24 ساعة.'
      : 'Fill out the form and our team will usually get back to you within 24 hours.';
  const faqLabel = locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQs';
  const guidesLabel = locale === 'ar' ? 'الأدلة' : 'Guides';

  return (
    <div className="bg-[#F8F5F3] pb-20 ">
      <div className="w-full h-[300px] md:h-[236px] bg-primary " />
      <div className="mx-4 rounded-xl border border-[#E8E9E9] bg-white p-6 text-center md:mx-auto md:w-[860px] md:-translate-y-[236px] -translate-y-[300px]">
        <h2 className="text-2xl font-semibold text-[#172524] ltr:font-montserrat">
          {helperTitle}
        </h2>
        <p className="mt-2 text-[#455150]">{helperDescription}</p>
      </div>
      <FormContacts style="md:-translate-y-[286px] -translate-y-[350px] " />
      <ul className="flex flex-col justify-center items-center mx-auto px-4 gap-8 md:grid md:grid-cols-3 md:items-start md:-mt-[176px] -mt-[270px]">
        <li className="flex flex-col justify-center items-center text-center">
          <MessageIcons />
          <h3 className="mt-5 ltr:font-montserrat font-medium text-xl">
            {contacts[0]?.title}
          </h3>
          <p className="mt-1 ltr:font-montserrat text-[#455150] md:px-14">
            {contacts[0]?.subtitle}
          </p>
          {contacts[0]?.contact && (
            <a
              href={`mailto:${contacts[0].contact}`}
              className="text-[#8B6554] mt-1 font-semibold leading-6 underline-offset-4 hover:underline"
            >
              {contacts[0].contact}
            </a>
          )}
        </li>
        <li className="flex flex-col justify-center items-center text-center">
          <PhoneIcon />
          <h3 className="mt-5 ltr:font-montserrat font-medium text-xl">
            {contacts[1]?.title}
          </h3>
          <p className="mt-1 ltr:font-montserrat text-[#455150] md:px-14">
            {contacts[1]?.subtitle}
          </p>

          {contacts[1]?.contact && (
            <a
              href={`tel:${contacts[1].contact.replace(/[^+\d]/g, '')}`}
              className="text-[#8B6554] mt-1 font-semibold leading-6 underline-offset-4 hover:underline"
            >
              {contacts[1].contact}
            </a>
          )}
        </li>
        <li className="flex flex-col justify-center items-center text-center">
          <SupportIcon />
          <h3 className="mt-5 ltr:font-montserrat font-medium text-xl">
            {contacts[2]?.title}
          </h3>
          <p className="mt-1 ltr:font-montserrat text-[#455150] md:px-14">
            {contacts[2]?.subtitle}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${locale}/faq`}
              className="rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              {faqLabel}
            </Link>
            <Link
              href={`/${locale}/guides`}
              className="rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              {guidesLabel}
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};
