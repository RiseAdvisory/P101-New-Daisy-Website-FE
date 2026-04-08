/**
 * Meta Tech Provider trust badge.
 * Displays a compact badge indicating Official Meta Technology Provider status.
 * Use on conversion-critical pages: business landing, pricing, free trial, contact.
 */

interface MetaTechBadgeProps {
  className?: string;
  locale?: string;
}

export const MetaTechBadge = ({ className = '', locale = 'en' }: MetaTechBadgeProps) => {
  const label =
    locale === 'ar'
      ? 'مزود تقنية Meta رسمي'
      : 'Official Meta Tech Provider';

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 ${className}`}
    >
      {/* Meta logo mark (simplified) */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
          fill="currentColor"
        />
      </svg>
      <span className="ltr:font-montserrat font-medium">{label}</span>
    </div>
  );
};
