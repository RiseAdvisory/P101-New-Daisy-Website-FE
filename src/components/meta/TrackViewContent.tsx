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
 * It waits for both the pixel (window.fbq) and its _fbp cookie, so the browser
 * event goes out and the server-side twin carries _fbp for matching. Waiting on
 * the cookie alone was wrong for returning visitors: _fbp survives from an
 * earlier visit, so it exists before the pixel script runs, and only the CAPI
 * half was sent (seen on production 2026-10-02). After 5 seconds it sends
 * anyway, so the CAPI half still lands when an ad blocker stops the pixel.
 */
export function TrackViewContent({ persona }: { persona: 'business' | 'professional' }) {
  useEffect(() => {
    if (!advertisingAllowed()) return;
    let cancelled = false;
    const started = Date.now();
    const tick = () => {
      if (cancelled) return;
      const pixelReady = typeof window.fbq === 'function' && Boolean(getCookie('_fbp'));
      if (pixelReady || Date.now() - started > 5000) {
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
