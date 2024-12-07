import { create } from 'zustand';

interface ILoadingStore {
  isLoading: boolean;
  array: any[];
  countryCodesArray: any[];
  handleLoadingStatus: (status: boolean) => void;
  handleArray: (tmp: any[]) => void;
  handlecountryCodesArray: (tmp: any[]) => void;
}

export const useLoadingStore = create<ILoadingStore>((set) => ({
  isLoading: false,
  array: [],
  countryCodesArray: [],
  handleLoadingStatus: (status: boolean) => {
    set(() => ({ isLoading: status }));
  },
  handleArray: (tmp: any[]) => {
    set(() => ({
      array: [...tmp],
    }));
  },
  handlecountryCodesArray: (tmp: any[]) => {
    set(() => ({
      countryCodesArray: [...tmp],
    }));
  },
}));
