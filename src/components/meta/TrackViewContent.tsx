'use client';

import { useEffect } from 'react';
import { advertisingAllowed, getCookie } from '@/lib/consent';
import { trackConversion } from '@/lib/meta/trackConversion';

/**
 * Fires ViewContent for a persona landing page, through the browser pixel and
 * the Conversions API under one event ID.
 *
 * The live ad set optimises for CONTENT_VIEW; until this fired, it was asked
 * to find people likely to do something it had never observed.
 *
 * It waits briefly for the pixel's _fbp cookie, which fbevents.js sets once it
 * loads, so the server-side twin carries it for matching. After 5 seconds it
 * sends anyway: the CAPI half still lands when an ad blocker stops the pixel.
 */
export function TrackViewContent({ persona }: { persona: 'business' | 'professional' }) {
  useEffect(() => {
    if (!advertisingAllowed()) return;
    let cancelled = false;
    const started = Date.now();
    const tick = () => {
      if (cancelled) return;
      if (getCookie('_fbp') || Date.now() - started > 5000) {
        void trackConversion('ViewContent', {
          customData: { content_category: persona, content_name: `${persona}-landing` },
        });
        return;
      }
      window.setTimeout(tick, 200);
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, [persona]);

  return null;
}
