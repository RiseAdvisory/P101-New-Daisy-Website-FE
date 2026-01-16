'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    fcWidget?: {
      init: (config: {
        token: string;
        host: string;
        widgetUuid?: string;
      }) => void;
      destroy?: () => void;
      isInitialized?: () => boolean;
    };
  }
}

interface FreshChatLoaderProps {
  lang: string;
}

// Validate and sanitize configuration values
function validateConfig(value: string): string {
  // Remove any characters that could be used for script injection
  // Allow only alphanumeric, hyphens, dots, underscores, and forward slashes
  return value.replace(/[^a-zA-Z0-9\-._/:]/g, '');
}

export default function FreshChatLoader({ lang }: FreshChatLoaderProps) {
  useEffect(() => {
    const SDK_SCRIPT_ID = 'Freshchat-js-sdk';

    // Get and validate environment variables
    const token = validateConfig(process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN || '');
    const host = validateConfig(process.env.NEXT_PUBLIC_FRESHCHAT_HOST || '');
    const widgetUuid = validateConfig(
      process.env.NEXT_PUBLIC_FRESHCHAT_WIDGET_UUID || '',
    );

    // Validate that required values are present
    if (!token || !host) {
      console.warn('FreshChat: Missing required configuration');
      return;
    }

    // Clean up existing widget before reinitializing
    if (
      typeof window !== 'undefined' &&
      window.fcWidget &&
      window.fcWidget.destroy
    ) {
      window.fcWidget.destroy();
    }

    // Build config object
    const config: { token: string; host: string; widgetUuid?: string } = {
      token,
      host,
    };
    if (lang === 'ar' && widgetUuid) {
      config.widgetUuid = widgetUuid;
    }

    // Initialize FreshChat widget
    const initFreshChat = () => {
      if (window.fcWidget) {
        window.fcWidget.init(config);
      }
    };

    // Check if SDK script already exists
    const existingScript = document.getElementById(SDK_SCRIPT_ID);
    if (existingScript) {
      // SDK already loaded, initialize directly
      // Use setTimeout to ensure fcWidget is available after script execution
      setTimeout(initFreshChat, 0);
    } else {
      // Load the FreshChat SDK
      const script = document.createElement('script');
      script.id = SDK_SCRIPT_ID;
      script.async = true;
      script.src = `${host}/js/widget.js`;
      script.onload = initFreshChat;
      script.onerror = () => {
        console.error('FreshChat: Failed to load widget script');
      };
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      if (window.fcWidget && window.fcWidget.destroy) {
        window.fcWidget.destroy();
      }
    };
  }, [lang]);

  return null;
}
