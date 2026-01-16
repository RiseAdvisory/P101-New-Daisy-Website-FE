import { Metadata } from 'next';
import { ProfessionalClient } from './ProfessionalClient';

export const metadata: Metadata = {
  title: 'For Beauty Professionals | The Daisy',
  description:
    'Join The Daisy as a beauty professional. Manage your appointments, build your client base, track earnings, and grow your career in the beauty and wellness industry.',
  keywords: [
    'beauty professional platform',
    'hairstylist booking app',
    'nail technician platform',
    'spa therapist jobs',
    'freelance beautician',
    'independent stylist',
    'beauty career',
    'salon staff scheduling',
    'beauty professional earnings',
    'wellness professional',
  ],
  openGraph: {
    title: 'For Beauty Professionals | The Daisy',
    description:
      'Join The Daisy as a beauty professional. Manage appointments, build your client base, and grow your career.',
    url: 'https://jointhedaisy.com/professional',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy - For Beauty Professionals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Beauty Professionals | The Daisy',
    description:
      'Join The Daisy as a beauty professional. Grow your career in beauty and wellness.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
  alternates: {
    canonical: 'https://jointhedaisy.com/professional',
  },
};

export default function ProfessionalPage() {
  return <ProfessionalClient />;
}
