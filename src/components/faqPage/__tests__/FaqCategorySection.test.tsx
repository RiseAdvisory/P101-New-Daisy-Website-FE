import { render, screen } from '@testing-library/react';
import { FaqCategorySection } from '../FaqCategorySection';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/en/faq/business'),
}));

describe('FaqCategorySection', () => {
  const mockQuestions = [
    { question: 'How much does it cost?', answer: 'Plans start from $50/month.' },
    { question: 'Is there a free trial?', answer: 'Yes, 14 days free.' },
  ];

  it('renders category title', () => {
    render(<FaqCategorySection title="Pricing & Plans" questions={mockQuestions} />);
    expect(screen.getByText('Pricing & Plans')).toBeInTheDocument();
  });

  it('renders all questions', () => {
    render(<FaqCategorySection title="Pricing & Plans" questions={mockQuestions} />);
    expect(screen.getByText('How much does it cost?')).toBeInTheDocument();
    expect(screen.getByText('Is there a free trial?')).toBeInTheDocument();
  });

  it('renders nothing when questions array is empty', () => {
    const { container } = render(<FaqCategorySection title="Empty" questions={[]} />);
    expect(container.querySelector('h2')).toBeNull();
  });
});
