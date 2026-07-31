'use client';
import { useEffect, useState } from 'react';
import {
  buildSafariEscapeUrl,
  detectInAppBrowser,
  needsAppStoreEscape,
  type InAppBrowser,
} from '@/lib/utils/inAppBrowser';

/**
 * Shown only inside an iOS in-app browser, where App Store links dead-end.
 *
 * The Safari hand-off is deliberately behind a button rather than fired on
 * mount: iOS commonly blocks custom-scheme navigation that is not tied to a
 * user gesture, so a tap has a much better chance of working than an
 * automatic redirect. It is still best effort, which is why the manual
 * instructions and the copy-link fallback are always visible rather than
 * being revealed only after a failure we cannot reliably detect.
 */

const COPY = {
  en: {
    heading: 'Open in Safari to download',
    body: 'Instagram blocks App Store links inside its own browser. Open this page in Safari and the download will work.',
    bodyGeneric:
      'This app blocks App Store links inside its own browser. Open this page in Safari and the download will work.',
    openButton: 'Open in Safari',
    manualIntro: 'If nothing happens, open it yourself:',
    manualSteps: [
      'Tap the ••• menu in the corner of this window',
      'Choose "Open in browser" or "Open in Safari"',
    ],
    copyButton: 'Copy link',
    copied: 'Link copied',
  },
  ar: {
    heading: 'افتح الصفحة في سفاري للتحميل',
    body: 'يمنع إنستغرام روابط App Store داخل متصفحه. افتح هذه الصفحة في سفاري وسيعمل التحميل.',
    bodyGeneric:
      'يمنع هذا التطبيق روابط App Store داخل متصفحه. افتح هذه الصفحة في سفاري وسيعمل التحميل.',
    openButton: 'افتح في سفاري',
    manualIntro: 'إذا لم يحدث شيء، افتحها بنفسك:',
    manualSteps: [
      'اضغط على قائمة ••• في زاوية هذه النافذة',
      'اختر "فتح في المتصفح" أو "فتح في سفاري"',
    ],
    copyButton: 'انسخ الرابط',
    copied: 'تم نسخ الرابط',
  },
};

export const InAppBrowserNotice = ({ locale }: { locale: string }) => {
  const [browser, setBrowser] = useState<InAppBrowser | null>(null);
  const [escapeUrl, setEscapeUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const isRtl = locale === 'ar';
  const copy = isRtl ? COPY.ar : COPY.en;

  useEffect(() => {
    const ua = navigator.userAgent || '';
    const hasMSStream = Boolean(
      (window as unknown as { MSStream?: unknown }).MSStream,
    );
    if (needsAppStoreEscape(ua, hasMSStream)) {
      setBrowser(detectInAppBrowser(ua));
      // Both values are derived after mount because they depend on the
      // browser environment, so the server renders nothing.
      setEscapeUrl(buildSafariEscapeUrl(window.location.href));
    }
  }, []);

  if (!browser) return null;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard permission denied or unavailable: the manual steps above
      // still get the visitor there, so fail quietly.
    }
  };

  return (
    <div
      className="mx-auto mb-8 max-w-2xl rounded-2xl border border-[#8B6554]/30 bg-[#F8F5F3] p-6"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <h2 className="text-lg font-semibold text-[#172524] ltr:font-montserrat rtl:font-cairo">
        {copy.heading}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo">
        {browser === 'instagram' ? copy.body : copy.bodyGeneric}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {/* A real anchor rather than a scripted navigation: it is the correct
            semantics for going somewhere, and it still works if the webview
            restricts JS-driven navigation to custom schemes. */}
        {escapeUrl && (
          <a
            href={escapeUrl}
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 ltr:font-montserrat rtl:font-cairo"
          >
            {copy.openButton}
          </a>
        )}
        <button
          type="button"
          onClick={copyLink}
          className="rounded-lg border border-[#172524] px-6 py-3 text-sm font-semibold text-[#172524] transition-colors hover:bg-white ltr:font-montserrat rtl:font-cairo"
        >
          {copied ? copy.copied : copy.copyButton}
        </button>
      </div>

      <p className="mt-5 text-xs font-semibold text-[#586968] ltr:font-montserrat rtl:font-cairo">
        {copy.manualIntro}
      </p>
      <ol className="mt-2 space-y-1">
        {copy.manualSteps.map((step, i) => (
          <li
            key={i}
            className="text-xs leading-relaxed text-[#455150] ltr:font-montserrat rtl:font-cairo"
          >
            {i + 1}. {step}
          </li>
        ))}
      </ol>
    </div>
  );
};
