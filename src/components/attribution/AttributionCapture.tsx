'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution';

/**
 * Mount this once at the root layout. On every navigation it ensures
 * captureAttribution() runs against the current URL, preserving first-touch
 * semantics across multi-page sessions.
 */
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
