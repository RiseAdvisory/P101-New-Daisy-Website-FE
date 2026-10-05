import { render, screen } from '@testing-library/react';
import { ComparisonSourceNote } from '../ComparisonSourceNote';
import { ComparisonHero } from '../ComparisonHero';

describe('ComparisonSourceNote', () => {
  it('states the date, the sources, the evaluation criteria and the contact email', () => {
    render(<ComparisonSourceNote locale="en" lastUpdated="2026-10-04" />);
    const note = screen.getByTestId('comparison-source-note');
    expect(note).toHaveTextContent('This page was last updated on 4 October 2026.');
    expect(note).toHaveTextContent("check each company's website for the latest details");
    expect(note).toHaveTextContent("The Daisy's internal evaluation criteria");
    const link = screen.getByRole('link', { name: 'info@trythedaisy.com' });
    expect(link).toHaveAttribute('href', 'mailto:info@trythedaisy.com');
  });

  it('renders the Arabic note with the same email', () => {
    render(<ComparisonSourceNote locale="ar" lastUpdated="2026-10-04" />);
    const note = screen.getByTestId('comparison-source-note');
    expect(note).toHaveTextContent('آخر تحديث لهذه الصفحة في 4 أكتوبر 2026.');
    expect(note).toHaveTextContent('معايير التقييم الداخلية لدى ديزي');
    expect(screen.getByRole('link', { name: 'info@trythedaisy.com' })).toHaveAttribute('dir', 'ltr');
  });

  it('still renders the rest of the note when a page has no date', () => {
    render(<ComparisonSourceNote locale="en" />);
    expect(screen.getByTestId('comparison-source-note')).not.toHaveTextContent('last updated');
    expect(screen.getByRole('link', { name: 'info@trythedaisy.com' })).toBeInTheDocument();
  });
});

describe('ComparisonHero last-updated line', () => {
  it('shows a machine-readable date under the subtitle', () => {
    const { container } = render(
      <ComparisonHero title="T" subtitle="S" variant="daisy-vs" locale="en" lastUpdated="2026-10-04" />,
    );
    expect(screen.getByTestId('comparison-last-updated')).toHaveTextContent('Last updated: 4 October 2026');
    expect(container.querySelector('time[datetime="2026-10-04"]')).toBeTruthy();
  });

  it('shows nothing when no date is passed (solution pages)', () => {
    render(<ComparisonHero title="T" subtitle="S" variant="solution" locale="en" />);
    expect(screen.queryByTestId('comparison-last-updated')).toBeNull();
  });
});
