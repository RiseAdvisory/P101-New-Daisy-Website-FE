import { render, screen, fireEvent } from '@testing-library/react';
import {
  Calculater,
  sanitizeNumberInput,
  handleNumericKeyDown,
} from '../Calculater';

// Mock dependencies
jest.mock('@/store/calculateResult', () => ({
  useCalculate: jest.fn(() => ({
    workspace: '1',
    country: '1',
    staff: '1',
    setCalculate: jest.fn(),
  })),
}));

describe('sanitizeNumberInput', () => {
  it('should strip all non-numeric characters', () => {
    expect(sanitizeNumberInput('abc')).toBe('');
    expect(sanitizeNumberInput('abc123')).toBe('123');
    expect(sanitizeNumberInput('1a2b3c')).toBe('123');
  });

  it('should preserve English numerals (0-9)', () => {
    expect(sanitizeNumberInput('123')).toBe('123');
    expect(sanitizeNumberInput('0')).toBe('0');
    expect(sanitizeNumberInput('999')).toBe('999');
  });

  it('should strip Arabic-Indic numerals', () => {
    expect(sanitizeNumberInput('٥')).toBe('');
    expect(sanitizeNumberInput('١٢٣')).toBe('');
    expect(sanitizeNumberInput('5٥')).toBe('5');
  });

  it('should strip special characters and symbols', () => {
    expect(sanitizeNumberInput('!@#$%')).toBe('');
    expect(sanitizeNumberInput('12.34')).toBe('1234');
    expect(sanitizeNumberInput('12,34')).toBe('1234');
    expect(sanitizeNumberInput('12-34')).toBe('1234');
  });

  it('should handle empty strings', () => {
    expect(sanitizeNumberInput('')).toBe('');
  });

  it('should handle mixed content', () => {
    expect(sanitizeNumberInput('Price: $123')).toBe('123');
    expect(sanitizeNumberInput('10 items')).toBe('10');
  });
});

describe('handleNumericKeyDown', () => {
  it('should allow navigation and control keys', () => {
    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'Escape',
      'Enter',
      'ArrowLeft',
      'ArrowRight',
    ];

    allowedKeys.forEach((key) => {
      const mockEvent = {
        key,
        preventDefault: jest.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      handleNumericKeyDown(mockEvent);
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });
  });

  it('should allow English digit keys (0-9)', () => {
    for (let i = 0; i <= 9; i++) {
      const mockEvent = {
        key: i.toString(),
        preventDefault: jest.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      handleNumericKeyDown(mockEvent);
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    }
  });

  it('should block letter keys', () => {
    const letters = ['a', 'b', 'c', 'x', 'y', 'z', 'A', 'B', 'Z'];

    letters.forEach((key) => {
      const mockEvent = {
        key,
        preventDefault: jest.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      handleNumericKeyDown(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });

  it('should block special character keys', () => {
    const specialChars = ['!', '@', '#', '$', '%', '.', ',', '-', '+'];

    specialChars.forEach((key) => {
      const mockEvent = {
        key,
        preventDefault: jest.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      handleNumericKeyDown(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });

  it('should block Arabic-Indic numeral keys', () => {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    arabicNumerals.forEach((key) => {
      const mockEvent = {
        key,
        preventDefault: jest.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;

      handleNumericKeyDown(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });
});

describe('Calculater Component - Input Validation', () => {
  const mockSetCalculate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    require('@/store/calculateResult').useCalculate.mockReturnValue({
      workspace: '1',
      country: '1',
      staff: '5',
      setCalculate: mockSetCalculate,
    });
  });

  const mockTitleTypeCalculate = {
    firstInput: {
      title: 'Staff',
      description: 'Number of staff',
    },
    secondInput: {
      title: 'Workspaces',
      description: 'Number of workspaces',
    },
    thirdInput: {
      title: 'Countries',
      description: 'Number of countries',
    },
  };

  it('should render all three numeric inputs', () => {
    const { container } = render(
      <Calculater
        homeService={false}
        setHomeService={jest.fn()}
        onboarding={false}
        setOnboarding={jest.fn()}
        conciergeService={false}
        setConciergeService={jest.fn()}
        calculationFormRef={{ current: null }}
        titleTypeCalculate={mockTitleTypeCalculate}
        overflowText={{ btnTextCalculate: 'Enable' }}
      />,
    );

    const inputs = container.querySelectorAll(
      'input[type="text"][inputMode="numeric"]',
    );
    expect(inputs).toHaveLength(3);
  });

  it('should sanitize pasted content in staff input', () => {
    const { container } = render(
      <Calculater
        homeService={false}
        setHomeService={jest.fn()}
        onboarding={false}
        setOnboarding={jest.fn()}
        conciergeService={false}
        setConciergeService={jest.fn()}
        calculationFormRef={{ current: null }}
        titleTypeCalculate={mockTitleTypeCalculate}
        overflowText={{ btnTextCalculate: 'Enable' }}
      />,
    );

    const inputs = container.querySelectorAll(
      'input[type="text"][inputMode="numeric"]',
    );
    const staffInput = inputs[0] as HTMLInputElement;

    // Simulate pasting "abc123xyz"
    fireEvent.change(staffInput, { target: { value: 'abc123xyz' } });

    // Should call setCalculate with sanitized value
    expect(mockSetCalculate).toHaveBeenCalledWith({ staff: '123' });
  });

  it('should handle onChange with Arabic numerals in workspace input', () => {
    const { container } = render(
      <Calculater
        homeService={false}
        setHomeService={jest.fn()}
        onboarding={false}
        setOnboarding={jest.fn()}
        conciergeService={false}
        setConciergeService={jest.fn()}
        calculationFormRef={{ current: null }}
        titleTypeCalculate={mockTitleTypeCalculate}
        overflowText={{ btnTextCalculate: 'Enable' }}
      />,
    );

    const inputs = container.querySelectorAll(
      'input[type="text"][inputMode="numeric"]',
    );
    const workspaceInput = inputs[1] as HTMLInputElement;

    // Simulate entering Arabic numerals
    fireEvent.change(workspaceInput, { target: { value: '٥' } });

    // Should call setCalculate with empty string (Arabic numeral stripped)
    expect(mockSetCalculate).toHaveBeenCalledWith({ workspace: '' });
  });

  it('should prevent non-numeric key presses in country input', () => {
    const { container } = render(
      <Calculater
        homeService={false}
        setHomeService={jest.fn()}
        onboarding={false}
        setOnboarding={jest.fn()}
        conciergeService={false}
        setConciergeService={jest.fn()}
        calculationFormRef={{ current: null }}
        titleTypeCalculate={mockTitleTypeCalculate}
        overflowText={{ btnTextCalculate: 'Enable' }}
      />,
    );

    const inputs = container.querySelectorAll(
      'input[type="text"][inputMode="numeric"]',
    );
    const countryInput = inputs[2] as HTMLInputElement;

    // Try to type a letter
    const keyEvent = new KeyboardEvent('keydown', { key: 'a', bubbles: true });
    const preventDefaultSpy = jest.spyOn(keyEvent, 'preventDefault');

    countryInput.dispatchEvent(keyEvent);

    // Should have prevented the letter
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should allow numeric key presses', () => {
    const { container } = render(
      <Calculater
        homeService={false}
        setHomeService={jest.fn()}
        onboarding={false}
        setOnboarding={jest.fn()}
        conciergeService={false}
        setConciergeService={jest.fn()}
        calculationFormRef={{ current: null }}
        titleTypeCalculate={mockTitleTypeCalculate}
        overflowText={{ btnTextCalculate: 'Enable' }}
      />,
    );

    const inputs = container.querySelectorAll(
      'input[type="text"][inputMode="numeric"]',
    );
    const staffInput = inputs[0] as HTMLInputElement;

    // Try to type a number
    const keyEvent = new KeyboardEvent('keydown', { key: '5', bubbles: true });
    const preventDefaultSpy = jest.spyOn(keyEvent, 'preventDefault');

    staffInput.dispatchEvent(keyEvent);

    // Should NOT have prevented the number
    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });

  it('should have correct input attributes for mobile', () => {
    const { container } = render(
      <Calculater
        homeService={false}
        setHomeService={jest.fn()}
        onboarding={false}
        setOnboarding={jest.fn()}
        conciergeService={false}
        setConciergeService={jest.fn()}
        calculationFormRef={{ current: null }}
        titleTypeCalculate={mockTitleTypeCalculate}
        overflowText={{ btnTextCalculate: 'Enable' }}
      />,
    );

    const inputs = container.querySelectorAll('input[type="text"]');

    inputs.forEach((input) => {
      expect(input.getAttribute('inputMode')).toBe('numeric');
      expect(input.getAttribute('pattern')).toBe('[0-9]*');
      expect(input.getAttribute('type')).toBe('text');
    });
  });
});
