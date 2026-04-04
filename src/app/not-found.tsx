import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | The Daisy',
  description:
    'The page you are looking for does not exist. Explore The Daisy beauty and wellness platform for salon management, booking, and business growth.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-4 text-center">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="mt-4 text-xl text-[#D5D9D9]">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <p className="mt-2 text-[#D5D9D9]">
        It may have been moved, renamed, or no longer exists.
      </p>

      <nav aria-label="Helpful links" className="mt-10">
        <h2 className="mb-4 text-lg font-semibold text-white">
          Here are some helpful links:
        </h2>
        <ul className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <li>
            <Link
              href="/en/business"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
            >
              For Business Owners
            </Link>
          </li>
          <li>
            <Link
              href="/en/professional"
              className="inline-block rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              For Professionals
            </Link>
          </li>
        </ul>

        <ul className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#D5D9D9]">
          <li>
            <Link href="/en/pricing" className="underline hover:text-white">
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/en/features/business"
              className="underline hover:text-white"
            >
              Features
            </Link>
          </li>
          <li>
            <Link href="/en/faq" className="underline hover:text-white">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/en/contact" className="underline hover:text-white">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/en/resources/blog-post"
              className="underline hover:text-white"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link href="/en/glossary" className="underline hover:text-white">
              Glossary
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
