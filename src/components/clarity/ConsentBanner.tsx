'use client';

export function ConsentBanner({
  onAccept,
  onDecline,
}: {
  onAccept: () => void;
  onDecline: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-xl border border-[#E8E9E9] bg-white p-5 shadow-[0_8px_24px_rgba(23,37,36,0.12)] sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6"
    >
      <p className="text-sm leading-6 text-[#455150] sm:max-w-xl">
        We use cookies to analyse site usage and improve your experience. You
        can accept or decline analytics cookies.
      </p>
      <div className="mt-4 flex gap-3 sm:mt-0 sm:shrink-0">
        <button
          type="button"
          onClick={onDecline}
          className="rounded-lg border border-primary px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white ltr:font-montserrat"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={onAccept}
          className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 ltr:font-montserrat"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
