'use client';
import { useEffect } from 'react';

/**
 * ClientSideEffect component that handles scroll lock removal.
 * Optimized to use requestIdleCallback to avoid blocking the main thread.
 */
const ClientSideEffect = () => {
  useEffect(() => {
    function removeScrollLock() {
      if (document.body.hasAttribute('data-scroll-locked')) {
        document.body.removeAttribute('data-scroll-locked');
      }
    }

    // Defer observer setup to idle time to reduce blocking
    const setupObserver = () => {
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'data-scroll-locked'
          ) {
            // Use requestAnimationFrame for smoother removal
            requestAnimationFrame(removeScrollLock);
          }
        }
      });

      // Only observe attribute changes on body, not subtree
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['data-scroll-locked'], // Only watch this specific attribute
      });

      return observer;
    };

    let observer: MutationObserver | null = null;

    // Use requestIdleCallback if available to defer non-critical work
    if ('requestIdleCallback' in window) {
      const idleCallbackId = window.requestIdleCallback(() => {
        removeScrollLock();
        observer = setupObserver();
      });

      return () => {
        window.cancelIdleCallback(idleCallbackId);
        observer?.disconnect();
      };
    } else {
      // Fallback for browsers without requestIdleCallback
      const timeoutId = setTimeout(() => {
        removeScrollLock();
        observer = setupObserver();
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        observer?.disconnect();
      };
    }
  }, []);

  return null;
};

export default ClientSideEffect;
