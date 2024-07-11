import { create } from 'zustand';

interface IChoosePath {
  patnName: string;
  choosePatnName: (newLang: string) => void;
}

export const useChoosePath = create<IChoosePath>((set) => ({
  patnName: '',
  choosePatnName: (chooseTabs: string) => {
    set(() => ({
      patnName: chooseTabs,
    }));
  },
}));
