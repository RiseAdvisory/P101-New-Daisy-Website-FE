import { render, screen, fireEvent } from '@testing-library/react';
import { ConsentBanner } from '../ConsentBanner';

describe('ConsentBanner', () => {
  function setup() {
    const onAccept = jest.fn();
    const onDecline = jest.fn();
    render(<ConsentBanner onAccept={onAccept} onDecline={onDecline} />);
    return { onAccept, onDecline };
  }

  it('renders the cookie message and both action buttons', () => {
    setup();
    expect(
      screen.getByText(/we use cookies to analyse site usage/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /accept/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /decline/i })).toBeInTheDocument();
  });

  it('exposes a dialog role and accessible label', () => {
    setup();
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-label', 'Cookie consent');
  });

  it('uses type="button" on both actions to avoid accidental form submits', () => {
    setup();
    expect(screen.getByRole('button', { name: /accept/i })).toHaveAttribute(
      'type',
      'button',
    );
    expect(screen.getByRole('button', { name: /decline/i })).toHaveAttribute(
      'type',
      'button',
    );
  });

  it('fires onAccept exactly once when Accept is clicked', () => {
    const { onAccept, onDecline } = setup();
    fireEvent.click(screen.getByRole('button', { name: /accept/i }));
    expect(onAccept).toHaveBeenCalledTimes(1);
    expect(onDecline).not.toHaveBeenCalled();
  });

  it('fires onDecline exactly once when Decline is clicked', () => {
    const { onAccept, onDecline } = setup();
    fireEvent.click(screen.getByRole('button', { name: /decline/i }));
    expect(onDecline).toHaveBeenCalledTimes(1);
    expect(onAccept).not.toHaveBeenCalled();
  });

  it('applies the brand-aligned classes (primary accept, primary-outline decline)', () => {
    setup();
    const accept = screen.getByRole('button', { name: /accept/i });
    const decline = screen.getByRole('button', { name: /decline/i });
    expect(accept.className).toEqual(expect.stringContaining('bg-primary'));
    expect(accept.className).toEqual(expect.stringContaining('text-white'));
    expect(decline.className).toEqual(expect.stringContaining('border-primary'));
    expect(decline.className).toEqual(expect.stringContaining('text-primary'));
  });
});
