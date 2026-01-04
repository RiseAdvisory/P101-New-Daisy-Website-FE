'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    fcWidget?: {
      init: (config: { token: string; host: string; widgetUuid?: string }) => void;
      destroy?: () => void;
    };
  }
}

interface FreshChatLoaderProps {
  lang: string;
}

export default function FreshChatLoader({ lang }: FreshChatLoaderProps) {
  useEffect(() => {
    const SCRIPT_ID = 'freshchat-init';

    const oldScript = document.getElementById(SCRIPT_ID);
    if (oldScript) {
      oldScript.remove();
    }

    if (
      typeof window !== 'undefined' &&
      window.fcWidget &&
      window.fcWidget.destroy
    ) {
      window.fcWidget.destroy();
    }

    const scriptContent = getScriptContent(lang);

    const newScript = document.createElement('script');
    newScript.id = SCRIPT_ID;
    newScript.type = 'text/javascript';
    newScript.text = scriptContent;

    document.body.appendChild(newScript);
  }, [lang]);

  return null;
}

function getScriptContent(lang: string): string {
  const token = process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN || '';
  const host = process.env.NEXT_PUBLIC_FRESHCHAT_HOST || '';
  const widgetUuid = process.env.NEXT_PUBLIC_FRESHCHAT_WIDGET_UUID || '';

  if (lang === 'ar') {
    return `
            function initFreshChat() {
              window.fcWidget.init({
                  token: "${token}",
            host: "${host}",
            widgetUuid: "${widgetUuid}"
              });
            }
            function initialize(i,t){var e;i.getElementById(t)?
            initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,
            e.src="${host}/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}
            initialize(document, "Freshchat-js-sdk");
        `;
  } else {
    return `
          function initFreshChat() {
              window.fcWidget.init({
                  token: "${token}",
              host: "${host}"
              });
          }
          function initialize(i,t){var e;i.getElementById(t)?
          initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,
          e.src="${host}/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}
          initialize(document, "Freshchat-js-sdk");
          `;
  }
}
