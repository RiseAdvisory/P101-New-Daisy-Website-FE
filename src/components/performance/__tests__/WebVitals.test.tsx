import { render } from '@testing-library/react';
import { WebVitals } from '../WebVitals';

// Mock the reportWebVitals module
jest.mock('@/helpers/reportWebVitals', () => ({
  reportWebVitals: jest.fn(),
  logWebVitals: jest.fn(),
}));

import { reportWebVitals, logWebVitals } from '@/helpers/reportWebVitals';

describe('WebVitals', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should render null (no visible UI)', () => {
    const { container } = render(<WebVitals />);
    expect(container.firstChild).toBeNull();
  });

  it('should call logWebVitals in development mode', () => {
    process.env.NODE_ENV = 'development';

    render(<WebVitals />);

    expect(logWebVitals).toHaveBeenCalled();
    expect(reportWebVitals).not.toHaveBeenCalled();
  });

  it('should call reportWebVitals in production mode', () => {
    process.env.NODE_ENV = 'production';

    render(<WebVitals />);

    expect(reportWebVitals).toHaveBeenCalled();
    expect(logWebVitals).not.toHaveBeenCalled();
  });

  it('should only call vitals function once on mount', () => {
    process.env.NODE_ENV = 'production';

    const { rerender } = render(<WebVitals />);

    expect(reportWebVitals).toHaveBeenCalledTimes(1);

    // Rerender should not call again due to useEffect dependency array
    rerender(<WebVitals />);

    expect(reportWebVitals).toHaveBeenCalledTimes(1);
  });
});
