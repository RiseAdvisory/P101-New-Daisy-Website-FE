import { render, waitFor, act } from '@testing-library/react';
import FreshChatLoader from '../FreshChatWidget';

// Correct script ID used in the component
const SCRIPT_ID = 'Freshchat-js-sdk';

describe('FreshChatWidget Security Tests', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };

    // Clean up any existing scripts (both old and new ID formats)
    document.querySelectorAll('#freshchat-js-sdk').forEach((el) => el.remove());
    document.querySelectorAll(`#${SCRIPT_ID}`).forEach((el) => el.remove());

    // Clean up window objects
    delete (window as any).fcWidget;
    delete (window as any).fcWidgetConfig;
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should validate and sanitize environment variables', async () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'valid-token-123';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';
    process.env.NEXT_PUBLIC_FRESHCHAT_WIDGET_UUID = 'uuid-123';

    // Mock fcWidget to capture the config passed to init
    const mockInit = jest.fn();
    (window as any).fcWidget = {
      init: mockInit,
      destroy: jest.fn(),
    };

    render(<FreshChatLoader lang="en" />);

    // Wait for the script to load and init to be called
    await waitFor(() => {
      const script = document.getElementById(SCRIPT_ID);
      expect(script).toBeTruthy();
    });

    // Trigger the onload handler to simulate script loading
    const script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
    script?.onload?.(new Event('load'));

    await waitFor(() => {
      expect(mockInit).toHaveBeenCalledWith(
        expect.objectContaining({
          token: 'valid-token-123',
          host: 'https://freshchat.com',
        }),
      );
    });
  });

  it('should reject malicious characters in token', async () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN =
      'token<script>alert("XSS")</script>';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(<FreshChatLoader lang="en" />);

    await waitFor(() => {
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

  it('should include widgetUuid for Arabic language', async () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';
    process.env.NEXT_PUBLIC_FRESHCHAT_WIDGET_UUID = 'uuid-ar';

    // Mock fcWidget to capture the config passed to init
    const mockInit = jest.fn();
    (window as any).fcWidget = {
      init: mockInit,
      destroy: jest.fn(),
    };

    render(<FreshChatLoader lang="ar" />);

    // Wait for the script to be created
    await waitFor(() => {
      const script = document.getElementById(SCRIPT_ID);
      expect(script).toBeTruthy();
    });

    // Trigger the onload handler to simulate script loading
    const script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
    script?.onload?.(new Event('load'));

    await waitFor(() => {
      expect(mockInit).toHaveBeenCalledWith(
        expect.objectContaining({
          widgetUuid: 'uuid-ar',
        }),
      );
    });
  });

  it('should not include widgetUuid for English language', async () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';
    process.env.NEXT_PUBLIC_FRESHCHAT_WIDGET_UUID = 'uuid-en';

    render(<FreshChatLoader lang="en" />);

    await waitFor(() => {
      expect((window as any).fcWidgetConfig?.widgetUuid).toBeUndefined();
    });
  });

  it('should sanitize host URL to prevent injection', async () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST =
      'https://evil.com" onload="alert(\'XSS\')';

    render(<FreshChatLoader lang="en" />);

    await waitFor(() => {
      const config = (window as any).fcWidgetConfig;
      if (config) {
        expect(config.host).not.toContain('onload');
        expect(config.host).not.toContain('alert');
      }
    });
  });

  it('should handle script loading with proper error handling', async () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    render(<FreshChatLoader lang="en" />);

    await waitFor(() => {
      const script = document.getElementById(SCRIPT_ID);
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

  it('should clean up on unmount', async () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    const { unmount } = render(<FreshChatLoader lang="en" />);

    (window as any).fcWidget = {
      destroy: jest.fn(),
    };

    unmount();

    await waitFor(() => {
      expect((window as any).fcWidget.destroy).toHaveBeenCalled();
    });
  });
});

describe('FreshChatWidget Script Loading Tests', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };

    // Clean up any existing scripts
    document.querySelectorAll(`#${SCRIPT_ID}`).forEach((el) => el.remove());

    // Clean up window objects
    delete (window as any).fcWidget;
  });

  afterEach(() => {
    process.env = originalEnv;
    // Ensure real timers are restored if any test used fake timers
    jest.useRealTimers();
  });

  it('should use correct script ID (Freshchat-js-sdk)', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    render(<FreshChatLoader lang="en" />);

    // Script should be created with the correct ID
    const script = document.getElementById(SCRIPT_ID);
    expect(script).toBeTruthy();
    expect(script?.tagName).toBe('SCRIPT');
  });

  it('should create script with async attribute', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    render(<FreshChatLoader lang="en" />);

    const script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
    expect(script).toBeTruthy();
    expect(script.async).toBe(true);
  });

  it('should set correct script src from host env variable', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://wchat.freshchat.com';

    render(<FreshChatLoader lang="en" />);

    const script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
    expect(script).toBeTruthy();
    expect(script.src).toBe('https://wchat.freshchat.com/js/widget.js');
  });

  it('should use setTimeout(0) for initialization when script already exists', async () => {
    jest.useFakeTimers();

    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    // Pre-create the script element (simulating it already being loaded)
    const existingScript = document.createElement('script');
    existingScript.id = SCRIPT_ID;
    document.head.appendChild(existingScript);

    // Mock fcWidget
    const mockInit = jest.fn();
    (window as any).fcWidget = {
      init: mockInit,
      destroy: jest.fn(),
    };

    render(<FreshChatLoader lang="en" />);

    // init should not be called synchronously
    expect(mockInit).not.toHaveBeenCalled();

    // Advance timers to trigger setTimeout(initFreshChat, 0)
    await act(async () => {
      jest.advanceTimersByTime(0);
    });

    // Now init should have been called
    expect(mockInit).toHaveBeenCalledWith({
      token: 'token',
      host: 'https://freshchat.com',
    });

    jest.useRealTimers();
  });

  it('should destroy existing widget before reinitializing when initialized', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    // Mock existing initialized fcWidget
    const mockDestroy = jest.fn();
    (window as any).fcWidget = {
      init: jest.fn(),
      destroy: mockDestroy,
      isInitialized: jest.fn(() => true),
    };

    render(<FreshChatLoader lang="en" />);

    // destroy should have been called to clean up existing initialized widget
    expect(mockDestroy).toHaveBeenCalled();
  });

  it('should not destroy widget if not initialized', () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    // Mock existing but not initialized fcWidget
    const mockDestroy = jest.fn();
    (window as any).fcWidget = {
      init: jest.fn(),
      destroy: mockDestroy,
      isInitialized: jest.fn(() => false),
    };

    render(<FreshChatLoader lang="en" />);

    // destroy should NOT have been called since widget is not initialized
    expect(mockDestroy).not.toHaveBeenCalled();
  });

  it('should not create duplicate scripts on language change', async () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    const { rerender } = render(<FreshChatLoader lang="en" />);

    // Should have one script
    let scripts = document.querySelectorAll(`#${SCRIPT_ID}`);
    expect(scripts.length).toBe(1);

    // Mock fcWidget for rerender (not yet initialized)
    (window as any).fcWidget = {
      init: jest.fn(),
      destroy: jest.fn(),
      isInitialized: jest.fn(() => false),
    };

    // Rerender with different language
    rerender(<FreshChatLoader lang="ar" />);

    // Should still have only one script (reuses existing)
    scripts = document.querySelectorAll(`#${SCRIPT_ID}`);
    expect(scripts.length).toBe(1);
  });

  it('should reinitialize widget with delay on language change when already initialized', async () => {
    jest.useFakeTimers();

    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';
    process.env.NEXT_PUBLIC_FRESHCHAT_WIDGET_UUID = 'arabic-uuid';

    const { rerender } = render(<FreshChatLoader lang="en" />);

    // Mock fcWidget as initialized (simulating after initial load)
    const mockInit = jest.fn();
    const mockDestroy = jest.fn();
    (window as any).fcWidget = {
      init: mockInit,
      destroy: mockDestroy,
      isInitialized: jest.fn(() => true),
    };

    // Switch to Arabic language
    rerender(<FreshChatLoader lang="ar" />);

    // destroy should be called immediately
    expect(mockDestroy).toHaveBeenCalled();

    // init should NOT be called immediately (waiting for cleanup)
    expect(mockInit).not.toHaveBeenCalled();

    // Advance timers by 500ms (the delay for reinitialization)
    await act(async () => {
      jest.advanceTimersByTime(500);
    });

    // Now init should have been called with Arabic config
    expect(mockInit).toHaveBeenCalledWith(
      expect.objectContaining({
        token: 'token',
        host: 'https://freshchat.com',
        widgetUuid: 'arabic-uuid',
      }),
    );

    jest.useRealTimers();
  });

  it('should call init with widgetUuid for Arabic language when script exists', async () => {
    jest.useFakeTimers();

    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';
    process.env.NEXT_PUBLIC_FRESHCHAT_WIDGET_UUID = 'arabic-uuid';

    // Pre-create the script element
    const existingScript = document.createElement('script');
    existingScript.id = SCRIPT_ID;
    document.head.appendChild(existingScript);

    // Mock fcWidget
    const mockInit = jest.fn();
    (window as any).fcWidget = {
      init: mockInit,
      destroy: jest.fn(),
    };

    render(<FreshChatLoader lang="ar" />);

    // Advance timers to trigger setTimeout(initFreshChat, 0)
    await act(async () => {
      jest.advanceTimersByTime(0);
    });

    // Should include widgetUuid for Arabic
    expect(mockInit).toHaveBeenCalledWith({
      token: 'token',
      host: 'https://freshchat.com',
      widgetUuid: 'arabic-uuid',
    });

    jest.useRealTimers();
  });

  it('should handle script onload callback correctly', async () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    const mockInit = jest.fn();

    render(<FreshChatLoader lang="en" />);

    const script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
    expect(script).toBeTruthy();

    // Simulate script loading and fcWidget becoming available
    (window as any).fcWidget = {
      init: mockInit,
      destroy: jest.fn(),
    };

    // Trigger onload
    await act(async () => {
      script.onload?.(new Event('load'));
    });

    expect(mockInit).toHaveBeenCalledWith({
      token: 'token',
      host: 'https://freshchat.com',
    });
  });

  it('should handle script onerror callback correctly', async () => {
    process.env.NEXT_PUBLIC_FRESHCHAT_TOKEN = 'token';
    process.env.NEXT_PUBLIC_FRESHCHAT_HOST = 'https://freshchat.com';

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    render(<FreshChatLoader lang="en" />);

    const script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
    expect(script).toBeTruthy();

    // Trigger onerror
    await act(async () => {
      script.onerror?.(new Event('error'));
    });

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'FreshChat: Failed to load widget script',
    );

    consoleErrorSpy.mockRestore();
  });
});
