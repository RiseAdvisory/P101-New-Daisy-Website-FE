import { Metadata } from 'next';
import { PricingV2Client } from '../PricingV2Client';

// WIP redesign; keep this out of Google's index until promoted to /pricing.
export const metadata: Metadata = {
  title: 'Pricing (v2 preview): Business | The Daisy',
  description:
    'Internal preview of the redesigned pricing page for salons, spas, and clinics with teams.',
  robots: { index: false, follow: false },
};

export default function PricingV2BusinessPage({
  params,
}: {
  params: { locale: string };
}) {
  return <PricingV2Client persona="business" locale={params.locale} />;
}
