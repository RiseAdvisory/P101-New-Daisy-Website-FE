'use client';
import { useEffect } from 'react';
import { buttonAppData } from '@/lib/constants/shared/buttonAppData';

/**
 * Document-level click interceptor: on mobile viewports, any click on a link
 * to /(en|ar)/get-the-app is rewritten to go DIRECTLY to the App Store or
 * Play Store based on the device OS, skipping the intermediate /get-the-app
 * page entirely. Desktop and tablet visitors are not affected and continue
 * to land on the on-site page.
 *
 * This is the primary mobile-routing mechanism for in-product CTA clicks.
 * The inline script in /get-the-app/page.tsx and the useEffect in
 * GetTheAppClient.tsx still handle direct URL hits and unusual nav paths.
 */

export const IOS_URL = buttonAppData.en.appStore.link;
export const ANDROID_URL = buttonAppData.en.googlePlay.link;
export const GET_THE_APP_PATH_RE = /^\/(?:en|ar)\/get-the-app\/?$/;

/**
 * Pure helper exported for unit tests. Given a user-agent string, returns the
 * matching App Store URL, the Play Store URL, or null for unknown mobile UAs
 * (Windows Phone, KaiOS, etc.) — those fall through to the on-site page,
 * which shows both store buttons.
 */
export function resolveStoreUrl(
  ua: string,
  hasMSStream = false,
): string | null {
  if (/iPad|iPhone|iPod/.test(ua) && !hasMSStream) return IOS_URL;
  if (/android/i.test(ua)) return ANDROID_URL;
  return null;
}

function getStoreUrlForCurrentDevice(): string | null {
  return resolveStoreUrl(
    navigator.userAgent || '',
    Boolean((window as unknown as { MSStream?: unknown }).MSStream),
  );
}

function isMobileViewport(): boolean {
  return window.matchMedia?.('(max-width: 767px)').matches ?? false;
}

const MobileAppRedirector = () => {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Let modified clicks (Cmd/Ctrl/Shift/Alt) and non-primary buttons
      // fall through so users can still open in a new tab if they want.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;

      let el = e.target as HTMLElement | null;
      while (el && el.tagName !== 'A') el = el.parentElement;
      if (!el) return;

      const anchor = el as HTMLAnchorElement;
      if (!GET_THE_APP_PATH_RE.test(anchor.pathname)) return;
      if (!isMobileViewport()) return;

      const storeUrl = getStoreUrlForCurrentDevice();
      if (!storeUrl) return;

      e.preventDefault();
      // Next.js <Link> attaches its own click handler on the <a> element that
      // calls router.push() for client-side navigation. Listening in the
      // capture phase + stopImmediatePropagation prevents that handler from
      // running, so we don't get a double navigation (external store URL +
      // client-side nav to /get-the-app at the same time).
      e.stopImmediatePropagation();
      // assign() instead of `.href = …` so the navigation is mockable in tests
      // and adds a history entry (user can back-button to our marketing site).
      window.location.assign(storeUrl);
    }

    // Capture phase: fire BEFORE the target element's own listeners (i.e.,
    // before Next.js Link's click handler).
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
};

export default MobileAppRedirector;
