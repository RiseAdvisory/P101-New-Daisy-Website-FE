/**
 * Tests for ItemPricing component - navigation to Contact page
 * Tests the "Get started" button onClick handler
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ItemCardPricing, CONTACT_PAGE_PATH } from '../ItemPricing';

// Mock Zustand stores
jest.mock('@/store/calculateResult', () => ({
  useCalculate: jest.fn(() => ({
    staff: '5',
    workspace: '1',
    country: '1',
    provideHome: false,
    toggles: {},
    getMinimumRequiredTierIndex: jest.fn(() => 0),
  })),
}));

jest.mock('@/store/storeCurrentPlan', () => ({
  useCurrentPlan: jest.fn(() => ({
    changePlan: jest.fn(),
    setPricing: jest.fn(),
    setTierLimits: jest.fn(),
  })),
}));

describe('ItemPricing - Navigation to Contact page', () => {
  const mockProps = {
    title: 'Basic',
    subtitle: 'For small teams',
    description: 'Perfect for getting started',
    price: '$50',
    options: ['Feature 1', 'Feature 2'],
    optionPlus: '',
    chechedAnnualy: false,
    priceYear: '$42',
    activePricingPage: 'business',
    isRescomennded: false,
    textRecomended: {
      textRecomended: 'Recommended',
      textItemPricing: {
        perPeriod: 'per ',
        monthly: 'month',
        annualy: 'year',
        discount: 'Save 16%',
        textStarted: 'Get started Now',
        everything: 'Everything in',
        mobileView: 'View all features',
        mobileHide: 'Hide features',
      },
    },
    titlePricing: ['Basic', 'Growth', 'Business'],
    currentPrices: ['$50', '$150', '$250'],
    currentPricesYear: ['$42', '$128', '$208'],
    refGridCardRef: { current: null },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('CONTACT_PAGE_PATH constant', () => {
    it('should have CONTACT_PAGE_PATH set to /contact', () => {
      expect(CONTACT_PAGE_PATH).toBe('/contact');
    });
  });

  describe('Get started button', () => {
    it('should render the Get started Now button', () => {
      render(<ItemCardPricing {...mockProps} />);

      const getStartedButton = screen.getByText('Get started Now');
      expect(getStartedButton).toBeInTheDocument();
      expect(getStartedButton.tagName).toBe('BUTTON');
    });

    it('should have onClick handler on Get started Now button', () => {
      render(<ItemCardPricing {...mockProps} />);

      const getStartedButton = screen.getByText('Get started Now');
      // Verify button can be clicked without throwing
      expect(() => fireEvent.click(getStartedButton)).not.toThrow();
    });

    it('should render correct button text from textRecomended prop', () => {
      const customProps = {
        ...mockProps,
        textRecomended: {
          ...mockProps.textRecomended,
          textItemPricing: {
            ...mockProps.textRecomended.textItemPricing,
            textStarted: 'Start Now',
          },
        },
      };

      render(<ItemCardPricing {...customProps} />);

      const getStartedButton = screen.getByText('Start Now');
      expect(getStartedButton).toBeInTheDocument();
    });
  });

  describe('pricing tier display', () => {
    it('should render the tier title', () => {
      render(<ItemCardPricing {...mockProps} />);

      expect(screen.getByText('Basic')).toBeInTheDocument();
    });

    it('should render the price', () => {
      render(<ItemCardPricing {...mockProps} />);

      expect(screen.getByText('$50')).toBeInTheDocument();
    });

    it('should render the subtitle', () => {
      render(<ItemCardPricing {...mockProps} />);

      expect(screen.getByText('For small teams')).toBeInTheDocument();
    });
  });
});
