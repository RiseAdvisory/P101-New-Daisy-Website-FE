'use client';
import Script from 'next/script';

export default function DaisySupportWidget() {
  // Config is set in root layout via beforeInteractive script.
  // This component only loads the widget JS after user interaction (deferred by Footer).
  return (
    <Script
      id="daisy-support-widget-js"
      src="https://devapp.trythedaisy.com/js/daisy-support-widget.js"
      strategy="afterInteractive"
    />
  );
}
