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
      className={`inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm text-white/90 ${className}`}
    >
      {/* Platform logos */}
      <div className="flex items-center gap-2">
        {/* Meta logo */}
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
        {/* WhatsApp logo */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.01a9.865 9.865 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.86 9.86 0 012.14 12.05C2.14 6.58 6.58 2.14 12.05 2.14c2.655 0 5.15 1.035 7.026 2.91A9.874 9.874 0 0121.96 12.05c-.003 5.47-4.443 9.91-9.91 9.91v-.175zM12.05 0C5.405 0 0 5.405 0 12.05c0 2.125.554 4.2 1.605 6.03L0 24l6.076-1.594A12.015 12.015 0 0012.05 24.1C18.695 24.1 24.1 18.695 24.1 12.05 24.1 5.405 18.695 0 12.05 0z"
            fill="#25D366"
          />
        </svg>
        {/* Instagram logo */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
            fill="url(#ig-gradient)"
          />
          <defs>
            <linearGradient
              id="ig-gradient"
              x1="0"
              y1="24"
              x2="24"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FED373" />
              <stop offset="0.25" stopColor="#F15245" />
              <stop offset="0.5" stopColor="#D92E7F" />
              <stop offset="0.75" stopColor="#9B36B7" />
              <stop offset="1" stopColor="#515ECF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="ltr:font-montserrat font-medium">{label}</span>
    </div>
  );
};
