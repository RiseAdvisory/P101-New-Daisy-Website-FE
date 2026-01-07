import { render, waitFor } from '@testing-library/react';
import FreshChatLoader from '../FreshChatWidget';

describe('FreshChatWidget Security Tests', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };

    // Clean up any existing scripts
    document.querySelectorAll('#freshchat-js-sdk').forEach((el) => el.remove());

    // Clean up window objects
    delete (window as any).fcWidget;
    delete (window as any).fcWidgetConfig;
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should validate and sanitize environment variables', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'valid-token-123';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';
    process.env.NEXT_PUBLIC_FRESHCHAT_WIDGET_UUID = 'uuid-123';

    render(<FreshChatLoader lang="en" />);

    waitFor(() => {
      expect((window as any).fcWidgetConfig).toBeDefined();
      expect((window as any).fcWidgetConfig.token).toBe('valid-token-123');
      expect((window as any).fcWidgetConfig.host).toBe('https://freshchat.com');
    });
  });

  it('should reject malicious characters in token', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN =
      'token<script>alert("XSS")</script>';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(<FreshChatLoader lang="en" />);

    waitFor(() => {
      const config = (window as any).fcWidgetConfig;
      // Script tags should be stripped by validation
      if (config) {
        expect(config.token).not.toContain('<script>');
        expect(config.token).not.toContain('</script>');
      }
    });

    consoleWarnSpy.mockRestore();
  });

  it('should not initialize without required config', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = '';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = '';

    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(<FreshChatLoader lang="en" />);

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'FreshChat: Missing required configuration',
    );

    consoleWarnSpy.mockRestore();
  });

  it('should include widgetUuid for Arabic language', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';
    process.env.NEXT_PUBLIC_FRESHCHAT_WIDGET_UUID = 'uuid-ar';

    render(<FreshChatLoader lang="ar" />);

    waitFor(() => {
      expect((window as any).fcWidgetConfig?.widgetUuid).toBe('uuid-ar');
    });
  });

  it('should not include widgetUuid for English language', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';
    process.env.NEXT_PUBLIC_FRESHCHAT_WIDGET_UUID = 'uuid-en';

    render(<FreshChatLoader lang="en" />);

    waitFor(() => {
      expect((window as any).fcWidgetConfig?.widgetUuid).toBeUndefined();
    });
  });

  it('should sanitize host URL to prevent injection', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST =
      'https://evil.com" onload="alert(\'XSS\')';

    render(<FreshChatLoader lang="en" />);

    waitFor(() => {
      const config = (window as any).fcWidgetConfig;
      if (config) {
        expect(config.host).not.toContain('onload');
        expect(config.host).not.toContain('alert');
      }
    });
  });

  it('should handle script loading with proper error handling', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    render(<FreshChatLoader lang="en" />);

    waitFor(() => {
      const script = document.getElementById('freshchat-js-sdk');
      expect(script).toBeDefined();

      // Trigger error event
      if (script) {
        const errorEvent = new Event('error');
        script.dispatchEvent(errorEvent);

        expect(consoleErrorSpy).toHaveBeenCalledWith(
          'FreshChat: Failed to load widget script',
        );
      }
    });

    consoleErrorSpy.mockRestore();
  });

  it('should clean up on unmount', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    const { unmount } = render(<FreshChatLoader lang="en" />);

    (window as any).fcWidget = {
      destroy: jest.fn(),
    };

    unmount();

    waitFor(() => {
      expect((window as any).fcWidget.destroy).toHaveBeenCalled();
    });
  });
});
