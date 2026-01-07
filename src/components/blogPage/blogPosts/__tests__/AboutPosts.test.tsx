import { render, screen, waitFor } from '@testing-library/react';
import { AboutPosts } from '../AbouPosts';
import axiosInstance from '@/helpers/axiosConfig';
import DOMPurify from 'dompurify';

// Mock dependencies
jest.mock('@/helpers/axiosConfig');
jest.mock('@/store/post');
jest.mock('@/store/currentPath');
jest.mock('@/store/language');
jest.mock('dompurify');

const mockAxiosInstance = axiosInstance as jest.Mocked<typeof axiosInstance>;
const mockDOMPurify = DOMPurify as jest.Mocked<typeof DOMPurify>;

describe('AboutPosts Security Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock store hooks
    require('@/store/post').usePostStore = jest.fn(() => ({
      handlId: 'test-post-id',
    }));

    require('@/store/currentPath').useChoosePath = jest.fn(() => ({
      pathStrapi: '/api/posts',
    }));

    require('@/store/language').useChangeLanguage = jest.fn(() => ({
      lang: 'en',
    }));

    // Mock DOMPurify to return sanitized content
    mockDOMPurify.sanitize = jest.fn((dirty) => dirty);
  });

  it('should sanitize malicious HTML with script tags', async () => {
    const maliciousHTML = '<p>Safe content</p><script>alert("XSS")</script>';
    const sanitizedHTML = '<p>Safe content</p>';

    mockAxiosInstance.get.mockResolvedValueOnce({
      data: {
        data: {
          attributes: {
            aboutPosts: maliciousHTML,
          },
        },
      },
    });

    mockDOMPurify.sanitize.mockReturnValueOnce(sanitizedHTML);

    render(<AboutPosts />);

    await waitFor(() => {
      expect(mockDOMPurify.sanitize).toHaveBeenCalledWith(maliciousHTML);
    });
  });

  it('should sanitize HTML with onclick handlers', async () => {
    const maliciousHTML = '<div onclick="alert(\'XSS\')">Click me</div>';
    const sanitizedHTML = '<div>Click me</div>';

    mockAxiosInstance.get.mockResolvedValueOnce({
      data: {
        data: {
          attributes: {
            aboutPosts: maliciousHTML,
          },
        },
      },
    });

    mockDOMPurify.sanitize.mockReturnValueOnce(sanitizedHTML);

    render(<AboutPosts />);

    await waitFor(() => {
      expect(mockDOMPurify.sanitize).toHaveBeenCalledWith(maliciousHTML);
    });
  });

  it('should sanitize HTML with iframe injection', async () => {
    const maliciousHTML =
      '<p>Content</p><iframe src="https://evil.com"></iframe>';
    const sanitizedHTML = '<p>Content</p>';

    mockAxiosInstance.get.mockResolvedValueOnce({
      data: {
        data: {
          attributes: {
            aboutPosts: maliciousHTML,
          },
        },
      },
    });

    mockDOMPurify.sanitize.mockReturnValueOnce(sanitizedHTML);

    render(<AboutPosts />);

    await waitFor(() => {
      expect(mockDOMPurify.sanitize).toHaveBeenCalledWith(maliciousHTML);
    });
  });

  it('should handle empty or null content safely', async () => {
    mockAxiosInstance.get.mockResolvedValueOnce({
      data: {
        data: {
          attributes: {
            aboutPosts: null,
          },
        },
      },
    });

    render(<AboutPosts />);

    await waitFor(() => {
      expect(mockDOMPurify.sanitize).not.toHaveBeenCalled();
    });
  });

  it('should sanitize even if API returns unexpected HTML', async () => {
    const unexpectedHTML = '<img src=x onerror="alert(\'XSS\')">';
    const sanitizedHTML = '<img src="x">';

    mockAxiosInstance.get.mockResolvedValueOnce({
      data: {
        data: {
          attributes: {
            aboutPosts: unexpectedHTML,
          },
        },
      },
    });

    mockDOMPurify.sanitize.mockReturnValueOnce(sanitizedHTML);

    render(<AboutPosts />);

    await waitFor(() => {
      expect(mockDOMPurify.sanitize).toHaveBeenCalledWith(unexpectedHTML);
    });
  });
});
