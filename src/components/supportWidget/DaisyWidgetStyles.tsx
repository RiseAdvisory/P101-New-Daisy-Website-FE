'use client';
import { useEffect } from 'react';

const WIDGET_CSS = `
/* ===== HOST CONTAINER ===== */
:host {
  all: initial;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* ===== ROOT WRAPPER (direct child of shadow root) ===== */
:host > div {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
}

/* ===== LAUNCHER BUBBLE ===== */
.dsw-launcher {
  width: 67px;
  height: 67px;
  border-radius: 50%;
  background: #2E4342;
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  pointer-events: auto;
  padding: 0;
  position: relative;
}

.dsw-launcher:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 28px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.15);
}

.dsw-launcher-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #8B6554;
  color: white;
  font-size: 11px;
  font-weight: 600;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}

/* ===== CHAT WINDOW ===== */
.dsw-window {
  width: 380px;
  max-height: 520px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  background: #F8F5F3;
  position: absolute;
  bottom: 78px;
  right: 0;
  z-index: 20;
  animation: dsw-slide-up 0.2s ease-out;
}

@keyframes dsw-slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ===== PREVIEW (welcome message tooltip) ===== */
.dsw-preview {
  position: absolute;
  bottom: 68px;
  right: 0;
  background: white;
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 280px;
  font-size: 14px;
  color: #172524;
  pointer-events: auto;
  cursor: pointer;
  animation: dsw-slide-up 0.2s ease-out;
}

/* ===== HEADER ===== */
.dsw-header {
  background: #2E4342;
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 64px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.dsw-header-logo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #435655;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dsw-header-logo svg {
  width: 20px;
  height: 20px;
  color: white;
  fill: white;
}

.dsw-header-info {
  flex: 1;
  min-width: 0;
}

.dsw-header-title {
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
}

.dsw-header-subtitle {
  color: rgba(255,255,255,0.6);
  font-size: 12px;
  line-height: 1.4;
}

.dsw-header-close {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s;
}

.dsw-header-close:hover {
  background: rgba(255,255,255,0.1);
}

.dsw-header-close svg {
  width: 18px;
  height: 18px;
  stroke: white;
  stroke-width: 2;
}

/* ===== MESSAGE AREA ===== */
.dsw-message-area {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: #F8F5F3;
  display: flex;
  flex-direction: column;
}

.dsw-messages {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

/* Message base */
.dsw-message {
  padding: 12px 16px;
  max-width: 80%;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  margin-bottom: 4px;
}

/* Agent message */
.dsw-message--agent {
  background: #FFFFFF;
  border: 1px solid #E8E9E9;
  border-radius: 12px 12px 12px 4px;
  color: #172524;
  align-self: flex-start;
}

/* User message */
.dsw-message--user {
  background: #2E4342;
  color: #FFFFFF;
  border-radius: 12px 12px 4px 12px;
  align-self: flex-end;
}

/* Timestamp */
.dsw-message-time {
  text-align: center;
  color: #455150;
  font-size: 11px;
  padding: 8px 0;
  align-self: center;
}

/* ===== ERROR & STATUS BANNERS ===== */
.dsw-error-banner {
  text-align: center;
  color: #8B6554;
  font-size: 12px;
  padding: 8px 16px;
  background: #FFF5F0;
  display: none;
}

.dsw-error-banner.visible {
  display: block;
}

.dsw-resolved-banner {
  text-align: center;
  padding: 12px 16px;
  display: none;
}

.dsw-resolved-banner.visible {
  display: block;
}

.dsw-resolved-text {
  color: #455150;
  font-size: 13px;
  margin-bottom: 8px;
}

/* ===== CSAT RATING ===== */
.dsw-csat {
  text-align: center;
  padding: 8px 0;
  display: none;
}

.dsw-csat.visible {
  display: block;
}

.dsw-csat-label {
  color: #455150;
  font-size: 13px;
  margin-bottom: 8px;
}

.dsw-csat-stars {
  display: flex;
  justify-content: center;
  gap: 4px;
}

.dsw-csat-star {
  font-size: 24px;
  cursor: pointer;
  color: #E8E9E9;
  transition: color 0.15s;
  background: none;
  border: none;
  padding: 2px;
}

.dsw-csat-star:hover,
.dsw-csat-star.active {
  color: #8B6554;
}

.dsw-new-conversation-btn {
  background: #2E4342;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.15s;
}

.dsw-new-conversation-btn:hover {
  background: #435655;
}

/* ===== INPUT AREA ===== */
.dsw-input-area {
  background: #FFFFFF;
  border-top: 1px solid #E8E9E9;
  padding: 12px 16px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  flex-shrink: 0;
}

.dsw-input {
  flex: 1;
  border: 1px solid #E8E9E9;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  color: #172524;
  background: #FFFFFF;
  resize: none;
  min-height: 40px;
  max-height: 100px;
  outline: none;
  line-height: 1.4;
  box-sizing: border-box;
}

.dsw-input::placeholder {
  color: #aab4b3;
}

.dsw-input:focus {
  border-color: #8B6554;
}

.dsw-send-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #2E4342;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s;
  padding: 0;
}

.dsw-send-btn:hover {
  background: #435655;
}

.dsw-send-btn:disabled {
  background: #E8E9E9;
  color: #aab4b3;
  cursor: default;
}

.dsw-send-btn svg {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

/* ===== SCROLLBAR ===== */
.dsw-message-area::-webkit-scrollbar {
  width: 4px;
}

.dsw-message-area::-webkit-scrollbar-track {
  background: transparent;
}

.dsw-message-area::-webkit-scrollbar-thumb {
  background: #aab4b3;
  border-radius: 2px;
}

/* ===== MOBILE ===== */
@media (max-width: 480px) {
  .dsw-window {
    width: 100vw;
    height: 100dvh;
    max-height: 100dvh;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 0;
    position: fixed;
  }

  :host > div {
    bottom: 16px;
    right: 16px;
  }
}
`;

/**
 * Injects Daisy brand styles into the support widget's shadow DOM.
 * Temporary local override until the backend fixes their CSS build.
 */
export function DaisyWidgetStyles() {
  useEffect(() => {
    let observer: MutationObserver | null = null;

    const injectStyles = () => {
      const widget = document.getElementById('daisy-support-widget');
      if (!widget?.shadowRoot) return false;

      // Check if we already injected
      if (widget.shadowRoot.getElementById('daisy-brand-css')) return true;

      // Remove the broken style-loader style
      const brokenStyle = widget.shadowRoot.querySelector('style:not(#daisy-brand-css)');
      if (brokenStyle && brokenStyle.textContent?.includes('style-loader')) {
        brokenStyle.remove();
      }

      // Fix host element inline style — override the widget's position
      widget.style.cssText = 'position: fixed; bottom: 24px; right: 24px; z-index: 9999; pointer-events: none;';

      const style = document.createElement('style');
      style.id = 'daisy-brand-css';
      style.textContent = WIDGET_CSS;
      widget.shadowRoot.prepend(style);

      // Replace launcher icon and keep it replaced via observer
      const CUSTOM_ICON = `<svg data-daisy-custom width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 15.4384V13.5616C2 12.6438 2.62459 11.8439 3.51493 11.6213L5.25448 11.1864C5.63317 11.0917 6 11.3781 6 11.7685V17.2315C6 17.6219 5.63317 17.9083 5.25448 17.8136L3.51493 17.3787C2.62459 17.1561 2 16.3562 2 15.4384Z" stroke="white" stroke-width="1.5"/>
        <path d="M22 15.4384V13.5616C22 12.6438 21.3754 11.8439 20.4851 11.6213L18.7455 11.1864C18.3668 11.0917 18 11.3781 18 11.7685V17.2315C18 17.6219 18.3668 17.9083 18.7455 17.8136L20.4851 17.3787C21.3754 17.1561 22 16.3562 22 15.4384Z" stroke="white" stroke-width="1.5"/>
        <path d="M20 18V18.5C20 19.6046 19.1046 20.5 18 20.5H14.5" stroke="white" stroke-width="1.5"/>
        <path d="M13.5 22H10.5C9.67157 22 9 21.3284 9 20.5C9 19.6716 9.67157 19 10.5 19H13.5C14.3284 19 15 19.6716 15 20.5C15 21.3284 14.3284 22 13.5 22Z" stroke="white" stroke-width="1.5"/>
      </svg>`;

      const replaceLauncherIcon = () => {
        const launcher = widget.shadowRoot?.querySelector('.dsw-launcher');
        if (!launcher) return;

        // Don't replace if chat window is open — let the widget show its X icon
        const chatWindow = widget.shadowRoot?.querySelector('.dsw-window') as HTMLElement | null;
        const isOpen = chatWindow && chatWindow.offsetHeight > 0 && chatWindow.style.display !== 'none';
        if (isOpen) return;

        // Check if our custom icon is already there
        if (launcher.querySelector('svg[data-daisy-custom]')) return;
        const badge = launcher.querySelector('.dsw-launcher-badge');
        const badgeHTML = badge ? badge.outerHTML : '';
        launcher.innerHTML = CUSTOM_ICON + badgeHTML;
      };

      replaceLauncherIcon();

      // Watch for widget re-renders (e.g. open→close) that reset the icon
      const shadowObserver = new MutationObserver(replaceLauncherIcon);
      shadowObserver.observe(widget.shadowRoot, { childList: true, subtree: true });

      return true;
    };

    // Try immediately
    if (injectStyles()) return;

    // Otherwise watch for the widget to appear
    observer = new MutationObserver(() => {
      if (injectStyles() && observer) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return null;
}
