import { render, screen } from '@testing-library/react';
import { AnswerBlock } from '../AnswerBlock';

describe('AnswerBlock', () => {
  it('renders question and answer text', () => {
    render(
      <AnswerBlock
        question="What is The Daisy?"
        answer="The Daisy is an AI-powered platform."
      />
    );
    expect(screen.getByText('What is The Daisy?')).toBeInTheDocument();
    expect(screen.getByText('The Daisy is an AI-powered platform.')).toBeInTheDocument();
  });

  it('renders with h2 tag by default', () => {
    render(
      <AnswerBlock question="Test Question" answer="Test answer" />
    );
    const heading = screen.getByText('Test Question');
    expect(heading.tagName).toBe('H2');
  });

  it('renders with h3 tag when specified', () => {
    render(
      <AnswerBlock question="Test Question" answer="Test answer" as="h3" />
    );
    const heading = screen.getByText('Test Question');
    expect(heading.tagName).toBe('H3');
  });

  it('has centered text alignment', () => {
    const { container } = render(
      <AnswerBlock question="Test" answer="Test answer" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('text-center');
  });

  it('renders children when provided', () => {
    render(
      <AnswerBlock question="Q" answer="A">
        <button>CTA Button</button>
      </AnswerBlock>
    );
    expect(screen.getByText('CTA Button')).toBeInTheDocument();
  });

  it('marks answer with data-geo-answer attribute', () => {
    render(<AnswerBlock question="Q" answer="Test answer" />);
    const answer = screen.getByText('Test answer');
    expect(answer).toHaveAttribute('data-geo-answer', 'true');
  });
});
