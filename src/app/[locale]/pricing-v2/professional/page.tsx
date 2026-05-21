import { Metadata } from 'next';
import { PricingV2Client } from '../PricingV2Client';

// WIP redesign; keep this out of Google's index until promoted to /pricing.
export const metadata: Metadata = {
  title: 'Pricing (v2 preview): Professional | The Daisy',
  description:
    'Internal preview of the redesigned pricing page for solo professionals.',
  robots: { index: false, follow: false },
};

export default function PricingV2ProfessionalPage({
  params,
}: {
  params: { locale: string };
}) {
  return <PricingV2Client persona="professional" locale={params.locale} />;
}
