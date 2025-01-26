import type { Metadata } from 'next';
import { Open_Sans, Montserrat, Inter, Cairo } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import ClientSideEffect from '@/helpers/ClientSideEffect';
import { MyUserTypeProvider } from './MyContext';

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
  title: 'The Daisy',
  description: 'Your Gateway To Exceptional Experiences',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://jointhedaisy.com',
    title: 'The Daisy',
    description: 'Your Gateway To Exceptional Experiences',
    siteName: 'The Daisy',
    images: [
      {
        url: 'https://www.jointhedaisy.com/_next/image?url=https%3A%2F%2Fmotivated-belief-b4a000ad6e.media.strapiapp.com%2FJoin_Colleagues_336b010fe7.png&w=1080&q=75',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${montserrat.variable} ${inter.variable} ${cairo.variable} font-openSans rtl:font-cairo`}
        dir="ltr"
      >
        <MyUserTypeProvider>{children}</MyUserTypeProvider>
      </body>
    </html>
  );
}
