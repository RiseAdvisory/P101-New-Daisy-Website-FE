'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-4 text-center">
      <h1 className="text-5xl font-bold text-white">Something went wrong</h1>
      <p className="mt-4 text-xl text-[#D5D9D9]">
        We encountered an unexpected error. Please try again.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          onClick={reset}
          className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
        >
          Try Again
        </button>
        <Link
          href="/en/business"
          className="inline-block rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
        >
          Go to Homepage
        </Link>
      </div>

      <nav aria-label="Helpful links" className="mt-10">
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-[#D5D9D9]">
          <li>
            <Link href="/en/contact" className="underline hover:text-white">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/en/faq" className="underline hover:text-white">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/en/pricing" className="underline hover:text-white">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
