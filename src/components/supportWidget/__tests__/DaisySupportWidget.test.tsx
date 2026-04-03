import { render } from '@testing-library/react';
import DaisySupportWidget from '../DaisySupportWidget';

// Track props passed to the mock Script component
let capturedProps: Record<string, any> = {};

jest.mock('next/script', () => {
  return function MockScript(props: any) {
    capturedProps = props;
    return <div data-testid={props.id} data-src={props.src} />;
  };
});

describe('DaisySupportWidget', () => {
  beforeEach(() => {
    capturedProps = {};
  });

  it('renders a script tag with the correct src containing the widget URL', () => {
    const { getByTestId } = render(<DaisySupportWidget />);

    const script = getByTestId('daisy-support-widget-js');
    expect(script).toBeInTheDocument();
    expect(script).toHaveAttribute(
      'data-src',
      'https://devapp.trythedaisy.com/js/daisy-support-widget.js',
    );
  });

  it('script has strategy "afterInteractive"', () => {
    render(<DaisySupportWidget />);
    expect(capturedProps.strategy).toBe('afterInteractive');
  });

  it('script has the correct id', () => {
    render(<DaisySupportWidget />);
    expect(capturedProps.id).toBe('daisy-support-widget-js');
  });
});
