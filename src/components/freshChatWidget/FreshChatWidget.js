import Script from 'next/script';

export default function FreshChatWidget() {
  return (
    <>
      <Script id="freshchat-init" strategy="afterInteractive">
        {`
          function initFreshChat() {
            window.fcWidget.init({
              token: "215f02d0-982e-4b15-a1a9-0ef4310c6184",
              host: "https://trythedaisy.freshchat.com",
            });
          }
          function initialize(i,t) {
            var e;
            if (i.getElementById(t)) {
              initFreshChat();
            } else {
              e = i.createElement("script");
              e.id = t;
              e.async = true;
              e.src = "https://trythedaisy.freshchat.com/js/widget.js";
              e.onload = initFreshChat;
              i.head.appendChild(e);
            }
          }
          function initiateCall() {
            initialize(document,"Freshchat-js-sdk");
          }
          if (window.addEventListener) {
            window.addEventListener("load", initiateCall, false);
          } else if (window.attachEvent) {
            window.attachEvent("onload", initiateCall);
          }
        `}
      </Script>
    </>
  );
}
