import { useEffect } from 'react';

const FreshChatWidget = () => {
  useEffect(() => {
    // The function that initializes the Freshchat widget
    function initFreshChat() {
      window.fcWidget.init({
        token: '215f02d0-982e-4b15-a1a9-0ef4310c6184',
        host: 'https://trythedaisy.freshchat.com',
      });
    }

    // Checks if the script is already present; if not, it dynamically injects it
    function initialize(doc, scriptId) {
      if (doc.getElementById(scriptId)) {
        initFreshChat();
      } else {
        const script = doc.createElement('script');
        script.id = scriptId;
        script.async = true;
        script.src = 'https://trythedaisy.freshchat.com/js/widget.js';
        script.onload = initFreshChat;
        doc.head.appendChild(script);
      }
    }

    // Called when the window loads
    function initiateCall() {
      initialize(document, 'Freshchat-js-sdk');
    }

    // Add the event listener on component mount
    if (typeof window !== 'undefined') {
      if (window.addEventListener) {
        window.addEventListener('load', initiateCall, false);
      } else if (window.attachEvent) {
        window.attachEvent('onload', initiateCall);
      }
    }

    // Optionally, you could clean up on unmount by removing event listeners if needed
    // return () => { ... };
  }, []);

  // This component renders nothing; it simply initializes the Freshchat widget
  return null;
};

export default FreshChatWidget;
