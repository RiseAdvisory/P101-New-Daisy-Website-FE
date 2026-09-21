'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { getConsentState, trackingAllowed } from '@/lib/consent';

/**
 * Loads the Meta Pixel, gated on the same consent rule as Microsoft Clarity.
 *
 * The script is never injected until consent allows it, so no request reaches
 * Meta for a user in a consent-required territory who has not opted in. That is
 * stricter than calling fbq('consent','revoke') after load, which still
 * contacts Meta.
 *
 * PageView fires on route changes because the App Router does not reload the
 * document between navigations.
 */
export function MetaPixelProvider({ pixelId }: { pixelId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (trackingAllowed()) setShouldLoad(true);
  }, []);

  // Re-check after the consent banner resolves, so accepting takes effect
  // without a reload. The banner is owned by ClarityProvider; both read the
  // same cookie.
  useEffect(() => {
    if (shouldLoad) return;
    const id = window.setInterval(() => {
      if (getConsentState() === 'granted') {
        setShouldLoad(true);
        window.clearInterval(id);
      }
    }, 1000);
    return () => window.clearInterval(id);
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || typeof window.fbq !== 'function') return;
    window.fbq('track', 'PageView');
  }, [pathname, shouldLoad]);

  if (!shouldLoad) return null;

  return (
    <Script
      id="meta-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`,
      }}
    />
  );
}
