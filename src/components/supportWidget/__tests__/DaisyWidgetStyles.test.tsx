import { render } from '@testing-library/react';
import { DaisyWidgetStyles } from '../DaisyWidgetStyles';

describe('DaisyWidgetStyles', () => {
  it('renders without crashing', () => {
    const { container } = render(<DaisyWidgetStyles />);
    expect(container.innerHTML).toBe('');
  });

  it('returns null (renders no DOM nodes)', () => {
    const { container } = render(<DaisyWidgetStyles />);
    expect(container.firstChild).toBeNull();
  });
});
