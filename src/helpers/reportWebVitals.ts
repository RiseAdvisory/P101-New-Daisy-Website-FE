/**
 * Web Vitals reporting utility for tracking Core Web Vitals metrics.
 * Reports LCP, FID, CLS, FCP, TTFB, and INP metrics.
 *
 * These metrics help identify performance issues:
 * - LCP (Largest Contentful Paint): Loading performance
 * - FID (First Input Delay): Interactivity
 * - CLS (Cumulative Layout Shift): Visual stability
 * - FCP (First Contentful Paint): Initial render
 * - TTFB (Time to First Byte): Server response
 * - INP (Interaction to Next Paint): Responsiveness
 */

import type { Metric } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

/**
 * Get the connection speed for performance analysis
 */
function getConnectionSpeed(): string {
  const nav = navigator as Navigator & {
    connection?: { effectiveType?: string };
  };
  return nav?.connection?.effectiveType || '';
}

/**
 * Send metrics to analytics endpoint
 */
function sendToAnalytics(metric: Metric, options: { debug?: boolean } = {}) {
  const body = {
    dsn: process.env.NEXT_PUBLIC_ANALYTICS_ID || '',
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  if (options.debug) {
    console.log('[Web Vitals]', metric.name, metric.value, metric.rating);
  }

  // Only send to analytics if analytics ID is configured
  if (body.dsn) {
    const blob = new Blob([JSON.stringify(body)], { type: 'application/json' });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(vitalsUrl, blob);
    } else {
      fetch(vitalsUrl, {
        body: JSON.stringify(body),
        method: 'POST',
        credentials: 'omit',
        keepalive: true,
      });
    }
  }
}

/**
 * Initialize web vitals reporting
 * Call this function once in your app to start tracking Core Web Vitals
 */
export function reportWebVitals(options: { debug?: boolean } = {}) {
  if (typeof window === 'undefined') return;

  import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
    onCLS((metric) => sendToAnalytics(metric, options));
    onFCP((metric) => sendToAnalytics(metric, options));
    onLCP((metric) => sendToAnalytics(metric, options));
    onTTFB((metric) => sendToAnalytics(metric, options));
    onINP((metric) => sendToAnalytics(metric, options));
  });
}

/**
 * Log web vitals to console for debugging
 * Useful during development to see performance metrics
 */
export function logWebVitals() {
  if (typeof window === 'undefined') return;

  import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
    onCLS((metric) => console.log('[CLS]', metric.value, metric.rating));
    onFCP((metric) => console.log('[FCP]', metric.value, 'ms', metric.rating));
    onLCP((metric) => console.log('[LCP]', metric.value, 'ms', metric.rating));
    onTTFB((metric) => console.log('[TTFB]', metric.value, 'ms', metric.rating));
    onINP((metric) => console.log('[INP]', metric.value, 'ms', metric.rating));
  });
}
