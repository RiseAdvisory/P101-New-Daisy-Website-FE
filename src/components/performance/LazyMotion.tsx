'use client';

/**
 * Lazy-loaded framer-motion components for better performance.
 * These components use dynamic imports to reduce initial bundle size.
 *
 * Usage: Import from this file instead of 'framer-motion' directly
 * for components that are below the fold or not critical for initial render.
 */

import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

// Placeholder component while loading
const LoadingPlaceholder = ({ children }: { children?: ReactNode }) => (
  <div>{children}</div>
);

/**
 * Lazy-loaded motion.div component
 * Use this for animation containers that are not critical for initial paint
 */
export const LazyMotionDiv = dynamic(
  () =>
    import('framer-motion').then((mod) => {
      return mod.motion.div;
    }),
  {
    ssr: false,
    loading: () => <LoadingPlaceholder />,
  },
);

/**
 * Lazy-loaded motion.ul component
 * Use this for animated lists
 */
export const LazyMotionUl = dynamic(
  () =>
    import('framer-motion').then((mod) => {
      return mod.motion.ul;
    }),
  {
    ssr: false,
    loading: () => <LoadingPlaceholder />,
  },
);

/**
 * Lazy-loaded motion.li component
 * Use this for animated list items
 */
export const LazyMotionLi = dynamic(
  () =>
    import('framer-motion').then((mod) => {
      return mod.motion.li;
    }),
  {
    ssr: false,
    loading: () => <LoadingPlaceholder />,
  },
);
