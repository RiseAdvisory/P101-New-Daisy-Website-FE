'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { ConsentBanner } from './ConsentBanner';

const EU_COUNTRIES = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA + UK
  'GB', 'NO', 'IS', 'LI',
]);

const CONSENT_COOKIE = 'clarity-consent';

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

export function ClarityProvider({ clarityId }: { clarityId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const country = getCookie('geo-country') || '';
    const isEU = EU_COUNTRIES.has(country.toUpperCase());

    if (!isEU) {
      setShouldLoad(true);
      return;
    }

    const consent = getCookie(CONSENT_COOKIE);
    if (consent === 'accepted') {
      setShouldLoad(true);
    } else if (consent === 'declined') {
      // Do nothing — user opted out
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(CONSENT_COOKIE, 'accepted', 365);
    setShowBanner(false);
    setShouldLoad(true);
  };

  const handleDecline = () => {
    setCookie(CONSENT_COOKIE, 'declined', 365);
    setShowBanner(false);
  };

  return (
    <>
      {shouldLoad && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarityId}");`,
          }}
        />
      )}
      {showBanner && (
        <ConsentBanner onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </>
  );
}
