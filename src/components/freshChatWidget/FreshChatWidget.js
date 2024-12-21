'use client';
import { useEffect } from 'react';
import Script from 'next/script';

export default function FreshChatLoader({ lang }) {
  useEffect(() => {
    const SCRIPT_ID = 'freshchat-script';

    // 1) Remove any existing Freshchat script from the DOM
    const oldScript = document.getElementById(SCRIPT_ID);
    if (oldScript) {
      oldScript.remove();
    }

    // 2) If fcWidget is available, destroy the old instance (if Freshchat supports .destroy())
    if (
      typeof window !== 'undefined' &&
      window.fcWidget &&
      window.fcWidget.destroy
    ) {
      window.fcWidget.destroy();
    }

    // 3) Define the entire script content based on the current lang
    const scriptContent = getScriptContent(lang);

    // 4) Create a new <script> and inject the full snippet
    // const newScript = document.createElement('script');
    // newScript.id = SCRIPT_ID;
    // newScript.type = 'text/javascript';
    // newScript.text = scriptContent;

    document.body.appendChild(scriptContent);
  }, [lang]);

  return null;
}

/**
 * Returns the entire Freshchat script snippet as a string, depending on `lang`.
 * Replace these with your actual AR/EN scripts if they differ.
 */
function getScriptContent(lang) {
  if (lang === 'ar') {
    return (
      <>
        <Script id="freshchat-init">
          {`
            function initFreshChat() {
                window.fcWidget.init({
                    token: "215f02d0-982e-4b15-a1a9-0ef4310c6184",
                host: "https://trythedaisy.freshchat.com"
                });
            }
            function initialize(i,t){var e;i.getElementById(t)?
            initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,
            e.src="https://trythedaisy.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}
            function initiateCall(){initialize(document,"Freshchat-js-sdk")}
            window.addEventListener?window.addEventListener("load",initiateCall,!1):
            window.attachEvent("load",initiateCall,!1);
            `}
        </Script>
      </>
    );
  } else {
    return (
      <>
        <Script id="freshchat-init">
          {`
          function initFreshChat() {
              window.fcWidget.init({
                  token: "215f02d0-982e-4b15-a1a9-0ef4310c6184",
              host: "https://trythedaisy.freshchat.com"
              });
          }
          function initialize(i,t){var e;i.getElementById(t)?
          initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,
          e.src="https://trythedaisy.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}
          function initiateCall(){initialize(document,"Freshchat-js-sdk")}
          window.addEventListener?window.addEventListener("load",initiateCall,!1):
          window.attachEvent("load",initiateCall,!1);
          `}
        </Script>
      </>
    );
  }
}
