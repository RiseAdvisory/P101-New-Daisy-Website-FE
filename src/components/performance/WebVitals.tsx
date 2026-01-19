'use client';

import { useEffect } from 'react';
import { reportWebVitals, logWebVitals } from '@/helpers/reportWebVitals';

/**
 * Client component to initialize web vitals tracking.
 * Automatically reports Core Web Vitals metrics.
 */
export function WebVitals() {
  useEffect(() => {
    // Log vitals in development, report in production
    if (process.env.NODE_ENV === 'development') {
      logWebVitals();
    } else {
      reportWebVitals();
    }
  }, []);

  return null;
}
