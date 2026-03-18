'use client';
import { useMemo } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ArrowRightIcon } from '@/assets/icons/arrowRightIcon/ArrowRightIcon';
import { ChevronLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname } from '@/lib/utils/locale';

export const BreadcrumbWithCustomSeparator = ({
  bredCrumbTitle = 'Legal',
  bredCrumbDesription = 'Blog posts',
  bredCrumbHref = '/',
}: {
  bredCrumbTitle?: string;
  bredCrumbDesription?: string;
  bredCrumbHref?: string;
}) => {
  const fullPathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(fullPathname), [fullPathname]);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={bredCrumbHref}
            className="text-white hover:text-[#C5C8C8] ltr:font-montserrat text-sm md:ltr:font-inter md:font-medium !cursor-pointer rtl:font-cairo capitalize"
          >
            {bredCrumbDesription}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          {locale === 'ar' ? (
            <ChevronLeft className="text-[#C5C8C8]" />
          ) : (
            <ArrowRightIcon stroke="#C5C8C8" />
          )}
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="text-[#C5C8C8] hover:text-white ltr:font-montserrat text-sm md:ltr:font-inter md:font-medium rtl:font-cairo"
          >
            {bredCrumbTitle}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
