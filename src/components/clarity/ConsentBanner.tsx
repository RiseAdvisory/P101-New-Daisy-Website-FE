'use client';

export function ConsentBanner({
  onAccept,
  onDecline,
}: {
  onAccept: () => void;
  onDecline: () => void;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg sm:flex sm:items-center sm:justify-between sm:px-8">
      <p className="text-sm text-gray-600 sm:max-w-2xl">
        We use cookies to analyse site usage and improve your experience. You
        can accept or decline analytics cookies.
      </p>
      <div className="mt-3 flex gap-3 sm:mt-0 sm:shrink-0">
        <button
          onClick={onDecline}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Decline
        </button>
        <button
          onClick={onAccept}
          className="rounded-md bg-[#2543AD] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1e3690]"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
