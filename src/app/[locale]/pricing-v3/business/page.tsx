import { Metadata } from 'next';
import { PricingV3Client } from '../PricingV3Client';

// WIP redesign; keep this out of Google's index until promoted to /pricing.
export const metadata: Metadata = {
  title: 'Pricing (v3 preview): Business | The Daisy',
  description:
    'Internal preview of the v3 redesigned pricing page for salons, spas, and clinics with teams.',
  robots: { index: false, follow: false },
};

export default function PricingV3BusinessPage({
  params,
}: {
  params: { locale: string };
}) {
  return <PricingV3Client persona="business" locale={params.locale} />;
}
