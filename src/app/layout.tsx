import type { Metadata } from 'next';
import { Open_Sans, Montserrat, Inter, Cairo } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import ClientSideEffect from '@/helpers/ClientSideEffect';
import { MyUserTypeProvider } from './MyContext';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { WebVitals } from '@/components/performance/WebVitals';
import { ServiceWorkerRegistration } from '@/components/performance/ServiceWorkerRegistration';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--open-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--cairo',
});

export const metadata: Metadata = {
  title: 'The Daisy - Beauty & Wellness Booking App',
  description:
    'Book beauty, wellness & salon services with cashback rewards. Find salons near you, manage appointments, and enjoy exclusive promotions on hair, nails & spa services.',
  keywords: [
    'beauty booking app',
    'salon near me',
    'wellness booking',
    'hair appointment',
    'nail salon booking',
    'spa booking',
    'beauty services',
    'cashback rewards',
    'salon promotions',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://jointhedaisy.com',
    title: 'The Daisy - Beauty & Wellness Booking App',
    description:
      'Book beauty, wellness & salon services with cashback rewards. Find salons near you and enjoy exclusive promotions.',
    siteName: 'The Daisy',
    images: [
      {
        url: 'https://i.imgur.com/MNoL6BE.jpeg',
        width: 1200,
        height: 630,
        alt: 'The Daisy - Beauty & Wellness Booking App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Daisy - Beauty & Wellness Booking App',
    description:
      'Book beauty, wellness & salon services with cashback rewards. Find salons near you.',
    images: ['https://i.imgur.com/MNoL6BE.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get Strapi URL for preconnect hints
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || '';
  const strapiImageUrl = process.env.NEXT_PUBLIC_STRAPI_URL_IMAGE || '';

  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical origins for faster resource loading */}
        {strapiUrl && (
          <>
            <link rel="preconnect" href={strapiUrl} />
            <link rel="dns-prefetch" href={strapiUrl} />
          </>
        )}
        {strapiImageUrl && strapiImageUrl !== strapiUrl && (
          <>
            <link rel="preconnect" href={strapiImageUrl} />
            <link rel="dns-prefetch" href={strapiImageUrl} />
          </>
        )}
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <OrganizationSchema />
        <SoftwareApplicationSchema />
      </head>
      <body
        className={`${openSans.variable} ${montserrat.variable} ${inter.variable} ${cairo.variable} font-openSans rtl:font-cairo`}
        dir="ltr"
      >
        <WebVitals />
        <ServiceWorkerRegistration />
        <MyUserTypeProvider>{children}</MyUserTypeProvider>
      </body>
    </html>
  );
}
