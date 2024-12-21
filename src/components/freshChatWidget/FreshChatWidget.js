import Script from 'next/script';

export default function FreshChatWidget() {
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
