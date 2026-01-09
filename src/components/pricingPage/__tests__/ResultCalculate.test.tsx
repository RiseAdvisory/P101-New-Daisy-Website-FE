/**
 * Tests for ResultCalculate component - "We Recommend:" label rendering
 * Focuses on the new weRecommend label feature added to calculator results
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ResultCalculate, getSafeNavigationPath } from '../ResultCalculate';
import { useRouter } from 'next/navigation';

// Mock next/navigation
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: mockPush,
  })),
}));

// Mock Zustand stores
jest.mock('@/store/calculateResult', () => ({
  useCalculate: jest.fn(() => ({
    workspace: '1',
    country: '1',
    staff: '5',
    provideHome: false,
  })),
}));

jest.mock('@/store/storeCurrentPlan', () => ({
  useCurrentPlan: jest.fn(() => ({
    plan: 'Basic Plan',
    price: '$50',
    priceYear: '$42',
    tierLimits: {
      includedStaff: 5,
      includedWorkspaces: 1,
      includedCountries: 1,
    },
  })),
}));

describe('ResultCalculate - We Recommend Label', () => {
  const mockProps = {
    onCheckedYear: false,
    setCheckedYear: jest.fn(),
    calculationFormRef: { current: null },
    onScrollToGrid: jest.fn(),
    activePricingPage: 'business',
    dataPricing: {
      resetCalculation: {
        weRecommend: 'We Recommend:',
        tryPeriod: '14-day trial',
        details: 'View Details',
        includedInPlan: 'Included in Plan',
        staffLabel: 'Staff',
        workspaceLabel: 'Workspace',
        workspacesLabel: 'Workspaces',
        countryLabel: 'Country',
        countriesLabel: 'Countries',
        freeLabel: 'Free',
        additionalLabel: 'Additional',
        monthShort: 'mo',
        additionalResources: 'Additional Resources',
        additionalTotal: 'Additional Total',
        yourRequirements: 'Your Requirements',
        totalPrice: 'Total Price',
        basePlan: 'base',
        per: 'per',
        month: 'month',
        year: 'year',
        billed: 'billed monthly',
        textStart: 'Get Started',
      },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when dataPricing.resetCalculation.weRecommend is provided', () => {
    it('should render the "We Recommend:" label from dataPricing', () => {
      render(<ResultCalculate {...mockProps} />);

      const label = screen.getByText('We Recommend:');
      expect(label).toBeInTheDocument();
    });

    it('should render the label with correct styling classes', () => {
      render(<ResultCalculate {...mockProps} />);

      const label = screen.getByText('We Recommend:');
      expect(label).toHaveClass('ltr:font-montserrat');
      expect(label).toHaveClass('font-normal');
      expect(label).toHaveClass('text-[#455150]');
      expect(label).toHaveClass('text-[14px]');
      expect(label).toHaveClass('leading-5');
    });

    it('should render the plan name after the label', () => {
      render(<ResultCalculate {...mockProps} />);

      const label = screen.getByText('We Recommend:');
      const planName = screen.getByText('Basic Plan');

      expect(label).toBeInTheDocument();
      expect(planName).toBeInTheDocument();
    });

    it('should render label and plan name in the same parent container', () => {
      const { container } = render(<ResultCalculate {...mockProps} />);

      const label = screen.getByText('We Recommend:');
      const planName = screen.getByText('Basic Plan');

      // Both should be in the same flex container
      expect(label.parentElement).toBe(planName.parentElement);
    });
  });

  describe('when dataPricing.resetCalculation.weRecommend is NOT provided', () => {
    it('should render fallback text "We Recommend:"', () => {
      const propsWithoutLabel = {
        ...mockProps,
        dataPricing: {
          resetCalculation: {
            // weRecommend is missing
            tryPeriod: '14-day trial',
            details: 'View Details',
            includedInPlan: 'Included in Plan',
            staffLabel: 'Staff',
            workspaceLabel: 'Workspace',
            workspacesLabel: 'Workspaces',
            countryLabel: 'Country',
            countriesLabel: 'Countries',
            freeLabel: 'Free',
            additionalLabel: 'Additional',
            monthShort: 'mo',
            additionalResources: 'Additional Resources',
            additionalTotal: 'Additional Total',
            yourRequirements: 'Your Requirements',
            totalPrice: 'Total Price',
            basePlan: 'base',
            per: 'per',
            month: 'month',
            year: 'year',
            billed: 'billed monthly',
            textStart: 'Get Started',
          },
        },
      };

      render(<ResultCalculate {...propsWithoutLabel} />);

      const fallbackLabel = screen.getByText('We Recommend:');
      expect(fallbackLabel).toBeInTheDocument();
    });

    it('should render fallback when dataPricing is undefined', () => {
      const propsWithoutData = {
        ...mockProps,
        dataPricing: undefined,
      };

      render(<ResultCalculate {...propsWithoutData} />);

      const fallbackLabel = screen.getByText('We Recommend:');
      expect(fallbackLabel).toBeInTheDocument();
    });

    it('should render fallback when resetCalculation is undefined', () => {
      const propsWithoutResetCalc = {
        ...mockProps,
        dataPricing: {},
      };

      render(<ResultCalculate {...propsWithoutResetCalc} />);

      const fallbackLabel = screen.getByText('We Recommend:');
      expect(fallbackLabel).toBeInTheDocument();
    });
  });

  describe('responsive layout behavior', () => {
    it('should have flex-col class for mobile layout (vertical stack)', () => {
      const { container } = render(<ResultCalculate {...mockProps} />);

      const label = screen.getByText('We Recommend:');
      const flexContainer = label.parentElement;

      expect(flexContainer).toHaveClass('flex');
      expect(flexContainer).toHaveClass('flex-col');
    });

    it('should have md:flex-row class for desktop layout (horizontal)', () => {
      const { container } = render(<ResultCalculate {...mockProps} />);

      const label = screen.getByText('We Recommend:');
      const flexContainer = label.parentElement;

      expect(flexContainer).toHaveClass('md:flex-row');
      expect(flexContainer).toHaveClass('md:items-center');
    });
  });

  describe('RTL/LTR spacing behavior', () => {
    it('should have correct LTR spacing classes on the label', () => {
      render(<ResultCalculate {...mockProps} />);

      const label = screen.getByText('We Recommend:');
      expect(label).toHaveClass('ltr:md:mr-2'); // Left-to-right: margin-right
    });

    it('should have correct RTL spacing classes on the label', () => {
      render(<ResultCalculate {...mockProps} />);

      const label = screen.getByText('We Recommend:');
      expect(label).toHaveClass('rtl:md:ml-2'); // Right-to-left: margin-left
    });

    it('should have margin top on mobile (mt-1) for vertical spacing', () => {
      render(<ResultCalculate {...mockProps} />);

      const planName = screen.getByText('Basic Plan');
      expect(planName).toHaveClass('mt-1');
    });

    it('should remove margin top on desktop (md:mt-0)', () => {
      render(<ResultCalculate {...mockProps} />);

      const planName = screen.getByText('Basic Plan');
      expect(planName).toHaveClass('md:mt-0');
    });
  });

  describe('custom weRecommend text from Strapi', () => {
    it('should render custom Arabic text when provided', () => {
      const propsWithArabic = {
        ...mockProps,
        dataPricing: {
          ...mockProps.dataPricing,
          resetCalculation: {
            ...mockProps.dataPricing.resetCalculation,
            weRecommend: 'نوصي بـ:',
          },
        },
      };

      render(<ResultCalculate {...propsWithArabic} />);

      const arabicLabel = screen.getByText('نوصي بـ:');
      expect(arabicLabel).toBeInTheDocument();
    });

    it('should render any custom text provided from Strapi', () => {
      const propsWithCustom = {
        ...mockProps,
        dataPricing: {
          ...mockProps.dataPricing,
          resetCalculation: {
            ...mockProps.dataPricing.resetCalculation,
            weRecommend: 'Our Suggestion:',
          },
        },
      };

      render(<ResultCalculate {...propsWithCustom} />);

      const customLabel = screen.getByText('Our Suggestion:');
      expect(customLabel).toBeInTheDocument();
    });
  });

  describe('integration with existing calculator results', () => {
    it('should render the complete calculator result section with label', () => {
      render(<ResultCalculate {...mockProps} />);

      // Label should be present
      expect(screen.getByText('We Recommend:')).toBeInTheDocument();
      // Plan name should be present
      expect(screen.getByText('Basic Plan')).toBeInTheDocument();
      // Trial badge should be present
      expect(screen.getByText('14-day trial')).toBeInTheDocument();
      // Details button should be present
      expect(screen.getByText('View Details')).toBeInTheDocument();
    });

    it('should not affect other calculator result elements', () => {
      render(<ResultCalculate {...mockProps} />);

      // All existing elements should still render
      expect(screen.getByText('Included in Plan')).toBeInTheDocument();
      expect(screen.getByText('Your Requirements')).toBeInTheDocument();
      expect(screen.getByText('Total Price:')).toBeInTheDocument();
      expect(screen.getByText('Get Started')).toBeInTheDocument();
    });
  });

  describe('navigation to partner form', () => {
    beforeEach(() => {
      mockPush.mockClear();
    });

    it('should navigate to /business#partner-with-us when clicking Get Started button with business page', () => {
      render(<ResultCalculate {...mockProps} activePricingPage="business" />);

      const getStartedButton = screen.getByText('Get Started');
      fireEvent.click(getStartedButton);

      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/business#partner-with-us');
    });

    it('should navigate to /professional#partner-with-us when clicking Get Started button with professional page', () => {
      render(
        <ResultCalculate {...mockProps} activePricingPage="professional" />,
      );

      const getStartedButton = screen.getByText('Get Started');
      fireEvent.click(getStartedButton);

      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/professional#partner-with-us');
    });

    it('should fallback to /business#partner-with-us when activePricingPage is invalid', () => {
      render(<ResultCalculate {...mockProps} activePricingPage="invalid" />);

      const getStartedButton = screen.getByText('Get Started');
      fireEvent.click(getStartedButton);

      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/business#partner-with-us');
    });

    it('should fallback to /business#partner-with-us when activePricingPage is empty', () => {
      render(<ResultCalculate {...mockProps} activePricingPage="" />);

      const getStartedButton = screen.getByText('Get Started');
      fireEvent.click(getStartedButton);

      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/business#partner-with-us');
    });
  });
});

describe('getSafeNavigationPath helper', () => {
  it('should return /business#partner-with-us for business', () => {
    expect(getSafeNavigationPath('business')).toBe('/business#partner-with-us');
  });

  it('should return /professional#partner-with-us for professional', () => {
    expect(getSafeNavigationPath('professional')).toBe(
      '/professional#partner-with-us',
    );
  });

  it('should fallback to /business#partner-with-us for invalid values', () => {
    expect(getSafeNavigationPath('invalid')).toBe('/business#partner-with-us');
    expect(getSafeNavigationPath('')).toBe('/business#partner-with-us');
    expect(getSafeNavigationPath('customer')).toBe('/business#partner-with-us');
  });
});
