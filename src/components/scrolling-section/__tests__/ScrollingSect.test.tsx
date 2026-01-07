import { render, act } from '@testing-library/react';
import ScrollSection from '../ScrollingSect';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img alt="" {...props} />,
}));

describe('ScrollSection - IntersectionObserver', () => {
  let mockIntersectionObserver: jest.Mock;
  let observeCallback: IntersectionObserverCallback;

  beforeEach(() => {
    // Mock IntersectionObserver
    mockIntersectionObserver = jest.fn();
    const mockObserve = jest.fn();
    const mockDisconnect = jest.fn();

    window.IntersectionObserver = jest.fn((callback) => {
      observeCallback = callback;
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        unobserve: jest.fn(),
        root: null,
        rootMargin: '',
        thresholds: [],
        takeRecords: jest.fn(),
      };
    }) as any;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a single IntersectionObserver instance', () => {
    render(<ScrollSection />);

    expect(window.IntersectionObserver).toHaveBeenCalledTimes(1);
    expect(window.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.5 },
    );
  });

  it('should update currentIndex when a section becomes visible', async () => {
    const { container } = render(<ScrollSection />);

    const sections = container.querySelectorAll('[class*="lockerSection"]');
    expect(sections).toHaveLength(4);

    // Simulate section 2 becoming visible
    act(() => {
      observeCallback(
        [
          {
            isIntersecting: true,
            target: sections[1] as Element,
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    // Verify the image at index 1 gets the active class
    const images = container.querySelectorAll('[class*="image"]');
    expect(images[1].className).toContain('active');
  });

  it('should correctly identify section index from DOM element', () => {
    const { container } = render(<ScrollSection />);

    const sections = container.querySelectorAll('[class*="lockerSection"]');

    // Test each section
    for (let i = 0; i < sections.length; i++) {
      act(() => {
        observeCallback(
          [
            {
              isIntersecting: true,
              target: sections[i] as Element,
            } as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );
      });

      const images = container.querySelectorAll('[class*="image"]');
      expect(images[i].className).toContain('active');
    }
  });

  it('should not update index when section is not intersecting', () => {
    const { container } = render(<ScrollSection />);

    const sections = container.querySelectorAll('[class*="lockerSection"]');

    // Initial state - section 0 should be active
    let images = container.querySelectorAll('[class*="image"]');
    expect(images[0].className).toContain('active');

    // Simulate section leaving viewport (not intersecting)
    act(() => {
      observeCallback(
        [
          {
            isIntersecting: false,
            target: sections[1] as Element,
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    // Active index should remain at 0
    images = container.querySelectorAll('[class*="image"]');
    expect(images[0].className).toContain('active');
  });

  it('should handle multiple sections intersecting simultaneously', () => {
    const { container } = render(<ScrollSection />);

    const sections = container.querySelectorAll('[class*="lockerSection"]');

    // Simulate multiple sections intersecting
    act(() => {
      observeCallback(
        [
          {
            isIntersecting: true,
            target: sections[1] as Element,
          } as IntersectionObserverEntry,
          {
            isIntersecting: true,
            target: sections[2] as Element,
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    // Should update to the last intersecting section (index 2)
    const images = container.querySelectorAll('[class*="image"]');
    expect(images[2].className).toContain('active');
  });

  it('should observe all section elements on mount', () => {
    const mockObserve = jest.fn();

    window.IntersectionObserver = jest.fn(() => ({
      observe: mockObserve,
      disconnect: jest.fn(),
      unobserve: jest.fn(),
      root: null,
      rootMargin: '',
      thresholds: [],
      takeRecords: jest.fn(),
    })) as any;

    render(<ScrollSection />);

    // Should call observe 4 times (one for each section)
    expect(mockObserve).toHaveBeenCalledTimes(4);
  });

  it('should disconnect observer on unmount', () => {
    const mockDisconnect = jest.fn();

    window.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      disconnect: mockDisconnect,
      unobserve: jest.fn(),
      root: null,
      rootMargin: '',
      thresholds: [],
      takeRecords: jest.fn(),
    })) as any;

    const { unmount } = render(<ScrollSection />);

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('should use correct threshold value', () => {
    render(<ScrollSection />);

    expect(window.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0.5 },
    );
  });
});
