import { permanentRedirect } from 'next/navigation';

export default function PricingV2Redirect({
  params,
}: {
  params: { locale: string };
}) {
  permanentRedirect(`/${params.locale}/pricing-v2/business`);
}
