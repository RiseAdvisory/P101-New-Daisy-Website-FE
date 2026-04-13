import { render } from '@testing-library/react';
import FaqPersonaPage from '../page';

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  notFound: jest.fn(() => {
    throw new Error('NOT_FOUND');
  }),
  usePathname: jest.fn(() => '/en/faq/business'),
  redirect: jest.fn(),
}));

// Mock child components
jest.mock('@/components/seo/WebPageSchema', () => ({
  WebPageSchema: () => <div data-testid="web-page-schema" />,
}));

jest.mock('@/components/seo/PageBreadcrumbSchema', () => ({
  PageBreadcrumbSchema: () => <div data-testid="breadcrumb-schema" />,
}));

jest.mock('@/components/seo/SpeakableSchema', () => ({
  SpeakableSchema: () => <div data-testid="speakable-schema" />,
}));

jest.mock('@/components/seo/FaqSchema', () => ({
  FaqSchema: ({ faqs }: { faqs: any[] }) => (
    <div data-testid="faq-schema" data-count={faqs.length} />
  ),
}));

jest.mock('../FaqPersonaClient', () => ({
  FaqPersonaClient: ({ persona }: { persona: string }) => (
    <div data-testid="faq-persona-client" data-persona={persona} />
  ),
}));

describe('FaqPersonaPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders business FAQ page', () => {
    const { getByTestId } = render(
      <FaqPersonaPage params={{ locale: 'en', persona: 'business' }} />,
    );
    expect(getByTestId('faq-persona-client')).toHaveAttribute(
      'data-persona',
      'business',
    );
    expect(getByTestId('faq-schema')).toBeInTheDocument();
    expect(getByTestId('web-page-schema')).toBeInTheDocument();
    expect(getByTestId('breadcrumb-schema')).toBeInTheDocument();
  });

  it('renders customer FAQ page', () => {
    const { getByTestId } = render(
      <FaqPersonaPage params={{ locale: 'en', persona: 'customer' }} />,
    );
    expect(getByTestId('faq-persona-client')).toHaveAttribute(
      'data-persona',
      'customer',
    );
  });

  it('renders professional FAQ page', () => {
    const { getByTestId } = render(
      <FaqPersonaPage params={{ locale: 'en', persona: 'professional' }} />,
    );
    expect(getByTestId('faq-persona-client')).toHaveAttribute(
      'data-persona',
      'professional',
    );
  });

  it('includes all FAQ questions in schema', () => {
    const { getByTestId } = render(
      <FaqPersonaPage params={{ locale: 'en', persona: 'business' }} />,
    );
    const schema = getByTestId('faq-schema');
    const count = parseInt(schema.getAttribute('data-count') || '0');
    expect(count).toBe(36); // 6 categories x 6 questions
  });

  it('calls notFound for invalid persona', () => {
    const { notFound } = require('next/navigation');
    expect(() =>
      render(
        <FaqPersonaPage params={{ locale: 'en', persona: 'invalid' }} />,
      ),
    ).toThrow('NOT_FOUND');
    expect(notFound).toHaveBeenCalled();
  });
});
