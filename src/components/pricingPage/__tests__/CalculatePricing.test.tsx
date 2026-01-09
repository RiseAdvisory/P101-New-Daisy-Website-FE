/**
 * Tests for CalculatePricing component
 * Tests rendering and navigation to Contact page
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CalculatePricing } from '../CalculatePricing';

// Mock Zustand stores
jest.mock('@/store/calculateResult', () => ({
  useCalculate: jest.fn(() => ({
    assistantOnboard: false,
    available: false,
    workspace: '1',
    country: '1',
    provideHome: false,
    setDefaults: jest.fn(),
    staff: '5',
  })),
}));

jest.mock('@/store/storeCurrentPlan', () => ({
  useCurrentPlan: jest.fn(() => ({
    plan: 'Basic Plan',
    price: '$50',
    priceYear: '$42',
  })),
}));

describe('CalculatePricing', () => {
  const mockProps = {
    activePricingPage: 'business',
    dataPricing: {
      textCalculate: 'Calculate',
      textReset: 'Reset',
      textFreeTrial: 'Start Free Trial',
      business: {
        title: 'Calculate Your Plan',
        subtitle: 'Find the best plan for your needs',
        calculate: {
          firstInput: { title: 'Staff', description: 'Number of staff' },
          secondInput: {
            title: 'Workspaces',
            description: 'Number of workspaces',
          },
          thirdInput: {
            title: 'Countries',
            description: 'Number of countries',
          },
        },
      },
      resetCalculation: {
        weRecommend: 'We Recommend:',
        tryPeriod: '14-day trial',
        details: 'View Details',
        textStart: 'Get Started',
        includedInPlan: 'Included in Plan',
        staffLabel: 'Staff',
        workspacesLabel: 'Workspaces',
        countriesLabel: 'Countries',
        freeLabel: 'Free',
        yourRequirements: 'Your Requirements',
        totalPrice: 'Total Price',
        per: 'per',
        month: 'month',
        year: 'year',
        billed: 'billed monthly',
      },
    },
    onScrollToGrid: jest.fn(),
    setIsRecommended: jest.fn(),
  };

  it('should render the calculator title', () => {
    render(<CalculatePricing {...mockProps} />);
    expect(screen.getByText('Calculate Your Plan')).toBeInTheDocument();
  });

  it('should render the Calculate button', () => {
    render(<CalculatePricing {...mockProps} />);
    expect(screen.getAllByText('Calculate').length).toBeGreaterThan(0);
  });

  it('should show free trial button after clicking Calculate', () => {
    render(<CalculatePricing {...mockProps} />);

    // Click calculate to show results
    const calculateButtons = screen.getAllByText('Calculate');
    fireEvent.click(calculateButtons[0]);

    // Free trial button should now be visible
    expect(screen.getByText('Start Free Trial')).toBeInTheDocument();
  });

  describe('navigation to Contact page', () => {
    it('should render Start Free Trial button after calculation', () => {
      render(<CalculatePricing {...mockProps} />);

      // Click calculate to show results
      const calculateButtons = screen.getAllByText('Calculate');
      fireEvent.click(calculateButtons[0]);

      const freeTrialButton = screen.getByText('Start Free Trial');
      expect(freeTrialButton).toBeInTheDocument();
      expect(freeTrialButton.tagName).toBe('BUTTON');
    });

    it('should have onClick handler on Start Free Trial button', () => {
      render(<CalculatePricing {...mockProps} />);

      // Click calculate to show results
      const calculateButtons = screen.getAllByText('Calculate');
      fireEvent.click(calculateButtons[0]);

      // Click the free trial button - should not throw
      const freeTrialButton = screen.getByText('Start Free Trial');
      expect(() => fireEvent.click(freeTrialButton)).not.toThrow();
    });
  });
});
