import { render, screen } from '@testing-library/react';
import { QAAccordion } from '../QAAccordion';
import DOMPurify from 'dompurify';

jest.mock('dompurify');

const mockDOMPurify = DOMPurify as jest.Mocked<typeof DOMPurify>;

describe('QAAccordion Security Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockDOMPurify.sanitize = jest.fn((dirty) => dirty);
  });

  const mockItem = {
    question: 'How do I use the app?',
    answer: '<p>Here is how you use the app</p>',
  };

  it('should sanitize answer with malicious script tags', () => {
    const maliciousItem = {
      question: 'Test question',
      answer: '<p>Answer</p><script>alert("XSS")</script>',
    };

    mockDOMPurify.sanitize.mockReturnValueOnce('<p>Answer</p>');

    render(<QAAccordion value="test" item={maliciousItem} />);

    expect(mockDOMPurify.sanitize).toHaveBeenCalledWith(maliciousItem.answer);
  });

  it('should sanitize answer with onclick handlers', () => {
    const maliciousItem = {
      question: 'Test question',
      answer: '<a href="#" onclick="alert(\'XSS\')">Click me</a>',
    };

    mockDOMPurify.sanitize.mockReturnValueOnce('<a href="#">Click me</a>');

    render(<QAAccordion value="test" item={maliciousItem} />);

    expect(mockDOMPurify.sanitize).toHaveBeenCalledWith(maliciousItem.answer);
  });

  it('should handle null or empty answers without calling sanitize', () => {
    const emptyItem = {
      question: 'Test question',
      answer: null,
    };

    render(<QAAccordion value="test" item={emptyItem} />);

    // When answer is null, DOMPurify should not be called (returns empty string directly)
    expect(mockDOMPurify.sanitize).not.toHaveBeenCalled();
  });

  it('should sanitize answer with style-based XSS', () => {
    const maliciousItem = {
      question: 'Test question',
      answer:
        '<div style="background: url(javascript:alert(\'XSS\'))">Content</div>',
    };

    mockDOMPurify.sanitize.mockReturnValueOnce('<div>Content</div>');

    render(<QAAccordion value="test" item={maliciousItem} />);

    expect(mockDOMPurify.sanitize).toHaveBeenCalledWith(maliciousItem.answer);
  });

  it('should render safe HTML content correctly', () => {
    const safeItem = {
      question: 'Test question',
      answer: '<p><strong>Bold text</strong> and <em>italic text</em></p>',
    };

    mockDOMPurify.sanitize.mockReturnValueOnce(safeItem.answer);

    render(<QAAccordion value="test" item={safeItem} />);

    expect(mockDOMPurify.sanitize).toHaveBeenCalledWith(safeItem.answer);
    expect(screen.getByText('Test question')).toBeInTheDocument();
  });
});
