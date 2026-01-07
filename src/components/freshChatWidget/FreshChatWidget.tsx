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
    };
    fcWidgetConfig?: {
      token: string;
      host: string;
      widgetUuid?: string;
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
    const SCRIPT_ID = 'freshchat-js-sdk';

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

    // Clean up existing widget
    if (
      typeof window !== 'undefined' &&
      window.fcWidget &&
      window.fcWidget.destroy
    ) {
      window.fcWidget.destroy();
    }

    // Store config in window object (safer than template literals)
    window.fcWidgetConfig = {
      token,
      host,
      ...(lang === 'ar' && widgetUuid ? { widgetUuid } : {}),
    };

    // Initialize FreshChat
    const initFreshChat = () => {
      if (window.fcWidget && window.fcWidgetConfig) {
        window.fcWidget.init(window.fcWidgetConfig);
      }
    };

    // Load FreshChat SDK
    const existingScript = document.getElementById(SCRIPT_ID);
    if (existingScript) {
      // Script already loaded, just reinitialize
      initFreshChat();
    } else {
      // Load the script
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
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
