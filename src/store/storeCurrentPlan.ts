import { create } from 'zustand';

interface ITierLimits {
  includedStaff: number;
  includedWorkspaces: number;
  includedCountries: number;
}

interface ICurrentPlan {
  plan: string;
  price: string;
  priceYear: string;
  tierLimits: ITierLimits;
  setPricing: (price: string, priceYear: string) => void;
  changePlan: (store: string) => void;
  setTierLimits: (limits: ITierLimits) => void;
}

export const useCurrentPlan = create<ICurrentPlan>((set) => ({
  plan: '',
  price: '',
  priceYear: '',
  tierLimits: {
    includedStaff: 1,
    includedWorkspaces: 1,
    includedCountries: 1,
  },
  changePlan: (choosePage: string) => {
    set(() => ({
      plan: choosePage,
    }));
  },
  setPricing: (price: string, priceYear: string) => {
    set(() => ({
      price,
      priceYear,
    }));
  },
  setTierLimits: (limits: ITierLimits) => {
    set(() => ({
      tierLimits: limits,
    }));
  },
}));
