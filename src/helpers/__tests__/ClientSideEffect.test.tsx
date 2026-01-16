import { render, cleanup } from '@testing-library/react';
import ClientSideEffect from '../ClientSideEffect';

describe('ClientSideEffect', () => {
  let mockRequestIdleCallback: jest.Mock;
  let mockCancelIdleCallback: jest.Mock;
  let originalRequestIdleCallback: typeof window.requestIdleCallback;
  let originalCancelIdleCallback: typeof window.cancelIdleCallback;

  beforeEach(() => {
    // Store originals
    originalRequestIdleCallback = window.requestIdleCallback;
    originalCancelIdleCallback = window.cancelIdleCallback;

    // Create mocks
    mockRequestIdleCallback = jest.fn((callback) => {
      callback();
      return 1;
    });
    mockCancelIdleCallback = jest.fn();

    // Assign mocks
    window.requestIdleCallback =
      mockRequestIdleCallback as unknown as typeof window.requestIdleCallback;
    window.cancelIdleCallback = mockCancelIdleCallback;

    // Clear any scroll lock attribute
    document.body.removeAttribute('data-scroll-locked');
  });

  afterEach(() => {
    cleanup();
    // Restore originals
    window.requestIdleCallback = originalRequestIdleCallback;
    window.cancelIdleCallback = originalCancelIdleCallback;
    document.body.removeAttribute('data-scroll-locked');
  });

  it('renders without crashing', () => {
    const { container } = render(<ClientSideEffect />);
    expect(container.firstChild).toBeNull();
  });

  it('uses requestIdleCallback when available', () => {
    render(<ClientSideEffect />);

    expect(mockRequestIdleCallback).toHaveBeenCalled();
  });

  it('removes data-scroll-locked attribute from body', () => {
    document.body.setAttribute('data-scroll-locked', '1');
    expect(document.body.hasAttribute('data-scroll-locked')).toBe(true);

    render(<ClientSideEffect />);

    // After requestIdleCallback executes, attribute should be removed
    expect(document.body.hasAttribute('data-scroll-locked')).toBe(false);
  });

  it('sets up MutationObserver to watch for scroll lock attribute', () => {
    const observeSpy = jest.spyOn(MutationObserver.prototype, 'observe');
    const disconnectSpy = jest.spyOn(MutationObserver.prototype, 'disconnect');

    const { unmount } = render(<ClientSideEffect />);

    // Observer should be set up
    expect(observeSpy).toHaveBeenCalledWith(document.body, {
      attributes: true,
      attributeFilter: ['data-scroll-locked'],
    });

    // On unmount, observer should be disconnected
    unmount();
    expect(disconnectSpy).toHaveBeenCalled();

    observeSpy.mockRestore();
    disconnectSpy.mockRestore();
  });

  it('cancels idle callback on unmount', () => {
    const { unmount } = render(<ClientSideEffect />);

    unmount();

    expect(mockCancelIdleCallback).toHaveBeenCalled();
  });

  describe('fallback behavior without requestIdleCallback', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      // Remove requestIdleCallback to test fallback
      // @ts-expect-error - intentionally removing for test
      delete window.requestIdleCallback;
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('uses setTimeout as fallback when requestIdleCallback is not available', () => {
      document.body.setAttribute('data-scroll-locked', '1');

      render(<ClientSideEffect />);

      // Attribute should still be present before timeout
      expect(document.body.hasAttribute('data-scroll-locked')).toBe(true);

      // Fast-forward timers
      jest.advanceTimersByTime(100);

      // After timeout, attribute should be removed
      expect(document.body.hasAttribute('data-scroll-locked')).toBe(false);
    });

    it('clears timeout on unmount', () => {
      const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');

      const { unmount } = render(<ClientSideEffect />);
      unmount();

      expect(clearTimeoutSpy).toHaveBeenCalled();

      clearTimeoutSpy.mockRestore();
    });
  });

  describe('MutationObserver callback', () => {
    it('removes scroll lock when attribute is added dynamically', async () => {
      // Use real requestAnimationFrame for this test
      const rafSpy = jest
        .spyOn(window, 'requestAnimationFrame')
        .mockImplementation((cb) => {
          cb(0);
          return 0;
        });

      render(<ClientSideEffect />);

      // Simulate adding scroll lock attribute after component mounts
      document.body.setAttribute('data-scroll-locked', '1');

      // Wait for MutationObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 0));

      // The observer should have triggered removal via requestAnimationFrame
      expect(document.body.hasAttribute('data-scroll-locked')).toBe(false);

      rafSpy.mockRestore();
    });
  });
});
