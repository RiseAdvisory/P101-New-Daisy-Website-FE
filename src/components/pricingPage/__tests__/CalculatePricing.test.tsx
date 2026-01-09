/**
 * Tests for CalculatePricing component - navigation functionality
 * Focuses on the 'Start free trial' button navigation to partner form
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CalculatePricing } from '../CalculatePricing';

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

describe('CalculatePricing - Navigation', () => {
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
          secondInput: { title: 'Workspaces', description: 'Number of workspaces' },
          thirdInput: { title: 'Countries', description: 'Number of countries' },
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

  beforeEach(() => {
    mockPush.mockClear();
  });

  describe('mobile free trial button navigation', () => {
    it('should navigate to /business#partner-with-us when clicking free trial button with business page', () => {
      render(<CalculatePricing {...mockProps} activePricingPage="business" />);

      // First, click calculate to show the results (which shows the free trial button)
      // There are two calculate buttons (desktop and mobile), get all and click the first
      const calculateButtons = screen.getAllByText('Calculate');
      fireEvent.click(calculateButtons[0]);

      // Now find and click the free trial button
      const freeTrialButton = screen.getByText('Start Free Trial');
      fireEvent.click(freeTrialButton);

      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/business#partner-with-us');
    });

    it('should navigate to /professional#partner-with-us when clicking free trial button with professional page', () => {
      render(
        <CalculatePricing {...mockProps} activePricingPage="professional" />,
      );

      // First, click calculate to show the results
      const calculateButtons = screen.getAllByText('Calculate');
      fireEvent.click(calculateButtons[0]);

      // Now find and click the free trial button
      const freeTrialButton = screen.getByText('Start Free Trial');
      fireEvent.click(freeTrialButton);

      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/professional#partner-with-us');
    });

    it('should fallback to /business#partner-with-us when activePricingPage is invalid', () => {
      render(<CalculatePricing {...mockProps} activePricingPage="invalid" />);

      // First, click calculate to show the results
      const calculateButtons = screen.getAllByText('Calculate');
      fireEvent.click(calculateButtons[0]);

      // Now find and click the free trial button
      const freeTrialButton = screen.getByText('Start Free Trial');
      fireEvent.click(freeTrialButton);

      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/business#partner-with-us');
    });
  });
});
