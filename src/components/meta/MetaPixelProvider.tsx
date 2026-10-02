'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { advertisingAllowed } from '@/lib/consent';

/**
 * Loads the Meta Pixel, gated on advertisingAllowed().
 *
 * The script is never injected where consent does not allow it, so no request
 * reaches Meta for those visitors. That is stricter than calling
 * fbq('consent','revoke') after load, which still contacts Meta.
 *
 * The existing banner asks about analytics only, so accepting it does not
 * enable this pixel; see advertisingAllowed() for why.
 *
 * PageView: the inline snippet sends the first one. The effect below sends one
 * for each later App Router navigation, which does not reload the document.
 * It used to fire on load as well, racing the snippet, so first page views
 * could be counted twice.
 */
export function MetaPixelProvider({ pixelId }: { pixelId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (advertisingAllowed()) setShouldLoad(true);
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    if (lastTrackedPath.current === null) {
      // First load: the snippet's own PageView covers it.
      lastTrackedPath.current = pathname;
      return;
    }
    if (pathname === lastTrackedPath.current) return;
    lastTrackedPath.current = pathname;
    if (typeof window.fbq === 'function') window.fbq('track', 'PageView');
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
