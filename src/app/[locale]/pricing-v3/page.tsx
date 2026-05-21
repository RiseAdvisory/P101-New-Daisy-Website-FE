import { permanentRedirect } from 'next/navigation';

export default function PricingV3Redirect({
  params,
}: {
  params: { locale: string };
}) {
  permanentRedirect(`/${params.locale}/pricing-v3/business`);
}
