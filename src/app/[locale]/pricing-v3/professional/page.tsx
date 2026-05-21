import { Metadata } from 'next';
import { PricingV3Client } from '../PricingV3Client';

// WIP redesign; keep this out of Google's index until promoted to /pricing.
export const metadata: Metadata = {
  title: 'Pricing (v3 preview): Professional | The Daisy',
  description:
    'Internal preview of the v3 redesigned pricing page for solo professionals.',
  robots: { index: false, follow: false },
};

export default function PricingV3ProfessionalPage({
  params,
}: {
  params: { locale: string };
}) {
  return <PricingV3Client persona="professional" locale={params.locale} />;
}
