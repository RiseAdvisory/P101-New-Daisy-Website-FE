import { render, screen, waitFor } from '@testing-library/react';
import { AboutPosts } from '../AbouPosts';
import DOMPurify from 'dompurify';

// Mock dependencies
jest.mock('@/store/post');
jest.mock('dompurify');

const mockDOMPurify = DOMPurify as jest.Mocked<typeof DOMPurify>;

describe('AboutPosts Security Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock DOMPurify to return sanitized content
    mockDOMPurify.sanitize = jest.fn((dirty) => dirty);
  });

  it('should sanitize malicious HTML with script tags', async () => {
    const maliciousHTML = '<p>Safe content</p><script>alert("XSS")</script>';
    const sanitizedHTML = '<p>Safe content</p>';

    require('@/store/post').usePostStore = jest.fn(() => ({
      post: { aboutPosts: maliciousHTML },
    }));

    mockDOMPurify.sanitize.mockReturnValueOnce(sanitizedHTML);

    render(<AboutPosts />);

    await waitFor(() => {
      expect(mockDOMPurify.sanitize).toHaveBeenCalledWith(maliciousHTML);
    });
  });

  it('should sanitize HTML with onclick handlers', async () => {
    const maliciousHTML = '<div onclick="alert(\'XSS\')">Click me</div>';
    const sanitizedHTML = '<div>Click me</div>';

    require('@/store/post').usePostStore = jest.fn(() => ({
      post: { aboutPosts: maliciousHTML },
    }));

    mockDOMPurify.sanitize.mockReturnValueOnce(sanitizedHTML);

    render(<AboutPosts />);

    await waitFor(() => {
      expect(mockDOMPurify.sanitize).toHaveBeenCalledWith(maliciousHTML);
    });
  });

  it('should handle empty or null content safely', async () => {
    require('@/store/post').usePostStore = jest.fn(() => ({
      post: { aboutPosts: null },
    }));

    render(<AboutPosts />);

    await waitFor(() => {
      expect(mockDOMPurify.sanitize).not.toHaveBeenCalled();
    });
  });

  it('should sanitize even if post returns unexpected HTML', async () => {
    const unexpectedHTML = '<img src=x onerror="alert(\'XSS\')">';
    const sanitizedHTML = '<img src="x">';

    require('@/store/post').usePostStore = jest.fn(() => ({
      post: { aboutPosts: unexpectedHTML },
    }));

    mockDOMPurify.sanitize.mockReturnValueOnce(sanitizedHTML);

    render(<AboutPosts />);

    await waitFor(() => {
      expect(mockDOMPurify.sanitize).toHaveBeenCalledWith(unexpectedHTML);
    });
  });
});
