import { create } from 'zustand';

interface ICurrentPlan {
  plan: string;
  price: string;
  priceYear: string;
  setPricing: (price: string, priceYear: string) => void;
  changePlan: (store: string) => void;
}

export const useCurrentPlan = create<ICurrentPlan>((set) => ({
  plan: '',
  price: '',
  priceYear: '',
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
}));
