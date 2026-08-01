'use client';
import { useEffect, useRef, useState } from 'react';
import {
  buildSafariEscapeUrl,
  detectInAppBrowser,
  needsAppStoreEscape,
  type InAppBrowser,
} from '@/lib/utils/inAppBrowser';

/**
 * Shown only inside an iOS in-app browser, where App Store links dead-end.
 *
 * The two manual steps are the primary path, not a fallback. Instagram was
 * confirmed on a real device to ignore the x-safari scheme, so an automatic
 * hand-off cannot be relied on. The scheme link is kept as a secondary
 * option because other webviews (TikTok, Snapchat, LinkedIn) may still honour
 * it, but it sits below the steps and reports its own failure rather than
 * leaving the visitor staring at a button that did nothing.
 *
 * The component renders its own outer spacing. An earlier version was wrapped
 * in a styled div by the caller, which left an empty white band on every
 * ordinary browser, where this returns null.
 */

/** How long to wait before deciding the scheme hand-off did not fire. */
const ESCAPE_TIMEOUT_MS = 1500;

const COPY = {
  en: {
    heading: 'Open this page in Safari',
    body: 'Instagram blocks App Store links inside its own browser, so the download buttons below will not work here.',
    bodyGeneric:
      'This app blocks App Store links inside its own browser, so the download buttons below will not work here.',
    stepsIntro: 'Two taps to fix it:',
    steps: [
      'Tap the ••• menu at the top of this window',
      'Choose "Open in browser"',
    ],
    copyButton: 'Copy link',
    copied: 'Link copied',
    autoTry: 'Or try opening Safari automatically',
    autoFailed: 'That did not work. Use the two steps above.',
  },
  ar: {
    heading: 'افتح هذه الصفحة في سفاري',
    body: 'يمنع إنستغرام روابط App Store داخل متصفحه، لذلك لن تعمل أزرار التحميل هنا.',
    bodyGeneric:
      'يمنع هذا التطبيق روابط App Store داخل متصفحه، لذلك لن تعمل أزرار التحميل هنا.',
    stepsIntro: 'ضغطتان لحل المشكلة:',
    steps: [
      'اضغط على قائمة ••• في أعلى هذه النافذة',
      'اختر "فتح في المتصفح"',
    ],
    copyButton: 'انسخ الرابط',
    copied: 'تم نسخ الرابط',
    autoTry: 'أو جرّب فتح سفاري تلقائياً',
    autoFailed: 'لم ينجح ذلك. استخدم الخطوتين أعلاه.',
  },
};

export const InAppBrowserNotice = ({ locale }: { locale: string }) => {
  const [browser, setBrowser] = useState<InAppBrowser | null>(null);
  const [escapeUrl, setEscapeUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [autoFailed, setAutoFailed] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isRtl = locale === 'ar';
  const copy = isRtl ? COPY.ar : COPY.en;

  useEffect(() => {
    const ua = navigator.userAgent || '';
    const hasMSStream = Boolean(
      (window as unknown as { MSStream?: unknown }).MSStream,
    );
    if (needsAppStoreEscape(ua, hasMSStream)) {
      setBrowser(detectInAppBrowser(ua));
      // Derived after mount because it depends on the browser environment,
      // so the server renders nothing.
      setEscapeUrl(buildSafariEscapeUrl(window.location.href));
    }
  }, []);

  const pending = timers.current;
  useEffect(() => () => pending.forEach(clearTimeout), [pending]);

  if (!browser) return null;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      timers.current.push(setTimeout(() => setCopied(false), 2500));
    } catch {
      // Clipboard permission denied or unavailable: the steps above still
      // get the visitor there, so fail quietly.
    }
  };

  const handleAutoTry = () => {
    // If the hand-off works the page is backgrounded, so a still-visible
    // document after the timeout means the scheme was ignored.
    timers.current.push(
      setTimeout(() => {
        if (document.visibilityState === 'visible') setAutoFailed(true);
      }, ESCAPE_TIMEOUT_MS),
    );
  };

  return (
    <div className="px-4 pt-8">
      <div
        className="mx-auto max-w-2xl rounded-2xl border border-[#8B6554]/30 bg-[#F8F5F3] p-6"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <h2 className="text-lg font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo">
          {copy.heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
          {browser === 'instagram' ? copy.body : copy.bodyGeneric}
        </p>

        <p className="mt-5 text-sm font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo">
          {copy.stepsIntro}
        </p>
        <ol className="mt-3 space-y-3">
          {copy.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#8B6554] text-xs font-bold text-white"
              >
                {i + 1}
              </span>
              <span className="text-sm leading-6 text-[#172524] ltr:font-montserrat rtl:font-cairo">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {/* min-w keeps the button the same size when the label switches to
              the confirmation, which otherwise resized it and bumped it onto
              its own line. */}
          <button
            type="button"
            onClick={copyLink}
            className="min-w-[150px] rounded-lg border border-[#172524] px-6 py-3 text-center text-sm font-semibold text-[#172524] transition-colors hover:bg-white ltr:font-montserrat rtl:font-cairo"
          >
            {copied ? copy.copied : copy.copyButton}
          </button>

          {escapeUrl && (
            <a
              href={escapeUrl}
              onClick={handleAutoTry}
              className="text-sm font-semibold text-[#8B6554] underline ltr:font-montserrat rtl:font-cairo"
            >
              {copy.autoTry}
            </a>
          )}
        </div>

        {autoFailed && (
          <p
            role="status"
            className="mt-3 text-xs text-[#586968] ltr:font-montserrat rtl:font-cairo"
          >
            {copy.autoFailed}
          </p>
        )}
      </div>
    </div>
  );
};
