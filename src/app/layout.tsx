import type { Metadata } from 'next';
import { Open_Sans, Montserrat, Inter, Cairo } from 'next/font/google';
import './globals.css';
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { WebSiteSchema } from '@/components/seo/WebSiteSchema';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.jointhedaisy.com',
    title: 'The Daisy - Beauty & Wellness Booking App',
    description:
      'Book beauty, wellness & salon services with cashback rewards. Find salons near you and enjoy exclusive promotions.',
    siteName: 'The Daisy',
    images: [
      {
        url: '/images/og/og-default.jpg',
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
    images: ['/images/og/og-default.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <OrganizationSchema />
        <SoftwareApplicationSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${openSans.variable} ${montserrat.variable} ${inter.variable} ${cairo.variable} font-openSans rtl:font-cairo`}
        dir="ltr"
        suppressHydrationWarning
      >
        <WebVitals />
        <ServiceWorkerRegistration />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
