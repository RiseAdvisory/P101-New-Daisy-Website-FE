import { render, waitFor, act } from '@testing-library/react';
import { ServiceWorkerRegistration } from '../ServiceWorkerRegistration';

describe('ServiceWorkerRegistration', () => {
  const originalEnv = process.env;
  const originalNavigator = global.navigator;

  // Mock service worker registration
  const mockRegistration = {
    scope: 'http://localhost/',
    update: jest.fn().mockResolvedValue(undefined),
    installing: null as ServiceWorker | null,
    addEventListener: jest.fn(),
  };

  beforeEach(() => {
    jest.resetModules();
    jest.useFakeTimers();
    process.env = { ...originalEnv, NODE_ENV: 'production' };

    // Reset mock
    mockRegistration.update.mockClear();
    mockRegistration.addEventListener.mockClear();
    mockRegistration.installing = null;

    // Mock serviceWorker API
    Object.defineProperty(global.navigator, 'serviceWorker', {
      value: {
        register: jest.fn().mockResolvedValue(mockRegistration),
        controller: null,
      },
      writable: true,
      configurable: true,
    });

    // Mock window.addEventListener for 'load' event
    jest.spyOn(window, 'addEventListener');
  });

  afterEach(() => {
    process.env = originalEnv;
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should render null (no visible UI)', () => {
    const { container } = render(<ServiceWorkerRegistration />);
    expect(container.firstChild).toBeNull();
  });

  it('should register service worker on window load in production', async () => {
    render(<ServiceWorkerRegistration />);

    // Verify load event listener was added
    expect(window.addEventListener).toHaveBeenCalledWith(
      'load',
      expect.any(Function),
    );

    // Simulate window load event
    const loadHandler = (window.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === 'load',
    )?.[1];

    await act(async () => {
      loadHandler?.();
    });

    await waitFor(() => {
      expect(navigator.serviceWorker.register).toHaveBeenCalledWith('/sw.js');
    });
  });

  it('should not register service worker in development', () => {
    process.env.NODE_ENV = 'development';

    render(<ServiceWorkerRegistration />);

    // Even if load event fires, should not register
    const loadHandler = (window.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === 'load',
    )?.[1];

    loadHandler?.();

    expect(navigator.serviceWorker.register).not.toHaveBeenCalled();
  });

  it('should not register if serviceWorker is not supported', () => {
    // Delete serviceWorker from navigator to simulate unsupported browser
    // @ts-expect-error - intentionally removing serviceWorker
    delete navigator.serviceWorker;

    const mockRegister = jest.fn();

    render(<ServiceWorkerRegistration />);

    const loadHandler = (window.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === 'load',
    )?.[1];

    // Trigger load - should not attempt to register since serviceWorker is not in navigator
    loadHandler?.();

    // Register should not be called since serviceWorker is not available
    expect(mockRegister).not.toHaveBeenCalled();
  });

  it('should set up periodic update check (every hour)', async () => {
    render(<ServiceWorkerRegistration />);

    const loadHandler = (window.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === 'load',
    )?.[1];

    await act(async () => {
      loadHandler?.();
    });

    await waitFor(() => {
      expect(navigator.serviceWorker.register).toHaveBeenCalled();
    });

    // Initially, update should not be called
    expect(mockRegistration.update).not.toHaveBeenCalled();

    // Advance by 1 hour
    await act(async () => {
      jest.advanceTimersByTime(60 * 60 * 1000);
    });

    // Now update should have been called once
    expect(mockRegistration.update).toHaveBeenCalledTimes(1);

    // Advance by another hour
    await act(async () => {
      jest.advanceTimersByTime(60 * 60 * 1000);
    });

    // Update should have been called twice
    expect(mockRegistration.update).toHaveBeenCalledTimes(2);
  });

  it('should handle registration failure gracefully', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    const registerError = new Error('Registration failed');

    (navigator.serviceWorker.register as jest.Mock).mockRejectedValueOnce(
      registerError,
    );

    render(<ServiceWorkerRegistration />);

    const loadHandler = (window.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === 'load',
    )?.[1];

    await act(async () => {
      loadHandler?.();
    });

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        '[SW] Service Worker registration failed:',
        registerError,
      );
    });

    consoleErrorSpy.mockRestore();
  });

  it('should log successful registration', async () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    render(<ServiceWorkerRegistration />);

    const loadHandler = (window.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === 'load',
    )?.[1];

    await act(async () => {
      loadHandler?.();
    });

    await waitFor(() => {
      expect(consoleLogSpy).toHaveBeenCalledWith(
        '[SW] Service Worker registered:',
        mockRegistration.scope,
      );
    });

    consoleLogSpy.mockRestore();
  });

  it('should listen for updatefound event on registration', async () => {
    render(<ServiceWorkerRegistration />);

    const loadHandler = (window.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === 'load',
    )?.[1];

    await act(async () => {
      loadHandler?.();
    });

    await waitFor(() => {
      expect(mockRegistration.addEventListener).toHaveBeenCalledWith(
        'updatefound',
        expect.any(Function),
      );
    });
  });

  it('should handle updatefound and log when new version is available', async () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    // Mock installing worker with state change
    const mockInstallingWorker = {
      state: 'installed',
      addEventListener: jest.fn((event, callback) => {
        if (event === 'statechange') {
          // Immediately trigger statechange
          callback();
        }
      }),
    };

    mockRegistration.addEventListener = jest.fn((event, callback) => {
      if (event === 'updatefound') {
        // Set installing worker and trigger callback
        mockRegistration.installing =
          mockInstallingWorker as unknown as ServiceWorker;
        callback();
      }
    });

    // Mock controller to simulate existing service worker
    Object.defineProperty(navigator.serviceWorker, 'controller', {
      value: { state: 'activated' },
      writable: true,
    });

    render(<ServiceWorkerRegistration />);

    const loadHandler = (window.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === 'load',
    )?.[1];

    await act(async () => {
      loadHandler?.();
    });

    await waitFor(() => {
      expect(consoleLogSpy).toHaveBeenCalledWith(
        '[SW] New version available',
      );
    });

    consoleLogSpy.mockRestore();
  });
});
