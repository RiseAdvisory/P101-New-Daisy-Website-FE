import { render, screen } from '@testing-library/react';
import { CalloutBox } from '../CalloutBox';

describe('CalloutBox', () => {
  it('renders tip callout with text', () => {
    render(<CalloutBox type="tip" text="This is a helpful tip." />);
    expect(screen.getByText(/This is a helpful tip/)).toBeInTheDocument();
  });

  it('renders warning callout', () => {
    render(<CalloutBox type="warning" text="Be careful about this." />);
    expect(screen.getByText(/Be careful about this/)).toBeInTheDocument();
  });

  it('renders info callout', () => {
    render(<CalloutBox type="info" text="Here is some information." />);
    expect(screen.getByText(/Here is some information/)).toBeInTheDocument();
  });

  it('has role="note" for accessibility', () => {
    render(<CalloutBox type="tip" text="Accessible note" />);
    expect(screen.getByRole('note')).toBeInTheDocument();
  });
});
