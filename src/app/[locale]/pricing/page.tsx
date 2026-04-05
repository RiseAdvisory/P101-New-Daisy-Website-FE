import { permanentRedirect } from 'next/navigation';

export default function PricingRedirect({ params }: { params: { locale: string } }) {
  permanentRedirect(`/${params.locale}/pricing/business`);
}
