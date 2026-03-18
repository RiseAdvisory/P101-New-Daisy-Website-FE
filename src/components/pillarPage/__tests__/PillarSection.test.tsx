import { render, screen } from '@testing-library/react';
import { PillarSection } from '../PillarSection';

jest.mock('next/link', () => {
  function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  }
  return MockLink;
});

describe('PillarSection', () => {
  it('renders section title as h2', () => {
    render(
      <PillarSection
        id="test-section"
        title="Test Section Title"
        content="<p>Section content here.</p>"
      />
    );
    expect(
      screen.getByRole('heading', { level: 2 })
    ).toHaveTextContent('Test Section Title');
  });

  it('renders HTML content', () => {
    render(
      <PillarSection
        id="test-section"
        title="Title"
        content="<p>Paragraph with <strong>bold text</strong>.</p>"
      />
    );
    expect(screen.getByText(/bold text/)).toBeInTheDocument();
  });

  it('renders callout box when provided', () => {
    render(
      <PillarSection
        id="test-section"
        title="Title"
        content="<p>Content</p>"
        callout={{ type: 'tip', text: 'A helpful tip here' }}
      />
    );
    expect(screen.getByText(/A helpful tip here/)).toBeInTheDocument();
  });

  it('renders related links when provided', () => {
    render(
      <PillarSection
        id="test-section"
        title="Title"
        content="<p>Content</p>"
        relatedLinks={[
          { title: 'Related Guide', url: '/en/guides/test' },
        ]}
      />
    );
    expect(screen.getByText('Related reading')).toBeInTheDocument();
    expect(screen.getByText('Related Guide')).toBeInTheDocument();
  });

  it('has correct id for anchor linking', () => {
    const { container } = render(
      <PillarSection
        id="my-section-id"
        title="Title"
        content="<p>Content</p>"
      />
    );
    expect(container.querySelector('#my-section-id')).toBeTruthy();
  });
});
